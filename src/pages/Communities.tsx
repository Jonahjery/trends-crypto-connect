
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hash, Globe, Shield, Briefcase, Building2, Users, Plus } from 'lucide-react';
import { useCommunity } from '@/contexts/CommunityContext';

const iconMap = {
  Hash,
  Globe,
  Shield,
  Briefcase,
  Building2,
  Users
};

const Communities = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { communities, joinCommunity, leaveCommunity } = useCommunity();

  const handleCommunityAction = (communityName: string, isJoined: boolean) => {
    if (isJoined) {
      leaveCommunity(communityName);
    } else {
      joinCommunity(communityName);
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
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Communities</h1>
                <p className="text-gray-600">Discover and join communities that match your interests</p>
              </div>
              <Link to="/communities/create">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Community
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((community) => {
                const IconComponent = iconMap[community.icon as keyof typeof iconMap] || Hash;
                
                return (
                  <Card key={community.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-8 w-8 ${community.color}`} />
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
                        onClick={() => handleCommunityAction(community.name, community.joined)}
                      >
                        {community.joined ? 'Leave Community' : 'Join Community'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Communities;
