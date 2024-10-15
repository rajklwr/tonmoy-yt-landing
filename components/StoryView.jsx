'use client';
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Import from Heroicons v2

const StoryView = ({ dummyStories }) => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [storyDuration, setStoryDuration] = useState(30); // Default duration for image stories
  const [isLoading, setIsLoading] = useState(true); // New state for loading
  const videoRef = useRef(null); // Ref for video element
  const selectedStory = dummyStories[selectedStoryIndex];

  // Effect to handle story change
  useEffect(() => {
    setProgress(0); // Reset progress when a new story starts
    setIsLoading(true); // Set loading to true when new story starts

    // If the story is a video, adjust duration based on the video length
    if (selectedStory.imageUrl.endsWith('.mp4') && videoRef.current) {
      const handleLoadedMetadata = () => {
        setStoryDuration(videoRef.current.duration); // Set story duration to the video duration
        setIsLoading(false); // Hide loader once video metadata is loaded
      };

      const handleTimeUpdate = () => {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        setProgress((currentTime / duration) * 100); // Update progress based on video playback
      };

      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

      // Clean up listeners when component unmounts or story changes
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }

    // For image stories, fallback to the existing timer-based progress system
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + (100 / (storyDuration * 10)); // Increase progress every 100ms
      });
    }, 100);

    const timer = setTimeout(() => {
      goToNextStory();
    }, storyDuration * 1000); // Switch story after the duration

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [selectedStoryIndex, storyDuration]);

  // Event listener for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPreviousStory();
      } else if (e.key === 'ArrowRight') {
        goToNextStory();
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStoryIndex]);

  const goToNextStory = () => {
    if (selectedStoryIndex < dummyStories.length - 1) {
      setSelectedStoryIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPreviousStory = () => {
    if (selectedStoryIndex > 0) {
      setSelectedStoryIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleClick = (e) => {
    const screenWidth = window.innerWidth;
    const clickedX = e.clientX;

    if (clickedX < screenWidth / 2) {
      goToPreviousStory();
    } else {
      goToNextStory();
    }
  };

  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-start text-white px-4 py-6 relative"
      onClick={handleClick}
    >
      {/* Segmented Progress Bar */}
      <div className="w-full max-w-lg flex space-x-1 mb-2">
        {dummyStories.map((story, index) => (
          <div
            key={story.id}
            className="flex-1 h-1.5 bg-gray-500 rounded-full relative"
          >
            <div
              className={`absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-100`}
              style={{
                width: index === selectedStoryIndex ? `${progress}%` : index < selectedStoryIndex ? '100%' : '0%',
              }}
            />
          </div>
        ))}
      </div>

      {/* Profile Section */}
      <div className="flex items-center w-full max-w-lg space-x-4 mb-4">
        <img
          src="https://res.cloudinary.com/dm9iuudyc/image/upload/v1729017409/tonmoy-yt-landing/Profile/Untitled_design_6_skhj88.png"
          alt="Tonmoy"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-green-500 object-cover"
        />
        <div>
          <div className="flex items-center">
            <h2 className="text-lg sm:text-xl font-bold">Tonmoy Ghosh</h2>
            {/* Verified Badge */}
            <CheckCircleIcon className="ml-2 w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          </div>
          <p className="text-sm sm:text-base text-gray-300">{dummyStories[0].timestamp}</p>
        </div>
      </div>

      {/* Story Content View */}
      <div className="w-full max-w-lg bg-gray-900 rounded-xl overflow-hidden relative flex-grow">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="w-12 h-12 border-4 border-t-4 border-gray-400 rounded-full animate-spin"></div>
          </div>
        )}

        {selectedStory.imageUrl.endsWith('.mp4') ? (
          <video
            ref={videoRef}
            src={selectedStory.imageUrl}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            onEnded={goToNextStory} // Go to the next story when the video ends
            onLoadedData={() => setIsLoading(false)} // Hide loader once video is loaded
          />
        ) : (
          <img
            src={selectedStory.imageUrl}
            alt={`${selectedStory.name}'s story`}
            className="w-full h-full object-cover"
            onLoad={() => setIsLoading(false)} // Hide loader once image is loaded
          />
        )}
      </div>
    </div>
  );
};

export default StoryView;
