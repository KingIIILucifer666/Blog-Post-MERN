import { useState } from "react";
import PropTypes from "prop-types";
import { verifyUser } from "../api/api.js";
import { useNavigate } from "react-router-dom";

const Login = ({ setView }) => {
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-email">Email: </label>
          <input
            type="login-email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="login-password">Password: </label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Create a new account?{" "}
        <button
          onClick={() => {
            setView(0);
          }}
        >
          Register here
        </button>
      </p>
    </div>
  );
};

Login.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Login;
