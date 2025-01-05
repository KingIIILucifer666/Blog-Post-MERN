import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/landing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CreateBlog from "./pages/CreateBlog";
import ReadBlog from "./pages/ReadBlog";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // const base_url = process.env.API_BASE_URL || "http://localhost:8000";
  useEffect(() => {
    let token = sessionStorage.getItem("User");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/read-blog/:id" element={<ReadBlog />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
