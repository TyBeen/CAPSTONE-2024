import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import Landing from "./components/main/Landing";
import Register from "./components/header/Register";
import Login from "./components/header/Login";
import About from "./components/main/About";
import Secret from "./components/main/Secret";
import Library from "./components/main/Library";
import Dashboard from "./components/main/Dashboard";
import ControlPanel from "./components/main/ControlPanel";
import Proposal from "./components/main/Proposal";

function App() {
  // const yourJwtToken = localStorage.getItem("jwtToken");
  // const loggedIn = localStorage.getItem("loggedIn");
  // const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     if (yourJwtToken) {
//     const decoded = jwtDecode(yourJwtToken);
//     userIsLogged(decoded);
//     userIsAdmin(decoded);
//     }
//   });

//   async function userIsLogged(decoded) {
//     if (loggedIn) {
//       try {
//       const response = await fetch(`http://localhost:3000/users/${decoded._id}`);

//       const data = await response.json();

//       if (data.isAdmin) {
//         setIsLoggedIn(true);
//       }
//     } catch (err) {
//       console.log("err", err);
//       location.reload();
//     }
//   }
// }

//   async function userIsAdmin(decoded) {
//     if (loggedIn) {
//       try {
//       const response = await fetch(`http://localhost:3000/users/${decoded._id}`);

//       const data = await response.json();

//       if (data.isAdmin) {
//         setIsAdmin(true);
//       }
//     } catch (err) {
//       console.log("err", err);
//       location.reload();
//     }
//     }
//   }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="/library" element={<Library />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/controlpanel" element={<ControlPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


          // <Route path="/dashboard" element={isLoggedIn ? (<Dashboard />) : (navigate("/login"))} />
          // <Route path="/proposal" element={isLoggedIn ? (<Proposal />) : (navigate("/login"))} />
          // <Route path="/controlpanel" element={isAdmin ? (<ControlPanel />) : (navigate("/"))} />