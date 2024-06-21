function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
    });

    // Пример маркеров на карте
    const locations = [
        { lat: 55.835963, lng: -37.631206, title: "Location 1" },
        { lat: 34.0522, lng: -118.2437, title: "Location 2" },
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map: map,
            title: location.title,
        });
    });
}