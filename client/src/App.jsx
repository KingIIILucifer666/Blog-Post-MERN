import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/landing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CreateBlog from "./pages/CreateBlog";
import ReadBlog from "./pages/ReadBlog";
import Profile from "./pages/Profile";

function App() {
  // const base_url = process.env.API_BASE_URL || "http://localhost:8000";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home " element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/read-blog/:id" element={<ReadBlog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
