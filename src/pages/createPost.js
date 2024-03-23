import React, { useState, useEffect } from "react";
import { createBoard } from "../api";

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
    createBoard(subject, location.lat, location.lon)
      .then((data) => {
        console.log("Board created:", data);
        alert("Board created!");
        window.location.href = "/";
      })
      .catch((error) => {
        alert("Error creating board!");
      });
  };

  const locationWarning = <div>
    <h1>Please enable location services</h1>
  </div>

  if (!location.lat || !location.lon) {
    return locationWarning;
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Subject" />
        <br />
        <button>Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
