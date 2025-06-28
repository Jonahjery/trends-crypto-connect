
import React, { useState, useRef } from 'react';
import { Image, Video, Calendar, MapPin, Smile, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { useMedia } from '@/contexts/MediaContext';
import { useToast } from '@/hooks/use-toast';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const { uploadedMedia, uploadMedia, removeMedia, clearMedia } = useMedia();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleVideoUpload = () => {
    videoInputRef.current?.click();
  };

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      uploadMedia(files);
    }
  };

  const handlePost = () => {
    if (!content.trim() && uploadedMedia.length === 0) {
      toast({
        title: "Error",
        description: "Please add some content or media to your post",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send the post to a backend
    toast({
      title: "Post Created!",
      description: "Your post has been shared successfully",
    });

    // Clear form
    setContent('');
    clearMedia();
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>YU</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            {/* Content Input */}
            <Textarea
              placeholder="What's trending in your community?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] border-none resize-none focus:ring-0 text-lg placeholder:text-gray-500"
            />

            {/* Media Preview */}
            {uploadedMedia.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {uploadedMedia.map((media) => (
                  <div key={media.id} className="relative group">
                    {media.type === 'image' ? (
                      <img 
                        src={media.url} 
                        alt="Upload preview" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ) : (
                      <video 
                        src={media.url} 
                        className="w-full h-32 object-cover rounded-lg"
                        controls
                      />
                    )}
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeMedia(media.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Hidden file inputs */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleFileChange(e.target.files)}
              className="hidden"
            />
            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              multiple
              onChange={(e) => handleFileChange(e.target.files)}
              className="hidden"
            />

            {/* Actions */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-blue-500 hover:bg-blue-50"
                  onClick={handleImageUpload}
                >
                  <Image className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-blue-500 hover:bg-blue-50"
                  onClick={handleVideoUpload}
                >
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
                  <MapPin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
                  <Smile className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={handlePost}
                disabled={!content.trim() && uploadedMedia.length === 0}
              >
                Post Trend
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
