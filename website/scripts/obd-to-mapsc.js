// This script converts Open Data (ODB) data into markers  via leaflet

function OdbToMap(json) {
    console.log("Odb to map script has started")
    let ownURL = document.URL;
    let search = new URLSearchParams(ownURL);
    console.log(search.values());

    for (var i = 0; i != json["features"].length; i++) {
        //console.log(i.toString())
        //console.log(json["features"][i]["properties"][])
        //console.log((json["features"][i]["properties"]["SEVERITY"]));
        //console.log((search.get("Severity")));
        //if ((json["features"][i]["properties"]["SEVERITY"]) == (search.get("Severity")) | (search.get("Severity")) == 0){

        //let marker = L.marker([json["features"][i.toString()]["geometry"]["coordinates"]["1"], json["features"][i.toString()]["geometry"]["coordinates"]["0"]]).addTo(map);
        let markers = new L.MarkerClusterGroup();
        markers.addLayer([json["features"][i.toString()]["geometry"]["coordinates"]["1"], json["features"][i.toString()]["geometry"]["coordinates"]["0"]]).addTo(map);
        map.addLayer(markers);

        /*markers.bindPopup(("Severity Description: " + (json["features"][i]["properties"]["SEVERITY_DESCRIPTION"]).toString()
            + "<br>Description: " + (json["features"][i]["properties"]["ACCIDENT_DESCRIPTION"]).toString()
            + "<br>Render: " + (json["features"][i]["properties"]["RENDER"]).toString()
            + "<br>Casualties: " + (json["features"][i]["properties"]["CASUALTIES"]).toString()
            + "<br>Accident Type: " + (json["features"][i]["properties"]["ACCIDENT_TYPE"]).toString()
            + "<br>Severity: " + (json["features"][i]["properties"]["SEVERITY"]).toString()));
        }*/
    }
    console.log("Success!")
    return (true)
}