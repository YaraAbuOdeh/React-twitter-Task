import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';
import TrendingList from './TrendingList';
export default function SideBar() {
  const suggestions = [
    { name: 'React' , handle: 'reactjs' },
    { name: 'React' , handle: 'reactjs' },
  ];

  const trends = [
    { topic: '#ReactJS', tweets: '120K' },
    { topic: '#ReactJS', tweets: '120K' },
    // ... other trends
  ];
    return (
      <div className="sidebar">
         <SearchBar />
      <SuggestionList suggestions={suggestions} />
      <TrendingList trends={trends} />
      </div>
    );
  }
  