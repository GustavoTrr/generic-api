# The focus of this Project is to simulate backend REST APIs to make easier to test frontend applications's integration and to mock responses

## It's a generic REST API that will deal with JSON files instead of database, so it makes simokier to install, run and change.
* As it is very simple, and does not care about scure issues, it is for local and development pueposes only, Not recommended for production environment!

## Stack

 - Javascript
 - Node
 - NPM
 - Node libriries:
    - Express

## How To run (SIMPLE):

* Pre-requisite: Docker installed and working

1. Download the project to your machine
2. Open the terminal or cmd on the directory of the project
3. run the command below:
 ```
 docker-compose up --build
```

Then you can access it through the URL
http://localhost:3000/minhafesta/convidados


NodeModules trick to work within Docker image with binding:
https://jdlm.info/articles/2016/03/06/lessons-building-node-app-docker.html