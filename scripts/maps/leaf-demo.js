// See post: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/


var locations = [
  ["Jelbi Mitte", 52.5200, 13.4050], 
  ["Jelbi Britzer Garten", 52.4300, 13.4150],
  ["Jelbi Charlottenburg", 52.5100, 13.3250],
  ["Jelib Neuköln", 52.4800, 13.4350],
  ["Jelbi Pankow", 52.5600, 13.4205],
  ["Jelbi Tempelhof", 52.4600, 13.3850],
  ["Jelbi Köpenick", 52.4610, 13.5850],
  ["Jelbi Wedding", 52.5500, 13.3350],
  ["Jelbi Steglitz", 52.4550, 13.3350],
  ["Jelbi Ahrensfelde", 52.5600, 13.5605],
  ["Jelbi Lichtenberg", 52.52, 13.5],
  ["Jelbi Potsdamer Platz", 52.51, 13.38],
  ["Jelbi Adlershof", 52.44, 13.55]
];

var map = L.map('map', {
  center: [52.5200, 13.4050],
  minZoom: 2,
  zoom: 10.35,
})

/*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)
*/


// layers on map


const basemaps = {
  StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',   {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
  Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?',   {layers: 'TOPO-WMS'}),
  Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'}),
  Darkmode: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  })
};

L.control.layers(basemaps).addTo(map);
basemaps.StreetView.addTo(map);



// to change icon image 
/*var myURL = jQuery('script[src$="leaf-demo.js"]')
  .attr('src')
  .replace('leaf-demo.js', '')



var myIcon = L.icon({
  iconUrl: myURL +  'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
})

for (var i = 0; i < markers.length; ++i) {
  L.marker([markers[i].lat, markers[i].lng], { icon: myIcon })
    .bindPopup(
      '<a href="' +
        '" target="_blank">' +
        markers[i].name +
        '</a>'
    )
    .addTo(map)
}*/


//leaflet search option



function onClick(e){
  console.log(e.latlng)
}

for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(locations[i][0])
    .addTo(map).on('click',onClick);
}