
import React from 'react';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AirdropCard from './AirdropCard';

const AirdropFeed = () => {
  const airdrops = [
    {
      title: 'LayerZero Protocol Testnet',
      description: 'Bridge tokens across multiple chains and interact with various dApps to qualify for potential airdrop.',
      platform: 'LayerZero',
      estimatedReward: '$500 - $2,000',
      deadline: '2024-08-15',
      difficulty: 'Medium' as const,
      participants: '45.2k',
      category: 'DeFi',
      externalUrl: 'https://layerzero.network',
      featured: true
    },
    {
      title: 'zkSync Era Ecosystem',
      description: 'Use zkSync Era for transactions, provide liquidity, and interact with native dApps.',
      platform: 'zkSync',
      estimatedReward: '$200 - $1,500',
      deadline: '2024-07-30',
      difficulty: 'Easy' as const,
      participants: '89.1k',
      category: 'Layer 2',
      externalUrl: 'https://zksync.io',
      featured: true
    },
    {
      title: 'Arbitrum Odyssey Campaign',
      description: 'Complete various tasks across Arbitrum ecosystem projects to earn NFTs and potential tokens.',
      platform: 'Arbitrum',
      estimatedReward: '$100 - $800',
      deadline: '2024-09-01',
      difficulty: 'Hard' as const,
      participants: '123.7k',
      category: 'Layer 2',
      externalUrl: 'https://arbitrum.io'
    },
    {
      title: 'Polygon ID Integration',
      description: 'Set up Polygon ID and interact with privacy-focused dApps in the ecosystem.',
      platform: 'Polygon',
      estimatedReward: '$50 - $300',
      deadline: '2024-08-20',
      difficulty: 'Easy' as const,
      participants: '67.3k',
      category: 'Identity',
      externalUrl: 'https://polygon.technology'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search airdrops..."
              className="pl-10"
            />
          </div>
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="defi">DeFi</SelectItem>
            <SelectItem value="layer2">Layer 2</SelectItem>
            <SelectItem value="nft">NFT</SelectItem>
            <SelectItem value="gaming">Gaming</SelectItem>
            <SelectItem value="identity">Identity</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Airdrop Cards */}
      <div className="grid gap-6">
        {airdrops.map((airdrop, index) => (
          <AirdropCard key={index} {...airdrop} />
        ))}
      </div>
    </div>
  );
};

export default AirdropFeed;
