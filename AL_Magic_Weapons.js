/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me (MPMB in particular, but others as noted). It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
Additionally, due to the length of some descriptions, you'll need to auto-size the font & hide the lines for multi-line fields in your settings. Otherwise, many of these items will run off the page.
*/

/*  Subject: Flavored Weapons from AL adventures

    Effect:	This script adds the flavored versions of standard magic weapons found in AL adventures to the MPMB sheet (and a couple flavored book items). They will all be listed as AL [item category] in the Magic Item selection, with further choices as needed. The main categories are as follows: Staffs (all special staffs, whether specifically called out as weapons or not), Swords (special swords - including ones where the mod only gave a sword version), Weapons +1, Weapons +2/+3, Weapons (Other) [all other special weapons].  All Rods can be found in the AL Magic Items script, even those that can be used as a weapon.
	
	This is not a complete list since I don't have every published adventure yet, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor.*/
	
	//Complete: S0-S10, Guild Adept, DC-POA, CCCs, official DRW, RMH, WBW-DC
	//In progress: SJ-DCs, POs, RV-DC, FR-DC, PS-DC, 
	
var iFileName = "AL Flavored Magic Weapons.js";
RequiredSheetVersion("13.2.3");

// Define the source
SourceList["AL"] = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470",
	date : "Various"
};

SourceList["WDotMM"] = {	//For standard items with specific flavor. New items are added via MPMB's code.
	name : "Waterdeep: Dungeon of the Mad Mage [items]",
	abbreviation : "WDotMM",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/waterdeep-dungeon-mad-mage",
	date : "2018/11/20"
};

SourceList["KOSC"]={
	name : "Knuckleheads and Other Such Curiosities: A Traveler's Guide to Icewind Dale",
	abbreviation : "KOSC",
	group : "Adventure Books",
	url : "https://www.dmsguild.com/product/328568/DDAL0013-Knuckleheads--Other-Such-Curiosities-A-Travelers-Guide-to-Icewind-Dale",
	date : "2020/15/10"
};

SourceList["AL:SA"] = {  //AL Service Awards. Started in 2021 but have multiple sets each year.
    name : "AL Service Awards",
    abbreviation : "AL:SA",
    group : "Adventurers League",
    date : "2021/11/02"
};

SourceList["AL:R"] = {  //Ravenloft Alternate Campaign
	name : "AL Ravenloft Campaign",
	abbreviation : "AL:R",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=1000044",
	date : "Various",
	defaultExcluded : true
};

SourceList["AL:FC"] = {   //Fai Chen & Trading Post
    name : "Fai Chen Certs",
    abbreviation : "AL:FC",
    group : "Adventurers League",
    date : "Various",
	defaultExcluded : true
};

SourceList.CM = {
	name : "Candlekeep Mysteries",
	abbreviation : "CM",
	group : "Adventure Books",
	campaignSetting : "Forgotten Realms",
	url : "https://dnd.wizards.com/products/candlekeep-mysteries",
	date : "2021/03/16"
};


RunFunctionAtEnd(function () {//this code makes it so the AL variations of common items don't appear as an option for artificers to create
//AL flavored Weapons

MagicItemsList["al staffs"] = {
			name : "AL Staffs",
			allowDuplicates : true,
			choicesNotInMenu : true,
			type : "staff",
			magicItemTable : "?",
		choices : ["Staff of the Adder (CCC-SRCC1-3)","Staff of Adornment (CCC-3MAGS-ONE)","Staff of Adornment (PS-DC-PKL-10)","Staff of Adornment: K's Ashenwood Staff (SJ-DC-AMO-KURI-3)","Staff of Adornment (SJ-DC-ARQ-2)","Staff of Adornment: Ocharine (SJ-DC-DD-7)","Staff of Adornment (SJ-DC-DEN-H5)","Staff of Adornment (SJ-DC-IGC-ECP-5)","Staff of Adornment (SJ-DC-MONSTER-1)","Staff of Adornment: Shakujo (SJ-DC-MWG-1)","Staff of Adornment (SJ-DC-ROTU-5)","Staff of Adornment (SJ-DC-TEL-12)","Staff of Adornment (WBW-DC-NJ-COU-2)","Staff of Birdcalls (FR-DC-TT-T201)","Staff of Birdcalls (WBW-DC-BIRE-1)","Staff of Birdcalls (WBW-DC-CONMAR-3)","Staff of Birdcalls (WBW-DC-Death)","Staff of Birdcalls (WBW-DC-FDC-3)","Staff of Birdcalls (WBW-DC-HBK-1)","Staff of Birdcalls (WBW-DC-ROBIN-1-2)","Staff of Birdcalls (WBW-DC-ROOK-1-4)","Staff of Birdcalls: Dark Crystal (WBW-DC-ZODIAC-10)","Staff of Charming (DDEX2-2)","Staff of Defense (SJ-DC-BST-6)","Staff of Defense: Xuanwu Jade Shuttle (SJ-DC-DD-9)","Staff of Defense (SJ-DC-ETO-2)","Staff of Defense: Black Root of Clathrus Archeri (SJ-DC-PANDORA-JWEI-3A)","Staff of Defense (SJ-DC-RFJK-2-2)","Staff of Defense (SJ-DC-TEL-2)","Staff of Fate (BMG-MOON-MD-10)","Staff of Flowers (CCC-KUMORI-3-1)","Staff of Frost (DDAL0-11E)","Staff of Frost (DDAL-DRW5)","Staff of Frost (WBW-DC-AEG-2)","Staff of Healing: Driftwood Staff (CCC-DES-1-2)","Staff of Healing (CCC-GHC-BK2-8)","Staff of Healing (CCC-QCC2019-3)","Staff of Healing (CCC-WYC-2-1)","Staff of Healing (DDEP4)","Staff of the Magi (DDAL7-17)","Staff of Power (DDAL5-19)","Staff of Power (DDEP4)","Staff of Power: Tongkat Nenek Kebayan (WBW-DC-DMMC-1)","Staff of Power: Oblivia (WBW-DC-PHP-ORNG-2)","Staff of the Python (CCC-BMG-MOON7-1)","Staff of the Python: Earth Tender's Branch (CCC-BMG-MOON8-2)","Staff of the Python: Bulkawa's Benevolence (CCC-GSP2-2)","Staff of the Python (FR-DC-GHG-4)","Staff of the Python: Blackztaff (FR-DC-WATERDEEP-KYZ)","Staff of Striking (CCC-TRI-14 YUL1-3)","Staff of Striking (DDAL7-12)","Staff of Striking (DDAL10-10)","Staff of Striking: Moon Dance (SJ-DC-PANDORA-JWEI-1)","Staff of Striking: Dragon's Glory (SJ-DC-ROTU-5)","Staff of Striking: Orcus Wand Splinter (SJ-DC-TRIDEN-MW3)","Staff of Swarming Insects (DDEX3-3)","Staff of Swarming Insects: Mildy's (WBW-DC-DES-1-7)","Staff of Swarming Insects: Scorpion Staff (WBW-DC-DGE-2)","Staff of Swarming Insects: Drone Control Rod (WBW-DC-LEGIT-SV-6)","Staff of Swarming Insects: Mariposa (WBW-DC-PHP-ORNG-2)","Staff of Swarming Insects: Ygorl's Crook (WBW-DC-Rook-3-3)","Staff of Thunder and Lightning (DDAL5-8)","Staff of Thunder and Lightning (DDEP5-2)","Staff of Withering (DDEX2-13)","Staff of Withering (DDAL8-13)","Staff of Withering: The Inoculum (SJ-DC-VEN-2)","Staff of Withering: Positive Prognosis (SJ-DC-VEN-2)","Staff of the Woodlands (CCC-BMG-MOON12-1)","Staff of the Woodlands (CCC-GARY-9)","Staff of the Woodlands (DDAL7-8/DDEP7-1)","Staff of the Woodlands: Liwanag (WBW-DC-ANDL-3)","Staff of the Woodlands: Temperate (WBW-DC-CONMAR-6)","Staff of the Woodlands (WBW-DC-HAVN-1)","Staff of the Woodlands: Guardian (WBW-DC-HH-2)","Staff of the Woodlands (WBW-DC-IDL1)","Staff of the Woodlands (WBW-DC-PHP-LCL-1)","Staff of the Woodlands: Hope's Emissary (WBW-DC-Rook-3-2)","Staff of the Woodlands: Sunlit (WBW-DC-Sunlit-6)","Staff of the Woodlands: Delver's (WBW-DC-ZEP-T2S2)","Staff of the Woodlands: Dragon's Seed (WBW-DC-ZODIAC-5)"],
	"staff of the adder (ccc-srcc1-3)" : {
		name : "Staff of the Adder (CCC-SRCC1-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		description : "The head of this plain ash wood staff is carved to resemble a venomous serpent. As bonus action, I can animate the snake head for 1 min or make it inanimate again. While animated, it can make 1 atk of my Attack action (PB + Wis Mod to hit, 1d6 Piercing + 3d6 Poison). It has AC 15, 20 HP, immune Psychic & Poison. If it reaches 0 HP, the staff is destroyed.",
		descriptionFull : "The head of this plain ash wood staff is carved to resemble a venomous serpent.\n    As a Bonus Action, you can turn the head of this staff into that of an animate, venomous snake for 1 minute or revert the staff to its inanimate form.\n    When you take the Attack action, you can make one of the attack rolls using the animated snake head, which has a reach of 5 feet. Apply your Proficiency Bonus and Wisdom modifier to the attack roll. On a hit, the target takes 1d6 Piercing damage and 3d6 Poison damage.\n    The snake head can be attacked while it is animate. It has AC 15, HP 20, and Immunity to Poison and Psychic damage. If the head drops to 0 Hit Points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost Hit Points when it reverts to its inanimate form.",
		attunement : true,
		weight : 4,
		action : [["bonus action", " (animate/end)"]],
		weaponOptions : {
			regExpSearch: /snake head from staff of the adder/i,
			name : "Snake Head from Staff of the Adder",
			list : "melee",
			ability : 5,
			type : "Natural",
			damage : [1, 6, "piercing"],
			range : "Melee",
			weight : 4,
			description : "1 attack roll only; +3d6 Poison",
			abilitytodamage : false,
			selectNow : true,
			}
	},
	"staff of adornment (ccc-3mags-one)" : {
		name : "Staff of Adornment (CCC-3MAGS-ONE)",
		source : [["AL","CCC"]],
		rarity : "common",
		description : "Flowering hop vines are entwined around this light, pale wooden staff. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. I can make 1 or more of them turn in place. No matter what floats atop it, the object(s) smells like fresh hops.",
		descriptionFull : "Flowering hop vines are entwined around the shaft of this light, pale wooden staff.\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4
	},
	"staff of adornment (ps-dc-pkl-10)" : {
		name : "Staff of Adornment (PS-DC-PKL-10)",
		source : [["AL","PS-DC"]],
		rarity : "common",
		description : "This staff is embossed with numerous eyes that seem to shift toward anyone looking at it. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff and remains there until removed or out of my possession. The staff can have 3 objects floating at a time; I can make 1 or more spin or turn in place. I can also speak Deep Speech.",
		descriptionFull : "This staff is embossed with numerous amounts of eyes that seem to shift in the direction of whomever is looking at it. It has the minor language property allowing the owner to understand deep speech.\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
		languageProfs : ["Deep Speech"],
	},
	"staff of adornment: k's ashenwood staff (sj-dc-amo-kuri-3)" : {
		name : "K's Ashenwood Staff of Adornment (AMO-KURI-3)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "This ashenwood staff has stood through time. There are visible bite marks in the middle and a secret message somewhere on the item. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. I can make them spin or turn in place.",
		descriptionFull : "This ashenwood staff has stood through time. You can see there's some visible bite marks in the middle of this staff.\n   " + toUni("Secret Message") + ". A message is hidden somewhere on the item. It might be visible only at a certain time, under the light of one phase of the moon, or in a specific location.\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
	},
	"staff of adornment (sj-dc-arq-2)" : {
		name : "Staff of Adornment (SJ-DC-ARQ-2)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "This finely crafted wooden staff has symbols of air, earth, fire and water artfully carved into its surface. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff and remains there until removed or out of my possession. The staff can have 3 objects floating at a time, which I can make spin or turn in place.",
		descriptionFull : "It's a finely crafted wooden staff with symbols of air, erath, fire and water artfully carved into its surface.\n   " + toUni("Language") + ". The bearer can speak and understand Primordial while the item is on the bearer's person.\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
		languageProfs : ["Primordial"],
	},
	"staff of adornment: ocharine (sj-dc-dd-7)" : {
		name : "Ocharine, Staff of Adornment (SJ-DC-DD-7)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "This intricately-carved lightweight obsidian staff is used in the Harmonization process, focusing hot pressurized water to carve Azurite into Azure Crystals. It's captured a sequence of tones that it releases on a hit. If I put an object \u22641 pound over the tip, it floats 1 inch from the staff & stays until removed or out of my possession. The staff can have 3 floating objects, which I can make spin in place.",
		descriptionFull : "This lightweight, intricately carved obsidian stone staff is the main tool in the Harmonization process. It is used to focus the heated and pressurized water that carves the Azurite into Azure Crystals. This process produces a sequence of tones that have been captured by the staff and released by it when it strikes something.\n   " + toUni("Songcraft") + ". Whenever this item is struck or is used to strike a foe, its bearer hears a fragment of an ancient song.\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
	},
	"staff of adornment (sj-dc-den-h5)" : {
		name : "Staff of Adornment (SJ-DC-DEN-H5)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "This staff is made from polished driftwood. If I put an object \u22641 pound above the tip, it floats 1 inch from the staff & stays until removed or out of my possession. The staff can have 3 objects floating at a time. When used in any way, it loudly sings the haunting sahuagin song heard at the Reef of Living Memory when souls are ritually trapped in the coral. I can make the objects spin or turn in place.",
		descriptionFull : "This staff is made from polished driftwood. When this staff is used to adorn an item to it, used as an arcane focus, or used as a weapon, the staff begins to loudly sing a few lines of the haunting song heard at the Reef of Living Memory when souls are ritually trapped in the coral. The words of the song are in sahuagin.\n   " + toUni("Loud") + ". The item makes a loud noise—such as a clang, a shout, or a resonating gong—when used. In this case, a few lines of a sahuagin ritual song.\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
	},
	"staff of adornment (sj-dc-igc-ecp-5)" : {
		name : "Staff of Adornment (SJ-DC-IGC-ECP-5)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "This wooden staff is carved with the words \"PROPERTY OF THE HOUSE OF THE PATH AND THE WAY. PLEASE RETURN IF FOUND\". It warns me, giving +2 initiative unless Incapacitated. If I put an object \u22641 pound above the tip, it floats 1 inch from the staff \u0026 stays until removed or out of my possession. The staff can have 3 objects floating at a time, which I can make turn in place.",
		descriptionFull : "This wooden staff has the words \"PROPERTY OF THE HOUSE OF THE PATH AND THE WAY. PLEASE RETURN IF FOUND.\" carved into it and the item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition. (Guardian)\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
	},
	"staff of adornment (sj-dc-monster-1)" : {
		name : "Staff of Adornment (SJ-DC-MONSTER-1)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "This staff is warm to the touch, crafted from plane-touched fire trees. Sigils of flames cover its surface in shades of red \u0026 orange. If I put an object \u22641 pound above the tip, it floats 1 inch from the staff \u0026 stays until removed or out of my possession. The staff can have 3 floating objects. I can make them spin or turn in place \u0026 I suffer no harm in extreme temps past 0\u00B0F \u0026 100\u00B0F.",
		descriptionFull : "This item is warm to the touch, crafted from plane-touched fire trees. Sigils of flames cover its surface. Shades of red and orange are the prominent colors.\n   " + toUni("Temperate") + ". You are unharmed by temperatures of 0 degrees Fahrenheit or lower, and 100 degrees Fahrenheit or higher.\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
		savetxt : { immune : ["temps past 0\u00B0F/100\u00B0F"] },
	},
	"staff of adornment: shakujo (sj-dc-mwg-1)" : {
		name : "Shakujo, Staff of Adornment (SJ-DC-MWG-1)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "The shakujō is a wooden staff with a decorative metal head. 2 loops form the base of the headpiece, each with 3 gilded iron rings attached. The rings jangle softly to warn of danger, giving +2 initiative if not Incapacitated. If I put an object \u22641 pound over the tip, it floats 1 inch from the staff & stays until removed or off my person. The staff can have 3 floating objects, that I can make turn in place.",
		descriptionFull : "The shakujō is a wooden staff with a decorative metal head. Two loops form the base of the headpiece, each from which three gilded iron rings are attached.\n   " + toUni("Guardian") + ". When the bearer rolls Initiative, the iron rings jangle softly, warning you and granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
	},
	"staff of adornment (sj-dc-rotu-5)" : {
		name : "Staff of Adornment (SJ-DC-ROTU-5)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "As long as this staff is in the Hangout Quarter of the illithid's colony on Planet Cereillithid, 666666 appears on the shaft. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff \u0026 stays until removed or out of my possession. The staff can have 3 objects floating at a time. I can make them spin or turn in place.",
		descriptionFull : "If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Secret Message") + ". As long as this staff is in the Hangout Quarter of the illithid's colony on planet cereillithid, the message ‘666666' will appear on the shaft.",
		weight : 4,
	},
	"staff of adornment (sj-dc-tel-12)" : {
		name : "Staff of Adornment (SJ-DC-TEL-12)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		description : "If I put an object up to 1 pound above the tip of this staff while held, it floats 1 inch from the tip \u0026 stays until removed or out of my possession. The staff can have 3 objects floating at a time, which I can make spin or turn in place. The message, \"Leaves of three, leave it be,\" appears as an illusion floating among the adorned items whenever the staff is in woodlands.",
		descriptionFull : "If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Secret Message") + ". The message, \"Leaves of three, leave it be,\" appears as an illusion floating among the adorned items whenever the staff is in woodlands.",
		weight : 4,
	},
	"staff of adornment (wbw-dc-nj-cou-2)" : {
		name : "Staff of Adornment (WBW-DC-NJ-COU-2)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "This staff is made from Yarnspinner's webs. It's Archfey quality! If I put an object up to 1 pound above the tip, it floats 1 inch from the staff \u0026 stays until removed or out of my possession. The staff can have 3 objects floating. I can make them spin or turn in place.",
		descriptionFull : "This staff is made by web produced by Yarnspinner. It's an Archfey quality staff!\n   If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4
	},
	"staff of birdcalls (fr-dc-tt-t201)" : {
		name : "Staff of Birdcalls (FR-DC-TT-T201)",
		source : [["AL","FR-DC"]],
		rarity : "common",
		description : "This is Don-Jon Raskin's hiking pole. As bonus action, it sheds 10-ft bright light & 10-ft more dim, or stops. The pole has 10 charges, 1d6+4 regained at dawn, 5% chance destroyed if last charge used. As Magic action, 1 charge creates a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This is Don-Jon Raskin's hiking pole with minor property beacon: You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.\n   This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", "Birdcalls (Sound)"],["bonus action", "Birdcalls (light/dim)"]],
	},
	"staff of birdcalls (wbw-dc-bire-1)" : {
		name : "Staff of Birdcalls (WBW-DC-BIRE-1)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "This staff is decorated with bird carvings & has 10 charges, 1d6+4 regained at dawn, 5% chance it's destroyed when last charge used. As Magic action, I can use 1 charge to create a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek. I also feel fortunate and optimistic about the future. Rainbow butterflies with a variety of patterns flutter around me.",
		descriptionFull : "While in possession of the staff, you feel fortunate and optimistic about what the future holds.\n   " + toUni("Blissful") + ". Butterflies, with wings of various patterns and colours encompassing the entire rainbow, flutter harmlessly around you.\n   This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]]
	},
	"staff of birdcalls (wbw-dc-conmar-3)" : {
		name : "Staff of Birdcalls (WBW-DC-CONMAR-3)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "This staff is decorated with bird carvings \u0026 has lily pads growing from it. If left out during a night's rest, 3 frogs will sit on the lily pads & croak a song in the morning. The staff has 10 charges, 1d6+4 regained at dawn, 5% chance it's destroyed when last charge used. As Magic action, I can use 1 charge to create a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "The staff also has lily pads growing from it and if the character leaves it out during a night's rest, it would attract 3 frogs that would sit on the lily pads in the morning, croaking a song.\n   This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]]
	},
	"staff of birdcalls (wbw-dc-death)" : {
		name : "Staff of Birdcalls (WBW-DC-Death)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "This staff is decorated with bird carvings. I'm unharmed by extreme temps past 0\u00B0F \u0026 100\u00B0F. It has 10 charges, 1d6+4 regained at dawn, 5% chance destroyed if last charge used. As Magic action, 1 charge creates a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.\n   " + toUni("Temperate") + ". You are unharmed by temperatures of 0 degrees Fahrenheit or lower, and 100 degrees Fahrenheit or higher.",
		weight : 4,
		savetxt : { immune : ["temps past 0\u00B0F/100\u00B0F"] },
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]]
	},
	"staff of birdcalls (wbw-dc-fdc-3)" : {
		name : "Staff of Birdcalls (WBW-DC-FDC-3)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "This staff is decorated with bird carvings \u0026 feathers attached on one end. It has 10 charges, 1d6+4 regained at dawn, 5% chance destroyed if last charge used. As Magic action, 1 charge creates a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "The staff is also decorated with different bird feathers attached on one of its end.\n   This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]]
	},
	"staff of birdcalls (wbw-dc-hbk-1)" : {
		name : "Staff of Birdcalls (WBW-DC-HBK-1)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "This staff is decorated with bird carvings \u0026 whenever it's struck, I hear a few beats of a taiko drum. It has 10 charges, 1d6+4 regained at dawn, 5% chance destroyed if last charge used. As Magic action, 1 charge creates a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.\n   " + toUni("Song Craft") + ". Whenever this item is struck or is used to strike a foe, its bearer hears a fragment of an ancient song: a few beats of a taiko drum.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]]
	},
	"staff of birdcalls (wbw-dc-robin-1-2)" : {
		name : "Staff of Birdcalls (WBW-DC-ROBIN-1-2)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "This staff is decorated with bird carvings. I hear robins when in danger, giving +2 initiative unless Incapacitated. 10 charges, 1d6+4 regained at dawn, 5% chance destroyed if last charge used. As Magic action, 1 charge creates a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.\n   " + toUni("Guardian") + ". While this staff is on your person, you can hear robins when danger is near. The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
	},
	"staff of birdcalls (wbw-dc-rook-1-4)" : {
		name : "Staff of Birdcalls (WBW-DC-ROOK-1-4)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "This bamboo staff is intricately carved with wondrous birds. It has 10 charges, 1d6+4 regained at dawn. 5% chance it's destroyed if the last charge is used. As Magic action, I can use 1 charge to create a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek. I can use another Magic action to make my voice carry clearly for 600 ft until my next turn ends.",
		descriptionFull : "This bamboo staff is intricately carved with wondrous birds.\n   " + toUni("War Leader") + ". You can take a Magic action to cause your voice or signal to carry clearly for up to 600 feet until the end of your next turn.\n   This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", "Birdcalls/600ft Voice"]],
	},
	"staff of birdcalls: dark crystal (wbw-dc-zodiac-10)" : {
		name : "Dark Crystal Staff of Birdcalls (ZODIAC-10)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		description : "A dark staff with a skeletal bird skull. Two obsidian crystals are embedded in its eye sockets. The staff has 10 charges, 1d6+4 regained at dawn, 5% chance it's destroyed when last charge used. As Magic action, I can use 1 charge to create a sound to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek. Another Magic action, make my voice carry clearly for 600 ft until my next turn ends.",
		descriptionFull : "A dark staff with a skeletal bird skull. Embedded in its eye sockets are two obsidian crystals.\n   " + toUni("War Leader") + ". You can take a Magic action to cause your voice or signal to carry clearly for up to 600 feet until the end of your next turn.\n   This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", "Birdcalls/600ft Voice"]],
	},
	"staff of charming (ddex2-2)" : {
		name : "Staff of Charming (DDEX2-2)",
		source : [["AL","S2"]],
		rarity : "rare",
		description: "This staff is fashioned from a piece of pale, white wood, capped with a falcon made of silver. It has 10 charges for spells, 1d8+2 regained at dawn. 5% chance destroyed if last one used. Once per dawn, if an Enchantment spell is cast only on me, I can turn a failed save into a pass. If I pass, I can use 1 charge as a reaction to turn the spell on its caster.",
		descriptionFull : "This staff is fashioned from a piece of pale, white wood, capped with a falcon made of silver.\n   This staff has 10 charges. While holding the staff, you can use any of its properties:\n" +
		toUni("Cast Spell") + ". You can expend 1 of the staff's charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC.\n"+toUni("Reflect Enchantment") + ". If you succeed on a saving throw against an Enchantment spell that targets only you, you can take a Reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.\n" +toUni("Resist Enchantment") + ". If you fail a saving throw against an Enchantment spell that targets only you, you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn.\n" +
		toUni("Regain Charges") + ". The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff crumbles to dust and is destroyed.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		prerequisite : "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Charming",
		usages : 10,
		recovery : "dawn",
		additional : "charges, regains 1d8+2",
		extraLimitedFeatures : [{
			name : "Staff of Charming (pass enchantment save)",
			usages : 1,
			recovery : "dawn"
		}],
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["charm person", "command", "comprehend languages"],
			selection : ["charm person", "command", "comprehend languages"],
			firstCol : 1,
			times : 3
		},
		action : [["reaction", " (reflect enchantment)"]],
		},
	"staff of defense (sj-dc-bst-6)" : {
		name : "Staff of Defense (SJ-DC-BST-6)",
		source : [["AL", "SJ-DC"]],
		rarity : "rare",
		description : "The nasty wizard Nicolli's staff is carved a yggdrasti root. While held, I gain a +1 to AC. The staff has 10 charges and regains 1d6+4 at dawn. 5% chance it's destroyed if last charge used. I can use charges to cast Mage Armor (1 charge) or Shield (2 charges).",
		descriptionLong : "The nasty wizard Nicolli's staff is carved from the wood of a yggdrasti root. While held, I gain a +1 to AC. It has 10 charges, regaining 1d6+4 expended charges at dawn. If I use the last charge, roll a d20. On a 1, it's destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges).",
		descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		toUni("\n   Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed."+
		"\n   " + toUni("Strange Material") + ". The nasty wizard Nicolli's staff is carved from the wood of a yggdrasti root.",
		attunement : true,
		prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		weight : 3,
		limfeaname : "Staff of Defense",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		weaponsAdd : { select : ["Staff of Defense"], options : ["Staff of Defense"] },
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["mage armor"],
			selection : ["mage armor"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["shield"],
			selection : ["shield"],
			firstCol : 2
		}],
		spellChanges : {
			"shield" : {
				time : "1 a",
				changes : "Cast as an action."
			}
		},
		extraAC : [{name : "Staff of Defense", mod : 1, magic : true, text : "I gain a +1 bonus to AC while holding the Staff of Defense."}],
	},
	"staff of defense: xuanwu jade shuttle (sj-dc-dd-9)" : {
		name : "Xuanwu Jade Shuttle, Staff of Defense (DD-9)",
		source : [["AL", "SJ-DC"]],
		rarity : "rare",
		description : "This short-hafted jade quarterstaff has an S-shaped handle inlaid with whorls and Draconic glyphs, and a flat disc-shaped head carved with a dragon turtle rampant. It roars at threats, giving +2 initiative if not Incapacitated. I gain +1 AC. The staff has 10 charges, 1d6+4 regained at dawn. 5% chance destroyed if last charge used. Use charges to cast Mage Armor (1 charge) or Shield (2 charges). Mage Armor is a shimmering coat of gold lamellar and Shield appears as an octagonal barrier of rune-carved tortoise shells.",
		descriptionLong : "The Xuanwu Jade Shuttle is the latest innovation in the Huangfu's personal defense range. This short-hafted jade quarterstaff has an S-shaped handle inlaid with golden whorls and Draconic glyphs, and a flat disc-shaped head carved with a dragon turtle rampant. The staff warns of threats with a dragon turtle's roar, givng +2 to initiative rolls if I'm not Incapacitated. While held, I gain +1 to AC. It has 10 charges, regaining 1d6+4 charges at dawn. If I use the last charge, roll a d20. On a 1, it's destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges). The mage armor looks like a shimmering coat of gold lamellar and the shield manifests as an octagonal barrier of overlapping rune-carved tortoise shells.",
		descriptionFull : "The Xuanwu Jade Shuttle (Xuanwu Yu Ruyi, 玄武玉如意) is the latest innovation in the Huangfu's personal defense range. This short-hafted jade quarterstaff has a curved, S-shaped handle inlaid with golden whorls and Draconic glyphs, and a flat, disc-shaped head adorned with a carving of a dragon turtle rampant. The mage armor it weaves materializes as a shimmering coat of gold lamellar, while the shield manifests as an octagonal barrier of overlapping rune-carved tortoise shells."+
		"\n   " + toUni("Guardian") + ". The staff warns of impending threats through a dragon turtle's violent roars that only the bearer can hear, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition."+
		"\n   This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		toUni("\n   Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
		attunement : true,
		prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		weight : 3,
		limfeaname : "Staff of Defense",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		weaponsAdd : { select : ["Xuanwu Jade Shuttle, Staff of Defense"], options : ["Xuanwu Jade Shuttle, Staff of Defense"] },
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["mage armor"],
			selection : ["mage armor"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["shield"],
			selection : ["shield"],
			firstCol : 2
		}],
		spellChanges : {
			"shield" : {
				time : "1 a",
				changes : "Cast as an action."
			}
		},
		extraAC : [{name : "Staff of Defense", mod : 1, magic : true, text : "I gain a +1 bonus to AC while holding the Staff of Defense."}],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
	},
	"staff of defense (sj-dc-eto-2)" : {
		name : "Staff of Defense (SJ-DC-ETO-2)",
		source : [["AL", "SJ-DC"]],
		rarity : "rare",
		description : "This gleaming blue sapphire staff depicts a wyvern in flight at its apex, It's been renewed now that it's evil master has been destroyed and gives +1 AC while held. The staff has 10 charges, 1d6+4 regained at dawn. The charges can cast Mage Armor (1 charge) or Shield (2 charges). 5% chance it's destroyed if last charge used (1 on d20).",
		descriptionFull : "This staff of carved from gleaming blue sapphire, renewed now that it's evil master has been destroyed and depicting a wyvern in flight at its apex."+
		"\n   This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		"\n   " + toUni("Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
		attunement : true,
		prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		weight : 3,
		limfeaname : "Staff of Defense",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		weaponsAdd : { select : ["Staff of Defense"], options : ["Staff of Defense"] },
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["mage armor"],
			selection : ["mage armor"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["shield"],
			selection : ["shield"],
			firstCol : 2
		}],
		spellChanges : {
			"shield" : {
				time : "1 a",
				changes : "Cast as an action."
			}
		},
		extraAC : [{name : "Staff of Defense", mod : 1, magic : true, text : "I gain a +1 bonus to AC while holding the Staff of Defense."}],
	},
	"staff of defense: black root of clathrus archeri (sj-dc-pandora-jwei-3a)" : {
		name : "Black Root of Clathrus Archeri (Staff of Defense)",
		source : [["AL", "SJ-DC"]],
		rarity : "rare",
		description : "This staff is black and rotted with fungi growing from it and a red clathrus archeri at its tip. I gain +1 AC and have the urge to act in selfish or malevolent ways when I have the chance. The staff has 10 charges, 1d6+4 regained at dawn. 5% chance it's destroyed if last charge used. Charges cast Mage Armor (1 charge) or Shield (2 charges). Mage Armor is a translucent reddish-purple arcane armor with mycelial threads around the waist and Shield looks like a mushroom's red cap.",
		descriptionLong : "This staff's shaft is black and rotted with several fungi growing around it and a red-colored clathrus archeri at its tip. I gain a +1 to AC and it heightens my urge to act in selfish or malevolent ways. The staff has 10 charges, regaining 1d6+4 charges at dawn. If I use the last charge, roll a d20. On a 1, it's destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges). The Mage Armor is a translucent reddish-purple arcane armor with mycelial threads woven around the waist and the shield appears as a mushroom's red cap.",
		descriptionFull : "This staff's shaft is blacked and rotted with several fungi grown around it ending with a red colored clathrus archeri at its tip. When its user casts a mage armor with this staff, a translucent reddish purple colored arcane armor wraps their body with mycelial threads woven around the waist. If a shield is casted with this staff, it takes the form of a mushroom's red cap."+
		"\n   " + toUni("Wicked") + ". Whenever the wearer of this armor is presented with an opportunity to do evil, they hear the soft whisper of a lady in an unknown language which numbs their moral, drives them a little mad, and soothes their empathy, thereby increasing their urges to commit the act."+
		"\n   This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		"\n   " + toUni("Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
		attunement : true,
		prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		weight : 3,
		limfeaname : "Staff of Defense",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		weaponsAdd : { select : ["Black Root, Staff of Defense"], options : ["Black Root, Staff of Defense"] },
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["mage armor"],
			selection : ["mage armor"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["shield"],
			selection : ["shield"],
			firstCol : 2
		}],
		spellChanges : {
			"shield" : {
				time : "1 a",
				changes : "Cast as an action."
			}
		},
		extraAC : [{name : "Staff of Defense", mod : 1, magic : true, text : "I gain a +1 bonus to AC while holding the Staff of Defense."}],
	},
	"staff of defense (sj-dc-rfjk-2-2)" : {
		name : "Staff of Defense (SJ-DC-RFJK-2-2)",
		source : [["AL", "SJ-DC"]],
		rarity : "rare",
		description : "Pulled from the ruins of the extractor staff assembly, this hollow slender staff is made of sharp jagged obsidian, yet it doesn't cut my hands. While held, I gain +1 AC. The staff has 10 charges and regains 1d6+4 at dawn. 5% chance it's destroyed if last charge used. I can use charges to cast Mage Armor (1 charge) or Shield (2 charges).",
		descriptionLong : "Pulled from the ruins of the extractor staff assembly, this hollow slender staff is made of sharp and jagged obsidian, yet it does not cut my hands. While held, I gain a +1 to AC. It has 10 charges, regaining 1d6+4 expended charges at dawn. If I use the last charge, roll a d20. On a 1, it's destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges).",
		descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		"\n   " + toUni("Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed."+
		"\n   " + toUni("Strange Material") + ". Pulled from the ruins of the extractor staff assembly, this slender, hollow staff is made of sharp and jagged obsidian, yet it does not cut your hands when you hold it. It weighs 3 pounds.",
		attunement : true,
		prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		weight : 3,
		limfeaname : "Staff of Defense",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		weaponsAdd : { select : ["Staff of Defense"], options : ["Staff of Defense"] },
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["mage armor"],
			selection : ["mage armor"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["shield"],
			selection : ["shield"],
			firstCol : 2
		}],
		spellChanges : {
			"shield" : {
				time : "1 a",
				changes : "Cast as an action."
			}
		},
		extraAC : [{name : "Staff of Defense", mod : 1, magic : true, text : "I gain a +1 bonus to AC while holding the Staff of Defense."}],
	},
	"staff of defense (sj-dc-tel-2)" : {
		name : "Staff of Defense (SJ-DC-TEL-2)",
		source : [["AL", "SJ-DC"]],
		rarity : "rare",
		description : "This slender hollow staff is made of glass but as strong as oak. It periodically alters its appearance in minor uncontrollable ways and gives +1 AC while held. The staff has 10 charges, 1d6+4 regained at dawn. The charges can cast Mage Armor (1 charge) or Shield (2 charges). 5% chance it's destroyed if last charge used (1 on d20).",
		descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		"\n   " + toUni("Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed."+
		"\n   " + toUni("Metamorphic") + ". The item periodically alters its appearance in slight ways. You have no control over these minor alterations, which have no effect on the item's use.",
		attunement : true,
		prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		weight : 3,
		limfeaname : "Staff of Defense",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		weaponsAdd : { select : ["Staff of Defense"], options : ["Staff of Defense"] },
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["mage armor"],
			selection : ["mage armor"],
			firstCol : 1
		}, {
			name : "2 charges",
			spells : ["shield"],
			selection : ["shield"],
			firstCol : 2
		}],
		spellChanges : {
			"shield" : {
				time : "1 a",
				changes : "Cast as an action."
			}
		},
		extraAC : [{name : "Staff of Defense", mod : 1, magic : true, text : "I gain a +1 bonus to AC while holding the Staff of Defense."}],
	},
	"staff of fate (bmg-moon-md-10)" : {
		name : "Staff of Fate (BMG-MOON-MD-10)",
		source : [["AL","PO"]],
		rarity : "very rare",
		attunement : true,
		description : "This +3 quarterstaff was grown over with elm, hiding its true nature as a walking stick. The blue crystals seen through the knots and at the end hint at mystical power. The staff has 6 charges. As bonus action, use 1 charge to give myself or visible creature a d4 for a d20 Test or dmg roll before my next turn. If I use last charge, roll a d20. 10+, it regains 1d6 charges. 9 or less, it becomes nonmagical.",
		descriptionLong : "This +3 quarterstaff was intricately grown over with elm wood, concealing its true nature and masquerading as a walking stick. The blue crystals peeking through the wood's knots and at its end hint at mystical power. The staff has 6 charges. As a bonus action, I can use 1 charge to give myself or a visible creature a d4 to add to a d20 Test or damage roll before my next turn. If I use its last charge, I roll a d20. On a 10+ it regains 1d6 charges. On a 9 or less, it becomes nonmagical.",
		descriptionFull : "This staff of fate has been intricately grown over with elm wood, concealing its true nature and cleverly masquerading it as a walking stick. Yet, the allure of blue crystals peeking through the wood's knots and at its end hints at its mystical power."+
		"\n   This transparent crystal staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it."+
		"\n   " + toUni("Altered Outcome") + ". The staff has 6 charges. As a bonus action, you can expend 1 of the staff's charges to give yourself or one other creature that you can see a d4. The recipient can roll this d4 and add the number rolled to one ability check, attack roll, damage roll, or saving throw it makes before the start of your next turn. If this extra die is not used before then, it is lost."+
		"\n   If you expend the staff's last charge, roll a d20. On a roll of 9 or lower, the staff becomes a nonmagical quarterstaff that breaks the first time it scores a hit and deals damage. On a roll of 10 or higher, the staff regains 1d6 of its expended charges.",
		weight : 4,
		extraLimitedFeatures : [{
			name : "Staff of Fate (Alter Outcome)",
			usages : 6,
			recovery : "Special"
		}],
		action : [["bonus action", "Staff of Fate"]],
		weaponOptions : [{
			baseWeapon : "quarterstaff",
			regExpSearch : /\bstaff of fate\b/i,
			name : "Staff of Fate",
			source : [["AL","PO"]],
			modifiers : [3, 3],
			selectNow : true
		}]
	},
	"staff of flowers (ccc-kumori-3-1)" : {
		name : "Staff of Flowers (CCC-KUMORI-3-1)",
		source : [["AL","CCC"]],
		rarity : "common",
		description : "This uncarved branch of a weir tree has silver-brown leaves with velvet-black undersides sprouting from the top. It glows faintly blue in magically-lit areas & for 10 min after leaving. The staff has 10 charges, 1d6+4 regained at dawn; 5% chance destroyed if use last charge. As Magic action, 1 charge makes a flower sprout from staff or soil in 5 ft. It's nonmagical & grows or withers normally.",
		descriptionLong : "This uncarved branch of a weir tree has silver-brown leaves with velvet-black undersides sprouting from the top. It glows faintly blue in magically-lit areas & continues for 10 min after leaving. The staff has 10 charges, 1d6+4 regained at dawn; 5% chance destroyed when last charge used. As Magic action, use 1 charge to make chosen flower sprout from staff or soil in 5 ft. The flower is nonmagical & grows or withers normally.",
		descriptionFull : "The natural, uncarved branch of a weir tree makes up the entirety of this staff. New growth sprouts from the head of the staff, silver-brown leaves with velvet-black undersides. The staff glows faintly blue when inside a magically-lit area; after leaving the area, the staff's illumination continues for ten minutes but is not bright enough to light an area.\n   This wooden staff has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of yourself, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would." + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff turns into flower petals and is lost forever.",
		weight : 4,
		limfeaname : "Staff of Flowers",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]]
	},
	"staff of frost (ddal0-11e)" : {
		name : "Staff of Frost (DDAL0-11E)",
		source : [["AL","S0"]],
		rarity : "very rare",
		description : "This staff is covered in carvings of Infernals reading tomes. If placed on an open book, a deep inhuman voice reads the text aloud. While held, I resist Cold. The staff has 10 charges, 1d6+4 regained at dawn. If last charge used, 5% chance it melts away. I can cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) with my spell ability.",
		descriptionLong : "This staff is covered in carvings of infernals reading tomes. If placed on an open book, it reads aloud in a deep inhuman voice, using the book's language. While held, I have resistance to Cold. The staff has 10 charges, 1d6+4 regained at dawn. If last charge used, 5% chance it melts away. I can cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) using my spellcasting ability.",
		descriptionFull : "This staff is covered in carvings of infernals reading various tomes. If placed atop an open book, the staff reads the book aloud with a deep, inhuman voice, using the language the book is written in.\n   You have Resistance to Cold damage while you hold this staff.\n   The staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.",
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
	"staff of frost (ddal-drw5)" : {
		name : "Staff of Frost (DDAL-DRW5)",
		source : [["AL","DRW"]],
		rarity : "very rare",
		description : "This staff is made of ice as hard as steel with a frozen skull perched at the head of it. While held, I have resistance to Cold. The staff has 10 charges, 1d6+4 regained at dawn. If last charge used, 5% chance it melts away. I can cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) using my spellcasting ability.",
		descriptionFull : "This staff is made of ice as hard as steel with a frozen skull perched at the head of it.\n   You have Resistance to Cold damage while you hold this staff.\n   The staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.",
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
	"staff of frost (wbw-dc-aeg-2)" : {
		name : "Staff of Frost (WBW-DC-AEG-2)",
		source : [["AL","WBW-DC"]],
		rarity : "very rare",
		description : "This bheur hag's graystaff changes style and color daily. While held, I have resistance to Cold. The staff has 10 charges, 1d6+4 regained at dawn. If last charge used, 5% chance it melts away. I can cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) using my spellcasting ability.",
		descriptionFull : "This staff was formed from bheur hag's graystaff and changes style and color daily.\n   You have Resistance to Cold damage while you hold this staff.\n   The staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.",
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
	"staff of healing: driftwood staff (ccc-des-1-2)" : {
		name : "Driftwood Staff of Healing (DES-1-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		description : "This staff floats on water and other liquids, giving me advantage on Str (Athletic) checks to swim. It has 10 charges, 1d6+4 regained at dawn. I can use charges to cast Cure Wounds (1 per lvl, max 4th), Lesser Restoration (2) and Mass Cure Wounds (5) using my spellcasting ability. If I use the last charge, 5% chance it vanishes (1 on d20).",
		descriptionFull : "This staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spellcasting ability modifier. The table indicates how many charges you must expend to cast the spell: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff vanishes in a flash of light, lost forever.\n   " + toUni("Waterborne") + ". This item floats on water and other liquids. You have advantage on Strength (Athletics) checks to swim.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a bard, cleric, or druid",
		prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid ? true : false; },
		savetxt : { text : ["Adv on Str (Athletics) chks to swim"] },
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
				description : "1 creature heals 2d8+spellcasting ability modifier HP, +2d8 per charge after the 1st (max 4)",
				changes : "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level. Max 4th."
			}
		}
	},
	"staff of healing (ccc-ghc-bk2-8)" : {
		name : "Staff of Healing (CCC-GHC-BK2-8)",
		source : [["AL","CCC"]],
		rarity : "rare",
		description : "This smoky gray staff is made from the hardiest duskwood & intricately carved with white & green lacquered symbols of the goddess Eldath. It has 10 charges, 1d6+4 regained at dawn. Charges can cast Cure Wounds (1/lvl, max 4th), Lesser Restoration (2) & Mass Cure Wounds (5) using my spell ability. If the last charge used, 5% chance it vanishes.",
		descriptionFull : "This smoky gray staff is carved from the hardiest of duskwood trees. It is intricately carved with white and green lacquered symbols, all dedicated to the goddess Eldath.\n   This staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spellcasting ability modifier. The table indicates how many charges you must expend to cast the spell: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff vanishes in a flash of light, lost forever.",
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
				description : "1 creature heals 2d8+spellcasting ability modifier HP, +2d8 per charge after the 1st (max 4)",
				changes : "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level. Max 4th."
			}
		}
	},
	"staff of healing (ccc-qcc2019-3)" : {
		name : "Staff of Healing (CCC-QCC2019-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		description : "This ivory staff has a painted red carving of a coiled snake around its length and 10 charges, regaining 1d6+4 at dawn. I can use charges to cast Cure Wounds (1 per lvl, max 4th), Lesser Restoration (2 charges) and Mass Cure Wounds (5 charges) using my spellcasting ability. If the last charge used, roll 1d20. On a 1, it vanishes.",
		descriptionFull : "This ivory staff has a red painted carving of a coiled snake around its length.\n   This staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spellcasting ability modifier. The table indicates how many charges you must expend to cast the spell: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff vanishes in a flash of light, lost forever.",
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
				description : "1 creature heals 2d8+spellcasting ability modifier HP, +2d8 per charge after the 1st (max 4)",
				changes : "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level. Max 4th."
			}
		}
	},
	"staff of healing (ccc-wyc-2-1)" : {
		name : "Staff of Healing (CCC-WYC-2-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		description : "This golden metal staff is prominently inscribed with the iconography of Amaunator, identifying me as a follower of the Inquisition. It has 10 charges, 1d6+4 regained at dawn. Charges can cast Cure Wounds (1 per lvl, max 4th), Lesser Restoration (2) & Mass Cure Wounds (5) using my spellcasting ability. If the last charge used, 5% chance it vanishes.",
		descriptionFull : "A staff of golden metal prominently inscribed with iconography of Aumunator, this item clearly identifies the wielder as a follower of the Inquisition.\n   This staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spellcasting ability modifier. The table indicates how many charges you must expend to cast the spell: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff vanishes in a flash of light, lost forever.",
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
				description : "1 creature heals 2d8+spellcasting ability modifier HP, +2d8 per charge after the 1st (max 4)",
				changes : "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level. Max 4th."
			}
		}
	},
	"staff of healing (ddep4)" : {
		name : "Staff of Healing (DDEP4)",
		source : [["AL","S4"]],
		rarity : "rare",
		description : "This smooth wood staff is pale and streaked with multicolored veins. A hollow glass sphere holds an illusory symbol of my deity. Luminescent butterflies flit around the top. I feel fortunate and optimistic about the future. The staff has 10 charges, 1d6+4 regained at dawn. Charges cast Cure Wounds (1 per lvl, max 4), Lesser Restoration (2 charges) and Mass Cure Wounds (5 charges) using my spell ability. If I use the last charge, 5% chance it vanishes (1 on a d20).",
		descriptionFull : "The smooth wood of this ordinary-looking staff is pale and streaked with multi-colored veins. The staff is capped with a hollow glass sphere that creates an illusory symbol of whichever deity the wielder worships. Luminescent butterflies flit around the staff's cap and while in possession of the staff, the wielder feels fortunate and optimistic about what the future holds.\n   This staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spellcasting ability modifier. The table indicates how many charges you must expend to cast the spell: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff vanishes in a flash of light, lost forever.",
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
				description : "1 creature heals 2d8+spellcasting ability modifier HP, +2d8 per charge after the 1st (max 4)",
				changes : "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level. Max 4th."
			}
		}
	},
	"staff of the magi (ddal7-17)" : { // contains contributions by Pengsloth
		name : "Staff of the Magi (DDAL7-17)",
		source : [["AL","S7"]],
		rarity : "legendary",
		description : "Hewn from the bedrock of Chult, this mighty stone staff offers tremendous magical power; all it asks is that I honor Ubtao in return. I have adv on saves vs spells, +2 to spell atks & it acts as +2 quarterstaff. It has 50 charges for spells (regain 4d6+2 at dawn). As reaction, absorb spell targeting only me, converting its lvl to charges. If the staff has over 50 charges or I use Magic action, it breaks. 50% I go to random plane or take 16\xD7charges Force. All others in 30-ft take 6\xD7charges (DC 17 Dex for half).",
		descriptionLong : "Hewn from the bedrock of Chult itself, this mighty stone staff offers tremendous magical power, and all it asks is that I honor Ubtao in the process. While held, I have +2 to spell attacks, adv on saving throws vs spells, and it can be used as a +2 quarterstaff. The staff has 50 charges (regain 4d6+2 at dawn) to cast spells. When the last charge is used, it has a 5% chance to regain 1d12+1 charges. I can use a reaction to absorb a spell targeting only me, converting its spell level to charges. If that brings the staff over 50 charges or I use a Magic action to break it, it explodes. There's a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in Force damage. All others in 30 ft take 6\xD7; DC 17 Dex save halves.",
		descriptionFull : "Hewn from the bedrock of Chult itself, this mighty stone staff offers tremendous magical power - and all it asks is that you honor Ubtao in the process.\n   This staff has 50 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n" + toUni("Spell Absorption") + ". While holding the staff, you have Advantage on saving throws against spells. In addition, you can take a Reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its Retributive Strike (see below).\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Arcane Lock (0 charges), Conjure Elemental (7 charges), Detect Magic (0 charges), Dispel Magic (3 charges), Enlarge/Reduce (0 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Light (0 charges), Lightning Bolt (7th-level version, 7 charges), Mage Hand (0 charges), Passwall (5 charges), Plane Shift (7 charges), Protection from Evil and Good (0 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n   " + toUni("Regaining Charges") + "The staff regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 20, the staff regains 1d12 + 1 charges.\n   " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 \xD7 the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 6 \xD7 the number of charges in the staff. On a successful save, a creature takes half as much damage.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
		prereqeval : function (v) {
			return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false;
		},
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*magi).*$/i,
			name : "Staff of the Magi",
			modifiers : [2, 2],
			selectNow : true,
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
				description : "100-ft long 5-ft wide all 12d6 Lightning dmg; save halves",
				changes : "Cast as if using a 7th-level spell slot."
			},
		}
	},
	"staff of power (ddal5-19)" : {
		name : "Staff of Power (DDAL5-19)",
		source : [["AL","S5"]],
		rarity : "very rare",
		description : "This great ashen +2 quarterstaff is etched with swirling air & clouds & resizes to fit my hand. I gain +2 to saves, AC and spell attacks. It has 20 charges for spells, 2d8+4 regained at dawn. 5% chance becomes +2 staff if last charge used. 5% regains 1d8+2 charges. Magic action to break staff. I go to random plane or take 16\xD7charges Force (50%). All others in 30-ft take 4\xD7charges (DC 17 Dex for half).",
		descriptionLong : "This great ashen staff is etched with designs of swirling air and clouds. It resizes to fit the hand of any who carry it and can be used as a +2 quarterstaff. While held, I gain a +2 bonus to saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells. As Magic action, I can break it for a 30-ft explosion. When I do, there's a 50% chance I teleport to a random plane. If not I take 16\xD7 the charges left in Force damage. All others in area take 4\xD7 charges; DC 17 Dex save halves the damage.",
		descriptionFull : "This great ashen staff is etched with many designs of swirling air and clouds. The staff magically resizes to fit the hand of any who carry it.\n   This staff has 20 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff retains its +2 bonus to attack rolls and damage rolls but loses all other properties. On a 20, the staff regains 1d8 + 2 charges.\n   " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 times the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 4 times the number of charges in the staff. On a successful save, a creature takes half as much damage.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Power",
		usages : 20,
		recovery : "dawn",
		additional : "regains 2d8+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
			name : "Staff of Power",
			description : "Versatile (1d8), topple",
			modifiers : [2, 2],
			selectNow : true,
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
				description : "20-ft rad all crea 10d6 Fire; save halves; unattended flammable objects ignite",
				changes : "Cast as if using a 5th-level spell slot."
			},
			"lightning bolt" : {
				nameShort : "Lightning Bolt (5th level)",
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of power (ddep4)" : {
		name : "Staff of Power (DDEP4)",
		source : [["AL","S4"]],
		rarity : "very rare",
		description : "This +2 staff is a single piece of purple wood & topped with a clenched mithral claw. It holds a green dragon scale engraved with “Oblivion” in Elvish, which glows pale green & emits wisps of choking caustic mist. I learn Draconic & get +2 to saves, AC & spell atks. It has 20 charges for spells, 2d8+4 regained at dawn. 5% to become +2 staff if use last charge. 5% regain 1d8+2 charges. Magic action to break. 50% I go to random plane or take 16\xD7charges Force. Others in 30-ft take 4\xD7charges (DC 17 Dex to half).",
		descriptionLong : "This +2 staff is carved from a single piece of purple wood & topped with a clenched mithral claw. It clutches a green dragon scale engraved with the elven word for “Oblivion”. The rune glows with a pale green light & emits wisps of choking, caustic mist. I'm fluent in Draconic. While held, I gain a +2 bonus to saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells. As Magic action, I can break it for a 30-ft explosion. When I do, there's a 50% chance I teleport to a random plane. If not I take 16\xD7 the charges left in Force damage. All others in area take 4\xD7; DC 17 Dex save halves.",
		descriptionFull : "This staff is carved from a single piece of an unusual purple wood and topped with a clenched, mithral claw. The claw clutches a green dragon scale the size of a small plate that's engraved with the elven word for “Oblivion”. The rune glows with a pale green light and emits wisps of choking, caustic mist. Whoever is attuned to the staff is able to speak, read,and write Draconic.\n   This staff has 20 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff retains its +2 bonus to attack rolls and damage rolls but loses all other properties. On a 20, the staff regains 1d8 + 2 charges.\n   " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 times the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 4 times the number of charges in the staff. On a successful save, a creature takes half as much damage.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Power",
		usages : 20,
		recovery : "dawn",
		additional : "regains 2d8+4",
		languageProfs : ["Draconic"],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
			name : "Staff of Power",
			description : "Versatile (1d8), topple",
			modifiers : [2, 2],
			selectNow : true,
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
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of power: tongkat nenek kebayan (wbw-dc-dmmc-1)" : {
		name : "Tongkat Nenek Kebayan (Staff of Power)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This gnarled +2 meranti staff is longer than a normal walking stick & ends in a knot that fits my palm. I get +2 on saves, AC & spell atks. It has 20 charges for spells, 2d8+4 regained at dawn 5% chance to become normal +2 staff if last charge used. 5% to regain 1d8+2 charges. Magic action to break staff for 30-ft explosion. 50% I go to random plane or take 16\xD7 charges Force. Others take 4\xD7 charges (DC 17 Dex to half).",
		descriptionLong : "This gnarled +2 meranti staff is slightly longer than a regular walking stick & ends in a knot that fits in the palm of my hand. It works as a +2 quarterstaff and while held, I gain a +2 bonus to saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells. As Magic action, I can break it for a 30-ft explosion. When I do, there's a 50% chance I teleport to a random plane. If not I take 16\xD7 the charges left in Force damage. All others in area take 4\xD7 charges; DC 17 Dex save halves the damage.",
		descriptionFull : "This is a gnarled staff made of meranti. It is slightly longer than a regular walking stick and the top ends in a knot that fits nicely in the palm of one's hand. Whenever you wield the staff, you sense that ancient spirits are watching you. [GFP Item]\n   This staff has 20 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff retains its +2 bonus to attack rolls and damage rolls but loses all other properties. On a 20, the staff regains 1d8 + 2 charges.\n   " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 times the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 4 times the number of charges in the staff. On a successful save, a creature takes half as much damage.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Power",
		usages : 20,
		recovery : "dawn",
		additional : "regains 2d8+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
			name : "Staff of Power",
			description : "Versatile (1d8), topple",
			modifiers : [2, 2],
			selectNow : true,
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
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of power: oblivia (wbw-dc-php-orng-2)" : {
		name : "Oblivia, Staff of Power (PHP-ORNG-2)",
		source : [["AL","WBW-DC"]],
		rarity : "very rare",
		description : "This ominous +2 staff heightens my urge to act selfish & malevolently. Fraz Urb'loo used it to cause chaos in the domain of Fidestia. The archmage Fa'rah trusts me with the staff; he doesn't want it near his lands. I get +2 to saves, AC & spell atks. It has 20 charges, 2d8+4 regained at dawn. 5% to become +2 staff if use last charge. 5% regain 1d8+2 charges. Magic action to break for 30-ft explosion. 50% to random plane or take 16\xD7 charges Force. Others take 4\xD7 charges (DC 17 Dex to half).",
		descriptionLong : "This +2 staff heightens my urge to act selfish and malevolent when given the chance. It was held by Fraz Urb'loo when he was causing chaos in the fey domain of Fidestia. The archmage Fa'rah trusts me to bear this ominous weapon as he doesn't want it near his domain. While held, I gain a +2 bonus to saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells. As Magic action, I can break it for a 30-ft explosion. When I do, there's a 50% chance I teleport to a random plane. If not I take 16\xD7 the charges left in Force damage. All others in area take 4\xD7; DC 17 Dex save halves.",
		descriptionFull : "This item was held by fraz urb'loo when he was causing chaos in the fey domain called Fidestia. The archmage Fa'rah trusts you enough to hold on to this ominous weapon as he does not want it near his domain. [GFP Item]\n   " + toUni("Wicked") + ". It heightens my urge to act in selfish or malevolent ways when given the chance.\n   This staff has 20 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff retains its +2 bonus to attack rolls and damage rolls but loses all other properties. On a 20, the staff regains 1d8 + 2 charges.\n   " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 times the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 4 times the number of charges in the staff. On a successful save, a creature takes half as much damage.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Power",
		usages : 20,
		recovery : "dawn",
		additional : "regains 2d8+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
			name : "Staff of Power",
			description : "Versatile (1d8), topple",
			modifiers : [2, 2],
			selectNow : true,
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
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of the python (ccc-bmg-moon7-1)" : {
		name : "Staff of the Python (CCC-BMG-MOON7-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		description : "This crooked blackened 6-ft staff was made from the branch of a Dark Treant & hums with power. It oozes a black tar-like venom at twilight. As Magic action, I can throw the staff within 10 ft to turn it into a Giant Constrictor Snake with full HP that acts after me. I can command it mentally on my turn if in 60 ft. Bonus action to revert it to a staff. If the snake reaches 0 HP, the staff is destroyed.",
		descriptionLong : "This blackened crooked 6-foot staff was made from the branch of a Dark Treant that hummed with power. It oozes a black tar-like venom at twilight. As Magic action, I can throw it on the ground within 10 ft where it becomes a Giant Constrictor Snake. As a bonus action, I can revert the snake to a staff. On my turn I can mentally command the snake if within 60 ft and not Incapacitated, deciding what it does on its next turn or giving it a more general command. It acts directly after me. If the snake is reduced to 0 HP, it reverts to a staff and is destroyed. Otherwise, the snake always starts out with full HP.",
		descriptionFull : "One of the branches of the Dark Treant was humming with power. It can be broken off and functions as a staff of the python. It is a blackened crooked 6-foot-long staff that oozes a black tar-like venom at twilight.\n   As a Magic action, you can throw this staff so that it lands in an unoccupied space within 10 feet of you, causing the staff to become a Giant Constrictor Snake in that space. The snake is under your control and shares your Initiative count, taking its turn immediately after yours.\n   On your turn, you can mentally command the snake (no action required) if it is within 60 feet of you and you don't have the Incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location. Absent commands from you, the snake defends itself.\n   As a Bonus Action, you can command the snake to revert to staff form in its current space, and you can't use the staff's property again for 1 hour. If the snake is reduced to 0 Hit Points, it dies and reverts to its staff form; the staff then shatters and is destroyed. If the snake reverts to staff form before losing all its Hit Points, it regains all of them.",
		attunement : true,
		weight : 4,
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of the python: earth tender's branch (ccc-bmg-moon8-2)" : {
		name : "Earth Tender's Branch (Staff of the Python)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		description : "This gnarled staff is carved from a cypress tree and bears numerous small holes in the wood. As Magic action, I can throw the staff in 10 ft to turn it into a Giant Constrictor Snake with full HP that acts after me. I can command it mentally on my turn if in 60 ft. Bonus action to revert it to a staff. If the snake reaches 0 HP, the staff is destroyed.",
		descriptionLong : "This gnarled staff is carved from the wood of a cypress tree and bears numerous small holes in the wood. As Magic action, I can throw it on the ground within 10 ft where it becomes a Giant Constrictor Snake. As a bonus action, I can revert the snake to a staff. On my turn I can mentally command the snake if within 60 ft and not Incapacitated, deciding what it does on its next turn or a more general command. It acts directly after me. If the snake is reduced to 0 HP, it reverts to a staff and is destroyed. Otherwise, the snake always starts out with full HP.",
		descriptionFull : "This gnarled staff is carved from the wood of a cypress tree and bears numerous small holes in the wood.\n   As a Magic action, you can throw this staff so that it lands in an unoccupied space within 10 feet of you, causing the staff to become a Giant Constrictor Snake in that space. The snake is under your control and shares your Initiative count, taking its turn immediately after yours.\n   On your turn, you can mentally command the snake (no action required) if it is within 60 feet of you and you don't have the Incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location. Absent commands from you, the snake defends itself.\n   As a Bonus Action, you can command the snake to revert to staff form in its current space, and you can't use the staff's property again for 1 hour. If the snake is reduced to 0 Hit Points, it dies and reverts to its staff form; the staff then shatters and is destroyed. If the snake reverts to staff form before losing all its Hit Points, it regains all of them.",
		attunement : true,
		weight : 4,
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of the python: bulkawa's benevolence (ccc-gsp2-2)" : {
		name : "Bulkawa's Benevolence (Staff of the Python)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		description : "This narra-wood staff has a copper snake-shaped head. It's a symbol that I will never face life's challenges alone. As Magic action, throw the staff in 10 ft to turn it into a Giant Constrictor Snake with full HP that acts after me. I can command it mentally on my turn if in 60 ft. Bulkawa, the summoned snake, has copper scales, glowing blue eyes, & a black tattoo of a 5-leaf clover near its tail. Bonus action to revert to a staff. If Bulkawa reaches 0 HP, the staff is destroyed.",
		descriptionLong : "The body of this staff is made from a narra tree. The curved head is copper and shaped like a snake. The staff is a symbol of Bulkawa's kindness; with it I will never face life's challenges alone. As a Magic action, I can throw the staff on the ground in 10 ft where it becomes a Giant Constrictor Snake. Bulkawa, the summoned snake, has copper scales, glowing blue eyes, and a black tattoo of a 5-leaf clover near its tail. As a bonus action, I can revert the snake to a staff. On my turn I can mentally command her if within 60 ft and not Incapacitated, giving a specific or general command. She acts directly after me. If the snake is reduced to 0 HP, it reverts to a staff and is destroyed. Otherwise, Bulkawa always starts out with full HP.",
		descriptionFull : "The body of this staff is made of wood from a narra tree. The curved head is shaped like a snake made out of copper. The staff is a symbol of Bulkawa's kindness and its effort to make sure that you will never face the challenges life throws at you alone. Bulkawa, the giant constrictor snake summoned, has copper scales and eyes filled with blue light. A black tattoo of a five-leaf clover can be seen near its tail.\n   As a Magic action, you can throw this staff so that it lands in an unoccupied space within 10 feet of you, causing the staff to become a Giant Constrictor Snake in that space. The snake is under your control and shares your Initiative count, taking its turn immediately after yours.\n   On your turn, you can mentally command the snake (no action required) if it is within 60 feet of you and you don't have the Incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location. Absent commands from you, the snake defends itself.\n   As a Bonus Action, you can command the snake to revert to staff form in its current space, and you can't use the staff's property again for 1 hour. If the snake is reduced to 0 Hit Points, it dies and reverts to its staff form; the staff then shatters and is destroyed. If the snake reverts to staff form before losing all its Hit Points, it regains all of them.",
		attunement : true,
		weight : 4,
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of the python (fr-dc-ghg-4)" : {
		name : "Staff of the Python (FR-DC-GHG-4)",
		source : [["AL","FR-DC"]],
		rarity : "uncommon",
		description : "This staff is a skeletal snake with a bird's beak. It whispers with discordant voices, urging me to horde secrets and act in malevolent and selfish ways if given the chance. As a Magic action, throw staff in 10 ft to turn it into a Giant Constrictor Snake with full HP that acts after me. I can command it mentally on my turn if in 60 ft. Bonus action to revert to a staff. If snake reaches 0 HP, staff is destroyed.",
		descriptionLong : "This staff looks like a skeletal snake with a bird's beak. It whispers in my mind with a discordant collection of voices, urging me to horde secrets and act in malevolent and selfish ways when given the chance. As a Magic action, I can throw the staff on the ground in 10 ft where it becomes a Giant Constrictor Snake. As a bonus action, it reverts to a staff. I can mentally command the snake on my turn if within 60 ft and I'm not Incapacitated, deciding what it does on its next turn or a more general command. It acts directly after me. If the snake is reduced to 0 HP, it reverts to a staff and is destroyed. Otherwise, the snake always starts out with full HP.",
		descriptionFull : "This staff resembles a skeletal snake with a bird's beak. It whispers in the mind of the holder in a discordant collection of voices, urging them to horde secrets.\n   " + toUni("Wicked") + ". When the bearer is presented with an opportunity to act in a selfish or malevolent way, the item heightens the bearer's urge to do so.\n   As a Magic action, you can throw this staff so that it lands in an unoccupied space within 10 feet of you, causing the staff to become a Giant Constrictor Snake in that space. The snake is under your control and shares your Initiative count, taking its turn immediately after yours.\n   On your turn, you can mentally command the snake (no action required) if it is within 60 feet of you and you don't have the Incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location. Absent commands from you, the snake defends itself.\n   As a Bonus Action, you can command the snake to revert to staff form in its current space, and you can't use the staff's property again for 1 hour. If the snake is reduced to 0 Hit Points, it dies and reverts to its staff form; the staff then shatters and is destroyed. If the snake reverts to staff form before losing all its Hit Points, it regains all of them.",
		attunement : true,
		weight : 4,
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of the python: blackztaff (fr-dc-waterdeep-kyz)" : {
		name : "Blackztaff of the Python (WATERDEEP-KYZ)",
		source : [["AL","FR-DC"]],
		rarity : "uncommon",
		description : "The gilded inlay of a flying snake extends over this handsome black staff. As Magic action, I can say “Ffanksss” and throw staff in 10 ft. It turns into bright green giant constrictor snake with a scale pattern that resembles wings and full HP. It acts after me and I can command it mentally on my turn if in 60 ft. Bonus action to revert to a staff. If snake reaches 0 HP, reverts and permanently dead unless raised (if DM allows). If Awaken is cast on the snake, the staff is destroyed.",
		descriptionLong : "The gilded inlay of a flying snake extends over the length of this handsome black staff. As Magic action, say “Ffanksss” and throw it on the ground in 10 ft where it becomes a bright green Giant Constrictor Snake with a scale pattern across its back that resembles wings. As a bonus action, I can revert the snake to its staff form. On my turn I can mentally command the snake if within 60 ft and not Incapacitated, giving specific or more general commands. It acts directly after me. If the snake is reduced to 0 HP, it reverts to its staff form and is dead when activated again (unless raised at DM discretion). Otherwise, the snake always starts out with full HP. This staff can only be broken by the casting of an Awaken spell on its snake form.",
		descriptionFull : "The gilded inlay of a flying snake extends over the length of this handsome black staff. When activated with the command word “Ffanksss”, the staff transforms into a bright green snake with a scale pattern across its back that resembles wings. (This staff can only be broken by the casting of an awaken spell on its snake form. Otherwise, the staff will never shatter or break.)\n   " + toUni("Unbreakable") + ". The item can't be broken. Special means must be used to destroy it.\n   As a Magic action, you can throw this staff so that it lands in an unoccupied space within 10 feet of you, causing the staff to become a Giant Constrictor Snake in that space. The snake is under your control and shares your Initiative count, taking its turn immediately after yours.\n   On your turn, you can mentally command the snake (no action required) if it is within 60 feet of you and you don't have the Incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location. Absent commands from you, the snake defends itself.\n   As a Bonus Action, you can command the snake to revert to staff form in its current space, and you can't use the staff's property again for 1 hour. If the snake is reduced to 0 Hit Points, it dies and reverts to its staff form; the staff then shatters and is destroyed. If the snake reverts to staff form before losing all its Hit Points, it regains all of them.\n   Due to the item's minor property, the staff does not break or shatter even if the snake dies and reverts to staff form. However, if the snake is reduced to 0 hit points before it reverts to its staff form, the next activation of the staff's command word simply turns the staff back into a dead giant constrictor snake with 0 hit points. It is left to a DM's discretion if they will allow a revivify, raise dead or resurrection spell to affect the creature. (Within Waterdeep, there are spellcasting services available for the prices listed within the D&D Adventurers League DM's Guide.)",
		attunement : true,
		weight : 4,
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of striking (ccc-tri-14 yul1-3)" : {
		name : "Staff of Striking (CCC-TRI-14 YUL1-3)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		description : "This smooth brass +3 quarterstaff gives a slight electric shock at first. While held, my arm hair permanently stands on end, along with a tingling sensation. The staff has 10 charges, 1d6+4 regained at dawn. When it hits, I can use 1-3 charges for +1d6 Force per charge. 5% chance to become nonmagical if last charged used.",
		descriptionFull : "This brass staff is smooth to the touch, giving a slight electric shock at first. While holding the staff, the wielder's arm hair permanently stands on end, along with a tingling sensation.\n   This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage.\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
		attunement : true,
		weight : 4,
		limfeaname : "Staff of Striking",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*striking).*$/i,
			name : "Staff of Striking",
			modifiers : [3, 3],
			description : "Versatile (1d8), topple; 1-3 charges for +1d6 Force per charge",
			selectNow : true,
		}
	},
	"staff of striking (ddal7-12)" : {
		name : "Staff of Striking (DDAL7-12)",
		source : [["AL","S7"]],
		rarity : "very rare",
		description : "This +3 quarterstaff looks wholly unexceptional. The wood haft is gnarled & irregular, with a frayed & cracked strip of leather wrapped around its midpoint. When spun rapidly, it creates a buzzing drone audible in 100 ft that turns into a sonorous chanted prayer to Ubtao. The staff has 10 charges, 1d6+4 regained at dawn. When it hits, I can use 1-3 charges for +1d6 Force per charge. 5% chance to become nonmagical if last charged used.",
		descriptionLong : "This staff appears wholly unexceptional but can be wielded as a magic quarterstaff that grants +3 to attack and damage rolls. The wood haft is gnarled and irregular, and the thin strip of leather wrapped around its midpoint is frayed and cracked. When rapidly spun, the staff creates a buzzing drone audible in 100 feet. If spun for more than a few moments, the drone turns into a sonorous chanted prayer to Ubtao. The staff has 10 charges. When it hits, I can spend up to 3 charges. For each charge, the target takes +1d6 Force. The staff regains 1d6+4 charges daily at dawn. If I use the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
		descriptionFull : "This staff appears wholly unexceptional. The wood haft is gnarled and irregular, and the thin strip of leather wrapped around its midpoint is frayed and cracked. When rapidly spun in the hands of a skilled user, the staff creates a buzzing drone audible to all within 100 feet. If spun for more than a few moments, the drone turns into a sonorous, chanted prayer to Ubtao.\n   This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage.\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
		attunement : true,
		weight : 4,
		limfeaname : "Staff of Striking",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*striking).*$/i,
			name : "Staff of Striking",
			modifiers : [3, 3],
			description : "Versatile (1d8), topple; 1-3 charges for +1d6 Force per charge",
			selectNow : true,
		}
	},
	"staff of striking (ddal10-10)" : {
		name : "Staff of Striking (DDAL10-10)",
		source : [["AL","S10"]],
		rarity : "very rare",
		description : "This +3 quarterstaff is made of a single piece of unmelting, dark green ice. A dark shape writhes within; its exact form can't be discerned. The staff has 10 charges, with 1d6+4 regained at dawn. When it hits, I can use 1-3 charges for +1d6 Force damage per charge. 5% chance to become nonmagical if last charged used.",
		descriptionFull : "This staff is made of a single piece of unmelting, darkgreen ice. While its exact form can't be discerned, a dark shape running the length of the staff writhes within.\n   This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage.\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
		attunement : true,
		weight : 4,
		limfeaname : "Staff of Striking",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*striking).*$/i,
			name : "Staff of Striking",
			modifiers : [3, 3],
			description : "Versatile (1d8), topple; 1-3 charges for +1d6 Force per charge",
			selectNow : true,
		}
	},
	"staff of striking: moon dance (sj-dc-pandora-jwei-1)" : {
		name : "Staff of Moon Dance (Striking, PANDORA-JWEI-1)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		description : "The tip of this +3 quarterstaff is shaped like a crescent moon. As bonus action, a full moon appears in the crescent, emitting 10-ft bright light & 10-ft more dim, or stops. The staff has 10 charges, 1d6+4 regained at dawn. On a hit, use 1-3 charges for +1d6 Force per charge as the crescent glows & moonlight bursts forth. 5% chance to turn nonmagical if last charged used. Dancing a ritual to Selune with the staff makes a piece of my memory play in the viewers' minds.",
		descriptionLong : "The tip of this magic quarterstaff curves in an arc like a crescent moon. In times of darkness, I can use a bonus action to make a full moon appear in the crescent, shedding bright light in a 10-ft-radius and dim light for another 10-ft, or stop. The staff gives a +3 bonus to attack and damage rolls and has 10 charges. When it hits with a melee attack, I can use up to 3 charges. For each charge, the target takes +1d6 Force. When I use a charge, the crescent glows and an illumination of moonlight bursts forth. The staff regains 1d6+4 charges at dawn. If I use the last charge, roll a d20. On a 1, the staff becomes nonmagical. When dancing a ritual dedicated to Selune with this staff, a piece of my memory plays out in the viewers' minds.",
		descriptionFull : "The tip of the staff curves in an arc resembling that of a crescent moon.\n   " + toUni("Beacon") + ". In times of darkness, you can use a Bonus Action to cause a mini full moon to appear within the crescent which shed Bright Light in a 10-foot-radius and Dim Light for an additional 10-foot-radius, or to extinguish the light.\n   Upon a successful hit and expending at least 1 of its charges, the crescent glows radiantly before an illumination of moonlight bursts forth.\n   When dancing a ritual dedicated to Selune with this staff, whether it be attuned or not to the wielder, a piece of their memory begins playing out in the mind of the viewers, but this function does not provide any mechanical benefit as it is only for story and flavor purposes.\n   This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage.\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
		attunement : true,
		weight : 4,
		limfeaname : "Staff of Striking",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["bonus action", " (light/dim)"]],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*moon)(?=.*dance).*$/i,
			name : "Moon Dance, Staff of Striking",
			modifiers : [3, 3],
			description : "Versatile (1d8), topple; 1-3 charges for +1d6 Force per charge",
			selectNow : true,
		}
	},
	"staff of striking: dragon's glory (sj-dc-rotu-5)" : {
		name : "Dragon's Glory, Staff of Striking (ROTU-5)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		description : "This +3 quarterstaff has the carving of an amethyst dragon's head at the tip. When an Aberration is in 120 ft, the dragon's eyes flare purple. The staff has 10 charges, 1d6+4 regained at dawn. When it hits, I can use 1-3 charges for +1d6 Force damage per charge. 5% chance to become nonmagical if last charged used.",
		descriptionFull : "This staff bears the carving of an amethyst dragon's head at the tip. Whenever an aberration comes within 120 feet of it, the dragon's eyes flares purple (Sentinel).\n   This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage.\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
		attunement : true,
		weight : 4,
		limfeaname : "Staff of Striking",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*dragon|dragon's)(?=.*glory).*$/i,
			name : "Dragon's Glory, Staff of Striking",
			modifiers : [3, 3],
			description : "Versatile (1d8), topple; 1-3 charges for +1d6 Force per charge",
			selectNow : true,
		}
	},
	"staff of striking: orcus wand splinter (sj-dc-triden-mw3)" : {
		name : "Orcus Wand Splinter (Striking, TRIDEN-MW3)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		description : "This splinter of bone broke off the Wand of Orcus during the clash on the Airship Carrier Medusa. It radiates overwhelming energy & clings to whoever touches it, allowing attunement in 1 min. The splinter is a +3 quarterstaff with 10 charges, 1d6+4 regained at dawn. When it hits, I can use 1-3 charges for +1d6 Force per charge. 5% chance to turn nonmagical if last charged used.",
		descriptionFull : "This staff is a large splinter of bone from the Wand of Orcus that broke off during the clash aboard the Airship Carrier Medusa. It radiates with overwhelming energy and clings to whomever touches it, shortening the time it takes to attune to it.\n   " + toUni("Harmonious") + ". Attuning to this item takes only 1 minute.\n   This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage.\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
		attunement : true,
		weight : 4,
		limfeaname : "Staff of Striking",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*orcus)(?=.*wand)(?=.*splinter).*$/i,
			name : "Orcus Wand Splinter, Staff of Striking",
			modifiers : [3, 3],
			description : "Versatile (1d8), topple; 1-3 charges for +1d6 Force per charge",
			selectNow : true,
		}
	},
	"staff of swarming insects (ddex3-3)" : {
		name : "Staff of Swarming Insects (DDEX3-3)",
		source : [["AL","S3"]],
		rarity : "rare",
		description : "This staff is made of finely-polished white wood. It has 10 charges, with 1d6+4 regained at dawn. I can use charges cast spells or spend 1 charge to create 30-ft radius of spiders with gossamer wings around me for 10 min. The area is heavily obscured for all others and dispersed by strong wind. 5% chance destroyed if last charge used.",
		descriptionFull : "This staff is made of finely-polished white wood and the insects summoned by the staff take the form of winged spiders with gossamer wings.\n   This staff has 10 charges.\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.",
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
	"staff of swarming insects: mildy's (wbw-dc-des-1-7)" : {
		name : "Mildy's Staff of Swarming Insects (DES-1-7)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This ebon branch from the Gulthias Tree leaks crimson sap. The staff is unholy, a legacy of its crafting, and evil plants view me favorably. Mildy can summon all such staves as an action if they're on the same plane. It has 10 charges, 1d6+4 regained at dawn. I can use charges to cast spells or spend 1 charge to make 30-ft radius of flying insects around me for 10 min; area is heavily obscured for all others. Dispersed by strong wind. 5% chance destroyed if last charge used.",
		descriptionLong : "This ebon branch from the Gulthias Tree leaks crimson sap. The staff is unholy, a legacy of its crafting, and evil plants view me favorably. Mildy can summon all such staves as an action if they're on the same plane. The staff has 10 charges, 1d6+4 regained at dawn. I can use the charges to cast spells or spend 1 charge to create a 30-ft radius of flying insects around me for 10 min; the area is heavily obscured for all others and dispersed by a strong wind. 5% chance destroyed if last charge used (1 on d20).",
		descriptionFull : "Mildy's Staff is a branch of ebon wood leaking a crimson sap despite years of being removed from the Gulthias Tree. Insects called by it are cruel, biting and stinging all save for the creature attuned to the staff. Mildy can craft more of these staves, and all can be recalled to her with an action so long as she and the staff are on the same plane. The staff is treated as unholy, a legacy of its crafting, and evil plant creatures view its wielder favorably.\n   This staff has 10 charges.\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.",
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
	"staff of swarming insects: scorpion staff (wbw-dc-dge-2)" : {
		name : "Scorpion Staff of Swarming Insects (DGE-2)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "John Dodge gave this metal staff to Mei'Shell to help him swim. The top has an obsidian scorpion & it floats on liquids, giving adv. on Str (Athletics) checks to swim. The staff has 10 charges, 1d6+4 regained at dawn. Charges for spells or 1 charge makes 30-ft rad. of flying insects for 10 min; area is heavily obscured for all others. Dispersed by strong wind. 5% destroyed if use last charge.",
		descriptionLong : "John Dodge gave this metal staff to Mei'Shell to help him learn how to swim. It has an obsidian scorpion fastened to the top and floats in liquids, giving advantage on Str (Athletics) checks to swim. The staff has 10 charges, 1d6+4 regained at dawn. I can use charges to cast spells or spend 1 charge to create a 30-ft radius of flying insects around me for 10 min; the area is heavily obscured for all other and dispersed by a strong wind. 5% chance destroyed if last charge used.",
		descriptionFull : "This metal staff has an obsidian scorpion fastened to the top of it. John Dodge gave this staff to Mei'Shell to help him learn how to swim.\n   " + toUni("Waterborne") + ". Even though it is a metal staff with a heavy stone attached, it floats in liquids and grants its wielder advantage on any Strength (Athletics) check made to swim.This staff has 10 charges.\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.",
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
		savetxt : { text : ["Adv on Str (Athletics) chks to swim"] },
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
	"staff of swarming insects: drone control rod (wbw-dc-legit-sv-6)" : {
		name : "Drone Control Rod (Staff of Swarming Insects)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "A steel rod tipped with a chunk of crystal computer. Hexagonal tracery lights up when it's activated and attuning takes 1 minute. The rod has 10 charges, 1d6+4 regained at dawn. Charges cast spells or 1 charge makes 30-ft radius of flying insects around me for 10 min; area is heavily obscured for all others. Dispersed by strong wind. 5% chance destroyed if last charge used.",
		descriptionFull : "A steel rod tipped with a chunk of crystal computer. Hexagonal tracery lights up when it is activated.\n   " + toUni("Harmonious") + ". Attuning to this item takes only 1 minute.\n   This staff has 10 charges.\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.",
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
	"staff of swarming insects: mariposa (wbw-dc-php-orng-2)" : {
		name : "Mariposa, Staff of Swarming Insects (PHP-ORNG-2)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This staff was made from forgotten memories of Fidestia that don't have any homes. As a bonus action, it sheds 10-ft bright light and 10-ft more dim, or stops. When activated, glowing butterflies show a random scene of a memory. The staff has 10 charges, 1d6+4 regained at dawn. Charges cast spells or use 1 charge to make 30-ft radius of flying insects around me for 10 min; area is heavily obscured for all others. Dispersed by strong wind. 5% chance destroyed if last charge used.",
		descriptionLong : "This staff was made from forgotten memories of Fidestia that don't have any homes. As a bonus action, it sheds 10-ft bright light and 10-ft more dim, or stops. When activated, glowing butterflies show a random scene of a memory. The staff has 10 charges, 1d6+4 regained at dawn. I can use charges to cast spells or spend 1 charge to make 30-ft radius of flying insects around me for 10 min; the area is heavily obscured for others and dispersed by strong wind. 5% chance destroyed if last charge used (1 on d20).",
		descriptionFull : "This item was made of forgotten memories of fidestia that do not have homes any more.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.When activated the butterflies emits a glow that portrays a random scene of a forgotten memory.\n   This staff has 10 charges.\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		prerequisite : "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		limfeaname : "Staff of Swarming Insects",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""], ["bonus action", " (light/dim)"]],
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
	"staff of swarming insects: ygorl's crook (wbw-dc-rook-3-3)" : {
		name : "Ygorl's Crook (Staff of Swarming Insects)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This large ebony crook is cold to the touch & hard to focus on, seemingly drifting into shadow. It was stolen from the slaad lord, Ygorl, by a night hag & he's been searching for it ever since, intent on his revenge. I can speak Slaad. The staff has 10 charges, 1d6+4 regained at dawn. Charges cast spells or 1 charge creates 30-ft radius of flying insects around me for 10 min; area is heavily obscured for all others. Dispersed by strong wind. 5% chance destroyed if last charge used.",
		descriptionLong : "This large ebony crook is cold to the touch and hard to focus on, seemingly drifting into shadow. It was stolen from the slaad lord, Ygorl, by a night hag and he's been searching for it ever since, intent on his revenge. I can speak Slaad. The staff has 10 charges, 1d6+4 regained at dawn. I can use charges to cast spells or use 1 charge to make a 30-ft radius of flying insects around me for 10 min; area is heavily obscured for all others. Dispersed by strong wind. 5% chance destroyed if last charge used.",
		descriptionFull : "This large, ebony crook is cold to the touch, and hard to focus on, seeming to desire to drift into shadow. It once belonged to the slaad lord, Ygorl, before it was stolen by a night hag. Ygorl has been searching for it ever since, intent on getting his revenge — no matter who should possess it.\n   " + toUni("Language") + ". The bearer can speak and understand Slaad while the item is on the bearer's person. This staff was present at the language's creation.\n   This staff has 10 charges.\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.",
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
		languageProfs : ["Slaad"],
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
		description : "This +2 aspen staff shines brightly in direct light. It's almost perfectly smooth & topped with a crown of silver lightning bolts cradling a gleaming sapphire. It has 5 options, each 1/dawn. On a hit, Lightning: +2d6 Lightning; Thunder: DC 17 Con or Stunned to my next turn end; Thunder & Lightning: bonus action for both. Magic Action, Lightning Strike: 5\xD7120 ft line, DC 17 Dex, 9d6 Lightning or 1/2; Thunderclap: all in 60ft, 2d6 Thunder & Deaf (1 min), DC 17 Con for 1/2 dmg only.",
		descriptionLong : "This +2 aspen staff shines brightly in direct light. It's almost perfectly smooth & topped with a crown of silver lightning bolts cradling a gleaming sapphire. It has 5 special options, each 1 per dawn. On a hit: Lightning for +2d6 Lightning; Thunder for DC 17 Con or Stunned to my next turn end; Thunder & Lightning - use bonus action for both. Magic Action: Lightning Strike - 5\xD7120ft line, DC 17 Dex, 9d6 Lightning or 1/2 on save; Thunderclap - all in 60ft, 2d6 Thunder & Deaf (1 min), DC 17 Con for 1/2 dmg only.",
		descriptionFull : "This aspen staff shines brightly in direct light. The staff is almost perfectly smooth with a crown of silver lightning bolts atop it which cradle a gleaming sapphire.\n    This staff can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. It also has the following additional properties. Once one of these properties is used, it can't be used again until the next dawn.\n    " + toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 Lightning damage (no action required).\n    " + toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet (no action required). The target you hit must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn.\n    " + toUni("Lightning Strike") + ". You can take a Magic action to cause a bolt of lightning to leap from the staff's tip in a Line that is 5 feet wide and 120 feet long. Each creature in that Line must make a DC 17 Dexterity saving throw, taking 9d6 Lightning damage on a failed save, or half as much damage on a successful one.\n    " + toUni("Thunderclap") + ". You can take a Magic action to cause the staff to produce a thunderclap audible out to 600 feet. Every creature a within 60-foot Emanation origination from you must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n    " + toUni("Thunder and Lightning") + ". Thunder and Lightning. Immediately after you hit with a melee attack using the staff, you can take a Bonus Action to use the Lightning and Thunder properties (see above) at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
		attunement : true,
		weight : 4,
		action: [["action", "Staff of T\u0026L: Lightning Strike, Thunderclap"], ["bonus action", "Staff of T\u0026L: Thunder \u0026 Lighting"]],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*thunder)(?=.*lightning).*$/i,
			name : "Staff of Thunder and Lightning",
			description : "Versatile (1d8), topple; Lightning: 1/dawn, +2d6 Lightning; Thunder: 1/dawn DC 17 Con or 1 rnd Stunned",
			modifiers : [2, 2],
			selectNow : true,
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
		description : "This giant-sized +2 staff is shaped like a bolt of lightning, and automatically resizes to my hands. It has 5 options, each 1 per dawn. On a hit, Lightning: +2d6 Lightning dmg; Thunder: DC 17 Con or Stunned to my next turn end; Thunder & Lightning: bonus action for both effects. Magic Action, Lightning Strike: 5\xD7120 ft line, DC 17 Dex, 9d6 Lightning or 1/2; Thunderclap: all in 60ft, 2d6 Thunder and Deaf (1 min), DC 17 Con for 1/2 dmg only.",
		descriptionLong : "This giant-sized +2 staff is shaped like a bolt of lightning, and automatically resizes to fit my hands. It has 5 special options, each 1 per dawn. On a hit: Lightning for +2d6 Lightning; Thunder for DC 17 Con or Stunned to my next turn end; Thunder & Lightning - use bonus action for both. Magic Action: Lightning Strike - 5\xD7120ft line, DC 17 Dex, 9d6 Lightning or 1/2 on save; Thunderclap - all in 60ft, 2d6 Thunder and Deaf (1 min), DC 17 Con for 1/2 dmg only.",
		descriptionFull : "This giant-sized quarterstaff is shaped like a bolt of lightning, and automatically resizes to fit the hands of its wielder.\n    This staff can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. It also has the following additional properties. Once one of these properties is used, it can't be used again until the next dawn.\n    " + toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 Lightning damage (no action required).\n    " + toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet (no action required). The target you hit must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn.\n    " + toUni("Lightning Strike") + ". You can take a Magic action to cause a bolt of lightning to leap from the staff's tip in a Line that is 5 feet wide and 120 feet long. Each creature in that Line must make a DC 17 Dexterity saving throw, taking 9d6 Lightning damage on a failed save, or half as much damage on a successful one.\n    " + toUni("Thunderclap") + ". You can take a Magic action to cause the staff to produce a thunderclap audible out to 600 feet. Every creature a within 60-foot Emanation origination from you must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n    " + toUni("Thunder and Lightning") + ". Thunder and Lightning. Immediately after you hit with a melee attack using the staff, you can take a Bonus Action to use the Lightning and Thunder properties (see above) at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		action: [["action", "Staff of T\u0026L: Lightning Strike, Thunderclap"], ["bonus action", "Staff of T\u0026L: Thunder \u0026 Lighting"]],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*thunder)(?=.*lightning).*$/i,
			name : "Staff of Thunder and Lightning",
			description : "Versatile (1d8), topple; Lightning: 1/dawn, +2d6 Lightning; Thunder: 1/dawn DC 17 Con or 1 rnd Stunned",
			modifiers : [2, 2],
			selectNow : true,
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
		description: "This lightweight wooden staff is constantly surrounded by an unseen breeze. The winds whispers warnings, giving me +2 to initiative. The staff has 3 charges, regaining 1d3 at dawn and acts as a magic quarterstaff. On a hit, I can use 1 charge to deal +2d10 Necrotic to the target, who must make a DC 15 Con save or have disadv. on Str and Con checks and saves for 1 hour.",
		descriptionFull : "This staff of lightweight wood is constantly surrounded by an unseen breeze. To those attuned to it, the winds whispers words of warning, granting a +2 bonus on Dexterity checks made to determine Initiative.\n   This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic Quarterstaff. On a hit, it deals damage as a normal Quarterstaff, and you can expend 1 charge to deal an extra 2d10 Necrotic damage to the target and force it to make a DC 15 Constitution saving throw. On a failed save, the target has Disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		limfeaname : "Staff of Withering",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8), topple; 1 charge: +2d10 Necrotic & DC 15 Con or disadv 1 hr (Str/Con chks/saves)",
			selectNow : true,
			},
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." }
		},
	"staff of withering (ddal8-13)" : {
		name : "Staff of Withering (DDAL8-13)",
		source : [["AL","S8"]],
		rarity : "rare",
		description: "This staff is made of human bones wrapped in mithral wire. When a charge is used, my eyes light with cosmetic black flames for a round. The staff has 3 charges, regaining 1d3 at dawn and acts as a magic quarterstaff. On a hit, I can use 1 charge to deal +2d10 Necrotic to the target, who must make a DC 15 Con save or have disadv. on Str and Con checks and saves for 1 hour.",
		descriptionFull : "This staff is made of human bones wrapped in mithral wire. Whenever a charge is expended your eyes alight with cosmetic black flames for a round.\n   This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic Quarterstaff. On a hit, it deals damage as a normal Quarterstaff, and you can expend 1 charge to deal an extra 2d10 Necrotic damage to the target and force it to make a DC 15 Constitution saving throw. On a failed save, the target has Disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		limfeaname : "Staff of Withering",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8), topple; 1 charge: +2d10 Necrotic & DC 15 Con or disadv 1 hr (Str/Con chks/saves)",
			selectNow : true,
			},
		},
	"staff of withering: the inoculum (sj-dc-ven-2)" : {
		name : "The Inoculum, Staff of Withering (VEN-2)",
		source : [["AL","SJ-DC"]],
		rarity : "rare",
		description: "This ironwood staff was used by the late Dr. Barnard Oschia. One end is sharpened like a scalpel while the other is curled into a closed loop. Vials are welded along the length of the staff. I wonder how many poisons & diseases were stored & dispensed using this tool. The staff has 3 charges, regaining 1d3 at dawn & acts as a magic weapon. On a hit, use 1 charge to deal +2d10 Necrotic to the target, who must make a DC 15 Con save or have disadv. on Str & Con checks & saves for 1 hour.",
		descriptionLong: "This ironwood staff was used by the late Dr. Barnard Oschia. One end is sharpened like a scalpel while the other is curled into a closed loop. Vial-like containers are welded along the length of the staff. I wonder how many poisons and diseases were stored and dispensed using this tool. The staff has 3 charges, regaining 1d3 at dawn and acts as a magic quarterstaff. On a hit, I can use 1 charge to deal +2d10 Necrotic to the target, who must make a DC 15 Con save or have disadv. on Str and Con checks and saves for 1 hour.",
		descriptionFull : "The Inoculum – an ironwood staff once utilized by the late Dr. Barnard Oschia. One end has been sharpened akin to a scalpel while the other is curled into a closed loop. Vial-like containers are welded along the length of the staff. One can only wonder how many poisons and diseases have been stored and dispensed using this tool.\n   This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic Quarterstaff. On a hit, it deals damage as a normal Quarterstaff, and you can expend 1 charge to deal an extra 2d10 Necrotic damage to the target and force it to make a DC 15 Constitution saving throw. On a failed save, the target has Disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		limfeaname : "Staff of Withering",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8), topple; 1 charge: +2d10 Necrotic & DC 15 Con or disadv 1 hr (Str/Con chks/saves)",
			selectNow : true,
			},
		},
	"staff of withering: positive prognosis (sj-dc-ven-2)" : {
		name : "Positive Prognosis, Staff of Withering (VEN-2)",
		source : [["AL","SJ-DC"]],
		rarity : "rare",
		description: "A staff of ironwood, its tip curled into a closed loop. Collection tubes run along its length so researchers can obtain samples out in the field. The staff has 3 charges, regaining 1d3 at dawn & acts as a magic weapon. On a hit, use 1 charge to deal +2d10 Necrotic to the target, who must make a DC 15 Con save or have disadv. on Str & Con checks & saves for 1 hour.",
		descriptionFull : "A staff of ironwood, its tip curled into a closed loop. Collection tubes run along the length of the staff so researchers can obtain samples while out in the field.\n   This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic Quarterstaff. On a hit, it deals damage as a normal Quarterstaff, and you can expend 1 charge to deal an extra 2d10 Necrotic damage to the target and force it to make a DC 15 Constitution saving throw. On a failed save, the target has Disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		limfeaname : "Staff of Withering",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8), topple; 1 charge: +2d10 Necrotic & DC 15 Con or disadv 1 hr (Str/Con chks/saves)",
			selectNow : true,
			},
		},
	"staff of the woodlands (ccc-bmg-moon12-1)" : {
		name : "Staff of the Woodlands (BMG-MOON12-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		description : "This +2 staff adds +2 to spell atks. It's made from entwined snake-like branches, 1 brown and 1 bright green. Tiny leafed branches sprout from the top: half red & gold, half spring green. With each use, the autumn leaves fall to sprout fresh green bark and new leaves, and the spring side turns to autumn colors. The staff has 6 charges for spells, regaining 1d6 at dawn; 5% chance of losing magic if last charge used. As Magic action, plant into the earth and use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "Two entwined snake-like branches comprise this +2 staff. One is brown and the other is bright green. The top sprouts tiny leafed branches: one side has red and gold autumn leaves and the other spring green. When used, the autumn leaves fall, sprouting new green leaves and fresh bark, while the green side turns brown and its leaves gain autumn colors. I gain +2 to spell attack rolls. The staff has 6 charges, regaining 1d6 at dawn. If last charge used, 5% chance to turn nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also use 1 charge as Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff.",
		descriptionFull : "Two snake-like branches entwined together comprise the stalk of the staff. One is brown and the other is bright green. The top of the staff sprouts tiny limbs with equally tiny leaves, one side has red and gold autumn leaves and the other spring green. With each power that is used, the autumn leaves fall and begin to sprout new green leaves and fresh green bark, while the green side turns brown and its green leaves turn to autumn colors.\n   This staff has 6 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   " + toUni("Spells") + ". Using your spell save DC, you can to expend 1 or more of the staff's charges to cast one of the following spells from it: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Pass Without Trace (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n " + toUni("Tree Form") + ". You can take a Magic action to plant one end of the staff in earth in an unoccupied space and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of Transmutation magic that can be discerned with the Detect Magic spell. While touching the tree and using a Magic action, you return the staff to its normal form. Any creature in the tree falls when the tree reverts to a staff.\n   " + toUni("Regaining Charges") + ". The staff regains 1d6 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff loses its properties and becomes a nonmagical Quarterstaff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
			name : "Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands (ccc-gary-9)" : {
		name : "Staff of the Woodlands (CCC-GARY-9)",
		source : [["AL","CCC"]],
		rarity : "rare",
		description : "This +2 staff adds +2 to spell atks & is made from unblemished maple wood topped with three small white flowers in bloom. The staff has 6 charges for spells (see sheet), regaining 1d6 at dawn; 5% chance of losing magic when last charge used. As Magic action, plant it into the earth & use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This +2 staff adds +2 to spell attack rolls. It's made from unblemished maple wood topped with three small white flowers in bloom & has 6 charges, regaining 1d6 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also use 1 charge as Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff.",
		descriptionFull : "This staff is made from unblemished maple wood topped with three small white flowers in bloom. The staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
			name : "Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands (ddal7-8/ddep7-1)" : {
		name : "Staff of the Woodlands (DDAL7-8/DDEP7-1)",
		source : [["AL","S7"]],
		rarity : "rare",
		description : "This +2 staff adds +2 to spell atks. It's been trimmed into a small version of a Chultan jungle tree. There's a diorama of a village in the upper branches with tiny string bridges connecting tiny straw houses. It has 6 charges for spells, 1d6 regained at dawn; 5% it loses magic if last charge used. As Magic action, plant it into the earth & use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This +2 staff adds +2 to spell attacks. It's been meticulously trimmed so it appears to be a smaller version of the immense jungle trees in Chult. There's even a small diorama of a tiny village in the upper reaches of the staff's branches — complete with tiny, string bridges connecting tiny, straw houses. It has 6 charges, regaining 1d6 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also use 1 charge as Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff.",
		descriptionFull : "This item has been meticulously trimmed and tended to in such a way that it appears to be a smaller version of one of the immense jungle trees in Chult. The staff's creator even went so far as to create a small diorama of what looks like a tiny village in the upper reaches of the staff's branches—complete with tiny, string bridges connecting tiny, straw houses. This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
			name : "Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands: liwanag (wbw-dc-andl-3)" : {
		name : "Liwanag, Staff of the Woodlands (ANDL-3)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "Made from a garden plant by Alindaya as a symbol of gratitude, this +2 staff adds +2 to spell atks. The fireflies that guided me through Andelein illuminate it. As a bonus action, they shed 10-ft bright light & 10-ft more dim, or stop. I can't get lost in Andelein as the fireflies guide me. The staff has 6 charges for spells, regaining 1d6 at dawn; 5% chance of losing magic if last charge used. As Magic action, plant into the earth & use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This +2 staff adds +2 to spell attack rolls. Alindaya created it from a garden plant as a symbol of gratitude for my heroic deeds. The fireflies that guided me through the Domain of Andelein illuminate this staff & can be called to guide me again. As a bonus action, I can make the staff shed bright light in a 10-ft radius & dim light for another 10 ft, or extinguish it. I can't get lost in Andelein as the fireflies will guide me wherever I wish to go. The staff has 6 charges, regaining 1d6 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. I can use charges to cast spells using my DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Pass Without Trace (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff.",
		descriptionFull : "This staff was created by Alindaya from one of the plants in their garden as a symbol of gratitude for your heroic deeds. The same fireflies that guided you through parts of the Domain of Andelein, and back home, illuminate this staff, and can be called to guide you once again. The wielder of this staff cannot get lost in Andelein as the fireflies will guide them to wherever they wish to go in that domain.\n   In addition, this staff has the Beacon minor property: You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"], ["bonus action", " (light/dim)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
			name : "Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands: temperate (wbw-dc-conmar-6)" : {
		name : "Temperate Staff of the Woodlands (CONMAR-6)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This braid of bone ends in antlers growing from a nest of oak leaves \u0026 acorns. It's warm & smells of rich earth. (If I fought the Childe) The staff was infused with Turanok's love for his daughter, now gone after she used it against him. A shadow of its former self, it has a sliver of power. I'm unharmed by temps past 0\u00B0F \u0026 100\u00B0F. The +2 staff adds +2 to spell atks. It has 6 charges for spells, 1d6 regained at dawn; 5% chance of losing magic if last charge used. As Magic action, plant into earth & use 1 charge to make it a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This braid of bone ends with antlers emerging from a nest of oak leaves & acorns. It's warm to the touch & smells of rich earth. (If I fought the Childe) The staff was infused with the searing glow of Turanok's love for his daughter, now gone after she wielded it against him. A shadow of its former self, the staff still holds a sliver of nature's power.  I'm unharmed by extreme temps past 0\u00B0F \u0026 100\u00B0F. The +2 staff adds +2 to spell attack rolls. It has 6 charges, regaining 1d6 at dawn. If the last charge is used, 5% chance to turn nonmagical. Use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). Spend 1 charge as Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft diameter trunk & 20-ft radius of branches. Repeat action while touching tree to revert.",
		descriptionFull : "This staff is a braid of bone that ends with antlers emerging from a nest of oak leaves and acorns. It feels warm to the touch, and it smells of the rich earth of Lohringar. If the characters fought the Childe, add the following: This staff was once infused with the searing glow of Turanok's love for his daughter, now gone after she wielded it against him. Though it is now a shadow of its former self, the staff still holds a sliver of nature's power.\n   The staff feels warm to the touch, or cool, depending on the weather, as if it regulates the temperature around you. This staff has the temperate minor property from page 148 of the Dungeon Master's Guide. You are unharmed by temperatures of 0 degrees Fahrenheit or lower, and 100 degrees Fahrenheit or higher.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		savetxt : { immune : ["temps past 0\u00B0F/100\u00B0F"] },
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*temperate)(?=.*staff)(?=.*woodlands).*$/i,
			name : "Temperate Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands (wbw-dc-havn-1)" : {
		name : "Staff of the Woodlands (WBW-DC-HAVN-1)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This staff, once gnarled and sickly, now sprouts bioluminescent flowers. As a bonus action, the flowers glow a beautiful blue that sheds 10-ft bright light and 10-ft more dim, or stop. The +2 staff adds +2 to spell attack rolls and has 6 charges for spells, regaining 1d6 at dawn; 5% chance of losing magic if last charge used. As Magic action, plant it into the earth and use 1 charge to grow it into a 60 ft tree. Repeat action while touching tree to revert.",
		descriptionLong : "This staff, once gnarled and sickly, now sprouts with flowers after being dipped in the poison cure. The flowers are bioluminescent and can be made to glow with a beautiful blue light as a bonus action. When glowing, it sheds 10 ft bright light and 10 ft more dim. The +2 staff adds +2 to spell attack rolls and has 6 charges, regaining 1d6 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also spend 1 charge as a Magic action to plant the staff into the earth and turn it into a 60 ft tree. It has a 5-ft diameter trunk and a 20-ft radius of branches. Repeat action while touching tree to revert.",
		descriptionFull : "This staff, once gnarled and sickly, now sprouts with flowers and growth after having been dipped in the poison cure. The flowers are bioluminescent and can be made to glow with a beautiful blue light.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"], ["bonus action", " (light/dim)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
			name : "Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands: guardian (wbw-dc-hh-2)" : {
		name : "Guardian Staff of the Woodlands (HH-2)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This +2 staff adds +2 to spell atks and gives +2 to initiative unless I'm Incapacitated. Crafted by the Lady of The Lake herself from the oldest tree in Monster Timberland and imbued by the power of the forest, it's given to those who pass the Trial of Flower. The staff has 6 charges for spells, regaining 1d6 at dawn; 5% chance of losing magic when last charge used. As Magic action, plant it into the earth and use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "Crafted by the Lady of The Lake for those who passed the Trial of Flower, this staff is made from a branch of the oldest tree in Monster Timberland & imbued by the power of the forest. The +2 staff adds +2 to spell attack rolls & warns me, granting +2 initiative unless I'm Incapacitated. It has 6 charges, regaining 1d6 at dawn. If the last charge is used, 5% chance to turn nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also spend 1 charge as a Magic action to plant the staff into the earth & turn it into a 60 ft tree. It has a 5-ft diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to revert.",
		descriptionFull : "Crafted by the Lady of The Lake itself, this staff is made from the branch of the oldest tree in Monster Timberland and imbued by the power of the forest itself. Instruct by the Lady to the Guardian to hand the staff to those who passed the Trial of Flower.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*guardian)(?=.*woodlands).*$/i,
			name : "Guardian Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands (wbw-dc-idl1)" : {
		name : "Staff of the Woodlands (WBW-DC-IDL1)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This +2 staff adds +2 to spell atks & plays a song fragment on a hit. A Sylvan rhyme is carved into it: \"1 for Sorrow, 2 for Joy/3 For a Girl, 4 for Boy/5 for Silver, 6 for Gold/7 for a Secret Never to be Told.” Turned upsidedown, it reads: \"1 for Sorrow, 2 for Mirth/3 For a Funeral, 4 for Birth/5 for Heaven, 6 for Hell/7 for the Devil, His Own Self.\" The staff has 6 charges for spells, regaining 1d6 at dawn; 5% chance of losing magic if last charge used. As Magic action, plant it into the earth & use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This +2 staff adds +2 to spell atks & I hear an ancient song fragment about birds when it hits. There's a Sylvan counting rhyme carved into it: \"One for Sorrow, Two for Joy/Three For a Girl, Four for Boy/Five for Silver, Six for Gold/Seven for a Secret Never to be Told.\" When turned upsidedown, it reads: \"One for Sorrow, Two for Mirth/Three For a Funeral, Four for Birth/Five for Heaven, Six for Hell/Seven for the Devil, His Own Self.\" The staff has 6 charges, 1d6 regained at dawn. If the last charge is used, 5% chance it turns nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). Spend 1 charge as Magic action to plant staff into earth & turn it into a 60 ft tree. It has a 5-ft diameter trunk & a 20-ft radius of branches. Repeat action while touching it to revert.",
		descriptionFull : "Carved in Sylvan all along the length of this oak staff is the counting rhyme:"+
		"\n    \t \t“One for Sorrow, Two for Joy."+
		"\n    \t \tThree For a Girl, Four for Boy."+
		"\n    \t \tFive for Silver, Six for Gold."+
		"\n    \t \tSeven for a Secret Never to be Told.”"+
		"\n \n   When turned upside down, the rhyme instead reads:"+
		"\n    \t \t“One for Sorrow, Two for Mirth."+
		"\n    \t \tThree For a Funeral, Four for Birth."+
		"\n    \t \tFive for Heaven, Six for Hell."+
		"\n    \t \tSeven for the Devil, His Own Self.”"+
		"\n \n   The staff has the song craft minor property. Whenever this item is struck or is used to strike a foe, its bearer hears a fragment of an ancient song about birds. It can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you also have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
			name : "Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands (wbw-dc-php-lcl-1)" : {
		name : "Staff of the Woodlands (PHP-LCL-1)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This +2 oak staff adds +2 to spell atks and has a bouquet of golden lilies at its top. I can change the color of the lilies as an action, which lasts until dawn. The staff has 6 charges for spells, regaining 1d6 at dawn; 5% chance of losing magic if last charge used (1 on d20). As Magic action, plant the staff into the earth and use 1 charge to grow it into a 60 ft tree. Repeat action to revert. The tree has golden leaves and emits a pleasant floral scent.",
		descriptionLong : "This +2 staff adds +2 to spell atks and is made of oak. At its top is a bouquet of golden lilies. I can change the color of the lilies as an action, which lasts to dawn. The staff has 6 charges, 1d6 regained at dawn. If the last charge is used, 5% chance it turns nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also use 1 charge and Magic action to plant the staff in earth and turn it into a 60 ft tree. It has a 5-ft-diameter trunk and a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff. In its tree form, the leaves are golden and emits a pleasant, floral scent.",
		descriptionFull : "This staff is made of oak and on its top lies a bouquet of golden lilies. You can use an action to change the color of the lilies, but it reverts back to its original color at dawn. In its tree form, the leaves are golden and emits a pleasant, floral scent.\n   " + toUni("Language") + ". The bearer can speak and understand Sylvan while the item is on the bearer's person.\n   It can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you also have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		languageProfs : ["Sylvan"],
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*woodlands).*$/i,
			name : "Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands: hope's emissary (wbw-dc-rook-3-2)" : {
		name : "Hope's Emissary (Staff of the Woodlands)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This +2 white wood staff adds +2 to spell atks & once belonged to Valmoira Hopeblossom. It was loaned to the ruler of Cnocglen, who vowed to keep it safe until her return. The staff is carved with images of rare animals & plants, & unlocks employee doors in the Rookery. The staff has 6 charges for spells, regaining 1d6 at dawn; 5% chance of losing magic if last charge used. As Magic action, plant it into the earth & use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This +2 white wood staff adds +2 to spell atks. It once belonged to Valmoira Hopeblossom & was loaned to the ruler of Cnocglen, who vowed to keep it safe until her return. The staff is carved top to bottom with images of rare animals & plants, & unlocks employee doors in the Rookery, including the Visitor's Center, the Observatory & the Engineworx. The staff has 6 charges, 1d6 regained at dawn. If the last charge is used, 5% chance it turns nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also use 1 charge & Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff.",
		descriptionFull : "This white wood staff once belonged to Valmoira Hopeblossom herself. It was loaned to the ruler of Cnocglen, who vowed to keep it safe until her return. It is carved, top to bottom, with images of rare animals and plants.\n   " + toUni("Key") + ". This staff unlocks employee doors within the Rookery. This includes original doors in the Visitor's Center, the Observatory, and within the Engineworx, far below the surface.\n   It can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you also have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*hope|s)(?=.*emissary)(?=.*staff)(?=.*woodlands).*$/i,
			name : "Hope's Emissary, Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands: sunlit (wbw-dc-sunlit-6)" : {
		name : "Staff of the Sunlit Woodlands (Sunlit-6)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This +2 staff also adds +2 to spell atks & lets me use a Magic action to learn which way is north. The staff has 6 charges for spells (see sheet), regaining 1d6 at dawn; 5% chance of losing magic when last charge used. As Magic action, plant it into the earth & use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This +2 staff adds +2 to spell attack rolls & I can use a Magic action to learn which way is north. It has 6 charges, regaining 1d6 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. I can use charges to cast spells using my DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Pass Without Trace (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff.",
		descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.\n   " + toUni("Compass") + ". You can take a Magic action to learn which way is magnetic north. Nothing happens if this property is used in a location that has no magnetic north.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"],["action", " (Find North)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*sunlit)(?=.*woodlands).*$/i,
			name : "Staff of the Sunlit Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands: delver's (wbw-dc-zep-t2s2)" : {
		name : "Delver's Staff of the Woodlands (ZEP-T2S2)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This +2 staff adds +2 to spell atk rolls & while underground, I always know my depth & the direction to the nearest upward path. The staff has 6 charges for spells (see sheet), regaining 1d6 at dawn; 5% chance of losing magic when last charge used. As Magic action, plant it into the earth & use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This +2 staff adds +2 to spell attack rolls & while underground, I always knows my depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward. The staff has 6 charges, regaining 1d6 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also use 1 charge & Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff.",
		descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   " + toUni("Delver") + ". While underground, you always know the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*delver)(?=.*woodlands).*$/i,
			name : "Delver's Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	"staff of the woodlands: dragon's seed (wbw-dc-zodiac-5)" : {
		name : "Dragon's Seed (Staff of the Woodlands)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		description : "This +2 staff is shaped & weaved from the scales of an amethyst dragon and encrusted with sea gemstones. It adds +2 to spell atks & +2 initiative unless I'm Incapacitated. The staff has 6 charges for spells, regaining 1d6 at dawn; 5% chance of losing magic when last charge used. As Magic action, plant it into the earth & use 1 charge to grow it into a 60 ft tree. Repeat action to revert.",
		descriptionLong : "This +2 staff is shaped & weaved from the scales of an amethyst dragon & encrusted with sea gemstones. It adds +2 to spell attack rolls & warns me, granting +2 to initiative unless I'm Incapacitated. It has 6 charges, regaining 1d6 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. I can use charges to cast spells with my DC: Animal Friendship (1), Awaken (5), Barkskin (2), Locate Animals or Plants (2), Pass Without Trace (2), Speak with Animals (1), Speak with Plants (3), or Wall of Thorns (6). I can also use 1 charge & Magic action to plant the staff in earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Repeat action while touching the tree to return it to a staff.",
		descriptionFull : "A staff shaped and weaved from the scales of an amethyst dragon and encrusted with sea gemstones.\n   " + toUni("Guardian") + ". The item roars a warnings to its bearer, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*dragon|s)(?=.*seed)(?=.*staff)(?=.*woodlands).*$/i,
			name : "Dragon's Seed, Staff of the Woodlands",
			modifiers : [2, 2],
			selectNow : true,
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
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
		},
	}
	
MagicItemsList["al swords"] = {
		name : "AL Swords",
		type : "weapon (any sword)",
		allowDuplicates : true,
		choicesNotInMenu : true,
		magicItemTable : "?",
	choices : ["Adamantine Shortsword (FR-DC-UCON24)","Ascendant Amethyst Dragon's Wrath Longsword: The First Sword (PO-BK-3-11)","Crystal Rapier (BMG-DRW-OD-5)","Crystal Rapier (PO-BK-4-1)","Dancing Longsword: Antgaladion (WBW-DC-AA-ASHALON-1)","Dancing Rapier: Angel's Sting (CCC-GHC-BK1-10)","Dancing Rapier: Raptor (CCC-LINKS-2)","Defender Greatsword: Deathshield (DDAL9-20)","Dragon Slayer: Wyrmripper (DDEP5-1)","Flame Tongue Longsword: Velahr'kerym (DDAL0-2D)","Flame Tongue Longsword (DDAL-DRW13)","Flame Tongue Shortsword: Flare (CCC-WYC-1-2)","Frost Brand Greatsword (SJ-DC-NOS-4)","Frost Brand Greatsword: Duty (SJ-DC-TRIDEN-TFC)","Frost Brand Greatsword: Quintessence's Edge (SJ-DC-WINE-1)","Frost Brand Longsword: Blade of Aaqa (SJ-DC-AUG-9)","Frost Brand Rapier: Bitter Wrath (DDAL7-9)","Frost Brand Rapier: Familiar's (SJ-DC-ZODIAC-14-3)","Frost Brand Scimitar (DDEP5-2)","Frost Brand Scimitar (SJ-DC-TEL-12)","Frost Brand Shortsword: Frostbite Cryo Katana (SJ-DC-DD-11)","Giant Slayer Greatsword (DDEP5-2)","Greatsword of Sharpness: Desolation (DDAL8-14)","Greatsword of Warning: Ever Vigilant (CCC-BMG-MOON3-3)","Greatsword of Wounding (DDEX2-15)","Longsword of Vengeance (CCC-BMG-MOON15-2)","Longsword of Vengeance (CCC-GARY-8)","Longsword of Vengeance (CCC-HATMS1-2)","Longsword of Vengeance (CCC-MACE1-3)","Moon-Touched Greatsword (DDAL-DRW17)","Moon-Touched Longsword (BMG-DRW-OD-1)","Moon-Touched Longsword (CCC-GHC-BK1-1)","Moon-Touched Longsword (CCC-TAROT2-6)","Moon-Touched Longsword (DDAL0-11D)","Moon-Touched Rapier (CCC-GAD2-1)","Moon-Touched Rapier (CCC-SAC-4)","Moon-Touched Rapier (CCC-UNITE-5)","Moon-Touched Scimitar (FR-DC-DUNG-1)","Moon-Touched Scimitar (FR-DC-GHG-4)","Moon-Touched Scimitar: Moonmaiden's Blade (FR-DC-STRAT-DRAGON-1)","Moon-Touched Shortsword (DC-POA-CONMAR-9)","Moon-Touched Shortsword (DC-POA-DES-5B)","Moon-Touched Shortsword (DC-POA-GSP2-3H)","Moon-Touched Shortsword: Fang (DC-POA-GSP3-2)","Moon-Touched Shortsword (DC-POA-JCDC-1)","Moon-Touched Shortsword (DC-POA-MCWWS-2)","Moon-Touched Shortsword: Tsukuyomi (DC-POA-TDG1-3)","Moon-Touched Shortsword: Blade of the Black Tortoise (DC-POA-VAN-MT-1)","Moon-Touched Shortsword: Green Dragon Gladius (DC-POA-VAN-MT-1)","Moon-Touched Shortsword: Red Phoenix Falchion (DC-POA-VAN-MT-1)","Moon-Touched Shortsword: White Tiger Tulwar (DC-POA-VAN-MT-1)","Moon-Touched Shortsword: Platinum Fang (FR-DC-DMJA-1)","Moon-Touched Shortsword (FR-DC-UCON24)","Moon-Touched Sword (CCC-BMG-MOON6-2)","Moon-Touched Sword (CCC-BMG-MOON10-2)","Nine Lives Stealer Longsword: Love's Bite (DDAL7-11)","Nine Lives Stealer Scimitar (CCC-QCC2018-1)","Rapier of Life Stealing (CCC-PDXAGE-2-1)","Scimitar of Life Stealing: Night Cutter (CCC-RCC-1-4)","Scimitar of Life Stealing: Krakenfang (PO-BK-3-7)","Scimitar of Speed (SJ-DC-AMOT-3)","Scimitar of Speed: Deceiver (SJ-DC-DFA-3)","Scimitar of Speed: Radiance's Glare (SJ-DC-PHP-LRD-1)","Scimitar of Speed (SJ-DC-TRIDEN-MYKE-2)","Scimitar of Speed: Beam (SJ-DC-VMT-1)","Scimitar of Speed: Manthor “Vow of the Forest” (WBW-DC-ANDL-3)","Scimitar of Speed: Bregrist (WBW-DC-TREY-1)","Scimitar of Speed: Dread Cutlass (SJ-DC-DWR-3)","Scimitar of Warning: Miir (CCC-BWM-4-1)","Steel: Amdraig (BMG-MOON-MD-9)","Sun Blade: The Seventh Sword (CCC-6SWORDS-1)","Sun Blade: Dawnfire (CCC-STORM-1)","Sun Blade (CCC-WYC-2-2)","Sun Blade: Starshard (RMH-12)","Sun Blade: Scintilmorn (WDotMM)","Sword of Vengeance (CCC-SAF2-2)","Sword of Wounding (DDAL-CGB)","Vicious Longsword (CCC-HATMS2-1)","Vicious Rapier: Hag's Clawblade (AL:SA-11A)","Vorpal Scimitar (DDAL7-16)","Vorpal Scimitar: Abi Teos's Machete (RMH-9/RMH-10)"],
	"adamantine shortsword (fr-dc-ucon24)" : {
		name : "Adamantine Shortsword (FR-DC-UCON24)",
		source : [["AL","FR-DC"]],
		type : "weapon (shortsword)",
		rarity : "uncommon",
		description : "Forged in furnaces of Selûnarra prior to Karsus's Folly, this shortsword is made of an adamantine and etched with engravings of fey creatures. Whenever it hits an object, a hit is a Critical Hit. I can also speak Sylvan while it's on my person.",
		descriptionFull : "Forged in furnaces of Selûnarra prior to Karsus's Folly, this shortsword is made of adamantine alloy etched with engravings of fey creatures, providing the language property. [Per 2024 AL adjustments, this item could be moon-touched or adamantine. Coding both since someone may take Adamantine here.]\n   " + toUni("Language") + ". The bearer can speak and understand Sylvan while the item is on the bearer's person.\n   Whenever ammunition made or coated with adamantine hits an object, the hit is a Critical Hit.",
		weaponsAdd : { select : ["Adamantine Shortsword"], options : ["Adamantine Shortsword"] },
		languageProfs : ["Sylvan"],
	},
	"ascendant amethyst dragon's wrath longsword: the first sword (po-bk-3-11)" : {
		name : "The First Sword, Ascendant DW Longsword",
		source : [["AL","PO"]],
		rarity : "rare",
		attunement : true,
		description : "The blade of this +3 longsword is inlaid with amethyst draconic runes. The grip is a coiled snake with the pommel as its head. Recovered by mariliths after centuries in an amethyst dragon's hoard, it became the first blade of champions such as Shaktari. It deals +3d6 Force. On a 20, any creature in 5 ft of target take 5 Force. As action once/dawn, 60-ft cone: 12d6 Force, DC 18 Dex half.",
		descriptionLong : "The wide blade of this exquisite longsword is inlaid with amethyst draconic runes. Its grip is shaped like a coiled snake, with the pommel as its head. The sword was created by yuan-ti smiths on the plane of Vudra and lost during a failed conquest of a dragon-ruled realm. It gained magic over centuries languishing in an amethyst dragon's hoard, before being recovered by a raid of conquering mariliths. They returned it to Vudra, where it was used as the first blade of champions, including — legends say — Shaktari herself. It adds +3 to atk and dmg and deals +3d6 Force. On a 20, each chosen creature in 5 ft of the target takes 5 Force. As an action once per dawn, I can create a 60-ft cone: Dex DC 18 for half, 12d6 Force damage.",
		descriptionFull : "The wide blade of this exquisite weapon is inlaid with draconic runes of violet amethyst. Its grip is fashioned in the shape of a coiled snake, with the pommel as its head."+
		"\n   The sword was initially created by yuan-ti smiths on the plane of Vudra. As a mundane blade, it was then lost by its wielder during a failed conquest of a dragon-ruled realm. It gained its magic over centuries of languishing in an amethyst dragon's hoard, before being recovered by a raid of conquering mariliths. The mariliths returned it to their home plane of Vudra, where it was often used as the first blade of its greatest champions, including — legends say — Shaktari herself."+
		"\n   This weapon is decorated with dragon heads, claws, wings, scales, or Draconic letters. When it steeps in a dragon's hoard, it absorbs the energy of the dragon's breath weapon and deals damage of that type with its special properties. This weapon cannot change rarity."+
		"\n   >>Slumbering (Uncommon)<<. Whenever you roll a 20 on your attack roll with this weapon, each creature of your choice within 5 feet of the target takes 5 damage of the type dealt by the dragon's breath weapon."+
		"\n   >>Stirring (Rare)<<. The Stirring weapon has the Slumbering property. In addition, you gain a +1 bonus to attack and damage rolls made using the weapon. On a hit, the weapon deals an extra 1d6 damage of the type dealt by the dragon's breath weapon."+
		"\n   >>Wakened (Very Rare)<<. The Wakened weapon has the Slumbering property, and it improves on the Stirring property. The bonus to attack and damage rolls increases to +2, and the extra damage dealt by the weapon increases to 2d6."+
		"\n   As an action, you can unleash a 30-foot cone of destructive energy from the weapon. Each creature in that area must make a DC 16 Dexterity saving throw, taking 8d6 damage of the type dealt by the dragon's breath weapon on a failed save, or half as much damage on a successful one. Once this action is used, it can't be used again until the next dawn."+
		"\n   >>Ascendant (Legendary)<<. The Ascendant weapon has the Slumbering property, and it improves on the Stirring and Wakened properties. The bonus to attack and damage rolls increases to +3, and the extra damage dealt by the weapon increases to 3d6."+
		"\n   The cone of destructive energy the weapon creates increases to a 60-foot cone, the save DC increases to 18, and the damage increases to 12d6.",
		limfeaname : "First Sword Breath",
		usages : 1,
		recovery : "dawn",
		action : [["action", "First Sword Breath"]],
		weaponOptions : [{
			baseWeapon : "longsword",
				name : "The First Sword, Amethyst Wrath Longsword",
				regExpSearch : /the first sword, amethyst wrath longsword/i,
				source : [["AL","PO"]],
				description : "Versatile (1d10), sap; +3d6 Force; On a 20, 5 Force to any creature in 5ft",
				modifiers : [3,3],
				selectNow : true
			},{			
			name : "The First Sword, Amethyst Wrath Cone",
				regExpSearch : /the first sword, amethyst wrath cone/i,
				source : [["AL","PO"]],
				ability : 0,
				type : "Magic Item",
				damage : [12, 6, "Force"],
				range : "60-ft cone",
				description : "Hits all in area; Dex save, success - half damage; Usable once per dawn",
				abilitytodamage : false,
				dc : true,
				modifiers : [10, ""],
				selectNow : true
			}],
		},
	"crystal rapier (bmg-drw-od-5)" : {
		name : "Crystal Rapier (BMG-DRW-OD-5)",
		source : [["AL","DRW"]],
		rarity : "rare",
		attunement : true,
		description : "This rapier's hilt is made of exquisite dark wood, carved with a Thayan inscription that translates to “Don't forget who you are.” It has 3 charges, regaining 1d3 at dawn, and deals +1d8 Radiant. When it hits a creature, I can use 1 charge to heal for that extra amount. As a bonus action, the sword starts or stops shedding light: 30 ft bright light and 30 ft dim, or 10 ft dim.",
		descriptionFull : "This rapier's hilt is made of an exquisite dark wood, carved with a Thayan inscription that translates to “Don't forget who you are.”"+
		"\n   This magic sword's blade is fashioned from a horn or spine from a crystal dragon. When you hit with an attack roll using this sword, the target takes an extra 1d8 radiant damage."+
		"\n   The sword has 3 charges and regains 1d3 expended charges daily at dawn. When you hit a creature with an attack roll using the sword, you can expend 1 charge to regain a number of hit points equal to the extra radiant damage the sword dealt."+
		"\n   While you're holding the sword, you can use a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet, to cause it to shed dim light in a 10-foot radius, or to douse the light.",
		limfeaname : "Crystal Rapier",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["bonus action", " (Light)"]],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /crystal rapier/i,
			name : "Crystal Rapier",
			description : "Finesse, vex; +1d8 Radiant; 1 charge to heal",
			selectNow : true,
			},
		},
	"crystal rapier (po-bk-4-1)" : {
		name : "Crystal Rapier (PO-BK-4-1)",
		source : [["AL","PO"]],
		rarity : "rare",
		attunement : true,
		description : "A gift of thanks from Nort Gravern, this rapier's blade is made from a crystal dragon's horn. It was in his family for generations and when it hits, I hear a fragment of a macabre poem by Haxan Kane. The sword has 3 charges, 1d3 regained at dawn, and deals +1d8 Radiant. When it hits a creature, I can use 1 charge to heal for that extra amount. As a bonus action, the sword starts or stops shedding light: 30 ft bright light and 30 ft dim, or 10 ft dim.",
		descriptionFull : "A gift of appreciation from Nort Gravern, this magic sword's blade is fashioned from the horn of a crystal dragon and has been in the family for generations."+
		"\n   " + toUni("Song Craft") + ". Whenever the blade is struck or used to strike a foe, you hear a fragment of a macabre poem by Haxan Kane."+
		"\n   This magic sword's blade is fashioned from a horn or spine from a crystal dragon. When you hit with an attack roll using this sword, the target takes an extra 1d8 radiant damage."+
		"\n   The sword has 3 charges and regains 1d3 expended charges daily at dawn. When you hit a creature with an attack roll using the sword, you can expend 1 charge to regain a number of hit points equal to the extra radiant damage the sword dealt."+
		"\n   While you're holding the sword, you can use a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet, to cause it to shed dim light in a 10-foot radius, or to douse the light.",
		limfeaname : "Crystal Rapier",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["bonus action", " (Light)"]],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /crystal rapier/i,
			name : "Crystal Rapier",
			description : "Finesse, vex; +1d8 Radiant; 1 charge to heal",
			selectNow : true,
			},
		},
	"dancing longsword: antgaladion (wbw-dc-aa-ashalon-1)" : {
		name : "Antgaladion, Dancing Sword (AA-ASHALON-1)",
		source : [["AL","WBW-DC"]],
		rarity : "very rare",
		attunement : true,
		description : "The blade of this elegantly curved elven longsword is made of the sharpest coldest ice from the domain of Aesandoral the Ice Lord. Quick as the blizzard winds, I can attune in 1 min. With a bonus action, I can toss the sword and say \"Long may winter reign\" to make it hover, fly up to 30 ft and attack a target (as if by me). I can have it move and attack again as a bonus action while in 30 ft. After the 4th attack it moves 30 ft to return to my hand.",
		descriptionLong : "The blade of this elegantly curved elven longsword is made of the sharpest and coldest ice from the domain of Aesandoral the Ice Lord. As quick as the blizzard winds, it only takes 1 minute to attune. With a bonus action, I can toss the sword into the air to make it hover, fly up to 30 ft and attack a target. It uses my attack roll and ability mod for damage. While hovering, I can command the sword to move and attack again as a bonus action. After the 4th attack, it moves 30 ft to return to my hand. If it can't reach me or my hands are full, it falls to the ground after moving. It stops hovering if I grasp it or am more than 30 ft away.",
		descriptionFull : "The blade of this elegantly curved elven longsword is made of the sharpest and coldest ice from the domain of Aesandoral the Ice Lord. As quick as the blizzard winds, it only takes one minute to attune. Its name is inscribed on its blade in Sylvan. Its command phrase is “Long may winter reign.” [GFP Item]\n   You can take a Bonus Action to toss this magic weapon into the air. When you do so, the weapon begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of itself. The weapon uses your attack roll and adds your ability modifier to damage rolls.\n   While the weapon hovers, you can take a Bonus Action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same Bonus Action, you can cause the weapon to attack one creature within 5 feet of the weapon.\n   After the hovering weapon attacks for the fourth time, it flies back to you and tries to return to your hand. If you have no hand free, the weapon falls to the ground in your space. If the weapon has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or are more than 30 feet away from it.",
		action : [["bonus action", "Dancing Sword"]],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*antgaladion).*$/i,
			name : "Antgaladion, Dancing Longsword",
			description : "Versatile, sap; Attacks on its own as a bonus action",
			selectNow : true,
			},
		},
	"dancing rapier: angel's sting (ccc-ghc-bk1-10)" : {
		name : "Angel's Sting, Dancing Rapier (GHC-BK1-10)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		attunement : true,
		description : "While possessing this rapier, I feel fortunate & optimistic about the future. Butterflies & other harmless creatures frolic in my presence. With a bonus action, toss the sword to make it hover, fly up to 30 ft and atk a target (as if by me). I can command it to move and attack again as a bonus action while in 30 ft. After 4th attack, it moves up to 30 ft to return to my hand.",
		descriptionLong : "While in possession of this sword, I feel fortunate and optimistic about the future. Butterflies and other harmless creatures frolic in my presence. With a bonus action, I can toss the sword into the air to make it hover, fly up to 30 ft and atk a target. It uses my atk roll and ability mod for dmg. While hovering, I can command the sword to move and atk again as a bonus action. After the 4th atk, it moves 30 ft to return to my hand. If it can't reach me or my hands are full, it falls to the ground after moving. It stops hovering if I grasp it or am more than 30 ft away.",
		descriptionFull : "You can take a Bonus Action to toss this magic weapon into the air. When you do so, the weapon begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of itself. The weapon uses your attack roll and adds your ability modifier to damage rolls.\n   While the weapon hovers, you can take a Bonus Action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same Bonus Action, you can cause the weapon to attack one creature within 5 feet of the weapon.\n   After the hovering weapon attacks for the fourth time, it flies back to you and tries to return to your hand. If you have no hand free, the weapon falls to the ground in your space. If the weapon has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or are more than 30 feet away from it.\n   " + toUni("Blissful") + ". You feel fortunate and optimistic about what the future holds. Butterflies and other harmless creatures might frolic in the item's presence.",
		action : [["bonus action", "Dancing Sword"]],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*angel's)(?=.*sting).*$/i,
			name : "Angel's Sting, Dancing Rapier",
			description : "Finesse, vex; Attacks on its own as a bonus action",
			selectNow : true,
			},
		},
	"dancing rapier: raptor (ccc-links-2)" : {
		name : "Raptor, Dancing Rapier (LINKS-2)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		attunement : true,
		description : "Fulton Stormweather was a swashbuckling wizard before being trapped in the Feywild. His bonded rapier, \"Raptor\", was the target of his spells & developed a hint of personality. It gives a keening cry like a raptor when it lands a killing blow & makes me more confident. With a bonus action, toss the sword to make it hover, fly up to 30 ft and atk target (as if by me). I can command it to move and attack again as a bonus action while in 30 ft. After 4th atk, it moves up to 30 ft to return to my hand.",
		descriptionLong : "Fulton Stormweather enjoyed a successful career as a swashbuckling wizard before being trapped in the Feywild. His bonded rapier, “Raptor”, became the target of his enchantments & developed a hint of personality over time. It makes a keening cry like a hunting raptor when landing a killing blow & I feel more confident. With a bonus action, I can toss the sword into the air to make it hover, fly up to 30 ft & atk a target. It uses my atk roll & ability mod for dmg. While hovering, I can command the sword to move & atk again as a bonus action. After the 4th atk, it moves 30 ft to return to my hand. If it can't reach me or my hands are full, it falls to the ground after moving. It stops hovering if I grasp it or am more than 30 ft away.",
		descriptionFull : "Fulton Stormweather enjoyed a successful career as a swashbuckling wizard for many years before becoming trapped in the Feywild. His bonded weapon, a rapier named “Raptor”, became the target of his enchantment effects. Over time, it seemingly developed a hint of a personality. Its attuned bearer feels more confident, and it makes a keening cry like that of a hunting raptor when landing a killing blow on an enemy.\n   You can take a Bonus Action to toss this magic weapon into the air. When you do so, the weapon begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of itself. The weapon uses your attack roll and adds your ability modifier to damage rolls.\n   While the weapon hovers, you can take a Bonus Action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same Bonus Action, you can cause the weapon to attack one creature within 5 feet of the weapon.\n   After the hovering weapon attacks for the fourth time, it flies back to you and tries to return to your hand. If you have no hand free, the weapon falls to the ground in your space. If the weapon has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or are more than 30 feet away from it.",
		action : [["bonus action", "Dancing Sword"]],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*raptor).*$/i,
			name : "Raptor, Dancing Rapier",
			description : "Finesse, vex; Attacks on its own as a bonus action",
			selectNow : true,
			},
		},
	"defender greatsword: deathshield (ddal9-20)" : {
		name : "Deathshield, Defender Greatsword (DDAL9-20)",
		source : [["AL","S9"]],
		type : "weapon (any melee weapon)",
		rarity : "legendary",
		attunement : true,
		description : "This +3 magic greatsword is made from crude black iron. Inscribed upon the blade in Abyssal is the name \"Deathshield.\" The 1st time I attack with the sword on each of my turns, I can transfer any part of its +3 bonus to AC instead. This AC adjustment remains in affect until my next turn, although I must be holding the sword to gain it.",
		descriptionLong : "This magic greatsword is made out of crude black iron. Inscribed upon the blade in Abyssal is the name \"Deathshield.\" I have a +3 bonus to attack and damage rolls made with the sword. The 1st time I attack with it on each of my turns, I can transfer any part of the bonus to Armor Class instead. This Armor Class adjustment remains in affect until my next turn, although I must be holding the sword to gain it.",
		descriptionFull : "This defender is a greatsword and is made out of crude black iron. Inscribed upon the blade in Abyssal is the name “Deathshield.”\n   You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon.\n   The first time you attack with the weapon on each of your turns, you can transfer some or all of the weapon's bonus to your Armor Class. For example, you could reduce the bonus to your attack rolls and damage rolls to +1 and gain a +2 bonus to Armor Class. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the weapon to gain a bonus to AC from it.",
		weaponsAdd : { select : ["Deathshield, Defender Greatsword"], options : ["Deathshield, Defender Greatsword"] },
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
	"dragon slayer: wyrmripper (ddep5-1)" : {
		name : "Wyrmripper, Dragon Slayer Greatsword (DDEP5-1)",
		source : [["AL","S5"]],
		type : "weapon (any simple or martial)",
		rarity : "rare",
		description : "Made of what appears to be roughly crafted pig iron with a crude leather haft, this enormous greatsword possesses a bold Davek rune at the base of both sides of the blade which reads \"Wyrmripper\". I have a +1 bonus to attack and damage rolls made with this sword. When I hit a Dragon with the sword, it does +3d6 damage.",
		descriptionFull : "Made of what appears to be roughly crafted pig iron with a crude leather haft, this enormous greatsword possesses a bold Davek rune at the base of both sides of the blade which reads \"Wyrmripper\". You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   The weapon deals an extra 3d6 damage of the weapon's type if the target is a Dragon.",
		weaponsAdd : { select : ["Wyrmripper, Dragon Slayer Greatsword"], options : ["Wyrmripper, Dragon Slayer Greatsword"] },
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
	"flame tongue longsword: velahr'kerym (ddal0-2d)" : {
		name : "Velahr'kerym, Flame Tongue Longsword (DDAL0-2D)",
		source : [["AL","S0"]],
		type : "weapon (any melee weapon)",
		rarity : "rare",
		description : "This mithril longsword has a beautiful ironwood hilt. The crossguard, blade \u0026 hilt have a forest motif inlaid with emeralds \u0026 platinum filigree. Delicate blue flames dance along the blade when drawn. As a bonus action with command, it ignites and deals +2d6 Fire, shedding 40-ft bright light \u0026 40-ft more dim. The flames last until I repeat the command (bonus action) or drop/sheathe the sword.",
		descriptionFull : "This longsword is crafted of mithril with a beautiful hilt of carved ironwood. The crossguard, blade, and hilt are worked through with a forest motif inlaid with shining emeralds and platinum filigree. Delicate blue flames dance along the blade whenever it is drawn from its scabbard.\n   While holding this magic weapon, you can take a Bonus Action and use a command word to cause flames to engulf the damage-dealing part of the weapon. These flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet. While the weapon is ablaze, it deals an extra 2d6 Fire damage on a hit. The flames last until you take a Bonus Action to issue the command again or until you drop, stow, or sheathe the weapon.",
		action : [["bonus action", "Flame Tongue (activate/end)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*velahr'kerym).*$/i,
			name : "Velahr'kerym, Flame Tongue Longsword",
			description : "Versatile (d10), sap; While active, +2d6 fire damage.",
			selectNow : true,
			},
	},
	"flame tongue longsword (ddal-drw13)" : {
		name : "Flame Tongue Longsword (DDAL-DRW13)",
		source : [["AL","DRW"]],
		type : "weapon (any melee weapon)",
		rarity : "rare",
		description : "This steel blade is covered in a distinctive pattern of banding & mottling reminiscent of flowing water. The patterns shift \u0026 change slowly over time. As a bonus action, I can use command word to ignite the blade. While lit, it deals +2d6 Fire, shedding 40-ft bright light \u0026 40-ft more dim. The flames last until I repeat the command (bonus action) or drop/sheathe the sword.",
		descriptionFull : "This crucible steel blade is covered in a distinctive pattern of banding and mottling reminiscent of flowing water. These patterns shift and change slowly over time.\n   While holding this magic weapon, you can take a Bonus Action and use a command word to cause flames to engulf the damage-dealing part of the weapon. These flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet. While the weapon is ablaze, it deals an extra 2d6 Fire damage on a hit. The flames last until you take a Bonus Action to issue the command again or until you drop, stow, or sheathe the weapon.",
		action : [["bonus action", "Flame Tongue (activate/end)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*flame)(?=.*tongue).*$/i,
			name : "Flame Tongue Longsword",
			description : "Versatile (d10), sap; While active, +2d6 fire damage.",
			selectNow : true,
			},
	},
	"flame tongue shortsword: flare (ccc-wyc-1-2)" : {
		name : "Flare, Flame Tongue Shortsword (WYC-1-2)",
		source : [["AL","CCC"]],
		type : "weapon (any melee weapon)",
		rarity : "rare",
		description : "This shortsword is made of molten steel and finds its shape right before striking a target. I'm unharmed by extreme temps past 0\u00B0F \u0026 100\u00B0F. As a bonus action, use command (‘devastation' in Terran) to ignite. While lit, it deals +2d6 Fire, shedding 40-ft bright light \u0026 40-ft more dim light. The flames last until I repeat command (bonus action) or drop/sheathe the sword.",
		descriptionFull : "This shortsword appears to be made of molten steel that seems to find its way to shape right before it strikes its target. While attuned to this sword, you feel comfortable in temperatures as low as 20 degrees below zero Fahrenheit and as high as 120 degrees above zero Fahrenheit.\n   While holding this magic weapon, you can take a Bonus Action and use a command word to cause flames to engulf the damage-dealing part of the weapon. These flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet. While the weapon is ablaze, it deals an extra 2d6 Fire damage on a hit. The flames last until you take a Bonus Action to issue the command again or until you drop, stow, or sheathe the weapon.",
		savetxt : { immune : ["temps past 0\u00B0F/100\u00B0F"] },
		action : [["bonus action", "Flare (activate/end)"]],
		weaponOptions : {
			baseWeapon : "shortsword",
			regExpSearch : /^(?=.*flare).*$/i,
			name : "Flare, Flame Tongue Shortsword",
			description : "Finesse, light, vex; While active, +2d6 fire damage.",
			selectNow : true,
			},
	},
	"frost brand greatsword (sj-dc-nos-4)" : {
		name : "Frost Brand Greatsword (SJ-DC-NOS-4)",
		source : [["AL","SJ-DC"]],
		type : "weapon (any sword or glaive)",
		rarity : "very rare",
		attunement : true,
		allowDuplicates : true,
		description : "This magic greatsword deals +1d6 Cold and grants Fire resistance when held. In freezing temps, it emits 10-ft bright light and 10-ft more dim. Once per hour when drawn, I can extinguish all nonmagical flames in 30 ft. I can speak Deep Speech.",
		descriptionFull : "When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.\n   " + toUni("Language") + ". The bearer can speak, read and understand Deep Speech while the item is on the bearer's person. ",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		languageProfs : ["Deep Speech"],
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*frost)(?=.*brand).*$/i,
			name : "Frost Brand Greatsword",
			description : "Heavy, Two-handed, Graze; +1d6 Cold damage",
			selectNow : true,
			},
		},	
	"frost brand greatsword: duty (sj-dc-triden-tfc)" : {
		name : "Duty, Frost Brand Greatsword (SJ-DC-TRIDEN-TFC)",
		source : [["AL","SJ-DC"]],
		type : "weapon (any sword or glaive)",
		rarity : "very rare",
		attunement : true,
		allowDuplicates : true,
		description : "Malachi wielded the greatsword Duty through countless battles in the Blood War. It glows faintly in 120 ft of Fields. The sword also deals +1d6 Cold dmg per hit and grants Fire resistance while held. When in freezing temps, it emits 10-ft bright light and 10-ft more dim. Once per hour when drawn, I can extinguish all nonmagical flames in 30 ft.",
		descriptionFull : "Malachi has wielded the greatsword Duty through countless battles in the Blood War.\n   " + toUni("Sentinel") + ". This item glows faintly when Fiends are within 120 feet of it.\n   When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*frost)(?=.*brand).*$/i,
			name : "Frost Brand Greatsword",
			description : "Heavy, Two-handed, Graze; +1d6 Cold damage",
			selectNow : true,
			},
		},	
	"frost brand greatsword: quintessence's edge (sj-dc-wine-1)" : {
		name : "Quintessence's Edge, Frost Brand Greatsword",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		type : "weapon (any sword or glaive)",
		attunement : true,
		allowDuplicates : true,
		description : "This storm silver greatsword shimmers with icy blue runes; etchings of grapevines wrap the hilt. The blade crackles with electricity on each strike \u0026 shocks me in warning, giving +2 initiative if not Incapacitated. It deals +1d6 Cold \u0026 I resist Fire when held. If freezing, it emits 10-ft bright light \u0026 10-ft more dim. Once per hour when drawn, I can snuff nonmagical flames in 30 ft.",
		descriptionFull : "The storm silver blade shimmers with icy blue runes; etchings of grapevines are wrapped about the hilt. The blade crackles with electricity with every strike.\n   " + toUni("Guardian") + ". The item crackles and electrically shocks a warning to its bearer, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*quintessence|quintessence's)(?=.*edge).*$/i,
			name : "Quintessence's Edge, Frost Brand Greatsword",
			description : "Heavy, Two-handed, Graze; +1d6 Cold damage",
			selectNow : true,
			},
		},	
	"frost brand longsword: blade of aaqa (sj-dc-aug-9)" : {
		name : "Blade of Aaqa, Frost Brand Longsword",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		type : "weapon (any sword or glaive)",
		attunement : true,
		allowDuplicates : true,
		description : "A sacred relic of the lizardfolk hunters on the gas giant Coliar, this longword is freezing to the touch. Once my hand acclimates, the all-metal grip feels one with my flesh. It deals +1d6 Cold damage and grants Fire resistance when held. In freezing temperatures, it emits 10-ft radius bright light and 10-ft more dim. Once per hr when I draw it, I can snuff all nonmagical flames in 30 ft.  While underground, I know my depth and the direction to the nearest path upward.",
		descriptionFull : "Considered a sacred relic by the lizardfolk hunters of the gas giant planet Coliar, the Blade of Aaqa is initially freezing to the touch but the wielder's hand quickly acclimates, and it feels as if the all-metal grip becomes one with flesh.\n   " + toUni("Delver") + ". While underground, you always know the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*blade)(?=.*aaqa).*$/i,
			name : "Blade of Aaqa, Frost Brand Longsword",
			description : "Versatile (d10), sap; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"frost brand rapier: bitter wrath (ddal7-9)" : {
		name : "Bitter Wrath, Frost Brand Rapier (DDAL7-9)",
		source : [["AL","S7"]],
		type : "weapon (any sword or glaive)",
		rarity : "very rare",
		attunement : true,
		allowDuplicates : true,
		description : "This extraordinary weapon is made from a single piece of ice with a pommel wrapped in braided leaves. If wielded in temperatures greater than 90\u00B0F, rivulets of water run down the blade, soaking my hand, but it never melts away. The sword deals +1d6 Cold and grants Fire resistance when held. In freezing temps, it emits a 10-ft radius of bright light and 10-ft more dim. Once per hour when I draw it, I can snuff all nonmagical flames in 30 ft.",
		descriptionFull : "This extraordinary weapon is crafted from a single piece of ice with a pommel wrapped in braided leaves. If wielded in temperatures in excess of 90 degrees, rivulets of water run down its blade—soaking the hand holding it. Despite this, it never melts away.\n   When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*bitter)(?=.*wrath).*$/i,
			name : "Bitter Wrath, Frost Brand Rapier",
			description : "Finesse, vex; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"frost brand rapier: familiar's (sj-dc-zodiac-14-3)" : {
		name : "Familiar's Frost Brand Rapier (ZODIAC-14-3)",
		source : [["AL","SJ-DC"]],
		type : "weapon (any sword or glaive)",
		rarity : "very rare",
		attunement : true,
		allowDuplicates : true,
		description : "This dark blade shimmers and shifts as if displaced with reality, emanating an icy mist. It adds +1d6 Cold and I resist Fire when held. The sword also warns me, giving +2 initiative if I'm not Incapacitated.  In freezing temps, it emits 10-ft bright light and 10-ft more dim. Once per hour when I draw it, I can extinguish all nonmagical flames in 30 ft.",
		descriptionFull : "The dark blade shimmers and shifts as if displaced with reality, the displacement causes an icy mist to emanate.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*familiar|s)(?=.*frost)(?=.*brand)(?=.*rapier).*$/i,
			name : "Familiar's Frost Brand Rapier",
			description : "Finesse, vex; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"frost brand scimitar (ddep5-2)" : {
		name : "Frost Brand Scimitar (DDEP5-2)",
		source : [["AL","S5"]],
		type : "weapon (any sword or glaive)",
		rarity : "very rare",
		attunement : true,
		description : "The Red Baron of Nelanther awarded these rime-coated scimitars to his most favored pirates. This sword deals +1d6 Cold and grants Fire resistance when held. In freezing temps, it emits 10-ft radius bright light and 10-ft more dim. Once per hour when I draw it, I can extinguish all nonmagical flames in 30 ft.",
		descriptionFull : "The Red Baron of Nelanther awarded these rime-coated scimitars to his most favored pirates.\n   When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar)(?=.*brand)(?=.*frost).*$/i,
			name : "Frost Brand Scimitar",
			description : "Finesse, light, nick; +1d6 cold damage",
			selectNow : true,
			},
		},
	"frost brand scimitar (sj-dc-tel-12)" : {
		name : "Frost Brand Scimitar (SJ-DC-TEL-12)",
		source : [["AL","SJ-DC"]],
		type : "weapon (any sword or glaive)",
		rarity : "very rare",
		attunement : true,
		description : "This scimitar deals +1d6 Cold and grants Fire resistance when held. In freezing temps, it emits 10-ft radius bright light and 10-ft more dim. Once per hour when I draw it, I can extinguish all nonmagical flames in 30 ft. I also suffer no harm in extreme temps past 0\u00B0F and 100\u00B0F.",
		descriptionFull : "When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.\n   " + toUni("Temperate") + ". You are unharmed by temperatures of 0 degrees Fahrenheit or lower, and 100 degrees Fahrenheit or higher.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar)(?=.*brand)(?=.*frost).*$/i,
			name : "Frost Brand Scimitar",
			description : "Finesse, light, nick; +1d6 cold damage",
			selectNow : true,
			},
		},
	"frost brand shortsword: frostbite cryo katana (sj-dc-dd-11)" : {
		name : "Frostbite, Cryo Katana (Frost Brand, DD-11)",
		source : [["AL","SJ-DC"]],
		type : "weapon (any sword or glaive)",
		rarity : "very rare",
		attunement : true,
		allowDuplicates : true,
		description : "This ancient 8-in adamantine rod has decorative mithral plates \u0026 bands \u0026 can be attuned to in 1 min. A hollow recess housing a sliver of polar ice is ringed by a circular guard \u0026 a metal cap engraved with \"FR057-B173\". Twist cap clockwise to turn ambient moisture into a faintly glowing curved blade of bluish frost. Twist the other way to sheathe. The blade deals +1d6 Cold \u0026 I resist Fire while held. When freezing, it emits 10-ft bright light \u0026 10-ft more dim. Once per hr when drawn, I can snuff nonmagical flames in 30 ft.",
		descriptionLong : "This ancient 8-in adamantine rod has decorative mithral plates \u0026 bands \u0026 can be attuned to in 1 min. A hollow recess housing a sliver of unmelting polar ice is ringed by a circular guard \u0026 a metal cap engraved with \"FR057-B173\". Twist the cap clockwise to condense ambient moisture into a faintly glowing curved blade of bluish frost. Twist the other way to sheathe. The blade deals +1d6 Cold \u0026 I have Fire resistance while held. In freezing temps, it emits a 10-ft radius of bright light \u0026 10-ft more dim. Once per hour when I draw it, I can snuff all nonmagical flames in 30 ft.",
		descriptionFull : "This weapon initially appears to be an adamantine rod some 8-inches long and an inch thick adorned with decorative mithral plates and bands. It has a hollow recess ringed by a circular guard on one end, and a metal cap engraved with \"FR057-B173\" on the other. Chambered within the hollow is an arcane mechanism housing a sliver of unmelting polar ice, which rapidly condenses ambient moisture into a faintly glowing, curved blade of bluish frost when the metal cap is twisted clockwise (the act of unsheathing the blade). Twisting the metal cap in the opposite direction disperses (sheathes) the blade.\n   " + toUni("Harmonious") + ". This ancient invention has been designed for ease of use, and brief experimentation is sufficient to understand its workings. Attuning to this item takes only 1 minute.\n   When you hit with an attack roll using this magic weapon, the target takes an extra 1d6 Cold damage. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can't be used again for 1 hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "shortsword",
			regExpSearch : /^(?=.*frostbite)(?=.*cryo)(?=.*katana).*$/i,
			name : "Frostbite Cryo Katana, Frost Brand Shortsword",
			description : "Finesse, light, vex; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"giant slayer greatsword (ddep5-2)" : {
		name : "Giant Slayer Greatsword (DDEP5-2)",
		source : [["AL","S5"]],
		type : "weapon (any simple or martial)",
		rarity : "rare",
		description : "This immense +1 weapon is fashioned from crudely-forged black iron with an unfinished translucent white stone set in the pommel — engraved with the rune Dod (death). When I hit a Giant, it does +2d6 damage and the Giant must make a DC 15 Strength save or fall Prone.",
		descriptionFull : "This immense weapon is fashioned from crudely-forged black iron with an unfinished, translucent white stone set in the pommel — engraved with the rune Dod (death).\n   You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   When you hit a Giant with this weapon, the Giant takes an extra 2d6 damage of the weapon's type and must succeed on a DC 15 Strength saving throw or have the Prone condition.",
		weaponsAdd : { select : ["Giant Slayer Greatsword"], options : ["Giant Slayer Greatsword"] },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 damage vs. giants; Giants DC 15 Str save or prone';
				}
			},
			'If I include the words "Giant Slayer" in a the name of a weapon, it will be treated as the magic weapon Giant Slayer. It has +1 to hit and damage and when hitting a creatures with the giant type, it does +2d6 damage and the target has to make a DC 15 Strength save or be knocked prone.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isWeapon && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
		}
		},
	"greatsword of sharpness: desolation (ddal8-14)" : {
		name : "Desolation, Sword of Sharpness (DDAL8-14)",
		source : [["AL","S8"]],
		type : "weapon (any sword that deals slashing damage)",
		rarity : "rare",
		attunement : true,
		allowDuplicates : true,
		description : "This greatsword is made from a strange black material that feels like frigid steel. When I roll a 20 against a creature, it takes +14 Slashing and gains 1 lvl of Exhaustion. The sword does max damage vs objects. With command word, it sheds bright light in a 10-ft radius and 10-ft more dim. Only I can see the light. Repeat command or stow to stop.",
		descriptionLong : "This Greatsword of Sharpness is made from a strange black material that feels like frigid steel. When I attack a creature and roll a 20 on the attack, that target takes an extra 14 Slashing and gains 1 level of Exhaustion. When used against an object, the damage is maximized. In addition, I can speak a command word to make the blade shed bright light in a 10-foot radius and dim light for an additional 10 feet. Only I can see the light. Speaking the command word again or sheathing the sword puts out the light.",
		descriptionFull : "This greatsword of sharpness is made from a strange black material that feels like frigid steel. If commanded to shed light, only you can see it. When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.\n   When you attack an object with this magic weapon and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the d20 for the attack roll, that target takes an extra 14 Slashing damage and gains 1 Exhaustion level.",
		weaponOptions : {
			baseWeapon : "greatsword",
			name : "Desolation, Greatsword of Sharpness",
			regExpSearch : /^(?=.*desolation).*$/i,
			description : "Heavy, two-handed, graze; max damage vs. objects; On 20: +14 dmg & 1 lvl Exhaustion",
			selectNow : true,
			},
		},
	"greatsword of warning: ever vigilant (ccc-bmg-moon3-3)" : {
			name : "Ever Vigilant, Sword of Warning (BMG-MOON3-3)",
			source : [["AL","CCC"]],
			type : "weapon (greatsword)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This silvered greatsword has a pommel shaped like a unicorn's head & its blade is inscribed with prayers to the Earthmother. Some say it's Cymrych Hugh's legendary sword. Others say it's a reflection & the original rests with the Earthmother, awaiting a true hero. Allies in 30 ft & I have adv on initiative. The sword also magically awakens us from nonmagical sleep if combat starts.",
			descriptionLong : "This silvered greatsword has a pommel shaped like a unicorn's head and its blade is inscribed with prayers to the Earthmother. Some say it's Cymrych Hugh's legendary sword. Others say it's only a reflection and the original rests with the Earthmother, awaiting a worthy hero. Allies in 30 ft and I have advantage on initiative rolls. The sword also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "This silvered greatsword has a pommel shaped like a unicorn's head, and its blade is inscribed with inscriptions that are prayers to the Earthmother. Some say this is Cymrych Hugh's legendary sword, while others say it's a reflection and that the original rests with the Earthmother, awaiting a hero truly worthy of wielding it.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Ever Vigilant, Greatsword of Warning"], options : ["Ever Vigilant, Greatsword of Warning"] },
			},
	"greatsword of wounding (ddex2-15)" : {
		name : "Greatsword of Wounding (DDEX2-15)",
		source : [["AL","S2"]],
		rarity : "rare",
		attunement : true,
		allowDuplicates : true,
		description : "This sword is serrated along the back edge with a single deep fuller running its length, bifurcating the point. The sharkskin hilt has a large unfinished gem pommel. Anyone familiar with Aleyd Burral & her fall from grace treats me suspicously. It deals +2d6 Necrotic and target makes a DC 15 Con save or can't regain HP for 1 hr. Repeat save at each turn end to stop the effect.",
		descriptionLong : "This greatsword is serrated along the back edge with a single deep fuller running its length, bifurcating the point. The sharkskin-wrapped hilt ends in a pommel made from a large unfinished gem. The sword has a tragic history. Anyone familiar with Aleyd Burral and her fall from grace recognizes the weapon and treats me suspicously. It deals +2d6 Necrotic and the target must make a DC 15 Con save or they can't regain HP for 1 hour. They can repeat the save at the end of each turn to stop the effect.",
		descriptionFull : "This sword's blade is serrated along the back edge with a single, deep fuller running the length of its blade, bifurcating the point. The sharkskin-wrapped hilt ends in a pommel fashioned of a large, unfinished gemstone. This sword, however, has a tragic history. Anyone familiar with Aleyd Burral and her fall from grace recognizes the weapon and treat the wielder with suspicion.\n   When you hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success.",
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /greatsword of wounding/i,
			name : "Greatsword of Wounding",
			description : "Heavy, two-handed, graze; +2d6 Necrotic; DC 15 Con save or can't regain HP 1 hr",
			selectNow : true,
		},
	},
	"longsword of vengeance (ccc-bmg-moon15-2)" : {
		name : "Longsword of Vengeance (BMG-MOON15-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		attunement : true,
		description : "This clear crystal +1 longsword is no longer tainted by Malar's corruption. It's loyal to me, a dull blade for others, & leaves a blue-white trail when hitting a target. I'm unwilling to let it go & have disadv on atks with other weapons. If I take dmg in combat, DC 15 Wis save or I must atk my attacker until they drop to 0 or I can't reach in melee. Banishment turns it into a normal +1 longsword.",
		descriptionLong : "This clear crystal +1 longsword is no longer tainted by Malar's corruption. It's only loyal to me, appearing as a dull blade to everyone else, and leaves a blue-white trail in its wake when striking a target. I'm unwilling to let it go and have disadvantage on attacks with other weapons. If I take damage in combat, I must pass a DC 15 Wis save or attack my attacker until they drop to 0 or I can't reach them in melee. Banishment turns it into a normal +1 longsword.",
		descriptionFull : "The sword, no longer tainted by Malar's corruption, is now a clear crystal. The sword is only loyal to the wielder, becoming a dull blade to anyone else. When the sword strikes a target, a blue-white trail is left briefly in its wake.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This weapon is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it on your person at all times. While attuned to this weapon, you have Disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the weapon is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage from another creature in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting Banishment on the weapon forces the vengeful spirit to leave it. The sword then becomes a +1 Weapon with no other properties.",
		weaponsAdd : { select : ["Longsword of Vengeance"], options : ["Longsword of Vengeance"] },
		calcChanges : {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
			]
		}
	},
	"longsword of vengeance (ccc-gary-8)" : {
		name : "Longsword of Vengeance (CCC-GARY-8)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		attunement : true,
		description : "This beautiful +1 longsword has a gold-trimmed hilt and is cursed. I'm unwilling to give it up and have disadvantage on atks with other weapons. If I take damage in combat, I must pass a DC 15 Wis save or attack my attacker until they drop to 0 or I can't reach them in melee. Banishment turns it into a normal +1 longsword.",
		descriptionFull : "This beautiful longsword has a gold-trimmed hilt.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This weapon is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it on your person at all times. While attuned to this weapon, you have Disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the weapon is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage from another creature in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting Banishment on the weapon forces the vengeful spirit to leave it. The sword then becomes a +1 Weapon with no other properties.",
		weaponsAdd : { select : ["Longsword of Vengeance"], options : ["Longsword of Vengeance"] },
		calcChanges : {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
			]
		}
	},
	"longsword of vengeance (ccc-hatms1-2)" : {
		name : "Longsword of Vengeance (HATMS1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		attunement : true,
		description : "This cursed +1 black metal longsword has a sheen of red. The black leather-wrapped hilt ends in a pommel shaped like a human skull. It's possessed by the spirit of the orc warchief K'tagh Redeye, who urges me to violence against humans. I won't part with it & have disadv on atks with other weapons. If I take dmg in combat, I must pass a DC 15 Wis save or attack my attacker until they drop to 0 or I can't reach them in melee. Banishment turns it into a normal +1 longsword.",
		descriptionLong : "This +1 black metal longsword has a sheen of red and is cursed. The black leather-wrapped hilt ends in a pommel shaped like a human skull. It's possessed by the spirit of the orc warchief K'tagh Redeye, who urges me to violence against humans. I won't part with it and have disadvantage on attacks with other weapons. If I take damage in combat, I must pass a DC 15 Wis save or attack my attacker until they drop to 0 or I can't reach them in melee. Banishment turns it into a normal +1 longsword.",
		descriptionFull : "The blackened metal of this longsword has a sheen of red. The black leather-wrapped hilt ends in a pommel shaped like a human skull.\n  The longsword is inhabited by an orc warchief, K'tagh Redeye, a berserker who has a terrible loathing of humans. If K'tagh is banished or otherwise removed from the sword, the blade loses its red sheen.\n  While holding the sword, the voice of K'tagh Redeye echoes in the wielder's mind, cursing and nudging the owner to greater violence, especially toward humans. If the person wielding the sword is a human, K'tagh constantly casts insults and threats. The spirit cannot withhold the benefits of the sword from a wielder, however.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This weapon is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it on your person at all times. While attuned to this weapon, you have Disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the weapon is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage from another creature in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting Banishment on the weapon forces the vengeful spirit to leave it. The sword then becomes a +1 Weapon with no other properties.",
		weaponsAdd : { select : ["Longsword of Vengeance"], options : ["Longsword of Vengeance"] },
		calcChanges : {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
			]
		}
	},
	"longsword of vengeance (ccc-mace1-3)" : {
		name : "Longsword of Vengeance (MACE1-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		attunement : true,
		description : "The pommel of this cursed +1 longsword is a skull wreathed in purple flames. It carries a secret message I can't find \u0026 I often hear faint mumbling voices. I won't part with it \u0026 have disadv on atks with other weapons. If I take dmg in combat, I make DC 15 Wis save or atk my attacker until they drop to 0 or I can't reach in melee. Banishment turns it into a normal +1 longsword.",
		descriptionLong : "The pommel of this cursed +1 longsword is carved into a skull wreathed in purple flames. It carries a secret message I don't know how to find and while attuned, I hear faint mumbling voices. I won't part with the sword and have disadvantage on attacks with other weapons. If I take damage in combat, I must pass a DC 15 Wis save or attack my attacker until they drop to 0 or I can't reach them in melee. Banishment turns it into a normal +1 longsword.",
		descriptionFull : "The pommel of this sword is carved to look like a skull wreathed in purple flames. You hear faint, mumbling voices when you are attuned to the sword. The sword carries a secret message but you have no idea how to find it.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This weapon is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it on your person at all times. While attuned to this weapon, you have Disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the weapon is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage from another creature in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting Banishment on the weapon forces the vengeful spirit to leave it. The sword then becomes a +1 Weapon with no other properties.",
		weaponsAdd : { select : ["Longsword of Vengeance"], options : ["Longsword of Vengeance"] },
		calcChanges : {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
			]
		}
	},
	"moon-touched greatsword (ddal-drw17)" : {
		name : "Moon-Touched Greatsword (DDAL-DRW17)",
		source : [["AL","DRW"]],
		type : "weapon (greatsword)",
		rarity : "common",
		description : "The flats of this blade act like windows onto a night sky with blinking stars \u0026 a large viridian sphere shifting slowly in different directions. 3 sluggish, green tentacles protrude from 1 end, acting as guard & grip. When unsheathed in darkness, it sheds green moonlight from the viridian sphere, creating 15-ft of bright light \u0026 15-ft more dim.",
		descriptionFull : "The flats of the blade act like windows onto a night sky with blinking stars and a large viridian sphere shifting slowly in different directions. Three sluggish, green tentacles protrude from one end of the blade, acting as its guard and grip. The light the blade produces is green, and is emitted from the viridian sphere.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Greatsword"], options : ["Moon-Touched Greatsword"] },
	},
	"moon-touched longsword (bmg-drw-od-1)" : {
		name : "Moon-Touched Longsword (BMG-DRW-OD-1)",
		source : [["AL","DRW"]],
		type : "weapon (longsword)",
		rarity : "common",
		description : "The crossguard of this sword resembles a bull's head, with its horns curling to form the guards. Each of the bull's eyes is an inset moonstone. When unsheathed in darkness, it sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft.",
		descriptionFull : "The crossguard of this sword is styled to resemble a bull's head, with each of its horns curling off to form one of the guards. Each of the bull's eyes is an inset moonstone.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Longsword"], options : ["Moon-Touched Longsword"] },
	},
	"moon-touched longsword (ccc-ghc-bk1-1)" : {
		name : "Moon-Touched Longsword (CCC-GHC-BK1-1)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "common",
		description : "The blade of this magical longsword is etched with a hawk that has its wings spread and talons extended. When unsheathed in darkness, it sheds moonlight, creating a 15-ft radius of bright light and another 15 ft dim light.",
		descriptionFull : "The blade of this longsword is etched with a hawk that has its wings spread and its talons extended.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Longsword"], options : ["Moon-Touched Longsword"] },
	},
	"moon-touched longsword (ccc-tarot2-6)" : {
		name : "Moon-Touched Longsword (CCC-TAROT2-6)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "common",
		description : "Etched into this curved blade are the phases of Selûne with an upturned crescent, the emblem of the Swords of the Lady, inlaid with silver. The pommel holds a large moonstone. In darkness, the blade sheds moonlight, creating 15-ft of bright light and 15-ft dim.",
		descriptionFull : "Etched into the curved blade of this longsword are the phases of Selûne with the upturned crescent, the emblem of the Swords of the Lady, inlaid with silver. The pommel includes a large moonstone.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Longsword"], options : ["Moon-Touched Longsword"] },
	},
	"moon-touched longsword (ddal0-11d)" : {
		name : "Moon-Touched Longsword (DDAL0-11D)",
		source : [["AL","S0"]],
		type : "weapon (longsword)",
		rarity : "common",
		description : "This elven-made longsword is decorated with intricate scrollwork featuring a full moon shining upon a glade of dancing elves. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-ft radius and dim light for another 15 ft.",
		descriptionFull : "This elven made longsword is decorated with intricate scrollwork featuring a full moon shining down upon a glade of dancing elves.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Longsword"], options : ["Moon-Touched Longsword"] },
	},
	"moon-touched rapier (ccc-gad2-1)" : {
		name : "Moon-Touched Rapier (CCC-GAD2-1)",
		source : [["AL","CCC"]],
		type : "weapon (rapier)",
		rarity : "common",
		description : "This silver rapier is forged to resemble a long tentacle that twists out to a sharp point. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-ft radius and dim light for another 15 ft.",
		descriptionFull : "This silver blade is forged to resemble a long tentacle that twists out to a sharp point.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Rapier"], options : ["Moon-Touched Rapier"] },
	},
	"moon-touched rapier (ccc-sac-4)" : {
		name : "Moon-Touched Rapier (CCC-SAC-4)",
		source : [["AL","CCC"]],
		type : "weapon (rapier)",
		rarity : "common",
		description : "Carved into the hilt of this rapier is the insignia of the Black Moon Pirate Company. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-ft radius and dim light for another 15 ft.",
		descriptionFull : "Carved into the hilt of the rapier is the insignia of the Black Moon Pirate Company.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Rapier"], options : ["Moon-Touched Rapier"] },
	},
	"moon-touched rapier (ccc-unite-5)" : {
		name : "Moon-Touched Rapier (CCC-UNITE-5)",
		source : [["AL","CCC"]],
		type : "weapon (rapier)",
		rarity : "common",
		description : "In darkness, the unsheathed blade of this rapier sheds moonlight, creating bright light in a 15-ft radius and dim light for another 15 ft. While on my person, I can speak Undercommon.",
		descriptionFull : "The bearer of this weapon can speak and understand Undercommon.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		languageProfs : ["Undercommon"],
		weaponsAdd : { select : ["Moon-Touched Rapier"], options : ["Moon-Touched Rapier"] },
	},
	"moon-touched scimitar (fr-dc-dung-1)" : {
		name : "Moon-Touched Scimitar (FR-DC-DUNG-1)",
		source : [["AL","FR-DC"]],
		type : "weapon (scimitar)",
		rarity : "common",
		description : "This katana is stored in an ornate mahogany case with a silver label that reads \"Legendary Sword of Selúne\". In darkness, the unsheathed blade sheds moonlight, with 15-ft bright light and 15-ft more dim light. While underground, I always know my depth below the surface and the direction to the nearest upward path toward Selúne.",
		descriptionFull : "In the style of a katana (functionally a scimitar) stored in an ornate mahogany case with a silver label that reads \"Legendary Sword of Selúne\".\n   " + toUni("Delver") + ". While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward toward Selúne.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Scimitar"], options : ["Moon-Touched Scimitar "] },
	},
	"moon-touched scimitar (fr-dc-ghg-4)" : {
		name : "Moon-Touched Scimitar (FR-DC-GHG-4)",
		source : [["AL","FR-DC"]],
		type : "weapon (scimitar)",
		rarity : "common",
		description : "This scimitar has the holy symbol of Vecna, the Whispered One engraved in the pommel. It warns me, giving +2 initiative if I'm not Incapacitated. In darkness, the unsheathed blade sheds moonlight, with 15-ft bright light and 15-ft more dim light.",
		descriptionFull : "This scimitar has the holy symbol of Vecna, the Whispered One engraved in the pommel.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Scimitar"], options : ["Moon-Touched Scimitar "] },
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	},
	"moon-touched scimitar: moonmaiden's blade (fr-dc-strat-dragon-1)" : {
		name : "Moonmaiden's Blade, Moon-Touched Scimitar",
		source : [["AL","FR-DC"]],
		type : "weapon (scimitar)",
		rarity : "common",
		description : "This scimitar is shaped like a waxing moon. Runes hold a prayer for those buried underground to always find the light. In darkness, the unsheathed blade sheds moonlight, with 15-ft bright light and 15-ft dim. While underground, I always know my depth below the surface and the direction to the nearest upward path.",
		descriptionLong : "This scimitar is shaped like a waxing moon. Runes along the blade hold a prayer that those buried underground will always find the light. In darkness, the unsheathed blade sheds moonlight, creating a 15-ft radius of bright light and another 15-ft dim. While underground, I always know my depth below the surface and the direction to the nearest upward path.",
		descriptionFull : "This scimitar's blade is shaped like a waxing moon. Runes along the blade have a prayer that those buried underground always find the light of the moon.\n   " + toUni("Delver") + ". While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moonmaiden's Blade, Moon-Touched Scimitar"], options : ["Moonmaiden's Blade, Moon-Touched Scimitar "] },
	},
	"moon-touched shortsword (dc-poa-conmar-9)" : {
		name : "Moon-Touched Shortsword (CONMAR-9)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "In darkness, the unsheathed blade of this shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for another 15 ft. This sword has a smaller than usual handle, making it harder to grip but easier to draw.",
		descriptionFull : "This sword has a smaller than usual handle, making it harder to grip, but easier to draw.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword (dc-poa-des-5b)" : {
		name : "Moon-Touched Shortsword (DC-POA-DES-5B)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "This fey-crafted sword was a gift from the Prince of Frost & is cold to the touch, lowering the temperature in 5-ft. Icicles continually form & fall from it when unsheathed. The sword is made from mithral, a blue metal half the normal weight. In darkness, the unsheathed blade sheds moonlight, creating 15-ft of bright light & 15-ft dim.",
		descriptionLong : "This fey-crafted sword was a gift from the Prince of Frost and is cold to the touch, lowering the temperature in a 5-ft radius. Icicles continually form and fall from the blade when unsheathed. The sword is made from mithral, a blue metal that's half the normal weight. In darkness, the unsheathed blade sheds moonlight, creating a 15-ft radius of bright light and another 15-ft dim.",
		descriptionFull : "This fey-crafted blade features mithral construction, a blue metal weighing half the normal weight. The moon-touched shortsword gifted by the Prince of Frost is cold to the touch, lowering the temperature around it in a 5-foot radius. Icicles are continually forming and falling off the blade whenever it is unsheathed.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponOptions : {
			baseWeapon : "shortsword",
			regExpSearch : /^(?=.*mithral)(?=.*moon)(?=.*touched).*$/i,
			name : "Moon-Touched Mithral Shortsword",
			weight : 1,
			description : "Finesse, light, vex; Counts as magical.",
			selectNow : true,
			},
	},
	"moon-touched shortsword (dc-poa-gsp2-3h)" : {
		name : "Moon-Touched Shortsword (GSP2-3H)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "This blade looks like a winged serpent. It has the curved body of a slithering snake, a guard shaped like feathered wings, and a snake head pommel with its tongue sticking out as if hissing. The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light and another 15-ft dim.",
		descriptionFull : "The blade is curved, forming the body of a slithering snake, its guard is designed to look like feathered wings, and the pommel looks like the head of a snake with its tongue sticking out as if hissing. Altogether, it forms a winged serpent.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: fang (dc-poa-gsp3-2)" : {
		name : "Fang, Moon-Touched Shortsword (GSP3-2)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "Curved with a sharp tip, this bone sword is made from an Ancient White Dragon. The bone handle is wrapped with cloth that always stays dry. When unsheathed, it glows a light blue-green \u0026 sheds 15-ft bright moonlight \u0026 15-ft dim in darkness.",
		descriptionLong : "Curved with a sharp tip, this shortsword was made with bone from an Ancient White Dragon. The handle is also bone and wrapped with cloth that always stays dry. The unsheathed blade glows a light blue-green color and sheds moonlight in darkness, creating a 15-ft radius of bright light and another 15-ft dim.",
		descriptionFull : "The blade glows a light blue-green color. Curved with a sharp tip, the blade was made from bone from an Ancient White Dragon. The handle is also bone, wrapped with cloth that always stays dry.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Fang, Moon-Touched Shortsword"], options : ["Fang, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword (dc-poa-jcdc-1)" : {
		name : "Moon-Touched Shortsword (JCDC-1)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "In darkness, the unsheathed blade of this shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for another 15 ft. Its hilt is polished white ivory carved to resemble a fearsome white dragon.",
		descriptionFull : "The hilt is polished white ivory carved to resemble a fearsome white dragon.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword (dc-poa-mcwws-2)" : {
		name : "Moon-Touched Shortsword (MCWWS-2)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "In darkness, the unsheathed blade of this sword sheds moonlight, creating 15-ft of bright light & 15-ft dim. The pommel is a polished white & grey stone that resembles a full moon. Its hilt is decorated with symbols representing the phases of the moon.",
		descriptionFull : "The pommel stone on the blade is a polished white and grey stone that resembles a full moon. The hilt is decorated with symbols representing the phases of the moon.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: tsukuyomi (dc-poa-tdg1-3)" : {
		name : "Tsukuyomi, Moon-Touched Shortsword (TDG1-3)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "This Wakizashi-style sword is made from star metal with a beautiful hilt of carved rowan & oak. The crossguard, blade & hilt are etched with a lunar motif & embedded with 3 moonstones, shaped in the phases of the moon: crescent, half & full. The blade emits silvery-blue moonlight when unsheathed in darkness, making 15-ft of bright light & 15-ft dim.",
		descriptionLong : "This Wakizashi-style shortsword is crafted from star metals with a beautiful hilt of carved Rowan and Oak. The crossguard, blade and hilt are etched with a lunar motif and embedded with three moonstones. They're shaped in the phases of the moon: crescent, half and full. Silvery-blue moonlight radiates from the blade when unsheathed in darkness, creating a 15-ft radius of bright light and another 15-ft dim.",
		descriptionFull : "This Wakizashi style shortsword is crafted from star metals with a beautiful hilt of carved Rowan-Oak. The crossguard, blade and hilt are etched with a lunar motif and embedded with three moonstones, shaped in the phases of the moon: crescent, half and full. Silvery blue light radiates from the blade whenever it is drawn from the scabbard.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Tsukuyomi, Moon-Touched Shortsword"], options : ["Tsukuyomi, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: blade of the black tortoise (dc-poa-van-mt-1)" : {
		name : "Blade of the Black Tortoise (Moon-Touched Shortsword)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "A sturdy tortoise adorns the ebony sheath of this sword. Engraved roughly into the pommel in Chultan is the githzerai aphorism: \"Endure. In enduring, grow strong\". The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "A sturdy tortoise adorns this sword's ebony sheath. Engraved roughly into the pommel in Chultan is the following githzerai aphorism: \"Endure. In enduring, grow strong\".\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Blade of the Black Tortoise, Moon-Touched Shortsword"], options : ["Blade of the Black Tortoise, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: green dragon gladius (dc-poa-van-mt-1)" : {
		name : "Green Dragon Gladius (Moon-Touched Shortsword)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "A wise imperious dragon is entwined around the jade sheath of this sword. The Chultan word for \"Patience\" is carved into the pommel in a flowing script. The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "A wise, imperious dragon is entwined around this sword's jade sheath. The Chultan word for \"Patience\" is carved into the sword's pommel in a flowing script.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Green Dragon Gladius, Moon-Touched Shortsword"], options : ["Green Dragon Gladius, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: red phoenix falchion (dc-poa-van-mt-1)" : {
		name : "Red Phoenix Falchion (Moon-Touched Shortsword)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "A fiery phoenix bursting from ashes is engraved on the red lacquered sheath of this sword. A Chultan proverbial poem is carved around the pommel: \"The water is calm / but only a fool would cross / sharp teeth lurk below.\" The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light and 15-ft more dim.",
		descriptionFull : "A fiery phoenix bursting from ashes is engraved on this sword's red lacquered sheath. A Chultan proverbial poem is carved around the pommel:"+
		"\n    \t \t\"The water is calm"+
		"\n    \t \tbut only a fool would cross"+
		"\n    \t \tsharp teeth lurk below.\""+
		"\n \n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Red Phoenix Falchion, Moon-Touched Shortsword"], options : ["Red Phoenix Falchion, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: white tiger tulwar (dc-poa-van-mt-1)" : {
		name : "White Tiger Tulwar (Moon-Touched Shortsword)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "The mammoth ivory sheath of this sword bears a carving of a tiger, teeth bared & claws extended, captured forever in mid-pounce. The pommel is polished to a high sheen & bears a Chultan inscription: \"Swift, as a coursing river.\" The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light and 15-ft more dim.",
		descriptionFull : "This sword's sheath is made of mammoth ivory, and bears a relief carving of mighty tiger, teeth bared and claws extended, captured forever in mid-pounce. The sword's pommel is polished to a high sheen, and bears the following inscription in Chultan: \"Swift, as a coursing river.\"\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["White Tiger Tulwar, Moon-Touched Shortsword"], options : ["White Tiger Tulwar, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: platinum fang (fr-dc-dmja-1)" : {
		name : "Platinum Fang, Moon-Touched Shortsword (DMJA-1)",
		source : [["AL","FR-DC"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "This beautiful platinum blade resembles a dragon's fang. Runara, abbess of Dragon's Rest, says it was a gift from Bahamut himself to a brave hero long ago. In darkness, the unsheathed blade sheds moonlight, creating a 15-ft radius of bright light and another 15-ft dim light. The sword also enhances pangs of conscience if I contemplate or do a malevolent act.",
		descriptionFull : "A beautiful, platinum blade that resembles a dragon's fang. Runara, abbess of Dragon's Rest, says that this magic sword was a gift from Bahamut himself to a brave hero from long ago.\n   " + toUni("Conscientious") + ". When the bearer of this item contemplates or undertakes a malevolent act, the item enhances pangs of conscience.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Platinum Fang, Moon-Touched Shortsword"], options : ["Platinum Fang, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword (fr-dc-ucon24)" : {
		name : "Moon-Touched Shortsword (FR-DC-UCON24)",
		source : [["AL","FR-DC"]],
		type : "weapon (shortsword)",
		rarity : "common",
		description : "Forged in furnaces of Selûnarra prior to Karsus's Folly, this shortsword is made of an adamantine alloy etched with engravings of fey creatures. While on my person, I can speak Sylvan. In darkness, the unsheathed blade sheds moonlight, creating a 15-ft radius of bright light and another 15-ft dim light.",
		descriptionFull : "Forged in furnaces of Selûnarra prior to Karsus's Folly, this shortsword is made of adamantine alloy etched with engravings of fey creatures, providing the language property. [Per 2024 AL adjustments, this item could be moon-touched or adamantine. Coding both since someone may take Adamantine here.]\n   " + toUni("Language") + ". The bearer can speak and understand Sylvan while the item is on the bearer's person.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
		languageProfs : ["Sylvan"],
	},
	"moon-touched sword (ccc-bmg-moon6-2)" : {
		name : "Moon-Touched Sword (CCC-BMG-MOON6-2)",
		nameTest : "/moon-touched.*(ccc-bmg-moon6-2)/i",
		source : [["AL","CCC"]],
		type: "weapon (Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword)",
		rarity : "common",
		description : "This sword is paper-thin. Geometric runes along its length contrast the sweeping elven make. The script is unknown, but purportedly reads: \"I am but a shard.\" In darkness, the unsheathed blade sheds moonlight, creating 15-ft of bright light \u0026 15-ft dim.",
		descriptionFull : "The blade is thin to the point of being paper. Geometric runes run along its length, in stark contrast to the sweeping elven make. The script is unknown, but purportedly it reads: “I am but a shard.”\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : ["between", "Moon-Touched", "(BMG-MOON6-2)"],
		itemName1stPage : ["suffix", "Moon-Touched"],
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /glaive|greatsword|longsword|rapier|scimitar|shortsword/i.test(v.baseWeaponName) && /moon.touched/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Moon-Touched" in the name of a sword, it will be treated as the magic weapon Moon-Touched Sword.'
			]
		}
	},
	"moon-touched sword (ccc-bmg-moon10-2)" : {
		name : "Moon-Touched Sword (CCC-BMG-MOON10-2)",
		nameTest : "/moon-touched.*(ccc-bmg-moon10-2)/i",
		source : [["AL","CCC"]],
		type: "weapon (Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword)",
		rarity : "common",
		description : "A shard of pure moonlight, this magical sword has no guard & barely enough hilt for my grip. It always glows with a soft pale white radiance. In darkness, the unsheathed blade sheds moonlight, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "A shard of pure moonlight, this sword has no guard and barely enough hilt for the wielder's grip. It always glows with a soft, pale white radiance.\n   In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : ["between", "Moon-Touched", "(BMG-MOON10-2)"],
		itemName1stPage : ["suffix", "Moon-Touched"],
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /glaive|greatsword|longsword|rapier|scimitar|shortsword/i.test(v.baseWeaponName) && /moon.touched/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Moon-Touched" in the name of a sword, it will be treated as the magic weapon Moon-Touched Sword.'
			]
		}
	},
	"nine lives stealer longsword: love's bite (ddal7-11)" : {
		name : "Love's Bite, Nine Lives Stealer (DDAL7-11)",
		source : [["AL","S7"]],
		rarity : "very rare",
		attunement : true,
		description : "The blade of this elegantly-curved +2 longsword is silvery-blue steel gilt in gold. A strip of delicate paper with a breathtakingly beautiful poem hangs from the pommel. When I roll a crit, my heart fills with the agonizing ache of spurned love. The sword has 1d8+1 charges. If it crits a living creature with <100 HP, target makes DC 15 Con save or dies. If it dies, 1 charge is used.",
		descriptionLong : "The blade of this elegantly-curved +2 longsword is made of silvery-blue steel gilt in gold. A strip of delicate paper hangs from the pommel, on which is inscribed a breathtakingly beautiful poem. When I score a critical hit with the sword, my heart is filled with the agonizing ache of spurned love. The sword has 1d8+1 charges; if it crits a creature (not Construct/Undead) with less than 100 HP, the target must make a DC 15 Con save or die. If it dies, 1 charge is used.",
		descriptionFull : "The blade of this elegantly-curved longsword is fashioned of silvery-blue steel gilt in gold. A strip of delicate paper hangs from the pommel, upon which is inscribed a breathtakingly beautiful poem. When the wielder scores a critical hit with the weapon, its heart is filled with the agonizing ache of spurned love.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Life Stealing") + ". The weapon has 1d8 + 1 charges. When you attack a creature that has fewer than 100 Hit Points with this weapon and roll a 20 on the d20 for the attack roll, the creature must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body. Constructs and Undead succeed on the save automatically. The weapon loses 1 charge if the creature is slain. When the weapon has no charges remaining, it loses this property.",
		usages : "1d8+1",
		recovery : "Never",
		weaponsAdd : { select : ["Love's Bite, Nine Lives Stealer Longsword"], options : ["Love's Bite, Nine Lives Stealer Longsword"] },
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On crit to target <100 HP, DC 15 Con save or die';
				}
			},
			'If I include the words "Nine Lives Stealer" in a the name of a weapon, it will be treated as the magic weapon Nine Lives Stealer. It has +2 to hit and damage. Also, as long as it has charges left, when it does a critical hit against a creature with fewer than 100 HP, that creature must make a DC 15 Constitution saving throw or die.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 2;
				}
			}, ''
		]
		}
	},
	"nine lives stealer scimitar (ccc-qcc2018-1)" : {
		name : "Nine Lives Stealer Scimitar (CCC-QCC2018-1)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		attunement : true,
		description : "The hilt of this +2 scimitar is covered with carved ancient Rellanic runes that comprise nonsensical words or a list of proper names. The sword has 9 charges. If it crits a living creature with <100 HP, the target makes DC 15 Con save or dies. If it dies, 1 charge is used.",
		descriptionLong : "The hilt of this +2 scimitar is covered with carved ancient Rellanic runes that seem to comprise nonsensical words or a list of proper names. The sword has 9 charges. If I roll a critical hit against a creature (not Construct/Undead) with less than 100 HP, the target must make a DC 15 Con save or die. If it dies, 1 charge is used.",
		descriptionFull : "The hilt of this weapon is covered with carved, ancient Rellanic runes that seem to comprise nonsensical words or, possibly, a list of proper names. You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   The sword has 9 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
		usages : "9",
		recovery : "Never",
		weaponsAdd : { select : ["Nine Lives Stealer Scimitar"], options : ["Nine Lives Stealer Scimitar"] },
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On crit to target <100 HP, DC 15 Con save or die';
				}
			},
			'If I include the words "Nine Lives Stealer" in a the name of a weapon, it will be treated as the magic weapon Nine Lives Stealer. It has +2 to hit and damage. Also, as long as it has charges left, when it does a critical hit against a creature with fewer than 100 HP, that creature must make a DC 15 Constitution saving throw or die.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 2;
				}
			}, ''
		]
		}
	},
	"rapier of life stealing (ccc-pdxage-2-1)" : {
		name : "Rapier of Life Stealing (PDXAGE-2-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		attunement : true,
		description : "This matte-black rapier doesn't reflect light, emits a fiendish aura & is chill to the touch in 30 ft of a good cleric or paladin. I feel hungry even if I've eaten. On a nat 20, target takes +15 Necrotic if not Construct or Undead. I gain temp HP equal to Necrotic dealt. I also feel an invigorating euphoria & am satiated. The blade glows dully when fed.",
		descriptionLong : "This matte-black rapier doesn't reflect light, radiates a fiendish aura and turns chill to the touch within 30 ft of a good cleric or paladin. While attuned, I often feel hungry even if I've eaten. When I roll a natural 20, the target takes +15 Necrotic damage if not a Construct or Undead. I gain temp HP equal to the Necrotic dealt. I also feel an invigorating euphoria and am satiated. The blade glows dully when fed.",
		descriptionFull : "This matte-black rapier does not reflect light. It radiates a faint fiendish aura, and turns chill to the touch when within 30 feet of a good-aligned cleric or paladin. Once attuned, the wielder often feels hungry, even if they have just eaten. However, when the life stealing power is used, the wielder experiences an invigorating euphoria and feels satiated. The blade glows dully when it has fed.\n   When you attack a creature with this magic weapon and roll a 20 on the d20 for the attack roll, that target takes an extra 15 Necrotic damage if it isn't a Construct or an Undead, and you gain Temporary Hit Points equal to the amount of Necrotic damage taken.", 
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*rapier)(?=.*life)(?=.*stealing).*$/i,
			name : "Rapier of Life Stealing",
			source : [["AL","CCC"]],
			description : "Finesse, vex; On 20: +15 Necrotic (if not Construct/Undead), temp HP equal to Necrotic taken",
			selectNow : true,
			},
	},
	"scimitar of life stealing: night cutter (ccc-rcc-1-4)" : {
		name : "Night Cutter, Scimitar of Life Stealing (RCC-1-4)",
		source : [["AL","CCC"]],
		rarity : "rare",
		attunement : true,
		description : "The solid black blade of this scimitar is etched with intricate spider webs. It belonged to a captain of House Rakarn. If worn openly, drow treat me as a usurper if I'm not drow. I always know my depth underground & the direction to the nearest upward path. On a nat 20, target takes +15 Necrotic if not Construct/Undead. I gain temp HP equal to Necrotic dealt.",
		descriptionLong : "The blade of this scimitar is solid black and etched with intricate spider webs. It belonged to a respected captain of House Rakarn. When I bear it openly, drow consider me unworthy of it and treat me as a usurper unless I'm also drow. While carried, I always know my depth underground and the direction to the nearest upward path. When I roll a natural 20, the target takes +15 Necrotic if not a Construct or Undead. I gain temporary HP equal to the Necrotic damage dealt.",
		descriptionFull : "The blade of this scimitar is solid black and etched with intricate spider webs. While bearing it, you always know the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   You openly carry the black-bladed scimitar called Night Cutter, which once belonged to a respected drow captain of House Rakarn. Unless your race is drow, you are considered unworthy by most drow to carry it, and they take an instant dislike to you, treating you as a usurper. If your race is drow, or if you do not openly carry the weapon, this drawback does not apply to you.\n   When you attack a creature with this magic weapon and roll a 20 on the d20 for the attack roll, that target takes an extra 15 Necrotic damage if it isn't a Construct or an Undead, and you gain Temporary Hit Points equal to the amount of Necrotic damage taken.", 
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*night)(?=.*cutter).*$/i,
			name : "Night Cutter, Scimitar of Life Stealing",
			source : [["AL","CCC"]],
			description : "Finesse, light, nick; On 20: +15 Necrotic (if not Construct/Undead), temp HP equal to Necrotic taken",
			selectNow : true,
			},
	},
	"scimitar of life stealing: krakenfang (po-bk-3-7)" : {
		name : "Krakenfang, Scimitar of Life Stealing (BK-3-7)",
		source : [["AL","PO"]],
		rarity : "rare",
		attunement : true,
		description : "This thin-bladed bone sword has engravings of tentacles from tip to kraken head hilt. More tentacles entwine to form the guard. It radiates necrotic magic & lightens when it draws blood, from deep black to maroon. It reverts to the original color 8 hrs later. When I roll a nat 20, target takes +15 Necrotic if not a Construct/Undead. I gain temp HP equal to Necrotic dealt.",
		descriptionLong : "This bone-crafted thin-bladed sword bears intricate engravings of tentacles from its tip to the kraken head hilt. The remaining tentacles entwine to form the cross guard. Krakenfang radiates a continuous necrotic magic aura and lightens when it draws blood, from deep black to maroon. It reverts to its original color 8 hrs later. When I roll a natural 20, the target takes +15 Necrotic if not a Construct or Undead. I gain temporary HP equal to the Necrotic dealt.",
		descriptionFull : "This bone-crafted, thin bladed scimitar bears intricate engravings of tentacles that snake from blade tip to hilt-a kraken's head. The remaining tentacles entwine to form the weapons cross guard.\n   Krakenfang radiates a continuous necrotic magic aura. The scimitar's surface lightens when it draws blood, from deep black to maroon red. It reverts back to its original color 8 hours after its last use.\n   When you attack a creature with this magic weapon and roll a 20 on the d20 for the attack roll, that target takes an extra 15 Necrotic damage if it isn't a Construct or an Undead, and you gain Temporary Hit Points equal to the amount of Necrotic damage taken.",
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*krakenfang).*$/i,
			name : "Krakenfang, Scimitar of Life Stealing",
			source : [["AL","PO"]],
			description : "Finesse, light, nick; On 20: +15 Necrotic (if not Construct/Undead), temp HP equal to Necrotic taken",
			selectNow : true,
			},
	},
	"scimitar of speed (sj-dc-amot-3)" : {
		name : "Scimitar of Speed (SJ-DC-AMOT-3)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		description : "Made of the prototype device, this +2 scimitar has a futuristic look. The blade glows faint blue glow from the piece running down the middle. The black & white hilt conforms to my grip & makes me feel slightly out of time. I see a split second into the future & gain +2 initiative if I'm not Incapacitated. I can also make one attack with it as a bonus action on each of my turns.",
		descriptionLong : "Made of the prototype device, this scimitar has a futuristic look about it. The blade glows a faint blue glow from the piece running down the middle. The black and white hilt also conforms to my grip. While wielded, I feel slightly out of time, seeing a split second into the future and giving me +2 initiative if I'm not Incapacitated. I also gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "Made of the prototype device, this scimitar has a futuristic look about it. The blade glows a faint blue glow from the piece of protoype device running in the middle. The black and white hilt also conforms to the grip of whoever is holding it.\n   " + toUni("Guardian") + ". While wielding this sword, you feel slightly out of time, seeing a split second into the future. This effect grants you a +2 bonus to initiative rolls. \n   You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar)(?=.*speed).*$/i,
			name : "Scimitar of Speed",
			description: "Finesse, light, nick; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	},
	"scimitar of speed: deceiver (sj-dc-dfa-3)" : {
		name : "Deceiver, Scimitar of Speed (DFA-3)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		description : "This curved +2 scimitar is made from a single piece of infernal iron, with no discernable hilt. When it draws blood, I feel optimistic about the future, as if I can defeat or trick any opponent. I can attack with it as a bonus action once per turn.",
		descriptionLong : "This curved blade is made from a single piece of infernal iron, with no discernable hilt. Whenever it draws blood, I feel optimistic about what the future holds, as if I can defeat or trick any opponent who crosses me. Additionally, I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "This curved blade is made from a single piece of infernal iron, with no discernable hilt. Whenever it draws blood, the bearer feels optimistic about what the future holds, as if they can defeat or trick any opponent who crosses them.\n   You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*deceiver).*$/i,
			name : "Deceiver, Scimitar of Speed",
			description: "Finesse, light, nick; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed: radiance's glare (sj-dc-php-lrd-1)" : {
		name : "Radiance's Glare, Scimitar of Speed (PHP-LRD-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		description : "This starmetal +2 scimitar gleams golden in the sun and lets me speak Netherese. When it hits, light reflects intensely and I can read: \"All shadows of doubt will wither under the light of truth\" in old script. I can attack with it as a bonus action once per turn.",
		descriptionLong : "This starmetal scimitar gleams golden in the sun and while on my person, I can speak Netherese. When it hits, the light reflects intensely, making scripts in an old language readable, \"All shadows of doubt will wither under the light of truth\". Additionally, I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "The starmetal scimitar gleams golden in the sun, reflecting the light intensely whenever it hits. Scripts in an old language readable during this, “All shadows of doubt will wither under the light of truth”.\n   " + toUni("Language") + ". The bearer can speak and understand a language Netherese while the item is on the bearer's person.\n   You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		languageProfs : ["Netherese"],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*radiance|radiance's)(?=.*glare).*$/i,
			name : "Radiance's Glare, Scimitar of Speed",
			description: "Finesse, light, nick; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed (sj-dc-triden-myke-2)" : {
		name : "Scimitar of Speed (TRIDEN-MYKE-2)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		description : "This fine blade has fold lines down its length and glints in the barest of light. It feels like it's calling me \u0026 I can attune in 1 minute. I gain +2 to the sword's attack \u0026 damage rolls \u0026 can attack with it as a bonus action once per turn.",
		descriptionLong : "This fine blade has fold lines down its length and seems to glint at every angle in the barest of lights. Perhaps that's why it feels like it's calling to me and I can attune in 1 minute. Additionally, I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "This fine blade with fold lines showing down its length seems to glint at any angle in the presence of even the barest of lights. Perhaps that is why it feels like it's calling to you...\n   " + toUni("Harmonious") + ". Attuning to this item takes only 1 minute.\n   You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar)(?=.*speed).*$/i,
			name : "Scimitar of Speed",
			description: "Finesse, light, nick; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed: beam (sj-dc-vmt-1)" : {
		name : "Beam Scimitar of Speed (VMT-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		description : "The blade of this +2 scimitar is made of an eerie black light & forms automatically when unsheathed. It was attached to the Honorable Knight statue after its theft by the evil wizard Manshoon. The Blackstaff later shrunk the sword down and awarded it to the heroes who rescued the statue. I can attack with it as a bonus action once per turn.",
		descriptionLong : "This scimitar's blade is made entirely of an eerie black light. The blade automatically forms when the sword is removed from its sheath. It was once attached to the Honorable Knight statue after its theft by the evil wizard Manshoon. The sword was later removed and shrunken down by the Blackstaff to be awarded to the heroes who rescued the statue. I gain a +2 bonus to attack and damage rolls made with the sword and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "The sword was once attached to the Honorable Knight statue after the statue's theft by the evil wizard Manshoon. It was later removed and shrunken down by the Blackstaff and awarded to the heroes who rescued the statue.\n   " + toUni("Strange Material") + ". This scimitar's blade is made entirely of an eerie black light although it still does slashing damage. Its blade automatically forms when the sword is removed from its sheath.\n   You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*beam)(?=.*scimitar)(?=.*speed).*$/i,
			name : "Beam Scimitar of Speed",
			description: "Finesse, light, nick; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed: manthor “vow of the forest” (wbw-dc-andl-3)" : {
		name : "Manthor, Vow of the Forest (Scimitar of Speed)",
		source : [["AL","WBW-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		description : "I swore my fealty to Alindaya and was knighted as a protector of the Feywild, promising to aid them in times of need. This +2 scimitar came from the power of my pact. The star metal blade is very light and embossed with leaves. Feywild magic lets me attack with it as a bonus action once per turn. The hilt bears Sylvan words in Espruar script: “Only those who vow to defend nature with swift and decisive actions may wield me”. It also warns me, giving +2 initiative if I'm not Incapacitated.",
		descriptionLong : "I have sworn my fealty to Alindaya, promising to protect nature and come to their aid in times of need. In exchange, they knighted me as a protector of the Feywild. This +2 scimitar manifested from the power of my pact, that I may carry out my promises. The star metal blade is incredibly light and embossed with imprints of leaves. It's enchanted with Feywild magic that allows me to use it with superior speed. I can make one attack with it as a bonus action on each of my turns. The hilt bears Sylvan words in the Espruar script: “Only those who vow to defend nature with swift and decisive actions may wield me”. The sword also warns me, giving +2 to initiative if I'm not Incapacitated.",
		descriptionFull : "You have promised to forever protect nature, come to Alindaya's aid in their time of need, and sworn your everlasting fealty to Alindaya. In exchange, they knighted you as a protector of the Feywild. This sword manifested itself from the power of your binding pact, that you may carry out your promises. It is yours to keep. [GFP Item]\n   This star metal blade is incredibly light and embossed with imprints of leaves. It is enchanted with magic from the Feywild that allows the wielder to use it with superior speed. The hilt bears following words written in Sylvan using the Espruar script: “Only those who vow to defend nature with swift and decisive actions may wield me”.\n   In addition, this weapon has the Guardian minor property. The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*manthor)(?=.*vow)(?=.*forest).*$/i,
			name : "Manthor, Vow of the Forest",
			source : [["AL","WBW-DC"]],
			description: "Finesse, light, nick; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
	},
	"scimitar of speed: bregrist (wbw-dc-trey-1)" : {
		name : "Bregrist, Scimitar of Speed (TREY-1)",
		source : [["AL","WBW-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		description : "The name of this famed +2 scimitar translates to \"quick cut\" in Common. Also known as Slicer, the finely honed blade is edged in silver and was superbly crafted by an elven smith. It's inlaid with stylized silver vines that run the length of the blade and spell its name in Elvish. I can attack with it as a bonus action once per turn.",
		descriptionLong : "This is the famed scimitar Bregrist, also known as Slicer. The Elvish name translates to \"quick cut\" in Common. The finely honed blade is edged in silver and was superbly crafted by a skilled elven smith. It's also inlaid with stylized silver vines running the length of the blade and spelling its name in Elvish. I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "This is the famed scimitar ‘Bregrist' (also known as ‘Slicer'). Those who speak Elvish will know that Bregrist translates to \"quick cut\" in Common. Bregrist is a Scimitar of Speed. It is superbly crafted, and clearly made by an extremely skilled elven maker. The blade is finely honed and edged in silver. It is also inlaid with silver stylized vines running the length of the blade, spelling out the name in Elvish. [GFP Item]\n   You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*bregrist).*$/i,
			name : "Bregrist, Scimitar of Speed",
			description: "Finesse, light, nick; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed: dread cutlass (sj-dc-dwr-3)" : {
		name : "Dread Cutlass, Scimitar of Speed (DWR-3)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		description : "This pirate's cutlass has a long red tassel hanging from the end of its hilt. I gain a +2 bonus to its attack and damage rolls and can attack with it as a bonus action once per turn. The sword also warns me, giving +2 initiative unless I'm Incapacitated.",
		descriptionLong : "This scimitar is forged in the form of a pirate's cutlass with a long red tassel hanging from the end of its hilt. I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns. It also whispers warnings, giving a +2 bonus to initiative if I'm not Incapacitated.",
		descriptionFull : "This scimitar is forged in the form of a pirate's cutlass with a long red tassel hanging from the end of its hilt.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*dread)(?=.*cutlass).*$/i,
			name : "Bregrist, Scimitar of Speed",
			description: "Finesse, light, nick; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of warning: miir (ccc-bwm-4-1)" : {
		name : "Miir, Scimitar of Warning (BWM-4-1)",
		source : [["AL","CCC"]],
		type : "weapon (scimitar)",
		rarity : "uncommon",
		attunement : true,
		advantages : [["Initiative", true]],
		description : "This mithral blade is exquisitely crafted from the finest materials and never becomes dirty. Miir means priceless in Elvish. While on my person, allies in 30 ft and I have adv. on initiative rolls. It also magically awakens us from nonmagical sleep when combat starts.",
		descriptionFull : "This mithral blade is exquisitely crafted from the finest materials, and never becomes dirty. \"Miir\" means “priceless” in Elvish.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
		"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
		"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
		weaponsAdd : { select : ["Miir, Scimitar of Warning"], options : ["Miir, Scimitar of Warning"] },
	},
	"steel: amdraig (bmg-moon-md-9)" : {
		name : "Amdraig ('Steel', BMG-MOON-MD-9)",
		source : [["AL","PO"]],
		type : "weapon (longsword)",
		rarity : "very rare",
		attunement : true,
		prerequisite : "Requires attunement by a good-aligned creature",
		prereqeval : function(v) { return /good/i.test(What("Alignment")); },
		description : "Amdraig was a druid from the Grampalt mountains, 1 of the Nine Blades of the First High King, Cymrych Hugh. She tried to prepare for any fight & was obsessed with wildshaping into a dragon. Tricked by Urphania into fighting Antares the Ashbringer, she moved her spirit to the nearest object before dying. This sentient +2 longsword can cast Revivify once per dawn. It's lawful good, frets over my well-being & doesn't like to back down. She has Int 8, Wis 11, Cha 15; speaks Common & Draconic.",
		descriptionLong : "Amdraig was a druid from the Grampalt mountains and one of the Nine Blades of the First High King, Cymrych Hugh. When alive, she tried to prepare for any battle situation and was obsessed with learning how to wildshape into a dragon. Amdraig was tricked by Urphania, forced to fight the ancient red dragon Antares the Ashbringer by herself. Before dying, she transferred her spirit to the nearest object, a longsword. This sentient +2 longsword can be used to cast Revivify on a target I touch with it once per dawn. She's lawful good, frets over my well-being and doesn't like to back down from a fight. She has Int 8, Wis 11, and Cha 15. The sword can speak, read, and understand Common and Draconic.",
		descriptionFull : "This sentient longsword adds +2 to attack and damage rolls made with it. As an action once per dawn, I can use it to cast Revivify on a target I touch with the sword. Steel is lawful good and frets over my well-being and doesn't like to back down from a fight. It has Int 8, Wis 11, and Cha 15.\n   Amdraig was a druid from Grampalt Mountains and one of the Nine Blades of the First High King, Cymrych Hugh. When she was alive, she always did her best to prepare for any situation that could occur during battle and to make sure she was ready to support her allies.\n   Amdraig was obsessed with learning the secret of wild shaping into a dragon. She was tricked by Urphania, and forced to fight the ancient red dragon Antares the Ashbringer by herself. Before she died, Amdraig transferred her spirit to the nearest object to hand, a longsword.\n   " + toUni("THE NINE BLADES OF THE FIRST HIGH KING") + ". \n   These nine Ffolk warriors fought beside Cymrych Hugh when he fought Kazgaroth the Beast. When Cymrych Hugh was crowned as the first High King of the Ffolk, the Nine Blades became his royal guards—sworn to protect him and his ideals until they cease to exist.",
		weight : 3,
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /amdraig/i,
		name : "Amdraig",
		source : [["AL", "PO"]],
		modifiers : [2, 2],
		selectNow : true
		}],
	spellcastingBonus : [{
		name : "Revivify",
		spells : ["revivify"],
		selection : ["revivify"],
		firstCol : 'oncelr'
	}],
	spellChanges : {
		"revivify" : {
			components : "",
			compMaterial : "",
			changes : "I can cast Revivify once per dawn on a target I touch with Amdraig."
			}
		},
	},
	"sun blade: the seventh sword (ccc-6swords-1)" : {
		name : "The Seventh Sword, Sun Blade (6SWORDS-1)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "rare",
		attunement : true,
		description : "This sword is of unknown origin & unique design. It's only a handle with an ivory figurehead on each end: a devil & dragon. If 1-handed, the dragon's eyes glow red & a blade forms from its mouth. When 2-handed, a 2nd red blade forms from the devil. Bonus action to form/dismiss blades. While blade exists, it's a +2 finesse longsword that works if prof shortswords, does Radiant (+1d8 to Undead) & emits 15-ft bright sunlight & 15-ft dim. Magic action to change by 5 ft/type (min 10/max 30).",
		descriptionLong : "This sword is of unknown origin & unique design. There's no guard, only a handle, which has ivory figureheads on either end: a devil & a dragon. When used 1-handed, the dragon's eyes glow red & a reddish blade extends from its mouth. When used 2-handed, a second blade extends from the devil's mouth, so the weapon looks like a staff. As a bonus action, I can create or dismiss blades. While a blade exists, it acts as a +2 finesse longsword that does Radiant, +1d8 to Undead & emits sunlight: 15-ft bright light & 15-ft dim. As a Magic action, I can change the bright & dim light by 5 ft each (max of 30 ft, minimum of 10 ft each). Requires short or longsword proficiency.",
		descriptionFull : "The origin of this sword is unknown, but its design is highly unique. Unlike typical sun blades that have a metal guard on their hilts, this one is comprised only of handle. The handle is adorned with ivory figureheads on either side - a devil and a dragon. When used one-handed, the dragon's eyes light up red and a blade of reddish sunlight extends from its mouth. When used two-handed, a second blade extends from the devil side of the hilt, resulting in a weapon that is closer in appearance to a staff.\n   This item appears to be a sword hilt.\n" + toUni("Blade of Radiance") + ". While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with the Finesse property. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade.\n   You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.\n" + toUni("Sunlight") + ". The sword's luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*seventh)(?=.*sword).*$/i,
			name : "The Seventh Sword, Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10), sap; +1d8 Radiant to undead",
			modifiers : [2, 2],
			selectNow : true,
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
						fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
					}
				}, ''
			]
		}
	},
	"sun blade: dawnfire (ccc-storm-1)" : {
		name : "Dawnfire, Sun Blade (STORM-1)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "rare",
		attunement : true,
		description : "This ancient hilt is made of orichalcum. The ruby in its pommel sheds dim light for 10 ft if Undead are in 60 ft. As bonus action, make or dismiss a radiant blade from the hilt. While blade exists, it acts as a +2 finesse longsword that does Radiant (+1d8 to Undead), emits 15-ft bright sunlight & 15-ft dim. Magic action to change by 5 ft/type (min 10/max 30). Requires short or longsword proficiency.",
		descriptionLong : "This ancient sword hilt is made of orichalcum and known as Dawnfire. The ruby in its pommel sheds dim light for 10 ft when within 60 ft of Undead. As a bonus action, I can create or dismiss a blade of pure radiance from the hilt. While the blade exists, it acts as a finesse +2 longsword that does Radiant, +1d8 to Undead, and emits sunlight: a 15-ft radius of bright light and 15-ft dim. As a Magic action, I can expand or reduce the bright & dim light by 5 ft each, to a max of 30 ft or minimum of 10 ft each. Requires short or longsword proficiency.",
		descriptionFull : "This ancient sword hilt is made of orichalcum. The ruby in Dawnfire's pommel sheds dim light for 10 feet when within 60 feet of undead.\n   This item appears to be a sword hilt.\n" + toUni("Blade of Radiance") + ". While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with the Finesse property. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade.\n   You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.\n" + toUni("Sunlight") + ". The sword's luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*dawnfire).*$/i,
			name : "Dawnfire, Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10), sap; +1d8 Radiant to undead",
			modifiers : [2, 2],
			selectNow : true,
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
						fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
					}
				}, ''
			]
		}
	},
	"sun blade (ccc-wyc-2-2)" : {
		name : "Sun Blade (CCC-WYC-2-2)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "rare",
		attunement : true,
		description : "This pure gold hilt always shines in my eyes, no matter how dark the environment. It's engraved with holy symbols of the Netherese god Amaunator: ancient on 1 side, current on the other. As a bonus action, I can make or dismiss a radiant blade from the hilt. While blade exists, it acts like a +2 finesse longsword that does Radiant (+1d8 to Undead), emits 15-ft bright sunlight & 15-ft dim. Magic action to change by 5 ft/type (min 10/max 30). Requires short or longsword proficiency.",
		descriptionLong : "This hilt is made of pure gold & always seems to be shining to me, no matter how dark the environment. It's engraved on both sides, on one with the ancient holy symbol of the Netherese god Amaunator & on the other his more recent holy symbol. As a bonus action, I can create or dismiss a blade of pure radiance from the hilt. While the blade exists, it acts as a finesse +2 longsword that does Radiant, deals +1d8 to Undead & emits sunlight: bright light in a 15-ft radius & dim light for another 15-ft. As a Magic action, I can expand or reduce the bright & dim light by 5 ft each, to a maximum of 30 ft or a minimum of 10 ft each. Requires short or longsword proficiency.",
		descriptionFull : "This Sun Blade's hilt is made of pure gold and seems to always be shining to whoever holds it, no matter how dark the environment. It is engraved on both sides, on one side with the ancient holy symbol of Amunator as known by the Netherese and on the other his more recent holy symbol.\n   This item appears to be a sword hilt.\n" + toUni("Blade of Radiance") + ". While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with the Finesse property. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade.\n   You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.\n" + toUni("Sunlight") + ". The sword's luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*sun)(?=.*blade).*$/i,
			name : "Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10), sap; +1d8 Radiant to undead",
			modifiers : [2, 2],
			selectNow : true,
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
						fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
					}
				}, ''
			]
		}
	},
	"sun blade: starshard (rmh-12)" : {
		name : "Starshard, Sun Blade",
		source : [["AL:R", 12]],
		type : "weapon (longsword)",
		rarity : "rare",
		attunement : true,
		description : "This jagged 3-ft shard of white-stained glass depicts half a celestial creature. It's wrapped with a bloody strip of linen as a grip. If I roll a nat 1 on atk, pass a DC 17 Con save or Blinded until my next turn ends. As bonus action, create or dismiss radiant energy from hilt. While energy exists, acts as a +2 finesse longsword that does Radiant (+1d8 to Undead), emits 15-ft bright sunlight & 15-ft dim. Magic action to change by 5 ft/type (min 10/max 30). Requires short or longsword proficiency.",
		descriptionLong : "Starshard is a jagged, 3-ft shard of white-stained glass that depicts half a celestial creature. It's wrapped with a bloody strip of linen that serves as a grip. If I roll a natural 1 on an attack with Starshard, I must pass a DC 17 Constitution save or be Blinded until my next turn ends. As a bonus action, I can create or dismiss an energy blade from the hilt. While the blade exists, it acts as a finesse +2 longsword that does Radiant, deals +1d8 to Undead & emits sunlight: 15-ft bright light & 15-ft dim. As a Magic action, I can expand or reduce the bright & dim light by 5 ft each (max of 30 ft. min of 10 ft each). Requires shortsword or longsword proficiency.",
		descriptionFull : "Starshard's blade is a jagged, three-foot-long shard of white stained glass that depicts half a celestial creature. It's wrapped with a bloody strip of linen that serves as a grip. If the wielder rolls a natural 1 on an attack roll made with Starshard, they must succeed on a DC 17 Constitution saving throw or be blinded until the end of their next turn.\n   This item appears to be a sword hilt.\n" + toUni("Blade of Radiance") + ". While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with the Finesse property. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade.\n   You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.\n" + toUni("Sunlight") + ". The sword's luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*starshard).*$/i,
			name : "Starshard, Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10), sap; +1d8 Radiant to undead",
			modifiers : [2, 2],
			selectNow : true,
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
						fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
					}
				}, ''
			]
		}
	},
	"sun blade: scintilmorn (wdotmm)" : {
		name : "Scintilmorn, Sun Blade",
		source : [["WDotMM", 234]],
		type : "weapon (longsword)",
		rarity : "rare",
		attunement : true,
		description : "This hilt is a bronze dragon with spread wings & mouth agape. It's had many names, including Sunlight's Wrath & Shar's Bane. Legend Lore reveals it's true name: Scintilmorn, & purpose: to destroy creatures of the night. As a bonus action, create or dismiss a radiant blade from the hilt. While blade exists, it acts as a +2 finesse longsword that does Radiant (+1d8 to Undead), emits 15-ft bright sunlight & 15-ft dim. Magic action to change by 5 ft/type (min 10/max 30). Requires short or longsword proficiency.",
		descriptionLong : "This hilt is carved to resemble a bronze dragon with its wings spread and its mouth agape. It's held many names over the years, including Sunlight's Wrath and Shar's Bane. A legend lore spell reveals its true name (Scintilmorn) and its original purpose: to destroy vampires and other creatures of the night. As a bonus action, I can create or dismiss a blade of pure radiance from the hilt. While the blade exists, it acts as a finesse +2 longsword that does Radiant, deals +1d8 to Undead & emits sunlight: 15-ft bright light & 15-ft dim light. As a Magic action, I can expand or reduce the bright & dim light by 5 ft each, to a maximum of 30 ft or a minimum of 10 ft each. Requires short or longsword proficiency.",
		descriptionFull : "The hilt lying on the floor is carved to resemble a bronze dragon with its wings spread and its mouth agape. This device is a sun blade that has held many names over the years, including Sunlight's Wrath and Shar's Bane. A legend lore spell reveals its true name (Scintilmorn) and its original purpose: to destroy vampires and other creatures of the night.\n   This item appears to be a sword hilt.\n" + toUni("Blade of Radiance") + ". While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with the Finesse property. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade.\n   You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.\n" + toUni("Sunlight") + ". The sword's luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*scintilmorn).*$/i,
			name : "Scintilmorn, Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10), sap; +1d8 Radiant to undead",
			modifiers : [2, 2],
			selectNow : true,
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
						fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
					}
				}, ''
			]
		}
	},
	"sword of vengeance (ccc-saf2-2)" : {
		name : "of Vengeance (CCC-SAF2-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		attunement : true,
		description : "This cursed +1 sword belonged to the erinyes, Catallika. It's forged of black iron & decorated with birds of prey tearing each other apart. Her tortured rage lies within the sword, causing a harmless flash of pain whenever I atk with it & miss. I can't part with the sword & have disadv. on atks with other weapons. If I take dmg in combat, DC 15 Wis save or I must atk my attacker until it drops to 0 HP or I can't melee atk it anymore. Banishment turns the sword into normal +1 weapon.",
		descriptionFull : "This sword belonged to the erinyes, Catallika. It is forged of black iron, and decorated with birds of prey tearing each other apart. The anger of the erinyes has been imprinted into the weapon, and lies heavily within it. Her tortured rage causes a harmless flash of pain in the wielder whenever an attack they make with her sword misses.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on my person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on my person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			itemName1stPage : ["prefix", "of Vengeance"],
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
			]
		}
	},
	"sword of wounding (ddal-cgb)" : {
		name : "Sword of Wounding (DDAL-CGB)",
		nameTest: "of Wounding (DDAL-CGB)",
		source : [["AL","CGB"]],
		rarity : "rare",
		attunement : true,
		allowDuplicates : true,
		description : "This magic sword is crafted of black metal and stone. When it hits, the target takes +2d6 Necrotic and must pass a DC 15 Con save or be unable to regain HP for 1 hour. It repeats the save at the end of each turn, ending the effect on a pass.",
		descriptionFull : "This sword is crafted of black metal and stone.\n   When you hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success. [Adjusted choices to include glaives as per the new ALPG]",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		itemName1stPage : ["prefix", "of Wounding"],
		descriptionChange : ["replace", "sword"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /Glaive|Greatsword|Longsword|Rapier|Scimitar|Shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/Glaive|Greatsword|Longsword|Rapier|Scimitar|Shortsword/i).test(v.baseWeaponName) && (/of wounding/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'target: +2d6 Necrotic dmg; DC 15 CON Save or no HP 1 hour';
				}
			},
			'If you include the words "of Wounding" in a the name of a weapon, it will be treated as the magic weapon Sword of Wounding.'
		]
	}
	},
	"vicious longsword (ccc-hatms2-1)" : {
		name : "Vicious Longsword (CCC-HATMS2-1)",
		source : [["AL","CCC"]],
		type : "weapon (sword)",
		rarity : "rare",
		description : "This longsword does +2d6 damage. Its scabbard is jet black with gold embellishments and the initials ‘ST' at the top. The gold and mithral hilt is set with a skull with red ruby eyes. It's wrapped with bone white cord to provide exceptional grip. When I roll a natural 20, I hear sinister laughter.",
		descriptionFull : "The scabbard of this weapon is jet black with gold embellishments with the initials ‘ST' at the top of it. The hilt of the weapon appears to be made from gold and mithral. The top of the hilt has a skull with red ruby eyes set in it. The hilt is wrapped with bone white cord which provides exceptional grip. When a critical hit is scored the wielder hears unnerving sinister laughter.\n   This magic weapon deals an extra 2d6 damage to any creature it hits. This extra damage is of the same type as the weapon's normal damage.",
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*longsword)(?=.*vicious).*$/i,
			name : "Vicious Longsword",
			description : "Sap; +2d6 damage",
			selectNow : true,
		}
	},
	"vicious rapier: hag's clawblade (al:sa-11a)" : {
		name : "Hag's Clawblade, Vicious Rapier (AL:SA-11A)",
		source : [["AL:SA","11A"]],
		type : "weapon (sword)",
		rarity : "rare",
		description : "This magic rapier does +2d6 damage. It has a malachite blade and bears jagged claw-like protrusions along its length. The hilt changes appearance each dusk, which has no effect on its other properties.",
		descriptionFull : "This rapier has a malachite blade and bears jagged, claw-like protrusions along its length. Its hilt changes its appearance each dusk, which has no effect on its other properties.\n   This magic weapon deals an extra 2d6 damage to any creature it hits. This extra damage is of the same type as the weapon's normal damage.",
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*clawblade)(?=.*hag|hag's).*$/i,
			name : "Hag's Clawblade, Vicious Rapier",
			description : "Finesse, vex; +2d6 damage",
			selectNow : true,
		},
	},
	"vorpal scimitar (ddal7-16)" : {
		name : "Vorpal Scimitar (DDAL7-16)",
		source : [["AL","S7"]],
		type : "weapon (scimitar)",
		rarity : "legendary",
		attunement : true,
		allowDuplicates : true,
		description : "This +3 scimitar hums & vibrates with energy, slicing through obstacles with ease & ignoring Slashing resistance. If it doesn't claim a sentient life daily, I'm easily angered & frustrated by the smallest obstacles. On a 20, the sword cuts off 1 head (possibly causing death). If target headless, immune to Slashing, too big (per DM) or uses 1 Legendary Resistance, +30 Slashing instead.",
		descriptionLong : "This +3 scimitar hums and vibrates with energy, slicing through obstacles with ease and ignoring Slashing resistance. If it doesn't claim a sentient life each day, I'm easily angered and frustrated by the smallest obstacles. On a natural 20, the sword cuts off 1 head from the target (possibly causing death). If the target headless, immune to Slashing, too big (per DM) or uses 1 Legendary Resistance, it takes +30 Slashing damage instead.",
		descriptionFull : "This blade hums and vibrates with great energy, and slices through obstacles with the greatest of ease. If the sword does not claim the life of a sentient creature each day, you find that you are easily angered and become frustrated by even the smallest obstacles.\n   You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. In addition, the weapon ignores Resistance to Slashing damage.\n   When you use this weapon to attack a creature that has at least one head and roll a 20 on the d20 for the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it has Immunity to Slashing damage, if it doesn't have or need a head, or if the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 30 Slashing damage from the hit. If the creature has Legendary Resistance, it can expend one daily use of that trait to avoid losing its head, taking the extra damage instead.",
		weaponsAdd : { select : ["Vorpal Scimitar"], options : ["Vorpal Scimitar"] },
		calcChanges : {  //For Vorpal Sword
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Ignores slashing resistance; On 20 to hit: cut off head';
				}
			},
			'If I include the word "Vorpal" in a the name of a weapon that deals slashing damage, it will be treated as the magic weapon Vorpal Sword. It has +3 to hit and damage and on a roll of 20 on the attack roll, it cuts off a head of the target.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
		},
	},
	"vorpal scimitar: abi teos's machete (rmh-9/rmh-10)" : {
		name : "Abi Teos's Machete (Vorpal Scimitar)",
		source : [["AL:R","9&10"]],
		type : "weapon (scimitar)",
		rarity : "legendary",
		attunement : true,
		allowDuplicates : true,
		description : "This 17-in machete is dull & chipped. The +3 sword's namesake wantonly cut selva & did excessive ritual sacrifice. The hilt reads “A mi, volpal”, “A blade for me.” It ignores Slashing resistance & does +2d8 to plants. On a hit, I take 1d6 Necrotic. On a 20, it cuts off 1 head (possibly = death). If target headless, immune to Slashing, too big, or uses Legendary Resistance, +30 Slashing instead. On a 1, gain 1 lvl Exhaustion. Remove by DC 12 Con save on LR. If fail, gain a lvl.",
		descriptionLong : "This 17-inch machete seems dull and chipped. Its azabache hilt is carved with leeches and blonde hair hangs from the pommel. The sword's namesake wantonly cut selva and conducted excessive ritual sacrifice. At the right angle, the hilt reads: “A mi, volpal” meaning “A blade for me.” The +3 sword ignores Slashing resistance and does +2d8 damage to plants. When I hit, I take 1d6 Necrotic. On a 20, it cuts off 1 head (possibly causing death). If the target is headless, immune to Slashing, too big (per DM), or uses 1 Legendary Resistance, +30 Slashing instead. On a 1, I gain 1 level of Exhaustion. Remove 1 level with DC 12 Con save on Long Rest. If fail, I gain another level.",
		descriptionFull : "The 17-inch blade of this tool-weapon appears deceptively dull and chipped, its hilt is carved azabache (a mystical stone believed to ward off malevolent spirits), and its handle is carved with a disturbing depiction of writhing, bloated leeches. The bohika (shaman) after which the weapon is named used it to wantonly cut down selva and conduct excessive ritual sacrifice to their patron. A lock of unmarred blonde hair dangles from the pommel, its significance lost to time. If the blade is held at the right angle in light, a scrawled phrase appears on the hilt: “A mi, volpal” which translates from its indigenous tongue as “A blade for me.”"+
		"\n   You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. In addition, the weapon ignores Resistance to Slashing damage and deals an extra 2d8 Slashing damage to plants and Plant creatures."+
		"\n   When you use this weapon to attack a creature that has at least one head and roll a 20 on the d20 for the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it has Immunity to Slashing damage, if it doesn't have or need a head, or if the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 30 Slashing damage from the hit. If the creature has Legendary Resistance, it can expend one daily use of that trait to avoid losing its head, taking the extra damage instead."+
		"\n   " + toUni("Curse") + ". Whenever you deal damage with Abi-Teos's machete, you take 1d6 necrotic damage as the weapon drains your blood. If you roll a 1 on an attack roll made with the weapon, the leeches carved into the handle animate and crawl down your throat—infesting you with throat leeches (a disease). You must succeed on a DC 12 Constitution saving throw or gain 1 level of exhaustion that can only be removed by succeeding on a DC 12 Constitution saving throw upon completing a long rest. If the saving throw fails, you gain another level of exhaustion. If a successful saving throw reduces your exhaustion level below 1, you recover from the disease.",
		weaponsAdd : { select : ["Abi Teos's Machete, Vorpal Scimitar"], options : ["Abi Teos's Machete, Vorpal Scimitar"] },
		calcChanges : {  //For Vorpal Sword
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Ignores slashing resistance; On 20 to hit: cut off head';
				}
			},
			'If I include the word "Vorpal" in a the name of a weapon that deals slashing damage, it will be treated as the magic weapon Vorpal Sword. It has +3 to hit and damage and on a roll of 20 on the attack roll, it cuts off a head of the target.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
		},
	},
}
	
MagicItemsList["al weapons +1"] = {
			name : "AL Weapons +1",
			type : "weapon (any)",
			descriptionFull : "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: uncommon (+1)",
			rarity : "uncommon",
			allowDuplicates : true,
			choicesNotInMenu : true,
			magicItemTable : "?",
		choices : ["+1 Battleaxe: Rebel's Yell (CCC-RPR-1)","+1 Battleaxe (DDEX2-11)","+1 Dagger: The Wolves' Claw (CCC-BMG-MOON2-1)","+1 Dagger: Arthyn Dagger (CCC-GHC-BK3-1)","+1 Dagger: Ornate (CCC-SCAR1-1)","+1 Flail: Book (CM)","+1 Glaive: Bone-Pommeled (CCC-BMG-33 PHLAN3-3)","+1 Glaive (CCC-TRI-17 ALLY1-2)","+1 Greatsword: Arrk's Sword (CCC-GLIP-1-1)","+1 Halberd (DDEP5-2)","+1 Hand Crossbow: Widowmaker (CCC-BMG-29 HILL2-2)","+1 Lance: Duergar Drill Bit (CCC-APL1-1)","+1 Longbow (CCC-BMG-MOON2-2)","+1 Longbow: Gwa'thern Faln (DDHC-MORD-1)","+1 Longsword (DDEP1)","+1 Longsword: Goblin Render (DDIA05)","+1 Mace: Mace of the Tranquil Oasis (CCC-SALT1-2)","+1 Maul: The Smasher (PotA)","+1 Quarterstaff (CCC-TRI-11 OLMA1-1)","+1 Quarterstaff (DDAL7-3)","+1 Quarterstaff (DDEX3-16)", "+1 Rapier (DDEX3-2)","+1 Scimitar: Ripper's Claw (CCC-ODFC2-1)","+1 Scimitar (CCC-PRIORY-2)","+1 Shortbow (CCC-ANIME1-1)","+1 Shortbow: Moon Strike (CCC-TAROT1-6)","+1 Shortbow (DDEX3-16)","+1 Shortsword (CCC-CIC-6)","+1 Shortsword: Icicle (CCC-GHC-5)","+1 Shortsword: Foxblade (CCC-SRCC1-2)","+1 Shortsword (DDEP7-1)","+1 Trident (DDEP7-1)","+1 War Pick (CCC-TRI-9 BHC1-0)","+1 Warhammer: Torag's Hammer (CCC-TAROT1-4)","+1 Weapon (DDHC-TOA-8)"],
		"+1 battleaxe: rebel's yell (ccc-rpr-1)" : {
			name : "Rebel's Yell, +1 Battleaxe (CCC-RPR-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This +1 battleaxe belonged to Kralgar Bonesnapper, greatest chieftain of the Griffon Tribe. It was lost by Conarg Skullslasher while fighting dwarves in the North. I can use a Magic action to make my voice carry for up to 600 ft until my next turn ends.",
			descriptionLong : "This battleaxe belonged to Kralgar Bonesnapper, greatest chieftain of the Uthgardt Griffon tribe. Conarg Skullslasher recovered it on a spirit quest and became chieftain himself. The axe was lost fighting the dwarves of Mithral Hall, Citadel Adbar and Citadel Feldbar, before resurfacing in the Moonsea region. I have a +1 bonus to attack and damage rolls made with the axe. I can also use a Magic action to make my voice carry clearly for up to 600 ft until the end of my next turn.",
			descriptionFull : "Prior to the War of the Silver Marchers, Conarg Skullslasher of the Uthgardt Griffon tribe underwent a spirit quest to find the axe of his tribe's greatest chieftain, Kralgar Bonesnapper. After nearly five years of roaming the north, the barbarian finally located the weapon and reclaimed it by defeating a sea hag near Luskan named Mirta Spleencarver. He returned to his people a hero and quickly ascended to the position of chieftain himself.\n   Throughout his rule, Kralgar Bonesnapper struggled endlessly to fulfill his goal of conquering and ruling one of the great cities of the North. When the orcs and giants rallied against Luruar, Conarg saw a chance to fulfill his dream and become the greatest Uthgardt chieftain that ever lived. He used the axe's unique properties to inspire his kin to ally with the orcs and giants in War of the Silver Marches.\n   Unfortunately for Conarg, the Griffon tribe came to an untimely end fighting the dwarves of Mithral Hall, Citadel Adbar, and Citadel Felbar, and his axe was lost on the field of battle. It later resurfaced in the Moonsea region.\n   In addition, the weapon has the War Leader minor property: you can take a Magic action to cause your voice or signal to carry clearly for up to 600 feet until the end of your next turn.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			action : [["action", "Rebel's Yell (600ft Voice)"]],
			weaponsAdd : { select : ["Rebel's Yell, +1 Battleaxe"], options : ["Rebel's Yell, +1 Battleaxe"] },
			},
		"+1 battleaxe (ddex2-11)" : {
			name : "+1 Battleaxe (DDEX2-11)",
			source : [["AL","S2"]],
			allowDuplicates : true,
			description : "This ancient axe is made of grey stone marbled with purple veins. Its head is inscribed with ancient dwarven runes and the haft is covered with the cured hide of a purple worm. I have a +1 bonus to attack and damage rolls made with it.",
			descriptionFull : "This ancient axe is made of grey stone marbled with purple veins. Its head is inscribed with ancient dwarven runes and its haft is covered with the cured hide of a purple worm.\n   I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Battleaxe +1"], options : ["Battleaxe +1"] },
			},
		"+1 dagger: the wolves' claw (ccc-bmg-moon2-1)" : {
			name : "The Wolves' Claw, +1 Dagger (CCC-BMG-MOON2-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This serrated +1 dagger looks like 100 wolf claws jumbled together and has a wolf's head pommel. I can use it to sense the emotions of wolves in 30 ft. If I concentrate on the dagger, I can ask the DM what any one wolf in range is feeling and be answered truthfully.",
			descriptionLong : "This serrated blade looks like a hundred wolf claws jumbled together with a wolf's head for a pommel. I gain a +1 bonus to attack and damage rolls made with it. I can also sense the emotions of wolves in 30 ft. If I concentrate on the dagger, I can ask the DM what any one wolf in range is feeling and be answered truthfully.",
			descriptionFull : "This serrated blade has the visage of a hundred wolves' claws all jumbled together with a wolf 's head for a pommel.\n   You can also sense the emotions of wolves when you're within 30 feet of them. If you concentrate on the dagger for a moment you ask the Dungeon Master what any one wolf in range is feeling. They must tell you the truth.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["The Wolves' Claw, Dagger +1"], options : ["The Wolves' Claw, Dagger +1"] },
			},
		"+1 dagger: arthyn dagger (ccc-ghc-bk3-1)" : {
			name : "+1 Arthyn Dagger (CCC-GHC-BK3-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This fine +1 dagger was crafted in the prominent port city that bears its name. When held a certain way in direct sunlight, the mixture of copper and iron alloys in the blade causes a flickering flame-like effect. ",
			descriptionLong : "This fine dagger was crafted in Arthyn, the prominent port city that bears its name. When held a certain way in direct sunlight, the mixture of copper and iron alloys in the blade causes a flickering flame-like effect. I have a +1 bonus to attack and damage rolls made with the magic weapon.",
			descriptionFull : "This fine dagger was crafted in the prominent port city that bears its name. The mixture of copper and iron alloys used to forge the dagger can cause a flickering flame-like effect when held a certain way in direct sunlight.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Arthyn Dagger +1"], options : ["Arthyn Dagger +1"] },
			},
		"+1 dagger: ornate (ccc-scar1-1)" : {
			name : "+1 Ornate Dagger (CCC-SCAR1-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This undersized +1 dagger has a blackened blade with a fuller running almost its entire length and gold trimming on the handle. It's very light and could easily be tucked into sleeve or boot.",
			descriptionLong : "This undersized dagger has a blackened blade with a fuller running almost its entire length and gold trimming on the handle. It's very light and could easily be tucked into sleeve or boot. I have a +1 bonus to attack and damage rolls made with the magic weapon.",
			descriptionFull : "This undersized dagger has a blackened blade with a fuller running almost its entire length, with gold trimming on the handle. It is very light and could easily be tucked into sleeve or boot.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Ornate Dagger +1"], options : ["Ornate Dagger +1"] },
			},
		"+1 flail: book (cm)" : {
			name : "Book Flail +1 (CM)",
			source : ["CM"],
			type : "weapon (flail)",
			rarity : "uncommon",
			attunement : false,
			description : "A remnant from Fistania's animated library, this book is connected to a length of chain and is entitled Martial Attack Techniques. It may be used as a magical flail that grants a +1 bonus to attack and damage rolls.",
			descriptionFull : "A remnant from Fistania's animated library, this book is connected to a length of chain and is entitled Martial Attack Techniques.\n   It may be used as a magical flail that grants a +1 bonus to attack and damage rolls.",
			weight : 2,
			weaponsAdd : { select : ["Book Flail +1"], options : ["Book Flail +1"] },
			},
		"+1 glaive: bone-pommeled (ccc-bmg-33 phlan3-3)" : {
			name : "Bone-Pommeled Glaive +1 (BMG-33 PHLAN3-3)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "The lower portion of this +1 glaive's haft is made of some unidentified creature's thigh or shoulder joint. The pommel has purposefully notched edges so it can no longer function in the joint socket.",
			descriptionLong : "The lower portion of this glaive's haft is made of an unidentified creature's thigh or shoulder joint. The pommel has purposefully notched edges so it can no longer function in the joint socket. I have a +1 bonus to attack and damage rolls made with it.",
			descriptionFull : "The entire lower portion of the weapon's haft is made of some unidentified creature's thigh or shoulder joint. The pommel has purposely notched edges and looks as though it could no longer function in the socket of whatever it came from.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Bone-Pommeled Glaive +1"], options : ["Bone-Pommeled Glaive +1"] },
			},
		"+1 glaive (ccc-tri-17 ally1-2)" : {
			name : "+1 Glaive (CCC-TRI-17 ALLY1-2)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "Despite looking like a chalk drawing filled with gaps, this +1 glaive is solid all the way through. It feels chalky and leaves chalk residue when touched.",
			descriptionLong : "Despite looking like a chalk drawing filled with gaps, this glaive is solid all the way through. It feels chalky and leaves chalk residue when touched. I have a +1 bonus to attack and damage rolls made with the weapon.",
			descriptionFull : "Despite appearing to be a chalk drawing filled with gaps due to the rough surface it was drawn on, it is solid all the way through and holds a keen edge. It feels chalky, and leaves a chalky residue when touched.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Glaive +1"], options : ["Glaive +1"] },
			},
		"+1 greatsword: arrk's sword (ccc-glip-1-1)" : {
			name : "Arrk's Greatsword +1 (CCC-GLIP-1-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "The +1 greatsword has a long, rune covered blade that drips blood whenever it's unsheathed. The wide blade is decorated with Netherese runes and the handle is wrapped in basilisk hide. A large gem pulses at the center of the crossguard.",
			descriptionLong : "The greatsword has a long, rune covered blade that drips blood whenever it's unsheathed. The wide blade is decorated with Netherese runes and the handle is wrapped in basilisk hide. A large gem pulses at the center of the crossguard. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "Arrk was a troll mercenary known for his brutality, loyalty, and reliability. He worked throughout the Moonsea region and was infamous for carrying an enchanted greatsword that dripped blood whenever it was unsheathed, which Arrk would lick when he was bored or annoyed.\n   Arrk vanished decades ago while exploring ancient ruins in the Troll Hills of Thar. His sword was recovered not long after the founding of Glip Dak. While the sword could once store and release powerful spells, something unusual is now stored within and refuses to be released.\n   The greatsword has a long, rune covered blade that drips blood whenever the sword is unsheathed. The wide blade is decorated with Netherese runes, and the handle is wrapped in basilisk hide. A large gem pulses at the center of the cross guard.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon. ",
			weaponsAdd : { select : ["Arrk's Greatsword +1"], options : ["Arrk's Greatsword +1"] },
			},
		"+1 halberd (ddep5-2)" : {
			name : "+1 Halberd (DDEP5-2)",
			source : [["AL","S5"]],
			allowDuplicates : true,
			description : "This +1 halberd is made from a slender piece of white wood is polished to a high shine and tipped with a silver-and-gold filigree blade. It never gets dirty.",
			descriptionLong : "This halberd is made from a slender piece of white wood is polished to a high shine and tipped with a silver-and-gold filigree blade. It never gets dirty. I have a +1 bonus to attack and damage rolls made with the magic weapon.",
			descriptionFull : "This halberd is made from a slender piece of white wood is polished to a high shine and tipped with a silver-and-gold filigree blade. This item never gets dirty.\n   I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Halberd +1"], options : ["Halberd +1"] },
			},
		"+1 hand crossbow: widowmaker (ccc-bmg-29 hill2-2)" : {
			name : "Widowmaker, +1 Hand Crossbow (BMG-29 HILL2-2)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This black wooden hand crossbow is engraved with a blood red heart that bleeds whenever one of its bolts kills someone. I gain a +1 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "This black wooden hand crossbow has a blood red heart engraved on it that bleeds a little every a bolt from it kills someone. You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Widowmaker, +1 Hand Crossbow"], options : ["Widowmaker, +1 Hand Crossbow"] },
			},
		"+1 lance: duergar drill bit (ccc-apl1-1)" : {
			name : "Broken Duergar Drill Bit (+1 Lance, APL1-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "Though shorter than a purpose-made lance, the King of the Blue Bayou Bullywug redesigned this broken bit into an uncommonly effective +1 weapon. While underground, I always know my depth and the direction to the nearest staircase, ramp, or upward path.",
			descriptionLong : "Though shorter than a purpose-made lance, the King of the Blue Bayou Bullywug redesigned this broken bit into an uncommonly effective weapon. While underground, I always know my depth below the surface and the direction to the nearest staircase, ramp, or path leading upward. I have a +1 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "Though shorter than a purpose-made lance, the King of the Blue Bayou Bullywug has redesigned this broken bit of mining kit into an uncommonly effective weapon. Additionally, while underground, the bearer always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Broken Duergar Drill Bit, Lance +1"], options : ["Broken Duergar Drill Bit, Lance +1"] },
			},
		"+1 longbow (ccc-bmg-moon2-2)" : {
			name : "+1 Longbow (CCC-BMG-MOON2-2)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This excellently crafted +1 elven longbow was carved from dark wood, with silver runes decorating its length. The silverwork contains part of an old elvish poem: \"Seamless dreams tide through fleeting hands, as upon the wind she toils with a fellon thread, whispering mellowed breath upon bonds of silver.\"",
			descriptionLong : "This excellently craftsmanship elven longbow was carved from dark wood, with silver runes decorating its length. The silverwork contains part of an old elvish poem: \"Seamless dreams tide through fleeting hands, as upon the wind she toils with a fellon thread, whispering mellowed breath upon bonds of silver.\" I have a +1 bonus to attack and damage rolls made with the bow.",
			descriptionFull : "An elven bow of excellent craftsmanship. Its limbs are carved from dark wood, with silver runes decorating its length. The silverwork seems to be part of an old elvish poem: \"Seamless dreams tide through fleeting hands, as upon the wind she toils with a fellon thread, whispering mellowed breath upon bonds of silver.\"\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Longbow +1"], options : ["Longbow +1"] },
			},
		"+1 longbow: gwa'thern faln (ddhc-mord-1)" : {
			name : "Gwa'thern Faln, +1 Longbow (DDHC-MORD-1)",
			source : [["AL","MToF"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This ancient +1 longbow is made from a thick, gnarled piece of yew polished to a lustrous shine. The bow (Shadowbreaker in Elvish) was once wielded by a legendary elven warrior & can also be used as a quarterstaff. By whispering it's name & firing an arrow at a point I can see in 60 ft, I can cast Faerie Fire (save DC 15) once per dawn.",
			descriptionLong : "This ancient longbow is made from a thick, gnarled piece of yew and polished to a lustrous shine. The weapon (Shadowbreaker in Elvish) was once wielded by a legendary elven warrior and can also be used as a quarterstaff. I gain a +1 bonus to attack and damage rolls made with it. By whispering the bow's name and firing an arrow at a point I can see in 60 ft, I can cast Faerie Fire (save DC 15) as an action once per dawn.",
			descriptionFull : "This ancient longbow's staff is fashioned from a thick, gnarled piece of yew and polished to a lustrous shine. The weapon (whose name means Shadowbreaker in Elvish) was once wielded by a legendary elven warrior.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon—which can also be used as a quarterstaff.\n   By whispering the bow's name and firing an arrow at a point you can see within 60 feet, you can use an action to cast faerie fire (save DC 15). Once used, this property of the bow can't be used again until the following dawn.",
			weaponOptions : [{
				baseWeapon : "longbow",
				name : "Gwa'thern Faln, +1 Longbow",
				regExpSearch : /gwa\u0027thern\u0020faln\u002c\u0020\u002b1\u0020longbow/i,
				selectNow : true,
				source : [["AL","MToF"]],
			},{
				baseWeapon : "quarterstaff",
				name : "Gwa'thern Faln, +1 Quarterstaff",	
				regExpSearch : /gwa\u0027thern\u0020faln\u002c\u0020\u002b1\u0020quarterstaff/i,
				selectNow : true,	
				source : [["AL","MToF"]],				
			}],
			fixedDC : 15,
			spellcastingBonus : [{
				name : "Once per long rest",
				spells : ["Faerie Fire"],
				selection : ["Faerie Fire"],
				firstCol : "oncelr"}],
			},
		"+1 longsword (ddep1)" : {
			name : "+1 Longsword (DDEP1)",
			source : [["AL","S1"]],
			allowDuplicates : true,
			description : "This elegant blade gleams as though newly forged, never accumulating dirt or grime. I have a +1 bonus to attack and damage rolls made with it.",
			descriptionFull : "This elegant blade gleams as though newly forged, never accumulating dirt or grime.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Longsword +1"], options : ["Longsword +1"] },
			},
		"+1 longsword: goblin render (ddia05)" : {
			name : "Goblin Render, +1 Longsword (DDIA05)",
			source : [["AL","S5"]],
			allowDuplicates : true,
			description : "This oddly-shaped +1 longsword is covered in Giant runes that read “Small death”. In 20 ft of a goblin, it glows deep blue and the runes flare with yellow light. An Int (History) check of 15 or more reveals that it's of Giant heritage and rumored to have slain many goblins.",
			descriptionLong : "This oddly-shaped longsword is covered in Giant runes that read “Small death”. Within 20 feet of a goblin, the sword glows deep blue and the runes flare with yellow light. An Intelligence (History) check of 15 or more reveals that this blade is a Giant heritage item that's rumored to have slain many goblins. I have +1 to attack and damage rolls made with it.",
			descriptionFull : "This +1 long sword is oddly shaped and covered in Giant runes that read “Small death”. When the bearer of this blade is within 20 ft of a goblin, the weapon emits a deep blue glow and the runic script flares with a yellow light. An Intelligence (History) check of 15 or more reveals that this blade is a giant heritage item and rumored to have slain many goblins.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Goblin Render, Longsword +1"], options : ["Goblin Render, Longsword +1"] },
			},
		"+1 mace: mace of the tranquil oasis (ccc-salt1-2)" : {
			name : "Mace of the Tranquil Oasis +1 (SALT1-2)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This +1 mace is covered in filigree showing a palm-lined oasis, the leaves converging to hold the head of the mace. The water in the oasis has been shaped in distinct patterns that may be words, but the language escapes all methods of translation.",
			descriptionLong : "This mace is covered in filigree depicting a palm-lined oasis, the palm leaves converging to hold the head of the mace. The water in the oasis has been shaped in distinct patterns that may be words, but the language escapes all methods of translation. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The mace is covered in filigree depicting a palm-lined oasis, the palm leaves converging to hold the head to the mace. The water in the oasis seems to have been shaped into distinct patterns that may have been words at one time, but the language escapes magical and mundane means of translation.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Mace of the Tranquil Oasis +1"], options : ["Mace of the Tranquil Oasis +1"] },
			},
		"+1 maul: the smasher (pota)" : {
			name : "The Smasher, +1 Maul (PotA)",
			source : [["AL","PotA"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "As a Magic action, I can say \"This celebration isn't going to start itself!\" to make this +1 maul pour out dwarven spirits until my next turn starts. \"Stream\" is 1 gal. \"Fountain\" is 5 gal. \"Geyser\" is 30 gal in 30 ft x 1 ft line. Aim the geyser at 1 target. Creature makes a DC 13 Str save or takes 1d4 Bludgeoning and falls Prone. If an object, it's knocked over.",
			descriptionLong : "As a Magic action, I can say \"This celebration isn't going to start itself!\" to make this +1 maul pour out dwarven spirits until my next turn starts. \"Stream\" produces 1 gallon. \"Fountain\" produces 5 gallons. \"Geyser\" produces 30 gallons of spirits that gushes forth in a 30 ft by 1 ft wide line. While held, I can aim the line in 1 direction to hit 1 target. A creature makes a DC 13 STR save or takes 1d4 Bludgeoning and falls Prone. An unattended object up to 200 lbs is knocked over.",
			descriptionFull : "This maul is named \"The Smasher\" and when given the command, \"This celebration isn't going to start itself!\" acts as a decanter of endless water that dispenses potent dwarven spirits instead. This is a rare magic item.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.\n   You can take a Magic action to speak the command words, whereupon an amount of potent dwarven spirits pours out of the maul. It stops pouring out at the start of your next turn. Choose from the following options:\n \u2022 \"Stream\" produces 1 gallon of spirits.\n \u2022 \"Fountain\" produces 5 gallons of spirits.\n \u2022 \"Geyser\" produces 30 gallons of spirits that gush forth in a Line 30 feet long and 1 foot wide. While holding the maul, you can aim the geyser in one direction (no action required). One creature of your choice in the Line must succeed on a DC 13 Strength saving throw or take 1d4 Bludgeoning damage and have the Prone condition. Instead of a creature, you can target one object in the Line that isn't being worn or carried and that weighs no more than 200 pounds. The object is knocked over by the geyser.\n   This weapon was given by the Harpers in exchange for Orcsplitter.",
			weaponsAdd : { select : ["The Smasher, Maul +1"], options : ["The Smasher, Maul +1"] },
			},
		"+1 quarterstaff (ccc-tri-11 olma1-1)" : {
			name : "+1 Quarterstaff (CCC-TRI-11 OLMA1-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This +1 quarterstaff is made from a copper dragon's bones and blood, and looks like a tree hit by lightning. The tree's branches hold the wyrmling's head, which chatters and covers the staff with electricity with each kill it makes.",
			descriptionLong : "This quarterstaff looks like a tree hit by lightning and is made from a copper dragon's bones and blood. The tree's branches hold the wyrmling's head, which chatters and covers the staff with electric discharge after each kill it makes. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This quarterstaff is made from a copper dragon's bones and blood, along with wood to make it look like a tree hit by lightning. The tree's branches hold the wyrmling dragon's head, which chatters and covers the staff with electric discharge with each kill made with this weapon.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Quarterstaff +1"], options : ["Quarterstaff +1"] },
			},
		"+1 quarterstaff (ddal7-3)" : {
			name : "+1 Quarterstaff (DDAL7-3)",
			source : [["AL","S7"]],
			allowDuplicates : true,
			description : "This +1 quarterstaff features a blunted iron hook on one end and was used by dinosaur wranglers to goad ornery beasts into doing what they're supposed to. The staff is carved from dark smooth wood and decorated with feathers.",
			descriptionLong : "This quarterstaff features a blunted iron hook on one end and was used by dinosaur wranglers to goad ornery beasts into doing what they're supposed to. The staff is carved from dark smooth wood and decorated with feathers. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This quarterstaff features a blunted iron hook on one end and is used by dinosaur wranglers to goad ornery beasts in their charge into doing what they're supposed to. The staff is carved from dark, smooth wood and decorated with feathers.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Quarterstaff +1"], options : ["Quarterstaff +1"] },
			},
		"+1 quarterstaff (ddex3-16)" : {
			name : "+1 Quarterstaff (DDEX3-16)",
			source : [["AL","S3"]],
			allowDuplicates : true,
			description : "This magic weapon is marked with the symbol of House Gos of Mulmaster. I have a +1 bonus to attack and damage rolls made with it.",
			descriptionFull : "The weapon is marked with the symbol of House Gos of Mulmaster.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Quarterstaff +1"], options : ["Quarterstaff +1"] },
			},
		"+1 rapier (ddex3-2)" : {
			name : "+1 Rapier (DDEX3-2)",
			source : [["AL","S3"]],
			allowDuplicates : true,
			description : "This weapon weighs half as much as a normal rapier (1 lb) and is fashioned of dark blue metal inscribed with images of spiders and webs. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponOptions : {
				baseWeapon : "rapier",
				name : "Blue Metal Rapier +1",
				regExpSearch : /^(?=.*blue)(?=.*metal).*$/i,
				weight : 1,
				selectNow : true,
				}
			},
		"+1 scimitar: ripper's claw (ccc-odfc2-1)" : {
			name : "Ripper's Claw, +1 Scimitar (CCC-ODFC2-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This +1 scimitar is never dirty, no matter how much blood or dirt it touches. The pommel resembles a worm that wraps around my hand. The worm nips at my hand and draws blood if it's been more than 24 hrs since the sword has fed.",
			descriptionLong : "This scimitar is never dirty, no matter how much blood or dirt it touches. The pommel resembles a leech-like worm that wraps around my hand. The worm nips at my hand and draws blood if it's been more than 24 hrs since the sword has fed. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This scimitar is never dirty, no matter how much blood or dirt might have touched its blade. The pommel is formed to resemble a leech-like worm that wraps around the hand that is wielding it. The worm will nip at the hand and draw blood if it has been more than 24 hours since the weapon has last fed.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Ripper's Claw, Scimitar +1"], options : ["Ripper's Claw, Scimitar +1"] },
			},
		"+1 scimitar (ccc-priory-2)" : {
			name : "+1 Scimitar (CCC-PRIORY-2)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "The hilt of this +1 scimitar is a gilded serpent with jaws forming the pommel. Its shimmering red tongue forms a blade that ends in a cruel fork. While held, I hiss my S's when speaking in Common.",
			descriptionLong : "The hilt of this scimitar is a gilded serpent with jaws forming the pommel. Its shimmering red tongue forms a blade that ends in a cruel fork. While holding this weapon, I hiss my S's when speaking in Common. I have a +1 bonus to attack and damage rolls made with this magic scimitar.",
			descriptionFull : "The hilt of this scimitar is a gilded serpent with jaws forming the pommel. Its shimmering red tongue forms a blade that ends in a cruel fork. While holding this weapon, you hiss your S's when speaking in Common.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Scimitar +1"], options : ["Scimitar +1"] },
			},
		"+1 shortbow (ccc-anime1-1)" : {
			name : "+1 Shortbow (CCC-ANIME1-1)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This shortbow is crafted from dark wood. Red and blue feathers adorn the top of the bow. I have a +1 bonus to attack and damage rolls made with it.",
			descriptionFull : "This shortbow is crafted from dark wood. Red and blue feathers adorn the top of the bow.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortbow +1"], options : ["Shortbow +1"] },
			},
		"+1 shortbow: moon strike (ccc-tarot1-6)" : {
			name : "Moon Strike, +1 Shortbow (TAROT1-6)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This intricately carved +1 shortbow was a gift from the Moon Elves of Cormanthor. In darkness or low light, arrows shot from this bow appear as bright streaks of moonlight as they fly towards their target.",
			descriptionLong : "This intricately carved shortbow was a gift from the Moon Elves of Cormanthor. In darkness or low light, arrows shot from this bow appear as bright streaks of moonlight as they fly towards their target. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This intricately carved shortbow was a gift from the Moon Elves of Cormanthor. In darkness or low light, arrows shot from this bow appear as bright streaks of moonlight as they fly towards their target.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Moon Strike, Shortbow +1"], options : ["Moon Strike, Shortbow +1"] },
			},
		"+1 shortbow (ddex3-16)" : {
			name : "+1 Shortbow (DDEX3-16)",
			source : [["AL","S3"]],
			allowDuplicates : true,
			description : "This magic weapon is marked with the symbol of House Gos of Mulmaster. I have a +1 bonus to attack and damage rolls made with it.",
			descriptionFull : "The weapon is marked with the symbol of House Gos of Mulmaster.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortbow +1"], options : ["Shortbow +1"] },
			},
		"+1 shortsword (ccc-cic-6)" : {
			name : "+1 Shortsword (CCC-CIC-6)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This sword is made of a strange white metal that prevents tarnishing and makes it immune to attacks from rust monsters. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortsword +1"], options : ["Shortsword +1"] },
			},
		"+1 shortsword: icicle (ccc-ghc-5)" : {
			name : "Icicle, +1 Shortsword (CCC-GHC-5)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This +1 shortsword is drow in design and instantly recognizable to members of House Nanther. Its blade is sheathed in razor-sharp magical ice that's cool to the touch. While it's on my person, I can speak Undercommon.",
			descriptionLong : "This shortsword is drow in design and instantly recognizable to members of House Nanther. Its blade is sheathed in razor-sharp magical ice that's cool to the touch. While the sword is on my person, I can speak and understand Undercommon. I have a +1 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "This shortsword is drow in design, and its blade is sheathed in razor-sharp magical ice that is cool to the touch. While the sword is on your person, you gain the ability to speak and understand Undercommon. In addition, the sword is instantly recognizable to members of House Nanther.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			languageProfs : ["Undercommon"],
			weaponsAdd : { select : ["Icicle, Shortsword +1"], options : ["Icicle, Shortsword +1"] },
			},
		"+1 shortsword: foxblade (ccc-srcc1-2)" : {
			name : "Foxblade, +1 Shortsword (CCC-SRCC1-2)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This +1 shortsword looks rusty due to its unique crimson-orange color. A triangular white mother-of-pearl inlay near the hilt makes the blade resemble a fox's tail. The crossguard is made of the same metal, set with yellow & black stones that resemble vulpine eyes. Crafted by forest gnomes, this sword was lost during Ylraphon's destruction by dragons in the 14th century.",
			descriptionLong : "This shortsword looks rusted due to its unique crimson-orange color. A triangular white mother-of-pearl inlay near the hilt makes the blade resemble a fox's tail. The crossguard is made of the same unique metal, set with yellow and black stones that resemble vulpine eyes. Crafted by forest gnomes, the sword was known as the Foxblade and was lost during Ylraphon's destruction by dragons in the 14th century. I have a +1 bonus to attack and damage rolls made with it.",
			descriptionFull : "This shortsword appears rusted at first glance, but that is due to the unique crimson-orange color of the metal. Combined with this color, a triangular white mother-of-pearl inlay near the hilt causes the blade to resemble the coloring of a fox's tail. The crossguard is made of the same unique crimson metal, set with round yellow and black stones made to resemble vulpine eyes. This description matches that of a magical weapon lost during Ylraphon's destruction by dragons in the 14th century. Said to have been crafted by forest gnomes, it was known as the Foxblade.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Foxblade, Shortsword +1"], options : ["Foxblade, Shortsword +1"] },
			},
		"+1 shortsword (ddep7-1)" : {
			name : "+1 Shortsword (DDEP7-1)",
			source : [["AL","S7"]],
			allowDuplicates : true,
			description : "This +1 shortsword has a basket hilt that's forged to resemble a woman draped in kelp and nets, similar to a ship's figurehead. When used in battle, the woman sings a rather obscene sea shanty audible to anyone within 30 ft.",
			descriptionLong : "This magic shortsword has a basket hilt that's forged to resemble a woman draped in kelp and nets, similar to a ship's figurehead. When used in battle, the woman sings a rather obscene sea shanty audible to anyone within 30 ft. I have a +1 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "This weapon has a basket hilt that's forged to resemble a woman draped in kelp and nets, similar in appearance to a ship's figurehead. When used in battle, the woman sings a rather obscene sea shanty audible to anyone within 30 ft.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortsword +1"], options : ["Shortsword +1"] },
			},
		"+1 trident (ddep7-1)" : {
			name : "+1 Trident (DDEP7-1)",
			source : [["AL","S7"]],
			allowDuplicates : true,
			description : "This rusted trident is crusted over in barnacles and draped in wet seaweed. I can hold my breath underwater for twice the normal duration and have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This rusted weapon is crusted over in barnacles and draped in wet seaweed. Its wielder can hold their breath underwater for twice the normal duration. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Trident +1"], options : ["Trident +1"] },
			},
		"+1 war pick (ccc-tri-9 bhc1-0)" : {
			name : "+1 War Pick (CCC-TRI-9 BHC1-0)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "This +1 dwarven war pick is equally suited for stonework and combat. When used as a mining implement, dwarves can apply twice their proficiency bonus to any skill checks related to stone, including their Stonecunning ability.",
			descriptionLong : "This pick is of dwarven make, equally suited for stonework and combat. When used as a mining implement, dwarves can apply twice their proficiency bonus to any skill checks related to stone, including their Stonecunning ability. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This pick appears to be of dwarven make, and is equally suited to stonework as it is to combat. When used as a mining implement, it allows dwarves to apply twice their proficiency bonus to any skill rolls related to stone, including their stonecunning ability.\n   When used in combat, you have a +1 to attack and damage rolls made with this weapon.",
			weaponsAdd : { select : ["War Pick +1"], options : ["War Pick +1"] },
			},
		"+1 warhammer: torag's hammer (ccc-tarot1-4)" : {
			name : "Torag's Hammer, +1 Warhammer (TAROT1-4)",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			description : "Torag crafted this +1 warhammer from the thighbone of the biggest meanest troll to assail Goldenfields in recent memory. I swear the weapon feeds on gore, growing slightly larger after every encounter. Measurements don't support this belief but Torag's Hammer is always uncannily clean...",
			descriptionLong : "Torag \"crafted\" this magical warhammer from the thighbone of the biggest, meanest troll to assail Goldenfields in recent memory. I swear the weapon feeds on gore, growing slightly larger after every encounter. Measurements don't support this belief but Torag's Hammer is always uncannily clean... I have a +1 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "Torag \"crafted\" this magical warhammer from the thighbone of the biggest, meanest troll to assail Goldenfields in recent memory. Those who wield it swear the weapon feeds on gore, growing slightly larger after every bloody encounter. Measurements don't support this belief. However, Torag's Hammer is always uncannily clean...\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Torag's Hammer, Warhammer +1"], options : ["Torag's Hammer, Warhammer +1"] },
			},
		"+1 weapon (ddhc-toa-8)" : {
			name : "+1 (DDHC-TOA-8)",
			source : [["AL","S7"]],
			allowDuplicates : true,
			description : "This weapon contains wood from a sentient tree. The spirit of the tree remains in the wood so the weapon contains a sentience. I have a +1 bonus to attack and damage rolls made with it and feel the desires of the tree spirit within.",
			descriptionLong : "This weapon contains wood from a sentient tree. The spirit of the tree remains in the wood, and therefore the weapon contains a sentience. I have a +1 bonus to attack and damage rolls made with this magic weapon and feel the desires of the tree spirit within.",
			descriptionFull : "This weapon contains wood from a sentient tree. The spirit of the tree remains in the wood, and therefore the weapon contains a sentience. You have a +1 bonus to attack and damage rolls made with this magic weapon and feel the desires of the tree spirit within. [This was the alternate reward given in the Season 9 ALCC. May now give a Tree Spirit weapon again.]",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["prefix", "+1"]
				},
			},
}

MagicItemsList["al weapons +2 or +3"] = {
			name : "AL Weapons +2 or +3",
			type : "weapon (any)",
			descriptionFull : "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: rare (+2), or very rare (+3).",
			allowDuplicates : true,
			choicesNotInMenu : true,
			magicItemTable : "?",
		choices : ["+2 Bow (DDEX3-7)","+2 Dagger (CCC-GHC-6)","+2 Dagger (SJ-DC-INAS-3)","+2 Dagger: EPA (Trading Post)","+2 Glaive: Azure Sky (SJ-DC-ANGKA-6)","+2 Greataxe: Whisper (DDHC-TOA-8)","+2 Greataxe: Gleaming (SJ-DC-NMB1-3)","+2 Greataxe: Gythka (SJ-DC-PAT-1)","+2 Greatsword: Tyr's Justice (CCC-GHC-8)","+2 Greatsword: Githyanki Greater Silver Sword (CCC-TRI-27 ROSE1-2)","+2 Greatsword (FR-DC-AEG-6)","+2 Greatsword: Elven Curve Blade (FR-DC-LAX-1-2)","+2 Greatsword (FR-DC-MELB-1-2)","+2 Greatsword: Agony (SJ-DC-ANGKA-1)","+2 Greatsword: Lux Machaera (SJ-DC-LIGA6)","+2 Greatsword (SJ-DC-RH-1)","+2 Hand Crossbow (SJ-DC-ECHO-4)","+2 Hand Crossbow (SJ-DC-ROCK-1)","+2 Heavy Crossbow: First Blood (SJ-DC-TBS-4)","+2 Longbow: Deep's Reach (CCC-BMG-MOON12-2)","+2 Longbow: Giant's Bane (CCC-GHC-9)","+2 Longbow (DDEP5-2)","+2 Longbow: Bloodthirst (SJ-DC-EPOCH-1)","+2 Longbow: Friendbow (SJ-DC-SCR-1)","+2 Longbow: Craygen's Bow (SJ-DC-SSM-UBCon-1)","+2 Longsword: Elven Blade of the Third Age (CCC-BWM-2)","+2 Longsword: Stout (CCC-GHC-BK1-5)","+2 Longsword: Blazherserblane (FR-DC-LIGA-2)","+2 Longsword: Westdeck Sword (SJ-DC-CGG-2)","+2 Longsword (SJ-DC-END-1-4)","+2 Maul: Manyoshu's Kanabo (FR-DC-ONI-1)","+2 Maul: Coral Great Hammer (SJ-DC-DEN-H5)","+2 Maul: Space Clown Hammer (SJ-DC-FXC-JEFF-1)","+2 Morningstar: Mourning Star (SJ-DC-ANGKA-5)","+2 Pike: Horizon Caller (SJ-DC-CONMAR-1)","+2 Quarterstaff: Herfren's Marshaling Wand (SJ-DC-BST-2)","+2 Rapier: The Sixth Sword (CCC-HAL-3)","+2 Rapier (FR-DC-AEG-9)","+2 Rapier (SJ-DC-DRAGON-3)","+2 Scimitar (SJ-DC-DRA-1)","+2 Scimitar (SJ-DC-IGC-ECP-5)","+2 Shortsword: Smoke (CCC-SFBAY1-1)","+2 Shortsword (DDAL0-13)","+2 Shortsword (RV-DC-POE-1)","+2 Spear (PS-DC-DRAGON24-2)","+2 Trident (CCC-CIC-12)","+2 Trident: Deep Sashelas (PS-DC-PKL-9)","+2 War Pick (CCC-MYR1-1)","+2 Warhammer (FR-DC-BMK-1)","+2 Weapon (PotA)","+2 Weapon (SJ-DC-MAD-2)","+2 Whip: Flogger's Bouquet (SJ-DC-ENIGMA)","+2 Whip (SJ-DC-TEL-1)","+2 Yklwa: Naga's Warning (SJ-DC-PAT-2)","+3 Battleaxe: Skeggöx (DDAL5-9)","+3 Dagger (CCC-TRI-29 TIDE1-1)","+3 Glaive: Empyrean's Unbreaking Glaive (WBW-DC-Sunlit-6)","+3 Greatsword: Wyrmguard (PS-DC-STRAT-DRAGON-5)","+3 Greatsword (WBW-DC-PLS-1)","+3 Hand Crossbow: Belmore (WBW-DC-PHP-LCL-2)","+3 Lance: Dream Whirl (CCC-BMG-39 HULB3-3)","+3 Longbow (BMG-DRWEP-OD-2)","+3 Piercing Weapon: Midnight Phaeton's Horn (CCC-ODFC2-3)","+3 Pike: Krahharuan Fork (DDAL7-10)","+3 Scimitar (DDEP6-2)","+3 Shortsword: Harengon's Freedom (AL:SA-11A)","+3 Spear: Blood-Drinker's Backbone (RMH-5/RMH-6)"],
		"+2 bow (ddex3-7)" : {
			name : "+2 (DDEX3-7)",
			source : [["AL","S3"]],
			rarity : "rare",
			description : "This +2 weapon has the sentinel property and glows dimly in the presence of humans. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This +2 weapon has the sentinel property and glows dimly in the presence of humans.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon. [Alternate reward per the ALCC while Oathbow was removed]",
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
		"+2 dagger (ccc-ghc-6)" : {
			name : "+2 Dagger (CCC-GHC-6)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This exquisitely crafted dagger bears the faces of tragedy and comedy etched into the pommel. I have a +2 bonus to attack and damage rolls made with it.",
			descriptionFull : "This exquisitely crafted dagger bears the faces of tragedy and comedy etched into the pommel.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dagger +2"], options : ["Dagger +2"] },
			},
		"+2 dagger (sj-dc-inas-3)" : {
			name : "+2 Dagger (SJ-DC-INAS-3)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This dagger bears the insignia of House Novella on its ornate hilt. I have a +2 bonus to attack and damage rolls made with the magic weapon.",
			descriptionFull : "This weapon has additional flavor; it bears the insignia of House Novella on its ornate hilt. This feature has no mechanical effect and is only relevant in this or other adventures in the Chromaspace setting.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dagger +2"], options : ["Dagger +2"] },
			},
		"+2 dagger: epa (trading post)" : {
			name : "+2 Dagger (EPA)",
			source : [["AL:FC","DWB"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 dagger's blade is coated in a thin layer of an unknown chemical that can never be washed away. The chemical was thought to be completely destroyed by the Forgotten Realms environmental protection agency centuries ago, due to the extreme* (normal) damage it does when in contact with plants. Druids are sure to try to confiscate this fell blade if they see it.",
			descriptionLong : "This dagger's blade is coated in a thin layer of an unknown chemical that can never be washed away. The chemical was thought to be completely destroyed by the Forgotten Realms environmental protection agency centuries ago, due to the extreme* (normal) damage it does when in contact with plants. Druids are sure to try to confiscate this fell blade should they see it. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The blade of this dagger is coated in a thin layer of unknown chemical that can never be washed away. This chemical was thought to be completely destroyed by the Forgotten Realms environmental protection agency centuries ago, due to the extreme* (normal) damage it does when in contact with plants. Druids are sure to try to confiscate this fell blade should they see it (Custom flavor from the 2023 DWB Trading Post).\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dagger +2"], options : ["Dagger +2"] },
			},
		"+2 glaive: azure sky (sj-dc-angka-6)" : {
			name : "Azure Sky, +2 Glaive (SJ-DC-ANGKA-6)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "The blade of this +2 glaive is made from a single flawless sapphire, shimmering with a mesmerizing azure glow. Its shaft is intricately carved from an ancient wyrm bone and hums with power, guiding my hand with grace. It also warns me, giving +2 initiative if I'm not Incapacitated.",
			descriptionLong : "The blade of this glaive is made from a single flawless sapphire, shimmering with a mesmerizing azure glow. Its shaft, intricately carved from the bone of an ancient wyrm, hums with power, guiding my hand with grace. I have a +2 bonus to attack and damage rolls made with this magic weapon. The glaive also whispers warnings, giving +2 initiative if I'm not incapacitated.",
			descriptionFull : "The blade of this glaive is made from a single, flawless sapphire, shimmering with a mesmerizing azure glow, while its shaft, intricately carved from the bone of an ancient wyrm, hums with power, guiding the hand of its wielder with grace.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Azure Sky, Glaive +2"], options : ["Azure Sky, Glaive +2"] },
			},
		"+2 greataxe: whisper (ddhc-toa-8)" : {
		name : "Whisper, +2 Greataxe (DDHC-TOA-8)",
			source : [["AL","S7"]],
			rarity : "very rare",
			attunement : true,
			description : "Whisper is normally a +1 greataxe. If I attune to the weapon, it becomes a +2 greataxe, I gain Darkvision to 120 ft, and have advantage on Stealth checks. While attuned, I can only speak in whispers.",
			descriptionLong : "Whisper is normally a +1 greataxe. If I attune to this magic weapon, it becomes a +2 greataxe, I gain Darkvision to 120 ft, and advantage on Stealth checks. While attuned, I can only speak in whispers. I have either a +1 or +2 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "Whisper is normally a +1 Greataxe. However, if the wielder attunes to the weapon, it becomes a +2 greataxe, the wielder gains Darkvision to 120 feet, and advantage on Stealth checks. However, while attuned the wielder can only speak in whispers. You have either a +1 or +2 bonus to attack and damage rolls made with this magic weapon.",
			vision : [["Darkvision", "fixed 120"], ["Darkvision", "120"]],
			weaponsAdd : { select : ["Whisper, Greataxe +2"], options : ["Whisper, Greataxe +2"] },
			advantages : [["Stealth", true]],
			},
		"+2 greataxe: gleaming (sj-dc-nmb1-3)" : {
		name : "Gleaming Greataxe +2 (NMB1-3)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "Giant in origin, the servants of royalty used this ancient artifact to prepare meals. The +2 golden greataxe is ensorcelled to never get dirty, making it a perfect utensil for an oversized kitchen.",
			descriptionLong : "Giant in origin, the servants of royalty used this ancient artifact to prepare meals. The golden greataxe is ensorcelled to never get dirty, making it a perfect utensil for an oversized kitchen. I have a +2 bonus to attack and damage rolls made with it.",
			descriptionFull : "Giant in origin, the servants of royalty used this ancient artifact to prepare meals. The golden hatchet is ensorcelled to never get dirty, making it a perfect utensil for an oversized kitchen.\n   " + toUni("Gleaming") + ". This item never gets dirty.\n   You have +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Gleaming Greataxe +2"], options : ["Gleaming Greataxe +2"] },
			},
		"+2 greataxe: gythka (sj-dc-pat-1)" : {
		name : "Gythka, Greataxe +2 (PAT-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "A +2 greataxe of the two-bladed thri-kreen style. Moss-ink designs etched in the handle let me suffer no harm in extreme temperatures past 0\u00B0F and 100\u00B0F.",
			descriptionLong : "A greataxe of the two-bladed thri-kreen style. Moss-ink designs etched in the handle let me suffer no harm in extreme temperatures past 0\u00B0F and 100\u00B0F. I have a +2 bonus to atk and dmg rolls made with this magic weapon.",
			descriptionFull : "A greataxe of the two-bladed thri-kreen style. Moss-ink designs etched in the handle grant it the temperate minor property.\n   " + toUni("Temperate") + ". You are unharmed by temperatures of 0 degrees Fahrenheit or lower, and 100 degrees Fahrenheit or higher.\n   You have +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Gythka, Greataxe +2"], options : ["Gythka, Greataxe +2"] },
			savetxt : { immune : ["temps past 0\u00B0F/100\u00B0F"] },
			},
		"+2 greatsword: tyr's justice (ccc-ghc-8)" : {
		name : "Tyr's Justice, +2 Greatsword (CCC-GHC-8)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "Other than the balanced scales of Tyr's holy symbol etched into the blade, this +2 greatsword is simple & unadorned. It was commissioned by Lord Althorin to dispense his judgments and mirrors his belief that justice is for everyone. The sword also warns me, giving +2 to initiative unless I'm Incapacitated.",
			descriptionLong : "Other than the balanced scales of Tyr's holy symbol etched into the blade, this greatsword is simple and unadorned. Known as \"Tyr's Justice\", it was commissioned by Lord Althorin to dispense his judgments and mirrors his belief that justice is for everyone. The sword warns me, granting a +2 bonus to initiative unless I'm Incapacitated. I also have a +2 bonus to attack and damage rolls made with this magic sword.",
			descriptionFull : "Other than the balanced scales of Tyr's holy symbol etched into the blade, this sword is simple and unadorned in appearance. The weapon whispers warnings to the bearer granting a +2 bonus to Initiative.\n   From 1340 to 1385 DR, Lord Mattus Althorin ruled a small fiefdom in the Border Kingdoms near the Lake of Steam. Lord Althorin ran his council and maintained peace in his lands with the assistance of the Knights of the Holy Judgement, an order of paladins who emphasize the 'lawful' part of their dedication to Tyr.\n   To dispense Tyr's most brutal judgments, Lord Althorin commissioned the creation of a magical greatsword, which he dubbed \"Tyr's Justice\". During his rule, several different paladins belonging to the Order of the Knights of Holy Judgement claimed the headman's sword as their own. When the Spellplague ravaged Toril in the Year of Blue Fire, the Border Kingdoms devolved into a lawless frontier of outlaws and would-be rulers, and the sword was lost for nearly a century. It later resurfaced in the Moonsea region.\n   Other than the balanced scales of Try's holy symbol etched into its blade, the sword is intentionally simple in appearance, mirroring Lord Althorin's predominant belief: \"Justice is not pretentious or vain. It is simple and true, and the right of every man, woman, and child, no matter how rich, poor, educated, or ignorant they may be.\"\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Tyr's Justice, Greatsword +2"], options : ["Tyr's Justice, Greatsword +2"] },
			},
		"+2 greatsword: githyanki greater silver sword (ccc-tri-27 rose1-2)" : {
		name : "Githyanki Greater Silver Sword (+2 Greatsword)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This silvery greatsword tries to talk to me when grasped, but no ability or magic allows me to understand. It can only speak to its original wielder. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This is a silvered greatsword that, when grasped, tries to talk to the wielder but is unable to and no ability or magic allows the wielder to speak to it. It will only speak to the original wielder.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Githyanki Silvered Greatsword +2"], options : ["Githyanki Silvered Greatsword +2"] },
			},
		"+2 greatsword (fr-dc-aeg-6)" : {
		name : "+2 Greatsword (FR-DC-AEG-6)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "I have a +2 bonus to attack and damage rolls made with this magic greatsword. I can also use a Magic action to make my voice carry clearly for up to 600 ft until my next turn ends.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("War Leader") + ".  You can take a Magic action to cause your voice or signal to carry clearly for up to 600 feet until the end of your next turn.",
			action : [["action", " Greatsword (600ft Voice)"]],
			weaponsAdd : { select : ["Greatsword +2"], options : ["Greatsword +2"] },
			},
		"+2 greatsword: elven curve blade (fr-dc-lax-1-2)" : {
		name : "Elven Curve Blade, +2 Greatsword (LAX-1-2)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 greatsword is decorated with silver and gold floral patterns found in the ancient Elven city of Myth Drannor and gives off a faint floral scent. A soft feminine voice whispers warnings, giving +2 initiative if I'm not Incapacitated.",
			descriptionFull : "This greatsword is decorated with silver and gold patterns of Elven florals found in the ancient city of Myth Drannor. The wielder can smell a faint floral scent.\n   " + toUni("Guardian") + ". A soft feminine voice whispers warnings, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Elven Curve Blade, Greatsword +2"], options : ["Elven Curve Blade, Greatsword +2"] },
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			},
		"+2 greatsword (fr-dc-melb-1-2)" : {
		name : "+2 Greatsword (FR-DC-MELB-1-2)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This greatsword is made of a strange black metal. The blade is polished to a high sheen with a black opal inset into the pommel. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This greatsword is made of a strange black metal. The blade is polished to a high sheen with a black opal inset into the pommel.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Greatsword +2"], options : ["Greatsword +2"] },
			},
		"+2 greatsword: agony (sj-dc-angka-1)" : {
		name : "Agony, +2 Greatsword (SJ-DC-ANGKA-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "The hilt of this +2 greatsword is wrapped in black leather. The blade is blood red & its sheath the color of red wine. Created through ritual sacrifice, it radiates the hot metallic scent of fear & the singed sulfur smell of anger. When held, I hear the cries & warnings of the soul fragment trapped within, giving +2 initiative unless I'm Incapacitated.",
			descriptionLong : "The hilt of this greatsword is wrapped in black leather. The blade is blood red and its sheath the color of red wine. Created through ritual sacrifice, it radiates the hot metallic scent of fear and the singed sulfur smell of anger. When I hold the sword, I hear the cries and warnings of the soul fragment trapped within, granting a +2 bonus to initiative unless I'm Incapacitated. I also have a +2 bonus to attack and damage rolls made with this magic sword.",
			descriptionFull : "The hilt of this greatsword is wrapped in black leather. The blade itself is blood red, and its sheath is the color of red wine. Created through ritual sacrifice, this greatsword radiates the hot, metallic scent of fear and the singed sulfur smell of anger. When you hold it, you can hear the whispered cries of the soul fragment trapped within.\n   " + toUni("Guardian") + ". The trapped soul whispers warnings to the bearer granting a +2 bonus to Initiative.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Agony, Greatsword +2"], options : ["Agony, Greatsword +2"] },
			},
		"+2 greatsword: lux machaera (sj-dc-liga6)" : {
		name : "Lux Machaera, +2 Greatsword (LIGA6)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 greatsword has a violet-pink pommel and glows with purple sparks when held within 120 ft of an Aberration. The command word ‘celare' causes the blade of the sword to retract into the handle or return to its original shape.",
			descriptionLong : "This greatsword has a violet-pink pommel and glows with purple sparks when held within 120 ft of an Aberration. The command word ‘celare' causes the blade of the sword to retract into the handle or return to its original shape. I also have a +2 bonus to attack and damage rolls made with this magic sword.",
			descriptionFull : "This violet-pink pommel greatsword has the Sentinel property and glows in purple sparks when held within 120 feet of an aberration. The command word ‘celare' causes the blade of the sword to retract into the handle or return to its original shape.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Lux Machaera, Greatsword +2"], options : ["Lux Machaera, Greatsword +2"] },
			},
		"+2 greatsword (sj-dc-rh-1)" : {
			name : "+2 Greatsword (SJ-DC-RH-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 silvery ceremonial greatsword is an ancient githyanki artifact. As a bonus action, I can make the sword shed bright light in a 10-ft radius and another 10-ft dim, or extinguish the light.",
			descriptionLong : "This ceremonial silvery greatsword is an ancient githyanki artifact. I have a +2 bonus to attack and damage rolls made with this weapon. As a bonus action, I can make the sword shed bright light in a 10-ft radius and another 10-ft dim, or extinguish the light.",
			descriptionFull : "This ceremonial silver sword is an ancient githyanki artifact.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			action : [["bonus action", "Greatsword (light/dim)"]],
			weaponsAdd : { select : ["Greatsword +2"], options : ["Greatsword +2"] },
			},
		"+2 hand crossbow (sj-dc-echo-4)" : {
			name : "+2 Hand Crossbow (SJ-DC-ECHO-4)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			allowDuplicates : true,
			description : "Created by a giff engineer, this +2 crossbow is enchanted to resemble the heavy pistols used by Reggie's Roughnecks. I can also use the imbued illusion magic to alter its appearance in minor ways.",
			descriptionLong : "CCreated by a giff engineer, this crossbow is enchanted to resemble the heavy pistols used by Reggie's Roughnecks. I gain a +2 bonus to attack and damage rolls made with it. I can also use the imbued illusion magic to alter its appearance in minor ways.",
			descriptionFull : "Created by a giff engineer, this crossbow is enchanted to resemble the heavy pistols used by Reggie's Roughnecks.\n   " + toUni("Illusion") + ". The item is imbued with illusion magic, allowing its bearer to alter the item's appearance in minor ways. Such alterations don't change how the item is worn, carried, or wielded, and they have no effect on its other magical properties. For example, the wearer could make a red robe appear blue, or make a gold ring look like it's made of ivory. The item reverts to its true appearance when no one is carrying or wearing it.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Hand Crossbow +2"], options : ["Hand Crossbow +2"] },
			},
		"+2 hand crossbow (sj-dc-rock-1)" : {
			name : "+2 Hand Crossbow (SJ-DC-ROCK-1)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			allowDuplicates : true,
			description : "Mahaxara, captain of Bral's royal guard, favoured this sleek and deadly +2 hand crossbow. It's shaped like 2 intertwined snakes, etched along the stock and barrel, with the crossbow's limbs protruding from each snake's head like deadly fangs. It also warns me, giving +2 initiative unless I'm Incapacitated.",
			descriptionLong : "Mahaxara, captain of Bral's royal guard, favoured this sleek and deadly hand crossbow. It's shaped like 2 intertwined snakes, etched along the stock and barrel, with the crossbow's limbs protruding from each snake's head like deadly fangs. I gain a +2 bonus to attack and damage rolls made with the weapon. It also warns me, giving +2 initiative unless I'm Incapacitated.",
			descriptionFull : "Mahaxara, captain of Bral's royal guard, favours this sleek and deadly hand crossbow. It is shaped like two intertwined snakes, etched along the stock and barrel. The crossbow's limbs protrude from each snake's head, resembling the viper's deadly fangs.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Hand Crossbow +2"], options : ["Hand Crossbow +2"] },
			},
		"+2 heavy crossbow: first blood (sj-dc-tbs-4)" : {
			name : "First Blood, +2 Heavy Crossbow (TBS-4)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			allowDuplicates : true,
			description : "This +2 heavy crossbow is crafted from sturdy dark wood and gold. The edges are adorned with elaborate carvings of war. It yearns for blood! It also warns me, giving +2 initiative unless I'm Incapacitated.",
			descriptionLong : "This magic crossbow is crafted from sturdy dark wood and gold. The edges are adorned with elaborate carvings of war. It yearns for blood! I gain a +2 bonus to attack and damage rolls made with the weapon. It also warns me, giving +2 initiative unless I'm Incapacitated.",
			descriptionFull : "This crossbow's frame is crafted from sturdy darkwood and gold. Its edges are adorned with elaborate carvings of war. It yearns for blood!\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["First Blood, Heavy Crossbow +2"], options : ["First Blood, Heavy Crossbow +2"] },
			},
		"+2 longbow: deep's reach (ccc-bmg-moon12-2)" : {
			name : "Deep's Reach, +2 Longbow (BMG-MOON12-2)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This longbow is made from hundreds of small octopus tentacles that chaotically twist and writhe when the mother of pearl grip is held. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The limbs of this longbow are made from hundreds of small octopus tentacles that chaotically twist and writhe when the mother of pearl grip is held.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Deep's Reach, Longbow +2"], options : ["Deep's Reach, Longbow +2"] },
			},
		"+2 longbow: giant's bane (ccc-ghc-9)" : {
			name : "Giant's Bane, +2 Longbow (CCC-GHC-9)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This stout recurved +2 longbow is made from the horn of a great beast and ringed in complex sigils at each end. Commissioned from a Westgate wizard as a courting gift for a half-elf ranger, the bow glows faintly when Giants are in 120 ft. This includes  any creature with the Giant type, such as ogres and trolls.",
			descriptionLong : "This stout recurved longbow is fashioned from the horn of a great beast and ringed in complex sigils at each end. I gain +2 to attack and damage rolls made with it. Commissioned from a Westgate wizard as a courting gift for a half-elf ranger, the bow glows faintly when Giants are within 120 ft. This refers to any creature with the Giant type, such as ogres and trolls.",
			descriptionFull : "This stout recurved bow is fashioned from the horn of a great beast and ringed in complex sigils at either end. The bow also has the Sentinel minor property and glows faintly when giants are within 120 feet of it. For this weapon, 'giant' refers to any creature with the giant type, including ogres and trolls.\n   In 1325 DR the ranger Kaylin Plainstalker patrolled a vast area between the Giant's Run Mountains and Elversult. Of half-elven heritage, the woman was a beauty, as well as an expert shot with her bow. Her attractiveness and her prowess at stopping marauding bands of hill giants soon caught the eye of Rilar Biltmoor, a rakish young wool merchant from Elversult. To gain her favor, the young man paid a wizard from Westgate to craft her a magical bow made of yew. Kaylin accepted the weapon, but rebuffed the merchant's romantic interests.\n   Several years later, Rilar's business failed, and he lost everything. He returned to his family farm on the outskirts of Elversult. Instead of organizing large shipments of wool to Westgate and Iriaebor, he spent his days tending sheep in the foothills of the Giant's Run Mountains.\n   When Kaylin learned of the man's troubles, she visited and offered to return the weapon he had given to her, hoping she could ease his financial burdens. Rilar declined the bow, claiming he had found a peace and contentment as a sheep header that he had not known as a merchant. His honesty and newfound humility touched the ranger, and over time, she grew to love the man she had rejected years earlier. They eventually married and started a family of their own.\n   The bow remained in Kaylin's possession until she died peacefully in her sleep at her family's farm.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Giant's Bane, Longbow +2"], options : ["Giant's Bane, Longbow +2"] },
			},
		"+2 longbow (ddep5-2)" : {
			name : "+2 Longbow (DDEP5-2)",
			source : [["AL","S5"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "The shaft of this exquisite +2 longbow is patterned with maps of famous rivers that pass through the Moonshae Isles. If I say the name of one of these rivers, the bow makes the sound of rushing water when an arrow is loosed.",
			descriptionLong : "The shaft of this exquisite longbow is patterned with maps of famous rivers that pass through the Moonshae Isles. If I say the name of one of these rivers, the bow makes the sound of rushing water when an arrow is loosed. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The shaft of this exquisite longbow is patterned with maps of famous rivers that pass through the Moonshae Isles. If the names of one of these rivers are said aloud, the bow issues forth the sound of rushing water when an arrow is loosed.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Longbow +2"], options : ["Longbow +2"] },
			},
		"+2 longbow: bloodthirst (sj-dc-epoch-1)" : {
			name : "Bloodthirst, +2 Longbow (SJ-DC-EPOCH-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This longbow is carved from grey wood with inlaid red gems. When given the chance, it heightens my urge to act in selfish or malevolent ways. I also gain +2 to attack and damage rolls made with this weapon.",
			descriptionFull : "This longbow is carved from grey wood with inlaid red gems.\n   " + toUni("Wicked") + ". When the bearer is presented with an opportunity to act in a selfish or malevolent way, the item heightens the bearer's urge to do so.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Bloodthirst, Longbow +2"], options : ["Bloodthirst, Longbow +2"] },
			},
		"+2 longbow: friendbow (sj-dc-scr-1)" : {
			name : "Friendbow, +2 Longbow (SJ-DC-SCR-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 longbow was crafted from a fused dragon collarbone and coated in translucent gold. It has no apparent drawstring but a thin glowing string appears when an arrow is nocked. The bow was the property of a traveler to the Dracometrium who has moved on but the Caretaker recalls them as a friend.",
			descriptionLong : "This magical longbow was crafted from a fused dragon collarbone and coated in translucent gold. It has no apparent drawstring but a thin glowing string appears when an arrow is nocked. The bow was the property of a traveler to the Dracometrium who has moved on but the Caretaker recalls them as a friend. I gain +2 to attack and damage rolls made with this weapon.",
			descriptionFull : "This magical bow was crafted from the fused dragon collarbone and coated in a translucent gold. It has no apparent drawstring; however, whenever an arrow is nocked, a thin, glowing drawstring appears. The bow was the property of a traveler to the Dracometrium who has moved on. The Caretaker recalls that they were a friend.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Friendow, Longbow +2"], options : ["Friendbow, Longbow +2"] },
			},
		"+2 longbow: craygen's bow (sj-dc-ssm-ubcon-1)" : {
			name : "Craygen's Bow, +2 Longbow (SSM-UBCON-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 magic longbow has a thin yellow strand woven about the handle and inset into the wood. It's said to be a single thread from the string of the bow wielded by the autognome hero, Craygen. While on my person, I can speak Gnomish.",
			descriptionFull : "A thin, yellow strand, woven about the handle of the bow and inset into the wood itself, is said to be a single thread from the bowstring of the bow once wielded by the autognome hero, Cragen.\n   " + toUni("Language") + ". The bearer can speak and understand Gnomish while the item is on the bearer's person.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			languageProfs : ["Gnomish"],
			weaponsAdd : { select : ["Craygen's Bow, Longbow +2"], options : ["Craygen's Bow, Longbow +2"] },
			},
		"+2 longsword: elven blade of the third age (ccc-bwm-2)" : {
			name : "Elven Blade of the Third Age, +2 Longsword (BWM-2)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This curved single-edged +2 longsword is made with a rare alloy of mithril & steel. Forged during the 3rd age in Illefarn, it was a favoured weapon of elven Warblades & Bladesingers when battling their ancient orcish foes. Due to the mithril alloy, the longsword weighs half as much (1.5 lbs). The blade glows with a cold blue light when Orcs or Goblins are in 300 ft.",
			descriptionLong : "This curved, single-edged elven blade is made with a rare alloy of mithril and steel. Forged during the 3rd age in Illefarn, this blade was a favoured weapon of elven Warblades and Bladesingers when battling their ancient orcish foes. Due to the mithril alloy, the longsword weighs half as much (1.5 lbs). The blade glows with a cold blue light when Orcs or Goblins are within 300 ft. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This curved, single-bladed, hand-and-a-half elven blade is made with a rare alloy containing both mithril and steel. Forged during the third age by the elves of Illefarn, this blade was a favoured weapon for elven Warblades and Bladesingers who long battled their ancient foes, the orcs. Due to the mithril found in the blade, the longsword weighs half as much as a regular longsword. In addition, the blade glows with a cold blue light when Orcs and Goblins are within 300 feet of it.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponOptions : {
				baseWeapon : "longsword",
				regExpSearch : /^(?=.*elven)(?=.*blade)(?=.*third)(?=.*age).*$/i,
				name : "Elven Blade of the Third Age +2",
				weight : 1.5,
				selectNow : true,
				}
			},
		"+2 longsword: stout (ccc-ghc-bk1-5)" : {
			name : "Stout, +2 Longsword (CCC-GHC-BK1-5)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This longsword has a cross-guard shaped like a tree branch and an oak tree embossed on its pommel. It has the Gleaming property and never gets dirty. I have a +2 bonus to attack and damage rolls made with it.",
			descriptionFull : "This longsword has a cross-guard shaped like a tree branch and an oak tree embossed on its pommel. In addition, the sword has the Gleaming minor property and never gets dirty.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Stout, Longsword +2"], options : ["Stout, Longsword +2"] },
			},
		"+2 longsword: blazherserblane (fr-dc-liga-2)" : {
			name : "Blazherserblane, +2 Longsword (FR-DC-LIGA-2)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "I have a +2 bonus to attack and damage rolls made with this magical longsword. As a bonus action, it sheds bright light in a 10-ft radius and 10-ft more dim light, or stops.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.",
			weaponsAdd : { select : ["Blazherserblane, Longsword +2"], options : ["Blazherserblane, Longsword +2"] },
			action : [["bonus action", "Longsword (light/dim)"]],
			},
		"+2 longsword: westdeck sword (sj-dc-cgg-2)" : {
			name : "Westdeck Sword, +2 Longsword (CGG-2)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "The hilt of this +2 longsword has the sigil of House Westdeck. Viewed from certain angles under a clear sky in the Calatas system, it seems to take different forms. I can use a Magic action to make my voice carry clearly for up to 600 ft until my next turn ends.",
			descriptionLong : "The hilt of this longsword bears the sigil of House Westdeck. Viewing it from certain angles under a clear sky in the Calatas system makes it appear to take different forms. I have a +2 bonus to attack and damage rolls made with this magic weapon. I can also use a Magic action to make my voice carry clearly for up to 600 ft until my next turn ends.",
			descriptionFull : "The hilt of this longsword bears the sigil of House Westdeck. Viewing this sword from certain angles under a clear sky in the Calatas system makes one see its form change into a staff, a dagger, or a bow.\n   This sword has the War Leader minor property: You can take a Magic action to cause your voice or signal to carry clearly for up to 600 feet until the end of your next turn.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			action : [["action", "Westdeck Sword (600ft Voice)"]],
			weaponsAdd : { select : ["Westdeck Sword, Longsword +2"], options : ["Westdeck Sword, Longsword +2"] },
			},
		"+2 longsword (sj-dc-end-1-4)" : {
			name : "+2 Longsword (SJ-DC-END-1-4)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "The +2 longsword is a flawed imitation of the famous silver swords of the githyanki. Made of psionically charged steel, it feels like it's about to shift and flow at any moment. The psionic energies make the blade sharper and give me premonitions of danger, granting me a +2 bonus to initiative if I'm not Incapacitated.",
			descriptionFull : "The +2 longsword is a flawed imitation of one famous silver swords of the githyanki. Made of psionically charged steel, it feels like it is about to shift and flow at any moment.\n   The psionic energies do more than just make the blade sharper; it also gives the bearer premonitions of danger, granting a +2 bonus to initiative as long as the bearer isn't incapacitated.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["Longsword +2"], options : ["Longsword +2"] },
			},
		"+2 maul: manyoshu's kanabo (fr-dc-oni-1)" : {
			name : "Manyoshu's Kanabo, +2 Maul (ONI-1)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 maul has a wooden shaft with a bulging head and is incredibly warm to the touch. The head is studded with metal nodes and the weapon is harder than steel. It warns me, granting +2 to initiative if I'm not Incapacitated.",
			descriptionLong : "This maul has a wooden shaft with a bulging head and is incredibly warm to the touch. The surface of the head is studded with metal nodes and the weapon is harder than steel. It warns me, granting +2 to initiative if I'm not Incapacitated. I also have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "Manyoshu's Maul consists of a wooden shaft with a bulging head. The entire surface of the head is studded with metal nodes, and the weapon itself is harder than steel. Those who hold it find the kanabo to be incredibly warm to the touch.\n   " + toUni("Guardian") + ". The kanabo warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Manyoshu's Kanabo, Maul +2"], options : ["Manyoshu's Kanabo, Maul +2"] },
			},
		"+2 maul: coral great hammer (sj-dc-den-h5)" : {
			name : "Coral Great Hammer, +2 Maul (SJ-DC-DEN-H5)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 maul's handle is made from polished driftwood and the head is carved from coral taken from the Reef of Living Memory – Sekolah's Astral Domain. The memory corals have been infused with magic from Sahuagin hymns to Sekolah over centuries. I can speak Sahuagin but have the urge to sing the language rather than talk.",
			descriptionLong : "This maul's handle is made from polished driftwood and the head is carved from coral taken from the Reef of Living Memory – Sekolah's Astral Domain. The memory corals have been infused with magic from Sahuagin hymns to Sekolah over centuries. I can speak and understand Sahuagin while the maul is on my person. However, I have the urge to sing the language rather than speak. I also have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The handle of this maul is made from polished driftwood and the head carved from coral harvested from the Reef of Living Memory – Sekolah's Astral Domain. The memory corals have been infused with magic from the sahuagin hymns to Sekolah over centuries.\n   " + toUni("Language") + ". The bearer of this maul can speak and understand sahuagin while the item is on the bearer's person. However, the owner an urge to sing the sahuagin language rather than simply speak it.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			languageProfs : ["Sahuagin"],
			weaponsAdd : { select : ["Coral Great Hammer, Maul +2"], options : ["Coral Great Hammer, Maul +2"] },
			},
		"+2 maul: space clown hammer (sj-dc-fxc-jeff-1)" : {
			name : "Whack-a-Mole, +2 Maul (SJ-DC-FXC-JEFF-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
				allowDuplicates : true,
			description : "This Space Clown Hammer is named Whack-a-Mole and makes a laughing sound on a successful hit. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This weapon a Space Clown Hammer and is named Whack-a-Mole. It makes a laughing sound on a successful hit.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Whack-a-Mole, Maul +2"], options : ["Whack-a-Mole, Maul +2"] },
			},
		"+2 morningstar: mourning star (sj-dc-angka-5)" : {
			name : "Mourning Star, +2 Morningstar (ANGKA-5)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 morningstar is made of pure amethyst. Its head has a glowing inner core and its translucent purplish spikes trail arcane energy when swung. As a bonus action, it sheds bright light in a 10-ft radius and 10-ft more dim light, or stops.",
			descriptionLong : "This morningstar is made of pure amethyst. Its head has a glowing inner core and its translucent purplish spikes trail arcane energy when swung. I have a +2 bonus to attack and damage rolls made with this magic weapon. As a bonus action, it sheds bright light in a 10-ft radius and 10-ft more dim light, or stops.",
			descriptionFull : "The entirety of this morningstar is made of pure amethyst. The head has a glowing inner core, and its translucent, purplish spikes trail raw arcane energy when the morning star is swung.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			action : [["bonus action", "Weapon (light/dim)"]],
			weaponsAdd : { select : ["Mourning Star, Morningstar +2"], options : ["Mourning Star, Morningstar +2"] },
			},
		"+2 pike: horizon caller (sj-dc-conmar-1)" : {
		name : "Horizon Caller, +2 Pike (SJ-DC-CONMAR-1)",
			source : [["AL","SJ-DC"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "Aeons ago, an orc paladin used this pike in a great battle against a demon lord whose name has been erased from history. The divine soul of the angel trapped inside has left, but the voice that rallied the armies can still be summoned by its magic. As a Magic action, I can make my voice carry clearly for 600 ft until my next turn ends.",
			descriptionLong : "Aeons ago, an orc paladin used this pike in a great battle against a demon lord whose name has been erased from history. The divine soul of the angel trapped inside has left, but the voice that rallied the paladin's armies can still be summoned by its magic. As a Magic action, I can make my voice carry clearly for 600 ft until my next turn ends. I also have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This pike formerly had an angel trapped inside. Aeons ago, it was used by a famous orc paladin in a great battle against a demon lord whose name has been erased from history. The divine soul has long left, but the voice that rallied the hundred armies can still be summoned by its innate magic.\n   " + toUni("War Leader") + ". You can take a Magic action to cause your voice or signal to carry clearly for up to 600 feet until the end of your next turn.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			action : [["action", "+2 Pike (600ft Voice)"]],
			weaponsAdd : { select : ["Horizon Caller, +2 Pike"], options : ["Horizon Caller, +2 Pike"] },
			},
		"+2 quarterstaff: herfren's marshaling wand (sj-dc-bst-2)" : {
			name : "Herfren's Marshaling Wand, +2 Quarterstaff (BST-2)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			allowDuplicates : true,
			description : "Specially designed for the Wilder parts of Wildspace, this +2 quarterstaff brings all the ships to the yard with its magic. As a bonus action, it sheds bright light in a 10-ft radius and another 10-ft dim, or stops.",
			descriptionLong : "Specially designed for the Wilder parts of Wildspace, Herfren's Marshaling Wand brings all the ships to the yard with its magic. As a bonus action, it sheds bright light in a 10-ft radius and another 10-ft dim, or stops. I have a +2 bonus to attack and damage rolls made with this magic quarterstaff.",
			descriptionFull : "Specially designed for the Wilder parts of Wildspace, Herfren's marshaling wand brings all the ships to the yard with its Beacon property.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			action : [["bonus action", "Hefren's Wand (light/dim)"]],
			weaponsAdd : { select : ["Hefren's Marshaling Wand, Quarterstaff +2"], options : ["Hefren's Marshaling Wand, Quarterstaff +2"] },
			},
		"+2 rapier: the sixth sword (ccc-hal-3)" : {
		name : "The Sixth Sword, +2 Rapier (CCC-HAL-3)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This rapier was one of marilith S'Sheneth'Rah's six swords. She was known for her tactical superiority and quick striking in battle. After years of use, her magic essence became imbued into the sword. It twitches at critical times, bringing itself to a ready position and giving me a +2 bonus to initiative.",
			descriptionLong : "One of marilith S'Sheneth'Rah's six swords, this magic weapon has a +2 bonus to attack and damage rolls. She was known for her tactical superiority and quick striking in battle. Through years of use, her magic essence became imbued into the sword. It twitches at critical times, bringing itself to a ready position and giving me a +2 bonus to initiative.",
			descriptionFull : "This is one of marilith S'Sheneth'Rah's six swords. In battle she was known for her tactical superiority and quick striking. Through years of use, some of her essence became imbued into the sword's magic and it occasionally twitches at critical times, bringing itself to a ready and deadly position. As a result of this, the wielder gains a +2 bonus to Initiative.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["The Sixth Sword, Rapier +2"], options : ["The Sixth Sword, Rapier +2"] },
			},
		"+2 rapier (fr-dc-aeg-9)" : {
		name : "+2 Rapier (FR-DC-AEG-9)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "I have +2 to attack and damage rolls made with this magic rapier. It also warns me, giving a +2 bonus to initiative if I'm not Incapacitated.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.",
			weaponsAdd : { select : ["Rapier +2"], options : ["Rapier +2"] },
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			},
		"+2 rapier (sj-dc-dragon-3)" : {
		name : "+2 Rapier (SJ-DC-DRAGON-3)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 rapier is a masterpiece of steel and magic. Its slender blade gleams with an enchanting brilliance and is capable of piercing defenses effortlessly. Adorned with delicate engravings of intertwining vines, the hilt feels balanced and comfortable, resonating with a subtle energy. Its flawless gemstone pommel captures light and hints at the arcane power coursing through its elegant design.",
			descriptionFull : "The +2 rapier is a masterpiece of steel and magic, its slender blade gleaming with an enchanting brilliance. Adorned with delicate engravings of intertwining vines, the hilt feels balanced and comfortable, resonating with a subtle energy. This deadly weapon enhances precision and finesse, capable of piercing defenses effortlessly, while its flawless gemstone pommel captures light and hints at the arcane power coursing through its elegant design.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Rapier +2"], options : ["Rapier +2"] },
			},
		"+2 scimitar (sj-dc-dra-1)" : {
		name : "+2 Scimitar (SJ-DC-DRA-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This scimitar whispers warnings, granting me a +2 bonus to initiative if I'm not Incapacitated. I also have a +2 bonus to atk and damage rolls made with this magic weapon.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Scimitar +2"], options : ["Scimitar +2"] },
			},
		"+2 scimitar (sj-dc-igc-ecp-5)" : {
		name : "+2 Scimitar (SJ-DC-IGC-ECP-5)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "When held, this +2 scimitar is a conduit of elemental might, capable of devastating attacks using the forces of creation. It transcends elemental boundaries and connects to the very fabric of the cosmos. The sword chaotically shifts between earth, fire, ice and lightning with no visible seam between them, a celestial dance that embodies cosmic harmony.",
			descriptionLong : "When held, the Cosmic Elemental Scimitar becomes a conduit of elemental might, capable of unleashing devastating attacks using the forces of creation. It transcends elemental boundaries and connects to the very fabric of the cosmos. The sword's material chaotically shifts between earth, fire, ice and lightning with no visible seam between them, a celestial dance that embodies cosmic harmony. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "When held the Cosmic Elemental Scimitar becomes a conduit of cosmic elemental might, capable of unleashing devastating cosmic attacks that harmonize the forces of creation. It is a weapon beyond compare, a rare item that transcends the boundaries of the elements and connects them to the very fabric of the cosmos. The scimitar's material chaotically shifts between earth, fire, ice, and lightning sometimes intertwining like a celestial dance, with no visible seam between them, as if the sword itself is an embodiment of the cosmic harmony.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Scimitar +2"], options : ["Scimitar +2"] },
			},
		"+2 shortsword: smoke (ccc-sfbay1-1)" : {
		name : "Smoke, +2 Shortsword (CCC-SFBAY1-1)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This thin blade is 1.5 ft in length and scorched black. No amount of oiling, scrubbing, or cleaning will remove the stain or brighten the blade. The sword ends in a jagged broken edge, as if much longer once and the hilt is protected by a fencer's basket guard. This +2 shortsword cuts easily through flesh and bone, leaving the faint smell of smoke in its wake.",
			descriptionFull : "This thin blade is a foot and a half in length, and scorched black. No amount of oiling, scrubbing, or cleaning will remove the stain or brighten the blade. It ends in a jagged, broken edge, as if it was once much longer. The hilt is protected by a fencer's basket guard. The pommel has a socket, as if for a jewel, but it is empty. This short sword cuts easily through flesh and bone, and leaves the faint smell of smoke in its wake.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Smoke, Shortsword +2"], options : ["Smoke, Shortsword +2"] },
			},
		"+2 shortsword (ddal0-13)" : {
		name : "+2 Shortsword (DDAL0-13)",
			source : [["KOSC", 82]],
			rarity : "rare",
			allowDuplicates : true,
			description : "The shortsword is made from the claw of a polar bear, with a white blade and a black tip. I growl when happy. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The shortsword is made from the claw of a polar bear, with a white blade and a black tip. The wielder, when happy, growls.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortsword +2"], options : ["Shortsword +2"] },
			},
		"+2 shortsword (rv-dc-poe-1)" : {
		name : "+2 Shortsword (RV-DC-POE-1)",
			source : [["AL:R","DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This shortsword enhances pangs of conscience when I consider or undertake a malevolent act. I also have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Conscientious") + ". When the bearer of this item contemplates or undertakes a selfish or malevolent act, the item enhances pangs of conscience.",
			weaponsAdd : { select : ["Shortsword +2"], options : ["Shortsword +2"] },
			},
		"+2 spear (ps-dc-dragon24-2)" : {
		name : "+2 Spear (PS-DC-DRAGON24-2)",
			source : [["AL","PS-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "I see faint visions of the near future while bearing this spear, giving me +2 initiative if I'm not Incapacitated. I also have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "You see faint visions of the near future while bearing this spear.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Spear +2"], options : ["Spear +2"] },
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		},
		"+2 trident (ccc-cic-12)" : {
		name : "+2 Trident (CCC-CIC-12)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This trident is embossed with the holy symbol of Talos and floats on water. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Trident +2"], options : ["Trident +2"] },
			},
		"+2 trident: deep sashelas (ps-dc-pkl-9)" : {
		name : "+2 Trident of Deep Sashelas (PS-DC-PKL-9)",
			source : [["AL","PS-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This golden trident has the image of a dolphin engraved into the fork: the holy symbol of Deep Sashelas. It floats on water and other liquids, giving me advantage on Str (Athletics) checks to swim. I have +2 to attack and damage rolls for this weapon.",
			descriptionFull : "This golden trident has the image of a dolphin engraved into the fork; the holy symbol of Deep Sashelas.\n   " + toUni("Waterborne") + ". This item floats on water and other liquids. You have advantage on Strength (Athletics) checks to swim.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Trident of Deep Sashelas +2"], options : ["Trident of Deep Sashelas +2"] },
			savetxt : { text : ["Adv on Str (Athletic) chks to swim"] },
			},
		"+2 war pick (ccc-myr1-1)" : {
			name : "+2 War Pick (CCC-MYR1-1)",
			source : [["AL","CCC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 war pick is fashioned from a bent remorhaz whisker, carved with intricate depictions of the great beast in action.  It retains some of the beast's inherent warmth and I'm unharmed in extreme temperatures past 0\u00B0F and 100\u00B0F.",
			descriptionFull : "This weapon is fashioned from a bent remorhaz whisker, carved with intricate depictions of the great beast in action. It also retains some of the beast's inherent warmth. You are unharmed by temperatures of 0 degrees Fahrenheit or lower, and 100 degrees Fahrenheit or higher. It does not convey any resistance to damage.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			savetxt : { immune : ["temps past 0\u00B0F/100\u00B0F"] },
			weaponsAdd : { select : ["War Pick +2"], options : ["War Pick +2"] },
			},
		"+2 warhammer (fr-dc-bmk-1)" : {
			name : "+2 Warhammer (FR-DC-BMK-1)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This meticulously-crafted +2 warhammer has dwarven runes etched on the shaft that hum with faint lunar light, like captured moonbeams frozen in steel. As a bonus action, I can make it shed bright light in a 10-ft radius and 10-ft more dim light, or stop it.",
			descriptionFull : "This meticulously-crafted warhammer has dwarven runes etched on the shaft that hum with faint lunar light, like captured moonbeams frozen in steel.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Warhammer +2"], options : ["Warhammer +2"] },
			action : [["bonus action", " (light/dim)"]],
			},
		"+2 weapon (pota)" : {
			name : "+2 (PotA)",
			source : [["AL","PotA"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This weapon vibrates and flares a deep scarlet glow when within 50 feet of orcs. Against orcs, the weapon inflicts +2d6 damage. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "A +2 weapon of the character's choosing that vibrates and flares a deep scarlet glow when within 50 feet of orcs. Against orcs, the weapon inflicts +2d6 damage.\n   This weapon was given by the Harpers in exchange for Orcsplitter.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
		chooseGear : {
			type : "weapon",
			itemName1stPage : ["prefix", "+2"],
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "weapon"]
			},
		},
		"+2 weapon (sj-dc-mad-2)" : {
			name : "+2 (SJ-DC-MAD-2)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			description : "This astral weapon was built by thri-kreen to fish the most savage brown scavvers. It can only be destroyed through special means. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This astral [net] was built by thri-kreen to fish the most savage brown scavvers.\n   " + toUni("Strange Material") + ". The item can't be broken. Special means must be used to destroy it.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon. [Nets are no longer weapons in the 2024 rules. Per AL guidelines, changing this to any legal +2 weapon as the closest substitute.]",
			chooseGear : {
				type : "weapon",
				prefixOrSuffix : "prefix",
				itemName1stPage : ["prefix", "+2"],
				descriptionChange : ["replace", "weapon"]
			},
		},
		"+2 whip: flogger's bouquet (sj-dc-enigma)" : {
			name : "Flogger's Bouquet, +2 Whip (ENIGMA)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This +2 whip was made from mutated vines created by genetic splicing of plant species, including those from the Underdark, with the cells of an aartuk elder. The base is a bud that blooms when the whip is drenched in blood. I can speak Aartuk.",
			descriptionLong : "This whip was made from the mutated vines created by genetic splicing plant species, including those from the Underdark, with the cells of an aartuk elder. The base is a bud that blooms whenever the whip is drenched in blood. While on my person, I can speak Aartuk. I also have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This whip was made from the vines of a plant mutated through the genetic splicing of multiple plant species including those native in The Underdark, and from the cells of an aartuk elder. The base of the whip is a bud that blooms whenever the whip is drenched in blood.\n   " + toUni("Language") + ". The bearer can speak, read and understand Aartuk while the item is on the bearer's person.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			languageProfs : ["Aartuk"],
			weaponsAdd : { select : ["Flogger's Bouquet, Whip +2"], options : ["Flogger's Bouquet, Whip +2"] },
			},
		"+2 whip (sj-dc-tel-1)" : {
			name : "+2 Whip (SJ-DC-TEL-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "I have +2 to attack and damage rolls made with this magic whip. I can also use a bonus action to make it shed a 10-ft radius of bright light and another 10-ft dim, or extinguish the light.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.",
			action : [["bonus action", "Whip (light/dim)"]],
			weaponsAdd : { select : ["Whip +2"], options : ["Whip +2"] },
			},
		"+2 yklwa: naga's warning (sj-dc-pat-2)" : {
			name : "Naga's Warning, +2 Yklwa (SJ-DC-PAT-2)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			allowDuplicates : true,
			description : "This short spear-like weapon has a long blade carved with serpentine designs. The +2 yklwa hisses when it senses danger, granting +2 to initiative when I'm not Incapacitated.",
			descriptionLong : "This short spear-like weapon has a long blade carved with serpentine designs. The yklwa hisses when it senses danger, granting +2 to initiative when I'm not Incapacitated. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This short spear-like weapon has a long blade carved with serpentine designs. The yklwa hisses when it senses danger, granting the guardian property. \n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		weaponOptions: [{
			name : "Naga's Warning, Yklwa +2",
			regExpSearch : /^(?=.*yklwa)(?=.*naga|naga's)(?=.*warning).*$/i,
			list : "melee",
			ability : 1,
			type : "Simple",
			damage : [1, 8, "piercing"],
			range : "Melee, 10/30 ft",
			weight : 3,
			description : "Thrown",
			monkweapon : true,
			abilitytodamage : true,
			selectNow : true,
		}]
			},
		"+3 battleaxe: skeggöx (ddal5-9)" : {
		name : "Skeggöx, +3 Battleaxe (DDAL5-9)",
			source : [["AL","S5"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "This impressive +3 battleaxe possesses a massive haft with a huge gear turning atop it. Connected to the gear are a series of gnashing blades that extend when it's used against Giants. As a bonus action once per dawn, a dwarf or person who worships a dwarven god may brandish the battleaxe and gain advantage on 1 CHA (Intimidation) check.",
			descriptionLong : "This impressive battleaxe possesses a massive haft with a huge gear turning atop it. Connected to the gear are a series of gnashing blades that extend when it's used against Giants. As a bonus action once per dawn, a dwarf or person who worships a dwarven god may brandish the axe and gain adv. on 1 CHA (Intimidation) check. I have +3 to atk and dmg rolls made with it.",
			descriptionFull : "This impressive battleaxe possesses a massive haft with a huge gear turning gently atop it. Connected to the gear are a series of gnashing blades that extend when the weapon is wielded against giants. As a bonus action, a dwarf or a character that worships a dwarven deity may brandish this weapon and gain advantage on one Charisma (Intimidation) check. Once this property has been used, it can't be used again until the following dawn.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			limfeaname : "Skeggöx",
			usages : 1,
			recovery : "dawn",
			additional : "if dwf/worship dwf god",
			action : [["bonus action", " (Intimidation Ck Adv)"]],
			weaponsAdd : { select : ["Skeggöx, Battleaxe +3"], options : ["Skeggöx, Battleaxe +3"] },
			},
		"+3 dagger (ccc-tri-29 tide1-1)" : {
		name : "+3 Dagger (CCC-TRI-29 TIDE1-1)",
			source : [["AL","CCC"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "This white +3 dagger has barnacles & silver shells on its handle, with sea-green lines of emerald sea foam curling along its edge to a barbed point. I'm obsessed with wealth above all else. There are rumors that this was a tip from the elemental weapon, Drown.",
			descriptionLong : "This white dagger has barnacles and silver shells on its handle, with sea-green lines of emerald sea foam curling along the blade's edge to a barbed point. I become obsessed with material wealth above all else. There are rumors that this was a tip from the original elemental weapon, Drown. I have a +3 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This white dagger has barnacles and silver shells on its handle, and sea-green lines of emerald sea foam curling along the edge of the blade up to a barbed point. While owned, the bearer becomes obsessed with material wealth above all else. There are whispered rumors that this may have been one of the tips of the original elemental weapon, Drown.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dagger +3"], options : ["Dagger +3"] },
			},
		"+3 glaive: empyrean's unbreaking glaive (wbw-dc-sunlit-6)" : {
		name : "Empyrean's Unbreaking Glaive +3 (Sunlit-6)",
			source : [["AL","WBW-DC"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "The head of this +3 glaive is made from a concentration of Empyrean's special blood that glitters & undulates like mercury. The blood makes the entire weapon, including the shaft, unbreakable except in an anti-magic field.",
			descriptionLong : "The head of this glaive is made from a concentration of Empyrean's special blood that glitters and undulates like mercury. The blood makes the entire weapon, including the shaft, unbreakable by anything but special means (i.e. within an anti-magic field). I have a +3 bonus to attack and damage rolls made with this magic glaive.",
			descriptionFull : "The head of this glaive is not made of metal, and is instead a concentration of Empyrean's special blood. The blade glitters like, well, glitter, and undulates like mercury. The blood gives the entire weapon, including the shaft, the minor property unbreakable: the item can't be broken. Special means must be used to destroy it (ie. antimagic field). [GFP Item]\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Empyrean's Unbreaking Glaive +3"], options : ["Empyrean's Unbreaking Glaive +3"] },
			},
		"+3 greatsword: wyrmguard (ps-dc-strat-dragon-5)" : {
		name : "Wyrmguard Sword, +3 Greatsword (STRAT-DRAGON-5)",
			source : [["AL","PS-DC"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "Epoch and Fractal expected to wield this blade after ascending to godhood. Its hilt and crossbar are wrought with a coiling dragon, and pulsing multicolored veins like those in Epoch's horns stretch across the blade. The sword has a spark of time magic and provides glimpses of the future, giving +2 bonus initiative if I'm not Incapacitated.",
			descriptionLong : "Epoch and Fractal expected to wield this blade after ascending to godhood. Its hilt and crossbar are wrought with a coiling dragon, and pulsing multicolored veins like those in Epoch's horns stretch across the blade. The sword bears a spark of Epoch's time magic and provides glimpses of the future, giving +2 initiative if I'm not Incapacitated. I also have +3 to attack and damage rolls made with this magic weapon.",
			descriptionFull : "When they forged this blade, Epoch and Fractal expected to wield it after ascending to godhood.  Its hilt and crossbar are wrought with a coiling dragon, and pulsing multicolored veins similar to those in Epoch's horns stretch across the blade.\n   " + toUni("Guardian") + ". This greatsword bears a spark of Epoch's time magic and provides glimpses of the future to its bearer, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Wyrmguard Sword, +3 Greatsword"], options : ["Wyrmguard Sword, +3 Greatsword"] },
			},
		"+3 greatsword (wbw-dc-pls-1)" : {
		name : "+3 Greatsword (WBW-DC-PLS-1)",
			source : [["AL","WBW-DC"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "This +3 greatsword was made from the toenail of Grandmother Steeltoe, an annis hag. It's broad, square, and covered in rust, but I can make it look however I wish, using imbued illusion magic to alter its appearance in minor ways.",
			descriptionLong : "This greatsword was made from the toenail of Grandmother Steeltoe, the annis hag. The sword is broad, square, and covered in rust, but I can make it look however I wish, using imbued illusion magic to alter its appearance in minor ways. I have a +3 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This greatsword was made from the toenail of Grandmother Steeltoe the annis hag. In its natural state, this sword is broad, square, and covered in rust. The item's bearer can make it appear however they wish.\n   " + toUni("Illusion") + ". The item is imbued with illusion magic, allowing its bearer to alter the item's appearance in minor ways. Such alterations don't change how the item is worn, carried, or wielded, and they have no effect on its other magical properties. For example, the wearer could make a red robe appear blue, or make a gold ring look like it's made of ivory. The item reverts to its true appearance when no one is carrying or wearing it. [GFP Item]\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Greatsword +3"], options : ["Greatsword +3"] },
			},
		"+3 hand crossbow: belmore (wbw-dc-php-lcl-2)" : {
			name : "Belmore, +3 Hand Crossbow (PHP-LCL-2)",
			source : [["AL","WBW-DC"]],
			rarity : "uncommon",
			allowDuplicates : true,
			description : "This finely crafted +3 hand crossbow resembles an exotic flintlock pistol with the words ‘Belmore' and ‘K.B.' engraved on the grip. It warns me, giving +2 initiative when I'm not Incapacitated.",
			descriptionLong : "This finely crafted hand crossbow resembles an exotic flintlock pistol with the words ‘Belmore' and ‘K.B.' engraved on the grip. It warns me, giving +2 initiative when I'm not Incapacitated. I also gain a +3 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "This finely crafted hand crossbow has an exotic look, it resembles a flintlock pistol with the words ‘Belmore' and ‘K.B.' engraved on the grip.\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition. [GFP Item]\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Belmore, Hand Crossbow +3"], options : ["Belmore, Hand Crossbow +3"] },
			},
		"+3 lance: dream whirl (ccc-bmg-39 hulb3-3)" : {
		name : "Dream Whirl, +3 Lance (BMG-39 HULB3-3)",
			source : [["AL","CCC"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "This alabaster lance +3 is carved with deep swirling patterns that seem to move, calming my emotions and silencing surface thoughts. The original owner's dreams and anger still dwell in the lance. When within 120 ft of an illithid, its kin, or its creations, righteous fury radiates from the lance and it darkens to deep blood crimson.",
			descriptionLong : "This alabaster lance is carved with deep swirling patterns that seem to move, calming my emotions and silencing surface thoughts. The original owner's dreams and anger still dwell in the lance. When within 120 ft of an illithid, its kin, or its creations, righteous fury radiates from the lance and it darkens to deep blood crimson. I have +3 to attack and damage rolls made with it.",
			descriptionFull : "This alabaster lance, named \"Dream Whirl\" by those who created it, is carved with deep swirling patterns that seem to move with you, calming your emotions and silencing surface thoughts. Also, the original owner's dreams and anger still dwell within the lance. When within 120 feet of an illithid (mind flayer), its kin, or any of its creations, righteous fury radiates from the lance as it darkens into deep blood crimson.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dream Whirl, Lance +3"], options : ["Dream Whirl, Lance +3"] },
			},
		"+3 longbow (bmg-drwep-od-2)" : {
			name : "+3 Longbow (BMG-DRWEP-OD-2)",
			source : [["AL","DRW"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "This +2 magic longbow has a thin yellow strand woven about the handle and inset into the wood. It's said to be a single thread from the string of the bow wielded by the autognome hero, Craygen. While on my person, I can speak Gnomish.",
			descriptionFull : "The wood of this longbow shimmers with blue plaguefire energy and looks tainted, almost rotted. The fletching on any arrow fitted to the bow seems to wilt instantly, though this in no way effects its accuracy or damage.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Longbow +3"], options : ["Longbow +3"] },
			},
		"+3 piercing weapon: midnight phaeton's horn (ccc-odfc2-3)" : {
			name : "Midnight Phaeton's Horn +3 (CCC-ODFC2-3)",
			nameTest : "/midnight.*(odfc2-3)/i",
			source : [["AL","CCC"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "This +3 weapon retains the glittering pearlescent sheen and spiraling pattern of the unicorn's horn. When held, I can say \"Phaeton\" to make the weapon glow with 20-ft of bright light and 20-ft dim. This lasts for 1 hr or until I say \"Midnight\". Any good-aligned creatures in the bright light feel slightly more at ease, as if caressed by the first rays of moonlight on a dark night.",
			descriptionLong : "I gain a +3 bonus to attack and damage rolls made with this weapon, which retains the glittering pearlescent sheen and spiraling pattern of the unicorn's horn. When held, I can say \"Phaeton\" to make the weapon glow with a 20-ft radius of bright light and another 20-ft of dim light. This lasts for 1 hour or until the wielder says \"Midnight\". Any good-aligned creatures in the bright light feel slightly more at ease, as if caressed by the first rays of moonlight on a dark night.",
			descriptionFull : "You gain a +3 bonus to attack and damage rolls with this weapon, which takes the form of any melee piercing weapon of your choice (choice made when item is received and is permanent from then on). The weapon retains the glittering, pearlescent sheen and spiraling pattern of the unicorn's horn. Additionally, anyone holding the weapon can say Phaeton to cause the weapon to glow with bright light for a radius of 20 feet and dim light for a further 20 feet. The light lasts for 1 hour or until someone holding the weapon says Midnight. Any good aligned creatures in the bright light feel slightly more at ease (no mechanical effect), as if caressed by the first rays of moonlight on a dark night.",
			chooseGear : {
				type : "weapon",
				prefixOrSuffix : ["between", "Midnight Phaeton's Horn, +3", "(ODFC2-3)"],
				descriptionChange : ["replace", "weapon"],
				itemName1stPage : ["suffix", "Midnight Phaeton's Horn, +3"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /bow|gun|dart|rifle|pistol|musket|revolver/i;
				return ((testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] !== "piercing";
					}
				},
			},
		"+3 pike: krahharuan fork (ddal7-10)" : {
		name : "Krahharuan Fork, +3 Pike (DDAL7-10)",
			source : [["AL","S7"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "Forged of black, pitted iron, the haft of this double-tined +3 pike is wrapped in the supple hide of a young red dragon. Wisps of black smoke stream from a glowing red stone at the butt of the weapon only to drift away on an unseen breeze.",
			descriptionLong : "Forged of black, pitted iron, the haft of this double-tined pike is wrapped in the supple hide of a young red dragon. Wisps of black smoke stream from a glowing red stone at the butt of the weapon only to drift away on an unseen breeze. I have a +3 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "Forged of black, pitted iron, the haft of this double-tined pike is wrapped in the supple hide of a young red dragon. Wisps of black smoke stream from a glowing red stone at the butt of the weapon only to drift away on an unseen breeze.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Krahharuan Fork, Pike +3"], options : ["Krahharuan Fork, Pike +3"] },
			},
		"+3 scimitar (ddep6-2)" : {
		name : "+3 Scimitar (DDEP6-2)",
			source : [["AL","S6"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "Formerly owned by an efreeti, this sword glows a dull red if a marid is within 60 feet. I have a +3 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "Formerly owned by an efreeti, this sword glows with a dull red if a marid is within 60 feet.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Scimitar +3"], options : ["Scimitar +3"] },
			},
		"+3 shortsword: harengon's freedom (al:sa-11a)" : {
		name : "Harengon's Freedom, +3 Shortsword",
			source : [["AL:SA","11A"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "The hilt of this +3 shortsword is decorated with images of frolicking harengon and the blade is made of a shimmering dark purple crystal. When wielded, I gain a +2 bonus to initiative if I'm not Incapacitated.",
			descriptionLong : "The hilt of this shortsword is decorated with images of frolicking harengon and the blade is made of a shimmering dark purple crystal. When wielded, I gain a +2 bonus to initiative if I'm not Incapacitated and have +3 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The hilt of this shortswordis decorated with images of frolicking harengon and the blade is constructed of a shimmering dark purple crystal. When wielded, you gain a +2 bonus to Initiative if you're not Incapacitated.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Harengon's Freedom, Shortsword +3"], options : ["Harengon's Freedom, Shortsword +3"] },
			},
		"+3 spear: blood-drinker's backbone (rmh-5/rmh-6)" : {
		name : "Blood-Drinker's Backbone, +3 Spear",
			source : [["AL:R","5&6"]],
			rarity : "very rare",
			allowDuplicates : true,
			description : "This formidable +3 spear has a slightly curved maroon blade made of iridescent stone set into a haft of polished vertebrae — each engraved with a long-forgotten ancient rune. If I miss, I take Necrotic equal to the attack's dmg & gain 1 lvl of Exhaustion.",
			descriptionLong : "This formidable spear has a slightly curved maroon blade made of iridescent stone set into a haft of polished vertebrae — each engraved with a long-forgotten ancient rune. I have +3 to attack and damage rolls made with the spear. If I miss, I take Necrotic equal to the attack's damage, & gain 1 lvl of Exhaustion as the spear feeds on my lifeforce.",
			descriptionFull : "It is a formidable weapon sporting a slightly curved maroon blade made from iridescent stone set into a haft of polished vertebrae—each engraved with an ancient, long-forgotten rune.\n   If the attack misses its target, you suffer necrotic damage equal to the damage that the attack would have normally dealt as the weapon feeds upon your lifeforce, and you gain one level of exhaustion.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Blood-Drinker's Backbone, Spear +3"], options : ["Blood-Drinker's Backbone, Spear +3"] },
			},
}


MagicItemsList["al weapons (other)"] = {
		name : "AL Weapons (Other)",
		allowDuplicates : true,
		choicesNotInMenu : true,
		magicItemTable : "?",
	choices : ["Berserker Flail (CCC-UCON-1)","Dagger of Blindsight: Panther's Claw (RMH-9)","Dagger of Venom: Fang of Sibyl (CCC-GARY-1)","Dagger of Venom (DDAL4-11)", "Dagger of Venom (DDAL5-17)","Devotee's Censer (BMG-DRW-OD-4)","Dragon Wing Bow: Radiant (BMG-DRWEP-OD-2)","Drow-made Dagger (WDotMM)","Dwarven Thrower: Skyfist (DDEP4)","Dwarven Thrower: Foehammer (WBW-DC-MOM-2)","Elven Thrower (FR-DC-DEATH)","Elven Thrower: Araelathila (FR-DC-LIGA-1)","Elven Thrower: Naginata (FR-DC-PANDORA-JWEI-8)","Elven Thrower (FR-DC-RWIE-3)","Flame Tongue (CCC-YLRA-2)","Forcebreaker Sling (PO-BMG-DRW-KS-6)","Glaive of Warning: The Harbinger (CCC-EPI1-2)","Glaive of Warning: Losspatan's War-scythe (CCC-GGC-2-1)","Greatclub of Warning: U'u War Club (WBW-DC-DEN-H2)","Greatclub of Warning: Clobber (WBW-DC-MIKE-1)","Green-Flame Mace: Face of Umberlee's Fury (CCC-AWE-1-2)","Javelin of Lightning (CCC-BFG1-3)","Javelin of Lightning (CCC-BMG-MOON6-3)","Javelin of Lightning (CCC-BMG-MOON16-1)","Javelin of Lightning (CCC-GAD2-2)","Javelin of Lightning (CCC-SAC-4)","Javelin of Lightning (CCC-SFBAY-4-1)","Javelin of Lightning (DDAL8-5)","Javelin of Lightning (SJ-DC-AS-1)","Javelin of Lightning: Comet Spear (SJ-DC-CJK2-2)","Javelin of Lightning: Stormstrike (SJ-DC-DD-4)","Javelin of Lightning: Processional Baton (SJ-DC-DES5-1)","Javelin of Lightning: Rrakkma's Smite (SJ-DC-FLUMPH-1)","Javelin of Lightning: Jensen's Lure (SJ-DC-ISL-1)","Javelin of Lightning (SJ-DC-LIGA1)","Javelin of Lightning (SJ-DC-MB5-AH123)","Javelin of Lightning: Reigar's Rage (SJ-DC-MDW-1)","Javelin of Lightning (SJ-DC-TRIDEN-UPR)","Javelin of Lightning (SJ-DC-TTUC-1)","Javelin of Warning: Jeny's Hairpin (CCC-VOTE-1-1)","Lash of Immolation: Dragon's Tail (FR-DC-STRAT-DRAGON-2)","Longbow of Melodies: Airalinde (FR-DC-IMP-2)","Longbow of Melodies: Lavender's Scent (FR-DC-PANDORA-JWEI-10)","Mace of Disruption (CCC-CIC-3)","Mace of Disruption: Death's Head (CCC-GHC-BK1-2)","Mace of Smiting (DDAL7-6)","Mace of Smiting (DDAL8-7)","Mace of Smiting (DDAL10-7)","Mace of Terror: Durgeddin's Fist (DDEP6-1)","Moon Sickle +1 (DDAL-DRW10)","Moon Sickle +2 (BMG-DRWEP-OD-1)","Moon Sickle +2: Selune's Guidance (WBW-DC-NJ-COU-2)","Moon Sickle +2: Tsukikama (WBW-DC-PHP-1)","Moon Sickle +3 (FR-DC-UCON24)","Oathbow: Syranna's Folly (CCC-OCC-1)","Oathbow (DDAL-DRW8)","Oathbow: Shadowsong (DDEX3-7)","Oathbow: Selestria (WBW-DC-TMP-3)","Shortbow of Melodies (FR-DC-FALL-1)","Starshot Hand Crossbow (PO-BMG-DRW-KS-2)","Stone Greataxe (DDAL0-13)","Trident of Fish Command (CCC-BMG-MOON14-1)","Trident of Fish Command (CCC-TAROT2-8)","Trident of Fish Command (CCC-WWC-2)","Trident of Warning (CCC-TRI-34)","Trident of Warning (DDEX2-3)","Vicious Glaive: Ptahrek's Glaive (CCC-SVH1-2)","Vicious Mace (CCC-BMG-1 HULB1-1)","Vicious Spear (DDAL0-13)","Wakened Crystal Dragon's Wrath Glaive (PO-BMG-DRW-KS-5)","Weapon of Warning (CCC-ELF-3-1)","Weapon of Warning (DDAL0-7)","Whip of Warning (CCC-GHC-BK2-10)","Whip of Warning (DDAL4-2)"],
	"berserker flail (ccc-ucon-1)" : {
		name : "Berserker Flail (CCC-UCON-1)",//Based on the Berserker axe 
		source : [["AL","CCC"]],
		type : "weapon (flail)",
		rarity : "rare",
		attunement : true,
		description : "This battered +1 flail has a patina of rust & dried blood. I have adv on Wis (Survival) chks to track Humanoids. It gives +1 HP per lvl & is cursed. I can't part with it (+30 DT to trade) & have disadv. with other weapons. If damaged by hostile, DC 15 Wis save or berserk: use Action & Move each turn to atk closest creature with flail until none visible or audible in 60 ft.",
		descriptionLong : "This battered flail is notched & has a patina of rust & dried blood. While wielded, I have advantage on Wis (Survival) checks to track Humanoids. The flail gives +1 to attack and damage rolls, +1 HP per level & is cursed. I can't part with it willingly (pay extra 30 DT to trade) & have disadvantage with other weapons. When I'm damaged by a hostile creature, DC 15 Wis save or I go berserk, using my Action & move each turn to attack the closest creature with the flail until no one is visible or audible within 60 ft.",
		descriptionFull : "This battered flail is notched and covered in a patina of rust and dried blood. While wielding this flail you have advantage on Wisdom (Survival) checks made to track humanoids. Due to your intense desire to retain the flail, it costs an extra 30 downtime days to trade away as you experience severe withdrawal from its powers.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.\n   " + toUni("Curse") + ". This flail is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the flail, keeping it within reach at all times. You also have Disadvantage on attack rolls with weapons other than this one.\n   Whenever a hostile creature damages you while the flail is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the flail. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.",
		weaponOptions : {
			baseWeapon : "flail",
			regExpSearch : /^(?=.*flail)(?=.*berserker).*$/i,
			name : "Berserker Flail",
			description : "Sap; Cursed; Counts as magical",
			modifiers : [1, 1],
			selectNow : true,
				},
			calcChanges : {
			hp : function (totalHD) { return [totalHD]; },
		}
	},
	"dagger of blindsight: panther's claw (rmh-9)" : {
		name : "Panther's Claw (Dagger of Blindsight)",
		source : [["AL:R", 9]],
		type : "weapon (dagger)",
		rarity : "rare",
		description : "This magical dagger is made from an immense panther claw, set into a hilt of polished bone and wrapped in glossy black fur. It gives me Blindsight to a range of 30 ft and a penchant for consuming raw, bloody meat.",
		descriptionFull : "This dagger is fashioned from the claw of an immense panther, set into a hilt of polished bone wrapped in glossy, black fur. A creature attuned to the dagger gains a penchant for consuming raw, bloody meat.\n   This rare magic item requires attunement. A creature attuned to it gains blindsight out to a range of 30 feet. The dagger has a saw-toothed edge and a black pearl nested in its pommel.",
		attunement : true,
		weight : 1,
		vision : [["Blindsight", 30]],
		weaponsAdd : { select : ["Panther's Claw, Dagger of Blindsight"], options : ["Panther's Claw, Dagger of Blindsight"] },
	},
	"dagger of venom: fang of sibyl (ccc-gary-1)" : {
		name : "Fang of Sibyl, Dagger of Venom (GARY-1)",
		source : [["AL","CCC"]],
		type : "weapon (dagger)",
		rarity : "rare",
		description : "This stylized +1 dagger is etched with symbols that appear religious, but are impossible for even the most educated scholars to identify. As a bonus action once per dawn, I can coat it with poison, lasting 1 min or until I hit a creature. That creature makes a DC 15 Con save or takes 2d10 Poison and is Poisoned for 1 min.",
		descriptionFull : "These stylized versions of the Dagger of Venom are etched with symbols that appear almost religious, but are impossible to identify even to the most educated scholar.\n   You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   You can take a Bonus Action to magically coat the blade with poison. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 Poison damage and have the Poisoned condition for 1 minute. The weapon can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
		action : [["bonus action", " (Coat)"]],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*fang)(?=.*sibyl).*$/i,
			name : "Fang of Sibyl, Dagger of Venom",
			description : "Finesse, light, thrown, nick; If coated, DC 15 Con save or +2d10 poison damage \u0026 1 min poisoned",
			modifiers : [1, 1],
			selectNow : true,
		}
	},
	"dagger of venom (ddal4-11)" : {
		name : "Dagger of Venom (DDAL4-11)",
		source : [["AL","S4"]],
		type : "weapon (dagger)",
		rarity : "rare",
		description : "This +1 dagger is a knot of vipers, their tails the pointed blade & heads forming the hilt & guard. I hear hissing snakes in 120 ft of poison or venomous creatures. As a bonus action once per dawn, I can coat it with poison for 1 min or until I hit a creature. That creature makes DC 15 Con save or takes 2d10 Poison & is Poisoned for 1 min.",
		descriptionLong : "This +1 dagger looks like a knot of vipers, their tails the pointed blade and heads forming the hilt and guard. I hear hissing snakes when in 120 ft of poison or venomous creatures. As a bonus action once per dawn, I can coat the dagger with poison, lasting 1 minute or until I hit a creature. That creature makes a DC 15 Con save or takes 2d10 Poison and is Poisoned for 1 minute.",
		descriptionFull : "This magical dagger is forged to appear as a knot of vipers, their tails becoming the pointed blade and heads agape forming the hilt and guard. The wielder hears the sound of hissing snakes when within 120 feet of poison or a venomous creature.\n   You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   You can take a Bonus Action to magically coat the blade with poison. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 Poison damage and have the Poisoned condition for 1 minute. The weapon can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (Coat)"]],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*venom).*$/i,
			name : "Dagger of Venom",
			description : "Finesse, light, thrown, nick; If coated, DC 15 Con save or +2d10 poison dmg \u0026 1 min poisoned",
			modifiers : [1, 1],
			selectNow : true,
		}
	},
	"dagger of venom (ddal5-17)" : {
		name : "Dagger of Venom (DDAL5-17)",
		source : [["AL","S5"]],
		type : "weapon (dagger)",
		rarity : "rare",
		description : "The pommel of this wicked +1 dagger looks like a black viper with the forked blade as its tongue. Once per dawn, bonus action to coat it with poison for 1 min or until I hit a creature. The creature makes a DC 15 Con save or takes 2d10 Poison & is Poisoned for 1 min.",
		descriptionFull : "The pommel of this wicked dagger looks like a black viper with the forked blade worked to resemble its tongue.\n   You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   You can take a Bonus Action to magically coat the blade with poison. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 Poison damage and have the Poisoned condition for 1 minute. The weapon can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (Coat)"]],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*venom).*$/i,
			name : "Dagger of Venom",
			description : "Finesse, light, thrown, nick; If coated, DC 15 Con save or +2d10 poison dmg \u0026 1 min poisoned",
			modifiers : [1, 1],
			selectNow : true,
		}
	},
	"devotee's censer (bmg-drw-od-4)" : {
		name : "Devotee's Censer (BMG-DRW-OD-4)",
		source : [["AL","DRW"]],
		rarity : "rare",
		attunement : true,
		prerequisite : "Requires attunement by a cleric or paladin",
		prereqeval : function(v) {
			return classes.known.cleric || classes.known.paladin ? true : false;
		},
		description : "Sensational incense billows from the star-shaped perforations of this flail. When borne by a follower of Waukeen, the scent is said to attract great wealth. It can be used as a holy symbol & deals +1d8 Radiant. As a bonus action once per dawn, say the command for it to emanate 10-ft incense for 1 min. At the start of my turn, all creatures in the incense heal 1d4 HP.",
		descriptionLong : "This flail has star-shaped perforations, out of which billow sensational incense. When borne by a follower of Waukeen, the scent is said to attract great wealth. The flail can be used as a holy symbol and deals +1d8 Radiant damage. As a bonus action once per dawn, I can speak the command word to make it emanate a 10-ft radius of incense for 1 min. At the start of each of my turns while activated, all creatures in the incense heal 1d4 Hit Points.",
		descriptionFull : "This flail has star-shaped perforations, out of which billow sensational incense. When borne by a follower of Waukeen, the scents are said to attract great wealth."+
		"\n   The rounded head of this flail is perforated with tiny holes, arranged in symbols and patterns. The flail counts as a holy symbol for you. When you hit with an attack using this magic flail, the target takes an extra 1d8 radiant damage."+
		"\n   As a bonus action, you can speak the command word to cause the flail to emanate a thin cloud of incense out to 10 feet for 1 minute. At the start of each of your turns, you and any other creatures in the incense each regain 1d4 hit points. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Devotee's Censer",
		usages : 1,
		recovery : "dawn",
		action : [["bonus action", " (incense cloud)"]],
	weaponOptions : [{
		baseWeapon : "flail",
		regExpSearch : /^(?=.*devotee)(?=.*censer).*$/i,
		name : "Devotee's Censer",
		description : "Sap; +1d8 radiant damage",
		selectNow : true,
		}]
	},
	"dragon wing bow: radiant (bmg-drwep-od-2)" : {
		name : "Radiant Dragon Wing (BMG-DRWEP-OD-2)",
		nameTest : "/wing.*(bmg-drwep-od-2)/i",
		source : [["AL","DRW"]],
		type : "weapon (any bow)",
		rarity : "rare",
		attunement : true,
		description : "The wood of this magic bow glimmers, and when turned in the light, every color of the rainbow appears. The limb tips are shaped like dragon wings and it's infused with the essence of a crystal dragon's breath. Attacks made with it deal an extra 1d6 Radiant. When I pull back the string without ammo loaded in it, the weapon creates its own that lasts until it hits or misses a target.",
		descriptionFull : "The wood of this bow glimmers, and when turned in the light, every color of the rainbow shows up.\n   The limb tips of this magic bow are shaped like a dragon's wings, and the weapon is infused with the essence of a chromatic, gem, or metallic dragon's breath. When you hit with an attack roll using this magic bow, the target takes an extra 1d6 damage of the same type as the breath infused in the bow\u2014acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder."+
		"\n   If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you pull back the string. The ammunition created by the bow vanishes the instant after it hits or misses a target.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Radiant Dragon Wing", "(BMG-DRWEP-OD-2)"],
			itemName1stPage : ["suffix", "Radiant DW"],
			descriptionChange : ["replace", "bow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /bow/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/^(?=.*radiant)(?=.*dw).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1d6 Radiant dmg; Creates own ammo';
				}
			},
			'If I include Radiant Dragon Wing in a the name of a bow, it will be treated as the weapon Dragon Wing Bow for a Crystal Dragon.'
			]
			}
		},
	"drow-made dagger (wdotmm)" : {
		name : "Drow-made Dagger",
		source : [["WDotMM", 228]],
		type : "weapon (dagger)",
		rarity : "trinket",
		description : "A drow-made dagger with silver web filigree. The dagger magically plays a fragment of a guitar solo when struck or used to strike a foe. ",
		descriptionFull : "A drow-made dagger with silver web filigree. The dagger magically plays a fragment of a guitar solo when struck or used to strike a foe. The dagger is worth 750 gp.",
		weight : 1,
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*drow|drow-made)(?=.*dagger).*$/i,
			name : "Drow-made Dagger",
			description : "Finesse, light, thrown, nick; plays a fragment of a guitar solo when it hits.",
			selectNow : true,
		}
	},
	"dwarven thrower: skyfist (ddep4)" : {
		name : "Skyfist, Dwarven Thrower (DDEP4)",
		source : [["AL","S4"]],
		type : "weapon (warhammer)",
		rarity : "very rare",
		attunement : true,
		prerequisite : "Requires Attunement by a Dwarf or a Creature Attuned to a Belt of Dwarvenkind",
		prereqeval : function(v) {
			if(CurrentRace.known.indexOf("dwarf") !== -1) return true;
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			// if it's not null, attunement is checked, and if it's the belt of dwarven kind.
			if (tDoc.getField(ReturnMagicItemFieldsArray(i+1)[4]) !== null && tDoc.getField(ReturnMagicItemFieldsArray(i+1)[4]).isBoxChecked(0) !== 0 && CurrentMagicItems.known[i].indexOf("belt of dwarvenkind") !== -1) {
				return true;
			}
		}
		return false;
		},
		weight : 2,
		description : "The head of this +3 warhammer is a gauntleted fist. The haft is a heavy black metal rod wrapped in spongy green leather. Affixed to the pommel is a strip of blood-stained parchment with a dwarven battle song. When used, the hammer reads the song aloud (audible in 30ft). It has the Thrown property 20/60 ft, deals +1d8 dmg (2d8 to Giants) when thrown & returns to my hand after each atk.",
		descriptionLong : "The striking surface of this warhammer has been forged into a gauntleted fist. The haft is a rod of heavy, black metal wrapped in spongy green leather. Affixed to an iron ring on the pommel is a strip of tattered but indestructible blood-stained parchment inscribed with a dwarven battle canticle. When used, the hammer reads the song aloud in a deep resonating voice audible to 30ft. I gain a +3 bonus to attack and damage rolls made with the weapon. It has the Thrown property with a normal range of 20 ft and a long range of 60 ft. When I hit with a ranged attack using the weapon, it deals an extra 1d8 damage or 2d8 damage against Giants. After each attack, the hammer returns to my hand.",
		descriptionFull : "The striking surface of this hammer has been forged into the shape of a gauntleted fist. The haft is a rod of heavy, black adamantine and wrapped in what appears to be spongy, green leather. Affixed to an iron ring on the pommel is a strip of tattered (though indestructible), blood-stained parchment inscribed with a dwarven battle canticle. When used in battle, the hammer reads the canticle aloud in a deep resonating voice audible to anyone within 30 feet of the weapon.\n   You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. It has the Thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 Force damage, or an extra 2d8 Force damage if the target is a Giant. Immediately after hitting or missing, the weapon flies back to your hand. [Per magic item changes for 2024 AL adjustment, adamantine is now flavor only.]",
		weaponOptions : {
			baseWeapon : "warhammer",
			regExpSearch : /^(?=.*dwarven)(?=.*thrower)(?=.*skyfist).*$/i,
			name : "Skyfist, Dwarven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d10), push; +1d8 when thrown (2d8 vs Giants) and returns immediately",
			modifiers : [3, 3], // add 3 to each to hit and damage because of the magical bonus
			selectNow : true,
		}
	},
	"dwarven thrower: foehammer (wbw-dc-mom-2)" : {
		name : "Foehammer, Dwarven Thrower (MOM-2)",
		source : [["AL","WBW-DC"]],
		type : "weapon (warhammer)",
		rarity : "very rare",
		attunement : true,
		prerequisite : "Requires Attunement by a Dwarf or a Creature Attuned to a Belt of Dwarvenkind",
		prereqeval : function(v) {
			if(CurrentRace.known.indexOf("dwarf") !== -1) return true;
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			// if it's not null, attunement is checked, and if it's the belt of dwarven kind.
			if (tDoc.getField(ReturnMagicItemFieldsArray(i+1)[4]) !== null && tDoc.getField(ReturnMagicItemFieldsArray(i+1)[4]).isBoxChecked(0) !== 0 && CurrentMagicItems.known[i].indexOf("belt of dwarvenkind") !== -1) {
				return true;
			}
		}
		return false;
		},
		weight : 2,
		description : "Made of fine steel inlaid with rare wood, this elegant +3 warhammer was fashioned after the sentient weapon, Whelm, and blooms with amber light in 120 ft of Giants. While carried, I'm obsessed with material wealth. It has the Thrown property 20/60 ft, deals +1d8 dmg (2d8 to Giants) when thrown & returns to my hand after each atk.",
		descriptionLong : "Made of finely forged steel inlaid with rare wood, this elegantly crafted warhammer was clearly fashioned after the sentient weapon, Whelm. It blooms with pale amber light within 120ft of Giants, though I may be too preoccupied by my new obsession with precious gems to notice. I gain a +3 bonus to attack and damage rolls made with the weapon. It has the Thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using the weapon, it deals an extra 1d8 damage or 2d8 damage against Giants. After each attack, the warhammer flies back to my hand.",
		descriptionFull : "Made of finely forged steel inlaid with rare wood, the form of this elegantly crafted warhammer has clearly been fashioned after that of the sentient warhammer, Whelm. It blooms with pale amber light in the presence of giants, though a wielder of Foehammer might well be too preoccupied by their search for precious gems to notice. [GFP Item]\n   " + toUni("Sentinel") + ". This item glows faintly when giants are within 120 feet of it.\n   " + toUni("Quirk: Covetous") + ". The item's bearer becomes obsessed with material wealth.\n   You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. It has the Thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 Force damage, or an extra 2d8 Force damage if the target is a Giant. Immediately after hitting or missing, the weapon flies back to your hand.",
		weaponOptions : {
			baseWeapon : "warhammer",
			regExpSearch : /^(?=.*dwarven)(?=.*thrower)(?=.*foehammer).*$/i,
			name : "Foehammer, Dwarven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d10), push; +1d8 when thrown (2d8 vs Giants) and returns immediately",
			modifiers : [3, 3], // add 3 to each to hit and damage because of the magical bonus
			selectNow : true,
		}
	},
	"elven thrower (fr-dc-death)" : {
		name : "Elven Thrower (FR-DC-DEATH)",
		source : [["AL","FR-DC"]],
		type : "weapon (spear)",
		rarity : "very rare",
		attunement : true,
		prerequisite : "Requires attunement by an Elf",
		prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
		description : "This magic spear glows faintly in 120 ft of Aberrations and has a +3 bonus to attack and damage rolls. It deals an extra 1d8 damage (2d8 to Giants) when thrown and returns to my hand after each attack.",
		descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.\n   " + toUni("Sentinel") + ". This item glows faintly when aberrations are within 120 feet of it.",
		weight : 3,
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /^(?=.*elven)(?=.*thrower).*$/i,
			name : "Elven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d8), sap; +1d8 when thrown (2d8 vs Giants) and returns immediately",
			modifiers : [3, 3],
			selectNow : true,
		}
	},
	"elven thrower: araelathila (fr-dc-liga-1)" : {
		name : "Araelathila, Elven Thrower (LIGA-1)",
		source : [["AL","FR-DC"]],
		type : "weapon (spear)",
		rarity : "very rare",
		attunement : true,
		prerequisite : "Requires attunement by an Elf",
		prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
		description : "Forged by the High Elves during the Crown Wars, this +3 spear is carved with vanes of green arrows. The spear says \"May I strike true my targets!\" as an ode to Solonor Thelandira, giving +2 initiative unless I'm Incapacitated. It deals +1d8 damage (2d8 to Giants) when thrown and returns to my hand after each attack.",
		descriptionLong : "Forged by the High Elves during the Crown Wars, Araelathila has vanes of green arrows carved into it. The spear says \"May I strike true my targets!\", granting a +2 bonus to initiative if I'm not Incapacitated. It's an ode to Solonor Thelandira. I gain a +3 bonus to attack and damage rolls made with the spear. It has the Thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using the spear, it deals an extra 1d8 damage or 2d8 damage against Giants. Immediately after the attack, the spear flies back to my hand.",
		descriptionFull : "Forged by the High Elves during the Crown Wars, Araelathila has vanes of green arrows carved into it.\n   " + toUni("Guardian") + ". The item whispers \"May I strike true my targets!\", granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition. It is an ode to Solonor Thelandira.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weight : 3,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /araelathila, elven thrower/i,
			name : "Araelathila, Elven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d8), sap; +1d8 when thrown (2d8 vs Giants) and returns immediately",
			modifiers : [3, 3],
			selectNow : true,
		}
	},
	"elven thrower: naginata (fr-dc-pandora-jwei-8)" : {
		name : "Naginata (Elven Thrower, PANDORA-JWEI-8)",
		source : [["AL","FR-DC"]],
		type : "weapon (spear)",
		rarity : "very rare",
		attunement : true,
		prerequisite : "Requires attunement by an Elf",
		prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
		description : "This +3 naginata (spear) has a long shaft with \"Giant's bane\" carved in the Wa language. When a Giant is in 120 ft, the blade glows red. It deals +1d8 damage (2d8 to Giants) when thrown and returns to my hand after each attack.",
		descriptionLong : "This bladed weapon has a long shaft with the word \"Giant's bane\" carved onto it in the Wa language. Whenever a Giant comes within 120 feet, the blade glows red. I gain a +3 bonus to attack and damage rolls made with this spear. It has the Thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using this spear, it deals an extra 1d8 damage or 2d8 damage against Giants. Immediately after the attack, the spear flies back to my hand.",
		descriptionFull : "This bladed weapon with a long shaft has the word “giant's bane” carved onto it in the Wa language.\n   " + toUni("Sentinel") + ". Whenever a giant comes within 120 feet of it, the blade glows red.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weight : 3,
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /naginata, elven thrower/i,
			name : "Naginata, Elven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d8), sap; +1d8 when thrown (2d8 vs Giants) and returns immediately",
			modifiers : [3, 3],
			selectNow : true,
		}
	},
	"elven thrower (fr-dc-rwie-3)" : {
		name : "Elven Thrower (FR-DC-RWIE-3)",
		source : [["AL","FR-DC"]],
		type : "weapon (spear)",
		rarity : "very rare",
		attunement : true,
		prerequisite : "Requires attunement by an Elf",
		prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
		description : "This +3 spear is a single piece of enchanted wood with faintly glowing runes in Elvish and a sharp point at the end. It deals an extra 1d8 damage (2d8 to Giants) when thrown and returns to my hand after each attack. Whenever I hit score a Critical Hit, the spear also emits a loud scream of victory.",
		descriptionLong : "This spear looks like a single piece of enchanted wood with faintly glowing runes in Elvish and a sharp point at the end. I gain a +3 bonus to attack and damage rolls made with it. The spear has the Thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using this spear, it deals an extra 1d8 damage or 2d8 damage against Giants. Immediately after the attack, the spear flies back to my hand. Whenever I hit score a Critical Hit, it emits a loud scream of victory.",
		descriptionFull : "This spear looks like a single piece of enchanted wood with faintly glowing runes in Elvish and a sharp point at the end.\n   " + toUni("Loud") + ". This weapon emits a loud scream of victory whenever its user scores a critical hit while wielding it.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weight : 3,
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /^(?=.*elven)(?=.*thrower).*$/i,
			name : "Elven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d8), sap; +1d8 when thrown (2d8 vs Giants) and returns immediately",
			modifiers : [3, 3],
			selectNow : true,
		}
	},
	"flame tongue (ccc-ylra-2)" : {
		name : "Flame Tongue (CCC-YLRA-2)",
		nameTest : "/flame.*(ylra-2)/i",
		source : [["AL","CCC"]],
		type : "weapon (any melee weapon)",
		rarity : "rare",
		attunement : true,
		description : "This weapon was crafted to my specifications by the expert smiths at the Emberstar Exchange. As a bonus action, I can say the command word to ignite it, emitting bright light in a 40-ft radius & dim light for 40-ft more. While ablaze, the weapon deals +2d6 Fire per hit. The flames last until I say the command again as a bonus action, drop, stow or sheathe it.",
		descriptionFull : "This weapon was crafted for you by the expert smiths at the Emberstar Exchange to your specifications.\n   While holding this magic weapon, you can take a Bonus Action and use a command word to cause flames to engulf the damage-dealing part of the weapon. These flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet. While the weapon is ablaze, it deals an extra 2d6 Fire damage on a hit. The flames last until you take a Bonus Action to issue the command again or until you drop, stow, or sheathe the weapon. [Updated choices to include any melee weapon as per the new DMG]",
		action : [["bonus action", "Flame Tongue (activate/end)"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Flame Tongue", "(YLRA-2)"],
			itemName1stPage : ["suffix", "Flame Tongue"],
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
			return (/ranged/i).test(inObj.list);
			},
		},
		calcChanges : {
			atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*flame)(?=.*tongue).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'While active, +2d6 Fire damage';
				}
			},
			'If I include the words "Flame Tongue" in a the name of a melee weapon, it will be treated as the magic weapon Flame Tongue. When the command word is spoken, the blade erupts with flames, adding +2d6 fire damage on a hit and shining light.'
			]
		}
	},
	"forcebreaker sling (po-bmg-drw-ks-6)" : {
		name : "Forcebreaker Sling (PO-BMG-DRW-KS-6)",
		source : [["AL","PO"]], // Chapter 9: Knight
		type : "weapon (sling)",
		rarity : "very rare",
		description : "This silvery +2 sling glitters in the sunlight. Try not to stare at it for too long or your eyes might hurt from the sparkles. It was crafted to destroy structures made of magical force, such as a Wall of Force. With one strike, I can shatter a Large or smaller structure of magical force, or shatter a 20-ft cube portion of a Huge or larger structure.",
		descriptionFull : "This silvery sling glitters in the sunlight. Try not to stare at it for too long or your eyes might hurt from the sparkles."+
		"\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon."+
		"\n   This weapon was crafted to destroy structures made of force, such as 	those created by Forcecage or Wall of Force. Striking a Large or smaller structure of magical force with this weapon automatically shatters that structure. If the target is a Huge or larger structure of force, this weapon shatters a 20-foot-cube portion of it.",
		weaponOptions : {
			baseWeapon : "sling",
			regExpSearch : /^(?=.*forcebreaker)(?=.*sling).*$/i,
			name : "Forcebreaker Sling",
			description : "Ammunition; Slow; Shatters magical force",
			modifiers : [2, 2],
			selectNow : true,
		}
	},
	"glaive of warning: the harbinger (ccc-epi1-2)" : {
			name : "The Harbinger, Glaive of Warning (EPI1-2)",
			source : [["AL","CCC"]],
			type : "weapon (glaive)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This massive scythe was forged from the darkest shadows of the plane of Gehenna, home of the Orcish god Shaargas. It's light and doesn't cast a shadow, though shadows warn me of impending danger. While carried, allies in 30 ft and I have advantage on initiative. It also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "The Harbinger is a massive scythe was forged from the darkest shadows from the plane of Gehenna, home of the orcish god Shaargas. The material is light, and does not cast its own shadow. However, the item gives its user an uncanny ability for shadows to warn the user of impending danger.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Harbinger, Glaive of Warning"], options : ["Harbinger, Glaive of Warning"] },
			},
	"glaive of warning: losspatan's war-scythe (ccc-ggc-2-1)" : {
			name : "Losspatan's War-scythe of Warning (GGC-2-1)",
			source : [["AL","CCC"]],
			type : "weapon (glaive)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This war-scythe is a reddish 10-ft wooden pole with a curved scythe-like blade etched with infernal runes. Along the base of the pole is the preserved tail of a fiendish creature, which emanates a foul odor of rot. When trouble is near, the tail whips & thrashes to warn me. Allies in 30 ft and I have adv. on initiative. It also magically awakens us from nonmagical sleep when combat starts.",
			descriptionLong : "This war-scythe (glaive) consists of a reddish 10-ft wooden pole with a curved scythe-like blade at the top that's etched with infernal runes. Along the base of the pole is the preserved tail of a fiendish creature, which emanates a foul odor of rot. When trouble is nearby, the tail whips and thrashes to warn me of impending danger. Allies in 30 ft and I have advantage on initiative rolls. The scythe also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "This war-scythe consists of a long reddish wooden pole about 10 feet in length with an attached curved scythe-like blade on the top end. The blade is etched with infernal runes. Along the base of the pole is the preserved tail of some fiendish creature. When trouble is nearby the tail whips and thrashes about warnings of the impending situation. Although preserved, the tail emanates a foul odor of rot.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Losspatan's War-scythe, Glaive of Warning"], options : ["Losspatan's War-scythe, Glaive of Warning"] },
			},
	"greatclub of warning: u'u war club (wbw-dc-den-h2)" : {
			name : "U'u War Club of Warning (DEN-H2)",
			source : [["AL","WBW-DC"]],
			type : "weapon (greatclub)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "From a distant land called the Marquesas Islands, this club is carved from sennit, ironwood & human hair. A warrior or chief carried it as a sign of status. Carvings of faces & eyes keep watch in all directions & symbolize the ancestors, endowing spiritual power & protection. Allies in 30 ft & I have adv. on initiative. It magically awakens us from nonmagical sleep if combat starts.",
			descriptionLong : "From a distant prime material land called the Marquesas Islands, this club is carved from ironwood, sennit and human hair. A Marquesan warrior or chief carried it as a sign of status. The carvings of faces and eyes keep watch in all directions and symbolize the ancestors, endowing a warrior with spiritual power and protection. Allies in 30 ft and I have adv. on initiative. It also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "From a distant prime material land known as the Marquesas Islands, the U'u War Club is carved from ironwood, sennit, and human hair. A Marquesan warrior or chief carried this club as a sign of status. The carvings of multiple faces and eyes keep watch in all directions and are symbolic representations of warrior's ancestors – endowing the wielder with spiritual power and protection.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["U'u War Club, Greatclub of Warning"], options : ["U'u War Club, Greatclub of Warning"] },
			},
	"greatclub of warning: clobber (wbw-dc-mike-1)" : {
			name : "Clobber, Greatclub of Warning (MIKE-1)",
			source : [["AL","WBW-DC"]],
			type : "weapon (greatclub)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "To ensure that his ogre bodyguard, Clobber, couldn't be caught unawares, Scrimshaw enchanted his greatclub with magical wards. Elaborate carved curlicues wend their way around the gnarled oaken shaft and glow a dull crimson when danger is near. Allies in 30 ft and I have adv. on initiative. It also magically awakens us from nonmagical sleep when combat starts.",
			descriptionLong : "To ensure that his dim-witted ogre bodyguard, Clobber, couldn't be caught unawares, Scrimshaw enchanted his greatclub with magical wards. Elaborate carved curlicues wend their way around its gnarled oaken shaft and glow a dull crimson when danger is near. While on my person, allies in 30 ft and I have advantage on initiative rolls. The greatclub also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "To ensure that the dim-witted ogre couldn't be caught unawares, Scrimshaw enchanted the weapon of his bodyguard, Clobber with magical wards. The elaborate curlicues carved into this greatclub twist and wend their way around its gnarled oaken shaft. They emit a dull crimson glow when danger is near.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Clobber, Greatclub of Warning"], options : ["Clobber, Greatclub of Warning"] },
			},
	"green-flame mace: face of umberlee's fury (ccc-awe-1-2)" : {
		name : "Face of Umberlee's Fury (Green-Flame Mace)",
		source : [["AL","CCC"]],
		rarity : "common",
		type : "weapon (mace)",
		attunement : true,
		description : "I can use an action to ignite the head of this mace with green flame or extinguish it. When lit, the mace glows like a torch & deals 1 extra Fire dmg. Its head resembles the head of a merfolk woman & the green flame looks like her hair flowing gently in water. The command words are \"Fury\" (to light) and \"Rest\" (to extinguish) in Aquan.",
		descriptionLong : "While attuned to this mace, I can use an action to make its head ignite with green flame or extinguish it. When lit, the mace glows as brightly as a torch and deals 1 extra Fire dmg on a hit. Its head resembles the head of a merfolk female and while active, the green flame looks like her hair flowing gently in water. The command words are \"Fury\" (to light) and \"Rest\" (to extinguish) in Aquan.",
		descriptionFull : "The mace's head is shaped to resemble the head of a merfolk female. While \"lit,\" the green flame resembles the merfolk's hair flowing gently in water. The command words for the mace are the words \"Fury\" (to light) and \"Rest\" (to extinguish) in Aquan.\n   This mace is a common magic item. While attuned to the weapon, the wielder can use an action to make the head of the mace alight with green flame or use an action to extinguish the flame. While the mace is \"lit,\" it glows as brightly as a torch and deals an extra 1 fire damage on a hit.",
		weight : 4,
		action : [["action", "Green-Flame Mace (Light/Extinguish)"]],
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*green)(?=.*flame)(?=.*umberlee|umberlee's)(?=.*fury).*$/i,
			name : "Umberlee's Fury, Green-Flame Mace",
			description : "Sap; +1 fire dmg while lit",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-bfg1-3)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-BFG1-3)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This javelin has the symbol of Selûne embossed onto the head and does Lightning or Piercing damage. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target & anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "This javelin has the symbol of Selûne embossed onto the head.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-bmg-moon6-3)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-BMG-MOON6-3)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This javelin crackles with energy that changes color to match my mood and does Lightning or Piercing. Once per dawn, throw it at target in 120 ft. Instead of an atk, the javelin turns into an streak of rainbow lightning as it flies through the air. The target & any between us in a line take 4d6 Lightning, DC 13 Dex save halves. The javelin then reappears in my hand.",
		descriptionLong : "This javelin crackles with energy that changes color to match my mood and does Lightning or Piercing damage on a hit. Once per dawn, I can throw it at a target in 120 ft instead of an attack. The javelin turns into an streak of rainbow lightning as it flies through the air. The target and anyone between us in a 5-ft line take 4d6 Lightning damage, DC 13 Dex save for half. It then reappears in my hand.",
		descriptionFull : "This javelin crackles with energy, which changes color to match the mood of the wielder. In lightning bolt form, it transforms into an electrical streak of rainbow lights as it streaks through the air.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-bmg-moon16-1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-BMG-MOON16-1)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "The blackened wood of this javelin was taken from a tree struck by lightning. It does Lightning or Piercing. Once per dawn, I can throw the javelin at a target in 120 ft. Instead of an atk, it becomes a black lightning bolt that sends a chill through my body. The target and any between us in a line take 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionLong : "The blackened wood of this javelin was taken from a tree struck by lightning. It does Lightning or Piercing damage. Once per dawn, I can throw the javelin at a target within 120 ft. Instead of making an attack roll, it turns into a black lightning bolt that sends a chill through my body. The target and anyone in-between us in a 5-ft wide line take 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "The blackened wood of this javelin was taken from a tree struck by lightning. When activated, the lightning bolt is black and sends a chill through the user's body.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-gad2-2)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-GAD2-2)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This simple javelin is carved from bleached whalebone. It sparks with lightning when I'm angry and does Lightning or Piercing damage. Once per dawn, I can replace a javelin atk at a target in 120 ft. The target & anyone between us in 5-ft wide line take 4d6 Lightning, DC 13 Dex save halves. The javelin then reappears in my hand.",
		descriptionLong : "This simple javelin is carved from bleached whalebone. It sparks with lightning whenever I'm angry and does Lightning or Piercing damage on a hit. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone in-between us in a 5-ft wide line take 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "This simple javelin is carved from bleached whalebone. It sparks with lightning whenever its wielder is angry.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-sac-4)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-SAC-4)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This javelin does Lightning or Piercing. Once per dawn, I can throw it at a target in 120 ft. Instead of an attack, the javelin turns into a lightning bolt and a minor storm appears above it, soaking all things in its path. The target and anyone between us in a line take 4d6 Lightning, DC 13 Dex save for half. It then reappears in my hand.",
		descriptionLong : "This javelin does Lightning or Piercing damage on a hit. Once per dawn, I can throw it at a target in 120 ft. Instead of making an attack roll, it turns into a lightning bolt and a minor storm appears above it, soaking all things in its path before dissipating. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "When thrown, a minor storm appears above the lightning bolt, soaking all things in its path with rain before dissipating immediately.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-sfbay-4-1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-SFBAY-4-1)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "The shaft of this javelin is crafted from fine ash wood. The point is shining steel etched with runes & the air smells faintly of ozone before it's thrown. It does Lightning or Piercing. Once per dawn, I can replace a javelin atk at a target in 120 ft with a lightning bolt. The target & any between us in a line take 4d6 Lightning, DC 13 Dex save halves. It then reappears in my hand.",
		descriptionLong : "The shaft of this javelin is crafted from fine ash wood. The point is shining steel etched with runes and the air smells faintly of ozone before it's thrown. It does Lightning or Piercing damage. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. Instead of rolling an attack, the target and anyone between us in a 5-ft wide line take 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "The shaft of this javelin is crafted from fine ash wood while the point is shining steel. Runes etch the point and the air smells faintly of ozone slightly before it is thrown.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (ddal8-5)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (DDAL8-5)",
		source : [["AL","S8"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This javelin glows an angry red when within 120 feet of a troll and does Lightning or Piercing damage on a hit. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "This javelin glows an angry red when within 120 feet of a troll.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-as-1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-AS-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This javelin does Lightning or Piercing dmg. Once per dawn, I can replace an atk at a target in 120 ft with a lightning bolt, making a sonic boom. The target & any between us in a line take 4d6 Lightning, DC 13 Dex save halves. It then reappears in my hand.",
		descriptionLong : "This javelin does Lightning or Piercing damage on a hit. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt, making a sonic boom. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.\n   " + toUni("Loud") + ". The javelin makes the sound of a sonic boom when it is used.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning: comet spear (sj-dc-cjk2-2)" : { // contains contributions by Larry Hoy
		name : "Comet Spear, Javelin of Lightning (CJK2-2)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "Several adventurers pooled skills and resources to craft me a special javelin that does Lightning or Piercing. Once per dawn, throw at target in 120 ft. Instead of attack, it becomes glittering silver comet wreathed in electric fire. The target and anyone between us take 4d6 Lightning, DC 13 Dex save halves. It then reappears in my hand. Magic action for my voice to carry for 600 ft until my next turn ends.",
		descriptionLong : "Several adventurers pooled skills and resources to craft me a special javelin that does Lightning or Piercing damage. Once per dawn, I can throw it at a target in 120 ft. Instead of making an attack, it turns into a glittering silver comet wreathed in electric fire. The target and anyone in 5-ft wide line between us takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand. I can also use a Magic action to make my voice carry clearly for up to 600 ft until my next turn ends.",
		descriptionFull : "Several adventurers have decided to pool skills and resources together and over the rest of the night they crafted you a special weapon. This item behaves like the normal version except instead of transforming into a bolt of lightning, it turns into a glittering silver comet wreathed in electrified fire.\n   " + toUni("War Leader") + ". You can take a Magic action to cause your voice or signal to carry clearly for up to 600 feet until the end of your next turn.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (600ft Voice)"]],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /comet spear/i,
			name : "Comet Spear, Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning: stormstrike (sj-dc-dd-4)" : { // contains contributions by Larry Hoy
		name : "Stormstrike, Javelin of Lightning (DD-4)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This short bident is made of the same smooth black metal as the Monad & glows if Undead are in 120 ft. \"5702M5721KE\" is engraved on the haft. When I press a button, lightning crackles on the tines. It does Lightning or Piercing. Once per dawn, I can replace atk at target in 120 ft. Target & any between us take 4d6 Lightning, DC 13 Dex save halves. It then reappears in my hand.",
		descriptionLong : "This short-hafted bident is made of the same smooth black metal as the Monad and glows when Undead are in 120 ft. \"5702M5721KE\" is engraved on the haft and when I press a button, lightning crackles along the tines. It does Lightning or Piercing damage. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "This short-hafted bident is a relic of an earlier age. It is made of the same smooth black metal as the Monad, and the numbers and letters \"5702M5721KE\" are engraved on the haft. Lightning crackles along the tines when a button on the haft is pressed. Gauthak (from SJ-DC-DD-03) has pointed out that while the engraving hardly makes sense, it looks suspiciously like the word \"Stormstrike\", and has taken to calling the bident as such.\n   " + toUni("Sentinel") + ". This item glows faintly when undead are within 120 feet of it.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning)(?=.*stormstrike).*$/i,
			name : "Stormstrike, Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning: processional baton (sj-dc-des5-1)" : { // contains contributions by Larry Hoy
		name : "Processional Baton (Javelin of Lightning, DES5-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This long narrow fey javelin is made from mithral & reflects rainbows. When swung, it leaves arcs of white light or the colors of my gender/sexual orientation. The head is made of pure light & only appears when I atk. It does Lightning or Piercing. Once per dawn, replace javelin atk at target in 120 ft. The target & any between us take 4d6 Lightning, half on DC 13 Dex save. It then returns to me.",
		descriptionLong : "This long narrow javelin of fey origin is crafted from mithral, reflecting rainbows and other light tricks. When swung, it leaves behind arcs of white light or colors linked to my gender identity/sexual orientation. The spearhead is forged of pure light and only appears when I attack. It does Lightning or Piercing damage. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "The Processional Baton is a long narrow staff of fey origin, crafted from mithral and reflecting light in interesting ways. This makes the baton cast rainbows and other tricks of light around it. When swung, the baton leaves behind arcs of white light. Alternately, the wielder can have the baton cast arcs of color linked to their gender identity or sexual orientation (see the chart below). The spearhead only appears when used as a weapon, forged of pure light. The damage type of the weapon is unchanged by this property.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*processional)(?=.*baton)(?=.*javelin)(?=.*lightning).*$/i,
			name : "Processional Baton, Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning: rrakkma's smite (sj-dc-flumph-1)" : { // contains contributions by Larry Hoy
		name : "Rrakkma's Smite, Javelin of Lightning (FLUMPH-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This obsidian & silver-blue javelin radiates electric sparks when touching metal or flesh. Rrakkma is etched into the haft in Gith. It does Lightning or Piercing & crackles at danger, giving +2 initiative unless Incapacitated. Once per dawn, replace javelin atk at target in 120 ft. The target & anyone between us in line takes 4d6 Lightning, DC 13 Dex save for half. It then returns to me.",
		descriptionLong : "This obsidian and silver-blue javelin radiates sparks of electricity when it touches metal or flesh and does Lightning or Piercing damage. Rrakkma is etched into the metal in Gith. It crackles and shocks me in warning, giving +2 initiative unless I'm Incapacitated. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "This obsidian and silver-blue javelin radiates sparks of electricity when it makes contact with metal or flesh, the phrase ‘Rrakkma' is etched into the metal in Gith.'\n   " + toUni("Guardian") + ". The item crackles and electrically shocks a warning to its bearer, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning)(?=.*rrakkma's)(?=.*smite).*$/i,
			name : "Rrakkma's Smite, Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning: jensen's lure (sj-dc-isl-1)" : { // contains contributions by Larry Hoy
		name : "Jensen's Lure, Javelin of Lightning (ISL-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This javelin's worn wood is dyed in magenta & green stripes from exposure to Isl's algae. As a bonus action, I can start or stop the algae's bioluminescence, creating 10-ft of bright light & 10-ft dim. It does Lightning or Piercing. Once per dawn, I can replace a javelin atk at target in 120 ft. The target & anyone between us takes 4d6 Lightning, DC 13 Dex save for half. It then reappears in my hand.",
		descriptionLong : "This javelin's well-worn wood is dyed in stripes of magenta and green by years of exposure to Isl's algae. As a bonus action, I can start or stop the algae's bioluminescence, creating a 10-ft radius of bright light and 10-ft dim. It does Lightning or Piercing damage. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "The well-worn wood of Jensen's Lure is dyed in stripes of magenta and green by years of exposure to Isl's algae. The bioluminescent property of these algae can be reactivated using the javelin's latent lightning energy, producing the beacon effect.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		action : [["bonus action", " (light/dim)"]],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning)(?=.*jensen's)(?=.*lure).*$/i,
			name : "Jensen's Lure, Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-liga1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-LIGA1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "As a bonus action, this javelin sheds 10-ft bright light and 10-ft more dim, or stops. It does Lightning or Piercing dmg. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.\n   " + toUni("Beacon") + ". You can take a Bonus Action to cause the item to shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, or to extinguish the light.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		action : [["bonus action", " (light/dim)"]],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-mb5-ah123)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-MB5-AH123)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This javelin was made with the residual power of the Reigar, giving it a lightning affinity. It can only be broken via special means & does Lightning or Piercing. Once per dawn, I can replace a javelin atk at a target in 120 ft with a lightning bolt. The target & anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionLong : "This javelin was crafted from an artifact infused with the residual power of the Reigar, giving it an affinity with lightning. It can only be broken via special means and does Lightning or Piercing damage. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "This javelin was crafted with a small fragment of the artifact, which, infused the residual power of the Reigar, bestowed upon it an unparalleled affinity with lightning.\n   " + toUni("Unbreakable") + ". The item can't be broken. Special means must be used to destroy it.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning: reigar's rage (sj-dc-mdw-1)" : { // contains contributions by Larry Hoy
		name : "Reigar's Rage, Javelin of Lightning (MDW-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This gilded javelin is made of a cold durable metal with gold-flecks & belonged to celestial beings called Reigar. A wild magic anomaly destroyed them, melting their tridents' outer points & encasing them in crystal space dust. I distrust others with the same weapon due to the Reigar's longstanding feud. It does Lightning or Piercing. Once per dawn, replace attack at target in 120 ft. Target & those between us in line take 4d6 Lightning, DC 13 Dex save halves. It then returns to me.",
		descriptionLong : "This gilded javelin is made of a cold durable metal with a gold-flecked surface and belonged to celestial beings called Reigar. They were destroyed by a wild magic anomaly in Dralla the Decadent's domain that reignited their hatred for each other. It also melted their tridents' outer points and encased them in crystalline space dust. I distrust others with the same weapon due to the Reigar's longstanding feud. It does Lightning or Piercing damage. Once per dawn, I can replace a javelin attack at a target in 120 ft. The target and anyone between us in 5-ft line takes 4d6 Lightning, DC 13 Dex save halves. The javelin then reappears in my hand.",
		descriptionFull : "These weapons belonged to a group of celestial beings called Reigar, who sought to mend their long-harbored resentment of one another through a retreat to Dralla the Decadent's domain. While at respite, they witnessed the deities' destruction by the wild magic ribbon anomaly. This immediately evoked flashbacks of their planet's end and reignited their hatred for one another! Their battle feud empowered the ribbon retributive magic, which destroyed the Reigar and nearly destroyed their weapons. Encasing them in a crystalline fusion of space dust and wild magic.\n   These glided weapons are made of a cold, durable metal, whose surface is gold flecked. The wild magic ribbon melted the tridents outer points, leaving it with one point and imbuing it with its lighting property. When held, the wielder distrusts others wielding the same type of weapon.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*reigar's)(?=.*rage)(?=.*javelin)(?=.*lightning).*$/i,
			name : "Reigar's Rage, Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-triden-upr)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-TRIDEN-UPR)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This crystalline blue javelin is indestructible while retaining its magical lightning attack and does Lightning or Piercing damage. Once per dawn, I can replace a javelin attack at a target in 120 ft with a lightning bolt. The target and anyone between us in a 5-ft wide line take 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.\n   " + toUni("Unbreakable") + ". This crystalline blue javelin is indestructible while it retains its magical lightning attack; it cannot be destroyed by traditional means.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-ttuc-1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-TTUC-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		description : "This javelin was created by a Gnomish tinkerer & lets me speak Gnomish. It does Lightning or Piercing dmg. Once per dawn, I can say Godspeed in Gnomish & replace a javelin atk at a target in 120 ft. The target & anyone between us in a 5-ft wide line takes 4d6 Lightning, DC 13 Dex save for half. The javelin then reappears in my hand.",
		descriptionFull : "The gnome tinkerer created this javelin made sure those who uses the Javelin know its command word “godspeed” in Gnomish which crafted on the javelin.\n   " + toUni("Language") + ". This Javelin of Lightning has minor property Language (Gnome). The bearer can speak and understand Gnomish while the item is on the bearer's person.\n   Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   " + toUni("Lightning Bolt") + ". When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can't be used again until the next dawn.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		languageProfs : ["Gnomish"],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown, slow; Lightning or Piercing; Once per dawn special attack",
			selectNow : true,
		}
	},
	"javelin of warning: jeny's hairpin (ccc-vote-1-1)" : {
			name : "Jeny's Hairpin, Javelin of Warning (VOTE-1-1)",
			source : [["AL","CCC"]],
			type : "weapon (javelin)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This javelin resembles a giant hairpin of purple wood, with a fist-sized jet at its head. Warnings of danger in Jeny's voice shout to prepare for battle; I can't say whether it's the javelin or Jeny herself. I feel discomfort and distaste but allies in 30 ft and I have adv. on initiative. The javelin also magically awakens us from nonmagical sleep when combat starts.",
			descriptionLong : "This magical javelin resembles a giant hairpin made of purple wood, with a fist-sized jet at its head. Similar hairpins are used by Jeny Greenteeth. Warnings of danger in Jeny's voice shout that I should prepare for battle, though I can't tell whether it's the weapon or Jeny herself. While on my person, I feel discomfort and distaste but allies in 30 ft and I have advantage on initiative rolls. The javelin also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "This magical javelin resembles a giant hairpin made of purple wood, with a fist-sized jet at its head. Players who have experienced “DDEX-01-08 Tales Trees Tell” recognize it as the same sort of item that pinned a villager to the town post, and may even recall it acts as a scrying sensor for Jeny Greenteeth. Warnings of danger come in Jeny's voice, shouting that they should prepare for battle. Whether it is the weapon shouting or Jeny herself, it is hard to divine.\n   You feel a sense of distaste when in contact with the item, and continue to experience discomfort while bearing it.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Jeny's Hairpin, Javelin of Warning"], options : ["Jeny's Hairpin, Javelin of Warning"] 	},
			},
	"lash of immolation: dragon's tail (fr-dc-strat-dragon-2)" : {
		name : "Dragon's Tail, Lash of Immolation (STRAT-DRAGON-2)",
		source : [["AL", "FR-DC"]],
		type : "weapon (whip)",
		rarity : "rare",
		description : "This +1 whip made from Dalagh's discarded scales deals +1d6 Fire. The Tear of Selûne bound \u0026 enchanted the scales in thin flexible lines. When I roll a crit, fiery bands restrain the target until my next turn. As a reaction once per dawn when I hit, I can invoke its fire rune to increase the Fire damage to 2d6. I also suffer no harm in extreme temps past 0\u00B0F \u0026 100\u00B0F.",
		descriptionLong : "This +1 whip is made from Dalagh's discarded scales and deals +1d6 Fire damage. The Tear of Selûne bound and enchanted the scales in thin flexible lines. When I roll a critical hit with the whip, fiery bands restrain the target until my next turn. As a reaction once per dawn when I hit with it, I can invoke its fire rune to increase the Fire damage to 2d6. I also suffer no harm in extreme temperatures past 0\u00B0F and 100\u00B0F.",
		descriptionFull : "This whip is made from Dalagh's discarded scales placed around the Tear of Selûne, which bound the scales together in thin flexible lines,  enchanted them, and let the whip do fire damage."+
		"\n   " + toUni("Temperate") + ". You are unharmed by temperatures of 0 degrees Fahrenheit or lower, and 100 degrees Fahrenheit or higher."+
		"\n   The handle of this dark leather whip bears the fire rune, and embers dance around the whip's tail."+
		"\n   You gain a +1 bonus to attack and damage rolls made with this weapon, and on a hit, the whip deals an extra 1d6 fire damage. When you score a critical hit with an attack using this whip, the target also has the restrained condition until the start of your next turn, as fiery bands lash around the target."+
		"\n   " + toUni("Invoking the Rune") + ". When you make an attack with the whip and hit, you can use your reaction to invoke the whip's rune. Doing so increases the extra fire damage dealt by the whip to 2d6."+
		"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
		weight : 3,
		weaponOptions : [{
			baseWeapon : "whip",
			regExpSearch : /^(?=.*dragon|s)(?=.*tail).*$/i,
			name : "Dragon's Tail, Lash of Immolation",
			description : "Finesse, reach, slow; +1d6 fire dmg (1/dawn +2d6); Critical hit: restrained until my next turn",
			modifiers : [1, 1],
			selectNow : true
		}],
		action : [["reaction", " (invoke rune)"]],
		limfeaname : "Lash of Immolation",
		usages : 1,
		recovery : "dawn",
		additional : "invoke rune",
		savetxt : { immune : ["temps past 0\u00B0F/100\u00B0F"] },
	},
	"longbow of melodies: airalinde (fr-dc-imp-2)" : {
			name : "Airalinde, Longbow of Melodies (IMP-2)",
			source : [["AL","FR-DC"]],
			type : "weapon (longbow)",
			rarity : "very rare",
			attunement : true,
			description : "This elven longbow is shaped like a harp cleverly reinforced with mithral and moonstones. It enhances pangs of conscience if I consider or do malevolent acts. When I atk with the bow, I can play 1 melody on each atk. Precision: If proficient with Performance, add +1 (+2 if expertise) to atk roll. Reverberation: add Cha mod Thunder dmg to atk.",
			descriptionLong : "Airalinde (Hymn) is a wonder of elven craftsmanship. The longbow resembles a lyre with multiple strings. It's cleverly reinforced with mithral and inlaid with moonstones. The bow enhances pangs of conscience around malevolent acts. I can use the strings to play 1 melody on each attack. Melody of Precision: If proficient with Performance, add +1 (+2 if expertise) to the attack roll. Melody of Reverberation: add Charisma modifier in Thunder damage to the attack.",
			descriptionFull : "A wonder of elven craftsmanship, Airalindë (“Hymn”) is a wooden bow cleverly reinforced with mithral and inlaid with enchanted moonstones."+
			"\n   " + toUni("Conscientious") + ". When the bearer of this item contemplates or undertakes a malevolent act, the item enhances pangs of conscience."+
			"\n   This bow has multiple strings and resembles a lyre or small harp. By strumming the strings while setting an arrow to the bow, you imbue the arrow with magic."+
			"\n   You can play one of the following melodies when you use the bow to make a ranged weapon attack. You must choose to do so before you make the attack roll, and you can play only one melody per attack."+
			"\n   " + toUni("Melody of Precision") + ". If you're proficient in Performance, you gain a +1 bonus to the attack roll. If you have expertise in Performance, you gain a +2 bonus instead."+
			"\n   " + toUni("Melody of Reverberation") + ". The melody you strum echoes loudly. On a hit, the target takes extra thunder damage equal to your Charisma modifier.",
			weaponsAdd : { select : ["Airalinde, Longbow of Melodies"], options : ["Airalinde, Longbow of Melodies"] },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				var chaMod = Number(What('Cha Mod'));
				// Only add a description if positive Cha Mod and Melody of Precision is not an option or Reverberation is part of the name
				if (!v.theWea.isMagicWeapon && chaMod > 0 && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*melod(ies|y))(?!.*precision).*$/i.test(v.WeaponTextName) && (/reverberation/i.test(v.WeaponTextName) || !hasSkillProf("Performance")[0])) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+' + chaMod + ' (Cha mod) thunder damage';
				}
			},
			'If I include the word "Melody" or "Melodies" in the name of a bow, it will be treated as the magic weapon Bow of Melodies. If I also include either "Precision" or "Reverberation" in the name, the respective bonus will be added. if I include neither of those in the name, the bonus will be determined automatically, the Melody of Precision if proficient with Performance (+1 or +2 bonus to hit) or Melody of Reverberation otherwise (+Cha mod thunder damage).'
		],
			atkCalc : [
				function (fields, v, output) {
					// Add to hit bonus if name doesn't include Reverberation. Will be zero if not proficient in Performance
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*melod(ies|y))(?!.*reverberation).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						var perfProf = hasSkillProf("Performance");
						output.extraHit += perfProf[1] ? 2 : perfProf[0] ? 1 : 0;
					}
				}, ''
			]
		}
	},
	"longbow of melodies: lavender's scent (fr-dc-pandora-jwei-10)" : {
			name : "Lavender's Scent, Bow of Melodies (PANDORA-JWEI-10)",
			source : [["AL","FR-DC"]],
			type : "weapon (longbow)",
			rarity : "very rare",
			attunement : true,
			description : "This longbow is shaped like a harp. When strummed, it emits an aroma of lavender and any who fall asleep to its melodies have tranquil dreams. The bow warns me, giving +2 initiative if not Incapacitated. I can play 1 melody on each atk. Precision: If proficient with Performance, add +1 (+2 if expertise) to atk roll. Reverberation: add Cha mod Thunder dmg to atk.",
			descriptionLong : "This longbow is shaped like a harp with multiple strings. When strummed, it emits an aroma of lavender and those who fall asleep while enchanted by its melodies are blessed with tranquil dreams. The bow also warns me, giving +2 initiative if not Incapacitated. I can use the strings to play 1 melody on each atk. Melody of Precision: If proficient with Performance, add +1 (+2 if expertise) to the attack roll. Melody of Reverberation: add Charisma modifier in Thunder dmg to attack.",
			descriptionFull : "This longbow, fashioned in the likeness of a harp, emanates a soothing aroma of lavender when its strings are strummed. It is said that those who fall asleep while enchanted by its melodies are blessed with tranquil dreams, free from the burdens of the waking world."+
			"\n   " + toUni("Guardian") + ". The item warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition."+
			"\n   This bow has multiple strings and resembles a lyre or small harp. By strumming the strings while setting an arrow to the bow, you imbue the arrow with magic."+
			"\n   You can play one of the following melodies when you use the bow to make a ranged weapon attack. You must choose to do so before you make the attack roll, and you can play only one melody per attack."+
			"\n   " + toUni("Melody of Precision") + ". If you're proficient in Performance, you gain a +1 bonus to the attack roll. If you have expertise in Performance, you gain a +2 bonus instead."+
			"\n   " + toUni("Melody of Reverberation") + ". The melody you strum echoes loudly. On a hit, the target takes extra thunder damage equal to your Charisma modifier.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
			weaponsAdd : { select : ["Lavender's Scent, Longbow of Melodies"], options : ["Lavender's Scent, Longbow of Melodies"] },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				var chaMod = Number(What('Cha Mod'));
				// Only add a description if positive Cha Mod and Melody of Precision is not an option or Reverberation is part of the name
				if (!v.theWea.isMagicWeapon && chaMod > 0 && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*melod(ies|y))(?!.*precision).*$/i.test(v.WeaponTextName) && (/reverberation/i.test(v.WeaponTextName) || !hasSkillProf("Performance")[0])) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+' + chaMod + ' (Cha mod) thunder damage';
				}
			},
			'If I include the word "Melody" or "Melodies" in the name of a bow, it will be treated as the magic weapon Bow of Melodies. If I also include either "Precision" or "Reverberation" in the name, the respective bonus will be added. if I include neither of those in the name, the bonus will be determined automatically, the Melody of Precision if proficient with Performance (+1 or +2 bonus to hit) or Melody of Reverberation otherwise (+Cha mod thunder damage).'
		],
			atkCalc : [
				function (fields, v, output) {
					// Add to hit bonus if name doesn't include Reverberation. Will be zero if not proficient in Performance
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*melod(ies|y))(?!.*reverberation).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						var perfProf = hasSkillProf("Performance");
						output.extraHit += perfProf[1] ? 2 : perfProf[0] ? 1 : 0;
					}
				}, ''
			]
		}
	},
	"mace of disruption (ccc-cic-3)" : {
		name : "Mace of Disruption (CCC-CIC-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		type : "weapon (mace)",
		description : "This black metal mace is decorated with holy symbols of Auril, Talos, & Velsharoon. While held, it sheds 20-ft bright light & 20-ft dim. The light flickers like lightning & forms occasional swirls of snowflakes. The mace does +2d6 Radiant to Fiends & Undead. If left with \u226425 HP, DC 15 Wis save or die. If pass, Frightened of me until my next turn ends.",
		descriptionLong : "This black metal mace is decorated with holy symbols of Auril, Talos, and Velsharoon. While held, it sheds a 20-ft radius of bright light and 20-ft more dim. The light flickers like lightning and generates occasional swirls of snowflakes. The mace does +2d6 Radiant to Fiends and Undead. If they're left with under 26 HP after that damage, they must make a DC 15 Wis save or die. If they pass, they're Frightened of me until my next turn ends.",
		descriptionFull : "This black metal mace is decorated with the holy symbols of Auril, Talos, and Velsharoon. The light shed by this mace flickers like lightning and generates occasional swirls of snowflakes.\n   When you hit a Fiend or an Undead with this magic weapon, that creature takes an extra 2d6 Radiant damage. If the target has 25 Hit Points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature has the Frightened condition until the end of your next turn.\n   " + toUni("Light") + ". While you hold this weapon, it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.",
		attunement : true,
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*disruption).*$/i,
			name : "Mace of Disruption",
			description : "Sap; Fiend/undead +2d6 Radiant; if HP<26, DC 15 Wis save. Fail = death, pass = Frightened until my next turn ends",
			selectNow : true,
		}
	},
	"mace of disruption: death's head (ccc-ghc-bk1-2)" : {
		name : "Death's Head, Mace of Disruption (GHC-BK1-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		type : "weapon (mace)",
		description : "This mace has a long stout handle wrapped in black leather. The top is a skull with curved ram horns & a screaming mouth. I can attune in 1 min. It sheds 20-ft bright light & 20-ft dim. Golden sparks burst forth when it hits Fiends or Undead, doing +2d6 Radiant & giving an ominous bell toll. If left with \u226425 HP, DC 15 Wis save or die. If pass, Frightened of me until my next turn ends.",
		descriptionLong : "This mace has a long stout handle wrapped in black leather. The top is a skull with curved ram horns and a screaming mouth. I can attune in 1 minute. It sheds a 20-ft radius of bright light and 20-ft more dim. Golden sparks burst forth when the mace hits Fiends or Undead, doing +2d6 Radiant damage and sounding an ominous bell toll. If those creature types are left under 26 HP, they must make a DC 15 Wis save or die. If they pass, Frightened of me until my next turn ends.",
		descriptionFull : "This magical mace has a long, stout handle wrapped in black leather. The top is an ornately carved skull, its mouth opened as if screaming. Curved ram-like horns protrude from temples of the skull. When it strikes an undead or fiendish foe, golden sparks, tinged with flame burst forth, and the mace rings forth a single ominous toll, as if from a large bell.\n   This item has the harmonious minor property. Attuning to it takes only 1 minute.\n   When you hit a Fiend or an Undead with this magic weapon, that creature takes an extra 2d6 Radiant damage. If the target has 25 Hit Points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature has the Frightened condition until the end of your next turn.\n   " + toUni("Light") + ". While you hold this weapon, it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.",
		attunement : true,
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*death's)(?=.*head).*$/i,
			name : "Death's Head, Mace of Disruption",
			description : "Sap; Fiend/undead +2d6 Radiant; if HP<26, DC 15 Wis save. Fail = death, pass = Frightened until my next turn ends",
			selectNow : true,
		}
	},
	"mace of smiting (ddal7-6)" : {
		name : "Mace of Smiting (DDAL7-6)",
		source : [["AL","S7"]],
		rarity : "rare",
		type : "weapon (mace)",
		description : "The haft of this mace has gone to soggy rot; despite the leather wrapping the pommel, it still soaks my gloves. The carved metal head is the giant rune Rün (ruin). If striking a Construct, it gives a shower of gold sparks. The mace adds +1 (+3 vs Constructs) to atk & dmg. On a 20, the target takes +7 damage. (+14 to Contructs). If Construct left with \u226426 HP, it dies.",
		descriptionLong : "The once-fine haft of this mace has gone to soggy rot. Even the leather wrapping its pommel doesn't keep it from soaking through my gloves. The metal head is carved into the giant rune Rün (ruin). Upon striking a Construct, it unleashes a shower of gold sparks. The mace adds +1 (+3 vs Constructs) to attack and damage rolls. On a 20 to hit, the target takes +7 Bludgeoning (+14 to Constructs). If a Construct is left with less than 26 HP, it dies.",
		descriptionFull : "The once-fine haft of this club has long-since gone to soggy rot; even the leather wrapping its pommel isn't enough to stop it from soaking through the wearer's gloves. The adamantine head of the mace is carved to resemble the giant rune Rün (ruin). Upon striking a construct with the mace, it unleashes a shower of gold sparks.\n   You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. The bonus increases to +3 when you use the weapon to attack a Construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 Bludgeoning damage, or 14 Bludgeoning damage if it's a Construct. If a Construct has 25 Hit Points or fewer after taking this damage, it is destroyed. [Per magic 2024 AL adjustment, adamantine is now flavor only]",
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			description : "Sap; +2 to hit/dmg vs Constructs; On 20: +7 dmg (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1],
			selectNow : true,
		}
	},
	"mace of smiting (ddal8-7)" : {
		name : "Mace of Smiting (DDAL8-7)",
		source : [["AL","S8"]],
		rarity : "rare",
		type : "weapon (mace)",
		description : "This mace features an angry dwarven face. The ghost of Reizzlerum Caskview still maintains a connection, giving me an unending thirst for good ale. As I grow drunk, the face looks more joyful. It becomes angrier if I go without a drink. The mace adds +1 (+3 vs Constructs) to atk & dmg. On a 20, the target takes +7 dmg (+14 to Constructs). If Construct left with \u226426 HP, it dies.",
		descriptionLong : "This head of this mace features an angry dwarven face. The ghost of Reizzlerum Caskview still maintains a connection to it, giving me an unending thirst for good ale. As I grow intoxicated, the face looks more drunkenly joyful. The longer I go without a drink, the angrier it appears. The mace adds +1 (+3 vs Constructs) to atk & dmg rolls. On a 20 to hit, the target takes +7 Bludgeoning (+14 to Constructs). If a Construct is left with under 26 HP, it dies.",
		descriptionFull : "This head of the mace of smiting features an angry dwarven face. The ghost of Reizzlerum Caskview still maintains a connection to the weapon, causing the owner to gain an unending thirst for good ale. As the owner becomes intoxicated, the face on the mace shifts to appear more drunkenly joyful. The longer the owner goes without a drink, the angrier the face appears.\n   You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. The bonus increases to +3 when you use the weapon to attack a Construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 Bludgeoning damage, or 14 Bludgeoning damage if it's a Construct. If a Construct has 25 Hit Points or fewer after taking this damage, it is destroyed.",
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			description : "Sap; +2 to hit/dmg vs Constructs; On 20: +7 dmg (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1],
			selectNow : true,
		}
	},
	"mace of smiting (ddal10-7)" : {
		name : "Mace of Smiting (DDAL10-7)",
		source : [["AL","S10"]],
		rarity : "rare",
		type : "weapon (mace)",
		description : "This mace is formed from a piece of obsidian. \"Those willing to deny themselves the radiance of the stars would be better to pluck out their eyes & cast them away\" is inscribed over & over in Draconic around the haft. The mace adds +1 (+3 vs Constructs) to atk & dmg. On a 20, the target takes +7 dmg (+14 to Constructs). If Construct left with under 26 HP, it dies.",
		descriptionLong : "This mace is formed from a single piece of obsidian. \"Those willing to deny themselves the radiance of the stars would be better to pluck out their eyes & cast them away\" is inscribed over and over in Draconic around the haft. The mace adds +1 (+3 vs Constructs) to attack and damage rolls. On a 20 to hit, the target takes +7 Bludgeoning (+14 to Contructs). If a Construct is left with under 26 HP afterwards, it dies.",
		descriptionFull : "This mace is fashioned from a single piece of obsidian. The following phrase is inscribed over and over in Draconic around the mace's haft: “Those willing to deny themselves the radiance of the stars would be better to pluck out their eyes and cast them away.”\n   You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. The bonus increases to +3 when you use the weapon to attack a Construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 Bludgeoning damage, or 14 Bludgeoning damage if it's a Construct. If a Construct has 25 Hit Points or fewer after taking this damage, it is destroyed.",
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			description : "Sap; +2 to hit/dmg vs Constructs; On 20: +7 dmg (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1],
			selectNow : true,
		}
	},
	"mace of terror: durgeddin's fist (ddep6-1)" : {
		name : "Durgeddin's Fist, Mace of Terror (DDEP6-1)",
		source : [["AL","S6"]],
		rarity : "rare",
		type : "weapon (mace)",
		description : "This blackened steel mace is shaped like 3 screaming orc skulls. Against Orcs, it shouts profanities & insults in a baritone heard for 30 ft. The mace has 3 charges, 1d3 regained at dawn. Magic action: 1 charge - all chosen in 30 ft make DC 15 Wis save or Frightened of me for 1 min, repeat each turn end. While Frightened, can only Dash away (or free self), Dodge if can't move, no Opp Atks.",
		descriptionLong : "Wrought of blackened steel, the head of this mace is forged into 3 screaming orc skulls. When wielded in against orcs, Durgeddin's Fist bellows an endless stream of profanities and insults in a fearsome dwarven baritone audible for 30 ft. This mace has 3 charges, 1d3 regained at dawn. As a Magic action, I can use 1 charge to have creatures of my choice in 30 ft make a DC 15 Wis save or become Frightened of me for 1 minute. While Frightened, a creature must try to move as far from me as it can, using its action only to Dash or escape restraints, & can't make Opportunity Attacks. If it can't move, the creature can Dodge instead. It repeats the save at the end of each turn, ending the effect on a success.",
		descriptionFull : "Wrought of blackened steel, the head of this mace is forged in the likeness of three screaming orc skulls. When wielded in combat against orc foes, Durgeddin's Fist bellows an endless stream of profanities and insults in a fearsome dwarven baritone audible for 30'.\n   This magic weapon has 3 charges and regains 1d3 expended charges daily at dawn. While holding the weapon, you can take a Magic action and expend 1 charge to release a wave of terror from it. Each creature of your choice within 30 feet of you must succeed on a DC 15 Wisdom saving throw or have the Frightened condition for 1 minute. While Frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't make Opportunity Attacks. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can take the Dodge action. At the end of each of its turns, a creature repeats the save, ending the effect on itself on a success.",
		attunement : true,
		weight : 4,
		limfeaname : "Mace of Terror",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponsAdd : { select : ["Durgeddin's Fist, Mace of Terror"], options : ["Durgeddin's Fist, Mace of Terror"] },
	},
	"moon sickle +1 (ddal-drw10)" : {
		name : "Moon Sickle +1 (DDAL-DRW10)",
		source : [["AL","DRW"]],
		type : "weapon (sickle)",
		attunement : true,
		rarity : "uncommon",
		prerequisite : "Requires attunement by a druid or ranger",
		prereqeval : function(v) {
				return classes.known.druid || classes.known.ranger || classes.known.rangerua ? true : false;
				},
		description : "This +1 sickle glimmers softly with moonlight. While held, I gain a +1 bonus to spell atks & save DCs of Druid & Ranger spells. My spells that restore HP add 1d4 to the total & a number of ivy leaves equal to the HP restored sprout from the haft & fall away.",
		descriptionLong : "This silver-bladed sickle glimmers softly with moonlight. While holding this +1 sickle, I also gain a +1 bonus to spell attack rolls and the save DC for my Druid and Ranger spells. Spells I cast that restore HP add 1d4 to the total and a number of ivy leaves equal to the HP restored sprout from the haft and fall away.",
		descriptionFull : "This moonsickle is handcrafted with sophistication in mind. The blade is artisanally forged and is very sharp. The handle is made of oakwood, is varnished and is finished with a bright sheen. The phrase \"Mithral Chef\" is also etched on the base of the handle."+
		"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your Druid and Ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your Druid and Ranger spells."+
		"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
		weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 1;
				},
				"While holding the Moon Sickle, I gain a +1 bonus to the spell attack rolls and saving throw DCs of my Druid and Ranger spells."
			],
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellObj.psionic || !spellObj.level) return;
				switch (spellKey) {
					case "enervation" :
					case "life transference" :
					case "vampiric touch" :
						var useSpellDescr = getSpellShortDescription(spellKey, spellObj);
						var strAdd = " +1d4";
						spellObj.description = useSpellDescr.replace(/(heals? (half|twice)( the damage dealt| that)?)( in HP)?/, "$1" + strAdd);
						return true;
					default :
						return genericSpellDmgEdit(spellKey, spellObj, "heal", "1d4");
				}
			},
			"While holding the Moon Sickle when I cast a spell that restores hit points, I can roll a d4 and add the number rolled to the amount of hit points restored."
		],
	},
		weaponsAdd : { select : ["Moon Sickle +1"], options : ["Moon Sickle +1"] },
	},
	"moon sickle +2 (bmg-drwep-od-1)" : {
			name : "Moon Sickle +2 (BMG-DRWEP-OD-1)",
			source : [["AL","DRW"]],
			type : "weapon (sickle)",
			attunement : true,
			rarity : "rare",
			prerequisite : "Requires attunement by a druid or ranger",
			prereqeval : function(v) {
				return classes.known.druid || classes.known.ranger || classes.known.rangerua ? true : false;
				},
			description : "A glowing platinum arabesque graces both sides of this +2 sickle. The polished ivory hilt is carved in the likeness of a beautiful dryad. While held, I gain +2 to spell atks & save DCs of my Druid & Ranger spells. Spells I cast that restore HP add 1d4 to the total.",
			descriptionLong : "A glowing platinum arabesque graces both sides of this +2 sickle. The polished ivory hilt is carved in the likeness of a beautiful dryad. While holding the sickle, I gain a +2 bonus to spell attack rolls and spell save DCs of my Druid and Ranger spells. Spells I cast that restore HP add 1d4 to the total restored.",
			descriptionFull : "A glowing platinum arabesque graces both sides of this sickle's blade. The polished ivory hilt is carved in the likeness of a beautiful dryad."+
			"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your Druid and Ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your Druid and Ranger spells."+
			"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
			weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 2;
				},
				"While holding the Moon Sickle, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my Druid and Ranger spells."
			],
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellObj.psionic || !spellObj.level) return;
				switch (spellKey) {
					case "enervation" :
					case "life transference" :
					case "vampiric touch" :
						var useSpellDescr = getSpellShortDescription(spellKey, spellObj);
						var strAdd = " +1d4";
						spellObj.description = useSpellDescr.replace(/(heals? (half|twice)( the damage dealt| that)?)( in HP)?/, "$1" + strAdd);
						return true;
					default :
						return genericSpellDmgEdit(spellKey, spellObj, "heal", "1d4");
				}
			},
			"While holding the Moon Sickle when I cast a spell that restores hit points, I can roll a d4 and add the number rolled to the amount of hit points restored."
		],
	},
		weaponsAdd : { select : ["Moon Sickle +2"], options : ["Moon Sickle +2"] },
	},
	"moon sickle +2: selune's guidance (wbw-dc-nj-cou-2)" : {
			name : "Selune's Guidance (Moon Sickle +2)",
			source : [["AL","WBW-DC"]],
			type : "weapon (sickle)",
			attunement : true,
			rarity : "rare",
			prerequisite : "Requires attunement by a druid or ranger",
			prereqeval : function(v) {
				return classes.known.druid || classes.known.ranger || classes.known.rangerua ? true : false;
				},
			description : "This +2 sickle glimmers softly with moonlight. The handle has symbols of Selûne, with words carved on the blade: \"Let all on whom my light falls be welcomed if they desire. As the silver moon waxes and wanes, so too does all life. Trust in my radiance, and know that all love under my light shall know my blessing. Turn to the moon, and I will be your true guide.\" While held, I gain +2 to spell atks and save DCs for Druid and Ranger spells. Spells I cast that restore HP add 1d4 to the total.",
			descriptionLong : "This +2 silver-bladed sickle glimmers softly with moonlight. The handle contains symbols of Selûne, with words carved on the blade: \"Let all on whom my light falls be welcomed if they desire. As the silver moon waxes and wanes, so too does all life. Trust in my radiance, and know that all love under my light shall know my blessing. Turn to the moon, and I will be your true guide.\" While held, I gain a +2 bonus to spell atk rolls and spell save DCs of my Druid & Ranger spells. Spells I cast that restore HP add 1d4 to the total.",
			descriptionFull : "The handle of this sickle contains the symbols of Selûne, with the following words carved on the blade: \"Let all on whom my light falls be welcomed if they desire to do so. As the silver moon waxes and wanes, so too does all life. Trust in my radiance, and know that all love alive under my light shall know my blessing. Turn to the moon, and I will be your true guide.\""+
			"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your Druid and Ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your Druid and Ranger spells."+
			"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
			weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 2;
				},
				"While holding the Moon Sickle, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my Druid and Ranger spells."
			],
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellObj.psionic || !spellObj.level) return;
				switch (spellKey) {
					case "enervation" :
					case "life transference" :
					case "vampiric touch" :
						var useSpellDescr = getSpellShortDescription(spellKey, spellObj);
						var strAdd = " +1d4";
						spellObj.description = useSpellDescr.replace(/(heals? (half|twice)( the damage dealt| that)?)( in HP)?/, "$1" + strAdd);
						return true;
					default :
						return genericSpellDmgEdit(spellKey, spellObj, "heal", "1d4");
				}
			},
			"While holding the Moon Sickle when I cast a spell that restores hit points, I can roll a d4 and add the number rolled to the amount of hit points restored."
		],
	},
		weaponsAdd : { select : ["Selune's Guidance, Moon Sickle +2"], options : ["Selune's Guidance, Moon Sickle +2"] },
	},
	"moon sickle +2: tsukikama (wbw-dc-php-1)" : {
			name : "Tsukikama, Moon Sickle +2 (PHP-1)",
			source : [["AL","WBW-DC"]],
			type : "weapon (sickle)",
			attunement : true,
			rarity : "rare",
			prerequisite : "Requires attunement by a druid or ranger",
			prereqeval : function(v) {
				return classes.known.druid || classes.known.ranger || classes.known.rangerua ? true : false;
				},
			description : "This sophisticated handcrafted +2 sickle glimmers softly with moonlight. The sharp blade is artisanally forged & the oak handle is varnished & finished with a bright sheen. The phrase \"Mithral Chef\" is etched on the handle. While held, I gain +2 to spell atks & save DCs of my Druid & Ranger spells. Spells I cast that restore HP add 1d4.",
			descriptionLong : "This sophisticated handcrafted silver-bladed sickle glimmers softly with moonlight. The sharp blade is artisanally forged and the oak handle is varnished and finished with a bright sheen. The phrase \"Mithral Chef\" is etched on the handle. While holding this +2 sickle, I gain a +2 bonus to spell attack rolls and spell save DCs of my Druid and Ranger spells. Spells I cast that restore HP add 1d4 to the total restored.",
			descriptionFull : "This moonsickle is handcrafted with sophistication in mind. The blade is artisanally forged and is very sharp. The handle is made of oakwood, is varnished and is finished with a bright sheen. The phrase \"Mithral Chef\" is also etched on the base of the handle."+
			"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your Druid and Ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your Druid and Ranger spells."+
			"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
			weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 2;
				},
				"While holding the Moon Sickle, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my Druid and Ranger spells."
			],
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellObj.psionic || !spellObj.level) return;
				switch (spellKey) {
					case "enervation" :
					case "life transference" :
					case "vampiric touch" :
						var useSpellDescr = getSpellShortDescription(spellKey, spellObj);
						var strAdd = " +1d4";
						spellObj.description = useSpellDescr.replace(/(heals? (half|twice)( the damage dealt| that)?)( in HP)?/, "$1" + strAdd);
						return true;
					default :
						return genericSpellDmgEdit(spellKey, spellObj, "heal", "1d4");
				}
			},
			"While holding the Moon Sickle when I cast a spell that restores hit points, I can roll a d4 and add the number rolled to the amount of hit points restored."
		],
	},
		weaponsAdd : { select : ["Tsukikama, Moon Sickle +2"], options : ["Tsukikama, Moon Sickle +2"] },
	},
	"moon sickle +3 (fr-dc-ucon24)" : {
			name : "Moon Sickle +3 (FR-DC-UCON24)",
			source : [["AL","FR-DC"]],
			type : "weapon (sickle)",
			attunement : true,
			rarity : "rare",
			prerequisite : "Requires attunement by a druid or ranger",
			prereqeval : function(v) {
				return classes.known.druid || classes.known.ranger || classes.known.rangerua ? true : false;
				},
			description : "Forged in furnaces of Selûnarra prior to Karsus's Folly, this +3 sickle is made of an adamantine alloy etched with engravings of the moon goddess, Selûne. I can attune to it in 1 minute. While held, I gain +3 to spell attacks and save DCs of my Druid and Ranger spells. Additionally, spells I cast that restore HP add 1d4 to the total healed.",
			descriptionFull : "Forged in furnaces of Selûnarra prior to Karsus's Folly, this sickle is made of adamantine alloy etched with engravings of the moon god, Selûne, providing the harmonious property. [Per 2024 adjustment, the adamantine is only flavor now. I'm assuming no one would choose an adamantine sickle over the +3 version.]"+
			"\n   " + toUni("Harmonious") + ". Attuning to this item takes only 1 minute."+
			"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your Druid and Ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your Druid and Ranger spells."+
			"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
			weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 3;
				},
				"While holding the Moon Sickle, I gain a +3 bonus to the spell attack rolls and saving throw DCs of my Druid and Ranger spells."
			],
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellObj.psionic || !spellObj.level) return;
				switch (spellKey) {
					case "enervation" :
					case "life transference" :
					case "vampiric touch" :
						var useSpellDescr = getSpellShortDescription(spellKey, spellObj);
						var strAdd = " +1d4";
						spellObj.description = useSpellDescr.replace(/(heals? (half|twice)( the damage dealt| that)?)( in HP)?/, "$1" + strAdd);
						return true;
					default :
						return genericSpellDmgEdit(spellKey, spellObj, "heal", "1d4");
				}
			},
			"While holding the Moon Sickle when I cast a spell that restores hit points, I can roll a d4 and add the number rolled to the amount of hit points restored."
		],
	},
		weaponsAdd : { select : ["Moon Sickle +3"], options : ["Moon Sickle +3"] },
	},
	"oathbow: syranna's folly (ccc-occ-1)" : {
		name : "Syranna's Folly, Oathbow (OCC-1)",
		source : [["AL","CCC"]],
		type : "weapon (longbow or shortbow)",
		rarity : "very rare",
		description : "This elven bow holds the soul of a Thayan rebel, her defiled sigil etched in the grip. I speak Thayan & won't be at peace until Szass Tam & his plots are erased from existence. If I atk with bow & say command, target is sworn enemy for 7 days or death (ability recharges next dawn). Bow atks vs it: adv, +3d6 dmg, ignore partial cover & no range disadv. While it lives, disadv. with other wpns.",
		descriptionLong : "This elven bow contains the soul of a Thayan rebel, her defiled sigil etched into the grip. When attuned, I can speak Thayan & receive the bond: \"I will not be at peace until Szass Tam & his plots are erased from existence\". If I say \"Swift death to you who have wronged me.\" & use this bow to make a ranged attack, the target becomes my sworn enemy until it dies or dawn 7 days later. I can only have 1 sworn enemy. If it dies, I can choose a new one after the next dawn. Ranged attacks with this bow against my sworn enemy have adv., do +3d6 Piercing, ignore all cover but full, & don't suffer disadv. at long range. While my sworn enemy lives, I have disadv. on attack rolls with other weapons.",
		descriptionFull : 'This elven bow has the soul of a Thayan rebel permanently and irreversibly entwined within it, her sigil defiled and etched into the grip. When attuned, the bearer can speak and understand Thayan, in addition to receiving the following Bond: “I will not be at peace until Szass Tam and his plots are erased from existence”.\n   When you nock an arrow on this bow, it whispers in Elvish, “Swift defeat to my enemies.” When you use this weapon to make a ranged attack, you can utter or sign the following command words: “Swift death to you who have wronged me.” The target of your attack becomes your sworn enemy until it dies or until dawn 7 days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have Advantage on the roll. In addition, your target gains no benefit from Half Cover or Three-Quarters Cover, and you suffer no Disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 Piercing damage.\n   While your sworn enemy lives, you have Disadvantage on attack rolls with all other weapons. [Added a choice of bow with 2024 rules]',
		attunement : true,
		languageProfs : ["Thayan"],
		weight : 2,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["brackets", "Syranna's Folly, Oathbow"],
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /shortbow|longbow/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/syranna's folly/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Vs sworn enemy: adv, +3d6 dmg, no cover/range penalty';
				}
			},
			"If I include the words \"Syranna's Folly\" in a the name of a bow, it will be treated as the magic weapon Oathbow. It gains special benefits against my sworn enemy."
		]
	}
	},
	"oathbow (ddal-drw8)" : {
		name : "Oathbow (DDAL-DRW8)",
		source : [["AL","DRW"]],
		type : "weapon (longbow or shortbow)",
		rarity : "very rare",
		description : "This bow is made of blackened cooled lava, its string glowing as if red-hot. If I atk with it & say command, target is sworn enemy for 7 days or until death (ability recharges next dawn). Bow atks vs it get advantage, +3d6 dmg, ignore partial cover & no range disadv. While it lives, disadv. with other weapons.",
		descriptionLong : "This bow is made of blackened cooled lava, its string glowing as if red-hot. When I say \"Swift death to you who have wronged me.\" & use the bow to make a ranged attack, the target becomes my sworn enemy until it dies or dawn 7 days later. I can only have 1 sworn enemy. If it dies, I can choose a new one after the next dawn. Ranged attacks with this bow against my sworn enemy have adv., do +3d6 Piercing, ignore all cover but full, & don't suffer disadv. at long range. While my sworn enemy lives, I have disadv. on attack rolls with other weapons.",
		descriptionFull : 'This particular oathbow is made of blackened, cooled lava, its string glowing as if red-hot.\n   When you nock an arrow on this bow, it whispers in Elvish, “Swift defeat to my enemies.” When you use this weapon to make a ranged attack, you can utter or sign the following command words: “Swift death to you who have wronged me.” The target of your attack becomes your sworn enemy until it dies or until dawn 7 days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have Advantage on the roll. In addition, your target gains no benefit from Half Cover or Three-Quarters Cover, and you suffer no Disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 Piercing damage.\n   While your sworn enemy lives, you have Disadvantage on attack rolls with all other weapons. [Added a choice of bow with 2024 rules]',
		attunement : true,
		weight : 2,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["brackets", "Lava Oathbow"],
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /shortbow|longbow/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/lava oathbow/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Vs sworn enemy: adv, +3d6 dmg, no cover/range penalty';
				}
			},
			'If I include the words "Lava Oathbow" in a the name of a bow, it will be treated as the magic weapon Oathbow. It gains special benefits against my sworn enemy.'
		]
		}
	},
	"oathbow: shadowsong (ddex3-7)" : {
		name : "Shadowsong, Oathbow (DDEX3-7)",
		source : [["AL","S7"]],
		type : "weapon (longbow or shortbow)",
		rarity : "very rare",
		description : "Shadowsong is hewn from yew & has green metal tendrils snaking down its length. It glows dimly in the presence of humans. If I atk with bow & say command, target is sworn enemy for 7 days or death (ability recharges next dawn). Bow atks vs it: adv, +3d6 dmg, ignore partial cover & no range disadv. While it lives, I have disadv. with other weapons.",
		descriptionLong : "Each of the elven oathbows are possessed of mythical power. Shadowsong is hewn from yew and features curious green metal tendrils snaking through its length. It glows dimly in the presence of humans. When I use the bow to make a ranged attack & say \"Swift death to you who have wronged me.\", the target becomes my sworn enemy until it dies or until dawn 7 days later. I can have only 1 sworn enemy at a time. If it dies, I can choose a new one after the next dawn. Ranged attacks with this bow against my sworn enemy have adv., do +3d6 Piercing, ignore all cover but full, & don't suffer disadv. at long range. While my sworn enemy lives, I have disadv. on attack rolls with other weapons.",
		descriptionFull : 'Each of the elven oathbows are possessed of mythical power and ancient legends. Shadowsong is hewn from a supple length of yew and features curious green metal tendrils snaking through its length. It glows dimly in the presence of humans.\n   When you nock an arrow on this bow, it whispers in Elvish, “Swift defeat to my enemies.” When you use this weapon to make a ranged attack, you can utter or sign the following command words: “Swift death to you who have wronged me.” The target of your attack becomes your sworn enemy until it dies or until dawn 7 days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have Advantage on the roll. In addition, your target gains no benefit from Half Cover or Three-Quarters Cover, and you suffer no Disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 Piercing damage.\n   While your sworn enemy lives, you have Disadvantage on attack rolls with all other weapons. [Added a choice of bow with 2024 rules]',
		attunement : true,
		prerequisite : "Requires attunement by a ranger.",
		prereqeval : function(v) {
			return classes.known.ranger || classes.known.rangerua ? true : false;
		},
		weight : 2,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["brackets", "Shadowsong, Oathbow"],
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /shortbow|longbow/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/^(?=.*shadowsong).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Vs sworn enemy: adv, +3d6 dmg, no cover/range penalty';
				}
			},
			'If I include the words "Shadowsong" in a the name of a bow, it will be treated as the magic weapon Oathbow. It gains special benefits against my sword enemy.'
		]
		}
	},
	"oathbow: selestria (wbw-dc-tmp-3)" : {
		name : "Selestria, Oathbow (DC-TMP-3)",
		source : [["AL","WBW-DC"]],
		type : "weapon (longbow or shortbow)",
		rarity : "very rare",
		description : "This bow is strung with unicorn hair & made from the heartwood of an elder treant dedicated to protecting the forest. It mutters Elvish prayers to Mielikki & grumbles in cities about being far from nature. If I listen carefully, I may learn something. If I atk with bow & say command, target is sworn enemy for 7 days or death (ability recharges next dawn). Bow atks vs it: adv, +3d6 dmg, ignore partial cover & no range disadv. While it lives, I have disadv. with other weapons.",
		descriptionLong : "Selestria is strung with unicorn hair and made from the heartwood of an elder treant who wished to dedicate its afterlife to protecting the forest. The bow mutters Elvish prayers to Mielikki & grumbles about being far from nature in urban settings. If I listen, I may learn something. When I make a ranged atk with bow & say \"Swift death to you who have wronged me.\", target becomes my sworn enemy until death or dawn 7 days later. I can only have 1 sworn enemy. If it dies, I can choose a new one after the next dawn. Ranged atks with bow against my sworn enemy have adv., do +3d6 Piercing, ignore all cover but full, & don't suffer disadv. at long range. While sworn enemy lives, I have disadv. on atks with other weapons.",
		descriptionFull : 'Selestria is made from the heartwood of an elder treant who served Mielikki and wished to dedicate their afterlife to protecting the forest. Selestria is strung with the hair of a unicorn.\n   " + toUni("Muttering") + ". Selestria mutters prayers to Mielikki in Elvish while wielded, and grumbles about being far from nature while in urban settings. A creature who listens carefully to the item might learn something useful. [GFP Item]\n   When you nock an arrow on this bow, it whispers in Elvish, “Swift defeat to my enemies.” When you use this weapon to make a ranged attack, you can utter or sign the following command words: “Swift death to you who have wronged me.” The target of your attack becomes your sworn enemy until it dies or until dawn 7 days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have Advantage on the roll. In addition, your target gains no benefit from Half Cover or Three-Quarters Cover, and you suffer no Disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 Piercing damage.\n   While your sworn enemy lives, you have Disadvantage on attack rolls with all other weapons. [Added a choice of bow with 2024 rules]',
		attunement : true,
		weight : 2,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["brackets", "Selestria, Oathbow"],
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /shortbow|longbow/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && (/^(?=.*selestria).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Vs sworn enemy: adv, +3d6 dmg, no cover/range penalty';
				}
			},
			'If I include the word "Selestria" in a the name of a bow, it will be treated as the magic weapon Oathbow. It gains special benefits against my sworn enemy.'
		]
		}
	},
	"shortbow of melodies (fr-dc-fall-1)" : {
			name : "Shortbow of Melodies (FR-DC-FALL-1)",
			source : [["AL","FR-DC"]],
			type : "weapon (any bow)",
			rarity : "very rare",
			attunement : true,
			description : "This shortbow is shaped like a harp with multiple strings. It's the color of Auril's rime and always cool to the touch. I suffer no harm in extreme temps past 0\u00B0F & 100\u00B0F. I can use the strings to play 1 melody per atk. Precision: If proficient with Performance, add +1 (+2 if expertise) to atk roll. Reverberation: add Charisma mod Thunder dmg.",
			descriptionLong : "This shortbow is shaped like a harp with multiple strings. It's the color of Auril's rime and always cool to the touch. While on my person, I suffer no harm in extreme temperatures past 0\u00B0F and 100\u00B0F. I can use the strings to play 1 of 2 melodies on each attack. Melody of Precision: if I'm proficient with Performance, add +1 (+2 if expertise) to the attack roll. Melody of Reverberation: add my Charisma modifier in Thunder damage to the attack.",
			descriptionFull : "This bow is the color of Auril's rime and is always cool to the touch."+
			"\n   " + toUni("Temperate") + ". You are unharmed by temperatures of 0 degrees Fahrenheit or lower, and 100 degrees Fahrenheit or higher."+
			"\n   This bow has multiple strings and resembles a lyre or small harp. By strumming the strings while setting an arrow to the bow, you imbue the arrow with magic."+
			"\n   You can play one of the following melodies when you use the bow to make a ranged weapon attack. You must choose to do so before you make the attack roll, and you can play only one melody per attack."+
			"\n   " + toUni("Melody of Precision") + ". If you're proficient in Performance, you gain a +1 bonus to the attack roll. If you have expertise in Performance, you gain a +2 bonus instead."+
			"\n   " + toUni("Melody of Reverberation") + ". The melody you strum echoes loudly. On a hit, the target takes extra thunder damage equal to your Charisma modifier.",
			savetxt : { immune : ["temps past 0\u00B0F/100\u00B0F"] },
			weaponsAdd : { select : ["Shortbow of Melodies"], options : ["Shortbow of Melodies"] },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				var chaMod = Number(What('Cha Mod'));
				// Only add a description if positive Cha Mod and Melody of Precision is not an option or Reverberation is part of the name
				if (!v.theWea.isMagicWeapon && chaMod > 0 && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*melod(ies|y))(?!.*precision).*$/i.test(v.WeaponTextName) && (/reverberation/i.test(v.WeaponTextName) || !hasSkillProf("Performance")[0])) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+' + chaMod + ' (Cha mod) thunder damage';
				}
			},
			'If I include the word "Melody" or "Melodies" in the name of a bow, it will be treated as the magic weapon Bow of Melodies. If I also include either "Precision" or "Reverberation" in the name, the respective bonus will be added. if I include neither of those in the name, the bonus will be determined automatically, the Melody of Precision if proficient with Performance (+1 or +2 bonus to hit) or Melody of Reverberation otherwise (+Cha mod thunder damage).'
		],
			atkCalc : [
				function (fields, v, output) {
					// Add to hit bonus if name doesn't include Reverberation. Will be zero if not proficient in Performance
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*melod(ies|y))(?!.*reverberation).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						var perfProf = hasSkillProf("Performance");
						output.extraHit += perfProf[1] ? 2 : perfProf[0] ? 1 : 0;
					}
				}, ''
			]
		}
	},
	"starshot hand crossbow (po-bmg-drw-ks-2)" : {
		name : "Starshot Hand Crossbow (PO-BMG-DRW-KS-2)",
		source : [["AL", "PO"]], // Chapter 5: Gem
		type : "weapon (any crossbow)",
		rarity : "rare",
		attunement : true,
		description : "This blackened crossbow has pearl inlays depicting 3 constellations. Interlaced silver ferns, a popular Rashemi motif, adorn both sides of the foregrip. It ignores Loading, makes own ammo & has 3 charges, 1d3 regained at dawn. As bonus action, 1 charge causes effect until next turn ends. Balance: next xbow hit heals creature in 30 ft for 1d8+PB. Flames: it deals +2d8 Fire. Rogue: I turn Invisible.",
		descriptionLong : "This crossbow of blackened wood has pearl inlays depicting 3 different constellations. Interlacing silver ferns—a popular Rashemi motif— adorn both sides of the foregrip. It ignores loading, produces its own ammo, and has 3 charges and regains 1d3 daily at dawn. As a bonus action, I can use 1 charge to invoke one constellation until my next turn ends. Balance: next hit with the crossbow heals creature in 30 ft for 1d8 + my Prof Bonus. Flames: the crossbow deals +2d8 Fire. Rogue: I become Invisible as well as anything I'm wearing or carrying.",
		descriptionFull : "Interlacing silver ferns—a popular Rashemi motif— adorn both sides of the foregrip.\n   This crossbow is crafted from blackened wood, and its limbs bear pearl inlays depicting constellations. You ignore the loading property with this crossbow. If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target. The crossbow has 3 charges and regains 1d3 expended charges daily at dawn."+
		"\n   " + toUni("Constellations") + ". The crossbow is decorated with three constellations. As a bonus action, you can tap one of the constellations to invoke it, expending 1 charge and producing one of the following effects:"+
		"\n   " + toUni("Balance") + ". The next time you hit a creature with a ranged attack roll using this crossbow before the end of your next turn, you or another creature of your choice within 30 feet of you can regain hit points equal to 1d8 plus your proficiency bonus."+
		"\n   " + toUni("Flames") + ". Until the end of your next turn, when you hit a creature with a ranged attack roll using this crossbow, the attack deals an additional 2d8 fire damage."+
		"\n   " + toUni("Rogue") + ". Until the end of your next turn, you have the invisible condition, and anything you are wearing or carrying is also invisible. [Premiere item, may change]",
		action : [["bonus action", ""]],
		limfeaname : "Starshot Crossbow",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponOptions : {
			baseWeapon : "hand crossbow",
			regExpSearch : /^(?=.*starshot)(?=.*hand)(?=.*crossbow).*$/i,
			name : "Starshot Hand Crossbow",
			description : "Ammunition, light, vex",
			selectNow : true,
		}
	},
	"stone greataxe (ddal0-13)" : {
		name : "Stone Greataxe (DDAL0-13)",
		source : [["KOSC",48]],
		rarity : "rare",
		allowDuplicates : true,
		description : "A stone greataxe with a handle made from chardalyn. While wielding the axe, I gain resistance to Cold damage when I'm not at full hit points.",
		descriptionFull : "A stone greataxe with a handle made from chardalyn. While wielded by a creature at less than full hit points, the wielder has resistance to Cold damage. This is a rare magic item.",
		dmgres : ["Cold (If injured)"],
		weaponsAdd : { select : ["Stone Greataxe"], options : ["Stone Greataxe"] },
			},
	"trident of fish command (ccc-bmg-moon14-1)" : {
		name : "Trident of Fish Command (BMG-MOON14-1)",
		source : [["AL","CCC"]],
		type : "weapon (trident)",
		rarity : "uncommon",
		description : "This trident is made of porous blackened lava rock, seeming hot to the touch. When used underwater, schools of tiny brightly colored fish encircle me and refuse to leave no matter what. The trident has 3 charges and regains 1d3 at dawn. I can use 1 charge to cast Dominate Beast from it (save DC 15) on a Beast with a Swim Speed.",
		descriptionFull : "This trident is made of porous, blackened lava rock, seemingly hot to the touch. When used underwater, schools of tiny, brightly colored fish encircle the wielder and refuse to leave no matter the wishes of the trident's owner.\n   This magic weapon has 3 charges, and it regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 15) from it on a Beast that has a Swim Speed.",
		attunement : true,
		weight : 4,
		limfeaname : "Trident of Fish Command",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponsAdd : { select : ["Trident of Fish Command"], options : ["Trident of Fish Command"] },
		fixedDC : 15,
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["dominate beast"],
			selection : ["dominate beast"],
			firstCol : 1
		},
		spellChanges : {
			"dominate beast" : {
				description : "1 beast with Swim Speed save or Charmed; redo on dmg; follows telepathic commands; rea to use rea",
				changes : "Can only affect beasts with innate Swim Speed."
			}
		}
	},
	"trident of fish command (ccc-tarot2-8)" : {
		name : "Trident of Fish Command (TAROT2-8)",
		source : [["AL","CCC"]],
		type : "weapon (trident)",
		rarity : "uncommon",
		description : "This beautiful trident is made from pure pearl, carved from the treasure of a massive oyster. Delicate lines on its prongs and shaft blend imagery of strong winds and calm seas. The trident has 3 charges and regains 1d3 at dawn. While carried, I can use 1 charge to cast Dominate Beast from it (save DC 15) on a Beast with a Swim Speed.",
		descriptionFull : "This beautiful trident seems bafflingly made from pure pearl, likely carved from the treasure of a massive oyster. Delicate lines along the weapon's shaft and head seem to blend imagery of strong winds and calm seas.\n   This magic weapon has 3 charges, and it regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 15) from it on a Beast that has a Swim Speed.",
		attunement : true,
		weight : 4,
		limfeaname : "Trident of Fish Command",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponsAdd : { select : ["Trident of Fish Command"], options : ["Trident of Fish Command"] },
		fixedDC : 15,
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["dominate beast"],
			selection : ["dominate beast"],
			firstCol : 1
		},
		spellChanges : {
			"dominate beast" : {
				description : "1 beast with Swim Speed save or Charmed; redo on dmg; follows telepathic commands; rea to use rea",
				changes : "Can only affect beasts with innate Swim Speed."
			}
		}
	},
	"trident of fish command (ccc-wwc-2)" : {
		name : "Trident of Fish Command (CCC-WWC-2)",
		source : [["AL","CCC"]],
		type : "weapon (trident)",
		rarity : "uncommon",
		description : "This ornate trident is solid bone. Its shaft is covered in carvings of fish & sea creatures. Despite its time underwater, it has no signs of wear. The trident has 3 charges, 1d3 regained at dawn. I can use 1 charge to cast Dominate Beast (DC 15) on Beast with a Swim Speed.",
		descriptionLong : "This ornate trident is made from solid bone. Its shaft is covered in carvings of fish and other sea creatures. Despite its time underwater, it's unstained with no signs of wear. The trident has 3 charges and regains 1d3 at dawn. While carried, I can use 1 charge to cast Dominate Beast (save DC 15) from it on a Beast with an innate Swim Speed.",
		descriptionFull : "This ornate trident is made from solid bone. Its shaft is covered in carvings of fish and other sea creatures. In spite of its time underwater, it is not stained and shows no signs of wear.\n   This magic weapon has 3 charges, and it regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 15) from it on a Beast that has a Swim Speed.",
		attunement : true,
		weight : 4,
		limfeaname : "Trident of Fish Command",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponsAdd : { select : ["Trident of Fish Command"], options : ["Trident of Fish Command"] },
		fixedDC : 15,
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["dominate beast"],
			selection : ["dominate beast"],
			firstCol : 1
		},
		spellChanges : {
			"dominate beast" : {
				description : "1 beast with Swim Speed save or Charmed; redo on dmg; follows telepathic commands; rea to use rea",
				changes : "Can only affect beasts with innate Swim Speed."
			}
		}
	},
	"vicious glaive: ptahrek's glaive (ccc-svh1-2)" : {
		name : "Ptahrek's Vicious Glaive (CCC-SVH1-2)",
		source : [["AL","CCC"]],
		type : "weapon (glaive)",
		rarity : "rare",
		description : "This glaive does +2d6 damage. Its blade is a stylized black raven feather. I have the sensation of flying whenever I close my eyes.",
		descriptionFull : "The blade of this weapon is made into that of a stylized black raven feather. The wielder of the weapon has the sensation of flying whenever they close their eyes.\n   This magic weapon deals an extra 2d6 damage to any creature it hits. This extra damage is of the same type as the weapon's normal damage.",
		weaponOptions : {
			baseWeapon : "glaive",
			regExpSearch : /^(?=.*glaive)(?=.*vicious)(?=.*ptahrek|ptharek's).*$/i,
			name : "Ptahrek's Vicious Glaive",
			description : "Heavy, reach, two-handed, graze; +2d6 damage",
			selectNow : true,
		}
	},
	"vicious mace (ccc-bmg-1 hulb1-1)" : {
		name : "Vicious Mace (CCC-BMG-1 HULB1-1)",
		source : [["AL","CCC"]],
		type : "weapon (mace)",
		rarity : "rare",
		description : "This mace is a clenched fist wearing spiked gauntlets. It does +2d6 damage and works as a holy symbol of Bane when wielded. A cleric or paladin of Bane has adv. on CHA (Intimidation) checks against followers of Bane.",
		descriptionLong : "This mace is crafted into the image of a clenched fist wearing spiked gauntlets. It does +2d6 damage and functions as a holy symbol of Bane when wielded. A cleric or paladin of Bane has adv. on CHA (Intimidation) checks against followers of Bane.",
		descriptionFull : "This mace is crafted into the image of a clenched fist wearing spiked gauntlets. It functions as a holy symbol of Bane when wielded. A cleric or paladin of Bane has advantage on Charisma (Intimidation) checks against followers of Bane when openly displaying this mace.\n   This magic weapon deals an extra 2d6 damage to any creature it hits. This extra damage is of the same type as the weapon's normal damage.",
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*vicious).*$/i,
			name : "Vicious Mace",
			description : "Sap; +2d6 damage",
			selectNow : true,
		}
	},
	"vicious spear (ddal0-13)" : {
		name : "Vicious Spear (DDAL0-13)",
		source : [["KOSC", 82]],
		type : "weapon (spear)",
		rarity : "rare",
		description : "This spear is made from a polished narwhal tusk, and carved with symbols of slaughter and bloodshed. I may get strange looks when wielding it publicly. It does +2d6 damage and marks me as involved in the killing of an evil Wolf Tribe marauder.",
		descriptionFull : "This spear is made from a polished narwhal tusk, and it has been carved with symbols of slaughter and bloodshed. By wielding it publicly, you may get strange looks. It may also mark you as someone involved in the killing of one of the evil Wolf Tribe marauders.\n   This magic weapon deals an extra 2d6 damage to any creature it hits. This extra damage is of the same type as the weapon's normal damage.",
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /^(?=.*spear)(?=.*vicious).*$/i,
			name : "Vicious Spear",
			description : "Thrown, versatile (1d8), sap; +2d6 damage",
			selectNow : true,
		}
	},
	"wakened crystal dragon's wrath glaive (po-bmg-drw-ks-5)" : {
		name : "Wakened Crystal Dragon's Wrath Glaive (PO-BMG-DRW-KS-5)",
		source : [["AL","PO"]],
		rarity : "rare",
		attunement : true,
		description : "This glittering +2 crystal glaive deals +2d6 Radiant & makes an enjoyable bell sound when it hits another object. Great for wedding toasts. On a 20, chosen creatures in 5 ft of target take 5 Radiant. As action once per dawn, 30-ft cone: 8d6 Radiant, DC 16 Dex for half.",
		descriptionLong : "This glittering crystal glaive makes an enjoyable crystal bell sound when it clashes with another object. Great with wedding toasts. It also adds +2 to attack and damage and deals +2d6 Radiant on a hit. On a 20, each chosen creature in 5 ft of the target takes 5 Radiant. As an action once per dawn, I can create a 30-ft cone: 8d6 Radiant damage, Dex DC 16 for half.",
		descriptionFull : "This glittering crystal glaive makes an enjoyable crystal bell sound when it clashes with another object. Great with wedding toasts."+
		"\n   This weapon is decorated with dragon heads, claws, wings, scales, or Draconic letters. When it steeps in a dragon's hoard, it absorbs the energy of the dragon's breath weapon and deals damage of that type with its special properties. This weapon cannot change rarity."+
		"\n   >>Slumbering (Uncommon)<<. Whenever you roll a 20 on your attack roll with this weapon, each creature of your choice within 5 feet of the target takes 5 damage of the type dealt by the dragon's breath weapon."+
		"\n   >>Stirring (Rare)<<. The Stirring weapon has the Slumbering property. In addition, you gain a +1 bonus to attack and damage rolls made using the weapon. On a hit, the weapon deals an extra 1d6 damage of the type dealt by the dragon's breath weapon."+
		"\n   >>Wakened (Very Rare)<<. The Wakened weapon has the Slumbering property, and it improves on the Stirring property. The bonus to attack and damage rolls increases to +2, and the extra damage dealt by the weapon increases to 2d6."+
		"\n   As an action, you can unleash a 30-foot cone of destructive energy from the weapon. Each creature in that area must make a DC 16 Dexterity saving throw, taking 8d6 damage of the type dealt by the dragon's breath weapon on a failed save, or half as much damage on a successful one. Once this action is used, it can't be used again until the next dawn."+
		"\n   >>Ascendant (Legendary)<<. The Ascendant weapon has the Slumbering property, and it improves on the Stirring and Wakened properties. The bonus to attack and damage rolls increases to +3, and the extra damage dealt by the weapon increases to 3d6."+
		"\n   The cone of destructive energy the weapon creates increases to a 60-foot cone, the save DC increases to 18, and the damage increases to 12d6.",
		limfeaname : "Crystal Wrath Breath",
		usages : 1,
		recovery : "dawn",
		action : [["action", "Crystal Wrath Breath"]],
		weaponOptions : [{
			baseWeapon : "glaive",
				name : "Wakened Crystal Wrath Glaive",
				regExpSearch : /wakened crystal wrath glaive/i,
				source : [["AL","PO"]],
				description : "Heavy, reach, two-Handed; Graze; +2d6 Radiant; On a 20, 5 Radiant to any creature in 5ft",
				modifiers : [2,2],
				selectNow : true
			},{			
			name : "Wakened Crystal Wrath Cone",
				regExpSearch : /wakened crystal wrath cone/i,
				source : [["AL","PO"]],
				ability : 0,
				type : "Magic Item",
				damage : [8, 6, "Crystal"],
				range : "30-ft cone",
				description : "Hits all in area; Dex save, success - half damage; Usable once per dawn",
				abilitytodamage : false,
				dc : true,
				modifiers : [8, ""],
				selectNow : true
			}],
		},
	"trident of warning (ccc-tri-34)" : {
			name : "Trident of Warning (CCC-TRI-34)",
			source : [["AL","CCC"]],
			type : "weapon (trident)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This white trident is made from whale bones, laced together with dried tendons. While on my person, allies in 30 ft and I have advantage on initiative rolls. The trident also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "This white trident is fashioned from whale bones, laced together with dried tendons.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Trident of Warning"], options : ["Trident of Warning"] },
			},
	"trident of warning (ddex2-3)" : {
			name : "Trident of Warning (DDEX2-3)",
			source : [["AL","S2"]],
			type : "weapon (trident)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "Anyone wielding this unusual blue steel weapon feels oddly self-assured. While on my person, allies in 30 ft and I have adv. on initiative. The trident also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "Anyone wielding this trident of unusual, blue steel feels oddly self-assured.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Trident of Warning"], options : ["Trident of Warning"] },
			},
	"weapon of warning (ccc-elf-3-1)" : {
			name : "of Warning (CCC-ELF-3-1)",
			source : [["AL","CCC"]],
			type : "weapon (any)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This iron weapon is of fine gnomish make and gives me a fascination with tinkered contraptions. While on my person, allies in 30 ft and I have adv. on initiative. It also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "This iron chain [net] is of fine, gnomish make. When attuned to this item, the user experiences a fascination with tinkered contraptions.  [Nets are no longer weapons in the 2024 rules. Per AL guidelines, changing this to any legal Weapon of Warning as the closest substitute.]\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["prefix", "of Warning"]
				},
			},
	"weapon of warning (ddal0-7)" : {
			name : "of Warning (DDAL0-7)",
			source : [["AL","S0"]],
			type : "weapon (any)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This black iron weapon is wrapped in supple black leather & gilt in mithral. While wielded, profane fiery runes of pain & hate appear on my arm. Allies in 30 ft & I have adv. on initiative. It also magically awakens us from nonmagical sleep if combat starts.",
			descriptionLong : "This weapon of black iron is wrapped in supple black leather and gilt in mithral. While wielded, profane fiery runes of pain and hate appear on the arm that's holding it. Allies in 30 ft and I have advantage on initiative rolls. It also magically awakens us from nonmagical sleep if combat starts.",
			descriptionFull : "This length of black iron is wrapped in supple, black leather and gilt in mithral. When found, it takes the form of any weapon its owner desires. Once its form has been determined, however, it can never again take another. While wielding this weapon, fiery and profane runes of pain and hate appear on the arm that the weapon is wielded in.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["prefix", "of Warning"]
				},
			},
	"whip of warning (ccc-ghc-bk2-10)" : {
			name : "Whip of Warning (CCC-GHC-BK2-10)",
			source : [["AL","CCC"]],
			type : "weapon (whip)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This whip's handle is marked with a skeletal bat, wings stretched over a crescent moon with the tips pointed upward. While carried, allies in 30 ft & I have adv. on initiative. The whip also magically awakens us from nonmagical sleep when combat starts.",
			descriptionLong : "The handle of this whip is emblazoned with a skeletal bat, its wings stretched out over a crescent moon with the tips pointed upward. While on my person, allies in 30 ft and I have advantage on initiative rolls. The whip also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "The handle of the whip is emblazoned with the symbol of a skeletal bat, its wings stretched out over a crescent moon laying with its tips pointed upward.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Whip of Warning"], options : ["Whip of Warning"] },
			},
	"whip of warning (ddal4-2)" : {
			name : "Whip of Warning (DDAL4-2)",
			source : [["AL","S4"]],
			type : "weapon (whip)",
			rarity : "uncommon",
			attunement : true,
			advantages : [["Initiative", true]],
			description : "This whip is a rotting thorn-covered vine set into a handle of purple wood. The pommel is a large chunk of unpolished amber with a moving eyeball inside. Allies in 30 ft & I have adv. on initiative. It also magically awakens us from nonmagical sleep if combat starts.",
			descriptionLong : "This whip is made from a length of rotting, thorn-covered vine set into a handle of unusual purple wood. The pommel is a large chunk of unpolished amber with a moving eyeball trapped inside. Allies in 30 ft and I have advantage on initiative. The whip also magically awakens us from nonmagical sleep when combat starts.",
			descriptionFull : "This whip is fashioned from a length of rotting, thorn-covered vine set into a handle made of an unusual purple wood. The pommel is a large chunk of unpolished amber with a moving eyeball trapped within.\n   As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
			"" + toUni("Alarm") + ". The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn't wake a subject from magically induced sleep.\n" +
			"" + toUni("Supernatural Readiness") + ". Each subject has Advantage on its Initiative rolls.",
			weaponsAdd : { select : ["Whip of Warning"], options : ["Whip of Warning"] },
			},
}
})