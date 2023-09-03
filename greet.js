/**Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
 * Marketing thinks it would be great to welcome visitors to the site in their own language. 
 * Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - 
if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.*/

//SOULTION
function greet(lang) {
	return langs[lang]||langs['english'];
}

const langs = {
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
};

//NOTES
/**The langs object stores the languages as keys and their greetings as values.

The greet function takes an input lang and tries to retrieve the corresponding greeting from the langs object using langs[lang]. 
If the language is found, it returns the greeting; otherwise, it defaults to 'Welcome' in English by using langs['english']. */