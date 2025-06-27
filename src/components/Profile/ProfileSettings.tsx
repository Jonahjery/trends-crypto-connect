import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Hash, Globe, Shield, Briefcase, Building2, Camera, Upload } from 'lucide-react';

interface ProfileSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ isOpen, onClose }) => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    category: '', // Empty initially - user must select
    categoryLocked: false, // Track if category has been set before
    bio: 'Passionate about technology and innovation',
    profilePicture: ''
  });

  const categories = [
    { name: 'Crypto Enthusiast', icon: Hash, color: 'text-orange-500' },
    { name: 'News Broadcaster', icon: Globe, color: 'text-blue-500' },
    { name: 'NGO Representative', icon: Shield, color: 'text-green-500' },
    { name: 'Organization', icon: Briefcase, color: 'text-purple-500' },
    { name: 'Government Official', icon: Building2, color: 'text-red-500' },
  ];

  const handleSave = () => {
    // If category is being set for the first time, lock it
    if (profile.category && !profile.categoryLocked) {
      setProfile(prev => ({ ...prev, categoryLocked: true }));
    }
    console.log('Profile saved:', profile);
    onClose();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile({...profile, profilePicture: e.target?.result as string});
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-scale-in max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            Profile Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Profile Picture Section */}
          <div className="text-center">
            <Label>Profile Picture</Label>
            <div className="flex flex-col items-center space-y-3 mt-2">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile.profilePicture} />
                <AvatarFallback className="text-xl">
                  {profile.profilePicture ? null : <Camera className="h-8 w-8" />}
                </AvatarFallback>
              </Avatar>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById('profile-upload')?.click()}
                  className="flex items-center"
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Upload
                </Button>
                {profile.profilePicture && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setProfile({...profile, profilePicture: ''})}
                  >
                    Remove
                  </Button>
                )}
              </div>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          
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
            <Label>Category {profile.categoryLocked ? '(Cannot be changed)' : '(Select once)'}</Label>
            {profile.categoryLocked ? (
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
            ) : (
              <div>
                <Select 
                  value={profile.category} 
                  onValueChange={(value) => setProfile({...profile, category: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        <div className="flex items-center space-x-2">
                          <category.icon className={`h-4 w-4 ${category.color}`} />
                          <span>{category.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500 mt-1">
                  Choose carefully - this cannot be changed once selected
                </p>
              </div>
            )}
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
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
