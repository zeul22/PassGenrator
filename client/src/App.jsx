import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Nav from "./Components/Nav.jsx";
import Generator from "./Components/Generator.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Logout from "./Components/Logout.jsx";
import Trading from "./Components/Trading.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Chat from "./Components/Chat.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Private Routes */}
        <Route path="/gen" element={<Generator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />

        {/* Public Routes */}
        <Route path="/a" element={<About />} />
        <Route path="/c" element={<Contact />} />
        <Route path="/platform" element={<Trading />} />

        {/* Users */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
