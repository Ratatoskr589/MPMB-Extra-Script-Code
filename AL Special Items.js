/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). Additionally, due to the length of some descriptions, I recommend auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will run off the page.
*/

/*  Subject: New AL Items
    Effect:	This script adds the new items, armor, and weapons found in AL modules and Guild Adept adventures to the MPMB sheet. It also includes some Story Awards that grant blessings, boons, or other mechanical effects. This is not a complete list, but it's a start.*/
	
	//Complete: S0-S9, DDCE, Holiday Events, Guild Adept
	//In progress: S10 (Through 10-10), DC-POA, DRW, 
	
var iFileName = "AL Special Items.js";
RequiredSheetVersion(13);

// Define the source

SourceList.AL = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};

SourceList.DDCE = { //All items in this category count as event awards
    name : "D&D Celebration",
    abbreviation : "DDCE",
    group : "Adventurers League",
    date : "2020/09/19 - Yearly"
};

SourceList["AL:LN"] = {  //Liar's Night and Wandering Monsters
    name : "AL Holiday Events - Liar's Night",
    abbreviation : "AL:LN",
    group : "Adventurers League",
    date : "Various"
};

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

SourceList["AL:RMH"] = {  //Mist Hunters Alternate Campaign
	name : "Mist Hunters",
	abbreviation : "AL:RMH",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};


//AL Special Rewards & Story Awards (ones with major mechanical effects)
MagicItemsList["al story awards"] = {
		name : "AL Story Awards",
		description : "Special AL rewards available from conventions, epics and adventure modules. This only includes a small slice of the total awards available, primarily those with boons, blessings, or other major mechanical effects. This selection also assumes that you have spent any Downtime or other cost required to receive the reward.",
		type : "story award",
		rarity : "unique",
		allowDuplicates : true,
	choices : ["Angry Alley Cat (FC)","Blessing of Protection (AL WPM)","Blessing of Protection (DDEP6-3)","Chardalyn Poisoning (DDAL10-9)","Dreamwalker (DDAL5-11)","Flying Snake (DDEP7-1)","Gratitude of Brightstar Moonsilver (CCC-BMG-37 HULB3-1)","Gratitude of Hartkiller (DDAL5-17)","Hall of Honor (DDAL6-3)","Hall of Mirth (DDAL6-3)","Hall of Omens (DDAL6-3)(Diviner)","Hall of Omens (DDAL6-3)(Non-Diviner)","Lich Slayer (DDEP7-2)","Lord of the Gorge (DDAL0-11F)","Nature of the Weave (CCC-ROZK-1-2) (Arcana Prof)","Nature of the Weave (CCC-ROZK-1-2) (Arcana Expert)","Plague Buster (DDEP7-2)","The Qualith Experience (DDIA-VOLO)","Quasit's Essence (DDAL5-8)","Student of Stone (DDAL5-11)","Szass Tam's Arcane Essence (DDEP0-1)","Szass Tam's Planar Essence (DDEP0-1)","Thanks of Ilmater - Immortality","Thanks of Ilmater - Planar Travel","Tyr's Blessing of Command (CCC-BMG-23 PHLAN2-2)","Tyr's Blessing of Luck (CCC-BMG-24 PHLAN2-3)","Tyr's Blessing of the Mind (CCC-BMG-22 PHLAN2-1)","Uku the Spider Boy (DDEP7-1)"],
	"angry alley cat (fc)" : {
		name : "Angry Alley Cat (FC)",
		attunement : false,
		source : [["AL:FC","2018"]],
		description : "A battle scarred, one-eared angry tomcat that reeks of city has taken a liking to you. 'Like' is a generous term as it spends its free time soiling your footwear and caterwauling. Once per adventure, if you would be arrested by the city watch, the angry cat descends like an avenging angel, distracting the watch enough for you to escape.",
	},
	"blessing of protection (al wpm)" : {
		name : "Blessing of Protection (AL WPM)",
		attunement : false,
		source : [["AL","TYP"]],
		description : "Your reward for returning the three legendary weapons of White Plume Mountain to their rightful owners, this blessing grants a +1 bonus to AC and saving throws.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
	"blessing of protection (ddep6-3)" : {	
		name : "Blessing of Protection (DDEP6-3)",
		source : [["AL","S6"]],
		attunement : false,
		description : "Your reward from SEER for defeating the drow priestess Kiaransalee and her undead forces, this blessing grants a +1 bonus to AC and saving throws. While under its effect, your eyes have developed small flecks of brilliant gold, and your senses seem just a little bit sharper.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
	"chardalyn poisoning (ddal10-9)" : {	
		name : "Chardalyn Poisoning (DDAL10-9)",
		source : [["AL","S10"]],
		description : "Characters who keep any of the chardalyn find the substance’s affinity for magic affecting them in inopportune ways. So long as the character retains the chardalyn (no matter the amount), they have disadvantage on saving throws against spells, and spell attacks against them have advantage.",
		savetxt : { text : ["Disadv. on saves vs spells. Spell atks against you have adv."] }
	},
	"dreamwalker (ddal5-11)" : {
		name : "Dreamwalker (DDAL5-11)",
		source : [["AL","S5"]],
		description : "Your meditations have granted you the gift of foresight. Upon receiving this story award, roll a d20 & record the number rolled. Once (before the roll), you can replace any atk roll, saving throw, or ability check made by you or a creature you can see with the number you rolled. Once you have used your die this way, remove the reward. You may regain this story award by spending another 25 DT.",
		descriptionFull : "Kryshilir has taught you to look beyond the veil of the world and navigate your dreams. By spending 25 downtime days, you travel to the Seven Stones and meditate under Kryshilir’s whispered guidance. Upon completing this downtime activity, you gain the Dreamwalker story award (below)\n   " + toUni("Dreamwalker") + ". Your meditations have granted you the gift of foresight. Upon receiving this story award, roll a d20 and record the number rolled. Once, you can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with the number you rolled. You must choose to do so before the roll. Once you have used this story award in this fashion, remove it. This story award may be earned again as often as you like, but you must complete the Dreamwalker downtime activity (above) each time and may not do so again until you no longer possess this story award.",
		limfeaname : "Dreamwalker",
		usages : 1,
		recovery : "25 DT",
		additional : "d20",
	},
	"flying snake (ddep7-1)" : {
		name : "Flying Snake (DDEP7-1)",
		source : [["AL","S7"]],
		description : "You’ve unmasked the merchant prince Ifan Talro’aas a criminal. The Emerald Enclave is sitting on the information, choosing to monitor the prince rather than show their hand. As a reward, they’ve given you a trained flying snake to serve as your messenger. Once per adventure, you can attach a message to the flying snake and send it to one of your allies. This works as an animal messenger spell, but the message can only be sent to people you know.",
		limfeaname : "Flying Snake",
		usages : 1,
		recovery : "mod",
		spellcastingBonus : {
			name : "Once per module",
			spells : ["animal messenger"],
			selection : ["animal messenger"],
			firstCol : "1"
			},
		spellChanges : {
				"animal messenger" : {
					description : "The flying snake delivers a 25 word message up to 50 miles away to chosen location and recipient",
					changes : "The message can only be sent to people you know."
				}
			}
	},
	"gratitude of brightstar moonsilver (ccc-bmg-37 hulb3-1)" : {	
		name : "Gratitude of Brightstar Moonsilver (CCC-BMG-37 HULB3-1)",
		source : [["AL","CCC"]],
		description : "For rescuing Brightstar, he is grateful and will serve as a mount for lawful good adventurers for three adventures. His stats are the standard unicorn stats found on page 294 of the Monster Manual.",
		limfeaname : "Unicorn Mount (Brightstar Moonsilver)",
		usages : 3,
		recovery : "never",
		creaturesAdd : [["Unicorn (Brightstar Moonsilver)", true]],
		creatureOptions : [{
			name : "Unicorn (Brightstar Moonsilver)",
			nameAlt : ["Unicorn"],
			source : [["M", 294] ["AL","CCC"]],
			size : 2, //Large,
			type : "Celestial",
			companion : "mount",
			alignment : "Lawful Good",
			ac : 12,
			hp : 67,
			hd : [9, 10],
			speed : "50 ft",
			scores : [18, 14, 15, 11, 17, 16],
			senses : "Darkvision 60ft",
			passivePerception : 13,
			damage_immunities : "poison",
			condition_immunities : "charmed, paralyzed, poisoned",
			languages : "Celestial, Elvish, Sylvan, Telepathy 60 ft.",
			challengeRating : "5",
			proficiencyBonus : 3,
			attacksAction : 2,
				eval : function(prefix, lvl) {
				AddString(prefix + 'Cnote.Left', 'Legendary Actions:\n \u2022 The Unicorn can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another turn. The Unicorn regains spent legendary actions at the start of its turn.\n \u2022 Hooves: The unicorn makes one attack with its hooves.\n \u2022 Shimmering Shield (Costs 2 Actions): The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of its next turn.\n \u2022 Heal Self (Costs 3 Actions): The unicorn magically regains 11 (2d8 + 2) hit points.', true);
						},
				removeeval : function(prefix, lvl) {
				RemoveString(prefix + 'Cnote.Left', 'Legendary Actions:\n   The Unicorn can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another turn. The Unicorn regains spent legendary actions at the start of its turn.\n \u2022 Hooves: The unicorn makes one attack with its hooves.\n \u2022 Shimmering Shield (Costs 2 Actions): The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of its next turn.\n \u2022 Heal Self (Costs 3 Actions): The unicorn magically regains 11 (2d8 + 2) hit points.', true);
						},
			attacks : [{
				name : "Hooves",
				ability : 1,
				damage : [2, 6, "bludgeoning"],
				range : "Melee (5 ft)",
				description : "The unicorn makes two attacks: one with its hooves and one with its horn."
						}, {
				name : "Horn",
				ability : 1,
				damage : [1, 8, "piercing"],
				range : "Melee (5 ft)",
				description : "The unicorn makes two attacks: one with its hooves and one with its horn. If move at least 20 ft, see charge trait.",
						}],
			traits : [{
				name : "Healing Touch (3/Day)",
				description : "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
					}, {
				name : "Teleport (1/Day)",
				description : "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
									}, {
				name : "Charge",
				description : "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
									}, {
				name : "Magic Resistance",
				description : "The unicorn has advantage on saving throws against spells and other magical effects."
									}, {
				name : "Innate Spellcasting",
				description : "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components: At will: detect evil and good, druidcraft, pass without trace; 1/day each: calm emotions, dispel evil and good, entangle"
				}]
			}]
	},
	"gratitude of hartkiller (ddal5-17)" : {	
		name : "Gratitude of Hartkiller (DDAL5-17)",
		source : [["AL","S5"]],
		description : "In spreading the truth about the events that unfolded in Hartsvale, you find yourself blessed by the All-Father and gain temporary use of the Lucky feat, except that any expended luck points don’t return. Once all three points have been spent, remove this story award.",
		limfeaname : "Luck Points (Hartkiller)",
		usages : 3,
		recovery : "never",
	},
	"hall of honor (ddal6-3)" : {
		name : "Hall of Honor (DDAL6-3)",
		source : [["AL","S6"]],
		description : "Characters can spend time in the hall of honor learning about the deeds of the ancient Ostorian Honor Guard. A character who spends 25 downtime days will gain advantage on checks in dealings with true giants (Cloud, Hill, Fire, Stone, or Storm) when the subject of the Ostorian Honor Guard can be included in the conversation.",
	},
	"hall of mirth (ddal6-3)" : {
		name : "Hall of Mirth (DDAL6-3)",
		source : [["AL","S6"]],
		description : "Characters can spend time in the Hall of Mirth learning about giant kind, ancient Ostoria, and the giant language. At the conclusion of this adventure, a character may choose to learn the giant language for 50 downtime days. In addition, a character may choose to learn about Ostoria for another 50 downtime days, giving them advantage on any future checks regarding giants or Ostoria.",
		languageProfs : ["Giant"]
	},
	"hall of omens (ddal6-3)(diviner)" : {	
		name : "Hall of Omens (DDAL6-3)",
		source : [["AL","S6"]],
		description : "Characters can spend time in the Hall of Omens learning about signs and portents. A wizard of the school of divination may spend 200 downtime days to gain 1 additional portent die.",
		limfeaname : "Additional Portent Die (d20)", 
		usages : 1,
		recovery : "long rest"
	},
	"hall of omens (ddal6-3)(non-diviner)" : {	
		name : "Hall of Omens (DDAL6-3)",
		source : [["AL","S6"]],
		description : "Characters can spend time in the Hall of Omens learning about signs and portents. Any character that is not a wizard of divination may spend 50 downtime days to gain 3 Luck Points and may use them as the Lucky feat. Once the 3 Luck Points are spent they are not regained.",
		limfeaname : "Luck Points (Omens)",
		usages : 3,
		recovery : "never",
	},
	"lich slayer (ddep7-2)" : {
		name : "Lich Slayer (DDEP7-2)",
		source : [["AL","S7"]],
		description : "You helped an alliance of heroes stop Szass Tam and Valindra Shadowmantle from destroying Port Nyanzaru and conquering Chult. Your names spread throughout the necromantic orders, where they are feared forevermore. You have advantage on saving throws made to resist spells cast by necromancers and other undead creatures.",
		savetxt : { adv_vs : ["spells cast by necromancers & undead"] },
	},
	"lord of the gorge (ddal0-11f)" : {
		name : "Lord of the Gorge (DDAL0-11F)",
		source : [["AL","S0"]],
		description : "You defeated & killed Xak’thar the Twin, the ravenous conjoined twin pit fiends of the Gorge of Slaughter. You ascended to its place as lord of that pit & for a year & a day, your reign was bloody & brutal — until some meddling adventurer defeated you! You are retired from AL play for 366 days & upon your return, you are proficient in Infernal & have a lemure follower; this creature is fanatically devoted but entirely pitiful. Downtime days can’t lessen the time spent in Nessus.",
		descriptionFull : "You defeated and killed Xak’thar the Twin, the ravenous conjoined twin pit fiends of the Gorge of Slaughter. You ascended to its place as lord of that pit, and for a year and a day your reign was bloody and brutal—until some meddling adventure defeated you! You are retired from D&D Adventurers League play for a year and a day from the date you receive this reward, and upon your return you are proficient in the Infernal tongue and have acquired a lemure follower; this creature is fanatical in its devotion but is entirely pitiful. Downtime days can’t be used to lessen this time spent in Nessus.",
		languageProfs : ["Infernal"]
	},
	"nature of the weave (ccc-rozk-1-2) (arcana prof)" : {	
		name : "Nature of the Weave (CCC-ROZK-1-2)",
		source : [["AL","CCC"]],
		description : "You have uncovered a series of tomes written by the archmage, Manshoon. After spending 50 downtime days, you gain proficiency in the Arcana skill. If you are already proficient in Arcana, you double your proficiency when making checks with the skill.",
		descriptionFull : "You have uncovered a series of tomes written by the archmage, Manshoon. By spending 50 downtime days, you gain proficiency in the Arcana skill. If you are already proficient in Arcana, you double your proficiency when making checks with the skill.",
		skillstxt : "You gain proficiency in Arcana. If you are already proficient, you gain expertise.",
		skills : ["Arcana"]
	},
	"nature of the weave (ccc-rozk-1-2) (arcana expert)" : {	
		name : "Nature of the Weave (CCC-ROZK-1-2)",
		source : [["AL","CCC"]],
		description : "You have uncovered a series of tomes written by the archmage, Manshoon. After spending 50 downtime days, you gain proficiency in the Arcana skill. If you are already proficient in Arcana, you double your proficiency when making checks with the skill.",
		descriptionFull : "You have uncovered a series of tomes written by the archmage, Manshoon. By spending 50 downtime days, you gain proficiency in the Arcana skill. If you are already proficient in Arcana, you double your proficiency when making checks with the skill.",
		skillstxt : "You gain proficiency in Arcana. If you are already proficient, you gain expertise.",
		skills : [['Arcana', 'full']]
	},
	"plague buster (ddep7-2)" : {
		name : "Plague Buster (DDEP7-2)",
		source : [["AL","S7"]],
		description : "You helped an alliance of heroes concoct an antidote for the zombie plague ravaging Chult. Your exposure to the antidote has hardened your immune system against disease. You have advantage on saving throws made to resist disease.",
		savetxt : { adv_vs : ["disease"] },
	},
	"the qualith experience (ddia-volo)" : {
		name : "The Qualith Experience (DDIA-VOLO)",
		source : [["AL","Volo"]],
		description : "Though the mind flayer “written” language is practically impossible for anyone to craft other than mind flayers, you gain the ability to better understand the nature of the mind flayer’s seldom-used written language; any Intelligence check made to identify or translate a Qualith expression automatically succeeds.",
		languageProfs : ["Qualith (translate)"]
	},
	"quasit's essence (ddal5-8)" : {	
		name : "Quasit's Essence (DDAL5-8)",
		source : [["AL","S5"]],
		description : "The quasit K’nap, long trapped in Durlag’s Tower with the obese and foul nalfeshnee Schvalt, demonstrated a greater-than-average ability to perform autonomous actions. You have retained a bit of his fleeting essence, and chosen to bolster your own quasit familiar via a powerful ritual using a magic staff. This ritual grants you access to the Variant: Quasit Familiar. The destroyed staff counts against your MIL & cannot be regained.",
		descriptionFull : "If you defeated K’nap, you gain access to a special ritual. By spending five downtime days destroying the Staff of Thunder and Lightning and mixing its arcane components with the essence of the quasit, you gain access to the Variant: Quasit Familiar rule as described on page 63 of the Monster Manual. Gaining the benefit of this variant rule uses one of your attunement slots.\n   In addition, the destroyed staff permanently counts against the number of permanent magic items you possess, and can’t be traded — even if you later forfeit the benefit of this ritual. If you ever choose to “unattune” from the benefit of this ritual, the attunement slot is once more available, but the staff of thunder and lightning and the benefit of the ritual fueled by its destruction are forever lost, never to be reclaimed.\n   " + toUni("Variant: Familiar") + ". The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 ft of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond."
	},
	"student of stone (ddal5-11)" : {	
		name : "Student of Stone (DDAL5-11)",
		source : [["AL","S5"]],
		description : "You have studied under the tutelage of Illsenstaad, a legendary stone giant loremaster and stone carver. You gain the benefit of the dwarven Stonecunning trait. If you already possess the Stonecunning trait, you triple your proficiency bonus instead of doubling it. In addition, you also gain proficiency in mason’s tools and the Giant language if you are not already proficient.",
		descriptionFull : "Illsenstaad has chosen you and you alone to complete his life’s work and put his soul to rest. By spending a total of 365 downtime days (these need not be spent all at once) possessed by Illsenstaad, allowing him to tell his stories and carve them into the living rock of Hotun-Shûl, you gain the Student of Stone story award (below). If you are a dwarf, possess the Guild Artisan (mason or stonecutter) background, or are otherwise proficient in mason’s tools; you complete this in half the normal time.\n   " + toUni("Student of Stone") + ". You have studied under the tutelage of Illsenstaad, a legendary stone giant loremaster and stone carver. You gain the benefit of the dwarven Stonecunning trait. If you already possess the Stonecunning trait, you triple your proficiency bonus instead of doubling it. In addition, you also gain proficiency in mason’s tools and the Giant language if you are not already proficient.",
		toolProfs : ["Mason's Tools", "Stonecunning"],
		languageProfs : ["Giant"]
	},
    "szass tam's arcane essence (ddep0-1)": {
		name : "Szass Tam's Arcane Essence (DDEP0-1)",
        description: "You have wrested away part of Szass Tam’s essence. Specifically, this spark of energy was originally wrested from the vile lich himself, and grants one additional 9th level spell slot, provided that you already have one.",
        addMod : { type : "", field : "P6.SSfront.SpellSlots.CheckboxesSet.lvl9", mod : 1, text: "I gain 1 additional 9th level spell slot" },
    },
    "szass tam's planar essence (ddep0-1)": {
		name : "Szass Tam's Planar Essence (DDEP0-1)",
        description: "You have wrested away part of Szass Tam’s essence. Specifically, this spark of energy allowed the lich’s simulacrum to navigate the planes – and while you aren’t as proficient with this skill, you can retain a small bit of its power. Once per short rest, you can cast the plane shift spell (no spell slot or components required) as an action. You can target only yourself, and travel to or from one of the Outer Planes listed in Appendix C of the PHB. This choice is permanent.",
        limfeaname : "Plane Shift",
        usages : 1,
        recovery : "short rest",
        spellcastingBonus : {
            name : "Boon of Planar Travel",
            spells : ["plane shift"],
            selection : ["plane shift"],
            firstCol : 'oncesr'
        },
        spellChanges : {
            "plane shift" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of Planar Travel, I can cast Plane Shift without a components."
            }
        }
    },
    "thanks of ilmater - immortality": {
		name : "Thanks of Ilmater - Immortality (DDAL9-20)",
        description: "You have worked the will of the gods of light to maintain the balance of the Blood War. Now that you are 20th lvl, or when you reach 20th lvl, you may select this boon. You stop aging. You am immune to any effect that would age you, and you can't die from old age.",
        savetxt : {
            immune : ["magical aging effects"],
        },
    },
    "thanks of ilmater - planar travel": {
		name : "Thanks of Ilmater - Planar Travel (DDAL9-20)",
        description: "You have worked the will of the gods of light to maintain the balance of the Blood War. Now that you are 20th lvl, or when you reach 20th lvl, you may select this boon. Once per short rest, you can cast the plane shift spell (no spell slot or components required) as an action. You can target only yourself, and travel to or from Brightwater: the realm of Ilmater and Sune in the Seven Heavens of Celestia.",
        limfeaname : "Plane Shift",
        usages : 1,
        recovery : "short rest",
        spellcastingBonus : {
            name : "Boon of Planar Travel",
            spells : ["plane shift"],
            selection : ["plane shift"],
            firstCol : 'oncesr'
        },
        spellChanges : {
            "plane shift" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of Planar Travel, I can cast Plane Shift without a components."
            }
        }
    },
	"tyr's blessing of command (ccc-bmg-23 phlan2-2)" : {	
		name : "Tyr's Blessing of Command (CCC-BMG-23 PHLAN2-2)",
		source : [["AL","CCC"]],
		attunement : true,
		description : "This blessing has been bestowed upon you by Tyr in recognition of your service to the city and citizens of Phlan in the face of great peril to your own wellbeing. Your Charisma score increases by 2, up to a maximum of 20. This blessing may be refused. If accepted, it requires an attunement slot.",
		scores : [0, 0, 0, 0, 0, 2],
	},
	"tyr's blessing of luck (ccc-bmg-24 phlan2-3)" : {	
		name : "Tyr's Blessing of Luck (CCC-BMG-24 PHLAN2-3)",
		source : [["AL","CCC"]],
		attunement : true,
		description : "This blessing has been bestowed upon you by Tyr in recognition of your service to the city and citizens of Phlan in the face of great peril to your own wellbeing. You gain a +1 bonus to ability checks and saving throws. This blessing may be refused. If accepted, it requires an attunement slot. This blessing is not tradeable, and if refused or unattuned, it cannot be regained.",
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"tyr's blessing of the mind (ccc-bmg-22 phlan2-1)" : {	
		name : "Tyr's Blessing of the Mind (CCC-BMG-22 PHLAN2-1)",
		source : [["AL","CCC"]],
		attunement : true,
		description : "This blessing has been bestowed upon you by Tyr in recognition of your service to the city and citizens of Phlan in the face of great peril to your own wellbeing. Your Intelligence score increases by 2, up to a maximum of 20. This blessing may be refused. If accepted, it requires an attunement slot. This blessing is not tradeable, and if refused or unattuned, it cannot be regained.",
		scores : [0, 0, 0, 2, 0, 0],
	},
	"uku the spider boy (ddep7-1)" : {
		name : "Uku the Spider Boy (DDEP7-1)",
		source : [["AL","S7"]],
		description : "A naughty flying monkey called “Uku the Spider Boy” has latched onto you. Uku (“OO-koo”) wears a crimson waistcoat adorned with tiny mirrors and sports a silk skullcap. He has a naturally mischievous nature. Uku can smell gold from 30 feet away, even if it’s kept inside a purse or container. As an action, you can command Uku to steal or retrieve up to 100gp using his Sleight of Hand skill bonus of +4. Uku keeps 10% of the takings, which he spends on boiled sweets next time you’re in town.",
		action : [["action", "Uku the Spider Boy (steal)"]],
	},
}

//New Event Awards from Al events such as the D&D Celebration and the newers Liar's Night events. Only one may be on a character at a time.
MagicItemsList["al event award items"] = {
		name : "AL Event Award Items",
		rarity : "unique",
		type : "wondrous item",
		allowDuplicates : false,
	choices : ["Buckler of Folding","Bunny Slipper Snowshoes","Calliope Wine Cask","Campfire Ice Sculpture","Cuddly Spider","Fiery Snow Sled","Flask of Glowworms","Harengon Spirit Club (LN-1)","Inspired Cocoa Mug","Jar of Everflowing Honey","Magical Slushy Grinder","Moonlight Candle","Netherese Ghost Stories","Very Important Crown","Viridian Monocle","Wand of Verdant Vitality"],
	"buckler of folding" : {
		name : "Buckler of Folding",
		source : ["DDCE",2021],
		type : "shield",
		description : "This small paper square fits in a pocket & is covered with runes. When you hold it in your hand, you can utter a command word as a bonus action to make the square magically unfold & become a shield as hard as wood. It folds back up upon uttering the same command word.",
		descriptionFull : "This small paper square fits in a pocket and is covered with runes. When you hold it in your hand, you can use a bonus action to utter a command word to cause the square to magically unfold, becoming a shield as hard as wood. It folds back up upon uttering the same command word.",
		action : [["bonus action", "Buckler of Folding"]],
		shieldAdd : "Buckler of Folding"
		},
	"bunny slipper snowshoes" : {
		name : "Bunny Slipper Snowshoes",
		source : ["DDCE",2020],
		type : "trinket",
		description : "Certain to keep your feet warm while traversing the arctic, these fashionable snowshoes expand and contract to fit any Small or Medium humanoid creature."
		},
	"calliope wine cask" : {
		name : "Calliope Wine Cask",
		source : ["DDCE",2021],
		type : "trinket",
		description : "When uncorked, this small cask of wine plays calliope music and can fill up to two waterskins. It magically refills at dusk."
		},
	"campfire ice sculpture" : {
		name : "Campfire Ice Sculpture",
		source : ["DDCE",2020],
		type : "trinket",
		description : "When placed on the ground in a cold climate, this tiny sculpture glows orange-red and emits heat enough for up to four Medium creatures within five feet to become comfortably warm."
		},
	"cuddly spider" : {
		name : "Cuddly Spider",
		source : ["DDCE",2021],
		type : "trinket",
		description : "Use a command word as a bonus action & this fuzzy toy spider magically sticks to any surface you place it on. It can be removed by using a bonus action to touch it and utter the command word again.",
		descriptionFull : "This fuzzy toy spider magically sticks to any surface you place it on, using a bonus action and a command word. It can be removed by using a bonus action to touch it and utter the command word again.",
		action : [["bonus action", "Cuddly Spider (Stick/Remove)"]]
		},
	"fiery snow sled" : {
		name : "Fiery Snow Sled",
		source : ["AL:EL","TAL 2020"],
		usages : 1,
		recovery : "LR",
		description : "You can use a bonus action to compel this sled and the animals pulling it to double their speed for 3 rounds. Once used, the magic ceases to function until you and the animals finish a long rest.",
		descriptionFull : "You can use a bonus action to compel this sled and the animals pulling it to double their speed for 3 rounds. Once used, the magic ceases to function until you and the animals finish a long rest.",
		action : [["bonus action", " (Double speed)"]]
		},
	"flask of glowworms" : {
		name : "Flask of Glowworms",
		source : ["DDCE", 2021],
		type : "trinket",
		description : "This flask contains several glowworms & when held, exudes color-changing illumination equivalent to a torch. The flask magically sustains the glowworms & you can use an action while holding it to set the color of the light for 10 minutes.",
		descriptionFull : "This flask contains several glowworms that when held, exude color-changing illumination equivalent to a torch. The flask magically sustains the glowworms, and if you use an action while holding it, you can set the color of the illumination for ten minutes.",
		action : [["action", ""]]
		},
	"harengon spirit club (ln-1)" : {
		name : "Harengon Spirit Club (LN-1)",
		source : ["AL:LN", 2021],
		type : "weapon (club)",
		description : "This knotted club houses the spirit of a harengon. While wielding it, your ears grow long like a hare's, granting you advantage on Wisdom (Perception) checks involving hearing. In addition, you can cast the jump spell once per dawn.",
		descriptionFull : "This knotted club houses the spirit of a harengon. While wielding the club, your ears grow long like a hare's ears, granting you advantage on Wisdom (Perception) checks involving hearing. In addition, while wielding the club, you can cast the jump spell. The club can't be used to cast jump again until the next dawn.",
		limfeaname : "Harengon Spirit Club (Jump Spell)",
		usages : 1,
		recovery : "dawn",
		vision : [["Adv. on Perception checks involving hearing", 0]],
		weaponsAdd : ["Harengon Spirit Club"],
		weaponOptions : {
			baseWeapon : "club",
			regExpSearch : /^(?=.*harengon)(?=.*spirit)(?=.*club).*$/i,
			name : "Harengon Spirit Club",
			source : [["AL:LN", 2021]],
		},
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["jump"],
			selection : ["jump"],
			firstCol : "oncelr"}],
		},
	"inspired cocoa mug" : {
		name : "Inspired Cocoa Mug",
		source : ["DDCE",2020],
		type : "trinket",
		description : "This mug can magically fill with delicious hot cocoa during a short rest. Drinking the cocoa allows one creature to regain an extra 1d6 hit points if they spend Hit Dice to regain hit points."
		},
	"moonlight candle" : {
		name : "Moonlight Candle",
		source : ["AL:EL", "TAL"],
		description : "When lit, this hauntingly pale candle provides illumination that's treated as moonlight, shedding bright light in a 20-ft radius and dim light for another 20 ft. It gives off no heat and never burns out.",
		descriptionFull : "When lit, this hauntingly pale candle provides illumination that is treated as moonlight, shedding bright light in a 20-foot radius and dim light for an additional 20 feet. It gives off no heat and never burns out.",
		},
	"magical slushy grinder" : {
		name : "Magical Slushy Grinder",
		source : ["DDCE",2020],
		type : "trinket",
		description : "When snow or ice are dropped into this trinket, it can produce up to 5 gallons of a sweet, lemon-flavored slush. Once used, the magic ceases to function until the next dawn.",
		usages : 1,
		recovery : "dawn"
		},
	"jar of everflowing honey" : {
		name : "Jar of Everflowing Honey",
		source : ["AL:LN", 2021],
		type : "trinket",
		description : "This ceramic jar weighs 5 pounds & feels full. Its lid can't be removed unless you're using it. As an action, you may remove the lid & a fountain of honey pours out, generating 5 gallons of honey. The honey stops pouring out at the start of your next turn.",
		descriptionFull : "This ceramic jar weighs five pounds and feels full of honey. Its lid cannot be removed unless you're using it. As an action, you may remove the lid and a fountain of honey pours out, generating five gallons of honey. The honey stops pouring out at the start of your next turn.",
		action : [["action", " (Pour)"]]
		},
	"netherese ghost stories" : {
		name : "Netherese Ghost Stories",
		source : ["DDCE",2020],
		type : "trinket",
		description : "Reading from this Netherese book of horrifying ghost stories for 10 minutes grants advantage on a single related History check and gives the reader nightmares. You must succeed on a DC 13 Wisdom saving throw to successfully complete your next long rest."
		},
	"very important crown" : {
		name : "Very Important Crown",
		source : ["DDCE",2021],
		type : "trinket",
		description : "This stiff paper crown is bedazzled with costume jewelry. When you wear it, creatures within 60 ft that can see you notice your presence, even if you're in a crowd. You also have disadvantage on stealth checks.",
		descriptionFull : "This stiff paper crown is bedazzled with costume jewelry. When you wear it, creatures that can see you within sixty feet notice your presence, even if you're in a crowd. While wearing the crown, you have disadvantage on stealth checks.",
		advantages : [["Stealth", false]]
		},
	"viridian monocle" : {
		name : "Viridian Monocle",
		source : ["DDCE",2021],
		type : "trinket",
		description : "This stiff paper crown is bedazzled with costume jewelry. When you wear it, creatures within 60 ft that can see you notice your presence, even if you're in a crowd. You also have disadvantage on stealth checks.",
		descriptionFull : "This stiff paper crown is bedazzled with costume jewelry. When you wear it, creatures that can see you within sixty feet notice your presence, even if you're in a crowd. While wearing the crown, you have disadvantage on stealth checks.",
		languageProfs : ["Sylvan"]
		},
	"wand of verdant vitality" : {
		name : "Wand of Verdant Vitality",
		source : ["DDCE", 2021],
		type : "wand",
		description : "This wand has 3 charges. As an action while holding it, expend 1 charge to target a plant within 30 ft. The plant becomes lush w/ blooms for 24 hrs. The wand regains all charges at dawn. If you use the last charge, roll a d20. On a 1, the wand turns into a swarm of stick bugs & is destroyed.",
		descriptionFull : "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges to target one plant within 30 feet. The target becomes lush as in full bloom for 24 hours.\n   The wand regains all expended charges at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a swarm of stick bugs and is destroyed.",
		usages : 3,
		recovery : "dawn",
		action : [["action", ""]]
		},
}

//New AL Items from official modules, community modules (includes a couple neat trinkets), Fai Chen's and past holiday events (that aren't event awards)
MagicItemsList["al new items"] = {
		name : "AL New Items",
		allowDuplicates : true,
		choices : ["Achis Atracta (CCC-BMG-30 HILL2-3)","Bag of Tricks or Treats","Cariboots","Efreeti Crown of Wishes (CCC-ODFC2-2)","Eye of Xxiphu (DDAL5-19)","Fey Hound Collar","Flamesoul Stone (CCC-YLRA1-3)","Ghost Sheet","Hat of Witchery","Hellrider's Badge (DDEP9-2)","Lemure Onesie","Mind-Poison Dagger (DDHC-MORD-05)","Mist Hunters Magnificent Cap (RMH Safety Tools)","Nettle (DDEP4)","Oathbinder (DDHC-TOA-15)","Order of the Guardians Ring (RMH Safety Tools)","Owlbear Snowshoes","Pipes of Remembrance","Pumpkin Ring","Selûne's Owl-Eye Glasses","Shar's Veil","Spare (DDHC-TOA-13)","Tarot Card Set","Wooden Gecko Earrings (DDHC-TOA-8)"],
	"achis atracta (ccc-bmg-30 hill2-3)" : { // contributed by AelarTheElfRogue
		name : "Achis Atracta (CCC-BMG-30 HILL2-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This sentient bloodstone amulet is carved in the shape of a woman's head & hangs from a delicate silver chain. The eyes glow white when Achis speaks. While you wear her, poisons have no effect on you. You are immune to the poisoned condition & poison dmg. Sentience: Chaotic Neutral. Hearing & vision to 120 ft. Speaks Common & Celestial. Personality: Fickle, spoiled, wants respect, to fall in love & be treated like a princess. Otherwise screams, complains, & denies pwrs.",
		descriptionFull : "This amulet is made of an intricately carved bloodstone, shaped in the likeness of a woman’s head. The eyes pulse with a white glow when Achis is speaking. The stone is attached to a delicate silver chain. Achis Atracta has all the powers of a periapt of proof against poison that she bestows upon her wearer — if she feels so inclined. She is very fickle. If she likes you, poisons have no effect on you. You are immune to the poisoned condition and have immunity to poison damage.\n   " + toUni("Sentience") + ": Achis Atracta is a sentient chaotic neutral item with an Intelligence of 10, a Wisdom of 10, and a Charisma of 16. She has hearing and normal vision out to a range of 120 feet.\n   She can speak, read, and understand Common and Celestial.\n   " + toUni("Personality") + ": Achis Atracta speaks in a whiny and shrill voice, making demands as though accustomed to being obeyed. She acts like a spoiled noble and expects to be waited on like a queen. Wearers who do not treat her with respect and deference gain no benefit from her item powers. She screams and complains loudly if surprised by a situation she deems beneath her — such as trekking through a sewer or being engulfed by a fireball.\n   Achis wants to be loved and adored by a person with power and standing like a princess in a fairy tale. Her greatest wish is to fall in love with a prince and be swept off her feet—figuratively speaking.",
		weight : 1,
		savetxt : { immune : ["poison"] }
	},
	"bag of tricks or treats" : {
		name: "Bag of Tricks or Treats",
		source : ["AL:LN", 2018],
		rarity: "uncommon",
		magicItemTable : "?",
		description: "This ordinary bag, made from orange and black striped cloth, appears empty. Reaching inside the bag, however, reveals the presence of crinkly wrapped candies. As an action, 3 times/dawn, you can pull an object from this bag and throw it 20 ft. It transforms into a random creature when it lands (d8): 1-weasel, 2-giant rat, 3-badger, 4-boar, 5-dretch, 6-quasit, 7-imp, 8-hell hound. 1-4 follow your commands, 5-8 are hostile. All act on your turn and vanish at dawn/if reduced to 0 HP.",
		descriptionFull: "This ordinary bag, made from orange and black striped cloth, appears empty. Reaching inside the bag, however, reveals the presence of crinkly wrapped candies. The bag weighs \u00BD pound.\n   You can use an action to pull the candy from the bag and throw it up to 20 feet.  When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n   The creature is friendly to you and your companions (if 1-4) or hostile (5-8), and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\n" + toUni("d8\tCreature") + "\n 1\tWeasel\n 2\tGiant Rat\n 3\tBadger\n 4\tBoar\n 5\tDretch\n 6\tQuasit\n 7\tImp\n 8\tHell Hound",
		weight: 0.5,
		allowDuplicates : true,
		action : [["action", " (pull)"], ["bonus action", " (command)"]],
		usages : 3,
		recovery : "dawn",
	},
	"cariboots" : {
		name : "Cariboots",
		source : ["AL:LN", 2020],
		rarity : "common",
		magicItemTable : "?",
		description : "These boots fit any humanoid, and are finely crafted from caribou pelts and lined with the softest fur. While wearing these boots, you can choose to have them leave tracks like those of a caribou."
		},
	"efreeti crown of wishes (ccc-odfc2-2)" : {
		name : "Efreeti Crown of Wishes (CCC-ODFC2-2)",
		source : [["AL","CCC"]],
		type : "trinket",
		rarity : "unique",
		description : "This beautiful golden crown is covered with diamonds that gleam with their own light & resizes to fit your head. Despite its name, the crown doesn't actually grant wishes. Instead, when you feel strong emotions of any kind, the crown sprouts harmless, colorful flames from its pinnacle. The color of the flames is based on your mood: red for anger, blue for sorrow, green for amusement, etc.",
		descriptionFull : "This beautiful golden crown is covered with diamonds each of which gleams with its own light. The crown resizes to fit the head of any wearer. Contrary to its name, the crown does not actually grant any wishes. Instead, when the person wearing it feels strong emotion of any kind, the crown sprouts harmless, colorful flames from its pinnacle, with the color of the flames based on the wearer’s mood: red for anger, blue for sorrow, green for amusement, and so on. This crown can be sold for 1,500 gp. It does not count as a magic item and cannot be traded. (To be kept as a trinket, this crown may not be sold)."
	},
	"eye of xxiphu (ddal5-19)" : {
		name : "Eye of Xxiphu (DDAL5-19)",
		source : [["AL","S5"]],
		type : "wondrous item",
		rarity : "legendary",
		magicItemTable : "?",
		attunement : true,
		description : "The Eye of Xxiphu bestows insight into the true nature of aboleths. The attuned possessor of the Eye gains telepathy out to 120 ft, & may cover themselves in coat of mucous that lets them breathe underwater as well as on land. The petrified orb is large & heavy, but doesn't need to be held to use its powers. Aboleths have disadv. when attacking owner, & owner has adv. on knowledge-based ability checks about aboleths & the Far Realms when not in combat.",
		descriptionFull : "While not a truly intelligent item, the Eye of Xxiphu bestows terrifying insight into the true nature of the nightmarish aboleths. The attuned possessor of the Eye gains telepathy out to a range of 120 feet, and may cover themselves in coat of mucous that allows them to breathe underwater as well as on land. The petrified orb is large and heavy, but does not need to be held in order to use its powers. Additionally, aboleths have disadvantage when attacking the owner of the Eye, and the owner has advantage on knowledge-based ability checks about aboleths and the Far Realm when they are not in combat."
	},
	"fey hound collar" : {
		name : "Fey Hound Collar",
		source : ["AL:LN", 2020],
		rarity : "unique",
		description : "As an action, while wearing this (very) punk rock collar, you create a 15-ft-diameter sphere of green mist, centered on you & moving with you. The sphere spreads around corners & its area is heavily obscured. It lasts for 10 minutes or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. The collar can't be used this way again until the next dawn.",
		descriptionFull : "As an action, while wearing this (very punk rock) collar, you create a 15-foot-diameter sphere of green mist, centered on you, moving with you. The sphere spreads around corners, and its area is heavily obscured. It lasts for 10 minutes or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. The collar can't be used this way again until the next dawn.",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]]
		},
	"flamesoul stone (ccc-ylra1-3)" : {
		name : "Flamesoul Stone (CCC-YLRA1-3)",
		source : [["AL","CCC"]],
		type : "trinket",
		rarity : "unique",
		description : "This fist-sized crystal produces a flickering coppery-orange glow from within. The light is magical, but isn’t bright enough to significantly illuminate an area. Casting detect magic on the Flamesoul Stone shows a hint of necrotic magic emanating from it. The light from the stone is the same color as the comet that was recently seen over Ylraphon.",
		descriptionFull : "A fist-sized crystal that produces a flickering coppery-orange glow from within. The light is magical, but isn’t bright enough to significantly illuminate any area. Casting detect magic on the Flamesoul Stone shows a slight hint of necrotic magic emanating from within. The light from the stone is the same color as the comet that has recently been seen over Ylraphon."
	},
	"ghost sheet" : {
		name : "Ghost Sheet",
		source : ["AL:LN", 2018],
		rarity : "uncommon",
		magicItemTable : "?",
		description : "This sheet appears to be plain white cotton cloth with two eyeholes cut into it. When you wear the sheet over your head, you appear to be incorporeal. Physical interaction reveals this to be an illusion."
		},
	"hat of witchery" : {
		name : "Hat of Witchery",
		source : ["AL:LN", 2019],
		rarity : "common",
		magicItemTable : "?",
		description : "This black, cone-shaped hat has a wide-brim & is adorned with a tarnished brass buckle & a spindly-legged spider who made the hat its home. It can act as spellcasting focus for your class' spells. Once/long rest, you can try to cast a cantrip you don't know from your class' list by making a DC 10 INT (Arcana) check, wasting the attempt & the action if failed. If 3 allies are wearing & attuned to hats of witchery w/i 30 ft of each other, the check above is made with adv. The characters’ skin turns green & their voices become raspy & aged.",
		descriptionFull : "This black, cone-shaped hat has a wide-brim and is adorned with a tarnished brass buckle and a spindly-legged spider who has made the hat its home. While you are wearing it, you gain the following benefits:\n \u2022 You can use the hat as a spellcasting focus for your class' spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on your class' spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.\n \u2022 If three allies are all wearing and attuned to hats of witchery and are within 30 feet of each other, the check above is made with advantage. The characters’ skin turns green, and their voices become raspy and aged.",
		attunement : true,
		usages : 1,
		recovery : "long rest",
		},
	"hellrider's badge (ddep9-2)" : {
		name : "Hellrider's Badge (DDEP9-2)",
		source : [["AL","S9"]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "?",
		attunement : true,
		description : "This badge marks you as a lieutenant in the Hellriders. While wearing it, you gain a +2 bonus to AC if you aren’t using a shield. If the badge is more than 5 feet away from you for more than one minute, it vanishes and harmlessly reappears on a surface within 5 feet of Duke Ravengard.",
		descriptionFull : "A Hellrider’s Badge is only usable by a member of the Hellriders, and thanks to your efforts during Klysandral’s funeral and the subsequent escape from Avernus, you have been awarded honorary membership by Duke Ulder Ravengard himself. This badge marks you as a lieutenant in the Hellriders.\n   While wearing the badge, you gain a +2 bonus to AC if you aren’t using a shield. If the badge is more than 5 feet away from you for more than one minute, it vanishes and harmlessly reappears on a surface within 5 feet of Duke Ravengard. While holding the badge, the Duke knows your location, provided the two of you are on the same plane of existence and your attunement to the badge hasn’t ended.\n   As an action, the Duke can touch the badge and end your attunement to it, as he has been granted this power by Elturel despite not being a Hellrider himself.\n   " + toUni("Special") + ". If you wish to take the Hellriders or Flaming Fist as your faction, you may do so. Additionally, this badge is made from the bones of Klysandral himself, counts as a holy reliquary, and may be used as a holy symbol of Torm if needed.\n   Despite its rarity, the Hellrider’s Badge can be equipped by anyone that has earned it via playing DDEP09-02 Hellfire Requiem.",
		extraAC : [{name : "Hellrider's Badge", mod : 2, magic : true, text : "I gain a +2 bonus to AC when not using a shield."}],
	},
	"lemure onesie" : {
		name : "Lemure Onesie",
		source : ["AL:LN", 2019],
		rarity : "uncommon",
		magicItemTable : "?",
		description : "This comfortable, fleece onesie is complete w/ cozy, if amorphous, footies. When wearing this it, you make yourself — including belongings on your person — appear as a lemure. The appearance doesn't hold up to physical inspection. To discern you are disguised, a creature must use its action to inspect you & succeed on an INT (Investigation) check (DC 13). The onesie fabric is inexpensive & quite flammable; while wearing it, you are vulnerable to fire dmg.",
		descriptionFull : "This comfortable, fleece onesie is complete with cozy, if amorphous, footies. When wearing this onesie, you make yourself—including belongings on your person—appear as a lemure. The appearance fails to hold up to physical inspection. To discern you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check (DC 13). The fabric is inexpensive and quite flammable; while wearing this onesie, you have vulnerability to fire damage.",
		savetxt : { text : ["Vulnerable to fire damage"] }
		},
	"mind-poison dagger (ddhc-mord-05)" : {
		name : "Mind-Poison Dagger (DDHC-MORD-05)",
		source : [["AL","MtoF"]],
		type : "weapon (dagger)",
		rarity : "rare",
		magicItemTable : "?",
		description : "The metal of this dagger has a wavy pattern of blue, white, & black. As an action once per dawn, you can cause the blade to exude a nimbus of pale light. This nimbus remains for 1 min or until this weapon hits a creature. The target must succeed on a DC 15 Wis save or take 2d10 psychic dmg & be poisoned for one min as feelings of extreme pain & misery race through its mind. This is a fear & charm effect.",
		descriptionFull : "The metal of this dagger possesses a wavy pattern of blue, white, and black. You can use your action to cause the blade to exude a pale nimbus of light. This nimbus remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Wisdom saving throw or else take 2d10 psychic damage and be poisoned for one minute as feelings of extreme pain and misery race through the creature’s mind. This is a fear and charm effect. The dagger can’t be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Mind-Poison Dagger",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (Nimbus)"]],
		weaponsAdd : ["Mind-Poison Dagger"],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*mind)(?=.*poison).*$/i,
			name : "Mind-Poison Dagger",
			source : [["AL","MtoF"]],
			description : "Finesse, light, thrown; If coated, DC 15 Wis save or +2d10 psychic dmg \u0026 1 min poisoned",
		}
	},
	"mist hunters magnificent cap (rmh safety tools)" : {
		name : "Mist Hunters Magnificent Cap (RMH Safety Tools)",
		source : [["AL:RMH","ST"]],
		type : "wondrous item",
		rarity : "common",
		magicItemTable : "?",
		description : "This deerstalker, ear-flapped traveling cap, is worn by notable investigators. When worn, it functions as any other hat. At the investigator's whim, it transforms into a working magnifying glass or back into a cap as needed.",
		descriptionFull : "This deerstalker, ear-flapped traveling cap, is worn by notable investigators. When worn, it functions as any other hat. At the investigator's whim, it transforms into a working magnifying glass and back into a cap, as needed. This common magic item cannot be sold.",
	},
	"nettle (ddep4)" : {
		name : "Nettle (DDEP4)",
		source : [["AL","S4"]],
		type : "weapon (crossbow)",
		rarity : "rare",
		magicItemTable : "?",
		attunement : true,
		prerequisite : "Requires attunement by a creature of non-lawful alignment",
		prereqeval : function(v) { return !(/lawful/i).test(What("Alignment")); },
		description : "This sentient +2 hand crossbow has seen better times. The wood is cracked & splintered & the string is heavily-frayed. A large, blue feather hangs from the handgrip alongside a couple green glass baubles. The crossbow whispers warnings, granting a +2 bonus to initiative if you aren't incapacitated. Sentience: Chaotic Neutral. Hearing & Darkvision to 120 ft. Speaks Common & Halfling. Personality: Greedy, impetuous, demands to be polished or shouts insults & denies bonuses.",
		descriptionFull : "This hand crossbow looks to have seen better times. The wood is cracked and splintered and the string is heavily-frayed. A large, blue feather hangs from the handgrip alongside a couple green, glass baubles. The crossbow whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   " + toUni("Sentience") + ": Nettle is a sentient chaotic neutral weapon with an Intelligence of 15, a Wisdom of 10 and a Charisma of 14. It has has hearing and darkvision out to a range of 120 feet. Nettle speaks Common and Halfling.\n   " + toUni("Personality") + ": Nettle is greedy and impetuous, and prefers that its wielder share these ideals. It demands to be better taken care of than its previous owners did. If its bearer is lawfully-aligned, or if its bearer does not spend at least an hour each day tending to it (polishing, applying resin to the string, etc.), Nettle denies its bonuses to attack and damage rolls and initiative checks. It also shouts out insults to those nearby, imposing disadvantage on any Charisma (Deception or Persuasion) checks or Dexterity (Stealth) check that its wielder makes to move silently.",
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
	weaponsAdd : ["Nettle, Hand Crossbow +2"],
		weaponOptions : {
		baseWeapon : "hand crossbow",
		regExpSearch : /^(?=.*hand)(?=.*crossbow)(?=.*nettle).*$/i,
		name : "Nettle, Hand Crossbow +2",
				},
	},
	"oathbinder (ddhc-toa-15)" : {
		name : "Oathbinder (DDHC-TOA-15)",
		source : [["AL","S7"]],
		type : "weapon (warhammer)",
		rarity : "legendary",
		magicItemTable : "?",
		attunement : true,
		prerequisite : "Requires attunement by a creature of non-evil alignment",
		prereqeval : function(v) { return !(/evil/i).test(What("Alignment")); },
		description : "Handed down through generations of holy warriors, Oathbinder is a sentient +2 warhammer fashioned from gold, jade, & finished wood. When you hit fiends/undead, they take an extra 2d6 radiant dmg. If left w/ 25 hp or less, must pass a DC 15 Wisdom save or die. On a pass, the creature is frightened until the your next turn ends. While holding the weapon, you can use an action to cast beacon of hope once per dawn. If you flee from extraplanar evil, Oathbinder mocks your cowardice.",
		descriptionLong : "Handed down through generations of holy warriors, Oathbinder is a sentient +2 warhammer fashioned from gold, jade, and finished wood. When you hit a fiend or undead, they take an extra 2d6 radiant dmg. If this leaves them with 25 hp or less, they must pass a DC 15 Wisdom save or die. On a pass, the creature is frightened until the your next turn ends. While holding the weapon, you can use an action to cast beacon of hope once per dawn. Imbued with the lifeforce of an ancient celestial, Oathbinder is the sworn enemy of fiends and other evil extraplanar creatures. It speaks only when it has something important to say, and can often be openly curt and matter-of-fact when doing so. If you flee from extraplanar evil, Oathbinder mocks your cowardice.",
		descriptionFull : "Handed down through generations of holy warriors, Oathbinder is a sentient warhammer fashioned from gold, jade, and finished wood. You gain a +2 bonus to attack and damage rolls made with this weapon.\n   In addition, it has the properties of a mace of disruption: when you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n   While holding the weapon, you can use an action to cast beacon of hope. Once used, this ability can't be used again until the next dawn.\n   " + toUni("Sentience") + ": Oathbinder is a lawful good weapon with an Intelligence of 12, a Wisdom of 14 and a Charisma of 14. It has hearing and normal vision out to a range of 60 feet. The weapon can speak, read, and understand Common and Celestial. It has a strong, feminine voice. It knows every language you know while you're attuned to it.\n   " + toUni("Personality") + ": Imbued with the lifeforce of an ancient celestial, Oathbinder is the sworn enemy of fiends and other evil extraplanar creatures. It speaks only when it has something important to say, and can often be openly curt and matter-of-fact when doing so.\n   Oathbinder is courageous in the face of all that is evil. If its wielder actively chooses to flee from facing an extraplanar evil, such as a demon or powerful undead, and can't provide good justification for doing so, the weapon openly mocks them for their cowardice until the wielder can redeem themselves by defeating a worthy evil opponent.\n   A protector of life and light, Oathbinder has no patience for those who perform acts spurned by dishonesty and corruption. It strongly protests against any wielder who continuously participates in such actions, and can be very disagreeable when its wielder consistently tolerates others who do the same.",
		limfeaname : "Oathbinder (Beacon of Hope)",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]],
	spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["beacon of hope"],
			selection : ["beacon of hope"],
			firstCol : "oncelr"}],
	weaponsAdd : ["Oathbinder"],
		weaponOptions : {
		baseWeapon : "warhammer",
		regExpSearch : /^(?=.*oathbinder).*$/i,
		name : "Oathbinder",
		description : "Versatile (d10); Fiend/undead +2d6 radiant dmg; if hp<26, DC 15 Wis save or die. If pass, frightened until my next turn ends",
		modifiers : [2, 2]
				},
	},
	"order of the guardians ring (rmh safety tools)" : {
		name : "Order of the Guardians Ring (RMH Safety Tools)",
		source : [["AL:RMH","ST"]],
		type : "ring",
		rarity : "unique",
		magicItemTable : "?",
		description : "This ring can deliver a dose of potion or poison under a creature’s skin. If targeting a creature, use an action to make a melee attack. On a hit, the liquid is delivered. If targeting yourself, use a reaction to deliver it into your system. If loaded with anti-charm tonic, the reaction gives you adv. on a save against charm or possession. The ring can only be reloaded by the Order.",
		descriptionFull : "This ring can deliver a dose of potion or poison under a creature’s skin. If targeting a creature, use an action to make a melee attack. On a hit, the liquid is delivered. If targeting yourself, use a reaction to deliver it into your system. This equipment cannot be sold, and the ring cannot be reloaded except by the Order.\n   Currently, the Order of the Guardian ring is loaded with an anti-charm tonic. When an attempt is made to charm or possess you, you may use your reaction to deliver the tonic into your system and gain advantage to your saving throw. This potion has one use, and the top-secret recipe is not known to you. This potion cannot be extracted from the ring until used.",
		limfeaname : "Anti-charm tonic",
		usages : "1",
		recovery : "Special",
		additional : "from Order",
		action : [["action", "Order of the Guardians Ring (use on target)"], ["reaction", "Order of the Guardians Ring (use on self)"]],
		weaponsAdd : ["Order of the Guardians Ring"],
		weaponOptions : {
			regExpSearch : /^(?=.*order)(?=.*guardian|guardians)(?=.*ring).*$/i,
			name : "Order of the Guardians Ring",
			baseWeapon : "unarmed strike",
			source : [["AL:RMH","ST"]],
			abilitytodamage : false,
			damage : [0, 0, ""],
			description : "If attack hits, potion or poison in ring delivered to target.",
		}
	},
	"owlbear snowshoes" : {
		name : "Owlbear Snowshoes",
		source : ["AL:FC",2020],
		type : "trinket",
		description : "These warmly appointed snowshoes leave the tracks of an owlbear in snow, mud, or other soft surfaces. They also have an unfortunate tendency to attract other owlbears."
		},
	"pipes of remembrance" : {
		name : "Pipes of Remembrance",
		source : ["AL:LN", 2020],
		rarity : "common",
		magicItemTable : "?",
		description : "This delicate wooden pipe features a bowl made from smooth river stone. When the pipe is lit, exhaled smoke doesn't dissipate, instead lingering around the bearer. After 10 minutes, the smoke forms moving shapes that re-enact a scene of the bearer’s choosing from the stories they've been told. When this performance is complete, the smoke dissipates. A new story/likeness may be added to the pipe’s repertoire if the bearer smokes the pipe while relaying a tale or describing a companion. The pipe can be used this way once per dawn.",
		descriptionFull : "This long, delicate wooden pipe features a bowl made from smooth river stone. When the pipe is lit, smoke exhaled from it does not dissipate, instead lingering around the bearer. After 10 minutes, the smoke forms moving shapes that reenact a scene of the bearer’s choosing from the stories it has been told. When this realistic performance is complete, the smoke dissipates. A new story or likeness may be added to the pipe’s repertoire if the bearer smokes the pipe while relaying a tale or describing a companion. The pipe can’t be used this way again until the next dawn.",
		usages : 1,
		recovery : "dawn"
		},
	"pumpkin ring" : {
		name : "Pumpkin Ring",
		source : ["AL:LN", 2020],
		rarity : "common",
		magicItemTable : "?",
		description : "This ring is made of polished silver, in the shape of your carved pumpkin. While wearing this ring, the glowing image of your carved pumpkin appears in front of your own face, like a mask."
		},
	"selûne's owl-eye glasses" : {
		name : "Selûne's Owl-Eye Glasses",
		source : ["AL:LN", 2020],
		attunement : true,
		description : "While wearing these glasses, as an action once per dawn, you can instantaneously resummon a deceased, certed or Holiday Event vanity pet or mount (only ones that can be returned to life by the find familiar or find steed spells.) If you are not attuned to your glasses, that does not kill your pet.",
		descriptionFull : "While wearing these glasses, as an action, you can instantaneously resummon a deceased, certed or Holiday Event vanity pet or mount that can be returned to life by the find familiar or find steed spells. Once returned to life, they have no new additions to the roles and abilities they had before death (for example, these glasses do not transform them into a familiar or steed). If you are not attuned to your glasses, that does not kill your pet. The glasses can’t be used this way again until the next dawn.",
		limfeaname : "Selûne's Glasses",
		usages : 1,
		recovery : "dawn"
		},
	"shar's veil" : {
		name : "Shar's Veil",
		source : ["AL:LN", 2020],
		description : "Once per long rest, while you wear this purple and black, shadowy veil, it gives the illusion of death and decay for 1 hour. Lying motionless, your body appears to be dead. In motion, you appear to be an undead creature, but your creature type is not changed to undead. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on a DC 13 Intelligence (Investigation) check.",
		usages : 1,
		recovery : "long rest"
		},
	"spare (ddhc-toa-13)" : {
		name : "Spare (DDHC-TOA-13)",
		source : [["AL","S7"]],
		type : "weapon (longsword)",
		rarity : "legendary",
		magicItemTable : "?",
		attunement : true,
		prerequisite : "Requires attunement by a creature of non-evil alignment",
		prereqeval : function(v) { return !(/evil/i).test(What("Alignment")); },
		description : "Recently uncovered from the depths of the Sanrach Mountains, Spare is an exquisitely crafted sentient +2 longsword w/ a blackened steel blade & a hilt fashioned into the head of a dragon. As a bonus action, make flames erupt from the blade, shedding bright light in a 40-ft radius & dim light for 40-ft. While ablaze, the sword deals +2d6 fire dmg per hit. The flames last until you say the command again (ba) or you drop/sheathe the sword. Once/LR, action to cast Vicious Mockery (DC 14). Spare mocks you if roll 1. Casts VM on you if you roll 3 in a row.",
		descriptionLong : "Only recently uncovered from the depths of the Sanrach Mountains, Spare is an exquisitely crafted sentient +2 longsword w/ a blackened steel blade & a hilt fashioned into the head of a dragon. As a bonus action, say the command word to make flames erupt from the blade, shedding bright light in a 40-ft radius & dim light for another 40-ft. While ablaze, the sword deals an extra 2d6 fire dmg per hit. The flames last until you say the command word again (bonus action) or you drop/sheathe the sword. Once per long rest, use an action to cast Vicious Mockery (DC 14). Spare mocks you if you roll a 1 on an attack or check. Spare casts Vicious Mockery on you if you roll 3 ones in a row. Spare is extremely haughty and proud, demanding that its user portray the same level of integrity and dignity that it requires for itself and prefers to be called “Fire of Destiny.”",
		descriptionFull : "Only recently uncovered from the depths of the Sanrach Mountains, Spare is an exquisitely crafted longsword with a blackened steel blade and a hilt fashioned into the head of a dragon. You gain a +2 bonus to attack and damage rolls made with this weapon.\n   In addition, it has all of the properties of a flame tongue: you can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.\n   Once per day, while the weapon is unsheathed, it can be used to cast vicious mockery as a 7th-level spellcaster (spell save DC 14). Once used, this ability cannot be used again until a the completion of a long rest.\n   " + toUni("Sentience") + ": Spare is a sentient chaotic good weapon with an Intelligence of 14, a Wisdom of 11, and a Charisma of 16. It has hearing and normal vision out to a range of 60 feet. The weapon can speak, read, and understand Common, Elvish, and Undercommon.\n   " + toUni("Personality") + ": Spare is extremely haughty and proud, demanding that its user portray the same level of integrity and dignity that it requires for itself. It periodically mocks enemies in combat and has truly earned the name of a flame tongue.\n   If the sword's wielder takes action outside of the sword's good-aligned tendencies, or shows an extremely poor performance (such as rolling a 1 on an attack roll or skill check), Spare openly berates the wielder. If such an event happens more than twice in a row, the sword uses its vicious mockery ability upon the wielder itself.\n   " + toUni("Lore") + ": This ancient sword was once wielded by the legendary warrior, Sabashin Gatorhead. After his rival was soundly defeated in an honorable duel, instead of taking his life as was custom, his soul was ensorcelled into the blade.\n   Though the sword insisted on being called “Fire of Destiny,” Sabashin thought it was a silly name and thus didn't call the sword anything. After Sabashin's passing, the sword had passed through various hands until it fell into the ownership of Lord Galoray, a ruthless overlord. Galoray became so tired of the sword's constant beratement, he left it in his keep, mounted on a decorative display with a plaque that read “Spare.”",
		limfeaname : "Spare (Vicious Mockery)",
		usages : 1,
		recovery : "long rest",
		fixedDC : 14,
		action : [["action", ""]],
	spellcastingBonus : [{
			name : "Once per long rest",
			spells : ["vicious mockery"],
			selection : ["vicious mockery"],
			firstCol : "oncelr"}],
	weaponsAdd : ["Spare"],
		weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*spare).*$/i,
		name : "Spare",
		description : "Versatile (d10); While active, +2d6 fire damage.",
		modifiers : [2, 2]
				},
	},
	"tarot card set" : {
		name : "Tarot Card Set",
		source : ["AL:LN", 2020],
		description : "Once/day, roll 1d4 to find out what your fortune produces. This item disappears at dawn & the character may roll again to reveal their next fortune. DC 1: The Flower - touching this card to a patch of earth w/i 5 ft, causes one flower of your choice to sprout. The flower is nonmagical & grows or withers as a normal flower. DC 2: The Yummy Meal - your favorite meal, the equivalent of 1 ration. DC 3: The Tea Pot - a tiny pot of tea, equivalent to 1 healing potion. DC 4: The Witch - a stone & twisted wire pendant. As an action, it gives you adv. on CHA checks w/ humanoids (<= CR1), for 1 hr.",
		descriptionFull : "Once per day, roll 1d4 to find out what your tarot fortune produces. At dawn this product (not the card) vanishes but the character may roll again to reveal their next fortune.\n   " + toUni("DC 1: The Flower") + ". - touching this card to a patch of earth or soil, within 5 feet of you, causes one flower of your choice to sprout there. The flower is nonmagical and harmless, and it grows or withers as a normal flower would.\n   " + toUni("DC 2: The Yummy Meal") + ". - this card produces your favorite meal, the equivalent of 1 ration.\n   " + toUni("DC 3: The Tea Pot") + ". - this card produces a tiny pot of piping tea, the equivalent of one potion of healing.\n   " + toUni("DC 4: The Witch") + ". - this card produces a stone and twisted wire pendant. As an action, it gives you advantage on Charisma checks when communicating with humanoids (CR 1 or less), for 1 hour.",
		usages : 1,
		recovery : "dawn"
		},
	"wooden gecko earrings (ddhc-toa-8)" : {
		name : "Wooden Gecko Earrings (DDHC-TOA-8)",
		source : [["AL","S7"]],
		type : "wondrous item",
		rarity : "uncommon",
		magicItemTable : "A",
		description : "After wearing these wooden gecko earrings for at least 1 day, you become proficient in Strength (Athletics) checks to climb, as long as your hands and feet are bare and touching the surface. However, you have an insatiable urge to eat insects.",
		descriptionFull : "After being worn for at least 1 day, the wearer of these wooden gecko earrings becomes proficient in Strength (Athletics) checks to climb, as long as their hands and feet are bare and touching the surface. The earrings can be sold for 400 gp. The wearer, however, has an insatiable urge to eat insects."
	},
}