export default function ProfileBio(props) {
    return (
      <div className="profile-bio">
        <p>{props.bio}</p>
        <a href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a>
        <span className="join-date">Joined {props.joinedDate}</span>
      </div>
    );
  }
  