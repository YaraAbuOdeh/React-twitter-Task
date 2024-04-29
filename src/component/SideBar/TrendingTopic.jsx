export default function TrendingTopic({ topic, tweets }) {
    return (
      <div className="trending-topic">
        <span className="treanding-tweet">{topic}</span>
        <span className="treanding-post">{tweets} Posts</span>
      </div>
    );
  }
  