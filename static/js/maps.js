var map;
var service;
var infowindow;

function initMap() { 
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: {
        lat: 52.160216,
        lng: 5.195168
    }
  });  
  service = new google.maps.places.PlacesService(map);
  infowindow = new google.maps.InfoWindow();
  
  var queries = [
    {
      label: 'De Pont Museum of Contemporary Art',
      fields: ['name', 'formatted_address', 'geometry'],
      contributors: 'Sanne'
    },
    {
      label: 'Einkhuizen',
      fields: ['name', 'formatted_address', 'geometry'],
      contributors: 'Tessa'
    },
        {
      label: 'Corversbos Nature Reserve',
      fields: ['name', 'formatted_address', 'geometry'],
      contributors: 'Ginger'
    }
  ];

  queries.forEach(function(item, i){

    var request = {
      query: item.label,
      fields: ['name', 'formatted_address', 'geometry'],
    };

    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
       
        for (var j = 0; j < results.length; j++) {
          createMarker(results[j], queries[i]);
        }
        
        // TODO: Check last iteration and only do this for the last request
        map.setCenter(results[0].geometry.location);  
      }
    });  
  });
};

function createMarker(place, queryValues) {
  if (!place.geometry || !place.geometry.location) return;
    
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });
    
  google.maps.event.addListener(marker, "click", () => {

    var content = document.createElement("div");
    
    var nameElement = document.createElement("h6");
    nameElement.textContent = queryValues.label;
    content.appendChild(nameElement);

    var placeAddressElement = document.createElement("p");
    placeAddressElement.textContent = place.formatted_address;
    content.appendChild(placeAddressElement);

    var contributorsElement = document.createElement("p");
    contributorsElement.textContent = queryValues.contributors;
    content.appendChild(contributorsElement);

    infowindow.setContent(content);
    infowindow.open(map, marker);

  });
}