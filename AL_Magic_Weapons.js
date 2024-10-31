/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me (MPMB in particular, but others as noted). It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
Additionally, due to the length of some descriptions, you'll need to auto-size the font & hide the lines for multi-line fields in your settings. Otherwise, many of these items will run off the page.
*/

/*  Subject: Flavored Weapons from AL adventures

    Effect:	This script adds the flavored versions of standard magic weapons found in AL adventures to the MPMB sheet (and a couple flavored book items). They will all be listed as AL [item category] in the Magic Item selection, with further choices as needed. The main categories are as follows: Staffs (all special staffs, whether specifically called out as weapons or not), Swords (special swords - including ones where the mod only gave a sword version), Weapons +1/+2/+3, Weapons (Other) [all other special weapons].  All Rods can be found in the AL Magic Items script, even those that can be used as a weapon.
	
	This is not a complete list since I don't have every published adventure yet, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor.*/
	
	//Complete: S0-S10, Guild Adept, DC-POA, CCCs, DRW, RMH, WBW-DC
	//In progress: SJ-DCs, POs, Ravenloft, FR-DC, PS-DC
	
var iFileName = "AL Flavored Magic Weapons.js";
RequiredSheetVersion("13.1.14");

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
		type : "staff",
		choices : ["Staff of the Adder (CCC-SRCC1-3)","Staff of Adornment (CCC-3MAGS-ONE)","Staff of Adornment: K's Ashenwood Staff (SJ-DC-AMO-KURI-3)","Staff of Adornment (SJ-DC-ARQ-2)","Staff of Adornment: Ocharine (SJ-DC-DD-7)","Staff of Adornment (SJ-DC-DEN-H5)","Staff of Adornment (SJ-DC-IGC-ECP-5)","Staff of Adornment (SJ-DC-MONSTER-1)","Staff of Adornment: Shakujo (SJ-DC-MWG-1)","Staff of Adornment (SJ-DC-ROTU-5)","Staff of Adornment (WBW-DC-NJ-COU-2)","Staff of Birdcalls (FR-DC-TT-T201)","Staff of Birdcalls (WBW-DC-BIRE-1)","Staff of Birdcalls (WBW-DC-CONMAR-3)","Staff of Birdcalls (WBW-DC-Death)","Staff of Birdcalls (WBW-DC-FDC-3)","Staff of Birdcalls (WBW-DC-HBK-1)","Staff of Birdcalls (WBW-DC-ROBIN-1-2)","Staff of Birdcalls (WBW-DC-ROOK-1-4)","Staff of Birdcalls: Dark Crystal (WBW-DC-ZODIAC-10)","Staff of Charming (DDEX2-2)","Staff of Defense (SJ-DC-BST-6)","Staff of Defense: Xuanwu Jade Shuttle (SJ-DC-DD-9)","Staff of Defense: Black Root of Clathrus Archeri (SJ-DC-PANDORA-JWEI-3A)","Staff of Defense (SJ-DC-RFJK-2-2)","Staff of Flowers (CCC-KUMORI-3-1)","Staff of Frost (DDAL0-11E)","Staff of Frost (DDAL-DRW5)","Staff of Frost (WBW-DC-AEG-2)","Staff of Healing: Driftwood Staff (CCC-DES-1-2)","Staff of Healing (CCC-GHC-BK2-8)","Staff of Healing (CCC-QCC2019-3)","Staff of Healing (CCC-WYC-2-1)","Staff of Healing (DDEP4)","Staff of the Magi (DDAL7-17)","Staff of Power (DDAL5-19)","Staff of Power (DDEP4)","Staff of Power: Tongkat Nenek Kebayan (WBW-DC-DMMC-1)","Staff of Power: Oblivia (WBW-DC-PHP-ORNG-2)","Staff of the Python (CCC-BMG-MOON7-1)","Staff of the Python: Earth Tender's Branch (CCC-BMG-MOON8-2)","Staff of the Python: Bulkawa's Benevolence (CCC-GSP2-2)","Staff of the Python: Blackztaff (FR-DC-WATERDEEP-KYZ)","Staff of Striking (CCC-TRI-14 YUL1-3)","Staff of Striking (DDAL7-12)","Staff of Striking (DDAL10-10)","Staff of Striking: Moon Dance (SJ-DC-PANDORA-JWEI-1)","Staff of Striking: Dragon's Glory (SJ-DC-ROTU-5)","Staff of Striking: Orcus Wand Splinter (SJ-DC-TRIDEN-MW3)","Staff of Swarming Insects (DDEX3-3)","Staff of Swarming Insects: Mildy's (WBW-DC-DES-1-7)","Staff of Swarming Insects: Scorpion Staff (WBW-DC-DGE-2)","Staff of Swarming Insects: Drone Control Rod (WBW-DC-LEGIT-SV-6)","Staff of Swarming Insects: Mariposa (WBW-DC-PHP-ORNG-2)","Staff of Swarming Insects: Ygorl's Crook (WBW-DC-Rook-3-3)","Staff of Thunder and Lightning (DDAL5-8)","Staff of Thunder and Lightning (DDEP5-2)","Staff of Withering (DDEX2-13)","Staff of Withering (DDAL8-13)","Staff of Withering: The Inoculum (SJ-DC-VEN-2)","Staff of Withering: Positive Prognosis (SJ-DC-VEN-2)","Staff of the Woodlands (CCC-BMG-MOON12-1)","Staff of the Woodlands (CCC-GARY-9)","Staff of the Woodlands (DDAL7-8/DDEP7-1)","Staff of the Woodlands: Liwanag (WBW-DC-ANDL-3)","Staff of the Woodlands: Temperate (WBW-DC-CONMAR-6)","Staff of the Woodlands (WBW-DC-HAVN-1)","Staff of the Woodlands: Guardian (WBW-DC-HH-2)","Staff of the Woodlands (WBW-DC-IDL1)","Staff of the Woodlands (WBW-DC-PHP-LCL-1)","Staff of the Woodlands: Hope's Emissary (WBW-DC-Rook-3-2)","Staff of the Woodlands: Sunlit (WBW-DC-Sunlit-6)","Staff of the Woodlands: Delver's (WBW-DC-ZEP-T2S2)","Staff of the Woodlands: Dragon's Seed (WBW-DC-ZODIAC-5)"],
	"staff of the adder (ccc-srcc1-3)" : {
		name : "Staff of the Adder (CCC-SRCC1-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The head of this plain ash wood staff is carved to resemble a venomous serpent. As a bonus action, speak the staff's command word to animate its snake head for 1 min or make it inanimate again. While animated, I can use it in melee (1d6 piercing + DC 15 Con save or 3d6 poison), but it can be attacked. It has AC 15 and 20 HP (full every time). If it reaches 0 HP, the staff is destroyed.",
		descriptionFull : "The head of this plain ash wood staff is carved to resemble a venomous serpent. You can use a bonus action to speak the staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form.\n   You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 15 Constitution saving throw or take 3d6 poison damage.\n   The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		action : [["bonus action", " (animate/end)"]],
		weaponOptions : {
			regExpSearch : /^(?=.*snake)(?=.*head)(?=.*staff)(?=.*adder).*$/i,
			name : "Animated Snake Head from Staff of the Adder",
			list : "melee",
			ability : 1,
			type : "Natural",
			damage : [1, 6, "piercing"],
			range : "Melee",
			weight : 4,
			description : "DC 15 Constitution save or 3d6 poison damage",
			abilitytodamage : false,
			selectNow : true,
			}
	},
	"staff of adornment (ccc-3mags-one)" : {
		name : "Staff of Adornment (CCC-3MAGS-ONE)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "Flowering hop vines are entwined around this light, pale wooden staff. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. No matter what floats atop it, the object(s) smells like fresh hops. While holding the staff, I can make 1 or more of the objects spin or turn in place.",
		descriptionFull : "Flowering hop vines are entwined around the shaft of this light, pale wooden staff. If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. No matter what object(s) float atop it, it smells like fresh hops. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4
	},
	"staff of adornment: k's ashenwood staff (sj-dc-amo-kuri-3)" : {
		name : "K's Ashenwood Staff of Adornment (AMO-KURI-3)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This ashenwood staff has stood through time. There are visible bite marks in the middle and a hidden message somewhere on the item. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. While holding it, I can make 1 or more of the objects spin or turn in place.",
		descriptionFull : "This ashenwood staff has stood through time. You can see there's some visible bite marks in the middle of this staff.\n   If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Hidden Message") + ". A message is hidden somewhere on the item. It might be visible only at a certain time of the year, under the light of one phase of the moon, or in a specific location.",
		weight : 4,
	},
	"staff of adornment (sj-dc-arq-2)" : {
		name : "Staff of Adornment (SJ-DC-ARQ-2)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This finely crafted wooden staff has symbols of air, earth, fire and water artfully carved into its surface. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. While holding it, I can make 1 or more of the objects spin or turn in place.",
		descriptionFull : "It's a finely crafted wooden staff with symbols of air, erath, fire and water artfully carved into its surface.\n   If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Language") + ". The bearer can speak and understand Primordial while the item is on the bearer's person.",
		weight : 4,
		languageProfs : ["Primordial"],
	},
	"staff of adornment: ocharine (sj-dc-dd-7)" : {
		name : "Ocharine, Staff of Adornment (SJ-DC-DD-7)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This intricately-carved lightweight obsidian staff is the main tool in the Harmonization process, focusing heated and pressurized water to carve Azurite into Azure Crystals. The staff has captured a sequence of tones that are released when it strikes something. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. While holding it, I can make 1 or more of the objects spin or turn in place.",
		descriptionFull : "This lightweight, intricately carved obsidian stone staff is the main tool in the Harmonization process. It is used to focus the heated and pressurized water that carves the Azurite into Azure Crystals. This process produces a sequence of tones that have been captured by the staff and released by it when it strikes something.\n   If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Songcraft") + ". Whenever this item is struck or is used to strike a foe, its bearer hears a fragment of an ancient song.",
		weight : 4,
	},
	"staff of adornment (sj-dc-den-h5)" : {
		name : "Staff of Adornment (SJ-DC-DEN-H5)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This staff is made from polished driftwood. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. When used in any way, it begins to loudly sing the haunting sahuagin song heard at the Reef of Living Memory when souls are ritually trapped in the coral. While held, I can make 1 or more of the objects spin or turn in place.",
		descriptionFull : "This staff is made from polished driftwood. When this staff is used to adorn an item to it, used as an arcane focus, or used as a weapon, the staff begins to loudly sing a few lines of the haunting song heard at the Reef of Living Memory when souls are ritually trapped in the coral. The words of the song are in sahuagin.\n   If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Loud") + ". The item makes a loud noise—such as a clang, a shout, or a resonating gong—when used. In this case, a few lines of a sahuagin ritual song.",
		weight : 4,
	},
	"staff of adornment (sj-dc-igc-ecp-5)" : {
		name : "Staff of Adornment (SJ-DC-IGC-ECP-5)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This wooden staff is carved with the words “PROPERTY OF THE HOUSE OF THE PATH AND THE WAY. PLEASE RETURN IF FOUND”. It also whispers warnings, giving +2 initiative unless incapacitated. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. While held, I can make 1 or more of the objects spin or turn in place.",
		descriptionFull : "This wooden staff has the words “PROPERTY OF THE HOUSE OF THE PATH AND THE WAY. PLEASE RETURN IF FOUND.” carved into it and the item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn’t incapacitated. (Guardian)\n   If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	},
	"staff of adornment (sj-dc-monster-1)" : {
		name : "Staff of Adornment (SJ-DC-MONSTER-1)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This staff is warm to the touch, crafted from plane-touched fire trees. Sigils of flames cover its surface in shades of red & orange. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. While held, I can make 1 or more of the objects spin or turn in place & I suffer no harm in temps from -20\u00B0F to 120\u00B0F.",
		descriptionFull : "This item is warm to the touch, crafted from plane-touched fire trees. Sigils of flames cover its surface. Shades of red and orange are the prominent colors.\n   If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Temperate") + ". The bearer suffers no harm in temperatures as cold as –20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit.",
		weight : 4,
		savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
	},
	"staff of adornment: shakujo (sj-dc-mwg-1)" : {
		name : "Shakujo, Staff of Adornment (SJ-DC-MWG-1)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "The shakujō is a wooden staff with a decorative metal head. Two loops form the base of the headpiece, each with 3 gilded iron rings attached. The rings jangle softly to warn of danger, giving +2 initiative if not incapacitated. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. While held, I can make 1 or more of them spin or turn in place",
		descriptionFull : "The shakujō is a wooden staff with a decorative metal head. Two loops form the base of the headpiece, each from which three gilded iron rings are attached.\n   If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Guardian") + ". When the bearer rolls initiative, the iron rings jangle softly, warning them of danger and granting a +2 bonus to initiative if the bearer isn't incapacitated.",
		weight : 4,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	},
	"staff of adornment (sj-dc-rotu-5)" : {
		name : "Staff of Adornment (SJ-DC-ROTU-5)",
		source : [["AL","SJ-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "As long as this staff is in the Hangout Quarter of the illithid's colony on Planet Cereillithid, ‘666666' appears on the shaft. If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time.",
		descriptionFull : "If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.\n   " + toUni("Hidden Message") + ". As long as this staff is in the Hangout Quarter of the illithid's colony on planet cereillithid, the message ‘666666' will appear on the shaft.",
		weight : 4,
	},
	"staff of adornment (wbw-dc-nj-cou-2)" : {
		name : "Staff of Adornment (WBW-DC-NJ-COU-2)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This staff is made of web produced by Yarnspinner. It's Archfey quality! If I put an object up to 1 pound above the tip, it floats 1 inch from the staff & remains there until removed or out of my possession. The staff can have 3 objects floating at a time. While holding the staff, I can make 1 or more of the objects spin or turn in place.",
		descriptionFull : "This staff is made by web produced by Yarnspinner. It's an Archfey quality staff! If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
		weight : 4
	},
	"staff of birdcalls (fr-dc-tt-t201)" : {
		name : "Staff of Birdcalls (FR-DC-TT-T201)",
		source : [["AL","FR-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This is Don-Jon Raskin’s hiking pole. As bonus action, it sheds 10-ft bright light & 10-ft more dim, or stops. The pole has 10 charges, regaining 1d6+4 at dawn. 5% chance destroyed when last charge used. As action, use 1 charge to make sound to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This is Don-Jon Raskin’s hiking pole with minor property beacon: the bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.\n   This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
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
		magicItemTable : "?",
		description : "This staff is decorated with bird carvings & has 10 charges, regaining 1d6+4 at dawn. 5% chance it's destroyed when last charge used. As an action, use 1 charge to create a sound to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek. While I have it, I feel fortunate and optimistic about the future. Rainbow butterflies with a variety of patterns flutter around me.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   While in possession of the staff, you feel fortunate and optimistic about what the future holds. Butterflies, with wings of various patterns and colours encompassing the entire rainbow, flutter harmlessly around you.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
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
		magicItemTable : "?",
		description : "This staff is decorated with bird carvings & has lily pads growing from it. If left out during a night's rest, 3 frogs will sit on the lily pads & croak a song in the morning. The staff has 10 charges, regaining 1d6+4 at dawn. 5% chance it's destroyed when last charge used. As an action, use 1 charge to create a sound to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff also has lily pads growing from it and if the character leaves it out during a night's rest, it would attract 3 frogs that would sit on the lily pads in the morning, croaking a song.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
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
		magicItemTable : "?",
		description : "This staff is decorated with bird carvings & while holding it, I suffer no harm in temperatures from -20\u00B0F to 120\u00B0F. It has 10 charges, regaining 1d6+4 at dawn; 5% chance it's destroyed when last charge used. As an action, I can use 1 charge to create a sound out to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.\n   The bearer suffers no harm in temperatures as cold as −20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit.",
		weight : 4,
		savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
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
		magicItemTable : "?",
		description : "This staff is decorated with bird carvings & feathers attached on one end. It has 10 charges, regaining 1d6+4 at dawn, 5% chance it's destroyed when last charge used. As an action, I can use 1 charge to create a sound out to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff is also decorated with different bird feathers attached on one of its ends.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
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
		magicItemTable : "?",
		description : "This staff is decorated with bird carvings & whenever it's struck or strikes a foe, I hear a few beats of a taiko drum. The staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it's destroyed when last charge used. As an action, I can use 1 charge to create a sound out to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.\n   " + toUni("Song Craft") + ". Whenever this item is struck or is used to strike a foe, its bearer hears a fragment of an ancient song: a few beats of a taiko drum.",
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
		magicItemTable : "?",
		description : "This staff is decorated with bird carvings. While on my person, I hear robins when in danger, giving +2 initiative unless incapacitated. The staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it's destroyed when last charge used. As an action, I can use 1 charge to create a sound out to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.\n   " + toUni("Guardian") + ". While this staff is on your person, you can hear robins when danger is near. You gain a +2 bonus to initiative when you are not incapacitated.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", ""]],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	},
	"staff of birdcalls (wbw-dc-rook-1-4)" : {
		name : "Staff of Birdcalls (WBW-DC-ROOK-1-4)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This bamboo staff is intricately carved with wondrous birds. The staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it's destroyed when last charge used. As an action, I can use 1 charge to create a sound out to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek. I can also use an action to make my voice carry clearly for up to 300 ft until my next turn ends.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.\n   This bamboo staff is intricately carved with wondrous birds.\n   " + toUni("War Leader") + ". The bearer can use an action to cause their voice to carry clearly for up to 300 feet until the end of the bearer's next turn.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", "Birdcalls/300ft Voice"]],
	},
	"staff of birdcalls: dark crystal (wbw-dc-zodiac-10)" : {
		name : "Dark Crystal Staff of Birdcalls (ZODIAC-10)",
		source : [["AL","WBW-DC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "A dark staff with a skeletal bird skull. Two obsidian crystals are embedded in its eye sockets. The staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it's destroyed when last charge used. As an action, I can use 1 charge to create a sound to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek. As another action, make my voice carry clearly for 300 ft until my next turn ends.",
		descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.\n   A dark staff with a skeletal bird skull. Embedded in its eye sockets are two obsidian crystals.\n   " + toUni("War Leader") + ". The bearer can use an action to cause his or her voice to carry clearly for up to 300 feet until the end of the bearer's next turn.",
		weight : 4,
		limfeaname : "Staff of Birdcalls",
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		action : [["action", "Birdcalls/300ft Voice"]],
	},
	"staff of charming (ddex2-2)" : {
		name : "Staff of Charming (DDEX2-2)",
		source : [["AL","S2"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This staff is fashioned from a piece of pale, white wood, capped with a falcon made of silver. It has 10 charges, regaining 1d8+2 at dawn; if I roll a 1 on a d20 after using the last charge, it loses its magic. Once per dawn, if an enchantment spell is cast only on me, I can use the staff to turn failed save into a success. If I make the save, I can expend 1 charge as a reaction to turn the spell back on its caster. May also be used as a magical quarterstaff.",
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
		weaponsAdd : { select : "Staff of Charming", options : ["Staff of Charming"] },
		},
	"staff of defense (sj-dc-bst-6)" : {
		name : "Staff of Defense (SJ-DC-BST-6)",
		source : [["AL", "SJ-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The nasty wizard Nicolli's staff is carved from the wood of a yggdrasti root. While held, I gain a +1 to AC. The staff has 10 charges and regains 1d6+4 at dawn. 5% chance it's destroyed if last charge used (roll 1 on d20). I can use charges to cast Mage Armor (1 charge) or Shield (2 charges).",
		descriptionLong : "Pulled from the ruins of the extractor staff assembly, this hollow slender staff is made of sharp and jagged obsidian, yet it does not cut my hands. While held, I gain a +1 to AC. It has 10 charges, regaining 1d6+4 expended charges at dawn. If I use the last charge, roll a d20. On a 1, it's destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges).",
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
		weaponsAdd : { select : "Staff of Defense", options : ["Staff of Defense"] },
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
		magicItemTable : "G",
		description : "This short-hafted jade quarterstaff has a curved S-shaped handle inlaid with whorls and Draconic glyphs, and a flat disc-shaped head carved with a dragon turtle rampant. It warns of threats with a roar, giving +2 initiative if not incapacitated. While held, I gain a +1 to AC. The staff has 10 charges and regains 1d6+4 at dawn. 5% chance it's destroyed if last charge used (1 on d20). Use charges to cast Mage Armor (1 charge) or Shield (2 charges). Mage Armor is a shimmering coat of gold lamellar and Shield appears as an octagonal barrier of rune-carved tortoise shells.",
		descriptionLong : "The Xuanwu Jade Shuttle is the latest innovation in the Huangfu's personal defense range. This short-hafted jade quarterstaff has a curved S-shaped handle inlaid with golden whorls and Draconic glyphs, and a flat disc-shaped head adorned with a carved dragon turtle rampant. The staff warns its bearer of threats with a dragon turtle's roar, granting a +2 bonus to initiative if I'm not incapacitated. While held, I gain a +1 to AC. It has 10 charges, regaining 1d6+4 expended charges at dawn. If I use the last charge, roll a d20. On a 1, it's destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges). The mage armor materializes as a shimmering coat of gold lamellar and the shield manifests as an octagonal barrier of overlapping rune-carved tortoise shells.",
		descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		toUni("\n   Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed."+
		"\n   The Xuanwu Jade Shuttle (Xuanwu Yu Ruyi, 玄武玉如意) is the latest innovation in the Huangfu's personal defense range. This short-hafted jade quarterstaff has a curved, S-shaped handle inlaid with golden whorls and Draconic glyphs, and a flat, disc-shaped head adorned with a carving of a dragon turtle rampant. The mage armor it weaves materializes as a shimmering coat of gold lamellar, while the shield manifests as an octagonal barrier of overlapping rune-carved tortoise shells."+
		"\n   " + toUni("Guardian") + ". The staff warns of impending threats through a dragon turtle's violent roars that only the bearer can hear, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
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
		weaponsAdd : { select : "Xuanwu Jade Shuttle, Staff of Defense", options : ["Xuanwu Jade Shuttle, Staff of Defense"] },
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
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	},
	"staff of defense: black root of clathrus archeri (sj-dc-pandora-jwei-3a)" : {
		name : "Black Root of Clathrus Archeri (Staff of Defense)",
		source : [["AL", "SJ-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This staff is black and rotted with several fungi growing from it and a red colored clathrus archeri at its tip. While held, I gain a +1 to AC and have the urge to act in selfish or malevolent ways when given the chance. The staff has 10 charges and regains 1d6+4 at dawn. 5% chance it's destroyed if last charge used (1 on d20). Use charges to cast Mage Armor (1 charge) or Shield (2 charges). Mage Armor is a translucent reddish-purple arcane armor with mycelial threads around the waist and Shield looks like a mushroom’s red cap.",
		descriptionLong : "This staff’s shaft is blacked and rotted with several fungi grown around it ending with a red colored clathrus archeri at its tip. While held, I gain a +1 to AC and it heightens my urge to act in selfish or malevolent ways when given the chance. The staff has 10 charges, regaining 1d6+4 expended charges at dawn. If I use the last charge, roll a d20. On a 1, it's destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges). The Mage Armor is a translucent reddish-purple arcane armor with mycelial threads woven around the waist and the shield appears as a mushroom’s red cap.",
		descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		toUni("\n   Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed."+
		"\n   This staff’s shaft is blacked and rotted with several fungi grown around it ending with a red colored clathrus archeri at its tip. When its user casts a mage armor with this staff, a translucent reddish purple colored arcane armor wraps their body with mycelial threads woven around the waist. If a shield is casted with this staff, it takes the form of a mushroom’s red cap."+
		"\n   " + toUni("Wicked") + ". Whenever the wearer of this armor is presented with an opportunity to do evil, they hear the soft whisper of a lady in an unknown language which numbs their moral, drives them a little mad, and soothes their empathy, thereby increasing their urges to commit the act.",
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
		weaponsAdd : { select : "Black Root, Staff of Defense", options : ["Black Root, Staff of Defense"] },
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
		magicItemTable : "G",
		description : "Pulled from the ruins of the extractor staff assembly, this hollow slender staff is made of sharp jagged obsidian, yet it doesn't cut my hands. While held, I gain a +1 to AC. The staff has 10 charges and regains 1d6+4 at dawn. 5% chance it's destroyed if last charge used (1 on d20). Use charges to cast Mage Armor (1 charge) or Shield (2 charges).",
		descriptionLong : "Pulled from the ruins of the extractor staff assembly, this hollow slender staff is made of sharp and jagged obsidian, yet it does not cut my hands. While held, I gain a +1 to AC. It has 10 charges, regaining 1d6+4 expended charges at dawn. If I use the last charge, roll a d20. On a 1, it's destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges).",
		descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		toUni("\n   Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
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
		weaponsAdd : { select : "Staff of Defense", options : ["Staff of Defense"] },
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
	"staff of flowers (ccc-kumori-3-1)" : {
		name : "Staff of Flowers (CCC-KUMORI-3-1)",
		source : [["AL","CCC"]],
		rarity : "common",
		description : "This natural uncarved branch of a weir tree has silver-brown leaves with velvet-black undersides sprouting from the top. The staff glows faintly blue in magically-lit areas; the glow continues for 10 min. after leaving the area. This staff has 10 charges, regaining 1d6+4 at dawn; 5% chance it's destroyed when last charge used. As an action, use 1 charge to make a chosen flower sprout from soil within 5 ft or from the staff. The flower is nonmagical & grows or withers like normal.",
		descriptionFull : "The natural, uncarved branch of a weir tree makes up the entirety of this staff. New growth sprouts from the head of the staff, silver-brown leaves with velvet-black undersides. The staff glows faintly blue when inside a magically-lit area; after leaving the area, the staff's illumination continues for ten minutes but is not bright enough to light an area.\n   This wooden staff has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of you, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into flower petals and is lost forever.",
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
		magicItemTable : "H",
		description : "This staff is covered in carvings of infernals reading tomes. If placed atop an open book, the staff reads it aloud w/ a deep, inhuman voice, using the language of the book. I have resistance to cold dmg while holding it. The staff has 10 charges, regaining 1d6+4 at dawn. If last charge used, roll a d20. On a 1, it's destroyed. I can use charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) using my spellcasting ability.",
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
	"staff of frost (ddal-drw5)" : {
		name : "Staff of Frost (DDAL-DRW5)",
		source : [["AL","DRW"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This staff is made of ice as hard as steel with a frozen skull perched at the head of it. I have resistance to cold dmg while holding it. The staff has 10 charges, regaining 1d6+4 at dawn. If last charge used, roll a d20. On a 1, it's destroyed. I can use charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) using my spellcasting ability.",
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
	"staff of frost (wbw-dc-aeg-2)" : {
		name : "Staff of Frost (WBW-DC-AEG-2)",
		source : [["AL","WBW-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This staff was formed from a bheur hag's graystaff and changes style and color daily. I have resistance to cold dmg while holding it. The staff has 10 charges, regaining 1d6+4 at dawn. If last charge used, roll a d20. On a 1, it's destroyed. I can use charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), & Wall of Ice (4 charges) using my spellcasting ability.",
		descriptionFull : "This staff was formed from bheur hag's graystaff and changes style and color daily. You have resistance to cold damage while you hold this staff.\n   The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff turns to water and is destroyed.",
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
		name : "Driftwood Staff of Healing (CCC-DES-1-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This staff floats on water & other liquids, & gives me advantage on Strength (Athletic) checks to swim. It has 10 charges, regaining 1d6+4 at dawn. Charges can cast Cure Wounds (1/lvl, max 4th), Lesser Restoration (2) & Mass Cure Wounds (5) using my spellcasting ability. If the last charge used, roll d20. On a 1, it vanishes.",
		descriptionFull : "This item floats on water and other liquids. Its bearer has advantage on Strength (Athletic) checks to swim. This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff vanishes in a flash of light, lost forever.",
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
				description : "1 living creature heals 1d8+spellcasting ability modifier HP, +1d8 per charge spend after the 1st",
				changes : "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level."
			}
		}
	},
	"staff of healing (ccc-ghc-bk2-8)" : {
		name : "Staff of Healing (CCC-GHC-BK2-8)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This smoky gray staff is made from the hardiest of duskwood trees & intricately carved with white & green lacquered symbols of the goddess Eldath. The staff has 10 charges, regaining 1d6+4 at dawn. If last charge used, roll d20. On a 1, it vanishes. Charges can cast Cure Wounds (1/level, max 4th), Lesser Restoration (2) & Mass Cure Wounds (5) using my spellcasting ability.",
		descriptionFull : "This smoky gray staff is carved from the hardiest of duskwood trees. It is intricately carved with white and green lacquered symbols, all dedicated to the goddess Eldath.\n   This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff vanishes in a flash of light, lost forever.",
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
	"staff of healing (ccc-qcc2019-3)" : {
		name : "Staff of Healing (CCC-QCC2019-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ivory staff has a painted red carving of a coiled snake around its length and 10 charges, regaining 1d6+4 at dawn. If the last charge used, roll a d20. On a 1, it vanishes. Charges can cast Cure Wounds (1/level, max 4th), Lesser Restoration (2) and Mass Cure Wounds (5) using my spellcasting ability.",
		descriptionFull : "This ivory staff has a red painted carving of a coiled snake around its length.\n   This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff vanishes in a flash of light, lost forever.",
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
	"staff of healing (ccc-wyc-2-1)" : {
		name : "Staff of Healing (CCC-WYC-2-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This golden metal staff is prominently inscribed with the iconography of Amaunator, clearly identifying the wielder as a follower of the Inquisition. The staff has 10 charges, regaining 1d6+4 at dawn. If last charge used, roll d20. On a 1, it vanishes. Charges can cast Cure Wounds (1/level, max 4th), Lesser Restoration (2) & Mass Cure Wounds (5) using my spellcasting ability.",
		descriptionFull : "A staff of golden metal prominently inscribed with iconography of Aumunator, this item clearly identifies the wielder as a follower of the Inquisition.\n   This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff vanishes in a flash of light, lost forever.",
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
	"staff of healing (ddep4)" : {
		name : "Staff of Healing (DDEP4)",
		source : [["AL","S4"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The smooth wood of this staff is pale & streaked w/ multi-colored veins. It's capped w/ a hollow glass sphere showing an illusory symbol of my deity. Luminescent butterflies flit around the top & I feel fortunate & optimistic about the future. This staff has 10 charges, regaining 1d6+4 at dawn. If use last charge, roll d20. On a 1, it vanishes. Charges can cast Cure Wounds (1/level, max 4th), Lesser Restoration (2), & Mass Cure Wounds (5) using my spellcasting ability.",
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
		description : "Hewn from the bedrock of Chult itself, this mighty stone staff offers tremendous magical power - all it asks is that I honor Ubtao in the process. While holding this +2 quarterstaff, I have adv. on saves vs. spells & +2 on spell atks. The staff has 50 charges to cast spells, regaining 4d6+2 at dawn. As a reaction, I can absorb a spell targeting only me, converting its spell lvl to charges. If that puts the staff over 50 charges or I break it is as an action, it explodes.",
		descriptionLong : "Hewn from the bedrock of Chult itself, this mighty stone staff offers tremendous magical power - and all it asks is that I honor Ubtao in the process. While holding this staff, I have a +2 to spell attacks, adv. on saving throws vs. spells, and can be used as a +2 quarterstaff. The staff has 50 charges (4d6+2 at dawn) to cast spells. When the last charge is used, it has a 5% chance to regain 1d12+1 charges. I can use a reaction to absorb a spell targeting only me, converting its spell level to charges. If that brings the staff over 50 charges or I use an action to break it, it explodes. If it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
		descriptionFull : "Hewn from the bedrock of Chult itself, this mighty stone staff offers tremendous magical power - and all it asks is that you honor Ubtao in the process. This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n   The staff has 50 charges for the following properties. It regains 4d6+2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12+1 charges.\n   " + toUni("Spell Absorption") + ". While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: Conjure Elemental (7 charges), Dispel Magic (3 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Lightning Bolt (7th-level version, 7 charges), Passwall (5 charges), Plane Shift (7 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n   You can also use an action to cast one of the following spells from the staff without using any charges: Arcane Lock, Detect Magic, Enlarge/Reduce, Light, Mage Hand, or Protection from Evil and Good.\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tDamage") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t\t4 \xD7 the number of charges in the staff",
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
		description : "This great ashen staff is etched with designs of swirling air & clouds & resizes to fit my hand. While holding the +2 quarterstaff, gain a +2 bonus on saves, AC, & spell atks. The staff has 20 charges, regaining 2d8+4 at dawn. Charges can cast spells, or use 1 charge on hit for +1d6 force dmg. 5% chance to become normal +2 quarterstaff if last charged used. 5% to regain 1d8 charges (1 or 20 on d20). Action to break staff for 30-ft explosion. See book.",
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
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
			name : "Staff of Power",
			description : "Versatile (1d8); On hit, 1 charge for +1d6 force damage",
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
		description : "This +2 quarterstaff is carved from a single piece of purple wood & topped with a clenched mithral claw. The claw holds a green dragon scale engraved with “Oblivion” in Elvish. The rune glows with a pale green light & emits wisps of choking, caustic mist. I learn Draconic, & while holding staff, gain a +2 bonus on saves, AC, & spell atks. The staff has 20 charges, regaining 2d8+4 at dawn. Charges can cast spells, or use 1 charge on hit for +1d6 force. Action to break staff for 30-ft explosion. See book.",
		descriptionLong : "This +2 quarterstaff is carved from a single piece of purple wood & topped w/ a clenched, mithral claw. The claw clutches a green dragon scale engraved w/ the elven word for “Oblivion”. The rune glows w/ a pale green light & emits wisps of choking, caustic mist. While attuned, I'm fluent in Draconic. When holding the staff, I gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff without other abilities. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells, or, on a hit in melee with it, I can expend 1 charge to deal +1d6 force damage. As an action, I can break it so it explodes. When it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
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
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*power).*$/i,
			name : "Staff of Power",
			description : "Versatile (1d8); On hit, 1 charge for +1d6 force damage",
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
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves; unattended flammable obj ignite",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of power: tongkat nenek kebayan (wbw-dc-dmmc-1)" : {
		name : "Tongkat Nenek Kebayan (Staff of Power)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This gnarled +2 meranti staff is slightly longer than a normal walking stick & ends in a knot that fits in the palm of my hand. While holding it, I gain a +2 bonus on saves, AC, & spell atks & when wielded, I sense that ancient spirits are watching me. It has 20 charges, regaining 2d8+4 at dawn. Charges can cast spells, or use 1 charge on hit for +1d6 force dmg. Action to break staff for 30-ft explosion. See book.",
		descriptionLong : "This gnarled +2 meranti quarterstaff is slightly longer than a regular walking stick & ends in a knot that fits in the palm of my hand. While holding the staff, I gain a +2 bonus on saves, AC, and spell attacks. Whenever I wield it, I sense that ancient spirits are watching me. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff without other abilities. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells, or, on a hit in melee with it, I can expend 1 charge to deal +1d6 force damage. As an action, I can break it so it explodes. When it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
		descriptionFull : "This is a gnarled staff made of meranti. It is slightly longer than a regular walking stick and the top ends in a knot that fits nicely in the palm of one's hand. Whenever you wield the staff, you sense that ancient spirits are watching you.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n   The staff has 20 charges for the following properties. The staff regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8+2 charges.\n   " + toUni("Power Strike") + ". When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.\n   " + toUni("Spells") + ". While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tEffect") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t4 \xD7 the number of charges in the staff",
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
			description : "Versatile (1d8); On hit, 1 charge for +1d6 force damage",
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
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves; unattended flammable obj ignite",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of power: oblivia (wbw-dc-php-orng-2)" : {
		name : "Oblivia, Staff of Power (PHP-ORNG-2)",
		source : [["AL","WBW-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This +2 quarterstaff heightens my urge to act selfish & malevolent when given the opportunity. It was used by fraz urb'loo to cause chaos in the fey domain of Fidestia. The archmage Fa'rah trusts me to bear this ominous weapon as he doesn't want it near his lands. While holding the staff, gain a +2 bonus on saves, AC, & spell atks. It has 20 charges, regaining 2d8+4 at dawn. Charges can cast spells, or use 1 charge on hit for +1d6 force dmg. Action to break staff for 30-ft explosion. See book.",
		descriptionLong : "This +2 quarterstaff heightens my urge to act selfish and malevolent when an opportunity presents itself. The staff was held by fraz urb'loo when he was causing chaos in the fey domain of Fidestia. The archmage Fa'rah trusts me to bear this ominous weapon as he doesn't want it near his domain. While holding the staff, I gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff without other abilities. On a 20, it regains 1d8+2 charges. Charges can be used to cast spells, or, on a hit in melee with it, I can expend 1 charge to deal +1d6 force damage. As an action, I can break it so it explodes. When it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
		descriptionFull : "This item heightens the bearer's urges to act selfish and malevolent when an opportunity presents itself. This item was held by fraz urb'loo when he was causing chaos in the fey domain called Fidestia. The archmage Fa'rah trusts you enough to hold on to this ominous weapon as he does not want it near his domain.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n   The staff has 20 charges for the following properties. The staff regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8+2 charges.\n   " + toUni("Power Strike") + ". When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.\n   " + toUni("Spells") + ". While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tEffect") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t4 \xD7 the number of charges in the staff",
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
			description : "Versatile (1d8); On hit, 1 charge for +1d6 force damage",
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
				description : "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves; unattended flammable obj ignite",
				changes : "Cast as if using a 5th-level spell slot."
			}
		}
	},
	"staff of the python (ccc-bmg-moon7-1)" : {
		name : "Staff of the Python (CCC-BMG-MOON7-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This blackened crooked 6-ft staff was made from the branch of a Dark Treant & hums with power. It oozes a black tar-like venom at twilight. As an action, speak the command word & throw the staff within 10 ft to turn it into a giant constrictor snake with full HP & its own initiative. I can command it mentally on my turn if in 60 ft. Bonus action to revert it to a staff. If the snake reaches 0 HP, the staff is destroyed.",
		descriptionLong : "This blackened crooked 6-foot staff was made from the branch of a Dark Treant that hummed with power. It oozes a black tar-like venom at twilight. As an action, speak this staff's command word & throw it on the ground within 10 ft where it becomes a giant constrictor snake. As a bonus action, speak the command word again to return it to its staff form. The snake acts on its own initiative. On my turn, I can mentally command the snake if within 60 ft & not incapacitated, deciding what it does on its next turn or a more general command. If the snake is reduced to 0 HP, it reverts to its staff form, & the staff is destroyed. Otherwise, the snake always starts out with full HP.",
		descriptionFull : "One of the branches of the Dark Treant was humming with power. It can be broken off and functions as a staff of the python. It is a blackened crooked 6-foot-long staff that oozes a black tar-like venom at twilight.\n   You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.\n   On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n   If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of the python: earth tender's branch (ccc-bmg-moon8-2)" : {
		name : "Earth Tender's Branch (Staff of the Python)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This gnarled staff is carved from a cypress tree & bears numerous small holes in the wood. As an action, speak the command word & throw this staff within 10 ft to turn it into a giant constrictor snake with full HP & its own initiative. I can command it mentally on my turn if in 60 ft. Bonus action to revert it to a staff. If the snake reaches 0 HP, the staff is destroyed.",
		descriptionLong : "This gnarled staff is carved from the wood of a cypress tree and bears numerous small holes in the wood. As an action, speak this staff's command word & throw it on the ground within 10 ft where it becomes a giant constrictor snake. As a bonus action, speak the command word again to return it to its staff form. The snake acts on its own initiative. On my turn, I can mentally command the snake if within 60 ft & not incapacitated, deciding what it does on its next turn or a more general command. If the snake is reduced to 0 HP, it reverts to its staff form, & the staff is destroyed. Otherwise, the snake always starts out with full HP.",
		descriptionFull : "This gnarled staff is carved from the wood of a cypress tree and bears numerous small holes in the wood.\n   You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.\n   On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n   If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of the python: bulkawa's benevolence (ccc-gsp2-2)" : {
		name : "Bulkawa's Benevolence (Staff of the Python)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This narra-wood staff has a copper snake-shaped head. It's a symbol that I will never face life's challenges alone. As an action, speak the command word & throw the staff within 10 ft to turn it into a giant constrictor snake with full HP & its own initiative. I can command it mentally on my turn if in 60 ft. Bulkawa, the summoned snake, has copper scales, glowing blue eyes, & a black tattoo of a 5-leaf clover near its tail. Bonus action to revert to a staff. If Bulkawa reaches 0 HP, the staff is destroyed.",
		descriptionLong : "The body of this staff is made from a narra tree. The curved head is copper & shaped like a snake. The staff is a symbol of Bulkawa's kindness; with it I will never face life's challenges alone. Bulkawa, the summoned snake, has copper scales, glowing blue eyes, & a black tattoo of a 5-leaf clover near its tail. As an action, speak this staff's command word & throw it on the ground within 10 ft where it becomes a giant constrictor snake. As a bonus action, speak the command word again to return it to its staff form. The snake acts on its own initiative. On my turn, I can mentally command the snake if within 60 ft & not incapacitated, deciding what it does on its next turn or a more general command. If the snake is reduced to 0 HP, it reverts to its staff form, & the staff is destroyed. Otherwise, the snake always starts out with full HP.",
		descriptionFull : "The body of this staff is made of wood from a narra tree. The curved head is shaped like a snake made out of copper. The staff is a symbol of Bulkawa's kindness and its effort to make sure that you will never face the challenges life throws at you alone. Bulkawa, the giant constrictor snake summoned, has copper scales and eyes filled with blue light. A black tattoo of a five-leaf clover can be seen near its tail.\n   You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.\n   On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n   If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of the python: blackztaff (fr-dc-waterdeep-kyz)" : {
		name : "Blackztaff of the Python (WATERDEEP-KYZ)",
		source : [["AL","FR-DC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The gilded inlay of a flying snake extends over this handsome black staff. As an action, I can speak command word “Ffanksss” & throw staff in 10 ft. It turns into bright green giant constrictor snake with a scale pattern that resembles wings, full HP & its own initiative. I can command it mentally on my turn if in 60 ft. Bonus action to revert to a staff. If snake reaches 0 HP, reverts & permanently dead unless raised (if DM allows). If Awaken cast on snake, staff is destroyed.",
		descriptionLong : "The gilded inlay of a flying snake extends over the length of this handsome black staff. As an action, speak command word “Ffanksss” & throw it on the ground within 10 ft where it becomes a giant constrictor snake. It's bright green with a scale pattern across its back that resembles wings. As a bonus action, speak the command word again to return it to its staff form. The snake acts on its own initiative. On my turn, I can mentally command the snake if within 60 ft & not incapacitated, deciding what it does on its next turn or a more general command. If the snake is reduced to 0 HP, it reverts to its staff form & is dead when activated again (unless raised at DM discretion). Otherwise, the snake always starts out with full HP. This staff can only be broken by the casting of an Awaken spell on its snake form.",
		descriptionFull : "The gilded inlay of a flying snake extends over the length of this handsome black staff. When activated with the command word “Ffanksss”, the staff transforms into a bright green snake with a scale pattern across its back that resembles wings. (This staff can only be broken by the casting of an awaken spell on its snake form. Otherwise, the staff will never shatter or break.)\n   " + toUni("Unbreakable") + ". The item can’t be broken. Special means must be used to destroy it.\n   You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.\n   On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n   If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.\n   Due to the item’s minor property, the staff does not break or shatter even if the snake dies and reverts to staff form. However, if the snake is reduced to 0 hit points before it reverts to its staff form, the next activation of the staff’s command word simply turns the staff back into a dead giant constrictor snake with 0 hit points. It is left to a DM’s discretion if they will allow a revivify, raise dead or resurrection spell to affect the creature. (Within Waterdeep, there are spellcasting services available for the prices listed within the D&D Adventurers League DM’s Guide.)",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		action : [["action", "Staff of the Python (animate)"], ["bonus action", "Staff of the Python (end)"]]
	},
	"staff of striking (ccc-tri-14 yul1-3)" : {
		name : "Staff of Striking (CCC-TRI-14 YUL1-3)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This brass quarterstaff +3 is smooth to the touch, giving a slight electric shock at first. While held, my arm hair permanently stands on end, along with a tingling sensation. The staff has 10 charges, regaining 1d6+4 at dawn. When it hits with a melee attack, I can spend 1-3 charges. Add +1d6 force dmg per charge. 5% chance to become nonmagical after using last charge.",
		descriptionFull : "This brass staff is smooth to the touch, giving a slight electric shock at first. While holding the staff, the wielder's arm hair permanently stands on end, along with a tingling sensation. This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
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
			description : "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge",
			selectNow : true,
		}
	},
	"staff of striking (ddal7-12)" : {
		name : "Staff of Striking (DDAL7-12)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This +3 quarterstaff appears wholly unexceptional. The wood haft is gnarled & irregular, with a frayed & cracked strip of leather wrapped around its midpoint. When spun rapidly, the staff creates a buzzing drone audible in 100 ft that soon turns into a sonorous, chanted prayer to Ubtao. It has 10 charges, regaining 1d6+4 at dawn. When the staff hits with a melee attack, I can spend 1-3 charges. Add +1d6 force dmg per charge. 5% chance to become nonmagical after using last charge.",
		descriptionLong : "This staff appears wholly unexceptional but can be wielded as a magic quarterstaff that grants +3 to attack and damage rolls made with it. The wood haft is gnarled and irregular, and the thin strip of leather wrapped around its midpoint is frayed and cracked. When rapidly spun by a skilled user, the staff creates a buzzing drone audible in 100 feet. If spun for more than a few moments, the drone turns into a sonorous chanted prayer to Ubtao. The staff has 10 charges. When it hits with a melee attack, I can spend up to 3 charges. For each charge, the target takes an extra 1d6 force damage. The staff regains 1d6+4 charges daily at dawn. If I use the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
		descriptionFull : "This staff appears wholly unexceptional but can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it. The wood haft is gnarled and irregular, and the thin strip of leather wrapped around its midpoint is frayed and cracked. When rapidly spun in the hands of a skilled user, the staff creates a buzzing drone audible to all within 100 feet. If spun for more than a few moments, the drone turns into a sonorous, chanted prayer to Ubtao.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
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
			description : "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge",
			selectNow : true,
		}
	},
	"staff of striking (ddal10-10)" : {
		name : "Staff of Striking (DDAL10-10)",
		source : [["AL","S10"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This +3 quarterstaff is made of a single piece of unmelting, darkgreen ice. While its exact form can't be discerned, a dark shape running the length of the staff writhes within. The item has 10 charges, regaining 1d6+4 at dawn. When the staff hits with a melee atk, I can expend 1-3 charges. Add +1d6 force dmg per charge. 5% chance to become nonmagical when last charged used (1 on d20).",
		descriptionFull : "This staff is made of a single piece of unmelting, darkgreen ice. While its exact form can't be discerned, a dark shape running the length of the staff writhes within.\n   This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it. The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
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
			description : "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge",
			selectNow : true,
		}
	},
	"staff of striking: moon dance (sj-dc-pandora-jwei-1)" : {
		name : "Staff of Moon Dance (Striking, PANDORA-JWEI-1)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "The tip of this +3 quarterstaff is curved like a crescent moon. As a bonus action, a full moon appears in the crescent, shedding 10-ft radius bright light & 10-ft more dim, or disappears. The staff has 10 charges, regaining 1d6+4 at dawn. 5% chance to become nonmagical if last charged used (1 on d20). When the staff hits with a melee atk, I can spend 1-3 charges. Add +1d6 force dmg per charge as the crescent glows & moonlight bursts forth. Dancing a ritual to Selune with this staff causes a piece of my memory to play in the viewers' minds.",
		descriptionLong : "The tip of this magic quarterstaff curves in an arc resembling a crescent moon. In times of darkness, I can use a bonus action to cause a full moon to appear within the crescent, shedding bright light in a 10-foot-radius and dim light for another 10-feet, or to stop the light. The staff grants a +3 bonus to attack and damage rolls made with it and has 10 charges. When it hits with a melee attack, I can spend up to 3 charges. For each charge, the target takes an extra 1d6 force damage. Upon a successful hit and at least 1 charge, the crescent glows before an illumination of moonlight bursts forth. The staff regains 1d6+4 expended charges at dawn. If I use the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff. When dancing a ritual dedicated to Selune with this staff, attuned or not, a piece of my memory plays out in the minds of the viewers.",
		descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it. The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.\n   " + toUni("Beacon") + ". The tip of the staff curves in an arc resembling that of a crescent moon. In times of darkness, its wielder can use a bonus action to cause a mini full moon to appear within the crescent which shed bright light in a 10-foot-radius and dim light for an additional 10-foot-radius, or to extinguish the light.\n   Upon a successful hit and expending at least 1 of its charges, the crescent glows radiantly before an illumination of moonlight bursts forth.\n   When dancing a ritual dedicated to Selune with this staff, whether it be attuned or not to the wielder, a piece of their memory begins playing out in the mind of the viewers, but this function does not provide any mechanical benefit as it is only for story and flavor purposes.",
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
			description : "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge",
			selectNow : true,
		}
	},
	"staff of striking: dragon's glory (sj-dc-rotu-5)" : {
		name : "Dragon's Glory, Staff of Striking (ROTU-5)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This +3 quarterstaff bears the carving of an amethyst dragon's head at the tip. When an aberration comes within 120 ft, the dragon's eyes flare purple. The staff has 10 charges, regaining 1d6+4 at dawn. When the staff hits with a melee attack, I can spend 1-3 charges. Add +1d6 force dmg per charge. 5% chance to become nonmagical when last charged used (1 on d20).",
		descriptionFull : "This staff bears the carving of an amethyst dragon's head at the tip. Whenever an aberration comes within 120 feet of it, the dragon's eyes flares purple (Sentinel).\n   This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it. The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
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
			description : "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge",
			selectNow : true,
		}
	},
	"staff of striking: orcus wand splinter (sj-dc-triden-mw3)" : {
		name : "Orcus Wand Splinter (Striking, TRIDEN-MW3)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This large splinter of bone broke off the Wand of Orcus during the clash on the Airship Carrier Medusa. It radiates overwhelming energy and clings to whoever touches it, allowing them to attune in 1 min. The splinter acts as a +3 quarterstaff with 10 charges, regaining 1d6+4 at dawn. When the staff hits with a melee atk, I can spend 1-3 charges. Add +1d6 force dmg per charge. 5% chance to become nonmagical if last charged used (1 on d20).",
		descriptionFull : "This staff is a large splinter of bone from the Wand of Orcus that broke off during the clash aboard the Airship Carrier Medusa. It radiates with overwhelming energy and clings to whomever touches it, shortening the time it takes to attune to it.\n   " + toUni("Harmonious") + ". Attuning to this item takes only 1 minute.\n   This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it. The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
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
			description : "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge",
			selectNow : true,
		}
	},
	"staff of swarming insects (ddex3-3)" : {
		name : "Staff of Swarming Insects (DDEX3-3)",
		source : [["AL","S3"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This staff is made of finely-polished white wood. The insects summoned by the staff take the form of winged spiders with gossamer wings. It has 10 charges, regaining 1d6+4 at dawn. I can use charges to cast staff's spells or use 1 charge to create a 30-ft radius of flying insects that moves w/ me for 10 min., making area heavily obscured for all but me. A 10+ mph wind disperses it. 5% chance destroyed if last charge used.",
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
	"staff of swarming insects: mildy's (wbw-dc-des-1-7)" : {
		name : "Mildy's Staff of Swarming Insects (DES-1-7)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ebon branch from the Gulthias Tree leaks crimson sap. The staff is unholy, a legacy of its crafting, & evil plants view me favorably. Mildy can summon all such staves as an action if they're on the same plane. It has 10 charges, regaining 1d6+4 at dawn. I can use charges to cast its spells or use 1 charge to create a 30-ft radius swarm of flying insects that moves with me for 10 min, making area heavily obscured for all but me. A 10+ mph wind disperses it. Insects called by the staff are cruel, biting & stinging all save me. 5% chance destroyed if last charge used.",
		descriptionFull : "The staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n   Mildy's Staff is a branch of ebon wood leaking a crimson sap despite years of being removed from the Gulthias Tree. Insects called by it are cruel, biting and stinging all save for the creature attuned to the staff. Mildy can craft more of these staves, and all can be recalled to her with an action so long as she and the staff are on the same plane. The staff is treated as unholy, a legacy of its crafting, and evil plant creatures view its wielder favorably.\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
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
		magicItemTable : "G",
		description : "John Dodge gave this metal staff to Mei'Shell to help him learn to swim. It has an obsidian scorpion fastened to the top but floats in liquids & gives adv. on STR (Athletics) checks for swimming. The staff has 10 charges, regaining 1d6+4 at dawn. I can use charges to cast its spells or use 1 charge to create a 30-ft radius swarm of flying insects that moves w/ me for 10 min., making area heavily obscured for all but me. A 10+ mph wind disperses it. 5% chance destroyed if last charge used.",
		descriptionFull : "The staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.\n   " + toUni("Waterborne") + ". This metal staff has an obsidian scorpion fastened to the top of it. John Dodge gave this staff to Mei'Shell to help him learn how to swim. Even though it is a metal staff with a heavy stone attached, it floats in liquids and grants its wielder advantage on any Strength (Athletics) check made to swim.",
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
		magicItemTable : "G",
		description : "A steel rod tipped with a chunk of crystal computer. Hexagonal tracery lights up when it's activated & attuning to it takes 1 minute. The rod has 10 charges, regaining 1d6+4 at dawn. I can use charges to cast its spells or use 1 charge to create a 30-ft radius swarm of flying insects that moves with me for 10 min., making area heavily obscured for all but me. A 10+ mph wind disperses it. 5% chance destroyed if last charge used.",
		descriptionFull : "The staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n   A steel rod tipped with a chunk of crystal computer. Hexagonal tracery lights up when it is activated.\n   " + toUni("Harmonious") + ". Attuning to this item takes only 1 minute.\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
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
		magicItemTable : "G",
		description : "This staff was made from forgotten memories of Fidestia that don't have any homes. As a bonus action, it sheds 10-ft bright light & 10-ft more dim, or stops. When activated, the glowing butterflies show a random scene of a forgotten memory. The staff has 10 charges, regaining 1d6+4 at dawn. I can use charges to cast its spells or use 1 charge to create a 30-ft radius swarm of flying insects that moves with me for 10 min., making area heavily obscured for all but me. A 10+ mph wind disperses it. 5% chance destroyed if last charge used.",
		descriptionFull : "This item was made of forgotten memories of fidestia that do not have homes any more.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light. When activated the butterflies emits a glow that portrays a random scene of a forgotten memory.\n   The staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
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
		magicItemTable : "G",
		description : "This large ebony crook is cold to the touch & hard to focus on, seemingly drifting into shadow. It was stolen from the slaad lord, Ygorl, by a night hag & he's been searching for it ever since, intent on getting his revenge on its bearer. I can speak Slaad while it's on my person. The staff has 10 charges, regaining 1d6+4 at dawn. I can use charges to cast its spells or use 1 charge to create a 30-ft radius swarm of flying insects that moves with me for 10 min., making area heavily obscured for all but me. A 10+ mph wind disperses it. 5% chance destroyed if last charge used.",
		descriptionFull : "This large, ebony crook is cold to the touch, and hard to focus on, seeming to desire to drift into shadow. It once belonged to the slaad lord, Ygorl, before it was stolen by a night hag. Ygorl has been searching for it ever since, intent on getting his revenge — no matter who should possess it.\n   " + toUni("Language") + ". The bearer can speak and understand Slaad while the item is on the bearer's person. This staff was present at the language's creation.\n   The staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
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
		magicItemTable : "H",
		description : "This aspen staff shines brightly in direct light. It's almost perfectly smooth & topped w/ a crown of silver lightning bolts that cradle a gleaming sapphire. The +2 quarterstaff has 5 special actions, each 1/dawn. 'Lightning'- when hit, 2d6 lightning. 'Thunder'- when hit, DC 17 Con or stunned(1 rd). 'Lightning Strike'- 5x120ft, DC 17 Dex, 9d6 lightning or 1/2. 'Thunderclap'- w/i 60ft, DC 17 Con or 2d6 thunder + deaf(1 min) (1/2 dmg on save). 'Thunder & Lightning'- LS & TC at same time.",
		descriptionFull : "This aspen staff shines brightly in direct light. The staff is almost perfectly smooth with a crown of silver lightning bolts atop it which cradle a gleaming sapphire. The staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.\n   " + toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.\n   " + toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.\n   " + toUni("Lightning Strike") + ". You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.\n   " + toUni("Thunderclap") + ". You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n   " + toUni("Thunder and Lightning") + ". You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
		attunement : true,
		weight : 4,
		action : [["action", "Staff of T\u0026L (Lightning Strike, Thunderclap, both)"]],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*thunder)(?=.*lightning).*$/i,
			name : "Staff of Thunder and Lightning",
			description : "Versatile (1d8); Lightning: 1/dawn, +2d6 lightning damage; Thunder: 1/dawn DC 17 Con save or 1 round stunned",
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
		magicItemTable : "H",
		description : "This giant-sized quarterstaff is shaped like a bolt of lightning, and automatically resizes to fit the hands of its wielder. The +2 quarterstaff has 5 special actions, each 1/dawn. 'Lightning'- when hit, 2d6 lightning. 'Thunder'- when hit, DC 17 Con or stunned(1 rd). 'Lightning Strike'- 5x120ft, DC 17 Dex, 9d6 lightning or 1/2. 'Thunderclap'- w/i 60ft, DC 17 Con or 2d6 thunder + deaf(1 min) (1/2 dmg on save). 'Thunder & Lightning'- Lightning Strike & Thunderclap at same time.",
		descriptionFull : "This giant-sized quarterstaff is shaped like a bolt of lightning, and automatically resizes to fit the hands of its wielder. The staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.\n   " + toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.\n   " + toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.\n   " + toUni("Lightning Strike") + ". You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.\n   " + toUni("Thunderclap") + ". You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n   " + toUni("Thunder and Lightning") + ". You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		action : [["action", "Staff of T\u0026L (Lightning Strike, Thunderclap, both)"]],
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*thunder)(?=.*lightning).*$/i,
			name : "Staff of Thunder and Lightning",
			description : "Versatile (1d8); Lightning: 1/dawn, +2d6 lightning damage; Thunder: 1/dawn DC 17 Con save or 1 round stunned",
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
		magicItemTable : "G",
		description: "This staff of lightweight wood is constantly surrounded by an unseen breeze. The winds whispers words of warning, granting a +2 bonus to initiative. Staff has 3 charges, regaining 1d3 at dawn and functions as magic quarterstaff. On a hit, I can expend 1 charge to deal an extra 2d10 necrotic damage to the target, who must make a DC 15 Con save or have disadv. on any ability check or save that uses Str or Con for 1 hour.",
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
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8); On hit, 1 charge for +2d10 necrotic damage and save, see magic item",
			selectNow : true,
			},
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." }
		},
	"staff of withering (ddal8-13)" : {
		name : "Staff of Withering (DDAL8-13)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This magic quarterstaff is made of human bones wrapped in mithral wire. When a charge is expended, my eyes alight w/ cosmetic black flames for a round. The staff has 3 charges, regaining 1d3 at dawn. On a hit, I can expend 1 charge to deal an extra 2d10 necrotic damage to the target, who must make a DC 15 Con save or have disadv. on any ability check or save that uses Str or Con for 1 hour.",
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
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8); On hit, 1 charge for +2d10 necrotic damage and save, see magic item",
			selectNow : true,
			},
		},
	"staff of withering: the inoculum (sj-dc-ven-2)" : {
		name : "The Inoculum, Staff of Withering (VEN-2)",
		source : [["AL","SJ-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This ironwood staff was used by the late Dr. Barnard Oschia. One end is sharpened like a scalpel while the other is curled into a closed loop. Vial-like containers are welded along the length of the staff. I wonder how many poisons and diseases were stored and dispensed using this tool. The staff has 3 charges, regaining 1d3 at dawn. On a hit, I can expend 1 charge to deal an extra 2d10 necrotic damage to the target, who must make a DC 15 Con save or have disadv. on any ability check or save that uses Str or Con for 1 hour.",
		descriptionFull : "The Inoculum – an ironwood staff once utilized by the late Dr. Barnard Oschia. One end has been sharpened akin to a scalpel while the other is curled into a closed loop. Vial-like containers are welded along the length of the staff. One can only wonder how many poisons and diseases have been stored and dispensed using this tool.\n   The staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		limfeaname : "Staff of Withering",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8); On hit, 1 charge for +2d10 necrotic damage and save, see magic item",
			selectNow : true,
			},
		},
	"staff of withering: positive prognosis (sj-dc-ven-2)" : {
		name : "Positive Prognosis, Staff of Withering (VEN-2)",
		source : [["AL","SJ-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "A staff of ironwood, its tip curled into a closed loop. Collection tubes run along the length of the staff so researchers can obtain samples while out in the field. The staff has 3 charges, regaining 1d3 at dawn. On a hit, I can spend 1 charge to deal an extra 2d10 necrotic damage to the target, who must make a DC 15 Con save or have disadv. on any ability check or save that uses Str or Con for 1 hour.",
		descriptionFull : "A staff of ironwood, its tip curled into a closed loop. Collection tubes run along the length of the staff so researchers can obtain samples while out in the field.\n   The staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
		attunement : true,
		allowDuplicates : true,
		weight : 4,
		prerequisite : "Requires attunement by a cleric, druid, or warlock",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
		limfeaname : "Staff of Withering",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*staff)(?=.*withering).*$/i,
			name : "Staff of Withering",
			description : "Versatile (1d8); On hit, 1 charge for +2d10 necrotic damage and save, see magic item",
			selectNow : true,
			},
		},
	"staff of the woodlands (ccc-bmg-moon12-1)" : {
		name : "Staff of the Woodlands (CCC-BMG-MOON12-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff adds +2 to spell atks. It's made from entwined snake-like branches, 1 brown & 1 bright green. Tiny leafed branches sprout from the top of the staff: half red & gold, & half spring green. With each use, the autumn leaves fall & sprout fresh green bark & new leaves, & the spring side turns to autumn colors. The staff has 10 charges to cast its spells (my save DC), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree. Action to change back.",
		descriptionLong : "This +2 quarterstaff adds a +2 to spell attack rolls. Two entwined snake-like branches comprise the stalk of the staff. One is brown and the other is bright green. The top of the staff sprouts tiny leafed branches, one side has red and gold autumn leaves and the other spring green. With each power used, the autumn leaves fall and sprout new green leaves and fresh green bark, while the green side turns brown and its green leaves turn to autumn colors. The staff has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "Two snake-like branches entwined together comprise the stalk of the staff. One is brown and the other is bright green. The top of the staff sprouts tiny limbs with equally tiny leaves, one side has red and gold autumn leaves and the other spring green. With each power that is used, the autumn leaves fall and begin to sprout new green leaves and fresh green bark, while the green side turns brown and its green leaves turn to autumn colors.\n   The staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands (ccc-gary-9)" : {
		name : "Staff of the Woodlands (CCC-GARY-9)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff adds +2 to spell atks & is made from unblemished maple wood topped with three small white flowers in bloom. The staff has 10 charges to cast its spells (my save DC), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree. Action to change back.",
		descriptionLong : "This +2 quarterstaff adds a +2 to spell attack rolls. It's made from unblemished maple wood topped with three small white flowers in bloom & has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "This staff is made from unblemished maple wood topped with three small white flowers in bloom. The staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands (ddal7-8/ddep7-1)" : {
		name : "Staff of the Woodlands (DDAL7-8/DDEP7-1)",
		source : [["AL","S7"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff adds a +2 bonus on spell atks. It's been trimmed to look like a smaller version of an immense Chultan jungle tree. There's even a small diorama of a tiny village in the upper reaches of the staff's branches - w/ tiny, string bridges connecting tiny, straw houses. The staff has 10 charges for its spells (my spell DC), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This +2 quarterstaff adds a +2 to spell attack rolls. It's been meticulously trimmed so it appears to be a smaller version of the immense jungle trees in Chult. There's even a small diorama of a tiny village in the upper reaches of the staff's branches — complete with tiny, string bridges connecting tiny, straw houses. It has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "This item has been meticulously trimmed and tended to in such a way that it appears to be a smaller version of one of the immense jungle trees in Chult. The staff's creator even went so far as to create a small diorama of what looks like a tiny village in the upper reaches of the staff's branches—complete with tiny, string bridges connecting tiny, straw houses. This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands: liwanag (wbw-dc-andl-3)" : {
		name : "Liwanag, Staff of the Woodlands (ANDL-3)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Made from a garden plant by Alindaya as a symbol of gratitude for my deeds, this +2 quarterstaff adds a +2 bonus on spell atks. The fireflies that guided me through Andelein illuminate the staff. With a bonus action, it sheds 10-ft bright light & 10-ft more dim, or stops. I can't get lost in Andelein as the fireflies will guide me where I wish to go. The staff has 10 charges for spells, regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This +2 quarterstaff adds a +2 to spell attack rolls. Alindaya created it from a plant in their garden as a symbol of gratitude for my heroic deeds. The fireflies that guided me through the Domain of Andelein illuminate this staff & can be called to guide me again. As a bonus action, I can make the staff shed bright light in a 10-ft radius & dim light for another 10 ft, or extinguish it. I can't get lost in Andelein as the fireflies will guide me wherever I wish to go. The staff has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "This staff was created by Alindaya from one of the plants in their garden as a symbol of gratitude for your heroic deeds. The same fireflies that guided you through parts of the Domain of Andelein, and back home, illuminate this staff, and can be called to guide you once again. The wielder of this staff cannot get lost in Andelein as the fireflies will guide them to wherever they wish to go in that domain.\n   In addition, this staff has the Beacon minor property: The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"], ["bonus action", " (light/dim)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponOptions : {
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*liwanag)(?=.*staff)(?=.*woodlands).*$/i,
			name : "Liwanag, Staff of the Woodlands",
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
	"staff of the woodlands: temperate (wbw-dc-conmar-6)" : {
		name : "Temperate Staff of the Woodlands (CONMAR-6)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff adds a +2 bonus on spell atks. The braid of bone ends in antlers emerging from a nest of oak leaves & acorns. It's warm to the touch & smells of rich earth. (If I fought the Childe) The staff was once infused with the glow of Turanok's love for his daughter, now gone after she wielded it against him. A shadow of its former self, the staff holds a sliver of nature's power. I suffer no harm in temps from -20\u00B0F to 120\u00B0F. The staff has 10 charges for spells, regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This +2 quarterstaff adds a +2 to spell attack rolls. The braid of bone ends with antlers emerging from a nest of oak leaves & acorns. It's warm to the touch & smells of rich earth. (If I fought the Childe) The staff was once infused with the searing glow of Turanok's love for his daughter, now gone after she wielded it against him. A shadow of its former self, the staff still holds a sliver of nature's power. While attuned, I suffer no harm in temperatures from -20 to 120 degrees Fareneheit. It has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "This staff is a braid of bone that ends with antlers emerging from a nest of oak leaves and acorns. It feels warm to the touch, and it smells of the rich earth of Lohringar. If the characters fought the Childe, add the following: This staff was once infused with the searing glow of Turanok's love for his daughter, now gone after she wielded it against him. Though it is now a shadow of its former self, the staff still holds a sliver of nature's power.\n   The staff feels warm to the touch, or cool, depending on the weather, as if it regulates the temperature around you. This staff has the temperate minor property from page 148 of the Dungeon Master's Guide. While attuned to this staff, you suffer no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands (wbw-dc-havn-1)" : {
		name : "Staff of the Woodlands (WBW-DC-HAVN-1)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This quarterstaff, once gnarled & sickly, now sprouts with bioluminescent flowers. As a bonus action, the flowers glow with a beautiful blue light that sheds 10 ft bright light & another 10 ft dim, or stop. The +2 staff also adds +2 to spell atk rolls & has 10 charges for its spells (see sheet), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This staff, once gnarled and sickly, now sprouts with flowers after being dipped in the poison cure. The flowers are bioluminescent and can be made to glow with a beautiful blue light as a bonus action. When glowing, it sheds 10 ft bright light & 10 ft dim. The +2 quarterstaff adds +2 to spell attack rolls & has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "This staff, once gnarled and sickly, now sprouts with flowers and growth after having been dipped in the poison cure. The flowers are bioluminescent and can be made to glow with a beautiful blue light.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"], ["bonus action", " (light/dim)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands: guardian (wbw-dc-hh-2)" : {
		name : "Guardian Staff of the Woodlands (HH-2)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff adds +2 to spell atk rolls & grants +2 bonus to initiative unless incapacitated. Crafted by the Lady of The Lake herself from the oldest tree in Monster Timberland & imbued by the power of the forest, it's given to those who pass the Trial of Flower. The staff has 10 charges for its spells (see sheet), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "Crafted by the Lady of The Lake herself, this staff is made from the branch of the oldest tree in Monster Timberland and imbued by the power of the forest. Gifted to those who passed the Trial of Flower. This +2 quarterstaff adds +2 to spell attack rolls & whispers warnings, granting a +2 bonus to initiative unless incapacitated. It has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "Crafted by the Lady of The Lake itself, this staff is made from the branch of the oldest tree in Monster Timberland and imbued by the power of the forest itself. Instruct by the Lady to the Guardian to hand the staff to those who passed the Trial of Flower.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
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
	"staff of the woodlands (wbw-dc-idl1)" : {
		name : "Staff of the Woodlands (WBW-DC-IDL1)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 staff adds +2 to spell atks & plays a song fragment when it strikes. A Sylvan rhyme is carved into it: “1 for Sorrow, 2 for Joy/3 For a Girl, 4 for Boy/5 for Silver, 6 for Gold/7 for a Secret Never to be Told.” Turned upsidedown, it reads: “1 for Sorrow, 2 for Mirth/3 For a Funeral, 4 for Birth/5 for Heaven, 6 for Hell/7 for the Devil, His Own Self.” The staff has 10 charges for its spells (see sheet), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This +2 quarterstaff adds +2 to spell atks & I hear a fragment of an ancient song about birds when it strikes. There's a Sylvan counting rhyme carved along its length: “One for Sorrow, Two for Joy/Three For a Girl, Four for Boy/Five for Silver, Six for Gold/Seven for a Secret Never to be Told.” When turned upsidedown, it reads: “One for Sorrow, Two for Mirth/Three For a Funeral, Four for Birth/Five for Heaven, Six for Hell/Seven for the Devil, His Own Self.” The staff has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
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
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands (wbw-dc-php-lcl-1)" : {
		name : "Staff of the Woodlands (WBW-DC-PHP-LCL-1)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 oak staff adds +2 to spell atks & has a bouquet of golden lilies at its top. I can change the color of the lilies as an action, reverting back at dawn. The staff has 10 charges for its spells (see sheet), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree. The tree has golden leaves & emits a pleasant floral scent.",
		descriptionLong : "This +2 quarterstaff adds +2 to spell atks & is made of oak. At its top is a bouquet of golden lilies. I can change the color of the lilies as an action, but they revert back at dawn. The staff has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff. In its tree form, the leaves are golden and emits a pleasant, floral scent.",
		descriptionFull : "This staff is made of oak and on its top lies a bouquet of golden lilies. You can use an action to change the color of the lilies, but it reverts back to its original color at dawn. In its tree form, the leaves are golden and emits a pleasant, floral scent.\n   " + toUni("Language") + ". The bearer can speak and understand Sylvan while the item is on the bearer's person.\n   It can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you also have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		languageProfs : ["Sylvan"],
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands: hope's emissary (wbw-dc-rook-3-2)" : {
		name : "Hope's Emissary (Staff of the Woodlands)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 white wood staff adds +2 to spell atks & once belonged to Valmoira Hopeblossom. It was loaned to the ruler of Cnocglen, who vowed to keep it safe until her return. The staff is carved top to bottom with images of rare animals & plants, & unlocks employee doors within the Rookery, including the Visitor's Center, the Observatory & the Engineworx. The staff has 10 charges for its spells (see sheet), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This +2 white wood quarterstaff adds +2 to spell atks. It once belonged to Valmoira Hopeblossom herself & was loaned to the ruler of Cnocglen, who vowed to keep it safe until her return. The staff is carved top to bottom with images of rare animals & plants, & unlocks employee doors within the Rookery, including the Visitor's Center, the Observatory & the Engineworx. The staff has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "This white wood staff once belonged to Valmoira Hopeblossom herself. It was loaned to the ruler of Cnocglen, who vowed to keep it safe until her return. It is carved, top to bottom, with images of rare animals and plants.\n   " + toUni("Key") + ". This staff unlocks employee doors within the Rookery. This includes original doors in the Visitor's Center, the Observatory, and within the Engineworx, far below the surface.\n   It can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you also have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands: sunlit (wbw-dc-sunlit-6)" : {
		name : "Staff of the Sunlit Woodlands (Sunlit-6)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff adds a +2 bonus on spell atks & lets me use an action to learn which way is north. The staff has 10 charges for its spells (see spell sheet), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This +2 quarterstaff adds +2 to spell attack rolls & I can use an action to learn which way is north. It has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "Minor property Compass. The wielder can use an action to learn which way is north.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"],["action", " (North)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands: delver's (wbw-dc-zep-t2s2)" : {
		name : "Delver's Staff of the Woodlands (ZEP-T2S2)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff adds +2 to spell atk rolls & while underground, I always know my depth below the surface & the direction to the nearest path leading upward. The staff has 10 charges for its spells (see spells sheet), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & expend 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This +2 quarterstaff adds +2 to spell attack rolls & while underground, I always knows my depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward. The staff has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	"staff of the woodlands: dragon's seed (wbw-dc-zodiac-5)" : {
		name : "Dragon's Seed (Staff of the Woodlands)",
		source : [["AL","WBW-DC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This +2 quarterstaff is shaped & weaved from the scales of an amethyst dragon and encrusted with sea gemstones. It adds a +2 bonus on spell atks & +2 initiative unless incapacitated. The staff has 10 charges (see spells sheet), regaining 1d6+4 at dawn, 5% chance of losing magic when last charge used. As an action, plant it into the ground & use 1 charge to grow it into a 60 ft tree.",
		descriptionLong : "This +2 quarterstaff is shaped & weaved from the scales of an amethyst dragon & encrusted with sea gemstones. It adds +2 to spell attack rolls & whispers warnings, granting a +2 bonus to initiative unless incapacitated. It has 10 charges, regaining 1d6+4 at dawn. If the last charge is used, roll a d20. On a 1 it turns nonmagical. As an action, expend charges to cast 1 of these spells using my DC: Pass Without Trace (0 charges), Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). I can also use 1 charge & an action to plant the staff in fertile earth & turn it into a 60 ft tree. It has a 5-ft-diameter trunk & a 20-ft radius of branches at the top. Speak the command word (action) while touching the tree to return it to a staff.",
		descriptionFull : "A staff shaped and weaved from the scales of an amethyst dragon and encrusted with sea gemstones. Guardian Minor Property: The item roars a warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
		attunement : true,
		weight : 4,
		prerequisite : "Requires attunement by a druid",
		prereqeval : function(v) { return classes.known.druid ? true : false; },
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		limfeaname : "Staff of the Woodlands",
		action : [["action", " (grow/revert)"]],
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
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
	choices : ["Ascendant Amethyst Dragon's Wrath Longsword: The First Sword (PO-BK-3-11)","Crystal Rapier (BMG-DRW-OD-5)","Crystal Rapier (PO-BK-4-1)","Dancing Longsword: Antgaladion (WBW-DC-AA-ASHALON-1)","Dancing Rapier: Angel's Sting (CCC-GHC-BK1-10)","Dancing Rapier: Raptor (CCC-LINKS-2)","Defender Greatsword: Deathshield (DDAL9-20)","Dragon Slayer: Wyrmripper (DDEP5-1)","Flame Tongue Longsword: Velahr'kerym (DDAL0-2D)","Flame Tongue Longsword (DDAL-DRW13)","Flame Tongue Shortsword: Flare (CCC-WYC-1-2)","Flame Tongue Sword (CCC-YLRA-2)","Frost Brand Greatsword (SJ-DC-NOS-4)","Frost Brand Greatsword: Quintessence's Edge (SJ-DC-WINE-1)","Frost Brand Longsword: Blade of Aaqa (SJ-DC-AUG-9)","Frost Brand Rapier: Bitter Wrath (DDAL7-9)","Frost Brand Rapier: Familiar's (SJ-DC-ZODIAC-14-3)","Frost Brand Scimitar (DDEP5-2)","Frost Brand Shortsword: Frostbite Cryo Katana (SJ-DC-DD-11)","Giant Slayer Greatsword (DDEP5-2)","Greatsword of Sharpness: Desolation (DDAL8-14)","Greatsword of Warning: Ever Vigilant (CCC-BMG-MOON3-3)","Greatsword of Wounding (DDEX2-15)","Longsword of Vengeance (CCC-BMG-MOON15-2)","Longsword of Vengeance (CCC-GARY-8)","Longsword of Vengeance (CCC-HATMS1-2)","Longsword of Vengeance (CCC-MACE1-3)","Moon-Touched Greatsword (DDAL-DRW17)","Moon-Touched Longsword (BMG-DRW-OD-1)","Moon-Touched Longsword (CCC-GHC-BK1-1)","Moon-Touched Longsword (CCC-TAROT2-6)","Moon-Touched Longsword (DDAL0-11D)","Moon-Touched Rapier (CCC-GAD2-1)","Moon-Touched Rapier (CCC-SAC-4)","Moon-Touched Rapier (CCC-UNITE-5)","Moon-Touched Scimitar: Moonmaiden's Blade (FR-DC-STRAT-DRAGON-1)","Moon-Touched Shortsword (DC-POA-CONMAR-9)","Moon-Touched Shortsword (DC-POA-DES-5B)","Moon-Touched Shortsword (DC-POA-GSP2-3H)","Moon-Touched Shortsword: Fang (DC-POA-GSP3-2)","Moon-Touched Shortsword (DC-POA-JCDC-1)","Moon-Touched Shortsword (DC-POA-MCWWS-2)","Moon-Touched Shortsword: Tsukuyomi (DC-POA-TDG1-3)","Moon-Touched Shortsword: Blade of the Black Tortoise (DC-POA-VAN-MT-1)","Moon-Touched Shortsword: Green Dragon Gladius (DC-POA-VAN-MT-1)","Moon-Touched Shortsword: Red Phoenix Falchion (DC-POA-VAN-MT-1)","Moon-Touched Shortsword: White Tiger Tulwar (DC-POA-VAN-MT-1)","Moon-Touched Sword (CCC-BMG-MOON6-2)","Moon-Touched Sword (CCC-BMG-MOON10-2)","Nine Lives Stealer Longsword: Love's Bite (DDAL7-11)","Nine Lives Stealer Scimitar (CCC-QCC2018-1)","Rapier of Life Stealing (CCC-PDXAGE-2-1)","Scimitar of Life Stealing: Night Cutter (CCC-RCC-1-4)","Scimitar of Life Stealing: Krakenfang (PO-BK-3-7)","Scimitar of Speed: Deceiver (SJ-DC-DFA-3)","Scimitar of Speed: Radiance's Glare (SJ-DC-PHP-LRD-1)","Scimitar of Speed (SJ-DC-TRIDEN-MYKE-2)","Scimitar of Speed: Beam (SJ-DC-VMT-1)","Scimitar of Speed: Manthor “Vow of the Forest” (WBW-DC-ANDL-3)","Scimitar of Speed: Bregrist (WBW-DC-TREY-1)","Scimitar of Speed: Dread Cutlass (SJ-DC-DWR-3)","Scimitar of Warning: Miir (CCC-BWM-4-1)","Sun Blade: The Seventh Sword (CCC-6SWORDS-1)","Sun Blade: Dawnfire (CCC-STORM-1)","Sun Blade (CCC-WYC-2-2)","Sun Blade: Starshard (RMH-12)","Sun Blade: Scintilmorn (WDotMM)","Sword of Vengeance (CCC-SAF2-2)","Sword of Wounding (DDAL-CGB)","Vicious Longsword (CCC-HATMS2-1)","Vicious Rapier: Hag's Clawblade (AL:SA-11A)","Vorpal Scimitar (DDAL7-16)","Vorpal Scimitar: Abi Teos's Machete (RMH-9/RMH-10)"],
	"ascendant amethyst dragon's wrath longsword: the first sword (po-bk-3-11)" : {
		name : "The First Sword, Ascendant DW Longsword",
		source : [["AL","PO"]],
		rarity : "rare",
		attunement : true,
		description : "This sword's blade is inlaid with amethyst draconic runes. The grip is a coiled snake with the pommel as its head. Recovered mariliths after centuries in an amethyst dragon’s hoard, it became the first blade of champions such as Shaktari herself. It adds +3 to atk and dmg rolls and deals +3d6 Force. On a 20, any creature in 5ft of target take 5 Force. As an action once/dawn, 60-ft cone, Dex DC 18 half, 12d6 Force.",
		descriptionLong : "The wide blade of this exquisite longsword is inlaid with draconic runes of amethyst. Its grip is fashioned in the shape of a coiled snake, with the pommel as its head. The sword was initially created by yuan-ti smiths on the plane of Vudra. The mundane blade was lost by its wielder during a failed conquest of a dragon-ruled realm. It gained its magic over centuries of languishing in an amethyst dragon’s hoard, before being recovered by a raid of conquering mariliths. The mariliths returned it to their home plane of Vudra, where it was often used as the first blade of its greatest champions, including — legends say — Shaktari herself. It adds +3 to its attack and damage rolls and deals +3d6 force damage. On a 20 to hit, each creature of my choice in 5 ft of the target take 5 Force. As an action once per dawn, I can do a 60-ft cone, Dex DC 18 half, 12d6 force damage dragon breath.",
		descriptionFull : "The wide blade of this exquisite weapon is inlaid with draconic runes of violet amethyst. Its grip is fashioned in the shape of a coiled snake, with the pommel as its head."+
		"\n   The sword was initially created by yuan-ti smiths on the plane of Vudra. As a mundane blade, it was then lost by its wielder during a failed conquest of a dragon-ruled realm. It gained its magic over centuries of languishing in an amethyst dragon’s hoard, before being recovered by a raid of conquering mariliths. The mariliths returned it to their home plane of Vudra, where it was often used as the first blade of its greatest champions, including — legends say — Shaktari herself."+
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
			name : "The First Sword, Amethyst Longsword",
			regExpSearch : /the first sword, amethyst wrath longsword/i,
			source : [["AL","PO"]],
			description : "Versatile (1d10); +3d6 force dmg; on a 20, 5 force dmg to any creature in 5ft",
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
			description : "Hits all in area; Dex save, success - half damage; Usable only once per dawn",
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
		description : "This rapier's hilt is made of an exquisite dark wood, carved with a Thayan inscription that translates to “Don’t forget who you are.” The sword has 3 charges, regaining 1d3 at dawn, and deals +1d8 Radiant damage. When it hits a creature, I can use 1 charge to heal for that extra amount. As a bonus action, the sword starts or stops shedding light: 30 ft bright light and 30 ft dim, or 10 ft dim.",
		descriptionFull : "This rapier's hilt is made of an exquisite dark wood, carved with a Thayan inscription that translates to “Don’t forget who you are.”"+
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
			description : "Finesse; +1d8 radiant damage; 1 charge to heal",
			selectNow : true,
			},
		},
	"crystal rapier (po-bk-4-1)" : {
		name : "Crystal Rapier (PO-BK-4-1)",
		source : [["AL","PO"]],
		rarity : "rare",
		attunement : true,
		description : "A gift of appreciation from Nort Gravern, this rapier's blade was made from a crystal dragon's horn. It was in the family for generations & when it strikes a foe, I hear a fragment of a macabre poem by Haxan Kane. The sword has 3 charges, 1d3 regained at dawn, & deals +1d8 Radiant. On hitting a creature, I can use 1 charge to heal for the Radiant amt. As bonus action, sword starts/stops emitting 30ft bright light and 30ft dim, or 10ft dim.",
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
			description : "Finesse; +1d8 radiant damage; 1 charge to heal",
			selectNow : true,
			},
		},
	"dancing longsword: antgaladion (wbw-dc-aa-ashalon-1)" : {
		name : "Antgaladion, Dancing Sword (AA-ASHALON-1)",
		source : [["AL","WBW-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "The blade of this elegantly curved elven longsword is made of the sharpest & coldest ice from the domain of Aesandoral the Ice Lord. Quick as the blizzard winds, I can attune in 1 min. As a bonus action, toss the sword & use the command “Long may winter reign” to make it hover, fly up to 30 ft & atk a target of my choice (as if used by me). I can command it to move/attack again as a bonus action while within 30 ft. After the 4th atk, it moves 30 ft to return to my hand.",
		descriptionLong : "The blade of this elegantly curved elven longsword is made of the sharpest and coldest ice from the domain of Aesandoral the Ice Lord. As quick as the blizzard winds, it only takes 1 minute to attune. As a bonus action, I can toss the sword into the air & use the command “Long may winter reign” to make it hover, fly up to 30 ft & atk a target of my choice. The atk uses my atk roll & ability score for dmg as if I'm using the sword. I can command it to move & atk again as a bonus action while it hovers. After the 4th atk, it moves 30 ft to try & return to my hand. If it can't reach me or my hands are full, it falls to the ground after moving. It also stops hovering if I grasp it or move more than 30 ft away.",
		descriptionFull : "The blade of this elegantly curved elven longsword is made of the sharpest and coldest ice from the domain of Aesandoral the Ice Lord. As quick as the blizzard winds, it only takes one minute to attune. Its name is inscribed on its blade in Sylvan. Its command phrase is “Long may winter reign.”\n   You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls.\n   While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.\n   After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.",
		action : [["bonus action", "Dancing Sword"]],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*antgaladion).*$/i,
			name : "Antgaladion, Dancing Longsword",
			description : "Versatile; Attacks on its own as a bonus action",
			selectNow : true,
			},
		},
	"dancing rapier: angel's sting (ccc-ghc-bk1-10)" : {
		name : "Angel's Sting, Dancing Rapier (GHC-BK1-10)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "While possessing this rapier, I feel fortunate & optimistic about the future. Butterflies & other harmless creatures frolic in my presence. As a bonus action, toss the sword and use the command word to make it hover, fly up to 30 ft and attack a target of my choice (as if by me). I can command it to move and attack again as a bonus action while within 30 ft. After the 4th attack, it moves up to 30 ft to return to my hand.",
		descriptionLong : "While in possession of this sword, I feel fortunate & optimistic about the future. Butterflies & other harmless creatures frolic in my presence. As a bonus action, I can toss the sword into the air & use the command word to make it hover, fly up to 30 ft & atk a target of my choice. The atk uses my atk roll & ability score for dmg as if I'm using the sword. I can command it to move & atk again as a bonus action while it hovers. After the 4th atk, it moves 30 ft to try & return to my hand. If it can't reach me or my hands are full, it falls to the ground after moving. It also stops hovering if I grasp it or move more than 30 ft away.",
		descriptionFull : "While in possession of this item, the bearer feels fortunate and optimistic about what the future holds. Butterflies and other harmless creatures might frolic in the item's presence.\n   You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls.\n   While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.\n   After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.",
		action : [["bonus action", "Dancing Sword"]],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*angel's)(?=.*sting).*$/i,
			name : "Angel's Sting, Dancing Rapier",
			description : "Finesse; Attacks on its own as a bonus action",
			selectNow : true,
			},
		},
	"dancing rapier: raptor (ccc-links-2)" : {
		name : "Raptor, Dancing Rapier (CCC-LINKS-2)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "Fulton Stormweather was a swashbuckling wizard before being trapped in the Feywild. His bonded rapier, “Raptor”, was the target of his spells and developed a hint of personality. It gives a keening cry like a hunting raptor when it lands a killing blow and makes me more confident. As a bonus action, toss the sword and use command to make it hover, fly up to 30 ft and atk target of my choice (as if by me). I can command it to move and attack again as a bonus action while in 30 ft. After the 4th atk, it moves up to 30 ft to return to my hand.",
		descriptionLong : "Fulton Stormweather enjoyed a successful career as a swashbuckling wizard for years before being trapped in the Feywild. His bonded rapier, “Raptor”, became the target of his enchantment effects & developed a hint of personality over time. It makes a keening cry like that of a hunting raptor when landing a killing blow & its attuned bearer feels more confident. As a bonus action, I can toss the sword into the air & use the command word to make it hover, fly up to 30 ft & atk a target of my choice. The atk uses my atk roll & ability score for dmg as if I'm using the sword. I can command it to move & atk again as a bonus action while it hovers. After the 4th atk, it moves 30 ft to try & return to my hand. If it can't reach me or my hands are full, it falls to the ground after moving. It also stops hovering if I grasp it or move more than 30 ft away.",
		descriptionFull : "Fulton Stormweather enjoyed a successful career as a swashbuckling wizard for many years before becoming trapped in the Feywild. His bonded weapon, a rapier named “Raptor”, became the target of his enchantment effects. Over time, it seemingly developed a hint of a personality. Its attuned bearer feels more confident, and it makes a keening cry like that of a hunting raptor when landing a killing blow on an enemy.\n   You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls.\n   While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.\n   After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.",
		action : [["bonus action", "Dancing Sword"]],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*raptor).*$/i,
			name : "Raptor, Dancing Rapier",
			description : "Finesse; Attacks on its own as a bonus action",
			selectNow : true,
			},
		},
	"defender greatsword: deathshield (ddal9-20)" : {
		name : "Deathshield, Defender Greatsword (DDAL9-20)",
		source : [["AL","S9"]],
		type : "weapon (any sword)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		description : "This defender greatsword is made out of crude black iron. Inscribed upon the blade in Abyssal is the name “Deathshield.” I have a +3 bonus to atk & dmg rolls made with this magic sword. The 1st time I attack with it on each of my turns, I can transfer (part of) the bonus to AC instead. This AC adjustment remains in affect until my next turn, although I must be holding the sword to gain it.",
		descriptionFull : "This defender is a greatsword and is made out of crude black iron. Inscribed upon the blade in Abyssal is the name “Deathshield.” You gain a +3 bonus to attack and damage rolls made with this magic weapon.\n   The first time you attack with the sword on each of my turns, you can transfer some or all of the sword's bonus to my Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to my attack and damage rolls to +1 and gain a +2 bonus to AC. The adjusted bonuses remain in effect until the start of my next turn, although you must hold the sword to gain a bonus to AC from it.",
		weaponsAdd : { select : "Deathshield, Defender Greatsword", options : ["Deathshield, Defender Greatsword"] },
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
		rarity : "rare",
		magicItemTable : "G",
		description : "Made of what appears to be roughly crafted pig iron with a crude leather haft, this enormous greatsword possesses a bold Davek rune at the base of both sides of the blade which reads “Wyrmripper”. I have a +1 bonus to attack and damage rolls made with this magic sword. When I hit a creature of the dragon type with this sword, it does 3d6 extra damage.",
		descriptionFull : "Made of what appears to be roughly crafted pig iron with a crude leather haft, this enormous greatsword possesses a bold Davek rune at the base of both sides of the blade which reads “Wyrmripper”. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n  When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon's type. For the purpose of this weapon, \"dragon\" refers to any creature with the dragon type, including dragon turtles and wyverns.",
		weaponsAdd : { select : "Wyrmripper, Dragon Slayer Greatsword", options : ["Wyrmripper, Dragon Slayer Greatsword"] },
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
		type : "weapon (longsword)",
		magicItemTable : "G",
		rarity : "rare",
		description : "Delicate blue flames dance along this magic longsword when drawn. It's crafted of mithril w/ a beautiful ironwood hilt. The crossguard, blade & hilt are worked w/ a forest motif inlaid w/ shining emeralds & platinum filigree. As a bonus action, say command word to make flames erupt from the blade. While lit, it deals +2d6 fire dmg per hit, shedding bright light in a 40-ft radius & dim light for 40-ft more. The flames last until I say the command word again (bonus action) or I drop/sheathe the sword.",
		descriptionFull : "This longsword is crafted of mithril with a beautiful hilt of carved ironwood. The crossguard, blade, and hilt are worked through with a forest motif inlaid with shining emeralds and platinum filigree. Delicate blue flames dance along the blade whenever it is drawn from its scabbard.\n   You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
		action : [["bonus action", "Velahr'kerym (activate/end)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*velahr'kerym).*$/i,
			name : "Velahr'kerym, Flame Tongue Longsword",
			description : "Versatile (d10); While active, +2d6 fire damage.",
			selectNow : true,
			},
	},
	"flame tongue longsword (ddal-drw13)" : {
		name : "Flame Tongue Longsword (DDAL-DRW13)",
		source : [["AL","DRW"]],
		type : "weapon (longsword)",
		magicItemTable : "G",
		rarity : "rare",
		description : "This steel blade is covered in a distinctive pattern of banding & mottling reminiscent of flowing water. These patterns shift & change slowly over time. As a bonus action, say the command word to make flames erupt from the blade. While lit, it deals +2d6 fire dmg per hit, shedding bright light in a 40-ft radius & dim light for 40-ft more. The flames last until I say the command word again (bonus action) or I drop/sheathe the sword.",
		descriptionFull : "This crucible steel blade is covered in a distinctive pattern of banding and mottling reminiscent of flowing water. These patterns shift and change slowly over time.\n   You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
		action : [["bonus action", "Flame Tongue (activate/end)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*flame)(?=.*tongue).*$/i,
			name : "Flame Tongue Longsword",
			description : "Versatile (d10); While active, +2d6 fire damage.",
			selectNow : true,
			},
	},
	"flame tongue shortsword: flare (ccc-wyc-1-2)" : {
		name : "Flare, Flame Tongue Shortsword (WYC-1-2)",
		source : [["AL","CCC"]],
		type : "weapon (shortsword)",
		magicItemTable : "G",
		rarity : "rare",
		description : "This shortsword is made of molten steel but finds its shape right before it strikes its target. While attuned, I'm comfortable in temps from 20\u00B0F to 120\u00B0F. As a bonus action, say the command word (‘devastation' in Terran) to make flames erupt from the blade. While lit, it deals +2d6 fire dmg per hit, shedding bright light in a 40-ft radius & dim light for 40-ft more. The flames last until I say the command word again (bonus action) or I drop/sheathe the sword.",
		descriptionFull : "This shortsword appears to be made of molten steel that seems to find its way to shape right before it strikes its target. While attuned to this sword, you feel comfortable in temperatures as low as 20 degrees below zero Fahrenheit and as high as 120 degrees above zero Fahrenheit.\n   You can use a bonus action to speak this magic sword's command word (‘devastation' in Terran), causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
		savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
		action : [["bonus action", "Flare (activate/end)"]],
		weaponOptions : {
			baseWeapon : "shortsword",
			regExpSearch : /^(?=.*flare).*$/i,
			name : "Flare, Flame Tongue Shortsword",
			description : "Finesse; Light; While active, +2d6 fire damage.",
			selectNow : true,
			},
	},
	"flame tongue sword (ccc-ylra-2)" : {
		name : "Flame Tongue Sword (CCC-YLRA-2)",
		source : [["AL","CCC"]],
		type : "weapon (any sword)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This magic sword was crafted for me by the expert smiths at the Emberstar Exchange to my specifications. As a bonus action, I can say the command word to ignite it, emitting bright light in a 40-ft radius & dim light for 40-ft more. While ablaze, the sword deals +2d6 fire dmg per hit. The flames last until I speak the command again as a bonus action or sheathe it.",
		descriptionFull : "This weapon was crafted for you by the expert smiths at the Emberstar Exchange to your specifications. You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
		action : [["bonus action", "Flame Tongue (activate/end)"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Flame Tongue"],
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*flame)(?=.*tongue).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'While active, +2d6 fire damage';
					}
				},
				'If I include the words "Flame Tongue" in a the name of a sword, it will be treated as the magic weapon Flame Tongue. When the command word is spoken, the blade erupts with flames, adding +2d6 fire damage on a hit and shining light.'
			]
		}
	},
	"frost brand greatsword (sj-dc-nos-4)" : {
		name : "Frost Brand Greatsword (SJ-DC-NOS-4)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "While this magic greatsword is on my person, I can speak Deep Speech. The sword also adds +1d6 cold dmg per hit and grants fire resistance. In freezing temperatures, it sheds bright light in a 10-ft radius and dim light for 10 ft more. Once per hour when I draw the blade, I can extinguish all nonmagical flames in 30 ft.",
		descriptionFull : "When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.\n   " + toUni("Language") + ". The bearer can speak, read and understand Deep Speech while the item is on the bearer's person. ",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		languageProfs : ["Deep Speech"],
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*quintessence|quintessence's)(?=.*edge).*$/i,
			name : "Quintessence's Edge, Frost Brand Greatsword",
			description : "Heavy, two-handed; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"frost brand greatsword: quintessence's edge (sj-dc-wine-1)" : {
		name : "Quintessence's Edge, Frost Brand Greatsword",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "This storm silver magic greatsword shimmers with icy blue runes; etchings of grapevines wrap the hilt. The blade crackles with electricity on each strike & shocks me as a warning, giving +2 initiative if not incapacitated. It also adds +1d6 cold dmg per hit & grants fire resistance. In freezing temperatures, it sheds bright light in a 10-ft radius & dim light for 10 ft more. Once per hour when I draw the blade, I can extinguish all nonmagical flames in 30 ft.",
		descriptionFull : "The storm silver blade shimmers with icy blue runes; etchings of grapevines are wrapped about the hilt. The blade crackles with electricity with every strike.\n   " + toUni("Guardian") + ". The item crackles and electrically shocks a warning to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /^(?=.*quintessence|quintessence's)(?=.*edge).*$/i,
			name : "Quintessence's Edge, Frost Brand Greatsword",
			description : "Heavy, two-handed; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"frost brand longsword: blade of aaqa (sj-dc-aug-9)" : {
		name : "Blade of Aaqa, Frost Brand Longsword (AUG-9)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "A sacred relic of the lizardfolk hunters on the gas giant Coliar, the Blade of Aaqa is freezing to the touch. Once my hand acclimates, the all-metal grip feels one with my flesh. The blade adds +1d6 cold dmg per hit & grants fire resistance. In freezing temperatures, it sheds bright light in a 10-ft radius & dim light for 10 ft more. Once per hour when I draw the blade, I can extinguish all nonmagical flames in 30 ft. While underground, I know my depth below the surface & the direction to the nearest path upward.",
		descriptionFull : "Considered a sacred relic by the lizardfolk hunters of the gas giant planet Coliar, the Blade of Aaqa is initially freezing to the touch but the wielder's hand quickly acclimates, and it feels as if the all-metal grip becomes one with flesh.\n   " + toUni("Delver") + ". While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*blade)(?=.*aaqa).*$/i,
			name : "Blade of Aaqa, Frost Brand Longsword",
			description : "Versatile (d10); +1d6 cold damage",
			selectNow : true,
			},
		},	
	"frost brand rapier: bitter wrath (ddal7-9)" : {
		name : "Bitter Wrath, Frost Brand Rapier (DDAL7-9)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "This extraordinary weapon is made from a single piece of ice with a pommel wrapped in braided leaves. If wielded in temperatures > 90 ̊ F, rivulets of water run down the blade, soaking my hand, but it never melts away. The magic sword adds +1d6 cold dmg per hit & grants fire resistance. In freezing temperatures, it sheds bright light in a 10-ft radius & dim light for 10 ft more. Once per hour when I draw the blade, I can extinguish all nonmagical flames in 30 ft.",
		descriptionFull : "This extraordinary weapon is crafted from a single piece of ice with a pommel wrapped in braided leaves. If wielded in temperatures in excess of 90 degrees, rivulets of water run down its blade—soaking the hand holding it. Despite this, it never melts away.\n   When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*bitter)(?=.*wrath).*$/i,
			name : "Bitter Wrath, Frost Brand Rapier",
			description : "Finesse; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"frost brand rapier: familiar's (sj-dc-zodiac-14-3)" : {
		name : "Familiar's Frost Brand Rapier (ZODIAC-14-3)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "This dark blade shimmers and shifts as if displaced with reality, emanating an icy mist. It also whispers warnings, giving +2 initiative unless incapacitated. The sword adds +1d6 cold dmg per hit and grants fire resistance. In freezing temperatures, it sheds bright light in a 10-ft radius and dim light for 10 ft more. Once per hour when I draw the blade, I can extinguish all nonmagical flames in 30 ft.",
		descriptionFull : "The dark blade shimmers and shifts as if displaced with reality, the displacement causes an icy mist to emanate.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*familiar|s)(?=.*frost)(?=.*brand)(?=.*rapier).*$/i,
			name : "Familiar's Frost Brand Rapier",
			description : "Finesse; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"frost brand scimitar (ddep5-2)" : {
		name : "Frost Brand Scimitar (DDEP5-2)",
		source : [["AL","S5"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "The Red Baron of Nelanther awarded these rime-coated scimitars to his most favored pirates. The magic sword adds +1d6 cold damage to each hit & grants resistance to fire. In freezing temperatures, it sheds bright light in a 10-ft radius & dim light for an additional 10 ft. Once per hour when I draw the blade, I can extinguish all nonmagical flames within 30 ft.",
		descriptionFull : "The Red Baron of Nelanther awarded these rime-coated scimitars to his most favored pirates. When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar)(?=.*brand)(?=.*frost).*$/i,
			name : "Frost Brand Scimitar",
			description : "Finesse; Light; +1d6 cold damage",
			selectNow : true,
			},
		},
	"frost brand shortsword: frostbite cryo katana (sj-dc-dd-11)" : {
		name : "Frostbite, Cryo Katana (Frost Brand, DD-11)",
		source : [["AL","SJ-DC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "This ancient 8-in adamantine rod has decorative mithral plates & bands and can be attuned to in 1 min. A hollow recess housing a sliver of unmelting polar ice is ringed by a circular guard & a metal cap engraved with “FR057-B173”. Twist the cap clockwise to condense ambient moisture into a faintly glowing curved blade of bluish frost. Twist the other way to sheathe it. The blade adds +1d6 cold dmg per hit & grants fire resistance. In freezing temperatures, it sheds bright light in a 10-ft radius & dim light for 10 ft more. Once per hour when I draw the blade, I can extinguish all nonmagical flames in 30 ft. ",
		descriptionFull : "This weapon initially appears to be an adamantine rod some 8-inches long and an inch thick adorned with decorative mithral plates and bands. It has a hollow recess ringed by a circular guard on one end, and a metal cap engraved with “FR057-B173” on the other. Chambered within the hollow is an arcane mechanism housing a sliver of unmelting polar ice, which rapidly condenses ambient moisture into a faintly glowing, curved blade of bluish frost when the metal cap is twisted clockwise (the act of unsheathing the blade). Twisting the metal cap in the opposite direction disperses (sheathes) the blade.\n   " + toUni("Harmonious") + ". This ancient invention has been designed for ease of use, and brief experimentation is sufficient to understand its workings. Attuning to this item takes only 1 minute.\n   When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n   In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
		limfeaname : "Frost Brand",
		usages : 1,
		recovery : "Hour",
		additional : "extinguish flames",
		dmgres : ["Fire"],
		weaponOptions : {
			baseWeapon : "shortsword",
			regExpSearch : /^(?=.*frostbite)(?=.*cryo)(?=.*katana).*$/i,
			name : "Frostbite Cryo Katana, Frost Brand Shortsword",
			description : "Finesse; Light; +1d6 cold damage",
			selectNow : true,
			},
		},	
	"giant slayer greatsword (ddep5-2)" : {
		name : "Giant Slayer Greatsword (DDEP5-2)",
		source : [["AL","S5"]],
		type : "weapon (any axe or sword)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This immense weapon is fashioned from crudely-forged black iron w/ an unfinished, translucent white stone set in the pommel — engraved w/ the rune Dod (death). I have a +1 bonus to attack & dmg rolls made with this magic sword. When I hit a creature w/ the giant type, it does 2d6 extra dmg & the giant has to make a DC 15 Strength save or be knocked prone.",
		descriptionFull : "This immense weapon is fashioned from crudely-forged black iron with an unfinished, translucent white stone set in the pommel — engraved with the rune Dod (death). You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon's type and must succeed on a DC 15 Strength saving throw or fall prone. For the purpose of this weapon, \"giant\" refers to any creature with the giant type, including ettins and trolls.",
		weaponsAdd : { select : ["Giant Slayer Greatsword"], options : ["Giant Slayer Greatsword"] },
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
	"greatsword of sharpness: desolation (ddal8-14)" : {
		name : "Desolation, Greatsword of Sharpness (DDAL8-14)",
		source : [["AL","S8"]],
		type : "weapon (any sword that deals slashing damage)",
		rarity : "rare",
		magicItemTable : "H",
		attunement : true,
		allowDuplicates : true,
		description : "This magic greatsword is made from a strange black material that feels like frigid steel. When I roll a 20 to hit a creature with this sword, it takes +14 slashing dmg & I have a 5% chance of lopping off a limb. The sword does maximum damage vs. objects. With the command word, the blade gives bright light in a 10-ft radius & dim light in another 10 ft that only I can see. This stops if sheathed.",
		descriptionLong : "This greatsword of sharpness is made from a strange black material that feels like frigid steel. If commanded to shed light, only I can see it. When I attack a creature with this magic sword and roll a 20 on the attack roll, that target takes an extra 14 slashing damage and I roll another d20. If that turns up 20 as well, I lop off one of the target's limbs. If the creature has no limb to sever, I lop off a portion of its body instead. When used against an object, the damage dice are maximized. In addition, I can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.",
		descriptionFull : "This greatsword of sharpness is made from a strange black material that feels like frigid steel. If commanded to shed light, only you can see it. When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.\n   In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.", // the SRD says 4d6 but that is incorrect
		weaponOptions : {
			baseWeapon : "greatsword",
			name : "Desolation, Greatsword of Sharpness",
			regExpSearch : /^(?=.*desolation).*$/i,
			description : "Heavy; two-handed; On 20 to hit: +14 damage \u0026 5% chance to sever limb; Max damage vs. objects",
			selectNow : true,
			},
		},
	"greatsword of warning: ever vigilant (ccc-bmg-moon3-3)" : {
			name : "Ever Vigilant, Sword of Warning (BMG-MOON3-3)",
			source : [["AL","CCC"]],
			type : "weapon (greatsword)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This silvered greatsword has a pommel shaped like a unicorn's head & its blade is inscribed with prayers to the Earthmother. Some say it's Cymrych Hugh's legendary sword. Others say it's a reflection & the original rests with the Earthmother, awaiting a worthy hero. While it's on my person, I have adv. on initiative rolls. In addition, I & my allies within 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, except those incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This silvered greatsword has a pommel shaped like a unicorn's head, and its blade is inscribed with inscriptions that are prayers to the Earthmother. Some say this is Cymrych Hugh's legendary sword, while others say it's a reflection and that the original rests with the Earthmother, awaiting a hero truly worthy of wielding it.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Ever Vigilant, Greatsword of Warning"], options : ["Ever Vigilant, Greatsword of Warning"] },
			},
	"greatsword of wounding (ddex2-15)" : {
		name : "Greatsword of Wounding (DDEX2-15)",
		source : [["AL","S2"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		allowDuplicates : true,
		description : "This sword is serrated along the back edge w/ a single, deep fuller running the length of its blade, bifurcating the point. The sharkskin-wrapped hilt ends in a pommel formed of a large, unfinished gems. This sword has a tragic history. Anyone familiar w/ Aleyd Burral & her fall from grace recognizes weapon & treats me suspicously. HP lost to this sword can only be regained by resting. 1/turn, when I hit creature, I can wound target. See full notes.",
		descriptionFull : "This sword's blade is serrated along the back edge with a single, deep fuller running the length of its blade, bifurcating the point. The sharkskin-wrapped hilt ends in a pommel fashioned of a large, unfinished gemstone. This sword, however, has a tragic history. Anyone familiar with Aleyd Burral and her fall from grace recognizes the weapon and treat the wielder with suspicion. Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.\n   Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.",
		weaponOptions : {
			baseWeapon : "greatsword",
			regExpSearch : /greatsword of wounding/i,
			name : "Greatsword of Wounding",
			description : "Heavy, two-handed; Dmg only healed by resting; 1/turn, wound target. 1d4 necrotic/wound. DC 15 Con save to end.",
			selectNow : true,
		},
	},
	"longsword of vengeance (ccc-bmg-moon15-2)" : {
		name : "Longsword of Vengeance (CCC-BMG-MOON15-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "The clear crystal sword is no longer tainted by Malar's corruption but is cursed. The +1 longsword is only loyal to me, becoming a dull blade to anyone else, & leaves a blue-white trail in its wake when striking a target. I'm unwilling to give it up & have disadvantage on atks with other weapons. If I take dmg in combat, DC 15 Wis save or I must atk my attacker until it drops to 0 HP or I can't atk it in melee anymore. Banishment turns sword into normal +1 weapon.",
		descriptionFull : "The sword, no longer tainted by Malar's corruption, is now a clear crystal. The sword is only loyal to the wielder, becoming a dull blade to anyone else. When the sword strikes a target, a blue-white trail is left briefly in its wake. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
		weaponsAdd : { select : ["Longsword of Vengeance"], options : ["Longsword of Vengeance"] },
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
	"longsword of vengeance (ccc-gary-8)" : {
		name : "Longsword of Vengeance (CCC-GARY-8)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "This beautiful +1 longsword has a gold-trimmed hilt & is cursed. I'm unwilling to give it up & have disadvantage on atks with other weapons. If I take dmg in combat, DC 15 Wis save or I must atk my attacker until it drops to 0 HP or I can't atk it in melee anymore. Banishment turns sword into normal +1 weapon.",
		descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this beautiful longsword with a gold-trimmed hilt.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
		weaponsAdd : { select : ["Longsword of Vengeance"], options : ["Longsword of Vengeance"] },
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
	"longsword of vengeance (ccc-hatms1-2)" : {
		name : "Longsword of Vengeance (CCC-HATMS1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "This +1 black metal longsword has a sheen of red. The black leather-wrapped hilt ends in a pommel shaped like a human skull. This sword is cursed. It's possessed by the spirit of the orc warchief K'tagh Redeye, who urges you to violence against humans. I can't part w/ it & have disadv. on attacks w/ other weapons. If I take dmg in combat, DC 15 Wis save or I must atk my attacker until it drops to 0 HP or I can't atk it in melee anymore. Banishment turns sword into normal +1 weapon.",
		descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this longsword. The blackened metal of this longsword has a sheen of red. The black leather-wrapped hilt ends in a pommel shaped like a human skull.\n  The longsword is inhabited by an orc warchief, K'tagh Redeye, a berserker who has a terrible loathing of humans. If K'tagh is banished or otherwise removed from the sword, the blade loses its red sheen.\n  While holding the sword, the voice of K'tagh Redeye echoes in the wielder's mind, cursing and nudging the owner to greater violence, especially toward humans. If the person wielding the sword is a human, K'tagh constantly casts insults and threats. The spirit cannot withhold the benefits of the sword from a wielder, however.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
		weaponsAdd : { select : ["Longsword of Vengeance"], options : ["Longsword of Vengeance"] },
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
	"longsword of vengeance (ccc-mace1-3)" : {
		name : "Longsword of Vengeance (CCC-MACE1-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "The pommel of this +1 cursed sword is carved into a skull wreathed in purple flames. I hear faint mumbling voices & the sword carries a hidden message I don't know how to find. I'm unwilling to give it up & have disadvantage on atks with other weapons. If I take dmg in combat, DC 15 Wis save or I must atk my attacker until drops to 0 HP or I can't atk it in melee anymore. Banishment turns sword into normal +1 weapon.",
		descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this longsword. The pommel of this sword is carved to look like a skull wreathed in purple flames. You hear faint, mumbling voices when you are attuned to the sword. The sword carries a hidden message but you have no idea how to find it.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
		weaponsAdd : { select : ["Longsword of Vengeance"], options : ["Longsword of Vengeance"] },
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
	"moon-touched greatsword (ddal-drw17)" : {
		name : "Moon-Touched Greatsword (DDAL-DRW17)",
		source : [["AL","DRW"]],
		type : "weapon (greatsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "The flats of this blade act like windows onto a night sky with blinking stars & a large viridian sphere shifting slowly in different directions. 3 sluggish, green tentacles protrude from 1 end, acting as guard & grip. When unsheathed in darkness, it sheds green moonlight from the viridian sphere, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "The flats of the blade act like windows onto a night sky with blinking stars and a large viridian sphere shifting slowly in different directions. Three sluggish, green tentacles protrude from one end of the blade, acting as its guard and grip. The light the blade produces is green, and is emitted from the viridian sphere.\n   In darkness, the unsheathed blade of this magical sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Moon-Touched Greatsword"], options : ["Moon-Touched Greatsword"] },
	},
	"moon-touched longsword (bmg-drw-od-1)" : {
		name : "Moon-Touched Longsword (BMG-DRW-OD-1)",
		source : [["AL","DRW"]],
		type : "weapon (longsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "The crossguard of this sword is styled to resemble a bull's head, with its horns curling off to form the guards. Each of the bull's eyes is an inset moonstone. When unsheathed in darkness, it sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft.",
		descriptionFull : "The crossguard of this sword is styled to resemble a bull's head, with each of its horns curling off to form one of the guards. Each of the bull's eyes is an inset moonstone. In darkness, the unsheathed blade of this magical sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Moon-Touched Longsword"], options : ["Moon-Touched Longsword"] },
	},
	"moon-touched longsword (ccc-ghc-bk1-1)" : {
		name : "Moon-Touched Longsword (CCC-GHC-BK1-1)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "The blade of this magical longsword is etched with a hawk that has its wings spread & talons extended. When unsheathed in darkness, it sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft.",
		descriptionFull : "The blade of this longsword is etched with a hawk that has its wings spread and its talons extended. In darkness, the unsheathed blade of this magical sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Moon-Touched Longsword"], options : ["Moon-Touched Longsword"] },
	},
	"moon-touched longsword (ccc-tarot2-6)" : {
		name : "Moon-Touched Longsword (CCC-TAROT2-6)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "Etched into this curved blade are the phases of Selûne with the upturned crescent, the emblem of the Swords of the Lady, inlaid with silver. The pommel holds a large moonstone. In darkness, the unsheathed blade of this magical sword sheds moonlight, creating 15-ft of bright light and 15-ft dim.",
		descriptionFull : "Etched into the curved blade of this longsword are the phases of Selûne with the upturned crescent, the emblem of the Swords of the Lady, inlaid with silver. The pommel includes a large moonstone. In darkness, the unsheathed blade of this magical sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Moon-Touched Longsword"], options : ["Moon-Touched Longsword"] },
	},
	"moon-touched longsword (ddal0-11d)" : {
		name : "Moon-Touched Longsword (DDAL0-11D)",
		source : [["AL","S0"]],
		type : "weapon (longsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "This elven made magical longsword is decorated with intricate scrollwork featuring a full moon shining down upon a glade of dancing elves. In darkness, the unsheathed blade of the sword sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft.",
		descriptionFull : "This elven made longsword is decorated with intricate scrollwork featuring a full moon shining down upon a glade of dancing elves. In darkness, the unsheathed blade of this magical sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Moon-Touched Longsword"], options : ["Moon-Touched Longsword"] },
	},
	"moon-touched rapier (ccc-gad2-1)" : {
		name : "Moon-Touched Rapier (CCC-GAD2-1)",
		source : [["AL","CCC"]],
		type : "weapon (rapier)",
		rarity : "common",
		magicItemTable : "?",
		description : "This silver rapier is forged to resemble a long tentacle that twists out to a sharp point. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft.",
		descriptionFull : "This silver blade is forged to resemble a long tentacle that twists out to a sharp point. In darkness, the unsheathed blade of this magical rapier sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Moon-Touched Rapier"], options : ["Moon-Touched Rapier"] },
	},
	"moon-touched rapier (ccc-sac-4)" : {
		name : "Moon-Touched Rapier (CCC-SAC-4)",
		source : [["AL","CCC"]],
		type : "weapon (rapier)",
		rarity : "common",
		magicItemTable : "?",
		description : "Carved into the hilt of this magical rapier is the insignia of the Black Moon Pirate Company. In darkness, the unsheathed blade sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft.",
		descriptionFull : "Carved into the hilt of the rapier is the insignia of the Black Moon Pirate Company. In darkness, the unsheathed blade of this magical blade sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Moon-Touched Rapier"], options : ["Moon-Touched Rapier"] },
	},
	"moon-touched rapier (ccc-unite-5)" : {
		name : "Moon-Touched Rapier (CCC-UNITE-5)",
		source : [["AL","CCC"]],
		type : "weapon (rapier)",
		rarity : "common",
		magicItemTable : "?",
		description : "In darkness, the unsheathed blade of this magical rapier sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft. The bearer of this weapon can speak Undercommon.",
		descriptionFull : "In darkness, the unsheathed blade of this magical rapier sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft. The bearer of this weapon can speak and understand Undercommon.",
		languageProfs : ["Undercommon"],
		weaponsAdd : { select : ["Moon-Touched Rapier"], options : ["Moon-Touched Rapier"] },
	},
	"moon-touched scimitar: moonmaiden's blade (fr-dc-strat-dragon-1)" : {
		name : "Moonmaiden's Blade, Moon-Touched Scimitar",
		source : [["AL","FR-DC"]],
		type : "weapon (scimitar)",
		rarity : "common",
		magicItemTable : "?",
		description : "This scimitar’s blade is shaped like a waxing moon, with runes holding a prayer that those buried underground always find the light. In darkness, the unsheathed blade sheds moonlight, creating 15-ft of bright light and 15-ft dim. While underground, I always know my depth below the surface & the direction to the nearest upward path.",
		descriptionFull : "This scimitar’s blade is shaped like a waxing moon. Runes along the blade have a prayer that those buried underground always find the light of the moon.\n   " + toUni("Delver") + ". While underground, the bearer of this item always knows the item’s depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Moonmaiden's Blade, Moon-Touched Scimitar"], options : ["Moonmaiden's Blade, Moon-Touched Scimitar "] },
	},
	"moon-touched shortsword (dc-poa-conmar-9)" : {
		name : "Moon-Touched Shortsword (DC-POA-CONMAR-9)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft. This sword has a smaller than usual handle, making it harder to grip but easier to draw.",
		descriptionFull : "In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft. This sword has a smaller than usual handle, making it harder to grip, but easier to draw.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword (dc-poa-des-5b)" : {
		name : "Moon-Touched Shortsword (DC-POA-DES-5B)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "This fey-crafted sword was a gift from the Prince of Frost & is cold to the touch, lowering the temperature in a 5-ft radius. Icicles continually form & fall off the blade when it's unsheathed. The sword is made from mithral, a blue metal half the normal weight. In darkness, the unsheathed blade sheds moonlight, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "This fey-crafted blade features mithral construction, a blue metal weighing half the normal weight. The moon-touched shortsword gifted by the Prince of Frost is cold to the touch, lowering the temperature around it in a 5-foot radius. Icicles are continually forming and falling off the blade whenever it is unsheathed. In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponOptions : {
			baseWeapon : "shortsword",
			regExpSearch : /^(?=.*mithral)(?=.*moon)(?=.*touched).*$/i,
			name : "Moon-Touched Mithral Shortsword",
			weight : 1,
			description : "Finesse, light; Counts as magical.",
			selectNow : true,
			},
	},
	"moon-touched shortsword (dc-poa-gsp2-3h)" : {
		name : "Moon-Touched Shortsword (DC-POA-GSP2-3H)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "This blade looks like a winged serpent with the curved body of a slithering snake, a guard shaped like feathered wings, & a snakehead pommel that has its tongue sticking out as if hissing. The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.\n   The blade is curved, forming the body of a slithering snake, its guard is designed to look like feathered wings, and the pommel looks like the head of a snake with its tongue sticking out as if hissing. Altogether, it forms a winged serpent.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: fang (dc-poa-gsp3-2)" : {
		name : "Fang, Moon-Touched Shortsword (GSP3-2)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "Curved with a sharp tip, this shortsword was made of bone from an Ancient White Dragon. The handle is also bone & wrapped with cloth that always stays dry. The unsheathed blade glows a light blue-green color & sheds moonlight in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.\n   The blade glows a light blue-green color. Curved with a sharp tip, the blade was made from bone from an Ancient White Dragon. The handle is also bone, wrapped with cloth that always stays dry.",
		weaponsAdd : { select : ["Fang, Moon-Touched Shortsword"], options : ["Fang, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword (dc-poa-jcdc-1)" : {
		name : "Moon-Touched Shortsword (DC-POA-JCDC-1)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius & dim light for another 15 ft. Its hilt is polished white ivory carved to resemble a fearsome white dragon.",
		descriptionFull : "In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft. The hilt is polished white ivory carved to resemble a fearsome white dragon.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword (dc-poa-mcwws-2)" : {
		name : "Moon-Touched Shortsword (DC-POA-MCWWS-2)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "In darkness, the unsheathed blade of this shortsword sheds moonlight, creating 15-ft of bright light & 15-ft dim. The pommel is a polished white & grey stone that resembles a full moon & its hilt is decorated with symbols representing the phases of the moon.",
		descriptionFull : "In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft. The pommel stone on the blade is a polished white and grey stone that resembles a full moon. The hilt is decorated with symbols representing the phases of the moon.",
		weaponsAdd : { select : ["Moon-Touched Shortsword"], options : ["Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: tsukuyomi (dc-poa-tdg1-3)" : {
		name : "Tsukuyomi, Moon-Touched Shortsword (TDG1-3)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "This Wakizashi-style shortsword is crafted from star metals with a beautiful hilt of carved Rowan-Oak. The crossguard, blade & hilt are etched with a lunar motif & embedded with 3 moonstones, shaped in the phases of the moon: crescent, half & full. Silvery-blue moonlight radiates from the blade when unsheathed in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "This Wakizashi style shortsword is crafted from star metals with a beautiful hilt of carved Rowan-Oak. The crossguard, blade and hilt are etched with a lunar motif and embedded with three moonstones, shaped in the phases of the moon: crescent, half and full. Silvery blue light radiates from the blade whenever it is drawn from the scabbard.\n   In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Tsukuyomi, Moon-Touched Shortsword"], options : ["Tsukuyomi, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: blade of the black tortoise (dc-poa-van-mt-1)" : {
		name : "Blade of the Black Tortoise (Moon-Touched Shortsword)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "A sturdy tortoise adorns the ebony sheath of this sword. Engraved roughly into the pommel in Chultan is the githzerai aphorism: “Endure. In enduring, grow strong”. The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "A sturdy tortoise adorns this sword's ebony sheath. Engraved roughly into the pommel in Chultan is the following githzerai aphorism: “Endure. In enduring, grow strong”.\n   In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Blade of the Black Tortoise, Moon-Touched Shortsword"], options : ["Blade of the Black Tortoise, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: green dragon gladius (dc-poa-van-mt-1)" : {
		name : "Green Dragon Gladius (Moon-Touched Shortsword)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "A wise imperious dragon is entwined around the jade sheath of this sword. The Chultan word for “Patience” is carved into the pommel in a flowing script. The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "A wise, imperious dragon is entwined around this sword's jade sheath. The Chultan word for “Patience” is carved into the sword's pommel in a flowing script.\n   In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Green Dragon Gladius, Moon-Touched Shortsword"], options : ["Green Dragon Gladius, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: red phoenix falchion (dc-poa-van-mt-1)" : {
		name : "Red Phoenix Falchion (Moon-Touched Shortsword)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "A fiery phoenix bursting from ashes is engraved on the red lacquered sheath of this sword. A Chultan proverbial poem is carved around the pommel: “The water is calm / but only a fool would cross / sharp teeth lurk below.” The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "A fiery phoenix bursting from ashes is engraved on this sword's red lacquered sheath. A Chultan proverbial poem is carved around the pommel:"+
		"\n    \t \t“The water is calm"+
		"\n    \t \tbut only a fool would cross"+
		"\n    \t \tsharp teeth lurk below.”"+
		"\n \n     In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["Red Phoenix Falchion, Moon-Touched Shortsword"], options : ["Red Phoenix Falchion, Moon-Touched Shortsword"] },
	},
	"moon-touched shortsword: white tiger tulwar (dc-poa-van-mt-1)" : {
		name : "White Tiger Tulwar (Moon-Touched Shortsword)",
		source : [["AL","DC-POA"]],
		type : "weapon (shortsword)",
		rarity : "common",
		magicItemTable : "?",
		description : "The mammoth ivory sheath of this sword bears a carving of a tiger, teeth bared & claws extended, captured forever in mid-pounce. The pommel is polished to a high sheen & bears a Chultan inscription: “Swift, as a coursing river.” The unsheathed blade sheds moonlight in darkness, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "This sword's sheath is made of mammoth ivory, and bears a relief carving of mighty tiger, teeth bared and claws extended, captured forever in mid-pounce. The sword's pommel is polished to a high sheen, and bears the following inscription in Chultan: “Swift, as a coursing river.”\n   In darkness, the unsheathed blade of this magical shortsword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
		weaponsAdd : { select : ["White Tiger Tulwar, Moon-Touched Shortsword"], options : ["White Tiger Tulwar, Moon-Touched Shortsword"] },
	},
	"moon-touched sword (ccc-bmg-moon6-2)" : {
		name : "Moon-Touched Sword (CCC-BMG-MOON6-2)",
		source : [["AL","CCC"]],
		type : "weapon (any sword)",
		rarity : "common",
		magicItemTable : "?",
		description : "This sword is paper-thin. Geometric runes run along its length in contrast to the sweeping elven make. The script is unknown, but purportedly reads: “I am but a shard.” In darkness, the unsheathed blade sheds moonlight, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "The blade is thin to the point of being paper. Geometric runes run along its length, in stark contrast to the sweeping elven make. The script is unknown, but purportedly it reads: “I am but a shard.” In darkness, the unsheathed blade of this magical sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/moon.touched/i).test(v.WeaponText)) {
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
		source : [["AL","CCC"]],
		type : "weapon (any sword)",
		rarity : "common",
		magicItemTable : "?",
		description : "A shard of pure moonlight, this magical sword has no guard & barely enough hilt for my grip. It always glows with a soft, pale white radiance. In darkness, the unsheathed blade sheds moonlight, creating 15-ft of bright light & 15-ft dim.",
		descriptionFull : "A shard of pure moonlight, this sword has no guard and barely enough hilt for the wielder's grip. It always glows with a soft, pale white radiance. In darkness, the unsheathed blade of this magical sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/moon.touched/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Moon-Touched" in the name of a sword, it will be treated as the magic weapon Moon-Touched Sword.'
					]
			}
	},
	"nine lives stealer longsword: love's bite (ddal7-11)" : {
		name : "Love's Bite, Nine Lives Stealer Longsword (DDAL7-11)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "The blade of this elegantly-curved +2 longsword is made of silvery-blue steel gilt in gold. A strip of delicate paper hangs from the pommel, on which is inscribed a breathtakingly beautiful poem. When I score a critical hit, my heart is filled with the agonizing ache of spurned love. The sword has 1d8+1 charges; if it inflicts a critical hit on a creature (not construct/undead) with < 100 HP, the target makes a DC 15 Con save or dies. If it dies, 1 charge is used.",
		descriptionFull : "The blade of this elegantly-curved longsword is fashioned of silvery-blue steel gilt in gold. A strip of delicate paper hangs from the pommel, upon which is inscribed a breathtakingly beautiful poem. When the wielder scores a critical hit with the weapon, its heart is filled with the agonizing ache of spurned love.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   The sword has 1d8+1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
		usages : "1d8+1",
		recovery : "Never",
		weaponsAdd : { select : ["Love's Bite, Nine Lives Stealer Longsword"], options : ["Love's Bite, Nine Lives Stealer Longsword"] },
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
	"nine lives stealer scimitar (ccc-qcc2018-1)" : {
		name : "Nine Lives Stealer Scimitar (CCC-QCC2018-1)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "The hilt of this +2 weapon is covered with carved, ancient Rellanic runes that seem to comprise nonsensical words or, possibly, a list of proper names. The sword has 9 charges; if it inflicts a critical hit on a creature (not construct/undead) with < 100 HP, the target makes a DC 15 Con save or dies. If it dies, the sword uses a charge.",
		descriptionFull : "The hilt of this weapon is covered with carved, ancient Rellanic runes that seem to comprise nonsensical words or, possibly, a list of proper names. You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   The sword has 9 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
		usages : "9",
		recovery : "Never",
		weaponsAdd : { select : ["Nine Lives Stealer Scimitar"], options : ["Nine Lives Stealer Scimitar"] },
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
	"rapier of life stealing (ccc-pdxage-2-1)" : {
		name : "Rapier of Life Stealing (CCC-PDXAGE-2-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This matte-black rapier doesn't reflect light, radiates a fiendish aura & turns chill to the touch in 30ft of a good cleric or paladin. With it, I feel hungry even if I've eaten. When the life stealing power is used, I feel an invigorating euphoria & am satiated. The blade glows dully when fed. If I attack a creature with it & roll a nat 20, it takes an extra 10 necrotic dmg if not a construct/undead. I also gain 10 temp hp.",
		descriptionFull : "This matte-black rapier does not reflect light. It radiates a faint fiendish aura, and turns chill to the touch when within 30 feet of a good-aligned cleric or paladin. Once attuned, the wielder often feels hungry, even if they have just eaten. However, when the life stealing power is used, the wielder experiences an invigorating euphoria and feels satiated. The blade glows dully when it has fed.\n   When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 10 necrotic damage if it isn't a construct or an undead. You also gain 10 temporary hit points.", // the SRD says 3d6 but that is incorrect
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*rapier)(?=.*life)(?=.*stealing).*$/i,
			name : "Rapier of Life Stealing",
			source : [["AL","CCC"]],
			description : "Finesse; On 20 to hit: +10 Necrotic dmg, 10 temp HP (unless against construct/undead)",
			selectNow : true,
			},
	},
	"scimitar of life stealing: night cutter (ccc-rcc-1-4)" : {
		name : "Night Cutter, Scimitar of Life Stealing (RCC-1-4)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "The blade of this scimitar is solid black & etched with intricate spider webs. It belonged to a respected captain of House Rakarn and when bearing it openly, drow treat me as a usuper unless I'm also drow. While carried, I always know my depth below the surface & the direction to the nearest upward path. If I attack a creature with it & roll a nat 20, it takes an extra 10 necrotic dmg if not a construct/undead. I also gain 10 temp hp.",
		descriptionFull : "The blade of this scimitar is solid black and etched with intricate spider webs. While bearing it, you always know the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.\n   You openly carry the black-bladed scimitar called Night Cutter, which once belonged to a respected drow captain of House Rakarn. Unless your race is drow, you are considered unworthy by most drow to carry it, and they take an instant dislike to you, treating you as a usurper. If your race is drow, or if you do not openly carry the weapon, this drawback does not apply to you.\n   When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 10 necrotic damage if it isn't a construct or an undead. You also gain 10 temporary hit points.", // the SRD says 3d6 but that is incorrect
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*night)(?=.*cutter).*$/i,
			name : "Night Cutter, Scimitar of Life Stealing",
			source : [["AL","CCC"]],
			description : "Light; finesse; On 20 to hit: +10 Necrotic dmg, 10 temp HP (unless against construct/undead)",
			selectNow : true,
			},
	},
	"scimitar of life stealing: krakenfang (po-bk-3-7)" : {
		name : "Krakenfang, Scimitar of Life Stealing (PO-BK-3-7)",
		source : [["AL","PO"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This bone-crafted thin-bladed sword bears intricate engravings of tentacles from its tip to the kraken head hilt. The remaining tentacles entwine to form the cross guard. Krakenfang radiates a continuous necrotic magic aura and lightens when it draws blood, from deep black to maroon. It reverts to its original color 8 hours later. When I attack a creature with the sword & roll a nat 20, it takes an extra 10 necrotic dmg if not a construct/undead. I also gain 10 temp hp.",
		descriptionFull : "This bone-crafted, thin bladed scimitar bears intricate engravings of tentacles that snake from blade tip to hilt-a kraken’s head. The remaining tentacles entwine to form the weapons cross guard.\n   Krakenfang radiates a continuous necrotic magic aura. The scimitar’s surface lightens when it draws blood, from deep black to maroon red. It reverts back to its original color 8 hours after its last use.\n   When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 10 necrotic damage if it isn't a construct or an undead. You also gain 10 temporary hit points.", // the SRD says 3d6 but that is incorrect
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*night)(?=.*cutter).*$/i,
			name : "Krakenfang, Scimitar of Life Stealing",
			source : [["AL","PO"]],
			description : "Light; finesse; On 20 to hit: +10 Necrotic dmg, 10 temp HP (unless against construct/undead)",
			selectNow : true,
			},
	},
	"scimitar of speed: deceiver (sj-dc-dfa-3)" : {
		name : "Deceiver, Scimitar of Speed (DFA-3)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This curved scimitar is made from a single piece of infernal iron, with no discernable hilt. When it draws blood, I feel optimistic about the future, as if I can defeat or trick any opponent. I gain a +2 bonus to the sword's attack and damage rolls and can attack with it as a bonus action once per turn.",
		descriptionLong : "This curved blade is made from a single piece of infernal iron, with no discernable hilt. Whenever it draws blood, I feel optimistic about what the future holds, as if I can defeat or trick any opponent who crosses me. Additionally, I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.\n   This curved blade is made from a single piece of infernal iron, with no discernable hilt. Whenever it draws blood, the bearer feels optimistic about what the future holds, as if they can defeat or trick any opponent who crosses them.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*deceiver).*$/i,
			name : "Deceiver, Scimitar of Speed",
			description : "Finesse, light; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed: radiance's glare (sj-dc-php-lrd-1)" : {
		name : "Radiance's Glare, Scimitar of Speed (PHP-LRD-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This starmetal scimitar gleams golden in the sun and lets me speak Netherese. When it hits, light reflects intensely and I can read: “All shadows of doubt will wither under the light of truth” in old script. I gain +2 to the sword's attack and damage rolls and can attack with it as a bonus action once per turn.",
		descriptionLong : "This starmetal scimitar gleams golden in the sun and while on my person, I can speak Netherese. When it hits, the light reflects intensely, making scripts in an old language readable, “All shadows of doubt will wither under the light of truth”. Additionally, I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.\n   The starmetal scimitar gleams golden in the sun, reflecting the light intensely whenever it hits. Scripts in an old language readable during this, “All shadows of doubt will wither under the light of truth”.\n   " + toUni("Language") + ". The bearer can speak and understand a language Netherese while the item is on the bearer's person.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		languageProfs : ["Netherese"],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*radiance|radiance's)(?=.*glare).*$/i,
			name : "Radiance's Glare, Scimitar of Speed",
			description : "Finesse, light; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed (sj-dc-triden-myke-2)" : {
		name : "Scimitar of Speed (SJ-DC-TRIDEN-MYKE-2)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This fine blade has fold lines down its length and glints in the barest of light. It feels like it's calling me and I can attune in 1 minute. I gain a +2 bonus to the sword's attack and damage rolls and can attack with it as a bonus action once per turn.",
		descriptionLong : "This fine blade has fold lines down its length and seems to glint at every angle in the barest of lights. Perhaps that's why it feels like it's calling to me and I can attune in 1 minute. Additionally, I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.\n   This fine blade with fold lines showing down its length seems to glint at any angle in the presence of even the barest of lights. Perhaps that is why it feels like it's calling to you...\n   " + toUni("Harmonious") + ". Attuning to this item takes only 1 minute.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*scimitar)(?=.*speed).*$/i,
			name : "Scimitar of Speed",
			description : "Finesse, light; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed: beam (sj-dc-vmt-1)" : {
		name : "Beam Scimitar of Speed (SJ-DC-VMT-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "The blade of this +2 scimitar is made of an eerie black light & forms automatically when unsheathed. The scimitar was attached to the Honorable Knight statue after its theft by the evil wizard Manshoon. It was later shrunken down by the Blackstaff & awarded to the heroes who rescued the statue. I can attack with the sword as a bonus action once per turn.",
		descriptionLong : "This scimitar's blade is made entirely of an eerie black light. The blade automatically forms when the sword is removed from its sheath. It was once attached to the Honorable Knight statue after its theft by the evil wizard Manshoon. The scimitar was later removed and shrunken down by the Blackstaff and awarded to the heroes who rescued the statue. I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.\n   " + toUni("Strange Material") + ". This scimitar's blade is made entirely of an eerie black light although it still does slashing damage. Its blade automatically forms when the sword is removed from its sheath.\n   The sword was once attached to the Honorable Knight statue after the statue's theft by the evil wizard Manshoon. It was later removed and shrunken down by the Blackstaff and awarded to the heroes who rescued the statue.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*beam)(?=.*scimitar)(?=.*speed).*$/i,
			name : "Beam Scimitar of Speed",
			description : "Finesse, light; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed: manthor “vow of the forest” (wbw-dc-andl-3)" : {
		name : "Manthor, Vow of the Forest (Scimitar of Speed)",
		source : [["AL","WBW-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "I swore my fealty to Alindaya & was knighted as a protector of the Feywild, promising to protect nature & aid them in times of need. This +2 scimitar manifested from the power of my pact. The star metal blade is incredibly light & embossed with leaves. Feywild magic lets me use it with superior speed; I can attack with it as a bonus action once per turn. The hilt bears Sylvan words in Espruar script: “Only those who vow to defend nature with swift and decisive actions may wield me”. The sword also whispers warnings, giving +2 initiative if not incapacitated.",
		descriptionLong : "I have sworn my everlasting fealty to Alindaya, promising to forever protect nature and come to their aid in times of need. In exchange, they knighted me as a protector of the Feywild. This sword manifested itself from the power of my binding pact, that I may carry out my promises. The star metal blade is incredibly light and embossed with imprints of leaves. It's enchanted with magic from the Feywild that allows me to use it with superior speed. I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns. The hilt bears Sylvan words written in the Espruar script: “Only those who vow to defend nature with swift and decisive actions may wield me”. The sword also whispers warnings, granting a +2 bonus to initiative if I'm not incapacitated.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.\n   You have promised to forever protect nature, come to Alindaya's aid in their time of need, and sworn your everlasting fealty to Alindaya. In exchange, they knighted you as a protector of the Feywild. This sword manifested itself from the power of your binding pact, that you may carry out your promises. It is yours to keep.\n   This star metal blade is incredibly light and embossed with imprints of leaves. It is enchanted with magic from the Feywild that allows the wielder to use it with superior speed. The hilt bears following words written in Sylvan using the Espruar script: “Only those who vow to defend nature with swift and decisive actions may wield me”.\n   In addition, this weapon has the Guardian minor property. The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*manthor)(?=.*vow)(?=.*forest).*$/i,
			name : "Manthor, Vow of the Forest",
			source : [["AL","WBW-DC"]],
			description : "Finesse, light; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	},
	"scimitar of speed: bregrist (wbw-dc-trey-1)" : {
		name : "Bregrist, Scimitar of Speed (TREY-1)",
		source : [["AL","WBW-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "The famed scimitar ‘Bregrist', also known as ‘Slicer', translates to “quick cut” in Common. This finely honed blade is edged in silver and was superbly crafted by a skilled elven smith. It's inlaid with stylized silver vines that run the length of the blade and spell its name in Elvish. I gain a +2 bonus to the sword's atk and dmg rolls and can atk with it once as a bonus action on each of my turns.",
		descriptionLong : "This is the famed scimitar ‘Bregrist', also known as ‘Slicer'. The Elvish name translates to “quick cut” in Common. The finely honed blade is edged in silver and was superbly crafted by an extremely skilled elven smith. It's also inlaid with stylized silver vines running the length of the blade and spelling its name in Elvish. I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.\n   This is the famed scimitar ‘Bregrist' (also known as ‘Slicer'). Those who speak Elvish will know that Bregrist translates to “quick cut” in Common. Bregrist is a Scimitar of Speed. It is superbly crafted, and clearly made by an extremely skilled elven maker. The blade is finely honed and edged in silver. It is also inlaid with silver stylized vines running the length of the blade, spelling out the name in Elvish.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*bregrist).*$/i,
			name : "Bregrist, Scimitar of Speed",
			description : "Finesse, light; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of speed: dread cutlass (sj-dc-dwr-3)" : {
		name : "Dread Cutlass, Scimitar of Speed (DWR-3)",
		source : [["AL","SJ-DC"]],
		type : "weapon (scimitar)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This pirate's cutlass has a long red tassel hanging from the end of its hilt. I gain a +2 bonus to the sword's atk and dmg rolls and can attack with it once as a bonus action on each of my turns. The sword also whispers warnings, giving +2 initiative unless incapacitated.",
		descriptionLong : "This scimitar is forged in the form of a pirate's cutlass with a long red tassel hanging from the end of its hilt. I gain a +2 bonus to attack and damage rolls made with this magic weapon and can make one attack with it as a bonus action on each of my turns. It also whispers warnings, giving a +2 bonus to initiative if I'm not incapacitated.",
		descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.\n   This scimitar is forged in the form of a pirate's cutlass with a long red tassel hanging from the end of its hilt.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
		attunement : true,
		weight : 3,
		action : [["bonus action", "Scimitar of Speed"]],
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		weaponOptions : {
			baseWeapon : "scimitar",
			regExpSearch : /^(?=.*dread)(?=.*cutlass).*$/i,
			name : "Bregrist, Scimitar of Speed",
			description : "Finesse, light; Extra attack as bonus action",
			modifiers : [2, 2],
			selectNow : true,
		},
	},
	"scimitar of warning: miir (ccc-bwm-4-1)" : {
			name : "Miir, Scimitar of Warning (BWM-4-1)",
			source : [["AL","CCC"]],
			type : "weapon (scimitar)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This mithral blade is exquisitely crafted from the finest materials & never becomes dirty. “Miir” means “priceless” in Elvish. While on my person, I have adv. on initiative. Also, I & my allies w/i 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This mithral blade is exquisitely crafted from the finest materials, and never becomes dirty. “Miir” means “priceless” in Elvish. This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Miir, Scimitar of Warning"], options : ["Miir, Scimitar of Warning"] },
			},
	"sun blade: the seventh sword (ccc-6swords-1)" : {
		name : "The Seventh Sword, Sun Blade (6SWORDS-1)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This sword is of unknown origin & unique design. There's no guard, only a handle with an ivory figurehead on each end - a devil & a dragon. When used 1-handed, the dragon's eyes glow red & a reddish blade extends from its mouth. When used 2-handed, a 2nd blade extends from the devil's mouth, making the sword look like a staff. As a bonus action, I can create/dismiss blades. While a blade exists, it acts as a +2 longsword that does radiant (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius & another 15-ft dim. Action to change the radius by 5 ft/type (max 30).",
		descriptionLong : "This sword is of unknown origin & unique design. There is no guard, only the handle, which is adorned with ivory figureheads on either end - a devil & a dragon. When used 1-handed, the dragon's eyes glow red & a reddish blade extends from its mouth. When used 2-handed, a second blade extends from the devil's mouth, giving the weapon the appearance of a staff. As a bonus action, I can create or dismiss the blades of pure radiance. While a blade exists, it acts like a longsword that grants a +2 bonus to atk & damage rolls, does radiant damage & has the finesse property. It also deals +1d8 radiant damage to undead & emits sunlight, bright light in a 15-ft radius & dim light in an additional 15-ft radius. As an action, I can expand or reduce the bright & dim light's radius by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each. I'm proficient with this weapon if proficient with either longswords or shortswords.",
		descriptionFull : "The origin of this sword is unknown, but its design is highly unique. Unlike typical sun blades that have a metal guard on their hilts, this one is comprised only of handle. The handle is adorned with ivory figureheads on either side - a devil and a dragon. When used one-handed, the dragon's eyes light up red and a blade of reddish sunlight extends from its mouth. When used two-handed, a second blade extends from the devil side of the hilt, resulting in a weapon that is closer in appearance to a staff.\n   This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*seventh)(?=.*sword).*$/i,
			name : "The Seventh Sword, Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10); +1d8 damage to undead",
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
		name : "Dawnfire, Sun Blade (CCC-STORM-1)",
		source : [["AL","CCC"]],
		type : "weapon (longsword)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This ancient sword hilt is made of orichalcum & known as Dawnfire. The ruby in its pommel sheds dim light for 10 ft when undead w/i 60 ft. As a bonus action, I can create or dismiss a blade of radiance from the hilt. While the blade exists, the weapon acts like a +2 longsword that does radiant dmg (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius & dim light for another 15 ft. As an action, I can change the radius by 5 ft per type (max 30). Proficient if proficient w/ short or longswords.",
		descriptionLong : "This ancient sword hilt is made of orichalcum & known as Dawnfire. The ruby in its pommel sheds dim light for 10 feet when within 60 feet of undead. As a bonus action, I can create or dismiss a blade of pure radiance from the hilt. While the blade exists, it acts like a longsword that grants a +2 bonus to atk & damage rolls, does radiant damage & has the finesse property. It also deals +1d8 radiant damage to undead & emits sunlight, bright light in a 15-ft radius & dim light in an additional 15-ft radius. As an action, I can expand or reduce the bright & dim light's radius by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each. I;m proficient with this weapon if proficient with either longswords or shortswords.",
		descriptionFull : "This ancient sword hilt is made of orichalcum. The ruby in Dawnfire's pommel sheds dim light for 10 feet when within 60 feet of undead.\n   This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*dawnfire).*$/i,
			name : "Dawnfire, Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10); +1d8 damage to undead",
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
		magicItemTable : "G",
		attunement : true,
		description : "This pure gold hilt always shines in my eyes, no matter how dark the environment. It's engraved with holy symbols of the Netherese god Amaunator: ancient on 1 side & current on the other. As a bonus action, I can create or dismiss a blade of radiance from the hilt. While the blade exists, it's a +2 longsword that does radiant dmg (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius & dim light for another 15 ft. As an action, I can change the radius by 5 ft per type (max 30). Proficient if proficient w/ short or longswords.",
		descriptionLong : "This hilt is made of pure gold & seems to always be shining to me, no matter how dark the environment. It's engraved on both sides, on one side with the ancient holy symbol of the Netherese god Amaunator & on the other his more recent holy symbol. As a bonus action, I can create or dismiss a blade of pure radiance from the hilt. While the blade exists, it acts like a longsword that grants a +2 bonus to atk & damage rolls, does radiant damage & has the finesse property. It also deals +1d8 radiant damage to undead & emits sunlight, bright light in a 15-ft radius & dim light in an additional 15-ft radius. As an action, I can expand or reduce the bright & dim light's radius by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each. I'm proficient with this weapon if proficient with either longswords or shortswords.",
		descriptionFull : "This Sun Blade's hilt is made of pure gold and seems to always be shining to whoever holds it, no matter how dark the environment. It is engraved on both sides, on one side with the ancient holy symbol of Amunator as known by the Netherese and on the other his more recent holy symbol.\n   This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*sun)(?=.*blade).*$/i,
			name : "Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10); +1d8 damage to undead",
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
		magicItemTable : "G",
		attunement : true,
		description : "Starshard is a jagged 3-ft shard of white-stained glass that depicts half a celestial creature. It's wrapped with a bloody strip of linen as a grip. If I roll a natural 1 on an atk with Starshard, I must pass a DC 17 Con save or be blinded until my next turn ends. As a bonus action, I can create or dismiss radiant energy from the hilt. While the radiance exists, it's a +2 longsword that does radiant dmg (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius & dim light for another 15 ft. As an action, I can change the radius by 5 ft per type (max 30). Proficient if proficient w/ short or longswords.",
		descriptionLong : "Starshard is a jagged, 3-ft shard of white-stained glass that depicts half a celestial creature. It's wrapped with a bloody strip of linen that serves as a grip. If I roll a natural 1 on an attack with Starshard, I must pass a DC 17 Constitution save or be blinded until my next turn ends. As a bonus action, I can create or dismiss a blade of pure radiance from the hilt. While the blade exists, it acts like a longsword that grants a +2 bonus to atk & damage rolls, does radiant damage & has the finesse property. It also deals +1d8 radiant damage to undead & emits sunlight, bright light in a 15-ft radius & dim light in an additional 15-ft radius. As an action, I can expand or reduce the bright & dim light's radius by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each. I'm proficient with this weapon if proficient with either longswords or shortswords.",
		descriptionFull : "Starshard's blade is a jagged, three-foot-long shard of white stained glass that depicts half a celestial creature. It's wrapped with a bloody strip of linen that serves as a grip. If the wielder rolls a natural 1 on an attack roll made with Starshard, they must succeed on a DC 17 Constitution saving throw or be blinded until the end of their next turn.\n   This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*starshard).*$/i,
			name : "Starshard, Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10); +1d8 damage to undead",
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
		magicItemTable : "G",
		attunement : true,
		description : "This sword hilt resembles a bronze dragon w/ wings spread & mouth agape. It's had many names over the years, including Sunlight's Wrath & Shar's Bane. Legend Lore reveals it's true name: Scintilmorn, & its purpose: to destroy creatures of the night. As a bonus action, create or dismiss a blade of radiance from the hilt. While the blade exists, it's a +2 longsword that does radiant dmg (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius & dim light for 15 ft more. As an action, I can change the radius by 5 ft per type (max 30). Proficient if proficient w/ short or longswords.",
		descriptionLong : "This hilt is carved to resemble a bronze dragon with its wings spread and its mouth agape. It's held many names over the years, including Sunlight's Wrath and Shar's Bane. A legend lore spell reveals its true name (Scintilmorn) and its original purpose: to destroy vampires and other creatures of the night. As a bonus action, I can create or dismiss a blade of pure radiance from the hilt. While the blade exists, it acts like a longsword that grants a +2 bonus to atk & damage rolls, does radiant damage & has the finesse property. It also deals +1d8 radiant damage to undead & emits sunlight, bright light in a 15-ft radius & dim light in an additional 15-ft radius. As an action, I can expand or reduce the bright & dim light's radius by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each. I'm proficient with this weapon if proficient with either longswords or shortswords.",
		descriptionFull : "The hilt lying on the floor is carved to resemble a bronze dragon with its wings spread and its mouth agape. This device is a sun blade that has held many names over the years, including Sunlight's Wrath and Shar's Bane. A legend lore spell reveals its true name (Scintilmorn) and its original purpose: to destroy vampires and other creatures of the night.\n   This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		weight : 3,
		action : [["bonus action", "Sun Blade (start/stop)"], ["action", "Sun Blade (change light)"]],
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*scintilmorn).*$/i,
			name : "Scintilmorn, Sun Blade",
			damage : [1, 8, "radiant"],
			description : "Finesse, versatile (1d10); +1d8 damage to undead",
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
		name : "Sword of Vengeance (CCC-SAF2-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "This +1 sword belonged to the erinyes, Catallika, & is cursed. It's forged of black iron & decorated with birds of prey tearing each other apart. Her tortured rage lies within the sword, causing a harmless flash of pain whenever I atk with it & miss. I can't part with the sword & have disadv. on atks with other weapons. If I take dmg in combat, DC 15 Wis save or I must atk my attacker until it drops to 0 HP or I can't melee atk it anymore. Banishment turns the sword into normal +1 weapon.",
		descriptionFull : "This sword belonged to the erinyes, Catallika. It is forged of black iron, and decorated with birds of prey tearing each other apart. The anger of the erinyes has been imprinted into the weapon, and lies heavily within it. Her tortured rage causes a harmless flash of pain in the wielder whenever an attack they make with her sword misses.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on my person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on my person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["prefix", "of Wounding"],
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
		source : [["AL","CGB"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		allowDuplicates : true,
		description : "This magic sword is crafted of black metal and stone. HP lost to it can only be regained by resting. 1/turn, when I hit creature, I can wound target. Wounded creature takes 1d4 necrotic dmg per wound at start of turn. Then makes DC 15 CON save to end wounds on success. Can also be ended with DC 15 WIS (Medicine) check.",
		descriptionFull : "This sword is crafted of black metal and stone. Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.\n   Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["prefix", "of Wounding"],
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of wounding/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'Damage can only be healed by resting; Once per turn, wound target';
					}
				},
				'If I include the words "of Wounding" in a the name of a sword, it will be treated as the magic weapon Sword of Wounding. Damage by the sword can only be regained with a short or long rest. Once per turn when I hit with the sword, I can inflict a lingering wound on a target, causing it pain every turn thereafter.'
			]
		}
	},
	"vicious longsword (ccc-hatms2-1)" : {
		name : "Vicious Longsword (CCC-HATMS2-1)",
		source : [["AL","CCC"]],
		type : "weapon (sword)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This sword's scabbard is jet black w/ gold embellishments & the initials ‘ST' at the top. The hilt is made from gold & mithral & is set w/ a skull w/ red ruby eyes. It's wrapped w/ bone white cord to provide exceptional grip. When I roll a 20 on my atk roll w/ this magic weapon, the target takes an extra 7 weapon dmg & I hear sinister laughter.",
		descriptionFull : "The scabbard of this weapon is jet black with gold embellishments with the initials ‘ST' at the top of it. The hilt of the weapon appears to be made from gold and mithral. The top of the hilt has a skull with red ruby eyes set in it. The hilt is wrapped with bone white cord which provides exceptional grip. When a critical hit is scored the wielder hears unnerving sinister laughter. If you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		weaponOptions : {
			baseWeapon : "longsword",
			regExpSearch : /^(?=.*longsword)(?=.*vicious).*$/i,
			name : "Vicious Longsword",
			description : "On natural 20 to hit: +7 damage",
			selectNow : true,
		}
	},
	"vicious rapier: hag's clawblade (al:sa-11a)" : {
		name : "Hag's Clawblade, Vicious Rapier (AL:SA-11A)",
		source : [["AL:SA","11A"]],
		type : "weapon (sword)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This magic rapier has a malachite blade and bears jagged claw-like protrusions along its length. The hilt changes appearance each dusk, which has no effect on its other properties. When I roll a 20 on my atk roll w/ this weapon, the target takes an extra 7 weapon dmg.",
		descriptionFull : "This rapier has a malachite blade and bears jagged, claw-like protrusions along its length. Its hilt changes its appearance each dusk, which has no effect on its other properties. If you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		weaponOptions : {
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*rapier)(?=.*vicious)(?=.*clawblade)(?=.*hag|hag's).*$/i,
			name : "Hag's Clawblade, Vicious Rapier",
			description : "Finesse; On nat 20 to hit: +7 damage",
			selectNow : true,
		},
	},
	"vorpal scimitar (ddal7-16)" : {
		name : "Vorpal Scimitar (DDAL7-16)",
		source : [["AL","S7"]],
		type : "weapon (scimitar)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		allowDuplicates : true,
		description : "This +3 scimitar hums and vibrates with energy, slicing through obstacles with ease and ignoring slashing dmg resistance. If it doesn't claim a sentient life each day, I'm easily angered and frustrated by the smallest obstacles. On a natural 20 to hit, the sword cuts off 1 head (potentially killing target). If target has no head, is immune to slashing dmg, has legendary actions, or its neck is too wide, +6d8 slashing dmg instead.",
		descriptionFull : "This blade hums and vibrates with great energy, and slices through obstacles with the greatest of ease. If the sword does not claim the life of a sentient creature each day, you find that you are easily angered and become frustrated by even the smallest obstacles. You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.\n   When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.",
		weaponsAdd : { select : ["Vorpal Scimitar"], options : ["Vorpal Scimitar"] },
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
	"vorpal scimitar: abi teos's machete (rmh-9/rmh-10)" : {
		name : "Abi Teos's Machete (Vorpal Scimitar)",
		source : [["AL:R","9&10"]],
		type : "weapon (scimitar)",
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		allowDuplicates : true,
		description : "This 17-in machete seems dull & chipped. Its azabache hilt is carved with writhing leeches & blonde hair hangs from the pommel. The sword's namesake wantonly cut selva & conducted excessive ritual sacrifice. At the right angle, the hilt reads: “A mi, volpal” which means “A blade for me.” The +3 sword ignores slashing resistance & does +2d8 to plants. When I hit, I take 1d6 necrotic. On a 20, it cuts off 1 head (possibly = death). If target has no head, is immune to slashing, has legendary actions, or neck is too wide, +6d8 slashing dmg instead. On a 1, I gain 1 lvl exhaustion. Remove by DC 12 Con save on LR. If fail, gain another lvl.",
		descriptionFull : "The 17-inch blade of this tool-weapon appears deceptively dull and chipped, its hilt is carved azabache (a mystical stone believed to ward off malevolent spirits), and its handle is carved with a disturbing depiction of writhing, bloated leeches. The bohika (shaman) after which the weapon is named used it to wantonly cut down selva and conduct excessive ritual sacrifice to their patron. A lock of unmarred blonde hair dangles from the pommel, its significance lost to time. If the blade is held at the right angle in light, a scrawled phrase appears on the hilt: “A mi, volpal” which translates from its indigenous tongue as “A blade for me.”"+
		"\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage and deals an extra 2d8 slashing damage to plants and Plant creatures."+
		"\n   When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit."+
		"\n   " + toUni("Curse") + ". Whenever you deal damage with Abi-Teos's machete, you take 1d6 necrotic damage as the weapon drains your blood. If you roll a 1 on an attack roll made with the weapon, the leeches carved into the handle animate and crawl down your throat—infesting you with throat leeches (a disease). You must succeed on a DC 12 Constitution saving throw or gain 1 level of exhaustion that can only be removed by succeeding on a DC 12 Constitution saving throw upon completing a long rest. If the saving throw fails, you gain another level of exhaustion. If a successful saving throw reduces your exhaustion level below 1, you recover from the disease.",
		weaponsAdd : { select : ["Abi Teos's Machete, Vorpal Scimitar"], options : ["Abi Teos's Machete, Vorpal Scimitar"] },
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
}
	
MagicItemsList["al weapons +1, +2, or +3"] = {
		name : "AL Weapons +1, +2, or +3",
		type : "weapon (any)",
		descriptionFull : "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: uncommon (+1), rare (+2), or very rare (+3).",
		allowDuplicates : true,
		choicesNotInMenu : true,
		choices : ["+1 Battleaxe: Rebel's Yell (CCC-RPR-1)","+1 Battleaxe (DDEX2-11)","+1 Dagger: The Wolves' Claw (CCC-BMG-MOON2-1)","+1 Dagger: Arthyn Dagger (CCC-GHC-BK3-1)","+1 Dagger: Ornate (CCC-SCAR1-1)","+1 Flail: Book (CM)","+1 Glaive: Bone-Pommeled (CCC-BMG-33 PHLAN3-3)","+1 Glaive (CCC-TRI-17 ALLY1-2)","+1 Greatsword: Arrk's Sword (CCC-GLIP-1-1)","+1 Halberd (DDEP5-2)","+1 Hand Crossbow: Widowmaker (CCC-BMG-29 HILL2-2)","+1 Lance: Duergar Drill Bit (CCC-APL1-1)","+1 Longbow (CCC-BMG-MOON2-2)","+1 Longbow: Gwa'thern Faln (DDHC-MORD-1)","+1 Longsword (DDEP1)","+1 Longsword: Goblin Render (DDIA05)","+1 Mace: Mace of the Tranquil Oasis (CCC-SALT1-2)","+1 Maul: The Smasher (PotA)","+1 Quarterstaff (CCC-TRI-11 OLMA1-1)","+1 Quarterstaff (DDAL7-3)","+1 Quarterstaff (DDEX3-16)", "+1 Rapier (DDEX3-2)","+1 Scimitar: Ripper's Claw (CCC-ODFC2-1)","+1 Scimitar (CCC-PRIORY-2)","+1 Shortbow (CCC-ANIME1-1)","+1 Shortbow: Moon Strike (CCC-TAROT1-6)","+1 Shortbow (DDEX3-16)","+1 Shortsword (CCC-CIC-6)","+1 Shortsword: Icicle (CCC-GHC-5)","+1 Shortsword: Foxblade (CCC-SRCC1-2)","+1 Shortsword (DDEP7-1)","+1 Trident (DDEP7-1)","+1 War Pick (CCC-TRI-9 BHC1-0)","+1 Warhammer: Torag's Hammer (CCC-TAROT1-4)","+1 Weapon (DDHC-TOA-8)","+2 Bow (DDEX3-7)","+2 Dagger (CCC-GHC-6)","+2 Dagger (SJ-DC-INAS-3)","+2 Dagger: EPA (Trading Post)","+2 Glaive: Azure Sky (SJ-DC-ANGKA-6)","+2 Greataxe: Whisper (DDHC-TOA-8)","+2 Greataxe: Gleaming (SJ-DC-NMB1-3)","+2 Greataxe: Gythka (SJ-DC-PAT-1)","+2 Greatsword: Tyr's Justice (CCC-GHC-8)","+2 Greatsword: Githyanki Greater Silver Sword (CCC-TRI-27 ROSE1-2)","+2 Greatsword (FR-DC-AEG-6)","+2 Greatsword (FR-DC-MELB-1-2)","+2 Greatsword: Agony (SJ-DC-ANGKA-1)","+2 Greatsword: Lux Machaera (SJ-DC-LIGA6)","+2 Greatsword (SJ-DC-RH-1)","+2 Hand Crossbow (SJ-DC-ECHO-4)","+2 Hand Crossbow (SJ-DC-ROCK-1)","+2 Heavy Crossbow: First Blood (SJ-DC-TBS-4)","+2 Longbow: Deep's Reach (CCC-BMG-MOON12-2)","+2 Longbow: Giant's Bane (CCC-GHC-9)","+2 Longbow (DDEP5-2)","+2 Longbow: Bloodthirst (SJ-DC-EPOCH-1)","+2 Longbow: Friendbow (SJ-DC-SCR-1)","+2 Longbow: Craygen's Bow (SJ-DC-SSM-UBCon-1)","+2 Longsword: Elven Blade of the Third Age (CCC-BWM-2)","+2 Longsword: Stout (CCC-GHC-BK1-5)","+2 Longsword: Blazherserblane (FR-DC-LIGA-2)","+2 Longsword: Westdeck Sword (SJ-DC-CGG-2)","+2 Maul: Manyoshu's Kanabo (FR-DC-ONI-1)","+2 Maul: Coral Great Hammer (SJ-DC-DEN-H5)","+2 Maul: Space Clown Hammer (SJ-DC-FXC-JEFF-1)","+2 Morningstar: Mourning Star (SJ-DC-ANGKA-5)","+2 Net (SJ-DC-MAD-2)","+2 Pike: Horizon Caller (SJ-DC-CONMAR-1)","+2 Quarterstaff: Herfren's Marshaling Wand (SJ-DC-BST-2)","+2 Rapier: The Sixth Sword (CCC-HAL-3)","+2 Scimitar (SJ-DC-DRA-1)","+2 Scimitar (SJ-DC-IGC-ECP-5)","+2 Shortsword: Smoke (CCC-SFBAY1-1)","+2 Shortsword (DDAL0-13)","+2 Trident (CCC-CIC-12)","+2 War Pick (CCC-MYR1-1)","+2 Weapon (PotA)","+2 Whip: Flogger's Bouquet (SJ-DC-ENIGMA)","+2 Yklwa: Naga's Warning (SJ-DC-PAT-2)","+3 Battleaxe: Skeggöx (DDAL5-9)","+3 Dagger (CCC-TRI-29 TIDE1-1)","+3 Glaive: Empyrean's Unbreaking Glaive (WBW-DC-Sunlit-6)","+3 Greatsword: Wyrmguard (PS-DC-STRAT-DRAGON-5)","+3 Greatsword (WBW-DC-PLS-1)","+3 Hand Crossbow: Belmore (WBW-DC-PHP-LCL-2)","+3 Lance: Dream Whirl (CCC-BMG-39 HULB3-3)","+3 Piercing Weapon: Midnight Phaeton's Horn (CCC-ODFC2-3)","+3 Pike: Krahharuan Fork (DDAL7-10)","+3 Scimitar (DDEP6-2)","+3 Shortsword: Harengon's Freedom (AL:SA-11A)","+3 Spear: Blood-Drinker's Backbone (RMH-5/RMH-6)"],
		"+1 battleaxe: rebel's yell (ccc-rpr-1)" : {
			name : "Rebel's Yell, +1 Battleaxe (CCC-RPR-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "I have a +1 bonus to attack and damage rolls made with this magic weapon. It has the War Leader property, which lets me use an action to make my voice carry clearly for up to 300 ft until the end of my next turn.",
			descriptionFull : "You have a +1 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon has the War Leader minor property, which allows you to use an action to cause my voice to carry clearly for up to 300 feet until the end of my next turn.\n   Prior to the War of the Silver Marchers, Conarg Skullslasher of the Uthgardt Griffon tribe underwent a spirit quest to find the axe of his tribe's greatest chieftain, Kralgar Bonesnapper. After nearly five years of roaming the north, the barbarian finally located the weapon and reclaimed it by defeating a sea hag near Luskan named Mirta Spleencarver. He returned to his people a hero and quickly ascended to the position of chieftain himself.\n   Throughout his rule, Kralgar Bonesnapper struggled endlessly to fulfill his goal of conquering and ruling one of the great cities of the North. When the orcs and giants rallied against Luruar, Conarg saw a chance to fulfill his dream and become the greatest Uthgardt chieftain that ever lived. He used the axe's unique properties to inspire his kin to ally with the orcs and giants in War of the Silver Marches.\n   Unfortunately for Conarg, the Griffon tribe came to an untimely end fighting the dwarves of Mithral Hall, Citadel Adbar, and Citadel Felbar, and his axe was lost on the field of battle. It later resurfaced in the Moonsea region.",
			action : [["action", "Rebel's Yell (300ft Voice)"]],
			weaponsAdd : { select : ["Rebel's Yell, +1 Battleaxe"], options : ["Rebel's Yell, +1 Battleaxe"] },
			},
		"+1 battleaxe (ddex2-11)" : {
			name : "+1 Battleaxe (DDEX2-11)",
			source : [["AL","S2"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This ancient axe is made of grey stone marbled with purple veins. Its head is inscribed with ancient dwarven runes and its haft is covered with the cured hide of a purple worm. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Battleaxe +1"], options : ["Battleaxe +1"] },
			},
		"+1 dagger: the wolves' claw (ccc-bmg-moon2-1)" : {
			name : "The Wolves' Claw, +1 Dagger (CCC-BMG-MOON2-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This serrated blade looks like a 100 wolf claws jumbled together & has a wolf's head pommel. I gain a +1 bonus to atk & dmg rolls made with it. I can also sense the emotions of wolves in 30 ft. If I concentrate on the dagger, I can ask the DM what any one wolf in range is feeling & be answered truthfully.",
			descriptionFull : "This serrated blade has the visage of a hundred wolves' claws all jumbled together with a wolf 's head for a pommel. You gain a +1 bonus to attack and damage rolls made with this magic weapon. You can also sense the emotions of wolves when you're within 30 feet of them. If you concentrate on the dagger for a moment you ask the Dungeon Master what any one wolf in range is feeling. They must tell you the truth.",
			weaponsAdd : { select : ["The Wolves' Claw, Dagger +1"], options : ["The Wolves' Claw, Dagger +1"] },
			},
		"+1 dagger: arthyn dagger (ccc-ghc-bk3-1)" : {
			name : "+1 Arthyn Dagger (CCC-GHC-BK3-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This fine dagger was crafted in the prominent port city that bears its name. When held a certain way in direct sunlight, the mixture of copper & iron alloys in the blade causes a flickering flame-like effect. I have a +1 bonus to attack & damage rolls made with this magic weapon.",
			descriptionFull : "This fine dagger was crafted in the prominent port city that bears its name. The mixture of copper and iron alloys used to forge the dagger can cause a flickering flame-like effect when held a certain way in direct sunlight. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Arthyn Dagger +1"], options : ["Arthyn Dagger +1"] },
			},
		"+1 dagger: ornate (ccc-scar1-1)" : {
			name : "+1 Ornate Dagger (CCC-SCAR1-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This undersized dagger has a blackened blade with a fuller running almost its entire length & gold trimming on the handle. It's very light & could easily be tucked into sleeve or boot. I have a +1 bonus to attack & damage rolls made with this magic weapon.",
			descriptionFull : "This undersized dagger has a blackened blade with a fuller running almost its entire length, with gold trimming on the handle. It is very light and could easily be tucked into sleeve or boot. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Ornate Dagger +1"], options : ["Ornate Dagger +1"] },
			},
		"+1 flail: book (cm)" : {
			name : "Book Flail +1 (CM)",
			source : ["CM"],
			type : "weapon (flail)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : false,
			description : "A remnant from Fistania's animated library, this book is connected to a length of chain and is entitled Martial Attack Techniques. It may be used as a magical flail that grants a +1 bonus to attack and damage rolls.",
			descriptionFull : "A remnant from Fistania's animated library, this book is connected to a length of chain and is entitled Martial Attack Techniques. It may be used as a magical flail that grants a +1 bonus to attack and damage rolls.",
			weight : 2,
			weaponsAdd : { select : ["Book Flail +1"], options : ["Book Flail +1"] },
			},
		"+1 glaive: bone-pommeled (ccc-bmg-33 phlan3-3)" : {
			name : "Bone-Pommeled Glaive +1 (BMG-33 PHLAN3-3)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "The lower portion of this glaive's haft is made of some unidentified creature's thigh or shoulder joint. The pommel has purposefully notched edges so it can no longer function in the joint socket. I have a +1 bonus to atk & dmg rolls made with this weapon.",
			descriptionFull : "The entire lower portion of the weapon's haft is made of some unidentified creature's thigh or shoulder joint. The pommel has purposely notched edges and looks as though it could no longer function in the socket of whatever it came from. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Bone-Pommeled Glaive +1"], options : ["Bone-Pommeled Glaive +1"] },
			},
		"+1 glaive (ccc-tri-17 ally1-2)" : {
			name : "+1 Glaive (CCC-TRI-17 ALLY1-2)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "Despite looking like a chalk drawing filled with gaps, this glaive is solid all the way through. It feels chalky & leaves chalk residue when touched. I have a +1 bonus to atk & dmg rolls made with this weapon.",
			descriptionFull : "Despite appearing to be a chalk drawing filled with gaps due to the rough surface it was drawn on, it is solid all the way through and holds a keen edge. It feels chalky, and leaves a chalky residue when touched. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Glaive +1"], options : ["Glaive +1"] },
			},
		"+1 greatsword: arrk's sword (ccc-glip-1-1)" : {
			name : "Arrk's Greatsword +1 (CCC-GLIP-1-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "The greatsword has a long, rune covered blade that drips blood whenever it's unsheathed. The wide blade is decorated with Netherese runes and the handle is wrapped in basilisk hide. A large gem pulses at the center of the crossguard. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "You have a +1 bonus to attack and damage rolls made with this magic weapon. Arrk was a troll mercenary known for his brutality, loyalty, and reliability. He worked throughout the Moonsea region and was infamous for carrying an enchanted greatsword that dripped blood whenever it was unsheathed, which Arrk would lick when he was bored or annoyed.\n   Arrk vanished decades ago while exploring ancient ruins in the Troll Hills of Thar. His sword was recovered not long after the founding of Glip Dak. While the sword could once store and release powerful spells, something unusual is now stored within and refuses to be released.\n   The greatsword has a long, rune covered blade that drips blood whenever the sword is unsheathed. The wide blade is decorated with Netherese runes, and the handle is wrapped in basilisk hide. A large gem pulses at the center of the cross guard.",
			weaponsAdd : { select : ["Arrk's Greatsword +1"], options : ["Arrk's Greatsword +1"] },
			},
		"+1 halberd (ddep5-2)" : {
			name : "+1 Halberd (DDEP5-2)",
			source : [["AL","S5"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This halberd is made from a slender piece of white wood is polished to a high shine and tipped with a silver-and-gold filigree blade. It never gets dirty. I have a +1 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "This halberd is made from a slender piece of white wood is polished to a high shine and tipped with a silver-and-gold filigree blade. This item never gets dirty. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Halberd +1"], options : ["Halberd +1"] },
			},
		"+1 hand crossbow: widowmaker (ccc-bmg-29 hill2-2)" : {
			name : "Widowmaker, +1 Hand Crossbow (BMG-29 HILL2-2)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This black wooden hand crossbow is engraved with a blood red heart that bleeds every one of its bolts kills someone. I gain a +1 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "This black wooden hand crossbow has a blood red heart engraved on it that bleeds a little every a bolt from it kills someone. You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Widowmaker, +1 Hand Crossbow"], options : ["Widowmaker, +1 Hand Crossbow"] },
			},
		"+1 lance: duergar drill bit (ccc-apl1-1)" : {
			name : "Broken Duergar Drill Bit (+1 Lance, APL1-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "Though shorter than a purpose-made lance, the King of the Blue Bayou Bullywug redesigned this broken bit into an uncommonly effective weapon. While underground, I always know my depth below the surface & the direction to the nearest staircase, ramp, or path leading upward. I have a +1 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "Though shorter than a purpose-made lance, the King of the Blue Bayou Bullywug has redesigned this broken bit of mining kit into an uncommonly effective weapon. Additionally, while underground, the bearer always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Broken Duergar Drill Bit, Lance +1"], options : ["Broken Duergar Drill Bit, Lance +1"] },
			},
		"+1 longbow (ccc-bmg-moon2-2)" : {
			name : "+1 Longbow (CCC-BMG-MOON2-2)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This elven bow of excellent craftsmanship was carved from dark wood, with silver runes decorating its length. The silverwork contains part of an old elvish poem: “Seamless dreams tide through fleeting hands, as upon the wind she toils with a fellon thread, whispering mellowed breath upon bonds of silver.” I have a +1 bonus to atk & dmg rolls made with this weapon.",
			descriptionFull : "An elven bow of excellent craftsmanship. Its limbs are carved from dark wood, with silver runes decorating its length. The silverwork seems to be part of an old elvish poem: “Seamless dreams tide through fleeting hands, as upon the wind she toils with a fellon thread, whispering mellowed breath upon bonds of silver.” You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Longbow +1"], options : ["Longbow +1"] },
			},
		"+1 longbow: gwa'thern faln (ddhc-mord-1)" : {
			name : "Gwa'thern Faln, +1 Longbow (DDHC-MORD-1)",
			source : [["AL","MToF"]],
			rarity : "rare",
			magicItemTable : "?",
			allowDuplicates : true,
			description : "This ancient longbow is made from a thick, gnarled piece of yew & polished to a lustrous shine. The weapon (Shadowbreaker in Elvish) was once wielded by a legendary elven warrior & can also be used as a quarterstaff. I gain a +1 bonus to atk & dmg rolls made with it. By whispering the bow's name & firing an arrow at a point I can see in 60 ft, I can cast faerie fire (save DC 15) as an action once per dawn.",
			descriptionFull : "This ancient longbow's staff is fashioned from a thick, gnarled piece of yew and polished to a lustrous shine. The weapon (whose name means Shadowbreaker in Elvish) was once wielded by a legendary elven warrior You gain a +1 bonus to attack and damage rolls made with this magic weapon—which can also be used as a quarterstaff. By whispering the bow's name and firing an arrow at a point you can see within 60 feet, you can use an action to cast faerie fire (save DC 15). Once used, this property of the bow can't be used again until the following dawn.",
			weaponsAdd : { select : ["Gwa'thern Faln, Longbow +1","Gwa'thern Faln, Quarterstaff +1"], options : ["Gwa'thern Faln, Longbow +1","Gwa'thern Faln, Quarterstaff +1"] },
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
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This elegant blade gleams as though newly forged, never accumulating dirt or grime. I have a +1 bonus to atk & dmg rolls made with this weapon.",
			descriptionFull : "This elegant blade gleams as though newly forged, never accumulating dirt or grime. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Longsword +1"], options : ["Longsword +1"] },
			},
		"+1 longsword: goblin render (ddia05)" : {
			name : "Goblin Render, +1 Longsword (DDIA05)",
			source : [["AL","S5"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This oddly-shaped +1 longsword is covered in Giant runes that read “Small death”. Within 20 ft of a goblin, the weapon glows deep blue and the runes flare with yellow light. An Intelligence (History) check of 15 or more reveals that this blade is a giant heritage item and rumored to have slain many goblins.",
			descriptionFull : "This +1 long sword is oddly shaped and covered in Giant runes that read “Small death”. When the bearer of this blade is within 20 ft of a goblin, the weapon emits a deep blue glow and the runic script flares with a yellow light. An Intelligence (History) check of 15 or more reveals that this blade is a giant heritage item and rumored to have slain many goblins.\n   You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Goblin Render, Longsword +1"], options : ["Goblin Render, Longsword +1"] },
			},
		"+1 mace: mace of the tranquil oasis (ccc-salt1-2)" : {
			name : "Mace of the Tranquil Oasis +1 (SALT1-2)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This mace is covered in filigree depicting a palm-lined oasis, the palm leaves converging to hold the head of the mace. The water in the oasis has been shaped in distinct patterns that may be words, but the language escapes all methods of translation. I have a +1 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "The mace is covered in filigree depicting a palm-lined oasis, the palm leaves converging to hold the head to the mace. The water in the oasis seems to have been shaped into distinct patterns that may have been words at one time, but the language escapes magical and mundane means of translation. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Mace of the Tranquil Oasis +1"], options : ["Mace of the Tranquil Oasis +1"] },
			},
		"+1 maul: the smasher (pota)" : {
			name : "The Smasher, +1 Maul (PotA)",
			source : [["AL","PotA"]],
			rarity : "rare",
			magicItemTable : "?",
			allowDuplicates : true,
			description : "This +1 maul is named “The Smasher” & when given the command: “This celebration isn't going to start itself!” as an action, pours out dwarven spirits until my next turn starts. “Stream” is 1 gal. “Fountain” is 5 gal. “Geyser” is 30 gal in 30 ft × 1 ft geyser. As a bonus action, aim the geyser at visible target, which makes a DC 13 Str save or takes 1d4 bludgeoning & falls prone. If it's an object, knock it over or push 15 ft.",
			descriptionLong : "This +1 maul is named “The Smasher” & when given the command: “This celebration isn't going to start itself!” as an action, pours out dwarven spirits until my next turn starts. “Stream” produces 1 gallon. “Fountain” produces 5 gallons. “Geyser” produces 30 gallons of spirits that gushes forth in a geyser 30 ft long by 1 ft wide. As a bonus action while holding it, I can aim the geyser at a visible creature w/i 30 ft. The target must pass a DC 13 Str save or take 1d4 bludgeoning dmg & fall prone. If I target an unattended object weighing up to 200 lb, I knock it over or push it up to 15 ft away.",
			descriptionFull : "This maul is named “The Smasher” and when given the command, “This celebration isn't going to start itself!” acts as a decanter of endless water that dispenses potent dwarven spirits instead. This is a rare magic item. You have a +1 bonus to attack and damage rolls made with this magic weapon.\n   You can use an action to speak the command words, whereupon an amount of potent dwarven spirits pours out of the maul. It stops pouring out at the start of your next turn. Choose from the following options:\n \u2022 \"Stream\" produces 1 gallon of spirits.\n \u2022 \"Fountain\" produces 5 gallons of spirits.\n \u2022 \"Geyser\" produces 30 gallons of spirits that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the maul, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.\n   This weapon was given by the Harpers in exchange for Orcsplitter.",
			weaponsAdd : { select : ["The Smasher, Maul +1"], options : ["The Smasher, Maul +1"] },
			},
		"+1 quarterstaff (ccc-tri-11 olma1-1)" : {
			name : "+1 Quarterstaff (CCC-TRI-11 OLMA1-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This quarterstaff looks like a tree hit by lightning & is made from a copper dragon's bones & blood. The tree's branches hold the wyrmling's head, which chatters & covers the staff with electric discharge with each kill it makes. I have a +1 bonus to attack & damage rolls made with this magic weapon.",
			descriptionFull : "This quarterstaff is made from a copper dragon's bones and blood, along with wood to make it look like a tree hit by lightning. The tree's branches hold the wyrmling dragon's head, which chatters and covers the staff with electric discharge with each kill made with this weapon. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Quarterstaff +1"], options : ["Quarterstaff +1"] },
			},
		"+1 quarterstaff (ddal7-3)" : {
			name : "+1 Quarterstaff (DDAL7-3)",
			source : [["AL","S7"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This quarterstaff features a blunted iron hook on one end and was used by dinosaur wranglers to goad ornery beasts into doing what they're supposed to. The staff is carved from dark smooth wood and decorated with feathers. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This quarterstaff features a blunted iron hook on one end and is used by dinosaur wranglers to goad ornery beasts in their charge into doing what they're supposed to. The staff is carved from dark, smooth wood and decorated with feathers. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Quarterstaff +1"], options : ["Quarterstaff +1"] },
			},
		"+1 quarterstaff (ddex3-16)" : {
			name : "+1 Quarterstaff (DDEX3-16)",
			source : [["AL","S3"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "The weapon is marked with the symbol of House Gos of Mulmaster. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Quarterstaff +1"], options : ["Quarterstaff +1"] },
			},
		"+1 rapier (ddex3-2)" : {
			name : "+1 Rapier (DDEX3-2)",
			source : [["AL","S3"]],
			rarity : "uncommon",
			magicItemTable : "F",
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
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This scimitar is never dirty, no matter how much blood or dirt it touches. The pommel resembles a leech-like worm that wraps around the wielder's hand. The worm nips at the hand & draws blood if it's been more than 24 hrs since the weapon has fed. I have a +1 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "This scimitar is never dirty, no matter how much blood or dirt might have touched its blade. The pommel is formed to resemble a leech-like worm that wraps around the hand that is wielding it. The worm will nip at the hand and draw blood if it has been more than 24 hours since the weapon has last fed.You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Ripper's Claw, Scimitar +1"], options : ["Ripper's Claw, Scimitar +1"] },
			},
		"+1 scimitar (ccc-priory-2)" : {
			name : "+1 Scimitar (CCC-PRIORY-2)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "The hilt of this scimitar is a gilded serpent with jaws forming the pommel. Its shimmering red tongue forms a blade that ends in a cruel fork. While holding this weapon, I hiss my S's when speaking in Common. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The hilt of this scimitar is a gilded serpent with jaws forming the pommel. Its shimmering red tongue forms a blade that ends in a cruel fork. While holding this weapon, you hiss your S's when speaking in Common. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Scimitar +1"], options : ["Scimitar +1"] },
			},
		"+1 shortbow (ccc-anime1-1)" : {
			name : "+1 Shortbow (CCC-ANIME1-1)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This shortbow is crafted from dark wood. Red and blue feathers adorn the top of the bow. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortbow +1"], options : ["Shortbow +1"] },
			},
		"+1 shortbow: moon strike (ccc-tarot1-6)" : {
			name : "Moon Strike, +1 Shortbow (TAROT1-6)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This intricately carved shortbow was a gift from the Moon Elves of Cormanthor. In darkness or low light, arrows shot from this bow appear as bright streaks of moonlight as they fly towards their target. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This intricately carved shortbow was a gift from the Moon Elves of Cormanthor. In darkness or low light, arrows shot from this bow appear as bright streaks of moonlight as they fly towards their target. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Moon Strike, Shortbow +1"], options : ["Moon Strike, Shortbow +1"] },
			},
		"+1 shortbow (ddex3-16)" : {
			name : "+1 Shortbow (DDEX3-16)",
			source : [["AL","S3"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "The weapon is marked with the symbol of House Gos of Mulmaster. I have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortbow +1"], options : ["Shortbow +1"] },
			},
		"+1 shortsword (ccc-cic-6)" : {
			name : "+1 Shortsword (CCC-CIC-6)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This sword is made of a strange white metal that prevents tarnishing and makes it immune to attacks from rust monsters. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortsword +1"], options : ["Shortsword +1"] },
			},
		"+1 shortsword: icicle (ccc-ghc-5)" : {
			name : "Icicle, +1 Shortsword (CCC-GHC-5)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This shortsword is drow in design & instantly recognizable to members of House Nanther. Its blade is sheathed in razor-sharp magical ice that's cool to the touch. While the sword is on my person, I can speak & understand Undercommon. I have a +1 bonus to atk & dmg rolls made with this weapon.",
			descriptionFull : "This shortsword is drow in design, and its blade is sheathed in razor-sharp magical ice that is cool to the touch. While the sword is on your person, you gain the ability to speak and understand Undercommon. In addition, the sword is instantly recognizable to members of House Nanther. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			languageProfs : ["Undercommon"],
			weaponsAdd : { select : ["Icicle, Shortsword +1"], options : ["Icicle, Shortsword +1"] },
			},
		"+1 shortsword: foxblade (ccc-srcc1-2)" : {
			name : "Foxblade, +1 Shortsword (CCC-SRCC1-2)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This shortsword appears rusted due to its unique crimson-orange color. A triangular white mother-of-pearl inlay near the hilt makes the blade resemble a fox's tail. The crossguard is made of the same unique metal, set with yellow and black stones that resemble vulpine eyes. Crafted by forest gnomes, this weapon was known as the Foxblade & was lost during Ylraphon's destruction by dragons in the 14th century. I have a +1 bonus to atk & dmg rolls made with this weapon.",
			descriptionFull : "This shortsword appears rusted at first glance, but that is due to the unique crimson-orange color of the metal. Combined with this color, a triangular white mother-of-pearl inlay near the hilt causes the blade to resemble the coloring of a fox's tail. The crossguard is made of the same unique crimson metal, set with round yellow and black stones made to resemble vulpine eyes. This description matches that of a magical weapon lost during Ylraphon's destruction by dragons in the 14th century. Said to have been crafted by forest gnomes, it was known as the Foxblade. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Foxblade, Shortsword +1"], options : ["Foxblade, Shortsword +1"] },
			},
		"+1 shortsword (ddep7-1)" : {
			name : "+1 Shortsword (DDEP7-1)",
			source : [["AL","S7"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This magic sword has a basket hilt that's forged to resemble a woman draped in kelp and nets, similar to a ship's figurehead. When used in battle, the woman sings a rather obscene sea shanty audible to anyone within 30 ft. I have a +1 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "This weapon has a basket hilt that's forged to resemble a woman draped in kelp and nets, similar in appearance to a ship's figurehead. When used in battle, the woman sings a rather obscene sea shanty audible to anyone within 30 ft. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortsword +1"], options : ["Shortsword +1"] },
			},
		"+1 trident (ddep7-1)" : {
			name : "+1 Trident (DDEP7-1)",
			source : [["AL","S7"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This rusted trident is crusted over in barnacles and draped in wet seaweed. Its wielder can hold their breath underwater for twice the normal duration and has a +1 bonus to attack and damage rolls made with the magic weapon.",
			descriptionFull : "This rusted weapon is crusted over in barnacles and draped in wet seaweed. Its wielder can hold their breath underwater for twice the normal duration. You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Trident +1"], options : ["Trident +1"] },
			},
		"+1 war pick (ccc-tri-9 bhc1-0)" : {
			name : "+1 War Pick (CCC-TRI-9 BHC1-0)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This pick is of dwarven make, equally suited for stonework & combat. When used as a mining implement, dwarves can apply twice their proficiency bonus to any skill checks related to stone, including their stonecunning ability. I have a +1 bonus to attack & damage rolls made with this magic weapon.",
			descriptionFull : "This pick appears to be of dwarven make, and is equally suited to stonework as it is to combat. When used in combat, you have a +1 to attack and damage rolls made with this weapon. When used as a mining implement, it allows dwarves to apply twice their proficiency bonus to any skill rolls related to stone, including their stonecunning ability.",
			weaponsAdd : { select : ["War Pick +1"], options : ["War Pick +1"] },
			},
		"+1 warhammer: torag's hammer (ccc-tarot1-4)" : {
			name : "Torag's Hammer, +1 Warhammer (TAROT1-4)",
			source : [["AL","CCC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "Torag “crafted” this magical warhammer from the thighbone of the biggest, meanest troll to assail Goldenfields in recent memory. I swear the weapon feeds on gore, growing slightly larger after every encounter. Measurements don't support this belief but Torag's Hammer is always uncannily clean... I have a +1 bonus to atk and dmg rolls made with this weapon.",
			descriptionFull : "Torag “crafted” this magical warhammer from the thighbone of the biggest, meanest troll to assail Goldenfields in recent memory. Those who wield it swear the weapon feeds on gore, growing slightly larger after every bloody encounter. Measurements don't support this belief. However, Torag's Hammer is always uncannily clean... You have a +1 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Torag's Hammer, Warhammer +1"], options : ["Torag's Hammer, Warhammer +1"] },
			},
		"+1 weapon (ddhc-toa-8)" : {
			name : "+1 (DDHC-TOA-8)",
			source : [["AL","S7"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This weapon contains wood from a sentient tree. The spirit of the tree remains in the wood, and therefore the weapon contains a sentience. I have a +1 bonus to attack and damage rolls made with this magic weapon and feel the desires of the tree spirit within.",
			descriptionFull : "This weapon contains wood from a sentient tree. The spirit of the tree remains in the wood, and therefore the weapon contains a sentience. You have a +1 bonus to attack and damage rolls made with this magic weapon and feel the desires of the tree spirit within.",
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
			description : "This +2 weapon has the sentinel property and glows dimly in the presence of humans. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This +2 weapon has the sentinel property and glows dimly in the presence of humans. You have a +2 bonus to attack and damage rolls made with this magic weapon. (Alternate reward while Oathbow was removed)",
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
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This exquisitely crafted dagger bears the faces of tragedy & comedy etched into the pommel. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dagger +2"], options : ["Dagger +2"] },
			},
		"+2 dagger (sj-dc-inas-3)" : {
			name : "+2 Dagger (SJ-DC-INAS-3)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This dagger bears the insignia of House Novella on its ornate hilt. I have a +2 bonus to atk and dmg rolls made with the magic weapon.",
			descriptionFull : "This weapon has additional flavor; it bears the insignia of House Novella on its ornate hilt. This feature has no mechanical effect and is only relevant in this or other adventures in the Chromaspace setting.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dagger +2"], options : ["Dagger +2"] },
			},
		"+2 dagger: epa (trading post)" : {
			name : "+2 Dagger (EPA)",
			source : [["AL:FC","DWB"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This dagger's blade is coated in a thin layer of unknown chemical that can never be washed away. The chemical was thought to be completely destroyed by the Forgotten Realms environmental protection agency centuries ago, due to the extreme* (normal) damage it does when in contact with plants. Druids are sure to try to confiscate this fell blade should they see it. I have a +2 bonus to atk and dmg rolls made with this magic weapon.",
			descriptionFull : "The blade of this dagger is coated in a thin layer of unknown chemical that can never be washed away. This chemical was thought to be completely destroyed by the Forgotten Realms environmental protection agency centuries ago, due to the extreme* (normal) damage it does when in contact with plants. Druids are sure to try to confiscate this fell blade should they see it (Custom flavor from the 2023 DWB Trading Post).\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dagger +2"], options : ["Dagger +2"] },
			},
		"+2 glaive: azure sky (sj-dc-angka-6)" : {
			name : "Azure Sky, +2 Glaive (SJ-DC-ANGKA-6)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "The blade of this glaive is made from a single flawless sapphire, shimmering with a mesmerizing azure glow. Its shaft, intricately carved from the bone of an ancient wyrm, hums with power, guiding my hand with grace. I have a +2 bonus to atk and dmg rolls made with this magic weapon. The glaive also whispers warnings, giving +2 initiative if not incapacitated.",
			descriptionFull : "The blade of this glaive is made from a single, flawless sapphire, shimmering with a mesmerizing azure glow, while its shaft, intricately carved from the bone of an ancient wyrm, hums with power, guiding the hand of its wielder with grace.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["Azure Sky, Glaive +2"], options : ["Azure Sky, Glaive +2"] },
			},
		"+2 greataxe: whisper (ddhc-toa-8)" : {
		name : "Whisper, +2 Greataxe (DDHC-TOA-8)",
			source : [["AL","S7"]],
			rarity : "very rare",
			magicItemTable : "H",
			attunement : true,
			allowDuplicates : true,
			description : "Whisper is normally a +1 greataxe. If I attune to this magic weapon, it becomes a +2 greataxe, I gain darkvision to 120 ft, and advantage on Stealth checks. While attuned, I can only speak in whispers. I have either a +1 or +2 bonus to atk and dmg rolls made with this axe.",
			descriptionFull : "Whisper is normally a +1 Greataxe. However, if the wielder attunes to the weapon, it becomes a +2 greataxe, the wielder gains darkvision to 120 feet, and advantage on Stealth checks. However, while attuned the wielder can only speak in whispers. You have either a +1 or +2 bonus to attack and damage rolls made with this magic weapon.",
			vision : [["Darkvision", "fixed 120"], ["Darkvision", "120"]],
			weaponsAdd : { select : ["Whisper, Greataxe +2"], options : ["Whisper, Greataxe +2"] },
			advantages : [["Stealth", true]],
			},
		"+2 greataxe: gleaming (sj-dc-nmb1-3)" : {
		name : "Gleaming Greataxe +2 (SJ-DC-NMB1-3)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			attunement : true,
			allowDuplicates : true,
			description : "Giant in origin, the servants of royalty used this ancient artifact to prepare meals. The golden greataxe is ensorcelled to never get dirty, making it a perfect utensil for an oversized kitchen. I have a +2 bonus to atk and dmg rolls made with this magic weapon.",
			descriptionFull : "Giant in origin, the servants of royalty used this ancient artifact to prepare meals. The golden hatchet is ensorcelled to never get dirty, making it a perfect utensil for an oversized kitchen.\n   " + toUni("Gleaming") + ". This item never gets dirty.\n   You have +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Gleaming Greataxe +2"], options : ["Gleaming Greataxe +2"] },
			},
		"+2 greataxe: gythka (sj-dc-pat-1)" : {
		name : "Gythka, Greataxe +2 (SJ-DC-PAT-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			attunement : true,
			allowDuplicates : true,
			description : "A greataxe of the two-bladed thri-kreen style. Moss-ink designs etched in the handle let me suffer no harm in temperatures from -20\u00B0F to 120\u00B0F. I have a +2 bonus to atk and dmg rolls made with this magic weapon.",
			descriptionFull : "A greataxe of the two-bladed thri-kreen style. Moss-ink designs etched in the handle grant it the temperate minor property.\n   " + toUni("Temperate") + ". The bearer suffers no harm in temperatures as cold as –20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit.\n   You have +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Gythka, Greataxe +2"], options : ["Gythka, Greataxe +2"] },
			savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
			},
		"+2 greatsword: tyr's justice (ccc-ghc-8)" : {
		name : "Tyr's Justice, +2 Greatsword (CCC-GHC-8)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "Other than the balanced scales of Tyr's holy symbol etched into the blade, this sword is simple & unadorned. Known as “Tyr's Justice”, it was commissioned by Lord Althorin to dispense his judgments and mirrors his belief that justice is for everyone. The weapon whispers warnings, granting a +2 bonus to initiative unless incapacitated. I also have a +2 bonus to atk & dmg rolls made with this magic sword.",
			descriptionFull : "Other than the balanced scales of Tyr's holy symbol etched into the blade, this sword is simple and unadorned in appearance. The weapon whispers warnings to the bearer granting a +2 bonus to initiative. You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   From 1340 to 1385 DR, Lord Mattus Althorin ruled a small fiefdom in the Border Kingdoms near the Lake of Steam. Lord Althorin ran his council and maintained peace in his lands with the assistance of the Knights of the Holy Judgement, an order of paladins who emphasize the 'lawful' part of their dedication to Tyr.\n   To dispense Tyr's most brutal judgments, Lord Althorin commissioned the creation of a magical greatsword, which he dubbed “Tyr's Justice”. During his rule, several different paladins belonging to the Order of the Knights of Holy Judgement claimed the headman's sword as their own. When the Spellplague ravaged Toril in the Year of Blue Fire, the Border Kingdoms devolved into a lawless frontier of outlaws and would-be rulers, and the sword was lost for nearly a century. It later resurfaced in the Moonsea region.\n   Other than the balanced scales of Try's holy symbol etched into its blade, the sword is intentionally simple in appearance, mirroring Lord Althorin's predominant belief: “Justice is not pretentious or vain. It is simple and true, and the right of every man, woman, and child, no matter how rich, poor, educated, or ignorant they may be.”",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["Tyr's Justice, Greatsword +2"], options : ["Tyr's Justice, Greatsword +2"] },
			},
		"+2 greatsword: githyanki greater silver sword (ccc-tri-27 rose1-2)" : {
		name : "Githyanki Greater Silver Sword (+2 Greatsword, TRI-27 ROSE1-2)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This silvered greatsword tries to talk to me when grasped, but no ability or magic allows me to understand. It can only speak to its original wielder. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This is a silvered greatsword that, when grasped, tries to talk to the wielder but is unable to and no ability or magic allows the wielder to speak to it. It will only speak to the original wielder. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Githyanki Silvered Greatsword +2"], options : ["Githyanki Silvered Greatsword +2"] },
			},
		"+2 greatsword (fr-dc-aeg-6)" : {
		name : "+2 Greatsword (FR-DC-AEG-6)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "I have a +2 bonus to attack and damage rolls made with this magic greatsword. I can also use an action to make my voice carry clearly for up to 300 ft until my next turn ends.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   This greatsword has the war leader minor property.\n   " + toUni("War Leader") + ".  The bearer can use an action to cause his or her voice to carry clearly for up to 300 feet until the ends of the bearer's next turn.",
			action : [["action", " Greatsword (300ft Voice)"]],
			weaponsAdd : { select : ["Greatsword +2"], options : ["Greatsword +2"] },
			},
		"+2 greatsword (fr-dc-melb-1-2)" : {
		name : "+2 Greatsword (FR-DC-MELB-1-2)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This greatsword is made of a strange black metal. The blade is polished to a high sheen with a black opal inset into the pommel. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   This greatsword is made of a strange black metal. The blade is polished to a high sheen with a black opal inset into the pommel.",
			weaponsAdd : { select : ["Greatsword +2"], options : ["Greatsword +2"] },
			},
		"+2 greatsword: agony (sj-dc-angka-1)" : {
		name : "Agony, +2 Greatsword (SJ-DC-ANGKA-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "The hilt of this greatsword is wrapped in black leather. The blade is blood red & its sheath the color of red wine. Created through ritual sacrifice, this greatsword radiates the hot metallic scent of fear & the singed sulfur smell of anger. When I hold it, I hear the whispered cries & warnings of the soul fragment trapped within, granting a +2 bonus to initiative unless incapacitated. I also have a +2 bonus to atk & dmg rolls made with this magic sword.",
			descriptionFull : "The hilt of this greatsword is wrapped in black leather. The blade itself is blood red, and its sheath is the color of red wine. Created through ritual sacrifice, this greatsword radiates the hot, metallic scent of fear and the singed sulfur smell of anger. When you hold it, you can hear the whispered cries of the soul fragment trapped within.\n   " + toUni("Guardian") + ". The trapped soul whispers warnings to the bearer granting a +2 bonus to initiative.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["Agony, Greatsword +2"], options : ["Agony, Greatsword +2"] },
			},
		"+2 greatsword: lux machaera (sj-dc-liga6)" : {
		name : "Lux Machaera, +2 Greatsword (SJ-DC-LIGA6)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This greatsword has a violet-pink pommel and glows with purple sparks when held within 120 ft of an aberration. The command word ‘celare’ causes the blade of the sword to retract into the handle or return to its original shape. I also have a +2 bonus to atk & dmg rolls made with this magic sword.",
			descriptionFull : "This violet-pink pommel greatsword has the Sentinel property and glows in purple sparks when held within 120 feet of an aberration. The command word ‘celare’ causes the blade of the sword to retract into the handle or return to its original shape.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Lux Machaera, Greatsword +2"], options : ["Lux Machaera, Greatsword +2"] },
			},
		"+2 greatsword (sj-dc-rh-1)" : {
			name : "+2 Greatsword (SJ-DC-RH-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This ceremonial silver greatsword is an ancient githyanki artifact. I have a +2 bonus to atk and dmg rolls made with this weapon. As a bonus action, I can make the sword shed bright light in a 10-ft radius and another 10-ft dim, or extinguish the light.",
			descriptionFull : "This ceremonial silver sword is an ancient githyanki artifact.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.",
			action : [["bonus action", "Greatsword (light/dim)"]],
			weaponsAdd : { select : ["Greatsword +2"], options : ["Greatsword +2"] },
			},
		"+2 hand crossbow (sj-dc-echo-4)" : {
			name : "+2 Hand Crossbow (SJ-DC-ECHO-4)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "Created by a giff engineer, this crossbow is enchanted to resemble the heavy pistols used by Reggie’s Roughnecks. I gain a +2 bonus to atk and dmg rolls made with it. I can also use the imbued illusion magic to alter its appearance in minor ways.",
			descriptionFull : "Created by a giff engineer, this crossbow is enchanted to resemble the heavy pistols used by Reggie’s Roughnecks. \n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Illusion") + ". The item is imbued with illusion magic, allowing its bearer to alter the item's appearance in minor ways. Such alterations don't change how the item is worn, carried, or wielded, and they have no effect on its other magical properties. For example, the wearer could make a red robe appear blue, or make a gold ring look like it's made of ivory. The item reverts to its true appearance when no one is carrying or wearing it.",
			weaponsAdd : { select : ["Hand Crossbow +2"], options : ["Hand Crossbow +2"] },
			},
		"+2 hand crossbow (sj-dc-rock-1)" : {
			name : "+2 Hand Crossbow (SJ-DC-ROCK-1)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "Mahaxara, captain of Bral's royal guard, favours this sleek and deadly hand crossbow. It's shaped like 2 intertwined snakes, etched along the stock and barrel, wih the crossbow's limbs protruding from each snake's head like deadly fangs. I gain a +2 bonus to attack and damage rolls made with the weapon. It also whispers warnings, giving +2 initiative unless incapacitated.",
			descriptionFull : "Mahaxara, captain of Bral's royal guard, favours this sleek and deadly hand crossbow. It is shaped like two intertwined snakes, etched along the stock and barrel. The crossbow's limbs protrude from each snake's head, resembling the viper's deadly fangs. You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["Hand Crossbow +2"], options : ["Hand Crossbow +2"] },
			},
		"+2 heavy crossbow: first blood (sj-dc-tbs-4)" : {
			name : "First Blood, +2 Heavy Crossbow (TBS-4)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This magic crossbow is crafted from sturdy darkwood and gold. The edges are adorned with elaborate carvings of war. It yearns for blood! I gain a +2 bonus to attack and damage rolls made with the weapon. It also whispers warnings, giving +2 initiative unless incapacitated.",
			descriptionFull : "This crossbow's frame is crafted from sturdy darkwood and gold. Its edges are adorned with elaborate carvings of war. It yearns for blood! You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["First Blood, Heavy Crossbow +2"], options : ["First Blood, Heavy Crossbow +2"] },
			},
		"+2 longbow: deep's reach (ccc-bmg-moon12-2)" : {
			name : "Deep's Reach, +2 Longbow (BMG-MOON12-2)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This longbow is made from hundreds of small octopus tentacles that chaotically twist and writhe when the mother of pearl grip is held. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The limbs of this longbow are made from hundreds of small octopus tentacles that chaotically twist and writhe when the mother of pearl grip is held. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Deep's Reach, Longbow +2"], options : ["Deep's Reach, Longbow +2"] },
			},
		"+2 longbow: giant's bane (ccc-ghc-9)" : {
			name : "Giant's Bane, +2 Longbow (CCC-GHC-9)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This stout recurved bow is fashioned from the horn of a great beast & ringed in complex sigils at each end. I gain +2 to atk & dmg rolls made with this magic weapon. Commissioned from a Westgate wizard as a courting gift for a half-elf ranger, the bow glows faintly when giants are within 120 ft. For this weapon, 'giant' refers to any creature with the giant type, including ogres & trolls.",
			descriptionFull : "This stout recurved bow is fashioned from the horn of a great beast and ringed in complex sigils at either end. You gain a +2 bonus to attack and damage rolls made with this magic weapon. The bow also has the Sentinel minor property and glows faintly when giants are within 120 feet of it. For this weapon, 'giant' refers to any creature with the giant type, including ogres and trolls.\n   In 1325 DR the ranger Kaylin Plainstalker patrolled a vast area between the Giant's Run Mountains and Elversult. Of half-elven heritage, the woman was a beauty, as well as an expert shot with her bow. Her attractiveness and her prowess at stopping marauding bands of hill giants soon caught the eye of Rilar Biltmoor, a rakish young wool merchant from Elversult. To gain her favor, the young man paid a wizard from Westgate to craft her a magical bow made of yew. Kaylin accepted the weapon, but rebuffed the merchant's romantic interests.\n   Several years later, Rilar's business failed, and he lost everything. He returned to his family farm on the outskirts of Elversult. Instead of organizing large shipments of wool to Westgate and Iriaebor, he spent his days tending sheep in the foothills of the Giant's Run Mountains.\n   When Kaylin learned of the man's troubles, she visited and offered to return the weapon he had given to her, hoping she could ease his financial burdens. Rilar declined the bow, claiming he had found a peace and contentment as a sheep header that he had not known as a merchant. His honesty and newfound humility touched the ranger, and over time, she grew to love the man she had rejected years earlier. They eventually married and started a family of their own.\n   The bow remained in Kaylin's possession until she died peacefully in her sleep at her family's farm.",
			weaponsAdd : { select : ["Giant's Bane, Longbow +2"], options : ["Giant's Bane, Longbow +2"] },
			},
		"+2 longbow (ddep5-2)" : {
			name : "+2 Longbow (DDEP5-2)",
			source : [["AL","S5"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "The shaft of this exquisite longbow is patterned with maps of famous rivers that pass through the Moonshae Isles. If I say the name of one of these rivers, the bow makes the sound of rushing water when an arrow is loosed. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The shaft of this exquisite longbow is patterned with maps of famous rivers that pass through the Moonshae Isles. If the names of one of these rivers are said aloud, the bow issues forth the sound of rushing water when an arrow is loosed. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Longbow +2"], options : ["Longbow +2"] },
			},
		"+2 longbow: bloodthirst (sj-dc-epoch-1)" : {
			name : "Bloodthirst, +2 Longbow (SJ-DC-EPOCH-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This longbow is carved from grey wood with inlaid red gems. When given the chance, it heightens my urge to act in selfish or malevolent ways. I also gain +2 to attack and damage rolls made with this weapon.",
			descriptionFull : "This longbow is carved from grey wood with inlaid red gems.\n   " + toUni("Wicked") + ". When the bearer is presented with an opportunity to act in a selfish or malevolent way, the item heightens the bearer’s urge to do so.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Bloodthirst, Longbow +2"], options : ["Bloodthirst, Longbow +2"] },
			},
		"+2 longbow: friendbow (sj-dc-scr-1)" : {
			name : "Friendbow, +2 Longbow (SJ-DC-SCR-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This magical bow was crafted from a fused dragon collarbone and coated in translucent gold. It has no apparent drawstring but a thin glowing string appears when an arrow is nocked. The bow was the property of a traveler to the Dracometrium who has moved on but the Caretaker recalls them as a friend. I gain +2 to attack and damage rolls made with this weapon.",
			descriptionFull : "This magical bow was crafted from the fused dragon collarbone and coated in a translucent gold. It has no apparent drawstring; however, whenever an arrow is nocked, a thin, glowing drawstring appears. The bow was the property of a traveler to the Dracometrium who has moved on. The Caretaker recalls that they were a friend.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Friendow, Longbow +2"], options : ["Friendbow, Longbow +2"] },
			},
		"+2 longbow: craygen's bow (sj-dc-ssm-ubcon-1)" : {
			name : "Craygen's Bow, +2 Longbow (SSM-UBCON-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This magic bow has a thin yellow strand woven about the handle and inset into the wood. It's said to be a single thread from the bowstring of the bow wielded by the autognome hero, Craygen. While on my person, I can speak Gnomish. I also gain +2 to attack and damage rolls made with this weapon.",
			descriptionFull : "A thin, yellow strand, woven about the handle of the bow and inset into the wood itself, is said to be a single thread from the bowstring of the bow once wielded by the autognome hero, Cragen.\n   " + toUni("Language") + ". The bearer can speak and understand Gnomish while the item is on the bearer's person.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			languageProfs : ["Gnomish"],
			weaponsAdd : { select : ["Craygen's Bow, Longbow +2"], options : ["Craygen's Bow, Longbow +2"] },
			},
		"+2 longsword: elven blade of the third age (ccc-bwm-2)" : {
			name : "Elven Blade of the Third Age, +2 Longsword (BWM-2)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This curved, single-edged elven blade is made with a rare alloy of mithril & steel. Forged during the 3rd age in Illefarn, this blade was a favoured weapon of elven Warblades & Bladesingers when battling their ancient orcish foes. Due to the mithril alloy, the longsword weighs 1/2 as much (1.5 lbs). The blade glows with a cold blue light when Orcs or Goblins are within 300 ft. I have a +2 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "This curved, single-bladed, hand-and-a-half elven blade is made with a rare alloy containing both mithril and steel. Forged during the third age by the elves of Illefarn, this blade was a favoured weapon for elven Warblades and Bladesingers who long battled their ancient foes, the orcs. Due to the mithril found in the blade, the longsword weighs half as much as a regular longsword. In addition, the blade glows with a cold blue light when Orcs and Goblins are within 300 feet of it. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
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
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This longsword has a cross-guard shaped like a tree branch and an oak tree embossed on its pommel. It has the Gleaming property and never gets dirty. I have a +2 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "This longsword has a cross-guard shaped like a tree branch and an oak tree embossed on its pommel. In addition, the sword has the Gleaming minor property and never gets dirty. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Stout, Longsword +2"], options : ["Stout, Longsword +2"] },
			},
		"+2 longsword: blazherserblane (fr-dc-liga-2)" : {
			name : "Blazherserblane, +2 Longsword (FR-DC-LIGA-2)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "I have a +2 bonus to attack and damage rolls made with this magic longsword. As a bonus action, it sheds bright light in a 10-ft radius and 10-ft more dim, or stops.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.",
			weaponsAdd : { select : ["Blazherserblane, Longsword +2"], options : ["Blazherserblane, Longsword +2"] },
			action : [["bonus action", "Longsword (light/dim)"]],
			},
		"+2 longsword: westdeck sword (sj-dc-cgg-2)" : {
			name : "Westdeck Sword, +2 Longsword (SJ-DC-CGG-2)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "The hilt of this longsword bears the sigil of House Westdeck. Viewing it from certain angles under a clear sky in the Calatas system makes it seem to take different forms. I have a +2 bonus to atk & dmg rolls made with this magic weapon. I can also use an action to make my voice carry clearly for up to 300 ft until my next turn ends.",
			descriptionFull : "The hilt of this longsword bears the sigil of House Westdeck. Viewing this sword from certain angles under a clear sky in the Calatas system makes one see its form change into a staff, a dagger, or a bow.\n   This sword has the War Leader minor property: the bearer can use an action to cause his or her voice to carry clearly for up to 300 feet until the end of the bearer's next turn. \n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			action : [["action", "Westdeck Sword (300ft Voice)"]],
			weaponsAdd : { select : ["Westdeck Sword, Longsword +2"], options : ["Westdeck Sword, Longsword +2"] },
			},
		"+2 maul: manyoshu's kanabo (fr-dc-oni-1)" : {
			name : "Manyoshu's Kanabo, +2 Maul (FR-DC-ONI-1)",
			source : [["AL","FR-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This kanabo has a wooden shaft with a bulging head and is incredibly warm to the touch. The surface of the head is studded with metal nodes and the weapon is harder than steel. It whispers warnings, granting +2 to initiative if I'm not incapacitated. I also have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "Manyoshu's Maul consists of a wooden shaft with a bulging head. The entire surface of the head is studded with metal nodes, and the weapon itself is harder than steel. Those who hold it find the kanabo to be incredibly warm to the touch.\n   " + toUni("Guardian") + ". The kanabo whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Manyoshu's Kanabo, Maul +2"], options : ["Manyoshu's Kanabo, Maul +2"] },
			},
		"+2 maul: coral great hammer (sj-dc-den-h5)" : {
			name : "Coral Great Hammer, +2 Maul (SJ-DC-DEN-H5)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This maul's handle is made from polished driftwood and the head is carved from coral taken from the Reef of Living Memory – Sekolah's Astral Domain. The memory corals have been infused with magic from sahuagin hymns to Sekolah over centuries. I can speak and understand sahuagin while the maul is on my person. However, I have the urge to sing the language rather than speak. I also have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The handle of this maul is made from polished driftwood and the head carved from coral harvested from the Reef of Living Memory – Sekolah's Astral Domain. The memory corals have been infused with magic from the sahuagin hymns to Sekolah over centuries.\n   " + toUni("Language") + ". The bearer of this maul can speak and understand sahuagin while the item is on the bearer's person. However, the owner an urge to sing the sahuagin language rather than simply speak it.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			languageProfs : ["Sahuagin"],
			weaponsAdd : { select : ["Coral Great Hammer, Maul +2"], options : ["Coral Great Hammer, Maul +2"] },
			},
		"+2 maul: space clown hammer (sj-dc-fxc-jeff-1)" : {
			name : "Whack-a-Mole, +2 Maul (SJ-DC-FXC-JEFF-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This Space Clown Hammer is named Whack-a-Mole and makes a laughing sound on a successful hit. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This weapon a Space Clown Hammer and is named Whack-a-Mole. It makes a laughing sound on a successful hit.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Whack-a-Mole, Maul +2"], options : ["Whack-a-Mole, Maul +2"] },
			},
		"+2 morningstar: mourning star (sj-dc-angka-5)" : {
			name : "Mourning Star, +2 Morningstar (SJ-DC-ANGKA-5)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This morningstar is made of pure amethyst. The head has a glowing inner core and its translucent, purplish spikes trail arcane energy when swung. I have a +2 bonus to attack & damage rolls made with this magic weapon. As a bonus action, it sheds bright light in a 10-ft radius and 10-ft more dim light, or stops.",
			descriptionFull : "The entirety of this morningstar is made of pure amethyst. The head has a glowing inner core, and its translucent, purplish spikes trail raw arcane energy when the morning star is swung.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.",
			action : [["bonus action", "Weapon (light/dim)"]],
			weaponsAdd : { select : ["Mourning Star, Morningstar +2"], options : ["Mourning Star, Morningstar +2"] },
			},
		"+2 net (sj-dc-mad-2)" : {
			name : "+2 Net (SJ-DC-MAD-2)",
			source : [["AL","SJ-DC"]],
			type : "weapon (net)",
			rarity : "uncommon",
			magicItemTable : "F",
			description : "This astral net was built by thri-kreen to fish the most savage brown scavvers. It can only be destroyed through special means. I have a +2 bonus to attack and damage rolls made with this magic net.",
			descriptionFull : "This astral net was built by thri-kreen to fish the most savage brown scavvers.\n   " + toUni("Strange Material") + ". The item can't be broken. Special means must be used to destroy it.\n   " + toUni("Special") + ". A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success.\n   When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.",
			weaponsAdd : { select : ["Net +2"], options : ["Net +2"] },
			},
		"+2 pike: horizon caller (sj-dc-conmar-1)" : {
		name : "Horizon Caller, +2 Pike (SJ-DC-CONMAR-1)",
			source : [["AL","SJ-DC"]],
			rarity : "very rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "Aeons ago, an orc paladin used this pike in a great battle against a demon lord whose name has been erased from history. The divine soul of the angel trapped inside has left, but the voice that rallied the armies can still be summoned by its magic. As an action, make my voice carry clearly for up to 300 ft until my next turn ends. I also have a +2 bonus to atk and dmg rolls made with this magic weapon.",
			descriptionFull : "This pike formerly had an angel trapped inside. Aeons ago, it was used by a famous orc paladin in a great battle against a demon lord whose name has been erased from history. The divine soul has long left, but the voice that rallied the hundred armies can still be summoned by its innate magic.\n   " + toUni("War Leader") + ". The bearer can use an action to cause his or her voice to carry clearly for up to 300 feet until the end of the bearer's next turn.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			action : [["action", "+2 Pike (300ft Voice)"]],
			weaponsAdd : { select : ["Horizon Caller, +2 Pike"], options : ["Horizon Caller, +2 Pike"] },
			},
		"+2 quarterstaff: herfren's marshaling wand (sj-dc-bst-2)" : {
			name : "Herfren's Marshaling Wand, +2 Quarterstaff (BST-2)",
			source : [["AL","SJ-DC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "Specially designed for the Wilder parts of Wildspace, Herfren's Marshaling Wand brings all the ships to the yard with its magic. As a bonus action, it sheds bright light in a 10-ft radius and another 10-ft dim, or stops. I have a +2 bonus to attack and damage rolls made with this magic staff.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   Specially designed for the Wilder parts of Wildspace, Herfren's marshaling wand brings all the ships to the yard with its Beacon property.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.",
			action : [["bonus action", "Hefren's Wand (light/dim)"]],
			weaponsAdd : { select : ["Hefren's Marshaling Wand, Quarterstaff +2"], options : ["Hefren's Marshaling Wand, Quarterstaff +2"] },
			},
		"+2 rapier: the sixth sword (ccc-hal-3)" : {
		name : "The Sixth Sword, +2 Rapier (CCC-HAL-3)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "One of marilith S'Sheneth'Rah's six swords, this magic weapon has a +2 bonus to atk and dmg rolls. She was known for her tactical superiority and quick striking in battle. Through years of use, her magic essence became imbued into the sword. It occasionally twitches at critical times, bringing itself to a ready position and giving me a +2 bonus to initiative.",
			descriptionFull : "This is one of marilith S'Sheneth'Rah's six swords. In battle she was known for her tactical superiority and quick striking. Through years of use, some of her essence became imbued into the sword's magic and it occasionally twitches at critical times, bringing itself to a ready and deadly position. As a result of this, the wielder gains a +2 bonus to initiative. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["The Sixth Sword, Rapier +2"], options : ["The Sixth Sword, Rapier +2"] },
			},
		"+2 scimitar (sj-dc-dra-1)" : {
		name : "+2 Scimitar (SJ-DC-DRA-1)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This scimiar whispers warnings, granting me a +2 bonus to initiative if I'm not incapacitated. I also have a +2 bonus to atk and damage rolls made with this magic weapon.",
			descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["Scimitar +2"], options : ["Scimitar +2"] },
			},
		"+2 scimitar (sj-dc-igc-ecp-5)" : {
		name : "+2 Scimitar (SJ-DC-IGC-ECP-5)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "When held, the Cosmic Elemental Scimitar becomes a conduit of elemental might, capable of unleashing devastating attacks using the forces of creation. It transcends elemental boundaries and connects to the very fabric of the cosmos. The sword's material chaotically shifts between earth, fire, ice and lightning with no visible seam between them, a celestial dance that embodies cosmic harmony. I have a +2 bonus to atk and damage rolls made with this magic weapon.",
			descriptionFull : "When held the Cosmic Elemental Scimitar becomes a conduit of cosmic elemental might, capable of unleashing devastating cosmic attacks that harmonize the forces of creation. It is a weapon beyond compare, a rare item that transcends the boundaries of the elements and connects them to the very fabric of the cosmos. The scimitar’s material chaotically shifts between earth, fire, ice, and lightning sometimes intertwining like a celestial dance, with no visible seam between them, as if the sword itself is an embodiment of the cosmic harmony.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Scimitar +2"], options : ["Scimitar +2"] },
			},
		"+2 shortsword: smoke (ccc-sfbay1-1)" : {
		name : "Smoke, +2 Shortsword (CCC-SFBAY1-1)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This thin blade is 1.5 ft in length & scorched black. No amount of oiling, scrubbing, or cleaning will remove the stain or brighten the blade. It ends in a jagged, broken edge, as if much longer once & the hilt is protected by a fencer's basket guard. This shortsword cuts easily through flesh & bone, leaving the faint smell of smoke in its wake. I have a +2 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "This thin blade is a foot and a half in length, and scorched black. No amount of oiling, scrubbing, or cleaning will remove the stain or brighten the blade. It ends in a jagged, broken edge, as if it was once much longer. The hilt is protected by a fencer's basket guard. The pommel has a socket, as if for a jewel, but it is empty. This short sword cuts easily through flesh and bone, and leaves the faint smell of smoke in its wake. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Smoke, Shortsword +2"], options : ["Smoke, Shortsword +2"] },
			},
		"+2 shortsword (ddal0-13)" : {
		name : "+2 Shortsword (DDAL0-13)",
			source : [["KOSC", 82]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "The shortsword is made from the claw of a polar bear, with a white blade and a black tip. The wielder, when happy, growls. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "The shortsword is made from the claw of a polar bear, with a white blade and a black tip. The wielder, when happy, growls. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Shortsword +2"], options : ["Shortsword +2"] },
			},
		"+2 trident (ccc-cic-12)" : {
		name : "+2 Trident (CCC-CIC-12)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This trident is embossed with the holy symbol of Talos and floats on water. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Trident +2"], options : ["Trident +2"] },
			},
		"+2 war pick (ccc-myr1-1)" : {
			name : "+2 War Pick (CCC-MYR1-1)",
			source : [["AL","CCC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This war pick is fashioned from a bent remorhaz whisker, carved with intricate depictions of the great beast in action. It retains some of the beast's inherent warmth & I suffer no harm or discomfort in temperatures as cold as -20\u00B0F or as warm as 120\u00B0F. I have a +2 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "This weapon is fashioned from a bent remorhaz whisker, carved with intricate depictions of the great beast in action. It also retains some of the beast's inherent warmth. The bearer suffers no harm or discomfort in extreme temperatures (as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit). It does not convey any resistance to damage. You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
			weaponsAdd : { select : ["War Pick +2"], options : ["War Pick +2"] },
			},
		"+2 weapon (pota)" : {
			name : "+2 (PotA)",
			source : [["AL","PotA"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This weapon vibrates and flares a deep scarlet glow when within 50 feet of orcs. Against orcs, the weapon inflicts +2d6 damage. I have a +2 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "A +2 weapon of the character's choosing that vibrates and flares a deep scarlet glow when within 50 feet of orcs. Against orcs, the weapon inflicts +2d6 damage. You have a +2 bonus to attack and damage rolls made with this magic weapon.\n   This weapon was given by the Harpers in exchange for Orcsplitter.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "prefix",
			descriptionChange : ["replace", "weapon"]
			},
		},
		"+2 whip: flogger's bouquet (sj-dc-enigma)" : {
			name : "Flogger's Bouquet, +2 Whip (SJ-DC-ENIGMA)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This whip was made from the mutated vines created by genetic splicing plant species, including those from the Underdark, with the cells of an aartuk elder. The base is a bud that blooms whenever the whip is drenched in blood. While on my person, I can speak Aartuk. I also have a +2 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "This whip was made from the vines of a plant mutated through the genetic splicing of multiple plant species including those native in The Underdark, and from the cells of an aartuk elder. The base of the whip is a bud that blooms whenever the whip is drenched in blood.\n   " + toUni("Language") + ". The bearer can speak, read and understand Aartuk while the item is on the bearer's person.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			languageProfs : ["Aartuk"],
			weaponsAdd : { select : ["Flogger's Bouquet, Whip +2"], options : ["Flogger's Bouquet, Whip +2"] },
			},
		"+2 yklwa: naga's warning (sj-dc-pat-2)" : {
			name : "Naga's Warning, +2 Yklwa (SJ-DC-PAT-2)",
			source : [["AL","SJ-DC"]],
			rarity : "rare",
			magicItemTable : "G",
			allowDuplicates : true,
			description : "This short spear-like weapon has a long blade carved with serpentine designs. The yklwa hisses when it senses danger, granting +2 to initiative when I'm not incapacitated. I have a +2 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "This short spear-like weapon has a long blade carved with serpentine designs. The yklwa hisses when it senses danger, granting the guardian property. \n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
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
			magicItemTable : "H",
			allowDuplicates : true,
			description : "This impressive +3 battleaxe possesses a massive haft with a huge gear turning atop it. Connected to the gear are a series of gnashing blades that extend when the weapon is used against giants. As a bonus action once per dawn, a dwarf or person who worships a dwarven god may brandish this weapon and gain adv. on 1 CHA (Intimidation) check.",
			descriptionFull : "This impressive battleaxe possesses a massive haft with a huge gear turning gently atop it. Connected to the gear are a series of gnashing blades that extend when the weapon is wielded against giants. As a bonus action, a dwarf or a character that worships a dwarven deity may brandish this weapon and gain advantage on one Charisma (Intimidation) check. Once this property has been used, it can't be used again until the following dawn. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
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
			magicItemTable : "H",
			description : "This white dagger has barnacles & silver shells on its handle, & sea-green lines of emerald sea foam curling along the blade's edge to a barbed point. The owner becomes obsessed with wealth above all else. There are rumors that this was a tip from the original elemental weapon, Drown. I have a +3 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "This white dagger has barnacles and silver shells on its handle, and sea-green lines of emerald sea foam curling along the edge of the blade up to a barbed point. While owned, the bearer becomes obsessed with material wealth above all else. There are whispered rumors that this may have been one of the tips of the original elemental weapon, Drown. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dagger +3"], options : ["Dagger +3"] },
			},
		"+3 glaive: empyrean's unbreaking glaive (wbw-dc-sunlit-6)" : {
		name : "Empyrean's Unbreaking Glaive +3 (Sunlit-6)",
			source : [["AL","WBW-DC"]],
			rarity : "very rare",
			allowDuplicates : true,
			magicItemTable : "H",
			description : "The head of this glaive is made from a concentration of Empyrean's special blood that glitters & undulates like mercury. The blood makes the entire weapon, including the shaft, unbreakable by anything but special means (i.e. anti-magic field). I have a +3 bonus to atk & dmg rolls made with this magic glaive.",
			descriptionFull : "The head of this glaive is not made of metal, and is instead a concentration of Empyrean's special blood. The blade glitters like, well, glitter, and undulates like mercury. The blood gives the entire weapon, including the shaft, the minor property unbreakable: the item can't be broken. Special means must be used to destroy it (ie. antimagic field). You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Empyrean's Unbreaking Glaive +3"], options : ["Empyrean's Unbreaking Glaive +3"] },
			},
		"+3 greatsword: wyrmguard (ps-dc-strat-dragon-5)" : {
		name : "Wyrmguard Sword, +3 Greatsword (STRAT-DRAGON-5)",
			source : [["AL","PS-DC"]],
			rarity : "very rare",
			allowDuplicates : true,
			magicItemTable : "H",
			description : "Epoch & Fractal expected to wield this blade after ascending to godhood. Its hilt & crossbar are wrought with a coiling dragon, & pulsing multicolored veins like those in Epoch's horns stretch across the blade. The sword bears a spark of time magic & provides glimpses of the future, giving +2 bonus initiative if I'm not incapacitated. I have +3 to atk & dmg rolls with this sword.",
			descriptionFull : "When they forged this blade, Epoch and Fractal expected to wield it after ascending to godhood.  Its hilt and crossbar are wrought with a coiling dragon, and pulsing multicolored veins similar to those in Epoch's horns stretch across the blade.\n   " + toUni("Guardian") + ". This greatsword bears a spark of Epoch's time magic and provides glimpses of the future to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Wyrmguard Sword, +3 Greatsword"], options : ["Wyrmguard Sword, +3 Greatsword"] },
			},
		"+3 greatsword (wbw-dc-pls-1)" : {
		name : "+3 Greatsword (WBW-DC-PLS-1)",
			source : [["AL","WBW-DC"]],
			rarity : "very rare",
			allowDuplicates : true,
			magicItemTable : "H",
			description : "This greatsword was made from the toenail of Grandmother Steeltoe, the annis hag. The sword is broad, square, and covered in rust, but I can make it look however I wish, using imbued illusion magic to alter its appearance in minor ways. I have a +3 bonus to atk & dmg rolls made with this magic weapon.",
			descriptionFull : "This greatsword was made from the toenail of Grandmother Steeltoe the annis hag. In its natural state, this sword is broad, square, and covered in rust. The item's bearer can make it appear however they wish.\n   " + toUni("Illusion") + ". The item is imbued with illusion magic, allowing its bearer to alter the item's appearance in minor ways. Such alterations don't change how the item is worn, carried, or wielded, and they have no effect on its other magical properties. For example, the wearer could make a red robe appear blue, or make a gold ring look like it's made of ivory. The item reverts to its true appearance when no one is carrying or wearing it.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Greatsword +3"], options : ["Greatsword +3"] },
			},
		"+3 hand crossbow: belmore (wbw-dc-php-lcl-2)" : {
			name : "Belmore, +3 Hand Crossbow (PHP-LCL-2)",
			source : [["AL","WBW-DC"]],
			rarity : "uncommon",
			magicItemTable : "F",
			allowDuplicates : true,
			description : "This finely crafted hand crossbow resembles an exotic flintlock pistol with the words ‘Belmore' and ‘K.B.' engraved on the grip. It whispers warnings, giving +2 initiative when I'm not incapacitated. I also gain a +3 bonus to attack and damage rolls made with this weapon.",
			descriptionFull : "This finely crafted hand crossbow has an exotic look, it resembles a flintlock pistol with the words ‘Belmore' and ‘K.B.' engraved on the grip.\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["Belmore, Hand Crossbow +3"], options : ["Belmore, Hand Crossbow +3"] },
			},
		"+3 lance: dream whirl (ccc-bmg-39 hulb3-3)" : {
		name : "Dream Whirl, +3 Lance (BMG-39 HULB3-3)",
			source : [["AL","CCC"]],
			rarity : "very rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "This alabaster lance is carved with deep swirling patterns that seem to move, calming my emotions & silencing surface thoughts. The original owner's dreams & anger still dwell in the lance. When in 120 ft of an illithid, its kin, or its creations, righteous fury radiates from the lance as it darkens to deep blood crimson. I have +3 to attack & damage rolls made with it.",
			descriptionFull : "This alabaster lance, named “Dream Whirl” by those who created it, is carved with deep swirling patterns that seem to move with you, calming your emotions and silencing surface thoughts. Also, the original owner's dreams and anger still dwell within the lance. When within 120 feet of an illithid (mind flayer), its kin, or any of its creations, righteous fury radiates from the lance as it darkens into deep blood crimson. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Dream Whirl, Lance +3"], options : ["Dream Whirl, Lance +3"] },
			},
		"+3 piercing weapon: midnight phaeton's horn (ccc-odfc2-3)" : {
			name : "Midnight Phaeton's Horn +3 (CCC-ODFC2-3)",
			source : [["AL","CCC"]],
			rarity : "very rare",
			magicItemTable : "H",
			allowDuplicates : true,
			description : "I gain a +3 bonus to attack and damage rolls made with this weapon, which retains the glittering, pearlescent sheen and spiraling pattern of the unicorn's horn. When held, say “Phaeton” to make the weapon glow with a 20-ft radius of bright light and another 20-ft of dim light. This lasts for 1 hour or until the wielder says “Midnight”. Any good-aligned creatures in the bright light feel slightly more at ease, as if caressed by the first rays of moonlight on a dark night.",
			descriptionFull : "You gain a +3 bonus to attack and damage rolls with this weapon, which takes the form of any melee piercing weapon of your choice (choice made when item is received and is permanent from then on). The weapon retains the glittering, pearlescent sheen and spiraling pattern of the unicorn's horn. Additionally, anyone holding the weapon can say Phaeton to cause the weapon to glow with bright light for a radius of 20 feet and dim light for a further 20 feet. The light lasts for 1 hour or until someone holding the weapon says Midnight. Any good aligned creatures in the bright light feel slightly more at ease (no mechanical effect), as if caressed by the first rays of moonlight on a dark night.",
			chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
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
			magicItemTable : "H",
			allowDuplicates : true,
			description : "Forged of black, pitted iron, the haft of this double-tined pike is wrapped in the supple hide of a young red dragon. Wisps of black smoke stream from a glowing red stone at the butt of the weapon only to drift away on an unseen breeze. I have a +3 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "Forged of black, pitted iron, the haft of this double-tined pike is wrapped in the supple hide of a young red dragon. Wisps of black smoke stream from a glowing red stone at the butt of the weapon only to drift away on an unseen breeze. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Krahharuan Fork, Pike +3"], options : ["Krahharuan Fork, Pike +3"] },
			},
		"+3 scimitar (ddep6-2)" : {
		name : "+3 Scimitar (DDEP6-2)",
			source : [["AL","S6"]],
			rarity : "very rare",
			allowDuplicates : true,
			magicItemTable : "H",
			description : "Formerly owned by an efreeti, this sword glows a dull red if a marid is within 60 feet. I have a +3 bonus to attack and damage rolls made with this magic weapon.",
			descriptionFull : "Formerly owned by an efreeti, this sword glows with a dull red if a marid is within 60 feet. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			weaponsAdd : { select : ["Scimitar +3"], options : ["Scimitar +3"] },
			},
		"+3 shortsword: harengon's freedom (al:sa-11a)" : {
		name : "Harengon's Freedom, +3 Shortsword (AL:SA-11A)",
			source : [["AL:SA","11A"]],
			rarity : "very rare",
			allowDuplicates : true,
			magicItemTable : "H",
			description : "The hilt of this shortsword is decorated with images of frolicking harengon and the blade is made of a shimmering dark purple crystal. When wielded, I gain a +2 bonus to initiative if I'm not incapacitated & have +3 bonus to atk and dmg rolls made with this magic weapon.",
			descriptionFull : "The hilt of this shortswordis decorated with images of frolicking harengon and the blade is constructed of a shimmering dark purple crystal. When wielded, you gain a +2 bonus to initiative if you're not incapacitated. You have a +3 bonus to attack and damage rolls made with this magic weapon.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
			weaponsAdd : { select : ["Harengon's Freedom, Shortsword +3"], options : ["Harengon's Freedom, Shortsword +3"] },
			},
		"+3 spear: blood-drinker's backbone (rmh-5/rmh-6)" : {
		name : "Blood-Drinker's Backbone, +3 Spear",
			source : [["AL:R","5&6"]],
			rarity : "very rare",
			allowDuplicates : true,
			magicItemTable : "H",
			description : "This formidable spear has a slightly curved maroon blade made of iridescent stone set into a haft of polished vertebrae — each engraved with a long-forgotten ancient rune. I have +3 to atk & dmg rolls made with the spear. If I miss, I take Necrotic dmg equal to the attack's dmg, & gain 1 lvl of exhaustion as the spear feeds on my lifeforce.",
			descriptionFull : "You have a +3 bonus to attack and damage rolls made with this magic weapon.\n   It is a formidable weapon sporting a slightly curved maroon blade made from iridescent stone set into a haft of polished vertebrae—each engraved with an ancient, long-forgotten rune.\n   If the attack misses its target, you suffer necrotic damage equal to the damage that the attack would have normally dealt as the weapon feeds upon your lifeforce, and you gain one level of exhaustion.",
			weaponsAdd : { select : ["Blood-Drinker's Backbone, Spear +3"], options : ["Blood-Drinker's Backbone, Spear +3"] },
			},
}

MagicItemsList["al weapons (other)"] = {
		name : "AL Weapons (Other)",
		allowDuplicates : true,
	choices : ["Berserker Flail (CCC-UCON-1)","Dagger of Blindsight: Panther's Claw (RMH-9)","Dagger of Venom: Fang of Sibyl (CCC-GARY-1)","Dagger of Venom (DDAL4-11)", "Dagger of Venom (DDAL5-17)","Devotee's Censer (BMG-DRW-OD-4)","Drow-made Dagger (WDotMM)","Dwarven Thrower: Skyfist (DDEP4)","Dwarven Thrower: Foehammer (WBW-DC-MOM-2)","Elven Thrower (FR-DC-DEATH)","Elven Thrower: Araelathila (FR-DC-LIGA-1)","Elven Thrower: Naginata (FR-DC-PANDORA-JWEI-8)","Glaive of Warning: The Harbinger (CCC-EPI1-2)","Glaive of Warning: Losspatan's War-scythe (CCC-GGC-2-1)","Greatclub of Warning: U'u War Club (WBW-DC-DEN-H2)","Greatclub of Warning: Clobber (WBW-DC-MIKE-1)","Green-Flame Mace: Face of Umberlee's Fury (CCC-AWE-1-2)","Javelin of Lightning (CCC-BFG1-3)","Javelin of Lightning (CCC-BMG-MOON6-3)","Javelin of Lightning (CCC-BMG-MOON16-1)","Javelin of Lightning (CCC-GAD2-2)","Javelin of Lightning (CCC-SAC-4)","Javelin of Lightning (CCC-SFBAY-4-1)","Javelin of Lightning (DDAL8-5)","Javelin of Lightning (SJ-DC-AS-1)","Javelin of Lightning: Comet Spear (SJ-DC-CJK2-2)","Javelin of Lightning: Stormstrike (SJ-DC-DD-4)","Javelin of Lightning: Processional Baton (SJ-DC-DES5-1)","Javelin of Lightning: Rrakkma's Smite (SJ-DC-FLUMPH-1)","Javelin of Lightning: Jensen's Lure (SJ-DC-ISL-1)","Javelin of Lightning (SJ-DC-LIGA1)","Javelin of Lightning (SJ-DC-MB5-AH123)","Javelin of Lightning: Reigar's Rage (SJ-DC-MDW-1)","Javelin of Lightning (SJ-DC-TRIDEN-UPR)","Javelin of Lightning (SJ-DC-TTUC-1)","Javelin of Warning: Jeny's Hairpin (CCC-VOTE-1-1)","Lash of Immolation: Dragon's Tail (FR-DC-STRAT-DRAGON-2)","Longbow of Melodies: Lavender's Scent (FR-DC-PANDORA-JWEI-10)","Mace of Disruption (CCC-CIC-3)","Mace of Disruption: Death's Head (CCC-GHC-BK1-2)","Mace of Smiting (DDAL7-6)","Mace of Smiting (DDAL8-7)","Mace of Smiting (DDAL10-7)","Mace of Terror: Durgeddin's Fist (DDEP6-1)","Moon Sickle +1 (DDAL-DRW10)","Moon Sickle +2: Selune's Guidance (WBW-DC-NJ-COU-2)","Moon Sickle +2: Tsukikama (WBW-DC-PHP-1)","Moon Sickle +2 (BMG-DRWEP-OD-1)","Net of Warning (CCC-ELF-3-1)","Oathbow: Syranna's Folly (CCC-OCC-1)","Oathbow (DDAL-DRW8)","Oathbow: Shadowsong (DDEX3-7)","Oathbow: Selestria (WBW-DC-TMP-3)","Shortbow of Melodies (FR-DC-FALL-1)","Starshot Hand Crossbow (PO-BMG-DRW-KS-2)","Stone Greataxe (DDAL0-13)","Trident of Fish Command (CCC-BMG-MOON14-1)","Trident of Fish Command (CCC-TAROT2-8)","Trident of Fish Command (CCC-WWC-2)","Trident of Warning (DDEX2-3)","Vicious Glaive: Ptahrek's Glaive (CCC-SVH1-2)","Vicious Mace (CCC-BMG-1 HULB1-1)","Vicious Spear (DDAL0-13)","Trident of Warning (CCC-TRI-34)","Weapon of Warning (DDAL0-7)","Whip of Warning (CCC-GHC-BK2-10)","Whip of Warning (DDAL4-2)"],
	"berserker flail (ccc-ucon-1)" : {
		name : "Berserker Flail (CCC-UCON-1)",
		source : [["AL","CCC"]],
		type : "weapon (flail)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This battered flail is notched & covered in a patina of rust & dried blood. While wielding it, I have adv. on Wis (Survival) checks to track humanoids. This flail gives +1 to hit & dmg, +1 HP per level, & is cursed. I can't part w/ it & have disadv. using other weapons. Due to this desire, it costs an extra 30 DT to trade. When I'm damaged by a hostile, make a DC 15 Wis save or go berserk, using my action each round to atk the closest creature w/ the flail until none are within 60 ft.",
		descriptionFull : "This battered flail is notched and covered in a patina of rust and dried blood. While wielding this flail you have advantage on Wisdom (Survival) checks made to track humanoids. Due to your intense desire to retain the flail, it costs an extra 30 downtime days to trade away as you experience severe withdrawal from its powers.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.\n   " + toUni("Curse") + ". This flail is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the flail, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.\n   Whenever a hostile creature damages you while the flail is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the flail. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.",
		weaponOptions : {
			baseWeapon : "flail",
			regExpSearch : /^(?=.*flail)(?=.*berserker).*$/i,
			name : "Berserker Flail",
			description : "Cursed; counts as magical",
			modifiers : [1, 1],
				},
			calcChanges : {
			hp : function (totalHD) { return [totalHD]; },
			selectNow : true,
		}
	},
	"dagger of blindsight: panther's claw (rmh-9)" : {
		name : "Panther's Claw (Dagger of Blindsight)",
		source : [["AL:R", 9]],
		type : "weapon (dagger)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This magical dagger is made from an immense panther claw, set into a hilt of polished bone & wrapped in glossy black fur. I gain blindsight to a range of 30 ft and a penchant for consuming raw, bloody meat.",
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
		magicItemTable : "G",
		description : "This stylized dagger is etched with symbols that appear religious, but are impossible to identify by even the most educated scholar. The dagger adds a +1 bonus to attack & dmg rolls made w/ it. As an action once/dawn, blade coats itself w/ thick, black poison, lasting 1 min. While coated, 1st creature hit makes DC 15 Con save or takes 2d10 poison dmg & poisoned for 1 min.",
		descriptionFull : "These stylized versions of the Dagger of Venom are etched with symbols that appear almost religious, but are impossible to identify even to the most educated scholar.\n   You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (Coat)"]],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*fang)(?=.*sibyl).*$/i,
			name : "Fang of Sibyl, Dagger of Venom",
			description : "Finesse, light, thrown; If coated, DC 15 Con save or +2d10 poison damage \u0026 1 min poisoned",
			modifiers : [1, 1],
			selectNow : true,
		}
	},
	"dagger of venom (ddal4-11)" : {
		name : "Dagger of Venom (DDAL4-11)",
		source : [["AL","S4"]],
		type : "weapon (dagger)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This magical dagger appears as a knot of vipers, their tails becoming the pointed blade & heads forming the hilt & guard. I hear hissing snakes when in 120 ft of poison or venomous creature. The dagger adds a +1 bonus to attack & dmg rolls made w/ it. As an action once/dawn, blade coats itself w/ thick, black poison, lasting 1 min. While coated, 1st creature hit makes DC 15 Con save or takes 2d10 poison dmg & is poisoned for 1 min.",
		descriptionFull : "This magical dagger is forged to appear as a knot of vipers, their tails becoming the pointed blade and heads agape forming the hilt and guard. The wielder hears the sound of hissing snakes when within 120 feet of poison or a venomous creature. You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Dagger of Venom",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (Coat)"]],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*venom).*$/i,
			name : "Dagger of Venom",
			description : "Finesse, light, thrown; If coated, DC 15 Con save or +2d10 poison damage \u0026 1 min poisoned",
			modifiers : [1, 1],
			selectNow : true,
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
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*venom).*$/i,
			name : "Dagger of Venom",
			description : "Finesse, light, thrown; If coated, DC 15 Con save or +2d10 poison damage \u0026 1 min poisoned",
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
		description : "This flail has star-shaped perforations, out of which billow sensational incense. When borne by a follower of Waukeen, the scent is said to attract great wealth. The flail can be used as a holy symbol and deals +1d8 radiant damage. As a bonus action once per dawn, I can speak the command word to make it emanate incense out to 10 ft for 1 min. At the start of each of my turns, all creatures in the incense heal 1d4 hit points.",
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
		description : "+1d8 radiant damage",
		selectNow : true,
		}]
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
			description : "Finesse, light, thrown; plays a fragment of a guitar solo when it hits.",
			selectNow : true,
		}
	},
	"dwarven thrower: skyfist (ddep4)" : {
		name : "Skyfist, Dwarven Thrower (DDEP4)",
		source : [["AL","S4"]],
		type : "weapon (warhammer)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		prerequisite : "Requires attunement by a dwarf",
		prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
		weight : 2,
		description : "The head of this magical warhammer was forged into a gauntleted fist. The haft is a rod of heavy black adamantine wrapped in spongy green leather. Affixed to the pommel is a strip of blood-stained parchment inscribed with a dwarven battle song. When used, the hammer reads the song aloud (audible in 30ft). It has a +3 bonus to atk & dmg rolls & the thrown property 20/60ft. It deals an extra 1d8 dmg (2d8 to giants) when thrown & returns to my hand after each atk.",
		descriptionLong : "The striking surface of this magical warhammer has been forged into a gauntleted fist. The haft is a rod of heavy, black adamantine wrapped in spongy, green leather. Affixed to an iron ring on the pommel is a strip of tattered (though indestructible), blood-stained parchment inscribed with a dwarven battle canticle. When used, the hammer reads the canticle aloud in a deep resonating voice audible within 30ft. I gain a +3 bonus to attack and damage rolls made with this weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using this weapon, it deals an extra 1d8 damage or 2d8 damage against giants. Immediately after the attack, the weapon flies back to my hand.",
		descriptionFull : "The striking surface of this hammer has been forged into the shape of a gauntleted fist. The haft is a rod of heavy, black adamantine and wrapped in what appears to be spongy, green leather. Affixed to an iron ring on the pommel is a strip of tattered (though indestructible), blood-stained parchment inscribed with a dwarven battle canticle. When used in battle, the hammer reads the canticle aloud in a deep resonating voice audible to anyone within 30 feet of the weapon. You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weaponOptions : {
			baseWeapon : "warhammer",
			regExpSearch : /^(?=.*dwarven)(?=.*thrower)(?=.*skyfist).*$/i,
			name : "Skyfist, Dwarven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d10); +1d8 dmg when thrown (2d8 vs. giants) and returns immediately",
			modifiers : [3, 3], // add 3 to each to hit and damage because of the magical bonus
			selectNow : true,
		}
	},
	"dwarven thrower: foehammer (wbw-dc-mom-2)" : {
		name : "Foehammer, Dwarven Thrower (MOM-2)",
		source : [["AL","WBW-DC"]],
		type : "weapon (warhammer)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		prerequisite : "Requires attunement by a dwarf",
		prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
		weight : 2,
		description : "Made of fine steel inlaid with rare wood, this elegant warhammer was fashioned after the sentient weapon, Whelm, & blooms with amber light within 120ft of giants. While wielded, I'm obsessed with material wealth. Foehammer has a +3 bonus to atk & dmg rolls & the thrown property 20/60 ft. It deals an extra 1d8 dmg (2d8 to giants) when thrown & returns to my hand after each atk.",
		descriptionLong : "Made of finely forged steel inlaid with rare wood, this elegantly crafted warhammer has clearly been fashioned after the sentient warhammer, Whelm. It blooms with pale amber light within 120ft of giants, though I may be too preoccupied by my new obsession with precious gems to notice. I gain a +3 bonus to attack and damage rolls made with this weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using this weapon, it deals an extra 1d8 damage or 2d8 damage against giants. Immediately after the attack, the weapon flies back to my hand.",
		descriptionFull : "Made of finely forged steel inlaid with rare wood, the form of this elegantly crafted warhammer has clearly been fashioned after that of the sentient warhammer, Whelm. It blooms with pale amber light in the presence of giants, though a wielder of Foehammer might well be too preoccupied by their search for precious gems to notice.\n   " + toUni("Sentinel") + ". This item glows faintly when giants are within 120 feet of it.\n   " + toUni("Quirk: Covetous") + ". The item's bearer becomes obsessed with material wealth.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weaponOptions : {
			baseWeapon : "warhammer",
			regExpSearch : /^(?=.*dwarven)(?=.*thrower)(?=.*foehammer).*$/i,
			name : "Foehammer, Dwarven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d10); +1d8 dmg when thrown (2d8 vs. giants) and returns immediately",
			modifiers : [3, 3], // add 3 to each to hit and damage because of the magical bonus
			selectNow : true,
		}
	},
	"elven thrower (fr-dc-death)" : {
		name : "Elven Thrower (FR-DC-DEATH)",
		source : [["AL","FR-DC"]],
		type : "weapon (spear)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		prerequisite : "Requires attunement by an Elf",
		prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
		description : "This magic spear glows faintly in 120 ft of abberations. It has a +3 bonus to attack and damage rolls, and the thrown property 20/60 ft. It deals an extra 1d8 damage (2d8 to giants) when thrown and returns to my hand after each attack.",
		descriptionLong : "This magic spear glows faintly when abberations are within 120 ft. I gain a +3 bonus to attack and damage rolls made with this spear. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using this spear, it deals an extra 1d8 damage or 2d8 damage against giants. Immediately after the attack, the spear flies back to my hand.",
		descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.\n   " + toUni("Sentinel") + ". This item glows faintly when aberrations are within 120 feet of it.\n   ",
		weight : 3,
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /^(?=.*elven)(?=.*thrower).*$/i,
			name : "Elven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d8); +1d8 damage when thrown (2d8 vs. giants) and returns immediately",
			modifiers : [3, 3],
			selectNow : true,
		}
	},
	"elven thrower: araelathila (fr-dc-liga-1)" : {
		name : "Araelathila, Elven Thrower (LIGA-1)",
		source : [["AL","FR-DC"]],
		type : "weapon (spear)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		prerequisite : "Requires attunement by an Elf",
		prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
		description : "Forged by the High Elves during the Crown Wars, Araelathila has vanes of green arrows carved into it. The spear whispers “May I strike true my targets!” as an ode to Solonor Thelandira, giving +2 initative unless incapacitated. It has a +3 bonus to atk and dmg rolls, and the thrown property 20/60 ft. It deals an extra 1d8 dmg (2d8 to giants) when thrown and returns to my hand after each atk.",
		descriptionLong : "Forged by the High Elves during the Crown Wars, Araelathila has vanes of green arrows carved into it. The spear whispers “May I strike true my targets!”, granting a +2 bonus to initative if I'm not incapacitated. It's an ode to Solonor Thelandira. I gain a +3 bonus to attack and damage rolls made with this spear. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using this spear, it deals an extra 1d8 damage or 2d8 damage against giants. Immediately after the attack, the spear flies back to my hand.",
		descriptionFull : "Forged by the High Elves during the Crown Wars, Araelathila has vanes of green arrows carved into it.\n   " + toUni("Guardian") + ". The item whispers to its bearer “May I strike true my targets!”, granting a +2 bonus to initative if the bearer isn’t incapacitated. It is an ode to Solonor Thelandira.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weight : 3,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /araelathila, elven thrower/i,
			name : "Araelathila, Elven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d8); +1d8 damage when thrown (2d8 vs. giants) and returns immediately",
			modifiers : [3, 3],
			selectNow : true,
		}
	},
	"elven thrower: naginata (fr-dc-pandora-jwei-8)" : {
		name : "Naginata (Elven Thrower, PANDORA-JWEI-8)",
		source : [["AL","FR-DC"]],
		type : "weapon (spear)",
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		prerequisite : "Requires attunement by an Elf",
		prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
		description : "This bladed weapon has a long shaft with the word “giant's bane” carved in the Wa language. Whenever a giant comes within 120 ft, the blade glows red. The naginata has a +3 bonus to atk and dmg rolls, and the thrown property 20/60ft. It deals an extra 1d8 dmg (2d8 to giants) when thrown and returns to my hand after each atk.",
		descriptionLong : "This bladed weapon has a long shaft with the word “giant's bane” carved onto it in the Wa language. Whenever a giant comes within 120 feet, the blade glows red. I gain a +3 bonus to attack and damage rolls made with this spear. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When I hit with a ranged attack using this spear, it deals an extra 1d8 damage or 2d8 damage against giants. Immediately after the attack, the spear flies back to my hand.",
		descriptionFull : "This bladed weapon with a long shaft has the word “giant's bane” carved onto it in the Wa language.\n   " + toUni("Sentinel") + ". Whenever a giant comes within 120 feet of it, the blade glows red.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
		weight : 3,
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /naginata, elven thrower/i,
			name : "Naginata, Elven Thrower",
			range : "Melee, 20/60 ft",
			description : "Thrown, versatile (1d8); +1d8 damage when thrown (2d8 vs. giants) and returns immediately",
			modifiers : [3, 3],
			selectNow : true,
		}
	},
	"glaive of warning: the harbinger (ccc-epi1-2)" : {
			name : "The Harbinger, Glaive of Warning (EPI1-2)",
			source : [["AL","CCC"]],
			type : "weapon (glaive)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This massive scythe, the Harbinger, was forged from the darkest shadows of the plane of Gehenna, home of the orcish god Shaargas. The weapon's material is light & doesn't cast a shadow, though shadows warn its wielder of impending danger. While it's on my person, I have adv. on initiative. Also, I & my allies within 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by more than nonmagical sleep.",
			descriptionFull : "The Harbinger is a massive scythe was forged from the darkest shadows from the plane of Gehenna, home of the orcish god Shaargas. The material is light, and does not cast its own shadow. However, the item gives its user an uncanny ability for shadows to warn the user of impending danger.\n   While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Harbinger, Glaive of Warning"], options : ["Harbinger, Glaive of Warning"] },
			},
	"glaive of warning: losspatan's war-scythe (ccc-ggc-2-1)" : {
			name : "Losspatan's War-scythe of Warning (GGC-2-1)",
			source : [["AL","CCC"]],
			type : "weapon (glaive)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This war-scythe consists of a reddish 10-ft wooden pole with a curved scythe-like blade at the top that's etched with infernal runes. Along the base of the pole is the preserved tail of a fiendish creature, which emanates a foul odor of rot. When trouble is nearby, the tail whips & thrashes to warn of impending danger. While it's on my person, I have adv. on initiative. Also, I & my allies within 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by more than nonmagical sleep.",
			descriptionFull : "This war-scythe consists of a long reddish wooden pole about 10 feet in length with an attached curved scythe-like blade on the top end. The blade is etched with infernal runes. Along the base of the pole is the preserved tail of some fiendish creature. When trouble is nearby the tail whips and thrashes about warnings of the impending situation. Although preserved, the tail emanates a foul odor of rot.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Losspatan's War-scythe, Glaive of Warning"], options : ["Losspatan's War-scythe, Glaive of Warning"] },
			},
	"greatclub of warning: u'u war club (wbw-dc-den-h2)" : {
			name : "U'u War Club of Warning (WBW-DC-DEN-H2)",
			source : [["AL","WBW-DC"]],
			type : "weapon (greatclub)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "From a distant prime material land called the Marquesas Islands, the U'u War Club is carved from ironwood, sennit & human hair. A Marquesan warrior or chief carried this greatclub as a sign of status. The carvings of faces & eyes keep watch in all directions & symbolize a warrior's ancestors, endowing them with spiritual power & protection. While on my person, I have adv. on initiative. I & my allies within 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by more than nonmagical sleep.",
			descriptionFull : "From a distant prime material land known as the Marquesas Islands, the U'u War Club is carved from ironwood, sennit, and human hair. A Marquesan warrior or chief carried this club as a sign of status. The carvings of multiple faces and eyes keep watch in all directions and are symbolic representations of warrior's ancestors – endowing the wielder with spiritual power and protection.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["U'u War Club, Greatclub of Warning"], options : ["U'u War Club, Greatclub of Warning"] },
			},
	"greatclub of warning: clobber (wbw-dc-mike-1)" : {
			name : "Clobber, Greatclub of Warning (WBW-DC-MIKE-1)",
			source : [["AL","WBW-DC"]],
			type : "weapon (greatclub)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "To ensure that his ogre bodyguard, Clobber, couldn't be caught unawares, Scrimshaw enchanted his greatclub with magical wards. Elaborate carved curlicues wend their way around its gnarled oaken shaft & glow a dull crimson when danger is near. While on my person, I have adv. on initiative. I & my allies within 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by more than nonmagical sleep.",
			descriptionFull : "To ensure that the dim-witted ogre couldn't be caught unawares, Scrimshaw enchanted the weapon of his bodyguard, Clobber with magical wards. The elaborate curlicues carved into this greatclub twist and wend their way around its gnarled oaken shaft. They emit a dull crimson glow when danger is near.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Clobber, Greatclub of Warning"], options : ["Clobber, Greatclub of Warning"] },
			},
	"green-flame mace: face of umberlee's fury (ccc-awe-1-2)" : {
		name : "Face of Umberlee's Fury (Green-Flame Mace)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "G",
		type : "weapon (mace)",
		attunement : true,
		description : "While attuned to this mace, you can use an action to make its head alight with green flame or extinguish it. While “lit,” the mace glows as brightly as a torch & deals 1 extra fire dmg on a hit. Its head resembles the head of a merfolk female & when lit, the green flame looks like her hair flowing gently in water. The command words for the mace are “Fury” (to light) and “Rest” (to extinguish) in Aquan.",
		descriptionFull : "This mace is a common magic item. While attuned to the weapon, the wielder can use an action to make the head of the mace alight with green flame or use an action to extinguish the flame. While the mace is “lit,” it glows as brightly as a torch and deals an extra 1 fire damage on a hit.\n   The mace's head is shaped to resemble the head of a merfolk female. While “lit,” the green flame resembles the merfolk's hair flowing gently in water. The command words for the mace are the words “Fury” (to light) and “Rest” (to extinguish) in Aquan.",
		weight : 4,
		action : [["action", "Green-Flame Mace (Light/Extinguish)"]],
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*green)(?=.*flame)(?=.*umberlee|umberlee's)(?=.*fury).*$/i,
			name : "Umberlee's Fury, Green-Flame Mace",
			description : "Counts as magical; +1 fire dmg while lit",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-bfg1-3)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-BFG1-3)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This javelin has the symbol of Selûne embossed onto the head. Once per dawn I can speak the javelin's command word & make a ranged weapon attack with it on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning damage, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning damage.",
		descriptionFull : "This javelin has the symbol of Selûne embossed onto the head. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-bmg-moon6-3)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-BMG-MOON6-3)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This javelin crackles with energy that changes color to match my mood. When activated, it changes into an streak of rainbow lightning as it flies through the air. Once per dawn I can speak the javelin's command word & make a ranged weapon attack on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning damage, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning damage.",
		descriptionFull : "This javelin crackles with energy, which changes color to match the mood of the wielder. In lightning bolt form, it transforms into an electrical streak of rainbow lights as it streaks through the air.\n   When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-bmg-moon16-1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-BMG-MOON16-1)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The blackened wood of this javelin was taken from a tree struck by lightning. When activated, the lightning bolt is black & sends a chill through my body. Once per dawn I can speak the javelin's command word & make a ranged weapon attack with it on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning damage, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning damage.",
		descriptionFull : "The blackened wood of this javelin was taken from a tree struck by lightning. When activated, the lightning bolt is black and sends a chill through the user's body. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-gad2-2)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-GAD2-2)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This simple javelin is carved from bleached whalebone. It sparks with lightning whenever I'm angry. Once per dawn, I can speak the javelin's command word & make a ranged weapon attack with it on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning damage.",
		descriptionFull : "This simple javelin is carved from bleached whalebone. It sparks with lightning whenever its wielder is angry. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-sac-4)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-SAC-4)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Once per dawn, I can speak this javelin's command word & make a ranged weapon attack against a target in 120 ft. It turns into a lightning bolt & a minor storm appears above it, soaking all things in its path before dissipating. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning damage.",
		descriptionFull : "When you hurl this javelin and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. When thrown, a minor storm appears above the lightning bolt, soaking all things in its path with rain before dissipating immediately.\n   Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (ccc-sfbay-4-1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (CCC-SFBAY-4-1)",
		source : [["AL","CCC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The shaft of this javelin is crafted from fine ash wood while the point is shining steel. Runes etch the point & the air smells faintly of ozone before it's thrown. Once per dawn I can speak the javelin's command word & make a ranged weapon attack with it on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning damage, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning damage.",
		descriptionFull : "The shaft of this javelin is crafted from fine ash wood while the point is shining steel. Runes etch the point and the air smells faintly of ozone slightly before it is thrown. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (ddal8-5)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (DDAL8-5)",
		source : [["AL","S8"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This javelin glows an angry red when within 120 feet of a troll. Once per dawn I can speak this javelin's command word and make a ranged weapon attack with it on a target in 120 ft. Anyone between me and the target in a 5-ft wide line takes 4d6 lightning damage, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing and 4d6 lightning damage.",
		descriptionFull : "This javelin is a magic weapon and glows an angry red when within 120 feet of a troll. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-as-1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-AS-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This javelin is a magic weapon. Once per dawn, speak this javelin's command word & make a ranged weapon attack with it on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg. The javelin makes a sonic boom when used.",
		descriptionFull : "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.\n   " + toUni("Loud") + ". The javelin makes the sound of a sonic boom when it is used.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning: comet spear (sj-dc-cjk2-2)" : { // contains contributions by Larry Hoy
		name : "Comet Spear, Javelin of Lightning (CJK2-2)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Several adventurers pooled skills and resources to craft me a special weapon. Once per dawn, speak this javelin's command word & make a ranged weapon atk with it on a target in 120 ft. The spear turns into a glittering silver comet wreathed in electric fire. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg. I can also use an action to make my voice carry clearly for up to 300 ft until my next turn ends.",
		descriptionFull : "Several adventurers have decided to pool skills and resources together and over the rest of the night they crafted you a special weapon. This item behaves like the normal version except instead of transforming into a bolt of lightning, it turns into a glittering silver comet wreathed in electrified fire.\n   " + toUni("War Leader") + ". The bearer can use an action to cause his or her voice to carry clearly for up to 300 feet until the end of the bearer's next turn.\n   When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (300ft Voice)"]],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /comet spear/i,
			name : "Comet Spear, Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning: stormstrike (sj-dc-dd-4)" : { // contains contributions by Larry Hoy
		name : "Stormstrike, Javelin of Lightning (DD-4)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This short-hafted bident is made of the same smooth black metal as the Monad & glows when undead are in 120 ft. “5702M5721KE” is engraved on the haft & when I press a button, lightning crackles along the tines. Once per dawn, speak this javelin's command word & make a ranged weapon atk with it on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg.",
		descriptionFull : "This short-hafted bident is a relic of an earlier age. It is made of the same smooth black metal as the Monad, and the numbers and letters “5702M5721KE” are engraved on the haft. Lightning crackles along the tines when a button on the haft is pressed. Gauthak (from SJ-DC-DD-03) has pointed out that while the engraving hardly makes sense, it looks suspiciously like the word “Stormstrike”, and has taken to calling the bident as such.\n   " + toUni("Sentinel") + ". This item glows faintly when undead are within 120 feet of it.\n   When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning)(?=.*stormstrike).*$/i,
			name : "Stormstrike, Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning: processional baton (sj-dc-des5-1)" : { // contains contributions by Larry Hoy
		name : "Processional Baton (Javelin of Lightning, DES5-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This long narrow javelin of fey origin is crafted from mithral & reflects rainbows or other light tricks. When swung, it leaves behind arcs of white light or colors linked to my gender identity/sexual orientation. The spearhead is forged of pure light & only appears when I atk. Once per dawn, speak the command word & make a ranged weapon atk with the baton on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If I hit, the target takes 1d6 piercing & 4d6 lightning dmg.",
		descriptionFull : "The Processional Baton is a long narrow staff of fey origin, crafted from mithral and reflecting light in interesting ways. This makes the baton cast rainbows and other tricks of light around it. When swung, the baton leaves behind arcs of white light. Alternately, the wielder can have the baton cast arcs of color linked to their gender identity or sexual orientation (see the chart below). The spearhead only appears when used as a weapon, forged of pure light. The damage type of the weapon is unchanged by this property.\n   When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*processional)(?=.*baton)(?=.*javelin)(?=.*lightning).*$/i,
			name : "Processional Baton, Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning: rrakkma's smite (sj-dc-flumph-1)" : { // contains contributions by Larry Hoy
		name : "Rrakkma's Smite, Javelin of Lightning (FLUMPH-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This obsidian & silver-blue javelin radiates sparks of electricity when it makes contact with metal or flesh & the phrase ‘Rrakkma' is etched into the metal in Gith. It crackles & shocks warnings, giving +2 initiative unless incapacitated. Once per dawn, speak the javelin's command word & make a ranged weapon atk with it on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg.",
		descriptionFull : "This obsidian and silver-blue javelin radiates sparks of electricity when it makes contact with metal or flesh, the phrase ‘Rrakkma' is etched into the metal in Gith.'\n   " + toUni("Guardian") + ". The item crackles and electrically shocks a warning to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning)(?=.*rrakkma's)(?=.*smite).*$/i,
			name : "Rrakkma's Smite, Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning: jensen's lure (sj-dc-isl-1)" : { // contains contributions by Larry Hoy
		name : "Jensen's Lure, Javelin of Lightning (ISL-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This javelin's well-worn wood is dyed in stripes of magenta & green by years of exposure to Isl's algae. As a bonus action, I can reactivate or turn off the algae's bioluminescence with the javelin's lightning energy, creating a 10-ft radius of bright light & 10-ft dim. Once per dawn, speak the command word & make a ranged weapon atk with it on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg.",
		descriptionFull : "The well-worn wood of Jensen's Lure is dyed in stripes of magenta and green by years of exposure to Isl's algae. The bioluminescent property of these algae can be reactivated using the javelin's latent lightning energy, producing the beacon effect.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.\n   When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		action : [["bonus action", " (light/dim)"]],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning)(?=.*jensen's)(?=.*lure).*$/i,
			name : "Jensen's Lure, Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-liga1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-LIGA1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "As a bonus action, this magic javelin sheds 10-ft bright light & 10-ft more dim, or stops. Once per dawn, speak the command word & make a ranged weapon attack with the javelin on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg.",
		descriptionFull : "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		action : [["bonus action", " (light/dim)"]],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-mb5-ah123)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-MB5-AH123)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This javelin was crafted from an artifact infused the residual power of the Reigar, giving it an affinity with lightning. It can only be broken via special means. Once per dawn, speak the command word & make a ranged weapon attack with the javelin on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg.",
		descriptionFull : "This javelin was crafted with a small fragment of the artifact, which, infused the residual power of the Reigar, bestowed upon it an unparalleled affinity with lightning.\n   This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.\n   " + toUni("Unbreakable") + ". The item can't be broken. Special means must be used to destroy it.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning: reigar's rage (sj-dc-mdw-1)" : { // contains contributions by Larry Hoy
		name : "Reigar's Rage, Javelin of Lightning (MDW-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This gilded javelin is made of a cold durable metal with a gold-flecked surface and belonged to celestial beings called Reigar, destroyed by a wild magic anomaly in Dralla the Decadent's domain. It melted their tridents' outer points & encased them in crystalline space dust. When held, I distrust others with the same weapon due to the Reigar's longstanding feud. Once per dawn, speak the command word & make a ranged weapon atk with the javelin on a target in 120 ft. Anyone between me & target in a 5-ft wide line takes 4d6 lightning, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning.",
		descriptionFull : "These weapons belonged to a group of celestial beings called Reigar, who sought to mend their long-harbored resentment of one another through a retreat to Dralla the Decadent’s domain. While at respite, they witnessed the deities’ destruction by the wild magic ribbon anomaly. This immediately evoked flashbacks of their planet’s end and reignited their hatred for one another! Their battle feud empowered the ribbon retributive magic, which destroyed the Reigar and nearly destroyed their weapons. Encasing them in a crystalline fusion of space dust and wild magic.\n   These glided weapons are made of a cold, durable metal, whose surface is gold flecked. The wild magic ribbon melted the tridents outer points, leaving it with one point and imbuing it with its lighting property. When held, the wielder distrusts others wielding the same type of weapon.\n   This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*reigar's)(?=.*rage)(?=.*javelin)(?=.*lightning).*$/i,
			name : "Reigar's Rage, Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-triden-upr)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-TRIDEN-UPR)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This crystalline blue javelin is indestructible while it retains its magical lightning attack. Once per dawn, speak the command word & make a ranged weapon attack with the javelin on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg.",
		descriptionFull : "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.\n   " + toUni("Unbreakable") + ". This crystalline blue javelin is indestructible while it retains its magical lightning attack; it cannot be destroyed by traditional means.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of lightning (sj-dc-ttuc-1)" : { // contains contributions by Larry Hoy
		name : "Javelin of Lightning (SJ-DC-TTUC-1)",
		source : [["AL","SJ-DC"]],
		type : "weapon (javelin)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This javelin was created by a Gnomish tinkerer & I can speak Gnomish while it's on my person. Once per dawn, speak the command word (Godspeed in Gnomish) & make a ranged weapon attack with the javelin on a target in 120 ft. Anyone between me & the target in a 5-ft wide line takes 4d6 lightning dmg, DC 13 Dex save halves. If the javelin hits, the target takes 1d6 piercing & 4d6 lightning dmg.",
		descriptionFull : "The gnome tinkerer created this javelin made sure those who uses the Javelin know its command word “godspeed” in Gnomish which crafted on the javelin.\n   " + toUni("Language") + ". This Javelin of Lightning has minor property Language (Gnome). The bearer can speak and understand Gnomish while the item is on the bearer's person. \n   When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n   The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
		weight : 2,
		limfeaname : "Javelin of Lightning",
		usages : 1,
		recovery : "dawn",
		languageProfs : ["Gnomish"],
		weaponOptions : {
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*javelin)(?=.*lightning).*$/i,
			name : "Javelin of Lightning",
			description : "Thrown; Once per dawn special attack, see item description",
			selectNow : true,
		}
	},
	"javelin of warning: jeny's hairpin (ccc-vote-1-1)" : {
			name : "Jeny's Hairpin, Javelin of Warning (VOTE-1-1)",
			source : [["AL","CCC"]],
			type : "weapon (javelin)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This magical javelin resembles a giant hairpin made of purple wood, with a fist-sized jet at its head. Warnings of danger in Jeny's voice shout for me to prepare for battle. I can't say whether it's the weapon shouting or Jeny herself. While it's on my person, I feel discomfort & distaste but have adv. on initiative. I & my allies in 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This magical javelin resembles a giant hairpin made of purple wood, with a fist-sized jet at its head. Players who have experienced “DDEX-01-08 Tales Trees Tell” recognize it as the same sort of item that pinned a villager to the town post, and may even recall it acts as a scrying sensor for Jeny Greenteeth. Warnings of danger come in Jeny's voice, shouting that they should prepare for battle. Whether it is the weapon shouting or Jeny herself, it is hard to divine.\n   The bearer feels a sense of distaste when in contact with the item, and continues to sense discomfort while bearing it.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Jeny's Hairpin, Javelin of Warning"], options : ["Jeny's Hairpin, Javelin of Warning"] 	},
			},
	"lash of immolation: dragon's tail (fr-dc-strat-dragon-2)" : {
		name : "Dragon's Tail, Lash of Immolation (STRAT-DRAGON-2)",
		source : [["AL", "FR-DC"]],
		type : "weapon (whip)",
		rarity : "rare",
		description : "This +1 whip is made from Dalagh's discarded scales and deals +1d6 fire. The Tear of Selûne bound and enchanted the scales in thin flexible lines. When I roll a critical hit with it, fiery bands restrain the target until my next turn. As a reaction once per dawn when I hit with it, I can invoke its fire rune to increase the fire damage to 2d6. I also suffer no harm in temps from -20\u00B0F to 120\u00B0F.",
		descriptionFull : "This whip is made from Dalagh's discarded scales placed around the Tear of Selûne, which bound the scales together in thin flexible lines,  enchanted them, and let the whip do fire damage."+
		"\n   " + toUni("Temperate") + ". The bearer suffers no harm in temperatures as cold as –20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit."+
		"\n   The handle of this dark leather whip bears the fire rune, and embers dance around the whip's tail."+
		"\n   You gain a +1 bonus to attack and damage rolls made with this weapon, and on a hit, the whip deals an extra 1d6 fire damage. When you score a critical hit with an attack using this whip, the target also has the restrained condition until the start of your next turn, as fiery bands lash around the target."+
		"\n   " + toUni("Invoking the Rune") + ". When you make an attack with the whip and hit, you can use your reaction to invoke the whip's rune. Doing so increases the extra fire damage dealt by the whip to 2d6."+
		"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
		weight : 3,
		weaponOptions : [{
			baseWeapon : "whip",
			regExpSearch : /^(?=.*dragon|s)(?=.*tail).*$/i,
			name : "Dragon's Tail, Lash of Immolation",
			description : "Finesse, reach; +1d6 fire damage (1/dawn +2d6); Critical hit: restrained until my next turn",
			modifiers : [1, 1],
			selectNow : true
		}],
		action : [["reaction", " (invoke rune)"]],
		limfeaname : "Lash of Immolation",
		usages : 1,
		recovery : "dawn",
		additional : "invoke rune",
		savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
	},
	"longbow of melodies: lavender's scent (fr-dc-pandora-jwei-10)" : {
			name : "Lavender's Scent, Longbow of Melodies (PANDORA-JWEI-10)",
			source : [["AL","FR-DC"]],
			type : "weapon (any bow)",
			rarity : "very rare",
			attunement : true,
			description : "This longbow is shaped like a harp with multiple strings. When strummed, it emits an aroma of lavender and those who fall asleep while enchanted by its melodies are blessed with tranquil dreams. The bow also whispers warnings, giving +2 initiative if not incapacitated. I can use the strings to play 1 melody on each atk. Melody of Precision: If proficient with Performance, add +1 (+2 if expertise) to the atk roll. Melody of Reverberation: add Charisma modifier in Thunder dmg to atk.",
			descriptionFull : "This longbow, fashioned in the likeness of a harp, emanates a soothing aroma of lavender when its strings are strummed. It is said that those who fall asleep while enchanted by its melodies are blessed with tranquil dreams, free from the burdens of the waking world."+
			"\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated."+
			"\n   This bow has multiple strings and resembles a lyre or small harp. By strumming the strings while setting an arrow to the bow, you imbue the arrow with magic."+
			"\n   You can play one of the following melodies when you use the bow to make a ranged weapon attack. You must choose to do so before you make the attack roll, and you can play only one melody per attack."+
			"\n   " + toUni("Melody of Precision") + ". If you're proficient in Performance, you gain a +1 bonus to the attack roll. If you have expertise in Performance, you gain a +2 bonus instead."+
			"\n   " + toUni("Melody of Reverberation") + ". The melody you strum echoes loudly. On a hit, the target takes extra thunder damage equal to your Charisma modifier.",
			addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
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
		magicItemTable : "G",
		type : "weapon (mace)",
		description : "This black metal mace is decorated with holy symbols of Auril, Talos, & Velsharoon. It sheds bright light in a 20-ft radius & dim light for another 20 ft. This light flickers like lightning & generates occasional swirls of snowflakes. Fiends & undead hit w/ mace take +2d6 radiant dmg. If they have under 26 HP after taking the dmg, DC 15 Wis save or destroyed. If pass, frightened of me until my next turn ends.",
		descriptionFull : "This black metal mace is decorated with the holy symbols of Auril, Talos, and Velsharoon. The light shed by this mace flickers like lightning and generates occasional swirls of snowflakes. When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n   While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
		attunement : true,
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*disruption).*$/i,
			name : "Mace of Disruption",
			description : "Fiend/undead +2d6 radiant damage; if hp<26, DC 15 Wis save. Fail = death, pass = frightened until my next turn ends",
			selectNow : true,
		}
	},
	"mace of disruption: death's head (ccc-ghc-bk1-2)" : {
		name : "Death's Head, Mace of Disruption (GHC-BK1-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		type : "weapon (mace)",
		description : "This mace has a long stout handle wrapped in black leather & can be attuned to in 1 min. The top is a ornate carved skull w/ curved ram-like horns & screaming mouth. It sheds bright light in a 20-ft radius & dim light for another 20 ft. Golden sparks of flame burst forth when the mace hits fiends or undead, adding +2d6 radiant dmg & sounding a single ominous bell toll. If the creature has under 26 HP after taking the dmg, DC 15 Wis save or destroyed. If pass, frightened of me until my next turn ends.",
		descriptionFull : "This magical mace has a long, stout handle wrapped in black leather. The top is an ornately carved skull, its mouth opened as if screaming. Curved ram-like horns protrude from temples of the skull. When it strikes an undead or fiendish foe, golden sparks, tinged with flame burst forth, and the mace rings forth a single ominous toll, as if from a large bell.\n   This item has the harmonious minor property. Attuning to it takes only 1 minute.\n   When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n   While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
		attunement : true,
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*death's)(?=.*head).*$/i,
			name : "Death's Head, Mace of Disruption",
			description : "Fiend/undead +2d6 radiant damage; if hp<26, DC 15 Wis save. Fail = death, pass = frightened until my next turn ends",
			selectNow : true,
		}
	},
	"mace of smiting (ddal7-6)" : {
		name : "Mace of Smiting (DDAL7-6)",
		source : [["AL","S7"]],
		rarity : "rare",
		magicItemTable : "G",
		type : "weapon (mace)",
		description : "The once-fine haft of this magical mace has gone to soggy rot; even the leather wrapping its pommel doesn't stop it from soaking through my gloves. The adamantine head is carved into the giant rune Rün (ruin). Upon striking a construct, it unleashes a shower of gold sparks. This mace adds +1 (+3 vs. constructs) to atk & dmg rolls. On a nat. 20 to hit, the target takes an extra 7 bludgeoning dmg (+14 to contructs). If a construct has under 26 HP after this dmg, it's destroyed.",
		descriptionFull : "The once-fine haft of this club has long-since gone to soggy rot; even the leather wrapping its pommel isn't enough to stop it from soaking through the wearer's gloves. The adamantine head of the mace is carved to resemble the giant rune Rün (ruin). Upon striking a construct with the mace, it unleashes a shower of gold sparks. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			description : "+2 to hit/damage vs. constructs; On 20 to hit: +7 damage (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1],
			selectNow : true,
		}
	},
	"mace of smiting (ddal8-7)" : {
		name : "Mace of Smiting (DDAL8-7)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "G",
		type : "weapon (mace)",
		description : "This head of this magic mace features an angry dwarven face. The ghost of Reizzlerum Caskview still maintains a connection to the weapon, giving me an unending thirst for good ale. As I grow intoxicated, the face appears more drunkenly joyful. The longer I go without a drink, the angrier the face appears. This mace adds +1 (+3 vs. constructs) to atk & dmg rolls. On a nat. 20 to hit, the target takes an extra 7 bludgeoning dmg (+14 to contructs). If a construct has under 26 HP after this dmg, it's destroyed.",
		descriptionFull : "This head of the mace of smiting features an angry dwarven face. The ghost of Reizzlerum Caskview still maintains a connection to the weapon, causing the owner to gain an unending thirst for good ale. As the owner becomes intoxicated, the face on the mace shifts to appear more drunkenly joyful. The longer the owner goes without a drink, the angrier the face appears. You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			description : "+2 to hit/damage vs. constructs; On 20 to hit: +7 damage (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1],
			selectNow : true,
		}
	},
	"mace of smiting (ddal10-7)" : {
		name : "Mace of Smiting (DDAL10-7)",
		source : [["AL","S10"]],
		rarity : "rare",
		magicItemTable : "G",
		type : "weapon (mace)",
		description : "This mace is fashioned from a single piece of obsidian. The following phrase is inscribed over & over in Draconic around the haft: “Those willing to deny themselves the radiance of the stars would be better to pluck out their eyes & cast them away.” This mace adds +1 (+3 vs. constructs) to atk & dmg rolls. On a nat. 20 to hit, the target takes an extra 7 bludgeoning dmg (+14 to contructs). If a construct has < 26 HP after this dmg, it's destroyed.",
		descriptionFull : "This mace is fashioned from a single piece of obsidian. The following phrase is inscribed over and over in Draconic around the mace's haft: “Those willing to deny themselves the radiance of the stars would be better to pluck out their eyes and cast them away.” You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
		weight : 4,
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*smiting).*$/i,
			name : "Mace of Smiting",
			description : "+2 to hit/damage vs. constructs; On 20 to hit: +7 damage (+14 vs. constructs); Constructs hp<26 destroyed",
			modifiers : [1,1],
			selectNow : true,
		}
	},
	"mace of terror: durgeddin's fist (ddep6-1)" : {
		name : "Durgeddin's Fist, Mace of Terror (DDEP6-1)",
		source : [["AL","S6"]],
		rarity : "rare",
		magicItemTable : "G",
		type : "weapon (mace)",
		description : "Wrought of blackened steel, the head of this mace is shaped like 3 screaming orc skulls. When wielded against orcs, Durgeddin's Fist bellows profanities & insults in a fearsome baritone audible for 30'. This mace has 3 charges, regaining 1d3 at dawn. As an action, 1 charge for all chosen creatures w/i 30ft to make DC 15 Wis save or be frightened of me for 1 min, repeating at end of turns. While frightened, only action to Dash away (or free itself), no reactions, & can't move w/i 30 ft.",
		descriptionLong : "Wrought of blackened steel, the head of this mace is forged in the likeness of 3 screaming orc skulls. When wielded in combat against orcs, Durgeddin's Fist bellows an endless stream of profanities and insults in a fearsome dwarven baritone audible for 30'. This magic mace has 3 charges, regaining 1d3 at dawn. As an action, I can expend 1 charge to have each creature of my choice within 30 ft make a DC 15 Wis save or become frightened of me for 1 minute. While frightened, a creature must spend its turns trying to move as far away from me as it can, using its action to Dash or get away; it can't willingly move within 30 ft of me and can't take reactions. If it has nowhere to move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
		descriptionFull : "Wrought of blackened steel, the head of this mace is forged in the likeness of three screaming orc skulls. When wielded in combat against orc foes, Durgeddin's Fist bellows an endless stream of profanities and insults in a fearsome dwarven baritone audible for 30'. This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foot radius extending from you must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.\n   The mace regains 1d3 expended charges daily at dawn.",
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
			description : "This silver sickle glimmers softly with moonlight. While holding this +1 sickle, I also gain a +1 bonus to spell atk rolls & saving throw DCs of druid & ranger spells. Spells I cast that restore HP add 1d4 to the total & a number of ivy leaves equal to the hp restored sprout from the haft & fall away.",
			descriptionFull : "This moonsickle is handcrafted with sophistication in mind. The blade is artisanally forged and is very sharp. The handle is made of oakwood, is varnished and is finished with a bright sheen. The phrase “Mithral Chef” is also etched on the base of the handle."+
			"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells."+
			"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
			weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 1;
				},
				"While holding the Moon Sickle, I gain a +1 bonus to the spell attack rolls and saving throw DCs of my druid and ranger spells."
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
			description : "A glowing platinum arabesque graces both sides of this sickle. The polished ivory hilt is carved in the likeness of a beautiful dryad. While holding this +2 sickle, I also gain a +2 bonus to spell atk rolls & saving throw DCs of druid & ranger spells. Spells I cast that restore HP add 1d4 to the total restored.",
			descriptionFull : "A glowing platinum arabesque graces both sides of this sickle’s blade. The polished ivory hilt is carved in the likeness of a beautiful dryad."+
			"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells."+
			"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
			weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 2;
				},
				"While holding the Moon Sickle, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my druid and ranger spells."
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
			description : "This +2 silver sickle glimmers softly with moonlight. The handle contains symbols of Selûne, with these words carved on the blade: “Let all on whom my light falls be welcomed if they desire. As the silver moon waxes and wanes, so too does all life. Trust in my radiance, and know that all love under my light shall know my blessing. Turn to the moon, and I will be your true guide.” While holding the sickle, I gain a +2 bonus to spell atk rolls & saving throw DCs of druid & ranger spells. Spells I cast that restore HP add 1d4 to the total.",
			descriptionFull : "The handle of this sickle contains the symbols of Selûne, with the following words carved on the blade: “Let all on whom my light falls be welcomed if they desire to do so. As the silver moon waxes and wanes, so too does all life. Trust in my radiance, and know that all love alive under my light shall know my blessing. Turn to the moon, and I will be your true guide.”"+
			"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells."+
			"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
			weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 2;
				},
				"While holding the Moon Sickle, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my druid and ranger spells."
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
			description : "This sophisticated handcrafted silver sickle glimmers softly with moonlight. The sharp blade is artisanally forged & the handle is made of oak, varnished & finished with a bright sheen. The phrase “Mithral Chef” is etched on the handle. While holding this +2 sickle, I also gain a +2 bonus to spell atk rolls & saving throw DCs of druid & ranger spells. Spells I cast that restore HP add 1d4 to the total restored.",
			descriptionFull : "This moonsickle is handcrafted with sophistication in mind. The blade is artisanally forged and is very sharp. The handle is made of oakwood, is varnished and is finished with a bright sheen. The phrase “Mithral Chef” is also etched on the base of the handle."+
			"\n   This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells."+
			"\n   When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
			weight : 2,
		calcChanges : {
				spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (/druid|ranger/).test(spellcasters)) return 2;
				},
				"While holding the Moon Sickle, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my druid and ranger spells."
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
	"net of warning (ccc-elf-3-1)" : {
			name : "Net of Warning (CCC-ELF-3-1)",
			source : [["AL","CCC"]],
			type : "weapon (net)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This magical iron net is of fine gnomish make & gives me a fascination with tinkered contraptions. When on my person, I have adv. on initiative. Also, I & my allies in 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This iron chain net is of fine, gnomish make. When attuned to this item, the user experiences a fascination with tinkered contraptions.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.\n   " + toUni("Special") + ". A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success.\n   When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.",
			weaponsAdd : { select : ["Net of Warning"], options : ["Net of Warning"] },
			},
	"oathbow: syranna's folly (ccc-occ-1)" : {
		name : "Syranna's Folly, Oathbow (CCC-OCC-1)",
		source : [["AL","CCC"]],
		type : "weapon (longbow)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This elven bow has the soul of a Thayan rebel within, her defiled sigil etched into the grip. I can speak Thayan & have this Bond: “I won't be at peace until Szass Tam & his plots are erased from existence”. When I atk w/ bow & say command phrase, the target becomes sworn enemy for 7 days or until death. Bow atks vs it get adv, +3d6 dmg, ignore cover (not full), & no disadv. at long range. While it lives, I have disadv. w/ other weapons. Property can't be used again until dawn after enemy dies.",
		descriptionLong : "This elven bow has the soul of a Thayan rebel irreversibly entwined within it, her sigil defiled & etched into the grip. When attuned, I can speak & understand Thayan & receive this Bond: “I will not be at peace until Szass Tam & his plots are erased from existence”. When I use this weapon to make a ranged attack & say its command phrase \"Swift death to you who have wronged me.\", my target becomes my sworn enemy until it dies or until dawn 7 days later. I can have only one sworn enemy at a time & when it dies, I can choose a new one after the next dawn. My ranged attack rolls with this weapon against my sworn enemy have adv., do +3d6 piercing damage, ignore all cover but full, & don't suffer disadv. due to long range. While my sworn enemy lives, I have disadv. on attack rolls with other weapons.",
		descriptionFull : 'This elven bow has the soul of a Thayan rebel permanently and irreversibly entwined within it, her sigil defiled and etched into the grip. When attuned, the bearer can speak and understand Thayan, in addition to receiving the following Bond: “I will not be at peace until Szass Tam and his plots are erased from existence”.\n   When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.',
		attunement : true,
		languageProfs : ["Thayan"],
		weight : 2,
		weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /^(?=.*oathbow)(?=.*syranna|syranna's)(?=.*folly).*$/i,
			name : "Syranna's Folly, Oathbow",
			description : "Ammunition, heavy, two-handed; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties",
			selectNow : true,
		}
	},
	"oathbow (ddal-drw8)" : {
		name : "Oathbow (DDAL-DRW8)",
		source : [["AL","DRW"]],
		type : "weapon (longbow)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This particular oathbow is made of blackened, cooled lava, its string glowing as if red-hot. When I attack with the longbow and say its command phrase, the target becomes my sworn enemy for 7 days or until death. Attacks vs it with this bow get adv, +3d6 damage, ignore cover (not full), and suffer no disadv. from long range. While it lives, I have disadv. when I use other weapons. Property can't be used again until the next dawn after enemy dies.",
		descriptionLong : "This particular oathbow is made of blackened, cooled lava, its string glowing as if red-hot. When I use this weapon to make a ranged attack and say its command phrase \"Swift death to you who have wronged me.\", the target of that attack becomes my sworn enemy until it dies or until dawn seven days later. I can have only one such sworn enemy at a time and when it dies, I can choose a new one after the next dawn. My ranged attack rolls with this weapon against my sworn enemy have advantage, do +3d6 piercing damage, ignore all cover except full, and don't suffer disadvantage due to long range. While my sworn enemy lives, I have disadvantage on attack rolls with all other weapons.",
		descriptionFull : 'This particular oathbow is made of blackened, cooled lava, its string glowing as if red-hot. When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.',
		attunement : true,
		weight : 2,
		weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /oathbow/i,
			name : "Oathbow",
			description : "Ammunition, heavy, two-handed; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties",
			selectNow : true,
		}
	},
	"oathbow: shadowsong (ddex3-7)" : {
		name : "Shadowsong, Oathbow (DDEX3-7)",
		source : [["AL","S7"]],
		type : "weapon (longbow)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "Shadowsong is hewn from yew & features green metal tendrils snaking through its length. It glows dimly in the presence of humans & whispers 'Swift defeat to my enemies' when nocked. When I atk w/ bow & say command phrase, the target becomes sworn enemy for 7 days or until death. Bow atks vs it get adv, +3d6 dmg, ignore cover (not full), & suffer no disadv. from long range. While it lives, I have disadv. with other weapons. Property can't be used again until dawn after enemy dies.",
		descriptionLong : "Each of the elven oathbows are possessed of mythical power. Shadowsong is hewn from yew and features curious green metal tendrils snaking through its length. It glows dimly in the presence of humans. When I use this weapon to make a ranged attack and say its command phrase \"Swift death to you who have wronged me.\", the target of that attack becomes my sworn enemy until it dies or until dawn seven days later. I can have only one such sworn enemy at a time and when it dies, I can choose a new one after the next dawn. My ranged attack rolls with this weapon against my sworn enemy have advantage, do +3d6 piercing damage, ignore all cover except full, and don't suffer disadvantage due to long range. While my sworn enemy lives, I have disadvantage on attack rolls with all other weapons.",
		descriptionFull : 'Each of the elven oathbows are possessed of mythical power and ancient legends. Shadowsong is hewn from a supple length of yew and features curious green metal tendrils snaking through its length. It glows dimly in the presence of humans.\n   When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.',
		attunement : true,
		prerequisite : "Requires attunement by a ranger.",
		prereqeval : function(v) {
			return classes.known.ranger || classes.known.rangerua ? true : false;
		},
		weight : 2,
		weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /shadowsong/i,
			name : "Shadowsong Oathbow",
			description : "Ammunition, heavy, two-handed; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties",
			selectNow : true,
		}
	},
	"oathbow: selestria (wbw-dc-tmp-3)" : {
		name : "Selestria, Oathbow (WBW-DC-TMP-3)",
		source : [["AL","CCC"]],
		type : "weapon (longbow)",
		rarity : "very rare",
		magicItemTable : "H",
		description : "Selestria is strung with unicorn hair & made from the heartwood of an elder treant dedicated to protecting the forest. The bow mutters Elvish prayers to Mielikki & grumbles in cities about being far from nature. If I listen carefully, I may learn something. When I atk w/ bow & say command phrase, the target becomes sworn enemy for 7 days or until death. Bow atks vs it get adv, +3d6 dmg, ignore cover (not full), & no disadv. at long range. While it lives, I have disadv. w/ other weapons. Property can't be used again until dawn after enemy dies.",
		descriptionLong : "Selestria is strung with the hair of a unicorn and made from the heartwood of an elder treant who served Mielikki and wished to dedicate their afterlife to protecting the forest. While wielded, the bow mutters Elvish prayers to Mielikki & grumbles about being far from nature while in urban settings. If I listen carefully, I might learn something useful. When I use this weapon to make a ranged attack & say its command phrase \"Swift death to you who have wronged me.\", my target becomes my sworn enemy until it dies or until dawn 7 days later. I can have only one sworn enemy at a time & when it dies, I can choose a new one after the next dawn. My ranged attack rolls with this weapon against my sworn enemy have adv., do +3d6 piercing damage, ignore all cover but full, & don't suffer disadv. due to long range. While my sworn enemy lives, I have disadv. on attack rolls with other weapons.",
		descriptionFull : 'Selestria is made from the heartwood of an elder treant who served Mielikki and wished to dedicate their afterlife to protecting the forest. Selestria is strung with the hair of a unicorn.\n   " + toUni("Muttering") + ". Seletria mutters prayers to Mielikki in Elvish while wielded, and grumbles about being far from nature while in urban settings. A creature who listens carefully to the item might learn something useful.\n   When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.',
		attunement : true,
		weight : 2,
		weaponOptions : {
			baseWeapon : "longbow",
			regExpSearch : /^(?=.*oathbow)(?=.*selestria).*$/i,
			name : "Selestria, Oathbow",
			description : "Ammunition, heavy, two-handed; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties",
			selectNow : true,
		}
	},
	"shortbow of melodies (fr-dc-fall-1)" : {
			name : "Shortbow of Melodies (FR-DC-FALL-1)",
			source : [["AL","FR-DC"]],
			type : "weapon (any bow)",
			rarity : "very rare",
			attunement : true,
			description : "This shortbow is shaped like a harp with multiple strings. It's the color of Auril’s rime and always cool to the touch. While on my person, I suffer no harm in temperatures from -20\u00B0F to 120\u00B0F. I can use the strings to play 1 melody per atk. Precision: If proficient with Performance, add +1 (+2 if expertise) to atk roll. Reverberation: add Charisma mod Thunder dmg.",
			descriptionLong : "This shortbow is shaped like a harp with multiple strings. It's the color of Auril’s rime and always cool to the touch. While on my person, I suffer no harm in temperatures from -20\u00B0F to 120\u00B0F. I can use the strings to play 1 of 2 melodies on each atk. Melody of Precision: If proficient with Performance, add +1 (+2 if expertise) to the atk roll. Melody of Reverberation: add Charisma modifier in thunder dmg to atk.",
			descriptionFull : "This bow is the color of Auril’s rime and is always cool to the touch."+
			"\n   " + toUni("Temperate") + ". The bearer suffers no harm in temperatures as cold as –20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit."+
			"\n   This bow has multiple strings and resembles a lyre or small harp. By strumming the strings while setting an arrow to the bow, you imbue the arrow with magic."+
			"\n   You can play one of the following melodies when you use the bow to make a ranged weapon attack. You must choose to do so before you make the attack roll, and you can play only one melody per attack."+
			"\n   " + toUni("Melody of Precision") + ". If you're proficient in Performance, you gain a +1 bonus to the attack roll. If you have expertise in Performance, you gain a +2 bonus instead."+
			"\n   " + toUni("Melody of Reverberation") + ". The melody you strum echoes loudly. On a hit, the target takes extra thunder damage equal to your Charisma modifier.",
			savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
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
		description : "This black wooden crossbow has pearl inlays depicting 3 constellations. Interlacing silver ferns —a popular Rashemi motif— adorn both sides of the foregrip. It ignores loading and produces its own ammo when fired. The crossbow has 3 charges, regaining 1d3 at dawn. As a bonus action, use 1 charge to invoke a constellation until next turn ends. Balance: next hit with crossbow heals someone in 30 ft for 1d8 + PB. Flames: crossbow deals +2d8 fire dmg. Rogue: I become invisible.",
		descriptionLong : "This crossbow of blackened wood has pearl inlays depicting three different constellations. Interlacing silver ferns—a popular Rashemi motif— adorn both sides of the foregrip. It has 3 charges and regains 1d3 used charged daily at dawn. It produces its own ammo that lasts until it hits or misses a target. As a bonus action, I can use 1 charge to tap and invoke one of its constellations until my next turn ends. Balance: next hit with the crossbow heals me or another within 30 ft of me for 1d8 + my Prof Bonus. Flames: the crossbow deals +2d8 fire damage. Rogue: I become invisible as well as anything I'm wearing or carrying.",
		descriptionFull : "Interlacing silver ferns—a popular Rashemi motif— adorn both sides of the foregrip.\n   This crossbow is crafted from blackened wood, and its limbs bear pearl inlays depicting constellations. You ignore the loading property with this crossbow. If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target. The crossbow has 3 charges and regains 1d3 expended charges daily at dawn."+
		"\n   " + toUni("Constellations") + ". The crossbow is decorated with three constellations. As a bonus action, you can tap one of the constellations to invoke it, expending 1 charge and producing one of the following effects:"+
		"\n   " + toUni("Balance") + ". The next time you hit a creature with a ranged attack roll using this crossbow before the end of your next turn, you or another creature of your choice within 30 feet of you can regain hit points equal to 1d8 plus your proficiency bonus."+
		"\n   " + toUni("Flames") + ". Until the end of your next turn, when you hit a creature with a ranged attack roll using this crossbow, the attack deals an additional 2d8 fire damage."+
		"\n   " + toUni("Rogue") + ". Until the end of your next turn, you have the invisible condition, and anything you are wearing or carrying is also invisible.",
		action : [["bonus action", ""]],
		limfeaname : "Starshot Crossbow",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		weaponOptions : {
			baseWeapon : "hand crossbow",
			regExpSearch : /^(?=.*starshot)(?=.*hand)(?=.*crossbow).*$/i,
			name : "Starshot Hand Crossbow",
			description : "Ammunition, light",
			selectNow : true,
		}
	},
	"stone greataxe (ddal0-13)" : {
		name : "Stone Greataxe (DDAL0-13)",
		source : [["KOSC",48]],
		rarity : "rare",
		magicItemTable : "?",
		allowDuplicates : true,
		description : "A stone greataxe with a handle made from chardalyn. While wielding the axe, I gain resistance to cold damage when I'm not at full hit points.",
		descriptionFull : "A stone greataxe with a handle made from chardalyn. While wielded by a creature at less than full hit points, the wielder has resistance to cold damage. This is a rare magic item.",
		dmgres : ["Cold (If injured)"],
		weaponsAdd : { select : ["Stone Greataxe"], options : ["Stone Greataxe"] },
			},
	"trident of fish command (ccc-bmg-moon14-1)" : {
		name : "Trident of Fish Command (BMG-MOON14-1)",
		source : [["AL","CCC"]],
		type : "weapon (trident)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This trident is made of porous blackened lava rock, seemingly hot to the touch. When used underwater, schools of tiny brightly colored fish encircle me & refuse to leave no matter my wishes. The trident has 3 charges & regains 1d3 at dawn. While carrying it, I can use an action & expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast with an innate swimming speed.",
		descriptionFull : "This trident is made of porous, blackened lava rock, seemingly hot to the touch. When used underwater, schools of tiny, brightly colored fish encircle the wielder and refuse to leave no matter the wishes of the trident's owner.\n   This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
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
				description : "1 beast with swim speed save or charmed, follows telepathic commands, 1 a for complete control",
				changes : "Can only affect beasts with innate swim speed."
			}
		}
	},
	"trident of fish command (ccc-tarot2-8)" : {
		name : "Trident of Fish Command (TAROT2-8)",
		source : [["AL","CCC"]],
		type : "weapon (trident)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This beautiful magic trident is made from pure pearl, likely carved from the treasure of a massive oyster. Delicate lines along the weapon's prongs & shaft blend imagery of strong winds & calm seas. The trident has 3 charges & regains 1d3 at dawn. While carrying it, I can use an action & expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast with an innate swimming speed.",
		descriptionFull : "This beautiful trident seems bafflingly made from pure pearl, likely carved from the treasure of a massive oyster. Delicate lines along the weapon's shaft and head seem to blend imagery of strong winds and calm seas.\n   This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
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
				description : "1 beast with swim speed save or charmed, follows telepathic commands, 1 a for complete control",
				changes : "Can only affect beasts with innate swim speed."
			}
		}
	},
	"trident of fish command (ccc-wwc-2)" : {
		name : "Trident of Fish Command (CCC-WWC-2)",
		source : [["AL","CCC"]],
		type : "weapon (trident)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This ornate magic trident is made from solid bone. Its shaft is covered in carvings of fish & other sea creatures. Despite its time underwater, it's unstained & shows no signs of wear. The trident has 3 charges & regains 1d3 at dawn. While I carry it, I can use an action & expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast with an innate swimming speed.",
		descriptionFull : "This ornate trident is made from solid bone. Its shaft is covered in carvings of fish and other sea creatures. In spite of its time underwater, it is not stained and shows no signs of wear.\n   This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
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
				description : "1 beast with swim speed save or charmed, follows telepathic commands, 1 a for complete control",
				changes : "Can only affect beasts with innate swim speed."
			}
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
			description : "Anyone wielding this weapon of unusual, blue steel feels oddly self-assured. While it's on my person, I have advantage on initiative rolls. In addition, both I and my allies within 30 ft can't be surprised and the weapon magically awakens all of us when combat starts, except those incapacitated by something other than nonmagical sleep.",
			descriptionFull : "Anyone wielding this trident of unusual, blue steel feels oddly self-assured. This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Trident of Warning"], options : ["Trident of Warning"] },
			},
	"vicious glaive: ptahrek's glaive (ccc-svh1-2)" : {
		name : "Ptahrek's Vicious Glaive (CCC-SVH1-2)",
		source : [["AL","CCC"]],
		type : "weapon (glaive)",
		rarity : "rare",
		magicItemTable : "G",
		description : "The blade of this weapon is made into that of a stylized black raven feather. The wielder of the weapon has the sensation of flying whenever they close their eyes. When I roll a 20 on my attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		descriptionFull : "The blade of this weapon is made into that of a stylized black raven feather. The wielder of the weapon has the sensation of flying whenever they close their eyes. When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		weaponOptions : {
			baseWeapon : "glaive",
			regExpSearch : /^(?=.*glaive)(?=.*vicious)(?=.*ptahrek|ptharek's).*$/i,
			name : "Ptahrek's Vicious Glaive",
			description : "Heavy, reach, two-handed; On nat 20 to hit: +7 damage",
			selectNow : true,
		}
	},
	"vicious mace (ccc-bmg-1 hulb1-1)" : {
		name : "Vicious Mace (CCC-BMG-1 HULB1-1)",
		source : [["AL","CCC"]],
		type : "weapon (mace)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This mace is crafted into the image of a clenched fist wearing spiked gauntlets & functions as a holy symbol of Bane when wielded. A cleric or paladin of Bane has adv. on CHA (Intimidation) checks against followers of Bane. When I roll a 20 on my atk roll with this magic weapon, the target takes an extra 7 weapon dmg.",
		descriptionFull : "This mace is crafted into the image of a clenched fist wearing spiked gauntlets. It functions as a holy symbol of Bane when wielded. A cleric or paladin of Bane has advantage on Charisma (Intimidation) checks against followers of Bane when openly displaying this mace. If you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		weaponOptions : {
			baseWeapon : "mace",
			regExpSearch : /^(?=.*mace)(?=.*vicious).*$/i,
			name : "Vicious Mace",
			description : "On natural 20 to hit: +7 damage",
			selectNow : true,
		}
	},
	"vicious spear (ddal0-13)" : {
		name : "Vicious Spear (DDAL0-13)",
		source : [["KOSC", 82]],
		type : "weapon (spear)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This spear is made from a polished narwhal tusk, and it has been carved with symbols of slaughter and bloodshed. By wielding it publicly, I may get strange looks. It may also mark me as someone involved in the killing of one of the evil Wolf Tribe marauders. When I roll a 20 on my attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		descriptionFull : "This spear is made from a polished narwhal tusk, and it has been carved with symbols of slaughter and bloodshed. By wielding it publicly, you may get strange looks. It may also mark you as someone involved in the killing of one of the evil Wolf Tribe marauders. When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
		weaponOptions : {
			baseWeapon : "spear",
			regExpSearch : /^(?=.*spear)(?=.*vicious).*$/i,
			name : "Vicious Spear",
			description : "Thrown, versatile (1d8); On nat 20 to hit: +7 damage",
			selectNow : true,
		}
	},
	"trident of warning (ccc-tri-34)" : {
			name : "Trident of Warning (CCC-TRI-34)",
			source : [["AL","CCC"]],
			type : "weapon (trident)",
			rarity : "uncommon",
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "This white trident is made from whale bones, laced together with dried tendons. While on my person, I have adv. on initiative. Also, I & my allies in 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This white trident is fashioned from whale bones, laced together with dried tendons.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Trident of Warning"], options : ["Trident of Warning"] },
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
			description : "This length of black iron is wrapped in supple, black leather & gilt in mithral. While wielding this weapon, profane fiery runes of pain & hate appear on the arm that holds it. While on my person, I have adv. on initiative. I & my allies in 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This length of black iron is wrapped in supple, black leather and gilt in mithral. When found, it takes the form of any weapon its owner desires. Once its form has been determined, however, it can never again take another. While wielding this weapon, fiery and profane runes of pain and hate appear on the arm that the weapon is wielded in. This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
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
			magicItemTable : "F",
			attunement : true,
			advantages : [["Initiative", true]],
			savetxt : { immune : ["surprised"] },
			description : "The handle of this whip is emblazoned with a skeletal bat, wings stretched out over a crescent moon with the tips pointed upward. While on my person, I have adv. on initiative. Also, I & my allies in 30 ft can't be surprised & the weapon magically awakens all of us when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "The handle of the whip is emblazoned with the symbol of a skeletal bat, its wings stretched out over a crescent moon laying with its tips pointed upward.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Whip of Warning"], options : ["Whip of Warning"] },
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
			description : "This whip is made from a length of rotting, thorn-covered vine set into a handle of unusual purple wood. The pommel is a large chunk of unpolished amber with a moving eyeball trapped inside. I have adv. on initiative. Me & allies in 30 ft can't be surprised & are magically awakened when combat starts, unless incapacitated by something other than nonmagical sleep.",
			descriptionFull : "This whip is fashioned from a length of rotting, thorn-covered vine set into a handle made of an unusual purple wood. The pommel is a large chunk of unpolished amber with a moving eyeball trapped within.\n   This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
			weaponsAdd : { select : ["Whip of Warning"], options : ["Whip of Warning"] },
			},
}
})