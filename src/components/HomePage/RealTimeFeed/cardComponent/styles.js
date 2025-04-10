import styled from "styled-components";
import { FaRegClock } from "react-icons/fa";

export const FeedCard = styled.div`
  background-color: #303134;
  border-radius: 12px;
  padding: 16px;
  margin: 10px 0;
  color: #e8eaed;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 500px;
`;

export const Image = styled.div`
  width: 100px;
  height: 50px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const TimeRow = styled.div`
  display: flex;
  align-items: center;
  color: #9aa0a6;
  font-size: 13px;
`;

export const TimeIcon = styled(FaRegClock)`
  margin-right: 6px;
  font-size: 13px;
`;
