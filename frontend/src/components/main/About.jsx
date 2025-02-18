import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import Nav from "../header/Nav";
import AmandaPhoto from "../../assets/Amanda_bio_photo.jpg";
import TyPhoto from "../../assets/IMG_4353.jpg";
import MorriganPhoto from "../../assets/Screenshot_20240810-1751412.png";

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
            fontSize: "3em",
            justifyContent: "center",
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
              fontSize: "1rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                marginRight: "10px",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "20vw",
                  height: "60vh",
                }}
              >
                <img src={AmandaPhoto}></img>
              </div>
              <p
                style={{
                  marginBottom: "4%",
                  fontSize: "1.5em",
                }}
              >
                <b>Amanda Brennan</b>
              </p>
              <p
                style={{
                  marginTop: "2%",
                  textAlign: "justify",
                }}
              >
                Amanda decided to make a change after a career break at 35 for
                the birth of her son. With extensive work experience in early
                childhood ed, world arts & linguistics, volleyball coaching, and
                transcription, Amanda was ready to level up and work as a
                software developer. She loves puzzles and has strong
                organizational skills (just don&apos;t look at the house right
                now). She enjoys MERN full stack development and has two custom
                websites to build for friends once she finishes the bootcamp!
                Amanda plans to be a remote software engineer while
                homeschooling her son and dividing time between family in the
                USA and Tanzania.
              </p>
              <div
                style={{
                  marginTop: "5%",
                  fontWeight: "bold",
                }}
              >
                <Button
                  size="sm"
                  color="black"
                  href="https://www.linkedin.com/in/amanda-jeanne-710a04276"
                  target="_blank"
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                marginRight: "10px",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "20vw",
                  height: "60vh",
                }}
              >
                <img src={TyPhoto}></img>
              </div>
              <p
                style={{
                  marginBottom: "4%",
                  fontSize: "1.5em",
                }}
              >
                <b>Ty Benedict</b>
              </p>
              <p
                style={{
                  marginTop: "5%",
                  textAlign: "justify",
                }}
              >
                Ty has always loved computers since he was a kid because his dad
                is a software engineer. He has always wanted to know how
                computers worked. He has learned to build computers from scratch
                and wanted to expand his knowledge to how the programs that the
                computers he builds run. In doing so he found what javascript
                was and started to learn from youtube and other various online
                resources. Eventually he hopes to become a software engineer
                just like his father. He implented some of his knowledge into
                this web application is proud of how it turned out!
              </p>
              <div
                style={{
                  marginTop: "5%",
                  fontWeight: "bold",
                }}
              >
                <Button
                  size="sm"
                  href="https://www.linkedin.com/in/ty-benedict-0320412a5/"
                  target="_blank"
                  color="black"
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                marginRight: "10px",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "20vw",
                  height: "60vh",
                }}
              >
                <img src={MorriganPhoto}></img>
              </div>
              <p
                style={{
                  marginBottom: "4%",
                  fontSize: "1.5em",
                }}
              >
                <b>Morrigan Roseingrave</b>
              </p>
              <p style={{ marginTop: "2%", textAlign: "justify" }}>
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
              <div
                style={{
                  marginTop: "5%",
                  fontWeight: "bold",
                }}
              >
                <Button
                  size="sm"
                  href="https://linkedin.com/in/morrigan-roseingrave-42407b324"
                  target="_blank"
                  color="black"
                >
                  LinkedIn
                </Button>
              </div>
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
