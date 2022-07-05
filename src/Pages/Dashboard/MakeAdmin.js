import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("makeAdmin", () =>
    fetch("https://anchor-tools.herokuapp.com/user", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const submitAdmin = (email) => {
    const url = `https://anchor-tools.herokuapp.com/user/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Hola Successfully made admin");
        }
      });
  };
  return (
    <div>
      <h2 className="dashboard-title">Make admin</h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => submitAdmin(user.email)}
                      className="bg-secondary text-white cursor-pointer py-1 px-3"
                    >
                      Make admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
