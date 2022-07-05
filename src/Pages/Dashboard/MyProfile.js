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
  const { register, handleSubmit } = useForm();
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery("myProfile", () =>
    fetch(`https://anchor-tools.herokuapp.com/userprofile/${user.email}`, {
      method: "GET",
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

    if (data.image.length > 0) {
      const url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            refetch();
            updateProfile({ photoURL: data.data.url });
            toast.success("Image update successfully");
          }
        });
    }

    fetch(`https://anchor-tools.herokuapp.com/userprofile/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(userAccount),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          refetch();
          toast.success("Update successfully");
        }
      });
  };
  return (
    <div className="w-full">
      <h2 className="dashboard-title">My Profile</h2>
      <div className="w-full md:w-3/4 my-5 pb-14">
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
              defaultValue={userData?.phone}
              placeholder="Your Mobile"
              {...register("number")}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              defaultValue={userData?.address}
              placeholder="Your Address"
              {...register("address")}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <input
              type="text"
              defaultValue={userData?.education}
              placeholder="Your Education"
              {...register("education")}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Linkedin Profile</span>
            </label>
            <input
              type="text"
              defaultValue={userData?.linkedin}
              placeholder="Your Address"
              {...register("linkedin")}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Change your Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
            />
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
