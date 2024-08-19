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
              display: "flex",
              flexDirection: "row",
              fontSize: "15px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "3vh",
                marginRight: "10px",
                border: "1px solid black",
                backgroundColor: "#1a9988",
                padding: "20px"
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  paddingTop: "10px"
                }}
              >
                <img src="https://loremflickr.com/320/240/dog"></img>
              </div>
              <p style={{fontSize: "2em"}}>
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
                display: "flex",
                flexDirection: "column",
                rowGap: "3vh",
                marginRight: "10px",
                border: "1px solid black",
                backgroundColor: "#1a9988",
                padding: "20px"
              }}
            >
                <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  paddingTop: "10px"
                }}
              >
                  <img src="https://loremflickr.com/g/320/240/paris"></img>
                </div>
              <p style={{fontSize: "2em"}}>
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
                display: "flex",
                flexDirection: "column",
                rowGap: "3vh",
                marginRight: "10px",
                border: "1px solid black",
                backgroundColor: "#1a9988",
                padding: "20px"
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  paddingTop: "10px"
                }}
              >
                <img src="https://loremflickr.com/320/240/dog"></img>
              </div>
              <p style={{fontSize: "2em"}}>
                <b>Player Three Bio</b>
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
          </div>
        {/* </div> */}
        <div
          style={{
            display: "block",
            float: "right",
            marginTop: "1vh"
          }}
        >
          <Button
          size="xs"
            type="click"
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#ff532f",
              color: "white"
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
