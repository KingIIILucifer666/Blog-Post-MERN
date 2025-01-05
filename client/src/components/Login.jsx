import { useState } from "react";
import PropTypes from "prop-types";
import { verifyUser } from "../api/api.js";

const Login = ({ setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = { email, password };
      const response = await verifyUser(user);

      if (response.status === 200) {
        console.log("Logged in user:", response);
      }
      resetFields();
    } catch (error) {
      console.error("error during login: ", error);
    }
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
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
            type="login-password"
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
