
import React, { useState } from 'react';
import { Image, Video, Calendar, MapPin, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>YU</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            {/* Category Selection */}
            <div className="mb-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crypto">Crypto News</SelectItem>
                  <SelectItem value="news">Breaking News</SelectItem>
                  <SelectItem value="ngo">NGO Updates</SelectItem>
                  <SelectItem value="politics">Politics</SelectItem>
                  <SelectItem value="general">General Discussion</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Content Input */}
            <Textarea
              placeholder="What's trending in your community?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] border-none resize-none focus:ring-0 text-lg placeholder:text-gray-500"
            />

            {/* Actions */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
                  <Image className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
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
                disabled={!content.trim()}
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
