// node src/index.js
const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const baseURL = `http://127.0.0.1:5000/get`

const resolvers = {
  Query: {
    Articles: () => {
      return fetch(`${baseURL}`).then(res => res.json())
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))