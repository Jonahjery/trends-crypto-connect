
import React, { useState } from 'react';
import { TrendingUp, Hash, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FloatingTrendingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const trends = [
    { topic: '#Bitcoin', posts: '125k posts', category: 'Crypto', growth: '+15%' },
    { topic: '#ClimateAction', posts: '89k posts', category: 'NGO', growth: '+8%' },
    { topic: '#ElectionUpdate', posts: '234k posts', category: 'Politics', growth: '+25%' },
    { topic: '#TechNews', posts: '67k posts', category: 'News', growth: '+12%' },
    { topic: '#CommunityGrowth', posts: '45k posts', category: 'General', growth: '+6%' },
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg animate-pulse"
        >
          <TrendingUp className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Trending Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-fade-in">
          <Card className="shadow-xl border-2 border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600 animate-pulse" />
                  Trending Now
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 max-h-80 overflow-y-auto">
              {trends.map((trend, index) => (
                <div key={trend.topic} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-bold text-gray-400">#{index + 1}</div>
                    <Hash className="h-4 w-4 text-blue-500" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{trend.topic}</p>
                      <p className="text-xs text-gray-500">{trend.posts}</p>
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
        </div>
      )}
    </>
  );
};

export default FloatingTrendingButton;
