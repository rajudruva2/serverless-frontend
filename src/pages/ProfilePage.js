
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState({ phone: "", address: "", email: "" });

  useEffect(() => {
    axios.get("http://backend-app:8080/api/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(response => setProfile(response.data))
    .catch(error => console.error("Error fetching profile:", error));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://backend-app:8080/api/profile", profile, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(response => setProfile(response.data))
    .catch(error => console.error("Error updating profile:", error));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Phone:
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={profile.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;

