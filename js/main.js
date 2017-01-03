// var location1 = [51.505, -0.09];
var location1 = [40.415363, -3.707398];
var location2 = [40.730610, -73.935242];

var map1 = L.map('map1').setView(location1, 6);
var map2 = L.map('map2').setView(location2, 6);

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

L.tileLayer(osmUrl, {
    attribution: osmAttrib,
    minZoom: 4, maxZoom: 12,
}).addTo(map1);
var marker1 = L.marker(location1).addTo(map1);
L.Polyline.Arc(location1, location2).addTo(map1);

L.tileLayer(osmUrl, {
    attribution: osmAttrib,
    minZoom: 4, maxZoom: 12,
}).addTo(map2);
var marker2 = L.marker(location2).addTo(map2);
L.Polyline.Arc(location1, location2).addTo(map2);
map2.on('zoomend', function() {
    map1.setZoom(map2.getZoom());
});

