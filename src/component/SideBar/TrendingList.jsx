import TrendingTopic from "./TrendingTopic";

export default function TrendingList({ trends }) {
    return (
      <div className="trending-list">
        <h1 style={{fontSize:15 ,marginTop:20 ,color:"white"}}>Trends for you</h1>
        {trends.map((trend, index) => (
          <TrendingTopic key={index} {...trend} />
        ))}
      </div>
    );
  }
  