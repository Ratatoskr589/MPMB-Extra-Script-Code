/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me (MPMB in particular, but others as noted). It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
Additionally, due to the length of some descriptions, I recommend auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will run off the page.
*/

/*  Subject: Flavored Armor from AL adventures
    Effect:	This script adds the flavored versions of standard magic armor found in AL adventures to the MPMB sheet. They will all be listed as AL [categories] in the Magic Item selection, with further choices as needed. Helms can be found in the AL Magic Items script as most do not provide AC.
	
	This is not a complete list since I do not have every published adventure, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor.*/
	
	//Complete: S0-S10, Guild Adept
	//In progress: CCCs, DC-POA, DRW
	
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

SourceList["ALSRs11"] = {  //Season 11 Service Rewards
    name : "AL Season 11 Service Rewards",
    abbreviation : "ALSRs11",
    group : "Adventurers League",
    date : "2021/11/02"
};


//AL Flavored Armor
MagicItemsList["al adamantine/mithral armor"] = {
		name : "AL Adamantine/Mithral Armor",
		type : "armor (medium or heavy)",
		rarity : "uncommon",
		allowDuplicates : true,
		choicesNotInMenu : true,		
	choices : ["Adamantine Armor (DDAL0-1)","Adamantine Chain (CCC-SALT1-1)","Adamantine Chain Shirt (CCC-BMG-MOON3-2)","Adamantine Chain Shirt (CCC-PDXAGE-1-1)","Adamantine Chain Shirt (DDEP5-2)","Adamantine Chain Mail (CCC-BMG-MOON5-1)","Adamantine Plate: Durgeddin's Unbreakable Auspice (DDEP6-1)","Mithral Scale Barding (DC-POA-CONMAR-18)","Mithral Scale Barding (DC-POA-DRAGON-2)","Mithral Scale Barding (DC-POA-GaryXIII-2)","Mithral Scale Barding: G.O.A.T. Barding (DC-POA-TDG1-8)","Mithral Scale Mail (CCC-ODFC2-1)","Mithral Scale Mail: Hulk-Buster Armor (DC-POA-TDG1-7)","Mithral Breastplate (CCC-BMG-MOON16-2)","Mithral Half Plate (CCC-GLIP-1-3)","Mithral Splint: Armor of Insults (CCC-GSP-OOZE1-1)","Mithral Splint (DDAL5-4)","Mithral Plate (DDHC-MORD-1)"],	
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
		"adamantine chain (ccc-salt1-1)" : {
			name: "Adamantine Armor (CCC-SALT1-1)",
			source : [["AL","CCC"]],
			magicItemTable : "F",
			description : "This careworn adamantine armor shows signs of elvish craftsmanship, with the links forming patterns of leaves. A successful DC 10 Intelligence (Religion) check indicates that the leaf patterns are similar to those worn by the Guardians of Arvandor, scouts of Solonor Thelandira. While you're wearing it, any critical hit against you becomes a normal hit.",
			descriptionFull : "This careworn adamantine armor shows signs of elvish craftsmanship, with the links forming patterns of leaves. A successful DC 10 Intelligence (Religion) check indicates that the leaf patterns are similar to those worn by the Guardians of Arvandor, scouts of Solonor Thelandira. This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Adamantine"],
			descriptionChange : ["replace", "armor"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/chain/i).test(inObj.name);
				},
			}
		},
		"adamantine chain shirt (ccc-bmg-moon3-2)" : {
			name: "Adamantine Chain Shirt (CCC-BMG-MOON3-2)",
			source : [["AL","CCC"]],
			magicItemTable : "F",
			description : "This armor has no signs of age. It gleams brightly, showing off the fine runework that contains Bronwyn Rookoath’s personal emblem. It's reinforced with adamantine & while you're wearing it, any critical hit against you becomes a normal hit.",
			descriptionFull : "This chain shirt shows no signs of its age, but gleams brightly, showing off the fine runework that contains Bronwyn Rookoath’s personal emblem.\n   This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
			armorAdd : "Adamantine Chain Shirt",
			armorOptions : [{
				name : "Adamantine Chain Shirt",
				source : [["AL", "CCC"]],
				}]
		},
		"adamantine chain shirt (ccc-pdxage-1-1)" : {
			name: "Adamantine Chain Shirt (CCC-PDXAGE-1-1)",
			source : [["AL","CCC"]],
			magicItemTable : "F",
			description : "This magical armor is crafted from adamantine, and is made with superb dwarf craftsmanship. While you're wearing it, any critical hit against you becomes a normal hit.",
			descriptionFull : "This magical chain shirt is crafted from adamantine, and is made with superb dwarf craftsmanship. This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
			armorAdd : "Adamantine Chain Shirt",
			armorOptions : [{
				name : "Adamantine Chain Shirt",
				source : [["AL", "CCC"]],
				}]
		},
		"adamantine chain shirt (ddep5-2)" : {
			name: "Adamantine Chain Shirt (DDEP5-2)",
			source : [["AL","S5"]],
			magicItemTable : "F",
			description : "This glittering chain shirt is composed of interlocking adamantine rings. When the wearer moves, the shirt emits the faint sound of waves lapping at the shore. While you're wearing it, any critical hit against you becomes a normal hit.",
			descriptionFull : "This glittering chain shirt is composed of interlocking adamantine rings. When the wearer moves, the shirt emits the faint sound of waves lapping at the shore. This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
			armorAdd : "Adamantine Chain Shirt",
			armorOptions : [{
				name : "Adamantine Chain Shirt",
				source : [["AL", "S5"]],
				}]
		},
		"adamantine chain mail (ccc-bmg-moon5-1)" : {
			name: "Adamantine Chain Mail (CCC-BMG-MOON5-1)",
			source : [["AL","CCC"]],
			magicItemTable : "F",
			description : "Made by fomorians for a demonic subordinate, this armor crackles with hellish energy & is marked with Yeenoghu’s symbol. The symbol can be removed by hand, but the faint smell of blood never comes out. While you're wearing it, any critical hit against you becomes a normal hit.",
			descriptionFull : "Made by fomorians for a demonic subordinate, this chain mail crackles with hellish energy and is marked with Yeenoghu’s symbol. The symbol can be removed by hand, but the faint smell of blood can never be removed. This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
			armorAdd : "Adamantine Chain Mail",
			armorOptions : [{
				name : "Adamantine Chain Mail",
				source : [["AL", "CCC"]],
				}]
		},
		"adamantine plate: durgeddin's unbreakable auspice (ddep6-1)" : {
			name: "Durgeddin's Unbreakable Auspice (Adamantine Plate)",
			source : [["AL","S6"]],
			magicItemTable : "H",
			description : "A masterwork of dwarven craftsmanship forged of pure adamantine and lovingly adorned with all the holy symbols of the Dwarven Pantheon etched in platinum about the breastplate. The wearer of this armor has advantage on all social interactions with dwarves. While you're wearing this plate armor, any critical hit against you becomes a normal hit.",
			descriptionFull : "A masterwork of dwarven craftsmanship forged of pure adamantine and lovingly adorned with all the holy symbols of the Dwarven Pantheon etched in platinum about the breastplate. The wearer of this armor has advantage on all social interactions with dwarves. While you're wearing this plate armor, any critical hit against you becomes a normal hit.",
			armorAdd : "Durgeddin's Adamantine Plate",
			armorOptions : [{
				name : "Adamantine Plate",
				source : [["AL", "S6"]],
				}]
		},
	"mithral scale barding (dc-poa-conmar-18)" : {
		name : "Mithral Scale Barding (DC-POA-CONMAR-18)",
		source : [["AL","DC-POA"]],
		magicItemTable : "B",
		description : "This blue mithral barding has an inscription in Elvish: “To Xyrrie. May you get what you deserve.” Mithral is a light, flexible metal & this scale mail barding doesn't impose disadv. on stealth checks. Barding is armor designed to protect an animal’s head, neck, chest, & body.",
		descriptionFull : "This blue barding has the inscription in Elvish “To Xyrrie. May you get what you deserve.”\n   Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't. Barding is armor designed to protect an animal’s head, neck, chest, and body.",
		},
	"mithral scale barding (dc-poa-dragon-2)" : {
		name : "Mithral Scale Barding (DC-POA-DRAGON-2)",
		source : [["AL","DC-POA"]],
		magicItemTable : "B",
		description : "This black scale mail barding is made of mithral. Mithral is a light, flexible metal & this barding doesn't impose disadv. on stealth checks. Barding is armor designed to protect an animal’s head, neck, chest, & body.",
		descriptionFull : "This black scale mail barding is made of mithral. \n   Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't. Barding is armor designed to protect an animal’s head, neck, chest, and body.",
		},
	"mithral scale barding (dc-poa-garyxiii-2)" : {
		name : "Mithral Scale Barding (DC-POA-GaryXIII-2)",
		source : [["AL","DC-POA"]],
		magicItemTable : "B",
		description : "This brown mithral barding has protruding metal antlers like those of a moose at the armor’s helm. Mithral is a light, flexible metal & this scale mail barding doesn't impose disadv. on stealth checks. Barding is armor designed to protect an animal’s head, neck, chest, & body.",
		descriptionFull : "This brown colored scale armor has protruding metal antlers like that of an actual moose at the armor’s helm.\n   Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't. Barding is armor designed to protect an animal’s head, neck, chest, and body.",
		},
	"mithral scale barding: g.o.a.t. barding (dc-poa-tdg1-8)" : {
		name : "G.O.A.T. Mithral Scale Barding (DC-POA-TDG1-8)",
		source : [["AL","DC-POA"]],
		magicItemTable : "B",
		description : "This barding has an intricate design with a motif of winter flora & fauna. Mithral is a light, flexible metal & this scale mail barding doesn't impose disadv. on stealth checks. Barding is armor designed to protect an animal’s head, neck, chest, & body.",
		descriptionFull : "Light and flexible armor of an intricate design with a motif of winter flora and fauna.\n   Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't. Barding is armor designed to protect an animal’s head, neck, chest, and body.",
		},
	"mithral scale mail (ccc-odfc2-1)" : {
		name : "Mithral Scale Mail (CCC-ODFC2-1)",
		source : [["AL","CCC"]],
		magicItemTable : "B",
		description : "This scale mail is made from small, 1-inch mithral spikes that are carved with abyssal runes for carousing, celebration & drink. It includes a neck piece resembling a spiked dog collar. You develop a desire to party all night & sleep all day. Mithral is a light, flexible metal & this scale mail doesn't impose disadv. on stealth checks.",
		descriptionFull : "Each scale of this armor is made with small, 1-inch mithral spikes, and it includes a neck piece resembling a spiked dog collar. Each spike is carved with abyssal runes for carousing, celebration, and drink. The wearer develops a desire to party all night and sleep all day.\n   Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			armorAdd : "Mithral Scale Mail",
			armorOptions : [{
				name : "Mithral Scale Mail",
				source : [["AL", "CCC"]],
				}]
		},
	"mithral scale mail: hulk-buster armor (dc-poa-tdg1-7)" : {
		name : "Hulk-Buster Armor (Mithral Scale Mail)",
		source : [["AL","DC-POA"]],
		magicItemTable : "B",
		description : "This dwarven armor was created from an infusion of chardalyn & mithral, inspired by the fearsome bodies of the Star Spawn Hulks. Mithral is a light, flexible metal & this scale mail doesn't impose disadv. on stealth checks.",
		descriptionFull : "Dwarven armour created from the infusion chardalyn and mithral, inspired by the fearsome bodies of the Star Spawn Hulks.\n   Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			armorAdd : "Hulk-Buster Mithral Scale Mail",
			armorOptions : [{
				name : "Hulk-Buster Mithral Scale Mail",
				source : [["AL", "DC-POA"]],
				}]
		},
	"mithral breastplate (ccc-bmg-moon16-2)" : {
		name : "Mithral Breastplate (CCC-BMG-MOON16-2)",
		source : [["AL","CCC"]],
		magicItemTable : "B",
		description : "The metal of this mithral breastplate is engraved to look like feathers. The front of the armor is adorned with the raised image of a raging swan with its head back and beak open, ready to strike. Mithral is a light, flexible metal and this breastplate can be worn under normal clothes.",
		descriptionFull : "The metal of this mithral breastplate is engraved to look like feathers. The front of the armor is adorned with the raised image of a raging swan with its head back and beak open, ready to strike. Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			armorAdd : "Mithral Breastplate",
			armorOptions : [{
				name : "Mithral Breastplate",
				source : [["AL", "CCC"]],
				}]
		},
	"mithral half plate (ccc-glip-1-3)" : {
		name : "Mithral Half Plate (CCC-GLIP-1-3)",
		source : [["AL","CCC"]],
		magicItemTable : "B",
		description : "This armor is obviously Githyanki in design. It is ornamented with tassels, ribbons, and bone fragments. Mithral is a light, flexible metal, and this half plate doesn't impose disadv. on Dex (Stealth) checks.",
		descriptionFull : "This armor is obviously Githyanki in design. It is ornamented with tassels, ribbons, and bone fragments. Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			armorAdd : "Mithral Half Plate",
			armorOptions : [{
				name : "Mithral Half Plate",
				source : [["AL", "CCC"]],
				}]
		},
	"mithral splint: armor of insults (ccc-gsp-ooze1-1)" : {
		name : "Armor of Insults (Mithral Splint)",
		source : [["AL","CCC"]],
		magicItemTable : "B",
		description : "This splint armor was crafted with the finest materials by dwarves for elves. Despite the near-flawless craftsmanship, the smiths purposely added one design flaw as a prank: when the armor is struck, the voices of the dwarves who forged it berate the wearer. Mithral is a light, flexible metal, and this splint doesn't impose disadv. on Dex (Stealth) checks or require 15 Str.",
		descriptionFull : "This set of splint armor was crafted with only the finest materials by dwarves for elves. However, despite the craftsmanship being near-flawless, the dwarves who forged the armor purposely made one design flaw as a prank: When struck, the armor emits the voice of the dwarves who forged the armor, berating its wearer. Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			armorAdd : "Mithral Splint",
			armorOptions : [{
				name : "Mithral Splint",
				source : [["AL", "CCC"]],
				}]
		},
	"mithral splint (ddal5-4)" : {
		name : "Mithral Splint (DDAL5-4)",
		source : [["AL","S5"]],
		magicItemTable : "B",
		description : "A beautifully crafted suit of splint wrought in classical Adbarran design. The armor is evocative of dwarven sensibilities, being simple & angular. The helm is crafted with curling ram’s horns and dwarven runes on the vambraces pronounce the wearer a friend and defender of Citadel Adbar. Mithral is a light, flexible metal, and this splint doesn't impose disadv. on Dex (Stealth) checks or require 15 Str.",
		descriptionFull : "A beautifully crafted suit of splint mail wrought in classical Adbarran design. The armor is evocative of dwarven sensibilities, being simple if a bit angular. The helm is crafted with curling ram’s horns and dwarven runes on the vambraces pronouncing the wearer a friend and defender of Citadel Adbar. Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			armorAdd : "Mithral Splint",
			armorOptions : [{
				name : "Mithral Splint",
				source : [["AL", "S5"]],
				}]
		},
	"mithral plate (ddhc-mord-1)" : {
		name : "Mithral Plate (DDHC-MORD-1)",
		source : [["AL","MtoF"]],
		magicItemTable : "B",
		description : "This suit of armor is emblazoned with an unblinking, lidless eye in the center of the breastplate. Mithral is a light, flexible metal, and this plate mail doesn't impose disadv. on Dex (Stealth) checks or require 15 Str.",
		descriptionFull : "This suit of armor is emblazoned with an unblinking, lidless eye in the center of the breastplate. Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
			armorAdd : "Mithral Plate",
			armorOptions : [{
				name : "Mithral Plate",
				source : [["AL", "MtoF"]],
				}]
		},
}

MagicItemsList["al armor +1, +2, +3"] = {
		name : "AL Armor +1, +2, +3",
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
		choicesNotInMenu : true,
		choices : ["+1 Leather (DDEP7-1)","+1 Studded Leather (CCC-BMG-21 HULB2-3)","+1 Scale Mail: Shroud of the Mourning Warrior (DDAL5-13)","+1 Breastplate: Glass (DDAL0-1)","+1 Half Plate: Bone (CCC-TRI-6 NIGHT1-2)", "+1 Half Plate (DDEP4)","+1 Splint (DDEX1-12)","+1 Splint (DDAL5-4)","+2 Studded Leather (CCC-TRI-23 STORM1-2)","+2 Half Plate: Stone (DDEP7-2)","+2 Splint: Remorhaz (DDEP10-2)","+2 Plate: Stone (CCC-JGD-1)","+3 Hide: Daphnaie Armor (ALSRs11-A)"],
		"+1 leather (ddep7-1)" : {
			name : "+1 Leather (DDEP7-1)",
			source : [["AL","S7"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This sealskin suit is embroidered with octopuses that squirm magically when exposed to the air. If worn underwater, the wearer gains advantage on checks made to escape grappling. This armor grants a +1 bonus to AC while worn.",
			savetxt : { text : ["Adv on checks to escape grapples (Underwater only)"] },
			armorAdd : "+1 Leather",
			armorOptions : [{
				name : "+1 Leather",
				source : [["AL", "S7"]],
				}]
		},
		"+1 studded leather (ccc-bmg-21 hulb2-3)" : {
			name : "+1 Studded Leather (CCC-BMG-21 HULB2-3)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "This armor is superbly padded & reinforced for cold environments; it counts as cold-weather gear and is uncomfortable in hot climates. The armor grants a +1 bonus to AC while worn.",
			descriptionFull : "This armor is superbly padded and reinforced for cold environments; as such, it counts as cold-weather gear and is more than a little uncomfortable in hot climates. This armor grants a +1 bonus to AC while worn.",
			armorAdd : "+1 Studded Leather",
			armorOptions : [{
				name : "+1 Studded Leather",
				source : [["AL", "CCC"]],
				}]
		},
		"+1 scale mail: shroud of the mourning warrior (ddal5-13)" : {
			name : "Shroud of the Mourning Warrior, +1 Scale Mail (DDAL5-13)",
			source : [["AL","S5"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This suit of armor is fashioned out of slivers of wood, each engraved with Giant runes of death and lament, and sewn onto a backing of black leather. The armor resizes to fit its wearer & grants a +1 bonus to AC while worn.",
			armorAdd : "+1 Wooden Scale Mail",
			armorOptions : [{
				name : "+1 Wooden Scale Mail",
				source : [["AL", "S5"]],
				}]
		},
		"+1 breastplate: glass (ddal0-1)" : {
			name : "+1 Glass Breastplate (DDAL0-1)",
			source : [["AL","S0"]],
			rarity : "rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "This surprisingly light breastplate is made of smoky red glass as strong as steel. Barely translucent, when light strikes it the smoky inclusions in the glass seems to shift and flow. The breastplate weighs 10 lbs and grants a +1 bonus to AC while worn.",
			armorAdd : "+1 Glass Breastplate",
			armorOptions : [{
				name : "+1 Glass Breastplate",
				source : [["AL", "S0"]],
				regExpSearch : /^(?=.*glass).*$/i,
				type : "medium",
				ac : 14,
				weight : 10
				}]
		},
		"+1 half plate: bone (ccc-tri-6 night1-2)" : {
			name : "+1 Bone Half Plate (CCC-TRI-6 NIGHT1-2)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "Made from the frozen bones of Auntie Olma’s old coven, this suit of half plate looks to be made from sheets of iron until examined closely. While wearing this armor, it lowers your body temperature to just above freezing with no ill effects, and the voices of the dead hags fill your mind with taunts and harassment. This armor grants a +1 bonus to AC while worn.",
			armorAdd : "+1 Bone Half Plate",
			armorOptions : [{
				name : "+1 Bone Half Plate",
				source : [["AL", "CCC"]],
				}]
		},
		"+1 half plate (ddep4)" : {
			name : "+1 Half Plate (DDEP4)",
			source : [["AL","S4"]],
			rarity : "rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "This black enameled armor has a splash of green paint across the chest. No amount of cleaning will remove it; even magical attempts prove useless. Any creature familiar with the Tears of Virulence will likely treat the wearer with suspicion. This armor grants a +1 bonus to AC while worn.",
			armorAdd : "+1 Half Plate",
			armorOptions : [{
				name : "+1 Half Plate",
				source : [["AL", "S4"]],
				}]
		},
		"+1 splint (ddex1-12)" : {
			name : "+1 Splint (DDEX1-12)",
			source : [["AL","S1"]],
			rarity : "rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "This fine suit of splint armor has dwarven runes etched upon it. The runes describe the glories of great battles in the North against orcs. The armor glows faintly when within 100 feet of orcs and grants a +1 bonus to AC while worn.",
			armorAdd : "+1 Splint",
			armorOptions : [{
				name : "+1 Splint",
				source : [["AL", "S1"]],
				}]
			},
		"+1 splint (ddal5-4)" : {
			name : "+1 Splint (DDAL5-4)",
			source : [["AL","S5"]],
			rarity : "rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "A beautifully crafted suit of splint wrought in classical Adbarran design. The armor is evocative of dwarven sensibilities, being simple & angular. The helm is crafted with curling ram’s horns and dwarven runes on the vambraces pronounce the wearer a friend and defender of Citadel Adbar. This armor grants a +1 bonus to AC while worn.",
			armorAdd : "+1 Splint",
			armorOptions : [{
				name : "+1 Splint",
				source : [["AL", "S5"]],
				}]
			},
		"+2 studded leather (ccc-tri-23 storm1-2)" : {
			name : "+2 Studded Leather (CCC-TRI-23 STORM1-2)",
			source : [["AL","CCC"]],
			rarity : "very rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "This set of magical sky blue armor once belonged to a cloud giant resident of Skyelinjeheim. It resizes to fit its wearer, and images of translucent white clouds drift slowly across its surface. This armor grants a +2 bonus to AC while worn.",
			armorAdd : "+2 Studded Leather",
			armorOptions : [{
				name : "+2 Studded Leather",
				source : [["AL", "CCC"]],
				}]
		},
		"+2 half plate: stone (ddep7-2)" : {
			name : "+2 Stone Half Plate (DDEP7-2)",
			source : [["AL","S7"]],
			rarity : "very rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "This armor is made of thin plates of rune-engraved stone. While worn, the wearer becomes proficient in the Dwarven language. This armor grants a +2 bonus to AC while worn.",
			languageProfs : ["Dwarvish"],
			armorAdd : "+2 Stone Half Plate",
			armorOptions : [{
				name : "+2 Stone Half Plate",
				source : [["AL", "S7"]],
				}]
		},
		"+2 splint: remorhaz (ddep10-2)" : {
			name : "+2 Remorhaz Splint (DDEP10-2)",
			source : [["AL","S10"]],
			rarity : "very rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "This armor is magically treated remorhaz hide that's trimmed with black fur and decorated with feathers and beads. It grants a +2 bonus to AC while worn.",
			descriptionFull : "This armor is magically treated remorhaz hide and is trimmed with black fur and decorated with feathers and beads. It grants a +2 bonus to AC while worn.",
			armorAdd : "+2 Remorhaz Splint",
			armorOptions : [{
				name : "+2 Remorhaz Splint",
				source : [["AL", "S10"]],
				}]
			},
		"+2 plate: stone (ccc-jgd-1)" : {
			name : "+2 Stone Plate (CCC-JGD-1)",
			source : [["AL","CCC"]],
			rarity : "very rare",
			magicItemTable : "I",
			allowDuplicates : true,
			description : "This suit of plate armor was created by Cultists of the Black Earth and is fashioned from slabs of stone. The armor resizes to fit its wearer & grants a +2 bonus to AC while worn.",
			descriptionFull : "This suit of plate armor was created by Cultists of the Black Earth and is fashioned from slabs of stone (instead of metal). The armor resizes to fit its wearer. This armor grants a +2 bonus to AC while worn.",
			languageProfs : ["Dwarvish"],
			armorAdd : "+2 Stone Plate",
			armorOptions : [{
				name : "+2 Stone Plate",
				source : [["AL", "CCC"]],
				}]
		},
		"+3 hide: daphnaie armor (alsrs11-a)" : {
			name : "Daphnaie Armor (+3 Hide)",
			rarity : "legendary",
			source : [["ALSRs11","A"]],
			description : "This armor is made of pliant material from laurel tree bark with stylized carvings of dancing dryads burnt into it. Small bits of green moss accentuate the wood, giving the wearer advantage on Dexterity (Stealth) checks when in a forest. The armor resizes to fit its wearer & grants a +3 bonus to AC while worn.",
			descriptionFull : "This armor is made of pliant material from worn, laurel tree bark with stylized carvings of dancing dryads burnt into it. Small bits of green moss accentuate the wood, allowing the wearer to gain advantage on Dexterity (Stealth) checks when in a forest. The armor resizes to fit its wearer. This armor grants a +3 bonus to AC while worn.",
			allowDuplicates : true,
			armorAdd : "+3 Hide (Daphnaie)",
			armorOptions : [{
				name : "+3 Hide (Daphnaie)",
				source : [["ALSRs11","A"]],
				}]
		},
}

RunFunctionAtEnd(function () {
MagicItemsList["al armor (common)"] = {
		name : "AL Armor (Common)",
		allowDuplicates : true,
		choicesNotInMenu : true,
		rarity : "common",
		magicItemTable : "?",
	choices : ["Cast-Off Breastplate (DC-POA-CONMAR-6)","Cast-Off Breastplate: Ooze (DC-POA-GaryXIII-4)","Cast-Off Breastplate (DC-POA-HAG-SF4)","Cast-Off Chain Mail: Scavenger's Shroud (CCC-DES-4-1)","Shield of Expression (DC-POA-CONMAR-15)","Shield of Expression (DC-POA-SNIPE-1)","Smoldering Armor: Flurried Furs (DDAL0-4)","Smoldering Studded Leather (DC-POA-CODEX-2)","Smoldering Studded Leather (DC-POA-CONMAR-8)","Smoldering Studded Leather (DC-POA-GSP2-2H)","Smoldering Studded Leather: Smokin' Hot Leather (DC-POA-LEGIT-SV-02)","Smoldering Studded Leather (DC-POA-OGG-1)","Smoldering Studded Leather: Armor of the Dark Knight (DC-POA-TDG1-4)","Smoldering Studded Leather (DDAL10-0)","Smoldering Scale Mail: Stygian Armor (CCC-GSP2-2)","Smoldering Breastplate: Jökulsbrynja (DC-POA-CONMAR-3)","Smoldering Breastplate: Wintergreen Guard (DC-POA-LEGIT-SV-01)","Spiked Armor of Gleaming: Axehead's Coat of Beaks (CCC-MTL-3)"],
	"cast-off breastplate (dc-poa-conmar-6)" : {
		name : "Cast-Off Breastplate (DC-POA-CONMAR-6)",
		source : [["AL","DC-POA"]],
		type : "armor (medium)",
		description : "This breastplate is dark blue with the symbol of Auril the Frostmaiden (white snow crystals) engraved into the metal. You can doff it as an action.",
		descriptionFull : "This breastplate is dark blue with the symbol of Auril the Frostmaiden, white snow crystals, engraved into the metal. It consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered. You can doff it as an action.",
		attunement : true,
		armorAdd : "Cast-Off Breastplate",
		armorOptions : [{
				name : "Cast-Off Breastplate",
				source : [["AL", "DC-POA"]],
				}],
		action : [["action", "Cast-Off Breastplate"]]
	},
	"cast-off breastplate: ooze (dc-poa-garyxiii-4)" : {
		name : "Cast-Off Ooze Breastplate (DC-POA-GaryXIII-4)",
		source : [["AL","DC-POA"]],
		type : "armor (medium)",
		description : "This armor is a semi-sentient translucent ooze. Attracted to your body heat, it'll act as armor for you as long as you're alive. The ooze may be doffed in 1 action by drawing it to a stronger source of heat. It may be donned in 5 minutes by waiting patiently nearby or attracting it closer with small heat sources such as matches. Although there's no mechanical benefit, the ooze appreciates being fed small objects, which it dissolves or spits out depending on its tastes.",
		descriptionFull : "This armor is formed from a semi-sentient translucent ooze. Attracted to the wearer’s body heat, this ooze will act as a breastplate for the wearer so long as they are alive. The armor may be doffed in 1 action by attracting the ooze to a stronger source of heat than the wearer’s body temperature. The armor may be donned in 5 minutes by waiting patiently near the ooze or attracting it closer with small matches or other temporary sources of heat. Though it does not confer any additional mechanical benefit, the ooze appreciates being fed small objects, which it may dissolve or spit out depending on its specific tastes. It consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered. You can doff it as an action.",
		attunement : true,
		armorAdd : "Cast-Off Ooze Breastplate",
		armorOptions : [{
				name : "Cast-Off Ooze Breastplate",
				source : [["AL", "DC-POA"]],
				}],
		action : [["action", "Cast-Off Breastplate"]]
	},
	"cast-off breastplate (dc-poa-hag-sf4)" : {
		name : "Cast-Off",
		source : [["AL","DC-POA"]],
		type : "armor (medium)",
		description : "This armor looks like it has been well used. You can doff it as an action.",
		descriptionFull : "This armor looks like it has been well used and consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered. You can doff it as an action.",
		attunement : true,
		armorAdd : "Cast-Off Breastplate",
		armorOptions : [{
				name : "Cast-Off Breastplate",
				source : [["AL", "DC-POA"]],
				}],
		action : [["action", "Cast-Off Breastplate"]]
	},
	"cast-off chain mail: scavenger's shroud (ccc-des-4-1)" : {
		name : "Scavenger's Shroud (Cast-Off Chain Mail)",
		source : [["AL","CCC"]],
		type : "armor (heavy)",
		description : "This cleverly crafted cowl and coat combination is made of worn leather covered in dangling chains and hooks, and gives you the appearance of a chain devil (kyton) when you wear it. You can doff it as an action.",
		descriptionFull : "This cleverly crafted cowl and coat combination is made of worn leather, covered in dangling chains and hooks, and gives the appearance of a chain devil (kyton) to any that wear it. Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets. You can doff it as an action.",
		attunement : true,
		armorAdd : "Cast-Off Chain Mail",
		armorOptions : [{
				name : "Cast-Off Chain Mail",
				source : [["AL", "CCC"]],
				}],
		action : [["action", "Cast-Off Chain Mail"]]
	},
	"shield of expression (dc-poa-conmar-15)" : {
			name : "Shield of Expression (DC-POA-CONMAR-15)",
			source : [["AL","DC-POA"]],
			type : "shield",
			rarity : "common",
			description : "This shield is made of bright oak which is painted teal. The logo of “The Silver Lining Trading Company” is circling the face of a white goat. As a bonus action while bearing the shield, you can alter the expression of the face.",
			descriptionFull : "This shield is made of bright oak which is painted teal. The logo of “The Silver Lining Trading Company” is circling the face of a white goat.\n   The front of this shield is shaped in the likeness of a face. While bearing the shield, you can use a bonus action to alter the faces expression.",
			weight : 6,
			shieldAdd : "Shield of Expression",
			action : [["bonus action", "Shield of Expression"]]
	},
	"shield of expression (dc-poa-snipe-1)" : {
			name : "Shield of Expression (DC-POA-SNIPE-1)",
			source : [["AL","DC-POA"]],
			type : "shield",
			rarity : "common",
			description : "This tapestry shows Artor Morlin, the Baron of Blood, & Halaster the Mad Mage. A memento of an uncomfortable & awkward feast, it's mounted on a round frame with a strap that makes it usable as a shield. The bottom is engraved: “Inaugural Chalet Celebration: Special Adjunct Apprentice Minion Commemorative Award Souvenir.” When it gets marred or dirty, it repairs & cleans itself in an hour. As a bonus action when bearing the shield, you can alter Artor or Halaster's expressions.",
			descriptionFull : "Made magically by Halaster the Mad Mage of Undermountain, this is a mounted tapestry on a round frame, showing a picture of Artor Morlin, the Baron of Blood, and Halaster the Mad Mage. It is engraved on the bottom with the following: “Inaugural Chalet Celebration: Special Adjunct Apprentice Minion Commemorative Award Souvenir.”\n   Try as you might, any time this picture gets marred or dirty, it repairs and cleans itself within the hour. Although given as a useless memento of an uncomfortable and awkward feast, the strap at the back makes it usable as a passable shields.\n   While bearing the picture, you can use a bonus action to alter the expression on the faces of Morlin or Halaster.\n   The front of this shield is shaped in the likeness of a face. While bearing the shield, you can use a bonus action to alter the faces expression.",
			weight : 6,
			shieldAdd : "Shield of Expression",
			action : [["bonus action", "Shield of Expression"]]
	},
	"smoldering armor: flurried furs (ddal0-4)" : {
		name : "Flurried Furs, Smoldering",
		source : [["AL","S0"]],
		type : "armor (light or medium)",
		description : "As if from frigid clouds overhead, a light dusting of illusory snow perpetually sprinkles down over the wearer of this armor.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "armor"],
		itemName1stPage : ["suffix", "Flurried"],
		excludeCheck : function (inObjKey, inObj) {
				return !(/medium|light/i).test(inObj.type);
				},
		}
	},	
	"smoldering studded leather (dc-poa-codex-2)" : {
			name : "Smoldering Studded Leather (DC-POA-CODEX-2)",
			source : [["AL","DC-POA"]],
			type : "armor (light)",
			description : "This reinforced studded leather jerkin is edged in red thread & embroidered with Husk's personal mark on the back. It has a turned-down collar lined with fox fur & a detachable hood fastened in place by lodestone studs. Wisps of harmless, odorless smoke rise from it when it's worn.",
			descriptionFull : "This reinforced leather jerkin is edged in red thread and embroidered with Husk's personal mark on the back. It has a turned-down collar lined with fox fur, and a detachable hood fastened in place by lodestone studs. Wisps of harmless, odorless smoke rise from the studded leather armor while it is worn.",
		armorAdd : "Smoldering Studded Leather",
		armorOptions : [{
				name : "Smoldering Studded Leather",
				source : [["AL", "DC-POA"]],
				}]
			},
	"smoldering studded leather (dc-poa-conmar-8)" : {
			name : "Smoldering Studded Leather (DC-POA-CONMAR-8)",
			source : [["AL","DC-POA"]],
			type : "armor (light)",
			description : "Wisps of harmless, odorless smoke rise from this armor while it's worn. The smoke is thick, black, & threatens to choke you. Any time that you act selfishly, a faint deep chuckle can be heard in the distance.",
			descriptionFull : "Wisps of harmless, odorless smoke rise from this studded leather armor while it is worn. The smoke is thick, black, and almost threatens to choke you. Any time that you act selfishly a faint, deep chuckle can be heard in the distance.",
		armorAdd : "Smoldering Studded Leather",
		armorOptions : [{
				name : "Smoldering Studded Leather",
				source : [["AL", "DC-POA"]],
				}]
			},
	"smoldering studded leather (dc-poa-gsp2-2h)" : {
			name : "Smoldering Studded Leather (DC-POA-GSP2-2H)",
			source : [["AL","DC-POA"]],
			type : "armor (light)",
			description : "Wisps of harmless, odorless ice vapors rise from this armor when it's worn, forming a shape similar to the wings of an angel. A glistening emblem of the Order of the Gauntlet is pinned to the top right of the armor.",
			descriptionFull : "Wisps of harmless, odorless smoke rise from this studded leather armor while it is worn. The ice vapors that rise from this armor form a shape similar to the wings of an angel. At the top right of the armor piece, a glistening emblem of the Order of the Gauntlet is pinned on it.",
		armorAdd : "Smoldering Studded Leather",
		armorOptions : [{
				name : "Smoldering Studded Leather",
				source : [["AL", "DC-POA"]],
				}]
			},
	"smoldering studded leather: smokin' hot leather (dc-poa-legit-sv-02)" : {
			name : "Smokin' Hot Armor (Smoldering Studded Leather)",
			source : [["AL","DC-POA"]],
			type : "armor (light)",
			description : "An offensively pink suit of armor. It's been enchanted to emit pink-tinted rose-scented smoke. Pink spikes have been placed wherever it was possible, and in several places where it wasn't. Violently pink fur lines its insides, just how many pink bears had to die for this abomination?",
			descriptionFull : "This offensively pink suit of armor has been enchanted to emit pink-tinted rose-scented smoke. Pink spikes have been placed wherever possible and in several places where it wasn't. Violently pink fur lines the inside; just how many pink bears had to die for this abomination?",
		armorAdd : "Smokin' Studded Leather",
		armorOptions : [{
				name : "Smokin' Studded Leather",
				source : [["AL", "DC-POA"]],
				}]
			},
	"smoldering studded leather (dc-poa-ogg-1)" : {
			name : "Smoldering Studded Leather (DC-POA-OGG-1)",
			source : [["AL","DC-POA"]],
			type : "armor (light)",
			description : "This studded leather survived the intense heat of an illithid’s furnace & still bears splotchy red stains & blackened buckles from the flames. Wisps of harmless, odorless smoke rise from the armor when it's worn. ",
			descriptionFull : "This studded leather armor survived the intense heat of the illithid’s furnace, but still bears splotchy red stains and blackened buckles from the flames. Wisps of harmless, odorless smoke rise from the armor while it is worn.",
		armorAdd : "Smoldering Studded Leather",
		armorOptions : [{
				name : "Smoldering Studded Leather",
				source : [["AL", "DC-POA"]],
				}]
			},
	"smoldering studded leather: armor of the dark knight (dc-poa-tdg1-4)" : {
			name : "Armor of the Dark Knight (Smoldering Studded Leather)",
			source : [["AL","DC-POA"]],
			type : "armor (light)",
			description : "A survival suit for advanced infantry. Kevlar bi-weave, reinforced joints; this sucker will stop a knife & most projectiles. Wisps of harmless, odorless smoke rise from this armor when it's worn.",
			descriptionFull : "Survival suit for advanced infantry. Kevlar bi-weave, reinforced joints; this sucker will stop a knife and most projectiles. Wisps of harmless, odorless smoke rise from this armor when it's worn. Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.",
			armorAdd : "Smoldering Studded Leather",
			armorOptions : [{
				name : "Smoldering Studded Leather",
				source : [["AL", "DC-POA"]],
				}]
			},
	"smoldering studded leather (ddal10-0)" : {
			name : "Smoldering Studded Leather (DDAL10-0)",
			source : [["AL","S10"]],
			type : "armor (light)",
			description : "This armor smells of blood and gnoll sweat, and the stench can’t be removed. Wisps of harmless, odorless smoke rise from this armor while it is worn.",
			descriptionFull : "This armor smells of blood and gnoll sweat, and the stench can’t be removed. Wisps of harmless, odorless smoke rise from this armor while it's worn. Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.",
		armorAdd : "Smoldering Studded Leather",
		armorOptions : [{
				name : "Smoldering Studded Leather",
				source : [["AL", "S10"]],
				}]
			},
	"smoldering scale mail: stygian armor (ccc-gsp2-2)" : {
			name : "Stygian Scale Mail (Smoldering Armor)",
			source : [["AL","CCC"]],
			type : "armor (medium)",
			description : "This light blue, ice-like armor with a closed helm is light but durable. When exposed to air, the humidity around the armor condenses into tiny droplets, becoming visible wisps of mist-like vapor. A copy of the Nightsong Clan's infernal contract is engraved all over the armor, reminding you to search for the soul of Rem Nightsong & bring it to the Nine Hells.",
			descriptionFull : "This light blue, ice-like armor with a closed helm is light but durable. When exposed to air, the humidity around the armor condenses into tiny droplets, becoming visible wisps of mist-like vapor. A copy of the Nightsong Clan's infernal contract is engraved all over the armor, reminding its wearer to search for the soul of Rem Nightsong and bring it to the Nine Hells.\n   Wisps of harmless, odorless smoke rise from this armor while it is worn.",
		armorAdd : "Stygian Scale Mail",
		armorOptions : [{
				name : "Stygian Scale Mail",
				source : [["AL", "DC-POA"]],
				}]
			},
	"smoldering breastplate: jökulsbrynja (dc-poa-conmar-3)" : {
			name : "Jökulsbrynja (Smoldering Breastplate)",
			source : [["AL","DC-POA"]],
			type : "armor (medium)",
			description : "This metal armor is adorned with snowflake symbols & feels cool to the touch. Although metal, its sheen & color make it look like it's made from opaque ice & it emits wisps of harmless odorless frost vapor while worn.",
			descriptionFull : "This metal breastplate is adorned with snowflake symbols and feels cool to the touch. While metal, its sheen and color make it look almost like it is made from opaque ice, and it constantly emits wisps of harmless, odorless frost smoke while it is worn.\n  This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",
		armorAdd : "Smoldering Breastplate",
		armorOptions : [{
				name : "Smoldering Breastplate",
				source : [["AL", "DC-POA"]],
				}]
			},
	"smoldering breastplate: wintergreen guard (dc-poa-legit-sv-01)" : {
			name : "Wintergreen Guard, Smoldering Breastplate",
			source : [["AL","DC-POA"]],
			type : "armor (medium)",
			description : "When you are struck by bludgeoning damage, this armor emits oils that cause a cool numbing sensation. While not particularly effective at its intended purpose, the volatile oils produce a visible & pleasant smelling vapor that wafts from the armor.",
			descriptionFull : "When you are struck by bludgeoning damage, the armor emits oils which create a cool numbing sensation. While not particularly effective at its intended purpose, the volatile oils produce a visible and pleasant smelling vapor which wafts from under the armor.",
		armorAdd : "Smoldering Breastplate",
		armorOptions : [{
				name : "Smoldering Breastplate",
				source : [["AL", "DC-POA"]],
				}]
			},
	"spiked armor of gleaming: axehead's coat of beaks (ccc-mtl-3)" : {
			name : "Axehead's Coat of Beaks (Spiked Armor of Gleaming)",
			source : [["AL","CCC"]],
			type : "armor (medium)",
			rarity : "common",
			description : "Once belonging to the battlerager Axehead Moontunnel, this strangely designed armor is crafted from Underdark creatures. The softer parts are made of boiled roper skin & the spikes are the beaks from various Underdark horrors. The mask features the heads of two small axes strapped together to form a visor. Though made of unpleasant materials, the armor never gets dirty – blood runs right off it! While wearing it, you feel like you can take on any opponent.",
			descriptionFull : "Once belonging to the battlerager Axehead Moontunnel, this armor is of his own strange design and crafted from parts of Underdark creatures. The softer parts are made of boiled roper skin and the spikes are beaks taken from various Underdark horrors. The mask features heads of two small axes strapped together to form a sort of visor. Though made of unpleasant materials, the armor never seems to get any dirtier than it already is – blood runs right off it! The wearer of this armor feels as though they can take on any opponent.",
			allowDuplicates : true,
		armorAdd : "Axehead's Coat of Beaks",
		armorOptions : [{
				name : "Axehead's Coat of Beaks",
				source : [["AL", "CCC"]],
				regExpSearch : /^(?=.*coat)(?=.*axehead|s)(?=.*beaks).*$/i,
				type : "medium",
				ac : 14,
				stealthdis : true,
				weight : 45
				}]
		},	
}
})

MagicItemsList["al armor (other)"] = {
		name : "AL Armor (Other)",
		allowDuplicates : true,
	choices : ["Breastplate of Necrotic Resistance: Chardalyn (DDAL10-5)","Demon Armor (DDEX3-16)","Efreeti Chain (DDAL7-15)","Elven Chain (CCC-BMG-36 ELMW2-3)","Elven Chain (CCC-SQC-2-2)","Glamoured Studded Leather (DDAL4-9)","Glamoured Studded Leather (DDAL8-11)","Glamoured Studded Leather (DDAL9-6)","Half Plate of Poison Resistance: Mushroom (DDEX3-11)","Mariner's Breastplate (CCC-AETHER-1-2)","Mariner's Breastplate (CCC-MMT1-2)","Mariner's Scale Mail (ALSRs11-A)","Plate Armor of Etherealness (DDAL8-16)","Red Dragon Scale Mail (DDEP5-1)","Red Dragon Scale Mail (DDAL9-15)","Scale Mail of Psychic Resistance: Resin (CCC-TRI-21 YUL1-6)","Studded Leather of Fire Resistance (DDAL0-11C)"],
	"breastplate of necrotic resistance: chardalyn (ddal10-5)" : {
			name : "Chardalyn Breastplate of Necrotic Resist. (DDAL10-5)",
			source : [["AL","S10"]],
			type : "armor (breastplate)",
			rarity : "rare",
			magicItemTable : "H",
			attunement : true,
			description : "This breastplate is made of chardalyn reinforced with hardened wood and boiled leather. While wearing it, you always feel bitterly cold. You have resistance to necrotic damage while attuned to and wearing the armor.",
			dmgres : ["Necrotic"],
		armorAdd : "Chardalyn Breastplate",
		armorOptions : [{
				name : "Chardalyn Breastplate of Necrotic Resistance",
				source : [["AL", "S10"]],
				}]
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
			source: [["AL","S3"]],
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
			source: [["SRD", 218], ["D", 165] ["AL","S3"]],
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
			source: [["D", 167], ["AL","S7"]],
			type : "heavy",
			ac : 19,
			stealthdis : true,
			weight : 55,
			strReq : 13
		}]
	},
	"elven chain (ccc-bmg-36 elmw2-3)" : {
		name : "Elven Chain (CCC-BMG-36 ELMW2-3)",
		source : [["AL","CCC"]],
		type : "armor (chain shirt)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This weird silvery-purple chain shirt is as thin & light as linen. It has a muted wave symbol of Istishia, the neutral god known as the Water Lord, patterned into the links & must have once belonged to a sea elf. You gain a +1 bonus to AC while you wear the chain shirt & are considered proficient even if you lack proficiency with medium armor.",
		descriptionFull : "This weird silvery-purple chain shirt is as thin and light as a linen shirt. It has a muted wave symbol of Istishia, the neutral god known as the Water Lord, patterned into the links. This chain must have once belonged to a sea elf. You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor.",
		weight : 20,
		armorAdd : "Elven Chain",
		armorOptions : [{
			regExpSearch : /^(?=.*elven)(?=.*chain).*$/i,
			name : "Elven Chain",
			source : [["SRD", 220], ["D", 168] ["AL","CCC"]],
			type : "medium",
			ac : 14,
			weight : 20
		}]
	},
	"elven chain (ccc-sqc-2-2)" : {
		name : "Elven Chain (CCC-SQC-2-2)",
		source : [["AL","CCC"]],
		type : "armor (chain shirt)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This chain shirt is made of magically hardened sandalwood that smells like incense at all times. You gain a +1 bonus to AC while you wear it & are considered proficient even if you lack proficiency with medium armor.",
		descriptionFull : "This shirt is made of magically hardened sandalwood that smells like incense at all times. You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor.",
		weight : 20,
		armorAdd : "Elven Chain",
		armorOptions : [{
			regExpSearch : /^(?=.*elven)(?=.*chain).*$/i,
			name : "Elven Chain (Sandalwood)",
			source : [["SRD", 220], ["D", 168] ["AL","CCC"]],
			type : "medium",
			ac : 14,
			weight : 20
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
			source : [["SRD", 224], ["D", 172] ["AL","S4"]],
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
			source : [["SRD", 224], ["D", 172] ["AL","S8"]],
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
			source : [["SRD", 224], ["D", 172] ["AL","S9"]],
			type : "light",
			ac : 13,
			weight : 13
			},
		action : [["bonus action", "Glamoured Studded Lthr (change)"]]
		},
	"half plate of poison resistance: mushroom (ddex3-11)" : {
			name : "Mushroom Half Plate of Poison Resist. (DDEX3-11)",
			source : [["AL","S3"]],
			type : "armor (half plate)",
			rarity : "rare",
			magicItemTable : "I",
			attunement : true,
			description : "This non-metal half plate armor is constructed of petrified giant mushrooms. The wearer feels fortunate and optimistic about what the future holds. While wearing this armor and attuned to it, you have resistance to poison damage.",
			dmgres : ["Poison"],
		armorAdd : "Mushroom Half Plate",
		armorOptions : [{
				name : "Mushroom Half Plate of Poison Resistance",
				source : [["AL", "S3"]],
				}]
		},
	"mariner's breastplate (ccc-aether-1-2)" : {
		name : "Mariner's Breastplate (CCC-AETHER-1-2)",
		source : [["AL","CCC"]],
		type : "armor (breastplate)",
		rarity : "uncommon",
		magicItemTable : "B",
		description : "The number “12101993” is etched into the inside of this green metallic breastplate along with a single word in Abyssal: “Doomed”. While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hp, you rise 60 ft toward the surface. The armor is decorated with fish & shell motifs.",
		descriptionFull : "The number “12101993” is etched into the inside of this green metallic breastplate along with a single word in Abyssal: “Doomed”. While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs.",
		allowDuplicates : true,
		armorAdd : "Mariner's Breastplate",
		armorOptions : [{
				name : "Mariner's Breastplate",
				source : [["AL", "CCC"]],
				}],
		speed : { swim : { spd : "walk", enc : "walk" } }
	},
	"mariner's breastplate (ccc-mmt1-2)" : {
		name : "Mariner's Breastplate (CCC-MMT1-2)",
		source : [["AL","CCC"]],
		type : "armor (breastplate)",
		rarity : "uncommon",
		magicItemTable : "B",
		description : "While wearing this breastplate, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hp, you rise 60 ft toward the surface. The armor is decorated with fish & shell motifs as well as the holy symbol of Umberlee.",
		descriptionFull : "While wearing this breastplate, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs as well as the holy symbol of Umberlee.",
		allowDuplicates : true,
		armorAdd : "Mariner's Breastplate",
		armorOptions : [{
				name : "Mariner's Breastplate",
				source : [["AL", "CCC"]],
				}],
		speed : { swim : { spd : "walk", enc : "walk" } }
	},
	"mariner's scale mail (alsrs11-a)" : {
		name : "Mariner's Scale Mail (ALSRs11-A)",
		source : [["AL","CCC"]],
		type : "armor (scale mail)",
		rarity : "uncommon",
		magicItemTable : "B",
		description : "Constructed of overlapping flat smooth river stones, this set of scale mail is surprisingly light & mobile. While wearing it, you need half the water normally required to stave off exhaustion & have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hp, you rise 60 ft toward the surface. The armor is decorated with fish & shell motifs.",
		descriptionFull : "Constructed of flat, smooth, and overlapping river stones, this set of scale mail is surprisingly light and mobile. While wearing the armor, you need half the water normally required to stave off exhaustion and you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs.",
		allowDuplicates : true,
		armorAdd : "Mariner's Scale Mail",
		armorOptions : [{
				name : "Mariner's Scale Mail",
				source : [["AL", "CCC"]],
				}],
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
			source : [["SRD", 233], ["D", 185] ["AL","S8"]],
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
	"scale mail of psychic resistance: resin (ccc-tri-21 yul1-6)" : {
			name : "Resin Scale Mail of Psychic Resist. (CCC-TRI-21 YUL1-6)",
			source : [["AL","CCC"]],
			type : "armor (scale mail)",
			rarity : "rare",
			magicItemTable : "H",
			attunement : true,
			description : "This armor is made from a hardened resin similar to amber. You have resistance to psychic damage while attuned to and wearing the armor. After its psychic resistance is used, you're wracked with terrible nightmares of unfathomable creatures that evening.",
			descriptionFull : "This armor is made out of an organic hardened resin similar to amber. When this armor’s psychic resistance is used, you are wracked with terrible nightmares of unfathomable creatures that evening. You have resistance to one type of damage while you wear this armor and are attuned to it. This damage type is psychic.",
			dmgres : ["Psychic"],
		armorAdd : "Resin Scale Mail",
		armorOptions : [{
				name : "Resin Scale Mail of Psychic Resistance",
				source : [["AL", "CCC"]],
				}]
		},
	"studded leather of fire resistance (ddal0-11c)" : {
			name : "Studded Leather of Fire Resist. (DDAL0-11C)",
			source : [["AL","S0"]],
			type : "armor (studded leather)",
			rarity : "rare",
			magicItemTable : "H",
			attunement : true,
			description : "This armor is reinforced with rivets made of unmeltable ice, and steams faintly when the wearer is hit with fire attacks. While wearing this armor and attuned to it, you have resistance to fire damage.",
			dmgres : ["Fire"],
		armorAdd : "Studded Leather (Fire Resist)",
		armorOptions : [{
				name : "Studded Leather of Fire Resistance",
				source : [["AL", "S0"]],
				}]
			},
}
				
MagicItemsList["al shields, +1, +2, or +3"] = {
		name : "AL Shields, +1, +2, or +3",
		type : "shield",
		descriptionFull : "While holding this shield, you have a bonus to AC. This bonus is in addition to the shield's normal bonus to AC. The bonus is determined by the rarity of the shield: uncommon (+1), rare (+2), or very rare (+3).",
		allowDuplicates : true,
		choices : ["+1 Shield (DDEX3-5)","+1 Shield of the Moon (CCC-TAROT1-2)","+1 Shield of the Salty Griffon (CCC-TRI-19 DEAD1-1)","+2 Shield: Wall of Teeth (DDEX2-14)","+2 Shield: Yata Mirror (CCC-ANIME1-2)","+3 Shield: Miltiades’s Shield (CCC-BMG-13 PHLAN1-1)","+3 Shield: Aegis of the Raven Queen (CCC-BWM-3)"],
		"+1 shield (ddex3-5)" : {
			name : "Shield +1 (DDEX3-5)",
			source : [["AL","S3"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This shield is fashioned from the hide of an umber hulk. It bears the oak leaf symbol commonly associated with the nature deity Silvanus. While holding this shield, you have a +1 bonus to AC in addition to the shield's normal AC bonus",
			allowDuplicates : true,
			shieldAdd : "+1 Shield"
		},
		"+1 shield of the moon (ccc-tarot1-2)" : {
			name : "Shield of the Moon +1 (CCC-TAROT1-2)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This shield is painted to resemble the moon. While equipped, you can use a bonus action to make it glow with a soft moonlight in a 20-ft radius. No colors can be discerned in the moonlight so all objects show up as shades of grey. While holding this shield, you have a +1 bonus to AC in addition to its normal AC bonus.",
			descriptionFull : "This shield is painted to resemble The Moon. While equipped the bearer can use a bonus action to cause the shield to glow with a soft moonlight. This soft white light extends 20 ft. No colors can be discerned in the moonlight, and all objects show up as shades of grey. While holding this shield, you have a +1 bonus to AC in addition to the shield's normal AC bonus.",
			allowDuplicates : true,
			action : [["bonus action", "Shield of the Moon (Glow)"]],
			shieldAdd : "+1 Shield (Moon)"
		},
		"+1 shield of the salty griffon (ccc-tri-19 dead1-1)" : {
			name : "Shield of the Salty Griffon +1 (CCC-TRI-19 DEAD1-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This shield is crafted from a giant, polished oyster shell. While holding this shield, you have a +1 bonus to AC in addition to the shield's normal AC bonus.",
			descriptionFull : "This shield is crafted from a giant, polished oyster shell. While holding this shield, you have a +1 bonus to AC in addition to the shield's normal AC bonus.",
			allowDuplicates : true,
			shieldAdd : "+1 Shield (Griffon)"
		},
		"+2 shield: wall of teeth (ddex2-14)" : {
			name : "Wall of Teeth, Shield +2 (DDEX2-14)",
			source : [["AL","S2"]],
			rarity : "rare",
			magicItemTable : "G",
			description : "This shield is fashioned of dull, black steel and festooned with hundreds upon hundreds of human teeth. Whenever the wielder of the shield is presented with an opportunity to act in a selfish or malevolent way, the item heightens their urge to do so. While holding this shield, you have a +2 bonus to AC in addition to the shield's normal AC bonus.",
			allowDuplicates : true,
			shieldAdd : "+2 Shield (Wall of Teeth)"
		},
		"+2 shield: yata mirror (ccc-anime1-2)" : {
			name : "Yata Mirror, Shield +2 (CCC-ANIME1-2)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			description : "The Yata Mirror is an ancient relic created by those who created the Guardians. This shield is endowed with magic that changes its characteristics to absorb damage from attacks. While wielding the polished silver disc, it becomes translucent and grants a +2 bonus to your AC in addition to the shield's normal AC bonus.",
			allowDuplicates : true,
			shieldAdd : "+2 Shield (Yata Mirror)"
		},
		"+3 shield: miltiades’s shield (ccc-bmg-13 phlan1-1)" : {
			name : "Miltiades’s Shield +3 (CCC-BMG-13 PHLAN1-1)",
			rarity : "very rare",
			source : [["AL","CCC"]],
			magicItemTable : "H",
			description : "This shield is decorated w/ symbols of service & fealty. The shield empathically encourages service to others & whenever the bearer considers performing a selfish act, the shield enhances pangs of conscience. While holding this shield, you gain a +3 bonus to AC in addition to the shield's normal AC bonus.",
			descriptionFull : "This shield is decorated with symbols of service and fealty. The shield empathically encourages service to others and whenever the bearer considers performing a selfish act, the shield enhances pangs of conscience. While holding this shield, you gain a +3 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
			allowDuplicates : true,
			shieldAdd : "+3 Shield (Miltiades)"
		},
		"+3 shield: aegis of the raven queen (ccc-bwm-3)" : {
			name : "Aegis of the Raven Queen, Shield +3 (CCC-BWM-3)",
			rarity : "very rare",
			source : [["AL","CCC"]],
			magicItemTable : "H",
			description : "This shield appears as a shroud of shadow w/ the symbol of the Raven Queen glowing in dim red light. While holding it, nonmagical flames w/i 30 ft are extinguished as the shadow lashes out at the flame. The shield encourages you to lack pity for those who suffer & die, for death is the natural end. You gain a +3 bonus to AC in addition to the shield's normal AC bonus.",
			descriptionFull : "This shield appears as a shroud of shadow with the symbol of the Raven Queen glowing in dim red light. While holding this shield, nonmagical flames are extinguished within 30 feet of you as the shadow lashes out at the flame. The shield encourages you to hold no pity for those who suffer and die, for death is the natural end of life.\n   While holding this shield, you gain a +3 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
			allowDuplicates : true,
			shieldAdd : "+3 Shield (Raven Queen)"
		},
	}
	
MagicItemsList["al shields (other)"] = {
		name : "AL Shields (Other)",
		allowDuplicates : true,
		type : "shield",
		weight : 6,
	choices : ["Animated Shield (DDEP5-2)","Animated Shield (DDEP8-3)","Arrow-Catching Shield (CCC-BMG-MOON13-3)","Arrow-Catching Shield (CCC-GLIP-2-1)","Arrow-Catching Shield (DDAL9-8)","Sentinel Shield (CCC-BMG-MOON11-1)","Sentinel Shield (CCC-WWC-7)","Sentinel Shield (DDAL-CGB)","Sentinel Shield (DDEX2-12)","Spellguard Shield: Warden (CCC-ODFC1-3)","Spellguard Shield (CCC-ROZK1-3)","Spellguard Shield (DDEP7-2)","Spellguard Shield (DDAL-DRWEP02)"],
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
	"arrow-catching shield (ccc-bmg-moon13-3)" : { // contains contributions by Larry Hoy
		name : "Arrow-Catching Shield (CCC-BMG-MOON13-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This large round wooden shield is dark brown, with a black iron rim & boss. It's decorated with two entwined red serpents, each holding a bundle of broken arrows in their mouths. The shield is surprisingly light & floats on water. While wielding it, you gain an additional +2 bonus to AC against ranged attacks (not calculated in 1st page AC). When an attacker makes a ranged atk against a target w/i 5 ft of you, you can become the target of the atk as a reaction.",
		descriptionFull : "This large round wooden shield is dark brown, with a black iron rim and a black shield boss. It is decorated with two entwined red serpents, each holding a bundle of broken arrows in their mouths. The shield is surprisingly light and floats on water.\n   You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
		attunement : true,
		weight : 6,
		action : [["reaction", "Arrow-Catching Shield"]],
		shieldAdd : "Arrow-Catching Shield (+\u200A2 vs. ranged)"
	},
	"arrow-catching shield (ccc-glip-2-1)" : { // contains contributions by Larry Hoy
		name : "Arrow-Catching Shield (CCC-GLIP-2-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This bronze-inlaid shield bears the marching dragon symbol of the Kroth Magg hobgoblin clan. While wielding it, you gain an additional +2 bonus to AC against ranged attacks (not calculated in 1st page AC). When an attacker makes a ranged atk against a target w/i 5 ft of you, you can become the target of the atk as a reaction.",
		descriptionFull : "This bronze-inlaid shield bears the marching dragon symbol of the Kroth Magg hobgoblin clan.\n   You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
		attunement : true,
		weight : 6,
		action : [["reaction", "Arrow-Catching Shield"]],
		shieldAdd : "Arrow-Catching Shield (+\u200A2 vs. ranged)"
	},
	"arrow-catching shield (ddal9-8)" : { // contains contributions by Larry Hoy
		name : "Arrow-Catching Shield (DDAL9-8)",
		source : [["AL","S9"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This round, metal shield is decorated w/ braids of hair from the unicorn Zhalruban & emblazoned w/ the insignia of the Hellriders. While wielding it, you gain an additional +2 bonus to AC against ranged attacks (not calculated in 1st page AC). If an attacker makes a ranged atk against a target w/i 5 ft of you, you can become the target of the atk as a reaction. When you do this, the shield pulses with magic.",
		descriptionFull : "This round, metal shield is decorated with braids of hair from the unicorn Zhalruban and emblazoned with the insignia of the Hellriders on the boss of the shield. The boss itself pulses with magic when the shield attracts ranged attacks.\n   You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
		attunement : true,
		weight : 6,
		action : [["reaction", "Arrow-Catching Shield"]],
		shieldAdd : "Arrow-Catching Shield (+\u200A2 vs. ranged)"
	},
	"sentinel shield (ccc-bmg-moon11-1)" : {
		name : "Sentinel Shield (CCC-BMG-MOON11-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		shieldAdd : "Sentinel Shield",
		advantages : [["Initiative", true], ["Perception", true]],
		vision : [["Adv. on Perception checks", 0]],
		description: "This shield is emblazoned with a symbol of an eye. Whenever it grants adv. on a roll, the eye on the front squints & the shield says “hmmmm” in a deep gravelly voice that is audible to within 30 ft. While holding this shield, you have adv. on initiative rolls & Wisdom (Perception) checks.",
		descriptionFull: "Whenever the Sentinel Shield grants advantage on a roll, the eye on the front squints, and the shield says “hmmmm” in a deep gravelly voice that is audible to anyone within 30 feet. While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye."
		},
	"sentinel shield (ccc-wwc-7)" : {
		name : "Sentinel Shield (CCC-WWC-7)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		shieldAdd : "Sentinel Shield",
		advantages : [["Initiative", true], ["Perception", true]],
		vision : [["Adv. on Perception checks", 0]],
		description: "The shield is emblazoned with a flaming sword, the holy symbol of the warrior god, Tempus. While holding this shield, you have advantage on initiative rolls & Wisdom (Perception) checks.",
		descriptionFull: "The shield is emblazoned with a flaming sword, which is the holy symbol of the warrior god Tempus.\n   While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye."
		},
	"sentinel shield (ddal-cgb)" : {
		name : "Sentinel Shield (DDAL-CGB)",
		source : [["AL","CGB"]],
		rarity : "uncommon",
		magicItemTable : "F",
		shieldAdd : "Sentinel Shield",
		advantages : [["Initiative", true], ["Perception", true]],
		vision : [["Adv. on Perception checks", 0]],
		description: "This shield is emblazoned with a symbol of an eye & glows faintly when a giant is within 120 ft. While holding the shield, you have advantage on initiative rolls & Wisdom (Perception) checks.",
		descriptionFull: "This shield bears the symbol of a large eye and glows faintly when any giant is within 120 feet of it.\n   While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye."
		},
	"sentinel shield (ddex2-12)" : {
		name : "Sentinel Shield (DDEX2-12)",
		source : [["AL","S2"]],
		rarity : "uncommon",
		magicItemTable : "F",
		shieldAdd : "Sentinel Shield",
		advantages : [["Initiative", true], ["Perception", true]],
		vision : [["Adv. on Perception checks", 0]],
		description: "This oblong shield has an obvious eye motif with several eyes on its surface that occasionally blink. While holding this shield, you have adv. on initiative rolls & Wisdom (Perception) checks.",
		descriptionFull: "This oblong shield has an obvious eye motif with several eyes on its surface that occasionally blink. While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye."
		},
	"spellguard shield: warden (ccc-odfc1-3)" : {
		name : "Warden, Spellguard Shield (CCC-ODFC1-3)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "Created by Brinora for her husband, Richard, this shield is made of multicolored glass. It appears fragile, but is as strong as a regular shield. Initially showing Brinora’s arcane sigil, the pattern rearranges for each new wielder, forming a holy symbol or image of great meaning. While holding this shield, you have adv. on saves against spells & other magical effects, & spell atks have disadv. against you.",
		descriptionFull : "Created by Brinora for her lover, and later husband, Richard, this shield is made of multicolored glass. While it appears fragile, it is just as strong as a regular shield. Although the picture that was initially formed was Brinora’s arcane sigil, the pattern rearranges appropriately for the wielder, forming a holy symbol or other simple image of great meaning. While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.",
		attunement : true,
		weight : 6,
		shieldAdd : "Spellguard Shield",
		savetxt : { adv_vs : ["spells", "magical effects"] }
	},
	"spellguard shield (ccc-rozk1-3)" : {
		name : "Spellguard Shield (CCC-ROZK1-3)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This steel shield is embossed with a longsword wrapped in thorny vines that ends in roses in full bloom. The enamel coloring the roses is still vibrant. While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.",
		attunement : true,
		weight : 6,
		shieldAdd : "Spellguard Shield",
		savetxt : { adv_vs : ["spells", "magical effects"] }
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