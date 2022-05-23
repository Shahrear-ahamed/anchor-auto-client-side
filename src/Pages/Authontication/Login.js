import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let loadError;
  if (error) {
    loadError = error.code.split("/")[1];
  }

  // submit data
  const onSubmit = async (data) => {
    console.log(data);
    await signInWithEmailAndPassword(data.email, data.password);
  };

  // ui are here
  return (
    <div className="minMax grid items-center">
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
            Let's Continue
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
            {loadError && <p className="text-red-500 text-left">{loadError}</p>}
            <p className="pt-3 text-left">
              <Link className="login-secondary" to="/password-reset">
                Forget Password?
              </Link>
            </p>

            {loading ? (
              <button className="btn loading">loading</button>
            ) : (
              <input
                className="login-button text-black w-32 py-3 rounded-sm mt-5 cursor-pointer"
                type="submit"
                value="Login"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
