/*
code taken from google places api, but modified, credits to
https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#maps_places_autocomplete_hotelsearch-javascript
*/

/*
variables declared outside all functions, countries information included in object from CONST countries
*/ 
    let map;
    let places;
    let infoWindow;
    let markers = [];
    let autocomplete;
    const COUNTRY_RESTRICT = { country: "us" };
    const MARKER_PATH = "https://developers.google.com/maps/documentation/javascript/images/marker_green";
    const HOST_NAME_REG_EXP = new RegExp("^https?://.+?/");
    const COUNTRIES = {
        au: {
          center: { lat: -25.3, lng: 133.8 },
          zoom: 4,
          flagUrl: "assets/imgs/australia.png",
        },
        br: {
          center: { lat: -14.2, lng: -51.9 },
          zoom: 3,
          flagUrl: "assets/imgs/brazil.png",
        },
        ca: {
          center: { lat: 62, lng: -110.0 },
          zoom: 3,
          flagUrl: "assets/imgs/canada.png",
        },
        fr: {
          center: { lat: 46.2, lng: 2.2 },
          zoom: 5,
          flagUrl: "assets/imgs/france.png",
        },
        de: {
          center: { lat: 51.2, lng: 10.4 },
          zoom: 5,
          flagUrl: "assets/imgs/germany.png",
        },
        mx: {
          center: { lat: 23.6, lng: -102.5 },
          zoom: 4,
          flagUrl: "assets/imgs/mexico.png",
        },
        nz: {
          center: { lat: -40.9, lng: 174.9 },
          zoom: 5,
          flagUrl: "assets/imgs/new_zealand.png",
        },
        it: {
          center: { lat: 41.9, lng: 12.6 },
          zoom: 5,
          flagUrl: "assets/imgs/italy.png",
        },
        za: {
          center: { lat: -30.6, lng: 22.9 },
          zoom: 5,
          flagUrl: "assets/imgs/south_africa.png",
        },
        es: {
          center: { lat: 40.5, lng: -3.7 },
          zoom: 5,
          flagUrl: "assets/imgs/spain.png",
        },
        pt: {
          center: { lat: 39.4, lng: -8.2 },
          zoom: 6,
          flagUrl: "assets/imgs/portugal.png",
        },
        us: {
          center: { lat: 37.1, lng: -95.7 },
          zoom: 3,
          flagUrl: "assets/imgs/usa.png",
        },
        uk: {
          center: { lat: 54.8, lng: -4.6 },
          zoom: 5,
          flagUrl: "assets/imgs/uk.png",
        },
      };

/* 
This init map function creates the map.
Additionaly it creates the autocomplete object and restrict the search to the default country, and to type "cities"
In the end, the setAutocompleteCountry function is called.
*/
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: COUNTRIES["us"].zoom,
            center: COUNTRIES["us"].center,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            streetViewControl: false,
        });
        infoWindow = new google.maps.InfoWindow({
            content: document.getElementById("info-content"),
        });
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),
            {
                types: ["(cities)"],
                componentRestrictions: COUNTRY_RESTRICT,
            }
        );
        places = new google.maps.places.PlacesService(map);
        autocomplete.addListener("place_changed", onPlaceChanged);
        document.getElementById("country").addEventListener("change", setAutocompleteCountry);
    }

/*  
The onPlaceChanged function allows the user to select a city through input and gets the place details and zooms the map. 
*/
    function onPlaceChanged() {
        const PLACE = autocomplete.getPlace();

        if (PLACE.geometry) {
            map.panTo(PLACE.geometry.location);
            map.setZoom(15);
            search();
        } else {
            document.getElementById("autocomplete").placeholder = "Enter a city";
        }
    }

/* 
The search function will showcase present hotels inside the current zoomed in map.
Markers are created for each hotel in the specified location and be assigned a letter from A-Z, depending on how many there are for clarity.
For increased visibility, when intially selecting/searching for a city, the markers, which are green, specified in the const MARKER_PATH, 
show up incrementally, animated.
Clicking on a marker will then bring up details.
*/
    function search() {
        const SEARCH = {
            bounds: map.getBounds(),
            types: ["lodging"],
        };
        places.nearbySearch(SEARCH, (results, status, pagination) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    const MARKER_LETTER = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                    const MARKER_ICON = MARKER_PATH + MARKER_LETTER + ".png";
                
                    markers[i] = new google.maps.Marker({
                        position: results[i].geometry.location,
                        animation: google.maps.Animation.DROP,
                        icon: MARKER_ICON,
                    });
                
                    markers[i].placeResult = results[i];
                    google.maps.event.addListener(
                        markers[i],
                        "click",
                        showInfoWindow
                    );
                    setTimeout(dropMarker(i), i * 100);
                }
            }
        });
    }

/* 
the setAutocompleteCountry function, which was allso called earlier will zoom and center the map on selected country.
*/
    function setAutocompleteCountry() {
        const COUNTRY = document.getElementById("country").value;

        if (COUNTRY == "all") {
            autocomplete.setComponentRestrictions({ COUNTRY: [] });
            map.setCenter({ lat: 15, lng: 0 });
            map.setZoom(2);
            $(".card-img-top").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg");
        } else {
            autocomplete.setComponentRestrictions({ country: COUNTRY });
            map.setCenter(COUNTRIES[COUNTRY].center);
            map.setZoom(COUNTRIES[COUNTRY].zoom);
        }
        $(".card-img-top").attr("src", COUNTRIES[COUNTRY].flagUrl);
    }

/* 
the dropMarker function
*/
    function dropMarker(i) {
        return function () {
            markers[i].setMap(map);
        };
    }
      
/*
the showInfoWindow function will display the details of a selected hotel in an info window, which is label shown when clicking on the marker
*/
    function showInfoWindow() {
        const MARKER = this;
        clearCard();
        places.getDetails(
            { 
                placeId: MARKER.placeResult.place_id 
            },
            (place, status) => {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                    return;
                }
                infoWindow.open(map, MARKER);
                buildIWContent(place);
            }
        );
    }

/*
the details used by the infowindow are loaded into html elements in this buildIwContent function.
The star symbol uses the &#11088 unciode decimal code for given stas, and &#10025 for the unachieved stars rating.
Additionally, the regexp will display the url in the info window.
*/
    function buildIWContent(place) {
        document.getElementById("iw-url").innerHTML = '<b><a href="' + place.url + '" target="_blank">' + place.name + "</a></b>";
        document.getElementById("iw-address").textContent = place.vicinity;
        $("#destinationId").val(place.vicinity);
        document.getElementById("iw-url1").innerHTML = '<b><a href="' + place.url + '" target="_blank">' + place.name + "</a></b>";
        document.getElementById("iw-address1").textContent = place.vicinity;

        if (place.formatted_phone_number) {
            document.getElementById("iw-phone-row").style.display = "";
            document.getElementById("iw-phone").textContent = place.formatted_phone_number;
            document.getElementById("iw-phone1").textContent = place.formatted_phone_number;
        } else {
            document.getElementById("iw-phone-row").style.display = "none";
        }

        if (place.rating) {
            let ratingHtml = "";

            for (let i = 0; i < 5; i++) {
                if (place.rating < i + 0.5) {
                    ratingHtml += "&#10025;";
                } else {
                    ratingHtml += "&#11088;";
                }
                document.getElementById("iw-rating-row").style.display = "";
                document.getElementById("iw-rating").innerHTML = ratingHtml;
                document.getElementById("iw-rating1").innerHTML = ratingHtml;
            }
        } else {
            document.getElementById("iw-rating-row").style.display = "none";
        }

        if (place.website) {
            let fullUrl = place.website;
            let website = String(HOST_NAME_REG_EXP.exec(place.website));

            if (!website) {
                website = "http://" + place.website + "/";
                fullUrl = website;
            }
        } 
    }

/*
clears the city search when a different country is selected
*/
    document.getElementById('country').addEventListener("change", function() {
        document.getElementById('autocomplete').value = '';
        clearCard();
    });

/*
clears card when selecting a different hotel, country, or city
*/
    function clearCard() {
        $("#iw-address").empty();
        $("#iw-url").empty();
        $("#iw-rating").empty();
        $("#iw-phone").empty();
    }



