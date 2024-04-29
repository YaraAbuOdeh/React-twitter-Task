import ProfileSuggestion from "./ProfileSuggestion";
export default function SuggestionList({ suggestions }) {
    return (
      <div className="suggestion-list">
        <h1 style={{fontSize:15 ,marginTop:20 ,color:"white"}}>You might like</h1>
        {suggestions.map((suggestion, index) => (
          <ProfileSuggestion key={index} {...suggestion} />
        ))}
      </div>
    );
  }
  