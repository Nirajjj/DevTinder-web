import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div class="bg-base-200 min-h-screen flex items-center justify-center">
      <div class="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure class="lg:w-1/2">
          <img
            // src="https://picsum.photos/seed/login/800/600"
            src="\DALL·E 2024-12-11 07.50.27 - A friendly software developer collaborating on a project. The scene depicts two developers working together in a modern workspace with laptops, notebo.webp"
            alt="Random image"
            class="object-cover w-full h-full"
          />
        </figure>
        <div class="card-body lg:w-1/2">
          <h2 class="card-title text-2xl font-bold mb-6">Login</h2>
          <form>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  class="grow"
                  value={emailId}
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                  // placeholder="email@example.com"
                />
              </label>
            </div>
            <div class="form-control mt-4">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  class="grow"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  // placeholder="Enter password"
                />
              </label>
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
          <div class="divider">OR</div>
          <div class="text-center">
            <p>Don't have an account?</p>
            <a href="#" class="link link-primary">
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
