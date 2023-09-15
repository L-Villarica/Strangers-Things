import React, { useEffect, useState } from "react";

const COHORT_NAME = "2302-ACC-PT-WEB-PT-C";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function MyData({ token }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`${BASE_URL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setUserData(result);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error(error);
      }
    }

    // Call the function to fetch user data when the component mounts
    fetchUserData();
  }, [token]);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Data</h2>
          <p>Username: {userData.username}</p>
          {/* Display other user data here */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
