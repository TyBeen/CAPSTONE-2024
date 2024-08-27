import "../../../CSS/Categories.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigateCat = useNavigate();
  const [hoveredClass, setHoveredClass] = useState("");
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);

  useEffect(() => {
    const containerElement1 = containerRef1.current;
    const containerElement2 = containerRef2.current;
    const containerElement3 = containerRef3.current;
    const containerElement4 = containerRef4.current;

    if (!hoveredClass) return;

    const textElements = document.querySelectorAll(`.${hoveredClass}`);

    textElements.forEach((textElement) => {
      if (textElement.classList.contains(hoveredClass)) {
        textElement.style.visibility = "visible";
      } else {
        textElement.style.visibility = "hidden";
      }
    });
  }, [hoveredClass]);

  const handleMouseEnter = (className) => setHoveredClass(className);
  const handleMouseLeave = () => setHoveredClass("");

  return (
    <>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2em",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          Our Different Bootcamps
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              width: "80%",
              maxWidth: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              ref={containerRef1}
              className="image-container"
              style={{
                color: "black",
                textAlign: "center",
                border: "0px",
              }}
              onMouseEnter={() => handleMouseEnter("SFTWREPts")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="image"
                style={{
                  height: "20vh",
                  width: "15vw",
                  margin: "auto",
                  position: "relative",
                }}
              />
              <div
                className="SFTWREPts bullet-points"
                style={{
                  position: "absolute",
                  bottom: "16vh",
                  left: "0vw",
                  color: "white",
                }}
              >
                • Javascript Foundations
              </div>
              <div
                className="SFTWREPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "13vh",
                  left: "0vw",
                }}
              >
                • React Front-End Development
              </div>
              <div
                className="SFTWREPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "10vh",
                  left: "0vw",
                }}
              >
                • MongoDB Back-End Development
              </div>
              <div
                className="SFTWREPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "7vh",
                  left: "0vw",
                }}
              >
                • Full-Stack Software Development
              </div>
              <div className="SFTWREENGR" style={{}}>
                Software Engineering
              </div>
            </div>
            <div
              ref={containerRef2}
              className="image-container"
              style={{
                color: "black",
                textAlign: "center",
                border: "0px",
                position: "relative",
              }}
              onMouseEnter={() => handleMouseEnter("DMPts")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=2048x2048&w=is&k=20&c=B0aClNHXUKSOsHPwEVuYWT2u_haG5YGGo24mrzhqcSw="
                className="image"
                style={{
                  height: "20vh",
                  width: "15vw",
                  margin: "auto",
                }}
              />
              <div
                className="DMPts bullet-points"
                style={{
                  position: "absolute",
                  bottom: "16vh",
                  left: "0vw",
                  color: "white",
                }}
              >
                • Social Media Management
              </div>
              <div
                className="DMPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "13vh",
                  left: "0vw",
                }}
              >
                • Content and Email Marketing
              </div>
              <div
                className="DMPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "10vh",
                  left: "0vw",
                }}
              >
                • Search Engine Marketing
              </div>
              <div
                className="DMPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "7vh",
                  left: "0vw",
                }}
              >
                • Marketing Automation
              </div>
              <button
                type="click"
                onClick={() => navigateCat("/digitalMarketing")}
              >
                Digital Marketing
              </button>
            </div>
            <div
              ref={containerRef3}
              className="image-container"
              style={{
                color: "black",
                textAlign: "center",
                border: "0px",
                position: "relative",
              }}
              onMouseEnter={() => handleMouseEnter("UIUXPTS")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="https://images.pexels.com/photos/6615230/pexels-photo-6615230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="image"
                style={{
                  height: "20vh",
                  width: "15vw",
                  margin: "auto",
                }}
              />
              <div
                className="UIUXPTS bullet-points"
                style={{
                  position: "absolute",
                  bottom: "16vh",
                  left: "0vw",
                  color: "white",
                }}
              >
                • UX/UI Design Fundementals
              </div>
              <div
                className="UIUXPTS bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "13vh",
                  left: "0vw",
                }}
              >
                • UX Research
              </div>
              <div
                className="UIUXPTS bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "10vh",
                  left: "0vw",
                }}
              >
                • Usability
              </div>
              <div
                className="UIUXPTS bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "7vh",
                  left: "0vw",
                }}
              >
                • Interface Design
              </div>
              <button type="click" onClick={() => navigateCat("/UiUxDesign")}>
                UI/UX Design
              </button>
            </div>
            <div
              ref={containerRef4}
              className="image-container"
              style={{
                color: "black",
                textAlign: "center",
                border: "0px",
                position: "relative",
              }}
              onMouseEnter={() => handleMouseEnter("DAPts")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="image"
                style={{
                  height: "20vh",
                  width: "15vw",
                  margin: "auto",
                }}
              />
              <div
                className="DAPts bullet-points"
                style={{
                  position: "absolute",
                  bottom: "16vh",
                  left: "0vw",
                  color: "white",
                }}
              >
                • Business Intelligence Technologies
              </div>
              <div
                className="DAPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "13vh",
                  left: "0vw",
                }}
              >
                • Data Collection and Cleaning
              </div>
              <div
                className="DAPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "10vh",
                  left: "0vw",
                }}
              >
                • Data Visualization
              </div>
              <div
                className="DAPts bullet-points"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "7vh",
                  left: "0vw",
                }}
              >
                • Statistical Analysis
              </div>
              <button
                type="click"
                onClick={() => navigateCat("/DataAnalytics")}
              >
                Data Analytics
              </button>
            </div>
            <img src="" />
          </div>
        </div>
      </div>
    </>
  );
}
