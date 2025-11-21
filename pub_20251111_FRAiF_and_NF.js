var iFileName = "pub_20251111_FRAiF_and_NF.js";
RequiredSheetVersion("13.2.3");

//Netheril's Fall
SourceList.NF = {
  name: "Netheril's Fall [Items]",
  abbreviation: "NF",
  abbreviationSpellsheet: "NF",
  group : "Adventure Books",
  url: "https://marketplace.dndbeyond.com/category/DB8U430LO",
  date: "2025/11/11",
};

// Magic Items
MagicItemsList["arcane battery"] = {
	name : "Arcane Battery", 
	source : [["NF", ""]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	description : "This smooth, oval stone is etched with faintly glowing magical symbols. As a Magic action while held, I can touch the battery to one magic item. If that magic item regains expended charges daily, it immediately regains 1d4 + 1 expended charges and the battery loses its magic.",
	descriptionFull : "This smooth, oval stone is etched with faintly glowing, magical symbols. While holding the battery, you can take a Magic action to touch the battery to one magic item. If that magic item normally regains expended charges daily, it immediately regains 1d4 + 1 expended charges, and the battery loses its magic.",
}
MagicItemsList["brooch of the elements"] = {
	name : "Brooch of the Elements", 
	source : [["NF", ""]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "The central jewel of this butterfly-shaped brooch swirls with multicolored iridescence. It has 3 charges, regained at dawn. As a Reaction when a visible creature in 60 ft hits with an atk roll, I can use 1 charge to change a damage type dealt by the attack to Acid, Cold, Fire, Lightning, Poison, or Thunder.",
	descriptionFull : "The central jewel of this butterfly-shaped brooch swirls with multicolored iridescence.\n   The brooch has 3 charges and regains all expended charges daily at dawn. As a Reaction when a creature you can see within 60 feet of you hits a target with an attack roll and deals damage, you can expend 1 charge and change one damage type the attack deals to one of the following damage types: Acid, Cold, Fire, Lightning, Poison, or Thunder.",
	usages : 3,
	recovery : "dawn",
	action : [["reaction", ""]],
}
MagicItemsList["fork of eddy summoning"] = {
	name : "Fork of Eddy Summoning", 
	source : [["NF", ""]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This tuning fork crackles with harmless magic. As a Magic action once per dawn, tap it against object to summon an Eldritch Eddy. It appears in closest empty space, is Friendly to me and allies, and obeys me (no action needed). If no commands, defends self only. Goes after me on my Initiative and disappears in 1 hr, at 0 HP, or with BA.",
	descriptionLong : "This tuning fork crackles with harmless multicolored magic. As a Magic action, tap it against an object to summon an Eldritch Eddy, which appears in the closest empty space. The eddy is Friendly to me and my allies, and obeys my commands (no action required). If I don't command it, the eddy defends itself but takes no other actions. It takes its turn immediately after me on my Initiative count and disappears after 1 hour, when it dies, or when I dismiss it as a Bonus Action. The fork can’t be used again until the next dawn.",
	descriptionFull : "This Tiny tuning fork crackles with harmless, multicolored magical energy. As a Magic action, you can tap the fork against any object to summon an Eldritch Eddy (see appendix B). The eddy appears in an unoccupied space as close to you as possible. The eddy is Friendly to you and your allies, and it obeys your commands. If you fail to command it, the eddy defends itself against attackers but takes no other actions. It takes its turn immediately after you on your Initiative count. The eddy disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The fork can’t be used this way again until the next dawn.",
	creaturesAdd : [["Eldritch Eddy", true]],
	usages : 1,
	recovery : "dawn",
	action : [["action", ""]],
}
MagicItemsList["hat of vortexes"] = {
	name : "Hat of Vortexes", 
	source : [["NF", ""]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	attunement : true,
	description : "This hat has 3 charges, regained at dawn. As a Magic action while held, use 1 charge to release a magical vortex. The vortex fills a 10-ft Cube originating from me and lasts for 1 hr. Its area is Difficult Terrain. I decide a vortex’s visual details on creation, such as multicolor or glittery.",
	descriptionFull : "This hat has 3 charges and regains all expended charges daily at dawn. You can take a Magic action and expend 1 charge while holding the hat to release a magical vortex from it. The vortex fills a 10-foot Cube originating from you and lasts for 1 hour. While the vortex is present, its area is Difficult Terrain.\n   You decide a vortex’s visual details when you create it. For instance, the vortex might be multicolored or glittery.",
	usages : 3,
	recovery : "dawn",
	action : [["action", ""]],
}
MagicItemsList["magen handbell"] = {
	name : "Magen Handbill", 
	source : [["NF", ""]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "As Magic action while held (1/1d6 days), ring this brass handbell to summon a Terran Magen to empty space in 30 ft. It understands, obeys, & goes after me in Initiative. Disappears in 1 hr, at 0 HP, or as BA. If starts turn Bloodied, roll 1d6. On 6 goes berserk. Can't dismiss & atks closest visible creature each turn. If none in reach, atks obj. Berserk until disappears or creature with bell makes DC 15 CHA (Persuasion) to regain control.",
	descriptionLong : "As a Magic action while held, I can ring this brass handbell to summon a Terran Magen, which appears in an empty space I choose within 30 ft. The magen understands and obeys me, and goes after me on my Initiative. It disappears after 1 hr, at 0 HP, or as a Bonus Action. If the magen starts turn Bloodied, roll 1d6. On 6 it goes berserk and attacks nearest visible creature each turn. If none in reach, attacks object. Remains berserk until disappears or a creature holding bell makes a DC 15 CHA Persuasion to regain control. While berserk, it can't be dismissed. The bell can be used every 1d6 days.",
	descriptionFull : "While holding this brass handbell, you can take a Magic action to ring it and summon a Terran Magen. The magen appears in an unoccupied space you choose within 30 feet of yourself, understands your languages, obeys your commands, and takes its turn immediately after you on your Initiative count. The magen disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The bell can’t be used this way again for 1d6 days.\n   " + toUni("Berserk Magen") + ". Whenever the magen summoned by this item starts its turn Bloodied, roll 1d6. On a 6, the magen goes berserk.\n   While berserk, the magen no longer obeys your commands, and you can’t dismiss it as a Bonus Action. On each of its turns, the berserk magen attacks the nearest creature it can see. If no creature is near enough for the magen to move to and attack, the magen attacks an object. The magen remains berserk until it disappears, or until a creature holding the handbell takes an Influence action and succeeds on a DC 15 Charisma (Persuasion) check to regain control of the magen.",
	creaturesAdd : [["Terran Magen", true]],
	usages : 1,
	recovery : "1d6 days",
	action : [["action", ""]],
}
MagicItemsList["mask of changed appearance"] = {
	name : "Mask of Changed Appearance", 
	source : [["NF", ""]],
	type : "wondrous item",
	rarity : "common",
	magicItemTable : "?",
	description : "This jeweled mask has 3 charges, 1d3 regained at dawn. As Magic action, use 1 charge to alter my face for 1 hr. I can’t look like another person, but can smooth or deepen wrinkles, whiten teeth, hide or increase bags under my eyes, & other minor cosmetic changes. While my face is changed, the mask is Invisible. If use last charge, 5% chance (1 on d20) mask explodes into sweet powder.",
	descriptionFull : "This jeweled mask has 3 charges. As a Magic action, you can expend 1 charge and change your face’s appearance. You can’t make yourself look like a different person, but you can smooth or deepen your wrinkles, whiten your teeth, hide or accentuate bags under your eyes, or perform other minor cosmetic changes. While your appearance is changed, the mask has the Invisible condition. Your changed appearance lasts 1 hour.\n   " + toUni("Regaining Charges") + ". The mask regains 1d3 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the mask explodes in a harmless cloud of sweet-swelling powder and is destroyed.",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	action : [["action", ""]],
}
MagicItemsList["mythallar bracelet"] = {
	name : "Mythallar Bracelet", 
	source : [["NF", ""]],
	type : "wondrous item",
	rarity : "common",
	magicItemTable : "?",
	description : "Three small crystal beads from a decommissioned mythallar are strung on this leather bracelet. As a Magic action, I can pluck 1 bead to gain Adv on Str (Athletics) checks for 1 min and the bead disappears. Once all 3 beads have been plucked, the bracelet loses its magic.",
	descriptionFull : "Three small, crystal beads made from a decommissioned mythallar are strung on this leather bracelet. As a Magic action, you can pluck one bead from the bracelet to gain Advantage on Strength (Athletics) checks for 1 minute.\n   A bead disappears immediately after it’s plucked. Once all three beads have been plucked, the bracelet loses its magic.",
	usages : 3,
	recovery : "Never",
	action : [["action", ""]],
}
MagicItemsList["mythallar cloak"] = {
	name : "Mythallar Cloak", 
	source : [["NF", ""]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "?",
	attunement : true,
	description : "This electric-blue cloak is studded with crystal shards of a decommissioned mythallar. It has 10 charges, 1d10 regained at dawn. As bonus action while worn, 1 charge to activate for 1 min or until ended (no action). Gain 30 ft Fly and hover. Once per turn when I hit with atk, can deal extra 1d4 Radiant. Fall if aloft when magic ends.",
	descriptionFull : "This electric-blue cloak is studded with sewn-in crystals that are shards of a decommissioned mythallar. The cloak has 10 charges and regains 1d10 expended charges daily at dawn.\n   While wearing the cloak, you can take a Bonus Action and expend 1 charge to activate the cloak’s magic. The magic lasts for 1 minute or until you end it early (no action required).\n   While the cloak’s magic is active, you gain a Fly Speed of 30 feet and can hover. Additionally, once on each of your turns when you hit a creature with an attack roll and deal damage, you can cause the target to take an extra 1d4 Radiant damage. If you are aloft when the cloak’s magic ends, you fall.",
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d10",
	action : [["bonus action", ""]],
}

//Statblocks
CreatureList["eldritch eddy"] = {
	name : "Eldritch Eddy",
	source : [["NF", ""]],
	size : 2, //Large
	type : "Construct",
	alignment : "Chaotic Neutral",
	ac : 11,
	hp : 144,
	hd : [17, 10],
	speed : "10 ft, Fly 40 ft (hover)",
	scores : [10, 12, 16, 12, 9, 17],
	senses : "Blindsight 60 ft",
	damage_resistances : "Force",
	damage_immunities : "Fire; Lightning",
	condition_immunities : "Exhausted; Frightened; Paralyzed; Petrified; Poisoned",
	languages : "Understands Common and one other language but can't speak",
	passivePerception : 9,
	challengeRating : 6,
	proficiencyBonus : 3,
	attacksAction : 2,
	traits : [{
		name : "Magic Resistance",
		description : "The eddy has Advantage on saving throws against spells and other magical effects.",
		joinString : "\n   ",
		}],
	features : [{
		name : "Multiattack",
		description : "The eddy makes two attacks, using Searing Swipe or Arcane Bolt in any combination.",
		joinString : "\n   ",
		}, {
		name : "Eldritch Overload",
		description : "As a Reaction when the eddy takes damage, each creature of the eddy’s choice in a 5-ft Emanation makes a DC 14 Str Save or takes 7 (2d6) Force damage and is Prone.",
		joinString : "\n   ",
		}],
	attacks : [{
		name : "Searing Swipe",
		ability : 6,
		damage : [3, 6, ""],
		range : "Melee (10 ft)",
		description : "Attack deals Fire or Lightning damage (choice)",
		}, {
		name : "Arcane Bolt",
		ability : 6,
		damage : [2, 10, "force"],
		range : "120 ft",
		description : "",
	}],
};

CreatureList["terran magen"] = {
	name : "Terran Magen",
	source : [["NF", ""]],
	size : 3, //Medium
	type : "Construct",
	alignment : "Unaligned",
	ac : 21,
	hp : 121,
	hd : [22, 8],
	speed : "30 ft, Fly 20 ft (hover)",
	scores : [16, 10, 12, 10, 18, 10],
	damage_immunities : "Poison; Thunder",
	condition_immunities : "Blinded; Charmed; Deafened; Exhaustion; Frightened; Paralyzed; Petrified; Poisoned",
	languages : "Understands Common and 2 other languages but can't speak",
	skills : {
		"perception" : 7
	},
	passivePerception : 17,
	challengeRating : 8,
	proficiencyBonus : 3,
	attacksAction : 2,
	traits : [{
		name : "Multiattack",
		description : "The magen makes two attacks, using Hammer Fist or Thunderous Boom in any combination.",
		joinString : "\n   ",
	}, {
		name : "Disintegration",
		description : "If the magen dies, it disintegrates into dust, leaving behind anything it was wearing or carrying.",
		joinString : "\n   ",
	}, {
		name : "Magic Resistance",
		description : "The magen has Advantage on saving throws against spells and other magical effects.",
		joinString : "\n   ",
	}],
	features : [{
		name : "Spellcasting",
		description : "The magen casts one of the following spells, requiring no Material components and Wisdom as the spellcasting ability (spell save DC 15): Mage Hand, Mending, Prestidigitation (At Will); Disintegrate, Move Earth, Stone Shape (1/Day Each)"
		}],
	attacks : [{
		name : "Hammer Fist",
		ability : 1,
		damage : [3, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "Plus 13 (3d8) Force dmg",
		}, {
		name : "Thunderous Boom",
		ability : 5,
		damage : [8, 6, "thunder"],
		abilitytodamage : false,
		range : "60 ft",
		description : "",
	}],
};

//Forgotten Realms: Adventures in Faerun
SourceList["FR:AiF"] = {
  name: "Forgotten Realms: Adventures in Faerun [Items]",
  abbreviation: "FR:AiF",
  abbreviationSpellsheet: "AF",
  group : "Adventure Books",
  url: "https://marketplace.dndbeyond.com/category/4714000?pid=DB4714000",
  date: "2025/11/11",
};

//Magic Items
MagicItemsList["harper pin"] = {
	name : "Harper Pin", 
	source : [["FR:AiF", ""]],
	type : "wondrous item",
	magicItemTable : "?",
	attunement : true,
	description : "This battleaxe's handle is carved with leaves and vines. It deals an extra 1d8 slashing damage against ordinary plants and plant creatures. When a creature of non-good alignment makes an attack with it, it sprouts thorns, dealing 1 magical piercing damage to the wielder after the attack is made.",
	descriptionFull : "When you attune to this pin, choose a Harper persona (see the Forgotten Realms: Heroes of Faerûn for examples), including an alignment and a creature type. While wearing this pin, you register as that persona when targeted by magic to determine your creature type, alignment, or location.\n   The type of pin determines its rarity and effects.\n   " + toUni("Silver Harper Pin") + ". When you attune to this pin, you can devise a general line of thought of 25 words or fewer. While you wear this pin, a creature that reads your thoughts detects your preprogrammed line of thought instead. A creature that takes the Study action while reading your thoughts makes a DC 13 Intelligence (Investigation) check. On a successful check, it becomes aware that the detected thoughts are preprogrammed.\n   " + toUni("Gold Harper Pin") + ". While wearing this pin, you can cast the Nondetection spell on yourself. The duration of this spell is permanent until you disable the effect (no action required), you remove the pin, or you are no longer attuned to the pin.",
	choices : ["Silver","Gold"],
	"silver" : {
		name : "Silver Harper Pin",
		rarity : "uncommon",
		description : "When I attune to this pin, I can devise a general line of thought (25 words or less). While worn, a creature that reads thoughts detects my preprogrammed line of thought instead. If a creature takes the Study action while reading my thoughts, it makes a DC 13 Int (Investigation) check. On a pass, it knows the detected thoughts are preprogrammed.",
	},
	"gold" : {
		name : "Gold Harper Pin",
		rarity : "rare",
		description : "While wearing this pin, I can cast Nondetection on myself. The duration of this spell is permanent until I disable the effect (no action required), I remove the pin, or I'm no longer attuned.",
		spellcastingBonus : {
			name : "Self Only",
			spells : ["nondetection"],
			selection : ["nondetection"],
			firstCol : "atwill"
		},
		spellChanges : {
			"nondetection" : {
				duration : "Permanent",
				changes : "Spell lasts until dismissed, I remove the pin, or I'm no longer attuned"
			},
		}
	}
}

MagicItemsList["mechanical wonder"] = { //Domestic wonder code is a duplicate of the Heroes of Faerun item. Kept here to consolidate the single item.
	name : "Mechanical Wonder", 
	source : [["FR:AiF", ""]],
	type : "wondrous item",
	magicItemTable : "?",
	description : "A Mechanical Wonder is a semi-autonomous object imbued with power. They vary in size and form depending on their function and must be wound for 1 minute to activate (Utilize each turn). Once wound, it remains active as per the wonder type.",
	descriptionFull : [
		"A Mechanical Wonder is a semi-autonomous object imbued with magical power. Mechanical Wonders vary greatly in size and form depending on their function.",
		"A Mechanical Wonder is a dormant object until activated. To activate a Mechanical Wonder , you must wind the wonder with a handheld key unique to that wonder. It takes 1 minute to wind a Mechanical Wonder . While you wind it, you must take the Utilize action each turn.",
		"Once wound, a Mechanical Wonder remains activated for the duration specified in the wonder’s description below.",
		"" + toUni("Domestic Wonder (Uncommon)") + ". This bipedal wonder is designed to assist with household duties. It vaguely resembles whatever species its creator used as inspiration. An activated domestic wonder uses the Domestic Wonder stat block. The wonder is an ally to you and your allies. In combat, the wonder shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger. The domestic wonderis destroyed if it drops to 0 Hit Points.",
		"" + toUni("Flying Wonder (Common)") + ". An activated flying wonder uses the Flying Wonder stat block. The wonder is an ally to you and your allies. In combat, the wonder shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger. The flying wonderis destroyed if it drops to 0 Hit Points.",
		"" + toUni("Gyrocopter Wonder (Rare)") + ". This wagon-sized vehicle is made of brassy metal and has a spiral-shaped propeller atop it. Its midsection is open on two sides. Once wound, the gyrocopter wonder remains active for 8 hours. While active, the gyrocopter can be used as a vehicle; it requires one pilot.",
		"The gyrocopter wonder is a Huge object that weighs 500 pounds and has the following statistics: AC 14, HP 50, Speed 5 ft., and Fly Speed 20 ft. The gyrocopter can bear up to 2,000 pounds of cargo; if it bears any more than this, it deactivates.",
		"Eight spectral cords are mounted to the inside of the cargo bay. A creature riding in the gyrocopter wonder can take a Utilize action to attach itself to or detach itself from one of these cords. A creature attached to a cord can leap from the gyrocopter wonder and glide, moving up to 5 feet horizontally for every 1 foot it descends in the air. If a creature attached to a cord is ever more than 500 feet away from the gyrocopter, the cord immediately disappears and returns to the wonder.",
		"" + toUni("Mobility Wonder (Common)") + ". While inactive, the mobility wonder resembles a metal turtle shell with straps. It is designed to be worn on your back or flank, depending on your anatomy. Once wound, the mobility wonder transforms into a personal transport device and remains active for 24 hours. While active, the mobility wonder increases your Speed to 30 feet. Other creatures can’t remove your mobility wonder from you unless you allow it.",
	],	
	choices : ["Domestic Wonder","Flying Wonder", "Gyrocopter Wonder", "Mobility Wonder"],
	"domestic wonder" : {
		name : "Domestic Wonder",
		rarity : "uncommon",
		creaturesAdd : [["Domestic Wonder", true]],
		description : "Bipedal construct for household duties. Wind for 1 min with Utilize to activate Domestic Wonder statblock. Ally to me and allies. In combat, shares my Initiative & takes turn immediately after me. Obeys my verbal commands (no action needed). If no command, Dodge and move to avoid danger. Wonder is destroyed at 0 HP.",
	},
	"flying wonder" : {
		name : "Flying Wonder",
		rarity : "common",
		creaturesAdd : [["Flying Wonder", true]],
		description : "Wind for 1 min with Utilize to activate Flying Wonder statblock. It's an ally to me and allies. In combat, shares my Initiative & takes turn immediately after me. Obeys my verbal commands (no action needed). If no command, Dodge and move to avoid danger. Wonder is destroyed at 0 HP.",
	},
	"gyrocopter wonder" : {
		name : "Gyrocopter Wonder",
		rarity : "rare",
		description : "This wagon-sized brassy vehicle has a spiral propeller on top and is open on 2 sides. Wind for 1 min with Utilize to activate for 8 hrs. While active, can be flown by 1 pilot. Huge Obj (500 lbs, AC 14, Speed 5/20 Fly, holds 2000 lbs) with 8 spectral cords in cargo bay. Utilize to attach/detach from cord. If attached, can leap from gyrocopter & glide (move 5 ft/1 ft descends). If more than 500 ft away, cord detaches and returns to gyrocoper.",
		descriptionLong : "This wagon-sized brassy vehicle has a spiral propeller on top and its middle is open on 2 sides. I can wind it for 1 min with Utilize to activate it for 8 hrs. While active, the gyrocopter can be flown by 1 pilot. It's a Huge Object (500 lbs, AC 14, Speed 5 ft/20 ft Fly) and can hold up to 2000 lbs without deactivating. There are 8 spectral cords in the cargo bay. A passenger can take Utilize action to attach/detach from a cord. If attached, can leap from gyrocopter and glide (move 5 ft per 1 ft descends). If ever more than 500 ft away, cord detaches and returns to gyrocoper.",
	},
	"mobility wonder" : {
		name : "Mobility Wonder",
		rarity : "common",
		description : "While inactive, this wonder resembles a metal turtle shell with straps and can be worn on my back or flank. Wind for 1 min with Utilize to transform it into a personal transport device for 24 hrs, which increases my Speed to 30 ft. The wonder can't be removed unless I allow it.",
	}
}

//Statblocks
CreatureList["flying wonder"] = {
	name : "Flying Wonder",
	source : [["FR:AiF", ""]],
	size : 5, //Tiny
	type : "Construct",
	alignment : "Unaligned",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "5 ft, Fly 30 ft",
	scores : [2, 15, 10, 3, 10, 1],
	senses : "Blindsight 60 ft",
	damage_immunities : "Poison",
	condition_immunities : "Exhausted; Poisoned",
	languages : "Understands Common but can't speak",
	challengeRating : 0,
	proficiencyBonus : 2,
	attacksAction : 0,
	traits : [{
		name : "Increased Carrying Capacity",
		description : "The wonder can carry up to 100 pounds.",
		joinString : "\n   ",
	}, {
		name : "Wind-Up Operation",
		description : "The wonder has the Unconscious condition until another creature winds it with the wonder’s unique key for 1 minute. Once wound, the wonder operates for 24 hours or until a creature touches the wonder with its key as a Utilize action to deactivate it, after which the wonder has the Unconscious condition until it is wound again.",
		joinString : "\n   ",
	}],
	features : [{
		name : "Chime",
		description : "As a Bonus Action, the wonder chirps a merry, metronomic tune & chooses one visible ally within 60 feet. Until the start of the wonder’s next turn, the target has Advantage on its next ability check with a Musical Instrument or Tinker’s Tools."
		}, {
		name : "Sprint",
		description : "As a Bonus Action, the wonder takes the Dash action."
		}],
	attacks : [{
		name : "",
		ability : "",
		damage : ["", "", ""],
		range : "",
		description : "",
	}],
};

//Commented out to avoid duplicating the HoF item by default. Leaving here so people can add it back in if they aren't using the other script.

/*CreatureList["domestic wonder"] = {
	name : "Domestic Wonder",
	source : [["FRHoF", 134]],
	size : 3,
	type : "Construct",
	alignment : "Unaligned",
	ac : 9,
	hp : 5,
	hd : [1, 8],
	speed : "30 ft",
	scores : [13, 8, 13, 3, 8, 1],
	senses : "",
	damage_immunities : "Poison",
	condition_immunities : "Exhausted; Poisoned",
	languages : "Understands Common but can't speak",
	challengeRating : "",
	proficiencyBonus : 2,
	attacksAction : 0,
	traits : [{
		name : "Mechanical Determination",
		description : "If damage reduces the wonder to 0 Hit Points, it must make a Constitution saving throw with a DC of 5 plus the damage taken unless the damage is Lightning or from a Critical Hit. On a successful save, the wonder drops to 1 Hit Point instead.",
		joinString : "\n   ",
	}, {
		name : "Wind-Up Operation",
		description : "The wonder has the Unconscious condition until another creature winds it with the wonder's unique key for 1 minute. Once wound, the wonder operates for 10 days or until a creature touches the wonder with its key as a Utilize action to deactivate it, after which the wonder has the Unconscious condition until it is wound again.",
		joinString : "\n   ",
	}],
	attacks : [{
		name : "",
		ability : "",
		damage : ["", "", ""],
		range : "",
		description : "",
	}],
};

MagicItemsList["windskiff"] = {
	name : "Windskiff",
	source : [["FR:AiF", ""]],
	type : "wonderous item",
	rarity : "rare",
	magicItemTable : "?",
	description : "This jewelry has 3 charges, regained at dawn. As Magic action, 1 charge to transform into a Medium-size personal vehicle: AC 12, HP 30, Speed 40 ft. The vehicle hovers a few inches off the surface and can glide, moving 5 ft horizontally for every 1 ft it descends. The Windskiff and its riders take no falling damage.",
	descriptionFull : [
		"This small piece of jewelry has 3 charges and regains all expended charges daily at dawn. While you are holding it, you can take a Magic action to expend 1 charge, which causes the jewelry to transform into a sail-powered personal vehicle. The vehicle is roughly the size and shape of a household door with a 10-foot-tall sail extending from one side. After 1 hour or until you use the item's command word (no action required), the transformation ends and the Windskiff reverts to its jewelry form.",
		"In vehicle form, a Windskiff is a Medium object with the following statistics: AC 12, HP 30, and Speed 40 ft. The Windskiff hovers a few inches above whatever surface it's on and can glide; it moves 5 feet horizontally for every 1 foot it descends in the air. A Windskiff and its riders take no damage from falling.",
	],	
	action: [["action", " (Transform)"]],
	limfeaname : "Windskiff",
	usages : 3,
	recovery : "dawn",
};
*/