export default function Tweets({ username, content, retweets, quoteTweets, likes }){
  return (
    <div className="post">
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
      <hr></hr>
    </div>
  );
}