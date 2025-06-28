
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PostInteraction {
  likes: number;
  comments: number;
  shares: number;
  views: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

interface PostContextType {
  postInteractions: { [key: string]: PostInteraction };
  likePost: (postId: string) => void;
  commentPost: (postId: string) => void;
  sharePost: (postId: string) => void;
  bookmarkPost: (postId: string) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
};

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [postInteractions, setPostInteractions] = useState<{ [key: string]: PostInteraction }>({});

  const likePost = (postId: string) => {
    setPostInteractions(prev => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        likes: prev[postId]?.isLiked 
          ? (prev[postId]?.likes || 0) - 1 
          : (prev[postId]?.likes || 0) + 1,
        isLiked: !prev[postId]?.isLiked
      }
    }));
  };

  const commentPost = (postId: string) => {
    // In a real app, this would open a comment modal
    console.log('Opening comments for post:', postId);
  };

  const sharePost = (postId: string) => {
    setPostInteractions(prev => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        shares: (prev[postId]?.shares || 0) + 1
      }
    }));
  };

  const bookmarkPost = (postId: string) => {
    setPostInteractions(prev => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        isBookmarked: !prev[postId]?.isBookmarked
      }
    }));
  };

  return (
    <PostContext.Provider value={{
      postInteractions,
      likePost,
      commentPost,
      sharePost,
      bookmarkPost
    }}>
      {children}
    </PostContext.Provider>
  );
};
