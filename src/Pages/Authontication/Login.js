import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import UseToken from "../../Hooks/UseToken";
import google from "../../Assets/google.svg";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [token] = UseToken(user || gUser);
  const from = location.state?.form?.pathname || "/";

  useEffect(() => {
    if (token) {
      toast.success("Login successfully");
      navigate(from, { replace: true });
    }
  });
  let loadError;
  if (error || gError) {
    loadError = error?.code?.split("/")[1] || gError?.code?.split("/")[1];
  }
  // submit data
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  // ui are here
  return (
    <div className="grid items-center my-5">
      <div className="container mx-auto w-[90%] grid gap-5 grid-cols-1 md:grid-cols-2 ">
        <div>
          <h2 className="text-4xl py-4">New Customer</h2>
          <p className="pb-3">Register</p>
          <p>
            By creating an account you will order, buy and get some access for
            this site
          </p>
          <button
            onClick={() => navigate("/register")}
            className="py-2 px-6 rounded-sm login-button my-5"
          >
            Let's Register
          </button>
        </div>
        <div className="flex flex-col items-center mb-5">
          <h2 className="text-3xl font-bold text-center text-[#f2b800]">
            Login
          </h2>
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

            <div>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password must be required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 caracter or longer",
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
                value="Login"
              />
            )}
            {loadError && <p className="text-red-500 text-left">{loadError}</p>}
          </form>
          <div>
            <button
              onClick={() => {
                loadError = "";
                signInWithGoogle();
              }}
              className="flex space-x-3 items-center border-secondary border-2 rounded-full py-3 px-16 mt-5 shadow-md"
            >
              <img src={google} alt="google" />
              <span className="text-base font-semibold">
                Continue With google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
