
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CommunityProvider } from "@/contexts/CommunityContext";
import { PostProvider } from "@/contexts/PostContext";
import { MediaProvider } from "@/contexts/MediaContext";
import Index from "./pages/Index";
import Communities from "./pages/Communities";
import CreateCommunity from "./pages/CreateCommunity";
import Trending from "./pages/Trending";
import Airdrops from "./pages/Airdrops";
import Messages from "./pages/Messages";
import CreateAirdrop from "./pages/CreateAirdrop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CommunityProvider>
        <PostProvider>
          <MediaProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/communities" element={<Communities />} />
                <Route path="/communities/create" element={<CreateCommunity />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/airdrops" element={<Airdrops />} />
                <Route path="/airdrops/create" element={<CreateAirdrop />} />
                <Route path="/messages" element={<Messages />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </MediaProvider>
        </PostProvider>
      </CommunityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
