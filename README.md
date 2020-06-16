# NodeJS-Weather-App
###  A simple command-line app to show how to create http requests to weather and location api's, how to use callback functions, and handle errors.
# System Setup
-  Download NodeJS from Nodejs.org
-  Place JavaScript files into a project. I use Visual Studio Code, a free IDE. 
-  From the console, initialize the NPM package manager in your project
    - npm init
- Install required postman-request HTTP request client npm package by running the following command from the console in your project. Newer versions may work as well. 
  - npm i postman-request@2.88.1-postman.23
- Sign up for using WeatherStack.com free tier API - Get an access key. 
- Sign up for using MapBox.com free tier API for location services - Get public access token. 
- Edit URL's in the code with your access keys.
# Usage
node app.js <city>
  
# Example
node app.js philadelphia
- Prints to console:
-- 'Philadelphia, Pennsylvania, United States
Data Partly cloudy. It is currently 77 degrees out. It feels like 77 degrees.
```
