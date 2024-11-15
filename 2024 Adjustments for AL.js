/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me (MPMB in particular, but others as noted). It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). 

This script may work fine on older versions of the sheet, but I copied the code from the newest version so I can't guarantee it. I also didn't define the sources because this is designed to be added on top of Poke's 2024 script and the All WotC Published script, not as a standalone.
*/

var iFileName = "AL Adjustments for 2024 Rules.js";
RequiredSheetVersion("13.2.0");
 
/*This file currently does the following: 
-Turns the Talisman Pact from Tasha's into an invocation so it can be selected
-Adds all nonreprinted invocations (from PHB and other sources) to the sheet with updated prereqs
-Adds the Optional Class Features from Tasha's that still function with the new classes and weren't replaced/already built into 2024
-Adds the Superior Technique fighting style from Tasha's
-Adds the 2 nonreprinted Battlemaster maneuvers from Tasha's.*/


// Add Warlock Invocations (Xanathar's)
AddWarlockInvocation("Aspect of the Moon (prereq: Pact of the Tome)", {
	name : "Aspect of the Moon",
	description : "\n   " + "I don't need sleep nor can be forced to by any means; I can rest while doing light activity",
	source : [["X", 56], ["UA:RCO", 5]],
	submenu : "[Improves Pact of the Tome]",
	prereqeval : function(v) { return GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the tome") !== -1; },
	savetxt : { text : ["Nothing can force me to sleep"] }
});
AddWarlockInvocation("Cloak of Flies (prereq: level 5 warlock)", {
	name : "Cloak of Flies",
	description : desc([
		"As a bonus action, I can surround myself with a 5-ft radius magical aura of buzzing flies",
		"It lasts until I'm incapacitated or dismiss it as a bonus action; Total cover block the aura",
		"The aura grants me adv. on Cha (Intimidation), but disadv. on all other Cha checks",
		"Creatures starting their turn in the aura take my Cha mod (min 0) in poison damage"
	]),
	source : [["X", 56], ["UA:RCO", 5]],
	submenu : "[Warlock Level 5+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5; },
	recovery : "short rest",
	usages : 1,
	action : [["bonus action", " (start/stop)"]]
});
AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
	name : "Ghostly Gaze",
	description : desc([
		"As an action, I can gain darkvision, and the ability to see through solid objects, out to 30 ft",
		"Objects appear ghostly to me; This lasts up to 1 minute, while I'm concentrating on this"
	]),
	source : [["X", 56]],
	submenu : "[Warlock Level 7+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 7; },
	recovery : "short rest",
	usages : 1,
	action : [["action", ""]]
});
AddWarlockInvocation("Gift of the Ever-Living Ones (prereq: Pact of the Chain)", {
	name : "Gift of the Ever-Living Ones",
	description : "\n   " + "When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll",
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[Improves Pact of the Chain]",
	prereqeval : function(v) { return GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the chain") !== -1; },
});
AddWarlockInvocation("Grasp of Hadar (prereq: Eldritch Blast cantrip)", {
	name : "Grasp of Hadar",
	description : desc("Once per turn when my Eldritch Blast hits a creature, I can move it 10 ft closer to me"),
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[Improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast; },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; Target moved 10 ft to me';
			},
			"When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."
		]
	}
});
AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"I can use any pact weapon I create as my spellcasting focus for warlock spells",
		"Any pact weapon I create is a +1 magic weapon, if it isn't already a +1 magic weapon",
		"I can now also conjure a shortbow, longbow, or light or heavy crossbow as my pact weapon"
	]),
	source : [["X", 57]],
	submenu : "[Improves Pact of the Blade]",
	prereqeval : function(v) { return GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the blade") !== -1; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(v.baseWeaponName) && (/\bpact\b/i).test(v.WeaponTextName)) {
					v.pactWeapon = true;
				}
				// Test if this is a pact weapon, has no + bonus from somewhere else, and doesn't already have a improved pact weapon bonus
				if (v.pactWeapon && !output.magic) {
					var bContinue = true;
					// Now test if this isn't a weaponOptions addition with a static + bonus set to the modifier fields
					if (v.theWea && v.theWea.isMagicWeapon && v.theWea.modifiers) {
						// Test the first two modifiers to see if both offer a +1 or more. Returns `true` if one contains no numbers or is less than the improved pact weapon bonus
						var bContinue = v.theWea.modifiers.slice(0, 2).some(function (n) {
							if (!n || !/\d/.test(n)) {
								var nmbr = 0;
							} else if (isNaN(n)) {
								var nmbr = n.match(/(^|\+|-)\d+\b/g);
								nmbr = !nmbr ? 0 : nmbr.reduce(function(a, b) {return Number(a) + Number(b)});
							} else {
								var nmbr = Number(n);
							}
							return nmbr < 1;
						});
					}
					// if the continue boolean wasn't set to false, we can proceed
					if (bContinue) {
						v.pactMag = 1;
						output.magic = 1;
					}
				};
			},
			"If I include the word 'Pact' in a the name of a melee weapon, shortbow, longbow, light crossbow, or heavy crossbow, it will be treated as my Pact Weapon.\n \u2022 If my Pact Weapon doesn't already include a magical bonus in its name and is not a magic weapon with at least a +1 bonus, the calculation will add +1 to its To Hit and Damage.",
			290
		],
		atkAdd : [
			function (fields, v) {
				if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(v.baseWeaponName) && (/\bpact\b/i).test(v.WeaponTextName)) {
					v.pactWeapon = true;
				};
			}, "", 90]
	}
});
AddWarlockInvocation("Lance of Lethargy (prereq: Eldritch Blast cantrip)", {
	name : "Lance of Lethargy",
	description : desc([
		"Once per turn when my Eldritch Blast hits a creature, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : [["X", 57]],
	submenu : "[Improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast; },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; 1 target -10 ft speed';
			},
			"Once on each of my turns when I hit a creature with my Eldritch Blast cantrip, I can reduce its speed by 10 ft until the end of my next turn."
		]
	}
});
AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock, Hex spell or warlock feature that curses)", {
	name : "Maddening Hex",
	description : desc([
		"As a bonus action, I cause pain around a target hexed by me that I can see within 30 ft",
		"It and any of my choice I can see in 5 ft of it take my Cha mod (min 1) in psychic damage",
		"The Hex spell and all of my warlock features that curse are considered a hex for this"
	]),
	source : [["X", 57]],
	submenu : "[Improves Hex spell or warlock feature that curses]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock.subclass)); }, //last part not working due to changes in warlocks becoming a Prepared caster
	action : [["bonus action", ""]]
});
AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock, Hex spell or warlock feature that curses)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport to a target hexed by me that I can see within 30 ft",
		"I teleport up to 30 ft to an unoccupied space that I can see within 5 ft of the target"
	]),
	source : [["X", 57]],
	submenu : "[Improves Hex spell or warlock feature that curses]",
	prereqeval : function(v) { return classes.known.warlock.level >= 7 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock.subclass)); },
	action : [["bonus action", ""]]
});
AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
	name : "Shroud of Shadow",
	description : "\n   " + "I can cast Invisibility at will, without using spell slots (PHB 254)",
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[Warlock Level 15+]",
	spellcastingBonus : [{
		name : "Shroud of Shadow",
		spells : ["invisibility"],
		selection : ["invisibility"],
		firstCol : 'atwill'
	}],
	prereqeval : function(v) { return classes.known.warlock.level >= 15; },
	spellChanges : {
		"invisibility" : {
			description : "1 crea invisible; attacking/casting makes the crea visible; anything worn/carried also invisible",
			changes : "With the Shroud of Shadow invocation I can cast Invisibility at will, but when I do so I am unable to cast it using a higher level spell slot."
		}
	}
});
AddWarlockInvocation("Tomb of Levistus (prereq: level 5 warlock)", {
	name : "Tomb of Levistus",
	description : desc([
		"As a reaction when I take damage, I can entomb myself in ice until the end of my turn",
		"During, I get 10 temp. HP per warlock level, which I use to absorb the triggering damage",
		"After, till the ice is gone, I also get vulnerability to fire, 0 speed, and am incapacitated"
	]),
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[Warlock Level 5+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5; },
	recovery : "short rest",
	usages : 1,
	action : [["reaction", ""]],
	additional : levels.map( function(n) { return (n * 10) + " temp HP"; })
});
AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
	name : "Trickster's Escape",
	description : "\n   " + "Once per long rest, I can cast Freedom of Movement on myself without using a spell slot",
	source : [["X", 57], ["UA:RCO", 7]],
	submenu : "[Warlock Level 7+]",
	spellcastingBonus : [{
		name : "Trickster's Escape",
		spells : ["freedom of movement"],
		selection : ["freedom of movement"],
		firstCol : 'oncelr'
	}],
	prereqeval : function(v) { return classes.known.warlock.level >= 7; },
	spellChanges : {
		"freedom of movement" : {
			range : "Self",
			description : "Magic can't reduce my speed, paralyze or restrain me; I can use 5 ft to escape nonmagical restrains",
			changes : "With the Trickster's Escape invocation I can cast Freedom of Movement, but only on myself."
		}
	}
});



// Eldritch Invocation options (Tasha's)
AddWarlockInvocation("Bond of the Talisman (prereq: level 12 warlock, Pact of the Talisman)", {
	name : "Bond of the Talisman",
	source : [["T", 70]],
	submenu : "[Improves Pact of the Talisman]",
	description : desc([
		"As an action, I can teleport to the unoccupied space closest to the wearer of my talisman",
		"The talisman's wearer can do the same to teleport to me; Only works if both on same plane"
	]),
    prereqeval: function (v) {
          return classes.known.warlock.level >= 12 && GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the talisman") !== -1;
        },
	action : [["action", ""]],
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery : "long rest"
});
AddWarlockInvocation("Far Scribe (prereq: level 5 warlock, Pact of the Tome)", {
	name : "Far Scribe",
	source : [["T", 71]],
	submenu : "[Improves Pact of the Tome]",
	description : desc([
		"My book of shadows has a new page; As an action, a creature can write its name on it",
		"This page can hold my Proficiency Bonus in creature names; I can remove one as an action",
		"I can cast Sending without a spell slot or material components, targeting one on the page",
		"Instead of saying the message, I write it on the page and any reply appears there as well",
		"This writing disappears after 1 minute; The target still hears the message in their mind"
	]),
        prereqeval: function (v) {
          return classes.known.warlock.level >= 5 && GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the tome") !== -1;
        },
	action : [["action", " (erase name)"]],
	spellcastingBonus : [{
		name : "Far Scribe",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : "atwill"
	}],
	spellChanges : {
		"sending" : {
			components : "V,S",
			compMaterial : "",
			description : "Send 25 word message to crea named in book of shadows; it recognizes me and can respond 25 words",
			changes : "By using Far Scribe, I can cast Sending without using a spell slot or material components, but only to target one of the creatures that wrote their name in my book of shadows. Instead of speaking the message, I write it in my book and any response appears there as well, lasting for 1 minute. The target still hears the message in their mind."
		}
	}
});
AddWarlockInvocation("Protection of the Talisman (prereq: level 7 warlock, Pact of the Talisman)", {
	name : "Protection of the Talisman",
	source : [["T", 71]],
	submenu : "[Improves Pact of the Talisman]",
	description : "\n   When the wearer of my talisman fails a saving throw, they can add +1d4 to the roll",
    prereqeval: function (v) {
          return classes.known.warlock.level >= 7 && GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the talisman") !== -1;
        },
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery : "long rest"
});
AddWarlockInvocation("Rebuke of the Talisman (prereq: Pact of the Talisman)", {
	name : "Rebuke of the Talisman",
	source : [["T", 71]],
	submenu : "[Improves Pact of the Talisman]",
	description : desc([
		"As a reaction when the wearer of my talisman is hit, I deal damage and push the attacker",
		"To be able to do this, I have to see the attacker and it has to be within 30 ft of me",
		"I deal it my Proficiency Bonus in psychic damage and push it 10 ft away from the talisman"
	]),
    prereqeval: function (v) {
          return GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the talisman") !== -1;
        },
	action : [["reaction", ""]]
});
AddWarlockInvocation("Undying Servitude (prereq: level 5 warlock)", {
	name : "Undying Servitude",
	description : "\n   Once per long rest, I can cast Animate Dead without using a spell slot",
	source : [["T", 71]],
	submenu : "[Warlock Level 5+]",
	usages : 1,
	additional : "no spell slot",
	recovery : "long rest",
	spellcastingBonus : [{
		name : "Undying Servitude",
		spells : ["animate dead"],
		selection : ["animate dead"],
		firstCol : "oncelr"
	}],
	prereqeval : function(v) { return classes.known.warlock.level >= 5; }
});

//Pact of the Talisman as an invocation (per AL guidance)
 AddWarlockInvocation("Pact of the Talisman", {
		name : "Pact of the Talisman",
        submenu: "[Pact Boons]",
		source : [["T", 70]],
	description : desc([
		"When the wearer of this amulet fails an ability check, they can add +1d4 to the roll",
		"I can give the talisman to others to use; The talisman turns to ash when I die",
		"If I lose my talisman, I can perform a 1-hour ceremony to gain a replacement",
		"This ceremony destroys the previous amulet and can be done during a short or long rest"
	]),
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery : "long rest"
});


//Unreprinted PHB Invocations
 AddWarlockInvocation("Beast Speech", {
					name : "Beast Speech",
					description : desc("I can cast Speak with Animals at will, without using a spell slots"),
					source : [["SRD", 48], ["P", 110]],
					spellcastingBonus : [{
						name : "Beast Speech",
						spells : ["speak with animals"],
						selection : ["speak with animals"],
						firstCol : "atwill"
					}]
});
 AddWarlockInvocation("Beguiling Influence", {
					name : "Beguiling Influence",
					description : desc("I gain proficiencies with the Deception and Persuasion skills"),
					source : [["SRD", 48], ["P", 110]],
					skills : ["Deception", "Persuasion"]
});
 AddWarlockInvocation("Bewitching Whispers (prereq: level 7 warlock)", {
					name : "Bewitching Whispers",
					description : desc("Once per long rest, I can cast Compulsion using a warlock spell slot"),
					source : [["SRD", 48], ["P", 110]],
					submenu : "[Warlock Level 7+]",
					usages : 1,
					recovery : "long rest",
					spellcastingBonus : [{
						name : "Bewitching Whispers",
						spells : ["compulsion"],
						selection : ["compulsion"],
						firstCol : "oncelr"
					}],
					prereqeval : function(v) { return classes.known.warlock.level >= 7; }
});
 AddWarlockInvocation("Book of Ancient Secrets (prereq: pact of the tome)", {
					name : "Book of Ancient Secrets",
					description : desc([
						"I can add any two 1st-level spells that have the ritual tag to my Book of Shadows",
						"If I come across spells with the ritual tag, I can transcribe them into my book, as well",
						"I can cast any of these spells in my Book of Shadows as rituals, but not as normal spells",
						"I can cast my known warlock spells as rituals if they have the ritual tag"
					]),
					source : [["SRD", 48], ["P", 110]],
					submenu : "[Improves Pact of the Tome]",
					eval : function() {
						CurrentSpells['warlock-book of ancient secrets'] = {
							name : 'Book of Ancient Secrets',
							ability : 'warlock',
							list : {class : 'any', ritual : true},
							known : {spells : 'book'},
							refType : "feat"
						};
						if (CurrentSpells['book of ancient secrets'] && CurrentSpells['book of ancient secrets'].selectSp) {
							// v12.999 style is present, so transfer chosen spells over and remove it
							CurrentSpells['warlock-book of ancient secrets'].offsetBo = CurrentSpells['book of ancient secrets'].offsetBo;
							CurrentSpells['warlock-book of ancient secrets'].selectBo = CurrentSpells['book of ancient secrets'].selectBo;
							CurrentSpells['warlock-book of ancient secrets'].selectSp = CurrentSpells['book of ancient secrets'].selectSp;
							delete CurrentSpells['book of ancient secrets'];
						}
						SetStringifieds('spells'); CurrentUpdates.types.push('spells');
					},
					removeeval : function() {
						delete CurrentSpells['warlock-book of ancient secrets'];
						SetStringifieds('spells'); CurrentUpdates.types.push('spells');
					},
        prereqeval: function (v) {
          return GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the tome") !== -1;
        },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spName == "book of ancient secrets") {
									spellObj.firstCol = "(R)";
									if (!(/.*(\d+ ?h\b|special|see b).*/i).test(spellObj.time)) {
										var numMinutes = Number(spellObj.time.replace(/(\d+) ?min.*/, "$1"));
										if (isNaN(numMinutes)) numMinutes = 0;
										spellObj.time = (numMinutes + 10) + " min";
									}
									return true;
								};
							},
							"By the Book of Ancient Secrets invocation, I can cast ritual spells from my Book of Shadows. Ritual spell always have a casting time of 10 minutes or more."
						]
					}
});
 AddWarlockInvocation("Chains of Carceri (prereq: level 15 warlock, Pact of the Chain)", {
					name : "Chains of Carceri",
					description : desc([
						"I can cast Hold Monster at will if the target is a celestial, fiend, or elemental",
						"This uses no spell slots/material comp.; I can only target an individual once per long rest"
					]),
					source : [["SRD", 49], ["P", 110]],
					submenu : "[Improves Pact of the Chain]",
					spellcastingBonus : [{
						name : "Chains of Carceri",
						spells : ["hold monster"],
						selection : ["hold monster"],
						firstCol : "atwill"
					}],
				prereqeval: function (v) {
				return classes.known.warlock.level >= 15 && GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the chain") !== -1;
				},
					spellChanges : {
						"speak with animals" : {
							components : "V,S",
							compMaterial : "",
							description : "1 celestial, fiend, or elemental, save or paralyzed; extra save at end of each turn",
							changes : "With the Chains of Carceri invocation I can cast Hold Monster without a material component, but only on a celestial, fiend, or elemental."
						}
					}
});
 AddWarlockInvocation("Dreadful Word (prereq: level 7 warlock)", {
					name : "Dreadful Word",
					description : desc("Once per long rest, I can cast Confusion using a warlock spell slot"),
					source : [["SRD", 49], ["P", 110]],
					submenu : "[Warlock Level 7+]",
					usages : 1,
					recovery : "long rest",
					spellcastingBonus : [{
						name : "Dreadful Word",
						spells : ["confusion"],
						selection : ["confusion"],
						firstCol : "oncelr"
					}],
					prereqeval : function(v) { return classes.known.warlock.level >= 7; }
});
 AddWarlockInvocation("Eldritch Sight", {
					name : "Eldritch Sight",
					description : desc("I can cast Detect Magic at will, without using a spell slot"),
					source : [["SRD", 49], ["P", 110]],
					spellcastingBonus : [{
						name : "Eldritch Sight",
						spells : ["detect magic"],
						selection : ["detect magic"],
						firstCol : "atwill"
					}]
});
 AddWarlockInvocation("Eyes of the Rune Keeper", {
					name : "Eyes of the Rune Keeper",
					description : desc("I can read all writing"),
					source : [["SRD", 49], ["P", 111]]
});
 AddWarlockInvocation("Minions of Chaos (prereq: level 9 warlock)", {
					name : "Minions of Chaos",
					description : desc("Once per long rest, I can cast Conjure Elemental using a warlock spell slot"),
					source : [["SRD", 49], ["P", 111]],
					submenu : "[Warlock Level 9+]",
					usages : 1,
					recovery : "long rest",
					spellcastingBonus : [{
						name : "Minions of Chaos",
						spells : ["conjure elemental"],
						selection : ["conjure elemental"],
						firstCol : "oncelr"
					}],
					prereqeval : function(v) { return classes.known.warlock.level >= 9; }
});
 AddWarlockInvocation("Mire the Mind (prereq: level 5 warlock)", {
					name : "Mire the Mind",
					description : desc("Once per long rest, I can cast Slow using a warlock spell slot"),
					source : [["SRD", 49], ["P", 111]],
					submenu : "[Warlock Level 5+]",
					usages : 1,
					recovery : "long rest",
					spellcastingBonus : [{
						name : "Mire the Mind",
						spells : ["slow"],
						selection : ["slow"],
						firstCol : "oncelr"
					}],
					prereqeval : function(v) { return classes.known.warlock.level >= 5; }
});
 AddWarlockInvocation("Sculptor of Flesh (prereq: level 7 warlock)", {
					name : "Sculptor of Flesh",
					description : desc("Once per long rest, I can cast Polymorph using a warlock spell slot"),
					source : [["SRD", 50], ["P", 111]],
					submenu : "[Warlock Level 7+]",
					usages : 1,
					recovery : "long rest",
					spellcastingBonus : [{
						name : "Sculptor of Flesh",
						spells : ["polymorph"],
						selection : ["polymorph"],
						firstCol : "oncelr"
					}],
					prereqeval : function(v) { return classes.known.warlock.level >= 7; }
});
 AddWarlockInvocation("Sign of Ill Omen (prereq: level 5 warlock)", {
					name : "Sign of Ill Omen",
					description : desc("Once per long rest, I can cast Bestow Curse using a warlock spell slot"),
					source : [["SRD", 50], ["P", 111]],
					submenu : "[Warlock Level 5+]",
					usages : 1,
					recovery : "long rest",
					spellcastingBonus : [{
						name : "Sign of Ill Omen",
						spells : ["bestow curse"],
						selection : ["bestow curse"],
						firstCol : "oncelr"
					}],
					prereqeval : function(v) { return classes.known.warlock.level >= 5; }
});
 AddWarlockInvocation("Thief of Five Fates", {
					name : "Thief of Five Fates",
					description : desc("Once per long rest, I can cast Bane using a warlock spell slot"),
					source : [["SRD", 50], ["P", 111]],
					usages : 1,
					recovery : "long rest",
					spellcastingBonus : [{
						name : "Thief of Five Fates",
						spells : ["bane"],
						selection : ["bane"],
						firstCol : "oncelr"
					}]
});
 AddWarlockInvocation("Voice of the Chain Master (prereq: pact of the chain)", {
					name : "Voice of the Chain Master",
					description : desc([
						"While on the same plane as my familiar, I can communicate telepathically with it",
						"Also, I can perceive through its senses and have it speak with my voice while doing so"
					]),
					source : [["SRD", 50], ["P", 111]],
					submenu : "[Improves Pact of the Chain]",
					prereqeval: function (v) {
				return GetFeatureChoice("classes", "warlock", "eldritch invocations", true).indexOf("pact of the chain") !== -1;
				},
});


//Optional Class Features - Ones that weren't reprinted and don't replace removed features, I'm assuming can still be taken
FeatsList["fighting style feat: superior technique"] = {
		name : "Superior Technique",
		source : [["T", 41], ["UA:CFV", 5]],
		description : " [1 maneuver; d6, 1\xD7 per short rest]" + desc([
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice",
			'Use the "Choose Feature" button above to add a Maneuver to the third page'
		]),
		bonusClassExtrachoices : [{
			"class" : "fighter",
			"subclass" : "fighter-battle master",
			"feature" : "subclassfeature3",
			"bonus" : 1
		}],
		extraLimitedFeatures : [{
			name : "Combat Superiority",
			usages : 1,
			additional : 'd6',
			recovery : "short rest",
			addToExisting : true
		}]
};
	// New Maneuver options
if (ClassSubList["fighter-battle master"]) {
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3"], true, "Grappling Strike", {
		name : "Grappling Strike",
		source : [["T", 42]],
		description : desc([
			"Immediately after hitting with a melee attack, I can use a bonus action to try to grapple",
			"I add the superiority die to the Str (Athletics) check; I can only do this on my own turn"
		]),
		action : [["bonus action", " (after melee hit)"]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3"], true, "Quick Toss", {
		name : "Quick Toss",
		source : [["T", 42]],
		description : desc([
			"As a bonus action, I can use a superiority die to do a ranged attack with a thrown weapon",
			"I can draw a thrown weapon as part of making this attack; I add the die to the damage"
		]),
		action : [["bonus action", ""]]
	});
}



//Bard Optional Class features
AddFeatureChoice(ClassList.bard.features["jack of all trades"], true, "Magical Inspiration", {
	name : "Magical Inspiration",
	extraname : "Optional Bard 2",
	source : [["T", 27]],
	description : desc([
		"A bardic inspiration die recipient can also use it when casting a damaging or healing spell",
		"They can expend the die and add it to healing or damage dealt to one target of the spell"
	])
}, "Optional 2nd-level bard features");
AddFeatureChoice(ClassList.bard.features["jack of all trades"], true, "Bardic Versatility", {
	name : "Bardic Versatility",
	extraname : "Optional Bard 4",
	source : [["T", 28]],
	description : " [ASI = Ability Score Improvement]" + desc([
		"Whenever I gain an ASI from the bard class, I can change one cantrip or expertise choice",
		"I can select another cantrip from the bard spell list or another skill I'm proficient with"
	]),
	prereqeval : function (v) { return classes.known.bard.level >= 4 ? true : "skip"; }
}, "Optional 4th-level bard features");


//Cleric Optional Class Features
AddFeatureChoice(ClassList.cleric.features["channel divinity"], true, "Harness Divine Power", {
	name : "Channel Divinity: Harness Divine Power",
	extraname : "Optional Cleric 2",
	source : [["T", 30]],
	description : desc([
		"As a bonus action, I can expend a use of my channel divinity to regain one used spell slot",
		"The level of this spell slot can be no more than half my Proficiency Bonus (rounded up)",
		"I can only do this so many times per long rest, even if I have uses of channel divinity left"
	]),
	action : [["bonus action", ""]],
	usages : levels.map(function(n) {
		return n < 3 ? "" : n < 6 ? 1 : n < 18 ? 2 : 3;
	}),
	recovery : "long rest"
}, "Optional 2nd-level cleric features");
AddFeatureChoice(ClassList.cleric.features["channel divinity"], true, "Cantrip Versatility", {
	name : "Cantrip Versatility",
	extraname : "Optional Cleric 4",
	source : [["T", 31]],
	description : " [ASI = Ability Score Improvement]\n   Whenever I gain an ASI from the cleric class, I can change one cleric cantrip for another",
	prereqeval : function (v) { return classes.known.cleric.level >= 4 ? true : "skip"; }
}, "Optional 4th-level cleric features");


// Druid Optional Class Features
AddFeatureChoice(ClassList.druid.features.druidic, true, "Cantrip Versatility", {
	name : "Cantrip Versatility",
	extraname : "Optional Druid 4",
	source : [["T", 35]],
	description : " [ASI = Ability Score Improvement]\n   Whenever I gain an ASI from the druid class, I can change one druid cantrip for another",
	prereqeval : function (v) { return classes.known.druid.level >= 4 ? true : "skip"; }
}, "Optional 4th-level druid features");


// Monk Optional Class Features
AddFeatureChoice(ClassList.monk.features["monk's focus"], true, "Dedicated Weapon", {
	name : "Dedicated Weapon",
	extraname : "Optional Monk 2",
	source : [["T", 48]],
	description : desc([
		"When I finish a short or long rest, I can focus and touch one simple or martial weapon",
		"From then on, until I use this feature again, this weapon counts as a monk weapon for me",
		"I have to be proficient with the weapon and it can't have the heavy or special property"
	]),
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.monkweapon && !v.theWea.special && classes.known.monk && classes.known.monk.level && (/dedicated/i).test(v.WeaponTextName) && fields.Proficiency && (/simple|martial/i).test(v.theWea.type) && !(/\b(heavy|special)\b/i).test(fields.Description)) {
					v.theWea.monkweapon = true;
				};
			},
			'If I include the word "Dedicated" in the name of a simple or martial weapon that I\'m proficient with and that doesn\'t have the heavy or special property, it will be treated as a monk weapon.',
			1
		]
	}
}, "Optional 2nd-level monk features");
AddFeatureChoice(ClassList.monk.features["unarmored movement"], true, "Ki-Fueled Attack", {
	name : "Ki-Fueled Attack",
	extraname : "Optional Monk 3",
	source : [["T", 48]],
	description : desc([
		"If I use any focus points during my action on my turn, I can make an attack as a bonus action",
		"This attack has to be in the same turn and with an unarmed strike or a monk weapon"
	]),
	action : [["bonus action", ""]]
}, "Optional 3rd-level monk features");
AddFeatureChoice(ClassList.monk.features["deflect attacks"], true, "Quickened Healing (2 focus points)", {
	name : "Quickened Healing",
	extraname : "Optional Monk 4",
	source : [["T", 49]],
	description : " [2 focus points]\n   As an action, I can regain HP equal to the roll of my martial arts die + Proficiency Bonus",
	action : [["action", ""]]
}, "Optional 4th-level monk features");
AddFeatureChoice(ClassList.monk.features["slow fall"], true, "Focused Aim (1-3 focus points)", {
	name : "Focused Aim",
	extraname : "Optional Monk 5",
	source : [["T", 49]],
	description : " [1-3 focus points]\n   When I miss an attack roll, I can spend focus to increase the roll by +2 per focus point (max +6)",
	prereqeval : function (v) { return classes.known.monk.level >= 5 ? true : "skip"; }
}, "Optional 5th-level monk features");


// Paladin Optional Class Features
AddFeatureChoice(ClassList.paladin.features["subclassfeature3.0-channel divinity"], true, "Harness Divine Power", {
	name : "Channel Divinity: Harness Divine Power",
	extraname : "Optional Paladin 3",
	source : [["T", 52]],
	description : desc([
		"As a bonus action, I can expend a use of my channel divinity to regain one used spell slot",
		"The level of this spell slot can be no more than half my Proficiency Bonus (rounded up)",
		"I can only do this so many times per long rest, even if I have uses of channel divinity left"
	]),
	action : [["bonus action", ""]],
	usages : levels.map(function(n) {
		return n < 3 ? "" : n < 7 ? 1 : n < 15 ? 2 : 3;
	}),
	recovery : "long rest"
}, "Optional 3rd-level paladin features");
AddFeatureChoice(ClassList.paladin.features['lay on hands'], true, "Martial Versatility", {
	name : "Martial Versatility",
	extraname : "Optional Paladin 4",
	source : [["T", 53]],
	description : " [ASI = Ability Score Improvement]\n   Whenever I gain an ASI from the paladin class, I can change my paladin fighting style",
	prereqeval : function (v) { return classes.known.paladin.level >= 4 ? true : "skip"; }
}, "Optional 4th-level paladin features");


// Sorcerer optional class features
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Sorcerous Versatility (prereq: level 4 sorcerer)", {
	name : "Sorcerous Versatility",
	extraname : "Optional Sorcerer 4",
	source : [["T", 66]],
	description : " [ASI = Ability Score Improvement]" + desc([
		"Whenever I gain an ASI from the sorcerer class, I can change a cantrip or Metamagic choice",
		"I can select either another cantrip from the sorcerer spell list or another Metamagic option"
	]),
	prereqeval : function (v) { return classes.known.sorcerer.level >= 4 ? true : "skip"; }
}, "Optional sorcerer features");
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Magical Guidance (prereq: level 5 sorcerer)", {
	name : "Magical Guidance",
	extraname : "Optional Sorcerer 5",
	source : [["T", 66]],
	description : " [1 sorcery point]\n   When I make an ability check that fails, I can reroll the d20 and must use the new roll",
	prereqeval : function (v) { return classes.known.sorcerer.level >= 5 ? true : "skip"; }
}, "Optional sorcerer features");


//Warlock Optional Class Features
AddFeatureChoice(ClassList.warlock.features["pact magic"], true, "Eldritch Versatility", {
	name : "Eldritch Versatility",
	extraname : "Optional Warlock 4",
	source : [["T", 70]],
	description : " [ASI = Ability Score Improvement]" + desc([
		"Whenever I gain an ASI from the warlock class, I can change one of the following things:",
		" \u2022 I can replace one warlock cantrip with another cantrip from the warlock spell list",
		" \u2022 I can replace my pact boon for another",
		" \u2022 If I have Mystic Arcanum, I can replace one spell from it with another of the same level"
	]),
	prereqeval : function (v) { return classes.known.warlock.level >= 4 ? true : "skip"; }
}, "Optional 4th-level warlock features");



//Could code Fighting Style Initiate Feat, or could just add the chosen fighting style manually. Might be easier.