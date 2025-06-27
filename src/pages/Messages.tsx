
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Search, MoreHorizontal, ArrowLeft } from 'lucide-react';

const Messages = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'CryptoNews Daily',
      username: 'cryptonews',
      avatar: '',
      lastMessage: 'Thanks for sharing that article!',
      timestamp: '2m',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Senator Johnson',
      username: 'senatorjohnson',
      avatar: '',
      lastMessage: 'The committee meeting is scheduled for next week.',
      timestamp: '1h',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Climate Action Network',
      username: 'climateaction',
      avatar: '',
      lastMessage: 'Great work on the sustainability initiative!',
      timestamp: '3h',
      unread: 1,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'CryptoNews Daily',
      content: 'Hey! Did you see the latest Bitcoin news?',
      timestamp: '10:30 AM',
      isMe: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Yes, it\'s incredible! The institutional adoption is really picking up.',
      timestamp: '10:32 AM',
      isMe: true
    },
    {
      id: 3,
      sender: 'CryptoNews Daily',
      content: 'Exactly! We\'re preparing a comprehensive report on this trend. Would you be interested in contributing your insights?',
      timestamp: '10:35 AM',
      isMe: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'I\'d be happy to help! What specific aspects would you like me to focus on?',
      timestamp: '10:37 AM',
      isMe: true
    },
    {
      id: 5,
      sender: 'CryptoNews Daily',
      content: 'Thanks for sharing that article!',
      timestamp: '10:45 AM',
      isMe: false
    }
  ];

  const handleConversationClick = (index: number) => {
    setSelectedChat(index);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
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
          <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)]">
            {selectedChat === null ? (
              <>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
                  <p className="text-gray-600">Connect with other community members</p>
                </div>

                {/* Conversations List */}
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="mb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search conversations..."
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {conversations.map((conversation, index) => (
                        <div
                          key={conversation.id}
                          className="p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 border border-gray-100"
                          onClick={() => handleConversationClick(index)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Avatar>
                                <AvatarImage src={conversation.avatar} />
                                <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              {conversation.online && (
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="font-semibold text-gray-900 truncate">{conversation.name}</p>
                                <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                              </div>
                              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                            </div>
                            {conversation.unread > 0 && (
                              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center">
                                <span className="text-xs">{conversation.unread}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              /* Chat Interface */
              <Card className="h-full flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm" onClick={handleBackToList}>
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      <Avatar>
                        <AvatarImage src={conversations[selectedChat]?.avatar} />
                        <AvatarFallback>{conversations[selectedChat]?.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{conversations[selectedChat]?.name}</h3>
                        <p className="text-sm text-gray-500">@{conversations[selectedChat]?.username}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isMe
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p>{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.isMe ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messages;
