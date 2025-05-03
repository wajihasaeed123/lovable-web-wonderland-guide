
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videoData = [
  {
    id: 1,
    title: "World Clock App Demo",
    description: "Demo of World Clock app featuring alarm, stopwatch, timer functionality",
    embedUrl: "https://youtube.com/embed/8sRqaQBaQF0",
    youtubeUrl: "https://youtube.com/shorts/8sRqaQBaQF0?feature=share"
  },
  {
    id: 2,
    title: "iFix Automotive Diagnostic App",
    description: "Demo of the iFix automotive diagnostic application",
    embedUrl: "https://youtube.com/embed/qxUiZfxbqU8",
    youtubeUrl: "https://youtube.com/shorts/qxUiZfxbqU8?feature=share"
  },
  {
    id: 3,
    title: "ProMasters Only App",
    description: "Demo of the ProMasters Only diagnostic application",
    embedUrl: "https://youtube.com/embed/uT3ZftO2v6Y",
    youtubeUrl: "https://youtu.be/uT3ZftO2v6Y"
  },
  {
    id: 4,
    title: "FineTerryTowels Website",
    description: "Demo of the FineTerryTowels e-commerce website",
    embedUrl: "https://youtube.com/embed/FD3TmYHzQJ0",
    youtubeUrl: "https://youtube.com/shorts/FD3TmYHzQJ0"
  }
];

const VideoPlayer = ({ video }: { video: typeof videoData[0] }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // Get the iframe element
    const iframe = document.getElementById(`video-iframe-${video.id}`) as HTMLIFrameElement;
    
    if (iframe && iframe.contentWindow) {
      if (isPlaying) {
        // Pause video
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        // Play video
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    }
  };
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-[9/16] bg-black relative">
        <iframe
          id={`video-iframe-${video.id}`}
          src={`${video.embedUrl}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1`}
          className="w-full h-full"
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <Button 
            variant="secondary" 
            size="icon"
            className="bg-white/80 hover:bg-white"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="secondary"
            size="sm"
            className="bg-white/80 hover:bg-white flex items-center gap-2"
            onClick={() => window.open(video.youtubeUrl, '_blank')}
          >
            <Youtube className="h-4 w-4" />
            <span className="hidden sm:inline">View on YouTube</span>
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-lg">{video.title}</h3>
        <p className="text-sm text-portfolio-gray">{video.description}</p>
      </CardContent>
    </Card>
  );
};

const VideoShowcase = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="section-title">Featured Work</h2>
          <p className="mt-4 text-portfolio-gray max-w-2xl mx-auto">
            Browse through video demonstrations of my mobile applications and web development projects
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-8">
          <span className="mr-2 text-portfolio-purple">📱</span>
          <span className="text-lg font-medium">Mobile View Showcase</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {videoData.map((video) => (
            <VideoPlayer key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
