Testing The mutation End Points
Run the application using the following command

node server.js
Open your web browser and go to the following url localhost:5000/graphql

Test addMovie Mutation Endpoint
Input

mutation {
	addMovie(input: {id: 4,name: "Movie 4", year: 2020,directorId:4}){
    id,
    name,
	year,
    directorId
  }
  
}
Output

{
  "data": {
    "addMovie": {
      "id": "4",
      "name": "Movie 4",
      "year": 2020,
      "directorId": "4"
    }
  }
}
Input

mutation {
	addMovie(input: {id: 5,name: "Movie 5", year: 2021,directorId:4}){
    id,
    name,
	year,
    directorId
  }
  
}
Output

{
  "data": {
    "addMovie": {
      "id": "5",
      "name": "Movie 5",
      "year": 2021,
      "directorId": "4"
    }
  }
}
Test addDirector Mutation Endpoint
Input

mutation {
	addDirector(input: {id: 4,name: "Director 4", age: 30}){
    id,
    name,
	age,
    movies{
      id,
      name,
      year
    }
  }
  
}
Output

{
  "data": {
    "addDirector": {
      "id": "4",
      "name": "Director 4",
      "age": 30,
      "movies": [
        {
          "id": "4",
          "name": "Movie 4",
          "year": 2020
        },
        {
          "id": "5",
          "name": "Movie 5",
          "year": 2021
        }
      ]
    }
  }
}