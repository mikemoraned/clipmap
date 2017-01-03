// var location1 = [51.505, -0.09];
var location1 = [40.415363, -3.707398];
var location2 = [40.730610, -73.935242];
var destinations = [
    location1,
    [38.919144, -6.340805],
    [43.312691, -1.993332],
    [41.390205, 2.154007],
    [42.878212, -8.544844],
    [43.262985, -2.935013],
    [40.426044, -3.565165],
    [40.942902, -4.108807],
    [37.339676, -5.841805],
    [43.362343, -8.411540],
    [40.304665, -3.723679],
];

function addAll(map, origin, destinations) {
    L.marker(origin).addTo(map);
    L.Polyline.Arc(origin, destinations[0]).addTo(map);
    destinations.forEach(function(destination){
        L.marker(destination).addTo(map);
    });
}

var map1 = L.map('map1').setView(location1, 6);
var map2 = L.map('map2').setView(location2, 6);

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

L.tileLayer(osmUrl, {
    attribution: osmAttrib,
    minZoom: 4, maxZoom: 12,
}).addTo(map1);
addAll(map1, location2, destinations);

L.tileLayer(osmUrl, {
    attribution: osmAttrib,
    minZoom: 4, maxZoom: 12,
}).addTo(map2);
addAll(map2, location2, destinations);

map2.on('zoomend', function() {
    map1.setZoom(map2.getZoom());
});

