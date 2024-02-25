function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "844b353f55abd55d",
      center: { lat: 48.85, lng: 2.35 },
      zoom: 12,
    });
  }
  window.initMap = initMap;