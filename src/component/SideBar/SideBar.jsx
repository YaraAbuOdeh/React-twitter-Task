import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';
import TrendingList from './TrendingList';
export default function SideBar() {
  const suggestions = [
    { name: 'React' , userName: 'reactjs' },
    { name: 'React' , userName: 'reactjs' },
  ];

  const trends = [
    { topic: '#ReactJS', tweets: '120K' },
    { topic: '#ReactJS', tweets: '1200K' },
    { topic: '#ReactJS', tweets: '10K' },
    { topic: '#ReactJS', tweets: '200K' },
    { topic: '#ReactJS', tweets: '500K' },
    { topic: '#ReactJS', tweets: '700K' },
  ];
    return (
      <div className="sidebar">
         <SearchBar />
      <SuggestionList suggestions={suggestions} />
      <TrendingList trends={trends} />
      </div>
    );
  }
  