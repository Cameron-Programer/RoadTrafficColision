# Testing

## Test Plan

The following are tests on the main functions of the website. The pass/fail condition notes gather insights on certain debugging issues and how they were fixed.

| Test Case ID | Test Steps                             | Test Input    | Expected Result                                           | Actual Results                                                                                                         | Status |
|--------------|----------------------------------------|---------------|-----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|--------|
| 1            | Input format settings and click search | FATAL, CAR    | only show fatal, red car icons                            | "                                                                                                                      | PASS   |
| 2            | Input format settings and click search | SERIOUS, BIKE | only show serious, yellow bik icons                       | "                                                                                                                      | PASS   |
| 3            | Input format settings and click search | MINOR, M-CYC  | only show minor, purple motor bike icons                  | "                                                                                                                      | PASS   |
| 4            | Open index.html                        | No input      | Shows every pin in the ODB dataset on the map (clustered) | Shows every pin in the ODB dataset on the map (clustered)                                                              | PASS   |  
| 4.1          | Zoom in on pins                        |               |                                                           | "                                                                                                                      | PASS   |
| 5            | Click pin for info                     |               | Sev desc, desc, casualites, type, level                   | Severity Description: Slight ``Description: Nose to Tail``Render: MCYC ``Casualties: 1``Accident Type: NT``Severity: 3 | PASS   |
| 6            | Open heat map                          |               | Heat Map                                                  | Heat map plugin outdated.                                                                                              | FAIL   |
| 7.1          | Slide timeslider                       |               | 02/01/2020                                                | NaN/NaN/NaN                                                                                                            | FAIL   |
| 7.2          | Slide timeslider                       |               | 02/01/2020                                                | NaN/NaN/NaN                                                                                                            | FAIL   |
| 7.3          | Slide timeslider                       |               | 02/01/2020                                                | 02/01/2020                                                                                                             | PASS   |

## Requirement Traceability Matrix (RTM)

| Use-Case ID | Requirement ID | Test Case ID    | 
|-------------|----------------|-----------------|
| UC1         | FR1            | Not implemented | 
| UC2         | FR2            | Not implemented | 
| UC2         | FR3            | 4,5             | 
| UC1         | NFR 1          | 4               | 
| UC2         | NFR 2          | 6               | 
| UC1 & UC 2  | NFR 3          | 1,2,3           | 
| UC2         | NFR 4          | Not implemented | 
