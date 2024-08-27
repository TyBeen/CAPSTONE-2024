/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

export default function Logout({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout(e) {
    setIsLoggedIn(false);

    localStorage.removeItem("jwtToken");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userInfo");

    navigate("/login");
  }

  return (
    <Button
      size="sm"
      style={{
        display: "inline-flex",
        backgroundColor: "#ff532f",
        color: "white",
      }}
      type="click"
      onClick={(e) => {
        handleLogout(e);
      }}
    >
      Logout
    </Button>
  );
}
