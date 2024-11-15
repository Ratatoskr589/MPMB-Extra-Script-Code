
/* This file adds the optional backgrounds from Knuckleheads and Other Such Curiosities to the sheet.
===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). */

var iFileName = "Knuckleheads Backgrounds.js";
RequiredSheetVersion(13);

// Define the source
SourceList["KOSC"]={
	name : "Knuckleheads and Other Such Curiosities: A Traveler's Guide to Icewind Dale",
	abbreviation : "KOSC",
	group : "Adventure Books",
	url : "https://www.dmsguild.com/product/328568/DDAL0013-Knuckleheads--Other-Such-Curiosities-A-Travelers-Guide-to-Icewind-Dale",
	date : "2020/15/10"
};

// Backgrounds
BackgroundList["arctic guide"] = {
	regExpSearch :  /^(?=.*arctic)(?=.*guide).*$/i,
	name : "Arctic Guide",
	source : [["KOSC", 17]],
	skills : ["Perception", "Survival"],
	equipleft : [
		["Backpack", "", ""],
		["50 ft. of hemp rope", "", "1"],
		["Grappling Hook", "", "1"],
		["Thank you letter from someone you rescued", "", ""]		
	],
	equipright : [
		["Cold Weather Clothing", "", 4],
		["Snowshoes", "", 1],
		["Belt Pouch (with coins)", "", 1]
	],
	feature : "Go to Ground",
	trait : [
		"I like nature more than people.",
		"I want to see what is over the next horizon.",
		"If you say I can’t, I will prove you wrong.",
		"I collect a token to remember each place I have been.",
		"Keeping active keeps me alive. I love getting my hands dirty.",
		"I like to wake up early so I can see the sunrise over a new horizon.",
		"My smile gets bigger the more I think I am danger.",
		"I love animals."
	],
	ideal : [
		["Reliable",
			"Reliable: I strive to be the rock everyone else can rely on. (Lawful)"
		],
		["Thrill Seeker",
			"Thrill Seeker: I enjoy pitting myself against the most difficult challenge nature can offer. (Chaotic)"
		],
		["Life First",
			"Life First: Every life matters. (Good)"
		],
		["Greed",
			"Greed: Loved ones will pay anything to save their lost family. (Evil)"
		],
		["Curious",
			"Curious: Seeing new things is what really motivates me. (Any)"
		],
		["Independent",
			"Independent: I do this job because it takes me far from my family. (Chaotic)"
		]
	],
	bond : [
		"I was once rescued from the wild and I want to pay back that debt.",
		"Everyone is worth saving.",
		"Guiding and saving others is just the job I do.",
		"Relying on others is the difference between and death in the artic. I won’t let you down.",
		"I can never forget the ones I didn’t rescue.",
		"I feel closer to my god when in the wild."
	],
	flaw : [
		"I sometimes take chances I shouldn’t.",
		"I thrive on the adoration of those I save.",
		"I am in it for the rewards offered up by the grateful.",
		"Other’s foolish risks anger me.",
		"There is a particular terrain where something bad once happened and I secretly fear returning to.",
		"If I had to choose between myself and my charge, I choose myself every time."
	],
	toolProfs : [["Vehicles (Land or Water)", 1], "Navigator's Tools"],
	lifestyle : "poor"
};

BackgroundList["cold water fisherfolk"] = {
	regExpSearch :  /^(?=.*cold)(?=.*water)(?=.*fisherfolk).*$/i,
	name : "Cold Water Fisherfolk",
	source : [["KOSC", 18]],
	skills : ["Nature", "Survival"],
	equipleft : [
		["Fishing Pole", "", "1"],
		["Tackle Box", "", "1"],
		["Net", "", ""],
		["Tinder Box", "", ""],
		["Cook's Utensils", "", ""]	
	],
	equipright : [
		["A large frying pan", "", 1],
		["Belt Pouch (with coins)", "", 1]
	],
	feature : "Secret Spot",
	trait : [
		"An old salt, I rarely have something to say.",
		"I am thrilled by pulling a big one out of the water.",
		"My lucky lure never fails.",
		"I embrace weather that others hide from.",
		"Fishing has taught me patience.",
		"Hard working folk are trustworthy. The rich can’t be trusted.",
		"Work hard, play hard.",
		"I am always looking for the next fishing spot."
	],
	ideal : [
		["Friendship",
			"Friendship: Fishing makes best friends. (Good)"
		],
		["Plunder",
			"Plunder: Catch them all and move to the next spot. (Evil)"
		],
		["Nature",
			"Nature: Treat nature with respect and she will provide for you. (Neutral)"
		],
		["Luck",
			"Luck: Everything is luck. You just have to be in the right spot and let things come your way. (Chaotic)"
		],
		["Pondering",
			"Pondering: The solitude of fishing helps me think. (Any)"
		],
		["Regimented",
			"Regimented: We’re up at dawn ‘cause I’ve got a schedule to keep. (Lawful)"
		]
	],
	bond : [
		"The water helps me find calm.",
		"My parents taught me to fish and I honor them when I teach others.",
		"My catch provides for those I care about.",
		"Honor the Old Salts, for they have seen the world through nature’s eyes.",
		"My favorite pier is my real home.",
		"My pole is a family heirloom that connects me to my past."
	],
	flaw : [
		"I secretly hate all seafood.",
		"I prefer to be alone and have trouble relating to people.",
		"I can’t abide those who don’t love fishing. I talk about fishing constantly.",
		"I put a lot of stock in old wives’ tales and conventional wisdom.",
		"I find it hard to trust new people.",
		"I love a good drink. A poor one isn’t all that bad either."
	],
	toolProfs : ["Cook's Utensils", "Fishing Tackle"],
	lifestyle : "poor"
};

BackgroundList["goliath seeker"] = {
	regExpSearch :  /^(?=.*goliath)(?=.*seeker).*$/i,
	name : "Goliath Seeker",
	source : [["KOSC", 19]],
	skills : ["Insight", "Perception"],
	gold : 5,
	equipleft : [
		["Gaming set or musical instrument", "", ""],
		["A memento of your people", "", ""]
	],
	equipright : [
		["Cold Weather Clothing", "", 1],
		["Snowshoes", "", 1],
		["Quarterstaff", "", 1],
		["Belt Pouch (with coins)", "", 1]
	],
	feature : "Friendly Faces",
	trait : [
		"I am friendly and always look to meet new people.",
		"The spirits speak to us through signs as long as we listen.",
		"Sometimes I adopt a mannerism or name common to others in order to make them more comfortable.",
		"I carry several gifts from my people that I give away to spread my tribe’s culture.",
		"I collect stories from the places I visit.",
		"I am open and easily talk about myself.",
		"I have a favorite pet that was given to me when I left home.",
		"I know I am lucky and always willing to make a bet on myself."
	],
	ideal : [
		["Greed",
			"Greed: I will forge the trade relationships to my people that will make me rich. (Evil)"
		],
		["Loyalty",
			"Loyalty: I will do whatever needs to be done to protect my people. (Lawful)."
		],
		["Compassion",
			"Compassion: We are all in this together and together we are safer. (Good)"
		],
		["Wanderlust",
			"Wanderlust: I left my tribe to see what is out there. (Chaotic)"
		],
		["Knowledge",
			"Knowledge: I scrupulously take notes on others cultures and history so my people can understand them. (Any)"
		],
		["Self-Improvement",
			"Self-Improvement: I travel and absorb experiences in order to improve myself. (Any)"
		]
	],
	bond : [
		"I do everything for my people.",
		"A friend of mine left the tribe years ago and never returned. I seek them even now.",
		"I adopt friends to be my second family.",
		"People matter more than material things or specific ideals.",
		"When I lost my first family, the tribe took me in and I owe them more than I can say.",
		"Money buys safety, and I need to gather riches so I can protect my people."
	],
	flaw : [
		"Despite my smile, I don’t trust those not of my tribe.",
		"I am easily distracted by the creature comforts.",
		"I dislike those who do not follow my religion.",
		"My culture is clearly superior to others.",
		"I dislike foods not found among my people.",
		"I follow the laws of the places I visit even if they are clearly wrong."
	],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "poor"
};

BackgroundList["prospector"] = {
	regExpSearch :  /^(?=.*prospector).*$/i,
	name : "Prospector",
	source : [["KOSC", 20]],
	skills : ["Athletics", "Nature"],
	equipleft : [
		["Mason's Tools", "", 1],
		["Jeweler's Tools", "", ""]
	],
	equipright : [
		["Several pans", "", 1],
		["Favorite rock hammer", "", 1],
		["An empty sack", "", ""],
		["Belt Pouch (with coins)", "", 1]
	],
	feature : "Fool's Gold",
	trait : [
		"Living things are great, but dirt and rocks are what everything is built upon.",
		"I love shiny things.",
		"Loose lips are more dangerous than a winter storm. Stay quiet and watch.",
		"The earth speaks to you, whispering of its secrets.",
		"My attention drifts as my thoughts turn inside.",
		"I will fight to protect what is mine.",
		"I have a tendency to use technical terms from geology and mining.",
		"I have struck it rich before but squandered it and am looking for a second chance."
	],
	ideal : [
		["Logician",
			"Logician: Life is a puzzle to be solved. (Lawful)"
		],
		["Self-Reliance",
			"Self-Reliance: Rely on yourself first. (Any)"
		],
		["Gluttony",
			"Gluttony: Wealth buys comfort and you want it all. (Evil)"
		],
		["Try Anything",
			"Try Anything: There could be a find just about anywhere. Keep searching and you are bound to come across the big find. (Chaotic)"
		],
		["Share",
			"Share: Wealth is meant to be shared. (Good)"
		],
		["Steady",
			"Steady: The land is filled with patience and I try to emulate it. (Neutral)"
		]
	],
	bond : [
		"Those that reward me buy my trust.",
		"Solitude brings inner peace.",
		"I have a large family and I need to strike it rich in order to lift them out of poverty.",
		"An elderly loner left me his journal detailing a great find that I’m searching for.",
		"I believe in those who work hard.",
		"I give it rarely, but if I give my word, I always keep it."
	],
	flaw : [
		"A desire for fame calls me to take chances.",
		"I will do anything to be rich.",
		"I’ve been in the wilderness so long that I have trouble relating to others.",
		"I secretly killed someone and have travelled across the world to escape capture.",
		"I spend freely with no care for tomorrow.",
		"I will steal from others to get ahead."
	],
	toolProfs : ["Mason's Tools", "Jeweler's Tools"],
	languageProfs : [1],
	lifestyle : "poor"
};

BackgroundList["skald"] = {
	regExpSearch :  /^(?=.*skald).*$/i,
	name : "Skald",
	source : [["KOSC", 21]],
	skills : ["Intimidation", "Performance"],
	equipleft : [
		["Musical instrument", "", ""]
	],
	equipright : [
		["A simple melee weapon decorated with trophies", "", 1],
		["Cold Weather Clothing", "", 4],
		["Belt Pouch (with coins)", "", 1]
	],
	feature : "Share the Fire",
	trait : [
		"I have a story about one of my clan’s great heroes for every occasion.",
		"I smile at everyone, looking to attract my next companion.",
		"The strong and fit are to be admired.",
		"The best things are said loudly.",
		"My dress is garish so that others remember me.",
		"Music is the shared language of the world. Share it.",
		"I tell bold lies about places I’ve been and people I have met to sound more important.",
		"I am easily bored."
	],
	ideal : [
		["Vanity",
			"Vanity: I need to be the prettiest or strongest in the room. (Any)"
		],
		["Tradition",
			"Tradition: The stories of the past teach us how to live today. (Lawful)"
		],
		["Bold",
			"Bold: Never shirk. Rush forward boldly. (Chaotic)"
		],
		["Bully",
			"Bully: The weak deserve what they get. (Evil)"
		],
		["Wisdom",
			"Wisdom: Teach others that they may live better lives. (Good)"
		],
		["Freedom",
			"Freedom: I believe in the freedom to travel and the chance to prove one’s self through deeds. (Chaotic)"
		]
	],
	bond : [
		"I try to live up to the examples of the heroes of legend.",
		"If my fame grows, the gods will favor me.",
		"I am hunting for another skald that stole my masterpiece and claims it to be their own.",
		"I come from a long line of famous warriors and hope to do right by their memory.",
		"My honor is my law.",
		"My weapon has been passed to me from my ancestors and I add my deeds to their saga."
	],
	flaw : [
		"I am a sucker for a pretty face.",
		"I eat and drink to excess.",
		"If I can intimidate someone in doing what I want, I will.",
		"A Jarl is hunting for me after I insulted their spouse.",
		"You can’t rely on me.",
		"I can’t do anything quietly. I need to be the center of attention."
	],
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "poor"
};

BackgroundList["survivor"] = {
	regExpSearch :  /^(?=.*survivor).*$/i,
	name : "Survivor",
	source : [["KOSC", 22]],
	skills : ["Medicine", "Survival"],
	gold : 5,
	equipleft : [
		["Well used furs and blankets", "", "2"],
		["50 ft of hemp rope", "", "1"]
	],
	equipright : [
		["A knife hidden in your boot", "", 1],
		["Cold Weather Clothing", "", 4],
		["Belt Pouch (with coins)", "", 1]
	],
	feature : "Dark Reputation",
	trait : [
		"I am haunted by my past and have trouble speaking about it.",
		"After living through tragedy, I run towards danger.",
		"I celebrate life with great enthusiasm.",
		"The gods may be real but they are uncaring.",
		"Some food reminds me of my torment and I can’t stomach it.",
		"I put faith in rituals, symbols, and hedge magic to protect me from evil.",
		"My inner pain makes me gruff when I deal with others.",
		"I always expect the worst and jump at loud noises and sudden movements."
	],
	ideal : [
		["Intimidation",
			"Intimidation: I have seen evil and make certain that others fear me before they can hurt me or mine. (Evil)"
		],
		["Nihilism",
			"Nihilism: Nothing matters anymore and the world will burn. (Chaotic)"
		],
		["Bulwark",
			"Bulwark: I stand against chaos to prevent these things from happening again. (Lawful)"
		],
		["Runner",
			"Runner: I am running from my past and can’t stay in any place for long. (Any)"
		],
		["Compassion",
			"Compassion: I don’t want anyone else to suffer as I have. (Good)"
		],
		["Order",
			"Order: I try to gain strength by controlling my environment with rules and rituals. (Lawful)"
		]
	],
	bond : [
		"I have family or friends to protect.",
		"I am hunting for the creature that wronged me.",
		"I have a token that I believe protects me.",
		"With evil in the land, you have to appreciate beauty when you find it.",
		"I am drawn to lucky people, hoping their luck will rub off on me.",
		"I will sacrifice myself for others."
	],
	flaw : [
		"My tragedy has made me a secret coward.",
		"Evil surrounds the world and has won. I have trouble caring what happens to others.",
		"I try to forget my past through excessive drink.",
		"I covet safety and gather wealth and magic items to protect myself.",
		"I pretend to know what’s going on at all times so others don’t think I am weak.",
		"Trust is a lie."
	],
	toolProfs : ["Herbalist's Kit"],
	languageProfs : [1],
	lifestyle : "poor"
};

BackgroundList["whaler"] = {
	regExpSearch :  /^(?=.*whaler).*$/i,
	name : "Whaler",
	source : [["KOSC", 23]],
	skills : ["Athletics", "Survival"],
	equipleft : [
		["Lantern", "", 1],
		["Pint of Whale Oil", 5, ""],
		["A half-chewed piece of blubber", "", ""]
	],
	equipright : [
		["Javelin", "", 1],
		["A well-used knife", "", ""],
		["Cold Weather Clothing", "", 4],
		["Belt Pouch (with coins)", "", 1]
	],
	feature : "Balanced",
	trait : [
		"I am as changeable as the sea.",
		"Life is short. Eat everything you can when you can.",
		"When I have an idea, I make sure everyone knows why it’s the best idea.",
		"I put a notch in my favorite javelin for every beast I hunt.",
		"I share a fish story with everyone I meet.",
		"There is no greater meal than whale and I try to get everyone to try some.",
		"I enjoy taunting the deities of the sea.",
		"I laugh loudly and easily share a joke."
	],
	ideal : [
		["Teamwork",
			"Teamwork: Whaling is too much for one person, but as a crew we can do anything. (Good)"
		],
		["Selfish",
			"Selfish: The water is too cold to risk yourself for others. (Evil)"
		],
		["Prepared",
			"Prepared: In order to face the odds, you need a plan. (Lawful)"
		],
		["Adventure",
			"Adventure: You enjoy hunting behemoths because it is the greatest challenge you have found so far. You are always seeking the next thrill. (Chaotic)"
		],
		["Fatalistic",
			"Fatalistic: The sea gives life, but takes it just as fast. Life is short and then it ends. (Neutral)"
		],
		["Common Sense",
			"Common Sense: Be smart. You see what needs to be done and you do it. (Any)"
		]
	],
	bond : [
		"My crew comes first.",
		"I am do what I do to provide for the community.",
		"Respect the sea. She is mightier than you.",
		"I have a favorite boat that needs a fortune in repairs.",
		"Never give up. Once I am committed, I never turn back.",
		"I am hunting for another fisherman that betrayed the rest of our crew. I will have my vengeance."
	],
	flaw : [
		"A man knows his worth by the number of grudges he collects.",
		"I have a rage as boundless as the sea.",
		"I am always looking to sell my catch for as much as I can, knowing that the communities depend on it.",
		"I am fascinated by fire derived from whale oil. It saves and takes lives.",
		"I secretly never learned to swim.",
		"I am glutton."
	],
	toolProfs : ["Vehicles (water)", "Fishing Tackle"],
	lifestyle : "poor"
};


// Background features
BackgroundFeatureList["go to ground"] = {
	description : "You have a nose for where people are likely to run to when in danger. You are adept at guessing the paths a panicked individual might take or where they might seek shelter. When in the wilderness you always find a relatively safe place to rest if such a place exists.",
	source : [["KOSC", 17]]
};
BackgroundFeatureList["secret spot"] = {
	description : "You know all the best spots for fishing and when to go there. When others can’t get anything to bite, you are bound to catch enough to feed a party of ten given sufficient time.",
	source : [["KOSC", 18]]
};
BackgroundFeatureList["friendly faces"] = {
	description : "You know people throughout Icewind Dale who tell you things. You regularly hear rumors from your loose network of acquaintances that lead to adventure or warn of danger.",
	source : [["KOSC", 19]]
};
BackgroundFeatureList["fool's gold"] = {
	description : "Your eye for the color gold has no peer. You can appraise objects the value of precious metals. This feature might allow you to know that an idol contains 100 gp worth of silver, but not that it would be worth 1000 gp to the right antiquities collector.",
	source : [["KOSC", 20]]
};
BackgroundFeatureList["share the fire"] = {
	description : "In exchange for your stories and songs, you are welcome at everyone’s fire. You receive free food and lodging in exchange for your performances. It may be Modest at best, but you heroes take what is freely offered.",
	source : [["KOSC", 21]]
};
BackgroundFeatureList["dark reputation"] = {
	description : "People whisper behind your back about the trials you have suffered. Some fear you. Others offer pity. But all avoid getting to close to you, worried that they will be the next loss you suffer. People are happy to see you move on you so you get away with minor offenses such as rude behavior or leaving the tavern before paying your tab.",
	source : [["KOSC", 22]]
};
BackgroundFeatureList["balance"] = {
	description : "The tempestuous waves of the Sea of Moving Ice are made all the worse by a thrashing wounded whale. You never lose your balance due to stormy seas.",
	source : [["KOSC", 23]]
};
