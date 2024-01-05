import React, { useState } from "react";
import "./CreateJob.css"; // Import your CSS file
import axios from "axios";

const CreateJob = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    logo: "",
    companyName: "",
    location: "",
    position: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to send the form data to the server
    const response = await axios.post("http://localhost:9000/jobs", formData);

    console.log("Form data submitted:", response.data);
    // Reset the form after submission if needed
    setFormData({
      id: "",
      title: "",
      logo: "",
      companyName: "",
      location: "",
      position: "",
      description: "",
    });
  };

  return (
    <div className="create-post-container">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Logo URL:
          <input
            type="text"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
          />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default CreateJob;
