export default function ProfileStats(props) {
    return (
      <div className="profile-stats">
        <span>{props.following} Following </span>
        <span>{props.followers} Followers</span>
      </div>
    );
  }
  