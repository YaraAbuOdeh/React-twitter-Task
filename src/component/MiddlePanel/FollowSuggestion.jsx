export default function FollowSuggestion({ name, userName, description, isVerified }) {
    return (
      <div className="follow-suggestion">
        <img src="logo192.png" alt={`${name}`} />
        <div className="follow-info">
          <h3>{name} {isVerified && <span>✔️</span>}</h3>
          <p>@{userName}</p>
          <p>{description}</p>
        </div>
        <button className="follow-button">Follow</button>
      </div>
    );
  }
