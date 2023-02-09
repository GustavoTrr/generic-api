# GENERIC REST API

## The focus of this project is to simulate backend REST APIs to facilitate integration testing of frontend applications and mock responses

## It's a generic REST API that will handle JSON files instead of the database, making it simpler to install, run, and change data.
* Since it is very simple and does not treat any security issues, it is indicated for local and development purposes only, not recommended for production environment!

## Stack

 - Javascript
 - Node
 - NPM
 - Node libriries:
    - Express

## How To run (SIMPLE):

* Pre-requisites: Docker installed and running

1. Download the project on your machine
2. Open the terminal or cmd in project directory
3. run the command below:
``` docker-compose up --build ```

Then you can access it through the URL
http://localhost:3000/minhafesta/convidados


NodeModules trick to work within Docker image with binding:
https://jdlm.info/articles/2016/03/06/lessons-building-node-app-docker.html