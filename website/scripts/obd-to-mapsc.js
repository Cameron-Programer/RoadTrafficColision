// This script converts Open Data (ODB) data into markers  via leaflet

// This was partly created following the guidance from https://github.com/Leaflet/Leaflet.markercluster?tab=readme-ov-file#usage

function OdbToMap(json) {
    console.log("Odb to map script has started")
    let ownURL = document.URL;
    console.log(ownURL);
    let markers = new L.MarkerClusterGroup();
    for (var i = 0; i != json["features"].length; i++) {

        let marker = L.marker([json["features"][i.toString()]["geometry"]["coordinates"]["1"], json["features"][i.toString()]["geometry"]["coordinates"]["0"]]);
        marker.bindPopup(("Severity Description: " + (json["features"][i]["properties"]["SEVERITY_DESCRIPTION"]).toString()
            + "<br>Description: " + (json["features"][i]["properties"]["ACCIDENT_DESCRIPTION"]).toString()
            + "<br>Render: " + (json["features"][i]["properties"]["RENDER"]).toString()
            + "<br>Casualties: " + (json["features"][i]["properties"]["CASUALTIES"]).toString()
            + "<br>Accident Type: " + (json["features"][i]["properties"]["ACCIDENT_TYPE"]).toString()
            + "<br>Severity: " + (json["features"][i]["properties"]["SEVERITY"]).toString()));

        markers.addLayer(marker);
    }
    map.addLayer(markers);
    console.log("Success!")
    return (true)
}