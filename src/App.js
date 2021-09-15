import React from "react";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    Articles{
      title
      id
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.Articles.map((Article) => (
          <li key={Article.id}>{Article.title}</li>
        ))}
      </ul>
    </div>
  );
}