/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me (MPMB in particular, but others as noted). It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). 

Subject: Extra AL Creatures

Effect: This file adds new creatures that are specially made for AL into the sheet. This list is a WIP, since I do not have access to most of the Extra Life & Fai Chen certs. Instead these are being coded as I need them.*/

//The Sea Lion code was deleted from GoS but still appears on a Beastmaster NPC. The code for Arctic Stink Squirrel, Chwinga Squidling, Gelatinous Ice Cube, Snowy Owlbear Cub was made by Nod_Hero. It was added here to collect the extra creatures in one place.

//Complete: DDCE, House of Lament Premiere, S0-S9, S9 DM Rewards (no vehicles), Holiday Events
//WIP: Fai Chen's/Certs, CCCs, DC-POA, DRW

var iFileName = "AL Creatures.js";
RequiredSheetVersion("13.1.0");

//As far as I'm aware, the only thing that doesn't currently function in older versions of the sheet is the companions that can be summoned by both Find Steed and Find Greater Steed. They won't appear under the Companion Option selections, though you can choose them and then adjust to a steed manually.


// Define the source
SourceList["AL:FC"] = {   //Fai Chen 
    name : "Fai Chen Certs",
    abbreviation : "AL:FC",
    group : "Adventurers League",
    date : "Various",
	defaultExcluded : true
};

SourceList["AL:EL"] = {   //AL specific Extra Life certs
    name : "AL Extra Life Certs",
    abbreviation : "AL:EL",
    group : "Extra Life",
    date : "Various",
	defaultExcluded : true
};

SourceList["AL:R"] = {  //Ravenloft Alternate Campaign
	name : "AL Ravenloft Campaign",
	abbreviation : "AL:R",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=1000044_0_0_0_0_0_0_0&src=fid1000044",
	date : "Various",
	defaultExcluded : true
};
 
SourceList["DDCE"] = { //Only creatures from this category count as Event Awards under the new rules
    name : "D&D Celebration",
    abbreviation : "DDCE",
    group : "Adventurers League",
    date : "2020/09/19"
};

SourceList["GoS"] = {
	name : "Ghosts of Saltmarsh [backgrounds, beasts, items]",
	abbreviation : "GoS",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/ghosts-saltmarsh",
	date : "2019/05/21"
};

SourceList["AL"] = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various",
};

SourceList["AL:LN"] = {  //Liar's Night and Wandering Monsters
    name : "AL Holiday Events - Liar's Night",
    abbreviation : "AL:LN",
    group : "Adventurers League",
    date : "Various",
	defaultExcluded : true
};

SourceList["AL:FM"] = {  //Feast of the Moon events
    name : "AL Holiday Events - Feast of the Moon",
    abbreviation : "AL:FM",
    group : "Adventurers League",
    date : "Various"
};

SourceList["ALDMs9"] = {  //Season 9 DM Rewards (Several of these are from BG:DiA, but cannot normally be used by players)
    name : "AL Season 9 DM Rewards",
    abbreviation : "ALDMs9",
    group : "Adventurers League",
    date : "2019/09/16",
	defaultExcluded : true
};

SourceList["RotF"] = {
	name : "Icewind Dale: Rime of the Frostmaiden [creatures, items, spells]",
	abbreviation : "RotF",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/icewind-dale-rime-frostmaiden",
	date : "2020/09/15",
};

SourceList.FToD = {
	name : "Fizban's Treasury of Dragons",
	abbreviation : "FToD",
	abbreviationSpellsheet : "FD",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/treasury-dragons",
	date : "2021/10/19"
};

SourceList["BoJR"] = {
	name : "Beasts of Jungle Rot [dinosaurs]",
	abbreviation : "BoJR",
	group : "Adventure Books",
	url : "https://www.dmsguild.com/product/220567/Beasts-of-the-Jungle-Rot",
	date : "2017/09/01",
};


//Creatures - here because I needed the pre-errata version
CreatureList["sea lion"] = {
	name : "Sea Lion",
	source : ["GoS", 252],
	size : 2,
	type : "Beast",
	companion : "companion",
	subtype : "",
	alignment : "Unaligned",
	ac : 16,
	hp : 15,
	hd : [2, 10],
	speed : "15 ft, swim 30 ft",
	scores : [17, 10, 14, 5, 10, 12],
	saves : ["", 2, 4, "", "", ""],
	skills : {
		"athletics" : 5,
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "One bite and two claw attacks as an Attack action"
	}, {
		name : "Claw",
		ability : 1,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)",
		description : "Target pushed up to 5 ft away; 2 claw and 1 bite attack as Attack action"
	}],
	traits : [{
		name : "Hold Breath",
		description : "The sea lion can hold its breath for 15 minutes."
	}, {
		name : "Multiattack",
		description : "The sea lion makes three attacks: one with its bite and two with its claws."
	}],
}

//Here because I'm tired of manually looking up the stats for my Horns of Valhalla
CreatureList["berserker (valhalla)"] = {
	name : "Berserker (Valhalla)",
	header : "Summon",
	source : [["SRD",392], ["M", 344], ["AL","Item"]],
	size : 3, //medium
	type : "Humanoid",
	subtype : "",
	alignment : "Any chaotic alignment",
	ac : 13,
	hp : 67,
	hd : [9, 8],
	speed : "30 ft",
	scores : [16, 12, 17, 9, 22, 9],
	senses : "",
	condition_immunities : "charmed, frightened",
	passivePerception : 10,
	languages : "Any one language (usually Common)",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Greataxe",
		ability : 1,
		damage : [1, 12, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Reckless",
		description : "At the start of its turn, the Berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
		}],
	features : [{
		name : "Summoned Spirits",
		description : "These warrior spirits were summoned from Ysgard. They are Friendly to you and your allies and follow your commands. They return to Ysgard after 1 hour or when they drop to 0 Hit Points."
		}, {
		name : "Immunities",
		description : "The spirits look like living breathing warriors, and they have Immunity to the Charmed and Frightened conditions."
		}],
}

//D&D Celebration Familiars
/* Arctic Stink Squirrel
This cuddly little brute makes a playful (if alarming) companion. 
It can be summoned using find familiar and has the statistics of a weasel. 
It can cast stinking cloud once per day, save DC 11. */
CreatureList["arctic stink squirrel"] = {
	name : "Arctic Stink Squirrel (Event Award)",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Fey",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "30 ft, Climb 30 ft",
	scores : [3, 16, 8, 2, 12, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 5,
		"acrobatics" : 5
		},
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["", "", false]
		}],
	traits : [{
		name : "Description",
		description : "This cuddly little brute makes a playful (if alarming) companion. It can be summoned using Find Familiar."
		}, {
		name : "Keen Hearing and Smell",
		description : "The arctic stink squirrel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name : "Innate Spellcasting (1/day)",
			description : "The arctic stink squirrel can innately cast Stinking Cloud, requiring no material components. Its innate spellcasting ability is Wisdom (DC 11)."
		}
		]
};

/* Chwinga Squidling
This bizarre mutation is both devoted and dangerous. 
You can summon the chwinga squidling using find familiar.
It has the statistics of a stirge with no fly speed. */
CreatureList["chwinga squidling"] = {
	name : "Chwinga Squidling (Event Award)",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Monstrosity",
	companion : "familiar",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 2,
	hd : [1, 4],
	speed : "10 ft",
	scores : [4, 16, 11, 2, 8, 6],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 9,
	languages : "",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Blood Drain",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "The chwinga squidling attaches itself to the target, see Blood Drain trait"
		}],
	traits : [{
		name : "Description",
		description : "This bizarre mutation is both devoted and dangerous. You can summon the chwinga squidling using find familiar."
		}, {
		name : "Blood Drain",
		description : "While attached, the chwinga squidling doesn't attack. Instead, at the start of each of the it's turns, the target loses 5 (1d4 + 3) HP due to blood loss. The squidling can detach itself by spending 5 feet of its movement. It does so after it drains 10 HP of blood from the target or the target dies. A creature, including the target, can use its action to detach the chwinga squidling."
		}],
};

/* Gelatinous Ice Cube
You have a friendly psychic link with this tiny cube of death. 
You can summon the gelatinous ice cube using find familiar.
It has the statistics of an oblex spawn. */
CreatureList["gelatinous ice cube"] = {
	name : "Gelatinous Ice Cube (Event Award)",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Ooze",
	subtype : "",
	companion : "familiar",
	alignment : "Lawful Evil",
	ac : 13,
	hp : 18,
	hd : [4, 4],
	speed : "20 ft",
	scores : [8, 16, 15, 14, 11, 10],
	saves : ["", "", "", "4", "", "2"],
	condition_immunities : "blinded, charmed, deafened, exhaustion, prone",
	skills : {
		"perception" : 3,
		"stealth" : 4
		},
	senses : "Blindsight 60 ft (blind beyond this distance)",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Pseudopod",
		ability : 2,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "+1d4 psychic damage on a hit"
		}],
		traits : [{
			name : "Description",
			description : "You have a friendly psychic link with this tiny cube of death. You can summon the gelatinous ice cube using find familiar."
		}, {
			name : "Amorphous",
			description : "The cube can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name : "Aversion to Fire",
			description : "If the cube takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
		}]
};

/* Snowy Owlbear Cub
The cub of this rare breed of tiny owlbear forms a loving bond with a single adventurer.  You can summon the owlbear cub using find familiar.
It has the statistics of a cat. */
CreatureList["snowy owlbear cub"] = {
	name : "Snowy Owlbear Cub (Event Award)",
	source : ["DDCE"],
	size : 5, //Tiny
	type : "Monstrosity",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "40 ft, climb 40 ft",
	scores : [3, 15, 10, 3, 12, 7],
	saves : ["", 4, "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 4
		},
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Scratch",
		ability : 2,
		damage : [1, "", "slashing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["Str", "", false]
		}],
	traits : [{
		name : "Description",
		description : "The cub of this rare breed of tiny owlbear forms a loving bond with a single adventurer. You can summon the owlbear cub using find familiar."
		}],
	features : [{
		name : "Jumper",
		description : "The cub's jump distance is determined using its Dexterity rather than its Strength.",
	}],
};


//Special cert from the Beadle & Grimm Icewind Dale Premiere. Acts as a non-combat, non-mechanical companion unless you summon it with Find Familiar.
CreatureList["yeti tyke"] = {
		name : "Yeti Tyke",
		source : ["AL","IDRF:BG"],
		size : 4, //Small
		type : "Monstrosity",
		alignment : "Lawful Evil",
		subtype : "",
		companion : "familiar",
		ac : 11,
		hp : 9,
		hd : [2, 6],
		speed : "20 ft, climb 20 ft",
		scores : [10, 11, 12, 6, 8, 5],
		senses : "Darkvision 60 ft",
		passivePerception : 9,
		languages : "Understands Yeti but can't speak",
		challengeRating : "1/8",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 4, "slashing"],
			range : "Melee (5 ft)",
			description : "+2 (1d4) cold damage",
		}],
		traits : [{	
			name : "Description",
			description : "Thanks to exposure to chardalyn, this yeti will remain forever small. For better or worse, it has taken a shining to you and delights in bringing you gifts of questionable origin and intent. Its wide eyes imply an innocence that you're quite certain it doesn't possess. It acts as a non-combat pet unless summoned with Find Familiar."
		}],
		features : [{
			name : "Keen Smell",
			description : "The yeti tyke has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name : "Snow Camouflage",
			description : "The yeti tyke has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
		}],
}



//Creatures from Fai Chen Certs
CreatureList["euphio the watch hound"] = {//Based on the Mastiff statblock
		name : "Euphio the Watch Hound",
		nameAlt : ["Watch Hound"],
		source : ["AL:FC",2018],
eval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "Euphio");
},
removeeval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "");
},
		size : 3, //Medium
		type : "Fey",
		companion : "familiar",
		alignment : "Unaligned",
		ac : 12,
		hp : 5,
		hd : [1, 8],
		speed : "40 ft",
		scores : [13, 14, 12, 3, 12, 7],
		skills : {
			"perception" : 5
		},
		senses : "Darkvision 60 ft",
		passivePerception : 15,
		challengeRating : "1/8",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "Large or smaller target knocked Prone"
		}],
		traits : [{
			name : "Description",
			description : "Euphio is a stalwart mastiff of impeccable breeding and even temperament who had the honor of guarding the Blackstaff for a time. He has his own set of custom leather barding emblazoned with the seal of the City of Splendors (AC 11 + Dex). The City Watch looks favorably on Euphio's owner, although that favor has limits. If slain, Euphio can be resummoned with Find Familiar."
		}]
	},
	
CreatureList["rollando, war rothe"] = {
		name : "Rollando, War Roth\xE9",
		nameAlt : ["War Roth\xE9"],
		source : ["AL:FC",2018],
eval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "Rollando");
},
removeeval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "");
},
		size : 2, //Large
		type : "Beast",
		companion : "mount",
		header : "Mount",
		alignment : "Unaligned",
		ac : 10,
		hp : 15,
		hd : [2, 10], //[#, die]
		speed : "30 ft",
		scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "Darkvision 30 ft",
		passivePerception : 10,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1,
		damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
	}],
	features : [{
		name : "Charge",
		description : "If the Roth\xE9 moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
	}],
		traits : [{
			name : "Description",
			description : "Rollando is a saddle trained roth\xe9 owned by Bregan D'aerthe who escaped his pen and wandered the mean streets of Waterdeep. Fai Chen figured you would do well to own such a courageous beast. Rollando can be resummoned via find steed. He will not attack members of Bregan D'aerthe. Old loyalties die hard."
	}]
},

	
//This rare breed of arctic goat roams the mountains near Icewind Dale and makes an adorable animal companion or familiar. It has the statistics of a goat, but is size small.
CreatureList["mini arctic goat"] = {
		name : "Mini Arctic Goat",
		source : ["AL:FC",2020],
		size : 4, //Small
		type : "Beast",
		companion : "familiar",
		alignment : "Unaligned",
		ac : 10,
		hp : 4,
		hd : [1, 8],
		speed : "40 ft",
		scores : [12, 10, 11, 2, 10, 5],
		senses : "",
		passivePerception : 10,
		challengeRating : "0",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Ram",
			ability : 1,
			damage : [1, 4, "bludgeoning"],
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight before a hit, see Charge trait"
		}],
		traits : [{
			name : "Description",
			description : "This rare breed of arctic goat roams the mountains near Icewind Dale and makes an adorable animal companion or familiar."
		}, {
			name : "Charge",
			description : "If the goat hits with a ram attack after moving at least 20 ft straight toward a target on the same turn, the target takes an extra 2 (1d4) Bludgeoning damage."
		}, {
			name : "Sure-Footed",
			description : "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
		}]
	},
	
	
//The result of magical experimentation, this cute critter makes a great animal companion. It has the statistics of a panther, though it can cast the blur spell once per day.
CreatureList["mini displacer beast"] = {
		name : "Mini Displacer Beast",
		source : ["AL:FC",2020],
		size : 3, //Medium
		type : "Monstrosity",
		alignment : "Unaligned",
		ac : 12,
		hp : 13,
		hd : [3, 8],
		speed : "50 ft, climb 40 ft",
		scores : [14, 15, 10, 3, 14, 7],
		skills : {
			"perception" : 4,
			"stealth" : 6
		},
		senses : "Darkvision 60 ft",
		passivePerception : 14,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Pounce",
			ability : 1,
			damage : [1, 4, "Slashing"],
			range : "Melee (5 ft.)",
			description : "Can make 1 Pounce attack and use Prowl. 7 (2d4 +2) Slashing damage if it had Advantage on the attack.",
		}],
		actions : [{
			name : "Multiattack",
			description : "The mini displacer beast makes one Pounce attack and uses Prowl.",
		}, {
			name : "Prowl",
			description : "The mini displacer beast moves up to half its Speed without provoking Opportunity Attacks. At the end of this movement, it can take the Hide action.",
		}],
		traits : [{
			name : "Description",
			description : "The result of magical experimentation, this cute critter makes a great animal companion."
		}, {
			name : "Pounce",
			description : "If the mini displacer beast has advantage on the attack roll, the target takes an extra 7 (2d4+2) Slashing damage."
		}, {
			name : "Innate Spellcasting (1/day)",
			description : "The mini displacer beast can cast Blur once per day."
		}]
	},

//Pet/familiar option from [Trading Post v13.1 2024]. Flavored versions are in the AL Special Items file
CreatureList["black pudding cup"] = {
			name : "Black Pudding Cup",
			nameAlt : ["Cup Black Pudding"],
			source : ["AL:FC", 2024],
			size : 5, //Tiny
			type : "Ooze",
			alignment : "Unaligned",
			companion : "familiar",
			ac : 7,
			hp : 4,
			hd : [1, 4],
			speed : "10 ft, climb 10 ft",
			scores : [10, 5, 14, 1, 6, 1],
			damage_immunities : "acid, cold, lightning, slashing",
			condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, prone",
			senses : "Blindsight 60 ft. (blind beyond this radius)",
			passivePerception : 8,
			languages : "",
			challengeRating : "0",
			proficiencyBonus : 3,
			attacksAction : 1,
		attacks : [{
			name : "Pseudopod",
			ability : 1,
			damage : [1, 4, "acid"],
			range : "Melee (2 ft)",
			description : ""
		}],
		traits : [{
			name : "Corrosive Form",
			description : "The pudding can eat through ½ inch of wood in 1 round. A creature that touches the pudding cup or hits it with a melee attack while in 5 ft takes 1 (1d4-1) acid damage."
			}, {
			name : "Resummon",
			description : "The creature can be returned via Find Familiar if killed. If its cup was also destroyed, a new cup needs to be purchased (1gp).",
			}, {
			name : "Description",
			description : "This sturdy ceramic cup holds a tiny black jelly-like substance. While in the cup, it has AC 9. [Trading Post v13.1 2024]",
			}],
		features : [{
			name : "Amorphous",
			description : "The pudding can move through a space as narrow as 1 inch wide without squeezing."
			}, {
			name : "Spider Climb",
			description : "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
			}],
	},


//Special Creatures from AL modules

//Quasit can only be used with approval from DM (homebrew) or the season 5 AL Story Award
CreatureList["quasit (familiar variant)"] = {
		name : "Quasit (Familiar Variant)",
		source : [["AL","S5"]],
		defaultExcluded : true,
		size : 5, //Tiny,
		type : "Fiend",
		subtype : "demon",
		companion : "pact_of_the_chain",
		companionApply : "pact_of_the_chain",
		header : "Familiar",
		alignment : "Chaotic Evil",
		ac : 13,
		hp : 7,
		hd : [3, 4],
		speed : "40 ft",
		scores : [5, 17, 10, 7, 10, 10],
		skills : {
			"stealth" : 5
		},
		damage_resistances : "cold; fire; lightning; bludgeoning, piercing, and slashing from nonmagical attacks",
		damage_immunities : "poison",
		condition_immunities : "poisoned",
		senses : "Darkvision 120 ft",
		passivePerception : 10,
		languages : "Abyssal, Common",
		challengeRating : "1",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Claws (Bite in Beast Form)",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "Target makes DC 10 Con save or takes 2d4 poison damage and poisoned for 1 min (can save each turn)",
			modifiers : [-1, "", ""]
		}, {
			name : "Scare (1/day)",
			ability : 6,
			damage : ["Wis save", "", "Frightened"],
			range : "20 ft",
			description : "Wis save or frightened for 1 min (can save at end of each turn, disadv. if quasit is in sight)",
			abilitytodamage : false,
			dc : true
		}],
		traits : [{
			name : "Shapechanger",
			description : "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft, fly 40 ft), a centipede (40 ft, climb 40 ft), or a toad (40 ft, swim 40 ft), or back into its true form . Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed . It reverts to its true form if it dies."
		}, {
			name : "Magic Resistance",
			description : "The quasit has advantage on saving throws against spells and other magical effects."
		}, {		
			name : "Variant: Familiar",
			description : "The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 ft of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond.  (This variant may only be used with approval from your DM or the special AL reward)"
		}],
		actions : [{
			name : "Invisibility",
			description : "As an action, the quasit magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."
		}],
}

//Earned from playing DDIA05
CreatureList["rillix, tressym familiar"] = {
		name : "Rillix, Tressym familiar",
		nameAlt : ["Tressym"],
		defaultExcluded : true,
		source : [["AL","S5"]],
eval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "Rillix");
},
removeeval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "");
},
		source : [["AL","S5"]],
		size : 5, //Tiny
		type : "Monstrosity",
		companion : "familiar",
		header : "Familiar",
		alignment : "Any",
		ac : 12,
		hp : 5,
		hd : [2, 4],
		speed : "40 ft, climb 30 ft, fly 40 ft",
		scores : [3, 15, 10, 11, 12, 12],
		skills : {
			"perception" : 5,
			"stealth" : 4
		},
		damage_immunities : "poison",
		condition_immunities : "poisoned",
		senses : "Darkvision 60 ft",
		passivePerception : 15,
		languages : "Understands Common but can't speak",
		challengeRating : "0",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"],
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["Str", "", false]
			}],
		traits : [{
			name : "Detect Invisibility",
			description : "Within 60 feet of the tressym, magical invisibility fails to conceal anything from the tressym's sight."
		}, {
			name : "Poison Sense",
			description : "A tressym can detect whether a substance is poisonous by taste, touch, or smell."
		}, {		
			name : "Background",
			description : "Found amidst the wreckage of the Xelbrin farm in Nightstone, this winged cat has taken a shine to you. Rillix displays a keen intelligence and possesses a long memory, and although she cannot speak, she understands Common. This certificate is not tradeable, but allows you to select this Tressym from the Storm King's Thunder adventure when you choose a familiar.)"
		}],
		features : [{
			name : "Keen Smell",
			description : "The tressym has advantage on Wisdom (Perception) checks that rely on smell."
		}],
}
	
//Only usable with the Gift of Golden Wings Story Award. Singing or reciting the lyrics to Golden Wings takes one minute. If a good-aligned character casts find familiar after making a successful DC 15 Charisma (Performance) check, they may summon a celestial gold pseudodragon to serve as their familiar. This creature is lawful good and abandons the character if they ever willingly harm a celestial.
CreatureList["celestial gold pseudodragon"] = {
		name : "Celestial Gold Pseudodragon",
		source : [["AL","S0"]],
		defaultExcluded : true,
		size : 5, //Tiny
		type : "Celestial",
		companion : "familiar",
		header : "Familiar",
		alignment : "Lawful Good",
		ac : 14,
		hp : 10,
		hd : [3, 4],
		speed : "15 ft, fly 60 ft",
		scores : [6, 15, 13, 10, 12, 10],
		skills : {
			"perception" : 5,
			"stealth" : 4
		},
		senses : "Blindsight 10 ft; Darkvision 60 ft",
		passivePerception : 15,
		languages : "understands Common and Draconic but can't speak",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "Two bites as an Attack action"
		}, {
			name : "Sting",
			ability : 2,
			damage : [2, 4, "poison"],
			range : "Melee (5 ft)",
			dc : true,
			description : "No effect on pass. Target also Poisoned. If fail by 5+, also Unconscious.",
		}],
	actions : [{
		name : "Multiattack",
		description : "The pseudodragon makes two Bite attacks."
	}, {
		name : "Sting",
		description : "DC 12 Con Saving Throw: one creature the pseudodragon can see within 5 feet. Failure: 2d4+2 Poison damage, and the target has the Poisoned condition for 1 hour. Failure by 5 or More: The Poisoned target also has the Unconscious Condition until it takes damage or another creature uses an action to shake it awake.",
	}],
		traits : [{
			name : "Celestial Nature",
			description : "This creature is Lawful Good and abandons the character if they ever willingly harm a celestial. Summoned as a Familiar from the Gift of Golden Wings Story Award."
		}, {
			name : "Magic Resistance",
			description : "The pseudodragon has advantage on saving throws against spells and other magical effects."
		}, {
			name : "Limited Telepathy",
			description : "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft of it that can understand a language."
		}]
	},

//Story award from CCC-SQC-2-1
CreatureList["the crazy squirrel"] = {
		name : "The Crazy Squirrel",
		source : [["AL","CCC"]],
		defaultExcluded : true,
		size : 5, //Tiny
		type : "Fey",
		subtype : "",
		companion : "familiar",
		header : "Familiar",
		alignment : "Unaligned",
		ac : 12,
		hp : 2,
		hd : [1, 4],
		speed : "40 ft, climb 30 ft",
		scores : [3, 15, 10, 3, 12, 7],
		saves : ["", "", "", "", "", ""],
		skills : {
		"perception" : 3,
		"stealth" : 4
		},
		senses : "Adv. on Wis (Perception) checks using smell",
		passivePerception : 13,
		languages : "",
		challengeRating : "0",
		proficiencyBonus : 2,
		attacksAction : 1,
	attacks : [{
		name : "Claws",
		ability : 2,
		damage : [1, "", "slashing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["Str", "", false]
		}],
	traits : [{
		name : "Special notes",
		description : "Clad in shiny plate armor, this adorable squirrel is often seen holding what appears to be an acorn. However, upon closer inspection, one will notice it is holding a 20-sided-die. The Crazy Squirrel has proficiency in all gaming sets, and the shiny plate armor has no effect on its AC."
		}, {
		name : "Keen Smell",
		description : "The crazy squirrel has advantage on Wisdom (Perception) checks that rely on smell."
		}]
},
	
	
//Special cert from the House of Lament premier. Only usable in Mist Hunters adventures.
CreatureList["gremishka (adjusted)"] = {
		name : "Penumbra the Gremishka",
		nameAlt : ["Gremishka (Adjusted)", "Gremishka (AL)"],
		source : [["AL:R","HoL"]],
		size : 5, //Tiny
		type : "Monstrosity",
		defaultExcluded : true,
eval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "Penumbra");
},
removeeval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "");
},
		subtype : "",
		alignment : "Unaligned",
		ac : 12,
		hp : 10,
		hd : [4, 4],
		speed : "30 ft",
		scores : [6, 14, 10, 12, 11, 4],
		senses : "Darkvision 30 ft",
		passivePerception : 10,
		languages : "Understands Common but can't speak",
		challengeRating : "1/8",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "+3 (1d6) force damage",
		}],
		traits : [{	
			name : "Personality",
			description : "Penumbra is a curious monstrosity that has decided to join you on your investigations. Penumbra is more affable than others of its kind, but enjoys playing relatively harmless pranks on spellcasters."
		}],
		features : [{
			name : "Restrictions",
			description : "As Penumbra is a unique NPC, only one Penumbra can be present in a group at a time, no matter how many players possess this award. Penumbra can only appear in Ravenloft: Mist Hunters adventures and uses the stats of a Gremishka w/ the 3rd allergy effect removed."
		}],
		actions : [{
			name : "Magical Allergy (1/day)",
			description : "Immediately after a creature within 30 feet of the gremishka casts a spell, the gremishka can spontaneously react to the magic. Roll a d4 to determine the effect:\n   " + "1–2. The gremishka emanates magical energy. Each creature within 30 feet of the gremishka must succeed on a DC 10 Constitution saving throw or take 3 (1d6) force damage.\n   " + "3–4. The gremishka surges with magical energy and regains 3 (1d6) hit points."
		}]
},
	
//Season 9 DM Reward Options
CreatureList["imp courier"] = {
	name : "Imp Courier",
		source : [["ALDMs9"]],
		size : 5, //Tiny
		type : "Fiend",
		subtype : "devil",
		companion : "familiar",
		header : "Familiar",
		alignment : "Lawful Evil",
		ac : 13,
		hp : 21,
		hd : [6, 4],
		speed : "20 ft, fly 40 ft",
		scores : [6, 17, 13, 11, 12, 14],
		skills : {
			"deception" : 4,
			"insight" : 3,
			"stealth" : 5
		},
		damage_resistances : "cold",
		damage_immunities : "fire, poison",
		condition_immunities : "poisoned",
		senses : "Darkvision 120 ft; Devil's Sight (Magical darkness doesn't impede the imp's Darkvision)",
		passivePerception : 11,
		languages : "Infernal, Common",
		challengeRating : "1",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Sting (Bite in Beast Form)",
			ability : 2,
			damage : [1, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "Target also takes 7 (2d6 poison damage"
		}],
		traits : [{
			name : "Description",
			description : "Specializing in delivery, and employee of the century three times running, this imp was a star employee of the Infernal Revenue Service."
		}, {
			name : "Hellscape Pocket",
			description : "Possesses a personal pocket dimension capable of holding up to 10 lbs of items. Only the courier can open the pocket dimension to retrieve and store items."
		}, {
			name : "Magic Resistance",
			description : "The imp has Advantage on saving throws against spells and other magical effects."
		}],
		actions : [{
			name : "Invisibility",
			description : "The imp casts Invisibility on itself, requiring no spell components and using Charisma as the spellcasting ability."
				}, {
			name : "Shape-Shift",
			description : "The imp shape-shifts to resemble a rat (Speed 20 ft), a raven (20 ft, Fly 60 ft), or a spider (20 ft, Climb 20 ft), or it returns to its true form. Its statistics are the same in each form, except for its Speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."	
		}]
}

CreatureList["imp toady"] = {
	name : "Imp Toady",
		source : [["ALDMs9"]],
		size : 5, //Tiny
		type : "Fiend",
		subtype : "devil",
		companion : "familiar",
		header : "Familiar",
		alignment : "Lawful Evil",
		ac : 13,
		hp : 21,
		hd : [6, 4],
		speed : "20 ft, fly 40 ft",
		scores : [6, 17, 13, 11, 12, 14],
		skills : {
			"deception" : 4,
			"insight" : 3,
			"stealth" : 5
		},
		damage_resistances : "cold",
		damage_immunities : "fire, poison",
		condition_immunities : "poisoned",
		senses : "Darkvision 120 ft; Devil's Sight (Magical darkness doesn't impede the imp's Darkvision)",
		passivePerception : 11,
		languages : "Infernal, Common",
		challengeRating : "1",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Sting (Bite in Beast Form)",
			ability : 2,
			damage : [1, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "Target also takes 7 (2d6 poison damage"
		}],
		traits : [{
			name : "Description",
			description : "Formerly a barbed devil in service to Bel during his term in office, this imp is great at licking boots."
		}, {
			name : "Magic Resistance",
			description : "The imp has Advantage on saving throws against spells and other magical effects."
		}],
		actions : [{
			name : "Invisibility",
			description : "The imp casts Invisibility on itself, requiring no spell components and using Charisma as the spellcasting ability."
				}, {
			name : "Shape-Shift",
			description : "The imp shape-shifts to resemble a rat (Speed 20 ft), a raven (20 ft, Fly 60 ft), or a spider (20 ft, Climb 20 ft), or it returns to its true form. Its statistics are the same in each form, except for its Speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."	
				}, {
			name : "Hype",
			description : "The imp toady can inspire its master through stirring words and chanting, so long as it is within 30 feet. Its master is granted a d6 which it can roll and add to the result of a single ability check, attack roll, or saving throw. Once used, the imp toady can't grant this to its master again until its master has completed a long rest. This feature can't be used in conjunction with Bardic Inspiration. If both are used, add the higher of the two numbers to the roll."
		}],
}
	
CreatureList["infernal pseudodragon"] = {
		name : "Infernal Pseudodragon",
		source : [["ALDMs9"]],
		size : 5, //Tiny
		type : "Dragon",
		companion : "familiar",
		header : "Familiar",
		alignment : "Lawful Evil",
		ac : 14,
		hp : 10,
		hd : [3, 4],
		speed : "15 ft, fly 60 ft",
		scores : [6, 15, 13, 10, 12, 10],
		skills : {
			"perception" : 5,
			"stealth" : 4
		},
		senses : "Blindsight 10 ft; Darkvision 60 ft",
		passivePerception : 15,
		languages : "understands Common, Infernal, and Draconic but can't speak",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "Two bites as an Attack action"
		}, {
			name : "Sting",
			ability : 2,
			damage : [2, 4, "poison"],
			range : "Melee (5 ft)",
			dc : true,
			description : "No effect on pass. Target also Poisoned. If fail by 5+, also Unconscious.",
		}],
	actions : [{
		name : "Multiattack",
		description : "The pseudodragon makes two Bite attacks."
	}, {
		name : "Sting",
		description : "DC 12 Con Saving Throw: one creature the pseudodragon can see within 5 feet. Failure: 2d4+2 Poison damage, and the target has the Poisoned condition for 1 hour. Failure by 5 or More: The Poisoned target also has the Unconscious Condition until it takes damage or another creature uses an action to shake it awake.",
	}],
		traits : [{
			name : "Infernal Nature",
			description : "An experiment gone wrong somewhere deep inside Arkhan’s Tower, this creature resembles a tiny abishai (color chosen when summoned) and is lawful evil rather than neutral good."
		}, {
			name : "Magic Resistance",
			description : "The pseudodragon has Advantage on saving throws against spells and other magical effects."
		}, {
			name : "Limited Telepathy",
			description : "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft of it that can understand a language."
		}],
	}
	
CreatureList["bone whelk"] = {
		name : "Bone Whelk",
		source : [["ALDMs9"]],
		size : 2, //Large
		type : "Monstrosity",
		header : "Mount",
		alignment : "Unaligned",
		ac : 12,
		hp : 27,
		hd : [5, 10],
		speed : "15 ft, climb 15 ft",
		scores : [10, 5, 11, 6, 9, 3],
		senses : "Darkvision 60 ft",
		passivePerception : 9,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 8, "piercing"],
			range : "Melee (5 ft)",
		}],
		traits : [{
			name : "Adhesive",
			description : "The bone whelk can cause Medium or smaller objects to adhere to it. A Medium or smaller creature that touches the bone whelk is grappled by it (escape DC 10)."
		}, {
			name : "Death Scream",
			description : "When the bone whelk dies, it emits a blood-curdling shriek than can be heard out to a range of 120 feet. This shriek causes nonmagical, organic material within 10 feet of the bone whelk to rot. Each creature within 10 feet of the bone whelk when it dies takes 9 (2d8) necrotic damage."
		}, {
			name : "Spider Climb",
			description : "The bone whelk can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}]
}

CreatureList["hellwasp"] = {
		name : "Hellwasp",
		source : [["ALDMs9"]],
		size : 2, //Large
		type : "Fiend",
		header : "Mount",
		alignment : "Lawful Evil",
		ac : 19,
		hp : 52,
		hd : [8, 10],
		speed : "10 ft, fly 60ft, hover",
		scores : [18, 15, 12, 10, 10, 7],
		senses : "Darkvision 60 ft",
		passivePerception : 10,
		damage_vulnerabilities : "cold",
		damage_immunities  : "fire",
		languages : "Infernal, Telepathy 300ft (w/ other hellwasps)",
		challengeRating : "5",
		proficiencyBonus : 3,
		attacksAction : 2,
		attacks : [{
			name : "Sting",
			ability : 1,
			damage : [1, 8, "piercing"],
			range : "Melee (5 ft)",
			description : "When hit, target also takes 2d6 fire dmg & must make a DC 12 Constitution saving throw or be poisoned for 1 min. While poisoned, target is paralyzed. Repeat save at end of turn."
		}, {
			name : "Sword Talons",
			ability : 1,
			damage : [2, 6, "piercing"],
			range : "Melee (5 ft)",
		}],
		traits : [{
			name : "Magic Weapons",
			description : "The hellwasp’s weapon attacks are magical."
		}, {
			name : "Multiattack",
			description : "The hellwasp makes two attacks: one with its sting and one with its sword talons."
		}]
}

//Wandering Monster/Liar's Night rewards from past AL seasons
CreatureList["candy corn calico cat"] = { //based on Cat statblock
		name : "Candy Corn Calico Cat",
		source : [["AL:LN",2020]],
		size : 5, //Tiny
		type : "Construct",
		companion : "familiar",
		alignment : "Unaligned",
		ac : 12,
		hp : 2,
		hd : [1, 4],
		speed : "40 ft, climb 40 ft",
		scores : [3, 15, 10, 3, 12, 7],
		skills : {
			"perception" : 3,
			"stealth" : 4
		},
		senses : "Darkvision 60 ft",
		passivePerception : 13,
		challengeRating : "0",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Scratch",
			ability : 2,
			damage : [1, "", "slashing"],
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["Str", "", false]
		}],
		traits : [{
			name : "Candy Corn Nature",
			description : "This construct is made entirely of partially chewed candy corns. They use cat stats (construct) and can be a familiar or animal companion."
		}],
		features : [{
			name : "Jumper",
			description : "The cub's jump distance is determined using its Dexterity rather than its Strength.",
		}],
	}
	
CreatureList["foxwere"] = {
		name : "Foxwere",
		source : [["AL:FM",2020]],
		size : 3, //Medium
		type : "Lycanthrope",
		companion : "familiar",
		alignment : "Unaligned",
		ac : 10,
		hp : 9,
		hd : [2, 8],
		speed : "30 ft, 40 ft in fox form",
		scores : [10, 14, 10, 10, 10, 10],
		skills : {
			"perception" : 2,
			"stealth" : 4
		},
		passivePerception : 12,
		senses : "",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Paw",
			ability : 2,
			damage : [1, 4, "bludgeoning"],
			range : "Melee (5 ft)",
			description : "Their claws are retracted, so they do not curse anyone with lycanthropy.",
			modifiers : ["Str", ""],
			abilitytodamage : false
		}],
		traits : [{
			name : "Foxwere Pet",
			description : "This foxwere adopted you as their family. They can be a familiar or animal companion. They are careful and never pass on the lycanthropy curse."
		}, {
			name : "Shapechanging",
			description : "Selûne transformed a fox to serve as your guide. Now, as a foxwere, they have two forms, fox (true form) and fox-humanoid hybrid (only on a full moon).\n   The foxwere does not control their transformations. Every full moon, the foxwere instantly polymorphs into their fox-humanoid hybrid form. Their statistics are the same in each form. They revert into their true form when the moon is not full or if they die."
		}],
		actions : [{
			name : "Selûne's Light.",
			description : "A silvery beam of moonlight instantaneously shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within60 feet. A creature within this area makes a DC12 Constitution saving throw. It takes 4 (1d8)radiant damage on a failed save or half as muchdamage on a successful one. A shapechangermakes its saving throw with disadvantage. If itfails, it also instantly reverts to its original form."
		}],
	}
	
CreatureList["fritter the 7-legged spider"] = {
		name : "Fritter the 7-legged Spider",
		nameAlt : ["7-legged Spider"],
		source : [["AL:LN",2019]],
eval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "Fritter");
},
removeeval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "");
},
		size : 2, //Large
		type : "Beast",
		defaultExcluded : true,
		companion : ["mount", "steed"],
		header : "Mount",
		alignment : "Unaligned",
		ac : 14,
		hp : 26,
		hd : [4, 10],
		speed : "30 ft, climb 30 ft",
		scores : [14, 16, 12, 2, 11, 4],
		skills : {
			"stealth" : 7
		},
		senses : "Blindsight 10 ft; Darkvision 60 ft",
		passivePerception : 10,
		challengeRating : "1",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 8, "piercing"],
			range : "Melee (5 ft)",
			description : "For your own safety, Fritter’s poison glands have been removed."
		}, {
			name : "Web (Recharge 5-6)",
			ability : 2,
			damage : ["\u2015", "", "Restrained"],
			range : "30/60 ft",
			description : "Target can escape as an action with a DC 12 Strength check, or by destroying the webbing (AC 10; 5 HP)",
			abilitytodamage : false,
			tooltip : "On a hit, the target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
		}],
		traits : [{
			name : "Description",
			description : "The Kernel insists that this tarantula of unusual size is house-trained. Fritter wears a harness made of definitely-not-humanoid-teeth-how-dare-you and woven spiderwebs. If killed, Fritter can be summoned via find steed or find greater steed."
		}],
		features : [{
			name : "Spider Climb",
			description : "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. However, Fritter has an intense fear of heights. You must succeed a DC 15 Wisdom (Animal Handling) check to convince Fritter to use their spider climb ability."
		}, {
			name : "Web Sense",
			description : "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
		}, {
			name : "Web Walker",
			description : "The spider ignores movement restrictions caused by webbing."
		}],
		actions : [{
			name : "Web (Recharge 5-6)",
			description : "See attack. On a hit, the target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
		}],
	}
	
CreatureList["marzipan, the skeletal warhorse"] = {
		name : "Marzipan, the Skeletal Warhorse",
		nameAlt : ["Skeletal Warhorse"],
		source : [["AL:LN",2018]],
eval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "Marzipan");
},
removeeval : function(prefix) {
  Value(prefix + "Comp.Desc.Name", "");
},
		size : 2, //Large
		type : "Undead",
		defaultExcluded : true,
		companion : ["mount", "steed"],
		header : "Mount",
		alignment : "Unaligned",
		ac : 11,
		hp : 19,
		hd : [3, 10],
		speed : "60 ft",
		scores : [18, 12, 13, 2, 12, 7],
		damage_vulnerabilities : "bludgeoning",
		damage_immunities : "poison",
		condition_immunities : "exhaustion, poisoned",
		senses : "",
		passivePerception : 11,
		challengeRating : "1/2",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Hooves",
			ability : 1,
			damage : [2, 6, "bludgeoning"],
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Trampling Charge trait"
		}],
		traits : [{
			name : "Description",
			description : "This mount is all bloodstained bone speckled with sundried bits of flesh. The Kernel can neither confirm nor deny this horse is linked to the recent graverobbery of Lord Hultmark’s beloved warhorse Marzipan. If killed, she can be summoned via find steed, find greater steed, or animate dead."
		}, {
			name : "Trampling Charge",
			description : "If the horse moves at least 20 ft straight toward a creature and then hits it with a hooves attack on the same turn, that target takes an extra 5 (2d4) Bludgeoning damage. If Huge or smaller, it's also knocked Prone."
		}]
	}
	
//Event Award creature from the 2024 Moonfest rewards
CreatureList["peppermint pangolin"] = {
		name : "Peppermint Pangolin",
		source : [["AL:FM",2024]],
		size : 2, //Large
		type : "Beast",
		alignment : "Unaligned",
		ac : 15,
		hp : 19,
		hd : [3, 10],
		speed : "40 ft",
		scores : [18, 12, 13, 2, 12, 7],
		passivePerception : 11,
		senses : "",
		challengeRating : "1/2",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, 6, "bludgeoning"],
			range : "Melee (5 ft)",
		}, {
			name : "Rolling Bash",
			ability : 2,
			damage : [2, 4, "bludgeoning"],
			range : "Melee (5 ft)",
			description : "The pangolin must move at least 20 ft straight at the target. If Huge or smaller, target also Prone.",
			abilitytodamage : false,
		}],
		traits : [{
			name : "Mount",
			description : "A good mount can help you move more quickly through the wilderness, but its primary purpose is to carry the great that would otherwise slow you down."
		}, {
			name : "Quirks",
			description : "Peppermint pangolins refuse to wear barding."
		}],
		features : [{
			name : "Companion",
			description : "The peppermint pangolin is a land beast and trained mount that can also be summoned as a bestial spirit, using Summon Beast, an otherworldly steed, using Find Steed, or a weasel, using Find Familar. Otherwise use these stats."
		}],
	}
	

//Extra Life Certs
CreatureList["glitter elemental"] = {
		name : "Glitter Elemental",
		source : [["AL:EL", 2021]],
		size : 4, //Small
		type : "Elemental",
		companion : "familiar",
		alignment : "Chaotic Good",
		ac : 12,
		hp : 17,
		hd : [5, 6],
		speed : "30 ft, fly 30 ft",
		scores : [5, 14, 10, 9, 11, 10],
		skills : {
			"perception" : 2,
			"stealth" : 4
		},
		senses : "Darkvision 60 ft",
		passivePerception : 12,
		languages : "Common",
		challengeRating : "1/2",
		proficiencyBonus : 2,
		attacksAction : 1,
		damage_vulnerabilities : "fire",
		damage_immunities : "poison",
		condition_immunities : "blinded",
		attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, 4, "slashing"],
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Blinding Breath (Recharge 6)",
			ability : 3,
			damage : ["Dex save", "", "Blinded"],
			range : "15-ft cone",
			description : "Hits all in area; Dex save or blinded for 1 min; Affected can repeat save at end of each turn",
			dc : true,
			abilitytodamage : false,
			tooltip : "The glitter elemental exhales a 15-ft cone of blinding glitter. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}],
		features : [{
			name : "Death Burst",
			description : "When the glitter elemental dies, it explodes in a burst of glitter. Each creature within 5 ft of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success."
		}],
		traits : [{
			name : "Description",
			description : "Who doesn't want a sparkly friend to bring some joy to your adventures? The glitter elemental can be used as an animal companion or resummoned using find familiar."
		}, {
			name : "Blinding Breath (Recharge 6)",
			description : "The glitter elemental exhales a 15-ft cone of blinding glitter. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}]
	}

//Griffon's at various ages for the Griffon Taming option in RotF
CreatureList["griffon (baby)"] = {
		name : "Griffon (Baby)",
		source : [["RotF", 318]],
		defaultExcluded : true,
		size : 5, //Tiny
		type : "Monstrosity",
		alignment : "Unaligned",
		ac : 12,
		hp : 5,
		hd : [1, 4],
		speed : "30 ft, fly 40 ft",
		scores : [2, 15, 16, 2, 13, 8],
		skills : {
			"perception" : 5
		},
		senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using sight",
		passivePerception : 15,
		challengeRating : "0",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
			name : "Beak",
			ability : 2,
			modifiers : ["Str", ""],
			damage : [1, "", "piercing"],
			range : "Melee (5 ft)",
			description : "One beak and one claws attack as an Attack action",
			abilitytodamage : false,
		}, {
			name : "Claws",
			ability : 2,
			modifiers : ["Str", ""],
			damage : [1, "", "slashing"],
			range : "Melee (5 ft)",
			description : "One claws and one beak attack as an Attack action",
			abilitytodamage : false,
		}],
		actions : [{
			name : "Multiattack",
			description : "The griffon makes two attacks: one with its beak and one with its claws."
		}],
		traits : [{
			name : "Keen Sight",
			description : "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
		}]
	}
	
CreatureList["griffon (1 year)"] = {
		name : "Griffon (1 Year)",
		source : [["RotF", 318]],
		defaultExcluded : true,
		size : 4, //Small
		type : "Monstrosity",
		alignment : "Unaligned",
		ac : 12,
		hp : 13,
		hd : [2, 6],
		speed : "30 ft, fly 80 ft",
		scores : [8, 15, 16, 2, 13, 8],
		skills : {
			"perception" : 5
		},
		senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using sight",
		passivePerception : 15,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
			name : "Beak",
			ability : 1,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "One beak and one claws attack as an Attack action",
			abilitytodamage : false,
		}, {
			name : "Claws",
			ability : 1,
			damage : [1, 4, "slashing"],
			range : "Melee (5 ft)",
			description : "One claws and one beak attack as an Attack action",
			abilitytodamage : false,
		}],
		actions : [{
			name : "Multiattack",
			description : "The griffon makes two attacks: one with its beak and one with its claws."
		}],
		traits : [{
			name : "Keen Sight",
			description : "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
		}]
	}
	
CreatureList["griffon (2 years)"] = {
		name : "Griffon (2 Years)",
		source : [["RotF", 318]],
		defaultExcluded : true,
		size : 3, //Medium
		type : "Monstrosity",
		alignment : "Unaligned",
		ac : 12,
		hp : 32,
		hd : [5, 6],
		speed : "30 ft, fly 80 ft",
		scores : [12, 15, 16, 2, 13, 8],
		skills : {
			"perception" : 5
		},
		senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using sight",
		passivePerception : 15,
		challengeRating : "1",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
			name : "Beak",
			ability : 1,
			damage : [1, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "One beak and one claws attack as an Attack action",
		}, {
			name : "Claws",
			ability : 1,
			damage : [2, 4, "slashing"],
			range : "Melee (5 ft)",
			description : "One claws and one beak attack as an Attack action",
		}],
		actions : [{
			name : "Multiattack",
			description : "The griffon makes two attacks: one with its beak and one with its claws."
		}],
		traits : [{
			name : "Keen Sight",
			description : "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
		}]
	}


//Approved as Find Greater Steed option in AL
CreatureList["dragonnel"] = {
	name : "Dragonnel",
	source : [["FToD", 190]],
	size : 2, //Large
	type : "Dragon",
	companion : ["mount", "steed"],
	alignment : "Neutral",
	ac : 13,
	hp : 58,
	hd : [9, 10],
	speed : "30 ft, fly 60 ft",
	scores : [16, 15, 12, 8, 13, 10],
	skills : {
		"perception" : 3
	},
	senses : "Blindsight 30 ft; Darkvision 120 ft",
	passivePerception : 13,
	languages : "understands Draconic and Common but can't speak",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Rend",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	actions : [{
		name : "Multiattack",
		description : "The dragonnel makes two Rend attacks."
	}],
	traits : [{
		name : "Flyby",
		description : "The dragonnel doesn't provoke an opportunity attack when it flies out of an enemy's reach."
	}]
}


//Adding the CR 6 or less dinosaur beast options from Beasts of Jungle Rot for wildshape
CreatureList["archelon"] = {
	name : "Archelon",
	source : [["BoJR", 3]],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 14,
	hp : 26,
	hd : [4, 8],
	speed : "10 ft, swim 40 ft",
	scores : [16, 13, 14, 2, 12, 5],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	senses : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [2, 8, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Hold Breath",
		description : "The archelon can hold its breath for 6 hours."
	}],
}

CreatureList["brachiosaurus"] = {
	name : "Brachiosaurus",
	source : [["BoJR", 3]],
	size : 0, //Gargantuan
	type : "Beast",
	alignment : "Unaligned",
	ac : 16,
	hp : 145,
	hd : [10, 20],
	speed : "30 ft",
	scores : [24, 8, 19, 2, 10, 7],
	saves : ["", "", 7, "", "", ""],
	passivePerception : 10,
	senses : "",
	challengeRating : "6",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
		name : "Stomp",
		ability : 1,
		damage : [5, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (20 ft)",
		description : "Target must succeed on a DC 15 Strength saving throw or be knocked Prone"
	}, {
		name : "Tail",
		ability : 1,
		damage : [6, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (20 ft)",
		description : ""
	}]
}

CreatureList["dilophosaurus"] = {
	name : "Dilophosaurus",
	source : [["BoJR", 3]],
	size : 3, //Medium
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 26,
	hd : [4, 8],
	speed : "30 ft",
	scores : [13, 15, 14, 2, 12, 5],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	senses : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 8, "piercing"], 
		range : "Melee (5 ft)",
	}, {
		name : "Venomous Spit",
		ability : 2,
		damage : ["Special", "", ""], //[#, die, type] "" for die is allowed
		range : "10/20 ft",
		description : "Unless immune to Poisoned, Con save or Blinded for 1 min. See actions.",
		dc : true,
		abilitytodamage : false
	}],
	actions : [{
		name : "Venomous Spit",
		description : "A Blinded creature repeats the save at the end of its next turn, becoming Paralyzed on a failure or ending the condition on a pass. A Blinded and Paralyzed creature continues to repeat save, ending both conditions on a success."
	}],
}

CreatureList["nemicolopterus"] = {
	name : "Nemicolopterus",
	source : [["BoJR", 5]],
	size : 5, //Tiny
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 1,
	hd : [1, 4],
	speed : "5 ft, fly 50 ft",
	scores : [2, 14, 8, 2, 13, 7],
	skills : {
		"perception" : 3,
		"stealth" : 4
	},
	passivePerception : 13,
	senses : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Jungle Camouflage",
		description : "The nemicolopterus has advantage on Dexterity (Stealth) checks made to hide in jungle and forest terrain."
	}],
}

CreatureList["pachycephalosaurus"] = {
	name : "Pachycephalosaurus",
	source : [["BoJR", 6]],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 68,
	hd : [8, 10],
	speed : "40 ft",
	scores : [18, 14, 16, 2, 10, 3],
	passivePerception : 10,
	senses : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Ram",
		ability : 1,
		damage : [1, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "See Charge trait.",
	}],
	traits : [{
		name : "Charge",
		description : "If moves at least 20 ft straight toward target before hit, deals an extra 5 (2d4) Bludgeoning damage. Creatures must also make DC 14 Str save or fall Prone."
	}],
}

CreatureList["therizinosaurus"] = {
	name : "Therizinosaurus",
	source : [["BoJR", 7]],
	size : 1, //Huge
	type : "Beast",
	alignment : "Unaligned",
	ac : 14,
	hp : 104,
	hd : [11, 12],
	speed : "30 ft",
	scores : [19, 10, 17, 2, 11, 7],
	passivePerception : 10,
	senses : "",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 1,
		damage : [3, 8, "slashing"],
		range : "Melee (5 ft)",
		description : "",
	}],
	traits : [{
		name : "Multiattack",
		description : "The therizinosaurus makes two claw attacks."
	}],
}

CreatureList["troodon"] = {
	name : "Troodon",
	source : [["BoJR", 8]],
	size : 4, //Small
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 22,
	hd : [4, 6],
	speed : "30 ft",
	scores : [12, 15, 14, 4, 14, 10],
	skills : {
		"perception" : 4,
		"stealth" : 4
	},
	passivePerception : 14,
	senses : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "Crits on a roll of 19 or 20",
	}],
	traits : [{
		name : "Pack Tactics",
		description : "The troodon has advantage on attacks against a creature if at least one ally is within 5 feet of the creature and not Incapacitated."
	}],
}

CreatureList["zealoraptor"] = {
	name : "Zealoraptor",
	source : [["BoJR", 9]],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 15,
	hp : 52,
	hd : [7, 10],
	speed : "50 ft",
	scores : [16, 18, 15, 3, 12, 10],
	skills : {
		"perception" : 3,
		"stealth" : 6
	},
	passivePerception : 13,
	senses : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "Makes 1 bite and 1 claw attack",
			}, {
		name : "Claw",
		ability : 2,
		damage : [1, 10, "slashing"],
		range : "Melee (5 ft)",
		description : "Makes 1 bite and 1 claw attack",
	}],
	traits : [{
		name : "Pack Tactics",
		description : "Advantage on attacks against a creature if at least one ally is within 5 feet of the creature and not Incapacitated.",
		}, {
		name : "Pounce",
		description : "If moves at least 20 ft toward creature before hitting with claw attack, target makes DC 13 Str save or falls Prone. If Prone, zealoraptor can make Bite attack as bonus action.",
	}],
}

//Also coding the highest CR beasts as companions for polymorph
CreatureList["titanosaurus"] = {
	name : "Titanosaurus",
	source : [["BoJR", 8]],
	size : 0, //Gargantuan
	type : "Beast",
	alignment : "Unaligned",
	ac : 17,
	hp : 201,
	hd : [13, 20],
	speed : "30 ft",
	scores : [30, 7, 20, 2, 10, 7],
	saves : ["", "", 8, "", "", ""],
	passivePerception : 10,
	senses : "",
	challengeRating : "7",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
		name : "Stomp",
		ability : 1,
		damage : [6, 10, "bludgeoning"], 
		range : "Melee (20 ft)",
		description : "Target must succeed on a DC 16 Strength saving throw or be knocked Prone"
	}, {
		name : "Tail",
		ability : 1,
		damage : [7, 10, "bludgeoning"], 
		range : "Melee (20 ft)",
		description : ""
	}],
	actions : [{
		name : "Legendary Actions",
		description : "The titanosaurus can take 3 legendary actions, choosing from the options below. Only one option can be used at a time and only at the end of another creature’s turn. The titanosaurus regains all legendary actions at the start of its turn."
		}, {
		name : "Momentum:",
		description : "The titanosaurus moves half its speed without provoking opportunity attacks.\n\u25C6 Tough Defense (2 Actions): The titanosaurus is resistant to one of hte following damage types until the start of its next turn: Bludgeoning, Piercing, or Slashing.\n\u25C6 Tail Thunder (3 Actions): The titanosaurus makes a tail attack with disadvantage against each creature in a 20-foot cone."
		}],
}

CreatureList["giganotosaurus"] = {
	name : "Giganotosaurus",
	source : [["BoJR", 4]],
	size : 0, //Gargantuan
	type : "Beast",
	alignment : "Unaligned",
	ac : 14,
	hp : 217,
	hd : [14, 20],
	speed : "60 ft",
	scores : [26, 8, 21, 2, 12, 10],
	skills : {
		"perception" : 5
	},
	passivePerception : 15,
	senses : "",
	challengeRating : "10",
	proficiencyBonus : 4,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [4, 12, "piercing"], 
		range : "Melee (15 ft)",
		description : "Large or smaller creature Grappled & Restrained (DC 18). Can't bite another target."
	}, {
		name : "Tail",
		ability : 1,
		damage : [4, 8, "bludgeoning"], 
		range : "Melee (20 ft)",
		description : ""
	}],
	actions : [{
		name : "Multiattack",
		description : "The giganotosaurus makes one bite and one tail attack. It can use Swallow instead of the bite.",
	}, {
		name : "Swallow",
		description : "The giganotosaurus makes one bite attack against a Large or smaller creature it's grappling. If it hits, the target takes the bite's damage, is swallowed, and the grapple ends.\nWhile swallowed, the creature is Blinded and Restrained, has total cover against effects outside the dinosaur, and takes 21 (6d6) Acid at the start of the giganotosaurus' turns.\nIf the giganotosaurus takes 30+ damage in a turn from a swallowed creature, it must pass a DC 15 Con save at the end of that turn or regurgitate all swallowed creatures, which appear Prone within 10 feet. If the giganotosaurus dies, a swallowed creature is no longer Restrained and can escape with 30 ft of movement, exiting Prone.",
	}],
	features : [{
		name : "Legendary Actions",
		description : "The giganotosaurus can take 3 legendary actions, choosing from the options below. Only one option can be used at a time and only at the end of another creature’s turn. It regains all legendary actions at the start of its turn."
		}, {
		name : "Momentum",
		description : "The giganotosaurus moves half its speed without provoking opportunity attacks.\n\u25C6 Tail Sweep (2 Actions): The giganotosaurus sweeps its tail in a 20-ft cone. Each creature in the cone must pass a DC 17 Strength save or be knocked Prone.\n\u25C6 Roar (3 Actions): Creatures within 20 ft of the giganotosaurus that can hear it must pass a DC 17 Wisdom save or be Frightened of it until the end of its next turn."
		}],
}