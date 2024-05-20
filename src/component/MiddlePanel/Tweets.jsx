export default function Tweets({ username, content, retweets, quoteTweets, likes }){
  return (
    <div className="post">
      <img src="logo192.png" alt={`${username}`} />
      <div>
      <div className="post-header">
        <span className="username">{username}</span>
      </div>
      <div className="post-content">
        {content}
      </div>
      <div className="post-footer">
        <span>{retweets} Retweets</span>
        <span>{quoteTweets} Quote Tweets</span>
        <span>{likes} Likes</span>
      </div>
    </div>
      </div>
      
  );
}