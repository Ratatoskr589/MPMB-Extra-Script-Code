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
AddFeatureChoice(ClassList.paladin.features["channel divinity"], true, "Harness Divine Power", {
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


// Adding the extra Blessings from Icewind Dale: Rime of the Frostmaiden to the 2024 DMG Code made by Poke (other code borrowed from Nod_Hero) 
AddFeatureChoice(FeatsList["blessings"], false, "of the Frostmaiden", {
	name : "Blessing of the Frostmaiden",
    source : [["RotF", 213]],
    description: "My eyes become as cold as ice. I gain immunity to cold damage. In addition, I can cast the cone of cold spell (save DC 15) once. I regain the ability to cast this spell when I finish a long rest.",
	descriptionFull : "Your eyes become as cold as ice. You gain immunity to cold damage. In addition, you can cast the cone of cold spell (save DC 15) once. You regain the ability to cast this spell when you finish a long rest.",
	savetxt : { immune : ["cold"] },
    usages : 1,
    recovery : "long rest",
	spellcastingBonus : {
		name : "Cone of Cold",
		spells : ["cone of cold"],
		selection : ["cone of cold"]
	},
	fixedDC : 15	
});
AddFeatureChoice(FeatsList["blessings"], false, "of the Morninglord", {
	name : "Blessing of the Morninglord",
    source : [["RotF", 119]],
    description: "I gain 10 temporary hit points each day at dawn.",
	descriptionFull : "You gain 10 temporary hit points each day at dawn.",
    usages : "each day at",
    recovery : "dawn",
	additional : "(10 THP)"
});

// Add Blessings from Phandelver and Below: The Shattered Obelisk to the 2024 DMG Code made by Poke (other code borrowed from Nod_Hero) 
AddFeatureChoice(FeatsList["blessings"], false, "of Dumathoin", {
	name : "Blessing of Dumathoin",
    source : [["PaBTSO", 171]],
    description: "My eyes become keen enough to pick out hidden secrets. I gain darkvision. If I already had darkvision, I can see in color in the dark. In addition, I can use an action to gain truesight for 1 minute. Once I gain truesight in this way, I can't do so again until I finish a long rest.",
	descriptionFull : "Your eyes become keen enough to pick out hidden secrets. You gain darkvision. If you already had darkvision, you can see in color in the dark. In addition, you can use an action to gain truesight for 1 minute. Once you gain truesight in this way, you can't do so again until you finish a long rest.",
    usages : 1,
    recovery : "long rest",
	additional : "Truesight",
	vision : [["Darkvision", "fixed 60"]],
	action : ["action", ""]
});
AddFeatureChoice(FeatsList["blessings"], false, "of the Solipsistic Mind", {
	name : "Blessing of the Solipsistic Mind",
    source : [["PaBTSO", 177]],
    description: "I can take an action to focus my inner mind for 1 hour. While focused, I can't take reactions. When I make an Intelligence or Wisdom ability check or Intelligence or Wisdom save, I can roll a d8 and add the number rolled to the check or save. I regain the ability to focus my inner mind when I finish a long rest.",
	descriptionFull : "You access esoteric truths from an ancient tome by focusing deeply on your own thoughts. You can take an action to focus your inner mind. This focus lasts for 1 hour. While your inner mind is focused, you can't take reactions. For the duration, when you make an Intelligence check, Wisdom check, Intelligence saving throw, or Wisdom saving throw, you can roll a d8 and add the number rolled to the ability check or saving throw. You regain the ability to focus your inner mind when you finish a long rest.",
    usages : 1,
    recovery : "long rest",
	action : ["action", "Focus Inner Mind"]
});


//Add Charms from Book of Many Things (most of this code is from Nod_hero, I just switched it to a FeatChoice to match Poke's 2024 DMG code)
FeatsList["charms (book of many things)"] = {
	name : "Charms (Book of Many Things)",
	source : [["BoMT", 62]],
	descriptionFull : "This section presents magical charms inspired by the Deck of Many Things. See the Dungeon Master's Guide for more information on charms.",
	allowDuplicates : true,
	choices : ["Balance", "Euryale", "Many Things", "Ruin", "Comet", "Donjon", "Fates", "Flames", "Fool", "Gem", "Jester", "Key", "Knight", "Moon", "Puzzle", "Rogue", "Sage", "Skull", "Star", "Sun", "Talons", "Throne", "Void"],
	"balance" : {
		name : "Charm of Balance",
		description : "When a creature I can see within 60 feet of me damages me, I can use my reaction to deal an amount of force damage to that creature equal to half the damage I took. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["reaction", ""]],
	},
	"euryale" : {
		name : "Charm of Euryale",
		description : "As an action, I can unleash a magical petrifying 30-ft cone from my eyes. Each creature must make a DC 15 Con save. Failed save, petrified for 1 hour. Successful save, restrained. Restrained creature can repeat the save at end of each of its turns, ending the effect on itself on a success. Charm vanishes once used.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]],
	},
	"many things" : {
		name : "Charm of Many Things",
		description : "I am infused with a burst of magic from a Deck of Many Things. As an action, I can touch a willing creature other than myself and bestow the effect of a single randomly determined card from the deck upon the target. Charm vanishes once used.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]],
	},
	"ruin" : {
		name : "Charm of Ruin",
		description : "As an action, I can touch a nonmagical object, or a section of a larger nonmagical object, that fits in a 5-foot cube. The target is reduced to dust. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]],
	},
	"comet" : {
		name : "Charm of the Comet",
		description : "As an action, I can force a creature I can see within 60 feet of me to focus on me. For 1 minute, creatures other than myself and the target are invisible to the target. The effect ends if any creature other than me damages the target or forces the target to make a saving throw. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]],
	},
	"donjon" : {
		name : "Charm of The Donjon",
		description : "I can cast Otiluke's Resilient Sphere, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["otiluke's resilient sphere"],
		selection : ["otiluke's resilient sphere"],
		firstCol : "1",
		}],
		spellChanges : {
		"otiluke's resilient sphere" : {
			components : "",
			changes : "My Charm of the Donjon allows me to cast Otiluke's Resilient Sphere three times without requiring components."
			}
		},
	},
	"fates" : {
		name : "Charm of the Fates",
		description : "I can tug on the threads of fate to tweak circumstance in my favor. After I make an ability check, an attack roll, or a saving throw, I can roll a d10 and add it to the total, potentially turning failure into success. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
	},
	"flames" : {
		name : "Charm of the Flames",
		description : "As an action, I can summon two bearded devils in unoccupied spaces within 60 ft. They obey my commands, take their turns immediately after mine, and can't summon other devils, They remain for 10 min, until it or I die, or until I dismiss one or both as an action. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", " (summon/dismiss)"]],
	},
	"fool" : {
		name : "Charm of the Fool",
		description : "I can cast Major Image, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). When I cast the spell in this way, it lasts its full duration with no concentration required. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["major image"],
		selection : ["major image"],
		firstCol : "1",
		}],
		spellChanges : {
		"major image" : {
			components : "",
			duration : "10 min",
			changes : "My Charm of the Fool allows me to cast Major Image three times without requiring components and lasts its full duration with no concentration required."
			}
		},
	},
	"gem" : {
		name : "Charm of the Gem",
		description : "As an action, I create a 30-ft cone of 4d10 10 gp value gems originating from me. Each creature in that area must make a DC 15 Dex save. Failed save takes bludgeoning damage equal to the number of gems created. Successful save takes half. The gems remain after the effect ends. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]],
	},
	"jester" : {
		name : "Charm of the Jester",
		description : "I can cast Tasha's Hideous Laughter, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["tasha's hideous laughter"],
		selection : ["tasha's hideous laughter"],
		firstCol : "1",
		}],
		spellChanges : {
		"tasha's hideous laughter" : {
			components : "",
			changes : "My Charm of the Donjon allows me to cast Tasha's Hideous Laughter three times without requiring components."
			}
		},
	},
	"key" : {
		name : "Charm of the Key",
		description : "As a bonus action, I can touch a nonmagical melee weapon and imbue it with magic for 1 hour. For the duration, the weapon deals an extra 1d8 force damage on a hit and deals double damage to objects and structures. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["bonus action", ""]],
	},
	"knight" : {
		name : "Charm of the Knight",
		description : "As an action, I can summon two neutral good Celestial knights in unoccupied spaces within 60 ft. They act as my allies and take their turns immediately after mine. The knights remain for 10 minutes, until they or I die, or until I dismiss one or both of them as an action. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["action", " (summon/dismiss)"]],
	},
	"moon" : {
		name : "Charm of the Moon",
		description : "As an action, I make a minor wish. When I do, I create the effects of a spell of 5th level or lower. The spell takes effect as part of this action and requires no spell components. Your Intelligence, Wisdom, or Charisma is the spellcasting ability for this spell (your choice). Once you use this charm, it vanishes from you.",
		usages : 1,
		recovery : "never",
		action : [["action", " (up to 5th lvl spell)"]],
	},
	"puzzle" : {
		name : "Charm of the Puzzle",
		description : "I can cast Hypnotic Pattern, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["hypnotic pattern"],
		selection : ["hypnotic pattern"],
		firstCol : "1",
		}],
		spellChanges : {
		"hypnotic pattern" : {
			components : "",
			changes : "My Charm of the Puzzle allows me to cast Hypnotic Pattern three times without requiring components."
			}
		},
	},
	"rogue" : {
		name : "Charm of the Rogue",
		description : "I can cast Mislead, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). When I cast the spell in this way, it lasts its full duration with no concentration required. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["mislead"],
		selection : ["mislead"],
		firstCol : "1",
		}],
		spellChanges : {
		"mislead" : {
			components : "",
			duration : "1 h",
			changes : "My Charm of the Rogue allows me to cast Mislead three times without requiring components and lasts its full duration with no concentration required."
			}
		},
	},
	"sage" : {
		name : "Charm of the Sage",
		description : "I can cast Divination, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["divination"],
		selection : ["divination"],
		firstCol : "1",
		}],
		spellChanges : {
		"divination" : {
			components : "",
			changes : "My Charm of the Sage allows me to cast Divination three times without requiring components."
			}
		},
	},
	"skull" : {
		name : "Charm of the Skull",
		description : "As a bonus action, my equipment vanishes and I am a Wraith (not alignment, personality; Int, Wis, and Cha scores; passive Perception, and languages.) I can't Create Specter. This lasts for 1 minute, until Wraith reduced to 0 hp (extra dmg spills over), or use a bonus action to end it. Charm vanishes once used 3 times.",
		descriptionFull : "As a bonus action, I can transform into a deathly apparition. My game statistics are replaced by those of a Wraith, except for my alignment and personality; my Intelligence, Wisdom, and Charisma scores; and my passive Wisdom (Perception) score and languages. I don't have the wraith's Create Specter ability. My equipment vanishes when I transform but returns when the transformation ends. The transformation lasts for 1 minute, until my wraith form is reduced to 0 hit points, or until I use a bonus action to end it. If the wraith form is reduced to 0 hit points and there is still damage left over, the remaining damage applies to my normal hit points. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		action : [["bonus action", " {transform/end)"]],
	},
	"star" : {
		name : "Charm of the Star",
		description : "I can cast Enhance Ability, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). When I cast the spell in this way, it lasts its full duration with no concentration required. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["enhance ability"],
		selection : ["enhance ability"],
		firstCol : "1",
		}],
		spellChanges : {
		"enhance ability" : {
			components : "",
			duration : "1 h",
			changes : "My Charm of the Star allows me to cast Enhance Ability three times without requiring components and lasts its full duration with no concentration required."
			}
		},
	},
	"sun" : {
		name : "Charm of the Sun",
		description : "I learn the Light cantrip if I don't already know it. I can cast Sunburst, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Once used, the charm vanishes from me, and I unlearn the Light cantrip gained from this charm.",
		usages : 1,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "Light",
		spells : ["light"],
		selection : ["light"],
		firstCol : "atwill"
		}, {
		name : "1 charge",
		spells : ["sunburst"],
		selection : ["sunburst"],
		firstCol : "1"
		}],
		spellChanges : {
		"sunburst" : {
			components : "",
			changes : "My Charm of the Sun allows me to cast Sunburst one time without requiring components."
			}
		},
	},
	"talons" : {
		name : "Charm of the Talons",
		description : "I can cast Dispel Magic, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). If I successfully end any spells with it, I gain 1d6 temporary hit points for each spell level of the highest-level spell ended. Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		firstCol : "1",
		}],
		spellChanges : {
		"dispel magic" : {
			components : "",
			description : "Dispel spells on crea/object; if > SL, DC 10+SL spellcasting ability check; gain 1d6 thp per highest dispel",
			changes : "My Charm of the Talons allows me to cast Dispel Magic three times without requiring components and if I successfully end any spells with it, I gain 1d6 temporary hit points for each spell level of the highest-level spell ended."
			}
		},
	},
	"throne" : {
		name : "Charm of the Throne",
		description : "I can cast Mordenkainen's Magnificent Mansion, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["mordenkainen's magnificent mansion"],
		selection : ["mordenkainen's magnificent mansion"],
		firstCol : "1",
		}],
		spellChanges : {
		"mordenkainen's magnificent mansion" : {
			components : "",
			changes : "My Charm of the Throne allows me to cast Mordenkainen's Magnificent Mansion three times without requiring components."
			}
		},
	},
	"void" : {
		name : "Charm of the Void",
		description : "I can cast Banishment, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["Banishment"],
		selection : ["Banishment"],
		firstCol : "1",
		}],
		spellChanges : {
		"banishment" : {
			components : "",
			changes : "My Charm of the Void allows me to cast Banishment three times without requiring components."
			}
		},
	},
};

// Add Charm from Heroes’ Feast: Saving the Children’s Menu
SourceList["HFStCM"] = {
	name : "Heroes’ Feast: Saving the Children’s Menu",
	abbreviation : "HFStCM",
	group : "Adventure Books",
	campaignSetting : "Forgotten Realms",
	url : "https://www.dndbeyond.com/marketplace/adventures/heroes-feast-saving-the-childrens-menu",
	date : "2023/11/22"
};
AddFeatureChoice(FeatsList["charms"], false, "the Stumblenoodle", {
	name : "Charm of the Stumblenoodle",
    source : [["HFStCM"]],
    rarity : "rare",
    description: "When a creature I can see within 30 ft of me moves, I can use my reaction to give the creature the prone condition. Allies of the target within 30 ft of it must succeed on a DC 16 Wis save or be stunned until the end of their next turn as they laugh at their friend's misfortune. The charm vanishes from me after 3 uses.",
    descriptionLong: "When a creature you can see within 30 feet of you moves, you can use your reaction to give the creature the prone condition. Allies of the target who are within 30 feet of the target must succeed on a DC 16 Wisdom saving throw or have the stunned condition until the end of their next turn as they laugh uncontrollably at their friend's misfortune. Once used three times, the charm vanishes from you.",
    descriptionFull: "...",
    usages : 3,
    recovery : "Never",
	action : ["reaction", ""],
});

//Adding the Boons from the 2014 DMG that weren't reprinted as Epic Boon Feats [contributions by AelarTheElfRogue and Nod_Hero]
FeatsList["epic boon"] = {
	name: "Epic Boon",
	source: [["D", 232]],
	descriptionFull : "",
    description : "",
    allowDuplicates : true,
    choices : ["Boon of High Magic","Boon of Immortality","Boon of Invincibility","Boon of Luck","Boon of Magic Resistance","Boon of Peerless Aim","Boon of Perfect Health","Boon of Planar Travel","Boon of Quick Casting","Boon of Resilience","Boon of Spell Mastery","Boon of the Fire Soul","Boon of the Stormborn","Boon of the Unfettered","Boon of Undetectibility"],
    "boon of high magic": {
        description: "I gain one 9th-level spell slot, provided I already have one.",
        addMod : { type : "", field : "P6.SSfront.SpellSlots.CheckboxesSet.lvl9", mod : 1, text: "I gain 1 additional 9th level spell slot" },
    },
    "boon of immortality": {
        description: "I stop aging. I am immune to any effect that would age me, and I can't die from old age.",
        savetxt : {
            immune : ["aging effects"],
        },
    },
    "boon of invincibility": {
        description: "When I take damage from any source, I can reduce that damage to 0. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"

    },
    "boon of luck": {
        description: "I can add a dlO roll to any ability check, attack roll, or saving throw I make. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"
    },
    "boon of magic resistance": { 
        description: "I have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
    },
    "boon of peerless aim": {
        description: "I can give myself a +20 bonus to a ranged attack roll I make. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"
    },
    "boon of perfect health": {
        description: "I am immune to all diseases and poisons, and I have advantage on Constitution saving throws.",
        savetxt : { 
            immune : ["disease","poison"] 
        },
        eval : function () {
            SetProf("advantage", true, ["Constitution", true], "Boon of Perfect Health");
        },
        removeeval : function () {
            SetProf("advantage", false, ["Constitution", true], "Boon of Perfect Health");
        }
    },
    "boon of planar travel": {
        description: "Once per short rest, as an Action I can cast the Plane Shift spell (no spell slot or components required), targeting myself only, to travel to or from a single plane of existance chosen when I receive this boon.",
        limfeaname : "Plane Shift",
        usages : 1,
        recovery : "short rest",
        spellcastingBonus : {
            name : "Boon of Planar Travel",
            spells : ["plane shift"],
            selection : ["plane shift"],
            firstCol : 'oncesr'
        },
        spellChanges : {
            "plane shift" : {
                components : "",
                compMaterial : "",
				range : "Self", 
		changes : "With the Boon of Planar Travel, I can cast PLane Shift on myself without components."
            }
        }
    },
    "boon of quick casting": {
        description: "I choose one of my spells of 1st through 3rd level that has a casting time of 1 action. That spell's casting time is now 1 bonus action for me.",
    },
    "boon of resilience": {
        description: "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
        dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
    },
    "boon of spell mastery": {
        description: "I choose one 1st-level sorcerer, warlock, or wizard spell that I can cast. I can now cast that spell at its lowest level without expending a spell slot.",
    },
    "boon of the fire soul": {
        description: "I have immunity to fire damage. I can also cast burning hands (save DC 15) at will, without using a spell slot or any components.",
        savetxt : {
            immune : ["fire"],
        },
        spellcastingBonus : {
            name : "Boon of the Fire Soul",
            spells : ["burning hands"],
            selection : ["burning hands"],
            firstCol : 'atwill'
        },
        spellChanges : {
            "burning hands" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of the Fire Soul, I can cast Burning Hands without components."
            }
        }
    },
    "boon of the stormborn": {
        description: "I have immunity to lightning and thunder damage. I can also cast thunderwave (save DC 15) at will, without using a spell slot or any components.",
        savetxt : {
            immune : ["thunder","lightning"],
        },
        spellcastingBonus : {
            name : "Boon of the Stormborn",
            spells : ["thunderwave"],
            selection : ["thunderwave"],
            firstCol : 'atwill'
        },
        spellChanges : {
            "thunderwave" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of the Stormborn, I can cast Thunderwave without components."
            }
        }
    },
    "boon of the unfettered": {
        description: "I have advantage on ability checks made to resist being grappled. In addition, I can use an action to automatically escape a grapple or free myself of restraints of any kind.",
        savetxt : {
            adv_vs : ["resisting grapple"]
        },
        action : [["action"," (escape grapple/restraints)"]]
    },
    "boon of undetectibility": {
        description: "I gain a +10 bonus to Dexterity (Stealth) checks, and I can't be detected or targeted by divination magic, including scrying sensors .",
        addMod : { type : "skill", field : "Stealth", mod : "10", text : "I gain a +10 bonus to Stealth checks" },
    },
};

// Add Chwinga Charms (also switched to feats to match the 2024 DMG Code [contributed by Nod_Hero]
FeatsList["chwinga charm"] = {
	name : "Chwinga Charm",
	source : [["D", 228],["RotF", 283],["CM", 212],["S:AiS", 17]],
	type : "wondrous item",
	rarity : "rare",
	descriptionFull : "Different types of chwinga charms exist, each with a different effect.",
	allowDuplicates : true,
	choices : ["Air Bubbles", "Animal Conjuring", "Biting Cold", "Bounty", "Cold Resistance", "Darkvision", "Feather Falling", "Heroism", "Instant Tools", "Restoration", "Snowball Strike", "The Ice Troll", "The Mirage", "The Slayer", "The Snow Walker", "The Traveler's Haven", "The Water Bearer", "Vitality"],
	"air bubbles" : {
		name : "Chwinga Charm - Air Bubbles",
		source : [["S:AiS", 17]],
		description : "As an action, I can cast the Air Bubble spell. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["air bubble"],
		selection : ["air bubble"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"animal conjuring" : {
		name : "Chwinga Charm - Animal Conjuring",
		source : [["D", 228]],
		description : "As an action, I can cast the Conjure Animals spell (3rd-level version). The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["conjure animals"],
		selection : ["conjure animals"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"biting cold" : {
		name : "Chwinga Charm - Biting Cold",
		source : [["RotF", 283]],
		description : "As a bonus action, I can can expend 1 of the charm's charges to wreathe my weapon attacks with biting cold for 1 minute. Until this effect ends, I deal an extra 1d6 cold damage when I hit with a melee or ranged weapon attack. The charm disappears after 3 uses.",
		descriptionFull : "As a bonus action, you can can expend 1 of the charm's charges to wreathe your weapon attacks with biting cold for 1 minute. Until this effect ends, you deal an extra 1d6 cold damage when you hit with a melee or ranged weapon attack. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		action : [["bonus action", ""]]
	},
	"bounty" : {
		name : "Chwinga Charm - Bounty",
		source : [["RotF", 283]],
		description : "As an action, I can can expend 1 of the charm's charges to cast the Create Food And Water spell, requiring no components. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["create food and water"],
		selection : ["create food and water"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"cold resistance" : {
		name : "Chwinga Charm - Cold Resistance",
		source : [["RotF", 283]],
		description : "As an action, I can can expend the charm to give myself resistance to cold damage for 24 hours.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	},
	"darkvision" : {
		name : "Chwinga Charm - Darkvision",
		source : [["D", 228]],
		description : "As an action, I can expend 1 of the charm's charges to cast the Darkvision spell, no components required. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["darkvision"],
		selection : ["darkvision"],
		firstCol : "1",
		}],
		action : [["action", ""]],
	},
	"feather falling" : {
		name : "Chwinga Charm - Feather Falling",
		source : [["D", 228]],
		description : "This charm grants me the benefits of a Ring of Feather Falling for 10 days, after which the charm vanishes from me. When I fall, I descend 60 feet per round and take no damage from falling.",
		usages : "",
		recovery : "never",
		additional : "10 days",
	},
	"heroism" : {
		name : "Chwinga Charm - Heroism",
		source : [["D", 228]],
		description : "As an action, I can can expend the charm to give myself the benefits of a Potion of Heroism. I gain 10 temporary hit points that last for 1 hour and am under the effect of the Bless spell (no concentration required).",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	},
	"instant tools" : {
		name : "Chwinga Charm - Instant Tools",
		source : [["S:AiS", 17]],
		description : "This charm allows me to magically conjure a set of artisan's tools, navigator's tools, or thieves' tools. The conjured tools appear either in my hand or somewhere else in my space (my choice). Once used, this charm goes away, but the tools remain.",
		usages : 1,
		recovery : "never",
	},
	"restoration" : {
		name : "Chwinga Charm - Restoration",
		source : [["D", 228]],
		description : "This Charm has 6 charges. I can use an action to expend some of its charges to cast one of the following spells:\n Greater Restoration (4 charges) or Lesser Restoration (2 charges). The Charm vanishes once all its charges have been expended.",
		usages : 10,
		recovery : "never",
		action : [["action", ""]],
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "2 charges",
			spells : ["lesser restoration"],
			selection : ["lesser restoration"],
			firstCol : 2
		}, {
			name : "4 charges",
			spells : ["greater restoration"],
			selection : ["greater restoration"],
			firstCol : 4
		}],
	},
	"snowball strike" : {
		name : "Chwinga Charm - Snowball Strike",
		source : [["RotF", 283]],
		description : "As a bonus action, I can can expend 1 of the charm's charges to create a magical snowball in my hand and throw it. The snowball is a magic ranged weapon , has a 20/60 range, deals 1d4 cold damage, and scores a critical hit on a roll of 19 or 20. On a critical hit, the target is blinded until the end of its next turn",
		usages : 5,
		recovery : "never",
		action : [["bonus action", ""]]
	},
	"the ice troll" : {
		name : "Chwinga Charm - The Ice Troll",
		source : [["RotF", 283]],
		description : "As a reaction when I take cold damage, I can expend the charm to reduce the damage to 0. I regain a number of hit points equal to half the cold damage I would have taken.",
		usages : 1,
		recovery : "never",
		action : [["reaction", "Chwinga Charm (cold damage)"]]
	},
	"the mirage" : {
		name : "Chwinga Charm - The Mirage",
		source : [["CM", 212]],
		description : "As an action, I can cast the Hallucinatory Terrain spell (save DC 15). Once used, this charm vanishes from me.",
		usages : 1,
		recovery : "never",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["hallucinatory terrain"],
		selection : ["hallucinatory terrain"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"the slayer" : {
		name : "Chwinga Charm - The Slayer",
		source : [["D", 228]],
		description : "One sword in my possession becomes a Dragon Slayer or Giant Slayer (DM's choice) for the next 9 days. The charm then vanishes from me, and the weapon returns to normal.",
		usages : "9 days",
		recovery : "never",
	},
	"the snow walker" : {
		name : "Chwinga Charm - The Snow Walker",
		source : [["RotF", 283]],
		description : "As an action, I can expend 1 of the charm's charges to gain these 24 hour benefits: I can see 60 ft through areas heavily obscured by snow, I am immune to the effects of extreme cold (described in DMG), and I and my allies within 15 feet of me ignore snow/ice difficult terrain. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]]
	},
	"the traveler's haven" : {
		name : "Chwinga Charm - The Traveler's Haven",
		source : [["RotF", 283]],
		description : "As an action, I can expend 1 of the charm's charges to cast the Leomund's Tiny Hut spell, no components required. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["leomund's tiny hut"],
		selection : ["leomund's tiny hut"],
		firstCol : "1",
		}],
	},
	"the water bearer" : {
		name : "Chwinga Charm - The Water Bearer",
		source : [["CM", 212]],
		description : "This charm allows me to create up to 1 gallon of fresh water, which fills one or more empty containers in my possession. I can do this up to thrice per day for 10 days, after which this charm vanishes.",
		descriptionFull : "This charm allows you to create up to 1 gallon of fresh water, which fills one or more empty containers in your possession. You can do this up to thrice per day for 10 days, after which this charm vanishes from you.",
		usages : 3,
		recovery : "day",
		additional : "10 days"
	},
	"vitality" : {
		name : "Chwinga Charm - Vitality",
		source : [["D", 228]],
		description : "As an action, I can use the charm to give myself the benefit of a Potion of Vitality. I remove any Exhaustion levels I'm suffering and am cured of the Poisoned condition. For the next 24 hours, I regain the maximum number of HP for any Hit Point Die I spend.",
		descriptionFull : "As a Magic action, you can expend the charm to give yourself the benefit of a Potion of Vitality. It removes any Exhaustion levels you have and ends the Poisoned condition on you. For the next 24 hours, you regain the maximum number of Hit Points for any Hit Point Die you spend.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	}
};


// pub_al_20190917_ALPG-v9.1.js
// This attempts to adds the winged aasimar from the Adventurers League Player's Guide v9.1: Inglorious Redemption to the new version of Aasimar.

// Define the source
SourceList["ALPGs9"] = {
	name : "AL Player's Guide v9.1: Inglorious Redemption",
	abbreviation : "ALPGs9",
	group : "Adventurers League",
	url : "https://www.dropbox.com/s/8r1cwjrk6n2rzyo/AL-Players-Guide-v9.1-Forgotten-Realms.pdf?dl=1", // used to be https://www.dmsguild.com/product/208178
	date : "2019/09/17",
	defaultExcluded : true
};

[
	["aasimar", false],
].forEach(function (rac) {
	var rObj = rac[1] ? RaceSubList[rac[0]] : RaceList[rac[0]];
	if (!rObj) return;
	rObj.source = (isArray(rObj.source[0]) ? rObj.source : [rObj.source]).concat([["ALPGs9", 6]]);
	if (rac[0].indexOf("aasimar") !== -1) {
		AddRacialVariant(rac[0], "winged", {
			regExpSearch : /wing/i,
			name : "Winged " + rObj.name,
			source : [["ALPGs9", 6]],
			plural : "Winged " + rObj.plural,
			speed : {
				walk : { spd : 30, enc : 20 },
				fly : { spd : 30, enc : 0 }
			},
			trait : "Winged Aasimar:\n\nHealing Hands:\n   As a Magic action, once per long rest, I can touch a creature and roll a number of d4s equal to my Proficiency Bonus. The creature regains an amount of Hit Points equal to the total rolled.\n\nWings:\n   Once I'm 5th level, I sprout feathered wings from my shoulder blades that give me a flying speed of 30 feet when I'm not wearing heavy armor.",
			features : {
				"healing hands" : {
					name : "Healing Hands",
					usages : 1,
					minlevel : 1,
					recovery : "long rest",
					additional: levels.map(function (n) {
        return (n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6) + 'd4';
      }),
					action : [["action", ""]]
				}
			},
			abilitySave : "",
			spellcastingAbility : "",
			spellcastingBonus : "",
		});
	}
});

//This attempts to add the tiefling racial variants from SCAG to the new version. It assumes that you do get to keep the original Tiefling Fire resistance even though you replace the spells, as that's the closest to the original feature. I also didn't bother to code the Feral Tiefling since that was only a stat change.
AddRacialVariant("tiefling", "winged", {
	regExpSearch : /wing/i,
	name : "Winged tiefling",
	source : [["S", 118]],
	plural : "Winged tieflings",
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 0 }
	},
	trait : "Winged Tiefling\n\nInfernal Legacy:\n   I have resistance to Fire damage.\nWings:\n   I have bat-like wings sprouting from my shoulder blades that give me flying speed of 30 ft when I'm not wearing heavy armor.",
	features : "",
	dmgres: ["Fire"],
	spellcastingAbility : "",
	spellcastingBonus : ""
});
AddRacialVariant("tiefling", "devil's tongue", {
	regExpSearch : /^(?=.*devil)(?=.*tongue).*$/i,
	name : "Devil's Tongue tiefling",
	source : [["S", 118]],
	plural : "Devil's Tongue tieflings",
	trait : "Devil's Tongue Tiefling\n\nInfernal Legacy (Devil's Tongue):\n   I have resistance to Fire damage.\n   I know the Vicious Mockery cantrip.\n   At 3rd level, I can cast the Charm Person spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Enthrall spell once per long rest.\n   I can choose Int, Wis, or Cha as my spellcasting ability for spells I cast with this trait",
	dmgres: ["Fire"],
	spellcastingBonus : [{
		name : "Devil's Tongue (level 1)",
		spells : ["vicious mockery"],
		selection : ["vicious mockery"],
		firstCol : 'atwill'
	}],
	features : {
		"charm person" : {
			name : "Devil's Tongue (level 3)",
			limfeaname : "Charm Person (2 targets)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Devil's Tongue (level 3)",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"charm person" : {
					description : "2 humanoids, max 30 ft apart, save or charmed; advantage on save if I or my allies are fighting it",
					changes : "Using Devil's Tongue, I cast Charm Person as if I'm using a 2nd-level spell slot, affecting 2 humanoids."
				}
			}
		},
		"enthrall" : {
			name : "Devil's Tongue (level 5)",
			limfeaname : "Enthrall",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Devil's Tongue (level 5)",
				spells : ["enthrall"],
				selection : ["enthrall"],
				firstCol : 'oncelr'
			}]
		}
	}
});
AddRacialVariant("tiefling", "hellfire", {
	regExpSearch : /hellfire/i,
	name : "Hellfire tiefling",
	source : [["S", 118]],
	plural : "Hellfire tieflings",
	trait : "Hellfire Tiefling\n\nInfernal Legacy (Hellfire):\n   I have resistance to Fire damage.\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Burning Hands spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   I can choose Int, Wis, or Cha as my spellcasting ability for spells I cast with this trait",
	dmgres: ["Fire"],
	features : {
		"burning hands" : {
			name : "Hellfire Legacy (level 3)",
			limfeaname : "Burning Hands (4d6)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Hellfire Legacy (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"burning hands" : {
					description : "4d6 Fire damage; save halves; unattended flammable objects ignite",
					changes : "Using Hellfire Legacy, I cast Burning Hands as if I'm using a 2nd-level spell slot, doing 4d6 Fire damage."
				}
			}
		},
		"darkness" : {
			name : "Hellfire Legacy (level 5)",
			limfeaname : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Infernal Legacy (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr'
			}]
		}
	}
});

//This adds the Ghostwise halfling variant from SCAG to the sheet. It's my best guess on how to adjust the features.
RaceList["ghostwise halfling"] = {
	regExpSearch : /^(?=.*\b(halflings?|hobbits?)\b)(?=.*ghostwise).*$/i,
	name : "Ghostwise halfling",
	sortname : "Halfling, Ghostwise",
	plural : "Ghostwise halflings",
	source : [["S", 110]],
	size : 4,
	speed: {walk: {spd: 30, enc: 20}},
	languageProfs: ["Common", 2],
	savetxt : { adv_vs : ["Frightened"] },
	age: " reach maturity in late teens and live about 150 years",
	height: " are about 2-3 feet tall",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Ghostwise Halfling" + (typePF ? "\n" : " ") + "\nLuck: When I roll a 1 on a D20 Test, I can reroll and must use the new roll." + (typePF ? "\n" : " ") + "\nHalfling Nimbleness: I can move through the space of any creature larger than me, but can't stop in the same space." + (typePF ? "\n" : " ") + "\nSilent Speech: I can speak telepathically to any one creature within 30 feet of me. It only understands me if we share a language."
};

/*
//This adds the SCAG Totem variants to the Wild Heart barbarian (since it replaces totem per the updated subclasses table: https://www.dndbeyond.com/posts/1810-updates-in-the-players-handbook-2024?. Note that this code won't remove the original rage options from page 3 because I couldn't figure out how to do that. You'll need to delete them or copy over the new text from the Notes page.

if (ClassSubList["barbarian-wild heart"]) {
	var SCAG_WildHeartFeature = ClassSubList["barbarian-wild heart"].features["subclassfeature6"];
	if (SCAG_WildHeartFeature) {
		AddFeatureChoice(SCAG_WildHeartFeature, false, "Elk", {
			name : "Elk",
			source : [["S", 122]],
			description : desc([
				"While mounted or on foot and not Incapacitated, my travel pace is doubled",
				"I can extend this benefit to up to ten companions, while they are within 60 ft of me"
			]),
		toNotesPage : [{
			name : "Aspect of the Wild Options (Change on LR)",
			popupName : "Aspect of the Wild Rage Options",
			note : [
				"Elk - While mounted or on foot and not Incapacitated, my travel pace is doubled. I can extend this benefit to up to ten companions, while they're in 60 ft of me.",
				"Owl - I have 60 ft Darkvision. If I already have Darkvision, its range increases by 60 ft.",
				"Panther - I have a Climb Speed equal to my Speed.",
				"Salmon - I have a Swim Speed equal to my Speed.",
				"Tiger - I gain proficiency with two skills chosen from: Athletics, Acrobatics, Stealth, or Survival."
				]
			}]
		});
		AddFeatureChoice(SCAG_WildHeartFeature, false, "Tiger", {
			name : "Tiger",
			source : [["S", 122]],
			description : "\n   I gain proficiency with two skills chosen from: Athletics, Acrobatics, Stealth, or Survival",
			skillstxt : "Choose two from Athletics, Acrobatics, Stealth, and Survival",
		toNotesPage : [{
			name : "Aspect of the Wild Options (Change on LR)",
			popupName : "Aspect of the Wild Rage Options",
			note : [
				"Elk - While mounted or on foot and not Incapacitated, my travel pace is doubled. I can extend this benefit to up to ten companions, while they're in 60 ft of me.",
				"Owl - I have 60 ft Darkvision. If I already have Darkvision, its range increases by 60 ft.",
				"Panther - I have a Climb Speed equal to my Speed.",
				"Salmon - I have a Swim Speed equal to my Speed.",
				"Tiger - I gain proficiency with two skills chosen from: Athletics, Acrobatics, Stealth, or Survival."
				]
			}]
		});
	}
}


if (ClassSubList["barbarian-wild heart"]) {
	CreateClassFeatureVariant("barbarian-wild heart", "subclassfeature3.1", "SCAG Rage of the Wilds", {
      name: "SCAG Rage of the Wilds",
      source : [["S", 122]],
      minlevel: 3,
      description: desc([
        "Choose an animal aspect when I enter a Rage (Copy Notes list to the 3rd Page).",
      ]),
		toNotesPage : [{
			name : "Rage of the Wilds Options",
			popupName : "Rage of the Wild Rages Options",
			note : [
				"Bear - Resistance to all but Force, Necrotic, Psychic, and Radiant damage.",
				"Eagle - Disengage and Dash as a Bonus Action.",
				"Elk - While not in heavy armor, Speed increases by 15 ft",
				"Tiger - Add 10 ft to my long jump and 3 ft to my high jump distance",
				"Wolf - Allies have Advantage on attacks against enemies in 5 ft of me."
				]
			}]
   });
}

if (ClassSubList["barbarian-wild heart"]) {
	CreateClassFeatureVariant("barbarian-wild heart", "subclassfeature14", "SCAG Power of the Wilds", {
      name: "SCAG Power of the Wilds",
      source : [["S", 122]],
      minlevel: 14,
      description: desc([
        "I gain 5 Power of the Wilds options (Copy Notes list to the 3rd Page).",
      ]),
		toNotesPage : [{
			name : "Power of the Wild Options",
			popupName : "Power of the Wild Rage Options",
			note : [
				"Falcon - Without armor, I have a Fly Speed equal to my Speed.",
				"Elk - Bonus Action to move through Large or smaller creature. Str save (8+PB+Str Mod) or Prone and takes 1d12+Str Bludgeoning.",
				"Lion - Enemies in 5 ft have Disadvantage on attacks against targets other than me or another Lion barbarian.",
				"Ram - Knock Large or smaller creatures Prone when hit with melee attack.",
				"Tiger - If move 20 ft toward target before making melee weapon attack, bonus action for another melee weapon attack against it."
				]
			}]
   });
}

/*
if(ClassSubList["barbarian-wild heart"]) {
    var SCAG_WildHeartFeature = ClassSubList["barbarian-wild heart"].features["subclassfeature3"];
    if(SCAG_WildHeartFeature ) {
            AddFeatureChoice(SCAG_WildHeartFeature, false, "Rage of the Wild Level 3 Options", {
            name : "Rage of the Wild Level 3 Options",
            source : [["S", 122]],
            description : "Test worked",
            extrachoices : ["Elk", "Tiger"],
            "elk" : {
                name : "Elk",
                source : [["S", 122]],
                description : "\n   While raging without heavy armor, my base walking speed increases by 15 ft.",
            },
            "tiger" : {
                name : "Tiger",
                source : [["S", 122]],
                description : "\n   While raging, I can add 10 ft to my long jump and 3 ft to my high jump distance.",
            },
            autoSelectExtrachoices : [
                {extrachoice : "tiger", minlevel : 3},
                {extrachoice : "elk", minlevel : 3}
            ]
        }, true);
    }
};


if(ClassSubList["barbarian-wild heart"]) {
    var SCAG_WildHeartFeature = ClassSubList["barbarian-wild heart"].features["subclassfeature14"];
    if(SCAG_WildHeartFeature ) {
            AddFeatureChoice(SCAG_WildHeartFeature, false, "SCAG Power of the Wilds", {
            name : "SCAG Power of the Wilds",
            source : [["S", 122]],
            description : "Test worked",
            extrachoices : ["Elk", "Tiger"],
            "elk" : {
                name : "Elk",
                source : [["S", 122]],
                description : "\n   Bonus Action to move through Large or smaller creature. Str save (8+PB+Str Mod) or Prone and takes 1d12+Str Bludgeoning.",
            },
            "tiger" : {
                name : "Tiger",
                source : [["S", 122]],
                description : "\n   If move 20 ft toward target before making melee weapon attack, bonus action for another melee weapon attack against it.",
            },
            autoSelectExtrachoices : [
                {extrachoice : "tiger", minlevel : 14},
                {extrachoice : "elk", minlevel : 14}
            ]
        }, true);
    }
};*/

RunFunctionAtEnd(function() {
	if(ClassSubList["barbarian-wild heart"]) {
		// The object holding the class features
		var cFeats = ClassSubList["barbarian-wild heart"].features;
		if(cFeats["subclassfeature6"]) {
			// Create elk and tiger objects and add their respective choices if they don't already exist.
			// This can be appended to 3rd page notes by setting `page3notes : true`
			var theFea = ClassSubList["barbarian-wild heart"].features["subclassfeature6"];
			if(!theFea["elk"]) {
				if(theFea.choices.indexOf("Elk") === -1) theFea.choices.push("Elk");
				theFea["elk"] = {
					name : "Elk",
					source : [["S", 122]],
					description : desc([
						"While mounted or on foot and not Incapacitated, my travel pace is doubled",
						"I can extend this benefit to up to ten companions, while they are within 60 ft of me"
					]),
					toNotesPage : [{
						name : "Aspect of the Wild Options (Change on LR)",
						popupName : "Aspect of the Wild Rage Options",
						note : [
							"Elk - While mounted or on foot and not Incapacitated, my travel pace is doubled. I can extend this benefit to up to ten companions, while they're in 60 ft of me.",
							"Owl - I have 60 ft Darkvision. If I already have Darkvision, its range increases by 60 ft.",
							"Panther - I have a Climb Speed equal to my Speed.",
							"Salmon - I have a Swim Speed equal to my Speed.",
							"Tiger - I gain proficiency with two skills chosen from: Athletics, Acrobatics, Stealth, or Survival."
						]
					}]
				}
			}
			if(!theFea["tiger"]) {
				if(theFea.choices.indexOf("Tiger") === -1) theFea.choices.push("Tiger");
				theFea["tiger"] = {
					name : "Tiger",
					source : [["S", 122]],
					description : "\n   I gain proficiency with two skills chosen from: Athletics, Acrobatics, Stealth, or Survival",
					skillstxt : "Choose two from Athletics, Acrobatics, Stealth, and Survival",
					toNotesPage : [{
						name : "Aspect of the Wild Options (Change on LR)",
						popupName : "Aspect of the Wild Rage Options",
						note : [
							"Elk - While mounted or on foot and not Incapacitated, my travel pace is doubled. I can extend this benefit to up to ten companions, while they're in 60 ft of me.",
							"Owl - I have 60 ft Darkvision. If I already have Darkvision, its range increases by 60 ft.",
							"Panther - I have a Climb Speed equal to my Speed.",
							"Salmon - I have a Swim Speed equal to my Speed.",
							"Tiger - I gain proficiency with two skills chosen from: Athletics, Acrobatics, Stealth, or Survival."
						]
					}]
				}
			}
		}
		// Create or overwrite the subclassfeature3.1 regardless
		cFeats["subclassfeature3.1"] = {
			name: "SCAG Rage of the Wilds",
			source : [["S", 122]],
			minlevel: 3,
			description: desc([
				"Choose an animal aspect when I enter a Rage. See 3rd page.",
			]),
			toNotesPage : [{
				name : "Rage of the Wilds Options",
				popupName : "Rage of the Wild Rages Options",
				page3notes : true,
				note : desc([
					"Bear - Resistance to all but Force, Necrotic, Psychic, and Radiant damage.",
					"Eagle - Disengage and Dash as a Bonus Action.",
					"Elk - While not in heavy armor, Speed increases by 15 ft",
					"Tiger - Add 10 ft to my long jump and 3 ft to my high jump distance",
					"Wolf - Allies have Advantage on attacks against enemies in 5 ft of me."
				])
			}]
		}
		// Create or overwrite the subclassfeature14 regardless
		cFeats["subclassfeature14"] = {
			name: "SCAG Power of the Wilds",
			source : [["S", 122]],
			minlevel: 14,
			description: desc([
				"Choose a second animal aspect when I enter Rage. See 3rd page.",
			]),
			toNotesPage : [{
				name : "Power of the Wild Options",
				popupName : "Power of the Wild Rage Options",
				page3notes : true,
				note : [
					"Falcon - Without armor, I have a Fly Speed equal to my Speed.",
					"Elk - Bonus Action to move through Large or smaller creature. Str save (8+PB+Str Mod) or Prone and takes 1d12+Str Bludgeoning.",
					"Lion - Enemies in 5 ft have Disadvantage on attacks against targets other than me or another Lion barbarian.",
					"Ram - Knock Large or smaller creatures Prone when hit with melee attack.",
					"Tiger - If move 20 ft toward target before making melee weapon attack, bonus action for another melee weapon attack against it."
				]
			}]
		}
		SetStringifieds("choices"); CurrentUpdates.types.push("choices");
	}
});

if (ClassSubList["barbarian-wild heart"]) {
	CreateClassFeatureVariant("barbarian-wild heart", "subclassfeature3", "Ghost Tree Animal Speaker", {
		name : "Ghost Tree Animal Speaker",
		source : [["S", 122]],
		minlevel: 3,
		spellcastingAbility: 5,
      spellcastingBonus: [{
        name: "Ghost Tree Animal Speaker",
        spells: ["beast sense", "speak with plants"],
        selection: ["beast sense", "speak with plants"],
        times: 2,
        firstCol: "R",
      }],
      description: desc([
        "Cast Beast Sense and Speak with Plants as Rituals using Wisdom."
			]),
	});
}