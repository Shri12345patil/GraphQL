import React from "react";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    Students{
      id
      username
      password
    }
  }
`;

export default function Result() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.Students.map((Student) => (
          <li key={Student.id}>{Student.id}={Student.username}  = {Student.password}</li>
        ))}
      </ul>
    </div>
  );
}
