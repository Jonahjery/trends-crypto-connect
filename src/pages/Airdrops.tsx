
import React from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Clock, Users, Gift, Star } from 'lucide-react';

const Airdrops = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const airdrops = [
    {
      name: 'CommunityToken',
      symbol: 'COMM',
      amount: '500 COMM',
      value: '$125.00',
      status: 'Active',
      timeLeft: '5 days left',
      participants: '12.5k',
      requirements: ['Follow @CommunityToken', 'Join Telegram', 'Repost announcement'],
      difficulty: 'Easy'
    },
    {
      name: 'GovChain',
      symbol: 'GOV',
      amount: '100 GOV',
      value: '$89.50',
      status: 'Active',
      timeLeft: '12 days left',
      participants: '8.2k',
      requirements: ['Verify government ID', 'Complete KYC', 'Join official community'],
      difficulty: 'Hard'
    },
    {
      name: 'NewsDAO',
      symbol: 'NEWS',
      amount: '1000 NEWS',
      value: '$45.00',
      status: 'Upcoming',
      timeLeft: 'Starts in 3 days',
      participants: '0',
      requirements: ['Media verification', 'Submit news article', 'Community vote'],
      difficulty: 'Medium'
    },
    {
      name: 'EcoToken',
      symbol: 'ECO',
      amount: '250 ECO',
      value: '$67.25',
      status: 'Active',
      timeLeft: '8 days left',
      participants: '15.7k',
      requirements: ['Environmental pledge', 'Share green initiative', 'Join Discord'],
      difficulty: 'Easy'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'Ended':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Airdrops</h1>
              <p className="text-gray-600">Participate in token airdrops and earn rewards</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {airdrops.map((airdrop) => (
                <Card key={airdrop.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{airdrop.name}</h3>
                          <p className="text-gray-500">{airdrop.symbol}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={getStatusColor(airdrop.status)}>
                          {airdrop.status}
                        </Badge>
                        <Badge className={getDifficultyColor(airdrop.difficulty)}>
                          {airdrop.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{airdrop.amount}</p>
                          <p className="text-green-600 font-semibold">{airdrop.value}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {airdrop.timeLeft}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="h-4 w-4 mr-1" />
                            {airdrop.participants} participants
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {airdrop.requirements.map((req, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <Star className="h-3 w-3 mr-2 text-yellow-500" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full"
                        disabled={airdrop.status === 'Upcoming'}
                      >
                        <Gift className="h-4 w-4 mr-2" />
                        {airdrop.status === 'Upcoming' ? 'Coming Soon' : 'Participate'}
                      </Button>
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

export default Airdrops;
