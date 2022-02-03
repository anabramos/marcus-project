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
        label: 'Castricum Beach',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Heleen & Dilara',
        description: "A short train ride from Amsterdam, you exit at train station Castricum. From here it is a lovely (1 hour) walk through the forest and dunes to the beach. It is much quieter than some other beaches near Amsterdam, and during your walk you will encounter lovely highland cows.(Heleen) I like Castricum aan Zee, because it has a beautiful beach and it’s a place where I can clear my head while listening to the waves.(Dilara)"
    },
    {
        label: 'De Alde Feanen National Park',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Hélène',
        description: "Beautiful for a boating day or cycling/walking around."
    },
    {
        label: 'Elswout',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Fariba',
        description: "This is one of my favorite spots for Marcus!"
    },
    {
        label: 'Corversbos Nature Reserve',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Ginger',
        description: "The Corversbos, the woods near my house. During Covid lockdowns & isolation I've been able to walk here nearly every day. The beauty of the trees has been a wonderful consolation and mood-lifter. Occasionally I even see small deer."
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
    },    
    {
        label: 'Peace Palace The Hague',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Vanessa',
        description: "My favourite place - cultural heritage speaking. An important landmark for a city that wants to be seen as the centre for Peace and Justice."
    },
    {
        label: 'Korzo Theater',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Vanessa',
        description: "My second home is Korzo Theatre in The Hague. The Hague is also a place that wants to be the European hub for dance, and Korzo has always been a very experimental place that allows 'amateur' dancers (as myself) to support choreographers in their work."
    },
    {
        label: 'Escher in Het Paleis',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Olga',
        description: "Pretty impressive art in here, kinda stays with you way after the visit."
    },
    {
        label: 'Rijksmuseum Muiderslot',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Martine',
        description: "One of the oldest castles in the Netherlands (from around 1260) which offers a tour through the  history of the castle in the Middle Ages and the 17th century. Every weekend there's a special program, often with music, tours through the gardens and gourmet tastings. In summer you can also hire a sup and make a tour on the water whoch surrounds the castle."
    },
    {
        label: 'Museum Voorlinden',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Mette',
        description: "It is wonderful museum that always has beautiful strong and highly accessible exhibitions! There is also a beautiful garden by famous garden designer Piet Oudolf that is adds even more appeal to the museum."
    },
    {
        label: 'Textiel Museum Tilburg',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Heleen',
        description: "Tilburg is a city in the south of the Netherlands, perfect for a day or weekend stay. Highlights are the Textile Museum, and De Pont Museum. It is also a very old city that has existed in some form since the 8th century."
    },
    {
        label: 'Kroller Muller Museum',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Ana & Tessa',
        description: "Nowhere else in the Netherlands you can get as close to a Van Gogh painting without having 50 tourists pushing you around. Also big highligh of this museum is their sculpture garden in the middle of the Veluwe National Park. Bikes are available at the entrance."
    },
    {
        label: 'Batavierhuis Rotterdam',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Victoria',
        description: "Batavierhuis is an art residency for musicians based in Rotterdam. Every single week you have the chance of seeing fantastic musicians performing at this charming house for a fair price. The music is not the only good thing. As the place is run by the artists themselves, the atmosphere is super light and friendly. I had the chance of meeting amazing people there and, as a music lover yourself, I am sure you would follow the same path :). Besides that, Batavierhuis is super close to my own house! So, it is two programmes in one as you are more than welcome to come for a good Brazilian coffee."
    }
  ];

  const hiddenGemsQueries = [
    {
        label: 'Begijnhofkapel',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Bertan',
        description: "Probably one of my favorite places to take tourists. This is a small oasis in the middle of Amsterdam. It used to be a convict for Nuns. To this day only women are permitted to live there. There is a really cute church and chapel in the middle. The place hosts one of the oldest standing houses in Amsterdam. One of the first places I saw when I moved to Amsterdam which just felt so magical and special. Really gives you the quintessential Amsterdam vibe."
    },
    {
        label: 'Pension Homeland',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Bertan',
        description: "This is a great place to go swimming in the summer. A great way to start off the day before going to the office in the summer. This is a very gay friendly beach in the middle of the city. Its like a catwalk for guys in speedos."
    },
    {
        label: 'Standhotel Terschelling',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Mechtild',
        description: "It is really a secret. But you have to accept shared bathrooms but only per 2 rooms. It is such a lovely hotel and such a nice atmosphere. But it is not posh. And is very close to the beach and has a lovely restaurant. Go there!"
    },
    {
        label: 'Villa Augustus ',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Mette',
        description: "Gorgeous place where you can stay the night but where you can also have a lovely meal, there is great seafood and a gorgeous garden and they sell great gifts and yummy things to take home with you. Totally worth a visit especially in spring or summer!"
    },
    {
        label: 'Oudemanhuispoort Book Passage',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Laura Alexander',
        description: "It’s a passage running all the way through a 17th century building in the city center, full of stalls selling second hand and vintage books (in Dutch, English and various other languages), as well art prints and sheet music. Each of the stalls opens into a little room with shelves up to the ceiling, so you can spend as long as you like rummaging on top of a precarious ladder. The building was originally an almshouse and is now part of the University of Amsterdam. And if you’d like a borrel after, Kapitein Zeppos is a colourful café tucked away down a little alley round the corner."
    },
    {
        label: 'Mezrab - House of Stories',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Victoria',
        description: "This place reminds me of why I moved to the Netherlands. At Mezhab, you can meet different people and see all the kinds of performances from individuals from all over the world. It is a special spot in Amsterdam that broadens your perspective about things, where different cultures meet and dialogue. The storytelling nights are fantastic! Don't forget to try the traditional lentil soup and the delicious Iranian ice cream."
    },
    {
        label: 'Panorama Mesdag',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Evelyn',
        description: "Come and see another city for a change and go to the Hague, visit Panorama Mesdag. Give me a call, and I give you both a tour and explanation about this very special, huge painting. It takes only 30 minutes and a cup coffee (or something else). After that you can go to the Kunstmuseum or go via Noordwijk beach (for drinks and dinner with sunset) back home."
    },
    {
        label: 'Einkhuizen',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Tessa',
        description: "Enkhuizen in Noord-Holland, the town as a whole, the VVV wandeling and the Zuiderzeemuseum which is an amazing insight into historical daily life in the region – its touristy so pick your day wisely, it’ll be worth it!"
    },
    {
        label: 'IJ Hallen',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Ana',
        description: "Once per month, during a weekend, the NDSM Wharf is taken by the biggest fleamarket of Europe. Filled with collector items, furtnitures, clothing, it is a great place to go shopping or just for a weekend visit. Bring your haggle abilities and you may end up scoring some goods for little monies."
    },

  ];

  const lekkersQueries = [
    {
        label: 'Café Public Space',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Laura Urbo',
        description: "It's very Nordic in its design and modern in its approach to food. Chill vibes, good coffee and a nice location to visit after Eye Museum or taking a walk along the river."
    },
    {
        label: 'Vuurtoreneiland',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Bertan',
        description: "This is one of the best places to go with Terrance when you get here. It is a restaurant on a very small island off Amsterdam. You get there by boat. On the boar ride there they serve you cava and bites. And when you get there the food is amazing, especially the wine. My friends took me here the first time and I loved it. Then I took my boyfriend when we started dating, and might be a big reason why he loves me to this day."
    },
    {
        label: 'Wynand Fockink Proeflokaal and Spirits',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Bertan',
        description: "This is a hidden gem of Amsterdam. It’s the ultimate experience in the center of the city, but totally unknown and invisible to the hordes of tourists. A historic 17th-century liquor store & tasting room selling liqueur & Jenever in an old world setting. I am a very regular visitor in the summers. Especially on weekend afternoons, or on a Friday after work."
    },
    {
        label: 'Club Zand',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Dilara',
        description: "My favorite spot for winter beach walks is Castricum aan Zee. During the lockdown they had a very nice bar at the beach with take away food and drinks."
    },
    {
        label: 'Haagse Markt',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Mette',
        description: "Biggest food market with sooo many goodies and very affordable fruit and veg from all over the world."
    },
    {
        label: 'Pelgrim Rotterdam',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Victoria',
        description: "Pelgrim is a traditional brewery at the heart of Delsfhaven - the oldest neighbourhood in Rotterdam. The atmosphere and the beers are great! If it is not raining or too cold, I would highly recommend sitting outside by the canal."
    },    
    {
        label: 'Café Noorderlicht',
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Hélène',
        description: "The vibe is really nice, they used to make bonfires outside and play live music – I don’t know how it is now though, hope the fun will start again soon! Getting there by boat only is already a treat – free ferry departing behind Centraal Station. And you cannot beat the view on the IJ – except for it neighbor Pllek, also a nice one."
    },
    {
        label: "Restaurant 't Zwaantje",
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Tessa',
        description: "This is one of the very few remaining traditional Dutch restaurants in Amsterdam, the food is hearty and comforting and the decor hasn't changed in at least 60 years. It basically doesn't get more Amsterdam-ish than this, so it's a must for getting to know your new home better!"
    },
    {
        label: "Noordermarkt",
        fields: ['name', 'formatted_address', 'geometry'],
        contributors: 'Tessa & Sanne',
        description: "The Saturday market at the Noordermarkt is a Jordaan staple, you can buy anything from flowers to fruits, fish, cheeses and loads of old bits and bobs. You'll find us here almost every week, having coffee and croissants at Kat in de Wijngaert - so feel free to join us there some time!"
    },
    
  ];

