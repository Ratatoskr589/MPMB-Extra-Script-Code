/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me. It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). Additionally, due to the length of some descriptions, I recommend using auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will likely run out of space, even with the abbreviations.
*/

/*  Subject: Flavored Items from AL adventures
    Effect:	This script adds the flavored versions of standard magic items found in AL adventures to the MPMB sheet. They will all be listed as AL [item category] in the Magic Item selection, which will bring a pop up for individual items sorted alphabetically by item name and then module code. The main categories are as follows:
	Accessories (Belts, Bracers, Brooches, Gauntlets, Gloves), Books (Books & Tomes), Containers (Bags, Bottles, Decanters, Haversacks, Holes, Jugs, Pouches), Cloaks etc (Capes, Cloaks, Mantles, Shrouds), Eyewear (Eyes, Glasses, Goggles), Footwear (Boots, Slippers), Figurines, Headwear (Caps, Circlets, Hats, Headbands, Helms, Ioun Stones), Horns (musical & otherwise), Instruments (Bardic, Horns, Musical Pipes), Necklaces (Amulets, Periapts, Medallions, Necklaces), Rings, Robes, Rods, and Wands. The Equipment category has everything else.
	
	For ease of coding & to cut down on the categories, all staffs are in the AL_Magic_Weapons file, regardless of whether you can use them to hit things or not. 
	
	This is not a complete list since I do not have every published adventure, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor. But if I missed something, let me know.*/
	
	//Complete: S1-S5
	
var iFileName = "AL Flavored Items.js";
RequiredSheetVersion(13);

// Define the source
SourceList["AL"] = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};

//AL flavored items
MagicItemsList["al accessories"] = {
		name : "AL Accessories",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Belt of Dwarvenkind (DDEX2-4)", "Belt of Fire Giant Strength (DDEP3)","Bracers of Archery (DDEX3-14)","Bracers of Archery (DDAL5-2)","Bracers of Defense (DDAL4-14)","Brooch of Shielding (DDEX2-5)", "Brooch of Shielding (DDAL5-3)","Gauntlets of Ogre Power (DDAL5-12)"],
	"belt of dwarvenkind (ddex2-4)" : {
		name : "Belt of Dwarvenkind (DDEX2-4)",
		source : [["SRD", 212], ["D", 155]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This stout belt is gem-encrusted with a buckle made of polished stone and never gets dirty. While wearing this belt, your Con increases by 2 (to max 20), adv. on Cha (Persuasion) checks to interact with dwarves, adv. on saves vs. poison, resistance to poison damage, darkvision 60 ft, and fluent in Dwarvish. Each day at dawn, there is a 50% chance you grow a full beard or current beard becomes visibly thicker (if capable of growing one).",
		descriptionFull : "This stout belt is gem-encrusted with a buckle made of polished stone and never gets dirty. While wearing this belt, you gain the following benefits:\n \u2022 Your Constitution score increases by 2, to a maximum of 20.\n \u2022 You have advantage on Charisma (Persuasion) checks made to interact with dwarves.\n\nIn addition, while attuned to the belt, you have a 50% chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.\n\nIf you aren't a dwarf, you gain the following additional benefits while wearing the belt:\n \u2022 You have advantage on saving throws against poison, and you have resistance against poison damage.\n \u2022 You have darkvision out to a range of 60 feet.\n \u2022 You can speak, read, and write Dwarvish.",
		attunement : true,
		languageProfs : ["Dwarvish"],
		vision : [["Darkvision", 60]],
		savetxt : { adv_vs : ["poison"] },
		dmgres : ["Poison"],
		scores : [0, 0, 2, 0, 0, 0]
		},
	"belt of fire giant strength (ddep3)" : {
		name : "Belt of Fire Giant Strength (DDEP3)",
		source : [["SRD", 211], ["D", 155]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This wide belt is made of what appears to be supple, black leather studded with mithral. Closer examination reveals the grisly truth — it is made from the tanned hides of drow. While wearing this belt, your Strength score is set to 25 as long as it isn't already 25 or more.",
		attunement : true,
		scoresOverride : [25, 0, 0, 0, 0, 0]
		},
	"bracers of archery (ddex3-14)" : {
		name : "Bracers of Archery (DDEX3-14)",
		source : [["SRD", 212], ["D", 156]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Etched around these bracers are words in Elvish that read “Strike True.” While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		attunement : true,
		weaponProfs : [false, false, ["longbow", "shortbow"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
						output.extraDmg += 2;
					}
				},
				'I add +2 to the damage of attacks I make with shortbows and longbows.'
				],
			}
		},
	"bracers of archery (ddal5-2)" : {
		name : "Bracers of Archery (DDAL5-2)",
		source : [["SRD", 212], ["D", 156]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These bracers are bulky w/ hexagon designs that don't match any common racial or family style. The hexagons turn blue in cold and orange in heat. The bearer suffers no harm in temps as cold as -20 ̊ F or as warm as 120 ̊ F. While wearing these bracers, you have proficiency w/ longbows and shortbows, and you gain a +2 bonus to dmg rolls on ranged atks made w/ such weapons.",
		descriptionFull : "These bracers are bulky with hexagon designs along them that do not match any common racial or family styling. In addition, the hexagons turn blue in the cold or a warm orange in heat. The bearer suffers no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit. While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		attunement : true,
		savetxt : { immune : ["temps btwn -20 ̊ & 120 ̊ F"] },
		weaponProfs : [false, false, ["longbow", "shortbow"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
						output.extraDmg += 2;
					}
				},
				'I add +2 to the damage of attacks I make with shortbows and longbows.'
				],
			}
		},
	"bracers of defense (ddal4-14)" : {
		name : "Bracers of Defense (DDAL4-14)",
		source : [["SRD", 212], ["D", 156]],
		rarity : "rare",
		magicItemTable : "G",
		description : "These leather bracers are stitched with a symbol of an open hand, bloodlessly pierced through the palm with a heart shaped hole. The bracers fill the wearer with the belief that that is love eternal, regardless of creed, nationality, or vital signs. While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		attunement : true,
		extraAC : [{
			name : "Bracers of Defense",
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
			}]
		},
	"brooch of shielding (ddex2-5)" : {
		name : "Brooch of Shielding (DDEX2-5)",
		source : [["SRD", 212], ["D", 156]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This brooch is fashioned to look like a paint brush whose bristles are aflame. A mad cackling quietly emanates from it every sunset. While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the Magic Missile spell.",
		dmgres: ["Force"],
		savetxt: {
			immune: ["Magic Missile spell"]
			}
		},
	"brooch of shielding (ddal5-3)" : {
		name : "Brooch of Shielding (DDAL5-3)",
		source : [["SRD", 212], ["D", 156]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This brooch is fashioned from a tiny leaf inlaid in gold and silver. While the leaf isn't alive, it changes color with the seasons as if it were. While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the Magic Missile spell.",
		dmgres: ["Force"],
		savetxt: {
			immune: ["Magic Missile spell"]
			}
		},
	"gauntlets of ogre power (ddal5-12)" : {
		name : "Gauntlets of Ogre Power (DDAL5-12)",
		source : [["SRD", 223], ["D", 171]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These sturdy leather gauntlets appear to be in pristine condition. Indeed, any nicks or tears in the material mend w/i 24 hours, and any blood, mud or other grime that soils the gauntlets quickly dries, falling away in fine flakes until the surface is again clean. Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		descriptionFull : "These sturdy leather gauntlets appear to be in pristine condition. Indeed, any nicks or tears in the material mend within twenty-four hours. Additionally, any blood, mud or other grime that soils the gauntlets quickly dries, falling away in fine flakes until the surface is again clean. Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		attunement : true,
		scoresOverride : [19, 0, 0, 0, 0, 0]
	},
}

MagicItemsList["al books"] = {
		name : "AL Books",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Tome of Understanding (DDAL5-19)"],
	"tome of understanding (ddal5-19)" : {
		name : "Tome of Understanding (DDAL5-19)",
		source : [["SRD", 247], ["D", 209]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "The cover of this iron-bound book is scribed w/ many swirling tentacles. Anyone carrying the book is always aware of eyes from a distant realm following them. This book contains intuition & insight exercises & its words are charged w/ magic. If you spend 48 hrs over 6 days studying the book & practicing its guidelines, your WIS score goes up by 2, as does your max. The tome then loses its magic for 100 yrs.",
		descriptionFull : "The cover of this iron-bound book is scribed with many swirling tentacles. A character carrying the book is always aware of eyes from a distant realm following them. This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
		weight : 5,
		eval : function() {
			MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Understanding", "Wisdom");
		}
	},
}

MagicItemsList["al cloaks etc."] = {
		name : "AL Cloaks etc.",
		allowDuplicates : true,
		type : "wondrous item",
	choices : ["Cape of the Mountebank (DDAL4-7)", "Cloak of Displacement (DDAL5-5)", "Cloak of Elvenkind (DDEX1-8)", "Mantle of Spell Resistance (DDEX1-13)"],
	"cape of the mountebank (ddal4-7)" : {
		name : "Cape of the Mountebank (DDAL4-7)",
		source : [["SRD", 213], ["D", 157]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This long cape is made of light-grey silk trimmed in coarse, black fur. Although obviously high quality, it appears tattered & worn & smells faintly of brimstone. You can use the cape to cast Dimension Door as an action once per day. When you disappear, you leave behind a cloud of stale dust & appear in a similar cloud at your destination. The dust lightly obscures both spaces & dissipates at the end of your next turn, or in a light or stronger wind.",
		descriptionFull : "This long cape is made of light-grey silk trimmed in coarse, black fur. Although it is obviously of high quality, it appears tattered and worn. Instead of smoke, a cloud of stale dust is left behind when the wearer disappears. This cape smells faintly of brimstone. While wearing it, you can use it to cast the Dimension Door spell as an action. This property of the cape can't be used again until the next dawn.\n   When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.",
		limfeaname : "Cape of the Mountebank",
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : {
			name: "Cape of the Mountebank",
			spells: ["dimension door"],
			selection: ["dimension door"],
			firstCol : "oncelr"
			}
		},
	"cloak of displacement (ddal5-5)" : { 
		name : "Cloak of Displacement (DDAL5-5)",
		source : [["SRD", 214], ["D", 158]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This cloak has a bone toggle & is made of the pelt of a smooth, black-furred creature. The gold-embroidered hem shows a poem: “Six men in pain; six men rent. Blood, it falls like rain; broken bodies bent. Six men plead & six men cry; Tearing arm & leg, six men die.”. While wearing the cloak, creatures have disadv. on atk rolls against you. If you take dmg, this property stops working until your next turn. It's also suppressed if you're incapacitated, restrained, or unable to move.",
		descriptionFull : "This cloak is made of the pelt of a smooth, black-furred creature. A bone toggle fastens the cloak around its wearer’s neck. Close examination of the gold-embroidered hem reveals a poem that reads (in Common): “Six men in pain; six men rent. Blood, it falls like rain; broken bodies bent. Six men plead; and six men cry; Tearing arm and leg, six men die.” While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.",
		attunement : true
	},
	"cloak of elvenkind (ddex1-8)" : {
		name : "Cloak of Elvenkind (DDEX1-8)",
		source : [["SRD", 214], ["D", 158]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This supple light green cloak embroidered with a delicate leaf pattern makes you feel comfortable when worn, suffering no harm from temperatures as cold as 0 ̊ F or as warm as 120 ̊ F. While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadv., & you have adv. on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		descriptionFull: "This supple light green cloak embroidered with a delicate leaf pattern makes you feel comfortable when worn, suffering no harm from temperatures as cold as 0 ̊ Farenheit or as warm as 120 ̊ Farenheit. While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		action : [["action", "Cloak of Elvenkind (hood up/down)"]],
		savetxt : { immune : ["temps btwn 0 ̊ & 120 ̊ F"] },
		eval : function () {
			if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
				SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
			}
		},
		removeeval : function () {
			SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
		},
	"mantle of spell resistance (ddex1-13)" : {
		name : "Mantle of Spell Resistance (DDEX1-13)",
		source : [["SRD", 229], ["D", 180]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		savetxt : { adv_vs : ["spells"] },
		description: "This fine linen crimson cloak is edged with cloth-of-gold, and bears a gold clasp. The wearer’s ears tingle when a spell targets the wearer, whether or not it takes effect. While attuned to and wearing this cloak, you have advantage on saving throws against spells."
		},
}

MagicItemsList["al containers"] = {
		name : "AL Containers",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Alchemy Jug (DDEX3-8)"],
	"alchemy jug (ddex3-8)" : {
		name : "Alchemy Jug (DDEX3-8",
		source : [["D", 150]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This jug is made of a thin metal strips bolted together. It is covered in dwarven runes in the form of night sky constellations. As an action, command the jug to produce liquid; or an action to uncork it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal).",
		weight : 12,
		descriptionLong : "This jug is made of a thin metal strips bolted together. It is covered in dwarven runes in the form of night sky constellations. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): acid (8 fl. oz.), basic poison (1/2 fl. oz.), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
		descriptionFull : "This jug is made of a thin metal strips bolted together. It is covered in dwarven runes in the form of night sky constellations. The jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty." + "\n   " + "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named." + "\n   " + "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n" + toUni("Max\tLiquid\t\tMax\tLiquid") + "\n8 ounces\tAcid\t\t1 quart\tOil\n1/2 ounce\tBasic poison\t2 gallons\tVinegar\n4 gallons\tBeer\t\t8 gallons\tWater, fresh\n1 gallon\tHoney\t\t12 gallons\tWater, salt\n2 gallons\tMayonnaise\t1 gallon\tWine"
	},
}

MagicItemsList["al equipment"] = {
		name : "AL Equipment",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Bonds of Fear (DDAL4-12)","Stone of Good Luck (DDEP4)","Wind Fan (DDAL4-5)"],
	"bonds of fear (ddal4-12)" : {
		name : "Bonds of Fear (Dimensional Shackles)",
		source : [["SRD", 219], ["D", 165]],
		rarity : "rare",
		magicItemTable : "G",
		description : "These chains are etched with twisted screaming faces & clouds of fog. As action, shackle incapacitated Small-Large size creature. Target is enveloped in 1-inch thick mist that dampens hearing & vision. Victim is barely aware of surroundings & their loudest screams heard as whispers. Shadowy forms move through the mist as if victim not alone. Shackles act as manacles + prevent extradimensional mvmt, but not portal travel. You & designees can remove. Every 30 days, target may break w/ DC 30 Ath. chk.",
		descriptionLong : "These chains are etched with twisted screaming faces and clouds of fog. You can use an action to place these shackles on an incapacitated creature. The shackles adjust to fit Small to Large size creatures. When placed, they envelope the target in 1-inch thick mist that dampens hearing and vision. The victim is only peripherally aware of the world around them and even their loudest screams are heard only as soft whispers. Occasionally shadowy forms move through the mist as if the victim wasn't alone. The shackles serve as mundane manacles & prevent target from using methods of extradimensional movement, such as teleportation or travel to a different plane. They don't prevent the creature from passing-through an interdimensional portal. You and any creature you designate when you use the shackles can remove them with an action. Once every 30 days, the bound creature can make a DC 30 Str (Athletics) check. On a success, the creature breaks free and destroys the shackles.",
		descriptionFull : "These chains are etched with twisted screaming faces and clouds of fog. You can use an action to place these shackles on an incapacitated creature. The shackles adjust to fit a creature of Small to Large size. When placed upon a victim, they are enveloped in mist an inch thick that dampens hearing and vision passing through it. The victim is only peripherally aware of the world around them and even their loudest screams can be heard only as the softest of whispers. Occasionally shadowy forms can be seen moving through the mist, as if the victim were not alone. In addition to serving as mundane manacles, the shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don't prevent the creature from passing-through an interdimensional portal.\n   You and any creature you designate when you use the shackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a success, the creature breaks free and destroys the shackles.",
		action : [["action", "Dimensional Shackles (bind/remove)"]]
	},
	"stone of good luck (ddep4)" : {
		name : "Stone of Good Luck (DDEP4)",
		source : [["SRD", 246], ["D", 205]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The center of this fist-sized emerald appears to be hollow and filled with a viscous green liquid. When agitated, the gem grows warm. While this item is on your person, you gain a +1 bonus to ability checks and saving throws.",
		attunement : true,
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"wind fan (ddal4-5)" : {
		name : "Wind Fan (DDAL4-5)",
		source : [["SRD", 250], ["D", 213]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This fan is made of thin, brittle parchment glued over sharpened iron tines. When used, its wind is bone-chillingly cold & carries the sickly-sweet stench of rotting flesh. The fan can be used as a weapon: a nonmagical short sword (dealing slashing dmg) when open or a nonmagical club when closed. While holding fan, action to cast Gust of Wind spell (DC 13). Once used, the fan shouldn't be used again until dawn. Each time used before then, cumulative 20% chance of destruction.",
		descriptionFull : "This fan is made of thin, brittle parchment glued over sharpened iron tines. When used, the wind issuing from this fan is bone-chillingly cold and carries the sickly-sweet stench of rotting flesh. The fan can be used as a weapon; it is treated as a nonmagical short sword (dealing slashing damage) when it is open, or as a non-magical club when it is closed. While holding this fan, you can use an action to cast the Gust of Wind spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20% chance of not working and tearing into useless, nonmagical tatters.",
		limfeaname : "Wind Fan",
		usages : 1,
		recovery : "dawn",
		additional : "more uses +20% to destroy",
		fixedDC : 13,
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["gust of wind"],
			selection : ["gust of wind"],
			firstCol : "oncelr"
		}
	},
}

MagicItemsList["al eyewear"] = {
		name : "AL Eyewear",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Eyes of Charming (DDAL4-4)", "Eyes of Minute Seeing (DDEX3-12)", "Goggles of Night (DDEX1-4)", "Goggles of Night (DDAL7-4)", "Goggles of Night (DDAL8-2)"],
	"eyes of charming (ddal4-4)" : {
		name : "Eyes of Charming (DDAL4-4)",
		source : [["SRD", 220], ["D", 168]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These glasses sport lenses of brilliant amber w/ slender slivers of green glass resembling the vertical pupils of a serpent’s eyes & have 3 charges. While wearing them, you can expend 1 charge as an action to cast the Charm Person spell (save DC 13) on a humanoid w/i 30 ft of you, provided that you & the target can see each other. If you're evil, you may choose to impose disadv. on the effect’s saving throw. Once this feature of the glasses has been used, it can’t be used again until the following dawn. The glasses also regain all expended charges daily at dawn.",
		attunement : true,
		limfeaname : "Eyes of Charming",
		usages : 3,
		recovery : "dawn",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["charm person"],
			selection : ["charm person"],
			firstCol : 1
		},
		fixedDC : 13,
		spellFirstColTitle : "Ch"
	},
	"eyes of minute seeing (ddex3-12)" : { 
		name : "Eyes of Minute Seeing (DDEX3-12)",
		source : [["SRD", 221], ["D", 168]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "These smoky crystal lenses are set in a brass frame and allow the wearer to read Abyssal. While using them, you can see much better than normal out to a range of 1 ft. You have advantage on Int (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
		vision : [["Adv. on Investigation checks based on sight", 1]],
		languageProfs : ["Abyssal (Reading only)"]
	},
	"goggles of night (ddex1-4)" : {
		name : "Goggles of Night (DDEX1-4)",
		source : [["SRD", 224], ["D", 172]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "These brass-framed goggles feel cool to the touch when worn. While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision. wearing the goggles increases its range by 60 feet.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
	"goggles of night (ddal7-4)" : {
		name : "Goggles of Night (DDAL7-4)",
		source : [["SRD", 224], ["D", 172]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "The green-tinted lenses of these goggles are set in frames of platinum & jade & held in place with a broad strap of matte-black leather. When worn, your sense of smell is unusually strong, & living creatures you can see are visualized in varying shades of blues, reds, & yellows that correspond to their body’s natural heat. While wearing these lenses, you have darkvision out to a range of 60 ft. If you already have darkvision. wearing the goggles increases its range by 60 ft.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
	"goggles of night (ddal8-2)" : {
		name : "Goggles of Night (DDAL8-2)",
		source : [["SRD", 224], ["D", 172]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "These goggles are done in a bat motif and studded with teeth. The wearer frequently finds blood dripping from their scalp or face as if they have been bitten by a small animal. While wearing these lenses, you have darkvision out to a range of 60 feet. If you already have darkvision. wearing the goggles increases its range by 60 feet.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
}

MagicItemsList["al figurines"] = {
		name: "AL Figurines",
		source: [["SRD", 221], ["D", 169]],
		type: "wondrous item",
		allowDuplicates : true,
		descriptionFull: "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
		action : [["action", "Figurine of Wondrous Power"]],
		choices : ["Bronze Griffon", "Ebony Fly", "Golden Lions", "Ivory Goats", "Marble Elephant", "Obsidian Steed", "Onyx Dog", "Serpentine Owl (DDEX2-9)", "Snowy Owl (DDEP10-0)"],
		"bronze griffon" : {
			rarity : "rare",
			magicItemTable : "G",
			description: "As an action, I can speak the command word and throw this bronze statuette to an unoccupied space within 60 ft, where it becomes a griffon for up to 6 hours, until I use the command word again, or it reaches 0 hp. It is friendly, understands my languages, and obeys my commands.",
			descriptionLong: "As an action, I can speak the command word and throw this bronze statuette of a griffon rampant to an unoccupied space within 60 ft, where it becomes a griffon for up to 6 hours, until I use an action to repeat the command word, or it reaches 0 hp. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 5 days have passed.",
			descriptionFull: "This figurine of wondrous power is a bronze statuette of a griffon rampant, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living griffon. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 6 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 5 days have passed.",
			usages : 1,
			recovery : "5 days"
		},
		"ebony fly" : {
			rarity: "rare",
			magicItemTable : "G",
			description: "As an action, I can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a giant fly for up to 12 hours, until I use the command word again, or it reaches 0 hp. It is friendly, understands my languages, obeys my commands, and can be ridden as a mount.",
			descriptionLong: "As an action, I can speak the command word and throw this ebony statuette of a horsefly to an unoccupied space within 60 ft, where it becomes a giant fly for up to 12 hours, until I use an action to repeat the command word, or it reaches 0 hp. It is friendly to me and my allies, understands my languages, obeys my spoken commands, and can be ridden as a mount. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 2 days have passed.",
			descriptionFull : "This figurine of wondrous power is an ebony statuette carved in the likeness of a horsefly, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant fly and can be ridden as a mount. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 12 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.",
			usages : 1,
			recovery : "2 days"
		},
		"golden lions" : {
			rarity : "rare",
			magicItemTable : "G",
			description: "As an action, I can speak the command word and throw one or both of these gold statuettes to an unoccupied space within 60 ft, where each becomes a lion for up to 1 hour, until I use the command word again, or it reaches 0 hp. They are friendly, understands my languages, and obeys my commands.",
			descriptionLong: "As an action, I can speak the command word and throw one or both of these gold statuette of a lion to an unoccupied space within 60 ft, where each becomes a lion for up to 1 hour, until I use an action to repeat the command word, or it reaches 0 hp. They are friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
			descriptionFull : "This figurine of wondrous power is a pair of gold statuette of lions, small enough to fit in a pocket. If you use an action to speak the command word and throw one or both of the figurine to a point on the ground within 60 feet of you, each figurine becomes a living lion. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 1 hour. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
			usages : 2,
			recovery : "7 days"
		},
		"ivory goats" : {
			rarity : "rare",
			magicItemTable : "G",
			description: "As an action, I can speak the command word and throw one or more of these 3 ivory statuettes to an unoccupied space within 60 ft, where each becomes a creature, until I use the command word again, or it reaches 0 hp. They are friendly, understands my languages, and obeys my commands. See Notes page.",
			descriptionLong: "As an action, I can speak the command word and throw one or more of these three ivory statuette of a lion to an unoccupied space within 60 ft, where each becomes a creature, until I use an action to repeat the command word, or it reaches 0 hp. They are friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until a certain amount of time has passed. See Notes page for details about each of the statuettes.",
			descriptionFull: "This figurine of wondrous power is three ivory statuettes of goats, small enough to fit in a pocket. Each goat looks unique and functions differently from the others. If you use an action to speak the command word and throw one or more of the figurines to a point on the ground within 60 feet of you, each figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description." +
			"\n \u2022 The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges." +
			"\n \u2022 The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed." +
			"\n \u2022 The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed.",
			extraLimitedFeatures : [{
				name : "Figurine of Wondrous Power [Ivory Goat of Traveling]",
				usages : 24,
				recovery : "7 days"
			}, {
				name : "Figurine of Wondrous Power [Ivory Goat of Travail]",
				usages : 1,
				recovery : "30 days"
			}, {
				name : "Figurine of Wondrous Power [Ivory Goat of Terror]",
				usages : 1,
				recovery : "15 days"
			}],
			toNotesPage : [{
				name : "Ivory Goat Details",
				note : [
					"The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.",
					"The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.",
					"The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but I can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-ft radius aura of terror while I am riding it. Any creature hostile to me that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed."
				]
			}],
			weaponsAdd : ["Lance +1, Ivory Goat Horn", "Longsword +2, Ivory Goat Horn"],
			weaponOptions : [{
				baseWeapon : "lance",
				regExpSearch : /^(?=.*ivory)(?=.*goat)(?=.*lance).*$/i,
				name : "Lance +1, Ivory Goat Horn",
				source : [["SRD", 222], ["D", 170]]
			}, {
				baseWeapon : "longsword",
				regExpSearch : /^(?=.*ivory)(?=.*goat)(?=.*longsword).*$/i,
				name : "Longsword +2, Ivory Goat Horn",
				source : [["SRD", 222], ["D", 170]]
			}]
		},
		"marble elephant" : {
			rarity : "rare",
			magicItemTable : "G",
			description: "As an action, I can speak the command word and throw this marble statuette to an unoccupied space within 60 ft, where it becomes a elephant for up to 24 hours, until I use the command word again, or it reaches 0 hp. It is friendly, understands my languages, and obeys my commands.",
			descriptionLong: "As an action, I can speak the command word and throw this marble statuette of about 4 inches high and long to an unoccupied space within 60 ft, where it becomes a elephant for up to 24 hours, until I use an action to repeat the command word, or it reaches 0 hp. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
			descriptionFull: "This figurine of wondrous power is a marble statuette of about 4 inches high and long, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living elephant. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 24 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
			usages : 1,
			recovery : "7 days"
		},
		"obsidian steed" : {
			rarity : "very rare",
			magicItemTable : "H",
			description: "As an action, I can speak the command word and throw this obsidian statuette to an unoccupied space within 60 ft, where it becomes a nightmare for up to 24 hours, until it reaches 0 hp, or I use the command word again. It is friendly, understands my languages, and obeys my commands. See Notes page.",
			descriptionLong: "As an action, I can speak the command word and throw this polished obsidian statuette of an horse to an unoccupied space within 60 ft, where it becomes a nightmare for up to 24 hours, until I use an action to repeat the command word, or it reaches 0 hp. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. It only fights to defend itself. When it reverts back to a figurine, it can't be used again until 5 days have passed. See Notes page for more details.",
			descriptionFull: "This figurine of wondrous power is a polished obsidian statuette of a horse, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living nightmare. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 24 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 5 days have passed." +
			"\n   The nightmare fights only to defend itself.\n   If you have a good alignment, the figurine has a 10% chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form.",
			usages : 1,
			recovery : "5 days",
			toNotesPage : [{
				name : "Obsidian Steed Details",
				note : "\n   If I have a good alignment, the figurine has a 10% chance each time I use it to ignore my orders, including a command to revert to figurine form. If I mount the nightmare while it is ignoring my orders, we are both instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form."
			}]
		},
		"onyx dog" : {
			rarity : "rare",
			magicItemTable : "G",
			description: "As an action, I can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a mastiff for up to 6 hours, until I use the command word again, or it reaches 0 hp. It has 60 ft darkvision, see invisible out to 60 ft, is friendly, understands me, and obeys my commands.",
			descriptionLong: "As an action, I can speak the command word and throw this onyx statuette to an unoccupied space within 60 ft, where it becomes a mastiff for up to 6 hours, until I use an action to repeat the command word, or it reaches 0 hp. It has Intelligence 8, speaks common, darkvision out to 60 ft and can see invisible creatures and objects out to that same range. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
			descriptionFull: "This figurine of wondrous power is an onyx statuette of a dog, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living mastiff. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. It is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 6 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
			usages : 1,
			recovery : "7 days"
		},
		"serpentine owl (ddex2-9)" : {
			name: "Serpentine Owl (DDEX2-9)",
			rarity : "rare",
			magicItemTable : "G",
			description: "As action, speak the command word & throw fine serpentine statuette to unoccupied space w/i 60 ft, where it becomes a giant snowy owl for up to 8 hrs, until you repeat command word, or it reaches 0 hp. It's friendly, understands your languages, & obeys spoken commands. As long as it's on the same plane, it can communicate telepathically w/ you. If no commands, defends itself but nothing else. After reverts, can't be used again for 2 days.",
			descriptionFull: "This figurine of wondrous power is a serpentine statuette of an owl, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant snowy owl. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. It can telepathically communicate with you at any range if you and it are on the same plane of existence. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 8 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.",
			limfeaname : "Serpentine Owl Figurine",
			usages : 1,
			recovery : "2 days"
		},
		"snowy owl (ddep10-0)" : {
			name: "Snowy Owl Figurine (DDEP10-0)",
			rarity : "uncommon",
			magicItemTable : "F",
			description: "As an action, speak the command word & throw silver statuette to unoccupied space w/i 60 ft, where it becomes a snowy owl (reflavored raven) for up to 12 hrs, until you repeat the command word, or reaches 0 hp. It's friendly, understands your languages, & obeys spoken commands. While in owl form, figurine lets you cast Animal Messenger on it at will. If no commands, defends itself but nothing else. After reverts, can't be used again for 2 days.",
			descriptionFull: "This figurine of wondrous power is as sliver statuette of a snowy owl, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living raven. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 12 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.\n   While in raven form, the figurine allows you to cast the Animal Messenger spell on it at will.",
			limfeaname : "Snowy Owl Figurine",
			usages : 1,
			recovery : "2 days",
			spellcastingBonus : {
				name : "At will",
				spells : ["animal messenger"],
				selection : ["animal messenger"],
				firstCol : "atwill"
			},
			spellChanges : {
				"animal messenger" : {
					description : "The snowy owl delivers a 25 word message up to 50 miles away to chosen location and recipient",
					changes : "The spell can only affect the figurine."
				}
			}
		}
},

MagicItemsList["al footwear"] = {
		name : "AL Footwear",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Boots of Elvenkind (DDAL4-6)"],
	"boots of elvenkind (ddal4-6)" : {
		name : "Boots of Elvenkind (DDAL4-6)",
		source : [["SRD", 212], ["D", 155]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These light boots are made of supple, green leather & accented w/ dead leaves. They are constantly covered in muck as if you've been walking through ankle-deep, bloody gore. No amount of cleaning (magical or otherwise) removes the filth. While you wear these boots, your steps make no sound, regardless of the surface you're walking on. You also have adv. on Dex (Stealth) checks that rely on moving silently.",
		descriptionFull : "These light boots are made of supple, green leather and accented with dead leaves. They are constantly covered in muck as if the wearer had been walking through ankle‐deep, bloody gore. No amount of cleaning (magical or otherwise) removes the filth. While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
		eval : function () {
			for (var i = 0; i < CurrentMagicItems.known.length; i++) {
				if (CurrentMagicItems.known[i].indexOf("cloak of elvenkind") !== -1 && tDoc.getField("Extra.Magic Item Attuned " + (1 + i)).isBoxChecked(0)) {
					SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
					break;
				}
			}
		},
		removeeval : function () {
			SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
}
	
MagicItemsList["al headwear"] = {
		name : "AL Headwear",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Headband of Intellect (DDEX1-6)", "Headband of Intellect (DDAL5-16)","Ioun Stone - Insight (DDEP3)","Wolfskin Cap (DDEX4-3)"],
	"headband of intellect (ddex1-6)" : {
		name : "Headband of Intellect (DDEX1-6)",
		source : [["SRD", 225], ["D", 173]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This headband made of bone bears the sigil of the wizard Denlor, whose tower still stands in the city of Phlan. Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it.",
		attunement : true,
		scoresOverride : [0, 0, 0, 19, 0, 0]
		},
	"headband of intellect (ddal5-16)" : {
		name : "Headband of Intellect (DDAL5-16)",
		source : [["SRD", 225], ["D", 173]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "Shining with a polished brilliance this golden headband never dulls. The sound of heavenly chimes can be heard when the wearer has a new idea. Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it.",
		attunement : true,
		scoresOverride : [0, 0, 0, 19, 0, 0]
		},
	"ioun stone - insight (ddep3)" : {
		name: "Ioun Stone - Insight (DDEP3)",
		source : [["SRD", 227], ["D", 176]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description :  "This incandescent blue sphere glows w/ an unearthly white light as it orbits your head, casting odd shadows all around you. To those nearby, the shadows seem to take on nefarious shapes or do undesirable things. Action to make orbit at 1d3ft or stow. Others can catch as action w/ atk or Acrobatics chk (AC/DC 24). It has 10 HP & resistance to dmg. While it orbits, your Wisdom score increases by 2, to max of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   This incandescent blue sphere glows with an unearthly white light as it orbits your head, casting odd shadows all around you. To those nearby, these shadows sometimes seem to take on nefarious shapes or perform undesirable things. Your Wisdom score increases by 2, to a maximum of 20, while the sphere orbits your head.",
		action : [["action", "Ioun Stone (orbit/retrieve)"]],
		scores : [0, 0, 0, 0, 2, 0]
		},
	"wolfskin cap (ddex4-3)" : {
		name : "Wolfskin Cap (Hat of Disguise)",
		source : [["SRD", 225], ["D", 173]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This thick & fuzzy cap is actually a hat of disguise, & looks incredibly comfortable. While it allows the wearer to cast disguise self at-will, the power is limited in that it only disguises the wearer as a plain-looking brown-haired human male in his late twenties. However, while so disguised, the wearer is hidden from spells abilities that would detect their true nature (such as divine sense). The spell ends if the hat is removed.",
		descriptionFull : "This thick and fuzzy hat is actually a hat of disguise, and looks incredibly comfortable. While it allows the wearer to cast disguise self at-will, the power is limited in that it only disguises the wearer as a plain-looking brown-haired human male in his late twenties. However, while so disguised, the wearer is hidden from spells abilities that would detect its true nature (such as divine sense). The spell ends if the hat is removed.",
		attunement : true,
		spellcastingBonus : [{
			name : "At will",
			spells : ["disguise self"],
			selection : ["disguise self"],
			firstCol : "atwill"
	   }],
	   spellcastingAbility : "class"
	},
}
	
MagicItemsList["al instruments"] = {
		name : "AL Instruments",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Canaith Mandolin (DDEX3-9)","Horn of Blasting (DDEX1-11)", "Pipes of the Sewers (DDEX3-6)"],
	"canaith mandolin (ddex3-9)" : {
		name : "Canaith Mandolin (DDEX3-9)",
		rarity : "rare",
		magicItemTable : "G",
		description: "Made of fine, dark wood, this mandolin is inlaid with mithral & mother-of-pearl in the shape of forked lightning bolts. The bearer of this instrument can use an action to make their voice carry clearly for up to 300 ft until the end of their next turn. A creature that tries to play the instrument without attuning must succeed on a DC 15 Wis save or take 2d4 psychic dmg. Action to play the instrument & cast one of its spells: Fly, Invisibility, Levitate, Protection from Evil & Good, Cure Wounds (3rd level), Dispel Magic, & Protection from Energy (lightning). Once the instrument has cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability & spell save DC. If you play the instrument while casting a spell that causes a charm effect on a failed saving throw, you can impose disadv. on the save. This only applies if the spell has a somatic or a material component.",
		descriptionFull : "Made of fine, dark wood, this mandolin is inlaid with mithral and mother-of-pearl in the shape of forked lightning bolts. The bearer of this instrument can use an action to make their voice carry clearly for up to 300 ft until the end of their next turn. An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Canaith mandolin can be used to cast Cure Wounds (3rd level), Dispel Magic, and Protection from Energy (lightning only).",
		action : [["action", "Canaith Mandolin (300ft Voice)"]],
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		},
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 3d8+spellcasting ability modifier HP",
				changes : "When using the Canaith Mandolin to cast Cure Wounds, it is cast at 3rd-level."
			},
			"protection from energy" : {
				description : "1 creature gains resistance to Lightning damage for the duration",
				changes : "When using the Canaith Mandolin to cast Protection from Energy, it can only grant resistance to lightning damage."
			},
		}
	},
	"horn of blasting (ddex1-11)" : {
		name : "Horn of Blasting (DDEX1-11)",
		source : [["SRD", 226], ["D", 174]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This horn is made of polished brass & is engraved w/ Gnomish script. The script tells the story of a mighty gnome king & his triumphant victory over a large tribe of kobolds. As an action, you can speak the horn's command word & blow it, creating a 30-ft cone. All in it take 5d6 thunder damage & are deafened for 1 min. Half damage w/ a DC 15 Con save and not deafened. Glass/crystal creatures/objects have disadv. & take 10d6 damage. There is a 20% chance each use that it explodes.",
		descriptionFull : "This horn is made of polished brass, and has a script engraved in Gnomish. The script relates the story of a mighty gnome king and triumphant victory over a large tribe of kobolds. You can use an action to speak the horn's command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn't deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6.\n   Each use of the horn's magic has a 20% chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.",
		weight : 2,
		action : [["action", "Horn of Blasting"]]
		},
	"pipes of the sewers (ddex3-6)" : { 
		name : "Pipes of the Sewers (DDEX3-6)",
		source : [["SRD", 232], ["D", 185]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These pipes have an intricate pattern of whorls carved into them. When inspected closely, the whorls are actually a tiny poem in ancient Thorass called “Maedra’s Home.” The pipes have 3 charges, regain 1d3 at dawn, and cause rats to be indifferent toward you unless threatened. As an action, you can play pipes, then use a bonus action to summon rats in 0.5 miles to form 1 swarm per charge. While playing, rat swarms in 30 ft make a Wis check vs. your Cha check. If fail, obey as long as can hear pipes at start of turn (you must continue playing as Action). If pass or fall out of sway, can't be affected again for 24 hrs.",
		descriptionFull : "These pipes have an intricate pattern of whorls carved into them. When inspected closely, the whorls are actually a tiny poem in ancient Thorass called “Maedra’s Home.” You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, rats are indifferent toward you and will not attack unless you threaten or harm them.\n   The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats for each expended charge, provided that enough rats are within half a mile to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control. The pipes regain 1d3 expended charges daily at dawn.\n   Whenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends. The swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.",
		attunement : true,
		allowDuplicates : true,
		weight : 2,
		limfeaname : "Pipes of the Sewers",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["action", ""]],
		prerequisite: "Requires proficiency with wind instruments",
		prereqeval: function (v) {
			for (var i = 0; i < v.toolProfs.length; i++) {
				if ((/pipe|flute|horn|trumpet|horn|ocarina|sackbut|shawm|trombone|tuba|bombard|cornett|flageolet|^(?=.*(air|wind))(?=.*instrument).*$/i).test(v.toolProfs[i])) return true;
			}
		}
	},
}

MagicItemsList["al necklaces"] = {
		name : "AL Necklaces",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Aramesha's Wisdom (DDEX2-16)","Periapt of Wound Closure (DDEP5-2)"],
	"aramesha's wisdom (ddex2-16)" : {
		name : "Aramesha's Wisdom (Medallion of Thoughts)",
		source : [["SRD", 230], ["D", 181]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This beautiful silver medallion has an intricate engraving in Celestial upon it – a short poem called “The Hope of Aramesha.” The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
		weight : 1,
		limfeaname : "Medallion of Thoughts",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["detect thoughts"],
			selection : ["detect thoughts"],
			firstCol : 1
		},
		fixedDC : 13,
		spellFirstColTitle : "Ch"
		},
	"periapt of wound closure (ddep5-2)" : { 
		name : "Periapt of Wound Closure (DDEP5-2)",
		source : [["SRD", 232], ["D", 184]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This wide, leather choker is set w a blood-red stone the size of a man’s fist. The stone glows with a faint red light that pulses in time with the wearer’s heartbeat. While wearing this pendant, you stabilize whenever you are dying at the start of your turn. In addition, when you roll a Hit Die to regain hp, double the number of hit points restored.",
		descriptionFull : "This wide, leather choker is set with a blood-red stone the size of a man’s fist. The stone glows with a faint red light that pulses in time with the wearer’s heartbeat. While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
		attunement : true,
		weight : 1
	},
}
	
MagicItemsList["al rings"] = {
		name : "AL Rings",
		type : "ring",
		allowDuplicates : true,
	choices : ["Ring of Animal Influence (DDAL4-13)","Ring of Evasion (DDEX1-3)", "Ring of Fire Resistance (DDEX1-5)", "Ring of Jumping (DDAL5-10)","Ring of Mind Shielding (DDEX2-6)", "Ring of Protection (DDEX3-15)", "Ring of Shooting Stars (DDEP5-2)","Ring of Spell Storing (DDAL4-8)", "Ring of Spell Storing (DDEP5-2)","Ring of Swimming (DDAL5-6)","Ring of Water Walking (DDEX2-7)"],
	"ring of animal influence (ddal4-13)" : {
		name : "Ring of Animal Influence (DDAL4-13)",
		source : [["SRD", 235], ["D", 189]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ring has 3 charges, regaining 1d3 expended charges at dawn. It's decorated with canid & raptor symbols & the wearer feels predatory urges, desiring a diet of fresh meat. As an action while wearing the ring, you can expend 1 charge to cast a spell (save DC 13): Animal Friendship, Speak with Animals, or Fear. Fear cast from this ring can target only beasts that have an Int of 3 or less.",
		limfeaname : "Ring of Animal Influence",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		fixedDC : 13,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["animal friendship", "speak with animals", "fear"],
			selection : ["animal friendship", "speak with animals", "fear"],
			firstCol : "1",
			times : 3
		}],
		spellChanges : {
			"fear" : {
				description : "All beasts Int<4 save or frightened, Dash to get away; extra save at end of turn if not in line of sight",
				changes : "Only affects beasts that have an Intelligence of 3 or lower."
			}
		}
	},
	"ring of evasion (ddex1-3)" : {
		name : "Ring of Evasion (DDEX1-3)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description: "This intricate thin silver ring is decorated w/ tiny opalescent stones & glows w/ a pale radiance (dim light, 5-ft radius) in moonlight. The ring has 3 charges, and it regains 1d3 expended charges daily at dawn. As a reaction when you fail a Dexterity saving throw while wearing it, you can expend 1 of its charges to succeed on that saving throw instead.",
		limfeaname : "Ring of Evasion",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["reaction", ""]]
			},
	"ring of fire resistance (ddex1-5)" : {
		name : "Ring of Fire Resistance (DDEX1-5)",
		source : [["SRD", 237], ["D", 192]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This delicate copper ring is fitted with a beautiful fire agate and is always warm to the touch. While attuned to this wing and wearing it, you gain resistance to fire damage.",
		attunement : true,
		dmgres : ["Fire"]
		},
	"ring of jumping (ddal5-10)" : {
		name : "Ring of Jumping (DDAL5-10)",
		source : [["SRD", 236], ["D", 191]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This ring is made of interlocking pieces of animal chitin. When activated, it creates a loud, chirping sound; similar to that of a cricket that can be heard 100 feet away. While wearing the ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.",
		attunement : true,
		action : [["bonus action", "Ring of Jumping"]],
		spellcastingBonus : {
			name : "Self Only",
			spells : ["jump"],
			selection : ["jump"],
			firstCol : "atwill"
		},
		spellChanges : {
			"jump" : {
				time : "1 bns",
				range : "Self",
				changes : "The casting time is only a bonus action instead of an action and it can only affect the wearer."
			},
		}
	},
	"ring of mind shielding (ddex2-6)" : {
		name : "Ring of Mind Shielding (DDEX2-6)",
		source : [["SRD", 236], ["D", 191]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This plain, silver ring is engraved w/ the holy symbol of Ilmater, a pair of hands bound with cord. While wearing it, you're immune to magic that lets creatures read your thoughts, determine lies, know alignment, or know creature type. Creatures can mentally communicate w/ you only if allowed. Action to make the ring invisible. If you die while wearing the ring, your soul enters it, unless occupied. As long as your soul is in the ring, you can communicate w/ the wearer.",
		descriptionFull : "This plain, silver ring is engraved w/ the holy symbol of Ilmater, a pair of hands bound with cord. While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n   You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.\n   If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. The wearer can't prevent this telepathic communication.",
		attunement : true,
		action : [["action", "Ring of Mind Shielding: (in)visible"]],
		savetxt : { immune : ["magic reading my thoughts, truthfulness, alignment, or creature type"] }
		},
	"ring of protection (ddex3-15)" : {
		name : "Ring of Protection (DDEX3-15)",
		source : [["SRD", 237], ["D", 191]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ancient drow ring is made of cool black spider silk, when worn it causes the user to feel self-assured and over confident. You gain a +1 bonus to AC and saving throws while wearing this ring.",
		attunement : true,
		extraAC : [{name : "Ring of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Ring of Protection, I gain a +1 bonus to all my saving throws." }]
	},
	"ring of shooting stars (ddep5-2)" : {
		name : "Ring of Shooting Stars (DDEP5-2)",
		source : [["SRD", 237], ["D", 192]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This ring appears to be made of pure light w/ motes of twinkling radiance within. When used, rainbow sparks dance around the wearer’s hand. The ring has 6 charges & regains 1d6 charges at dawn. While wearing the ring in dim light/darkness, you can cast Dancing Lights & Light at will. As an action, expend charges to cast Faerie Fire, Ball Lightning, or Shooting Stars (see 3rd page notes). All spell DC 15.",
		descriptionFull : "While wearing this ring in dim light or darkness, you can cast Dancing Lights and Light from the ring at will. Casting either spell from the ring requires an action.\n   The ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn.\n   " + toUni("Faerie Fire") + ". You can expend 1 charge as an action to cast Faerie Fire from the ring.\n   " + toUni("Ball Lightning") + ". You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12).\n   " + toUni("Shooting Stars") + ". \n   You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
		attunement : true,
		toNotesPage : [{
			name : "Ball Lightning",
			popupName : "Ball Lightning function of Ring of Shooting Stars",
			page3notes : true,
			additional : "2 charges",
			note : [
				"As an action, I can create 1-4 spheres of lightning of 3-ft diameter within 120 ft",
				"These last while I concentrate, up to 1 min; As a bonus action, I can more them 30 ft",
				"When a creature (not me) comes within 5 ft of a sphere, it discharges and disappears",
				"The target must make a DC 15 Dex save or take lightning damage",
				"A sphere sheds dim light in 30-ft radius, its damage depends on the number created:",
				" \u2022 1 sphere: 4d12;    \u2022 2 spheres: 5d4;    \u2022 3 spheres: 2d6;    \u2022 4 spheres: 2d4"
			]
		}, {
			name : "Shooting Stars",
			popupName : "Shooting Stars function of Ring of Shooting Stars",
			page3notes : true,
			additional : "1-3 charges",
			note : [
				"As an action, I can launch one mote of light per expended charge to a point within 60 ft",
				"All creatures within a 15-ft cube originating from those points take 5d4 fire damage",
				"The targets can make a DC 15 Dexterity saving throw to halve the damage"
			]
		}],
		limfeaname : "Ring of Shooting Stars",
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		fixedDC : 15,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "At will",
			spells : ["dancing lights", "light"],
			selection : ["dancing lights", "light"],
			firstCol : "atwill",
			times : 2
		}, {
			name : "1 charge",
			spells : ["faerie fire"],
			selection : ["faerie fire"],
			firstCol : 1
		}, {
			name : "Ball lightning (2 chr)",
			spells : ["flaming sphere"],
			selection : ["flaming sphere"],
			firstCol : 2
		}, {
			name : "Shooting stars (1-3 chr)",
			spells : ["magic missile"],
			selection : ["magic missile"],
			firstCol : "1+"
		}],
		spellChanges : {
			"flaming sphere" : { // change into Ball Lightning
				name : "Ball Lightning",
				source : [["SRD", 237], ["D", 192]],
				level : "",
				school : "Evoc",
				time : "1 a",
				range : "120 ft",
				components : "M\u0192",
				compMaterial : "Spells cast by magic items don't require any components other than the magic item itself.",
				duration : "Conc, 1 min",
				save : "Dex",
				description : "1-4 spheres; bns a move all 30 ft; 1st crea in 5 ft save or Lightning dmg (1:4d12, 2:5d4, 3:2d6, 4:2d4)",
				descriptionFull : "You can expend 2 charges from the ring of shooting starts as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12).",
				completeRewrite : true, // indicates that the changes here even overwrite the tooltip
				changes : "The listing of 'Flaming Sphere' has been completely changed to reflect the 'Ball Lightning' ability of the Ring of Shooting Stars. Even the information above is changed."
			},
			"magic missile" : { // change into Shooting Stars
				name : "Shooting Stars",
				source : [["SRD", 237], ["D", 192]],
				level : "",
				school : "Evoc",
				time : "1 a",
				range : "60 ft",
				components : "M\u0192",
				compMaterial : "Spells cast by magic items don't require any components other than the magic item itself.",
				duration : "Instantaneous",
				description : "15-ft cube in range per expended charge; all crea in cubes take 5d4 Fire damage, save halves",
				descriptionFull : "You can expend 1 to 3 charges from the ring of shooting starts as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
				completeRewrite : true, // indicates that the changes here even overwrite the tooltip
				changes : "The listing of 'Magic Missile' has been completely changed to reflect the 'Shooting Stars' ability of the Ring of Shooting Stars. Even the information above is changed."
			}
		}
	},
	"ring of spell storing (ddal4-8)" : {
		name : "Ring of Spell Storing (DDAL4-8)",
		source : [["SRD", 237], ["D", 192]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ring looks like a plain gold band, though tarnished & chipped, & can be attuned to in 1 min. When wearer casts an arcane spell, they feel cold & faint of breath. The ring can hold 5 lvls of spells. Any creature can cast into the ring w/ a 1st-5th lvl spell slot, which is stored if space. You can cast stored spells from the ring, freeing up space, using original caster's atk bonus, save DC, spellcasting modifier, & spell slot lvl.",
		descriptionFull : "This ring appears to be a plain gold band, though tarnished and chipped. When the wearer casts an arcane spell they feel cold and faint of breath (an unsettling experience that causes no damage or condition change). A character may attune to this item in 1 minute. This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6-1 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.",
		attunement : true,
		limfeaname : "Ring of Spell Storing",
		usages : "5 lvls",
		recovery : " Cast"
	},
	"ring of spell storing (ddep5-2)" : {
		name : "Ring of Spell Storing (DDEP5-2)",
		source : [["SRD", 237], ["D", 192]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The head of this ring is shaped like a lidded dwarven tankard. The wearer can use their thumb to lift the tankard’s hinged lid & unleash the magic bound within. The ring can hold 5 lvls of spells. Any creature can cast into the ring w/ a 1st-5th lvl spell slot, which is stored if space. You can cast stored spells from the ring, freeing up space, using original caster's atk bonus, save DC, spellcasting modifier, & spell slot lvl.",
		descriptionFull : "The head of this ring is fashioned like a lidded dwarven tankard. The wearer can use their thumb to lift the tankard’s hinged lid, unleashing the magic bound within. This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6-1 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.",
		attunement : true,
		limfeaname : "Ring of Spell Storing",
		usages : "5 lvls",
		recovery : " Cast"
	},
	"ring of swimming (ddal5-6)" : {
		name : "Ring of Swimming (DDAL5-6)",
		source : [["SRD", 238], ["D", 193]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This ring is made of a single piece of cartilage carved to look like the open jaws of a shark closing around the wearer’s finger. You have a swimming speed of 40 feet while wearing this ring.",
		speed : { swim : { spd : "fixed 40", enc : "fixed 30" } }
	},
	"ring of water walking (ddex2-7)" : {
		name : "Ring of Water Walking (DDEX2-7)",
		source : [["SRD", 238], ["D", 193]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This band of flaking, rusted iron band seems to be constantly damp and quickly soaks through any gloves worn over it. While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.",
		},
}

MagicItemsList["al robes"] = {
		name : "AL Robes",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Robe of Eyes (DDEX1-14)", "Robe of Stars (DDEX3-16)"],
	"robe of eyes (ddex1-14)" : {
		name : "Robe of Eyes (DDEX1-14)",
		source : [["SRD", 238], ["D", 193]],
		rarity : "rare",
		magicItemTable : "G",
		description: "The eyelike patterns embroidered upon this dark blue robe glow when w/i 100 ft of strong elemental power, such as a gate to an elemental plane or a formidable elemental. This robe gives adv. on sight-based Perception checks, 360 degree vision, see invisible/ethereal out to 120 ft, darkvision 120 ft, but you can't close or avert your eyes. If Light is cast on it or Daylight w/i 5 ft, you're blinded for 1 min, Con save (DC 11-Light, 15-Daylight) at end of each turn to end.",
		descriptionFull : "The eyelike patterns embroidered upon this dark blue robe glow faintly when within 100 feet of a source of strong elemental power, such as a gate to an elemental plane or a formidable elemental creature. This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:\n \u2022 The robe lets you see in all directions, and you have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 You have darkvision out to a range of 120 feet.\n \u2022 You can see invisible creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet.\n\nThe eyes on the robe can't be closed or averted. Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe.\n   A Light spell cast on the robe or a Daylight spell cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, you can make a Constitution saving throw (DC 11 for Light or DC 15 for Daylight), ending the blindness on a success.",
		attunement : true,
		weight : 4,
		vision: [
			["Darkvision", "fixed 120"],
			["See invisible/ethereal", "fixed 120"],
			["Adv. on Perception checks based on sight", 0]
		]
		},
	"robe of stars (ddex3-16)" : { 
		name : "Robe of Stars (DDEX3-16)",
		source : [["SRD", 239], ["D", 194]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This robe is made of rough-spun, blue wool w/ stars of faded gray cloth embroidered in silver. While wearing this robe, you gain +1 to saves. 6 stars on the front are larger. As an action, remove 1 star to cast Magic Missile at 5th-lvl. Daily at dusk, 1d6 removed stars reappear. While wearing the robe, you can enter the Astral Plane w/ an action. You remain there until you return to the plane you were on w/ another action. You reappear in the same space, or the nearest unoccupied space.",
		descriptionFull : "This robe is made of rough-spun, blue wool with stars of faded gray cloth embroidered in silver. You gain a +1 bonus to saving throws while you wear it.\n   Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast Magic Missile as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.\n   While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.",
		attunement : true,
		weight : 4,
		limfeaname : "Robe of Stars",
		action : [["action", ""]],
		usages : 6,
		recovery : "Dusk",
		additional : "regains 1d6",
		addMod: [{ type: "save", field: "all", mod: 1, text: "While wearing the Robe of Stars, I gain a +1 bonus to all my saving throws." }],
		spellFirstColTitle: "Ch",
		spellcastingBonus: {
			name: "1 charge",
			spells: ["magic missile"],
			selection: ["magic missile"],
			firstCol: 1
		},
		spellChanges : {
			"magic missile" : {
				description : "8 darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
				changes : "Magic Missile cast from the Robe of Stars is always at 5th-level."
				}
			}
		},
	},
	
MagicItemsList["al rods"] = {
	name : "AL Rods",
	type : "rod",
	allowDuplicates : true,
	choices : ["Rod of the Pact Keeper +1 (DDEX2-8)", "Rod of the Pact Keeper +2 (DDEX3-13)"],
	"rod of the pact keeper +1 (ddex2-8)" : {
		name : "Rod of the Pact Keeper +1 (DDEX2-8)",
		source : ["D", 197],
		attunement : true,
		description: "This rod is always covered in a thin layer of slippery, foul—smelling slime, whenever it is drawn or picked up, the creature doing so must succeed on a DC 10 Dexterity saving throw or drop it. While holding this rod, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of you warlock spells. As an action once per long rest, you can regain one warlock spell slot while holding the rod.",
		weight : 2,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function(v) { return classes.known.warlock; },
		limfeaname : "Rod of the Pact Keeper (warlock spell slot)",
		usages : 1,
		recovery : "long rest",
		action : [["action", ""]],
		rarity : "uncommon",
		magicItemTable : "F",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/warlock/).test(spellcasters)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
				],
		}
	},
	"rod of the pact keeper +2 (ddex3-13)" : {
		name : "Rod of the Pact Keeper +2 (DDEX3-13)",
		source : ["D", 197],
		attunement : true,
		description: "This rod looks like three tentacles wrapped around each other. Upon speaking the word “Xicvizt”, the tentacles writhe as though were alive and are wreathed in purple fire that sheds dim light in a 5-foot radius. While holding this rod, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of you warlock spells. As an action once per long rest, you can regain one warlock spell slot while holding the rod.",
		weight : 2,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function(v) { return classes.known.warlock; },
		limfeaname : "Rod of the Pact Keeper (warlock spell slot)",
		usages : 1,
		recovery : "long rest",
		action : [["action", ""]],
		rarity : "rare",
		magicItemTable : "G",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/warlock/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
				],
		}
	},
}
	
MagicItemsList["al wands"] = {
		name : "AL Wands",
		type : "wand",
		allowDuplicates : true,
	choices : ["Wand of Binding (DDAL4-10)","Wand of Magic Detection (DDEX1-2)", "Wand of Lightning Bolts (DDEX2-9)", "Wand of the War Mage +1 (DDEX3-10)", "Wand of Web (DDAL5-7)"],
	"wand of binding (ddal4-10)" : {
		name : "Wand of Binding (DDAL4-10)",
		source : [["SRD", 248], ["D", 209]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This wand is made from amber carved to look like strands of rope wrapped around a skeletal hand w/ the index finger outstretched. Its owner is plagued by nightmares of being buried alive & leaving important things undone. The wand has 7 charges for its spells, regaining 1d6+1 at dawn. 1 charge to gain adv. on grapple escape chk or saves vs. paralyzed/restrained, latter uses reaction. 5% chance of destruction if use last charge.",
		descriptionLong : "This wand is made of a piece of amber carved to look like strands of rope entwined around a skeletal hand with the index finger outstretched. The owner’s dreams are plagued by nightmares of being buried alive and leaving important things left unfinished. The wand has 7 charges, regaining 1d6+1 at dawn. You can expend charges to cast (save DC 17) Hold Monster (5 charges) or Hold Person (2 charges). As a reaction, you can expend 1 charge to gain adv. on a save to avoid being paralyzed or restrained. You can also expend 1 charge to gain adv. on a check to escape a grapple. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		descriptionFull : "This wand is made of a piece of amber carved to look like strands of rope entwined around a skeletal hand with the index finger outstretched. The owner’s dreams are plagued by nightmares of being buried alive and leaving important things left unfinished. The wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n   " + toUni("Spells") + ". While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): Hold Monster (5 charges) or Hold Person (2 charges).\n   " + toUni("Assisted Escape") + ". While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Binding",
		action : [["reaction", "Wand of Binding (adv. on save)"]],
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 17,
		spellcastingBonus : [{
			name : "2 charges",
			spells : ["hold person"],
			selection : ["hold person"],
			firstCol : 2
		}, {
			name : "5 charges",
			spells : ["hold monster"],
			selection : ["hold monster"],
			firstCol : 5
		}]
	},
	"wand of magic detection (ddex1-2)" : {
		name : "Wand of Magic Detection (DDEX1-2)",
		source : [["SRD", 249], ["D", 211]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "This silver-tipped wooden wand makes a loud chiming sound when used. The wand has 3 charges. While holding it, I can expend 1 charge as an action to cast Detect Magic from it. The wand regains 1d3 expended charges daily at dawn.",
		weight : 1,
		limfeaname : "Wand of Magic Detection",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["detect magic"],
			selection : ["detect magic"],
		firstCol : 1}
		},
	"wand of lightning bolts (ddex2-9)" : {
		name : "Wand of Lightning Bolts (DDEX2-9)",
		source : [["SRD", 249], ["D", 211]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description: "This slender rod of glass feels solid, but appears to have a constant storm of thunderclouds roiling within. It has 7 charges, regaining 1d6+1 at dawn. As an action, you can expend 1 or more of its charges to cast Lightning Bolt (save DC 15) from it as a 3rd level spell. The spell slot level increases by one for each charge expended after the first. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
		descriptionFull : "This slender rod of glass feels solid, but appears to have a constant storm of thunderclouds roiling within.  The wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Lightning Bolts",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1+ charges",
			spells : ["lightning bolt"],
			selection : ["lightning bolt"],
			firstCol : "1+"
		},
		spellChanges : {
			"lightning bolt" : {
				description : "100-ft long 5-ft wide all 8d6 Lightn. dmg (+1d6/extra charge); save halves; unattended objects ignite",
				changes : "For 1 charge, it is cast as the 3rd-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
				},
			}
		},
	"wand of the war mage +1 (ddex3-10)" : {
		name : "Wand of the War Mage +1 (DDEX3-10)",
		source : [["SRD", 249], ["D", 212]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		description : "Crafted of sturdy beech wood, this rather stout wand sports arcane runes etched in silver along its length and solid silver orbs capping each end. While you are holding this arcane focus, you gain a +1 bonus to spell attack rolls and ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
						if (type == "attack") return 1;
					},
					"I gain a +1 bonus to spell attack rolls."
				]
			}
		},
	"wand of web (ddal5-7)" : {
		name : "Wand of Web (DDAL5-7)",
		source : [["SRD", 249], ["D", 212]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This short, squat wand is fashioned from single piece of white wood tipped with a pair of black diamonds cut to resemble spinnerets. It has 7 charges & regains 1d6+1 expended charges at dawn. As an action, expend 1 charge to cast Web (save DC 15). If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		descriptionFull : "This short, squat wand is fashioned from single piece of white wood tipped with a pair of black diamonds cut to resemble spinnerets. It has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Web spell (save DC 15) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Web",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1 charge",
			spells : ["web"],
			selection : ["web"],
			firstCol : 1
		}
	},
}