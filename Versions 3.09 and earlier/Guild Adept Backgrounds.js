
/* This file adds the optional backgrounds from several DMsGuild supplements and AL modules. Some of the code used is from MPMB themself and would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). */

var iFileName = "Guild Adept Backgrounds.js";
RequiredSheetVersion(13);

// Define the source
SourceList["KOSC"]={
	name : "Knuckleheads and Other Such Curiosities: A Traveler's Guide to Icewind Dale",
	abbreviation : "KOSC",
	group : "Adventure Books",
	url : "https://www.dmsguild.com/product/328568/DDAL0013-Knuckleheads--Other-Such-Curiosities-A-Travelers-Guide-to-Icewind-Dale",
	date : "2020/15/10"
};

SourceList["MIRG"]={
	name : "Moonshae Isles Regional Guide",
	abbreviation : "MIRG",
	group : "Adventure Books",
	url : "https://www.dmsguild.com/product/248303/Moonshae-Isles-Regional-Guide",
	date : "2018"
};

SourceList["TBK"]={
	name : "The Border Kingdoms",
	abbreviation : "TBK",
	group : "Adventure Books",
	url : "https://www.dmsguild.com/product/316218/The-Border-Kingdoms-A-Forgotten-Realms-Campaign-Supplement-Fantasy-Grounds",
	date : "2020"
};

SourceList["DGtT"]={
	name : "Durnan's Guide to Tavernkeeping",
	abbreviation : "DGtT",
	group : "Adventure Books",
	url : "https://www.dmsguild.com/product/254715",
	date : "2016"
};

 //This includes Rats of Waterdeep & Ruins of Mezro/Lost City of Mezro. They're 1 background each & that matches how the items are coded
SourceList["AL"] = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};

// Backgrounds
BackgroundList["arctic guide"] = {
	regExpSearch :  /^(?=.*arctic)(?=.*guide).*$/i,
	name : "Arctic Guide",
	source : [["KOSC", 17]],
	skills : ["Perception", "Survival"],
	equipleft : [
		["Backpack", "", 5],
		["50 ft. of hemp rope", "", 1],
		["Grappling Hook", "", 1],
		["Thank you letter from someone you rescued", "", ""]		
	],
	equipright : [
		["Cold Weather Clothing", "", 4],
		["Snowshoes", "", 1],
		["Belt pouch (with coins)", "", 1]
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
};

BackgroundList["cold water fisherfolk"] = {
	regExpSearch :  /^(?=.*cold)(?=.*water)(?=.*fisherfolk).*$/i,
	name : "Cold Water Fisherfolk",
	source : [["KOSC", 18]],
	skills : ["Nature", "Survival"],
	equipleft : [
		["Fishing Pole", "", 1],
		["Tackle Box", "", 1],
		["Net", "", 3],
		["Tinder Box", "", 1],
		["Cook's Utensils", "", 8]	
	],
	equipright : [
		["A large frying pan", "", 1],
		["Belt pouch (with coins)", "", 1]
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
		["Belt pouch (with coins)", "", 1]
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
};

BackgroundList["prospector"] = {
	regExpSearch :  /^(?=.*prospector).*$/i,
	name : "Prospector",
	source : [["KOSC", 20]],
	skills : ["Athletics", "Nature"],
	equipleft : [
		["Mason's Tools", "", 1],
		["Jeweler's Tools", "", 2]
	],
	equipright : [
		["Several pans", "", 1],
		["Favorite rock hammer", "", 1],
		["An empty sack", "", 0.5],
		["Belt pouch (with coins)", "", 1]
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
		["Belt pouch (with coins)", "", 1]
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
};

BackgroundList["survivor"] = {
	regExpSearch :  /^(?=.*survivor).*$/i,
	name : "Survivor",
	source : [["KOSC", 22]],
	skills : ["Medicine", "Survival"],
	gold : 5,
	equipleft : [
		["Well used furs and blankets", "", 2],
		["Hempen rope, feet of", 50, 0.2]
	],
	equipright : [
		["A knife hidden in your boot", "", 1],
		["Cold Weather Clothing", "", 5],
		["Belt pouch (with coins)", "", 1]
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
		["A well-used knife", "", 1],
		["Cold Weather Clothing", "", 5],
		["Belt pouch (with coins)", "", 1]
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
};

//Durnan's Backgrounds start here
BackgroundList["tavern worker"] = {
	regExpSearch :  /^(?=.*tavern)(?=.*worker).*$/i,
	name : "Tavern Worker",
	source : [["DGtT", 38]],
	skills : ["Insight", "Intimidation"],
	gold : 10,
	equipleft : [
		["A frayed wash rag", "", ""],
		["An apron", "", 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["A gaming set", "", ""],
		["Brewer's supplies", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Tavern Tales",
	trait : [
		"I’m always willing to listen to problems and help if I can.",
		"I love to be the center of attention and keep the party going.",
		"I like it loud and boisterous.",
		"Having tried it all, I’m a connoisseur of spirits and always match a patron with the right drink.",
		"I want to know the world around me, so I love people watching.",
		"I have a sharp, poisonous tongue.",
		"I love hearing stories from faraway places and collect souvenirs from places I hope to someday visit.",
		"I have a dark secret I hide behind a jolly exterior."
	],
	ideal : [
		["Sobriety",
			"Sobriety: I’ve climbed back on that wagon, and I’m clinging on for dear life. (Lawful)"
		],
		["Enabling",
			"Enabling: There’s always room for one more drink. Let me pour it for you. (Chaotic)"
		],
		["Helpful",
			"Helpful: I’ve heard it all and I like to look out for my patrons by giving helpful advice. (Good)"
		],
		["Greedy",
			"Greedy: The drunk are easiest to cheat. (Evil)"
		],
		["Joyous",
			"Joyous: I’m here for the party. (Any)"
		],
		["Searching",
			"Searching: My life’s mission is to craft a signature beverage for which I’ll become famous. (Neutral)"
		]
	],
	bond : [
		"I’m a sucker for a pretty face.",
		"I’m closer to my regulars than my family.",
		"This tavern means the world to me.",
		"I inherited my position at the tavern. It’s a family business.",
		"I am a proud member of the Brotherhood of Booze. I can bond with anyone over a drink.",
		"I like cleaning up after others before settling down for a rest."
	],
	flaw : [
		"I believe that all halflings are thieves, bad luck, or both.",
		"I like to butt into other peoples’ conversations.",
		"I’ll do anything for tips.",
		"I love to collect stories and share them, so I’m a terrible gossip.",
		"I collect stray animals which I let live in my tavern.",
		"I love a game of chance and am always trying to get into a game. When gaming, I take risks that I shouldn’t."
	],
	toolProfs : [["A gaming set", 1], "Brewer's Supplies"],
	languageProfs : [1],
};

BackgroundList["tavern regular"] = {
	regExpSearch :  /^(?=.*tavern)(?=.*regular).*$/i,
	name : "Tavern Regular",
	source : [["DGtT", 39]],
	skills : ["Insight", "Persuasion"],
	gold : 5,
	equipleft : [
		["A pipe and pipeweed", "", ""],
		["A tankard engraved with your own name", "", 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["A gaming set", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "On The Tab",
	trait : [
		"I love nothing more than the company of good friends.",
		"I know dozens of tavern games and am happy to teach them to my friend.",
		"I love to talk late into the night.",
		"I’m friendly and welcoming; willing to invite anyone into the group.",
		"I know a thousand songs and have one for any occasion.",
		"I love pub food and am always eating.",
		"I like to sit quietly and take in the room.",
		"I believe the pub is the height of civilization. Its equal will never be created."
	],
	ideal : [
		["Community",
			"Community: We’re all in this together, so let’s hash out our problems over a pint of ale (Good)."
		],
		["Egotism",
			"Egotism: Everyone knows your name. You make sure of it. (Neutral)"
		],
		["Larceny",
			"Larceny: The raucous celebration of the common room is the perfect cover for my thievery. (Chaotic)"
		],
		["Exactitude",
			"Exactitude: I always make sure everyone buys a round, we split the bill evenly, and tip the staff. (Lawful)"
		],
		["Dependency",
			"Dependency: I hate being alone. (Any)"
		],
		["Violence",
			"Violence: I like to start barfights. (Evil)"
		]
	],
	bond : [
		"My two bar buddies know more about me than anyone in this world.",
		"I met someone across a smoky taproom one night and I’ve been searching for them ever since.",
		"I want to share everything I know with others and drink makes me more gregarious.",
		"A meal isn’t a meal unless its shared with others.",
		"I want to meet new people and try new things.",
		"I like to hide in a crowd."
	],
	flaw : [
		"I’m always getting into debt.",
		"I’m desperately lonely and latch onto anyone I think might connect with me.",
		"I always drink too much.",
		"I love to argue about politics, literature, or art. I’ll take a side just to argue.",
		"I have blackouts and don’t remember what happened.",
		"The more I drink, the more unpredictable and violent I become."
	],
	toolProfs : [["A gaming set", 1]],
	languageProfs : [1],
};

//Background from Rats of Waterdeep, DDHC-XGE-1
BackgroundList["detective"] = {
	regExpSearch :  /^(?=.*detective).*$/i,
	name : "Detective",
	source : [["AL","XGE"]],
	skills : ["Perception", "Investigation"],
	gold : 8,
	equipleft : [
		["A magnifying glass", "", ""],
		["Ink, 1 ounce bottle of", "", ""],
		["A quill", "", ""],
		["A folded parchment notepad", "", ""]
	],
	equipright : [
		["Common clothes (with greatcoat and hat)", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Master Sleuth",
	trait : [
		"Before I leave a room, I often turn to ask one last question.",
		"I don’t play by the rules.",
		"I find ignorance amusing.",
		"I like to reveal my findings to a captive audience.",
		"I’m witheringly sarcastic.",
		"I rarely reveal my true feelings.",
		"I solve crimes because life bores me.",
		"I’m oddly superstitious."
	],
	ideal : [
		["Justice",
			"Justice: I’m sworn to bring criminals to justice (Lawful)."
		],
		["Intellect",
			"Intellect: The mind is a muscle that must be exercised to achieve brilliance (Any)."
		],
		["Greed",
			"Greed: I need coin to dig me out of this pit (Neutral)"
		],
		["Redemption",
			"Redemption: I’m trying to undo all the bad things I’ve done in my life (Any)."
		],
		["Recklessness",
			"Recklessness: If they break the rules, so can I (Chaotic)."
		],
		["Curiosity",
			"Curiosity: We don’t learn anything unless we experiment (Any)."
		]
	],
	bond : [
		"The same nemesis is secretly behind many of my greatest investigations.",
		"I wear a signature article of clothing, moustache style, or accessory.",
		"My assistant travels everywhere with me.",
		"I’ve a trauma in my past that still haunts me.",
		"I’m immaculately dressed.",
		"I’m attracted to people who live fast and dangerously."
	],
	flaw : [
		"I have a self-destructive vice that I indulge in secret.",
		"I lack empathy for my prey.",
		"I underestimate or look down upon the common folk.",
		"All my relationships end in ruin.",
		"I’m cripplingly obsessive.",
		"I don’t know how to handle failure."
	],
	languageProfs : [2],
};

//Special background from playing DDALCA-01 Return to the Ghost Tower of Inverness
BackgroundList["echo of the past"] = {
	regExpSearch :  /^(?=.*echo)(?=.*past).*$/i,
	name : "Echo of the Past",
	source : [["AL","DDALCA-01"]],
	skills : ["Arcana", "Investigation"],
	gold : 10,
	equipleft : [
		["Backpack, with:", "", 5],
		["Chalk", 10, ""],
		["Hammer", "", 3],
		["Mirror, steel", "", 0.5],
		["Oil, Flask", "", 1],
		["Pick, miner's", "",10],
		["Pitons", 6, ""],
		["10-foot pole", "", 7],
		["Hempen rope, feet of", 50, 0.2],
		["Sack", "", 0.5],	
		["Shovel", "",5],	
		["Spikes, iron", 10, 0.5],	
		["Tinderbox", "", 1],	
		["Torches", 10, 1]
	],
	equipright : [
		["Rugged set of all-white traveler's clothes", "", 3],
		["Recently bought map of the Sword Coast", "", ""],
		["Locket with a portrait of a long dead loved one", "", ""],
		["Belt pouch (with sapphire)", "", 1]
	],
	feature : "Answer to a Forgotten Enigma",
	languageProfs : [["One exotic language of your choice", 1]],
	toolProfs : ["Thieves' Tools"],
};

//Backgrounds from BMG's Moonshae Isles
BackgroundList["breasal scout"] = {
	regExpSearch :  /^(?=.*breasal)(?=.*scout).*$/i,
	name : "Breasal Scout",
	source : [["MIRG",32]],
eval : function () {
  if ( !(/lizardfolk/i).test(CurrentRace.known) ) { // if the player is not a lizardfolk, show the pop-up message
    app.alert({
      cTitle : 'Racial requirements are not met',
      cMsg : 'The "Breasal Scout" background requires you to be a lizardfolk in order to choose it.'
    })
  }
},
	skills : ["Medicine", "Nature"],
	gold : 10,
	equipleft : [
		["A leather satchel", "", 3],
		["Set of artisan's tools or herbalism kit", "", ""]
	],
	equipright : [
		["Staff", "", 1],
		["Beaded tribal necklace,", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Breasal Ambassador",
	trait : [
		"I tend to ask too many questions about why people take actions motivated by feelings.",
		"I get grumpy if I can’t get a live meal once in a while.",
		"I relate better to non-lizardfolk that have chosen to don armor. At least they are trying to better their unfortunate lot in life.",
		"I find being close to people perfectly comfortable, but I don’t like being touched."
	],
	ideal : [
		["Independence",
			"Independence: I have to take care of myself first and foremost or I can’t help the tribe! (Chaotic)"
		],
		["Devoted",
			"Devoted: I can’t always tell good folk from bad, so I ask Silvanus. (Any)"
		],
		["Duty Bound",
			"Duty Bound: I put the needs of the tribe above my own. (Lawful)"
		],
		["Diplomatic",
			"Diplomatic: The more people and societies I meet, the more choices my tribe will have. (Neutral)."
		]
	],
	bond : [
		"Silvanus has chosen me to find a way to protect my tribe from the corruption of the Black Bloods and other outsiders.",
		"The more experiences I have outside of my tribe, the more guidance Silvanus will provide to our Oracles.",
		"I was tasked by my tribe to make allies in other parts of the Moonshae Isles, and I will do it.",
		"I have been chosen by Silvanus to be a strong representative of my folk in the world."
	],
	flaw : [
		"If I think I see an enemy that would potentially harm my tribe, it’s my duty to kill them first if I can.",
		"I’m frustrated when people claim land as their property that Silvanus provided to everyone.",
		"Amnians can’t be trusted and seek to destroy the land.",
		"Don’t expect me to save those who can’t save themselves. It is nature’s way that the strong thrive and the weak perish."
	],
	toolProfs : [["Herbalism Kit or Artisan's Tools", 1]],
	languageProfs : [1],
};

BackgroundList["hero of the ffolk"] = {
	regExpSearch :  /^(?=.*hero)(?=.*ffolk).*$/i,
	name : "Hero of the Ffolk",
	source : [["MIRG",33]],
	skills : ["Animal Handling", "Survival"],
	gold : 10,
	equipleft : [
		["A hoe or fishing pole", "", ""],
		["Set of artisan's tools", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Hometown Advantage",
	trait : [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I’m always ready to help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always find the most equitable solution to problems.",
		"I’m confident in my own abilities and do what I can to instill confidence in others.",
		"Thinking is for other people with the time for that. I prefer action."
	],
	ideal : [
		["Respect",
			"Respect: People deserve to be treated with dignity and respect. (Good)"
		],
		["Fairness",
			"Fairness: No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
		],
		["Freedom",
			"Freedom: Tyrants must not be allowed to oppress the people. (Chaotic)"
		],
		["Might",
			"Might: If I become strong, I can protect those who can’t protect themselves. (Good)"
		],
		["Sincerity",
			"Sincerity: There’s no good in pretending to be something I’m not. (Neutral)"
		],
		["Destiny",
			"Destiny: Nothing and no one can steer me away from my higher calling. (Any)"
		]
	],
	bond : [
		"I have a family, but they disappeared in the forest one day. I hope to see them again, or at least learn the truth of what happened to them.",
		"I worked the land, I love the land, and I will protect the land.",
		"A proud fey of the Sarifal Court once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
		"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
		"The Ffolk are my people. I will watch over them.",
		"I wish my childhood sweetheart had come with me to pursue my destiny."
	],
	flaw : [
		"I have a small bounty on my head from Amn.",
		"I know I’ll save the Moonshae Islands and don’t see how I can fail, faults be damned.",
		"I love to drink, even to my detriment.",
		"I don’t trust people very easily.",
		"I would do anything to be a member of the High King’s court.",
		"I’m the hero, and if anyone else shows me up I become quite unhappy."
	],
	toolProfs : [["Artisan's Tools", 1],["Vehicles (Land or Water)", 1]]
};

BackgroundList["llewyrr wanderer"] = {
	regExpSearch :  /^(?=.*llewyrr)(?=.*wanderer).*$/i,
	name : "Llewyrr Wanderer",
eval : function () {
  if ( !(/elf|avariel|grugach|shadar-kai/i).test(CurrentRace.known) ) { // if the player is not one of these elf types, show the pop-up message
    app.alert({
      cTitle : 'Racial requirements are not met',
      cMsg : 'The "Llewyrr Wanderer" background requires you to be an elf or half-elf in order to choose it.'
    })
  }
},
	source : [["MIRG",34]],
	skills : ["Insight", "History"],
	gold : 5,
	equipleft : [
		["A musical instrument or gaming set", "", ""],
		["A rough map of the Moonshaes", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["A Llewyrr-crafted bracelet", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "All Moonshaes Eyes On You",
	trait : [
		"I know what food is, and most of the food I see being eaten isn’t quite what I’m used to. I try a lot of things and ask to try other people’s things.",
		"The Llewyrr don’t express their emotions like other people. I’m find myself to be more reserved in my emotions than those around me.",
		"I bathe every day in natural waters. When I don’t find natural waters to bathe in, I become sullen.",
		"I find being close to people perfectly comfortable, but I don’t like being touched."
	],
	ideal : [
		["Adventure",
			"Adventure: The world outside Synnoria is fascinating and wonderful. (Chaotic)"
		],
		["Suspicious",
			"Suspicious: I can’t understand the people outside of Synnoria and can’t tell if they’re being kind or trying to harm me. I must be careful. (Any)"
		],
		["Respect",
			"Respect: I was warned to be careful in my dealings with outsiders, but I try to respect their ways while I show them my ways. (Lawful)"
		],
		["Inquisitive",
			"Inquisitive: I must learn everything, so I can to bring knowledge back to Synnoria. (Neutral)"
		]
	],
	bond : [
		"As long as I have my Llewyrr bracelet from my lover, I can handle whatever comes my way.",
		"The Moonshae Isles are not as elegant as Synnoria, but they have a raw beauty I wish to explore.",
		"I was tasked by the Llewyrr to learn everything I can about the Moonshae Isles, and I will do just that.",
		"The Earthmother sustains me in all things."
	],
	flaw : [
		"Those who see any other god as greater than the Earthmother are fools.",
		"The differences of these barbarians are so obvious. A Llewyrr would never stoop as low as them and the way they treat the land.",
		"The Northlanders and Ffolk are simple people who struggle to understand my ways, but the Amnians are a vile people who must be eradicated.",
		"There are many new things to try in this land that are harmful to me but wonderful in the moment."
	],
	toolProfs : [["Musical instrument or gaming set", 1]],
	languageProfs : ["Sylvan"]
};

BackgroundList["marked by the beast"] = {
	regExpSearch : /\bmarked by the beast\b/i,
	name : "Marked by the Beast",
	source : [["MIRG",35]],
	skills : ["Nature", "Survival"],
	gold : 10,
	equipleft : [
		["A parent's journal about a lycanthrope", "", ""],
		["The claws of an animal", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["One set of artisan's tools", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Unseen Rage",
	trait : [
		"I wear my rage on my sleeve.",
		"I love wandering the woods and will spend hours in them.",
		"I fumble my words around other people.",
		"Tension always seems to thicken when I enter a room.",
		"I have no use for books or the words within them. They annoy me.",
		"I rise early and make sure any companions rise with me.",
		"A first impression is very important to me, and I’m not apt to change my mind about a person after I’ve met them.",
		"I’m rude to those who are rude to others, even if I don’t know them or the person they’re being rude to."
	],
	ideal : [
		["Aspiration",
			"Aspiration: I wish to be accepted by those around me. (Any)"
		],
		["Freedom",
			"Freedom: I want to walk the woods of the Moonshae Isles without fear of the darkness within them. (Chaotic)"
		],
		["Self-Knowledge",
			"Self-Knowledge: I want to understand the feelings within myself, where they come from, and how to live with them. (Lawful)"
		],
		["Independence",
			"Independence: If I can attain more knowledge, I can throw off this burden. (Any)"
		],
		["Greater Good",
			"Greater Good: I need to stop the Black Bloods for the good of the Moonshae Isles. (Good)"
		],
		["Might",
			"Might: By embracing my situation, I can become stronger. (Neutral)"
		]
	],
	bond : [
		"It’s my duty to protect the animals of the Moonshae Isles.",
		"An injury to the Moonshae Isles is an injury to me.",
		"The moonwell showed me a coming disaster, and I will do anything to prevent it.",
		"I’ve been searching my whole life for the answer to my inherent rage.",
		"I’ve been corrupted by the Black Bloods. I hope to find a way to cleanse myself someday.",
		"I have a lover who doesn’t know I’m marked by the Beast."
	],
	flaw : [
		"Once someone questions my courage, I never back down no, matter how dangerous the situation.",
		"Once I start drinking it’s hard to stop.",
		"I let my rage get the better of me way too often.",
		"I take people for granted and am not very empathetic.",
		"When it comes to lycanthropes, especially the Black Bloods, I’m never cautious.",
		"I’m not one for saving those who can’t save themselves. It’s just a way for nature to cull the weak."
	],
	toolProfs : [["Artisan's Tool", 1]],
	languageProfs : [1]
};

BackgroundList["northland seafarer"] = {
	regExpSearch :  /^(?=.*northland)(?=.*seafarer).*$/i,
	name : "Northland Seafarer",
	source : [["MIRG",36]],
	skills : ["Nature", "Athletics"],
	gold : 10,
	equipleft : [
		["Navigator’s Tools", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["A charm of Valkur", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Sea Dog",
	trait : [
		"I might not like someone, but I will fight by their side and fight well.",
		"The sea and ice are harsh, but they give me everything I need.",
		"I like a good fight more than a good conversation.",
		"Sailing these waters is where I find beauty in this world.",
		"It’s not about killing my enemies, as long as I can take their things for my own.",
		"A life taken by me is no different from one taken by old age or disease.",
		"I live by a code of honor, although it might be a little more violent than other’s codes.",
		"I only raid to keep those I love alive."
	],
	ideal : [
		["Loyal",
			"Loyal: I fight for my Jarl, no matter who they are. (Lawful)"
		],
		["Hate",
			"Hate: All outsiders of the Moonshae Islands must die. (Evil)"
		],
		["Open",
			"Open: I can learn many things from those I fight. (Neutral)"
		],
		["Repentance",
			"Repentance: I’ll never kill another innocent. (Good)"
		],
		["Power",
			"Power: I live for the thrill of battle. (Chaotic)"
		],
		["Curious",
			"Curious: I wish to see the whole of the Moonshae Islands and beyond. (Chaotic)"
		]
	],
	bond : [
		"My loved ones and my ancestors drive me to succeed.",
		"I will never let down my people with my actions.",
		"The horizon, and the people and lands there, hold my greatest joy.",
		"I would do anything for my people.",
		"I seek glory to be worthy of someone’s love.",
		"Reavers killed my comrades and took our ship. I will take the ship back and kill every last one of them."
	],
	flaw : [
		"The Ffolk are a weaker version of the Northlanders and are beneath me.",
		"I don’t take insults well, and I don’t forget or forgive them easily.",
		"Killing, fighting, and pillaging are the best ways to solve problems.",
		"The Moonshaes are harsh and death comes to us all. I protect myself first and all others second.",
		"I follow orders because I trust my captain, even if it costs me everything.",
		"The liquor of the Moonshaes is my greatest joy and greatest enemy."
	],
	toolProfs : ["Navigator’s tools", "Vehicles (Water)"],
};

BackgroundList["sarifal outcast"] = {
	regExpSearch :  /^(?=.*sarifal)(?=.*outcast).*$/i,
	name : "Sarifal Outcast",
eval : function () {
  if ( !(/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known) ) { // if the player is not an elf, show the pop-up message
    app.alert({
      cTitle : 'Racial requirements are not met',
      cMsg : 'The "Sarifal Outcast" background requires you to be an elf, eladrin, or shadar-kai in order to choose it.'
    })
  }
},
	source : [["MIRG",37]],
	skills : ["Insight"],
	skillstxt : "Insight and either Deception or Persuasion",
	gold : 15,
	equipleft : [
		["Artisan's tools or a musical instrument", "", ""]
	],
	equipright : [
		["Fine clothes", "", 3],
		["A ring of the court of Sarifal", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Noble Fey",
	trait : [
		"I always dress as befits my former station.",
		"Do not disappoint me, for you’ll never be able to gain my favor again.",
		"I speak with a grace and authority that no one can deny.",
		"Because of my previous actions, I punish myself by being as common as possible."
	],
	ideal : [
		["Responsibility",
			"Responsibility: Because of my situation, I must represent Sarifal as well as possible. (Lawful)"
		],
		["Obligation",
			"Obligation: I may not be a part of the court, but I must protect the people of the Moonshaes from the darkness surrounding it. (Good)"
		],
		["Redemption",
			"Redemption: I will make right what I did wrong no matter the cost. (Chaotic)"
		],
		["Independence",
			"Independence: I may have been banished, but I will thrive outside of Sarifal. (Any)"
		]
	],
	bond : [
		"I will do anything to regain my place in the court of High Lady Ordalf.",
		"My loyalty to High Lady Ordalf and Sarifal is unwavering despite the banishment.",
		"The people of the Moonshae Isles will see me as a hero.",
		"The mortal love that caused my banishment keeps me going."
	],
	flaw : [
		"I know a secret that could harm the court of High Lady Ordalf.",
		"I’m not the center of the world? You shouldn’t jest so.",
		"The pleasures of the lesser races’ flesh have always been a weakness for me.",
		"I don’t easily trust the shorter-lived races of the Moonshae Isles. Their short lives make them prone to rash and unthoughtful decisions."
	],
	toolProfs : [["Artisan's tools or a musical instrument", 1]],
	languageProfs : ["Sylvan"]
};

BackgroundList["touched by the fey"] = {
	regExpSearch :  /^(?=.*touched)(?=.*fey).*$/i,
	name : "Touched by the Fey",
	source : [["MIRG",38]],
	skills : ["Nature", "Arcana"],
	gold : 10,
	equipleft : [
		["Artisan's tools or a musical instrument", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["A magical mark mistaken for a tattoo", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Fey Touched",
	trait : [
		"I get a far off look in my eyes sometimes. I know the world is so much more than what most of us see.",
		"I’m more comfortable with those who are more fey-like than those who are normal.",
		"I tell children the fairytales of the Moonshae Islands because there is truth in the fiction.",
		"I may be touched by the fey, but I’m not fey and I still live in a world of mortals. Even though I see more than they do, I don’t look down on my peers."
	],
	ideal : [
		["Hope",
			"Hope: I’ll use this fey insight to make the world a better place. (Good)"
		],
		["Aspiration",
			"Aspiration: The fey have given me a different way to see the world, and I’ll use that to make something of myself. (Neutral)"
		],
		["Greed",
			"Greed: Now that my eyes have been opened, I will use my sight to take what I want. (Evil)"
		],
		["Creativity",
			"Creativity: My art is the truest form of expression and freedom. (Chaotic)"
		]
	],
	bond : [
		"My friends are what keep me grounded in this world. I don’t know what I’d do without them.",
		"My family has accepted my different perspective on the world and still loves me. I don’t know what I’d become without them.",
		"I saw a way to hurt a person and did. I need to make up for that injury.",
		"I fell in love with a fey of Sarifal, and I must be with them."
	],
	flaw : [
		"I see people’s problems and can’t help but meddle.",
		"I’ve embraced my “fey” nature and it annoys both fey and mortal equally.",
		"I tell people that I’m friends with the fey, and it’s gotten me in trouble more than once.",
		"I take life a little slower than I should, and I don’t always act decisively when I should."
	],
	toolProfs : [["Artisan's tools or a musical instrument", 1]],
	languageProfs : [["Elvish or Sylvan", 1]],
};

//Backgrounds from the Border Kingdoms
BackgroundList["druuthguard"] = {
	regExpSearch :  /^(?=.*druuthguard).*$/i,
	name : "Druuthguard",
	source : [["TBK",110]],
	skillstxt : "Choose 2 from Arcana, Investigation, Religion, and Survival",
	gold : 15,
	equipleft : [
		["Backpack, with:", "", 5],
		["Bedroll", "", 7],
		["Mess Kit", "", 1],
		["Tinderbox", "", 1],	
		["Torches", 10, 1],
		["Rations, days of", 10, 2],
		["Waterskin", "",5],
		["Hempen rope, feet of", 50, 0.2]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Changeling Resistance",
	trait : [
		"You stink of evil. I can smell it on you.",
		"I dream of a world safe from hidden threats and betrayal.",
		"I know betrayal is coming, so I live life to its fullest every minute of every day.",
		"I will find the betrayer, if it is the last thing that I ever do.",
		"I don’t talk about the source of my suspicions. That is my burden to bear.",
		"I expect betrayal at every moment.",
		"I will not give in to my fears. I will face the hidden menace among us and expose them.",
		"I put no trust in the smoother talkers of this world. They are almost always false."
	],
	ideal : [
		["Endurance",
			"Endurance: I will find the hidden evil among us, no matter what the personal cost. (Good)"
		],
		["Alertness",
			"Alertness: I will never let down my guard. Vigilance always and forever. (Any)"
		],
		["Diligence",
			"Diligence: Those that hide in order to prey on the innocent must be exposed and stopped. (Good)"
		],
		["Defiance",
			"Defiance: I will not let legal niceties stop me from unmasking the deceitful. (Chaotic)"
		],
		["Vigilance",
			"Vigilance: Hidden threats are the most basic danger to organized society. (Lawful)"
		],
		["Steadfastness",
			"Steadfastness: If innocents die as a result of exposing the false, so be it. (Evil)"
		]
	],
	bond : [
		"I maintain a journal detailing a roster of those who have aroused my suspicions.",
		"I would sacrifice everything to protect the innocent.",
		"I drove away all my friends and loved ones because of my single-minded pursuit of the hidden.",
		"I failed to act on my suspicions once long ago. The memory of the costs of my inaction haunts me everyday.",
		"I do my best to conceal a deep and abiding rage.",
		"My niece is my only living relative. I would do anything to protect her."
	],
	flaw : [
		"I can’t stand being dirty. I must be perfectly clean, always.",
		"I assume the worst in people and am usually right.",
		"Everyone is a threat. It is merely a question of degree.",
		"I am afraid of the dark.",
		"I am unrelentingly negative.",
		"I talk to myself constantly. I am the only one that I fully trust."
	],
	toolProfs : [["Musical Instrument", 1]],
	languageProfs : [["Abyssal, Celestial, Deep Speech, Draconic, Infernal, Primordial, Sylvan, or Undercommon", 1]],
};

BackgroundList["duskwood forester"] = {
	regExpSearch :  /^(?=.*duskwood)(?=.*forester).*$/i,
	name : "Duskwood Forester",
	source : [["TBK",111]],
	skills : ["Nature", "Survival"],
	gold : 10,
	equipleft : [
		["Forester's axe", 1, 2],
		["Hunting trap", "", 25],
		["Journal of locations of rare flora & fauna", "", ""]
	],
	equipright : [
		["Forester's clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Naturalist Guide",
	trait : [
		"I tend to talk to myself when I am alone and walking through the forest.",
		"I can stare at a gently flowing stream for hours.",
		"I can be extremely impatient with tinhorns not experienced with the ways of the forest.",
		"I don’t react well when someone tries to order me around.",
		"I am as grumpy as a badger when I wake up each morning.",
		"I am uncomfortable and feel out of place around large groups of people.",
		"I am slow to trust, but loyal to a fault.",
		"I rather sleep in a tree than in a bed."
	],
	ideal : [
		["Seasons",
			"Seasons: The only thing that is permanent in life is change. We all must accept that everything changes eventually. (Chaotic)"
		],
		["Beauty",
			"Beauty: Revel in the beauty of nature and share its gifts with those around you. (Good)"
		],
		["Protection",
			"Protection: It is my duty to protect those who cannot protect themselves from the dangers of the forest. (Lawful)"
		],
		["Strength",
			"Strength: As in nature, the strong rule the weak. It is the only way. (Evil)"
		],
		["Nature",
			"Nature: The natural world offers the purest way of life. The trappings of civilization are nothing more than a burden. (Neutral)"
		],
		["Reason",
			"Reason: Every question in life should be answered by reasoned inquiry so that we may arrive at the truth. (Any)"
		]
	],
	bond : [
		"The forest is my home and I am its protector.",
		"I am fascinated by the beauty and grandeur of the forest.",
		"It is my mission to share the wonders of nature with unfortunate and ignorant city folk.",
		"When I am hired as a guide, I will lay down my life to protect my clients if need be.",
		"All hunting should be for sustenance only. Killing animals is not a sport.",
		"It is my duty to protect visitors to the forest."
	],
	flaw : [
		"I am not impressed by fancy folk and high manners. None of that will save you from a hungry owlbear.",
		"Bathing is for dandies and soft city folk.",
		"I don’t give a damn about what anyone thinks about me.",
		"I loathe cheese and cannot stand to be near it.",
		"I truly think that the trees are smarter than most people.",
		"I don’t forgive a slight, ever."
	],
	toolProfs : ["Woodcarvers Tools"],
	languageProfs : [1],
};

BackgroundList["griffon knight"] = {
	regExpSearch :  /^(?=.*griffon)(?=.*knight).*$/i,
	name : "Griffon Knight",
	source : [["TBK",113]],
	skills : ["Arcana", "Investigation"],
	gold : 25,
	equipleft : [
		["Badge of office", "", ""],
		["Manacles", "", 6],
		["Notebook about magic items you've seen", "", ""]
	],
	equipright : [
		["Fine clothes", "", 3],
		["Purse (with coins)", "", 1]
	],
	feature : "Nose for Trouble",
	trait : [
		"I am polite to the point of absurdity.",
		"I have lost too many fellow service members to trust others too easily.",
		"I am disgusted by the petty criminal activity I see everywhere.",
		"I have a story from my past service analogous to every situation imaginable.",
		"Nothing scares me, not even cold porridge.",
		"I like being in control and issuing orders.",
		"I have a crude sense of humor.",
		"Direct and simple action is always the right path."
	],
	ideal : [
		["Protection",
			"Protection: My oath was to protect the innocent. (Good)"
		],
		["Law",
			"Law: Rules, ordinances, and laws must be followed absolutely. (Lawful)"
		],
		["Free Thinking",
			"Free Thinking: The letter of the law is not important, it is the intent behind the law. (Chaotic)"
		],
		["Strength",
			"Strength: Might makes right. (Evil)"
		],
		["Impartiality",
			"Impartiality: Your guilt or innocence is not for me to decide. (Neutral)"
		],
		["Duty",
			"Duty: Not on my watch. (Any)"
		]
	],
	bond : [
		"No one left behind, ever.",
		"Only the smart survive. Discretion is the better part of valor.",
		"Honor is everything.",
		"I’ll never forget being betrayed by that sweet face.",
		"I will lay down my life for my fellows.",
		"I will protect those who cannot protect themselves."
	],
	flaw : [
		"I am quick to judgment and too stubborn to admit it.",
		"I quietly despise the weak.",
		"I really hate cats.",
		"I frequently lose my temper.",
		"I blindly obey the law, even if doing so does harm.",
		"I am haunted by a poor decision I made that cost the lives of fellow service members."
	],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
};

BackgroundList["highcoin blackalan"] = {
	regExpSearch :  /^(?=.*highcoin)(?=.*blackalan).*$/i,
	name : "Highcoin Blackalan",
	source : [["TBK",114]],
	skills : ["History", "Persuasion"],
	gold : 20,
	equipleft : [
		["Scroll of pedigree", "", ""]
	],
	equipright : [
		["Fine clothes", "", 3],
		["Silk cravats", 3, 0.5],
		["Signet ring or brooch", "", ""],
		["Purse (with coins)", "", 1]
	],
	feature : "High Roller",
	trait : [
		"My refined approach to everything that I do is a gift to the rest of the world.",
		"I am well known among the hoi polloi for my kindness and generosity.",
		"I always look my best no matter how trying the circumstances.",
		"It is difficult to be among the lowborn, but it is a fact of life that must be endured.",
		"Only the best for me, always.",
		"We are all equals, despite my elevated birth and status.",
		"Do not ever betray me, for you will never find a more implacable adversary.",
		"As a highborn, it is my duty to try to set an example of proper behavior for the rest of society."
	],
	ideal : [
		["Deference",
			"Deference: Because of my birth, a certain amount of respect is due. However, that respect can only be maintained by decent and proper behavior. (Good)"
		],
		["Duty",
			"Duty: In all things there is a ladder of authority. It is important to recognize upon which rung you perch and to act accordingly. (Lawful)"
		],
		["Free Spirit",
			"Free Spirit: Just because I was born into a certain caste does not mean I have to act as such or remain there at all. (Chaotic)"
		],
		["Power",
			"Power: Wealth and influence are weapons to be used against all but our closest allies. (Evil)"
		],
		["Loyalty",
			"Loyalty: My first and last duties are to my family. Family is everything. (Any)"
		],
		["Noble Obligation",
			"Noble Obligation: My duty as a noble requires me to protect, aid, and show generosity to those around me. (Good)"
		]
	],
	bond : [
		"Glory and honor to my house and family defines everything I do.",
		"A deal is a deal and must be honored no matter the cost.",
		"I must be adored and revered by the common people.",
		"My obligations to my family leave no room for frivolity or whimsy.",
		"My loyalty to my liege lord is absolute.",
		"I must set an example of proper behavior for the sake of others."
	],
	flaw : [
		"I openly loathe the unwashed commoners.",
		"I made a grievous mistake which if discovered could ruin me and my family.",
		"I am paranoid to the point of distraction.",
		"Pleasures of the flesh are the only thing really worth living for.",
		"No one is smarter, more refined, and more gracious than me.",
		"I am an embarrassment to my family, although I would never admit that."
	],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
};

BackgroundList["skulls hollow seer"] = {
	regExpSearch :  /^(?=.*skulls)(?=.*hollow)(?=.*seer).*$/i,
	name : "Skulls Hollow Seer",
	source : [["TBK",115]],
	skills : ["Insight", "Perception"],
	gold : 15,
	equipleft : [
		["A gaming set of your choice", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Glimpses of the Past and Future",
	trait : [
		"I feel anxious and on edge almost all the time.",
		"I am almost never surprised by anything.",
		"I only speak if spoken to, and answer with as few words as possible.",
		"I make sure to loudly and broadly proclaim any bit of insight or wisdom that comes to me.",
		"I try to find the positive in any experience, no matter how terrible it might seem at the time.",
		"I am suspicious of just about everyone as I feel that everyone wants to use me for their own purposes.",
		"I am a real talker. In fact, I really never stop talking.",
		"I am a dour person, sulky and sour about the circumstances of my life."
	],
	ideal : [
		["Aspiration",
			"Aspiration: I’ve seen a hint of greatness in my future, and I work hard to achieve it. (Any)"
		],
		["Manipulation",
			"Manipulation: My gifts give me the perfect leverage to move others to my tune. (Evil)"
		],
		["Freedom",
			"Freedom: Knowledge of what may come allows for greater choice. (Chaotic)"
		],
		["Serenity",
			"Serenity: I seek fulfillment with whatever I see in the future. (Neutral)"
		],
		["Truth",
			"Truth: I am a servant of the truth, and I will share it for good or ill. (Lawful)"
		],
		["Compassion",
			"Compassion: My gifts can bring comfort to the suffering and peace to the troubled. (Good)"
		]
	],
	bond : [
		"I told the fortune of the man who then destroyed my family, but I ignored the warning. I must find him and put it right.",
		"My grandmother passed a token to me when she explained our gift of the Sight. It’s my most prized possession.",
		"I told one fortune whose meaning I still don’t understand, but I know it has great importance.",
		"My family travels the land, and I send most of the money I earn to them.",
		"I told the fortune of the person I loved, and that led them to the arms of another.",
		"I’m driven to read the fortune of powerful people."
	],
	flaw : [
		"I saw a truth once that I refused to speak, and tragedy was the result. It haunts me to this day.",
		"I have terrible nightmares about the dark futures I’ve glimpsed.",
		"No matter how I try, very few ever believe my fortunes.",
		"I can’t resist embellishing a fortune to try to earn a few more coins.",
		"I loathe charlatans and tricksters who take advantage of those who seek their fortunes, and I do what I can to discredit them.",
		"I’m terribly jealous of any positive fortune I read, since I can read any palm but my own."
	],
	toolProfs : [["Gaming set", 1]],
	languageProfs : [1],
};

BackgroundList["jundarl"] = {
	regExpSearch :  /^(?=.*jundarl).*$/i,
	name : "Jundarl",
	source : [["TBK",116]],
	skills : ["Medicine", "Religion"],
	gold : 5,
	equipleft : [
		["Herbalism kit", "", 3]
	],
	equipright : [
		["Well-worn animal pelt (clothes/blanket)", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Fast Healing",
	trait : [
		"I’ve have been accused of so many things I did not do based on my appearance, that I am very slow to judge others.",
		"I always root for the underdog and go out of my way to help those less fortunate than myself.",
		"I am quite convinced that I have the right answer for every question, every time.",
		"I can’t stand dairy in any form.",
		"I’m above such concepts as etiquette and social expectations.",
		"I’m very easily distracted and struggle to stay on any task.",
		"All we need is love.",
		"I am impatient with people the are less intelligent than me, which means just about everyone."
	],
	ideal : [
		["A Better World",
			"A Better World: My life is dedicated to uplifting those around me. (Good)"
		],
		["Order",
			"Order: Without structure, all is lost. We must follow the rules! (Lawful)"
		],
		["Whatever",
			"Whatever: Everyone needs to, like, chill, man. (Chaotic)"
		],
		["Pain",
			"Pain: Only through a measure of suffering can one find the truth. (Evil)"
		],
		["Respect Others",
			"Respect Others: There is no absolute truth. Each must find their own path. (Neutral)"
		],
		["Respect Life",
			"Respect Life: We all have a role to play in this universe and should be allowed to play it. (Any)"
		]
	],
	bond : [
		"Because of persecution suffered as a child, I am dedicated to building a more inclusive world.",
		"I am driven by my fear of failure.",
		"I lost someone very close to me long ago. Everything I do is dedicated to their memory.",
		"I am focused on revenge. Revenge against those who killed my family long ago.",
		"My only source of peace is unspoiled nature. I will do anything to preserve it.",
		"Striving for justice in an unjust world is my burden to bear."
	],
	flaw : [
		"My fear of being accepted makes me quiet and withdrawn.",
		"I deeply resent people who talk too much.",
		"I am extremely self conscious about my bad breath, so keep others at least arm's length away.",
		"I simply cannot abide losing an argument, so I never acknowledge defeat.",
		"I am greedy, like really greedy. Where is my precious?!",
		"I can’t stand high society types or any form of foppery."
	],
	toolProfs : ["Herbalism Kit"],
	languageProfs : [1],
};

BackgroundList["monster hunter"] = {
	regExpSearch :  /^(?=.*monster)(?=.*hunter).*$/i,
	name : "Monster Hunter",
	source : [["TBK",118]],
	skills : ["Nature", "Stealth"],
	gold : 5,
	equipleft : [
		["Herbalism kit", "", 3],
	],
	equipright : [
		["Traveler's Clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
		["Hunting trap", "", 25]
	],
	feature : "Tracker/Hunter",
	trait : [
		"I will pursue and catch my quarry no matter the cost.",
		"I am privileged to be able to share the beauty of the Border Kingdoms with my clients.",
		"I will not rest until each and every monster in the Border Kingdoms is eliminated.",
		"I love the thrill of the hunt.",
		"I am not one to let property rights and other legalities get in the way of a good hunt.",
		"I am all about getting paid. If you pay me enough, I will get you a kill."
	],
	ideal : [
		["Independence",
			"Independence: I am a free spirit—no one tells me how to run a hunt. (Chaotic)"
		],
		["Order",
			"Order: Monsters are a scourge upon us all and must be destroyed. (Lawful)"
		],
		["Safety",
			"Safety: Protecting the innocent from the depredations of monsters is the highest calling. (Good)"
		],
		["Pragmatism",
			"Pragmatism: When it comes to a hunt, by any means necessary is the only rule. (Chaotic)"
		],
		["Friendship",
			"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
		],
		["Glory",
			"Glory: I’m determined to be known as the foremost hunter in the Border Kingdoms (Any)"
		]
	],
	bond : [
		"A close call with an owlbear taught me early on the importance of respecting the dangers in nature.",
		"I was taught everything I know by a salty old trapper and everything I do now honors his memory.",
		"The beauty of the natural world informs everything that I do, and I want to share this understanding with as many folk as possible.",
		"I grew up in a city, but that was not the life for me. Wilderness and the thrill of the hunt is everything to me.",
		"I lost someone very close to me at the claws of a troll. I will do everything in my power to see that this never happens to anyone else.",
		"I made a mistake while taking a client on a hunt resulting in her death. It was my fault and the memory of my failure haunts me everyday."
	],
	flaw : [
		"Once started, I cannot stop a hunt.",
		"I am not interested in coddling anyone’s feelings. When on a hunt, my way is the only way.",
		"I am convinced that I am the best, and am not interested in hearing anyone else’s views of tactics, techniques, or locales when it comes to a hunt.",
		"I often take unnecessary and foolish risks when on a hunt.",
		"When pursuing a monster, laws were meant to be broken.",
		"Animals and monsters are beneath our deepest contempt and are meant to be killed."
	],
	toolProfs : ["Herbalism Kit"],
	languageProfs : [1],
};

BackgroundList["oeblar"] = {
	regExpSearch :  /^(?=.*oeblar).*$/i,
	name : "Oeblar",
	source : [["TBK",119]],
	skills : ["Deception", "Stealth"],
	gold : 5,
	equipleft : [
		["A poisoner's kit", "", ""]
	],
	equipright : [
		["Dark common clothes with a hood", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Poison Expert",
	trait : [
		"I am pretty sure that your stuff should be my stuff.",
		"I am afraid of the dark.",
		"I am not a morning person. Do not bother me with anything before highsun (noon).",
		"I have a compulsive sweet tooth.",
		"I don’t cotton to strangers. You must earn my trust.",
		"I am terribly insecure so always act tough and never admit to being wrong.",
		"I am incredibly goal-oriented. I will let nothing stop me when I have set a goal.",
		"I am fragile and will cry in the face of any cruel insult or jibe."
	],
	ideal : [
		["Property",
			"Property: You are entitled to your things for exactly as long as you are strong enough to protect them. (Chaotic)"
		],
		["Freedom",
			"Freedom: No thinking being should ever be caged. Jails and prisons are for the morally bankrupt. (Chaotic)"
		],
		["Charity",
			"Charity: There is enough wealth in this world in order to share a measure of it with all. (Good)"
		],
		["Greed",
			"Greed: Mine! It will all be mine! (Evil)"
		],
		["People",
			"People: I can take or leave just about anyone. If you are right by me, you can expect the same in return. (Neutral)"
		],
		["Restitution",
			"Restitution: Everyone makes mistakes. So everyone should be afforded the chance to make things right. (Good)"
		]
	],
	bond : [
		"I owe some money to some bad people. I need to pay them back soon or it will be bad, very bad.",
		"I have a little sister that relies on me. I must make money one way or the other.",
		"My family’s business was forced to close because of outrageous “protection” fees. I will make the local crime boss responsible pay.",
		"I will build a vast criminal empire.",
		"I have done some things that I am not proud of. I hope to do enough to balance the ledger out.",
		"I watched someone I cared very much about die because of a mistake that I made. I will carry that burden with me for the rest of my days."
	],
	flaw : [
		"When the going gets tough, I get going.",
		"All I care about is money.",
		"I don’t work well with others.",
		"I really like pie. I don’t allow bakeries to be closed (and keeping me from sampling their wares).",
		"I will betray anyone and anything for enough money.",
		"I saw a valuable thing years ago. I constantly dream of stealing it and making it mine."
	],
	toolProfs : [["Gaming set", 1],"Thieves' Tools"],
};

BackgroundList["scholar of derlusk"] = {
	regExpSearch :  /^(?=.*scholar)(?=.*derlusk).*$/i,
	name : "Scholar of Derlusk",
	source : [["TBK",120]],
	skills : ["Arcana", "History"],
	gold : 10,
	equipleft : [
		["A bottle of black ink", "", 1],
		["Ink pen", "", ""],
		["Parchment, sheets of", 10, ""],
		["A long-lost dungeon map of unknown origin", "", ""],		
	],
	equipright : [
		["Common Clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Lore Investigator",
	trait : [
		"I use polysyllabic words even when I don’t have to.",
		"I’ve read every book in the greatest Derluskan libraries—or I like to boast that I have.",
		"I appreciate that most aren’t as smart as I am. I do my best to help them by patiently explaining anything and everything to them.",
		"I love nothing more than finding a new book, especially an ancient one.",
		"I’m willing to listen to every side of an argument before I make my own judgment.",
		"I have a hard time with those that are not as smart as I and I struggle to keep my frustration with them from showing.",
		"I am not comfortable in most social settings and I do not enjoy crowds.",
		"I have been forced to realize that not everyone appreciates my brilliance."
	],
	ideal : [
		["Science",
			"Science: The answer to everything is out there given enough sober study and diligence. (Neutral)"
		],
		["Grace",
			"Grace: Simple elegance in thought or refinement in thinking is the surest path to truth. (Good)"
		],
		["Logic",
			"Logic: All opinions are not equal. Some are a very great deal more robust, sophisticated and well supported in sound argument than others. (Lawful)"
		],
		["Infinity",
			"Infinity: Any outcome is possible so one should not be foreclosed against any eventuality. (Chaotic)"
		],
		["Authority",
			"Authority: The intelligentsia have a duty to rule over the lesser among us. (Evil)"
		],
		["Knowledge",
			"Knowledge: The pursuit of knowledge is the surest path to self improvement. (Any)"
		]
	],
	bond : [
		"I am driven by a nagging question and am certain that the answer is out there somewhere.",
		"The body of knowledge I have accumulated must be used for the good of society.",
		"The location and preservation of ancient writings and works is my life’s purpose.",
		"I have dedicated my life to this one specific area of study.",
		"Knowledge should be available to all. I work to see that education is available to all.",
		"My unhealthy thirst for knowledge caused me to dig too deeply into things best left hidden. I will bear the cost of this folly for the rest of my life."
	],
	flaw : [
		"I will do anything to get the answer to my question.",
		"I know that I should use my knowledge for good, but I struggle with the concept of selflessness.",
		"Inductive inference is the only true path to enlightenment. Ignore those hidebound deductive golems.",
		"I often come up with overly complex explanations for things when a far simpler one would suffice.",
		"I always speak my mind. I care not what others think or how my words might affect them.",
		"I get so nervous around other people that sometimes I find that I cannot speak at all."
	],
	languageProfs : [2],
};

BackgroundList["scofflaw of blacksaddle"] = {
	regExpSearch :  /^(?=.*scofflaw)(?=.*blacksaddle).*$/i,
	name : "Scofflaw of Blacksaddle",
	source : [["TBK",121]],
	skillstxt : "Choose 2 from Deception, Persuasion, Stealth, and Survival",
	gold : 20,
	equipright : [
		["Traveler's clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Ingenious",
	trait : [
		"I know what is best for you and I am not shy about sharing this fact with you.",
		"While I have many strongly-held beliefs, I am reluctant to share them with others.",
		"Is that the sheriff? Hide!",
		"While everyone is entitled to their opinion, it is very difficult to change mine.",
		"Government eyes and ears are everywhere, so I am very slow to trust.",
		"I have a big heart and go out of my way to help anyone in need.",
		"I am supremely goal oriented and nothing will dissuade me from accomplishing something once I have put my mind to it.",
		"I am insecure so am easily insulted."
	],
	ideal : [
		["Liberty",
			"Liberty: I will not abide an unjust ruler no matter the personal cost. (Chaotic)"
		],
		["Freedom",
			"Freedom: I will strive to my last breath to free my unjustly imprisoned brothers and sisters. (Chaotic)"
		],
		["Independence",
			"Independence: The rights of the individual always supersede the rights of society. (Chaotic)"
		],
		["Largesse",
			"Largesse: I steal from the rich and give to the poor. (Good)"
		],
		["Family",
			"Family: I’m loyal to my family and friends, not to any nation or government. (Neutral)"
		],
		["Progress",
			"Progress: We must all work together to make the world a better place. (Good)"
		]
	],
	bond : [
		"My family lost their lands to the Barony, and I mean to make the Barony pay!",
		"My exploits will make me a folk hero.",
		"The suffering of my people drives me to lead them to a brighter future.",
		"I have done some things I am not proud of, but such is the cost of closely-held ideals.",
		"A family member was unjustly imprisoned. I will free them or die trying.",
		"The people must know the truth. No matter the personal cost to me, I will spread the word."
	],
	flaw : [
		"I simply cannot make myself be respectful to authority.",
		"Seeing soldiers of the Barony sets me off into a barely controllable rage.",
		"I drink too much.",
		"I really don’t care about anyone else, but do my best to hide it.",
		"I am a know-it-all.",
		"I laugh loudly at the misfortunes of others."
	],
	toolProfs : [["Gaming set", 1],["One set of tools", 1]]
};

BackgroundList["yallaschan"] = {
	regExpSearch :  /^(?=.*yallaschan).*$/i,
	name : "Yallaschan",
	source : [["TBK", 122]],
	skills : ["History", "Perception"],
	equipleft : [
		["Carpenter's Tools", "", 6],
		["Longshoreman's Hook", "", 1],
		["A blank book", "", ""],
		["Ink, 1 ounce bottle of", "", ""],
		["Quill pen", "", ""]	
	],
	equipright : [
		["Traveler's Clothes", "", 3],
		["Leather pouch (with coins)", "", 1]
	],
	feature : "Stevedore Engineering",
	trait : [
		"I am really good at what I do and take every opportunity to tell everyone just that.",
		"I am afraid of the water.",
		"I am very laidback, to the point of being laconic.",
		"I love designing and sketching all manner of things. I am always drawing.",
		"While I don’t mind hard work, I prefer great pay.",
		"I always root for the underdog.",
		"I am often too proud to admit that I don’t know what I am talking about.",
		"I always do the right thing."
	],
	ideal : [
		["Kindness",
			"Kindness: It is amazing how much morale is improved by small acts of kindness. (Good)"
		],
		["Teamwork",
			"Teamwork: Any complicated job can be accomplished if everyone works together. (Lawful)"
		],
		["Visionary",
			"Visionary: Don’t ever let those who are lesser suppress your ideas. (Chaotic)"
		],
		["Achievement",
			"Achievement: The goal is all that matters. The means are irrelevant. (Evil)"
		],
		["Cheer",
			"Cheer: Life should never get too busy to keep us from enjoying ourselves. (Any)"
		],
		["Wealth",
			"Wealth: It is all about the gold pieces. (Any)"
		]
	],
	bond : [
		"I must be recognized as one of the great artisans of my age.",
		"I will be successful and use that success to improve the lives of those around me.",
		"When I succeed, I cannot wait to rub it in the faces of those who doubted me!",
		"Keeping my hands busy distracts me from dwelling on my painful past.",
		"I am tired of living up to the expectations of others. I will forge my own path.",
		"This world has given me exactly nothing. I owe it the same."
	],
	flaw : [
		"I am too proud to learn from my mistakes.",
		"I don’t take direction well.",
		"I cannot stand know-it-alls.",
		"I am jealous of those more talented than I.",
		"I have no time for those who disagree with me.",
		"I have an addictive personality."
	],
	toolProfs : ["Carpenter's Tools", "Vehicles (water)"],
};

//Background from Ruins of Mezro/Lost City of Mezro (in both books, different pages)
BackgroundList["heretic"] = {
	regExpSearch :  /^(?=.*heretic).*$/i,
	name : "Heretic",
	source : [["AL","Mezro"]],
	skills : ["Deception", "Religion"],
	gold : 10,
	equipleft : [
		["A holy symbol (subtly heretical)", "", 1],
		["A prayer book/wheel", "", 5],
		["Bottle of invisible ink", "", ""],
		["A quill", "", ""],		
	],
	equipright : [
		["Common Clothes", "", 3],
		["Vestments", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Heretical Contacts",
	trait : [
		"I think I’m right even when I’m wrong.",
		"I pity those who deny the heresy.",
		"I always scope out the closest exits and position myself near them.",
		"Those who refute my beliefs are damned and not worth saving.",
		"I’m sure my god has chosen me for a greater destiny.",
		"I’m a natural orator, but once I start talking it’s difficult for me to stop.",
		"I’m always looking over my shoulder and the slightest things startle me.",
		"I believe the end of the world is nigh."
	],
	ideal : [
		["Guidance",
			"Guidance: I must teach others my forbidden doctrine (Neutral)."
		],
		["Caution",
			"Caution: It’s always better to be safe than sorry (Any)."
		],
		["Knowledge",
			"Knowledge: If this conspiracy is true, what else are we being lied to about? (Neutral)"
		],
		["Insurrection",
			"Insurrection: My old faith is corrupt and must be brought down by the new order (Chaotic)."
		],
		["Honesty",
			"Honesty: I’ve been lied to enough, so now I’m sworn to always tell the truth (Lawful)."
		],
		["Self-Knowledge",
			"Self-Knowledge: Those who seek the truth become wise beyond their years (Good)."
		]
	],
	bond : [
		"The heretics who educated me were burned at the stake. I won’t let that happen to me.",
		"Belief in my old faith still nags at me. Have I chosen the right path?",
		"I used to be friends with the cleric who’s now hunting me.",
		"I carry a heretical treatise on my person. It mustn’t be found!",
		"I protect the faithless so they can know enlightenment.",
		"One of my underworld contacts reports my movements to the superiors of my old temple."
	],
	flaw : [
		"I’m suspicious of strangers, as they may be bounty hunters sent to arrest me.",
		"I sneer at those whom I deem unworthy of my time.",
		"I’m deeply superstitious, and have many rituals to avoid bad luck.",
		"I tend to misjudge the devotion of others.",
		"I’m obsessed with my studies, often to the detriment of other concerns.",
		"I’m deeply mistrustful of temple hierarchies."
	],
	languageProfs : [2],
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
BackgroundFeatureList["tavern tales"] = {
	description : "Years in the taproom exposed you to myriad tall stories, urban legends, and gossip. Whenever you visit a new locale, there’s a chance you’ll recall some tidbits of local knowledge. The usefulness of this information could vary from knowing where to find the best barber, to remembering which tombstone Captain Walharrow buried his treasure under. On the DM's discretion, roll a d20 whenever you enter a new location, with higher results gleaning more useful information. If the DM allows it, you can work with your group to determine what the information could be.",
	source : [["DGtT", 38]]
};
BackgroundFeatureList["on the tab"] = {
	description : "You have a knack for avoiding payment for simple amenities. If an item or service is priced at less than 1 gp, you can acquire it for free. In addition, you receive free lodging and food at most cheap inns and taverns, allowing you to live a poor or modest lifestyle for free.",
	source : [["DGtT", 39]]
};
BackgroundFeatureList["master sleuth"] = {
	description : "If you spend ten minutes talking to a stranger, you uncover hidden information about them by studying their mannerisms, tiny scuffs on their clothing, and so forth. At the DM’s discretion, you deduce one of the following pieces of information about them: a recent location they’ve visited, an object they’ve handled, or a person they’ve spoken with.",
	source : [["AL","XGE"]],
};
BackgroundFeatureList["answer to a forgotten enigma"] = {
	description : "The land of your birth is not only lost to the sands of time but was quite possibly on another plane. You see hints in puzzles and clues to riddles based on knowledge of a past and land that others have never known. Your expertise is therefore different than other adventurers and you are able to make connections that others miss. You especially good at solving puzzles and when faces with a riddle that you have difficulty solving, you may ask your Dungeon Master for a hint based on your obscure knowledge. Your Dungeon Master will determine what, if any, hint you might remember that will help you solve the puzzle.",
	source : [["AL","DDALCA-01"]],
};
BackgroundFeatureList["breasal ambassador"] = {
	description : "Part of your quest is meeting as many of the different inhabitants as possible on the Moonshae Isles. You seek alliances, but not at the expense of a peaceful life for your people. You are familiar with the other lizardfolk tribes in the Moonshaes and could pose as one of them if needed or gain shelter with their tribe for yourself and your companions. (Pre-req: lizardfolk)",
	source : [["MIRG",32]],
};
BackgroundFeatureList["rustic moonshaes hospitality"] = {
	description : "You’re one of the Ffolk, so you fit in among them with ease. You can find a place to hide, rest, or recuperate among other Ffolk, unless you have shown yourself to be a danger to them. They shield you from the law or anyone else searching for you, though they do not risk their lives for you – unless it’s your hometown.",
	source : [["MIRG",33]],
};
BackgroundFeatureList["hometown advantage"] = {
	description : "You have a hometown, which you can create or choose from the Moonshae Isles’ map. You have a connection to your hometown, and when you return there you can expect the same treatment as from Rustic Hospitality, but the people of your hometown do more for you. Some might even risk their lives for you. If any harm came to the people there, it would be a great blow to your emotional state.",
	source : [["MIRG",33]],
};
BackgroundFeatureList["all moonshaes eyes on you"] = {
	description : "Your speech pattern, clothes, and everything else about you makes you different from others you meet. You might look elvish, but you don’t act like elves from other places. It’s a little unsettling having eyes on you wherever you go, but once people hear you’re from Chrysalis, they want to hear about your homeland and its stories. If people in power hear of your presence, they want to meet with you, hoping this might be the time the Llewyrr are coming out of their seclusion and wanting to ally with a wider world. (Pre-req: elf or half-elf)",
	source : [["MIRG",34]],
};
BackgroundFeatureList["unseen rage"] = {
	description : "An unexplained rage bubbles just below the surface of your personality. Animals sense this within you and may react in different ways. Small animals that are typically prey such as rodents, beasts of burden, or other small creatures, fear you or act with hostility. Animals that tend to be predators see you as more of kindred spirit and are docile or, at the DMs discretion, even protective towards you. Exceptions may happen if you enter an alpha creature’s territory as sensing you could cause heightened aggression.",
	source : [["MIRG",35]],
};
BackgroundFeatureList["sea dog"] = {
	description : "You’ve sailed long enough to know the ships of the Moonshae Isles when you see them: the colors of their sails, the look of the ships, and other distinctive features. If you get a good look at a ship, you know what ship it is and if it’s native to the Moonshaes. If it’s not from the Moonshaes, you at least know where the ship hails from.",
	source : [["MIRG",36]],
};
BackgroundFeatureList["noble fey"] = {
	description : "You were a noble or esteemed servant of the court of Sarifal. You have an air about you that makes mortals take note: awe or anger, depending on the mortal. This influence works on commoner & noble alike, as many of the people in positions of leadership see you as a way to make contact with High Lady Ordalf. They might be less happy if & when they find out the truth of your situation. (Pre-req: elf, eladrin, or half-elf)",
	source : [["MIRG",38]],
};
BackgroundFeatureList["fey touched"] = {
	description : "You’re known to the Seelie and Unseelie fey when they see you because of the mark you bear. Depending on which side you encountered and how that played out, you are welcomed as a friend to one court and are seen as an enemy by the other. This mark cannot be concealed with disguise or magic.",
	source : [["MIRG",39]],
};
BackgroundFeatureList["changeling resistance"] = {
	description : "As a result of your hereditary exposure to such creatures, whenever you’re in the company of a shapeshifter (doppelganger, lycanthrope, etc.), you sense that something is “odd” about them. You can’t tell precisely what kind of shapeshifter they are, but you know they are one.",
	source : [["TBK",110]],
};
BackgroundFeatureList["naturalist guide"] = {
	description : "You have spent most of your adult life under the broadleaf canopies of the great and wild forests of the Border Kingdoms. As a result, you are extremely familiar with the terrain, inhabitants, and hazards found in these untamed and vast woods. You can always find game, edible plants and berries, and fresh water for yourself and up to five other people each day while in the forest.",
	source : [["TBK",111]],
};
BackgroundFeatureList["nose for trouble"] = {
	description : "Your experience in finding & punishing counterfeits, & dealing with lawbreakers generally, gives you a feel for the criminal element in Alamontyr. You can adeptly pick out members of the local thieves’ guild or criminal front & are likely to spot hired spies at work. You have an affinity for local law enforcement & can quickly locate members of the local watch or constabulary. You also have higher credibility when interacting with other law enforcement.",
	source : [["TBK",113]],
};
BackgroundFeatureList["high roller"] = {
	description : "Glib of tongue & a master actor, skilled in insults & acting “haughtier than thou,” being a shrewd judge of the wealth of individuals & how to goad, stingingly insult, impress or make common cause with them, you have gained familiarity with how to spend money & how to handle it, from profit margins to sly contract pitfalls (from being a “coinlord” of Blackalblade: investing, lending, & banking, or from dealing extensively with coinlords). You’ve developed a wide network of contacts within Blackalblade & through your experience there become familiar with expensive luxury goods (including wines & cheeses), & with gems & gemcutting (so you can identify rare gems & substances dyed, heat-treated, or altered to be passed off as fine gemstones).",
	source : [["TBK",114]],
};
BackgroundFeatureList["glimpses of the past and future"] = {
	description : "Due to your strange experience with the apparition of Skulls Hallow, you are an unwilling seer. Visions of the past & messages about the future come to you unbidden & for no apparent reason. More frustrating than that is trying to figure out what these glimpses from other times & places mean. Occasionally, they're easy to understand & can be helpful. However, more commonly, these random insights are inscrutable & confusing. Your DM may privately impart Skull messages to you from time to time.",
	source : [["TBK",115]],
};
BackgroundFeatureList["fast healing"] = {
	description : "While the rapid growth of your hair & nails has its drawbacks in civilized society, your body’s rapid healing makes getting over life’s everyday bumps & bruises easier. At the end of a long rest, you gain a number of temporary hit points equal to your proficiency bonus. Given enough time, this unusual healing ability can regenerate lost digits or whole body parts. However, the process is slow. You can regenerate approximately one pound of lost body parts/material for each month spent resting.",
	source : [["TBK",116]],
};
BackgroundFeatureList["tracker/hunter"] = {
	description : "You are extremely familiar with the flora, fauna, and terrain of the Border Kingdoms. While there, you can automatically identify the tracks of any beasts native to that region; similarly, you know what foliage is safe to eat. Given at least an hour in any wilderness in the Border Kingdoms, you can complete a successful hunt, producing enough to eat for up to five other people each day.",
	source : [["TBK",118]],
};
BackgroundFeatureList["poison expert"] = {
	description : "You can recognize many poisons and sleep-draughts by taste, smell, and hue, and know where to go to obtain such (and other illicit or contraband) substances. Because so many of these noxious substances originate in the Underdark, you are also resistant to Drow Poison.",
	source : [["TBK",119]],
};
BackgroundFeatureList["lore investigator"] = {
	description : "Derlusk has some of the greatest libraries in the Realms. As a professional researcher, if you don't recall the information around a piece of lore, you know where you can likely find it. After years of study in Derlusk, you've established a network of contacts in the libraries, scriptoriums, & universities there. If you're researching lore specific to the Border Kingdoms, you'll likely know where to find the answer to your question within one of the athenaeums in Derlusk (with your DM's guidance).",
	source : [["TBK",120]],
};
BackgroundFeatureList["ingenious"] = {
	description : "You frequently find yourself in tough spots & can be creative on the fly with whatever materials are on hand. Being ingenious requires a pressing need greater than boredom or curiosity. The attempt succeeds or fails based on the available materials, the situation, & the nature of your creation. Success requires a successful Intelligence (Investigation) check & a successful tool check. The Investigation is to understand the materials & how to assemble them, & the tool check lets you accomplish the build.",
	source : [["TBK",121]],
};
BackgroundFeatureList["stevedore engineering"] = {
	description : "Provided you have the tools and materials necessary (cables/rope/chains), you can create a plan involving scaffolding, rigging, or block and tackle, to perform just about any conceivable task (e.g. moving something heavy; lifting something high in the air; creating a rope based trap; building a suspension bridge, etc).",
	source : [["TBK",123]],
};
BackgroundFeatureList["heretical contacts"] = {
	description : "You know where to find heretics in settlements where your faith is represented. If no heretics are present, you can indoctrinate weak-willed souls if you spend a day preaching. Where heretics are present, you can always find a place to hide, rest and recuperate. If needed, they can help you escape the settlement on a cart or through a secret tunnel.",
	source : [["AL","Mezro"]],
};