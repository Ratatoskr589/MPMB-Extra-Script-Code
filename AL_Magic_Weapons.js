/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me. It would not exist without them.
===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
Additionally, due to the length of some descriptions, I recommend using auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will likely run out of space, even with the abbreviations.
*/

/*  Subject: Flavored Weapons from AL adventures
    Effect:	This script adds the flavored versions of standard magic weapons found in AL adventures to the MPMB sheet. They will all be listed as AL [item category] in the Magic Item selection, with further choices as needed. The main categories are as follows: Staffs (all staffs, whether specifically called out as weapons or not), Swords (anything ONLY available as a sword), Weapons +1/+2/+3, Weapons (Other) (all other weapon types).  All Rods can be found in the AL Magic Items script, even those that can be used as a weapon.
	
	This is not a complete list since I do not have every published adventure, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor. But if I missed something, let me know.*/
	
		//Complete: S1-S5
	
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
MagicItemsList["al staffs"] = {
	name : "AL Staffs:",
	allowDuplicates : true,
	choices : ["Staff of Charming (DDEX2-2)", "Staff of Healing (DDEP4)","Staff of Power (DDAL5-19)","Staff of Power (DDEP4)", "Staff of Swarming Insects (DDEX3-3)", "Staff of Thunder and Lightning (DDAL5-8)","Staff of Thunder and Lightning (DDEP5-2)","Staff of Withering (DDEX2-13)"],
	"staff of charming (ddex2-2)" : {
		name : "Staff of Charming (DDEX2-2)",
		source : [["SRD", 243], ["D", 201]],
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
		action : [["reaction", "Staff of Charming (reflect enchant. spell)"]],
		weaponsAdd : ["Staff of Charming"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*charming).*$/i,
			name : "Staff of Charming",
			}
		},
	"staff of healing (ddep4)" : {
		name : "Staff of Healing (DDEP4)",
		source : [["SRD", 243], ["D", 202]],
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
	"staff of power (ddal5-19)" : {
		name : "Staff of Power (DDAL5-19)",
		source : [["SRD", 243], ["D", 202]],
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
		source : [["SRD", 243], ["D", 202]],
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
	"staff of swarming insects (ddex3-3)" : {
		name : "Staff of Swarming Insects (DDEX3-3)",
		source : [["SRD", 244], ["D", 203]],
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
		action : [["action", "Staff of Swarming Insects"]],
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
		source : [["SRD", 245], ["D", 204]],
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
		source : [["SRD", 245], ["D", 204]],
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
		source : [["SRD", 246], ["D", 205]],
		type : "staff",
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
	}
	
MagicItemsList["al swords"] = {
		name : "AL Swords",
		type : "weapon (any sword)",
		allowDuplicates : true,
		calcChanges : {
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
	choices : ["Greatsword of Wounding (DDEX2-15)", "Frost Brand Scimitar (DDEP5-2)","Wyrmripper, Dragon Slayer (DDEP5-1)"],
	"greatsword of wounding (ddex2-15)" : {
		name : "Greatsword of Wounding (DDEX2-15)",
		source : [["SRD", 246], ["D", 207]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This sword is serrated along the back edge w/ a single, deep fuller running the length of its blade, bifurcating the point. The sharkskin-wrapped hilt ends in a pommel formed of a large, unfinished gems. This sword has a tragic history. Anyone familiar w/ Aleyd Burral & her fall from grace recognizes weapon & treats you suspicously. HP lost to this sword can only be regained by resting. 1/turn, when you hit creature, you can wound target. See full notes.",
		descriptionFull : "This sword’s blade is serrated along the back edge with a single, deep fuller running the length of its blade, bifurcating the point. The sharkskin-wrapped hilt ends in a pommel fashioned of a large, unfinished gemstone. This sword, however, has a tragic history. Anyone familiar with Aleyd Burral and her fall from grace recognizes the weapon and treat the wielder with suspicion. Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.\n   Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.",
		weaponsAdd : ["Greatsword of Wounding"],
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*greatsword)(?=.*wounding).*$/i,
			name : "Greatsword of Wounding",
			description : "Heavy, 2-handed; Dmg only healed by resting; 1/turn, wound target. 1d4 necrotic/wound. DC 15 Con save to end."
		},
	},
	"frost brand scimitar (ddep5-2)" : {
		name : "Frost Brand Scimitar (DDEP5-2)",
		source : [["SRD", 223], ["D", 171]],
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
	"wyrmripper, dragon slayer (ddep5-1)" : {
		name : "Wyrmripper, Dragon Slayer Greatsword (DDEP5-1)",
		source : [["SRD", 219], ["D", 166]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Made of what appears to be roughly crafted pig iron with a crude leather haft, this enormous greatsword possesses a bold Davek rune at the base of both sides of the blade which reads “Wyrmripper”. You have a +1 bonus to attack and damage rolls made with this magic sword. When you hit a creature of the dragon type with this sword, it does 3d6 extra damage.",
		descriptionFull : "Made of what appears to be roughly crafted pig iron with a crude leather haft, this enormous greatsword possesses a bold Davek rune at the base of both sides of the blade which reads “Wyrmripper”. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon's type. For the purpose of this weapon, \"dragon\" refers to any creature with the dragon type, including dragon turtles and wyverns.",
		weaponsAdd : ["Wyrmripper, Dragon Slayer Greatsword"],
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*greatsword)(?=.*wyrmripper)(?=.*dragon)(?=.*slayer).*$/i,
			name : "Wyrmripper, Dragon Slayer Greatsword",
			description : "Heavy, two-handed; +3d6 damage vs. dragons",
			},
		},
}
	
MagicItemsList["al weapons +1, +2, or +3"] = {
		name : "AL Weapons +1, +2, or +3",
		source : [["SRD", 250], ["D", 213]],
		type : "weapon (any)",
		descriptionFull : "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: uncommon (+1), rare (+2), or very rare (+3).",
		allowDuplicates : true,
		choices : ["+1 Battleaxe (DDEX2-11)", "+1 Halberd (DDEP5-2)","+1 Quarterstaff (DDEX3-16)", "+1 Rapier (DDEX3-2)", "+1 Shortbow (DDEX3-16)", "+2 Bow (DDEX3-7)", "+2 Longbow (DDEP5-2)","Skeggöx, +3 Battleaxe (DDAL5-9)"],
		"+1 battleaxe (ddex2-11)" : {
		name : "+1 Battleaxe (DDEX2-11)",
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
		"+1 rapier (ddex3-2)" : {
		name : "+1 Rapier (DDEX3-2)",
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
		"+2 bow (ddex3-7)" : {
		name : "+2 (DDEX3-7)",
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
			rarity : "uncommon",
			magicItemTable : "F",
			description : "The shaft of this exquisite longbow is patterned with maps of famous rivers that pass through the Moonshae Isles. If the names of one of these rivers are said aloud, the bow issues forth the sound of rushing water when an arrow is loosed. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : ["Longbow +2"],
			weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /^(?=.*longbow).*$/i,
			name : "Longbow +2",
				}
			},
		"skeggöx, +3 battleaxe (ddal5-9)" : {
		name : "Skeggöx, +3 Battleaxe (DDAL5-9)",
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
			regExpSearch : /^(?=.*battle)(?=.*axe).*$/i,
			name : "Battleaxe +3",
				}
			},
}

MagicItemsList["al weapons (other)"] = {
		name : "AL Weapons (Other)",
		allowDuplicates : true,
		calcChanges : {
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
	choices : ["Dagger of Venom (DDAL4-11)", "Dagger of Venom (DDAL5-17)","Giant Slayer Greatsword (DDEP5-2)","Skyfist, Dwarven Thrower (DDEP4)","Trident of Warning (DDEX2-3)", "Whip of Warning (DDAL4-2)"],
	"dagger of venom (ddal4-11)" : {
		name : "Dagger of Venom (DDAL4-11)",
		source : [["SRD", 215], ["D", 161]],
		type : "weapon (dagger)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This magical dagger appears as a knot of vipers, their tails becoming the pointed blade & heads forming the hilt & guard. The wielder hears hissing snakes when w/i 120 ft of poison or venomous creature. The dagger adds a +1 bonus to attack & dmg rolls made w/ it. As an action once/dawn, blade coats itself w/ thick, black poison, lasting 1 min. While coated, 1st creature hit makes DC 15 Con save or takes 2d10 poison dmg & is poisoned for 1 min.",
		descriptionFull : "This magical dagger is forged to appear as a knot of vipers, their tails becoming the pointed blade and heads agape forming the hilt and guard. The wielder hears the sound of hissing snakes when within 120 feet of poison or a venomous creature. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
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
		source : [["SRD", 215], ["D", 161]],
		type : "weapon (dagger)",
		rarity : "rare",
		magicItemTable : "G",
		description : "The pommel of this wicked dagger looks like a black viper with the forked blade worked to resemble its tongue. The dagger adds a +1 bonus to attack & dmg rolls made w/ it. As an action once/dawn, blade coats itself w/ thick, black poison, lasting 1 min. While coated, 1st creature hit makes DC 15 Con save or takes 2d10 poison dmg & poisoned for 1 min.",
		descriptionFull : "The pommel of this wicked dagger looks like a black viper with the forked blade worked to resemble its tongue. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
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
	"giant slayer greatsword (ddep5-2)" : {
		name : "Giant Slayer Greatsword (DDEP5-2)",
		source : [["SRD", 224], ["D", 172]],
		type : "weapon (any axe or sword)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This immense weapon is fashioned from crudely-forged black iron w/ an unfinished, translucent white stone set in the pommel — engraved w/ the rune Dod (death). You have a +1 bonus to attack & dmg rolls made with this magic sword. When you hit a creature w/ the giant type, it does 2d6 extra dmg & the giant has to make a DC 15 Strength save or be knocked prone.",
		descriptionFull : "This immense weapon is fashioned from crudely-forged black iron with an unfinished, translucent white stone set in the pommel — engraved with the rune Dod (death). You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon's type and must succeed on a DC 15 Strength saving throw or fall prone. For the purpose of this weapon, \"giant\" refers to any creature with the giant type, including ettins and trolls.",
		weaponsAdd : ["Giant Slayer Greatsword"],
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*greatsword)(?=.*giant)(?=.*slayer).*$/i,
			name : "Giant Slayer Greatsword",
			description : "Heavy, two-handed; +2d6 damage vs. giants; Giants DC 15 Str save or prone"
			},
		},
	"skyfist, dwarven thrower (ddep4)" : {
		name : "Skyfist, Dwarven Thrower (DDEP4)",
		source : [["SRD", 220], ["D", 167]],
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
			source : ["D", 213],
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
	"whip of warning (ddal4-2)" : {
			name : "Whip of Warning (DDAL4-2)",
			source : ["D", 213],
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