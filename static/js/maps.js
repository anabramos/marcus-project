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

/*    
    service.getDetails(request, (place, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
        });
  

      }
    });

/*
    var locations = [
        ['De Pont Museum of Contemporary Art', 51.5673399, 5.0719551,17],
        ['Santa Monica', 34.024212, -118.496475],
        ['Redondo Beach', 33.849182, -118.388405],
        ['Newport Beach', 33.628342, -117.927933],
        ['Long Beach', 33.770050, -118.193739]
      ];
    
    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
      }


    /* 
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
*/