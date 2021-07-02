/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). Additionally, due to the length of some descriptions, I recommend using auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will likely run out of space, even with the abbreviations.
*/

/*  Subject: New AL Items
    Effect:	This script adds the special new items, armor, and weapons found in AL modules and Guild Adept adventures to the MPMB sheet. It also includes Blessings & some Story Awards with mechanical effects. This is not a complete list since I do not have every published adventure, but it's a start.*/
	
	//Complete: S1-S5
	
var iFileName = "AL Special Items.js";
RequiredSheetVersion(13);

// Define the source
SourceList["AL"] = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};

//AL flavored items
MagicItemsList["AL Blessings/Story Awards"] = {
		name : "al blessings/story awards",
		source : ["AL"],
		type : "blessing",
		rarity : "unique",
		magicItemTable : "?",
		allowDuplicates : true,
	choices : ["Blessing of Protection (AL WPM)","Blessing of Protection (DDEP6-3)"],
	"blessing of protection (al wpm)" : {
		attunement : false,
		description : "Your reward for returning the three legendary weapons of White Plume Mountain, this blessing grants a +1 bonus to AC and saving throws.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
	"blessing of protection (ddep6-3)" : {	
		attunement : false,
		description : "Your reward from SEER for defeating the drow priestess Kiaransalee and her undead forces, this blessing grants a +1 bonus to AC and saving throws. While under its effect, your eyes have developed small flecks of brilliant gold, and your senses seem just a little bit sharper.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
}

MagicItemsList["eye of xxiphu (ddal5-19)"] = {
	name : "Eye of Xxiphu (DDAL5-19)",
	source : ["AL"],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "?",
	attunement : true,
	description : "The Eye of Xxiphu bestows insight into the true nature of aboleths. The attuned possessor of the Eye gains telepathy out to 120 ft, & may cover themselves in coat of mucous that lets them breathe underwater as well as on land. The petrified orb is large & heavy, but doesn't need to be held to use its powers. Aboleths have disadv. when attacking owner, & owner has adv. on knowledge-based ability checks about aboleths & the Far Realms when not in combat.",
	descriptionFull : "While not a truly intelligent item, the Eye of Xxiphu bestows terrifying insight into the true nature of the nightmarish aboleths. The attuned possessor of the Eye gains telepathy out to a range of 120 feet, and may cover themselves in coat of mucous that allows them to breathe underwater as well as on land. The petrified orb is large and heavy, but does not need to be held in order to use its powers. Additionally, aboleths have disadvantage when attacking the owner of the Eye, and the owner has advantage on knowledge-based ability checks about aboleths and the Far Realm when they are not in combat.",
}

MagicItemsList["nettle (ddep4)"] = {
	name : "Nettle (DDEP4)",
	source : ["AL"],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	prerequisite : "Requires attunement by a creature of non-lawful alignment",
	prereqeval : function(v) { return !(/lawful/i).test(What("Alignment")); },
	description : "This sentient +2 hand crossbow looks to have seen better times. The wood is cracked and splintered and the string is heavily-frayed. A large, blue feather hangs from the handgrip alongside a couple green, glass baubles. The crossbow whispers warnings, granting a +2 bonus to initiative if its bearer isn't incapacitated. Sentience: Chaotic Neutral. Hearing & Darkvision to 120 ft. Speaks Common & Halfling.",
	descriptionFull : "This hand crossbow looks to have seen better times. The wood is cracked and splintered and the string is heavily-frayed. A large, blue feather hangs from the handgrip alongside a couple green, glass baubles. The crossbow whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   " + toUni("Sentience") + ": Nettle is a sentient chaotic neutral weapon with an Intelligence of 15, a Wisdom of 10 and a Charisma of 14. It has has hearing and darkvision out to a range of 120 feet. Nettle speaks Common and Halfling.\n   " + toUni("Personality") + ": Nettle is greedy and impetuous, and prefers that its wielder share these ideals. It demands to be better taken care of than its previous owners did. If its bearer is lawfully-aligned, or if its bearer does not spend at least an hour each day tending to it (polishing, applying resin to the string, etc.), Nettle denies its bonuses to attack and damage rolls and initiative checks. It also shouts out insults to those nearby, imposing disadvantage on any Charisma (Deception or Persuasion) checks or Dexterity (Stealth) check that its wielder makes to move silently.",
	addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	weaponsAdd : ["Nettle, Hand Crossbow +2"],
		weaponOptions : {
		baseWeapon : "hand crossbow",
		regExpSearch : /^(?=.*hand)(?=.*crossbow)(?=.*nettle).*$/i,
		name : "Nettle, Hand Crossbow +2",
				},
}