var map1 = L.map('map1').setView([51.505, -0.09], 8);
var map2 = L.map('map2').setView([51.505, -0.09], 9);

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

L.tileLayer(osmUrl, {
    attribution: osmAttrib,
    minZoom: 8, maxZoom: 12,
}).addTo(map1);

L.tileLayer(osmUrl, {
    attribution: osmAttrib,
    minZoom: 8, maxZoom: 12,
}).addTo(map2);

