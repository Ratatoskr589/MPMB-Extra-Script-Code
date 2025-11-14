var iFileName = "pub_20251111_ABoH_Book_of_Hungers.js";
RequiredSheetVersion("13.2.3");
SourceList.BoH = {
  name: "Astarion's Book of Hungers",
  abbreviation: "BoH",
  abbreviationSpellsheet: "BH",
  group : "Campaign Sourcebooks",
  url: "https://www.dndbeyond.com/sources/dnd/aboh",
  date: "2025/11/11",
};
SourceList.LEGACYRACE = {
  name: "Races Deprecated by 2024 Player's Handbook",
  abbreviation: "LEGACY",
  abbreviationSpellsheet: "L",
  group: "Core Sources",
  url: "https://marketplace.dndbeyond.com/core-rules/3709000?pid=DB3709000",
  date: "2014/01/01",
  defaultExcluded : true,
};
//Functions
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
function legacyRaceRefactor(raceKey, newRace){
  if(newRace.replaces){
    for (var replaced of newRace.replaces){
      if (replaced in RaceList){
        var oldRace = RaceList[replaced];
        RaceList[replaced + " (L)"] = oldRace;
        delete RaceList[replaced];
        oldRace.source = [["LEGACYRACE", 1]];
        oldRace.name = oldRace.name + " (L)";
        oldRace.shortname = oldRace.shortname + " (L)";        
      }
    }
  }
  RaceList[raceKey] = newRace;
}


//Backgrounds
BackgroundList["carouser"] = {
	regExpSearch : /^(?=.*carouser).*$/i,
	name : "Carouser",
	source : [["BoH", ""]],
	scorestxt : ["+2 and +1 -or- +1 to each from Dexterity, Intelligence, and Charisma"],
	skills : ["Deception", "Persuasion"],
	toolProfs : [["Gaming Set", 1]],
	gold : 19,
	equipleft : [
		["Gaming Set (Same as Proficiency)", "", ""],
		["Glass Bottle", "", 2],
		["Mirror", "", .5],
		["Perfume, vials of", 1, ""],
		["Tinderbox", "", 1],
	],
	equipright : [
		["Dagger", "", 1],
		["Fine clothes", "", 6],
		["Pouch", "", 1],
	],
	feature : "Carouser",
};
BackgroundFeatureList["carouser"] = {
	description : desc([
		"You grew to adulthood in the beating heart of a large city, such as Baldur's Gate. You spent countless evenings in taverns, playhouses, parlors, and gambling dens, savoring all the city had to offer. You're a natural at interacting with people to learn their secrets, whether over a high-stakes game or at a high-class soiree. You might have been thrown out of an establishment or ten, but only by people who don't know how to party.",
	]),
	source : [["BoH", ""]],
	eval : function () {
		AddFeat("Tireless Reveler [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Tireless Reveler [Origin]");
	},
};


BackgroundList["vampire devotee"] = {
	regExpSearch : /vampire devotee/i,
	name : "Vampire Devotee",
	source : [["BoH", ""]],
	scorestxt : ["+2 and +1 -or- +1 to each from Strength, Constitution, and Charisma"],
	skills : ["Persuasion", "Stealth"],
	toolProfs: [["Cook's Utensils"]],
	gold : 19,
	equipleft : [
		["Cook's Utensils", "", 8],
		["Glass Bottle", 2, 2],
		["Healer's Kit", "", 3],
		["Perfume, vials of", 1, ""],
		["Lamp", "", 1],
		["Oil, flasks of", 3, 1],
		["Waterskin", "", 5],
	],
	equipright : [
		["Fine clothes", "", 6],
	],
	feature : "Vampire Devotee",
};
BackgroundFeatureList["vampire devotee"] = {
	description : desc([
		"You were in service to a vampire or a small group of vampires lairing together. The Undead drank your blood more times than you can count. You might have served willingly, perhaps with aspirations of one day becoming a vampire yourself. Or you might have been magically charmed and retain only a few muddled memories of your time as a vampire familiar. In either case, your time in the vampire den is over.",
	]),
	source : [["BoH", ""]],
	eval : function () {
		AddFeat("Vampire's Plaything [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Vampire's Plaything [Origin]");
	},
};


BackgroundList["vampire survivor"] = {
	regExpSearch : /vampire survivor/i,
	name : "Vampire Survivor",
	source : [["BoH", ""]],
	scorestxt : ["+2 and +1 -or- +1 to each from Dexterity, Constitution, and Wisdom"],
	skills : ["Insight", "Religion"],
	toolProfs: [["Woodcarver's Tools"]],
	gold : 19,
	equipleft : [
		["Woodcarver's Tools", "", 5],
		["Crowbar", 2, 2],
		["Mirror", "", .5],
		["Tinderbox", "", 1],
		["Hooded Lantern", "", 2],
		["Oil, flasks of", 3, 1],
		["Holy water (flask)", 1, 1],
		["Waterskin", "", 5],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Reliquary Holy Symbol", "", 2],
	],
	feature : "Vampire Survivor",
};
BackgroundFeatureList["vampire survivor"] = {
	description : desc([
		"You witnessed or survived a vampire attack. You might have been directly involved in this confrontation, or perhaps you were frozen in terror by what you saw. Regardless, you remain vigilant for monster attacks and pride yourself on being ready for anything. No vampire will catch you or your allies by surprise again.",
	]),
	source : [["BoH", ""]],
	eval : function () {
		AddFeat("Vampire Hunter [Origin]");
	},
	removeeval : function () {
		RemoveFeat("Vampire Hunter [Origin]");
	},
};


//Feats
//Origin Feats
FeatsList["tireless reveler"] = {
	name : "Tireless Reveler [Origin]",
	source : [["BoH", ""]],
	type : "origin",
    limfeaname : "Tireless Reveler",
	usages: "Proficiency bonus per ",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "short rest",
	description : "When a visible ally within 60 ft expends Heroic Inspiration, I can gain Heroic Inspiration if I lack it. I can do this a number of times equal to my Proficiency Bonus and regain all expended uses when I finish a Short or Long Rest.",
	descriptionFull : [
	"When an ally you can see within 60 feet of yourself expends Heroic Inspiration, you can gain Heroic Inspiration if you lack it. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short or Long Rest.",
	],
};

FeatsList["vampire hunter"] = {
	name : "Vampire Hunter [Origin]",
	source : [["BoH", ""]],
	type : "origin",
    limfeaname : "Vampire Hunter Vitality Ward",
    usages : 1,
	recovery : "short rest",
	action : [["reaction", "Vitality Ward (Take Necro Dmg)"]],
	description : "I have Adv. on checks to escape nonmagical restraints or Grappled condition. Once per Short Rest when I take Necrotic dmg, I can use a Reaction to reduce the dmg. I roll a number of d6s equal to my Prof. Bonus and reduce Necrotic dmg taken by that total.",
	descriptionFull: desc([
    "You gain the following benefits.",
    "" + toUni("Adroit Escape") + ". You have Advantage on checks to escape from nonmagical restraints or the Grappled condition.",
    "" + toUni("Vitality Ward") + ". When you take Necrotic damage, you can take a Reaction to mitigate the damage. Roll a number of d6s equal to your Proficiency Bonus, and add them together. Reduce the Necrotic damage you take by this total. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
  ]),
};

FeatsList["vampire's plaything"] = {
	name : "Vampire's Plaything [Origin]",
	source : [["BoH", ""]],
	type : "origin",
    limfeaname : "Vampire's Plaything (Timely Retreat)",
		usages: "Proficiency bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	action : [["bonus action", "Timely Retreat (Dash/Disengage)"]],
	description : "I can create 1 Healing Potion or Antitoxin at the end of a Long Rest, if I have an empty vial. It disappears at end of next LR. I can Dash or Disengage as a Bonus Action a number of times equal to my Proficiency Bonus. I regain all uses when I finish a LR. While on the same plane as my former master, the vampire can communicate with me telepathically and I can allow them to perceive through my senses.",
	descriptionFull: desc([
    "You gain the following benefits.",
    "" + toUni("Decanting") + ". When you finish a Long Rest, you can create one Potion of Healing or an Antitoxin, as long as you have an empty vial or flask. These liquids evaporate when you finish another Long Rest.",
    "" + toUni("Timely Retreat") + ". You can take a Bonus Action to take the Dash action or the Disengage action. You can use this benefit a number of times equal to your Proficiency Bonus, and you recover all expended uses when you finish a Long Rest.",
    "" + toUni("Vampiric Connection") + ". The DM determines the fate of your former vampire master. While you and your former vampire master are on the same plane of existence, the vampire can communicate with you telepathically, and you can choose to allow the vampire to perceive through your senses.",
  ]),
};


//General Feats
FeatsList["bloodlust"] = {
	name : "Bloodlust",
	source : [["BoH", ""]],
	type : "general",
    limfeaname : "Bloodlust (Sanguine Feast)",
		usages: "Proficiency bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	description : "When I roll a Hit Point Die to regain HP, I can treat a 1 or 2 as a 3. Once per turn when I hit a Bloodied creature that isn't a Construct or Undead with an atk roll, I can expend a Hit Point Die and regain HP equal to the number rolled + my Con mod. I can do this a number of times equal to my Proficiency Bonus per Long Rest. [+1 Str, Dex or Con]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.",
		"***Powerful Recovery***. When you roll a Hit Point Die to regain Hit Points, you can treat any roll of 1 or 2 as a 3.",
		"***Sanguine Feast***. Once per turn when you hit a Bloodied creature that isn't a Construct or Undead with an attack roll, you can expend a Hit Point Die, roll it, and regain a number of Hit Points equal to the number rolled plus your Constitution modifier. You can use this feature a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
	],
	choices: ["Strength", "Dexterity", "Constitution"],
	"strength" : {
		description : "When I roll a Hit Point Die to regain HP, I can treat a 1 or 2 as a 3. Once per turn when I hit a Bloodied creature that isn't a Construct or Undead with an atk roll, I can expend a Hit Point Die and regain HP equal to the number rolled + my Con mod. I can do this a number of times equal to my Proficiency Bonus per Long Rest. [+1 Strength]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "When I roll a Hit Point Die to regain HP, I can treat a 1 or 2 as a 3. Once per turn when I hit a Bloodied creature that isn't a Construct or Undead with an atk roll, I can expend a Hit Point Die and regain HP equal to the number rolled + my Con mod. I can do this a number of times equal to my Proficiency Bonus per Long Rest. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "When I roll a Hit Point Die to regain HP, I can treat a 1 or 2 as a 3. Once per turn when I hit a Bloodied creature that isn't a Construct or Undead with an atk roll, I can expend a Hit Point Die and regain HP equal to the number rolled + my Con mod. I can do this a number of times equal to my Proficiency Bonus per Long Rest. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};

FeatsList["bomber"] = {
	name : "Bomber",
	source : [["BoH", ""]],
	type : "general",
	description : "When I use the Attack action to throw a vial or flask, I can target a creature or object within 40 ft of me. Attacking at long range doesn't impose Disadvantage on my attack rolls with Thrown weapons. [+1 Dex]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase your Dexterity by 1, to a maximum of 20.",
		"***Far Lobber***. When you use the Attack action to throw a vial or flask, you can target an object or creature you can see within 40 feet of yourself.",
		"***Long Shots***. Attacking at long range doesn't impose Disadvantage on your attack rolls with Thrown weapons.",
	],
	scores : [0, 1, 0, 0, 0, 0],
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};

FeatsList["cloying mists"] = {
	name : "Cloying Mists",
	source : [["BoH", ""]],
	type : "general",
	description : "I always have Fog Cloud prepared and can cast it once per Long Rest without a spell slot. I can also cast it using spell slots. When I cast Fog Cloud, nonmagical flames in the spell's area are extinguished and creatures other than me and my allies have 5 ft less Speed in the area. [+1 Int, Wis or Cha]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Arise, Fog***. You always have the Fog Cloud spell prepared. You can cast it without a spell slot, and you must finish a Long Rest before you can cast it in this way again. You can also cast it using spell slots you have of the appropriate level. Your spellcasting ability for the spell is the ability increased by this feat.",
		"***Grasping Mist***. Whenever you cast Fog Cloud, nonmagical flames in the spell's Sphere are extinguished, and creatures other than you and your allies have their Speed reduced by 5 feet while in the spell's Sphere.",
	],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I always have Fog Cloud prepared and can cast it once per Long Rest without a spell slot. I can also cast it using spell slots. When I cast Fog Cloud, nonmagical flames in the spell's area are extinguished and creatures other than me and my allies have 5 ft less Speed in the area. [+1 Int]",
		spellcastingAbility: 4,
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I always have Fog Cloud prepared and can cast it once per Long Rest without a spell slot. I can also cast it using spell slots. When I cast Fog Cloud, nonmagical flames in the spell's area are extinguished and creatures other than me and my allies have 5 ft less Speed in the area. [+1 Wis]",
		spellcastingAbility: 5,
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I always have Fog Cloud prepared and can cast it once per Long Rest without a spell slot. I can also cast it using spell slots. When I cast Fog Cloud, nonmagical flames in the spell's area are extinguished and creatures other than me and my allies have 5 ft less Speed in the area. [+1 Cha]",
		spellcastingAbility: 6,
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
	spellcastingBonus: [{
		name: "Cloying Mists",
		spells: ["fog cloud"],
		selection: ["fog cloud"],
		prepared : true,
	}],
};

FeatsList["delicious pain"] = {
	name : "Delicious Pain",
	source : [["BoH", ""]],
	type : "general",
    limfeaname : "Delicious Pain (Toughened Flesh)",
		usages: 1,
		recovery : "short rest",
	action : [["reaction", "Toughened Flesh (Take B/P/S Dmg"]],
	description : "Immediately after I take Bludgeoning, Piercing, or Slashing damage, I can use a Reaction to gain Resistance to Bludgeoning, Piercing, and Slashing damage until my next turn starts. I can do this once per Short or Long Rest. [+1 Any]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 20.",
		"***Toughened Flesh***. Immediately after you take Bludgeoning, Piercing, or Slashing damage, you can take a Reaction to gain Resistance to Bludgeoning, Piercing, and Slashing damage until the start of your next turn. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
	choices: ["Strength", "Dexterity", "Constitution","Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "Immediately after I take Bludgeoning, Piercing, or Slashing damage, I can use a Reaction to gain Resistance to Bludgeoning, Piercing, and Slashing damage until my next turn starts. I can do this once per Short or Long Rest. [+1 Str]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "Immediately after I take Bludgeoning, Piercing, or Slashing damage, I can use a Reaction to gain Resistance to Bludgeoning, Piercing, and Slashing damage until my next turn starts. I can do this once per Short or Long Rest. [+1 Dex]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "Immediately after I take Bludgeoning, Piercing, or Slashing damage, I can use a Reaction to gain Resistance to Bludgeoning, Piercing, and Slashing damage until my next turn starts. I can do this once per Short or Long Rest. [+1 Con]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "Immediately after I take Bludgeoning, Piercing, or Slashing damage, I can use a Reaction to gain Resistance to Bludgeoning, Piercing, and Slashing damage until my next turn starts. I can do this once per Short or Long Rest. [+1 Int]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"wisdom" : {
		description : "Immediately after I take Bludgeoning, Piercing, or Slashing damage, I can use a Reaction to gain Resistance to Bludgeoning, Piercing, and Slashing damage until my next turn starts. I can do this once per Short or Long Rest. [+1 Wis]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "Immediately after I take Bludgeoning, Piercing, or Slashing damage, I can use a Reaction to gain Resistance to Bludgeoning, Piercing, and Slashing damage until my next turn starts. I can do this once per Short or Long Rest. [+1 Cha]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};

FeatsList["light bringer"] = {
	name : "Light Bringer",
	source : [["BoH", ""]],
	type : "general",
    limfeaname : "Light Bringer (Solar Luminance)",
		usages: 1,
		recovery : "long rest",
	extraLimitedFeatures : [{
		name : "Light Bringer (Sun's Healing)",
		usages : 1,
		recovery : "long rest",
	}],
	action : [["bonus action", "Sun's Healing (in Sunlight)"]],
	description : "I learn the Light cantrip or another Cleric cantrip I choose if already known. Once per Long Rest when I cast Light, I can make the spell's light Sunlight. As a Bonus Action when in Sunlight, I can expend 1 Hit Point Die and regain HP equal to the roll. I can do this once per Long Rest. [+1 Int, Wis or Cha]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Sacred Magic***. You learn the Light spell and can cast it without Material components. If you already know that cantrip, you learn a different Cleric cantrip of your choice. The spell's spellcasting ability is the ability increased by this feat.",
		"***Solar Luminance***. When you cast Light, you can have the light from the spell be sunlight. Once you use this benefit, you can't use it again until you finish a Long Rest.",
		"***Sun's Healing***. As a Bonus Action while within sunlight, you can expend one of your Hit Point Dice, roll the die, and regain a number of Hit Points equal to the roll. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I learn the Light cantrip or another Cleric cantrip I choose if already known. Once per Long Rest when I cast Light, I can make the spell's light Sunlight. As a Bonus Action when in Sunlight, I can expend 1 Hit Point Die and regain HP equal to the roll. I can do this once per Long Rest. [+1 Int]",
		spellcastingAbility: 4,
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I learn the Light cantrip or another Cleric cantrip I choose if already known. Once per Long Rest when I cast Light, I can make the spell's light Sunlight. As a Bonus Action when in Sunlight, I can expend 1 Hit Point Die and regain HP equal to the roll. I can do this once per Long Rest. [+1 Wis]",
		spellcastingAbility: 5,
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I learn the Light cantrip or another Cleric cantrip I choose if already known. Once per Long Rest when I cast Light, I can make the spell's light Sunlight. As a Bonus Action when in Sunlight, I can expend 1 Hit Point Die and regain HP equal to the roll. I can do this once per Long Rest. [+1 Cha]",
		spellcastingAbility: 6,
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
	spellcastingBonus: [{
		name: "Light Bringer",
		spells: ["light"],
		selection: ["light"],
		firstCol: "atwill"
	}],
};

FeatsList["love bites"] = {
	name : "Love Bites",
	source : [["BoH", ""]],
	type : "general",
    limfeaname : "Love Bites (Endearing Pain)",
		usages: 1,
		recovery : "short rest",
	action : [["bonus action", "Endearing Pain (On Melee Wpn/UA hit)"]],
	description : "Immediately after I dmg a creature with a Melee weapon or Unarmed Strike, I can use a Bonus Action to give it the Charmed condition. This lasts until my next turn or until I or my allies damage it. I can do this once per Rest. [+1 Any]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 20.",
		"***Endearing Pain***. Immediately after you damage a creature with a Melee weapon or an Unarmed Strike, you can take a Bonus Action to give the target the Charmed condition until the start of your next turn or until you or your allies damage it. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
	choices: ["Strength", "Dexterity", "Constitution","Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "Immediately after I dmg a creature with a Melee weapon or Unarmed Strike, I can use a Bonus Action to give it the Charmed condition. This lasts until my next turn or until I or my allies damage it. I can do this once per Rest. [+1 Str]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "Immediately after I dmg a creature with a Melee weapon or Unarmed Strike, I can use a Bonus Action to give it the Charmed condition. This lasts until my next turn or until I or my allies damage it. I can do this once per Rest. [+1 Dex]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "Immediately after I dmg a creature with a Melee weapon or Unarmed Strike, I can use a Bonus Action to give it the Charmed condition. This lasts until my next turn or until I or my allies damage it. I can do this once per Rest. [+1 Con]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "Immediately after I dmg a creature with a Melee weapon or Unarmed Strike, I can use a Bonus Action to give it the Charmed condition. This lasts until my next turn or until I or my allies damage it. I can do this once per Rest. [+1 Int]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"wisdom" : {
		description : "Immediately after I dmg a creature with a Melee weapon or Unarmed Strike, I can use a Bonus Action to give it the Charmed condition. This lasts until my next turn or until I or my allies damage it. I can do this once per Rest. [+1 Wis]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "Immediately after I dmg a creature with a Melee weapon or Unarmed Strike, I can use a Bonus Action to give it the Charmed condition. This lasts until my next turn or until I or my allies damage it. I can do this once per Rest. [+1 Cha]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};

FeatsList["putrefy"] = {
	name : "Putrefy",
	source : [["BoH", ""]],
	type : "general",
    limfeaname : "Putrefy (Necrosis)",
		usages: 1,
		recovery : "short rest",
	description : "When I make a damage roll that does Necrotic damage, I can give one creature taking that damage the Poisoned condition until the start of my next turn. I can do this once per Rest. [+1 Any]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 20.",
		"***Necrosis***. When you make a damage roll that deals Necrotic damage, you can cause one creature taking that damage to have the Poisoned condition until the start of your next turn. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
	choices: ["Strength", "Dexterity", "Constitution","Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "When I make a damage roll that does Necrotic damage, I can give one creature taking that damage the Poisoned condition until the start of my next turn. I can do this once per Rest. [+1 Str]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "When I make a damage roll that does Necrotic damage, I can give one creature taking that damage the Poisoned condition until the start of my next turn. I can do this once per Rest. [+1 Dex]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "When I make a damage roll that does Necrotic damage, I can give one creature taking that damage the Poisoned condition until the start of my next turn. I can do this once per Rest. [+1 Con]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "When I make a damage roll that does Necrotic damage, I can give one creature taking that damage the Poisoned condition until the start of my next turn. I can do this once per Rest. [+1 Int]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"wisdom" : {
		description : "When I make a damage roll that does Necrotic damage, I can give one creature taking that damage the Poisoned condition until the start of my next turn. I can do this once per Rest. [+1 Wis]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "When I make a damage roll that does Necrotic damage, I can give one creature taking that damage the Poisoned condition until the start of my next turn. I can do this once per Rest. [+1 Cha]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};

FeatsList["rebuke"] = {
	name : "Rebuke",
	source : [["BoH", ""]],
	type : "general",
    limfeaname : "Rebuke (Radiant Strike)",
		usages: 1,
		recovery : "short rest",
	description : "When I make a damage roll that does Radiant damage, I can give one Huge or smaller creature taking that damage the Prone condition. I can do this once per Rest. [+1 Any]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 20.",
		"***Radiant Strike***. When you make a damage roll that deals Radiant damage, you can cause one Huge or smaller creature taking the damage to have the Prone condition. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
	choices: ["Strength", "Dexterity", "Constitution","Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "When I make a damage roll that does Radiant damage, I can give one Huge or smaller creature taking that damage the Prone condition. I can do this once per Rest. [+1 Str]",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "When I make a damage roll that does Radiant damage, I can give one Huge or smaller creature taking that damage the Prone condition. I can do this once per Rest. [+1 Dex]",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "When I make a damage roll that does Radiant damage, I can give one Huge or smaller creature taking that damage the Prone condition. I can do this once per Rest. [+1 Con]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "When I make a damage roll that does Radiant damage, I can give one Huge or smaller creature taking that damage the Prone condition. I can do this once per Rest. [+1 Int]",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"wisdom" : {
		description : "When I make a damage roll that does Radiant damage, I can give one Huge or smaller creature taking that damage the Prone condition. I can do this once per Rest. [+1 Wis]",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "When I make a damage roll that does Radiant damage, I can give one Huge or smaller creature taking that damage the Prone condition. I can do this once per Rest. [+1 Cha]",
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};

FeatsList["treacherous allure"] = {
	name : "Treacherous Allure",
	source : [["BoH", ""]],
	type : "general",
	description : "I always have Charm Person prepared and can cast it without a spell slot once per Long Rest. I can also cast it with spell slots. I have Advantage on attack rolls against creatures with the Charmed condition. [+1 Int, Wis or Cha]",
	descriptionFull : [
		"You gain the following benefits:",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Enchanting Presence***. You always have the Charm Person spell prepared. You can cast it without a spell slot, and you must finish a Long Rest before you can cast it in this way again. You can also cast it using spell slots you have of the appropriate level. Your spellcasting ability for the spell is the ability increased by this feat.",
		"***Inevitable Betrayal***. You have Advantage on attack rolls against creatures with the Charmed condition.",
	],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "I always have Charm Person prepared and can cast it without a spell slot once per Long Rest. I can also cast it with spell slots. I have Advantage on attack rolls against creatures with the Charmed condition. [+1 Int]",
		spellcastingAbility: 4,
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I always have Charm Person prepared and can cast it without a spell slot once per Long Rest. I can also cast it with spell slots. I have Advantage on attack rolls against creatures with the Charmed condition. [+1 Wis]",
		spellcastingAbility: 5,
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I always have Charm Person prepared and can cast it without a spell slot once per Long Rest. I can also cast it with spell slots. I have Advantage on attack rolls against creatures with the Charmed condition. [+1 Cha]",
		spellcastingAbility: 6,
		scores : [0, 0, 0, 0, 0, 1],
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
	spellcastingBonus: [{
		name: "Treacherous Allure",
		spells: ["charm person"],
		selection: ["charm person"],
		prepared : true,
	}],
};

FeatsList["vampire touched"] = {
	name: "Vampire Touched",
	regExpSearch: /^(?=.*vampire)(?=.*touched).*$/i,
	source : [["BoH", ""]],
	type : "general",
	spellcastingBonus: [{
		name: "Vampire Touched",
		spells: ["spider climb"],
		selection: ["spider Climb"],
		prepared : true,
	}, {
		name: "1st-level Ench/Illus spell",
		'class': "any",
		school: ["Ench", "Illus"],
		level: [1, 1],
		prepared : true,
	}],
	allowUpCasting: true,
	description: "I learn Spider Climb and one 1st-level spell from the Enchantment or Illusion school. I can cast each spell once per Long Rest without a spell slot, but Spider Climb can only target me. I can also cast both spells normally with spell slots. [+1 Int, Wis or Cha]",  
	descriptionFull: desc([
    "You gain the following benefits",
    "***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
    "***Vampire Magic***. Choose one level 1 spell from the Enchantment or Illusion school of magic. You always have that spell and the Spider Climb spell prepared. You can cast each of these spells without expending a spell slot, but when you cast Spider Climb this way, you must target yourself, and you must finish a Long Rest before you can cast each spell in this way again. You can also cast either spell using spell slots you have of the appropriate level. Your spellcasting ability for the spells is the ability increased by this feat.",
  ]),  
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description: "I learn Spider Climb and one 1st-level spell from the Enchantment or Illusion school. I can cast each spell once per Long Rest without a spell slot, but Spider Climb can only target me. I can also cast both spells normally with spell slots. [+1 Int]",
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0]
	},
	"wisdom": {
		description: "I learn Spider Climb and one 1st-level spell from the Enchantment or Illusion school. I can cast each spell once per Long Rest without a spell slot, but Spider Climb can only target me. I can also cast both spells normally with spell slots. [+1 Wis]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0]
	},
	"charisma": {
		description: "I learn Spider Climb and one 1st-level spell from the Enchantment or Illusion school. I can cast each spell once per Long Rest without a spell slot, but Spider Climb can only target me. I can also cast both spells normally with spell slots. [+1 Cha]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1]
	},
	prerequisite : "Level 4+",
	prereqeval : function (v) {
		return v.characterLevel >= 4;
	},
};



//Epic Boon Feats
FeatsList["boon of blazing dawn"] = {
	name : "Boon of Blazing Dawn",
	source : [["BoH", ""]],
	type : "epic boon",
	savetxt: {text: "Immune to Radiant damage"},
	description : "I'm immune to Radiant dmg. When I hit a creature with a weapon atk, the damage can be Radiant or the normal damage type. Once per turn when I hit with an atk that deals Radiant dmg, I can emit sunlight as Bright Light in a 30 ft radius and another 30 ft Dim Light until my next turn starts. [+1 Any]",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase one ability score of your choice by 1, to a Maximum of 30.",
		"***Beloved of the Sun***. You have Immunity to Radiant damage.",
		"***Blazing Strike***. When you hit a creature with a weapon attack, the damage can be Radiant or the weapon's normal damage type (your choice).",
		"***Burst of Sunlight***. Once per turn when you hit a creature with an attack that deals Radiant damage, you can emit Bright Light in a 30-foot radius from yourself and Dim Light for an additional 30 feet until the start of your next turn. This light is sunlight.",
	],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		name : "Boon of Blazing Dawn - STR",
		description : "I'm immune to Radiant dmg. When I hit a creature with a weapon atk, the damage can be Radiant or the normal damage type. Once per turn when I hit with an atk that deals Radiant dmg, I can emit sunlight as Bright Light in a 30 ft radius and another 30 ft Dim Light until my next turn starts. [+1 Str]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		name : "Boon of Blazing Dawn - DEX",
		description : "I'm immune to Radiant dmg. When I hit a creature with a weapon atk, the damage can be Radiant or the normal damage type. Once per turn when I hit with an atk that deals Radiant dmg, I can emit sunlight as Bright Light in a 30 ft radius and another 30 ft Dim Light until my next turn starts. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [0, 30, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of Blazing Dawn - CON",
		description : "I'm immune to Radiant dmg. When I hit a creature with a weapon atk, the damage can be Radiant or the normal damage type. Once per turn when I hit with an atk that deals Radiant dmg, I can emit sunlight as Bright Light in a 30 ft radius and another 30 ft Dim Light until my next turn starts. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"intelligence" : {
		name : "Boon of Blazing Dawn - INT",
		description : "I'm immune to Radiant dmg. When I hit a creature with a weapon atk, the damage can be Radiant or the normal damage type. Once per turn when I hit with an atk that deals Radiant dmg, I can emit sunlight as Bright Light in a 30 ft radius and another 30 ft Dim Light until my next turn starts. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Blazing Dawn - WIS",
		description : "I'm immune to Radiant dmg. When I hit a creature with a weapon atk, the damage can be Radiant or the normal damage type. Once per turn when I hit with an atk that deals Radiant dmg, I can emit sunlight as Bright Light in a 30 ft radius and another 30 ft Dim Light until my next turn starts. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Blazing Dawn - CHA",
		description : "I'm immune to Radiant dmg. When I hit a creature with a weapon atk, the damage can be Radiant or the normal damage type. Once per turn when I hit with an atk that deals Radiant dmg, I can emit sunlight as Bright Light in a 30 ft radius and another 30 ft Dim Light until my next turn starts. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};

FeatsList["boon of looming shadows"] = {
	name : "Boon of Looming Shadows",
	source : [["BoH", ""]],
	type : "epic boon",
	action : [["bonus action", "Dodge"]],
	description : "When I take the Attack action, the reach for my Melee weapon attacks increases by 10 ft until my turn ends. I can also take the Dodge action as a Bonus Action. [+1 Any]",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase one ability score of your choice by 1, to a Maximum of 30.",
		"***Beloved of the Sun***. When you take the Attack action, your reach for your Melee weapon attacks increases by 10 feet until the end of your turn.",
		"***Dancing Silhouette***. You can take the Dodge action as a Bonus Action.",
	],
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		name : "Boon of Looming Shadows - STR",
		description : "When I take the Attack action, the reach for my Melee weapon attacks increases by 10 ft until my turn ends. I can also take the Dodge action as a Bonus Action. [+1 Str]",
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		name : "Boon of Looming Shadows - DEX",
		description : "When I take the Attack action, the reach for my Melee weapon attacks increases by 10 ft until my turn ends. I can also take the Dodge action as a Bonus Action. [+1 Dexterity]",
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [0, 30, 0, 0, 0, 0],
	},
	"constitution" : {
		name : "Boon of Looming Shadows - CON",
		description : "When I take the Attack action, the reach for my Melee weapon attacks increases by 10 ft until my turn ends. I can also take the Dodge action as a Bonus Action. [+1 Constitution]",
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [0, 0, 30, 0, 0, 0],
	},
	"intelligence" : {
		name : "Boon of Looming Shadows - INT",
		description : "When I take the Attack action, the reach for my Melee weapon attacks increases by 10 ft until my turn ends. I can also take the Dodge action as a Bonus Action. [+1 Intelligence]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Looming Shadows - WIS",
		description : "When I take the Attack action, the reach for my Melee weapon attacks increases by 10 ft until my turn ends. I can also take the Dodge action as a Bonus Action. [+1 Wisdom]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Looming Shadows - CHA",
		description : "When I take the Attack action, the reach for my Melee weapon attacks increases by 10 ft until my turn ends. I can also take the Dodge action as a Bonus Action. [+1 Charisma]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
};

FeatsList["boon of misty escape"] = {
	name : "Boon of Misty Escape",
	source : [["BoH", ""]],
	type : "epic boon",
	description : "Once per Long Rest when I drop to 0 HP but I'm not killed outright, I can drop to 1 HP instead and cast Gaseous Form on myself without a spell slot or action. My Fly Speed is 20 ft and I regain 10 HP per turn for the spell's duration. [+1 Int, Wis, or Cha]",
	descriptionFull : [
		"You gain the following benefits",
		"***Ability Score Improvement***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30.",
		"***Gaseous Form***. If you drop to 0 Hit Points but aren't killed outright, you can instead drop to 1 Hit Point and cast Gaseous Form without expending a spell slot (no action required). When you cast this spell this way, you can target only yourself, your Fly Speed is 20 feet, and you regain 10 Hit Points at the start of each of your turns for the spell's duration. The spell's spellcasting ability is the ability increased by this feat. Once you use this benefit, you can't do so again until you finish a Long Rest.",
	],
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		name : "Boon of Misty Escape - INT",
		description : "Once per Long Rest when I drop to 0 HP but I'm not killed outright, I can drop to 1 HP instead and cast Gaseous Form on myself without a spell slot or action. My Fly Speed is 20 ft and I regain 10 HP per turn for the spell's duration. [+1 Int]",
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [0, 0, 0, 30, 0, 0],
	},
	"wisdom" : {
		name : "Boon of Misty Escape - WIS",
		description : "Once per Long Rest when I drop to 0 HP but I'm not killed outright, I can drop to 1 HP instead and cast Gaseous Form on myself without a spell slot or action. My Fly Speed is 20 ft and I regain 10 HP per turn for the spell's duration. [+1 Wis]",
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [0, 0, 0, 0, 30, 0],
	},
	"charisma" : {
		name : "Boon of Misty Escape - CHA",
		description : "Once per Long Rest when I drop to 0 HP but I'm not killed outright, I can drop to 1 HP instead and cast Gaseous Form on myself without a spell slot or action. My Fly Speed is 20 ft and I regain 10 HP per turn for the spell's duration. [+1 Cha]",
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [0, 0, 0, 0, 0, 30],
	},
	prerequisite : "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
	spellcastingBonus : [{
		name: "Boon of Misty Escape",
		spells: ["gaseous form"],
		selection: ["gaseous form"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"gaseous form" : {
			description : "Become mist-fly 20ft, resist B/P/S dmg, adv Str/Dex/Con saves; 1 a/0 hp revert; heal 10 hp/turn",
			range : "Self",
			changes : "Once per LR when I drop to 0 HP, I can cast Gaseous Form on myself with extra fly speed and healing."
		}
	},
};

//Species
legacyRaceRefactor("dhampir", {
	regExpSearch : /dhampir/i,
	name : "Dhampir",
	sortname : "Dhampir",
	plural : "Dhampirs",
	source : [["BoH", ""]],
	size : 3,
	replaces: ["dhampir"],
	dmgres : ["Necrotic"],
	speed : {
		walk : { spd : 35, enc : 25 },
		climb : { spd : 35, enc : 25 }
	},
	trait : "Dhampir (BoH)" + (typePF ? "\n " : "\t") +
	"\u2022 Trace of Undeath: I have Resistance to Necrotic damage." +
	"\n \u2022 Spider Climb: I have a Climb Speed equal to my Speed. When I reach level 3, I can also move up, down, and across vertical surfaces and on ceilings with my hands free." +
	"\n \u2022 Vampiric Bite: When I hit with the dmg option of an Unarmed Strike, I can bite with my fangs. My Proficiency Bonus per long rest, if the creature wasn't a Construct or Undead, I can also empower myself. I either regain HP or get a bonus to my next ability check or attack roll. Both equal the Piercing damage dealt.",
	vision : [["Darkvision", 60]],
	weaponOptions : [{
		regExpSearch : /^(?=.*vampiric)(?=.*bite).*$/i,
		name : "Vampiric Bite",
		source : [["BoH", ""]],
		ability : 1,
		type : "Simple",
		damage : [1, 4, "piercing"],
		range : "Melee",
		description : "Add Con mod to damage; Can empower myself on hit to non Construct/Undead",
		isAlwaysProf : true,
		abilitytodamage : false,
		monkweapon : true,
		selectNow : true
	}],
	extraLimitedFeatures : [{
		name : "Vampiric Bite",
		additional : "empower myself",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery : "long rest"
	}],
});		

