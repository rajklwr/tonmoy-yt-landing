'use client';
import React, { useState, useEffect } from 'react';

const dummyStories = [
  {
    id: 1,
    name: 'John Doe',
    imageUrl: 'https://res.cloudinary.com/dm9iuudyc/image/upload/v1715771802/grogrip-testimonials/14_qpyfhd.png',
    storyContent: 'John’s story goes here...'
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageUrl: 'https://res.cloudinary.com/dm9iuudyc/image/upload/v1715771801/grogrip-testimonials/11_ziafnb.png',
    storyContent: 'Jane’s story goes here...'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    imageUrl: 'https://res.cloudinary.com/dm9iuudyc/image/upload/v1715771792/grogrip-testimonials/13_adwp2g.png',
    storyContent: 'Alice’s story goes here...'
  },
  {
    id: 4,
    name: 'Bob Williams',
    imageUrl: 'https://res.cloudinary.com/dm9iuudyc/image/upload/v1715771751/grogrip-testimonials/18_hfzdij.png',
    storyContent: 'Bob’s story goes here...'
  },
];

const StoryView = () => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const storyDuration = 30; // Story duration in seconds

  // Get the selected story from the index
  const selectedStory = dummyStories[selectedStoryIndex];

  // Effect to auto-advance to the next story every 30 seconds and increase progress
  useEffect(() => {
    setProgress(0); // Reset progress when a new story starts

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Clear interval when the progress reaches 100%
          return 100;
        }
        return prevProgress + (100 / (storyDuration * 10)); // Increase progress every 100ms
      });
    }, 100); // Update every 100ms

    const timer = setTimeout(() => {
      goToNextStory();
    }, storyDuration * 1000); // Switch story after 30 seconds

    // Clean up the timer and interval when the component unmounts or when the story changes
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
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
      // Clicked on the left side of the screen
      goToPreviousStory();
    } else {
      // Clicked on the right side of the screen
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

      {/* Profile Section - Always Visible */}
      <div className="flex items-center w-full max-w-lg space-x-4 mb-4">
        <img
          src="https://res.cloudinary.com/dm9iuudyc/image/upload/v1715771522/samples/people/smiling-man.jpg"
          alt="Tonmoy"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-green-500 object-cover"
        />
        <div>
          <h2 className="text-lg sm:text-xl font-bold">Tonmoy Ghosh</h2>
          <p className="text-sm sm:text-base text-gray-300">Live now</p>
        </div>
      </div>

      {/* Story Content View */}
      <div className="w-full max-w-lg bg-gray-900 rounded-xl overflow-hidden relative flex-grow">
        {/* Story Image */}
        <img
          src={selectedStory.imageUrl}
          alt={`${selectedStory.name}'s story`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default StoryView;
