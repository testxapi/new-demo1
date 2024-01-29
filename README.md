# OneRoster DAM Tool
The OneRoster DAM Tool is a tool that allows you to retrieve OneRosterCSV from Azure Blobs at predetermined times or at any time, insert it into the system's database, validate and enrich additional information, and then export it to Drill Platform. Users can import each file or folder by SAS URL, folder name, SAS token with schedule, and export to a specific folder on Drill Platform. =
# Prerequisites

To run this application, you will need:

- Java 17 or higher
- Apache Maven 3.6 or higher
- PostgreSQL

# Getting Started
To use the OneRoster DAM Tool, follow these steps:

- Clone this repository to your local machine.
- Install the required dependencies by running `mvn clean install`.
- Config environment in file [application.properties](src%2Fmain%2Fresources%2Fapplication.properties)

# Features
The OneRoster DAM Tool has the following features:
- Basic authentication with username and password.
- Allow to create SAS import URL from Azure blob and config information to export to Drill.
- Dashboard to manage import URLs.
- Allow re-schedule import.
- Allow search, and filter users of import CSV files.
- Validate and add more information for a list user at the same time.
- Allow export error users to CSV files.
- Allow export valid users to Drill Platform.

# Error Handling
- The OneRoster DAM Tool checks for errors in the list user selected and reports them to you. You can export error users to CSV and download them to review and fix.

# Detailed Explanation
- Templates HTML thymeleaf in folder src/main/resources/templates
- [SchoolController.java](src%2Fmain%2Fjava%2Fcom%2Fflakworks%2Foneroster%2Fweb%2Fcontrollers%2Frestapi%2FSchoolController.java): Implement API get list school by code from external URL is provided.
- [SettingRestController.java](src%2Fmain%2Fjava%2Fcom%2Fflakworks%2Foneroster%2Fweb%2Fcontrollers%2Frestapi%2FSettingRestController.java): Implement API import SAS URL, export file to Drill, re-schedule, delete import URL, filter and get list user from import URL, export invalid user, ..vv

# Usage
Can use docker-compose to start an application or use file deploy.sh script to deploy using docker.
```bash
mvn clean install
docker-compose up -d
```
# Authentication
```text
username: admin
password: admin
```
