// node src/index.js
const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const baseURL = `http://127.0.0.1:5000`

const resolvers = {
  Query: {
    Students: () => {
      return fetch(`${baseURL}/get`).then(res => res.json())
    }
  },
  Mutation: {
    addStudent: (parent, args) => {
       const Student = {
        username: args.username,
        password: args.password,
      }
	  return fetch(`${baseURL}/add`, { 
			method: 'POST', 
			body: JSON.stringify(Student),
			headers: { 'Content-Type': 'application/json' }
		}).then(res => res.text());
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))