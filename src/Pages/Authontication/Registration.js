import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import UseToken from "../../Hooks/UseToken";
import google from "../../Assets/google.svg";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const from = location.state?.form?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [token] = UseToken(user || gUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  });

  let loadError;
  if (error || gError) {
    loadError = error?.code?.split("/")[1] || gError?.code?.split("/")[1];
  }

  // submit data
  const onSubmit = async (data) => {
    if (data.password === data.confirmPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await sendEmailVerification(data.email);
      await updateProfile({ displayName: data.name });
      toast.success("Email verification was send. please verify your account");
    }
  };
  return (
    <section className="minMax grid items-center ">
      <div className="flex flex-col items-center mx-auto mb-5 w-[90%] max-w-[500px] border-2 border-gray-100 rounded-lg px-4 md:px-10 py-3 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#f2b800]">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center w-full">
          <div>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              className="data-input w-full border-b-2 border-gray-600 my-2 py-1 outline-none"
              placeholder="Name"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.name.message}
                </span>
              )}
              {errors.name?.type === "pattern" && (
                <span className="label-text text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
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

          <div>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "password must be required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be atlest 6 character or longer",
                },
              })}
              type="password"
              className="data-input w-full border-b-2 border-gray-600 my-2 py-1 outline-none"
              placeholder="Password"
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text text-red-600">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "confirm password must be required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 character or longer",
                },
              })}
              type="password"
              className="data-input w-full border-b-2 border-gray-600 my-2 py-1 outline-none"
              placeholder="Confirm password"
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text text-red-600">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <p className="text-left">
            <Link className="login-secondary" to="/login">
              Already have an account?
            </Link>
          </p>
          <p className="pt-3 text-left">
            <Link className="login-secondary" to="/password-reset">
              Forget Password?
            </Link>
          </p>

          {loading || gLoading ? (
            <button className="btn loading">loading</button>
          ) : (
            <input
              className="login-button text-black w-32 py-3 rounded-sm mt-5 cursor-pointer"
              type="submit"
              value="Register"
            />
          )}
        </form>
        {loadError && <p className="text-red-500 text-left">{loadError}</p>}
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="flex space-x-3 items-center border-secondary border-2 rounded-full py-3 px-16 mt-5 shadow-md"
          >
            <img src={google} alt="google" />
            <span className="text-xl font-semibold">Continue With google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
