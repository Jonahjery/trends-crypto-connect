
import React from 'react';
import { UserPlus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SuggestedUsers = () => {
  const users = [
    {
      name: 'Sarah Chen',
      username: 'sarahcrypto',
      role: 'Crypto Analyst',
      followers: '12.5k',
      avatar: '',
      verified: true,
    },
    {
      name: 'Global News Hub',
      username: 'globalnews',
      role: 'News Organization',
      followers: '89.2k',
      avatar: '',
      verified: true,
    },
    {
      name: 'Climate Action Now',
      username: 'climateaction',
      role: 'NGO',
      followers: '34.7k',
      avatar: '',
      verified: false,
    },
    {
      name: 'Tech Policy Institute',
      username: 'techpolicy',
      role: 'Organization',
      followers: '28.1k',
      avatar: '',
      verified: true,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="h-5 w-5 mr-2 text-blue-600" />
          Who to Follow
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {users.map((user) => (
          <div key={user.username} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-1">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  {user.verified && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px]">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">@{user.username}</p>
                <p className="text-xs text-blue-600">{user.role}</p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              <UserPlus className="h-3 w-3 mr-1" />
              Follow
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestedUsers;
