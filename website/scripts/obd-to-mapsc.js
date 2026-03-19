// This script converts Open Data (ODB) data into markers  via leaflet

// This was partly created following the guidance from https://github.com/Leaflet/Leaflet.markercluster?tab=readme-ov-file#usage

function OdbToMap(json) {
    console.log("Odb to map script has started")
    let markers = new L.MarkerClusterGroup();
    for (var i = 0; i != json["features"].length; i++) {
        let render = (json["features"][i]["properties"]["RENDER"]).toString()
        let url = "";

        if (render === "CARS"){
        url = "images/mapMarkers/cars.png";
        } else if (render === "MCYC"){
            url = "images/mapMarkers/mcyc.png";
        }else if(render === "CYC"){
            url = "images/mapMarkers/cyc.png";
        }else if(render === "A"){
            url = "images/mapMarkers/a.png";
        }else if(render === "C"){
            url = "images/mapMarkers/c.png";
        }else if(render === "E"){
            url = "images/mapMarkers/e.png";
        }else{
            url = "images/mapMarkers/un.png";
        }

        let customIcon = L.icon({
            iconUrl: url,
            iconSize: [24, 24]
        })
        let marker = L.marker([json["features"][i.toString()]["geometry"]["coordinates"]["1"], json["features"][i.toString()]["geometry"]["coordinates"]["0"]],{icon:customIcon});
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