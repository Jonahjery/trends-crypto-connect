
import React from 'react';
import { ExternalLink, Clock, DollarSign, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AirdropCardProps {
  title: string;
  description: string;
  platform: string;
  estimatedReward: string;
  deadline: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  participants: string;
  category: string;
  externalUrl: string;
  featured?: boolean;
}

const AirdropCard: React.FC<AirdropCardProps> = ({
  title,
  description,
  platform,
  estimatedReward,
  deadline,
  difficulty,
  participants,
  category,
  externalUrl,
  featured = false
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={`hover:shadow-md transition-shadow ${featured ? 'ring-2 ring-blue-500' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              {featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
              <CardTitle className="text-lg">{title}</CardTitle>
            </div>
            <Badge variant="outline" className="mb-2">{category}</Badge>
          </div>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            <span>Est. Reward: {estimatedReward}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>Deadline: {deadline}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>{participants} participants</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Platform: {platform}</span>
          <Button 
            size="sm" 
            onClick={() => window.open(externalUrl, '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Start Hunt
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirdropCard;
