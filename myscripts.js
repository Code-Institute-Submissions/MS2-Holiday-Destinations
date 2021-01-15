function initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: { 
                    lat: -28.024, 
                    lng: 140.887 
                },
            });
            //----------------------------------------------------------------------------
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            
            var locations =  [
                { lat: -31.56391, lng: 147.154312 },
                { lat: -33.718234, lng: 150.363181 },
                { lat: -33.727111, lng: 150.371124 }
            ]

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                })
            })
            new MarkerClusterer(map, markers, {
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
            });
        }