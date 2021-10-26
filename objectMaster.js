const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    
    // an array of pokemon objects where the id is evenly divisible by 3
    const divByThreeIds = pokémon.filter( p => p.id % 3 === 0);
    console.log("Pokemon with ID evenly divisible by three: ");
    console.log(divByThreeIds);

    // an array of pokémon objects that are "fire" type
    const fireTypes = pokémon.filter( p => p.types.includes("fire"));
    console.log("Pokemon that are 'fire' type:");
    console.log(fireTypes);

    // an array of pokémon objects that have more than one type
    const multiTypes = pokémon.filter( p => p.types[1] != null);
    console.log("Pokemon that have more than one type: ");
    console.log(multiTypes);

    // an array with just the names of the pokémon
    const pokemonNames = pokémon.map( p => p.name);
    console.log("The names of the pokemon are:");
    console.log(pokemonNames);


    // an array with just the names of pokémon with an id greater than 99
    const above99ids = pokémon.filter( p => p.id > 99);
    console.log("Pokemon with ids greater than 99:");
    console.log(above99ids);

    // an array with just the names of the pokémon whose only type is poison
    const poisonTypes = pokémon.filter( p => p.types[0] == "poison" && p.types[1] == null);
    console.log("Pokemon whose only type is poison:");
    console.log(poisonTypes);

    // an array containing just the first type of all the pokémon whose second type is "flying"
    const flyingSecondTypes = pokémon.filter( p => p.types[1] == "flying");
    console.log("Pokemon whose second type is flying:");
    console.log(flyingSecondTypes);

    // a count of the number of pokémon that are "normal" type
    let count = 0;
    const numOfNorms = pokémon.filter( p => p.types.includes("normal")).map( count => count++ );
    console.log("Number of pokemon that are 'normal' type: ");
    console.log(numOfNorms);