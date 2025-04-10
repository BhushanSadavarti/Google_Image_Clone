import React from "react";
import { FeedCard, Title, TimeRow, TimeIcon, Image } from "./styles";

const FeedCardComponent = ({ title, time, image }) => {
  return (
    <FeedCard>
      <Image>
        <img src={image} />
      </Image>
      <Title>{title}</Title>
      <TimeRow>
        <TimeIcon />
        <span>{time}</span>
      </TimeRow>
    </FeedCard>
  );
};
export default FeedCardComponent;
