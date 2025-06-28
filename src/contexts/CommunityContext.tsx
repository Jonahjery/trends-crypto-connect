
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Community {
  name: string;
  icon: string;
  color: string;
  members: string;
  description: string;
  posts: string;
  joined: boolean;
}

interface CommunityContextType {
  communities: Community[];
  joinedCommunities: string[];
  joinCommunity: (communityName: string) => void;
  leaveCommunity: (communityName: string) => void;
  createCommunity: (community: Omit<Community, 'joined'>) => void;
}

const CommunityContext = createContext<CommunityContextType | undefined>(undefined);

export const useCommunity = () => {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error('useCommunity must be used within a CommunityProvider');
  }
  return context;
};

interface CommunityProviderProps {
  children: ReactNode;
}

export const CommunityProvider: React.FC<CommunityProviderProps> = ({ children }) => {
  const [joinedCommunities, setJoinedCommunities] = useState<string[]>(['News Broadcasters', 'Organizations']);
  
  const [communities, setCommunities] = useState<Community[]>([
    {
      name: 'Crypto Enthusiasts',
      icon: 'Hash',
      color: 'text-orange-500',
      members: '45.2k',
      description: 'Discussing the latest in cryptocurrency and blockchain technology',
      posts: '1.2k posts this week',
      joined: false
    },
    {
      name: 'News Broadcasters',
      icon: 'Globe',
      color: 'text-blue-500',
      members: '23.1k',
      description: 'Professional journalists and news organizations sharing breaking news',
      posts: '890 posts this week',
      joined: true
    },
    {
      name: 'NGOs & Non-Profits',
      icon: 'Shield',
      color: 'text-green-500',
      members: '18.7k',
      description: 'Non-profit organizations sharing their impact and initiatives',
      posts: '456 posts this week',
      joined: false
    },
    {
      name: 'Organizations',
      icon: 'Briefcase',
      color: 'text-purple-500',
      members: '34.5k',
      description: 'Corporate and business organizations sharing updates',
      posts: '723 posts this week',
      joined: true
    },
    {
      name: 'Government Officials',
      icon: 'Building2',
      color: 'text-red-500',
      members: '12.3k',
      description: 'Verified government officials from around the world',
      posts: '234 posts this week',
      joined: false
    }
  ]);

  const joinCommunity = (communityName: string) => {
    setJoinedCommunities(prev => [...prev, communityName]);
    setCommunities(prev => prev.map(community => 
      community.name === communityName 
        ? { ...community, joined: true }
        : community
    ));
  };

  const leaveCommunity = (communityName: string) => {
    setJoinedCommunities(prev => prev.filter(name => name !== communityName));
    setCommunities(prev => prev.map(community => 
      community.name === communityName 
        ? { ...community, joined: false }
        : community
    ));
  };

  const createCommunity = (newCommunity: Omit<Community, 'joined'>) => {
    setCommunities(prev => [...prev, { ...newCommunity, joined: true }]);
    setJoinedCommunities(prev => [...prev, newCommunity.name]);
  };

  return (
    <CommunityContext.Provider value={{
      communities,
      joinedCommunities,
      joinCommunity,
      leaveCommunity,
      createCommunity
    }}>
      {children}
    </CommunityContext.Provider>
  );
};
