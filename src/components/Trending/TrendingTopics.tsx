
import React from 'react';
import { TrendingUp, Hash } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TrendingTopics = () => {
  const trends = [
    { topic: '#Bitcoin', posts: '125k posts', category: 'Crypto', growth: '+15%' },
    { topic: '#ClimateAction', posts: '89k posts', category: 'NGO', growth: '+8%' },
    { topic: '#ElectionUpdate', posts: '234k posts', category: 'Politics', growth: '+25%' },
    { topic: '#TechNews', posts: '67k posts', category: 'News', growth: '+12%' },
    { topic: '#CommunityGrowth', posts: '45k posts', category: 'General', growth: '+6%' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
          Trending Now
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trends.map((trend, index) => (
          <div key={trend.topic} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="flex items-center space-x-3">
              <div className="text-sm font-bold text-gray-400">#{index + 1}</div>
              <Hash className="h-4 w-4 text-blue-500" />
              <div>
                <p className="font-semibold text-gray-900">{trend.topic}</p>
                <p className="text-sm text-gray-500">{trend.posts}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-green-600">{trend.growth}</p>
              <p className="text-xs text-gray-500">{trend.category}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingTopics;
