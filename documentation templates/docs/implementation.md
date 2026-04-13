# Implementation

## Introduction
TODO: Describe the system implemented (Describe the dataset. Are there any known issues? Describe any configuration data).



In its current state this system shows a map of every Road Traffic Collision(RTC) with injury or fatality, that the police reported to Bristol city council
<br>The police do not necessarily attend every non-injury RTC as such they do not report RTC's with no injures. 
<br>It shows these using custom colour coded custom icons. 

| Mode/Render        | Icon                            |
|--------------------|---------------------------------|
| Car                | ![](images/mapMarkers/carsFat.png) |
| Cycle              | ![](images/mapMarkers/cycFat.png) |
| Motorcycle         | ![](images/mapMarkers/mcycFat.png) |
| Adult pedestrian   | ![](images/mapMarkers/aFat.png) |
| Child pedestrian   | ![](images/mapMarkers/cFat.png) |
| Elderly pedestrian | ![](images/mapMarkers/eFat.png) | 


| Severity | Colour                             |
|----------|------------------------------------|
| Slight   | ![](images/mapMarkers/carsMin.png) |
| Serious  | ![](images/mapMarkers/carsSrs.png) |
| Fatal    | ![](images/mapMarkers/carsFat.png) |

The system allows the use to filter the map to only show specific modes of transport (using the RENDER variable from OpenDataBristol) or only show a certain level of seriousness.
<br>e.g. (Seriousness: Fatal, Mode of transport: Car)

The system allows for users to click individual collisions to see more information about them. 

The system also groups pins together if they are to close, making the system perform better on lower end hardware and making it easier for users to understand the data. 


## Project Structure
```
RoadTrafficCollision:
├──   readme.md
|             
├── documentation templates
|   └── docs
|       ├── contribution.md
|       ├── design.md
|       ├── implementation.md
|       ├── planning.md
|       ├── requirements.md
|       ├── testing.md
|       |   
|       └── images
|           ├── class1.png
|           ├── component.png
|           ├── deployment.png
|           ├── mockup.png
|           ├── palette.png
|           ├── screenshot.png
|           ├── sequence.png
|           ├── use-case.png
|           ├── wireframe.png
|           |   
|           └── DrawioFiles
|               ├── CamWireframeA.png
|               ├── contextdiagram.drawio.png
|               ├── NinWireframeA.drawio.png
|               ├── UseCase.drawio.png
|               ├── UseCase2.drawio.png
|               └── [DRAFT]ComparisonDesign.drawio
|                   
└── Website
    ├── main.html
    ├── styles.css
    |   
    ├── images
    |   ├── icon.png
    |   |   
    |   └── mapMarkers  
    |       ├── aFat.png
    |       ├── aMin.png
    |       ├── aSrs.png
    |       ├── carsFat.png
    |       ├── carsMin.png
    |       ├── carsSrs.png
    |       ├── cFat.png
    |       ├── cMin.png
    |       ├── cSrs.png
    |       ├── cycFat.png
    |       ├── cycMin.png
    |       ├── cycSrs.png
    |       ├── eFat.png
    |       ├── eMin.png
    |       ├── eSrs.png
    |       ├── mcycFat.png
    |       ├── mcycMin.png
    |       ├── mcycSrs.png
    |       └── un.png
    |           
    └── scripts
        ├── map.js
        ├── obd-to-mapsc.js
        ├── odb-api.js
        ├── slidetimeupdater.js
        ├── start-map.js
        |   
        └── date selector
            └── unix-time-converter.js
                

```
TODO: provide a table listing the number of jslint warnings/reports for each module.

## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![](images/archetectureComponants.png)
## Bristol Open Data API

![](images/DrawioFiles/mapApiDiagram.drawio.png)

TODO: Repeat as necessary

# User guide
TODO: Explain how each use-case works by providing step-by-step screenshots for each use-case. This should be based on a tested scenario.

### Filtering RTC's
By severity of the collision and by mode of transportation. 

Step 1
Load the site.

![](images/UseCaseImages/Filters/1.png)

Step 2
Select the severity

You have 4 options, 
1) Severity (Default), this will not filter by severity (so all are included)
2) Fatal, this will only show RTC's that had a fatality. 
3) Serious, this will only show RTC's that were deemed to be serious by the police
4) Minor, this will only show RTC's that had injury but they were deemed to be minor by the police

![](images/UseCaseImages/Filters/2.png)

Step 3
Select the mode of transport 
This is determined by using the RENDER var from the API, there may have been multiple modes involved in one RTC. 

This has 5 options 
1) Mode (Default), Includes all 
2) Car, Only shows RTC's where render is car 
3) Cycle, Only shows RTC's where render is bicycles
4) M-Cycle, only shows RTCS where render is motorcycle
5) Pedestrian, this only shows collisions where the render is a pedetrian. 
![](images/UseCaseImages/Filters/3.png)

Step 4
Filter the map 

Now you press the filter button on the right, the URL will update to show the settings you have chosen. 
When this is updated the map will now only show the type you have chosen 

So for this example the map now only shows Fatal car crashes. 
![](images/UseCaseImages/Filters/4.png)
