// MenuSidebar.js

import React from "react";
import "../styles/sidebar.css";
import { HiArrowSmRight, HiTable, HiUser, HiAnnotation } from 'react-icons/hi';
import { Sidebar } from 'flowbite-react';

function MenuSidebar() {
  return (
    <Sidebar aria-label="Main sidebar" className="sidebar">
      <Sidebar.Logo img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aceb38dc-c0bb-4f2a-80ce-0fa6eb654217/dfm8o56-63072c57-458a-4536-9282-6491973e0d65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FjZWIzOGRjLWMwYmItNGYyYS04MGNlLTBmYTZlYjY1NDIxN1wvZGZtOG81Ni02MzA3MmM1Ny00NThhLTQ1MzYtOTI4Mi02NDkxOTczZTBkNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dQFnKQJ6TJDoYfEWy9bydMjz7XGazqQ-1JfojpiZFao" imgAlt="UrbanPulse Logo" className="logo">
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser} className="sidebar-item">
            Profile
          </Sidebar.Item>
          <Sidebar.Collapse className="sidebar-history" icon={HiAnnotation} label="History" className="sidebar-collapse">
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
