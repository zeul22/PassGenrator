import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav.jsx";
import Generator from "./Components/Generator.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gen" element={<Generator />} />
        <Route path="/a" element={<About />} />
        <Route path="/c" element={<Contact />} />
      </Routes>
    </Router>
  );
}


export default App;




