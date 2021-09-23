const fetch = require('node-fetch')
const baseURL = `http://127.0.0.1:5000`

module.exports = {
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
           const options = {
            method: 'POST',
            body: JSON.stringify(Student),
            headers: {
                'Content-Type': 'application/json'
            }
          }
          return fetch(`${baseURL}/add`, options)
          .then(res => res.json())
          // .then(res => console.log(res));
        }
     }
};