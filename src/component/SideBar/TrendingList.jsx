import TrendingTopic from "./TrendingTopic";

export default function TrendingList({ trends }) {
    return (
      <div className="trending-list">
        <h1>Trends for you</h1>
        {trends.map((trend, index) => (
          <TrendingTopic key={index} {...trend} />
        ))}
        <button className="show-more">Show more</button>
      </div>
      
    );
  }
  