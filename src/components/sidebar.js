// MenuSidebar.js

import React from "react";
import "../styles/sidebar.css";
import { HiArrowSmRight, HiTable, HiUser, HiAnnotation } from 'react-icons/hi';
import { Sidebar } from 'flowbite-react';

function MenuSidebar() {
  return (
    <Sidebar aria-label="Main sidebar" className="sidebar">
      <Sidebar.Logo img="imgs/logo2.png" imgAlt="UrbanPulse Logo" className="logo">
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser} className="sidebar-item">
            Profile
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiAnnotation} label="History" className="sidebar-collapse">
            <Sidebar.Item href="pages/yourInformation.js" className="sidebar-item">Information</Sidebar.Item>
            <Sidebar.Item href="pages/yourPosts.js" className="sidebar-item">Posts</Sidebar.Item>
            <Sidebar.Item href="pages/yourVotedPosts.js" className="sidebar-item">Voted posts</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="pages/signIn.js" icon={HiArrowSmRight} className="sidebar-item">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="pages/signUp.js" icon={HiTable} className="sidebar-item">
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default MenuSidebar;
