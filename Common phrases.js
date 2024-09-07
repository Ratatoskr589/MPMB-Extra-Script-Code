\n\n" + toUni("Face    Charges\tEffect") + "\n  1\t1\tGases, wind, and fog can't pass through the barrier.\n  2\t2\tNonliving matter can't pass through the barrier.*\n  3\t3\tLiving matter can't pass through the barrier.\n  4\t4\tSpell effects can't pass through the barrier.\n  5\t5\tNothing can pass through the barrier.*\n  6\t0\tThe barrier deactivates.\n\n   * Walls, floors, and ceilings can pass through at your discretion.\n\nThe cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below.


\n   " + toUni("Guardian") + ". The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n 
whispers warnings, giving +2 initiative unless incapacitated. 

		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		
\n   " + toUni("Temperate") + ". The bearer suffers no harm in temperatures as cold as –20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit."
you suffer no harm in temperatures from -20\u00B0F to 120\u00B0F.

\n   " + toUni("Conscientious") + ". When the bearer of this item contemplates or undertakes a malevolent act, the item enhances pangs of conscience.
enhances pangs of conscience when you contemplate or do a malevolent act.

\n   " + toUni("Waterborne") + ". This item floats on water and other liquids. Its bearer has advantage on Strength (Athletics) checks to swim.
			
		savetxt : { immune : ["temps btwn -20\u00B0F/120\u00B0F"] },
		savetxt : { text : ["comfortable in -20/120°F"] },
		savetxt : { text : ["Adv on Str (Athletic) chks to swim"] },
		savetxt : { text : ["Adv on Str (Athletic) chks to swim"], immune : ["paralyzed (by magic)", "restrained (by magic)"] }
		savetxt : { adv_vs : ["spells"] },
		savetxt : { adv_vs : ["spells"], immune : ["temps btwn -20 ̊ & 120 ̊ F"] },
		savetxt : { adv_vs : ["gases", "vapors"] }
		savetxt : { immune : ["surrounding gas","temps btwn -20 ̊ & 120 ̊ F"] },
		
		
\n   " + toUni("Harmonious") + ". Attuning to this item takes only 1 minute.

\n   " + toUni("Illusion") + ". The item is imbued with illusion magic, allowing its bearer to alter the item's appearance in minor ways. Such alterations don't change how the item is worn, carried, or wielded, and they have no effect on its other magical properties. For example, the wearer could make a red robe appear blue, or make a gold ring look like it's made of ivory. The item reverts to its true appearance when no one is carrying or wearing it.

You can use imbued illusion magic to alter its appearance in minor ways. 

\n   " + toUni("Language") + ". The bearer can speak, read and understand a language of the DM's choice while the item is on the bearer's person. 
					
		languageProfs : ["Sylvan"],
		languageProfs : [["Infernal"],["Big Cats & Tigers (Understand)"]],
		
\n   " + toUni("Beacon") + ". The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional 10 feet, or to extinguish the light. 
		action : [["action", ""], ["bonus action", " (light/dim)"]],
As a bonus action, it sheds bright light in a 10-ft radius & 10-ft more dim, or stops. 
		
\n   " + toUni("Sentinel") + ". This item glows faintly when giants are within 120 feet of it.

\n   " + toUni("War Leader") + ". The bearer can use an action to cause his or her voice to carry clearly for up to 300 feet until the end of the bearer's next turn.

You can also use an action to make your voice carry clearly for up to 300 ft until your next turn ends.

		action : [["bonus action", "Shield of Expression"], ["action", "Shield of Expression (300ft Voice)"]],
		action : [["action", "Birdcalls/300ft Voice"]],
		
		
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
		
		action : [
			["action", " (North)"],
			["bonus action", " (fold/unfold)"],
			["reaction", " (add/subtract d4)"]
		]
		action : [["action", " (grow/revert)"],["action", " (North)"]],

Delver: While underground, you always know your depth below the surface & the direction to the nearest path leading upward.

Wicked: It heightens your urge to act in selfish or malevolent ways when given the chance.

				regExpSearch : /coral great hammer/i,
				
"Vambraces of the Coiled Serpent (Coiling Grasp Tattoo)", //This is the limit of characters that can fit in the name of an attunement item without issues, even with resizing text.

"Bapar Ghalmrin's Imperishable Ark (Chest of Preserving (FR-DC-LIGA-1)444",//This is the absolute limit of characters that will fit in a non-attunement item