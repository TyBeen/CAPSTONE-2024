import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
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
  const yourJwtToken = localStorage.getItem("jwtToken");
  const decoded = jwtDecode(yourJwtToken);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    userIsLogged();
  });

  useEffect(() => {
    userIsAdmin();
  });

  async function userIsLogged() {
    if (decoded) {
      setIsLoggedIn(true);
    }
  }

  async function userIsAdmin() {
    if (decoded.isAdmin) {
      setIsAdmin(true);
    }
  }

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
          <Route path="/controlpanel" element={<ControlPanel />} />
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
