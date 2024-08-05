import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { FaArrowUp } from "react-icons/fa"; // Or any icons of your choice
import styled from "styled-components";

const CircularProgressWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px; // Adjust size as needed
  height: 120px; // Adjust size as needed
`;
const CardContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-height: 120px;
  justify-content: space-evenly;
`;
const TrendText = styled(Typography)`
  color: ${(props) => (props.trend === "up" ? "green" : "red")};
`;

const CircularText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem; // Adjust font size as needed
  color: white; // Adjust text color as needed
`;

const CircularPText = styled.div`
  font-size: 8px;
`;
const CircularProgressCard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 70 ? 70 : prevProgress + 1
      );
    }, 30); // Adjust the speed of the animation here
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#1F2029",
        }}
      >
        <CardContent>
          <CardContentWrapper>
            <TextContainer>
              <Typography variant="body2" component="p">
                Net Profit
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  // Responsive typography
                  "@media (min-width:600px)": {},
                  "@media (min-width:900px)": {
                    fontSize: "18px",
                  },
                  "@media (min-width:1200px)": {
                    fontSize: "1.5rem",
                  },
                }}
                variant="h4"
                component="div"
              >
                $6795.37
              </Typography>
              <Typography variant="body2" component="div">
                <TrendText trend={"up"}>
                  <FaArrowUp />
                  3%
                </TrendText>
              </Typography>
            </TextContainer>
            <CircularProgressWrapper>
              <CircularProgress
                variant="determinate"
                value={100}
                size={120} // Increased size
                thickness={6} // Adjust thickness as needed
                style={{ color: "#2A3468", position: "absolute" }} // Light blue for remaining part
              />
              <CircularProgress
                variant="determinate"
                value={progress}
                size={120} // Adjust size as needed
                thickness={6} // Adjust thickness as needed
                style={{ color: "#7494FE", position: "absolute" }}
              />
              <CircularText>
                <div>70%</div>
                <CircularPText>Goal Completed</CircularPText>
              </CircularText>
            </CircularProgressWrapper>
          </CardContentWrapper>
        </CardContent>
      </Card>
    </>
  );
};

export default CircularProgressCard;
