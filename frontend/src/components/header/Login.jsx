import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate(); //to direct user based on credentials (admin or sponsor)

  const [loginFailed, setLoginFailed] = useState("");

  async function handleAccountLogin(e) {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const response = await fetch(
      `https://capstone-2024-ppe0.onrender.com/users/login`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //error handling
    if (response.status === 204) {
      setLoginFailed("Incorrect password. Please try again.");

      e.target.reset();
      setTimeout(() => setLoginFailed(""), 3000);
    } else {
      const userData = await response.json();

      //store user info
      localStorage.setItem("jwtToken", userData.token);
      localStorage.setItem("loggedIn", userData.loggedIn);
      localStorage.setItem("userInfo", userData.user._id);

      //nav user based on auth
      if (userData.user.isAdmin === true) {
        navigate("/controlpanel");
      } else {
        navigate("/dashboard");
      }
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#1b3b50",
          color: "white",
          alignContent: "center",
          paddingTop: "20vh",
          paddingBottom: "34vh",
        }}
      >
        <form onSubmit={handleAccountLogin} className="max-w-sm mx-auto">
          <div className="mb-5">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white">
              Login
            </h1>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white-900 dark:text-orange"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <p className="text-red-600">{loginFailed}</p>
          </div>

          <div className="flex items-start mb-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="text-center text-sm font-light text-orange-500 dark:text-orange-400">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Register here
          </a>
        </p>
        <p className="text-center text-sm font-light text-orange-500 dark:text-orange-400">
          <a
            href="/forgotPassword"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot your password?
          </a>
        </p>
      </div>
    </>
  );
}
