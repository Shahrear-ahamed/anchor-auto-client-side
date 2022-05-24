import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const PassReset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
  };
  return (
    <div className="grid items-center">
      <div className="container mx-auto w-[90%] ">
        <div className="flex flex-col items-center mx-auto my-14 w-[90%] max-w-[500px] border shadow-lg rounded-lg p-5">
          <h2 className="text-3xl font-bold text-[#f2b800] mb-3">Reset password</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-center w-full max-w-[450px]"
          >
            <div>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="data-input w-full border-b-2 border-gray-600 my-2 py-1 outline-none"
                placeholder="Email"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {error && <p className="text-red-500 text-left">{error}</p>}
            <p className="pt-3 text-left">
              <Link className="login-secondary" to="/login">
                Login?
              </Link>
            </p>

            {sending ? (
              <button className="btn loading">loading</button>
            ) : (
              <input
                className="login-button text-black w-32 py-3 rounded-sm mt-5 cursor-pointer"
                type="submit"
                value="Send Email"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PassReset;
