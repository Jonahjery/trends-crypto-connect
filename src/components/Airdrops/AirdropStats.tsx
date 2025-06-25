
import React from 'react';
import { Zap, TrendingUp, Clock, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AirdropStats = () => {
  const stats = [
    { label: 'Active Airdrops', value: '47', icon: Zap, color: 'text-yellow-500' },
    { label: 'Ending Soon', value: '12', icon: Clock, color: 'text-red-500' },
    { label: 'Hot This Week', value: '8', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Community Wins', value: '234', icon: Trophy, color: 'text-blue-500' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="h-5 w-5 mr-2 text-yellow-500" />
          Airdrop Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
              <span className="text-sm font-medium text-gray-700">{stat.label}</span>
            </div>
            <span className="text-lg font-bold text-gray-900">{stat.value}</span>
          </div>
        ))}
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">Total Rewards Earned by Community</p>
            <p className="text-2xl font-bold text-green-600">$2.4M+</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirdropStats;
