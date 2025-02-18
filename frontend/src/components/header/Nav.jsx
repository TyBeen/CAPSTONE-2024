/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import { Button } from "flowbite-react";
import { jwtDecode } from "jwt-decode";

export default function Nav() {
  const navigate = useNavigate();
  const yourJwtToken = localStorage.getItem("jwtToken");
  const loggedIn = localStorage.getItem("loggedIn");

  const [userInfo, setUserInfo] = useState([]); //userInfo that persists
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  //tracks if user is logged in to show/hide buttons
  useEffect(() => {
    if (yourJwtToken) {
      const decoded = jwtDecode(yourJwtToken);

      setPersistingCurrentUserObject(decoded);

      loginCheck();
    }
  }, []);

  //saves user info if they are logged in
  async function setPersistingCurrentUserObject(decoded) {
    const response = await fetch(
      `https://capstone-2024-ppe0.onrender.com/users/${decoded._id}`
    );

    const data = await response.json();

    setUserInfo(data);

    if (data.isAdmin) {
      setIsAdmin(true);
    }
  }

  function loginCheck() {
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }

  return (
    <div
      style={{
        height: "10vh",
        backgroundColor: "#1b3b50",
        alignContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "right",
            width: "9vw",
          }}
        >
          <img
            onClick={() => {
              navigate("/");
            }}
            width="100px"
            height="100px"
            src="https://cdn.prod.website-files.com/64921323294d7b037da1a52c/649b14c49b4e1c2fd060f3f2_Upright-logo.svg"
          ></img>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            flexDirection: "row",
            columnGap: "15px",
            marginRight: "5px",
            width: "88vw",
          }}
        >
          <Button
            type="click"
            onClick={() => navigate("/secret")}
            style={{
              display: "inline-flex",
              backgroundColor: "unset",
              color: "white",
              width: "8px",
            }}
            className="focus:outline-none hover:bg-transparent focus:ring-4 focus:ring-transparent"
          ></Button>
          <Button
            size="sm"
            type="click"
            onClick={() => navigate("/")}
            style={{
              display: "inline-flex",
              backgroundColor: "#ff532f",
              color: "white",
            }}
            className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Home
          </Button>

          {isAdmin && (
            <Button
              size="sm"
              type="click"
              onClick={() => navigate("/controlpanel")}
              style={{
                display: "inline-flex",
                backgroundColor: "#ff532f",
                color: "white",
              }}
              className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Admin Control Panel - {userInfo.firstName}
            </Button>
          )}

          <Button
            size="sm"
            type="click"
            onClick={() => navigate("/about")}
            style={{
              display: "inline-flex",
              backgroundColor: "#ff532f",
              color: "white",
            }}
            className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            More About the Dev Team
          </Button>

          {!isLoggedIn && (
            <>
              <Button
                size="sm"
                type="click"
                onClick={() => navigate("/register")}
                style={{
                  display: "inline-flex",
                  backgroundColor: "#ff532f",
                  color: "white",
                }}
                className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
              >
                Register as New User
              </Button>

              <Button
                size="sm"
                type="click"
                onClick={() => navigate("/login")}
                style={{
                  display: "inline-flex",
                  backgroundColor: "#ff532f",
                  color: "white",
                }}
                className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
              >
                Login
              </Button>
            </>
          )}

          {isLoggedIn && (
            <>
              <Button
                size="sm"
                type="click"
                onClick={() => navigate("/dashboard")}
                style={{
                  display: "inline-flex",
                  backgroundColor: "#ff532f",
                  color: "white",
                }}
                className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
              >
                Sponsor Dashboard
              </Button>

              <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
