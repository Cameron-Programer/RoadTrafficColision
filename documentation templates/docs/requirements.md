# Requirements

## User Needs

### User stories

As an insurance broker I want to see how a client moving house will affect the risk that I am insuring, so that I can charge more if they are increasing risk. 

As a motorist I want to see how me moving house may affect my insurance premiums so I can see how much my yearly premiums may increase/decrease so I can budget more accuratly. 

As a commuter and pedestrian I want to see hotspots for car crashes so I know where I need to be more cautious, what areas I might need to avoid, or the nature of common accidents in the area. 

As a lobbyist I want to see hotspots for fatal crashes so I can highlight key problem areas and put pressure on improving the infrastructure there.

### Actors
- Insurance broker
- Road User
- Traffic engineers
- Tourists
- Towing/recovery companies
- Lobbyists/protesters

### Use Cases
| UC1 | Usage as an insurance tool | 
| -------------------------------------- | ------------------- |
| **Description** | What areas have the most accidents? Vary rates based upon the provided data.
| **Actors** | Insurers, Insurees |
| **Assumptions** | We assume that the involved are a motorist, and legally require insurance
| | Accessibility: We assume everyone can see the website
| **Steps** | 1. Opt to highlight a key area
| | 2. Request for traffic data within that area
| | 3. Highlight all relevant traffic collisions in that area
| | 4. Display table of all relevant data within the Bristol area
| **Variations** | Accessibility: Users may not always be able to visually use the website, but still may desire access to the data. Having nonvisual (textual) data formatting will help. |
| **Non-functional** | Service should run on all modern browsers (i.e Chromium based browsers, firefox) |
| **Issues** |  |



| **UC2**            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**    | Using the platform to find hotspots for fatal crashes to be able to apply more pressure to elected officials and the councle traffic dept. To redesign roads to improve safety.                                                                                                                                                                                                                                                                                               |
| **Actors**         | Lobbyists<br>Councle<br>Road Users<br>                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Assumptions**    | There is a road on within the network with a substantial number of fatal crashes that has not been improved since the incident.                                                                                                                                                                                                                                                                                                                                               |
| **Steps**          | 1) Lobbyist looks at the heat map using the filter to only show Fatal collisions<br>2) Lobbyist identifys the road with a large amounts of fatal injurys and checks to see if it has been improved since the last crash<br>3) Lobbyist informs the coulcle highways dept to ask for it to be improved<br>3.1) If the councle ignore the issue then they should speak to their MP <br>3.2) If the MP ignores this issue go to the local press and speak to the MP again after. |
| **Variations**     | None                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Non-functional** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |


TODO: Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.


### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.
