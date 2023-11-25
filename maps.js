let map = new mapboxgl.Map({
    container: 'map',
    center: [-123.1121, 49.2569],
    zoom: 10,
    style:
    'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoic3JvcmdkZW4iLCJhIjoiY2xwZWNkN2tkMTIyMzJqcHBzaXI5d29lbyJ9.XCVx14nL0V5QBJHUmB3ZTg'
});

map.addControl(
    new mapboxgl.NavigationControl());