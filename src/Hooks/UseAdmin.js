import { useEffect, useState } from "react";

const UseAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const url = `https://anchor-tools.herokuapp.com/user/${user}`;
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
          setAdminLoading(false);
        }
      });
  }, [user]);
  return [admin, adminLoading];
};
export default UseAdmin;
