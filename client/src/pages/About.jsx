import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet
        porro repellat suscipit minima dicta excepturi distinctio est officiis
        iusto velit minus nesciunt iste explicabo earum itaque, quis sit.
        Repellendus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit eos
        qui quis a consectetur fuga pariatur quibusdam perferendis velit. Natus
        repellat tempore, a pariatur vel quas.
        <Link to="/create-blog">Create Blog</Link>, voluptates quo.
      </p>
    </div>
  );
};

export default About;
