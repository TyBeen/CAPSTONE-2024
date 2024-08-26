import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import Nav from "../header/Nav";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div>
        <div
          style={{
            width: "95vw",
            height: "50vh",
            fontSize: "50px",
            textAlign: "center",
            marginLeft: "1vw",
            marginTop: "5vh",
          }}
        >
          <h4>
            <b>Meet the Dev Team!</b>
          </h4>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "row",
              backgroundColor: "#1a9988",
              fontSize: "15px",
            }}
          >
            <div
              style={{
                marginRight: "10px",
                justifyContent: "center",
                alignContent: "center",
                border: "1px solid black",
                padding: "20px",
              }}
            >
              <div
                style={{
                  marginLeft: "45px",
                  justifyContent: "center",
                  alignContent: "center",
                  padding: "20px",
                }}
              >
                <img src="https://loremflickr.com/320/240/dog"></img>
              </div>
              <p>
                <b>Player One Bio</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                at felis semper, tempus mi id, feugiat orci. Donec auctor
                pellentesque tellus ac dapibus. Donec imperdiet, purus id
                lacinia ultricies, nisi neque faucibus sem, non dictum mauris
                nisi a nisl. Aliquam luctus rhoncus dui at egestas. Integer urna
                enim, tincidunt et lectus eu, posuere pulvinar lectus. Proin
                interdum purus finibus ornare iaculis. Quisque placerat neque ac
                elementum maximus. In magna ligula, tincidunt sit amet finibus
                ultrices, posuere at erat. In ut eleifend risus, tristique
                lacinia turpis. Etiam eleifend finibus erat nec luctus. Cras
                consequat consequat erat, non volutpat nisi vehicula sit.
              </p>
            </div>
            <div
              style={{
                marginRight: "10px",
                justifyContent: "center",
                alignContent: "center",
                border: "1px solid black",
                padding: "20px",
              }}
            >
              <div
                style={{
                  marginLeft: "45px",
                  justifyContent: "center",
                  alignContent: "center",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    marginLeft: "45px",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: "20px",
                  }}
                >
                  <img src="https://loremflickr.com/g/320/240/paris"></img>
                </div>
              </div>
              <p>
                <b>Player Two Bio</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                at felis semper, tempus mi id, feugiat orci. Donec auctor
                pellentesque tellus ac dapibus. Donec imperdiet, purus id
                lacinia ultricies, nisi neque faucibus sem, non dictum mauris
                nisi a nisl. Aliquam luctus rhoncus dui at egestas. Integer urna
                enim, tincidunt et lectus eu, posuere pulvinar lectus. Proin
                interdum purus finibus ornare iaculis. Quisque placerat neque ac
                elementum maximus. In magna ligula, tincidunt sit amet finibus
                ultrices, posuere at erat. In ut eleifend risus, tristique
                lacinia turpis. Etiam eleifend finibus erat nec luctus. Cras
                consequat consequat erat, non volutpat nisi vehicula sit.
              </p>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                border: "1px solid black",
                padding: "20px",
              }}
            >
              <div
                style={{
                  marginLeft: "45px",
                  justifyContent: "center",
                  alignContent: "center",
                  padding: "20px",
                }}
              >
                <img src="https://loremflickr.com/320/240/dog"></img>
              </div>
              <p>
                <b>Player Three Bio</b>
              </p>
              <p>
                Morrigan is currently making the career transition from customer
                service to a software developer! Having worked in a bakery, a
                deli, forged from the kitchens of the Vermont College of Fine
                Arts and even as a night auditor of a well known hotel chain,
                she is adaptable and well equipped to deal with public relations
                and various situations! Well versed in javascript, she enjoys
                creating the backend working such as routes and controllers and
                elements of physical design aspect such as placement, colors,
                and themes. She plans to be a remote software engineer for the
                freedom of working from anywhere. When not coding, Morrigan
                spends her time playing video games with her friends, editing
                videos and writing fantasy.
              </p>
              <a href="linkedin.com/in/morrigan-roseingrave-42407b324">Check out her LinkedIn here!</a>
            </div>
          </div>
          <div
            style={{
              display: "block",
              float: "right",
              marginTop: "1vh",
            }}
          >
            <Button
              size="xs"
              type="click"
              onClick={() => navigate("/")}
              style={{
                backgroundColor: "#ff532f",
                color: "white",
              }}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
