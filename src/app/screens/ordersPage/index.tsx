import React, { useState, SyntheticEvent } from "react";
import { Container, Stack, Box, colors } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../../css/order.css";
// import Input from "@mui/joy/Input";

export default function OrdersPage() {
  const [value, setValue] = useState("1");
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className="order-container">
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label={"basic tabs example"}
                  className={"table_list"}
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <img className={"martin-img"} src="/img/justin.webp" alt="" />
              <div className={"order-user-img"}>
                <img
                  src={"/icons/default-user.svg"}
                  className={"order-user-avatar"}
                />

                <div className={"order-user-icon-box"}>
                  <img
                    src={"/icons/user-badge.svg"}
                    className={"order-user-prof-img"}
                  />
                </div>
              </div>

              <span className={"order-user-name"}>Martin</span>
              <span className={"order-user-prof"}>User</span>
              <Box className={"liner"}></Box>
              <Box className={"order-user-address"}>
                <div style={{ display: "flex" }}>
                  <LocationOnIcon />
                  South Korea, Busan
                </div>
              </Box>
            </Box>
          </Box>

          <Box className={"payment-details"}>
            <Box className={"box-input-card-number"}>
              <TextField
                className={"input-card-number"}
                id="outlined-basic"
                label="Card Number: 5243 4090 2002 7495"
                variant="outlined"
              />
            </Box>
            <Box className={"box-input-date-cvv"}>
              <Box>
                {" "}
                <TextField
                  className={"card-date"}
                  id="outlined-basic"
                  label="07/24"
                  variant="outlined"
                />
              </Box>
              <Box>
                <TextField
                  className={"card-date"}
                  id="outlined-basic"
                  label="CVV : 010"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box className={"box-input-card-number"}>
              {" "}
              <TextField
                className={"input-card-number"}
                id="outlined-basic"
                label="Justin Robertson"
                variant="outlined"
              />
            </Box>
            <Box className={"visa-card"}>
              <img src="/icons/western-card.svg" alt="" />
              <img src="/icons/master-card.svg" alt="" />
              <img src="/icons/paypal-card.svg" alt="" />
              <img src="/icons/visa-card.svg" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
