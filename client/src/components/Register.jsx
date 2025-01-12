import { useState } from "react";
import { addUser } from "../api/api.js";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";

const Register = () => {
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="********"
          value={user.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
