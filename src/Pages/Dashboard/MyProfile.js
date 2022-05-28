import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [updateProfile] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  const imageApi = "ba4ff4edefd1c59c93a156adaaba5a42";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery("myProfile", () =>
    fetch(`http://localhost:5000/userupdate/${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const userAccount = {
      name: user.displayName,
      email: user.email,
      phone: data.number,
      address: data.address,
      education: data.education,
      linkedin: data.linkedin,
    };

    const url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          updateProfile({ photoURL: data.data.url });
          fetch(`http://localhost:5000/userupdate/${user._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(userAccount),
          })
            .then((res) => res.json())
            .then((result) => {
              refetch();
              toast.success("Update successfully");
            });
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
              placeholder="User Name"
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
              placeholder="User email"
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
              defaultValue={userData.phone}
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
              defaultValue={userData.address}
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
              <span className="label-text">Education</span>
            </label>
            <input
              type="text"
              defaultValue={userData.education}
              placeholder="Your Education"
              {...register("education", {
                required: {
                  value: true,
                  message: "education is required",
                },
              })}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
            <label className="label">
              {errors.education?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.education.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Linkedin Profile</span>
            </label>
            <input
              type="text"
              defaultValue={userData.linkedin}
              placeholder="Your Address"
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "Linkedin is required",
                },
              })}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
            <label className="label">
              {errors.linkedin?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.linkedin.message}
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
