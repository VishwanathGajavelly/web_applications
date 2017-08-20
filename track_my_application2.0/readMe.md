# This application is the upgraded version of track_my_application. 

Earlier version can be accessed at: https://github.com/VishwanathGajavelly/web_applications/tree/master/track_your_Application

## Modifications:
1. Storage: changed from Local storage to MongoDb. Here the data we save will be permanent unlike the earlier version.
2. Technologies: Moved from Angular JS to Node js. Also used Express JS to build REST API and handle the user requests.

## Requirements: 
1. Must have node & npm installed.
2. Must have MongoDb installed.

## How to run: 
1. Clone or download the package.
2. Create a database in MongoDb with the name 'jobsapp', create a collection 'jobs2' in this database. Or can create any name as per your convenience and modify the code accordingly.
3. Open the Terminal / command prompt at the package location, then give the commands ' npm install ' followed by ' node app '
4. Server starts listening at the port: 3000, open "localhost:3000" on your favorite browser and you'll see the application running.

## Scope of the project: 
1. The same idea can be linked to build any website to collect the data from the users. 
2. Can use SQL databases instead of MongoDb, if required, using the node package mysql - code for demonstration of connecting MySql database with nodejs can be obtained at https://github.com/VishwanathGajavelly/access_mysql_using_nodejs 

### Thank you.
