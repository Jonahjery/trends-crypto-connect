
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Hash, Globe, Shield, Briefcase, Building2, Users, Heart, Zap } from 'lucide-react';
import { useCommunity } from '@/contexts/CommunityContext';
import { useToast } from '@/hooks/use-toast';

const CreateCommunity = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('Hash');
  const [selectedColor, setSelectedColor] = useState('text-blue-500');
  const { createCommunity } = useCommunity();
  const { toast } = useToast();
  const navigate = useNavigate();

  const iconOptions = [
    { name: 'Hash', icon: Hash, value: 'Hash' },
    { name: 'Globe', icon: Globe, value: 'Globe' },
    { name: 'Shield', icon: Shield, value: 'Shield' },
    { name: 'Briefcase', icon: Briefcase, value: 'Briefcase' },
    { name: 'Building', icon: Building2, value: 'Building2' },
    { name: 'Users', icon: Users, value: 'Users' },
    { name: 'Heart', icon: Heart, value: 'Heart' },
    { name: 'Zap', icon: Zap, value: 'Zap' },
  ];

  const colorOptions = [
    { name: 'Blue', value: 'text-blue-500' },
    { name: 'Green', value: 'text-green-500' },
    { name: 'Orange', value: 'text-orange-500' },
    { name: 'Purple', value: 'text-purple-500' },
    { name: 'Red', value: 'text-red-500' },
    { name: 'Pink', value: 'text-pink-500' },
    { name: 'Yellow', value: 'text-yellow-500' },
    { name: 'Indigo', value: 'text-indigo-500' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !description.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    createCommunity({
      name: name.trim(),
      description: description.trim(),
      icon: selectedIcon,
      color: selectedColor,
      members: '1', // Starting with 1 member (the creator)
      posts: '0 posts this week'
    });

    toast({
      title: "Community Created!",
      description: `${name} has been successfully created and you've automatically joined it.`,
    });

    navigate('/communities');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <main className="flex-1 w-full md:w-auto p-4 sm:p-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Community</h1>
              <p className="text-gray-600">Build a space for people with shared interests</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Community Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Community Name *</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter community name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe what your community is about"
                      required
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label>Icon</Label>
                    <Select value={selectedIcon} onValueChange={setSelectedIcon}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an icon" />
                      </SelectTrigger>
                      <SelectContent>
                        {iconOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center space-x-2">
                              <option.icon className="h-4 w-4" />
                              <span>{option.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Color Theme</Label>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a color" />
                      </SelectTrigger>
                      <SelectContent>
                        {colorOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center space-x-2">
                              <div className={`w-4 h-4 rounded-full bg-current ${option.value}`} />
                              <span>{option.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-4">
                    <Button type="button" variant="outline" onClick={() => navigate('/communities')}>
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      Create Community
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateCommunity;
