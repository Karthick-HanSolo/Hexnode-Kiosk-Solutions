import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Button, Divider, Box } from "@mui/material";
import hexnodeInfo from "../assets/hexnodeImage1.webp";
import idcLogo from "../assets/idc.webp";
import gartnerlogo from "../assets/gartner.webp";
import forresterLogo from "../assets/forrester.webp";
import { useState } from "react";

function Home() {
  const [hasEntered1, setHasEntered1] = useState(false);
  const [hasEntered2, setHasEntered2] = useState(false);
  const [hasEntered3, setHasEntered3] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#020A19",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          bgcolor: "#020A19",
          width: "88%",
          marginTop: "20vh",
          height: "auto",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Stack direction={"column"}>
            {/* <Box> */}
            <Typography
              variant="h1"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "34px", lg: "42px" },
                lineHeight: { xs: "44px", lg: "53px" },
                textAlign: { xs: "center", lg: "left" },
                antialiased: true,
                fontWeight: "600",
              }}
            >
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </Typography>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "4vh",
              }}
            >
              <input
                type="text"
                placeholder="Your Work Email"
                style={{
                  flex: 1,
                  height: "43px",
                  borderRadius: "3px",
                  border: "1px solid #FFFFFF",
                  outline: "none",
                  paddingLeft: "8px",
                }}
              />
              <Button
                sx={{
                  width: "45%",
                  bgcolor: "#DD0735",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "2px",
                  "&:hover": {
                    bgcolor: "#BB022A",
                  },
                }}
              >
                GET STARTED NOW
              </Button>
            </Stack>
          </Stack>

          <img
            src={hexnodeInfo}
            alt="HEXNODE_KIOSK_DETAILS"
            loading="lazy"
            width="597"
            height="586"
            style={{ objectFit: "cover" }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          bgcolor: "#1A1C2B",
          height: "35vh",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            margin: "0 auto",
            width: "88%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box
            onMouseEnter={() => setHasEntered1(true)}
            onMouseLeave={() => setHasEntered1(false)}
            sx={{
              width: "70%",
              padding: "0 2vw 0 2vw",
              position: "relative",
              bottom: hasEntered1 ? "5px" : "0px",
              transition: "bottom 0.3s ease",
            }}
          >
            <img
              src={idcLogo}
              alt="IDC"
              style={{
                width: "83px",
                height: "25px",
                margin: "3vh 0 3vh 0",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: { xs: "center", md: "left" },
                marginTop: "1vh",
              }}
            >
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: "25vh",
            }}
          />
          <Box
            onMouseEnter={() => setHasEntered2(true)}
            onMouseLeave={() => setHasEntered2(false)}
            sx={{
              width: "70%",
              padding: "0 2vw 0 2vw",
              position: "relative",
              bottom: hasEntered2 ? "5px" : "0px",
              transition: "bottom 0.3s ease",
            }}
          >
            <img
              src={gartnerlogo}
              alt="GARTNER"
              style={{
                width: "110px",
                height: "25px",
                margin: "3vh 0 3vh 0",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: { xs: "center", md: "left" },
                marginTop: "1vh",
              }}
            >
              Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
              Quadrant for Unified Endpoint Management tools 2022.
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: "25vh",
              //   marginTop: "3vh",
            }}
          />
          <Box
            onMouseEnter={() => setHasEntered3(true)}
            onMouseLeave={() => setHasEntered3(false)}
            sx={{
              width: "70%",
              padding: "0 2vw 0 2vw",
              position: "relative",
              bottom: hasEntered3 ? "5px" : "0px",
              transition: "bottom 0.3s ease",
            }}
          >
            <img
              src={forresterLogo}
              alt="FORRESTER"
              style={{
                width: "156px",
                height: "25px",
                margin: "3vh 0 3vh 0",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: { xs: "center", md: "left" },
                marginTop: "1vh",
              }}
            >
              Forrester includes Hexnode as a Notable vendor in The Unified
              Endpoint Management Landscape, Q3 2023.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
