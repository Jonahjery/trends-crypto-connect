
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MediaFile {
  id: string;
  file: File;
  type: 'image' | 'video';
  url: string;
}

interface MediaContextType {
  uploadedMedia: MediaFile[];
  uploadMedia: (files: FileList) => void;
  removeMedia: (id: string) => void;
  clearMedia: () => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
};

interface MediaProviderProps {
  children: ReactNode;
}

export const MediaProvider: React.FC<MediaProviderProps> = ({ children }) => {
  const [uploadedMedia, setUploadedMedia] = useState<MediaFile[]>([]);

  const uploadMedia = (files: FileList) => {
    const newMedia: MediaFile[] = [];
    
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        const id = Math.random().toString(36).substring(7);
        const url = URL.createObjectURL(file);
        const type = file.type.startsWith('image/') ? 'image' : 'video';
        
        newMedia.push({ id, file, type, url });
      }
    });
    
    setUploadedMedia(prev => [...prev, ...newMedia]);
  };

  const removeMedia = (id: string) => {
    setUploadedMedia(prev => {
      const mediaToRemove = prev.find(m => m.id === id);
      if (mediaToRemove) {
        URL.revokeObjectURL(mediaToRemove.url);
      }
      return prev.filter(m => m.id !== id);
    });
  };

  const clearMedia = () => {
    uploadedMedia.forEach(media => {
      URL.revokeObjectURL(media.url);
    });
    setUploadedMedia([]);
  };

  return (
    <MediaContext.Provider value={{
      uploadedMedia,
      uploadMedia,
      removeMedia,
      clearMedia
    }}>
      {children}
    </MediaContext.Provider>
  );
};
