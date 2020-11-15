# Features!
  - Show weather forecast data for any city
 
# App Architecture

#### React 
 - Used javascript(.js) and typescript(.tsx) to create class and function       components.(Best pratice to use either typescript or javascript in any project)
 - Used Redux thunk to fetch data and store it in a state.
 ![alt tag](https://github.com/safad-tw/weather-app/blob/main/redux.png)
 - Used openweather api to fetch weather details.
 - Used Open layer map to display weather info on map.
 - Used Jest, enzyme and redux-mock-store for unit test.
 - Added docker and docker compose file for production setup.

# Prerequisites

- Node 12.13.1
- Docker 9.03.13 -


# Installation
Follow these steps to setup the project 
- Clone the repository into a new folder in your machine; 
- git clone git@github.com:safad-tw/weather-app.git
- Create api key open weather api to request api.
- For now, we will be passing api key in terminal command.(Best practise maintain a .env file for each enviornment)
- Open the Command Prompt and run: 
- Run it on localhost
```sh
npm install && REACT_APP_SECRET_WEATHER_API_CODE=330c81f24e4250b8183f74ad127506ac npm start
 ```
 - Run unit test
```sh
npm install && npm run test
 ```
 
  # Docker
 - Build using Docker
```sh
    docker build -t weather-app:dev .
 ```
 - Then, spin up the container once the build is done
```sh
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    weather-app:dev
 ```
 Open your browser to http://localhost:3001/ and you should see the weather forecast app.
 
Using docker compose command - Build the image and fire up the container:
 ```sh
 docker-compose up -d --build
  ```
Bring down the container
```sh
docker-compose stop
 ```
    
# Production
Using the production Dockerfile, build and tag the Docker image:
```sh
docker build -f Dockerfile.prod -t weather-app:prod .
 ```
 
 Spin up the container:
 
 ```sh
docker run -it --rm -p 1337:80 weather-app:prod
 ```
 
Navigate to http://localhost:1337/ in your browser to view the weather forecast app.


Using docker- composer file
 ```sh
docker-compose -f docker-compose.prod.yml up -d --build
 ```


# Deployment

Used heroku to deploy this application.
Navigate to https://enigmatic-caverns-20485.herokuapp.com/ in your browser to view the weather forecast app.

# Github url:
https://github.com/safad-tw/weather-app
# Contact
 - Mohammad Safad - msafad90@gmail.com



