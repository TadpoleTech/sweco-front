import React from "react";
import "../styles/sidebar.css";
import { HiArrowSmRight, HiTable, HiUser, HiAnnotation } from 'react-icons/hi';
import { Sidebar } from 'flowbite-react';

function MenuSidebar() {
  return (
    <Sidebar aria-label="meow">
      <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
        UrbanPulseLogo
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiAnnotation} label="History">
          <Sidebar.Item href="pages/yourInformation.js">Information</Sidebar.Item>
            <Sidebar.Item href="pages/yourPosts.js">Posts</Sidebar.Item>
            <Sidebar.Item href="pages/yourVotedPosts.js">Voted posts</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default MenuSidebar;
