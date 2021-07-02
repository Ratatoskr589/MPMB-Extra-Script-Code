/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me. It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
Additionally, due to the length of some descriptions, I recommend using auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will likely run out of space, even with the abbreviations.
*/

/*  Subject: Flavored Armor from AL adventures
    Effect:	This script adds the flavored versions of standard magic armor found in AL adventures to the MPMB sheet. They will all be listed as AL [item name/categories] in the Magic Item selection, with further choices as needed. Helms can be found in the AL Magic Items script as most do not provide AC.
	
	This is not a complete list since I do not have every published adventure, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor. But if I missed something, let me know.*/
	
	//Complete: S1-S5
	
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
	choices : ["Adamantine Armor (DDAL0-1)","Adamantine Chain Shirt (DDEP5-2)","Mithral Splint (DDAL5-4)"],		
		"adamantine armor (ddal0-1)" : {
			name: "Adamantine Armor (DDAL0-1)",
			source : [["SRD", 207], ["D", 150]],
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
			source : [["SRD", 207], ["D", 150]],
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
	"mithral splint (ddal5-4)" : {
		name : "Mithral Armor (DDAL5-4)",
		source : [["SRD", 231], ["D", 182]],
		magicItemTable : "B",
		description : "A beautifully crafted suit of splint wrought in classical Adbarran design. The armor is evocative of dwarven sensibilities, being simple & angular. The helm is crafted with curling ram’s horns and dwarven runes on the vambraces pronounce the wearer a friend and defender of Citadel Adbar. Mithral is a light, flexible metal, and this splint doesn't impose disadv. on Dex (Stealth) checks or require 15 Str.",
		descriptionFull : "A beautifully crafted suit of splintmail wrought in classical Adbarran design. The armor is evocative of dwarven sensibilities, being simple if a bit angular. The helm is crafted with curling ram’s horns and dwarven runes on the vambraces pronouncing the wearer a friend and defender of Citadel Adbar. Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Mithral"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/splint/i).test(inObj.name);
					},
			}
		},
}

MagicItemsList["al armor +1 or +2"] = {
		name : "AL Armor +1 or +2",
		source : [["SRD", 208], ["D", 152]],
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
		choices : ["+1 Half Plate (CCC-TRI-06)", "+1 Half Plate (DDEP4)", "Shroud of the Mourning Warrior, +1 Scale Mail (DDAL5-13)", "+1 Splint (DDEX1-12)","+1 Splint (DDAL5-4)"],
		"+1 half plate (ccc-tri-06)" : {
			name : "+1 (Bone)",
			rarity : "rare",
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
			rarity : "rare",
			allowDuplicates : true,
			description : "This black enameled armor has a splash of green paint across the chest. No amount of cleaning will remove it; even magical attempts prove useless. Any creature familiar with the Tears of Virulence will likely treat the wearer with suspicion. This armor grants a +1 bonus to AC while worn.",
			chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["prefix", "+1"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/half plate/i).test(inObj.name);
					},
			},
		},
		"shroud of the mourning warrior, +1 scale mail (ddal5-13)" : {
			name : "+1 (Shroud of the Mourning Warrior)",
			rarity : "rare",
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
			rarity : "rare",
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
			rarity : "rare",
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
}

MagicItemsList["al armor (resistance/dragon scale)"] = {
		name : "AL Armor (Resistance/Dragon Scale)",
		attunement : true,
		allowDuplicates : true,
		type : "armor (light, medium, or heavy)",
	choices : ["Half Plate of Poison Res. (DDEX3-11)","Red Dragon Scale Mail (DDEP5-1)"],
		"half plate of poison res. (ddex3-11)" : {
			name : "of Poison Res. (Mushroom)",
			source : [["SRD", 208], ["D", 152]],
			type : "armor (half plate)",
			rarity : "rare",
			magicItemTable : "I",
			description : "This non-metal half plate armor is constructed of petrified giant mushrooms. The wearer feels fortunate and optimistic about what the future holds. While wearing this armor & attuned to it, you have resistance to poison damage.",
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
		"red dragon scale mail (ddep5-1)" : {
			name : "Red Dragon Scale Mail (DDEP5-1)",
			source : [["SRD", 219], ["D", 165]],
			type : "armor (scale mail)",
			rarity : "very rare",
			magicItemTable : "H",
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
	},
	
MagicItemsList["al armor (other)"] = {
		name : "AL Armor (Other)",
		allowDuplicates : true,
	choices : ["Demon Armor (DDEX3-16)", "Glamoured Studded Leather (DDAL4-9)"],
	"demon armor (ddex3-16)" : {
		name : "Demon Armor (DDEX3-16)",
		source : [["SRD", 218], ["D", 165]],
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
	"glamoured studded leather (ddal4-9)" : {
		name : "Glamoured Studded Leather (DDAL4-9)",
		source : [["SRD", 224], ["D", 172]],
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
		action : [["bonus action", ""]]
	},
}
				
MagicItemsList["al shields, +1, +2, or +3"] = {
		name : "AL Shields, +1, +2, or +3",
		source : [["SRD", 240], ["D", 200]],
		type : "shield",
		descriptionFull : "While holding this shield, you have a bonus to AC. This bonus is in addition to the shield's normal bonus to AC. The bonus is determined by the rarity of the shield: uncommon (+1), rare (+2), or very rare (+3).",
		allowDuplicates : true,
		choices : ["+1 Shield (DDEX3-5)", "Wall of Teeth +2 (DDEX2-14)", "+3 Shield (very rare)"],
		"+1 shield (ddex3-5)" : {
			name : "Shield +1 (DDEX3-5)",
			nameTest : "+1 Shield",
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This shield is fashioned from the hide of an umber hulk. It bears the oak leaf symbol commonly associated with the nature deity Silvanus. While holding this shield, you have a +1 bonus to AC in addition to the shield's normal AC bonus",
			allowDuplicates : true,
			shieldAdd : "+1 Shield"
		},
		"wall of teeth +2 (ddex2-14)" : {
			name : "Wall of Teeth +2 (DDEX2-14)",
			nameTest : "+2 Shield",
			rarity : "rare",
			magicItemTable : "G",
			description : "This shield is fashioned of dull, black steel and festooned with hundreds upon hundreds of human teeth. Whenever the wielder of the shield is presented with an opportunity to act in a selfish or malevolent way, the item heightens their urge to do so. While holding this shield, you have a +2 bonus to AC in addition to the shield's normal AC bonus.",
			allowDuplicates : true,
			shieldAdd : "+2 Shield (Wall of Teeth)"
		},
		"+3 shield (very rare)" : {
			name : "Shield +3",
			nameTest : "+3 Shield",
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
	choices : ["Animated Shield (DDEP5-2)","Sentinel Shield (DDEX2-12)"],
	"animated shield (ddep5-2)" : { 
		name : "Animated Shield (DDEP5-2)",
		source : [["SRD", 208], ["D", 183]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "The enormous shield is etched with images of Annam the All-Father holding court over the gods of the “lesser races”. While attuned to the shield, you cannot tell lies. As a bonus action, speak the command word to animate shield for 1 minute, until you use another bonus action (returns to hand), or until you're incapacitated/die (falls to ground). The shield leaps into the air, hovering in your space to protect you.",
		descriptionFull : "The enormous shield is etched with images of Annam the All-Father holding court over the gods of the “lesser races”. While you’re attuned to the shield, you cannot tell lies. While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.",
		attunement : true,
		action : [["bonus action", "Animated Shield"]],
		shieldAdd : "Animated Shield"
	},
	"sentinel shield (ddex2-12)" : {
		name : "Sentinel Shield (DDEX2-12)",
		source : ["D", 199],
		rarity : "uncommon",
		magicItemTable : "F",
		shieldAdd : "Sentinel Shield",
		advantages : [["Initiative", true], ["Perception", true]],
		vision : [["Adv. on Perception checks", 0]],
		description: "This oblong shield has an obvious eye motif with several eyes on its surface that occasionally blink. While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye."
		},
}