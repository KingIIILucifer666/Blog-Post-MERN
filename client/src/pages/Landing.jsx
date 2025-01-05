import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/register";

const Landing = () => {
  const [view, setView] = useState(1);
  return (
    <>{view ? <Login setView={setView} /> : <Register setView={setView} />}</>
  );
};

export default Landing;
