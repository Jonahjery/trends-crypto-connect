
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Hash, Globe, Shield, Briefcase, Building2, Settings } from 'lucide-react';

const ProfileSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    category: 'News Broadcaster', // This shouldn't change after first assignment
    bio: 'Passionate about technology and innovation'
  });

  const categories = [
    { name: 'Crypto Enthusiast', icon: Hash, color: 'text-orange-500' },
    { name: 'News Broadcaster', icon: Globe, color: 'text-blue-500' },
    { name: 'NGO Representative', icon: Shield, color: 'text-green-500' },
    { name: 'Organization', icon: Briefcase, color: 'text-purple-500' },
    { name: 'Government Official', icon: Building2, color: 'text-red-500' },
  ];

  const handleSave = () => {
    // Save profile logic would go here
    console.log('Profile saved:', profile);
    setIsOpen(false);
  };

  return (
    <>
      {/* Settings Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2"
      >
        <Settings className="h-4 w-4" />
        <span>Profile Settings</span>
      </Button>

      {/* Settings Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={profile.username}
                  onChange={(e) => setProfile({...profile, username: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              </div>
              
              <div>
                <Label>Category (Cannot be changed)</Label>
                <div className="p-3 bg-gray-50 rounded-md border">
                  <div className="flex items-center space-x-2">
                    {categories.find(cat => cat.name === profile.category)?.icon && (
                      React.createElement(categories.find(cat => cat.name === profile.category)!.icon, {
                        className: `h-5 w-5 ${categories.find(cat => cat.name === profile.category)?.color}`
                      })
                    )}
                    <span className="font-medium text-gray-600">{profile.category}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Category is assigned once and cannot be modified
                  </p>
                </div>
              </div>
              
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  placeholder="Tell us about yourself..."
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button onClick={handleSave} className="flex-1">
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProfileSettings;
