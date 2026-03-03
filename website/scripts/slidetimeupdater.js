// This script ...

let slider = document.getElementById("timeslider")
let label = document.getElementById("timelabel")
slider.min = 0
//import min max data from the below fields
//https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/41/query?where=1%3D1&outFields=DATE_&outSR=4326&f=json

slider.addEventListener("change", () => {
    label.textContent = slider.value
})
                