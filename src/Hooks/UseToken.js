import { useState } from "react";

const Token = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  const name = user?.user?.displayName;
  const data = { email, name };

  if (email) {
    fetch(`http://localhost:5000/userlogin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          localStorage.setItem("access_token", data.token);
        }
      });
  }

  return [token];
};

export default Token;
