import React from 'react';
import Tweets from './Tweets';
import TabComponent from './TabComponent';
import FollowingList from './FollowingList';

const MiddlePanel = () => {
  const suggestions = [
    { name: 'freeCodeCamp.org', handle: 'freeCodeCamp', description: 'We\'re a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbyrenn.', isVerified: true },
    { name: 'TypeScript', handle: 'typescript', description: 'TypeScript is a language for application-scale JavaScript development. It\'s a typed superset of JavaScript that compiles to plain JavaScript.', isVerified: true },
    { name: 'Tailwind CSS', handle: 'tailwindcss', description: 'The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.', isVerified: true },
  ];

  const tabs = [
    { label: 'Posts', content: <Tweets 
      username="danabramov.bsky.social@dan_abramov"
      content="Happy 10th birthday to @reactjs 🎂🎉"
      retweets={46}
      quoteTweets={675}
      likes={3700}
    /> },
    { label: 'Replies', content: 'Content for Tab Two' },
    { label: 'Media', content: 'Content for Tab One' },
    { label: 'Links', content: 'Content for Tab Two' },
  ];

  return (
    <div className="MiddlePanel">
      <TabComponent tabs={tabs} />
      <FollowingList suggestions={suggestions} />
    </div>
  );
}

export default MiddlePanel;
