import FollowSuggestion from './FollowSuggestion';

export default function FollowingList({ suggestions }) {
  return (
    <div className="following-List">
      <h2 style={{color:"white"}}>Who to follow</h2>
      {suggestions.map((suggestion) => (
        <FollowSuggestion key={suggestion.handle} {...suggestion} />
      ))}
      <button className="show-more">Show more</button>
    </div>
  );
}
