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


        textElements.forEach(textElement => {
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
                marginBottom: "2%"
            }}>
                Our Different Bootcamps
            </h1>
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
            }}>
                <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "10px",
                    width: "80%",
                    maxWidth: "80%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div 
                    ref={containerRef1}
                    style={{
                        color: "black",
                        textAlign: "center",
                        border: "1px solid #ddd"
                    }}
                    onMouseEnter={() => handleMouseEnter("SFTWREPts")}
                    onMouseLeave={handleMouseLeave}
                    >
                        <img 
                        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        style={{
                            height: "20vh",
                            width: "15vw",
                            margin: "auto",
                            position: "relative"
                        }}/>
                        <div className="SFTWREPts"
                        style={{
                            position: "absolute",
                            bottom: "rgb(26, 153, 136)",
                            left: "15vw",
                            color: "white",
                            visibility: "hidden",
                            textShadow: "rgb(0, 0, 0) 2px 2px -1px" 
                        }}>
                        • Javascript Foundations
                        </div>
                        <div className="SFTWREPts"
                        style={{
                            position: "absolute",
                            color: "white",
                            bottom: "50vh",
                            left: "15vw",
                            visibility: "hidden",
                            textShadow: "rgb(0, 0, 0) 2px 2px -1px" 
                        }}>
                        • React Front-End Development
                        </div>
                        <div className="SFTWREPts"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "47vh",
                            left: "15vw",
                            visibility: "hidden"
                        }}>
                        • MongoDB Back-End Development
                        </div>
                        <div className="SFTWREPts"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "44vh",
                            left: "15vw",
                            visibility: "hidden"
                        }}>
                        • Full-Stack Software Development
                        </div>
                        <div className="SFTWREENGR" 
                        style={{

                        }}>
                            Software Engineering
                        </div>
                    </div>
                    <div
                    ref={containerRef2}
                    style={{
                        color: "rgb(26, 153, 136)",
                        textAlign: "center",
                        border: "1px solid #ddd",
                        position: "relative"
                    }}
                    onMouseEnter={() => handleMouseEnter("DMPts")}
                    onMouseLeave={handleMouseLeave}>
                        <img src="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=2048x2048&w=is&k=20&c=B0aClNHXUKSOsHPwEVuYWT2u_haG5YGGo24mrzhqcSw="
                        style={{
                            height: "20vh",
                            width: "15vw",
                            margin: "auto"
                        }}/>
                        <div className="DMPts"
                        style={{
                            position: "absolute",
                            bottom: "16vh",
                            left: "5vw",
                            color: "rgb(26, 153, 136)",
                            visibility: "hidden"
                        }}>
                        • Social Media Management

                        </div>
                        <div className="DMPts"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "13vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}>
                        • Content and Email Marketing

                        </div>
                        <div className="DMPts"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "10vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}>
                        • Search Engine Marketing

                        </div>
                        <div className="DMPts"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "7vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}
                        >
                        • Marketing Automation
                        </div>
                        <button
                        type="click"
                        onClick={() => navigateCat('/digitalMarketing')}>
                        Digital Marketing</button>
                    </div>
                    <div
                    ref={containerRef3}
                    style={{
                        color: "rgb(26, 153, 136)",
                        textAlign: "center",
                        border: "1px solid #ddd",
                        position: "relative"
                    }}
                    onMouseEnter={() => handleMouseEnter("UIUXPTS")}
                    onMouseLeave={handleMouseLeave}
                    >
                        <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            style={{
                                height: "20vh",
                                width: "15vw",
                                margin: "auto"
                            }}
                        />
                        <div className="UIUXPTS"
                        style={{
                            position: "absolute",
                            bottom: "8vh",
                            left: "5vw",
                            color: "rgb(26, 153, 136)",
                            visibility: "hidden"
                        }}>
                        • UX/UI Design Fundementals

                        </div>
                        <div className="UIUXPTS"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "11vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}>
                        • UX Research

                        </div>
                        <div className="UIUXPTS"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "14vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}>
                        • Usability

                        </div>
                        <div className="UIUXPTS"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "17vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}>
                        • Interface Design
                        </div>
                        <button
                        type="click"
                        onClick={() => navigateCat('/UiUxDesign')}>
                        UI/UX Design</button>

                    </div>
                    <div
                    ref={containerRef4}
                    style={{
                        color: "black",
                        textAlign: "center",
                        border: "1px solid #ddd",
                        marginLeft: "-2%",
                        position: "relative"
                    }}
                    onMouseEnter={() => handleMouseEnter("DAPts")}
                    onMouseLeave={handleMouseLeave}>
                        <img src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        style={{
                            height: "20vh",
                            width: "15vw",
                            margin: "auto"
                        }}/>
                        <div className="DAPts"
                        style={{
                            position: "absolute",
                            bottom: "8vh",
                            left: "5vw",
                            color: "rgb(26, 153, 136)",
                            visibility: "hidden"
                        }}>
                        • Business Intelligence Technologies


                        </div>
                        <div className="DAPts"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "11vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}>
                        • Data Collection and Cleaning


                        </div>
                        <div className="DAPts"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "14vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}>
                        • Data Visualization


                        </div>
                        <div className="DAPts"
                        style={{
                            position: "absolute",
                            color: "rgb(26, 153, 136)",
                            bottom: "17vh",
                            left: "5vw",
                            visibility: "hidden"
                        }}>
                        • Statistical Analysis
                        </div>
                        <button
                        type="click"
                        onClick={() => navigateCat('/DataAnalytics')}>
                            Data Analytics</button>
                    </div>
                    <img src=""/>
                </div>
            </div>
        </div>
        </>
    )
}