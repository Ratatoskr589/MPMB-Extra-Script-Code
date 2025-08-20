/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). Additionally, due to the length of some descriptions, I recommend auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will run off the page.
*/

/*  Subject: New AL Items
    Effect:	This script adds the new items, armor, and weapons found in AL modules and Guild Adept adventures to the MPMB sheet. It also includes some Story Awards that grant blessings, boons, or other mechanical effects. This is not a complete list, but it's a start.*/
	
	//Complete: S0-S10, DDCE, Holiday Events, Guild Adept, DC-POA, CCCs, official DRW, RMH, WBW-DC
	//In progress: SJ-DCs, POs, RV-DC, FR-DC, PS-DC, 
	
var iFileName = "AL Special Items.js";
RequiredSheetVersion("13.2.3");

// Define the source

SourceList["AL"] = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470",
	date : "Various"
};

SourceList["DDCE"] = { //All items in this category count as event awards
    name : "D&D Celebration",
    abbreviation : "DDCE",
    group : "Adventurers League",
    date : "2020/09/19 - Yearly"
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

SourceList["AL:EL"] = {   //AL specific Extra Life or other charity event certs
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
	url : "https://www.dmsguild.com/browse.php?filters=1000044",
	date : "Various",
	defaultExcluded : true
};

SourceList["AL:GA"] = {  //DDHC-TOA-8 Return of the Lizard King (S7 Guild Adept)
	name : "Guild Adept",
	abbreviation : "AL:GA",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/product/220608/Return-of-the-Lizard-King",
	date : "Various",
	defaultExcluded : true
};

SourceList["AL:SA"] = {  //AL Service Awards. Started in 2021 but have multiple sets each year.
    name : "AL Service Awards",
    abbreviation : "AL:SA",
    group : "Adventurers League",
    date : "2021/11/02"
};

SourceList["QftIS"] = {   //This script adds the new items from the Infinite Staircase preview adventure on DDB to the script, since it's AL legal
	name : "Quests from the Infinite Staircase",
	abbreviation : "QftIS",
	group : "Adventure Books",
	url :"https://dndstore.wizards.com/us/en/product/928653/quests-from-the-infinite-staircase-digital-plus-physical-bundle",
	date : "2024/07/16"
};  
/*Preview URL is: https://www.dndbeyond.com/sources/dnd/dilct/descent-into-the-lost-caverns-of-tsojcanth#AppendixAMagicItems*/


//AL Special Rewards & Story Awards (with major mechanical effects)(Adjusted to feats to better match Nod Hero's code)
FeatsList["al story awards"] = {
		name : "AL Story Awards",
		description : "Special AL rewards available from conventions, epics and adventure modules. This only includes a small slice of the total awards available, primarily flavored boons and blessings, and story awards with major mechanical effects. This selection also assumes that you have spent any Downtime or other cost required to receive the reward.",
		allowDuplicates : true,
	choices : ["Annabelle's Gratitude (CCC-PRIORY-3)","Angry Alley Cat (FC)","Black Pudding Cup: Cuddly (Trading Post)","Blessing of Magic Resistance: Annointed by the Darkwater (FR-DC-IMP-2)","Blessing of Magic Resistance: Aether's Blessing (FR-DC-MONSTER-4)","Blessing of Magic Resistance: Ilsensine Touched (PS-DC-PANDORA-JWEI-S2-1)","Blessing of Magic Resistance: Favor of Primus (PS-DC-PHP-CKA2)","Blessing of Magic Resistance: Flaw's Gift (SJ-DC-FLUMPH-4)","Blessing of Protection (AL WPM)","Blessing of Protection (DDEP6-3)","Blessing of Protection: Selune's (FR-DC-PANDORA-JWEI-6)","Blessing of Protection: Flux's (SJ-DC-FLUMPH-3)","Blessing of Protection: Ilmater's (SJ-DC-TRIDEN-TFC)","Blessing of Valhalla: Illithids (FR-DC-DEATH)","Blessing of Valhalla: The Friends You Made Along the Way (SJ-DC-DD-11)","Blessing of Wound Closure (SJ-DC-MIST-1)","Boon of Fate: Crowd Favorite (PS-DC-STRAT-UNDEAD-3)","Boon of Quick Casting (PS-DC-CEG-2)","Boon of Recovery (PS-DC-STRAT-DRAGON-4)","Boon of Skill Proficiency: Star Power (PS-DC-RAVENGARD)","Boon of Speed: Dance of the Liberated (PS-DC-TYM-PHP-DIV-1)","Boon of the Unfettered (PS-DC-POP-1)","Chardalyn Poisoning (DDAL10-9)","Charm of the Comet: Enchanted Amulet (FR-DC-PANDORA-JWEI-7)","Charm of the Sage: High Heralds (FR-DC-Saerloon-0)","Charm of the Sun: Gift of Shine (FR-DC-DIVA)","Dreamwalker (DDAL5-11)","Favor of Candlekeep - Language (DDAL0-3)","Flying Snake (DDEP7-1)","Gratitude of Brightstar Moonsilver (CCC-BMG-37 HULB3-1)","Gratitude of Hartkiller (DDAL5-17)","Hall of Honor (DDAL6-3)","Hall of Mirth (DDAL6-3)","Hall of Omens (DDAL6-3)(Diviner)","Hall of Omens (DDAL6-3)(Non-Diviner)","Lich Slayer (DDEP7-2)","Lord of the Gorge (DDAL0-11F)","Luna Lightbearers (WBW-DC-ZODIAC-0)","Nature of the Weave (CCC-ROZK-1-2) (Arcana Prof)","Nature of the Weave (CCC-ROZK-1-2) (Arcana Expert)","Plague Buster (DDEP7-2)","The Qualith Experience (DDIA-VOLO)","Quasit's Essence (DDAL5-8)","Student of Stone (DDAL5-11)","Szass Tam's Arcane Essence (DDEP0-1)","Szass Tam's Planar Essence (DDEP0-1)","Thanks of Ilmater - Immortality","Thanks of Ilmater - Planar Travel","Uku the Spider Boy (DDEP7-1)"],
	"annabelle's gratitude (ccc-priory-3)" : {
		name : "Annabelle's Gratitude (CCC-PRIORY-3)",
		source : [["AL","2018"]],
		description : "I took Annabelle up on her offer to train me as a proper sailor. While training, I was a member of the crew for the Blackwater Mercantile Company and spent 4 months on the Moonsea with sailors from all across the region. I've now gained proficiency with water vehicles.",
		descriptionFull : "Annabelle's Gratitude is a one use only Story Award. An adventurer may remove this Story Award and 125 downtime days from their log sheets. The adventurer may add proficiency to Vehicles (water) to their character sheets when complete.\n   You have taken Annabelle up on her offer to train them to be proper sailors. The adventurer will have spent four months on the Moonsea with sailors from all across the region. While training, the adventurer will be a member of the crew for the Blackwater Mercantile Company.",
		toolProfs : ["Vehicles (water)"],
	},
	"angry alley cat (fc)" : {
		name : "Angry Alley Cat (FC)",
		source : [["AL:FC","2018"]],
		description : "A battle scarred, one-eared angry tomcat that reeks of city has taken a liking to me. 'Like' is a generous term as it spends its free time soiling my footwear and caterwauling. Once per adventure, if I would be arrested by the city watch, the angry cat descends like an avenging angel, distracting the watch enough for me to escape.",
		descriptionFull : "A battle scarred, one-eared angry tomcat that reeks of city has taken a liking to you. 'Like' is a generous term as it spends its free time soiling your footwear and caterwauling. Once per adventure, if you would be arrested by the city watch, the angry cat descends like an avenging angel, distracting the watch enough for you to escape.",
	},
	"black pudding cup: cuddly (trading post)" : {
		name : "Black Pudding Cup (Cuddly)",
		source : [["AL:EL","2024 VW"]],
		rarity : "rare",
		description : "This special ooze has undergone magical experimentation, which resulted in its body being the perfect huggable consistency. When hugged, the pudding whispers words of self affirmation like \"You are enough.\" and \"All you need is within you right now.\" It can be returned via Find Familiar if killed. If its cup was also destroyed, a new cup needs to be purchased (1gp).",
		descriptionFull : "This special ooze has undergone magical experimentation, which resulted in its body being the perfect, huggable consistency. When hugged, the creature whispers words of self affirmation like \"You are enough.\" and \"All you need is within you right now.\" The creature can be returned via Find Familiar if killed. If its cup was also destroyed, a new cup needs to be purchased (1gp). [Custom flavor from the November 2024 VDDW Trading Post v13.1]",
		creaturesAdd : [["Black Pudding Cup"]],
		},
	"blessing of magic resistance: aether's blessing (fr-dc-monster-4)" : {
		name : "Aether's Blessing of Magic Resistance",
		source : [["AL","FR-DC-MONSTER-4"]],
		description : "I have advantage on saving throws against spells and other magical effects. Every time this blessing activates, my eyes glow as I tap into the four elements and energies of Aether.",
		descriptionFull : "Everytime the blessing activates, your eyes glow as you tap into the four elements and energies of Aether. You have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
	},
	"blessing of magic resistance: annointed by the darkwater (fr-dc-imp-2)" : {
		name : "Annointed by the Darkwater (Magic Resistance)",
		source : [["AL","FR-DC-IMP-2"]],
		description : "I've been annointed by Darkwater's Abyssal sea spray. I have advantage on saving throws against spells and other magical effects.",
		descriptionFull : "You have been anointed with Darkwater's Abyssal sea spray. You have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
	},
	"blessing of magic resistance: ilsensine touched (ps-dc-pandora-jwei-s2-1)" : {
		name : "Ilsensine Touched (Blessing of Magic Resistance)",
		source : [["AL","PS-DC-PANDORA-JWEI-S2-1"]],
		description : "I was granted a minor portion of Ilsensine's protection against Magic as long as I'm not standing in opposition against the illithid god. I have advantage on saving throws against spells and other magical effects.",
		descriptionFull : "You're granted a minor portion of Ilsensine's protection against Magic as long as you are not standing in opposition against the illithid god. You have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
	},
	"blessing of magic resistance: favor of primus (ps-dc-php-cka2)" : {
		name : "Favor of Primus (Blessing of Magic Resistance)",
		source : [["AL","PS-DC-PHP-CKA2"]],
		description : "Primus has favored me for my assistance in protecting the Gate-Town of Automata and the modrons it created. I have advantage on saving throws against spells and other magical effects.",
		descriptionFull : "Primus has favored you for your assistance in protecting the Gate-Town of Automata and the modrons it has created. You have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
	},
	"blessing of magic resistance: flaw's gift (sj-dc-flumph-4)" : {
		name : "Flaw's Gift (Blessing of Magic Resistance)",
		source : [["AL","SJ-DC-FLUMPH-4"]],
		description : "I have advantage on saving throws against spells and other magical effects. My eyes glow like amethyst whenever this blessing is activated",
		descriptionFull : "Your eyes glow like amethyst everytime the blessing is activated. You have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
	},
	"blessing of protection (al wpm)" : {
		name : "Blessing of Protection (AL WPM)",
		source : [["AL","TYP"]],
		description : "My reward for returning the three legendary weapons of White Plume Mountain to their rightful owners, this blessing grants a +1 bonus to AC and saving throws.",
		descriptionFull : "Your reward for returning the three legendary weapons of White Plume Mountain to their rightful owners, this blessing grants a +1 bonus to AC and saving throws.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
	"blessing of protection (ddep6-3)" : {	
		name : "Blessing of Protection (DDEP6-3)",
		source : [["AL","S6"]],
		description : "My reward from SEER for defeating the drow priestess Kiaransalee and her undead forces, this blessing grants a +1 bonus to AC and saving throws. While under its effect, my eyes have developed small flecks of brilliant gold, and my senses seem just a little bit sharper.",
		descriptionFull : "Your reward from SEER for defeating the drow priestess Kiaransalee and her undead forces, this blessing grants a +1 bonus to AC and saving throws. While under its effect, your eyes have developed small flecks of brilliant gold, and your senses seem just a little bit sharper.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
	"blessing of protection: selune's (fr-dc-pandora-jwei-6)" : {	
		name : "Selune's Blessing of Protection",
		source : [["AL","FR-DC-PANDORA-JWEI-6"]],
		description : "Selune grants me her blessing for as long as I hold sympathy and kindness in my heart towards the good-aligned, and give my all to protect Pandora. I gain a +1 bonus to AC and saving throws.",
		descriptionFull : "Selune grants her blessing upon you for as long as you hold sympathy and kindness in your heart towards the good aligned and for as long as you give it your all to protect Pandora.\n   You gain a +1 bonus to AC and saving throws.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
	"blessing of protection: flux's (sj-dc-flumph-3)" : {	
		name : "Flux's Blessing of Protection",
		source : [["AL","SJ-DC-FLUMPH-3"]],
		description : "This blessing gives me a +1 bonus to Armor Class and saving throws. My eyes glow the color of amethyst when encountering an Aberration.",
		descriptionFull : "Your eyes glow the color of amethyst when encountering an aberration.\n   You gain a +1 bonus to AC and saving throws.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
	"blessing of protection: ilmater's (sj-dc-triden-tfc)" : {	
		name : "Ilmater's Blessing of Protection",
		source : [["AL","SJ-DC-TRIDEN-TFC"]],
		description : "This blessing manifests as a light trail of blood dripping from my forearm. I gain a +1 bonus to Armor Class and saving throws.",
		descriptionFull : "The blessing manifests as a light trail of blood dripping from your forearm.\n   You gain a +1 bonus to AC and saving throws.",
		extraAC : [{name : "Blessing of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus to all my saving throws." }]
	},
	"blessing of valhalla: illithids (fr-dc-death)" : {
		name : "Illithids (Blessing) of Valhalla",
		source : [["AL","FR-DC-DEATH"]],
		description : "As a Magic action once per 7 days, I can summon two spectral mind flayers within 60 ft. These spirits (Berserkers) are immune to Charmed and Frightened, disappear after 1 hour or at 0 HP, are Friendly and follow my commands.",
		descriptionFull : "When using the Blessing of Valhalla awarded by this module, the berserkers summoned appear as spectral mind flayer. This is only a cosmetic change.\n   This Blessing grants you the power to summon 2 spirit warriors, as if you are blowing a silver Horn of Valhalla.\n   In response, warrior spirits from the plane of Ysgard appear in unoccupied spaces within 60 feet of you. Each spirit uses the Berserker stat block and returns to Ysgard after 1 hour or when it drops to 0 Hit Points. The spirits look like living, breathing warriors, and they have Immunity to the Charmed and Frightened conditions.\n   Once you use this Blessing, you can't use it again until 7 days have passed.",
		limfeaname : "Blessing of Valhalla",
		usages : 1,
		recovery : "7 days",
		action : [["action", " (2 Berserkers)"]],
		creaturesAdd : [["Berserker"]],
	},
	"blessing of valhalla: the friends you made along the way (sj-dc-dd-11)" : {
		name : "The Friends You Made Along the Way (Valhalla)",
		source : [["AL","SJ-DC-DD-11"]],
		description : "The Monad has taken me on many adventures & the bonds I built will last a lifetime. No matter where I go, I can always count on my fellow passengers & friends from Wildspace to aid me if I call. As Magic action once per 7 days, I can summon 2 warrior spirits in 60 ft. The Berserkers are immune to Charmed & Frightened, disappear after 1 hr or at 0 HP, are Friendly & obey my orders.",
		descriptionFull : "The Monad's course has taken you on numerous adventures, and the bonds you built in myriad worlds will last a lifetime. No matter where you are, you know you can always count on your fellow passengers and friends from Wildspace to come to your aid. All you need to do is call.\n   This Blessing grants you the power to summon 2 spirit warriors, as if you are blowing a silver Horn of Valhalla.\n   In response, warrior spirits from the plane of Ysgard appear in unoccupied spaces within 60 feet of you. Each spirit uses the Berserker stat block and returns to Ysgard after 1 hour or when it drops to 0 Hit Points. The spirits look like living, breathing warriors, and they have Immunity to the Charmed and Frightened conditions.\n   Once you use this Blessing, you can't use it again until 7 days have passed.",
		limfeaname : "Blessing of Valhalla",
		usages : 1,
		recovery : "7 days",
		action : [["action", " (2 Berserkers)"]],
		creaturesAdd : [["Berserker"]],
	},
	"blessing of valhalla (sj-dc-ttuc-6)" : {
		name : "Blessing of Valhalla (TTUC-6)",
		source : [["AL","SJ-DC-TTUC-6"]],
		description : "As a Magic action once per 7 days, I can summon 2 cursed souls of Amaranthine within 60 ft. These Astral Elves (Berserker statblocks) appear to wield longswords, are immune to the Charmed and Frightened conditions, disappear after 1 hour or at 0 HP, are Friendly and follow my commands.",
		descriptionFull : "The berserkers summoned by the blessing are the \"Cursed souls of Amaranthine\", they have the appearance of astral elves, reflavor their greataxes as longswords but don't change the damage.\n   This Blessing grants you the power to summon 2 spirit warriors, as if you are blowing a silver Horn of Valhalla.\n   In response, warrior spirits from the plane of Ysgard appear in unoccupied spaces within 60 feet of you. Each spirit uses the Berserker stat block and returns to Ysgard after 1 hour or when it drops to 0 Hit Points. The spirits look like living, breathing warriors, and they have Immunity to the Charmed and Frightened conditions.\n   Once you use this Blessing, you can't use it again until 7 days have passed.",
		limfeaname : "Blessing of Valhalla",
		usages : 1,
		recovery : "7 days",
		action : [["action", " (2 Berserkers)"]],
		creaturesAdd : [["Berserker"]],
	},
	"blessing of wound closure (sj-dc-mist-1)" : {
		name : "Blessing of Wound Closure (MIST-1)",
		source : [["AL","SJ-DC"]],
		description : "With this blessing, I'm permanently marked with a faint ghostly handprint somewhere on my body. I can treat any Death saving throw under 10 as a pass and when I roll a Hit Die to regain HP, double the amount it restores.",
		descriptionFull : "Characters with this blessing a permanently marked with a faint, ghostly handprint somewhere on their body.\n   This blessing grants you the benefits of a Periapt of Wound Closure.\n   " + toUni("Life Preservation") + ". Whenever you make a Death Saving Throw, you can change a roll of 9 or lower to a 10, turning a failed save into a successful one.\n   " + toUni("Natural Healing Boost") + ". Whenever you roll a Hit Point Die to regain Hit Points, double the number of Hit Points it restores.",
	},
    "boon of fate: crowd favorite (ps-dc-strat-undead-3)": {
		name : "Crowd Favorite (Boon of Fate)",
		source : [["AL","PS-DC-STRAT-UNDEAD-3"]],
		description: "When I or a creature in 60 ft passes or fails a D20 Test, I can roll 2d4 and apply the total as a bonus or penalty to the roll. When I do so, I hear a boisterous crowd cheering or heckling the target; I can make this audible to others. Once I use this benefit, I can't use it again until I roll initiative or finish a rest. I also increase 1 ability score of my choice by 1 (max 30).",
		descriptionFull: "When using this boon, you hear a boisterous crowd either cheering you on or heckling your target. You can make this crowd audible to others as well.\n   You gain the following benefits.\n \u2022 Ability Score Improvement. Increase one ability score of your choice by 1, to a maximum of 30.\n \u2022 Improved Fate. When you or another creature within 60 feet of you succeeds on or fails a D20 Test, you can roll 2d4 and apply the total rolled as a bonus or penalty to the d20 roll. Once you use this benefit, you can't use it again until you roll Initiative or finish a Short or Long Rest.",
		scorestxt : "+1 to one ability score of my choice (max 30)",
		prereqeval: function (v) {
			return v.characterLevel >= 19;
		},
    },
    "boon of quick casting (ps-dc-ceg-2)": {
		name : "Boon of Quick Casting (PS-DC-CEG-2)",
		source : [["AL","PS-DC"]],
        description: "Choose one of my spells of 1st through 3rd level that has a casting time of 1 action. That spell's casting time is now 1 bonus action for me. I also gain one small permanent snake transformation on my body in a location of my choosing, such as a patch of scales, forked tongue, etc.",
		descriptionFull : "I choose one of my spells of 1st through 3rd level that has a casting time of 1 action. That spell's casting time is now 1 bonus action for me.\n   Each character who gains the boon also gains one small, permanent snake transformation of their choosing on their body in a location of their choosing. Examples include a small patch of scales, a slitted eye, a forked tongue, etc.\n   Characters who are not yet 20th level do not immediately receive this boon, but can instead choose to receive it once their characters reach 20th level.",
		prereqeval: function (v) {
			return v.characterLevel >= 20;
		},
    },
    "boon of recovery (ps-dc-strat-dragon-4)": {
		name : "Boon of Recovery (STRAT-DRAGON-4)",
		source : [["AL","PS-DC"]],
        description: "When I reversed the planar incarnate's transformation, I was flooded with the energy of Arborea, giving me otherworldly healing abilities. Once per Long Rest when I'd be reduced to 0 HP, I can drop to 1 instead and regain HP equal to half my max HP. I gain ten d10s that I can roll to heal myself as a bonus action, which recover on a Long Rest. I also increase 1 ability score of my choice by 1 (max 30).",
		descriptionFull : "When the characters reverse the planar incarnate's transformation, they are flooded with the planar energy of Arborea, granting them otherworldly healing abilities.\n   I gain the following benefits.\n \u2022 Ability Score Improvement. Increase one ability score of my choice by 1, to a Maximum of 30.\n \u2022 Last Stand. When I would be reduced to 0 Hit Points, I can drop to 1 Hit Point instead and regain a number of Hit Points equal to half my Hit Point maximum. Once I use this benefit, I can't use it again until I finish a Long Rest.\n \u2022 Recover. I have a pool of ten d10s. As a Bonus Action, I can expend dice from the pool, roll those dice, and regain a number of Hit Points equal to the roll's total. I regain all the expended dice when I finish a Long Rest.",
		scorestxt : "+1 to one ability score of my choice (max 30)",
		prereqeval: function (v) {
			return v.characterLevel >= 19;
		},
		limfeaname: "Last Stand (Recovery)",
		usages: 1,
		recovery: "Long Rest",
		extraLimitedFeatures : [{
			limfeaname: "Recovery Dice",
			usages: 10,
			recovery: "long rest",
		}],
		action : [["bonus action", "Boon of Recovery"]],
    },
    "boon of recovery: that pick me up feeling (ps-dc-strat-undead-4)": {
		name : "That Pick Me Up Feeling (Boon of Recovery)",
		source : [["AL","PS-DC-STRAT-UNDEAD-4"]],
        description: "When this boon is activated, I feel as if time stops around me as Sigil's best motivational speakers give a rousing speech. Once per Long Rest when I'd be reduced to 0 HP, I can drop to 1 instead and regain HP equal to half my max HP. I gain ten d10s that I can roll to heal myself as a bonus action, which recover on a Long Rest. I also increase 1 ability score of my choice by 1 (max 30).",
		descriptionFull : "When activating this boon, you feel as if time stops all around you as Sigil's best motivational speakers give a rousing speech.\n   I gain the following benefits.\n \u2022 Ability Score Improvement. Increase one ability score of my choice by 1, to a Maximum of 30.\n \u2022 Last Stand. When I would be reduced to 0 Hit Points, I can drop to 1 Hit Point instead and regain a number of Hit Points equal to half my Hit Point maximum. Once I use this benefit, I can't use it again until I finish a Long Rest.\n \u2022 Recover. I have a pool of ten d10s. As a Bonus Action, I can expend dice from the pool, roll those dice, and regain a number of Hit Points equal to the roll's total. I regain all the expended dice when I finish a Long Rest.",
		scorestxt : "+1 to one ability score of my choice (max 30)",
		prereqeval: function (v) {
			return v.characterLevel >= 19;
		},
		limfeaname: "Last Stand (Recovery)",
		usages: 1,
		recovery: "Long Rest",
		extraLimitedFeatures : [{
			limfeaname: "Recovery Dice",
			usages: 10,
			recovery: "long rest",
		}],
		action : [["bonus action", "Boon of Recovery"]],
    },
    "boon of skill proficiency: star power (ps-dc-ravengard)": {
		name : "Star Power (Boon of Skill Proficiency)",
		source : [["AL","PS-DC-RAVENGARD"]],
        description: "\"Everyone's seen it, you badass action movie star you. Did you really do those things? Doesn't matter. They believe you did. They believe you can. That counts for a lot.\" I gain proficiency in all skills, expertise in 1 skill and +1 to any stat (max 30).",
		descriptionFull: "\"Everyone's seen it, you badass action movie star you. Did you really do those things? Doesn't matter. They believe you did. They believe you can. That counts for a lot.\" I gain the following benefits.\n \u2022 Ability Score Improvement. Increase one ability score of my choice by 1, to a Maximum of 30.\n \u2022 All-Around Adept. I gain proficiency in all skills.\n \u2022 Expertise. Choose one skill in which I lack Expertise. I gain Expertise in that skill. [The Boon of Skill Proficiency appears to have been replaced by the Epic Boon Feat - Boon of Skill, and has been updated accordingly]",
        skills: ["Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion"],
		skillstxt: "I gain expertise in one skill of choice.",
		scorestxt : "+1 to one ability score of my choice (max 30)",
		prereqeval: function (v) {
			return v.characterLevel >= 19;
		},
    },
    "boon of speed: dance of the liberated (ps-dc-tym-php-div-1)": {
		name : "Dance of the Liberated (Boon of Speed)",
		source : [["AL","PS-DC-TYM-PHP-DIV-1"]],
        description: "I held firm against temptation and stagnation and was given this boon my Mystra on behalf of the Dancing Goddess. My movements have an airy grace and subtle charm. I walk with a spring in my step and a twinkle in my eye. I gain +1 to any stat (max 30) and my Speed increases by 30 ft. I can also Disengage as a bonus action, which ends the Grappled condition on me.",
        descriptionFull: "There is an airy grace to your steps, and a subtle charm to your movements. In the face of temptation and stagnation, you held firm, and now walk with a spring in your step and a twinkle in your eye, a boon provided by Mystra on behalf of the Dancing Goddess.\n   You gain the following benefits.\n \u2022 Ability Score Improvement. Increase one ability score of your choice by 1, to a Maximum of 30.\n \u2022 Escape Artist. As a Bonus Action, you can take the Disengage action, which also ends the Grappled condition on you.\n \u2022 Quickness. Your Speed increases by 30 feet.",
		scorestxt : "+1 to one ability score of my choice (max 30)",
		speed: {walk: "+30"},
        action : [["bonus","Disengage (Ends Grappled)"]],
		prereqeval: function (v) {
			return v.characterLevel >= 19;
		},
    },
    "boon of the unfettered (ps-dc-pop-1)": {
		name : "Boon of the Unfettered (PS-DC-POP-1)",
		source : [["AL","PS-DC"]],
        description: "You have dealt with the ultimate restraints, anything less is child's play. You have advantage on ability checks made to resist being Grappled. You can also use an action to automatically escape a grapple or free yourself from restraints.",
        descriptionFull: "You have dealt with the ultimate restraints, anything less is child's-play.\n   You have advantage on ability checks made to resist being grappled. In addition, you can use an action to automatically escape a grapple or free yourself of restraints of any kind.",
        savetxt : {
           adv_vs : ["resisting grapple"]
        },
        action : [["action","Unfettered Boon (escape grapple/restraints)"]],
		prereqeval: function (v) {
			return v.characterLevel >= 20;
		},
    },
	"chardalyn poisoning (ddal10-9)" : {	
		name : "Chardalyn Poisoning (DDAL10-9)",
		source : [["AL","S10"]],
		description : "I kept some chardalyn and find the substance's affinity for magic affecting me in inopportune ways. So long as I retain the chardalyn (no matter the amount), I have disadvantage on saving throws against spells, and spell attacks against me have advantage.",
		descriptionFull : "Characters who keep any of the chardalyn find the substance's affinity for magic affecting them in inopportune ways. So long as the character retains the chardalyn (no matter the amount), they have disadvantage on saving throws against spells, and spell attacks against them have advantage.",
		savetxt : { text : ["Disadv. on saves vs spells. Spell atks against you have adv."] }
	},
	"charm of the comet: enchanted amulet (fr-dc-pandora-jwei-7)" : {
		name : "Enchanted Amulet (Charm of the Comet)",
		source : [["AL","FR-DC-PANDORA-JWEI-7"]],
		description : "This amulet grants me some of the charm and beauty of Sune to draw attention to me. As an action, I can force a visible creature in 60 ft to focus on me. For 1 minute, creatures other than me and the target are invisible to the target. The effect ends if any creature other than me damages the target or forces them to make a saving throw. Charm vanishes once used 3 times.",
		descriptionFull : "As an action, you can force a creature you can see within 60 feet of you to focus on you. For 1 minute, creatures other than you and the target are invisible to the target. The effect ends if any creature other than you damages the target or forces the target to make a saving throw. Once used three times, the charm vanishes from you.\n   This amulet grants the user a tiny portion of the charm and beauty of Sune to draw and focus the attention of their target upon themselves.",
		limfeaname : "Charm of the Comet",
		usages : 3,
		recovery : "never",
		action : [["action", ""]],
	},
	"charm of the sage: high heralds (fr-dc-saerloon-0)" : {
		name : "Charm of the High Heralds (Sage)",
		source : [["AL","FR-DC-Saerloon-0"]],
		description : "I can cast Divination, requiring no components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). When cast in this way, I contact Old Night, a High Herald and head librarian of Herald's Holdfast, the library complex holding the lore gathered by the Heralds over centuries. Charm vanishes once used 3 times.",
		descriptionFull : "I can cast Divination, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Charm vanishes once used 3 times.\n   Instead of contacting a god or a god's servant, this charm allows you to contact Old Night: A High Herald and head librarian of Herald's Holdfast, the library complex holding all the lore gathered by the Heralds over centuries.",
		limfeaname : "Charm of the Sage",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["divination"],
			selection : ["divination"],
			firstCol : "1",
		}],
		spellChanges : {
		"divination" : {
			components : "",
			changes : "My Charm of the Sage allows me to cast Divination three times without requiring components."
			}
		},
	},
	"charm of the sun: gift of shine (fr-dc-diva)" : {
		name : "Gift of Shine (Charm of the Sun)",
		source : [["AL","FR-DC-DIVA"]],
		description : "Divaine bestowed upon me the gift of shine - a reminder that fame can be blinding, not just to me, but to everyone around me. Use it wisely. I learn the Light cantrip if I don't already know it. I can cast Sunburst, requiring no spell components and using my Intelligence, Wisdom, or Charisma as the spellcasting ability (my choice). Once used, the charm vanishes from me, and I unlearn the Light cantrip gained from this charm.",
		descriptionFull : "Divaine bestows upon you the gift of shine—a reminder that fame can be blinding, not just to you, but to everyone around you. Use it wisely.\n   You learn the Light cantrip if you don't already know it. You can cast Sunburst, requiring no spell components and using your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice). Once used, the charm vanishes from you, and you unlearn the Light cantrip gained from this charm.",
		limfeaname : "Gift of Shine (Sunburst)",
		usages : 1,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : [{
			name : "Light",
			spells : ["light"],
			selection : ["light"],
			firstCol : "atwill"
		}, {
			name : "1 charge",
			spells : ["sunburst"],
			selection : ["sunburst"],
			firstCol : "1"
		}],
		spellChanges : {
		"sunburst" : {
			components : "",
			changes : "My Charm of the Sun allows me to cast Sunburst one time without requiring components."
			}
		},
	},
	"dreamwalker (ddal5-11)" : {
		name : "Dreamwalker (DDAL5-11)",
		source : [["AL","S5"]],
		description : "My meditations have granted me the gift of foresight. Upon receiving this reward, I roll a d20 and record the number rolled. Once (before the roll), I can replace any atk, save, or ability check made by me or a creature I can see with the number I rolled. Once I have used my die this way, remove the reward. I may regain this story award by spending another 25 DT.",
		descriptionFull : "Kryshilir has taught you to look beyond the veil of the world and navigate your dreams. By spending 25 downtime days, you travel to the Seven Stones and meditate under Kryshilir's whispered guidance. Upon completing this downtime activity, you gain the Dreamwalker story award (below):\n   " + toUni("Dreamwalker") + ". Your meditations have granted you the gift of foresight. Upon receiving this story award, roll a d20 and record the number rolled. Once, you can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with the number you rolled. You must choose to do so before the roll. Once you have used this story award in this fashion, remove it. This story award may be earned again as often as you like, but you must complete the Dreamwalker downtime activity (above) each time and may not do so again until you no longer possess this story award.",
		limfeaname : "Dreamwalker",
		usages : 1,
		recovery : "25 DT",
		additional : "d20",
	},
	"favor of candlekeep - language (ddal0-3)" : {
		name : "Favor of Candlekeep (DDAL0-3)",
		source : [["AL","S0"]],
		description : "Inkpot and the scribes of Candlekeep are extremely grateful for my stories and account of my time in Warlock's Crypt. In return, they have offered to teach me ancient Netherese as an immersion course; to learn Ancient Netherese, I must spend 120 downtime days at Candlekeep doing nothing other than working on my knowledge of this language.",
		descriptionFull : "Inkpot and the scribes of Candlekeep are extremely grateful for your stories and account of your time in Warlock's Crypt. In return, they have offered to teach you ancient Netherese as an immersion course; if you would like to learn ancient Netherese, you must spend 120 downtime days at Candlekeep doing nothing other than working on your knowledge of this language. If you are not interested in learning ancient Netherese, you may instead choose three spell scrolls of up to 5th level (tier 3) or 7th level (tier 4) for free from an approved Adventurers League resource.",
		languageProfs : ["Ancient Netherese"]
	},
	"flying snake (ddep7-1)" : {
		name : "Flying Snake (DDEP7-1)",
		source : [["AL","S7"]],
		description : "I've unmasked the merchant prince Ifan Talro'aas a criminal. The Emerald Enclave is sitting on the information, choosing to watch the prince instead of show their hand. As a reward, I received a trained flying snake. Once per adventure, I can attach a message to the snake and send it to an ally. This works as an Animal Messenger spell, but can only be sent to people I know.",
		descriptionFull : "You've unmasked the merchant prince Ifan Talro'aas a criminal. The Emerald Enclave is sitting on the information, choosing to monitor the prince rather than show their hand. As a reward, they've given you a trained flying snake to serve as your messenger. Once per adventure, you can attach a message to the flying snake and send it to one of your allies. This works as an animal messenger spell, but the message can only be sent to people you know.",
		limfeaname : "Flying Snake",
		usages : 1,
		recovery : "mod",
		spellcastingBonus : {
			name : "Once per adventure",
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
		name : "Gratitude of Brightstar Moonsilver",
		source : [["AL","CCC-BMG-37 HULB3-1"]],
		description : "Brightstar is grateful for the rescue and will serve as a mount for Lawful Good adventurers for three adventures. His stats are the standard Unicorn stats found in the Monster Manual.",
		descriptionFull : "For rescuing Brightstar, he is grateful and will serve as a mount for lawful good adventurers for three adventures. His stats are the standard unicorn stats found on page 294 of the Monster Manual.",
		limfeaname : "Unicorn Mount (Brightstar Moonsilver)",
		usages : 3,
		recovery : "never",
		creaturesAdd : [["Unicorn (Brightstar Moonsilver)", true]],
		creatureOptions : [{
			name : "Unicorn (Brightstar Moonsilver)",
			nameAlt : ["Brightstar Moonsilver"],
			source : [["AL","CCC"]],
			size : 2, //Large,
			type : "Celestial",
			header: "Mount",
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
				Value(prefix + "Comp.Desc.Name", "Brightstar Moonsilver");
				},
				removeeval : function(prefix, lvl) {
				RemoveString(prefix + 'Cnote.Left', 'Legendary Actions:\n \u2022 The Unicorn can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another turn. The Unicorn regains spent legendary actions at the start of its turn.\n \u2022 Hooves: The unicorn makes one attack with its hooves.\n \u2022 Shimmering Shield (Costs 2 Actions): The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of its next turn.\n \u2022 Heal Self (Costs 3 Actions): The unicorn magically regains 11 (2d8 + 2) hit points.', true);
				Value(prefix + "Comp.Desc.Name", "");
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
		description : "In spreading the truth about the events that unfolded in Hartsvale, I find myself blessed by the All-Father and gain temporary use of the Lucky feat, except that any expended luck points don't return. Once all three points have been spent, remove this story award.",
		descriptionFull : "In spreading the truth about the events that unfolded in Hartsvale, you find yourself blessed by the All-Father and gain temporary use of the Lucky feat, except that any expended luck points don't return. Once all three points have been spent, remove this story award.\n   You can use Luck points to give yourself Advantage on a D20 Test, or to give a creature who rolls a d20 for an attack roll against you Disadvantage on that roll.",
		limfeaname : "Luck Points (Hartkiller)",
		usages : 3,
		recovery : "never",
	},
	"hall of honor (ddal6-3)" : {
		name : "Hall of Honor (DDAL6-3)",
		source : [["AL","S6"]],
		description : "I spent time in the hall of honor learning about the deeds of the ancient Ostorian Honor Guard. After spending 25 downtime days I gained advantage on checks in dealings with true Giants (Cloud, Hill, Fire, Stone, or Storm) when the subject of the Ostorian Honor Guard can be included in the conversation.",
		descriptionFull : "Characters can spend time in the hall of honor learning about the deeds of the ancient Ostorian Honor Guard. A character who spends 25 downtime days will gain advantage on checks in dealings with true giants (Cloud, Hill, Fire, Stone, or Storm) when the subject of the Ostorian Honor Guard can be included in the conversation.",
	},
	"hall of mirth (ddal6-3)" : {
		name : "Hall of Mirth (DDAL6-3)",
		source : [["AL","S6"]],
		description : "I spent time in the Hall of Mirth learning about giantkind, ancient Ostoria, and the Giant language. I chose to learn Giant for 50 downtime days. (Optional) In addition, I chose to learn about Ostoria for another 50 downtime days, giving me advantage on any future checks regarding Giants or Ostoria.",
		descriptionFull : "Characters can spend time in the Hall of Mirth learning about giant kind, ancient Ostoria, and the giant language. At the conclusion of this adventure, a character may choose to learn the giant language for 50 downtime days. In addition, a character may choose to learn about Ostoria for another 50 downtime days, giving them advantage on any future checks regarding giants or Ostoria.",
		languageProfs : ["Giant"]
	},
	"hall of omens (ddal6-3)(diviner)" : {	
		name : "Hall of Omens (DDAL6-3)",
		source : [["AL","S6"]],
		description : "I spent time in the Hall of Omens learning about signs and portents. As a Diviner wizard, I spent 200 downtime days to gain 1 additional portent die.",
		descriptionFull : "Characters can spend time in the Hall of Omens learning about signs and portents. A wizard of the school of divination may spend 200 downtime days to gain 1 additional portent die.",
		limfeaname : "Additional Portent Die (d20)", 
		usages : 1,
		recovery : "long rest"
	},
	"hall of omens (ddal6-3)(non-diviner)" : {	
		name : "Hall of Omens (DDAL6-3)",
		source : [["AL","S6"]],
		description : "I spent time in the Hall of Omens learning about signs and portents. I spent 50 downtime days to gain 3 Luck Points and may use them as the Lucky feat. Once the 3 Luck Points are spent they aren't regained.",
		descriptionFull : "Characters can spend time in the Hall of Omens learning about signs and portents. Any character that is not a wizard of divination may spend 50 downtime days to gain 3 Luck Points and may use them as the Lucky feat. Once the 3 Luck Points are spent they are not regained.",
		limfeaname : "Luck Points (Omens)",
		usages : 3,
		recovery : "never",
	},
	"lich slayer (ddep7-2)" : {
		name : "Lich Slayer (DDEP7-2)",
		source : [["AL","S7"]],
		description : "I helped a heroic alliance stop Szass Tam & Valindra Shadowmantle from destroying Port Nyanzaru & conquering Chult. My name spread throughout the necromantic orders, where I am feared forevermore. I have advantage on saving throws made to resist spells cast by Necromancers and other undead creatures.",
		descriptionFull : "You helped an alliance of heroes stop Szass Tam and Valindra Shadowmantle from destroying Port Nyanzaru and conquering Chult. Your names spread throughout the necromantic orders, where they are feared forevermore. You have advantage on saving throws made to resist spells cast by necromancers and other undead creatures.",
		savetxt : { adv_vs : ["spells cast by Necromancers or Undead"] },
	},
	"lord of the gorge (ddal0-11f)" : {
		name : "Lord of the Gorge (DDAL0-11F)",
		source : [["AL","S0"]],
		description : "I killed Xak'thar the Twin, the ravenous conjoined twin pit fiends of the Gorge of Slaughter, & a ascended to its place as lord of that pit. For a year & a day, my reign was bloody & brutal — until a meddling adventurer defeated me! I retired from AL play for 366 actual days). Upon my return, I spoke Infernal & gained a lemure follower: fanatically devoted but entirely pitiful.",
		descriptionFull : "You defeated and killed Xak'thar the Twin, the ravenous conjoined twin pit fiends of the Gorge of Slaughter. You ascended to its place as lord of that pit, and for a year and a day your reign was bloody and brutal—until some meddling adventure defeated you! You are retired from D&D Adventurers League play for a year and a day from the date you receive this reward, and upon your return you are proficient in the Infernal tongue and have acquired a lemure follower; this creature is fanatical in its devotion but is entirely pitiful. Downtime days can't be used to lessen this time spent in Nessus.",
		languageProfs : ["Infernal"]
	},
	"luna lightbearers (wbw-dc-zodiac-0)" : {
		name : "Luna Lightbearers",
		source : [["AL","WBW-DC-ZODIAC-0"]],
		description : "Lunafrey has made me an officer of the Luna Carnival. I may use it as a home or place of rest & carnival folk are more inclined to help me. I also have a magical tattoo of a golden crescent moon that only appears under a full moon or when activated. As a bonus action, I can make the tattoo shed bright moonlight in a 5-ft radius & dim light for 5 ft more, or stop.",
		descriptionFull : "Lunafreya offers patronage, as officers of the carnival. Characters may use the carnival as a home, or place of rest. Carnival folk from the Luna Carnival may be more inclined to provide assistance to the characters.\n   Lightbearers are offered a magical tattoo of a golden crescent moon, this invisible golden tattoo only reveals itself under the light of a full moon, or when activated.\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright moonlight in a 5-foot radius and dim light for an additional 5 feet, or to extinguish the light.",
		action : [["bonus action", "Moon Tattoo (Glow/Extinguish)"]]
	},
	"nature of the weave (ccc-rozk-1-2) (arcana prof)" : {	
		name : "Nature of the Weave (Proficiency)",
		source : [["AL","CCC-ROZK-1-2"]],
		description : "I uncovered a series of tomes written by the archmage, Manshoon. After spending 50 downtime days, I gained proficiency in the Arcana skill.",
		descriptionFull : "You have uncovered a series of tomes written by the archmage, Manshoon. By spending 50 downtime days, you gain proficiency in the Arcana skill. If you are already proficient in Arcana, you double your proficiency when making checks with the skill.",
		skillstxt : "You gain proficiency in Arcana. If you are already proficient, you gain expertise.",
		skills : ["Arcana"]
	},
	"nature of the weave (ccc-rozk-1-2) (arcana expert)" : {	
		name : "Nature of the Weave (Expertise)",
		source : [["AL","CCC-ROZK-1-2"]],
		description : "I uncovered a series of tomes written by the archmage, Manshoon. After spending 50 downtime days while already proficient in Arcana, I double my proficiency when making checks with the skill.",
		descriptionFull : "You have uncovered a series of tomes written by the archmage, Manshoon. By spending 50 downtime days, you gain proficiency in the Arcana skill. If you are already proficient in Arcana, you double your proficiency when making checks with the skill.",
		skillstxt : "You gain proficiency in Arcana. If you are already proficient, you gain expertise.",
		skills : [['Arcana', 'full']]
	},
	"plague buster (ddep7-2)" : {
		name : "Plague Buster (DDEP7-2)",
		source : [["AL","S7"]],
		description : "I helped an alliance of heroes concoct an antidote for the zombie plague ravaging Chult. My exposure to the antidote has hardened my immune system. I have advantage on saving throws made to resist disease or magical contagions.",
		descriptionFull : "You helped an alliance of heroes concoct an antidote for the zombie plague ravaging Chult. Your exposure to the antidote has hardened your immune system against disease. You have advantage on saving throws made to resist disease. [This doesn't really have an effect under the 2024 rules, so updated to include magical contagions.]",
		savetxt : { adv_vs : ["disease"] },
	},
	"the qualith experience (ddia-volo)" : {
		name : "The Qualith Experience",
		source : [["AL","DDIA-VOLO"]],
		description : "Though the mind flayer \"written\" language is practically impossible for anyone else to craft, I gain the ability to better understand its nature; any Intelligence check made to identify or translate a Qualith phrase automatically succeeds.",
		descriptionFull : "Though the mind flayer \"written\" language is practically impossible for anyone to craft other than mind flayers, you gain the ability to better understand the nature of the mind flayer's seldom-used written language; any Intelligence check made to identify or translate a Qualith expression automatically succeeds.",
		languageProfs : ["Qualith (translate)"]
	},
	"quasit's essence (ddal5-8)" : {	
		name : "Quasit's Essence (DDAL5-8)",
		source : [["AL","S5"]],
		description : "The Quasit K'nap, long trapped in Durlag's Tower with the foul nalfeshnee Schvalt, showed a greater-than-average ability to act autonomously. I retained a bit of his fleeting essence & bolstered my own Quasit familiar via a powerful ritual with a magic staff. This ritual granted me access to the Variant: Quasit Familiar. The destroyed staff counts against my MIL & can't be regained.",
		descriptionFull : "If you defeated K'nap, you gain access to a special ritual. By spending five downtime days destroying the Staff of Thunder and Lightning and mixing its arcane components with the essence of the quasit, you gain access to the Variant: Quasit Familiar rule as described on page 63 of the Monster Manual. Gaining the benefit of this variant rule uses one of your attunement slots.\n   In addition, the destroyed staff permanently counts against the number of permanent magic items you possess, and can't be traded — even if you later forfeit the benefit of this ritual. If you ever choose to “unattune” from the benefit of this ritual, the attunement slot is once more available, but the staff of thunder and lightning and the benefit of the ritual fueled by its destruction are forever lost, never to be reclaimed.\n   " + toUni("Variant: Familiar") + ". The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 ft of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond."
	},
	"student of stone (ddal5-11)" : {	
		name : "Student of Stone (DDAL5-11)",
		source : [["AL","S5"]],
		description : "I studied under Illsenstaad, a legendary Stone Giant loremaster and stone carver. I gain the benefit of the dwarven Stonecunning trait. I also gain proficiency in Mason's Tools and Giant language if I'm not already proficient.",
		descriptionFull : "Illsenstaad has chosen you and you alone to complete his life's work and put his soul to rest. By spending a total of 365 downtime days (these need not be spent all at once) possessed by Illsenstaad, allowing him to tell his stories and carve them into the living rock of Hotun-Shûl, you gain the Student of Stone story award (below). If you are a dwarf, possess the Guild Artisan (mason or stonecutter) background, or are otherwise proficient in mason's tools; you complete this in half the normal time.\n   " + toUni("Student of Stone") + ". You have studied under the tutelage of Illsenstaad, a legendary stone giant loremaster and stone carver. You gain the benefit of the dwarven Stonecunning trait. If you already possess the Stonecunning trait, you triple your proficiency bonus instead of doubling it. In addition, you also gain proficiency in mason's tools and the Giant language if you are not already proficient. [New version of Stonecunning no longer relates to skill checks, so removed that portion from the short description.]",
		toolProfs : ["Mason's Tools"],
		languageProfs : ["Giant"],
		limfeaname: "Stonecunning (Feat)",
			minlevel: 1,
			usages: "Proficiency bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "long rest",
		action: [["bonus action", "Tremorsense"]],
	},
    "szass tam's arcane essence (ddep0-1)": {
		name : "Szass Tam's Arcane Essence (Boon)",
		source : [["AL","DDEP0-1"]],
        description: "This spark of energy was originally wrested from the vile lich, Szass Tam himself, and grants one additional 9th level spell slot, provided that I already have one.",
        descriptionFull: "You have wrested away part of Szass Tam's essence. Specifically, this spark of energy was originally wrested from the vile lich himself, and grants one additional 9th level spell slot, provided that you already have one. (This feat must be selected after you have a 9th level spell slot on your character sheet. Otherwise it won't function properly.)",
        addMod : { type : "", field : "P6.SSfront.SpellSlots.CheckboxesSet.lvl9", mod : 1, text: "I gain 1 additional 9th level spell slot" },
    },
    "szass tam's planar essence (ddep0-1)": {
		name : "Szass Tam's Planar Essence (Boon)",
		source : [["AL","DDEP0-1"]],
        description: "This spark of energy allowed Szass Tam's simulacrum to navigate the planes. While not as proficient, I retain a small bit of its power. Once per short rest, I can cast Plane Shift (no spell slot or components required). I can target only myself, and travel to or from one of the Outer Planes listed in Appendix A of the PHB. This choice is permanent.",
		descriptionFull: "I have wrested away part of Szass Tam's essence. Specifically, this spark of energy allowed the lich's simulacrum to navigate the planes – and while I'm not as proficient with this skill, I can retain a small bit of its power. Once per short rest, I can cast the plane shift spell (no spell slot or components required) as an action. I can target only myself, and travel to or from one of the Outer Planes listed in Appendix C of the PHB. This choice is permanent.",
        limfeaname : "Plane Shift (Chosen Plane)",
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
		name : "Thanks of Ilmater - Immortality",
		source : [["AL","DDAL9-20"]],
        description: "I worked the will of the gods of light to maintain the balance of the Blood War. Now that I'm 20th lvl, I may select this boon. I stop aging, I'm immune to any effect that would age me, and I can't die from old age.",
        descriptionFull: "You have worked the will of the gods of light to maintain the balance of the Blood War. Now that you are 20th lvl, or when you reach 20th lvl, you may select this boon. You stop aging. You are immune to any effect that would age you, and you can't die from old age.",
        savetxt : {
            immune : ["magical aging effects"],
        },
    },
    "thanks of ilmater - planar travel": {
		name : "Thanks of Ilmater - Planar Travel",
		source : [["AL","DDAL9-20"]],
        description: "I worked the will of the gods of light to maintain the balance of the Blood War. Now that I'm lvl 20, I can claim this boon. Once per short rest, I can cast Plane Shift (no spell slot or components required). I can target only myself, and travel to or from Brightwater: the realm of Ilmater and Sune in the Seven Heavens of Celestia.",
        descriptionFull: "You have worked the will of the gods of light to maintain the balance of the Blood War. Now that you are 20th lvl, or when you reach 20th lvl, you may select this boon. Once per short rest, you can cast the plane shift spell (no spell slot or components required) as an action. You can target only yourself, and travel to or from Brightwater: the realm of Ilmater and Sune in the Seven Heavens of Celestia.",
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
	"uku the spider boy (ddep7-1)" : {
		name : "Uku the Spider Boy (DDEP7-1)",
		source : [["AL","S7"]],
		description : "A naughty flying monkey called “Uku the Spider Boy” has latched onto me. Uku (“OO-koo”) wears a crimson waistcoat adorned with tiny mirrors and sports a silk skullcap. He has a naturally mischievous nature. Uku can smell gold from 30 feet away, even if it's kept inside a purse or container. As an action, I can command Uku to steal or retrieve up to 100gp using his Sleight of Hand skill bonus of +4. Uku keeps 10% of the takings, which he spends on boiled sweets next time 'm in town.",
		descriptionFull : "A naughty flying monkey called “Uku the Spider Boy” has latched onto you. Uku (“OO-koo”) wears a crimson waistcoat adorned with tiny mirrors and sports a silk skullcap. He has a naturally mischievous nature. Uku can smell gold from 30 feet away, even if it's kept inside a purse or container. As an action, you can command Uku to steal or retrieve up to 100gp using his Sleight of Hand skill bonus of +4. Uku keeps 10% of the takings, which he spends on boiled sweets next time you're in town.",
		action : [["action", "Uku the Spider Boy (steal)"]],
	},
}


RunFunctionAtEnd(function () {
//New Event Awards from Al events such as the D&D Celebration, Extra Life and the newer Liar's Night events. Only one may be on a character at a time.
MagicItemsList["al event award items"] = {
		name : "AL Event Award Items",
		rarity : "unique (common)",
		type : "wondrous item",
		magicItemTable : "?",
		allowDuplicates : false,
	choices : ["Ammunition of Sprouting (FM)","Ancestor's Mirror (FM)","Animated Balloon Beast (EL)","Armor of Last Defense (FM)","Astral Fishing Lure (TAL)","Buckler of Folding (DDCE)","Bunny Slipper Snowshoes (DDCE)","Calliope Wine Cask (DDCE)","Campfire Ice Sculpture (DDCE)","Cuddly Spider (DDCE)","Fiery Snow Sled (TAL)","Flask of Glowworms (DDCE)","Harengon Spirit Club (LN-1)","Inspired Cocoa Mug (DDCE)","Jar of Everflowing Honey (FM)","Magical Slushy Grinder (DDCE)","Moonlight Candle (EL)","Netherese Ghost Stories (DDCE)","Toy Mind Flayer","Toy Red Dragon","Tricksters' Pumpkin Seed (LN)","Very Important Crown (DDCE)","Viridian Monocle (DDCE)","Wand of Verdant Vitality (DDCE)"],
	"ammunition of sprouting (fm)" : { //per AL admins on Discord, the 2024 LN and FM items are treated as Event Awards
		name : "Ammunition of Sprouting)",
		source : [["AL:FM",2024]],
		type : "weapon (ammunition)",
		rarity: "unique",
		magicItemTable : "",
		description : "If this ammunition hits a creature, it takes +1 damage and must pass a DC 15 Strength save or be Restrained by a grasping plant. Once it hits a target, the ammunition is no longer magical.",
		descriptionFull : "This is a unique item. This magical ammunition is found in a quantity of 20.\n   If the ammunition hits a creature, the creature takes +1 additional damage and must succeed on a DC 15 Strength saving throw or also have the restrained condition, caused by a grasping plant from the ammunition. Once the ammunition hits a target, the ammunition is no longer magical.",
		allowDuplicates : true,
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "ammunition"],
		excludeCheck : function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
			}
		},
		ammoAdd : [["Ammunition of Sprouting", 20]],
		},
	"ancestor's mirror (fm)" : {
		name: "Ancestor's Mirror",
		source : ["AL:FM", 2024],
		rarity: "unique",
		magicItemTable : "",
		attunement : true,
		description: "This decorative hand mirror is infused with my ancestor's pride. It has 6 charges, 1d6 regained at dawn. Bonus action to use charges: 1 for adv. on a Cha skill chk; 2 for Unseen Servant that does 1 task; 4 for Shield of Faith. I have advantage on Cha saving throws.",
		descriptionLong: "This decorative hand mirror is infused with my ancestor's pride. While carried, I have advantage on Cha saving throws. The mirror has 6 charges, 1d6 regained at dawn. Bonus action to use charges: 1 for advantage on a Cha skill chk; 2 for an Unseen Servant that performs 1 task; 4 for my ancestors to surround me with a Shield of Faith.",
		descriptionFull: "This is a unique item. This decorative hand mirror is infused with the pride your ancestor's have for you. While you carry the mirror, you have advantage on Charisma saving throws.\n   The mirror has 6 charges, which you can use for the following properties while you hold the mirror. The mirror regains 1d6 expended charges daily at dawn.\n   " + toUni("Ancestors' Glowing Pride") + ". As a bonus action, you can expend 1 charge to have advantage on one Charisma skill check.\n   " + toUni("Ancestral Assistance") + ". As a bonus action, you can expend 2 charges to call for your ancestor's assistance for 1 hour as an Unseen Service except your ancestor willingly performs only one task, if respectfully requested.\n   " + toUni("Ancestral Protection") + ". As a bonus action, you can expend 4 charges to call for your ancestors' protection. They surround you in a Shield of Faith.",
		savetxt : { adv_vs : ["Cha saves"] },
		usages : 6,
		additional : "1d6 Recharge",
		recovery : "dawn",
		action : [["bonus action", " (Adv Cha Chk)"]],
		spellFirstColTitle : "Ch",
			spellcastingBonus : [{
				name : "2 charges",
				spells : ["unseen servant"],
				selection : ["unseen servant"],
				firstCol : 2,
			}, {
				name : "4 charges",
				spells : ["shield of faith"],
				selection : ["shield of faith"],
				firstCol : 4,
			}],
		spellChanges : {
			"unseen servant": {
				description : "Ancestor appears as Invisible Med. servant; AC 10, 1 HP; does 1 task if asked respectifully",
				time : "1 bns",
				changes : "My ancestor willingly performs only 1 task, if requested respectfully."
		}, 
		"shield of faith" : {
				duration : "10 min",
				changes : "I can cast Shield of Faith without it requiring concentration."
				}
		},
	},
	"animated balloon beast (el)" : {
		name : "Animated Balloon Beast",
		source : ["AL:EL",2022],
		description : "This carnival favorite is enchanted to be unbreakable and float in 5 ft of me unless forcibly removed. While holding its string, I can change its shape to any creature, but its size remains Tiny. Once per dawn as an action, I can magically levitate 20 ft in the air until the end of my next turn, floating gently to the ground when the duration ends.",
		descriptionFull : "This carnival favorite bears enchantments that make it unbreakable and keeps it floating within 5 feet of you unless forcibly removed. While holding its string, its shape can change to any creature you desire with a size no larger than Tiny. As an action, you may also magically levitate in the air 20 feet until the end of your next turn, floating gently to the ground when the duration ends if you are still suspended. The balloon can't be used to levitate again until the next dawn.",
		action : [["action", "Balloon Beast (Levitate)"]],
		limfeaname : "Balloon Beast (Levitate)",
		usages : 1,
		recovery : "dawn",
		},
	"armor of last defense (fm)" : {
		name : "Armor of Last Defense",
		source : [["AL:FM", 2024]],
		type : "armor (light or medium)",
		rarity: "unique",
		magicItemTable : "",
		attunement : true,
		description : "While wearing this armor and Bloodied, my AC has a +2 bonus, and I can cast Aura of Vitality once per dawn.",
		descriptionFull : "This is a unique item. While you have half your hit points or fewer, your Armor Class has a +2 bonus, and you can cast Aura of Vitality. You can only cast the spell in this way once until the next dawn.",
		extraAC : [{name : "Armor of Last Defense (Bloodied)", mod : 2, misc : true, text : "I gain a +2 AC bonus while Bloodied."}],
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "suffix",
			descriptionChange : ["prefix", "armor"],
			itemName1stPage : ["prefix", "of Last Defense"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/medium|light/i).test(inObj.type);
			},
		},
		spellcastingBonus : [{
			name : "Aura of Vitality",
			spells : ["aura of vitality"],
			selection : ["aura of vitality"],
			firstCol : 'oncelr'
		}],
		spellChanges : {
			"aura of vitality" : {
				description : "On cast & at the start of each of my turns, heal 2d6 HP to 1 crea; I can only cast this while Bloodied",
				changes : "I can cast Aura of Vitality once per dawn while Bloodied."
			}
		},
	},
	"astral fishing lure (tal)" : {
		name : "Astral Fishing Lure (TAL)",
		source : ["AL:EL",2023],
		description : "This instrument of death resembles a smiling space guppy that glows faintly & blinks irregularly, shedding 5-ft of bright light and 5-ft more dim light. The lure provides one fisher with advantage on their Wisdom (Survival) check to catch 'something' in Wild Space.",
		descriptionLong : "This instrument of death resembles a smiling space guppy that glows with faint luminescence, shedding bright light in a 5-foot radius and dim light for an additional 5 ft, blinking on and off at irregular intervals. The lure provides one fisher with advantage on their Wisdom (Survival) check to catch 'something' in Wild Space.",
		descriptionFull : "This instrument of death resembles a smiling space guppy that glows with faint luminescence, shedding bright light in a 5-foot radius and dim light for an additional 5 feet, blinking on and off at irregular intervals. The lure provides one fisher with advantage on their Wisdom (Survival) check to catch 'something' in Wild Space.",
		},
	"buckler of folding (ddce)" : {
		name : "Buckler of Folding",
		source : ["DDCE",2021],
		type : "shield",
		description : "This small paper square fits in a pocket & is covered with runes. When held, I can utter a command word as a bonus action to make the square magically unfold & become a shield as hard as wood. It folds back up with the same word.",
		descriptionFull : "This small paper square fits in a pocket and is covered with runes. When you hold it in your hand, you can use a bonus action to utter a command word to cause the square to magically unfold, becoming a shield as hard as wood. It folds back up upon uttering the same command word.",
		action : [["bonus action", "Buckler of Folding"]],
		shieldAdd : "Buckler of Folding"
		},
	"bunny slipper snowshoes (ddce)" : {
		name : "Bunny Slipper Snowshoes",
		source : ["DDCE",2020],
		type : "trinket",
		description : "Certain to keep my feet warm while traversing the arctic, these fashionable snowshoes expand and contract to fit any Small or Medium Humanoid.",
		descriptionFull : "Certain to keep your feet warm while traversing the arctic, these fashionable snowshoes expand and contract to fit any Small or Medium humanoid creature."
		},
	"calliope wine cask (ddce)" : {
		name : "Calliope Wine Cask",
		source : ["DDCE",2021],
		type : "trinket",
		description : "When uncorked, this small cask of wine plays calliope music and can fill up to two waterskins. It magically refills at dusk."
		},
	"campfire ice sculpture (ddce)" : {
		name : "Campfire Ice Sculpture",
		source : ["DDCE",2020],
		type : "trinket",
		description : "When placed on the ground in a cold climate, this tiny sculpture glows orange-red and emits heat enough for up to four Medium creatures within five feet to become comfortably warm."
		},
	"cuddly spider (ddce)" : {
		name : "Cuddly Spider",
		source : ["DDCE",2021],
		type : "trinket",
		description : "As a bonus action, I can say a command word to make this fuzzy toy spider magically stick to any surface I place it on. It can be removed by using a bonus action to touch it and utter the command again.",
		descriptionFull : "This fuzzy toy spider magically sticks to any surface you place it on, using a bonus action and a command word. It can be removed by using a bonus action to touch it and utter the command word again.",
		action : [["bonus action", "Cuddly Spider (Stick/Remove)"]]
		},
	"fiery snow sled (tal)" : {
		name : "Fiery Snow Sled (TAL)",
		source : ["AL:EL",2020],
		type : "vehicle",
		usages : 1,
		recovery : "LR",
		description : "I can use a bonus action to compel this sled and the animals pulling it to double their Speed for 3 rounds. Once used, the magic ceases to function until I and the animals finish a long rest.",
		descriptionFull : "You can use a bonus action to compel this sled and the animals pulling it to double their Speed for 3 rounds. Once used, the magic ceases to function until you and the animals finish a long rest.",
		action : [["bonus action", " (Double Speed)"]]
		},
	"flask of glowworms (ddce)" : {
		name : "Flask of Glowworms",
		source : ["DDCE", 2021],
		type : "trinket",
		description : "This flask contains several glowworms. When held, it emits color-changing illumination equal to a torch. The flask magically sustains the glowworms and I can use an action to set the color of the light for 10 minutes.",
		descriptionFull : "This flask contains several glowworms that when held, exude color-changing illumination equivalent to a torch. The flask magically sustains the glowworms, and if you use an action while holding it, you can set the color of the illumination for ten minutes.",
		action : [["action", ""]]
		},
	"harengon spirit club (ln-1)" : {
		name : "Harengon Spirit Club (LN-1)",
		source : ["AL:LN", 2021],
		type : "weapon (club)",
		description : "This knotted club houses the spirit of a harengon. While wielding it, my ears grow long like a hare's, granting me advantage on Wisdom (Perception) checks involving hearing. In addition, I can cast Jump once per dawn.",
		descriptionFull : "This knotted club houses the spirit of a harengon. While wielding the club, your ears grow long like a hare's ears, granting you advantage on Wisdom (Perception) checks involving hearing. In addition, while wielding the club, you can cast the jump spell. The club can't be used to cast jump again until the next dawn.",
		limfeaname : "Harengon Spirit Club (Jump Spell)",
		usages : 1,
		recovery : "dawn",
		vision : [["Adv. on Perception checks involving hearing", 0]],
		weaponOptions : {
			baseWeapon : "club",
			regExpSearch : /^(?=.*harengon)(?=.*spirit)(?=.*club).*$/i,
			name : "Harengon Spirit Club",
			selectNow : true,
		},
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["jump"],
			selection : ["jump"],
			firstCol : "oncelr"}],
		},
	"inspired cocoa mug (ddce)" : {
		name : "Inspired Cocoa Mug",
		source : ["DDCE",2020],
		type : "trinket",
		description : "This mug can magically fill with delicious hot cocoa during a short rest. Drinking the cocoa allows one creature to regain an extra 1d6 hit points if they spend Hit Dice to regain hit points."
		},
	"jar of everflowing honey (fm)" : {
		name : "Jar of Everflowing Honey (FM)",
		source : ["AL:FM", "2021/2024"],
		type : "trinket",
		description : "This ceramic jar weighs 5 pounds & feels full. Its lid can't be removed unless I'm using it. As an action, I may remove the lid & a fountain of honey pours out, generating 5 gallons of honey. The honey stops at the start of my next turn.",
		descriptionFull : "This ceramic jar weighs five pounds and feels full of honey. Its lid cannot be removed unless you're using it. As an action, you may remove the lid and a fountain of honey pours out, generating five gallons of honey. The honey stops pouring out at the start of your next turn.",
		action : [["action", " (Pour)"]]
		},
	"magical slushy grinder (ddce)" : {
		name : "Magical Slushy Grinder",
		source : ["DDCE",2020],
		type : "trinket",
		description : "When snow or ice are dropped into this trinket, it can produce up to 5 gallons of a sweet, lemon-flavored slush. Once used, the magic ceases to function until the next dawn.",
		usages : 1,
		recovery : "dawn"
		},
	"moonlight candle (el)" : {
		name : "Moonlight Candle",
		source : ["AL:EL", "2021/2022"],
		description : "When lit, this hauntingly pale candle provides illumination that's treated as moonlight, shedding bright light in a 20-ft radius and dim light for another 20 ft. It gives off no heat and never burns out.",
		descriptionFull : "When lit, this hauntingly pale candle provides illumination that is treated as moonlight, shedding bright light in a 20-foot radius and dim light for an additional 20 feet. It gives off no heat and never burns out.",
		},
	"netherese ghost stories (ddce)" : {
		name : "Netherese Ghost Stories",
		source : ["DDCE",2020],
		type : "trinket",
		description : "Reading from this Netherese book of ghost stories for 10 min grants advantage on a single related History check and gives me nightmares. I must succeed on a DC 13 Wisdom saving throw to successfully complete my next long rest.",
		descriptionFull : "Reading from this Netherese book of horrifying ghost stories for 10 minutes grants advantage on a single related History check and gives the reader nightmares. You must succeed on a DC 13 Wisdom saving throw to successfully complete your next long rest."
		},
	"toy mind flayer" : {
		name : "Toy Mind Flayer",
		source : ["AL:EL", 2024],
		description : "Once a day. I can squeeze and wave this stuffed toy at a visible creature in 60ft. They must make a DC 13 Wisdom or be affected by Dissonant Whispers.",
		descriptionFull : "Once a day when you squeeze and wave this stuff toy at a creature that you can see that is within 60' of you they must make a DC13 Wisdom save or be affected by a dissonant whispers spell as described in the PH (Received mine at GHC)",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]]
		},
	"toy red dragon" : {
		name : "Toy Red Dragon",
		source : ["AL:EL", 2024],
		description : "Once per day, I can squeeze this stuffed toy to create a 30 ft cone of flame. All creatures in its path take 2d6 Fire damage, making a DC 13 Dexterity save for half.",
		descriptionFull : "Once per day when this stuffed toy is squeezed a 30' cone of flame shoots out from the area of its mouth and creatures in its path must make a DC 13 Dexterity save or take 2d6 fire damage. On a save they take half damage. (Received mine from TAL)",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]]
		},
	"tricksters' pumpkin seed (ln)" : {
		name : "Tricksters' Pumpkin Seed",
		source : [["AL:LN", 2024]],
		rarity : "unique",
		magicItemTable : "",
		description : "As an action, throw seed at a Large or smaller creature. If it fails DC 15 Dex save, seed becomes Large pumpkin that traps target for 1 hr. It has an AC 11 and 50 HP (dmg threshold 4 per tier). Other creatures in area are pushed away 5 ft. I can rot the shell with an action, freeing the creature and making the area difficult terrain for 1 min.",
		descriptionLong : "As an action, I can throw this seed at a Large or smaller creature. If it fails a DC 15 Dex save, the seed becomes a Large pumpkin that traps the target for 1 hr. The pumpkin has an AC 11 and 50 HP (dmg threshold 4 per tier) and breathable air. Other creatures in the pumpkin's area are pushed away 5 ft. I can use an action to rot the shell, freeing the creature and making the area difficult terrain for 1 min.",
		descriptionFull : "This is a unique consumable. You can use an action to throw the seed at one Large or smaller creature. The creature must make a DC 15 Dexterity saving throw or the seed becomes a Large pumpkin that encloses and traps the creature inside for 1 hour. The pumpkin has an AC of 11 and 50 hit points (damage threshold 4 per tier of play). Creatures not hit with the seed but are within the pumpkin's 10-by-10-foot area, are pushed away 5 feet. The inside of the pumpkin holds plenty of breathable air for the trapped creature. You can use an action to rot the shell, freeing the creature and making the area difficult terrain for 1 minute."
		},
	"very important crown (ddce)" : {
		name : "Very Important Crown",
		source : ["DDCE",2021],
		type : "trinket",
		description : "This stiff paper crown is bedazzled with costume jewelry. When I wear it, creatures within 60 ft that can see me notice my presence, even if I'm in a crowd. I also have disadvantage on stealth checks.",
		descriptionFull : "This stiff paper crown is bedazzled with costume jewelry. When you wear it, creatures that can see you within sixty feet notice your presence, even if you're in a crowd. While wearing the crown, you have disadvantage on stealth checks.",
		advantages : [["Stealth", false]]
		},
	"viridian monocle (ddce)" : {
		name : "Viridian Monocle",
		source : ["DDCE",2021],
		type : "trinket",
		description : "While wearing this ornate malachite monocle, I can speak Sylvan.",
		descriptionFull : "When this ornate malachite monocle is worn, you can speak Sylvan.",
		languageProfs : ["Sylvan"]
		},
	"wand of verdant vitality (ddce)" : {
		name : "Wand of Verdant Vitality",
		source : ["DDCE", 2021],
		type : "wand",
		description : "This wand has 3 charges, regained at dawn. As an action while held, I can use 1 charge to target a plant in 30 ft. It becomes lush with blooms for 24 hrs. If I use the last charge, roll a d20. On a 1, the wand turns into a swarm of stick bugs and is destroyed.",
		descriptionFull : "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges to target one plant within 30 feet. The target becomes lush as in full bloom for 24 hours.\n   The wand regains all expended charges at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a swarm of stick bugs and is destroyed.",
		usages : 3,
		recovery : "dawn",
		action : [["action", ""]]
		},
}

//New AL Items from official modules, community modules, Fai Chen's, trading posts and past holiday events (that aren't event awards). These items range from useful to barely magical.
MagicItemsList["al new items"] = {
		name : "AL New Items",
		type : "wondrous item",
		allowDuplicates : true,
		magicItemTable : "?",
		choices : ["Achis Atracta (CCC-BMG-30 HILL2-3)","Bag of Tricks or Treats (LN)","Bone Compass (RMH-12)","Bookmark of Memory: Limited Edition (WBW-DC-JSH-LIB-04PT)","Bookmark of Memory (WBW-PR)","Cariboots (FM)","Dagger of the Hidden Lord (DDHC-DIA-2)","Darkling Necklace (DDHC-TOA-8)","Demon Skin (DitLCoT)","Discord (DDAL-DRW15)","Eye of Xxiphu (DDAL5-19)","Fey Hound Collar (FM)","Fold-Up Friend (WBW-PR)","Giant's Gloves (WBW-PR)","Ghost Sheet (LN)","Green Wizard's Hat (FC)","Green Wizard's Hat: Romantic (Trading Post)","Green Wizard's Hat: Water (Trading Post)","Hat of Witchery (LN)","Hellrider's Badge (DDEP9-2)","Iggwilv's Horn (DitLCoT)","Ioun Stone - Celebration (DDAL-DRW5)","Lemure Onesie (LN)","Mind-Poison Dagger (DDHC-MORD-05)","Mist Hunters Magnificent Cap (RMH Safety Tools)","Nettle (DDEP4)","Oathbinder (DDHC-TOA-15)","Order of the Guardians Ring (RMH Safety Tools)","Owlbear Snowshoes (FC)","Pearl of Elocution (WBW-PR)","Pocket Watch (WBW-PR)","Potion of Polychromy (DitLCoT)","Pumpkin Ring (LN)","Red Wizard Blade (AL:SA-12B)","Selûne's Owl-Eye Glasses (FM)","Shar's Veil (FM)","Spare (DDHC-TOA-13)","Tablet of Reawakening (AL:SA-12B)","Tarot Card Set (LN)","Tasha's Creeping Keelboat (DitLCoT)","Tyr's Blessing of Command (CCC-BMG-23 PHLAN2-2)","Tyr's Blessing of Luck (CCC-BMG-24 PHLAN2-3)","Tyr's Blessing of the Mind (CCC-BMG-22 PHLAN2-1)","Wand of Whimsy (WBW-PR)","Woe (DDAL-DRW16)","Wooden Gecko Earrings (DDHC-TOA-8)","Zephyros' Notebook (DDIA05)"],
	"achis atracta (ccc-bmg-30 hill2-3)" : { // contributed by AelarTheElfRogue
		name : "Achis Atracta (CCC-BMG-30 HILL2-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This sentient bloodstone amulet is in the shape of a woman's head & has a delicate silver chain. The eyes glow white when she speaks. I'm immune to being Poisoned & Poison. Sentience: CN. Hearing & vision to 120 ft. Speaks Common & Celestial. Personality: Fickle, spoiled, wants respect, to fall in love & be treated like a princess. Otherwise screams, complains, & denies pwrs.",
		descriptionLong : "This sentient bloodstone amulet is carved in the shape of a woman's head and hangs from a delicate silver chain. The eyes glow white when Achis speaks. While worn, I am immune to the Poisoned condition and Poison dmg. Sentience: Chaotic Neutral. Hearing and vision to 120 ft. Speaks Common and Celestial. Personality: Fickle, spoiled, wants respect, to fall in love and be treated like a princess. Otherwise screams, complains, and denies pwrs.",
		descriptionFull : "This amulet is made of an intricately carved bloodstone, shaped in the likeness of a woman's head. The eyes pulse with a white glow when Achis is speaking. The stone is attached to a delicate silver chain. Achis Atracta has all the powers of a periapt of proof against poison that she bestows upon her wearer — if she feels so inclined. She is very fickle. If she likes you, poisons have no effect on you. While you wear it, you have Immunity to the Poisoned condition and Poison damage.\n   " + toUni("Sentience") + ": Achis Atracta is a sentient chaotic neutral item with an Intelligence of 10, a Wisdom of 10, and a Charisma of 16. She has hearing and normal vision out to a range of 120 feet.\n   She can speak, read, and understand Common and Celestial.\n   " + toUni("Personality") + ": Achis Atracta speaks in a whiny and shrill voice, making demands as though accustomed to being obeyed. She acts like a spoiled noble and expects to be waited on like a queen. Wearers who do not treat her with respect and deference gain no benefit from her item powers. She screams and complains loudly if surprised by a situation she deems beneath her — such as trekking through a sewer or being engulfed by a fireball.\n   Achis wants to be loved and adored by a person with power and standing like a princess in a fairy tale. Her greatest wish is to fall in love with a prince and be swept off her feet—figuratively speaking.",
		weight : 1,
		savetxt : { immune : ["poison"] }
	},
	"bag of tricks or treats (ln)" : {
		name: "Bag of Tricks or Treats",
		source : ["AL:LN", 2018],
		rarity: "uncommon",
		description : "This orange & black striped cloth bag appears empty. Reaching inside reveals crinkly wrapped candies. As an action, 3 times per dawn, I can pull a candy from the bag & throw it 20 ft. It turns into a random creature (d8): 1-weasel, 2-giant rat, 3-badger, 4-boar, 5-dretch, 6-quasit, 7-imp, 8-hell hound. 1-4 follow my commands, 5-8 are hostile. All act on my turn & vanish at dawn or at 0 HP.",
		descriptionLong : "This ordinary bag, made from orange and black striped cloth, appears empty. Reaching inside the bag reveals the presence of crinkly wrapped candies. As an action, 3 times/dawn, I can pull a candy from this bag and throw it 20 ft. It transforms into a random creature when it lands (d8): 1-weasel, 2-giant rat, 3-badger, 4-boar, 5-dretch, 6-quasit, 7-imp, 8-hell hound. 1-4 follow my commands, 5-8 are hostile. All act on my turn and vanish at dawn or if reduced to 0 HP.",
		descriptionFull : "This ordinary bag, made from orange and black striped cloth, appears empty. Reaching inside the bag, however, reveals the presence of crinkly wrapped candies. The bag weighs \u00BD pound.\n   You can use an action to pull the candy from the bag and throw it up to 20 feet.  When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n   The creature is friendly to you and your companions (if 1-4) or hostile (5-8), and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\n" + toUni("d8\tCreature") + "\n 1\tWeasel\n 2\tGiant Rat\n 3\tBadger\n 4\tBoar\n 5\tDretch\n 6\tQuasit\n 7\tImp\n 8\tHell Hound",
		weight: 0.5,
		allowDuplicates : true,
		action : [["action", " (pull)"], ["bonus action", " (command)"]],
		usages : 3,
		recovery : "dawn",
	},
	"bone compass (rmh-12)" : {
		name : "Bone Compass",
		source : [["AL:R",12]],
		rarity : "rare",
		attunement : true,
		dmgres : ["Necrotic"],
		description : "This bone-wrought compass melds into my flesh as a macabre bracelet. I resist Necrotic & Undead have disadv. to atk me. As an action, compass swings toward any Undead in 120 ft. The needle points to each Undead & changes color based on its relative strength. Green equals easy or medium, red means hard or deadly. Spells & abilities that affect Undead work on me. I can't regain HP from resting.",
		descriptionLong : "This bone-wrought compass mask melds into my flesh to become a macabre bracelet. I resist necrotic dmg & Undead have disadv. to atk me. As an action, command the compass to swing toward any Undead within 120 ft. The needle points to each Undead & changes color based on its relative strength. Green denotes an easy or medium encounter, red signals hard or deadly. Spells & abilities that affect or target Undead also affect & target me. I also don't regain hp when I long rest or when I spend Hit Dice during a short rest.",
		descriptionFull : "This bone-wrought compass mask melds into your flesh to become a macabre mounted bracelet. While attuned to the compass, you have resistance to necrotic damage and Undead have disadvantage on attack rolls that target you. As an action, you can command the compass to point toward an Undead or group of Undead within 120 feet. The needle swings around, pointing to each Undead and changing color based on its strength relative to you. Green denotes an easy or medium encounter, red signals hard or deadly.\n   " + toUni("Curse") + ". Spells and abilities that affect or target Undead also affect and can target you. While attuned to the compass, you don't regain hit points when you complete a long rest or when you spend Hit Dice at the end of a short rest.",
			action : [["action", "Bone Compass"]],
		},
	"bookmark of memory: limited edition (wbw-dc-jsh-lib-04pt)" : {
		name : "Limited Edition Bookmark #4 (Bookmark of Memory)",
		source : ["AL", "WBW-DC"],
		rarity : "common",
		description : "This bookmark was letterpress printed with gold ink on midnight blue stock and shows a small cat proudly perched on a tall stack of books. Letters on each book form the word “INSPIRATION.” I feel optimistic about the future and butterflies frolic around me. When I open a book bearing this bookmark, I perfectly recall every word I've read from it.",
		descriptionFull : "This bookmark has been letterpress printed with gold ink on midnight blue stock. It bears the image of a small cat proudly perched on a tall stack of books. The call number stickers on the books each bear a small letter, which when read from top to bottom form the word “INSPIRATION.” (This item is a Pact Reward for a Lesser Fey Pact, for having completed the Librarian's request that you explore the stacks and the Library's books.)\n   " + toUni("Blissful") + ". While in possession of the item, the bearer feels fortunate and optimistic about what the future holds. Butterflies and other harmless creatures might frolic in the item's presence.\n   When you open a book bearing this bookmark, you immediately recall every word you've previously read from it, with perfect clarity."
		},
	"bookmark of memory (wbw-pr)" : {
		name : "Bookmark of Memory (WBW-PR)",
		source : ["AL", "WBW"],
		rarity : "common",
		description : "When I open a book bearing this bookmark, I immediately recall every word I've read from it with perfect clarity.",
		descriptionFull : "When you open a book bearing this bookmark, you immediately recall every word you've previously read from it, with perfect clarity."
		},
	"cariboots (fm)" : {
		name : "Cariboots",
		source : ["AL:FM", 2020],
		rarity : "common",
		description : "These boots fit any humanoid. They're finely crafted from caribou pelts and lined with the softest fur. While wearing the boots, I can choose to have them leave tracks like those of a caribou.",
		descriptionFull : "These boots fit any humanoid, and are finely crafted from caribou pelts and lined with the softest fur. While wearing these boots, you can choose to have them leave tracks like those of a caribou."
		},
	"dagger of the hidden lord (ddhc-dia-2)" : {
		name : "Dagger of the Hidden Lord (DDHC-DIA-2)",
		source : [["AL","BG:DiA"]],
		type : "weapon (dagger)",
		rarity : "unique",
		magicItemTable : "",
		attunement : true,
		description : "This +1 cursed dagger is made entirely of gold, the handle engraved in the shape of a coiling serpent. I'm unwilling to give it up & I'm compelled to kill a humanoid with it every tenday, proclaiming \"To the Hidden Lord!\" when I do. Every day I resist, I must pass a DC 10 Constitution save or take a level of exhaustion. This fatigue disappears when I kill a humanoid with the dagger.",
		descriptionFull : "This weapon is made entirely of gold, with the handle engraved in the shape of a coiling serpent. You gain a +1 bonus to attack rolls and damage rolls that you make with this weapon.\n   " + toUni("Curse") + ". This dagger is cursed and becoming attuned to it extends the curse to you. While you remain cursed, you are unwilling to part with the dagger, keeping it on your person always. While attuned to this weapon, you feel compelled to kill a humanoid creature with it every tenday, proclaiming \"To the Hidden Lord!\" when you do so.\n   Every day that you resist this compulsion, you must make a successful DC 10 Constitution saving throw or take a level of fatigue. This magically induced fatigue disappears when you kill a humanoid with the dagger.",
		weight : 1,
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*hidden)(?=.*lord).*$/i,
			name : "Dagger of the Hidden Lord",
			modifiers : [1, 1],
			selectNow : true,
		}
	},
	"darkling necklace (ddhc-toa-8)" : {//only allowed with campaign documentation
		name : "Darkling Necklace (DDHC-TOA-8)",
		source : [["AL:GA","RLK"]],
		rarity : "rare",
		attunement : true,
		defaultExcluded : true,
		description : "This necklace has a black pearl containing part of a darkling's soul and gives advantage on Stealth checks in dim light or darkness. As an action once per day, I can cast Darkness. I must pass a DC 10 Int save or be Blinded while the spell lasts. Once donned, the necklace can only be removed with Remove Curse.",
		descriptionFull : "This necklace includes a black pearl that contains a part of a darkling's soul. Once attuned, the wearer gains advantage on Stealth checks made in dim light or total darkness. Also, once per day as an action the wearer can cast darkness as per the 2nd-level evocation spell. However, the user must succeed on a DC 10 Intelligence saving throw or be blinded for as long as the spell lasts. Once it is donned, it can only be removed with a remove curse spell.",
		limfeaname : "Darkling Necklace",
		usages : 1,
		recovery : "dawn",
		savetxt : { text : ["Adv on Stealth chks in dim light/darkness"] },
		spellcastingBonus : {
			name : "Darkness",
			spells : ["darkness"],
			selection : ["darkness"],
			firstCol : "oncelr"
			}
		},
	"demon skin (ditlcot)" : {
		name : "Demon Skin",
		source : [["QftIS", 0]],
		rarity : "rare",
		attunement : true,
		description : "If I attune to this pot of bubbling black ichor, it contours to my skin, and the pot disappears. Demon Skin armor can be worn under normal clothes, and doesn't impede bodily functions or Dex (Stealth) chks. I also have resistance to Poison damage. Once attuned, it can only be removed by me or my death. The pot then reappears and the ichor returns to it.",
		descriptionFull : "This magic armor appears as a pot of bubbling black ichor. When you attune to it, the ichor adheres to and contours to your skin, and the pot disappears. The armor can be worn under normal clothes, and it doesn't impede bodily functions. Once you put it on, it can't be removed unless you choose to do so or you die, at which point the pot reappears and the ichor flows back into it.\n   While wearing the armor, you have resistance to poison damage. The armor also doesn't impose disadvantage on Dexterity (Stealth) checks.\n   This item is from the Quests from the Infinite Staircase preview adventure: Descent into the Lost Caverns of Tsojcanth. (Stealth feature isn't currently possible to code. Adjust it manually.)",
		dmgres : ["Poison"],
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "armor"],
		itemName1stPage : ["suffix", "Demon Skin"],
		noStealthDis : /demon skin/i,
		excludeCheck : function (inObjKey, inObj) {
			return !(/heavy/i).test(inObj.type);
			}
		}
	},
	"discord (ddal-drw15)" : {
		name : "Discord (DDAL-DRW15)",
		source : [["AL","DRW"]],
		rarity : "unique",
		magicItemTable : "",
		description : "This armor is made of sharp interlocking green crystal spikes & snuffs all nonmagical flames in 30 ft. I hear insidious whispers just past my vision. Unless Deafened, I have disadv. on saves vs, & Wis chks related to, Father Llymic & its allies. As reaction once per dawn, I can see for 120 ft in all darkness until my next turn starts. If also wielding Woe, I'm unharmed by temps as low as −60\u00B0F.",
		descriptionLong : "This armor is made of sharp interlocking green crystal spikes and extinguishes all nonmagical flames in 30 ft. I hear insidious whispers from just beyond my peripheral vision. Unless Deafened, I have disadvantage on saving throws caused by, and Wisdom checks related to, Father Llymic and its allies. As a reaction once per dawn, I can see normally in magical & nonmagical darkness for 120 ft until my next turn starts. If also wielding Woe, I'm unharmed by temps as low as −60\u00B0F.",
		descriptionFull : "Discord is comprised of sharp, interlocking spikes of green crystal and extinguishes all nonmagical flames within 30 feet of it. A creature wearing Discord hears insidious whispers originating from a point just beyond their peripheral vision. Unless deafened, the creature has disadvantage on saving throws caused by, and on Wisdom checks related to, Father Llymic and its allies.\n   While wearing this armor, you gain a +2 bonus to AC. In addition, you can use your reaction to see normally in darkness, both magical and nonmagical, out to a distance of 120 feet until the start of your next turn. Discord can't be used this way again until the next dawn.\n   If a character wields Woe (a longsword) while wearing Discord, they are unharmed by temperatures as low as −60 degrees Fahrenheit.",
		action : [["reaction", "Discord (120 ft Devil Sight)"]],
		limfeaname : "Discord (120 ft Devil Sight)",
		usages : 1,
		recovery : "dawn",
		armorOptions : [{
			regExpSearch : /^(?=.*discord).*$/i,
			name : "Discord",
			type : "heavy",
			ac : 20,
			stealthdis : true,
			weight : 65,
			strReq : 15,
			selectNow : true
			}]
	},
	"eye of xxiphu (ddal5-19)" : {
		name : "Eye of Xxiphu (DDAL5-19)",
		source : [["AL","S5"]],
		rarity : "legendary",
		attunement : true,
		description : "This large heavy petrified orb bestows insight into the true nature of aboleths. When attuned (not held), I gain 120 ft of telepathy & may cover myself in a coat of mucus that lets me breathe underwater & on land. Aboleths have disadv. when attacking me, & I have adv. on knowledge-based ability checks about aboleths & the Far Realms when not in combat.",
		descriptionLong : "The Eye of Xxiphu bestows insight into the true nature of aboleths. While attuned, I gain telepathy out to 120 ft and may cover myself in a coat of mucous that lets me breathe both underwater and on land. The petrified orb is large and heavy, but doesn't need to be held to use its powers. Aboleths have disadvantage when attacking me, and I have advantage on knowledge-based ability checks about aboleths and the Far Realms when not in combat.",
		descriptionFull : "While not a truly intelligent item, the Eye of Xxiphu bestows terrifying insight into the true nature of the nightmarish aboleths. The attuned possessor of the Eye gains telepathy out to a range of 120 feet, and may cover themselves in coat of mucous that allows them to breathe underwater as well as on land. The petrified orb is large and heavy, but does not need to be held in order to use its powers. Additionally, aboleths have disadvantage when attacking the owner of the Eye, and the owner has advantage on knowledge-based ability checks about aboleths and the Far Realm when they are not in combat."
	},
	"fey hound collar (fm)" : {
		name : "Fey Hound Collar",
		source : ["AL:FM", 2020],
		rarity : "unique",
		magicItemTable : "",
		description : "As an action, while wearing this (very) punk rock collar, I can create a 15-ft-diameter sphere of green mist, centered on and moving with me. The sphere spreads around corners and its area is heavily obscured. It lasts for 10 min or until a wind of moderate or greater speed (at least 10 mph) disperses it. The collar can only be used once per dawn.",
		descriptionFull : "As an action, while wearing this (very punk rock) collar, you create a 15-foot-diameter sphere of green mist, centered on you, moving with you. The sphere spreads around corners, and its area is heavily obscured. It lasts for 10 minutes or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. The collar can't be used this way again until the next dawn.",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]]
		},
	"fold-up friend (wbw-pr)" : {
		name : "Fold-Up Friend (WBW-PR)",
		source : ["AL", "WBW"],
		rarity : "common",
		description : "While this cut-out parchment character is within 5 ft of me, I can command it to walk, play, dance or follow me. The fold-up friend can't take actions or manipulate objects. It has AC 12 and 1 hit point.",
		descriptionFull : "While this cut-out parchment character is within 5 feet of you, you can command it to walk, play, dance, or follow you. The fold-up friend cannot take actions and cannot manipulate objects. It has AC 12 and 1 hit point."
		},
	"giant's gloves (wbw-pr)" : {
		name : "Giant's Gloves (WBW-PR)",
		source : ["AL", "WBW"],
		rarity : "common",
		description : "While wearing these oversized gloves, my hands magically expand to fill their volume. This has no mechanical benefit.",
		descriptionFull : "While wearing these oversized gloves, your hands magically expand to fill their volume. You gain no benefit from this."
		},
	"ghost sheet (ln)" : {
		name : "Ghost Sheet",
		source : ["AL:LN", 2018],
		rarity : "uncommon",
		description : "This sheet appears to be plain white cotton cloth with two eyeholes cut into it. When I wear the sheet over my head, I appear to be incorporeal. Physical interaction reveals this to be an illusion.",
		descriptionFull : "This sheet appears to be plain white cotton cloth with two eyeholes cut into it. When you wear the sheet over your head, you appear to be incorporeal. Physical interaction reveals this to be an illusion."
		},
	"green wizard's hat (fc)" : {
		name : "Green Wizard's Hat",
		source : ["AL:FC", 2024],
		rarity : "common",
		description : "This floppy green conical wizard's hat magically contains 6 items. Once a day, I can pull out a random item that lasts 1 hr. 1d6 - 1: a bouquet that smells like anxiety/2: cotton candy that envelops & obscures the closest tiny object until eaten/3: a single mosquito that prefers to feed on oozes/4: a watering can filled with sand/5: a glowing severed head identical to the closest living creature/6: a 20ft x 5ft rainbow beam of light that can be dismissed.",
		descriptionFull : "This green, floppy, conical wizard's hat magically contains six different items. Once a day a character can pull an item out of the hat. Which of the items that appears is determined randomly using a d6 and the list below. The item lasts for 1 hour." + toUni("d6\tItem") + "\n1\ta bouquet that smells like anxiety,\n2\tcotton candy that envelops and obscures the closest tiny object until the candy is eaten away (no nutritional value),\n3\ta single mosquito that prefers to feed on oozes,\n4\ta watering can filled with sand,\n5\ta glowing severed head identical to the head of a living creature closest to the hat's holder,\n6\ta 20 ft long-5 ft wide rainbow beam of light that lasts one hour or until dismissed. [Trading Post v13.1 2024]",
		usages : 1,
		recovery : "dawn"
		},
	"green wizard's hat: romantic (trading post)" : {
		name : "Green Wizard's Hat (Romantic)",
		source : ["AL:FC", "TAL"],
		rarity : "common",
		description : "This floppy green hat is embroidered with skeleton cats. Hidden on the inside band is the message: \"I will love you for the rest of my life and the rest of my unlife too. Forever and ever yours, Victor.\" Once a day, I can pull out a random item for 1 hr. 1d6 - 1: bouquet smelling like anxiety/2: cotton candy that envelops & obscures the closest tiny object until eaten/3: a mosquito that prefers oozes/4: a watering can full of sand/5: a glowing severed head identical to the closest living creature/6: a 20ft x 5ft rainbow beam of light that I can dismiss.",
		descriptionFull : "This hat is embroidered with skeleton cats. Embroidered secretly upon the band inside the hat is a loving message reading: I will love you for the rest of my life, and the rest of my unlife, too. Forever and ever yours, Victor.\n   This green, floppy, conical wizard's hat magically contains six different items. Once a day a character can pull an item out of the hat. Which of the items that appears is determined randomly using a d6 and the list below. The item lasts for 1 hour." + toUni("d6\tItem") + "\n1\ta bouquet that smells like anxiety,\n2\tcotton candy that envelops and obscures the closest tiny object until the candy is eaten away (no nutritional value),\n3\ta single mosquito that prefers to feed on oozes,\n4\ta watering can filled with sand,\n5\ta glowing severed head identical to the head of a living creature closest to the hat's holder,\n6\ta 20 ft long-5 ft wide rainbow beam of light that lasts one hour or until dismissed. [Trading Post v13.1 TAL November 2024]",
		limfeaname : "Green Wizard's Hat",
		usages : 1,
		recovery : "dawn"
		},
	"green wizard's hat: water (trading post)" : {
		name : "Green Wizard's Hat (Water)",
		source : ["AL:FC", "VW"],
		rarity : "common",
		description : "The naiad seamstress of this beautiful hat finds physical materials too restricting. She enchanted turquoise water into a pointed hat that often drips on me. Once a day, I can pull out a random item that lasts 1 hr. 1d6 - 1: a bouquet that smells like anxiety/2: cotton candy that envelops & obscures the closest tiny object until eaten/3: a single mosquito that prefers to feed on oozes/4: a watering can filled with sand/5: a glowing severed head identical to the closest living creature/6: a 20ft x 5ft rainbow beam of light that can be dismissed.",
		descriptionFull : "The seamstress of this beautifully crafted hat was a naiad from the elemental plane of water who finds using physical materials in clothing far too restricting. This hat is made of turquoise blue water enchanted to hold the form of a pointed hat, though water from it frequently drips onto its wearer.\n   This green, floppy, conical wizard's hat magically contains six different items. Once a day a character can pull an item out of the hat. Which of the items that appears is determined randomly using a d6 and the list below. The item lasts for 1 hour." + toUni("d6\tItem") + "\n1\ta bouquet that smells like anxiety,\n2\tcotton candy that envelops and obscures the closest tiny object until the candy is eaten away (no nutritional value),\n3\ta single mosquito that prefers to feed on oozes,\n4\ta watering can filled with sand,\n5\ta glowing severed head identical to the head of a living creature closest to the hat's holder,\n6\ta 20 ft long-5 ft wide rainbow beam of light that lasts one hour or until dismissed. [Trading Post v13.1 VDDW July 2024]",
		limfeaname : "Green Wizard's Hat",
		usages : 1,
		recovery : "dawn"
		},
	"hat of witchery (ln)" : {
		name : "Hat of Witchery",
		source : ["AL:LN", 2019],
		rarity : "common",
		description : "This wide-brimmed conical black hat has a tarnished brass buckle & a spindly spider who lives in it. The hat is a spell focus for my class' spells. Once per long rest, I can cast an unknown cantrip from my class' list with a DC 10 INT (Arcana) chk, wasting the action if failed. If 3 allies wear these hats in 30 ft, the chk has adv. Our skin turns green & our voices become raspy & aged.",
		descriptionLong : "This black cone-shaped hat has a wide-brim and is adorned with a tarnished brass buckle and a spindly-legged spider who made the hat its home. It can act as spellcasting focus for my class' spells. Once per long rest, I can try to cast a cantrip I don't know from my class' list by making a DC 10 INT (Arcana) check, wasting the action if failed. If 3 allies are wearing and attuned to Hats of Witchery in 30 ft of each other, the check above is made with advantage. Our skin also turns green and our voices become raspy and aged.",
		descriptionFull : "This black, cone-shaped hat has a wide-brim and is adorned with a tarnished brass buckle and a spindly-legged spider who has made the hat its home. While you are wearing it, you gain the following benefits:\n \u2022 You can use the hat as a spellcasting focus for your class' spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on your class' spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.\n \u2022 If three allies are all wearing and attuned to hats of witchery and are within 30 feet of each other, the check above is made with advantage. The characters' skin turns green, and their voices become raspy and aged.",
		attunement : true,
		usages : 1,
		recovery : "long rest",
eval : function () {              ///With thanks to Poet of God for this code
        var cantripClasses = ["artificer", "bard", "cleric", "druid", "sorcerer", "warlock", "wizard"]
        var curClassOptions = [];
        for (classname in classes.known) {
            if (cantripClasses.indexOf(classname) !== -1) {
                curClassOptions.push(classname);
            }
        };
        if (!curClassOptions.length) {
            app.alert({
                cMsg : toUni("Hat of Witchery Magic Item Warning") + "\nThe Hat of Witchery gives access to cantrips dependent on your spellcasting class.\nSelecting this magic item without a class that gives cantrips will not add any spells to the spellsheet.\n\nPlease wait you've selected an appropriate spellcasting class to pick this item.",
                nIcon : 1,
                cTitle : "Hat of Witchery Magic Item Warning"
            });
            return;
        };
        var chc = curClassOptions
        CurrentSpells['hat of witchery'] = {
            name : 'Hat of Witchery (item)',
            ability : chc,
            list : { 'class' : chc, level : [0, 0] },
            known : { cantrips : 0, spells : 'list' },
            bonus : {
                bon1 : {
                    name : 'Just select "Full List"',
                    spells : []
                },
                bon2 : {
                    name : 'on the bottom left',
                    spells : []
                }
            },
            typeList : 4,
            refType : "item",
            allowUpCasting : true,
            firstCol : ""
        };
        SetStringifieds('spells'); CurrentUpdates.types.push('spells');
    },
changeeval : function () {
        if (!CurrentSpells['hat of witchery']) return;
        var cantripClasses = ["artificer", "bard", "cleric", "druid", "sorcerer", "warlock", "wizard"]
        var curClassOptions = [];
        for (classname in classes.known) {
            if (cantripClasses.indexOf(classname) !== -1) {
                curClassOptions.push(classname);
            }
        };
        if (!curClassOptions.length) {
            app.alert({
                cMsg : toUni("Hat of Witchery Magic Item Warning") + "\nThe Hat of Witchery gives access to cantrips dependent on your spellcasting class.\nSelecting this magic item without a class that has access to cantrips will make the item unusable.\n\nPlease wait until you've selected an appropriate spellcasting class before selecting this item.",
                nIcon : 1,
                cTitle : "Hat of Witchery Magic Item Warning"
            });
            delete CurrentSpells['hat of witchery'];
        } else {
            CurrentSpells['hat of witchery'].ability = curClassOptions;
            CurrentSpells['hat of witchery'].list['class'] = curClassOptions;
        };
        SetStringifieds('spells'); CurrentUpdates.types.push('spells');
},
 removeeval : function () {
        delete CurrentSpells['hat of witchery'];
        SetStringifieds('spells'); CurrentUpdates.types.push('spells');
    },
		},
	"hellrider's badge (ddep9-2)" : {
		name : "Hellrider's Badge (DDEP9-2)",
		source : [["AL","S9"]],
		rarity : "rare",
		attunement : true,
		description : "This badge marks me as a Hellrider lieutenant and can be used as a holy symbol of Torm. While worn, I gain +2 AC if I'm not using a shield. If the badge is more than 5 ft away from me for over 1 minute, it reappears on a surface in 5 feet of Duke Ravengard.",
		descriptionLong : "This badge marks me as a Hellrider lieutenant. It's made from the bones of Klysandral and can be used as a holy symbol of Torm. While worn, I gain a +2 bonus to AC if I'm not using a shield. If the badge is more than 5 feet away from me for over one minute, it vanishes and harmlessly reappears on a surface in 5 feet of Duke Ravengard. The Duke knows my location when holding it, if we're on the same plane. He can end my attunement as an action. I can also take the Hellriders or Flaming Fist as my faction.",
		descriptionFull : "A Hellrider's Badge is only usable by a member of the Hellriders, and thanks to your efforts during Klysandral's funeral and the subsequent escape from Avernus, you have been awarded honorary membership by Duke Ulder Ravengard himself. This badge marks you as a lieutenant in the Hellriders.\n   While wearing the badge, you gain a +2 bonus to AC if you aren't using a shield. If the badge is more than 5 feet away from you for more than one minute, it vanishes and harmlessly reappears on a surface within 5 feet of Duke Ravengard. While holding the badge, the Duke knows your location, provided the two of you are on the same plane of existence and your attunement to the badge hasn't ended.\n   As an action, the Duke can touch the badge and end your attunement to it, as he has been granted this power by Elturel despite not being a Hellrider himself.\n   " + toUni("Special") + ". If you wish to take the Hellriders or Flaming Fist as your faction, you may do so. Additionally, this badge is made from the bones of Klysandral himself, counts as a holy reliquary, and may be used as a holy symbol of Torm if needed.\n   Despite its rarity, the Hellrider's Badge can be equipped by anyone that has earned it via playing DDEP09-02 Hellfire Requiem.",
		extraAC : [{name : "Hellrider's Badge", mod : 2, misc : true, text : "I gain a +2 bonus to AC when not using a shield."}],
	},
	"iggwilv's horn (ditlcot)" : {
		name : "Iggwilv's Horn",
		source : [["QftIS", 0]],
		rarity : "rare",
		attunement : true,
		description : "As an action, I can blow this horn to cast 1 of the following spells: Arms of Hadar, Fog Cloud, Gust of Wind, or Web (spell save DC 13). Each spell can be cast from it once per dawn.",
		descriptionFull : "You can use an action to blow this horn to cast one of the following spells from it: Arms of Hadar, Fog Cloud, Gust of Wind, or Web. If the spell requires a saving throw, the spell save DC is 13.\n   Once the horn has been used to cast a spell, it can't be used to cast that spell again until the next dawn.",
		spellcastingBonus : {
			name : "Iggwilv's Horn",
			spells : ["arms of hadar", "fog cloud", "gust of wind", "web"],
			selection : ["arms of hadar", "fog cloud", "gust of wind", "web"],
			times : 4,
			firstCol : "oncelr",
		},
		fixedDC : 13,
		spellFirstColTitle : "Us"
	},
	"ioun stone - celebration (ddal-drw5)" : {
		name: "Ioun Stone - Celebration (DDAL-DRW5)",
		source : [["AL","DRW"]],
		rarity : "common",
		attunement : true,
		description : "Attuning to this pale red stone takes 1 min. Magic action to orbit at 1d3 ft. Utilize to stow. In orbit, a bonus action makes the stone: 1) pulse with colored light for 1 min, making 10 ft dim light; 2) emit a harmless effect like sparks, musical notes, smell for 1 min; 3) pause in direction of most powerful caster/magical effect in 30ft. If none, aims toward Szass Tam's palace. The stone only works in Thay.",
		descriptionFull : "Roughly marble sized, Ioun Stones are named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun Stones exist, each type a distinct combination of shape and color.\n   When you take a Magic action to toss an Ioun Stone into the air, the stone orbits your head at a distance of 1d3 feet, conferring its benefit to you while doing so. You can have up to three Ioun Stones orbiting your head at the same time.\n   Each Ioun Stone orbiting your head is considered to be an object you are wearing. The orbiting stone avoids contact with other creatures and objects, adjusting its orbit to avoid collisions and thwarting all attempts by other creatures to attack or snatch it.\n   As a Utilize action, you can seize and stow any number of Ioun Stones orbiting your head. If your Attunement to an Ioun Stone ends while it's orbiting your head, the stone falls as though you had dropped it.\n   An ioun stone of celebration has the harmonious minor property, so that attuning to it requires only 1 minute. The item must be attuned to function, and stops working outside the borders of Thay. While this pale red sphere orbits your head, you can use a bonus action to cause it to it display one of the following effects:\n \u2022 The ioun stone pulses with green, violet, or amber light for 1 minute, filling the area around you with dim light to a distance of 10 feet.\n \u2022 The ioun stone emits harmless sensory effects such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor for 1 minute.\n \u2022 The stone pauses in its orbit in the direction of the most powerful spellcaster or magical effect within 30 feet of you. If there are no spellcasters or magical effects in range, it pauses in the direction of Szass Tam's palace.",
		action : [["bonus action", "Ioun Stone - Celebration"]]
		},
	"lemure onesie (ln)" : {
		name : "Lemure Onesie",
		source : ["AL:LN", 2019],
		rarity : "uncommon",
		description : "This comfortable fleece onesie has cozy, if amorphous, footies. When worn, I make myself — and belongings — appear as a lemure. This doesn't hold up to physical inspection. To know I'm disguised, a creature can inspect me as an action & pass an INT (Investigation) check (DC 13). The onesie fabric is inexpensive & quite flammable; I'm also vulnerable to Fire dmg.",
		descriptionFull : "This comfortable, fleece onesie is complete with cozy, if amorphous, footies. When wearing this onesie, you make yourself—including belongings on your person—appear as a lemure. The appearance fails to hold up to physical inspection. To discern you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check (DC 13). The fabric is inexpensive and quite flammable; while wearing this onesie, you have vulnerability to fire damage.",
		savetxt : { text : ["Vulnerable to fire damage"] }
		},
	"mind-poison dagger (ddhc-mord-05)" : {
		name : "Mind-Poison Dagger (DDHC-MORD-05)",
		source : [["AL","MToF"]],
		type : "weapon (dagger)",
		rarity : "rare",
		description : "This metal dagger has a wavy pattern of blue, white, & black. As an action once per dawn, I can make the blade emit a nimbus of pale light. This nimbus remains for 1 min or until the dagger hits a creature. The target must succeed on a DC 15 Wis save or take 2d10 Psychic & be Poisoned for 1 min as extreme pain & misery race through its mind. This is a fear & charm effect.",
		descriptionFull : "The metal of this dagger possesses a wavy pattern of blue, white, and black. You can use your action to cause the blade to exude a pale nimbus of light. This nimbus remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Wisdom saving throw or else take 2d10 psychic damage and be poisoned for one minute as feelings of extreme pain and misery race through the creature's mind. This is a fear and charm effect. The dagger can't be used this way again until the next dawn.",
		weight : 1,
		limfeaname : "Mind-Poison Dagger",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (Nimbus)"]],
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*dagger)(?=.*mind)(?=.*poison).*$/i,
			name : "Mind-Poison Dagger",
			description : "Finesse, light, thrown; if coated, DC 15 Wis save or +2d10 psychic \u0026 1 min poisoned",
			selectNow : true
		}
	},
	"mist hunters magnificent cap (rmh safety tools)" : {
		name : "Mist Hunters Magnificent Cap (RMH Safety Tools)",
		source : [["AL:R","ST"]],
		rarity : "common",
		description : "This ear-flapped deerstalker traveling cap, is worn by notable investigators. When worn, it functions as any other hat. At my whim, it transforms into a working magnifying glass or back into a cap as needed.",
		descriptionFull : "This deerstalker, ear-flapped traveling cap, is worn by notable investigators. When worn, it functions as any other hat. At the investigator's whim, it transforms into a working magnifying glass and back into a cap, as needed. This common magic item cannot be sold.",
	},
	"nettle (ddep4)" : {
		name : "Nettle (DDEP4)",
		source : [["AL","S4"]],
		type : "weapon (crossbow)",
		rarity : "rare",
		attunement : true,
		prerequisite : "Requires attunement by a creature of non-lawful alignment",
		prereqeval : function(v) { return !(/lawful/i).test(What("Alignment")); },
		description : "This sentient +2 hand crossbow has seen better times. The wood is cracked & splintered & the string is heavily-frayed. A large, blue feather hangs from the handgrip alongside a couple green glass baubles. The crossbow warns me, giving a +2 to initiative unless I'm Incapacitated. Sentience: Chaotic Neutral. Hearing & Darkvision to 120 ft. Speaks Common & Halfling. Personality: Greedy, impetuous, demands to be polished or shouts insults & denies bonuses.",
		descriptionFull : "This hand crossbow looks to have seen better times. The wood is cracked and splintered and the string is heavily-frayed. A large, blue feather hangs from the handgrip alongside a couple green, glass baubles. The crossbow warns you, granting a +2 bonus to your Initiative rolls if you don't have the Incapacitated condition.\n   " + toUni("Sentience") + ": Nettle is a sentient chaotic neutral weapon with an Intelligence of 15, a Wisdom of 10 and a Charisma of 14. It has has hearing and darkvision out to a range of 120 feet. Nettle speaks Common and Halfling.\n   " + toUni("Personality") + ": Nettle is greedy and impetuous, and prefers that its wielder share these ideals. It demands to be better taken care of than its previous owners did. If its bearer is lawfully-aligned, or if its bearer does not spend at least an hour each day tending to it (polishing, applying resin to the string, etc.), Nettle denies its bonuses to attack and damage rolls and Initiative checks. It also shouts out insults to those nearby, imposing disadvantage on any Charisma (Deception or Persuasion) checks or Dexterity (Stealth) check that its wielder makes to move silently.",
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on Initiative rolls." },
		weaponsAdd : { select : ["Nettle, Hand Crossbow +2"], options : ["Nettle, Hand Crossbow +2"] },
	},
	"oathbinder (ddhc-toa-15)" : {
		name : "Oathbinder (DDHC-TOA-15)",
		source : [["AL","S7"]],
		type : "weapon (warhammer)",
		rarity : "legendary",
		attunement : true,
		prerequisite : "Requires attunement by a creature of non-evil alignment",
		prereqeval : function(v) { return !(/evil/i).test(What("Alignment")); },
		description : "Handed down through generations of holy warriors, this sentient +2 warhammer is made from gold, jade, and finished wood. When I hit Fiends or Undead, it deals +2d6 Radiant. If left with less than 26 HP, target must pass a DC 15 Wis save or die. If pass, Frightened of me until my next turn ends. While held, the warhammer sheds 20-ft bright light & 20-ft dim. I can also cast Beacon of Hope once per dawn. If I flee from extraplanar evil, it mocks my cowardice.",
		descriptionLong : "Handed down through generations of holy warriors, this sentient +2 warhammer is fashioned from gold, jade, and finished wood. When I hit a Fiend or Undead, they take an extra 2d6 Radiant. If left with under 26 HP, they must pass a DC 15 Wis save or die. On a pass, they're Frightened of me until my next turn ends. While held, Oathbinder sheds 20-ft of bright light and 20-ft dim. I can also cast Beacon of Hope once per dawn. Imbued with the lifeforce of an ancient celestial, Oathbinder is the sworn enemy of fiends and evil extraplanar creatures. It speaks only when it has something important to say, and can often be openly curt and matter-of-fact. If I flee from extraplanar evil, Oathbinder mocks my cowardice.",
		descriptionFull : "Handed down through generations of holy warriors, Oathbinder is a sentient warhammer fashioned from gold, jade, and finished wood. You gain a +2 bonus to attack and damage rolls made with this weapon.\n   In addition, it has the properties of a mace of disruption: When you hit a Fiend or an Undead with this magic weapon, that creature takes an extra 2d6 Radiant damage. If the target has 25 Hit Points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature has the Frightened condition until the end of your next turn.\n   " + toUni("Light") + ". While you hold this weapon, it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.\n   While holding the weapon, you can use an action to cast beacon of hope. Once used, this ability can't be used again until the next dawn.\n   " + toUni("Sentience") + ": Oathbinder is a lawful good weapon with an Intelligence of 12, a Wisdom of 14 and a Charisma of 14. It has hearing and normal vision out to a range of 60 feet. The weapon can speak, read, and understand Common and Celestial. It has a strong, feminine voice. It knows every language you know while you're attuned to it.\n   " + toUni("Personality") + ": Imbued with the lifeforce of an ancient celestial, Oathbinder is the sworn enemy of fiends and other evil extraplanar creatures. It speaks only when it has something important to say, and can often be openly curt and matter-of-fact when doing so.\n   Oathbinder is courageous in the face of all that is evil. If its wielder actively chooses to flee from facing an extraplanar evil, such as a demon or powerful undead, and can't provide good justification for doing so, the weapon openly mocks them for their cowardice until the wielder can redeem themselves by defeating a worthy evil opponent.\n   A protector of life and light, Oathbinder has no patience for those who perform acts spurned by dishonesty and corruption. It strongly protests against any wielder who continuously participates in such actions, and can be very disagreeable when its wielder consistently tolerates others who do the same.",
		limfeaname : "Oathbinder (Beacon of Hope)",
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["beacon of hope"],
			selection : ["beacon of hope"],
			firstCol : "oncelr"}],
		weaponOptions : {
			baseWeapon : "warhammer",
			regExpSearch : /^(?=.*oathbinder).*$/i,
			name : "Oathbinder",
			description : "Versatile (d10); Fiend/Undead +2d6 Radiant; if HP<26, DC 15 Wis save or die. If pass, Frightened until my next turn ends",
			modifiers : [2, 2],
			selectNow : true
				},
	},
	"order of the guardians ring (rmh safety tools)" : {
		name : "Order of the Guardians Ring (RMH Safety Tools)",
		source : [["AL:R","ST"]],
		type : "ring",
		rarity : "unique",
		magicItemTable : "",
		description : "This ring can deliver a potion or poison under a creature's skin. If targeting another creature, make a melee attack as an action. On a hit, the liquid is delivered. If targeting myself, I can use a reaction to deliver it. If loaded with anti-charm tonic, the reaction gives me adv. on a save against charm or possession. The ring can only be reloaded by the Order.",
		descriptionFull : "This ring can deliver a dose of potion or poison under a creature's skin. If targeting a creature, use an action to make a melee attack. On a hit, the liquid is delivered. If targeting yourself, use a reaction to deliver it into your system. This equipment cannot be sold, and the ring cannot be reloaded except by the Order.\n   Currently, the Order of the Guardian ring is loaded with an anti-charm tonic. When an attempt is made to charm or possess you, you may use your reaction to deliver the tonic into your system and gain advantage to your saving throw. This potion has one use, and the top-secret recipe is not known to you. This potion cannot be extracted from the ring until used.",
		limfeaname : "Anti-charm tonic",
		usages : "1",
		recovery : "Special",
		additional : "from Order",
		action : [["action", "Order of the Guardians Ring (on target)"], ["reaction", "Order of the Guardians Ring (on self)"]],
		weaponOptions : {
			regExpSearch : /^(?=.*order)(?=.*guardian|guardians)(?=.*ring).*$/i,
			name : "Order of the Guardians Ring",
			baseWeapon : "unarmed strike",
			abilitytodamage : false,
			damage : [0, 0, ""],
			description : "If attack hits, potion or poison in ring delivered to target.",
			selectNow : true
		}
	},
	"owlbear snowshoes (fc)" : {
		name : "Owlbear Snowshoes",
		source : ["AL:FC",2020],
		type : "common",
		description : "These warmly appointed snowshoes leave the tracks of an owlbear in snow, mud, or other soft surfaces. They also have an unfortunate tendency to attract other owlbears.",
		descriptionFull : "These warmly appointed snowshoes leave the tracks of an owlbear in snow, mud, or other soft surfaces. They also have an unfortunate tendency to attract other owlbears."
		},
	"pearl of elocution (wbw-pr)" : {
		name : "Pearl of Elocution (WBW-PR)",
		source : ["AL", "WBW"],
		rarity : "common",
		description : "When I place this pearl underneath my tongue, I perfectly pronounce the words of any language I can speak.",
		descriptionFull : "When you place this pearl underneath your tongue, you perfectly pronounce the words of any language that you can speak."
		},
	"pocket watch (wbw-pr)" : {
		name : "Pocket Watch (WBW-PR)",
		source : ["AL", "WBW"],
		rarity : "common",
		description : "This lidded brass container holds a tiny sand timer suspended behind glass. No matter how it's positioned, the sand always falls from one side of the timer to the other, taking exactly 24 hrs to deplete. Once depleted, the timer spins around to reset itself.",
		descriptionFull : "This lidded brass container holds a tiny sand timer suspended behind glass. No matter how the container is orientated, the sand always falls from one side of the timer to the other, taking exactly 24 hours to deplete. Once depleted, the sand timer spins around to reset itself."
		},
	"potion of polychromy (ditlcot)" : {
		name : "Potion of Polychromy",
		source : [["QftIS", 0]],
		rarity : "uncommon",
		description : "The potion has 7 brightly colored bands and a syrupy taste. When drunk, I become rainbow-hued for 1 hr (along with worn/carried items). For the duration, I can turn any combination of colors as a bonus action. If I mimic my surroundings, my hues shift to match, and I have advantage on Dex (Stealth) checks until I change colors again or the potion wears off.",
		descriptionFull : "When you drink this potion, you and everything you are wearing or carrying take on a rainbow-hued appearance for 1 hour. During that time, you can use a bonus action to turn any color or combination of colors you choose. If you mimic the colors of your surroundings, your hues continually shift to match your surroundings, and you have advantage on Dexterity (Stealth) checks until you change your colors again or the potion wears off.\n   The potion is separated into seven brightly colored bands of immiscible liquids and has a syrupy taste.\n   This item is from the Quests from the Infinite Staircase preview adventure: Descent into the Lost Caverns of Tsojcanth."
		},
	"pumpkin ring (ln)" : {
		name : "Pumpkin Ring",
		source : ["AL:LN", 2020],
		rarity : "common",
		description : "This ring is made of polished silver, in the shape of my carved pumpkin. While wearing it, the glowing image of my carved pumpkin appears in front of my own face, like a mask.",
		descriptionFull : "This ring is made of polished silver, in the shape of your carved pumpkin. While wearing this ring, the glowing image of your carved pumpkin appears in front of your own face, like a mask (the image is whatever you carved during the Liar's Night pumpkin carving contest)."
		},
	"red wizard blade (al:sa-12b)" : {
		name : "Red Wizard Blade",
		source : [["AL:SA","12B"]],
		type : "weapon (dagger)",
		rarity : "legendary",
		description : "Forged by Red Wizards using a secret process, this grim steel dagger draws power from the Negative Plane. When it hits a creature with a melee attack, they take +3d12 Necrotic damage. If the dagger reduces a creature to 0 HP, they die and can only be raised by a deity or a Tablet of Reawakening.",
		descriptionFull : "Forged by Red Wizards using a secret process known only to them, this grim steel dagger draws its power from the Negative Plane. When you hit a creature with a melee attack using this magic dagger, the target takes an extra 3d12 necrotic damage.\n   A creature reduced to 0 hit points by this weapon dies and can't be raised from the dead except by a deity or by a creature using a tablet of reawakening to cast the true resurrection spell. (This item was from the Honor Among Thieves movie, with the statblock taken from D&D Beyond promotional material)",
		weight : 1,
		weaponOptions : {
			baseWeapon : "dagger",
			regExpSearch : /^(?=.*red)(?=.*wizard)(?=.*blade).*$/i,
			name : "Red Wizard Blade",
			description : "Finesse, light, thrown; +3d12 necrotic damage (melee only)",
			selectNow : true
		}
	},
	"selûne's owl-eye glasses (fm)" : {
		name : "Selûne's Owl-Eye Glasses",
		source : ["AL:FM", 2020],
		rarity : "unique",
		magicItemTable : "",
		attunement : true,
		description : "As an action once per dawn, I can instantaneously resummon a deceased pet. This only works on a certed or Holiday Event vanity pets and mounts that can be returned to life by Find Familiar or Find Steed. If I unattune, my pet doesn't die.",
		descriptionFull : "While wearing these glasses, as an action, you can instantaneously resummon a deceased, certed or Holiday Event vanity pet or mount that can be returned to life by the find familiar or find steed spells. Once returned to life, they have no new additions to the roles and abilities they had before death (for example, these glasses do not transform them into a familiar or steed). If you are not attuned to your glasses, that does not kill your pet. The glasses can't be used this way again until the next dawn.",
		limfeaname : "Selûne's Glasses",
		usages : 1,
		recovery : "dawn"
		},
	"shar's veil (fm)" : {
		name : "Shar's Veil",
		source : ["AL:FM", 2020],
		rarity : "unique",
		magicItemTable : "",
		description : "This shadowy veil is purple and black. Once per long rest, it gives me the illusion of death and decay for 1 hour. Lying motionless, I appear dead. In motion, I look Undead but my type doesn't change. To tell I'm disguised, a creature must use its action to inspect my appearance and succeed on a DC 13 Int (Investigation) check.",
		descriptionFull : "Once per long rest, while you wear this purple and black, shadowy veil, it gives the illusion of death and decay for 1 hour. Lying motionless, your body appears to be dead. In motion, you appear to be an undead creature, but your creature type is not changed to undead. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on a DC 13 Intelligence (Investigation) check.",
		usages : 1,
		recovery : "long rest"
		},
	"spare (ddhc-toa-13)" : {
		name : "Spare (DDHC-TOA-13)",
		source : [["AL","S7"]],
		type : "weapon (longsword)",
		rarity : "legendary",
		attunement : true,
		prerequisite : "Requires attunement by a creature of non-evil alignment",
		prereqeval : function(v) { return !(/evil/i).test(What("Alignment")); },
		description : "Recently found in the Sanrach Mountains, this exquisite sentient +2 longsword has a blackened steel blade and the head of a dragon for its hilt. As bonus action, blade ignites until I repeat command (ba) or drop/sheathe sword. While lit, it deals +2d6 Fire and emits 40-ft bright light and 40-ft dim. Once per LR, cast Vicious Mockery (DC 14). Spare mocks me if roll a 1. Casts VM on me if I roll 3 in a row.",
		descriptionLong : "Recently recovered from the depths of the Sanrach Mountains, this exquisite sentient +2 longsword has a blackened steel blade and a hilt shaped like the head of a dragon. As a bonus action, I can say a command word to ignite the blade, shedding bright light in a 40-ft radius & dim light for 40-ft more. While ablaze, it deals an extra 2d6 Fire per hit. The flames last until I say the command again (as a bonus action) or I drop/sheathe the sword. Once per long rest, I can cast Vicious Mockery (DC 14). Spare mocks me if I roll a 1 on an attack or check. It casts Vicious Mockery on me if I roll 3 ones in a row. Spare is extremely haughty and proud, demanding that I portray the same integrity and dignity. It prefers to be called “Fire of Destiny.”",
		descriptionFull : "Only recently uncovered from the depths of the Sanrach Mountains, Spare is an exquisitely crafted longsword with a blackened steel blade and a hilt fashioned into the head of a dragon. You gain a +2 bonus to attack and damage rolls made with this weapon.\n   In addition, it has all of the properties of a flame tongue: while holding this magic weapon, you can take a Bonus Action and use a command word to cause flames to engulf the damage-dealing part of the weapon. These flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet. While the weapon is ablaze, it deals an extra 2d6 Fire damage on a hit. The flames last until you take a Bonus Action to issue the command again or until you drop, stow, or sheathe the weapon.\n   Once per day, while the weapon is unsheathed, it can be used to cast vicious mockery as a 7th-level spellcaster (spell save DC 14). Once used, this ability cannot be used again until a the completion of a long rest.\n   " + toUni("Sentience") + ": Spare is a sentient chaotic good weapon with an Intelligence of 14, a Wisdom of 11, and a Charisma of 16. It has hearing and normal vision out to a range of 60 feet. The weapon can speak, read, and understand Common, Elvish, and Undercommon.\n   " + toUni("Personality") + ": Spare is extremely haughty and proud, demanding that its user portray the same level of integrity and dignity that it requires for itself. It periodically mocks enemies in combat and has truly earned the name of a flame tongue.\n   If the sword's wielder takes action outside of the sword's good-aligned tendencies, or shows an extremely poor performance (such as rolling a 1 on an attack roll or skill check), Spare openly berates the wielder. If such an event happens more than twice in a row, the sword uses its vicious mockery ability upon the wielder itself.\n   " + toUni("Lore") + ": This ancient sword was once wielded by the legendary warrior, Sabashin Gatorhead. After his rival was soundly defeated in an honorable duel, instead of taking his life as was custom, his soul was ensorcelled into the blade.\n   Though the sword insisted on being called “Fire of Destiny,” Sabashin thought it was a silly name and thus didn't call the sword anything. After Sabashin's passing, the sword had passed through various hands until it fell into the ownership of Lord Galoray, a ruthless overlord. Galoray became so tired of the sword's constant beratement, he left it in his keep, mounted on a decorative display with a plaque that read “Spare.”",
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
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*spare).*$/i,
		name : "Spare",
		description : "Versatile (d10); While active, +2d6 fire damage.",
		modifiers : [2, 2],
		selectNow : true
				},
	},
	"tablet of reawakening (al:sa-12b)" : {
		name : "Tablet of Reawakening",
		source : ["AL:SA","12B"],
		rarity : "legendary",
		description : "Witches of Rashemen created this tiny stone tablet to counter the necromancy of the Red Wizards. As an action, I can cast True Resurrection from the tablet. Once used, it turns to dust.",
		descriptionFull : "Witches of Rashemen created this Tiny stone tablet to counter the necromancy of the Red Wizards. As an action, you can cast true resurrection from the tablet. Once used in this way, the tablet turns to dust and is destroyed. (This item was from the Honor Among Thieves movie, with the statblock taken from D&D Beyond promotional material)",
		},
	"tarot card set (ln)" : {
		name : "Tarot Card Set",
		source : ["AL:LN", 2020],
		rarity : "unique",
		magicItemTable : "",
		description : "Once per day, I can draw a card and roll 1d4 for a random item that lasts to the next dawn. 1: The Flower - touching this card to a patch of earth in 5 ft sprouts 1 flower of my choice. The flower is nonmagical and grows or withers like normal. 2: The Yummy Meal - my favorite meal, the equivalent of 1 ration. 3: The Tea Pot - a tiny pot of tea, equivalent to 1 Healing Potion. 4: The Witch - a stone and twisted wire pendant. As an action, it gives me adv. on CHA checks vs Humanoids (\u2264CR1), for 1 hour.",
		descriptionLong : "Once per day, I can draw a card and roll 1d4 to determine what it produces. The item lasts to the next dawn when I can roll again. 1: The Flower. Touching the card to a patch of earth in 5 ft sprouts 1 flower of my choice. The flower is nonmagical and grows or withers like normal. 2: The Yummy Meal. My favorite meal, the equivalent of 1 ration. 3: The Tea Pot. A tiny pot of tea, equivalent to 1 Healing Potion. 4: The Witch. A stone and twisted wire pendant. As an action, it gives me adv. on CHA checks vs Humanoids (up to CR 1), for 1 hr.",
		descriptionFull : "Once per day, roll 1d4 to find out what your tarot fortune produces. At dawn this product (not the card) vanishes but the character may roll again to reveal their next fortune.\n   " + toUni("DC 1: The Flower") + " - touching this card to a patch of earth or soil, within 5 feet of you, causes one flower of your choice to sprout there. The flower is nonmagical and harmless, and it grows or withers as a normal flower would.\n   " + toUni("DC 2: The Yummy Meal") + " - this card produces your favorite meal, the equivalent of 1 ration.\n   " + toUni("DC 3: The Tea Pot") + " - this card produces a tiny pot of piping tea, the equivalent of one potion of healing.\n   " + toUni("DC 4: The Witch") + " - this card produces a stone and twisted wire pendant. As an action, it gives you advantage on Charisma checks when communicating with humanoids (CR 1 or less), for 1 hour.",
		usages : 1,
		recovery : "dawn"
		},
	"tasha's creeping keelboat (ditlcot)" : {
		name : "Tasha's Creeping Keelboat",
		source : [["QftIS", 0]],
		rarity : "very rare",
		attunement : true,
		description : "This boat is 10 ft wide and 30 ft long. It has 4 legs with a Speed and Swim Speed of 20 ft, but can't travel underwater. The boat can transport 1,000 pounds without hindrance, or up to twice that weight at half speed.  It moves according to my spoken directions while I'm aboard, and chosen creatures gain +1 AC while on the boat.",
		descriptionFull : "This magic vehicle is a boat 10 feet wide and 30 feet long. It has four legs that propel it across land and water. It has a normal and Swim Speed of 20 feet, but it can't travel underwater. The boat moves according to your spoken directions while you are riding it, and creatures of your choice gain a +1 bonus to their Armor Class while on the boat.\n   The boat can transport up to 1,000 pounds without hindrance. It can carry up to twice this weight, but it moves at half speed if it carries more than its normal capacity.\n   This item is from the Quests from the Infinite Staircase preview adventure: Descent into the Lost Caverns of Tsojcanth."
		},
	"tyr's blessing of command (ccc-bmg-23 phlan2-2)" : {	
		name : "Tyr's Blessing of Command (BMG-23 PHLAN2-2)",
		source : [["AL","CCC"]],
		rarity : "unique",
		magicItemTable : "",
		attunement : true,
		description : "This blessing was bestowed on me by Tyr in recognition of my service to the city and citizens of Phlan in the face of great peril to my own wellbeing. My Charisma score increases by 2, up to a maximum of 20. If this blessing is accepted, it requires attunement. This blessing is not tradeable, and if refused or unattuned, it can't be regained.",
		descriptionFull : "This blessing has been bestowed upon you by Tyr in recognition of your service to the city and citizens of Phlan in the face of great peril to your own wellbeing. Your Charisma score increases by 2, up to a maximum of 20. This blessing may be refused. If accepted, it requires an attunement slot. This blessing is not tradeable, and if refused or unattuned, it may not be regained.",
		scores : [0, 0, 0, 0, 0, 2],
	},
	"tyr's blessing of luck (ccc-bmg-24 phlan2-3)" : {	
		name : "Tyr's Blessing of Luck (BMG-24 PHLAN2-3)",
		source : [["AL","CCC"]],
		rarity : "unique",
		magicItemTable : "",
		attunement : true,
		description : "This blessing was bestowed on me by Tyr in recognition of my service to the city and citizens of Phlan in the face of great peril to my own wellbeing. I gain +1 to ability checks and saving throws. This blessing may be refused. If accepted, it requires attunement. This blessing is not tradeable, and if refused or unattuned, it can't be regained.",
		descriptionFull : "This blessing has been bestowed upon you by Tyr in recognition of your service to the city and citizens of Phlan in the face of great peril to your own well-being. You gain a +1 bonus to ability checks and saving throws. This blessing may be refused. If accepted, it requires an attunement slot. This blessing is not tradeable, and if refused or unattuned, it may not be regained.",
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"tyr's blessing of the mind (ccc-bmg-22 phlan2-1)" : {	
		name : "Tyr's Blessing of the Mind (BMG-22 PHLAN2-1)",
		source : [["AL","CCC"]],
		rarity : "unique",
		magicItemTable : "",
		attunement : true,
		description : "This blessing was bestowed on me by Tyr in recognition of my service to the city and citizens of Phlan in the face of great peril to my own wellbeing. My Intelligence score increases by 2, up to a max of 20. If accepted, the blessing requires attunement. It's not tradeable, and if refused or unattuned, it cannot be regained.",
		descriptionFull : "This blessing has been bestowed upon you by Tyr in recognition of your service to the city and citizens of Phlan in the face of great peril to your own wellbeing. Your Intelligence score increases by 2, up to a maximum of 20. This blessing may be refused. If accepted, it requires an attunement slot. This blessing is not tradeable, and if refused or unattuned, it cannot be regained.",
		scores : [0, 0, 0, 2, 0, 0],
	},
	"wand of whimsy (wbw-pr)" : {
		name : "Wand of Whimsy (WBW-PR)",
		source : ["AL", "WBW"],
		rarity : "common",
		description : "This wand has 8 charges, regaining 1d6+1 at dawn. While held, I can use 1 charge as an action to create an effect. I can change the hair color or style of a visible creature in 50 ft, cause a small cloud of butterflies to flutter from the tip of the wand, or conjure a brief tinkling melody. If last charge used, roll a d20. On a 1, the wand transforms into a cloud of butterflies that flutter away.",
		descriptionFull : "This wand has 8 charges. While holding it, you can use an action to expend 1 of its charges and create one of the following effects:\n \u2022 Change the hair color or hair style of a creature you can see within 50 feet.\n \u2022 Cause a small cloud of butterflies to flutter from the tip of the wand.\n \u2022 Conjure a brief, tinkling melody from the wand.\n   The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a cloud of butterflies, which flutter away."
		},
	"woe (ddal-drw16)" : {
		name : "Woe (DDAL-DRW16)",
		source : [["AL","DRW"]],
		type : "weapon (longsword)",
		rarity : "unique",
		magicItemTable : "",
		attunement : true,
		description : "This +3 longsword, formed from Father Llymic's urge to destroy, is made from a bizarre icy crystal that seems to bend & twist when viewed peripherally. If given the chance to act violently, Woe heightens the urge. If I wield it while wearing Discord, I'm unharmed by temperatures as low as −60\u00B0F. Until I remove Discord, I gain the flaw \"Bright light enrages me.\"",
		descriptionLong : "This blade, formed from Father Llymic's urge to destroy, is made from a bizarre, icy crystal that appears to bend and twist when viewed peripherally. When I'm presented with an opportunity to act violently, Woe heightens its urge to do so. I have a +3 bonus to attack and damage rolls made with the weapon. If I wield Woe while wearing Discord, I'm unharmed by temperatures as low as −60 degrees Fahrenheit. Until I remove Discord, I also gain the flaw \"Bright light enrages me.\"",
		descriptionFull : "This blade, formed from Father Llymic's urge to destroy, is made from a bizarre, icy crystal that appears to bend and twist when viewed peripherally. When Woe's bearer is presented with an opportunity to act violently, Woe heightens its urge to do so.\n   You have a +3 bonus to attack and damage rolls made with this magic weapon.\n   If a character wields Woe while wearing Discord (plate armor from DDAL-DRW-15 Frozen Whispers), they are unharmed by temperatures as low as −60 degrees Fahrenheit. Additionally, until the character removes Discord, they gain the flaw “Bright light enrages me.”",
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*woe).*$/i,
		name : "Woe",
		modifiers : [3, 3],
		selectNow : true
			},
	},
	"wooden gecko earrings (ddhc-toa-8)" : {
		name : "Wooden Gecko Earrings (DDHC-TOA-8)",
		source : [["AL","S7"]],
		rarity : "uncommon",
		magicItemTable : "A",
		description : "After wearing these earrings for at least 1 day, I become proficient in Strength (Athletics) checks to climb, as long as my hands and feet are bare and touching the surface. I also have an insatiable urge to eat insects.",
		descriptionFull : "After being worn for at least 1 day, the wearer of these wooden gecko earrings becomes proficient in Strength (Athletics) checks to climb, as long as their hands and feet are bare and touching the surface. The earrings can be sold for 400 gp. The wearer, however, has an insatiable urge to eat insects."
	},
	"zephyros' notebook (ddia05)" : {
		name : "Zephyros' Notebook (DDIA05)",
		source : [["AL","S5"]],
		rarity : "common",
		description : "Zephyros, the perpetually-preoccupied cloud giant, gave me a selection of his notes. The scribed words, rough sketches, and strange maps don't make much sense at first glance, but if I spend one min studying, I gain advantage on my next INT (History) or (Arcana) check. If I don't rest before using the notes again, there's a 50% chance that I fall asleep for 1 min instead.",
		descriptionFull : "Zephyros, the perpetually-preoccupied cloud giant, has granted you a selection of his notes. The scribed words, rough sketches, and strange maps don't seem to make much sense at first glance, but if you spend one minute studying the pages, you gain advantage on your next Intelligence (History) or (Arcana) check. If you do not rest before using the notes again there is a 50% chance that you fall askeep for 1 minute instead."
	},
}
})

//Neat custom trinkets from AL modules. Most have no real mechanical effect, but are cool enough that people might want the full description anyway.
MagicItemsList["al trinkets"] = {
		name : "AL Trinkets",
		type : "Trinket",
		rarity : "unique",
		magicItemTable : "",
		allowDuplicates : true,
		defaultExcluded : true,
		choices : ["Arcane Curio: Belt (DDEX2-10)","Arcane Curio: Brush (DDEX2-10)","Arcane Curio: Cloak (DDEX2-10)","Arcane Curio: Inkpot (DDEX2-10)","Arcane Curio: Pipe (DDEX2-10)","Arcane Curio: Quill (DDEX2-10)","Arcane Curio: Wand (DDEX2-10)","Artor's Blood Mead: Six-pack (DC-POA-SNIPE-1)","Dinosaur Eggshell (WBW-DC-CONMAR-6)","Efreeti Crown of Wishes (CCC-ODFC2-2)","Feast Invite (WBW-DC-TMP-2)","Flamesoul Stone (CCC-YLRA1-3)","Heirloom Necklace (FM)","Leaf With Amber Veins (WBW-DC-CONMAR-6)","Lohringan Pink Opal (WBW-DC-CONMAR-6)","Magic Mirror (WBW-DC-VMT-1)","Piece of the Infernal Machine of Lum the Mad (IMR)","Sign of the Snail (DDIA05)","Snipe Feather Pillow (DC-POA-SNIPE-1)","Striking at the Bare Neck (DC-POA-SNIPE-1)"],
	"arcane curio: belt (ddex2-10)" : {
		name: "Arcane Curio: Belt (DDEX2-10)",
		nameAlt: "Arcane Curio: Belt",
		source : ["AL", "S2"],
		defaultExcluded : true,
		description: "A belt with a self-adjusting buckle.",
		weight: 1,
	},
	"arcane curio: brush (ddex2-10)" : {
		name: "Arcane Curio: Brush (DDEX2-10)",
		nameAlt: "Arcane Curio: Brush",
		source : ["AL", "S2"],
		defaultExcluded : true,
		description: "A makeup brush that never requires makeup.",
		weight: 0.25,
	},
	"arcane curio: cloak (ddex2-10)" : {
		name: "Arcane Curio: Cloak (DDEX2-10)",
		nameAlt: "Arcane Curio: Cloak",
		source : ["AL", "S2"],
		defaultExcluded : true,
		description: "A cloak that never gets wet in the rain.",
		weight: 1,
	},
	"arcane curio: inkpot (ddex2-10)" : {
		name: "Arcane Curio: Inkpot (DDEX2-10)",
		nameAlt: "Arcane Curio: Inkpot",
		source : ["AL", "S2"],
		defaultExcluded : true,
		description: "An inkpot that never dries out.",
		weight: 1,
	},
	"arcane curio: pipe (ddex2-10)" : {
		name: "Arcane Curio: Pipe (DDEX2-10)",
		nameAlt: "Arcane Curio: Pipe",
		source : ["AL", "S2"],
		defaultExcluded : true,
		description: "A pipe that fills with tobacco each morning.",
		weight: 0.5,
	},
	"arcane curio: quill (ddex2-10)" : {
		name: "Arcane Curio: Quill (DDEX2-10)",
		nameAlt: "Arcane Curio: Quill",
		source : ["AL", "S2"],
		defaultExcluded : true,
		description: "A quill that never blunts.",
		weight: 0.1,
	},
	"arcane curio: wand (ddex2-10)" : {
		name: "Arcane Curio: Wand (DDEX2-10)",
		nameAlt: "Arcane Curio: Wand",
		source : ["AL", "S2"],
		defaultExcluded : true,
		description: "A wand that summons a mundane toad once per day.",
		weight: 1,
		limfeaname : "Arcane Curio: Wand (Toad)",
		usages : 1,
		recovery : "dawn"
	},
	"artor's blood mead: six-pack (dc-poa-snipe-1)" : {
		name: "Six-pack of Artor's Blood Mead (SNIPE-1)",
		source : ["AL", "DC-POA"],
		defaultExcluded : true,
		description: "This small wooden crate has 6 ceramic bottles containing dark red mead specially commissioned for Artor Morlin. His frowning face is stenciled on the bottles. When drunk, the mead has an unsettling metallic taste.",
		descriptionFull: "A small wooden crate containing six ceramic bottles containing dark red mead especially commissioned for Artor Morlin, with the frowning face of Artor stenciled on the bottles. When you drink it, it has an unsettling metallic taste.",
		weight: 1,
	},
	"dinosaur eggshell (wbw-dc-conmar-6)" : {
		name: "Dinosaur Eggshell (WBW-DC-CONMAR-6)",
		source : ["AL", "WBW-DC"],
		defaultExcluded : true,
		description: "This leathery, scale-like fragment of eggshell has an earthy smell and is the color of dirt.",
	},
	"efreeti crown of wishes (ccc-odfc2-2)" : {
		name : "Efreeti Crown of Wishes (CCC-ODFC2-2)",
		source : [["AL","CCC"]],
		defaultExcluded : true,
		description : "This beautiful golden crown is covered with diamonds that gleam with their own light & resizes to fit my head. Despite its name, the crown doesn't grant wishes. Instead, when I feel strong emotions, the crown sprouts harmless, colorful flames from its pinnacle. The color is based on my mood: red for anger, blue for sorrow, green for amusement, etc.",
		descriptionFull : "This beautiful golden crown is covered with diamonds each of which gleams with its own light. The crown resizes to fit the head of any wearer. Contrary to its name, the crown does not actually grant any wishes. Instead, when the person wearing it feels strong emotion of any kind, the crown sprouts harmless, colorful flames from its pinnacle, with the color of the flames based on the wearer's mood: red for anger, blue for sorrow, green for amusement, and so on. This crown can be sold for 1,500 gp. It does not count as a magic item and cannot be traded. (To be kept as a trinket, this crown may not be sold)."
	},
	"feast invite (wbw-dc-tmp-2)" : {
		name : "Feast Invite (WBW-DC-TMP-2)",
		source : [["AL","WBW-DC"]],
		defaultExcluded : true,
		description : "An old invitation to a banquet in the Summer Court, written in ink on vellum in Sylvan. This is Dyul's invitation to the feast that led to the Shadowfell hunt and the problems in his domain. Theun Win'Nin found it in a wine bottle.",
	},
	"flamesoul stone (ccc-ylra1-3)" : {
		name : "Flamesoul Stone (CCC-YLRA1-3)",
		source : [["AL","CCC"]],
		defaultExcluded : true,
		description : "This fist-sized crystal produces a flickering coppery-orange glow from within. The light is magical, but isn't bright enough to significantly illuminate an area. Casting detect magic on the Flamesoul Stone shows a hint of necrotic magic emanating from it. The light from the stone is the same color as the comet that was recently seen over Ylraphon.",
		descriptionFull : "A fist-sized crystal that produces a flickering coppery-orange glow from within. The light is magical, but isn't bright enough to significantly illuminate any area. Casting detect magic on the Flamesoul Stone shows a slight hint of necrotic magic emanating from within. The light from the stone is the same color as the comet that has recently been seen over Ylraphon."
	},
	"heirloom necklace (fm)" : {
		name : "Heirloom Necklace",
		source : [["AL:FM",2024]],
		defaultExcluded : true,
		description : "A locket with the tiny painted portrait of 3 of my family members hangs from this clay beaded necklace. Inside is a secret compartment, containing 1 pinch of grave soil mixed with peppermint incense ashes. When I hold the locket close, I feel the words of those family members.",
		descriptionFull : "From this clay beaded necklace hangs a locket, painted with the tiny portrait of three of your family members. Inside is a secret compartment, containing one pinch of grave soil, mixed with the ash of peppermint incense. When you hold the locket close to your chest, you feel the words of those family members."
	},
	"leaf with amber veins (wbw-dc-conmar-6)" : {
		name: "Leaf With Amber Veins (WBW-DC-CONMAR-6)",
		source : ["AL", "WBW-DC"],
		defaultExcluded : true,
		description: "This small dark leaf feels smooth and slightly waxy. Amber veins crisscross its surface. Though somewhat delicate, the leaf is resistant to crumpling and crushing. This is a token of Turanok's trust in me. I'm a friend of Lohringar and always welcome there. This leaf is also a conduit into Lohringar. All I need to get there is the ritual components.",
		descriptionFull: "This is a small, dark leaf that feels smooth to the touch and slightly waxy. Amber veins crisscross its surface. Though somewhat delicate, the leaf is resistant to crumpling and crushing. This is a token of Turanok's trust in you. You are a friend of Lohringar and you are always welcome there. This leaf is itself a conduit into Lohringar and all you need to get there is just the ritual components.",
	},
	"lohringan pink opal (wbw-dc-conmar-6)" : {
		name: "Lohringan Pink Opal (WBW-DC-CONMAR-6)",
		source : ["AL", "WBW-DC"],
		defaultExcluded : true,
		description : "This small pink opal no larger than a child's fingernail is a symbol of love, gentleness, and healing. It glows faintly in the moonlight.",
	},
	"magic mirror (wbw-dc-vmt-1)" : {
		name: "Magic Mirror (WBW-DC-VMT-1)",
		source : ["AL", "WBW-DC"],
		defaultExcluded : true,
		description : "This silver hand mirror shows the viewer's heart's desire. The image reflected in the mirror's polished surface comes purely from their memories or imagination, and can't be seen by anyone else.",
	},
	"piece of the infernal machine of lum the mad (imr)" : {
		name: "Piece of the Machine of Lum the Mad (IMR)",
		source : ["AL:EL", 2019],
		defaultExcluded : true,
		description : "Once operated via its vast array of buttons, dials, and levers, the Infernal Machine of Lum the Mad has been dismantled and lies scattered throughout the world. Who knows what function of it this piece controlled? This appears as a jeweled button marked with a mysterious glyph, hung from a delicate chain.",
	},
	"sign of the snail (ddia05)" : {
		name: "Sign of the Snail (DDIA05)",
		source : ["AL", "S5"],
		defaultExcluded : true,
		description: "This heavy silver amulet shows the sigil of the Zhentarim on the front and an ornate snail on the back. Kella and Xolbrin didn't hide the fact that they work for \"the Snail\", but didn't speak of it further. While worn, I have advantage on Charisma checks with other Zhentarim, but may receive penalties when dealing with other factions and characters.",
		descriptionFull : "This heavy silver amulet proudly shows the sigil of the Zhentarim on the front and has an ornate snail on the back. Kella and Xolbrin made no secret of the fact that they work for \"the Snail\", but did not speak of him/her further. Wearing this amulet grants you advantage on Charisma checks with other Zhentarim, but may impose penalties when dealing with other factions and characters.",
	},
	"snipe feather pillow (dc-poa-snipe-1)" : {
		name : "Snipe Feather Pillow (DC-POA-SNIPE-1)",
		source : ["AL", "DC-POA"],
		defaultExcluded : true,
		description : "This feather pillow is made of snipe feathers and salvaged Ice Spider silk. It allows restful sleep without nightmares. When used during a long rest, I may roll 1d6. On a 1, I dream about a snipe mother and her baby chicks happily treading through clean snow.",
		descriptionFull : "This feather pillow is made of snipe feathers and salvaged Ice Spider silk. It allows restful sleep without nightmares [treat like trinket #65 on the PHB trinkets table]. A PC using this pillow during a long rest may roll 1d6. On a one, their dreams are all filled with a snipe mother and her baby chicks happily treading through clean snow.",
		},
	"striking at the bare neck (dc-poa-snipe-1)" : {
		name : "Striking at the Bare Neck (DC-POA-SNIPE-1)",
		source : ["AL", "DC-POA"],
		defaultExcluded : true,
		description : "This red-leather book is a disturbing collection of military and political strategy framed as poetry. While the insights are profound and the poetry skilled, musical, and high artistry, the underlying theme of mortals as prey makes reading more than a few poems in a sitting deeply unsettling to most humanoids.",
		},
}

//Tree Spirit Item from DDHC-TOA-8. Only allowed with special campaign documentation. The PHB doesn't actually specify which weapons are made of wood, so the restrictions I've entered are largely just what seems right to me.
MagicItemsList["tree spirit weapon"] = {
		name : "Tree Spirit Weapon",
		source : [["AL:GA","RLK"]],
		type : "weapon (wooden bludgeoning or piercing)",
		rarity : "rare",
		magicItemTable : "?",
		attunement : true,
		defaultExcluded : true,
		description : "A tree spirit weapon is crafted from the wood of a sentient tree. The spirit of the tree remains in the wood so the weapon contains a sentience. The bonuses provided by a tree spirit weapon depend on the level of the attuned wielder. It gets more powerful — and more dangerous to wield — as you become more powerful as well.",
		descriptionFull : "A tree spirit weapon is one crafted from the wood of a sentient tree. It must be made of wood and deal bludgeoning or piercing damage. The spirit of the tree remains in the wood, and therefore the weapon contains a sentience. The bonuses provided by a tree spirit weapon are dependent on the level of the person to whom it is attuned. In this way, the tree spirit weapon is progressive: it gets more powerful — and more dangerous to wield — as the attuned wielder becomes more powerful as well."+
		"\n   Levels 1-4: +1 bonus to attack and damage rolls, wielder feels the desires of the tree spirit."+
		"\n   Levels 5-10: +2 bonus to attack and damage rolls, wielder gains flaw “constantly hears the voice of the tree spirit”"+
		"\n   Levels 11-16: +3 bonus to attack and damage rolls, wielder makes Constitution saving throws at advantage, wielder's movement is reduced by 10 feet"+
		"\n   Levels 17-20: +4 bonus to attack and damage rolls, wielder gains resistance to bludgeoning damage, wielder gains vulnerability to fire damage that cannot be removed",
	choices : ["Tier 1", "Tier 2", "Tier 3", "Tier 4"],
	"tier 1" : {
		name : "T1 Tree Spirit",
		description : "A tree spirit club is crafted from the wood of a sentient tree. The weapon contains that sentience and I feel the desires of the tree spirit. I also gain a +1 bonus to attack and damage rolls made with this magic weapon.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["suffix", "+1 Tree Spirit"],
			excludeCheck : function (inObjKey, inObj) {
			var testRegex = /gun|rifle|pistol|musket|revolver|net|sling|flail|oversized/i;
				return ((testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] == "slashing";
					}
				},
	},
	"tier 2" : {
		name : "T2 Tree Spirit",
		description : "A tree spirit weapon is crafted from the wood of a sentient tree. I feel the desires of the tree and gain the flaw \"constantly hears the voice of the tree spirit\". I also gain a +2 bonus to attack and damage rolls made with this weapon.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["suffix", "+2 Tree Spirit"],
			excludeCheck : function (inObjKey, inObj) {
			var testRegex = /gun|rifle|pistol|musket|revolver|net|sling|flail|oversized/i;
				return ((testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] == "slashing";
					}
				},
	},
	"tier 3" : {
		name : "T3 Tree Spirit",
		description : "A tree spirit weapon is crafted from the wood of a sentient tree. I feel its desires and gain the flaw \"constantly hears the voice of the tree spirit\". I also have advantage on Constitution saves and my movement is reduced by 10 ft. I gain a +3 bonus to attack and damage rolls made with this magic weapon.",
		savetxt : { text : ["Adv on Con saves"] },
		speed : { allModes : "-10" },
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["suffix", "+3 Tree Spirit"],
			excludeCheck : function (inObjKey, inObj) {
			var testRegex = /gun|rifle|pistol|musket|revolver|net|sling|flail|oversized/i;
				return ((testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] == "slashing";
					}
				},
	},
	"tier 4" : {
		name : "T4 Tree Spirit",
		description : "A tree spirit weapon is crafted from the wood of a sentient tree. I feel its desires and gain the flaw \"constantly hears the voice of the tree spirit\". I have advantage on Con saves and resistance to Bludgeoning, but my Speed is reduced by 10 ft and I have vulnerability to Fire. I gain a +4 bonus to attack and damage rolls made with this magic weapon.",
		dmgres : ["Bludgeoning"],
		speed : { allModes : "-10" },
		savetxt : { text : ["Adv on Con saves; Vulnerable to fire damage"] },
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["suffix", "+4 Tree Spirit"],
			excludeCheck : function (inObjKey, inObj) {
			var testRegex = /gun|rifle|pistol|musket|revolver|net|sling|flail|oversized/i;
				return ((testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] == "slashing";
					}
				},
	}
}