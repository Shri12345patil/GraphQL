import React, { useState } from 'react'
import APIService from './APIService'
import { gql, useMutation } from '@apollo/client';

const addStudent = gql`
mutation addStudent($username: String!,$password: String!){
    addStudent(username: $username, password: $password){
      username
      password
    }
  }
`;

function Result () {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [variables, setVariables] = useState({
    username: '',
    password: ''
  })

  // const insertStudent = () => {
  //   APIService.InsertStudent({username,password})
  //   .then(resp=> props.insertedStudent(resp))
  //   .catch(error => console.log(error))
  //   alert("User created..!");
  //   window.open("http://localhost:3000/","_self");
  const [addStudent, { data, loading, error }] = useMutation(Result);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const submitRegisterForm = (e) => {
    e.preventDefault()
   console.log(variables);
   addStudent({ variables })
  }

 return (
            <div>
              <label>SignUp</label><br /> <hr/>
              <div>
                <lable>Username</lable> &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" 
                        name="username" 
                        placeholder="enter Username" 
                        autoComplete="off"
                        value={variables.username}
                        onChange= {(e) => setVariables({ ...variables, password :e .target.value})} />&nbsp;&nbsp;
              </div>
              <div style={{ marginTop: 10 }}>
                <label>Password</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" 
                        name="password" 
                        placeholder="Enter password" 
                        autoComplete="off"
                        value={variables.password}
                        onChange= {(e) => setVariables({ ...variables, username :e .target.value})} />
              </div><br/>
            <input type="button" value='Create' onClick={() => {submitRegisterForm();}} /><br />
          </div> 
        );

}
 export default Result
// function Result() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   let input;
//   const [addStudent, { data, loading, error }] = useMutation(Result);

//   if (loading) return 'Submitting...';
//   if (error) return `Submission error! ${error.message}`;

//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           addStudent({ variables: { username: input.value } });
//           input.value = '';
//         }}
//       >
//         <input ref={node => { input = node; }} />
//         <button type="submit">Add Todo</button>
//       </form>
//     </div>
//   );
// }
// export default Result;