import ProfileSuggestion from "./ProfileSuggestion";
export default function SuggestionList({ suggestions }) {
    return (
      <div className="suggestion-list" >
        <h1>You might like</h1>
        {suggestions.map((suggestion, index) => (
          <ProfileSuggestion key={index} {...suggestion} />
        ))}
        <button className="show-more">Show more</button>
      </div>
    );
  }
  