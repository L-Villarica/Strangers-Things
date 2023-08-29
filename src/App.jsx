import React from "react";
import FetchAllPosts from "./components/fetchPosts";
import RegisterUser from './components/registerUser'

export default function App() {
  return (
    <>
      <FetchAllPosts />
      <RegisterUser />
    </>
  );
}
