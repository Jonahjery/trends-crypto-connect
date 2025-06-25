import React from 'react';
import { Home, Users, Hash, Globe, Briefcase, Shield, MessageSquare, TrendingUp, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const categories = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Communities', icon: Users },
    { name: 'Trending', icon: TrendingUp },
    { name: 'Airdrops', icon: Zap },
    { name: 'Messages', icon: MessageSquare },
  ];

  const communities = [
    { name: 'Crypto Enthusiasts', icon: Hash, color: 'text-orange-500', members: '45.2k' },
    { name: 'News Broadcasters', icon: Globe, color: 'text-blue-500', members: '23.1k' },
    { name: 'NGOs & Non-Profits', icon: Shield, color: 'text-green-500', members: '18.7k' },
    { name: 'Organizations', icon: Briefcase, color: 'text-purple-500', members: '34.5k' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-16 overflow-y-auto">
      <div className="p-6">
        {/* Navigation */}
        <nav className="space-y-2 mb-8">
          {categories.map((item) => (
            <Button
              key={item.name}
              variant={item.active ? "default" : "ghost"}
              className="w-full justify-start"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Communities */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
            Top Communities
          </h3>
          <div className="space-y-3">
            {communities.map((community) => (
              <div key={community.name} className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <community.icon className={`h-5 w-5 mr-3 ${community.color}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{community.name}</p>
                  <p className="text-xs text-gray-500">{community.members} members</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
