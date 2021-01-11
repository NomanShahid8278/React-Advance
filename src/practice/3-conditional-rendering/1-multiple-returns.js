import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("default User");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);
  // After first return every other return is ignored
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error...</h2>;
  }
  return <h2>{user}</h2>;
  // return <h2>multiple returns</h2>;
};

export default MultipleReturns;
