mymapdata = [{
    coordinates: [-97.7436995, 30.2711286],
    name: 'Austin, TX',
}, 
{
    coordinates: [-98.4951405, 29.4246002],
    name: 'San Antonio, TX',
},
{
    coordinates: [-100.894078, 34.3939184],
    name: 'Turkey, TX' ,
},
{
    coordinates: [-96.7968559, 32.7762719 ],
    name: 'Dallas, TX',
},
{
    coordinates: [-101.833824, 35.2072185] ,
    name: 'Amarillo, TX',
},
{
    coordinates: [-102.4252734, 35.24603],
    name: 'Vega, TX',
},
{
    coordinates: [-118.242766, 34.0536909],
    name: 'Los Angeles, CA',
},
{
    coordinates: [-119.0194639, 35.3738712],
    name: 'Bakersfield, CA',
},
{
    coordinates: [-120.672394, 35.1552532],
    name: 'Shell Beach, CA',
},
{
    coordinates: [-117.64193, 33.440959],
    name: 'San Clamente, CA',
},
{
    coordinates: [-90.0517638, 35.1460249],
    name: 'Memphis, TN',
},
{
    coordinates: [-155.9966428, 19.6472213],
    name: 'Kona, HI',
},
{
    coordinates: [-77.0470229, 38.8051095],
    name: 'Alexandria, VA', 
}]



let map = new mapboxgl.Map({
    container: 'map',
    center: [-96.61612652744518, 39.63942888220499],
    // center: [-123.1121, 49.2569],
    zoom: 3,
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1Ijoic3JvcmdkZW4iLCJhIjoiY2xwaHB3bDR4MDVtcjJxcGR1OTQzdThldiJ9.bPrHStDX8YHTzTIOiD65XQ'
});
// Zoom map controls
// map.addControl(new mapboxgl.NavigationControl());

for (const marker of mymapdata) {
    const el = document.createElement('div');
    // const width = marker.properties.iconSize[0];
    // const height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.style.background = `url(cowpin.png) no-repeat`;
    el.style.width = '60px';
    el.style.height = '60px';
    el.style.backgroundSize = '100%';

    new mapboxgl.Marker(el)
        .setLngLat(marker.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<div>${marker.name}<img src="cowmap.png" /></div>`))
        .addTo(map);
}