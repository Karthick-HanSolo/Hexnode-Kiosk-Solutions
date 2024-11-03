import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import androidPfp from "../assets/android.svg";
import iosPfp from "../assets/ios.svg";
import windowsPfp from "../assets/windows.svg";
import androidTvPfp from "../assets/android-tv.svg";
import appleTvPfp from "../assets/apple-tv.svg";

function Support() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",
        height: "65vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            width: "88%",
          }}
        >
          <>
            <Typography
              variant="h2"
              align="center"
              sx={{
                marginTop: "10vh",
                marginBottom: { xs: "40px", md: "60px" },
                color: "#020a19",
                fontSize: { xs: "32px", sm: "40px" },
                lineHeight: { xs: "40px", sm: "1.3" },
                fontWeight: 600,
                antialiasing: "antialiased",
              }}
            >
              Platforms Supported
            </Typography>
          </>
          <>
            <Stack
              direction={"row"}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {[
                { src: androidPfp, alt: "Android logo" },
                { src: windowsPfp, alt: "Windows logo" },
                { src: iosPfp, alt: "iOS logo" },
                { src: androidTvPfp, alt: "Android TV logo" },
                { src: appleTvPfp, alt: "Apple TV logo" },
              ].map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  style={{
                    height: 60,
                    width: 160,
                    transition: "transform 0.2s ease-in-out",
                  }}
                  loading="lazy"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-4px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0px)")
                  }
                />
              ))}
            </Stack>
          </>
        </Stack>
      </Box>
    </Box>
  );
}

export default Support;
