import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { FaBullseye } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdRestaurantMenu, MdFastfood } from "react-icons/md";

const content = [
  {
    icon: (
      <FaBullseye style={{ height: "1em", width: "1em", color: "#D0562A" }} />
    ),
    mainText: "Goals",
    number: "15%",
    trend: "down",
    backgroundColor: "#5F3239",
  },
  {
    icon: (
      <MdRestaurantMenu
        style={{ height: "1em", width: "1em", color: "#969698" }}
      />
    ),
    mainText: "Popular Dishes",
    number: "15%",
    trend: "down",
    backgroundColor: "#293269",
  },
  {
    icon: (
      <MdFastfood style={{ height: "1em", width: "1em", color: "#2EA1CA" }} />
    ),
    mainText: "Menus",
    number: "15%",
    trend: "down",
    backgroundColor: "#224960",
  },
];

const Cards = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#1F2029",
          minHeight: " 274px",
        }}
      >
        <CardContent>
          {content.map((item) => {
            return (
              <Grid container spacing={2} sx={{ alignItems: "center" }} m={1}>
                <Grid item sm={8}>
                  <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item sm={4}>
                      <div
                        style={{
                          backgroundColor: item.backgroundColor,
                          width: "3em",
                          height: "3em",
                          borderRadius: "50%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.icon}
                      </div>
                    </Grid>
                    <Grid item sm={8}>
                      <p>{item.mainText}</p>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={4}>
                  <div style={{display:"flex"}}>
                    <div
                      style={{
                        backgroundColor: "#45474A",
                        height: "2em",
                        width: "2em",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FiArrowRight style={{ color: "#fff" }} />
                    </div>
                  </div>
                </Grid>
              </Grid>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
