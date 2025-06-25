
import React from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import CreatePost from '@/components/Feed/CreatePost';
import PostCard from '@/components/Feed/PostCard';
import TrendingTopics from '@/components/Trending/TrendingTopics';
import SuggestedUsers from '@/components/Community/SuggestedUsers';

const Index = () => {
  // Sample posts data
  const posts = [
    {
      author: {
        name: 'CryptoNews Daily',
        username: 'cryptonews',
        verified: true,
        role: 'News Broadcaster'
      },
      content: 'BREAKING: Bitcoin reaches new all-time high as institutional adoption continues to surge. Major corporations are now adding BTC to their treasury reserves. This could signal the beginning of the next bull run. What are your thoughts on this development? 🚀',
      timestamp: '2h',
      likes: 1247,
      comments: 89,
      shares: 234,
      category: 'Crypto News'
    },
    {
      author: {
        name: 'Climate Action Network',
        username: 'climateaction',
        verified: true,
        role: 'NGO'
      },
      content: 'Our latest campaign has reached 1 million supporters! Together, we\'ve planted over 50,000 trees and reduced carbon emissions by 25% in partner cities. Thank you to everyone who joined our mission for a sustainable future. 🌱 #ClimateAction',
      timestamp: '4h',
      likes: 892,
      comments: 156,
      shares: 445,
      category: 'NGO Updates'
    },
    {
      author: {
        name: 'Political Insider',
        username: 'politicalinsider',
        verified: true,
        role: 'News Organization'
      },
      content: 'ANALYSIS: The recent policy changes are expected to impact small businesses significantly. Our team has analyzed the implications and found that 73% of surveyed entrepreneurs are optimistic about the new regulations. Full report in comments. 📊',
      timestamp: '6h',
      likes: 567,
      comments: 234,
      shares: 123,
      category: 'Politics'
    },
    {
      author: {
        name: 'Tech Entrepreneur',
        username: 'techfounder',
        verified: false,
        role: 'Individual'
      },
      content: 'Just launched our new community platform for connecting like-minded professionals! It\'s amazing to see how technology can bring people together across different industries and causes. Looking forward to building something meaningful together! 💪',
      timestamp: '8h',
      likes: 234,
      comments: 67,
      shares: 89,
      category: 'General Discussion'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Feed */}
            <div className="lg:col-span-2">
              <CreatePost />
              
              <div className="space-y-0">
                {posts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="space-y-6">
              <TrendingTopics />
              <SuggestedUsers />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
