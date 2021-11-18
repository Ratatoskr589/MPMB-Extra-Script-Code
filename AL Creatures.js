/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me (MPMB in particular, but others as noted). It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). 

Subject: Extra AL Creatures

Effect: This file adds new creatures that are specially made for AL into the sheet. This list is a WIP, since I do not have access to most of the Extra Life & Fai Chen certs. Instead these are being coded as I need them.*/

//The Sea Lion code was deleted from GoS but still appears on a Beastmaster NPC. The code for Arctic Stink Squirrel, Chwinga Squidling, Gelatinous Ice Cube, Snowy Owlbear Cub was made by Nod_Hero. It was added here to collect the extra creatures in one place.

//Complete: DDCE, House of Lament Premiere, S0-S9, S9 DM Rewards (no vehicles), Holiday Events
//WIP: Fai Chen's/Certs, S10 (Through 10-10), DC-POA, DRW

var iFileName = "AL Creatures.js";
RequiredSheetVersion(13);

// Define the source
SourceList["AL:FC"] = {   //Fai Chen 
    name : "Fai Chen Certs",
    abbreviation : "AL:FC",
    group : "Adventurers League",
    date : "Various"
};

SourceList["AL:EL"] = {   //AL specific Extra Life certs
    name : "AL Extra Life Certs",
    abbreviation : "AL:EL",
    group : "Extra Life",
    date : "Various"
};

SourceList["AL:SE"] = {
    name : "AL Special Events (Conventions/Opens/Premieres)",
    abbreviation : "AL:SE",
    group : "Adventurers League",
    date : "Various"
};
 
SourceList.DDCE = { //Only creatures from this category count as Event Awards under the new rules
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
	date : "Various"
};

SourceList["AL:LN"] = {  //Liar's Night and Wandering Monsters
    name : "AL Holiday Events - Liar's Night",
    abbreviation : "AL:LN",
    group : "Adventurers League",
    date : "Various"
};

SourceList.ALDMs9 = {  //Season 9 DM Rewards (Several of these are from BG:DiA, but cannot normally be used by players)
    name : "AL Season 9 DM Rewards",
    abbreviation : "ALDMs9",
    group : "Adventurers League",
    date : "2019/09/16"
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
	}]
}

//Here because I'm tired of manually looking up the stats for my Horns of Valhalla
CreatureList["berserker"] = {
	name : "Berserker",
	header : "Summon",
	source : [["SRD",""],["AL","Item"]],
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
		description : "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
	}, {
		name : "Summoned Spirit",
		description : "This warrior spirit was summoned from Ysgard by a Horn of Valhalla."
	}]
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
	type : "Beast",
	subtype : "",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "30 ft",
	scores : [3, 16, 8, 2, 12, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 5
		},
	senses : "Adv. on Wis (Perception) checks using hearing/smell",
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
		description : "This cuddly little brute makes a playful (if alarming) companion. It can be summoned using find familiar."
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
	type : "Beast",
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
	type : "Beast",
	subtype : "",
	companion : "familiar",
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
		name : "Description",
		description : "The cub of this rare breed of tiny owlbear forms a loving bond with a single adventurer. You can summon the owlbear cub using find familiar."
		}, {
		name : "Keen Smell",
		description : "The snowy owlbear cub has advantage on Wisdom (Perception) checks that rely on smell."
		}]
};


//Special cert from the Beadle & Grimm Icewind Dale Premiere. Acts as a non-combat, non-mechanical companion unless you summon it with Find Familiar.
CreatureList["yeti tyke"] = {
		name : "Yeti Tyke",
		source : ["AL:SE","IDRF:BG"],
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
CreatureList["euphio the watch hound"] = {
		name : "Euphio the Watch Hound",
		source : ["AL:FC",2018],
		size : 3, //Medium
		type : "Beast",
		companion : "familiar",
		alignment : "Unaligned",
		ac : 13,
		hp : 5,
		hd : [1, 8],
		speed : "40 ft",
		scores : [13, 14, 12, 3, 12, 7],
		skills : {
			"perception" : 3
		},
		senses : "Adv. on Wis (Perception) checks using hearing/smell",
		passivePerception : 13,
		challengeRating : "1/8",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "Target must succeed on a DC 11 Strength saving throw or be knocked prone"
		}],
		features : [{
			name : "Keen Hearing and Smell",
			description : "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}],
		traits : [{
			name : "Description",
			description : "Euphio is a stalwart mastiff of impeccable breeding and even temperament who had the honor of guarding the Blackstaff for a time. He has his own set of custom leather barding emblazoned with the seal of the City of Splendors (AC 11 + Dex). The City Watch looks favorably on Euphio's owner, although that favor has limits. If slain, Euphio can be resummoned with Find Familiar."
		}]
	},
	
CreatureList["rollando, war rothe"] = {
		name : "Rollando, War Roth\xE9",
		source : ["AL:FC",2018],
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
			description : "If used after moving 20 ft straight in the same round, see Charge trait"
		}],
		traits : [{
			name : "Description",
			description : "This rare breed of arctic goat roams the mountains near Icewind Dale and makes an adorable animal companion or familiar."
		}, {
			name : "Charge",
			description : "If the goat hits with a ram attack after moving at least 20 ft straight toward a target on the same turn, the target takes an extra 1d4 bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone."
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
		type : "Beast",
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
		senses : "Adv. on Wis (Perception) checks using smell",
		passivePerception : 14,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 4, "slashing"],
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "Can be used in combination with claw while pouncing (see Pounce trait)"
		}],
		traits : [{
			name : "Description",
			description : "The result of magical experimentation, this cute critter makes a great animal companion."
		}, {
			name : "Keen Smell",
			description : "The mini displacer beast has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name : "Pounce",
			description : "If the mini displacer beast moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the mini displacer beast can make one bite attack against it as a bonus action."
		}, {
			name : "Innate Spellcasting (1/day)",
			description : "The mini displacer beast can cast Blur once per day."
		}]
	},



//Special Creatures from AL modules
//Can only be used with approval from DM or the season 5 AL Story Award
CreatureList["quasit (familiar variant)"] = {
		name : "Quasit (Familiar Variant)",
		source : [["AL","S5"]],
		size : 5, //Tiny
		type : "Fiend",
		subtype : "demon",
		companion : "pact_of_the_chain",
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
	
//Only usable with the Gift of Golden Wings Story Award. Singing or reciting the lyrics to Golden Wings takes one minute. If a good-aligned character casts find familiar after making a successful DC 15 Charisma (Performance) check, they may summon a celestial gold pseudodragon to serve as their familiar. This creature is lawful good and abandons the character if they ever willingly harm a celestial.
CreatureList["celestial gold pseudodragon"] = {
		name : "Celestial Gold Pseudodragon",
		source : [["AL","S0"]],
		size : 5, //Tiny
		type : "Celestial",
		companion : "familiar",
		header : "Familiar",
		alignment : "Lawful Good",
		ac : 13,
		hp : 7,
		hd : [2, 4],
		speed : "15 ft, fly 60 ft",
		scores : [6, 15, 13, 10, 12, 10],
		skills : {
			"perception" : 3,
			"stealth" : 4
		},
		senses : "Blindsight 10 ft; Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing/sight/smell",
		passivePerception : 13,
		languages : "understands Common and Draconic but can't speak",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Sting",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "DC 11 Con save or poisoned 1 hour; fail by 5 or more: unconscious 1 hour, until damaged or awakened",
			tooltip : "The target hit must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake."
		}],
		traits : [{
			name : "Celestial Nature",
			description : "This creature is lawful good and abandons the character if they ever willingly harm a celestial. From the Gift of Golden Wings Story Award."
		}, {
			name : "Keen Senses",
			description : "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
		}, {
			name : "Magic Resistance",
			description : "The pseudodragon has advantage on saving throws against spells and other magical effects."
		}, {
			name : "Limited Telepathy",
			description : "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft of it that can understand a language."
		}],
	}

//Story award from CCC-SQC-2-1
CreatureList["the crazy squirrel"] = {
		name : "The Crazy Squirrel",
		source : [["AL","CCC"]],
		size : 5, //Tiny
		type : "Beast",
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
}
	
	
//Special cert from the House of Lament premier. Only usable in Mist Hunters adventures.
CreatureList["penumbra the gremishka"] = {
		name : "Penumbra the Gremishka",
		source : ["AL:SE","HoL"],
		size : 5, //Tiny
		type : "Monstrosity",
		subtype : "",
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
}
	
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
		hp : 10,
		hd : [3, 4],
		speed : "20 ft, fly 40 ft",
		scores : [6, 17, 13, 11, 12, 14],
		skills : {
			"deception" : 4,
			"insight" : 3,
			"persuasion" : 4,
			"stealth" : 5
		},
		damage_resistances : "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silver weapons",
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
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "Target also takes 3d6 poison damage, half on a DC 11 Constitution saving throw"
		}],
		traits : [{
			name : "Description",
			description : "Specializing in delivery, and employee of the century three times running, this imp was a star employee of the Infernal Revenue Service."
		}, {
			name : "Hellscape Pocket",
			description : "Possesses a personal pocket dimension capable of holding up to 10 lbs of items. Only the courier can open the pocket dimension to retrieve and store items."
		}, {
			name : "Magic Resistance",
			description : "The imp has advantage on saving throws against spells and other magical effects."
		}],
		actions : [{
			name : "Invisibility",
			description : "As an action, the imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
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
		hp : 10,
		hd : [3, 4],
		speed : "20 ft, fly 40 ft",
		scores : [6, 17, 13, 11, 12, 14],
		skills : {
			"deception" : 4,
			"insight" : 3,
			"persuasion" : 4,
			"stealth" : 5
		},
		damage_resistances : "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silver weapons",
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
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "Target also takes 3d6 poison damage, half on a DC 11 Constitution saving throw"
		}],
		traits : [{
			name : "Description",
			description : "Formerly a barbed devil in service to Bel during his term in office, this imp is great at licking boots."
		}, {
			name : "Magic Resistance",
			description : "The imp has advantage on saving throws against spells and other magical effects."
		}],
		actions : [{
			name : "Invisibility",
			description : "As an action, the imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
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
		ac : 13,
		hp : 7,
		hd : [2, 4],
		speed : "15 ft, fly 60 ft",
		scores : [6, 15, 13, 10, 12, 10],
		skills : {
			"perception" : 3,
			"stealth" : 4
		},
		senses : "Blindsight 10 ft; Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing/sight/smell",
		passivePerception : 13,
		languages : "understands Common, Infernal, and Draconic but can't speak",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Sting",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "DC 11 Con save or poisoned 1 hour; fail by 5 or more: unconscious 1 hour, until damaged or awakened",
			tooltip : "The target hit must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake."
		}],
		traits : [{
			name : "Infernal Nature",
			description : "An experiment gone wrong somewhere deep inside Arkhan’s Tower, this creature resembles a tiny abishai (color chosen when summoned) and is lawful evil rather than neutral good."
		}, {
			name : "Keen Senses",
			description : "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
		}, {
			name : "Magic Resistance",
			description : "The pseudodragon has advantage on saving throws against spells and other magical effects."
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
		companion : "mount",
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
		companion : "mount",
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
CreatureList["candy corn calico cat"] = {
		name : "Candy Corn Calico Cat",
		source : [["AL:LN",2020]],
		size : 5, //Tiny
		type : "Construct",
		companion : "familiar",
		alignment : "Unaligned",
		ac : 12,
		hp : 2,
		hd : [1, 4],
		speed : "40 ft, climb 30 ft",
		scores : [3, 15, 10, 3, 12, 7],
		skills : {
			"perception" : 3,
			"stealth" : 4
		},
		senses : "Adv. on Wis (Perception) checks using smell",
		passivePerception : 13,
		challengeRating : "0",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"],
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["Str", ""],
			abilitytodamage : false
		}],
		traits : [{
			name : "Keen Smell",
			description : "The cat has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name : "Candy Corn Nature",
			description : "This construct is made entirely of partially chewed candy corns. They use cat stats (construct) and can be a familiar or animal companion."
		}]
	}
	
CreatureList["foxwere"] = {
		name : "Foxwere",
		source : [["AL:LN",2020]],
		size : 3, //Medium
		type : "Beast",
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
		source : [["AL:LN",2019]],
		size : 2, //Large
		type : "Beast",
		companion : "mount",
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
		source : [["AL:LN",2018]],
		size : 2, //Large
		type : "Undead",
		companion : "mount",
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
			description : "If the horse moves at least 20 ft straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
		}]
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




/*	"the runt (ccc-tarot2-9)" : {
		name : "The Runt (CCC-TAROT2-9)",
		source : [["AL","CCC"]],
		description : "You’ve befriended the runt of the litter, Ember. This cat has jet black fur with streaks of campfire orange and is warm to the touch, a nod to its elemental origins. Ember loves to pounce at Dancing Lights, and will chase ranged spells. Ember has the statistics of a cat.",
	},CCC-SQC-3-1 through 3-3, and 2-1 all have squirrel pets, CCC-ELF-04, TRI-13, 5-01, MAGS1-1*/  