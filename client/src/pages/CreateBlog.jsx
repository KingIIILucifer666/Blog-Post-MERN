import { useRef, useState } from "react";
import { createPost } from "../api/api";
const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    content: "",
    created_at: "",
  });
  const [file, setFile] = useState("");
  const inputFile = useRef(null);

  const MAX_FILE_SIZE = 15000000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const fileExtenion = file.name.substring(file.name.lastIndexOf("."));
    if (
      fileExtenion != ".jpg" &&
      fileExtenion != ".jpeg" &&
      fileExtenion != ".png"
    ) {
      alert("File must be jpg | jpeg | png");
      inputFile.current.value = "";
      inputFile.current.type = "file";
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds limit (15 mb)");
      inputFile.current.value = "";
      inputFile.current.type = "file";
      return;
    }
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title: formData.title,
        description: formData.description,
        content: formData.content,
        created_at: new Date().toISOString(),
        file: file,
      };
      const response = await createPost(newPost);
      if (response.status === 201) {
        console.log("Post created successfully");
        resetFields();
      }
    } catch (error) {
      console.error("Error creating post: ", error);
    }
  };

  const resetFields = () => {
    setFormData({
      title: "",
      author: "",
      description: "",
      content: "",
      created_at: "",
    });
    inputFile.current.value = "";
    inputFile.current.type = "file";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image Header:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileUpload}
          ref={inputFile}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateBlog;
