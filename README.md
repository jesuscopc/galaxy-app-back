# galaxy-app-back
This is a API REST for galaxy App

Clone this proyect and run `npm i`

## Scripts

* `npm run dev` -> this command startup the server on port 400 by default
* `npm run test` -> this command run all proyect test and make a report of coverage

## Endpoints 

## post && Get requests
* -> http://localhost:4000/api/topsecret_split/skywalker
* -> http://localhost:4000/api/topsecret_split/kenobi
* -> http://localhost:4000/api/topsecret_split/sato

* 1P -> http://localhost:4000/api/topsecret_split/kenobi
body 
  {
    "distance": 100.0,
    "message": ["este", "", "", "mensaje", ""]
  }

> Note you can change one param and have other result maybe an incorrect result for example you can change "distance" to "60000.0"

## Post request

* -> http://localhost:4000/api/topsecret
body 
```json
{ "satellites": [
  {
    "name": "kenobi",
    "distance": 100.0,
    "message": ["este", "", "", "mensaje", ""]
  },
  {
    "name": "skywalker",
    "distance": 115.5,
    "message": ["", "es", "", "", "secreto"]
  },
  {
    "name": "sato",
    "distance": 142.7,
    "message": ["este", "", "un", "", ""]
  }
  ]
}
```