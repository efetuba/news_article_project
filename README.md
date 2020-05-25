# Project Instructions

In this project, a web tool that allows users to run Natural Language Processing (NLP) on articles or blog on websites will be built. A single page web interface will be built with using  Aylien API to interact with their NLP System. With this tool, the content of article or blog will be analyzed if it is subjective or objective and if it is positive, negative or neutral.
Node and Express will be used in routing and Webpack will be used for building the tool. In Webpack, development and production environments will be set up for the app.
As a test method, Jest will be used for testing JS functions.   

## Run the project
### Run in production mode

` $ npm run build-prod`

### Run in development mode 
After running it automatically runs at at localhost:8080. 

` $ npm run build-dev `

### Start the app 
It runs at localhost:8081.

` $ npm run start`

## Configs
There are two webpack config files for development (webpack.dev.js) and production(webpack.prod.js).
Also, 'package.json' file is to manage dependencies.

## Get ans Set the API
The project uses the Text Analysis SDKs from [aylien](https://aylien.com/text-api/sdks/).
To get an API, you should register to the link and follow the instructions to set up.
In this project, to store API_ID and API_KEY, '.env' file is created.

## Offline Functuality
The project have service workers set up in webpack to provide the offline functionality.

## Testing with Jest
Testing is done with Jest. To run test, use the command 

` $ npm run test`
