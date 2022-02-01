const nature = document.getElementById("nature");
const culture = document.getElementById("culture");
const hiddenGems = document.getElementById("hidden-gems");
const lekkers = document.getElementById("lekkers");

nature.onclick = function(){
    initMap(natureQueries)
}

culture.onclick = function(){
    initMap(cultureQueries)
}

hiddenGems.onclick = function(){
    initMap(hiddenGemsQueries)
}

lekkers.onclick = function(){
    initMap(lekkersQueries)
}

const natureQueries = [
    {
        label: 'Corversbos Nature Reserve',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Ginger',
        description: "The Corversbos, the woods near my house. During Covid lockdowns & isolation I've been able to walk here nearly every day. The beauty of the trees has been a wonderful consolation and mood-lifter. Occasionally I even see small deer."
    },
    {
        label: 'Castricum Beach',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Heleen',
        description: "A short train ride from Amsterdam, you exit at train station Castricum. From here it is a lovely (1 hour) walk through the forest and dunes to the beach. It is much quieter than some other beaches near Amsterdam, and during your walk you will encounter lovely highland cows."
    }
  ];

  const cultureQueries = [
    {
        label: 'De Pont Museum of Contemporary Art',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Sanne',
        description: "The place where my love for museums started!"
    },
    {
        label: 'Depot Boijmans Van Beuningen',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Cora',
        description: "I’m so proud of Rotterdam, and this is a very special building, the newest in the City, and unique in the world. In the mirrors of the building you can see the sky-line of the city, everyday in a different way. Be my guest at my place when you decide to visit Rotterdam."
    }
  ];

  const hiddenGemsQueries = [
    {
        label: 'Einkhuizen',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Tessa',
        description: "Enkhuizen in Noord-Holland, the town as a whole, the VVV wandeling and the Zuiderzeemuseum which is an amazing insight into historical daily life in the region – its touristy so pick your day wisely, it’ll be worth it!"
    },
  ];

  const lekkersQueries = [
    {
        label: 'Café Public Space',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Laura Urbo',
        description: "It's very Nordic in its design and modern in its approach to food. Chill vibes, good coffee and a nice location to visit after Eye Museum or taking a walk along the river."
    },
  ];

