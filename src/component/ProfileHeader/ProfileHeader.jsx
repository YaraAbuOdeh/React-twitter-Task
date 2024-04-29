import ProfileBio from "./ProfileBio";
import ProfileStats from "./ProfileStats";
export default function ProfileHeader({ name, handle, logo }) {
    return (
      <div className="profile-header">
        <div>
        <div className="gradiant"></div>
        <img src={logo} alt={`${name} logo`} className="profile-logo" />
        <h1 className="profile-name">{name}</h1>
        <h2 className="profile-handle">@{handle}</h2>
        </div>
      <ProfileBio bio="The library for web and native user interfaces" website="react.dev" joinedDate="July 2013" />
      <ProfileStats followers="708.1K" following="267" />
      </div>
    );
  }
  