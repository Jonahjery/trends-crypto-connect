
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, X, Upload, Gift } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const CreateAirdrop = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [requirements, setRequirements] = useState<string[]>(['']);
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    amount: '',
    description: '',
    difficulty: '',
    totalSupply: '',
    website: '',
    twitter: '',
    telegram: '',
    discord: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addRequirement = () => {
    setRequirements([...requirements, '']);
  };

  const updateRequirement = (index: number, value: string) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
  };

  const removeRequirement = (index: number) => {
    if (requirements.length > 1) {
      setRequirements(requirements.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Airdrop submitted:', {
      ...formData,
      startDate,
      endDate,
      requirements: requirements.filter(req => req.trim() !== '')
    });
    // Here you would typically send the data to your backend
    alert('Airdrop submitted successfully! (This is a mock interface)');
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
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Airdrop</h1>
              <p className="text-gray-600">Launch your token airdrop campaign</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Basic Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Project Name</Label>
                          <Input
                            id="name"
                            placeholder="e.g., CommunityToken"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="symbol">Token Symbol</Label>
                          <Input
                            id="symbol"
                            placeholder="e.g., COMM"
                            value={formData.symbol}
                            onChange={(e) => handleInputChange('symbol', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your project and airdrop..."
                          className="min-h-[100px]"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="amount">Airdrop Amount per User</Label>
                          <Input
                            id="amount"
                            placeholder="e.g., 500"
                            value={formData.amount}
                            onChange={(e) => handleInputChange('amount', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="totalSupply">Total Airdrop Supply</Label>
                          <Input
                            id="totalSupply"
                            placeholder="e.g., 1000000"
                            value={formData.totalSupply}
                            onChange={(e) => handleInputChange('totalSupply', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Difficulty Level</Label>
                        <Select onValueChange={(value) => handleInputChange('difficulty', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Campaign Dates */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Campaign Duration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Start Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !startDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {startDate ? format(startDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div>
                          <Label>End Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !endDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {endDate ? format(endDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Requirements */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Participation Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {requirements.map((req, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Input
                              placeholder="e.g., Follow @ProjectName on Twitter"
                              value={req}
                              onChange={(e) => updateRequirement(index, e.target.value)}
                            />
                            {requirements.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => removeRequirement(index)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={addRequirement}
                          className="w-full"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Requirement
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Project Links */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          placeholder="https://yourproject.com"
                          value={formData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input
                          id="twitter"
                          placeholder="@yourproject"
                          value={formData.twitter}
                          onChange={(e) => handleInputChange('twitter', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="telegram">Telegram</Label>
                        <Input
                          id="telegram"
                          placeholder="t.me/yourproject"
                          value={formData.telegram}
                          onChange={(e) => handleInputChange('telegram', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="discord">Discord</Label>
                        <Input
                          id="discord"
                          placeholder="discord.gg/yourproject"
                          value={formData.discord}
                          onChange={(e) => handleInputChange('discord', e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project Logo */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Logo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-sm text-gray-600 mb-2">Upload your project logo</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Submit */}
                  <Card>
                    <CardContent className="pt-6">
                      <Button type="submit" className="w-full" size="lg">
                        <Gift className="h-5 w-5 mr-2" />
                        Launch Airdrop
                      </Button>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Your airdrop will be reviewed before going live
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateAirdrop;
