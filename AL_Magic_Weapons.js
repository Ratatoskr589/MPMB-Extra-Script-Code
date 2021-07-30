/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me. It would not exist without them.
===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
Additionally, due to the length of some descriptions, I recommend auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will run off the page.
*/

/*  Subject: Flavored Weapons from AL adventures
    Effect:	This script adds the flavored versions of standard magic weapons found in AL adventures to the MPMB sheet. They will all be listed as AL [item category] in the Magic Item selection, with further choices as needed. The main categories are as follows: Maces (special maces), Staffs (all special staffs, whether specifically called out as weapons or not), Swords (special swords), Weapons +1/+2/+3, Weapons (Other) (all other weapon types).  All Rods can be found in the AL Magic Items script, even those that can be used as a weapon.
	
	This is not a complete list since I do not have every published adventure, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor.*/
	
	//Complete: S0-S9, Guild Adept
	//In progress: CCCs, S10 (Through 10-9), DC-POA, DRW
	
var iFileName = "AL Flavored Weapons.js";
RequiredSheetVersion(13);

// Define the source
SourceList["AL"] = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};

//AL flavored Weapons
MagicItemsList["al maces"] = {
		name : "AL Maces",
		allowDuplicates : true,
		type : "weapon (mace)",
		choices : ["Durgeddin's Fist, Mace of Terror (DDEP6-1)","Mace of Smiting (DDAL7-6)","Mace of Smiting (DDAL8-7)","Mace of Smiting (DDAL10-7)"],
	"durgeddin's fist, mace of terror (ddep6-1)" : {
		name : "Durgeddin's Fist (Mace of Terror)",
		source : [["AL","S6"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Wrought of blackened steel, the head of this mace is shaped like 3 screaming orc skulls. When wielded against orcs, Durgeddin’s Fist bellows profanities & insults in a fearsome baritone audible for 30’. This mace has 3 charges, regaining 1d3 at dawn. As an action, 1 charge for all chosen creatures w/i 30ft to make DC 15 Wis save or be frightened of you for 1 min, repeating at end of turns. While frightened, only action to Dash away (or free itself), no reactions, & can't move w/i 30 ft.",
		descriptionLong : "Wrought of blackened steel, the head of this mace is forged in the likeness of 3 screaming orc skulls. When wielded in combat against orcs, Durgeddin’s Fist bellows an endless stream of profanities and insults in a fearsome dwarven baritone audible for 30’. This magic mace has 3 charges, regaining 1d3 at dawn. As an action, you can expend 1 charge to have each creature of your choice within 30 ft make a DC 15 Wis save or become frightened of you for 1 minute. While frightened, a creature must spend its turns trying to move as far away from you as it can, using its action to Dash or get away; it can't willingly move within 30 ft of you and can't take reactions. If it has nowhere to move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
		descriptionFull : "Wrought of blackened steel, the head of this mace is forged in the likeness of three screaming orc skulls. When wielded in combat against orc foes, Durgeddin’s Fist bellows an endless stream of profanities and insults in a fearsome dwarven baritone audible for 30’. This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foot radius extending from you must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.\n   The mace regains 1d3 expended charges daily at dawn.",
		attunement : true,
		weight : 4,
		limfeaname : "Mace of Terror",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponsAdd : ["Mace of Terror"],
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*terror).*$/i,
			name : "Mace of Terror",
			source : [["SRD", 229], ["D", 180]]
		}
	},
	"mace of smiting (ddal7-6)" : {
		name : "Mace of Smiting (DDAL7-6)",
		source : [["AL","S7"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The once-fine haft of this magical mace has gone to soggy rot; even the leather wrapping its pommel doesn't stop it from soaking through your gloves. The adamantine head is carved into the giant rune Rün (ruin). Upon striking a construct, it unleashes a shower of gold sparks. This mace adds +1 (+3 vs. constructs) to atk & dmg rolls. On a nat. 20 to hit, the target takes an extra 7 bludgeoning dmg (+14 to contructs). If a construct has < 26 HP after this dmg, it's destroyed.",
		descriptionFull : "The once-fine haft of this club has long-since gone to soggy rot; even the leather wrapping its pommel isn’t enough to stop it from soaking through the wearer’s gloves. The adamantine head of the mace is carved to resemble the giant rune Rün (ruin). Upon striking a construct with the mace, it unleashes a shower of gold sparks. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
		weight : 4,
		weaponsAdd : ["Mace of Smiting"],
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			source : [["SRD", 229], ["D", 179]],
			description : "+2 to hit/damage vs. constructs; On 20 to hit: +7 damage (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1]
		}
	},
	"mace of smiting (ddal8-7)" : {
		name : "Mace of Smiting (DDAL8-7)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This head of this magic mace features an angry dwarven face. The ghost of Reizzlerum Caskview still maintains a connection to the weapon, causing you to gain an unending thirst for good ale. As you grow intoxicated, the face appears more drunkenly joyful. The longer you go without a drink, the angrier the face appears. This mace adds +1 (+3 vs. constructs) to atk & dmg rolls. On a nat. 20 to hit, the target takes an extra 7 bludgeoning dmg (+14 to contructs). If a construct has < 26 HP after this dmg, it's destroyed.",
		descriptionFull : "This head of the mace of smiting features an angry dwarven face. The ghost of Reizzlerum Caskview still maintains a connection to the weapon, causing the owner to gain an unending thirst for good ale. As the owner becomes intoxicated, the face on the mace shifts to appear more drunkenly joyful. The longer the owner goes without a drink, the angrier the face appears. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
		weight : 4,
		weaponsAdd : ["Mace of Smiting"],
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			source : [["SRD", 229], ["D", 179]],
			description : "+2 to hit/damage vs. constructs; On 20 to hit: +7 damage (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1]
		}
	},
	"mace of smiting (ddal10-7)" : {
		name : "Mace of Smiting (DDAL10-7)",
		source : [["AL","S10"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This mace is fashioned from a single piece of obsidian. The following phrase is inscribed over & over in Draconic around the haft: “Those willing to deny themselves the radiance of the stars would be better to pluck out their eyes & cast them away.” This mace adds +1 (+3 vs. constructs) to atk & dmg rolls. On a nat. 20 to hit, the target takes an extra 7 bludgeoning dmg (+14 to contructs). If a construct has < 26 HP after this dmg, it's destroyed.",
		descriptionFull : "This mace is fashioned from a single piece of obsidian. The following phrase is inscribed over and over in Draconic around the mace’s haft: “Those willing to deny themselves the radiance of the stars would be better to pluck out their eyes and cast them away.” You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
		weight : 4,
		weaponsAdd : ["Mace of Smiting"],
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			source : [["SRD", 229], ["D", 179]],
			description : "+2 to hit/damage vs. constructs; On 20 to hit: +7 damage (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1]
		}
	},
}
		

MagicItemsList["al staffs"] = {
	name : "AL Staffs:",
	allowDuplicates : true,
	choices : ["Staff of Adornment (CCC-3MAGS-ONE)","Staff of Charming (DDEX2-2)","Staff of Frost (DDAL0-11E)","Staff of Frost (DDAL-DRW05)","Staff of Healing (DDEP4)","Staff of the Magi (DDAL7-17)","Staff of Power (DDAL5-19)","Staff of Power (DDEP4)", "Staff of Striking (DDAL7-12)","Staff of Swarming Insects (DDEX3-3)","Staff of Thunder and Lightning (DDAL5-8)","Staff of Thunder and Lightning (DDEP5-2)","Staff of Withering (DDEX2-13)","Staff of Withering (DDAL8-13)","Staff of the Woodlands (DDAL7-8/DDEP7-1)"],
	"staff of adornment (ccc-3mags-one)" : {
		name : "Staff of Adornment (CCC-3MAGS-ONE)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "Flowering hop vines are entwined around this light, pale wooden staff. If you place an object <= 1 pound above the tip of the staff while holding it, the object floats 1 inch from the staff's tip & remains there until removed or the staff is out of your possession. The staff can have 3 objects floating over it at a time. No matter what floats atop it, the object(s) smells like fresh hops. While holding the staff, you can make 1 or more of the objects spin or turn in place.",
		descriptionFull : "Flowering hop vines are entwined around the shaft of this light, pale wooden staff. If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. No matter what object(s) float atop it, it smells like fresh hops. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4
	},
	"staff of charming (ddex2-2)" : {
		name : "Staff of Charming (DDEX2-2)",
		source : [["AL","S2"]],
		type : "staff",
		rarity : "rare",
		magicItemTable : "G",
		description: "This staff is fashioned from a piece of pale, white wood, capped with a falcon made of silver. It has 10 charges, regaining 1d8+2 at dawn; if you roll a 1 on a d20 after using the last charge, it loses its magic. Once per dawn, if an enchantment spell is cast only on you, you can use the staff to turn failed save into a success. If you make the save, you can expend 1 charge as a reaction to turn the spell back on its caster. May also be used as a magical quarterstaff.",
		descriptionFull : "This staff is fashioned from a piece of pale, white wood, capped with a falcon made of silver. While holding this staff, you can use an action to expend 1 of its 10 charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC. The staff can also be used as a magic quarterstaff.\n   If you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn. If you succeed on a save against an enchantment spell that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.\n   The staff regains 1d8+2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		prerequisite : "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		extraLimitedFeatures : [{
			name : "Staff of Charming (pass enchantment save)",
			usages : 1,
			recovery : "dawn"
		}],
		limfeaname : "Staff of Charming",
		usages : 10,
		recovery : "dawn",
		additional : "charges, regains 1d8+2",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["charm person", "command", "comprehend languages"],
			selection : ["charm person", "command", "comprehend languages"],
			firstCol : 1,
			times : 3
		},
		action : [["reaction", " (reflect enchant. spell)"]],
		weaponsAdd : ["Staff of Charming"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*charming).*$/i,
			name : "Staff of Charming",
			}
		},
	"staff of frost (ddal0-11e)" : {
		name : "Staff of Frost (DDAL0-11E)",
		source : [["AL","S0"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This staff is covered in carvings of infernals reading tomes. If placed atop an open book, the staff reads it aloud w/ a deep, inhuman voice, using the language of the book. You have resistance to cold while holding this staff. It has 10 charges, regaining 1d6+4 at dawn. If last charge used, roll a d20. On a 1, staff is destroyed. You can use charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) using your spellcasting ability.",
		descriptionFull : "This staff is covered in carvings of infernals reading various tomes. If placed atop an open book, the staff reads the book aloud with a deep, inhuman voice, using the language the book is written in. You have resistance to cold damage while you hold this staff.\n   The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff turns to water and is destroyed.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Frost",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		dmgres : ["Cold"],
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["fog cloud"],
			selection : ["fog cloud"],
			firstCol : 1
		}, {
			name : "4 charges",
			spells : ["ice storm", "wall of ice"],
			selection : ["ice storm", "wall of ice"],
			firstCol : 4,
			times : 2
		}, {
			name : "5 charges",
			spells : ["cone of cold"],
			selection : ["cone of cold"],
			firstCol : 5
		}]
	},
	"staff of frost (ddal-drw05)" : {
		name : "Staff of Frost (DDAL-DRW05)",
		source : [["AL","DRW"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This staff is made of ice as hard as steel with a frozen skull perched at the head of it. You have resistance to cold while holding this staff. It has 10 charges, regaining 1d6+4 at dawn. If last charge used, roll a d20. On a 1, staff is destroyed. You can use charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) using your spellcasting ability.",
		descriptionFull : "This staff is made of ice as hard as steel with a frozen skull perched at the head of it. You have resistance to cold damage while you hold this staff.\n   The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff turns to water and is destroyed.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Frost",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		dmgres : ["Cold"],
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["fog cloud"],
			selection : ["fog cloud"],
			firstCol : 1
		}, {
			name : "4 charges",
			spells : ["ice storm", "wall of ice"],
			selection : ["ice storm", "wall of ice"],
			firstCol : 4,
			times : 2
		}, {
			name : "5 charges",
			spells : ["cone of cold"],
			selection : ["cone of cold"],
			firstCol : 5
		}]
	},
	"staff of healing (ddep4)" : {
		name : "Staff of Healing (DDEP4)",
		source : [["AL",4]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The smooth wood of this staff is pale & streaked w/ multi-colored veins. It's capped w/ a hollow glass sphere showing an illusory symbol of your deity. Luminescent butterflies flit around the top & you feel fortunate & optimistic about the future. This staff has 10 charges, regaining 1d6+4 at dawn. If use last charge, roll d20. On a 1, it vanishes. Charges can cast Cure Wounds (1/level, max 4th), Lesser Restoration (2), & Mass Cure Wounds (5) using your spellcasting ability.",
		descriptionFull : "The smooth wood of this ordinary-looking staff is pale and streaked with multi-colored veins. The staff is capped with a hollow glass sphere that creates an illusory symbol of whichever deity the wielder worships. Luminescent butterflies flit around the staff's cap and while in possession of the staff, the wielder feels fortunate and optimistic about what the future holds. This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff vanishes in a flash of light, lost forever.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a bard, cleric, or druid",
		prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid ? true : false; },
		limfeaname : "Staff of Healing",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1+ charges",
			spells : ["cure wounds"],
			selection : ["cure wounds"],
			firstCol : "1+"
		}, {
			name : "2 charges",
			spells : ["lesser restoration"],
			selection : ["lesser restoration"],
			firstCol : 2
		}, {
			name : "5 charges",
			spells : ["mass cure wounds"],
			selection : ["mass cure wounds"],
			firstCol : 5
		}],
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 1d8+spellcasting ability modifier HP, +1d8 per charge spend after the 1st",
				changes : "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level."
			}
		}
	},
	"staff of the magi (ddal7-17)" : { // contains contributions by Pengsloth
		name : "Staff of the Magi (DDAL7-17)",
		source : [["AL","S7"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "Hewn from the bedrock of Chult itself, this mighty stone staff offers tremendous magical power - all it asks is that you honor Ubtao in the process. While holding this +2 quarterstaff, you have adv. on saves vs. spells & +2 on spell atks. The staff has 50 charges to cast spells, regaining 4d6+2 at dawn. As a reaction, you can absorb a spell targeting only you, converting its spell lvl to charges. If that puts the staff over 50 charges or you break it is as an action, it explodes.",
		descriptionLong : "Hewn from the bedrock of Chult itself, this mighty stone staff offers tremendous magical power - and all it asks is that you honor Ubtao in the process. While holding this staff, you have a +2 to spell attacks, adv. on saving throws vs. spells, and can be used as a +2 quarterstaff. The staff has 50 charges (4d6+2 at dawn) to cast spells. When the last charge is used, it has a 5% chance to regain 1d12+1 charges. You can use a reaction to absorb a spell targeting only you, converting its spell level to charges. If that brings the staff over 50 charges or you use an action to break it, it explodes. If it explodes, there is a 50% chance you teleport to a random plane, otherwise you take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
		descriptionFull : "Hewn from the bedrock of Chult itself, this mighty stone staff offers tremendous magical power - and all it asks is that you honor Ubtao in the process. This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n   The staff has 50 charges for the following properties. It regains 4d6+2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12+1 charges.\n   " + toUni("Spell Absorption") + ". While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: Conjure Elemental (7 charges), Dispel Magic (3 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Lightning Bolt (7th-level version, 7 charges), Passwall (5 charges), Plane Shift (7 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n   You can also use an action to cast one of the following spells from the staff without using any charges: Arcane Lock, Detect Magic, Enlarge/Reduce, Light, Mage Hand, or Protection from Evil and Good.\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tDamage") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t\t4 \xD7 the number of charges in the staff",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
		prereqeval : function (v) {
			return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false;
		},
		weaponsAdd : ["Staff of the Magi"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*magi).*$/i,
			name : "Staff of the Magi",
			source : [["SRD", 244], ["D", 203]],
			modifiers : [2, 2]
		},
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"While holding the Staff of the Magi I have a +2 bonus to spell attack rolls."
			]
		},
		limfeaname : "Staff of the Magi",
		usages : 50,
		recovery : "dawn",
		additional : "regains 4d6+2",
		savetxt : { adv_vs : ["spells"] },
		action : [
			["reaction", " (Spell Absorption)"],
			["action", " (Retributive Strike)"]
		],
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "7 charges",
			spells : ["conjure elemental", "plane shift"],
			selection : ["conjure elemental", "plane shift"],
			firstCol : 7,
			times : 2
		}, {
			name : "7 charges; 7th level",
			spells : ["fireball", "lightning bolt"],
			selection : ["fireball", "lightning bolt"],
			firstCol : 7,
			times : 2
		}, {
			name : "5 charges",
			spells : ["passwall", "telekinesis"],
			selection : ["passwall", "telekinesis"],
			firstCol : 5,
			times : 2
		}, {
			name : "4 charges",
			spells : ["ice storm", "wall of fire"],
			selection : ["ice storm", "wall of fire"],
			firstCol : 4,
			times : 2
		}, {
			name : "3 charges",
			spells : ["dispel magic"],
			selection : ["dispel magic"],
			firstCol : 3
		}, {
			name : "2 charges",
			spells : ["flaming sphere", "invisibility", "knock", "web"],
			selection : ["flaming sphere", "invisibility", "knock", "web"],
			firstCol : 2,
			times : 4
		}],
		eval : function () {
			// get the CurrentSpells object or create it if it didn't exists yet.
			var spObj = CreateCurrentSpellsEntry("items", "staff of the magi");
			// now set some of the attributes for it, adding the 3 spells that didn't fit as spellcastingBonus
			spObj.typeSp = "known";
			spObj.known = { cantrips : 2, spells : 4 };
			spObj.list = { spells : ["light", "mage hand", "arcane lock", "detect magic", "enlarge/reduce", "protection from evil and good"] };
			spObj.selectCa = ["light", "mage hand"];
			spObj.selectSp = ["arcane lock", "detect magic", "enlarge/reduce", "protection from evil and good"];
			spObj.typeList = 2;
		},
		removeeval : function () {
			if (CurrentSpells["staff of the magi"]) {
				// delete the CurrentSpells object
				delete CurrentSpells["staff of the magi"];
				SetStringifieds('spells');
				CurrentUpdates.types.push("spells");
			}
		},
		spellChanges : {
			"light" : { firstCol : "atwill" },
			"mage hand" : { firstCol : "atwill" },
			"arcane lock" : { firstCol : "atwill" },
			"detect magic" : { firstCol : "atwill" },
			"enlarge/reduce" : { firstCol : "atwill" },
			"protection from evil and good" : { firstCol : "atwill" },
			"fireball" : {
				nameShort : "Fireball (7th level)",
				description : "20-ft rad all crea 12d6 Fire dmg; save halves; unattended flammable objects ignite",
				changes : "Cast as if using a 7th-level spell slot."
			},
			"lightning bolt" : {
				nameShort : "Lightning Bolt (7th level)",
				description : "100-ft long 5-ft wide all 12d6 Lightning dmg; save halves; unattended flammable obj ignite",
				changes : "Cast as if using a 7th-level spell slot."
			},
			"conjure elemental" : {
				time : "1 a",
				changes : "Casting time is only 1 action instead of 1 minute."
			}
		}
	},
	"staff of power (ddal5-19)" : {
		name : "Staff of Power (DDAL5-19)",
		source : [["AL","S5"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This great ashen staff is etched w/ designs of swirling air & clouds & resizes to fit your hand. While holding this +2 quarterstaff, gain a +2 bonus on saves, AC, & spell atks. The staff has 20 charges, regaining 2d8+4 at dawn. Charges can cast spells, or use 1 charge on hit for +1d6 force dmg. Action to break staff for 30-ft explosion. See book.",
		descriptionLong : "This great ashen staff is etched with designs of swirling air and clouds. The staff resizes to fit the hand of any who carry it. While holding this staff, I gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff without other abilities. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells, or, on a hit in melee with it, I can expend 1 charge to deal +1d6 force damage. As an action, I can break it so it explodes. When it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
		descriptionFull : "This great ashen staff is etched with many designs of swirling air and clouds. The staff magically resizes to fit the hand of any who carry it. This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n   The staff has 20 charges for the following properties. The staff regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8+2 charges.\n   " + toUni("Power Strike") + ". When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.\n   " + toUni("Spells") + ". While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tEffect") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t4 \xD7 the number of charges in the staff",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Power",
		usages : 20,
		recovery : "dawn",
		additional : "regains 2d8+4",
		weaponsAdd : ["Staff of Power"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
			name : "Staff of Power",
			source : [["SRD", 243], ["D", 202]],
			description : "Versatile (1d8); On hit, 1 charge for +1d6 force damage",
			modifiers : [2, 2]
		},
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"While holding the Staff of Power, I have a +2 bonus to spell attack rolls."
			]
		},
		addMod : [{ type : "save", field : "all", mod : 2, text : "While holding the Staff of Power, I gain a +2 bonus to all my saving throws." }],
		extraAC : [{name : "Staff of Power", mod : 2, magic : true, text : "I gain a +2 bonus to AC while attuned."}],
		action : [["action", " (Retributive Strike)"]],
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "5 charges; 5th level",
			spells : ["fireball", "lightning bolt"],
			selection : ["fireball", "lightning bolt"],
			firstCol : 5,
			times : 2
		}, {
			name : "6 charges",
			spells : ["globe of invulnerability"],
			selection : ["globe of invulnerability"],
			firstCol : 6
		}, {
			name : "5 charges",
			spells : ["cone of cold", "hold monster", "wall of force"],
			selection : ["cone of cold", "hold monster", "wall of force"],
			firstCol : 5,
			times : 3
		}, {
			name : "2 charges",
			spells : ["levitate"],
			selection : ["levitate"],
			firstCol : 2
		}, {
			name : "1 charge",
			spells : ["magic missile", "ray of enfeeblement"],
			selection : ["magic missile", "ray of enfeeblement"],
			firstCol : 1,
			times : 2
		}],
		spellChanges : {
			"fireball" : {
				nameShort : "Fireball (5th level)",
				description : "20-ft rad all crea 10d6 Fire dmg; save halves; unattended flammable objects ignite",
				changes : "Cast as if using a 5th-level spell slot."
			},
			"lightning bolt" : {
				nameShort : "Lightning Bolt (5th level)",
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves; unattended flammable obj ignite",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of power (ddep4)" : {
		name : "Staff of Power (DDEP4)",
		source : [["AL","S4"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This +2 quarterstaff is carved from a single piece of purple wood & topped w/ a clenched, mithral claw. The claw holds a green dragon scale engraved w/ the elven word for “Oblivion”. The rune glows w/ a pale green light & emits wisps of choking, caustic mist. You learn Draconic, & while holding staff, gain a +2 bonus on saves, AC, & spell atks. The staff has 20 charges, regaining 2d8+4 at dawn. Charges can cast spells, or use 1 charge on hit for +1d6 force dmg. Action to break staff for 30-ft explosion. See book.",
		descriptionLong : "This +2 quarterstaff is carved from a single piece of purple wood & topped w/ a clenched, mithral claw. The claw clutches a green dragon scale engraved w/ the elven word for “Oblivion”. The rune glows w/ a pale green light & emits wisps of choking, caustic mist. While attuned, you are fluent in Draconic. While holding this staff, I gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff without other abilities. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells, or, on a hit in melee with it, I can expend 1 charge to deal +1d6 force damage. As an action, I can break it so it explodes. When it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
		descriptionFull : "This staff is carved from a single piece of an unusual purple wood and topped with a clenched, mithral claw. The claw clutches a green dragon scale the size of a small plate that's engraved with the elven word for “Oblivion”. The rune glows with a pale green light and emits wisps of choking, caustic mist. Whoever is attuned to the staff is able to speak, read,and write Draconic. This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n   The staff has 20 charges for the following properties. The staff regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8+2 charges.\n   " + toUni("Power Strike") + ". When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.\n   " + toUni("Spells") + ". While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tEffect") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t4 \xD7 the number of charges in the staff",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Power",
		usages : 20,
		recovery : "dawn",
		additional : "regains 2d8+4",
		languageProfs : ["Draconic"],
		weaponsAdd : ["Staff of Power"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
			name : "Staff of Power",
			source : [["SRD", 243], ["D", 202]],
			description : "Versatile (1d8); On hit, 1 charge for +1d6 force damage",
			modifiers : [2, 2]
		},
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"While holding the Staff of Power, I have a +2 bonus to spell attack rolls."
			]
		},
		addMod : [{ type : "save", field : "all", mod : 2, text : "While holding the Staff of Power, I gain a +2 bonus to all my saving throws." }],
		extraAC : [{name : "Staff of Power", mod : 2, magic : true, text : "I gain a +2 bonus to AC while attuned."}],
		action : [["action", " (Retributive Strike)"]],
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "5 charges; 5th level",
			spells : ["fireball", "lightning bolt"],
			selection : ["fireball", "lightning bolt"],
			firstCol : 5,
			times : 2
		}, {
			name : "6 charges",
			spells : ["globe of invulnerability"],
			selection : ["globe of invulnerability"],
			firstCol : 6
		}, {
			name : "5 charges",
			spells : ["cone of cold", "hold monster", "wall of force"],
			selection : ["cone of cold", "hold monster", "wall of force"],
			firstCol : 5,
			times : 3
		}, {
			name : "2 charges",
			spells : ["levitate"],
			selection : ["levitate"],
			firstCol : 2
		}, {
			name : "1 charge",
			spells : ["magic missile", "ray of enfeeblement"],
			selection : ["magic missile", "ray of enfeeblement"],
			firstCol : 1,
			times : 2
		}],
		spellChanges : {
			"fireball" : {
				nameShort : "Fireball (5th level)",
				description : "20-ft rad all crea 10d6 Fire dmg; save halves; unattended flammable objects ignite",
				changes : "Cast as if using a 5th-level spell slot."
			},
			"lightning bolt" : {
				nameShort : "Lightning Bolt (5th level)",
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves; unattended flammable obj ignite",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of striking (ddal7-12)" : {
		name : "Staff of Striking (DDAL7-12)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This +3 quarterstaff appears wholly unexceptional. The wood haft is gnarled & irregular, w/ a frayed & cracked strip of leather wrapped around its midpoint. When rapidly spun by its wielder, the staff creates a buzzing drone audible w/i 100 ft that soon turns into a sonorous, chanted prayer to Ubtao. The item has 10 charges, regaining 1d6+4 at dawn. 5% chance to become nonmagical after using last charge. When you hit w/ a melee atk using the staff, you can expend 1-3 charges. Add +1d6 force dmg per spent charge.",
		descriptionFull : "This staff appears wholly unexceptional but can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it. The wood haft is gnarled and irregular, and the thin strip of leather wrapped around its midpoint is frayed and cracked. When rapidly spun in the hands of a skilled user, the staff creates a buzzing drone audible to all within 100 feet. If spun for more than a few moments, the drone turns into a sonorous, chanted prayer to Ubtao.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
		attunement : true,
		weight : 4,
		limfeaname : "Staff of Striking",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponsAdd : ["Staff of Striking"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*striking).*$/i,
			name : "Staff of Striking",
			source : [["SRD", 244], ["D", 203]],
			modifiers : [3, 3],
			description : "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge"
		}
	},
	"staff of swarming insects (ddex3-3)" : {
		name : "Staff of Swarming Insects (DDEX3-3)",
		source : [["AL","S3"]],
		type : "staff",
		rarity : "rare",
		magicItemTable : "G",
		description : "This staff is made of finely-polished white wood. The insects summoned by the staff take the form of winged spiders with gossamer wings. It has 10 charges that can be used to cast Giant Insect or Insect Plague, regaining 1d6+4 at dawn . If the last charge used, roll d20. On a 1, staff is destroyed. As an action, use 1 charge to create a 30-ft radius swarm of flying insects that moves w/ you for 10 min., making area heavily obscured for all but you. A 10+ mph wind disperses it.",
		descriptionFull : "This staff is made of finely-polished white wood and the insects summoned by the staff take the form of winged spiders with gossamer wings. The staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		prerequisite : "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Swarming Insects",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]],
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "4 charges",
			spells : ["giant insect"],
			selection : ["giant insect"],
			firstCol : 4
		}, {
			name : "5 charges",
			spells : ["insect plague"],
			selection : ["insect plague"],
			firstCol : 5
		}]
	},
	"staff of thunder and lightning (ddal5-8)" : {
		name : "Staff of Thunder and Lightning (DDAL5-8)",
		source : [["AL","S5"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This aspen staff shines brightly in direct light. It's almost perfectly smooth & topped w/ a crown of silver lightning bolts that cradle a gleaming sapphire. The +2 quarterstaff has 5 special actions, each 1/dawn. 'Lightning'- when hit, 2d6 lightning. 'Thunder'- when hit, DC 17 Con or stunned(1 rd). 'Lightning Strike'- 5x120ft, DC 17 Dex, 9d6 lightning or 1/2. 'Thunderclap'- w/i 60ft, DC 17 Con or 2d6 thunder + deaf(1 min) (1/2 dmg on save). 'Thunder & Lightning'- LS & TC at same time.",
		descriptionFull : "This aspen staff shines brightly in direct light. The staff is almost perfectly smooth with a crown of silver lightning bolts atop it which cradle a gleaming sapphire. The staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.\n   " + toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.\n   " + toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.\n   " + toUni("Lightning Strike") + ". You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.\n   " + toUni("Thunderclap") + ". You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n   " + toUni("Thunder and Lightning") + ". You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
		attunement : true,
		weight : 4,
		action : [["action", "Staff of T\u0026L (Lightning Strike, Thunderclap, both)"]],
		weaponsAdd : ["Staff of Thunder and Lightning"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*thunder)(?=.*lightning).*$/i,
			name : "Staff of Thunder and Lightning",
			source : [["SRD", 245], ["D", 204]],
			description : "Versatile (1d8); Lightning: 1/dawn, +2d6 lightning damage; Thunder: 1/dawn DC 17 Con save or 1 round stunned",
			modifiers : [2, 2]
		},
		extraLimitedFeatures : [{
			name : "Staff of T\u0026L [5 options, 1 use each]",
			usages : 5,
			recovery : "dawn"
		}],
	},
	"staff of thunder and lightning (ddep5-2)" : {
		name : "Staff of Thunder and Lightning (DDEP5-2)",
		source : [["AL","S5"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This giant-sized quarterstaff is shaped like a bolt of lightning, and automatically resizes to fit the hands of its wielder. The +2 quarterstaff has 5 special actions, each 1/dawn. 'Lightning'- when hit, 2d6 lightning. 'Thunder'- when hit, DC 17 Con or stunned(1 rd). 'Lightning Strike'- 5x120ft, DC 17 Dex, 9d6 lightning or 1/2. 'Thunderclap'- w/i 60ft, DC 17 Con or 2d6 thunder + deaf(1 min) (1/2 dmg on save). 'Thunder & Lightning'- Lightning Strike & Thunderclap at same time.",
		descriptionFull : "This giant-sized quarterstaff is shaped like a bolt of lightning, and automatically resizes to fit the hands of its wielder. The staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.\n   " + toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.\n   " + toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.\n   " + toUni("Lightning Strike") + ". You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.\n   " + toUni("Thunderclap") + ". You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n   " + toUni("Thunder and Lightning") + ". You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
		attunement : true,
		weight : 4,
		action : [["action", "Staff of T\u0026L (Lightning Strike, Thunderclap, both)"]],
		weaponsAdd : ["Staff of Thunder and Lightning"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*thunder)(?=.*lightning).*$/i,
			name : "Staff of Thunder and Lightning",
			source : [["SRD", 245], ["D", 204]],
			description : "Versatile (1d8); Lightning: 1/dawn, +2d6 lightning damage; Thunder: 1/dawn DC 17 Con save or 1 round stunned",
			modifiers : [2, 2]
		},
		extraLimitedFeatures : [{
			name : "Staff of T\u0026L [5 options, 1 use each]",
			usages : 5,
			recovery : "dawn"
		}],
	},
	"staff of withering (ddex2-13)" : {
		name : "Staff of Withering (DDEX2-13)",
		source : [["AL","S2"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This staff of lightweight wood is constantly surrounded by an unseen breeze. To those attuned to it, the winds whispers words of warning, granting a +2 bonus on Dex checks made to determine initiative. Staff has 3 charges, regaining 1d3 at dawn and functions as magic quarterstaff. On a hit, you can expend 1 charge to deal an extra 2d10 necrotic damage to the target, who must make a DC 15 Con save or have disadv. on any ability check or save that uses Str or Con for 1 hour.",
		descriptionFull : "This staff of lightweight wood is constantly surrounded by an unseen breeze. To those attuned to it, the winds whispers words of warning, granting a +2 bonus on Dexterity checks made to determine initiative. The staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		limfeaname : "Staff of Withering",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponsAdd : ["Staff of Withering"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8); On hit, 1 charge for +2d10 necrotic damage and save, see magic item"
			},
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." }
		},
	"staff of withering (ddal8-13)" : {
		name : "Staff of Withering (DDAL8-13)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This magic quarterstaff is made of human bones wrapped in mithral wire. When a charge is expended, your eyes alight w/ cosmetic black flames for a round. The staff has 3 charges, regaining 1d3 at dawn. On a hit, you can expend 1 charge to deal an extra 2d10 necrotic damage to the target, who must make a DC 15 Con save or have disadv. on any ability check or save that uses Str or Con for 1 hour.",
		descriptionFull : "This staff is made of human bones wrapped in mithral wire. Whenever a charge is expended your eyes alight with cosmetic black flames for a round. The staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		limfeaname : "Staff of Withering",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponsAdd : ["Staff of Withering"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8); On hit, 1 charge for +2d10 necrotic damage and save, see magic item"
			},
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." }
		},
	"staff of the woodlands (ddal7-8/ddep7-1)" : {
		name : "Staff of the Woodlands (DDAL7-8/DDEP7-1)",
		source : [["AL","S7"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff also adds a +2 bonus on spell atks. It has been trimmed to look like a smaller version of an immense Chultan jungle tree. There's even a small diorama of a tiny village in the upper reaches of the staff’s branches - w/ tiny, string bridges connecting tiny, straw houses. 10 charges for spells, regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionFull : "This item has been meticulously trimmed and tended to in such a way that it appears to be a smaller version of one of the immense jungle trees in Chult. The staff’s creator even went so far as to create a small diorama of what looks like a tiny village in the upper reaches of the staff’s branches—complete with tiny, string bridges connecting tiny, straw houses. This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponsAdd : ["Staff of the Woodlands"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
			name : "Staff of the Woodlands",
			source : [["SRD", 245], ["D", 204]],
			modifiers : [2, 2]
		},
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"While holding the Staff of the Woodlands, I have a +2 bonus to spell attack rolls."
			]
		},
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "At will",
			spells : ["pass without trace"],
			selection : ["pass without trace"],
			firstCol : "atwill"
		}, {
			name : "1 charge",
			spells : ["animal friendship", "speak with animals"],
			selection : ["animal friendship", "speak with animals"],
			firstCol : 1,
			times : 2
		}, {
			name : "2 charges",
			spells : ["barkskin", "locate animals or plants"],
			selection : ["barkskin", "locate animals or plants"],
			firstCol : 2,
			times : 2
		}, {
			name : "3 charges",
			spells : ["speak with plants"],
			selection : ["speak with plants"],
			firstCol : 3
		}, {
			name : "5 charges",
			spells : ["awaken"],
			selection : ["awaken"],
			firstCol : 5
		}, {
			name : "6 charges",
			spells : ["wall of thorns"],
			selection : ["wall of thorns"],
			firstCol : 6
		}],
		spellChanges : {
			"awaken" : {
				time : "1 a",
				changes : "Casting time is only 1 action instead of 8 hours."
			}
		}
	},
	}
	
MagicItemsList["al swords"] = {
		name : "AL Swords",
		type : "weapon (any sword)",
		allowDuplicates : true,
	choices : ["Bitter Wrath, Frost Brand Rapier (DDAL7-9)","Deathshield, Defender Greatsword (DDAL9-20)","Desolation, Sword of Sharpness (DDAL8-14)","Frost Brand Scimitar (DDEP5-2)","Giant Slayer Greatsword (DDEP5-2)","Greatsword of Wounding (DDEX2-15)","Love's Bite, Nine Lives Stealer (DDAL7-11)","Moon-Touched Longsword (DDAL0-11D)","Velahr’kerym, Flame Tongue Longsword (DDAL0-2D)","Vorpal Scimitar (DDAL7-16)","Wyrmripper, Dragon Slayer (DDEP5-1)"],
	"bitter wrath, frost brand rapier (ddal7-9)" : {
		name : "Bitter Wrath, Frost Brand Rapier (DDAL7-9)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "This extraordinary weapon is made from a single piece of ice w/ a pommel wrapped in braided leaves. If wielded in temperatures > 90 ̊ F, rivulets of water run down its blade — soaking your hand. Despite this, it never melts away. This magic sword adds +1d6 cold damage to each hit & grants resistance to fire. In freezing temperatures, it sheds bright light in a 10-ft radius & dim light for another 10 ft. Once/hour when you draw the blade, you can extinguish all nonmagical flames w/i 30 ft.",
		descriptionFull : "This extraordinary weapon is crafted from a single piece of ice with a pommel wrapped in braided leaves. If wielded in temperatures in excess of 90 degrees, rivulets of water run down its blade—soaking the hand holding it. Despite this, it never melts away.\n   When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		limfeaname : "Bitter Wrath",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponsAdd : ["Bitter Wrath, Frost Brand Rapier"],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*rapier)(?=.*brand)(?=.*frost)(?=.*bitter)(?=.*wrath).*$/i,
			name : "Bitter Wrath, Frost Brand Rapier",
			description : "Finesse; +1d6 cold damage",
			},
		},
	"deathshield, defender greatsword (ddal9-20)" : {
		name : "Deathshield, Defender Greatsword (DDAL9-20)",
		source : [["AL","S9"]],
		type : "weapon (any sword)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		description : "This defender greatsword is made out of crude black iron. Inscribed upon the blade in Abyssal is the name “Deathshield.” You have a +3 bonus to atk & dmg rolls made with this magic sword. The 1st time you attack w/ it on each of your turns, you can transfer (part of) the bonus to AC instead. This AC adjustment remains in affect until your next turn, although you must be holding the sword to gain it.",
		descriptionFull : "This defender is a greatsword and is made out of crude black iron. Inscribed upon the blade in Abyssal is the name “Deathshield.” You gain a +3 bonus to attack and damage rolls made with this magic weapon.\n   The first time you attack with the sword on each of your turns, you can transfer some or all of the sword's bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to your attack and damage rolls to +1 and gain a +2 bonus to AC. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the sword to gain a bonus to AC from it.",
		weaponsAdd : ["Deathshield, Defender Greatsword"],
		weaponOptions : {
			baseWeapon : "greatsword",
			name : "Deathshield, Defender Greatsword",
			},
		calcChanges : { //For Defender
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/defender/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+3 bonus can be used for AC instead';
					}
				},
				'If I include the word "Defender" in a the name of a sword, it will be treated as the magic weapon Defender. It has +3 to hit and damage, but this bonus can be lowered and added to AC instead. Decide to do so with the first attack on your turn.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/defender/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 3;
					}
				}, ''
			]
		},
		},	
	"desolation, sword of sharpness (ddal8-14)" : {
		name : "Desolation, Sword of Sharpness (DDAL8-14)",
		source : [["AL","S8"]],
		type : "weapon (any sword that deals slashing damage)",
		rarity : "rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "This magic sword is made from a strange black material that feels like frigid steel. When you roll a 20 to hit a creature w/ this sword, it takes +14 slashing dmg & you have a 5% chance of lobbing off a limb. The sword does maximum damage vs. objects. With the command word, the blade gives bright light in a 10-ft radius & dim light in another 10 ft that only you can see. This stops if sheathed.",
		descriptionLong : "This greatsword of sharpness is made from a strange black material that feels like frigid steel. If commanded to shed light, only you can see it. When you attack a creature with this magic sword and roll a 20 on the attack roll, that target takes an extra 14 slashing damage and you roll another d20. If that turns up 20 as well, you lop off one of the target's limbs. If the creature has no limb to sever, you lop off a portion of its body instead. When used against an object, the damage dice are maximized. In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.",
		descriptionFull : "This greatsword of sharpness is made from a strange black material that feels like frigid steel. If commanded to shed light, only you can see it. When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.\n   In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.", // the SRD says 4d6 but that is incorrect
		weaponsAdd : ["Desolation, Greatsword of Sharpness"],
		weaponOptions : {
			baseWeapon : "greatsword",
			name : "Desolation, Greatsword of Sharpness",
			regExpSearch : /^(?=.*desolation)(?=.*greatsword)(?=.*sharpness).*$/i,
			description : "Heavy; two-handed; On 20 to hit: +14 damage \u0026 5% chance to sever limb; Max damage vs. objects",
			},
		},
	"frost brand scimitar (ddep5-2)" : {
		name : "Frost Brand Scimitar (DDEP5-2)",
		source : [["AL","S5"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "The Red Baron of Nelanther awarded these rime-coated scimitars to his most favored pirates. This magic sword adds +1d6 cold damage to each hit & grants you resistance to fire. In freezing temperatures, it sheds bright light in a 10-ft radius & dim light for an additional 10 ft. Once per hour when you draw the blade, you can extinguish all nonmagical flames within 30 ft.",
		descriptionFull : "The Red Baron of Nelanther awarded these rime-coated scimitars to his most favored pirates. When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		limfeaname : "Frost Brand Scimitar",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponsAdd : ["Frost Brand Scimitar"],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar)(?=.*brand)(?=.*frost).*$/i,
			name : "Frost Brand Scimitar",
			description : "Finesse, light; +1d6 cold damage",
			},
		},
	"giant slayer greatsword (ddep5-2)" : {
		name : "Giant Slayer Greatsword (DDEP5-2)",
		source : [["AL","S5"]],
		type : "weapon (any axe or sword)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This immense weapon is fashioned from crudely-forged black iron w/ an unfinished, translucent white stone set in the pommel — engraved w/ the rune Dod (death). You have a +1 bonus to attack & dmg rolls made with this magic sword. When you hit a creature w/ the giant type, it does 2d6 extra dmg & the giant has to make a DC 15 Strength save or be knocked prone.",
		descriptionFull : "This immense weapon is fashioned from crudely-forged black iron with an unfinished, translucent white stone set in the pommel — engraved with the rune Dod (death). You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon's type and must succeed on a DC 15 Strength saving throw or fall prone. For the purpose of this weapon, \"giant\" refers to any creature with the giant type, including ettins and trolls.",
		weaponsAdd : ["Giant Slayer Greatsword"],
		weaponOptions : {
			baseWeapon : "greatsword",
			name : "Giant Slayer Greatsword",
			},
		calcChanges : { //For Giant Slayer
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier|axe/i).test(v.baseWeaponName) && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2d6 damage vs. giants; Giants DC 15 Str save or prone';
					}
				},
				'If I include the words "Giant Slayer" in a the name of a sword, it will be treated as the magic weapon Giant Slayer. It has +1 to hit and damage and when hitting a creatures with the giant type, it does +2d6 damage and the target has to make a DC 15 Strength save or be knocked prone.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier|axe/i).test(v.baseWeaponName) && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
				]
			},
		},
	"greatsword of wounding (ddex2-15)" : {
		name : "Greatsword of Wounding (DDEX2-15)",
		source : [["AL","S2"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		allowDuplicates : true,
		description : "This sword is serrated along the back edge w/ a single, deep fuller running the length of its blade, bifurcating the point. The sharkskin-wrapped hilt ends in a pommel formed of a large, unfinished gems. This sword has a tragic history. Anyone familiar w/ Aleyd Burral & her fall from grace recognizes weapon & treats you suspicously. HP lost to this sword can only be regained by resting. 1/turn, when you hit creature, you can wound target. See full notes.",
		descriptionFull : "This sword’s blade is serrated along the back edge with a single, deep fuller running the length of its blade, bifurcating the point. The sharkskin-wrapped hilt ends in a pommel fashioned of a large, unfinished gemstone. This sword, however, has a tragic history. Anyone familiar with Aleyd Burral and her fall from grace recognizes the weapon and treat the wielder with suspicion. Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.\n   Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.",
		weaponsAdd : ["Greatsword of Wounding"],
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*greatsword)(?=.*wounding).*$/i,
			name : "Greatsword of Wounding",
			description : "Heavy, two-handed; Dmg only healed by resting; 1/turn, wound target. 1d4 necrotic/wound. DC 15 Con save to end."
		},
	},
	"love's bite, nine lives stealer (ddal7-11)" : {
		name : "Love's Bite, Nine Lives Stealer (DDAL7-11)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "The blade of this elegantly-curved +2 longsword is fashioned of silvery-blue steel gilt in gold. A strip of delicate paper hangs from the pommel, upon which is inscribed a breathtakingly beautiful poem. When you score a critical hit, your heart is filled with the agonizing ache of spurned love. The sword has 1d8+1 charges; if it inflicts a critical hit on a creature (not construct/undead) with < 100 HP, the target makes a DC 15 Con save or dies. If it dies, the sword uses a charge.",
		descriptionFull : "The blade of this elegantly-curved longsword is fashioned of silvery-blue steel gilt in gold. A strip of delicate paper hangs from the pommel, upon which is inscribed a breathtakingly beautiful poem. When the wielder scores a critical hit with the weapon, its heart is filled with the agonizing ache of spurned love.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   The sword has 1d8+1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
		usages : "1d8+1",
		recovery : "Never",
		weaponsAdd : ["Love's Bite, Nine Lives Stealer Longsword"],
		weaponOptions : {
			baseWeapon : "longsword",
			name : "Love's Bite, Nine Lives Stealer Longsword",
			},
		calcChanges : { //Nine Lives Stealer
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'On crit to target <100 HP, DC 15 Con save or die';
					}
				},
				'If I include the words "Nine Lives Stealer" in a the name of a sword, it will be treated as the magic weapon Nine Lives Stealer. It has +2 to hit and damage. Also, as long as it has charges left, when it does a critical hit against a creature with fewer than 100 HP, that creature must make a DC 15 Constitution saving throw or die.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 2;
					}
				}, ''
			]
		}
	},
	"moon-touched longsword (ddal0-11d)" : {
		name : "Moon-Touched Longsword (DDAL0-11D)",
		source : [["AL","S0"]],
		type : "weapon (longsword)",
		magicItemTable : "?",
		rarity : "common",
		description : "This elven made longsword is decorated with intricate scrollwork featuring a full moon shining down upon a glade of dancing elves. In darkness, the unsheathed blade of this sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : ["Moon-Touched Longsword"],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*longsword)(?=.*moon)(?=.*touched).*$/i,
			name : "Moon-Touched Longsword",
			description : "Versatile (d10); Counts as magical.",
			},
	},
	"velahr’kerym, flame tongue longsword (ddal0-2d)" : {
		name : "Velahr’kerym, Flame Tongue Longsword (DDAL0-2D)",
		source : [["AL","S0"]],
		type : "weapon (longsword)",
		magicItemTable : "G",
		rarity : "rare",
		description : "This magic longsword is crafted of mithril w/ a beautiful ironwood hilt. The crossguard, blade, & hilt are worked w/ a forest motif inlaid w/ shining emeralds & platinum filigree. Delicate blue flames dance along the blade when it's drawn. As a bonus action, say the command word to make flames erupt from the blade, shedding bright light in a 40-ft radius & dim light for 40-ft more. While ablaze, the sword deals an extra 2d6 fire dmg per hit. The flames last until you say the command word again (bonus action) or you drop/sheathe the sword.",
		descriptionFull : "This longsword is crafted of mithril with a beautiful hilt of carved ironwood. The crossguard, blade, and hilt are worked through with a forest motif inlaid with shining emeralds and platinum filigree. Delicate blue flames dance along the blade whenever it is drawn from its scabbard.\n   You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
		action : [["bonus action", "Velahr’kerym (activate/end)"]],
		weaponsAdd : ["Velahr’kerym, Flame Tongue Longsword"],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*longsword)(?=.*flame)(?=.*tongue).*$/i,
			name : "Velahr’kerym, Flame Tongue Longsword",
			description : "Versatile (d10); While active, +2d6 fire damage.",
			},
	},
	"vorpal scimitar (ddal7-16)" : {
		name : "Vorpal Scimitar (DDAL7-16)",
		source : [["AL","S7"]],
		type : "weapon (any sword that deals slashing damage)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		allowDuplicates : true,
		description : "This +3 scimitar hums & vibrates w/ energy, slicing through obstacles w/ ease. If the sword doesn't claim a sentient life each day, you are easily angered & frustrated by the smallest obstacles. The sword ignores slashing dmg resistance, On a nat. 20 to hit, it cuts off 1 head (possibly = death). If target has no head, is immune to slashing dmg, has legendary actions, or its neck is too wide, +6d8 slashing dmg instead.",
		descriptionFull : "This blade hums and vibrates with great energy, and slices through obstacles with the greatest of ease. If the sword does not claim the life of a sentient creature each day, you find that you are easily angered and become frustrated by even the smallest obstacles. You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.\n   When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.",
		weaponsAdd : ["Vorpal Scimitar"],
		weaponOptions : {
			baseWeapon : "scimitar",
			name : "Vorpal Scimitar",
			},
		calcChanges : {  //For Vorpal Sword
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponText) && v.theWea.damage[2] == "slashing") {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'Ignores slashing resistance; On 20 to hit: cut off head';
					}
				},
				'If I include the word "Vorpal" in a the name of a sword that deals slashing damage, it will be treated as the magic weapon Vorpal Sword. It has +3 to hit and damage and on a roll of 20 on the attack roll, it cuts off a head of the target.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponText) && v.theWea.damage[2] == "slashing") {
						output.magic = v.thisWeapon[1] + 3;
					}
				}, ''
			]
		},
	},
	"wyrmripper, dragon slayer (ddep5-1)" : {
		name : "Wyrmripper, Dragon Slayer Greatsword (DDEP5-1)",
		source : [["AL","S5"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Made of what appears to be roughly crafted pig iron with a crude leather haft, this enormous greatsword possesses a bold Davek rune at the base of both sides of the blade which reads “Wyrmripper”. You have a +1 bonus to attack and damage rolls made with this magic sword. When you hit a creature of the dragon type with this sword, it does 3d6 extra damage.",
		descriptionFull : "Made of what appears to be roughly crafted pig iron with a crude leather haft, this enormous greatsword possesses a bold Davek rune at the base of both sides of the blade which reads “Wyrmripper”. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n  When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon's type. For the purpose of this weapon, \"dragon\" refers to any creature with the dragon type, including dragon turtles and wyverns.",
		weaponsAdd : ["Wyrmripper, Dragon Slayer Greatsword"],
		weaponOptions : {
			baseWeapon : "greatsword",
			name : "Wyrmripper, Dragon Slayer Greatsword",
			},
		calcChanges : { //For Dragon Slayer
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*dragon)(?=.*slayer).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+3d6 damage vs. dragons';
					}
				},
				'If I include the words "Dragon Slayer" in a the name of a sword, it will be treated as the magic weapon Dragon Slayer. It has +1 to hit and damage and deals +3d6 damage to creatures with the dragon type.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*dragon)(?=.*slayer).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 1;
						}
					}, ''
				]
			},
		},
}
	
MagicItemsList["al weapons +1, +2, or +3"] = {
		name : "AL Weapons +1, +2, or +3",
		type : "weapon (any)",
		descriptionFull : "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: uncommon (+1), rare (+2), or very rare (+3).",
		allowDuplicates : true,
		choices : ["+1 Battleaxe (DDEX2-11)", "+1 Halberd (DDEP5-2)","+1 Quarterstaff (DDEX3-16)","+1 Quarterstaff (DDAL7-3)", "+1 Rapier (DDEX3-2)", "+1 Shortbow (DDEX3-16)","+1 Shortsword (DDEP7-1)","+1 Trident (DDEP7-1)","+1 Weapon (DDHC-TOA-8)","+2 Bow (DDEX3-7)", "+2 Longbow (DDEP5-2)","+2 Shortsword (DDAL0-13)","Whisper, +2 Greataxe (DDHC-TOA-8)","+3 Scimitar (DDEP6-2)","Krahharuan Fork, +3 Pike (DDAL7-10)","Skeggöx, +3 Battleaxe (DDAL5-9)"],
		"+1 battleaxe (ddex2-11)" : {
		name : "+1 Battleaxe (DDEX2-11)",
			source : [["AL","S2"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This ancient axe is made of grey stone marbled with purple veins. Its head is inscribed with ancient dwarven runes and its haft is covered with the cured hide of a purple worm. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Battleaxe +1"],
			weaponOptions : {
			baseWeapon : "battleaxe",
			regExpSearch : /^(?=.*battle)(?=.*axe).*$/i,
			name : "Battleaxe +1",
				}
			},
		"+1 halberd (ddep5-2)" : {
		name : "+1 Halberd (DDEP5-2)",
			source : [["AL","S5"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This haldberd is made from a slender piece of white wood is polished to a high shine and tipped with a silver-and-gold filigree blade. This item never gets dirty. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Halberd +1"],
			weaponOptions : {
			baseWeapon : "halberd",
			regExpSearch : /^(?=.*halberd).*$/i,
			name : "Halberd +1",
				}
			},
		"+1 quarterstaff (ddex3-16)" : {
		name : "+1 Quarterstaff (DDEX3-16)",
			source : [["AL","S3"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "The weapon is marked with the symbol of House Gos of Mulmaster. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Quarterstaff +1"],
			weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff).*$/i,
			name : "Quarterstaff +1",
				}
			},
		"+1 quarterstaff (ddal7-3)" : {
		name : "+1 Quarterstaff (DDAL7-3)",
			source : [["AL","S7"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This quarterstaff features a blunted iron hook on one end and is used by dinosaur wranglers to goad ornery beasts in their charge into doing what they’re supposed to. The staff is carved from dark, smooth wood and decorated with feathers. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Quarterstaff +1"],
			weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff).*$/i,
			name : "Quarterstaff +1",
				}
			},
		"+1 rapier (ddex3-2)" : {
		name : "+1 Rapier (DDEX3-2)",
			source : [["AL","S3"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This weapon weighs half as much as a normal rapier (1 lb) and is fashioned of dark blue metal inscribed with images of spiders and webs. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Rapier +1 (1 lb)"],
			weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*rapier).*$/i,
			name : "Rapier +1 (1 lb)",
				}
			},
		"+1 shortbow (ddex3-16)" : {
		name : "+1 Shortbow (DDEX3-16)",
			source : [["AL","S3"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "The weapon is marked with the symbol of House Gos of Mulmaster. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Shortbow +1"],
			weaponOptions : {
			baseWeapon : "shortbow",
			regExpSearch : /^(?=.*shortbow).*$/i,
			name : "Shortbow +1",
				}
			},
		"+1 shortsword (ddep7-1)" : {
		name : "+1 Shortsword (DDEP7-1)",
			source : [["AL","S7"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This weapon has a basket hilt that's forged to resemble a woman draped in kelp and nets, similar in appearance to a ship’s figurehead. When used in battle, the woman sings a rather obscene sea shanty audible to anyone within 30 ft. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Shortsword +1"],
			weaponOptions : {
			baseWeapon : "shortsword",
			regExpSearch : /^(?=.*shortsword).*$/i,
			name : "Shortsword +1",
				}
			},
		"+1 trident (ddep7-1)" : {
		name : "+1 Trident (DDEP7-1)",
			source : [["AL","S7"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This rusted weapon is crusted over in barnacles and draped in wet seaweed. Its wielder can hold their breath underwater for twice the normal duration. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Trident +1"],
			weaponOptions : {
			baseWeapon : "trident",
			regExpSearch : /^(?=.*trident).*$/i,
			name : "Trident +1",
				}
			},
		"+1 weapon (ddhc-toa-8)" : {
		name : "+1 (DDHC-TOA-8)",
			source : [["AL","S7"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This weapon contains wood from a sentient tree. The spirit of the tree remains in the wood, and therefore the weapon contains a sentience. You have a +1 bonus to attack and damage rolls made with this magic weapon and feel the desires of the tree spirit within.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["prefix", "+1"]
				},
			},
		"+2 bow (ddex3-7)" : {
		name : "+2 (DDEX3-7)",
			source : [["AL","S3"]],
			rarity : "rare",
			magicItemTable : "G",
			description : "This +2 weapon has the sentinel property and glows dimly in the presence of humans. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			allowDuplicates : true,
			chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "+2"],
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/shortbow|longbow/i).test(inObj.name);
					},
				}
			},
		"+2 longbow (ddep5-2)" : {
		name : "+2 Longbow (DDEP5-2)",
			source : [["AL","S5"]],
			rarity : "rare",
			magicItemTable : "G",
			description : "The shaft of this exquisite longbow is patterned with maps of famous rivers that pass through the Moonshae Isles. If the names of one of these rivers are said aloud, the bow issues forth the sound of rushing water when an arrow is loosed. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Longbow +2"],
			weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /^(?=.*longbow).*$/i,
			name : "Longbow +2",
				}
			},
		"+2 shortsword (ddal0-13)" : {
		name : "+2 Shortsword (DDAL0-13)",
			source : [["AL","S10"]],
			rarity : "rare",
			magicItemTable : "G",
			description : "The shortsword is made from the claw of a polar bear, with a white blade and a black tip. The wielder, when happy, growls. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Shortsword +2"],
			weaponOptions : {
			baseWeapon : "shortsword",
			regExpSearch : /^(?=.*shortsword).*$/i,
			name : "Shortsword +2",
				}
			},
		"whisper, +2 greataxe (ddhc-toa-8)" : {
		name : "Whisper, +2 Greataxe (DDHC-TOA-8)",
			source : [["AL","S7"]],
			rarity : "very rare",
			magicItemTable : "H",
			attunement : true,
			description : "Whisper is normally a +1 Greataxe. However, if you attune to the weapon, it becomes a +2 greataxe, you gain darkvision to 120 ft, and advantage on Stealth checks. However, while attuned you can only speak in whispers. You have either a +1 or +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "Whisper is normally a +1 Greataxe. However, if the wielder attunes to the weapon, it becomes a +2 greataxe, the wielder gains darkvision to 120 feet, and advantage on Stealth checks. However, while attuned the wielder can only speak in whispers. You have either a +1 or +2 bonus to attack and damage rolls made with this magic weapon.",
			vision : [["Darkvision", "fixed 120"], ["Darkvision", "120"]],
			weaponsAdd : ["Greataxe +2 (Whisper)"],
			weaponOptions : {
			baseWeapon : "greataxe",
			regExpSearch : /^(?=.*greataxe)(?=.*whisper).*$/i,
			name : "Greataxe +2 (Whisper)",
				},
			advantages : [["Stealth", true]],
			},
		"+3 scimitar (ddep6-2)" : {
		name : "+3 Scimitar (DDEP6-2)",
			source : [["AL","S6"]],
			rarity : "very rare",
			magicItemTable : "H",
			description : "Formerly owned by an efreeti, this sword glows with a dull red if a marid is within 60 feet. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Scimitar +3"],
			weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar).*$/i,
			name : "Scimitar +3",
				}
			},
		"krahharuan fork, +3 pike (ddal7-10)" : {
		name : "Krahharuan Fork, +3 Pike (DDAL7-10)",
			source : [["AL","S7"]],
			rarity : "very rare",
			magicItemTable : "H",
			description : "Forged of black, pitted iron, the haft of this double-tined pike is wrapped in the supple hide of a young red dragon. Wisps of black smoke stream from a glowing red stone at the butt of the weapon only to drift away on an unseen breeze. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Krahharuan Fork, +3 Pike"],
			weaponOptions : {
			baseWeapon : "pike",
			regExpSearch : /^(?=.*pike)(?=.*krahharuan)(?=.*fork).*$/i,
			name : "Krahharuan Fork, +3 Pike",
				}
			},
		"skeggöx, +3 battleaxe (ddal5-9)" : {
		name : "Skeggöx, +3 Battleaxe (DDAL5-9)",
			source : [["AL","S5"]],
			rarity : "very rare",
			magicItemTable : "H",
			description : "This impressive battleaxe possesses a massive haft w/ a huge gear turning atop it. Connected to the gear are a series of gnashing blades that extend when the weapon is used against giants. As a bonus action once/dawn, a dwarf or person who worships a dwarven god may brandish this weapon & gain adv. on 1 CHA (Intimidation) check. You have a +3 bonus to attack & dmg rolls made w/ this magic weapon.",
			descriptionFull : "This impressive battleaxe possesses a massive haft with a huge gear turning gently atop it. Connected to the gear are a series of gnashing blades that extend when the weapon is wielded against giants. As a bonus action, a dwarf or a character that worships a dwarven deity may brandish this weapon and gain advantage on one Charisma (Intimidation) check. Once this property has been used, it can’t be used again until the following dawn. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			limfeaname : "Skeggöx",
			usages : 1,
			recovery : "dawn",
			additional : "if dwf/worship dwf god",
			action : [["bonus action", " (Intimidation Ck Adv)"]],
			weaponsAdd : ["Battleaxe +3 (Skeggöx)"],
			weaponOptions : {
			baseWeapon : "battleaxe",
			regExpSearch : /^(?=.*battle)(?=.*axe)(?=.*Skeggöx).*$/i,
			name : "Battleaxe +3 (Skeggöx)",
				}
			},
}

MagicItemsList["al weapons (other)"] = {
		name : "AL Weapons (Other)",
		allowDuplicates : true,
	choices : ["Dagger of Venom (DDAL4-11)", "Dagger of Venom (DDAL5-17)","Javelin of Lightning (DDAL8-5)","Oathbow (DDAL-DRW08)","Skyfist, Dwarven Thrower (DDEP4)","Trident of Warning (DDEX2-3)","Vicious Spear (DDAL0-13)","Weapon of Warning (DDAL0-7)","Whip of Warning (DDAL4-2)"],
	"dagger of venom (ddal4-11)" : {
		name : "Dagger of Venom (DDAL4-11)",
		source : [["AL","S4"]],
		type : "weapon (dagger)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This magical dagger appears as a knot of vipers, their tails becoming the pointed blade & heads forming the hilt & guard. The wielder hears hissing snakes when w/i 120 ft of poison or venomous creature. The dagger adds a +1 bonus to attack & dmg rolls made w/ it. As an action once/dawn, blade coats itself w/ thick, black poison, lasting 1 min. While coated, 1st creature hit makes DC 15 Con save or takes 2d10 poison dmg & is poisoned for 1 min.",
		descriptionFull : "This magical dagger is forged to appear as a knot of vipers, their tails becoming the pointed blade and heads agape forming the hilt and guard. The wielder hears the sound of hissing snakes when within 120 feet of poison or a venomous creature. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (Coat)"]],
		weaponsAdd : ["Dagger of Venom"],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*venom).*$/i,
			name : "Dagger of Venom",
			source : [["SRD", 215], ["D", 161]],
			description : "Finesse, light, thrown; If coated, DC 15 Con save or +2d10 poison damage \u0026 1 min poisoned",
			modifiers : [1, 1]
		}
	},
	"dagger of venom (ddal5-17)" : {
		name : "Dagger of Venom (DDAL5-17)",
		source : [["AL","S5"]],
		type : "weapon (dagger)",
		rarity : "rare",
		magicItemTable : "G",
		description : "The pommel of this wicked dagger looks like a black viper with the forked blade worked to resemble its tongue. The dagger adds a +1 bonus to attack & dmg rolls made w/ it. As an action once/dawn, blade coats itself w/ thick, black poison, lasting 1 min. While coated, 1st creature hit makes DC 15 Con save or takes 2d10 poison dmg & poisoned for 1 min.",
		descriptionFull : "The pommel of this wicked dagger looks like a black viper with the forked blade worked to resemble its tongue. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (Coat)"]],
		weaponsAdd : ["Dagger of Venom"],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*venom).*$/i,
			name : "Dagger of Venom",
			source : [["SRD", 215], ["D", 161]],
			description : "Finesse, light, thrown; If coated, DC 15 Con save or +2d10 poison damage \u0026 1 min poisoned",
			modifiers : [1, 1]
		}
	},
	"javelin of lightning (ddal8-5)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (DDAL8-5)",
		source : [["AL","S8"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This javelin glows an angry red when within 120 feet of a troll. Once per dawn you can speak this javelin's command word and make a ranged weapon attack with it on a target within 120 ft. All between you and the target in a 5-ft wide line take 4d6 lightning damage, DC 13 Dex save halves. If the javelin hits the target, it takes 1d6 piercing and 4d6 lightning damage.",
		descriptionFull : "This javelin is a magic weapon and glows an angry red when within 120 feet of a troll. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponsAdd : ["Javelin of Lightning"],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			source : [["SRD", 228], ["D", 178]],
			description : "Thrown; Once per dawn special attack, see item description"
		}
	},
	"oathbow (ddal-drw08)" : {
		name : "Oathbow (DDAL-DRW08)",
		source : [["AL","DRW"]],
		type : "weapon (longbow)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This particular oathbow is made of blackened, cooled lava, its string glowing as if red-hot. When you attack with the longbow and say its command phrase, the target becomes your sworn enemy (if you don't have one) for 7 days or until it dies. Attacks with this bow vs. it get adv, +3d6 damage, ignore cover (not full), and suffer no disadv. from long range. While it lives, you have disadv. when you use other weapons. Property can't be used again until next dawn after enemy dies.",
		descriptionLong : "This particular oathbow is made of blackened, cooled lava, its string glowing as if red-hot. When you use this weapon to make a ranged attack and say its command phrase \"Swift death to you who have wronged me.\", the target of that attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time and when it dies, you can choose a new one after the next dawn. Your ranged attack rolls with this weapon against your sworn enemy have advantage, do +3d6 piercing damage, ignore all cover except full, and don't suffer disadvantage due to long range. While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.",
		descriptionFull : 'This particular oathbow is made of blackened, cooled lava, its string glowing as if red-hot. When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.',
		attunement : true,
		weight : 2,
		weaponsAdd : ["Oathbow"],
		weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /oathbow/i,
			name : "Oathbow",
			source : [["SRD", 231], ["D", 183]],
			description : "Ammunition, heavy, two-handed; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties"
		}
	},
	"skyfist, dwarven thrower (ddep4)" : {
		name : "Skyfist, Dwarven Thrower (DDEP4)",
		source : [["AL","S4"]],
		type : "weapon (warhammer)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		prerequisite : "Requires attunement by a dwarf",
		prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
		weight : 2,
		description : "The head of this magical warhammer has been forged into a gauntleted fist. The haft is a rod of heavy, black adamantine wrapped in spongy, green leather. Affixed to the pommel is a strip of blood-stained parchment inscribed w/ a dwarven battle song. When used, the hammer reads the song aloud (audible w/i 30ft). This hammer has a +3 bonus to atk & dmg rolls & the thrown property 20/60ft. It deals an extra 1d8 dmg (2d8 to giants) when thrown & returns to your hand after each atk.",
		descriptionLong : "The striking surface of this magical warhammer has been forged into a gauntleted fist. The haft is a rod of heavy, black adamantine wrapped in spongy, green leather. Affixed to an iron ring on the pommel is a strip of tattered (though indestructible), blood-stained parchment inscribed with a dwarven battle canticle. When used, the hammer reads the canticle aloud in a deep resonating voice audible within 30ft. You gain a +3 bonus to attack and damage rolls made with this weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or 2d8 damage against giants. Immediately after the attack, the weapon flies back to your hand.",
		descriptionFull : "The striking surface of this hammer has been forged into the shape of a gauntleted fist. The haft is a rod of heavy, black adamantine and wrapped in what appears to be spongy, green leather. Affixed to an iron ring on the pommel is a strip of tattered (though indestructible), blood-stained parchment inscribed with a dwarven battle canticle. When used in battle, the hammer reads the canticle aloud in a deep resonating voice audible to anyone within 30 feet of the weapon. You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weaponsAdd : ["Skyfist, Dwarven Thrower"],
		weaponOptions : {
			baseWeapon : "warhammer",
			regExpSearch : /^(?=.*dwarven)(?=.*thrower)(?=.*skyfist).*$/i,
			name : "Skyfist, Dwarven Thrower",
			source : [["SRD", 220], ["D", 167]],
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d10); +1d8 dmg when thrown (2d8 vs. giants) and returns immediately",
			modifiers : [3, 3] // add 3 to each to hit and damage because of the magical bonus
		}
	},
	"trident of warning (ddex2-3)" : {
			name : "Trident of Warning (DDEX2-3)",
			source : [["AL","S2"]],
			type : "weapon (trident)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "Anyone wielding this weapon of unusual, blue steel feels oddly self-assured. While it is on your person, you have advantage on initiative rolls. In addition, both you and your allies within 30 ft can't be surprised and the weapon magically awakens all of you when combat starts, except those incapacitated by something other than nonmagical sleep.",
			descriptionFull : "Anyone wielding this trident of unusual, blue steel feels oddly self-assured. This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : ["Trident of Warning"],
				weaponOptions : {
				baseWeapon : "trident",
				regExpSearch : /^(?=.*trident)(?=.*warning).*$/i,
				name : "Trident of Warning",
				}
			},
	"vicious spear (ddal0-13)" : {
		name : "Vicious Spear (DDAL0-13)",
		source : [["AL","S10"]],
		type : "weapon (spear)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This spear is made from a polished narwhal tusk, and it has been carved with symbols of slaughter and bloodshed. By wielding it publicly, you may get strange looks. It may also mark you as someone involved in the killing of one of the evil Wolf Tribe marauders. When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		weaponsAdd : ["Vicious Spear"],
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /^(?=.*spear)(?=.*vicious).*$/i,
			name : "Vicious Spear",
			source : [["SRD", 248], ["D", 209]],
			description : "Thrown, versatile (1d8); On nat 20 to hit: +7 damage",
		}
	},
	"weapon of warning (ddal0-7)" : {
			name : "of Warning (DDAL0-7)",
			source : [["AL","S0"]],
			type : "weapon (any)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This length of black iron is wrapped in supple, black leather & gilt in mithral. While wielding this weapon, profane fiery runes of pain & hate appear on the arm that holds it. While on your person, you have adv. on initiative. You & your allies w/i 30 ft can't be surprised & the weapon magically awakens all of you when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This length of black iron is wrapped in supple, black leather and gilt in mithral. When found, it takes the form of any weapon its owner desires. Once its form has been determined, however, it can never again take another. While wielding this weapon, fiery and profane runes of pain and hate appear on the arm that the weapon is wielded in. This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["prefix", "of Warning"]
				},
			},
	"whip of warning (ddal4-2)" : {
			name : "Whip of Warning (DDAL4-2)",
			source : [["AL","S4"]],
			type : "weapon (whip)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This whip is fashioned from a length of rotting, thorn-covered vine set into a handle made of an unusual purple wood. The pommel is a large chunk of unpolished amber with a moving eyeball trapped within. While on your person, you have adv. on initiative. Also, you & your allies w/i 30 ft can't be surprised & the weapon magically awakens all of you when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This whip is fashioned from a length of rotting, thorn-covered vine set into a handle made of an unusual purple wood. The pommel is a large chunk of unpolished amber with a moving eyeball trapped within. This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : ["Whip of Warning"],
			weaponOptions : {
			baseWeapon : "whip",
			regExpSearch : /^(?=.*whip)(?=.*warning).*$/i,
			name : "Whip of Warning",
		}
			},
}
