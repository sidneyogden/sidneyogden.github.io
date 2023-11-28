mymapdata = [{
    coordinates: [-97.7436995, 30.2711286],
    name: 'Austin, TX',
}, 
{
    coordinates: [-98.4951405, 29.4246002],
    name: 'San Antonio, TX',
},
{
    coordinates: [34.3939184, -100.894078],
    name: 'Turkey, TX' ,
},
{
    coordinates: [32.7762719, -96.7968559],
    name: 'Dallas, TX',
},
{
    coordinates: [235.2072185, -101.833824],
    name: 'Amarillo, TX',
},
{
    coordinates: [35.24603, -102.4252734],
    name: 'Vega, TX',
},
{
    coordinates: [34.0536909, -118.242766],
    name: 'Los Angeles, CA',
},
{
    coordinates: [35.3738712,-119.0194639],
    name: 'Bakersfield, CA',
},
{
    coordinates: [35.1552532, -120.672394],
    name: 'Shell Beach, CA',
},
{
    coordinates: [33.440959, -117.64193],
    name: 'San Clamente, CA',
},
{
    coordinates: [35.1460249, -90.0517638],
    name: 'Memphis, TN',
},
{
    coordinates: [19.6472213, -155.9966428],
    name: 'Kona, HI',
},
{
    coordinates: [38.8051095, -77.0470229],
    name: 'Alexandria, VA', 
}]



let map = new mapboxgl.Map({
    container: 'map',
    center: [-96.61612652744518, 39.63942888220499],
    // center: [-123.1121, 49.2569],
    zoom: 3,
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1Ijoic3JvcmdkZW4iLCJhIjoiY2xwZWNkN2tkMTIyMzJqcHBzaXI5d29lbyJ9.XCVx14nL0V5QBJHUmB3ZTg'
});
// Zoom map controls
// map.addControl(new mapboxgl.NavigationControl());

for (const marker of mymapdata) {
    const el = document.createElement('div');
    // const width = marker.properties.iconSize[0];
    // const height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.style.background = `url(cowmap.png) no-repeat`;
    el.style.width = '60px';
    el.style.height = '60px';
    el.style.backgroundSize = '100%';

    new mapboxgl.Marker(el)
        .setLngLat(marker.coordinates)
        .addTo(map);
}