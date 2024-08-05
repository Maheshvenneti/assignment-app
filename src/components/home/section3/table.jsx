import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const StyledTableContainer = styled(TableContainer)``;

const StyledTableCell = styled(TableCell)`
  font-weight: bold;
`;

const data = [
  {
    customer: "John Doe",
    orderNumber: "12345",
    amount: "$99.99",
    status: "Shipped",
  },
  {
    customer: "Jane Smith",
    orderNumber: "67890",
    amount: "$149.99",
    status: "Cancelled",
  },
  {
    customer: "Michael Brown",
    orderNumber: "24680",
    amount: "$199.99",
    status: "Delivered",
  },
  {
    customer: "Emily Davis",
    orderNumber: "13579",
    amount: "$299.99",
    status: "Cancelled",
  },
];

const RecentOrders = () => {
  return (
    <div style={{ backgroundColor: "#1D2129" }}>
      <StyledTableContainer>
        <Typography
          variant="h6"
          component="div"
          sx={{ padding: 2, color: "#fff" }}
        >
          Recent Orders
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ color: "#fff" }}>Customer</StyledTableCell>
              <StyledTableCell sx={{ color: "#fff" }}>
                Order Number
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#fff" }}>Amount</StyledTableCell>
              <StyledTableCell sx={{ color: "#fff" }}>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "#fff" }}>{row.customer}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.orderNumber}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.amount}</TableCell>
                <TableCell>
                  <p
                    style={{
                      color: "#fff",
                      backgroundColor:
                        row.status === "Cancelled"
                          ? "#5E3439"
                          : row.status === "Delivered" ||
                            row.status === "Shipped"
                          ? "#095A48"
                          : "#fff",
                      borderRadius: "10px",
                      textAlign:"center",
                    }}
                  >{row.status}</p>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
};

export default RecentOrders;
