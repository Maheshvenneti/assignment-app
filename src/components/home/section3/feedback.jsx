import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import styled from "styled-components";

// Sample data for feedback
const feedback = [
  {
    customerName: "John Doe",
    customerImg: "https://via.placeholder.com/150", // Placeholder image URL
    rating: 4,
    content: "This product is amazing! Highly recommend it to everyone.",
  },
  {
    customerName: "John Doe",
    customerImg: "https://via.placeholder.com/150", // Placeholder image URL
    rating: 5,
    content:
      "This product is amazing! Highly recommend it to everyone. Try it out very much useful for all customers",
  },
];

// Styled components
const FeedbackCard = styled(Card)`
  background-color: #1d2129;
  color: white;
  margin: 20px;
`;

const FeedbackCardContent = styled(CardContent)``;

const CustomerName = styled(Typography)`
  margin-top: 10px;
  font-weight: bold;
`;

const RatingBox = styled(Box)`
  display: flex;
  margin-top: 10px;
`;

const FeedbackContent = styled(Typography)`
  margin-top: 10px;
`;

const CustomerFeedbackCard = () => {

  return (
    <div>
      <FeedbackCard
        sx={{
          textAlign: "left",
          backgroundColor: "#1d2129",
          padding: "2%",
          margin: 0,
        }}
      >
        <Typography variant="h6">Customer Feedback</Typography>
        {feedback.map((item) => {
          return (
            <FeedbackCardContent>
              <div style={{ display: "flex", alignItems: "center", gap: "3%" }}>
                <Avatar
                  alt={item.customerName}
                  src={item.customerImg}
                  sx={{ width: 40, height: 40 }}
                />
                <CustomerName variant="h6">{item.customerName}</CustomerName>
              </div>
              <RatingBox>
                {[...Array(5)].map((_, index) =>
                  index < item.rating ? (
                    <Star key={index} style={{ color: "gold" }} />
                  ) : (
                    <StarBorder key={index} style={{ color: "gold" }} />
                  )
                )}
              </RatingBox>
              <FeedbackContent variant="body2">{item.content}</FeedbackContent>
            </FeedbackCardContent>
          );
        })}
      </FeedbackCard>
    </div>
  );
};

export default CustomerFeedbackCard;
