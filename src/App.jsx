import React, { useState } from "react";
import FetchAllPosts from "./components/fetchPosts";
import RegisterUser from "./components/registerUser";

import Login from "./components/login";
// import MyData from "./components/myData";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Login setToken={setToken} />
      {/* <MyData /> */}

      <FetchAllPosts token={token} />
      <RegisterUser />
    </>
  );
}
