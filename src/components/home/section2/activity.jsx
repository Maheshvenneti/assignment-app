// src/components/ChartComponent.js
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography, Select, MenuItem, FormControl, Grid } from "@mui/material";

import styled from "styled-components";

const StyledFormcontrol = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1%;
`;

const weeklyData = [
  { name: "Week 1", value: 2000 },
  { name: "Week 2", value: 3000 },
  { name: "Week 3", value: 2500 },
  { name: "Week 4", value: 4000 },
];

const monthlyData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 4200 },
  { name: "Sep", value: 4020 },
  { name: "Oct", value: 3020 },
  { name: "Nov", value: 2000 },
  { name: "Dec", value: 2780 },
];

const ChartComponent = () => {
  const [period, setPeriod] = useState("monthly"); // Default to monthly data

  // Determine the data to display based on the selected period
  const data = period === "monthly" ? monthlyData : weeklyData;

  return (
    <div style={{ backgroundColor: "#1F2029",  }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-around" }}>
        <Grid item xs={6} sm={6}>
          <Typography
            sx={{ color: "#fff" }}
            variant="h6"
            component="div"
          >
            Sales Data
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <StyledFormcontrol>
            <FormControl sx={{ color: "#fff" }}>
              <Select
                labelId="select-period-label"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                label="Select Period"
                sx={{ color: "#fff", backgroundColor: "#4C4E52" }}
              >
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
          </StyledFormcontrol>
        </Grid>
      </Grid>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} stroke="#4C4E52" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            fill="#8884d8"
            radius={[10, 10, 0, 0]} // Rounded corners
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
