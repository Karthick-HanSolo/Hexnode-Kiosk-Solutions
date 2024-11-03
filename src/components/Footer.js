import React from "react";
import { Box, Typography, Stack } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f7f7f7",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          width: "88%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <>
          <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 0,
              margin: 0,
            }}
          >
            {[
              {
                text: "Terms of Use",
                link: "https://www.hexnode.com/legal/terms-of-use/",
              },
              {
                text: "Privacy",
                link: "https://www.hexnode.com/legal/privacy-policy/",
              },
              {
                text: "Cookies",
                link: "https://www.hexnode.com/legal/cookies-policy/",
              },
            ].map((item, index) => (
              <Box
                component="li"
                key={item.text}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  component="a"
                  href={item.link}
                  role="link"
                  sx={{
                    fontSize: "13px",
                    color: "#949494",
                    cursor: "pointer",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "#020a19" },
                    textDecoration: "none",
                  }}
                >
                  {item.text}
                </Typography>
                {index < 2 && (
                  <Typography
                    sx={{
                      color: "#949494",
                      fontSize: "13px",
                      padding: "0 5px",
                    }}
                  >
                    -
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </>
        <>
          <Typography
            sx={{
              color: "#949494",
              fontSize: "13px",
              padding: "0 5px",
            }}
          >
            © 2024 Mitsogo Inc. All Rights Reserved.
          </Typography>
        </>
      </Stack>
    </Box>
  );
}

export default Footer;
