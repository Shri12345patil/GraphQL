import React from "react";
import { useQuery, gql } from "@apollo/client";
import { gql, useMutation } from '@apollo/client';

const FILMS_QUERY = gql`
mutation addStudent($username: String!,$password: String!){
    addStudent(username:$username, password: $password){
      username
      password
    }
  }
`;
// export default function Result() {
//   const { data, loading, error } = useQuery(FILMS_QUERY);

//   if (loading) return "Loading...";
//   if (error) return <pre>{error.message}</pre>

//   return (
//     <div>
//       <h1>SpaceX Launches</h1>
//       <ul>
//         {data.Students.map((Student) => (
//           <li key={Student.id}>{Student.id}={Student.username}  = {Student.password}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
function Result() {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(Result);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { text: input.value } });
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}