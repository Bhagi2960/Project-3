var map = L.map('map').setView([36.7783, -119.4179], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// creating container for the markers
let markers = L.layerGroup();
markers.addTo(map);

const renderMarkers = async type => {

    // filtering data based on type.
    let data = await d3.json('/api/v1.0/data');
    let filterData = type == 'All' ? data : data.filter(obj=>obj.station_type==type);

    // clear markers before populating again
    markers.clearLayers();

    filterData.forEach(obj => {
        let lat = obj.latitude;
        let lon = obj.longitude;
        let county = obj.County;
        let name = obj.station_name;
        let stationType = obj.station_type;

        L.circleMarker([lat,lon], {
            color:'white',
            fillColor: 
                stationType == 'Surface Water' ? '#1fbad6' :
                stationType == 'Groundwater' ? 'violet' :
                stationType == 'Not known' ? 'yellow' :
                stationType == 'Water Quality' ? 'green' : 'teal',
            fillOpacity: 1,
            weight: 1
        }).addTo(markers).bindPopup(`
                <h4>
                    Type: ${stationType}<br>
                    Name: ${name}<br>
                    County: ${county}
                </h4>`);
    });

    

};

//d3.selectAll("#types").on("change", filterData);
const init = async () => {
    
    data = await d3.json('/api/v1.0/data');
    
    // Station Types
    let types = ['All', ... new Set(data.map(obj=>obj.station_type))];
    
    types.forEach(type => {
        d3.select('#types').append('option').text(type)
    });


    renderMarkers(types[0]);

    console.log(data);
    
}

init();