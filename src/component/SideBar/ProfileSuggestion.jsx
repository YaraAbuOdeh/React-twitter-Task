export default function ProfileSuggestion({ name, handle}) {
    return (
      
      <div className="profile-suggestion">
        <img src="" alt={`${name}`} />
        <div>
          <p className="profile-suggestion-name">{name}</p>
          <p className="profile-suggestion-handle">@{handle}</p>
        </div>
        <button>Follow</button>
      </div>
      
    );
  }
  