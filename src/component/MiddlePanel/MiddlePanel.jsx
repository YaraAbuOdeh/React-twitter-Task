import React from 'react';
import Tweets from './Tweets';
import TabComponent from './TabComponent';

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

export default function MiddlePanel() {
  return (
    <div className="MiddlePanel">
      <TabComponent tabs={tabs} />
    </div>
  );
}
