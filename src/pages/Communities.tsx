
import React from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hash, Globe, Shield, Briefcase, Building2, Users } from 'lucide-react';

const Communities = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const communities = [
    {
      name: 'Crypto Enthusiasts',
      icon: Hash,
      color: 'text-orange-500',
      members: '45.2k',
      description: 'Discussing the latest in cryptocurrency and blockchain technology',
      posts: '1.2k posts this week',
      joined: false
    },
    {
      name: 'News Broadcasters',
      icon: Globe,
      color: 'text-blue-500',
      members: '23.1k',
      description: 'Professional journalists and news organizations sharing breaking news',
      posts: '890 posts this week',
      joined: true
    },
    {
      name: 'NGOs & Non-Profits',
      icon: Shield,
      color: 'text-green-500',
      members: '18.7k',
      description: 'Non-profit organizations sharing their impact and initiatives',
      posts: '456 posts this week',
      joined: false
    },
    {
      name: 'Organizations',
      icon: Briefcase,
      color: 'text-purple-500',
      members: '34.5k',
      description: 'Corporate and business organizations sharing updates',
      posts: '723 posts this week',
      joined: true
    },
    {
      name: 'Government Officials',
      icon: Building2,
      color: 'text-red-500',
      members: '12.3k',
      description: 'Verified government officials from around the world',
      posts: '234 posts this week',
      joined: false
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
        
        <main className="flex-1 w-full md:w-auto p-4 sm:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Communities</h1>
              <p className="text-gray-600">Discover and join communities that match your interests</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((community) => (
                <Card key={community.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <community.icon className={`h-8 w-8 ${community.color}`} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{community.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Users className="h-4 w-4" />
                          <span>{community.members} members</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{community.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{community.posts}</p>
                    <Button 
                      className="w-full"
                      variant={community.joined ? "outline" : "default"}
                    >
                      {community.joined ? 'Joined' : 'Join Community'}
                    </Button>
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

export default Communities;
