import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Or any icons of your choice
import {
  MdCancel,
  MdAttachMoney,
  MdDone,
  MdShoppingCart,
} from "react-icons/md"; // Example icons for each metric

const cards = [
  {
    icon: <MdCancel style={{ fontSize: "2rem" }} />,
    mainText: "Total Canceled",
    number: "15%",
    trend: "down",
  },
  {
    icon: <MdAttachMoney style={{ fontSize: "2rem" }} />,
    mainText: "Total Revenue",
    number: "22%",
    trend: "up",
  },
  {
    icon: <MdDone style={{ fontSize: "2rem" }} />,
    mainText: "Total Delivered",
    number: "8%",
    trend: "up",
  },
  {
    icon: <MdShoppingCart style={{ fontSize: "2rem" }} />,
    mainText: "Total Orders",
    number: "10%",
    trend: "down",
  },
];



const StatisticsCards = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: "#1F2029",
                minHeight: 160 ,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "#fff",
                  }}
                  variant="h6"
                  component="div"
                  gutterBottom
                >
                  {card.icon}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    // Responsive typography
                    '@media (min-width:600px)': {
                      fontSize: '1.1rem',
                    },
                    '@media (min-width:900px)': {
                      fontSize: '14px',
                    },
                    '@media (min-width:1200px)': {
                      fontSize: '1.5rem',
                    }
                  }}
                  variant="h6"
                  component="div"
                >
                  {card.mainText}
                </Typography>
                <Typography
                  sx={{
                    color: card.trend === "up"? "green": "red",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {card.number}{" "}
                  {card.trend === "up" ? (
                    <FaArrowUp style={{ color: "green" }} />
                  ) : (
                    <FaArrowDown style={{ color: "red" }} />
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatisticsCards;
