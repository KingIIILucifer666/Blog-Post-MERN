import { useState } from "react";
import { addUser } from "../api/api.js";
import PropTypes from "prop-types";

const Register = ({ setView }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User data: ", user);

    try {
      const response = await addUser(user);
      if (response.status === 201) {
        console.log("User registered successfully!");
        setUser({ username: "", password: "", email: "" });
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      console.alert("Failed to register user");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <button
          onClick={() => {
            setView(1);
          }}
        >
          Login here
        </button>
      </p>
    </div>
  );
};

Register.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Register;
