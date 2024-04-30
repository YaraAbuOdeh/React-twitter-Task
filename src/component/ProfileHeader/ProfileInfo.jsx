export default function ProfileInfo({ name, username, logo }) {
    return (
      <div>
        <div className="gradiant"></div>
        <img src={logo} alt={`${name} logo`} className="profile-logo" />
        <h1 className="profile-name">{name}</h1>
        <h2 className="profile-handle">@{username}</h2>
      </div>
    );
  }
  