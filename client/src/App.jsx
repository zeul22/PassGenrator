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
import Dashboard from "./Components/Dashboard/DashboardHome.jsx";
import Chat from "./Components/Chat.jsx";
import DashboardNav from "./Components/Dashboard/DashboardNav.jsx";
import DashboardHome from "./Components/Dashboard/DashboardHome.jsx";
import DashboardAnalyitcs from "./Components/Dashboard/DashboardAnalyitcs.jsx";
import DashboardKPI from "./Components/Dashboard/DashboardKPI.jsx";
import DashboardMarket from "./Components/Dashboard/DashboardMarket.jsx";
import Chatapp from "./Components/ChatApp/Chatapp.jsx"
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Private Routes */}
        <Route path="/gen" element={<Generator />} />
        <Route path="/chat" element={<Chat />} />

        {/* Public Routes */}
        <Route path="/a" element={<About />} />
        <Route path="/c" element={<Contact />} />
        <Route path="/platform" element={<Trading />} />

        {/* Users */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route
          path="/dashboard/*"
          element={
            <>
              <DashboardNav />
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/analytics" element={<DashboardAnalyitcs />} />
                <Route path="/market" element={<DashboardMarket />} />
                <Route path="/kpis" element={<DashboardKPI />} />
              </Routes>
            </>
          }
        />

        {/* Chatapp */}

        {/* Dashboard */}
        <Route
          path="/chatapp/*"
          element={
            <>
              <Routes>
                <Route path="/" element={<Chatapp />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
