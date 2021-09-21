import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';


const ADD_STUDENT = gql`
mutation addStudent(
  $username: String!,
  $password: String!
  ){
    addStudent(
      username: $username, 
      password: $password
      ){
      username
      password
    }
  }
`;

function Signup () {

const [variables, setVariables] = useState({
  username: '',
  password: '',
})

const [register, { error }] = useMutation(ADD_STUDENT)

const submitRegisterForm = (e) => {
    e.preventDefault();
    // console.log("value post");
    // console.log(variables);
    register({ variables});
    window.open("http://localhost:3000/","_self");
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
                        onChange= {(e) => 
                        setVariables({
                          ...variables,
                          username: e.target.value})} />&nbsp;&nbsp;
              </div>
              <div style={{ marginTop: 10 }}>
                <label>Password</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" 
                        name="password" 
                        placeholder="Enter password" 
                        autoComplete="off"
                        value={variables.password}
                        onChange= {(e) => 
                          setVariables({
                            ...variables,
                            password: e.target.value})} />
              </div><br/>
            <input type="button" value='Create' onClick={submitRegisterForm} /><br />
          </div> 
        );

}
export default Signup

