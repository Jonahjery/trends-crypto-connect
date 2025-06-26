
import React from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Hash, ArrowUp, ArrowDown, Minus } from 'lucide-react';

const Trending = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const trendingTopics = [
    {
      topic: '#BitcoinATH',
      posts: '45.2k',
      change: 'up',
      percentage: '+125%',
      description: 'Bitcoin reaches new all-time high'
    },
    {
      topic: '#ClimateAction',
      posts: '23.1k',
      change: 'up',
      percentage: '+89%',
      description: 'Global climate initiatives trending'
    },
    {
      topic: '#DigitalPolicy',
      posts: '18.7k',
      change: 'up',
      percentage: '+67%',
      description: 'New digital regulations discussion'
    },
    {
      topic: '#Innovation',
      posts: '34.5k',
      change: 'down',
      percentage: '-12%',
      description: 'Technology innovation updates'
    },
    {
      topic: '#Sustainability',
      posts: '12.3k',
      change: 'same',
      percentage: '0%',
      description: 'Sustainable development goals'
    },
    {
      topic: '#Fintech',
      posts: '28.9k',
      change: 'up',
      percentage: '+45%',
      description: 'Financial technology advancements'
    }
  ];

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getChangeColor = (change: string) => {
    switch (change) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <main className="flex-1 w-full md:w-auto p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Trending Topics</h1>
              <p className="text-gray-600">See what's trending across all communities</p>
            </div>

            <div className="space-y-4">
              {trendingTopics.map((topic, index) => (
                <Card key={topic.topic} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                          <TrendingUp className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-semibold text-blue-600">{topic.topic}</h3>
                            <Hash className="h-4 w-4 text-gray-400" />
                          </div>
                          <p className="text-gray-600">{topic.description}</p>
                          <p className="text-sm text-gray-500">{topic.posts} posts</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getChangeIcon(topic.change)}
                        <span className={`font-semibold ${getChangeColor(topic.change)}`}>
                          {topic.percentage}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Trending;
