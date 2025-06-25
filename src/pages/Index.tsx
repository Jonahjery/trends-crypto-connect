
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import CreatePost from '@/components/Feed/CreatePost';
import PostCard from '@/components/Feed/PostCard';
import TrendingTopics from '@/components/Trending/TrendingTopics';
import SuggestedUsers from '@/components/Community/SuggestedUsers';
import AirdropStats from '@/components/Airdrops/AirdropStats';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        name: 'Senator Johnson',
        username: 'senatorjohnson',
        verified: true,
        role: 'United States'
      },
      content: 'Today we announced new legislation to support digital innovation while ensuring consumer protection. Our committee has been working closely with industry leaders to create a balanced regulatory framework that fosters growth and maintains security standards.',
      timestamp: '3h',
      likes: 892,
      comments: 156,
      shares: 445,
      category: 'Government Policy'
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
      likes: 567,
      comments: 234,
      shares: 123,
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
      likes: 234,
      comments: 67,
      shares: 89,
      category: 'Politics'
    },
    {
      author: {
        name: 'Minister Sarah Chen',
        username: 'ministerchen',
        verified: true,
        role: 'Singapore'
      },
      content: 'Excited to announce Singapore\'s new fintech sandbox program launching next month. This initiative will allow blockchain startups to test their innovations in a regulated environment. We\'re committed to making Singapore a global hub for digital finance.',
      timestamp: '8h',
      likes: 445,
      comments: 78,
      shares: 156,
      category: 'Government Policy'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        {/* Main Content */}
        <main className="flex-1 w-full md:w-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Feed */}
              <div className="xl:col-span-2">
                <CreatePost />
                
                <div className="space-y-0">
                  {posts.map((post, index) => (
                    <PostCard key={index} {...post} />
                  ))}
                </div>
              </div>
              
              {/* Right Sidebar */}
              <div className="space-y-6">
                <AirdropStats />
                <TrendingTopics />
                <SuggestedUsers />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
