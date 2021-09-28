const fetch = require('node-fetch')
const baseURL = `http://127.0.0.1:5000`

module.exports = {
    Query: {
      Students: () => {
        try{
          let res = fetch(`${baseURL}/get`).then(res => res.json())
          return res
        }
        catch(err){
          console.log(err);
        }
      }
    },
    Mutation: {
      addStudent: (parent, args) => {
           const Student = {
             username: args.username, 
             password: args.password 
            }
             console.log(args);
           if (args.username === '' ) {
             if (args.password === '') {
              throw new Error("username and password not found")
             } 
           }
           if (args.username === '') {
            throw new Error("username not found")
           } 
           if (args.password === '') {
            throw new Error("password not found")
           } 
          //  if(args.username.length > 5)
          //     throw new Error("firstName should be less than 15 characters")

          //   if(args.password.length < 8 )
          //     throw new Error("password should be minimum 8 characters")
            else {
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
     }
};