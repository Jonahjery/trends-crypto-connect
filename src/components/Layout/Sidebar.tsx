import React, { useState } from 'react';
import { Home, Users, Hash, Globe, Briefcase, Shield, MessageSquare, TrendingUp, Settings, Zap, X, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileSettings from '@/components/Profile/ProfileSettings';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  const categories = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Communities', icon: Users, path: '/communities' },
    { name: 'Trending', icon: TrendingUp, path: '/trending' },
    { name: 'Airdrops', icon: Zap, path: '/airdrops' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
  ];

  const communities = [
    { name: 'Crypto Enthusiasts', icon: Hash, color: 'text-orange-500', members: '45.2k' },
    { name: 'News Broadcasters', icon: Globe, color: 'text-blue-500', members: '23.1k' },
    { name: 'NGOs & Non-Profits', icon: Shield, color: 'text-green-500', members: '18.7k' },
    { name: 'Organizations', icon: Briefcase, color: 'text-purple-500', members: '34.5k' },
    { name: 'Government Officials', icon: Building2, color: 'text-red-500', members: '12.3k' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    if (onClose) onClose();
  };

  const handleSettingsClick = () => {
    setShowProfileSettings(true);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 md:top-16 left-0 z-50 md:z-auto
        w-64 bg-white border-r border-gray-200 h-screen md:h-[calc(100vh-4rem)]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Mobile close button */}
          <div className="flex justify-between items-center mb-6 md:hidden">
            <span className="text-lg font-semibold">Menu</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            {categories.map((item) => (
              <Button
                key={item.name}
                variant={location.pathname === item.path ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleNavigation(item.path)}
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
                <div 
                  key={community.name} 
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleNavigation('/communities')}
                >
                  <community.icon className={`h-5 w-5 mr-3 ${community.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{community.name}</p>
                    <p className="text-xs text-gray-500">{community.members} members</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={handleSettingsClick}
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </Button>
          </div>
        </div>
      </aside>

      {/* Profile Settings Modal */}
      {showProfileSettings && (
        <ProfileSettings 
          isOpen={showProfileSettings}
          onClose={() => setShowProfileSettings(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
