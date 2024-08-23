import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import Nav from "../header/Nav";

export default function Library() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "4vw"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3em",
          }}
        >
          Capstone Presentation Video Library
        </h1>
        <embed
          src="https://drive.google.com/embeddedfolderview?id=1l1xHtaXW6QsVvrYNuYRom5cM6CUuOtrk#grid"
          style={{
            width: "100%",
            height: "600px",
            border: "0",
          }}
        ></embed>
      </div>
      <div
        style={{
          display: "block",
          textAlign: "right",
          marginRight: "50px",
        }}
      >
        <Button
          size="xs"
          type="click"
          onClick={() => navigate("/")}
          style={{
            display: "inline-flex",
            backgroundColor: "#ff532f",
            color: "white",
            float: "right",
            margin: "1vh"
          }}
        >
          Back Home
        </Button>
      </div>
    </>
  );
}

//method for embed found at https://stackoverflow.com/questions/20681974/how-to-embed-a-google-drive-folder-in-a-web-page
