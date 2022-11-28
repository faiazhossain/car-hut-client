import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }
  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created successfully");
        const userInfo = {
          displayName: data.name,
        };
        saveUser(data.name, data.email, data.role);
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    console.log(user);
    fetch("https://car-hut-server-gilt.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        setCreatedUserEmail(email);
      });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="h-[800px] flex flex-col justify-center items-center">
      <div className="w-96 p-7 bg-slate-200 rounded-xl">
        <h2 className="text-4xl">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Check box */}
          <div className="form-control w-full max-w-xs">
            <label className="label cursor-pointer">
              <span className="label-text">Seller</span>
              <input
                type="checkbox"
                className="checkbox"
                {...register("role")}
                value="seller"
                checked={isChecked}
                onChange={handleOnChange}
              />
            </label>
          </div>

          {/* password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message:
                    "password must have a uppercase and a lowercase character, must contain a special character",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign up"
            type="submit"
          />
        </form>
        <p>
          Already have an account?
          <Link to="/login" className="text-pink-500">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="w-full btn btn-primary">Continue with google</button>
      </div>
    </div>
  );
};

export default SignUp;
