/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me (MPMB in particular, but others as noted). It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). 

This script may work fine on older versions of the sheet, but I copied the code from the newest version so I can't guarantee it. I also didn't define the sources because this is designed to be added on top of the All WotC Pub+Legacy script for 2024 in the v24 sheet, not as a standalone file. However, the relevant sources will be added if they don't exist.
*/

var iFileName = "AL Adjustments for 2024 Rules v24.js";
RequiredSheetVersion("24.2.0");
 
/*This file currently includes the following additions that aren't in MPMB's legacy code: 
-The Grappling Strike Battlemaster maneuver from Tasha's (it's a little funky on how this works, so I did my best guess)
-The remaining OCFs from Tasha's exist but are commented out since it's all the Versatility options that don't matter for AL. I left them in so folks could easily include them if they actually want them anyway.
-Charms and blessings from sources outside the DMG
-Non-reprinted 2014 DMG Boons
-The Season 9 Winged Aasimar option for new Aasimar
-The SCAG racial options for tieflings since MPMB only did Winged and coded it differently
-The SCAG totem options to Wild Heart barbarian
-Some Bastion options as a class feature to help track their mechanics/cost in AL (only special facilities I might use are listed, but it would be easy enough to build on)*/

if (!SourceList.T) {
	SourceList.T = {
		name : "Tasha's Cauldron of Everything",
		abbreviation : "TCoE",
		abbreviationSpellsheet : "T",
		group: "Legacy Sources",
		url : "https://dnd.wizards.com/products/tashas-cauldron-everything",
		date : "2020/11/17"
	};
}

if (ClassSubList["fighter-battle master"]) {
	var TCoE_battleMasterManeuvers = ClassSubList["fighter-battle master"].features["subclassfeature3.1"];
	// Left out Grappling Strike, because Grapple is no longer an Athletics check in the 2024 rules
	AddFeatureChoice(TCoE_battleMasterManeuvers, true, "Grappling Strike", {
		name : "Grappling Strike",
		source : [["T", 42]],
		description : desc([
			"Immediately after hitting with a melee attack, I can use a bonus action to try to grapple",
			"I add the superiority die to the DC; I can only do this on my own turn"//Adding to the DC is my best guess with the rules change
		]),
		action : [["bonus action", " (after melee hit)"]]
	});
}


/*
//Bard Optional Class features
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


// Paladin Optional Class Features
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
*/

// Adding the extra Blessings from Icewind Dale: Rime of the Frostmaiden to the 2024 DMG Code made by Poke (other code borrowed from Nod_Hero) 
if (!SourceList.D24) {
	SourceList.D24 = {
    name: "2024 Dungeon Master's Guide",
    abbreviation: "D24",
    group : "Primary Sources",
	};
}

if (!SourceList.RotF) {
	SourceList.RotF = {
	name : "Icewind Dale: Rime of the Frostmaiden [creatures, items, spells]",
	abbreviation : "RotF",
	group: "Legacy Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/icewind-dale-rime-frostmaiden",
	date : "2020/09/15"
	};
}

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

if (!SourceList.BoMT) {
	SourceList.BoMT = {
	name : "The Book of Many Things",
	abbreviation : "BoMT",
	abbreviationSpellsheet : "MT",
	group: "Legacy Sources",
	url : "https://dndstore.wizards.com/us/en/product/865604/the-deck-of-many-things-digital-plus-physical-bundle",
	date : "2023/11/14"
	};
}

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

// Add Charm from Heroes' Feast: Saving the Children's Menu
SourceList["HFStCM"] = {
	name : "Heroes' Feast: Saving the Children's Menu",
	abbreviation : "HFStCM",
	group: "Legacy Adventure Books",
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
        description: "I can add a d10 roll to any ability check, attack roll, or saving throw I make. Once I use this boon, I can't use it again until I finish a short rest.",
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

if (!SourceList.CM) {
	SourceList.CM = { 
	name : "Candlekeep Mysteries",
	abbreviation : "CM",
	group: "Legacy Adventure Books",
	campaignSetting : "Forgotten Realms",
	url : "https://dnd.wizards.com/products/candlekeep-mysteries",
	date : "2021/03/16"
	};
}

if (!SourceList.PaBTSO) {
	SourceList.PaBTSO = {
	name : "Phandelver and Below: The Shattered Obelisk [items]",
	abbreviation : "PaBTSO",
	group: "Legacy Adventure Books",
	campaignSetting : "Forgotten Realms",
	url : "https://dndstore.wizards.com/us/product/820931/phandelver-and-below-the-shattered-obelisk-digital-plus-physical-bundle",
	date : "2023/09/19"
	};
}

SourceList["S:AiS"] = {
	name : "Spelljammer: Adventures in Space",
	abbreviation : "S:AiS",
	abbreviationSpellsheet : "SJ",
	group: "Legacy Campaign Sourcebooks",
	campaignSetting : "Spelljammer",
	url : "https://dnd.wizards.com/products/spelljammer",
	date : "2022/08/16"
};

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
// This adds the winged aasimar from the Adventurers League Player's Guide v9.1: Inglorious Redemption to the new version of Aasimar.

// Define the source
if (!SourceList.ALPGs9) {
	SourceList.ALPGs9 = { 
	name : "AL Player's Guide v9.1: Inglorious Redemption",
	abbreviation : "ALPGs9",
	group: "Legacy Adventurers League",
	url : "https://www.dropbox.com/s/8r1cwjrk6n2rzyo/AL-Players-Guide-v9.1-Forgotten-Realms.pdf?dl=1", // used to be https://www.dmsguild.com/product/208178
	date : "2019/09/17",
	defaultExcluded : true
	};
}

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
			trait : "Winged Aasimar:\nHealing Hands:\n   As a Magic action, once per long rest, I can touch a creature and roll a number of d4s equal to my Proficiency Bonus. The creature regains an amount of Hit Points equal to the total rolled.\n\nWings:\n   Once I'm 5th level, I sprout feathered wings from my shoulder blades that give me a flying speed of 30 feet when I'm not wearing heavy armor.",
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

//This adds the variants from SCAG to the new version of tiefling differently than MPMB. It assumes that you do get to keep the original Tiefling Fire resistance and lose all the spells, as that's the closest to the original feature. I also didn't bother to code the Feral Tiefling since that was only a stat change.

if (!SourceList.S) {
	SourceList.S = {
	name : "Sword Coast Adventure Guide",
	abbreviation : "SCAG",
	group: "Legacy Campaign Sourcebooks",
	campaignSetting : "Forgotten Realms",
	url : "https://dnd.wizards.com/products/sword-coast-adventurers-guide",
	date : "2015/11/03"
	};
}

AddRacialVariant("tiefling", "winged (alt)", {
	regExpSearch : /wing/i,
	name : "Winged tiefling (Alt)",
	source : [["S", 118]],
	plural : "Winged tieflings (Alt)",
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

//Code for some measure of Bastion information so that I can remember the Special Facilities. This is not full information, more of a cheat sheet for AL with the facilities that I actually care about. Crafting options are not listed.
//Due to issues with adding extra choices to other features and the fact that bastions are based on total level, not class level, this is being coded as a lvl 1 class feature for all classes. This means it will show up more than once for multiclasses.
//There's no easy way to exclude this code by default (using a separate source doesn't work properly) so if you don't care about bastions at all, delete or mark it out before adding this file.

if (!SourceList["FR:HoF"]) {
	SourceList["FR:HoF"] = {
	name: "Forgotten Realms: Heroes of Faerûn",
	abbreviation: "FR:HoF",
	abbreviationSpellsheet: "HF",
	group : "Campaign Sourcebooks",
	campaignSetting : "Forgotten Realms",
	};
}

if (!SourceList.AU) {
	SourceList.AU = {
    name: "Arcana Unleashed",
    abbreviation: "AU",
    abbreviationSpellsheet: "AU",
    group: "Primary Sources"
	};
}

if (!SourceList.D24) {
	SourceList.D24 = {
    name: "2024 Dungeon Master's Guide",
    abbreviation: "D24",
    group : "Primary Sources",
	};
}

var BastionWorkaround = {
				name : "Bastion ",
				source : [["D24", 337]],
				minlevel : 1,
				description : desc([
					'At level 5, use "Choose Feature" to add Bastion special facilities to the 3rd page. If multiclassing, use total level.',
					"When I gain a level, I can replace one special facility with another valid option."
				]),
				/*additional : levels.map(function (n) {
					return n < 5 ? "" : (n < 9 ? 2 : n < 13 ? 4 : n < 17 ? 5 : 6) + " special facilities";
				}),*/
				additional :  "CL 5: 2, 9: 4, 13: 5, 17: 6 special facilities", 
				extraname : "Bastion Special Facilities",
				extrachoices : ["Amethyst Dragon Den (prereq: PDK)","Arcane Study (prereq: can use Arcane Focus/Tool as Spell Focus)", "Circus Tent (prereq: Phantasmic Circus)","Demiplane (prereq: can use Arcane Focus/Tool as Spell Focus)", "Geothermal Vent (prereq: Crucible Keepers)","Greenhouse", "Harper Hideout (prereq: Harper)","Lighthouse (prereq: Seers of Sea and Sky)","Meditation Chamber", "Observatory (prereq: can use Spell Focus)", "Pub", "Reliquary (prereq: can use Holy Symbol/Druidic Spell Focus)", "Sanctuary (prereq: can use Holy Symbol/Druidic Spell Focus)", "Sanctum (prereq: can use Holy Symbol/Druidic Spell Focus)", "Soup Kitchen (prereq: Sheltering Hands)","Storehouse", "Teleportation Circle", "Training Area", "Workshop", "Zhentarim Travel Station (prereq: Zhent)"],
				extraTimes : levels.map(function (n) {
					return n < 5 ? 0 : n < 9 ? 2 : n < 13 ? 4 : n < 17 ? 5 : 6;
				}),
				"amethyst dragon den (prereq: pdk)" : {
					name : "Amethyst Dragon Den (PDK Only)",
					description : desc("Empower: Gain Psychic Resistance for 7 days (8 hrs/day for turn)"),
					source : [["FR:HoF", 173]],
					submenu : "[Level 5+]",
					prereqeval: function (v) { return v.characterLevel >= 5; },
				},
				"arcane study (prereq: can use arcane focus/tool as spell focus)" : {
					name : "Arcane Study",
					description : desc("Gain magical charm that lets me cast Identify once without spell slots or Material components. Lasts for 7 days or until used (LR). Crafting options."),
					source : [["D24", 336]],
					submenu : "[Level 5+]",
					prereqeval : function(v) { return (v.characterLevel >= 5) && (classes.known.artificer || classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard || (classes.known.rogue && (/arcane trickster/).test(classes.known.rogue.subclass)) || (classes.known.fighter && (/eldritch knight/).test(classes.known.fighter.subclass))); },
					limfeaname : "Arcane Study Charm",
					additional : "7 days",
					usages : 1,
					recovery : "B. turn",
					spellcastingBonus : [{
						name : "Arcane Study Charm",
						spells : ["identify"],
						selection : ["identify"],
						firstCol : 1
					}],
					spellChanges : {
						"identify" : {
						components : "V,S",
						changes : "The spell can be cast without any Material components."
						}
					},
				},
				"circus tent (prereq: phantasmic circus)" : {
					name : "Circus Tent (Phantasmic Circus Only)",
					description : desc("Circus Performance: Hirelings put on performance for 7 days. Earn 2d6 x 10 GP in proceeds."),
					source : [["AU", 106]],
					submenu : "[Level 9+]",
					prereqeval: function (v) { return v.characterLevel >= 9; },
				},
				"demiplane (prereq: can use arcane focus/tool as spell focus)" : {
					name : "Demiplane",
					description : desc("Empower: Gain Temporary Hit Points equal to 5 times my level (LR). Create 1 nonmagical object under 5 GP, no more than 5 ft sq."),
					source : [["D24", 340]],
					submenu : "[Level 17+]",
					prereqeval : function(v) { return (v.characterLevel >= 17) && (classes.known.artificer || classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard || (classes.known.rogue && (/arcane trickster/).test(classes.known.rogue.subclass)) || (classes.known.fighter && (/eldritch knight/).test(classes.known.fighter.subclass))); },
				},
				"geothermal vent (prereq: crucible keepers)" : {
					name : "Geothermal Vent (Crucible Keepers Only)",
					description : desc("Empower: Heat Tolerant - When take Fire dmg, Reaction to reduce by 1d4 + my level for 7 days. (8 hrs/day/turn)."),
					source : [["AU", 95]],
					submenu : "[Level 5+]",
					prereqeval: function (v) { return v.characterLevel >= 5; },
				},
				"greenhouse" : {
					name : "Greenhouse",
					description : desc([
						"Gain 3 fruits that give benefits of Lesser Restoration spell (last 24 hours)",
						"Harvest: 1 potion of Greater Healing or 1 poison from Assassin's Blood, Malice, Pale Tincture, Truth Serum (Turn)"
					]),
					source : [["D24", 341]],
					submenu : "[Level 9+]",
					prereqeval: function (v) { return v.characterLevel >= 9; },
					limfeaname : "Greenhouse Fruits",
					additional : "24 hrs",
					usages : 3,
					recovery : "B. turn",
					spellcastingBonus : [{
						name : "Greenhouse Fruits",
						spells : ["lesser restoration"],
						selection : ["lesser restoration"],
						firstCol : 1
					}],
					spellChanges : {
						"lesser restoration" : {
						components : "V,S,M\u2020",
						changes : "The fruit must be eaten to gain the benefits of Lesser Restoration."
						}
					},
				},
				"harper hideout (prereq: harper)" : {
					name : "Harper Hideout (Harpers Only)",
					description : desc("Empower: Roll die. If even, train with Harper to gain proficiency in Deception, Investigation or Performance for 7 days (8 hrs/day/turn)"),
					source : [["FR:HoF", 161]],
					submenu : "[Level 5+]",
					prereqeval: function (v) { return v.characterLevel >= 5; },
				},
				"lighthouse (prereq: seers of sea and sky)" : {
					name : "Lighthouse (Seers of Sea and Sky Only)",
					description : desc(". "),
					description : desc([
						"Gain magical charm that lets me cast Darkvision without a spell slot. Disappears after 3 uses (LR)",
						"Harvest: Spend 100 GP to hire salvagers who return with 1d4 x 100 GP (Turn)"
					]),
					source : [["AU", 110]],
					submenu : "[Level 9+]",
					prereqeval: function (v) { return v.characterLevel >= 9; },
					limfeaname : "Lighthouse Charm",
					usages : 3,
					recovery : "B. turn",
					spellcastingBonus : [{
						name : "Lighthouse Charm",
						spells : ["darkvision"],
						selection : ["darkvision"],
						firstCol : 1
					}],
				},
				"meditation chamber" : {
					name : "Meditation Chamber",
					description : desc("Gain advantage on 2 types of saving throws for 7 days. Roll 2d6 to determine which (Turn)"),
					source : [["D24", 342]],
					submenu : "[Level 13+]",
					prereqeval: function (v) { return v.characterLevel >= 13; },
					savetxt : { text : ["Adv on 2 types of saves (see bastion)"] },
				},
				"observatory (prereq: can use spell focus)" : {
					name : "Observatory",
					description : desc("Gain magical charm that lets me cast Contact Other Plane without spell slots. Lasts for 7 days or until used (LR). Empower: Roll die. If odd, gain Charm of Darkvision, Heroism or Vitality."),
					source : [["D24", 343]],
					submenu : "[Level 13+]",
					prereqeval : function(v) { return (v.characterLevel >= 13) && (classes.known.cleric || classes.known.druid || classes.known.paladin || classes.known.ranger || classes.known.artificer || classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard || (classes.known.rogue && (/arcane trickster/).test(classes.known.rogue.subclass)) || (classes.known.fighter && (/eldritch knight/).test(classes.known.fighter.subclass))); },
					limfeaname : "Observatory Charm",
					additional : "7 days",
					usages : 1,
					recovery : "B. turn",
					spellcastingBonus : [{
						name : "Observatory Charm",
						spells : ["contact other plane"],
						selection : ["contact other plane"],
						firstCol : 1
					}]
				},
				"pub" : {
					name : "Pub",
					description : desc([
						"5 drink options. Pick 1 per bastion turn (2 if Vast). All durations 24 hours.",
						"-Bigby's Burden: Gain Enlarge effect of Enlarge/Reduce spell",
						"-Kiss of the Spider Queen: Gain effect of Spider Climb",
						"-Moonlight Serenade: Gain 60 ft Darkvision or increase existing range by 60 ft",
						"-Positive Reinforcement: Gain Resistance to Necrotic damage",
						"-Sterner Stuff: Automatically pass saves against the Frightened condition"
					]),
					source : [["D24", 343]],
					submenu : "[Level 13+]",
					prereqeval: function (v) { return v.characterLevel >= 13; },
				},
				"reliquary (prereq: can use holy symbol/druidic spell focus)" : {
					name : "Reliquary",
					description : desc("Gain magical charm that lets me cast Greater Restoration without spell slots or Material components (LR). Harvest: Get talisman that can replace 1 spell component up to 1000 GP (Turn)"),
					source : [["D24", 344]],
					submenu : "[Level 13+]",
					prereqeval : function(v) { return (v.characterLevel >= 13) && (classes.known.cleric || classes.known.druid || classes.known.paladin || classes.known.ranger); },
					//prereqeval: function (v) { return v.characterLevel >= 13; },
					limfeaname : "Reliquary Charm",
					additional : "7 days",
					usages : 1,
					recovery : "B. turn",
					spellcastingBonus : [{
						name : "Reliquary Charm",
						spells : ["greater restoration"],
						selection : ["greater restoration"],
						firstCol : 1
					}],
					spellChanges : {
						"greater restoration" : {
						components : "V,S",
						changes : "The spell can be cast without any Material components."
						}
					},
				},
				"sanctuary (prereq: can use holy symbol/druidic spell focus)" : {
					name : "Sanctuary",
					description : desc("Gain a magical charm that lets me cast Healing Word without a spell slot. Lasts for 7 days or until used (LR). Crafting options."),
					source : [["D24", 345]],
					submenu : "[Level 5+]",
					prereqeval : function(v) { return (v.characterLevel >= 5) && (classes.known.cleric || classes.known.druid || classes.known.paladin || classes.known.ranger); },
					//prereqeval: function (v) { return v.characterLevel >= 5; },
					limfeaname : "Sanctuary Charm",
					additional : "7 days",
					usages : 1,
					recovery : "B. turn",
					spellcastingBonus : [{
						name : "Sanctuary Charm",
						spells : ["healing word"],
						selection : ["healing word"],
						firstCol : 1
					}]
				},
				"sanctum (prereq: can use holy symbol/druidic spell focus)" : {
					name : "Sanctum",
					description : desc([
						"Gain magical charm that lets me cast Heal without a spell slot. Lasts for 7 days or until used (LR).",
						"Empower: Name beneficiary. Each time they finish a LR for 7 days, they gain temp HP equal to my level.",
						"I have Word of Recall prepared. When cast, I can return to my Sanctum and 1 creature gains the benefit of Heal on arrival."
					]),
					source : [["D24", 346]],
					submenu : "[Level 17+]",
					prereqeval : function(v) { return (v.characterLevel >= 17) && (classes.known.cleric || classes.known.druid || classes.known.paladin || classes.known.ranger); },
					//prereqeval: function (v) { return v.characterLevel >= 17; },
					limfeaname : "Sanctum Heal",
					additional : "7 days",
					usages : 1,
					recovery : "B. turn",
					spellcastingBonus: [{
						name : "Sanctum Charm",
						spells : ["heal"],
						selection : ["heal"],
						firstCol : 1
					}, {
						name: "Sanctum Recall",
						spells: ["word of recall"],
						selection: ["word of recall"],
						firstCol: "markedbox"
					}],
				},
				"soup kitchen (prereq: sheltering hands)" : {
					name : "Soup Kitchen (Sheltering Hands Only)",
					description : desc("Gain magical charm that lets me cast Goodberry once without a spell slot. Lasts for 7 days or until used (LR)."),
					source : [["AU", 113]],
					submenu : "[Level 5+]",
					prereqeval: function (v) { return v.characterLevel >= 5; },
					limfeaname : "Soup Kitchen Charm",
					additional : "7 days",
					usages : 1,
					recovery : "B. turn",
					spellcastingBonus : [{
						name : "Soup Kitchen Charm",
						spells : ["goodberry"],
						selection : ["goodberry"],
						firstCol : 1
					}],
				},
				"storehouse" : {
					name : "Storehouse",
					description : desc([
						"Trade: Procure goods worth 500 gp (2000 gp at lvl 9, 5000 gp at lvl 13) [Turn]",
						"Trade: Sell goods in Storehouse for 10 percent profit (20 at lvl 9, 50 at 13, 100 at 17) [Turn]"
					]),
					source : [["D24", 347]],
					submenu : "[Level 5+]",
					prereqeval: function (v) { return v.characterLevel >= 5; },
				},
				"teleportation circle" : {
					name : "Teleportation Circle",
					description : desc("Recruit: 50% chance for NPC spellcaster to accept invitation (even roll). Stays for 14 days or until casts up to 4th level Wizard spell (8th at level 17+)"),
					source : [["D24", 347]],
					submenu : "[Level 9+]",
					prereqeval: function (v) { return v.characterLevel >= 9; },
				},
				"training area" : {
					name : "Training Area",
					description : desc([
						"Empower: 5 training options. Pick 1. All last 7 days (8 hrs/day/turn).",
						"-Battle Expert: When take damage from Unarmed Strike/weapon attack, Reaction to reduce by 1d4",
						"-Skills Expert: Gain proficiency in Acrobatics, Athletics, Performance, Sleight of Hand or Stealth",
						"-Tools Expert: Gain proficiency with 1 tool of my choice",
						"-Unarmed Combat Expert: My Unarmed Strikes deal +1d4 Bludgeoning damage",
						"-Weapon Expert: Gain proficiency in 1 Simple or Martial weapon. If already proficient, gain Weapon Mastery"
					]),
					source : [["D24", 348]],
					submenu : "[Level 9+]",
					prereqeval: function (v) { return v.characterLevel >= 9; },
				},
				"workshop" : {
					name : "Workshop",
					description : desc("After a short rest, gain Heroic Inspiration. Crafting options."),
					source : [["D24", 348]],
					submenu : "[Level 5+]",
					prereqeval: function (v) { return v.characterLevel >= 5; },
				},
				"zhentarim travel station (prereq: zhent)" : {
					name : "Zhentarim Travel Station (Zhent Only)",
					description : desc("Max travel pace increases by 1 step (LR). Research: Advantage on Wisdom (Survival) checks to forage or navigate for 1 journey (Turn)."),
					source : [["FR:HoF", 181]],
					submenu : "[Level 5+]",
					prereqeval: function (v) { return v.characterLevel >= 5; },
				},
}

RunFunctionAtEnd(function() {
    // Iterate over the ClassList object
    for(var key in ClassList) {
        var theClass = ClassList[key];

        if(!theClass.features) continue; // Skip if no features
        if(!theClass.features["bastionworkaround"]) theClass.features["bastionworkaround"] = BastionWorkaround; // Add the feature if not present
    }
})
