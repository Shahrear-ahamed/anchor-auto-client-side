import { useEffect, useState } from "react";

const UseAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/admin/${user}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "admin") {
          setAdmin(true);
        }
      });
  }, [user]);
  return [admin];
};
export default UseAdmin;
