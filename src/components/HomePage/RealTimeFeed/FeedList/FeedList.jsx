import React from "react";
import FeedCardComponent from "../cardComponent/card";

const dummyFeedData = [
  {
    title: "Nike Air Max new collection launched now",
    time: "Just now",
    image: "https://source.unsplash.com/featured/?nike,shoes",
  },
  {
    title: "Samsung unveils Galaxy Z Fold 6 in Unpacked event",
    time: "3 min ago",
    image: "https://source.unsplash.com/featured/?samsung,foldable",
  },
  {
    title: "AI-generated artwork wins national competition",
    time: "8 min ago",
    image: "https://source.unsplash.com/featured/?ai,art",
  },
  {
    title: "SpaceX Starship completes successful re-entry landing",
    time: "12 min ago",
    image: "https://source.unsplash.com/featured/?spacex,rocket",
  },
  {
    title: "India qualifies for ICC World Cup finals",
    time: "20 min ago",
    image: "https://source.unsplash.com/featured/?cricket,india",
  },
  {
    title: "Apple Vision Pro gets major software update",
    time: "28 min ago",
    image: "https://source.unsplash.com/featured/?apple,visionpro",
  },
  {
    title: "Google introduces new Gemini model for code generation",
    time: "35 min ago",
    image: "https://source.unsplash.com/featured/?google,ai",
  },
  {
    title: "YouTube now supports 8K video streaming on mobile",
    time: "42 min ago",
    image: "https://source.unsplash.com/featured/?youtube,mobile",
  },
  {
    title: "New Tesla update improves self-driving in rain",
    time: "1 hour ago",
    image: "https://source.unsplash.com/featured/?tesla,car",
  },
  {
    title: "Meta rolls out Threads API to public developers",
    time: "2 hours ago",
    image: "https://source.unsplash.com/featured/?meta,developer",
  },
];

const FeedList = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {dummyFeedData.map((item, index) => (
        <FeedCardComponent
          key={index}
          title={item.title}
          time={item.time}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default FeedList;
