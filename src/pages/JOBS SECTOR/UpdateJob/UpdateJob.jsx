import React, { useState } from "react";
import "./UpdateJob.css"; // Import your CSS file
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateJob = () => {
    const navigate = useNavigate()

    const {id,
        title,
        companyName,
        description,
        location,
        logo,
        position} = useLoaderData();
    // console.log(post)
  const [formData, setFormData] = useState({
    title,
    logo,
    companyName,
    location,
    position,
    description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to send the form data to the server
    await axios.put(`http://localhost:9000/jobs/${id}`, formData);
    navigate('/jobs');
    console.log("Form data updated:", formData);
    // Reset the form after submission if needed
    setFormData({
      title: "",
      logo: "",
      companyName: "",
      location: "",
      position: "",
      description: "",
    });
  };

  return (
    <div className="update-post-container">
        <h1>Update Job</h1>
      <form onSubmit={handleSubmit} className="updateForm">
        <label className="updateLavel">
          Title: 
          <input className="updateInput"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label className="updateLavel">
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
          <textarea className="updateTextarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button className="updateButton" type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default UpdateJob;
