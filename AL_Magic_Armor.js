/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me. It would not exist without them.*/

/*===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
Additionally, due to the length of some descriptions, I recommend auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will run off the page.
*/

/*  Subject: Flavored Armor from AL adventures
    Effect:	This script adds the flavored versions of standard magic armor found in AL adventures to the MPMB sheet. They will all be listed as AL [categories] in the Magic Item selection, with further choices as needed. Helms can be found in the AL Magic Items script as most do not provide AC.
	
	This is not a complete list since I do not have every published adventure, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor.*/
	
	//Complete: S0-S9, Guild Adept
	//In progress: CCCs, S10 (Through 10-9), DC-POA, DRW
	
var iFileName = "AL Flavored Armor.js";
RequiredSheetVersion(13);

// Define the source
SourceList["AL"] = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};

//AL Flavored Armor
MagicItemsList["al adamantine/mithral armor"] = {
		name : "AL Adamantine/Mithral Armor",
		type : "armor (medium or heavy)",
		rarity : "uncommon",
		allowDuplicates : true,				
	choices : ["Adamantine Armor (DDAL0-1)","Adamantine Chain Shirt (DDEP5-2)","Durgeddin's Unbreakable Auspice (DDEP6-1)","Mithral Splint (DDAL5-4)","Mithral Plate (DDHC-MORD-01)"],		
		"adamantine armor (ddal0-1)" : {
			name: "Adamantine Armor (DDAL0-1)",
			source : [["AL","S0"]],
			description : "Appearing almost decorative, this suit of highly polished adamantine armor hails from ancient Netheril and is adorned in minute runes of protection. While you're wearing it, any critical hit against you becomes a normal hit.",
			descriptionFull : "ppearing almost decorative, this suit of highly polished armor hails from ancient Netheril and is adorned in minute runes of protection. This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.\n\nThere are several magic item tables in the Dungeon Masters Guide where this item appears on. It varies per type of armor and not all types are listed. See below for the table:\n\n" + toUni("Armor Type\tTable") + "\nChain Mail\t  F\nChain Shirt\t  F\nScale Mail  \t  F\nBreastplate\t  G\nSplint Armor\t  G\nHalf Plate Armor\t  H\nPlate Armor\t  H",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Adamantine"],
			descriptionChange : ["prefix", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
				},
			}
		},
		"adamantine chain shirt (ddep5-2)" : {
			name: "Adamantine Armor (DDEP5-2)",
			source : [["AL","S5"]],
			magicItemTable : "F",
			description : "This glittering chain shirt is composed of interlocking adamantine rings. When the wearer moves, the shirt emits the faint sound of waves lapping at the shore. While you're wearing it, any critical hit against you becomes a normal hit.",
			descriptionFull : "This glittering chain shirt is composed of interlocking adamantine rings. When the wearer moves, the shirt emits the faint sound of waves lapping at the shore. This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Adamantine"],
			descriptionChange : ["prefix", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/chain shirt/i).test(inObj.name);
				},
			}
		},
		"durgeddin's unbreakable auspice (ddep6-1)" : {
			name: "Durgeddin's Unbreakable Auspice",
			source : [["AL","S6"]],
			magicItemTable : "H",
			description : "A masterwork of dwarven craftsmanship forged of pure adamantine and lovingly adorned with all the holy symbols of the Dwarven Pantheon etched in platinum about the breastplate. The wearer of this armor has advantage on all social interactions with dwarves. While you're wearing this plate armor, any critical hit against you becomes a normal hit.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Adamantine"],
			excludeCheck : function (inObjKey, inObj) {
				return (/medium/i).test(inObj.type) || !(/plate/i).test(inObj.name);
				},
			}
		},
	"mithral splint (ddal5-4)" : {
		name : "Mithral Armor (DDAL5-4)",
		source : [["AL","S5"]],
		magicItemTable : "B",
		description : "A beautifully crafted suit of splint wrought in classical Adbarran design. The armor is evocative of dwarven sensibilities, being simple & angular. The helm is crafted with curling ram’s horns and dwarven runes on the vambraces pronounce the wearer a friend and defender of Citadel Adbar. Mithral is a light, flexible metal, and this splint doesn't impose disadv. on Dex (Stealth) checks or require 15 Str.",
		descriptionFull : "A beautifully crafted suit of splint mail wrought in classical Adbarran design. The armor is evocative of dwarven sensibilities, being simple if a bit angular. The helm is crafted with curling ram’s horns and dwarven runes on the vambraces pronouncing the wearer a friend and defender of Citadel Adbar. Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Mithral"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/splint/i).test(inObj.name);
					},
			}
		},
	"mithral plate (ddhc-mord-01)" : {
		name : "Mithral Armor (DDHC-MORD-01)",
		source : [["AL","MtoF"]],
		magicItemTable : "B",
		description : "This suit of armor is emblazoned with an unblinking, lidless eye in the center of the breastplate. Mithral is a light, flexible metal, and this plate mail doesn't impose disadv. on Dex (Stealth) checks or require 15 Str.",
		descriptionFull : "This suit of armor is emblazoned with an unblinking, lidless eye in the center of the breastplate. Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Mithral"],
			descriptionChange : ["prefix", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return (/medium/i).test(inObj.type) || !(/plate/i).test(inObj.name);
				},
			}
		},
}

MagicItemsList["al armor +1 or +2"] = {
		name : "AL Armor +1 or +2",
		type : "armor (light, medium, or heavy)",
		descriptionFull : "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity: rare (+1), very rare (+2), or legendary (+3).\n\nThere are several magic item tables in the Dungeon Masters Guide where this item appears on. It varies per type of armor and magic bonus, with not all types of combinations listed. See below for the table per type of armor and bonus:\n\n" + toUni("Table\tBonus\tArmor Types") +
		"\n  G\t  +1\tChain Mail, Chain Shirt, Leather" +
		"\n  G\t  +1\tScale Mail, Spiked Armor" +
		"\n  H\t  +1\tBreastplate, Splint, Studded Leather" +
		"\n  H\t  +2\tChain Mail, Chain Shirt, Leather" +
		"\n  H\t  +2\tScale Mail, Spiked Armor" +
		"\n  I\t  +1\tHalf Plate, Plate, Scale Mail" +
		"\n  I\t  +2\tBreastplate, Half Plate, Plate, Scale Mail" +
		"\n  I\t  +2\tSplint, Studded Leather" +
		"\n  I\t  +3\tBreastplate, Chain Mail, Chain Shirt" +
		"\n  I\t  +3\tHalf Plate, Leather, Plate" +
		"\n  I\t  +3\tSpiked Armor, Splint, Studded Leather",
		allowDuplicates : true,
		choices : ["+1 Leather (DDEP7-1)","+1 Breastplate (DDAL0-1)","+1 Half Plate (CCC-TRI-06)", "+1 Half Plate (DDEP4)","Shroud of the Mourning Warrior, +1 Scale Mail (DDAL5-13)","+1 Splint (DDEX1-12)","+1 Splint (DDAL5-4)", "+2 Half Plate (DDEP7-2)"],
		"+1 leather (ddep7-1)" : {
			name : "+1 (DDEP7-1)",
			source : [["AL","S7"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This sealskin suit is embroidered with octopuses that squirm magically when exposed to the air. If worn underwater, the wearer gains advantage on checks made to escape grappling. This armor grants a +1 bonus to AC while worn.",
			savetxt : { text : ["Adv on checks to escape grapples (Underwater only)"] },
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "+1"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/leather/i).test(inObj.name)|| (/studded leather/i).test(inObj.name);
					},
			},
		},
		"+1 breastplate (ddal0-1)" : {
			name : "+1 (DDAL0-1)",
			source : [["AL","S0"]],
			rarity : "rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "This surprisingly light breastplate is made of smoky red glass as strong as steel. Barely translucent, when light strikes it the smoky inclusions in the glass seems to shift and flow. The breastplate weighs 10 lbs and grants a +1 bonus to AC while worn.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "+1 (Glass, 10 lb)"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/breastplate/i).test(inObj.name);
					},
			},
		},
		"+1 half plate (ccc-tri-06)" : {
			name : "+1 (CCC-TRI-06)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "Made from the frozen bones of Auntie Olma’s old coven, this suit of half plate looks to be made from sheets of iron until examined closely. While wearing this armor, it lowers your body temperature to just above freezing with no ill effects, and the voices of the dead hags fill your mind with taunts and harassment. This armor grants a +1 bonus to AC while worn.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "+1 (Bone)"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/half plate/i).test(inObj.name);
					},
			},
		},
		"+1 half plate (ddep4)" : {
			name : "+1 (DDEP4)",
			source : [["AL","S4"]],
			rarity : "rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "This black enameled armor has a splash of green paint across the chest. No amount of cleaning will remove it; even magical attempts prove useless. Any creature familiar with the Tears of Virulence will likely treat the wearer with suspicion. This armor grants a +1 bonus to AC while worn.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "+1"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/half plate/i).test(inObj.name);
					},
			},
		},
		"shroud of the mourning warrior, +1 scale mail (ddal5-13)" : {
			name : "+1 (Shroud of the Mourning Warrior)",
			source : [["AL","S5"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This suit of armor is fashioned out of slivers of wood, each engraved with Giant runes of death and lament, and sewn onto a backing of black leather. The armor resizes to fit its wearer & grants a +1 bonus to AC while worn.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "+1 (Wood)"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/scale mail/i).test(inObj.name);
					},
			},
		},
		"+1 splint (ddex1-12)" : {
			name : "+1 (DDEX1-12)",
			source : [["AL","S1"]],
			rarity : "rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "This fine suit of splint armor has dwarven runes etched upon it. The runes describe the glories of great battles in the North against orcs. The armor glows faintly when within 100 feet of orcs and grants a +1 bonus to AC while worn.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["suffix", "+1"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/splint/i).test(inObj.name);
					},
				},
			},
		"+1 splint (ddal5-4)" : {
			name : "+1 (DDAL5-4)",
			source : [["AL","S5"]],
			rarity : "rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "A beautifully crafted suit of splint wrought in classical Adbarran design. The armor is evocative of dwarven sensibilities, being simple & angular. The helm is crafted with curling ram’s horns and dwarven runes on the vambraces pronounce the wearer a friend and defender of Citadel Adbar. This armor grants a +1 bonus to AC while worn.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["suffix", "+1"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/splint/i).test(inObj.name);
					},
				}
			},
		"+2 half plate (ddep7-2)" : {
			name : "+2 (DDEP7-2)",
			source : [["AL","S7"]],
			rarity : "very rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "This armor is made of thin plates of rune-engraved stone. While worn, the wearer becomes proficient in the Dwarven language. This armor grants a +2 bonus to AC while worn.",
			languageProfs : ["Dwarvish"],
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "+2 (Stone)"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/half plate/i).test(inObj.name);
					},
			},
		},
}

MagicItemsList["al armor (common)"] = {
		name : "AL Armor (Common)",
		allowDuplicates : true,
		rarity : "common",
	choices : ["Cast-Off Breastplate (DC-POA-HAG-SF4)","Flurried Furs (DDAL0-4)","Smoldering Studded Leather (DDAL10-0)","Smokin' Hot Leather (DC-POA-LEGIT-SV-02)","Wintergreen Guard (DC-POA-LEGIT-SV-01)"],
	"cast-off breastplate (dc-poa-hag-sf4)" : {
		name : "Cast-Off",
		source : [["AL","S10"]],
		type : "armor (medium)",
		description : "This armor looks like it has been well used. You can doff it as an action.",
		descriptionFull : "This armor looks like it has been well used and consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered. You can doff it as an action.",
		attunement : true,
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "suffix",
			descriptionChange : ["prefix", "armor"],
			itemName1stPage : ["suffix", "Cast-Off"],
			excludeCheck : function (inObjKey, inObj) {
			return !(/breastplate/i).test(inObj.name);
					},
				},
		action : [["action", "Cast-Off Breastplate"]]
	},
	"flurried furs (ddal0-4)" : {
		name : "Flurried Furs, Smoldering",
		source : [["AL","S0"]],
		type : "armor (light, medium, or heavy)",
		description : "As if from frigid clouds overhead, a light dusting of illusory snow perpetually sprinkles down over the wearer of this armor.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "armor"],
		itemName1stPage : ["suffix", "Flurried"],
		}
	},	
	"smoldering studded leather (ddal10-0)" : {
			name : "Smoldering",
			source : [["AL","S10"]],
			type : "armor (light)",
			description : "This armor smells of blood and gnoll sweat, and the stench can’t be removed. Wisps of harmless, odorless smoke rise from this armor while it is worn.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "suffix",
			descriptionChange : ["prefix", "armor"],
			itemName1stPage : ["suffix", "Smoldering"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/studded leather/i).test(inObj.name);
					},
				},
			},
	"smokin' hot leather (dc-poa-legit-sv-02)" : {
			name : "Smokin' Hot Armor, Smoldering",
			source : [["AL","S10"]],
			type : "armor (light)",
			description : "An offensively pink suit of armor. It's been enchanted to emit pink-tinted rose-scented smoke. Pink spikes have been placed wherever it was possible, and in several places where it wasn't. Violently pink fur lines its insides, just how many pink bears had to die for this abomination?",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "suffix",
			descriptionChange : ["prefix", "armor"],
			itemName1stPage : ["suffix", "Smoldering"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/studded leather/i).test(inObj.name);
					},
				},
			},
	"wintergreen guard (dc-poa-legit-sv-01)" : {
			name : "Wintergreen Guard, Smoldering",
			source : [["AL","S10"]],
			type : "armor (medium)",
			description : "When you are struck by bludgeoning damage, the armor emits oils which create a cool numbing sensation. While not particularly effective at its intended purpose, the volatile oils produce a visible and pleasant smelling vapor which waft from under the armor.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "armor"],
			itemName1stPage : ["suffix", "Smoldering"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/breastplate/i).test(inObj.name);
					},
				},
			},
}


MagicItemsList["al armor (other)"] = {
		name : "AL Armor (Other)",
		allowDuplicates : true,
	choices : ["Chardalyn Breastplate (DDAL10-5)","Demon Armor (DDEX3-16)","Efreeti Chain (DDAL7-15)","Glamoured Studded Leather (DDAL4-9)","Glamoured Studded Leather (DDAL8-11)","Glamoured Studded Leather (DDAL9-6)","Half Plate of Poison Resist. (DDEX3-11)","Mariner's Breastplate (CCC-AETHER-1-2)","Plate Armor of Etherealness (DDAL8-16)","Red Dragon Scale Mail (DDEP5-1)","Red Dragon Scale Mail (DDAL9-15)","Studded Leather of Fire Resis. (DDAL0-11C)"],
	"chardalyn breastplate (ddal10-5)" : {
			name : "of Necrotic Resistance (DDAL10-5)",
			source : [["AL","S10"]],
			type : "armor (breastplate)",
			rarity : "rare",
			magicItemTable : "H",
			attunement : true,
			description : "This breastplate is made of chardalyn reinforced with hardened wood and boiled leather. While wearing it, you always feel bitterly cold. You have resistance to necrotic damage while attuned to and wearing the armor.",
			dmgres : ["Necrotic"],
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["suffix", "Chardalyn"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/breastplate/i).test(inObj.name);
					},
				}
		},
	"demon armor (ddex3-16)" : {
		name : "Demon Armor (DDEX3-16)",
		source : [["AL","S3"]],
		type : "armor (plate)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This finely-crafted armor is form-fitting & elegant, but black metal lends it a frightful appearance. The visor covers the entire front of helm & resembles the face of an emotionless drow w/ long, pointed ears. Has a long, hooded cloak of smooth, white silk that never gets dirty. While wearing armor, +1 AC, know Abyssal, & can use clawed gauntlets for unarmed strikes. Have disadv. on attacks & on saves vs. demons. Can't doff w/o Remove Curse or similar magic.",
		descriptionFull : "The black metal from which this finely-crafted armor is forged of lends it a frightful appearance that is form-fitting and elegant in design. The visor comprises the entire front of the helm and resembles the face of an emotionless drow--complete with long, pointed ears. It is festooned with a long, hooded cloak of smooth, white silk that never seems to get dirty. While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor's clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack and damage rolls and a damage die of 1d8.\n   " + toUni("Curse") + ". Once you don this cursed armor, you can't doff it unless you are targeted by the Remove Curse spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities.",
		attunement : true,
		weight : 65,
		cursed : true,
		languageProfs : ["Abyssal"],
		savetxt : { text : ["Disadv. on saves vs. demons"] },
		armorAdd : "Demon Armor",
		armorOptions : [{
			regExpSearch : /^(?=.*demon)(?=.*armor).*$/i,
			name : "Demon Armor",
			source: [["SRD", 218], ["D", 165]],
			type : "heavy",
			ac : 19,
			stealthdis : true,
			weight : 65,
			strReq : 15
		}],
		weaponsAdd: ["Demon Armor Claws"],
		weaponOptions: [{
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*demon)(?=.*armor)(?=.*claws).*$/i,
			name : "Demon Armor Claws",
			source: [["SRD", 218], ["D", 165]],
			damage : [1, 8, "slashing"],
			modifiers : [1, 1]
		}]
		},
	"efreeti chain (ddal7-15)" : {		
		name : "Efreeti Chain (DDAL7-15)",
		source : [["AL","S7"]],
		type : "armor (chain mail)",
		rarity : "legendary",
		magicItemTable : "I",
		description : "The efreeti Prince Rashidi al-Zahar ibn Rath transmogrified an efreeti sultana into this delicate suit of crimson chain mail. While wearing this armor, you always feels a slight draft, & sometimes finds it hard to stay focused on a task. But you gain a +3 bonus to AC, are immune to fire damage, and can understand and speak Primordial. You can also stand on & walk across molten rock as if it solid ground.",
		descriptionFull : "The efreeti Prince Rashidi al-Zahar ibn Rath transmogrified an efreeti sultana into this delicate suit of crimson chain mail. The wearer of this armor always feels a slight draft, and sometimes finds it hard to stay focused on a task. While wearing this armor, you gain a +3 bonus to AC, you are immune to fire damage, and you can understand and speak Primordial. In addition, you can stand on and walk across molten rock as if it were solid ground.",
		attunement : true,
		weight : 55,
		languageProfs : ["Primordial"],
		savetxt : { immune : ["fire"] },
		armorAdd : "Efreeti Chain",
		armorOptions : [{
			regExpSearch : /^(?=.*efreeti)(?=.*chain).*$/i,
			name : "Efreeti Chain",
			source: ["D", 167],
			type : "heavy",
			ac : 19,
			stealthdis : true,
			weight : 55,
			strReq : 13
		}]
	},
	"glamoured studded leather (ddal4-9)" : {
		name : "Glamoured Studded Leather (DDAL4-9)",
		source : [["AL","S4"]],
		type : "armor (studded leather)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This studded lthr armor is tight & immodestly cut. While wearing it, you gain a +1 bonus to AC. As a bonus action, speak command word & cause armor to assume the appearance of a normal clothing or other armor type. You decide appearance, but the armor retains normal bulk. Any illusion created by this item appears to be of the finest quality. No matter what form it takes, your appearance draws the eye. The illusion lasts until you use this property again or remove the armor.",
		descriptionFull : "In its natural state, this armor is tight and immodestly cut. While wearing this armor, you gain a +1 bonus to AC. You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. Any illusion of normal clothing and other types of armor created by this item can appear only to be of the finest quality. No matter what form it takes, when you wear this item, your appearance draws the eye of those around you. The illusory appearance last until you use this property again or remove the armor.",
		armorAdd : "Glamoured Studded Leather",
		armorOptions : {
			regExpSearch : /^(?=.*glamou?r)(?=.*(studded|studs))(?=.*leather).*$/i,
			name : "Glamoured Studded Leather",
			source : [["SRD", 224], ["D", 172]],
			type : "light",
			ac : 13,
			weight : 13
		},
		action : [["bonus action", "Glamoured Studded Lthr (change)"]]
	},
	"glamoured studded leather (ddal8-11)" : {
		name : "Glamoured Studded Leather (DDAL8-11)",
		source : [["AL","S8"]],
		type : "armor (studded leather)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This studded armor is made of salmon leather that has been dyed midnight black. While wearing it, you cannot become wet unless fully immersed in a liquid & you gain a +1 bonus to AC. As a bonus action, you can speak the command word & cause armor to assume the appearance of a normal clothing or other armor type. You decide appearance, but the armor retains normal bulk. The illusion lasts until you use this property again or remove the armor.",
		descriptionFull : "This armor is made of salmon leather that has been dyed midnight black. While wearing this studded leather, you cannot become wet unless fully immersed in a liquid & you gain a +1 bonus to AC. You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance last until you use this property again or remove the armor.",
		armorAdd : "Glamoured Studded Leather",
		armorOptions : {
			regExpSearch : /^(?=.*glamou?r)(?=.*(studded|studs))(?=.*leather).*$/i,
			name : "Glamoured Studded Leather",
			source : [["SRD", 224], ["D", 172]],
			type : "light",
			ac : 13,
			weight : 13
		},
		action : [["bonus action", "Glamoured Studded Lthr (change)"]]
	},
	"glamoured studded leather (ddal9-6)" : {
		name : "Glamoured Studded Leather (DDAL9-6)",
		source : [["AL","S9"]],
		type : "armor (studded leather)",
		rarity : "rare",
		magicItemTable : "G",
		description : "Made from tough yet flexible giant abyssal crocodile hide leather & studded with what look to be teeth, this armor grants a +1 bonus to AC. As a bonus action, you can speak the command word & cause armor to assume the appearance of a normal clothing or other armor type. You decide appearance, but the armor retains normal bulk. The illusion lasts until you use this property again or remove the armor.",
		descriptionFull : "Made from tough yet flexible giant abyssal crocodile hide leather and studded with what look to be teeth, this armor grants a +1 bonus to AC. You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance last until you use this property again or remove the armor.",
		armorAdd : "Glamoured Studded Leather",
		armorOptions : {
			regExpSearch : /^(?=.*glamou?r)(?=.*(studded|studs))(?=.*leather).*$/i,
			name : "Glamoured Studded Leather",
			source : [["SRD", 224], ["D", 172]],
			type : "light",
			ac : 13,
			weight : 13
			},
		action : [["bonus action", "Glamoured Studded Lthr (change)"]]
		},
	"half plate of poison resist. (ddex3-11)" : {
			name : "of Poison Resist. (Mushroom)",
			source : [["AL","S3"]],
			type : "armor (half plate)",
			rarity : "rare",
			magicItemTable : "I",
			attunement : true,
			description : "This non-metal half plate armor is constructed of petrified giant mushrooms. The wearer feels fortunate and optimistic about what the future holds. While wearing this armor and attuned to it, you have resistance to poison damage.",
			dmgres : ["Poison"],
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["suffix", "Mushroom"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/half plate/i).test(inObj.name);
					},
				}
		},
	"mariner's breastplate (ccc-aether-1-2)" : {
		name : "Mariner's Armor (CCC-AETHER-1-2)",
		source : [["AL","CCC"]],
		type : "armor (breastplate)",
		rarity : "uncommon",
		magicItemTable : "B",
		description : "The number “12101993” is etched into the inside of this green metallic breastplate along with a single word in Abyssal: “Doomed”. While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hp, you rise 60 ft toward the surface. The armor is decorated with fish & shell motifs.",
		descriptionFull : "The number “12101993” is etched into the inside of this green metallic breastplate along with a single word in Abyssal: “Doomed”. While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs.",
		allowDuplicates : true,
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Mariner's"],
			excludeCheck : function (inObjKey, inObj) {
			return !(/breastplate/i).test(inObj.name);
					},
			},
		speed : { swim : { spd : "walk", enc : "walk" } }
	},
	"plate armor of etherealness (ddal8-16)" : {
		name : "Plate Armor of Etherealness (DDAL8-16)",
		source : [["AL","S8"]],
		type : "armor (plate)",
		rarity : "legendary",
		magicItemTable : "I",
		description : "This armor has a holy symbol of Shar forged into the breast & reflects light poorly. While you wear it, you can speak & understand Qualith without rolling any checks or saves to avoid short-term madness. Once per dawn, you can speak armor's command word as an action to gain the effect of the Etherealness spell, which lasts for 10 minutes or until you remove the armor/speak the command word as action again.",
		descriptionFull : "This armor has a holy symbol of Shar forged into the breastplate. It also looks dim and reflects light poorly. While you wear it, you can speak and understand Qualith without having to roll any checks or saves to avoid short-term madness. You can also speak its command word as an action to gain the effect of the Etherealness spell, which lasts for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn.",
		attunement : true,
		weight : 65,
		limfeaname : "Armor of Etherealness",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (start/stop)"]],
		languageProfs : ["Qualith (no chks/saves)"],
		armorAdd : "Plate Armor of Etherealness",
		armorOptions : {
			regExpSearch : /^(?=.*plate)(?=.*etherealness).*$/i,
			name : "Plate Armor of Etherealness",
			source : [["SRD", 233], ["D", 185]],
			type : "heavy",
			ac : 18,
			stealthdis : true,
			weight : 65,
			strReq : 15
		},
		spellcastingBonus : {
			name : "once per dawn",
			spells : ["etherealness"],
			selection : ["etherealness"],
			firstCol : "oncelr"
		},
		spellChanges : {
			"etherealness" : {
				components : "V,M\u0192",
				duration : "10 min",
				description : "I go to Ethereal Plane; move there freely, but able to perceive 60 ft into the normal plane",
				changes : "Using the Plate Armor of Etherealness, I can cast Etherealness, but only on myself and it lasts only 10 minutes."
				}
			}
		},
	"red dragon scale mail (ddep5-1)" : {
			name : "Red Dragon Scale Mail (DDEP5-1)",
			source : [["AL","S5"]],
			type : "armor (scale mail)",
			rarity : "very rare",
			magicItemTable : "H",
			attunement : true,
			dmgres: ["Fire"],
			limfeaname : "Detect Red Dragon",
			action : [["action", "Detect Red Dragon"]],
			usages : 1,
			recovery : "dawn",
			savetxt : {
			adv_vs : ["Dragon Frightful Presence", "Dragon Breath Weapons"],
			},
			description : "This beautiful suit of scale mail is made from red dragon hide. Gold decorates the pauldrons & greaves, & the helm is crafted in the shape of a snarling dragon complete with horns. This armor gives +1 to AC, adv. on saves against dragons' frightful presence & breath weapons, & resistance to fire dmg. As an action once/dawn, you can discern the distance & direction to closest red dragon w/i 30 miles.",
			descriptionFull : "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. This beautiful suit of scale mail is made from red dragon hide. Exquisite gold embossing covers the pauldrons & greaves, while the helm is crafted in the likeness of a snarling dragon complete with horns.\n   While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to one damage type that is determined by the kind of dragon that provided the scales (see the table).\n   Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest dragon within 30 miles of you that is of the same type as the armor. This special action can't be used again until the next dawn.\n\n" + toUni("Dragon\tResistance\tDragon\tResistance") + "\nBlack\tAcid\t\tGold\tFire\nBlue\tLightning  \tGreen\tPoison\nBrass\tFire\t\tRed\tFire\nBronze\tLightning  \tSilver\tCold\nCopper\tAcid\t\tWhite\tCold",
			armorAdd : "Red Dragon Scale Mail",
			armorOptions : {
				regExpSearch : /^(?=.*dragon)(?=.*scale)(?=.*mail).*$/i,
				name : "Red Dragon Scale Mail",
				type : "medium",
				ac : 15,
				stealthdis : true,
				weight : 45
					},
		},
	"red dragon scale mail (ddal9-15)" : {
			name : "Red Dragon Scale Mail (DDAL9-15)",
			source : [["AL","S9"]],
			type : "armor (scale mail)",
			rarity : "very rare",
			magicItemTable : "H",
			attunement : true,
			dmgres: ["Fire"],
			limfeaname : "Detect Red Dragon",
			action : [["action", "Detect Red Dragon"]],
			usages : 1,
			recovery : "dawn",
			savetxt : {
			adv_vs : ["Dragon Frightful Presence", "Dragon Breath Weapons"],
			},
			description : "This was once the armor of Carmine, an orcish paladin of the Bloody Hooves. She didn’t survive into the final caverns to have her soul entombed to wait for Zariel’s return. This red dragon scale mail gives +1 to AC, adv. on saves against dragons' frightful presence & breath weapons, & resistance to fire dmg. As an action once per dawn, you can discern the distance & direction to closest red dragon w/i 30 miles.",
			descriptionFull : "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. This red dragon scale was once the armor of Carmine, an orc paladin of the Bloody Hooves. She didn’t survive into the final set of caverns to have her soul entombed to wait for Zariel’s return. \n   While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to one damage type that is determined by the kind of dragon that provided the scales (see the table).\n   Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest dragon within 30 miles of you that is of the same type as the armor. This special action can't be used again until the next dawn.\n\n" + toUni("Dragon\tResistance\tDragon\tResistance") + "\nBlack\tAcid\t\tGold\tFire\nBlue\tLightning  \tGreen\tPoison\nBrass\tFire\t\tRed\tFire\nBronze\tLightning  \tSilver\tCold\nCopper\tAcid\t\tWhite\tCold",
			armorAdd : "Red Dragon Scale Mail",
			armorOptions : {
				regExpSearch : /^(?=.*dragon)(?=.*scale)(?=.*mail).*$/i,
				name : "Red Dragon Scale Mail",
				type : "medium",
				ac : 15,
				stealthdis : true,
				weight : 45
					},
		},
	"studded leather of fire resis. (ddal0-11c)" : {
			name : "of Fire Resistance (DDAL0-11C)",
			source : [["AL","S0"]],
			type : "armor (studded leather)",
			rarity : "rare",
			magicItemTable : "H",
			attunement : true,
			description : "This armor is reinforced with rivets made of unmeltable ice, and steams faintly when the wearer is hit with fire attacks. While wearing this armor and attuned to it, you have resistance to fire damage.",
			dmgres : ["Fire"],
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "of Fire Resistance"],
			descriptionChange : ["prefix", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/studded leather/i).test(inObj.name);
					},
				}
		},
}
				
MagicItemsList["al shields, +1, +2, or +3"] = {
		name : "AL Shields, +1, +2, or +3",
		type : "shield",
		descriptionFull : "While holding this shield, you have a bonus to AC. This bonus is in addition to the shield's normal bonus to AC. The bonus is determined by the rarity of the shield: uncommon (+1), rare (+2), or very rare (+3).",
		allowDuplicates : true,
		choices : ["+1 Shield (DDEX3-5)", "Wall of Teeth +2 (DDEX2-14)", "+3 Shield (very rare)"],
		"+1 shield (ddex3-5)" : {
			name : "Shield +1 (DDEX3-5)",
			source : [["AL","S3"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This shield is fashioned from the hide of an umber hulk. It bears the oak leaf symbol commonly associated with the nature deity Silvanus. While holding this shield, you have a +1 bonus to AC in addition to the shield's normal AC bonus",
			allowDuplicates : true,
			shieldAdd : "+1 Shield"
		},
		"wall of teeth +2 (ddex2-14)" : {
			name : "Wall of Teeth +2 (DDEX2-14)",
			source : [["AL","S2"]],
			rarity : "rare",
			magicItemTable : "G",
			description : "This shield is fashioned of dull, black steel and festooned with hundreds upon hundreds of human teeth. Whenever the wielder of the shield is presented with an opportunity to act in a selfish or malevolent way, the item heightens their urge to do so. While holding this shield, you have a +2 bonus to AC in addition to the shield's normal AC bonus.",
			allowDuplicates : true,
			shieldAdd : "+2 Shield (Wall of Teeth)"
		},
		"+3 shield (very rare)" : {
			name : "Shield +3",
			rarity : "very rare",
			magicItemTable : "H",
			description : "While holding this shield, I have a +3 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
			allowDuplicates : true,
			shieldAdd : "+3 Shield"
		},
	}
	
MagicItemsList["al shields (other)"] = {
		name : "AL Shields (Other)",
		allowDuplicates : true,
		type : "shield",
		weight : 6,
	choices : ["Animated Shield (DDEP5-2)","Animated Shield (DDEP8-3)","Arrow-Catching Shield (DDAL9-8)","Sentinel Shield (DDEX2-12)","Spellguard Shield (DDEP7-2)","Spellguard Shield (DDAL-DRWEP02)"],
	"animated shield (ddep5-2)" : {  // contains contributions by Larry Hoy
		name : "Animated Shield (DDEP5-2)",
		source : [["AL","S5"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "The enormous shield is etched with images of Annam the All-Father holding court over the gods of the “lesser races”. While attuned to the shield, you cannot tell lies. As a bonus action, speak the command word to animate shield for 1 minute, until you use another bonus action (returns to hand), or until you're incapacitated/die (falls to ground). The shield leaps into the air, hovering in your space to protect you.",
		descriptionFull : "The enormous shield is etched with images of Annam the All-Father holding court over the gods of the “lesser races”. While you’re attuned to the shield, you cannot tell lies. While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.",
		attunement : true,
		action : [["bonus action", "Animated Shield"]],
		shieldAdd : "Animated Shield"
	},
	"animated shield (ddep8-3)" : {  // contains contributions by Larry Hoy
		name : "Animated Shield (DDEP8-3)",
		source : [["AL","S8"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This shield appears as the head of a large beer keg, ringed by a rusty iron band. Whenever the shield is struck by a blow, you hear a chorus of cheering dwarven voices. As a bonus action, you can speak the command word to animate shield for 1 minute, until you use another bonus action (returns to hand), or until you're incapacitated/die (falls to ground). The shield leaps into the air, hovering in your space to protect you.",
		descriptionFull : "This shield appears as the head of a large beer keg, ringed by a rusty iron band. Whenever the shield is struck by a blow, a chorus of cheering dwarven voices are heard. While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.",
		attunement : true,
		action : [["bonus action", "Animated Shield"]],
		shieldAdd : "Animated Shield"
	},
	"arrow-catching shield (ddal9-8)" : { // contains contributions by Larry Hoy
		name : "Arrow-Catching Shield (DDAL9-8)",
		source : [["AL","S9"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This round, metal shield is decorated w/ braids of hair from the unicorn Zhalruban & emblazoned w/ the insignia of the Hellriders. While wielding it, you gain an additional +2 bonus to AC against ranged attacks (not calculated in 1st page AC). Also, when an attacker makes a ranged atk against a target w/i 5 ft of you, you can become the target of the atk as a reaction. When you do this, the shield pulses with magic.",
		descriptionFull : "This round, metal shield is decorated with braids of hair from the unicorn Zhalruban and emblazoned with the insignia of the Hellriders on the boss of the shield. The boss itself pulses with magic when the shield attracts ranged attacks.\n   You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
		attunement : true,
		weight : 6,
		action : [["reaction", "Arrow-Catching Shield"]],
		shieldAdd : "Arrow-Catching Shield (+\u200A2 vs. ranged)"
	},
	"sentinel shield (ddex2-12)" : {
		name : "Sentinel Shield (DDEX2-12)",
		source : [["AL","S2"]],
		rarity : "uncommon",
		magicItemTable : "F",
		shieldAdd : "Sentinel Shield",
		advantages : [["Initiative", true], ["Perception", true]],
		vision : [["Adv. on Perception checks", 0]],
		description: "This oblong shield has an obvious eye motif with several eyes on its surface that occasionally blink. While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye."
		},
	"spellguard shield (ddep7-2)" : {
		name : "Spellguard Shield (DDEP7-2)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This shield is fashioned from a single piece of flawless crystal with straps of supple leather. While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.",
		attunement : true,
		weight : 6,
		shieldAdd : "Spellguard Shield",
		savetxt : { adv_vs : ["spells", "magical effects"] }
	},
	"spellguard shield (ddal-drwep02)" : {
		name : "Spellguard Shield (DDAL-DRWEP02)",
		source : [["AL","DRW"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This tower shield is made of hundreds of interlocking humanoid bones, dipped in a shimmering silver resin. When you are targeted by a spell, the bones vibrate gently & emit deep ominous chanting in ancient Oman, lasting for 1d6 rounds. While holding this shield, you have adv. on saves against spells & other magical effects, & spell atks have disadv. against you.",
		descriptionFull : "This tower shield is made of hundreds of interlocking humanoid bones, dipped in a shimmering silver resin. When you are targeted by a spell, the bones vibrate gently and emit deep, ominous chanting in ancient Oman, lasting for 1d6 rounds. While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.",
		attunement : true,
		weight : 6,
		shieldAdd : "Spellguard Shield",
		savetxt : { adv_vs : ["spells", "magical effects"] }
	},
}
