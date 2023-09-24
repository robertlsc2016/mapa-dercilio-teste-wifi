var map = L.map("map").setView([-15.595631, -56.092613], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

fetch("api.json")
    .then((res) => res.json())
    .then((data) => {
        const WifiPositions = data;

        WifiPositions.map((wifi) => {

            const long = wifi.lastlon
            const lat = wifi.lastlat

            L.marker([lat, long])
                .addTo(map)
                .bindPopup(`SSID: <b>${wifi.ssid}</b> <br> PassWord: <b>${wifi.password}</b>`)
                .openPopup();
        });
    });

// lat - x
//long - y
