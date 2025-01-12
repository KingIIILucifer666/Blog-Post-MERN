import { useState } from "react";
import { verifyUser } from "../api/api.js";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = { email, password };
      const response = await verifyUser(user);

      if (response.status === 200) {
        console.log("Logged in user:", response);
        const token = response.data.token;
        sessionStorage.setItem("User", token);
        navigate("/home");
      }
    } catch (error) {
      console.error("error during login: ", error);
    }
  };

  return (
    <div>
      <h1 className="my-5">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
        <Input
          placeholder="Email"
          type="login-email"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="********"
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
