import React, { useState, useEffect } from "react";
import { Button, Input, Select, Space } from 'antd';
import { createPost } from "../api";

function CreatePost() {
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();

    const subject = e.target[0].value;
    createPost(subject, "", location.lat, location.lon)
      .then((data) => {
        console.log("Board created:", data);
        alert("Board created!");
        // window.location.href = "/";
      })
      .catch((error) => {
        alert("Error creating board!");
      });
  };

  const locationWarning = (
    <div>
      <h1>Please enable location services</h1>
    </div>
  );

  if (!location.lat || !location.lon) {
    return locationWarning;
  }

  return (
    <div className="create-card">
    <div className="create-content">
      <h1 className="block text-gray-700 text-sm font-bold mb-2">New Post</h1>
        <Space.Compact style={{ width: '50%' }}>
          <Input type="text" placeholder="Subject" />
          <Button>Submit Post</Button>
        </Space.Compact>
      </div>
    </div>
  );
}

export default CreatePost;
