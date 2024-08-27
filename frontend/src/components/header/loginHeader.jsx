/* eslint-disable react-hooks/exhaustive-deps */
import Nav from "./Nav.jsx";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

export default function LoginHeader() {
  const navigateProp = useNavigate();
  const yourJwtToken = localStorage.getItem("jwtToken");
  const decoded = jwtDecode(yourJwtToken);

  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    setPersistingCurrentUserObject();
  }, []);

  async function setPersistingCurrentUserObject() {
    const response = await fetch(
      `https://capstone-2024-ppe0.onrender.com/users/${decoded._id}`
    );

    const data = await response.json();

    setUserInfo(data);
  }

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Nav />

      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor: "#1A9988",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "auto",
            justifyContent: "center",
          }}
        >
          <div>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                height: "auto",
                fontSize: "3em",
                maxWidth: "500%",
              }}
            >
              Welcome, {userInfo.firstName}!
            </h1>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5vh",
                color: "white",
                width: "65vw",
              }}
            >
              We are excited you have signed up as a sponsor! To get started,
              take a glance below at the descriptions for the different
              bootcamps that Upright offers- you will be asked to assign your
              project proposal to one of these. But don&apos;t worry! If Upright
              Capstone admin sees your project better served by a different
              class, they can reassign it. <br />
              <br />
              You can also get an idea of what our classes are capable of by
              clicking the button below and watching a capstone
              presentation/demo from the library. We recommend it before
              submitting your own proposal for a capstone project! <br />
              <br />
              When you are ready to make your submission, click the button below
              to submit a proposal. You can come back later and check the status
              of your submitted proposal(s) here, too!
            </p>
            <p
              style={{
                display: "flex",
                columnGap: "2vw",
                justifyContent: "center",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              <Button
                size="xs"
                type="click"
                onClick={() => navigateProp("/library")}
                style={{
                  display: "inline-flex",
                  backgroundColor: "#ff532f",
                  color: "white",
                }}
              >
                Capstone Presentation Library
              </Button>

              <Button
                size="xs"
                type="click"
                onClick={() => navigateProp("/Proposal")}
                style={{
                  display: "inline-flex",
                  backgroundColor: "#ff532f",
                  color: "white",
                }}
              >
                Submit a Proposal / Check on my Proposal
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
