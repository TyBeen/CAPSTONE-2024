import { useNavigate } from "react-router-dom";
import Nav from "../header/Nav";
import AmandaPhoto from "../../assets/Amanda_bio_photo.jpg"
import TyPhoto from "../../assets/IMG_4353.jpg"
import MorriganPhoto from "../../assets/Screenshot_20240810-1751412.png"

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
                padding: "20px"
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
                <img src={AmandaPhoto}></img>
              </div>
              <p>
                <b>Player One Bio</b>
              </p>
              <p>
              Amanda decided to make a change after a career break at 35 for the birth of her son. With extensive work experience in early childhood ed, world arts & linguistics, volleyball coaching, and transcription, Amanda was ready to level up and work as a software developer. She loves puzzles and has strong organizational skills (just don’t look at the house right now). She enjoys MERV full stack development and has two custom websites to build for friends once she finishes the bootcamp! Amanda plans to be a remote software engineer while homeschooling her son and dividing time between family in the USA and Tanzania.
              </p>
              <a href="www.linkedin.com/in/amanda-jeanne-710a04276">LinkedIn</a>
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
                  <img src={TyPhoto}></img>
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
                <img src={MorriganPhoto}></img>
              </div>
              <p>
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
        </div>
        <div
          style={{
            display: "block",
            textAlign: "right",
          }}
        >
          <button
            type="click"
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignContent: "flex-end",
              backgroundColor: "#ff532f",
              color: "black",
              border: "0px",
              borderRadius: "8px",
              marginTop: "45vh",
              marginLeft: "96vw",
              marginRight: "15px",
              padding: "5px",
              paddingBottom: "2px",
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}
