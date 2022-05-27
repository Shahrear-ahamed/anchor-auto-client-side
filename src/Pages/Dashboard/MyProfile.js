import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const imageApi = "ba4ff4edefd1c59c93a156adaaba5a42";
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: userData, isLoading } = useQuery("myProfile", () =>
    fetch(`http://localhost:5000/admin/${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  console.log(userData);
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const userAccount = {
      ...userData,
      name: user.displayName,
      phone: data.phone,
      address: data.address,
    };

    const url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
        }
      });
  };
  return (
    <div>
      <h2 className="dashboard-title">My Profile</h2>
      <div className="w-full md:w-3/4 my-5">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={`${user.displayName} profile img`}
              />
            ) : (
              <span className="text-3xl">{user.displayName.slice(0, 1)}</span>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Doctor Name"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Doctor email"
              value={user.email}
              readOnly
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Mobile</span>
            </label>
            <input
              type="number"
              placeholder="Your Mobile"
              {...register("number", {
                required: {
                  value: true,
                  message: "Number is required",
                },
              })}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
            <label className="label">
              {errors.number?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Your Address"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Change your Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="login-button text-black w-32 py-3 rounded-sm mt-5 cursor-pointer"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
