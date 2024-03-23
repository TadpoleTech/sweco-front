import React, { useState, useEffect } from "react";
import { Button, Form, Input, Space } from 'antd';
import { createPost } from "../api";

import "../styles/createPost.css";

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

  const onFinish = (values) => {
    createPost(values.title, "", location.lat, location.lon)
      .then((data) => {
        console.log("Board created:", data);
        alert("Board created!");
        window.location.href = "/";
      })
      .catch((error) => {
        alert("Error creating board!");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        <Form
          name="createPostForm"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Space.Compact style={{ width: '100%' }}>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input type="text" placeholder="Subject" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit Post
              </Button>
            </Form.Item>
          </Space.Compact>
        </Form>
      </div>
    </div>
  );
}

export default CreatePost;
