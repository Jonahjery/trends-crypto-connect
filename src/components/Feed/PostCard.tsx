
import React from 'react';
import { ThumbsUp, MessageSquare, Forward, Bookmark, MoreHorizontal, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { usePost } from '@/contexts/PostContext';

interface PostCardProps {
  author: {
    name: string;
    username: string;
    avatar?: string;
    verified?: boolean;
    role?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
  category?: string;
}

const PostCard: React.FC<PostCardProps> = ({ 
  author, 
  content, 
  timestamp, 
  likes, 
  comments, 
  shares,
  views,
  category 
}) => {
  const postId = `${author.username}-${timestamp}`;
  const { postInteractions, likePost, commentPost, sharePost, bookmarkPost } = usePost();
  
  const interaction = postInteractions[postId];
  const currentLikes = interaction?.likes !== undefined ? interaction.likes : likes;
  const currentComments = interaction?.comments !== undefined ? interaction.comments : comments;
  const currentShares = interaction?.shares !== undefined ? interaction.shares : shares;
  const currentViews = interaction?.views !== undefined ? interaction.views : views;
  const isLiked = interaction?.isLiked || false;
  const isBookmarked = interaction?.isBookmarked || false;

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-gray-900">{author.name}</h4>
                {author.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>@{author.username}</span>
                <span>•</span>
                <span>{timestamp}</span>
                {author.role && (
                  <>
                    <span>•</span>
                    <span className="text-blue-600">{author.role}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Category */}
        {category && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {category}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="mb-4">
          <p className="text-gray-900 leading-relaxed">{content}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`${isLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500`}
              onClick={() => likePost(postId)}
            >
              <ThumbsUp className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{currentLikes}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 hover:text-green-500"
              onClick={() => commentPost(postId)}
            >
              <MessageSquare className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentComments}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 hover:text-purple-500"
              onClick={() => sharePost(postId)}
            >
              <Forward className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentShares}</span>
            </Button>
            <div className="flex items-center text-gray-500">
              <Eye className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentViews}</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`${isBookmarked ? 'text-orange-500' : 'text-gray-500'} hover:text-orange-500`}
            onClick={() => bookmarkPost(postId)}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
