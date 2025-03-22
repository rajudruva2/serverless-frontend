
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Fetch user data from backend API
  useEffect(() => {
    fetch("http://localhost:8080/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Save updated user data
  const handleSave = () => {
    fetch("http://localhost:8080/api/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Profile updated successfully!");
        setUser(data);
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <label>Name:</label>
      <input type="text" name="name" value={user.name} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={user.email} onChange={handleChange} />

      <label>Phone:</label>
      <input type="text" name="phone" value={user.phone} onChange={handleChange} />

      <label>Address:</label>
      <input type="text" name="address" value={user.address} onChange={handleChange} />

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;

