import React, { useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Signup() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "rgba(2, 10, 25)",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "42px",
        }}
      >
        Sign up and try Hexnode free for 14 days!
      </Typography>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{
          width: "40%",
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
            width: "35%",
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
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ transition: "all 0.3s ease-in-out", marginTop: "2vh" }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "17px",
            lineHeight: "24px",
            fontWeight: 500,
            color: "#556575",
            margin: 0,
            paddingTop: "10px",
          }}
        >
          No credit cards required.
        </Typography>
        <Typography
          component="a"
          href="https://www.hexnode.com/mobile-device-management/request-demo/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            paddingTop: "10px",
            fontSize: "17px",
            lineHeight: "24px",
            fontWeight: 500,
            color: "#dd0735",
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          Request a demo
        </Typography>
        <ChevronRightIcon
          sx={{
            color: "#dd0735",
            position: "relative",
            right: isHovered ? "-3px" : "0",
            transition: "right 0.3s ease-in-out",
            paddingTop: "10px",
          }}
        />
      </Stack>
    </Box>
  );
}

export default Signup;
