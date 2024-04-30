export default function ProfileSuggestion({ name, handle}) {
    return (
      
      <div className="profile-suggestion">
        <img src="logo192.png" alt={`${name}`} />
        <div className="profile">
          <p className="profile-suggestion-name">{name}</p>
          <p className="profile-suggestion-handle">@{handle}</p>
        </div>
        <button>Follow</button>
      </div>
      
    );
  }
  