
const map = L.map('mapid').setView([-5.7926641,-35.3295577], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


const icon = L.icon({
   iconUrl: "./public/images/map-marker.svg",
   iconSize:[58, 68],
   iconAnchor:[29, 68], 
   popupAnchor:[170, 2],
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240

}).setContent('Casa Abrigo <a href="orphanage.html?id=1" class= "choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

L
    .marker([-5.7926641,-35.3295577], { icon })
    .addTo(map)
    .bindPopup(popup);