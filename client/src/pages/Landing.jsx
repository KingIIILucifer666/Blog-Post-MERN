import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/register";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const [view, setView] = useState(1);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {view ? (
        <div className="flex flex-col w-96">
          <Login />
          <Button
            onClick={() => {
              setView(!view);
            }}
          >
            Create new Account?
          </Button>
        </div>
      ) : (
        <div className="flex flex-col w-96">
          <Register />
          <Button
            onClick={() => {
              setView(!view);
            }}
          >
            Existing user? Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Landing;
