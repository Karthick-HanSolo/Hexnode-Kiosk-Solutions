import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ReactComponent as HexLogo } from "../assets/Hexnode.svg";
import { Button, Stack } from "@mui/material";

function Header() {
  const [scrollSize, setScrollSize] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrollSize(window.scrollY > 0)
      );
    }
  }, []);

  const appBarBgColor = scrollSize || isHovered ? "#FFFFFF" : "#020A19";
  const hexIconBgColor = scrollSize || isHovered ? "#020A19" : "#FFFFFF";

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar
        sx={{
          bgcolor: appBarBgColor,
          height: "13vh",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Stack
          direction={"row"}
          sx={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <HexLogo style={{ fill: hexIconBgColor }} />
          <Button
            variant="outlined"
            sx={{
              bgcolor: "#DD0735",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              "&:hover": {
                bgcolor: "#BB022A",
              },
            }}
          >
            14 DAY FREE TRIAL
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
