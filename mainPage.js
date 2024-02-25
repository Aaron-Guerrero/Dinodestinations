let map;
let service;
let infowindow;


function initMap() {
    const defaultLocation = { lat: -34.397, lng: 150.644 }; // Default location
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: defaultLocation,
    });
    infowindow = new google.maps.InfoWindow();
}


function searchMuseums() {
  const city = document.getElementById("city").value;
  window.location.href = `resultPage.html?city=${encodeURIComponent(city)}`;
}

function createMarker(place) {
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
    });
    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name);
        infowindow.open(map, marker);
    });
}
