# Testing

## Test Plan

The following are tests on the main functions of the website. The pass/fail condition notes gather insights on certain debugging issues and how they were fixed.

| Test Case ID | Test Steps                             | Test Input    | Expected Result                          | Actual Results                                                                                                         | Status | Comments                             |
| ------------ | -------------------------------------- | ------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------ |
| 1            | Input format settings and click search | FATAL, CAR    | only show fatal, red car icons           | "                                                                                                                      | PASS   |                                      |
| 2            | Input format settings and click search | SERIOUS, BIKE | only show serious, yellow bik icons      | "                                                                                                                      | PASS   |                                      |
| 3            | Input format settings and click search | MINOR, M-CYC  | only show minor, purple motor bike icons | "                                                                                                                      | PASS   |                                      |
| 4            | Zoom in on pins                        |               |                                          | "                                                                                                                      | PASS   |                                      |
| 5            | Click pin for info                     |               | Sev desc, desc, casualites, type, level  | Severity Description: Slight ``Description: Nose to Tail``Render: MCYC ``Casualties: 1``Accident Type: NT``Severity: 3 | PASS   |                                      |
| 6            | Open heat map                          |               | Heat Map                                 | Heat map plugin outdated.                                                                                              | FAIL   |                                      |
| 7.1          | Slide timeslider                       |               | 02/01/2020                               | NaN/NaN/NaN                                                                                                            | FAIL   |                                      |
| 7.2          | Slide timeslider                       |               | 02/01/2020                               | NaN/NaN/NaN                                                                                                            | FAIL   | "Date" element not turning to string |
| 7.3          | Slide timeslider                       |               | 02/01/2020                               | 02/01/2020                                                                                                             | PASS   |                                      |

## Requirement Traceability Matrix (RTM)

| Use-Case ID | Requirement ID | Test Case                                                                          | Status |
| ----------- | -------------- | ---------------------------------------------------------------------------------- | ------ |
| ID          | RID            |                                                                                    |        |
| UC1         | FR1            |                                                                                    | FAIL   |
| UC2         | FR2            |                                                                                    | FAIL   |
| UC2         | FR3            | System gets list of collisions from ODB to overlay on map as pins                  | Pass   |
| UC1         | NFR 1          | Map loads and shows collisions as pins                                             | Pass   |
| UC2         | NFR 2          | Map can be shown as a heatmap of collsions                                         | FAIL   |
| UC1 & UC 2  | NFR 3          | Map has dropdown that updates the ODB query to filter by users chosen seriousness. | Pass   |
| UC2         | NFR 4          | Map loads at broadmeed if the users geolocation is not avaliable from the browser  | FAIL   |
