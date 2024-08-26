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
                border: "0px",
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
                <b>Amanda Brennon</b>
              </p>
              <p
              style={{
                marginTop: "5%"
              }}>
              Amanda decided to make a change after a career break at 35 for the birth of her son. With extensive work experience in early childhood ed, world arts & linguistics, volleyball coaching, and transcription, Amanda was ready to level up and work as a software developer. She loves puzzles and has strong organizational skills (just don’t look at the house right now). She enjoys MERV full stack development and has two custom websites to build for friends once she finishes the bootcamp! Amanda plans to be a remote software engineer while homeschooling her son and dividing time between family in the USA and Tanzania.
              </p>
              <div
              style={{
                marginTop: "5%",
                fontWeight: "bold"
              }}>
                <a href="www.linkedin.com/in/amanda-jeanne-710a04276" target="_blank">LinkedIn</a>
              </div>
                
            </div>
            <div
              style={{
                marginRight: "10px",
                justifyContent: "center",
                alignContent: "center",
                border: "0px",
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
                <b>Ty Benedict</b>
              </p>
              <p
              style={{
                marginTop: "5%"
              }}>
                Ty has always loved computers since he was a kid because his dad is a software engineer. He has always wanted to know how computers worked. He has learned to build computers from scratch and wanted to expand his knowledge to how the programs that the computers he builds run. In doing so he found what javascript was and started to learn from youtube and other various online resources. Eventually he hopes to become a software engineer just like his father. He implented some of his knowledge into this web application is proud of how it turned out!
              </p>
              <div
              style={{
                marginTop: "5%",
                fontWeight: "bold",
                marginBottom: "5%"
              }}>
                <a href="https://www.linkedin.com/in/ty-benedict-0320412a5/" target="_blank">LinkedIn</a>
              </div>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                border: "0px",
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
                <b>Morrigan Roseingrave</b>
              </p>
              <p>
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
