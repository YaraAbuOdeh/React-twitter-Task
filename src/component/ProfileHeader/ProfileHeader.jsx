
import React from 'react';
import ProfileBio from "./ProfileBio";
import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo"; // Import the new component

export default function ProfileHeader() {
  return (
    <div className="profile-header">
      <ProfileInfo  logo={"logo192.png"} name="React" username="reactjs"/> 
      <ProfileBio bio="The library for web and native user interfaces" website="react.dev" joinedDate="July 2013" />
      <ProfileStats followers="708.1K" following="267" />
    </div>
  );
}
