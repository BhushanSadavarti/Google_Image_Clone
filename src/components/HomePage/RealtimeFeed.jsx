// src/components/HomePage/RealtimeFeed.jsx
import React from "react";
import {
  FeedContainer,
  FeedItem,
  FeedImage,
  FeedTitle,
  FeedSection,
  SectionTitle,
} from "./styles";

const RealtimeFeed = () => {
  // Mock data for the feed
  const trendingItems = [
    { id: 1, title: "Latest tech news", imageUrl: "/api/placeholder/120/80" },
    { id: 2, title: "Weather updates", imageUrl: "/api/placeholder/120/80" },
    { id: 3, title: "Sports highlights", imageUrl: "/api/placeholder/120/80" },
  ];

  const recommendedItems = [
    { id: 4, title: "Recipe ideas", imageUrl: "/api/placeholder/120/80" },
    {
      id: 5,
      title: "Travel destinations",
      imageUrl: "/api/placeholder/120/80",
    },
    { id: 6, title: "Health tips", imageUrl: "/api/placeholder/120/80" },
  ];

  return (
    <FeedContainer>
      <FeedSection>
        <SectionTitle>Trending</SectionTitle>
        {trendingItems.map((item) => (
          <FeedItem key={item.id}>
            <FeedImage src={item.imageUrl} alt={item.title} />
            <FeedTitle>{item.title}</FeedTitle>
          </FeedItem>
        ))}
      </FeedSection>

      <FeedSection>
        <SectionTitle>For you</SectionTitle>
        {recommendedItems.map((item) => (
          <FeedItem key={item.id}>
            <FeedImage src={item.imageUrl} alt={item.title} />
            <FeedTitle>{item.title}</FeedTitle>
          </FeedItem>
        ))}
      </FeedSection>
    </FeedContainer>
  );
};

export default RealtimeFeed;
