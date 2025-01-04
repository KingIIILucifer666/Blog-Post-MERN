import { useState } from "react";
import { createPost } from "../api/api";
const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    content: "",
    created_at: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title: formData.title,
        author: formData.author,
        description: formData.description,
        content: formData.content,
        created_at: new Date().toISOString(),
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
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateBlog;
