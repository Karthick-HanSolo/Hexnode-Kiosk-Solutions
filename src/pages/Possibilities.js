import React from "react";
import {
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slide,
} from "@mui/material";
import { useState } from "react";
import effortlessKiosk from "../assets/effortless-kiosk-deployement-image.webp";
import customisedKiosk from "../assets/customized-interface-image.webp";
import powerUpKiosk from "../assets/power-up-protection-image.webp";
import secureKiosk from "../assets/secure-app-ecosystem.webp";
import easyUseKiosk from "../assets/easy-to-use-interface-image.webp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Possibilities() {
  const imageDetails = [
    {
      title: "Effortless kiosk deployment & management",
      content:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
      overlayDetails: "Zero touch Kiosk",
      imageUrl: effortlessKiosk,
    },
    {
      title: "Customized interface for brand visibility",
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
      overlayDetails: "Brand Visibility",
      imageUrl: customisedKiosk,
    },
    {
      title: "What more can you do with Hexnode kiosk?",
      content:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
      overlayDetails: "Data Security",
      imageUrl: powerUpKiosk,
    },
    {
      title: "Secure and update your app ecosystem",
      content:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
      overlayDetails: "App management",
      imageUrl: secureKiosk,
    },
    {
      title: "Provide an easy-to-use interface for end-users",
      content:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
      overlayDetails: "Easy to use interface",
      imageUrl: easyUseKiosk,
    },
  ];

  const [expanded, setExpanded] = useState(0);
  const [currentImage, setCurrentImage] = useState(imageDetails[0].imageUrl);
  const [slidingUp, setSlidingUp] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (index) => (event, isExpanded) => {
    if (isExpanded) {
      setSlidingUp(true);
      setTimeout(() => {
        setCurrentImage(imageDetails[index].imageUrl);
        setSlidingUp(false);
      }, 300);
    }
    setExpanded(isExpanded ? index : false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
      }}
    >
      <Stack
        direction={"column"}
        sx={{
          width: "88%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20vh",
          marginBottom: "10vh",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            lineHeight: { xs: "40px", md: 1.3 },
            color: "#020a19",
            paddingBottom: "20px",
            maxWidth: { xs: "340px", sm: "800px" },
            textAlign: "center",
            typography: "h2",
            fontWeight: "600",
            fontFamily: "sans-serif",
          }}
        >
          What additional possibilities does the Kiosk mode offer?
        </Typography>

        <Stack direction="row" spacing={2} sx={{ marginTop: 4 }}>
          <Box sx={{ width: "40%", position: "relative" }}>
            <Slide
              direction="up"
              in={!slidingUp}
              mountOnEnter
              unmountOnExit
              timeout={300}
            >
              <img
                alt="Accordion related"
                src={currentImage}
                style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "14px",
                  objectFit: "cover",
                }}
              />
            </Slide>
            <Box
              sx={{
                position: "absolute",
                right: "-2%",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "8px",
                padding: "15px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                width: "fit-content",
                zIndex: 10,
              }}
            >
              <img
                alt="Tick icon"
                src="https://static.hexnode.com/v2/assets/img/ads-pages/ads-tick-green.svg"
                style={{ width: "23px", height: "23px", marginRight: "10px" }}
              />
              <Typography variant="body1">
                {expanded !== false
                  ? imageDetails[expanded]?.overlayDetails
                  : ""}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "60%", marginTop: 2 }}>
            {imageDetails.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                elevation={0}
                sx={{
                  boxShadow: "none",
                  "&:before": {
                    display: "none",
                  },
                  marginBottom: 1,
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: "#FFFFFF",
                    "&.Mui-expanded": {
                      backgroundColor: "#FFFFFF",
                    },
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#050607",
                      fontWeight: "bold",
                      fontSize: { xs: "24px", lg: "26px" },
                      lineHeight: { xs: "36px", lg: "40px" },
                      textAlign: "left",
                      margin: "0",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    color: "#333333",
                    fontWeight: "normal",
                    lineHeight: "28px",
                    height: expanded === `panel${index}` ? "auto" : "120px",
                    overflow: "hidden",
                    transition: "height 0.3s ease-in-out",
                  }}
                >
                  <Stack direction={"column"}>
                    <Typography
                      sx={{
                        fontFamily: "sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      {item.content}
                    </Typography>
                    <Stack direction={"row"} sx={{ mt: 1 }}>
                      <Typography
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        sx={{
                          fontSize: "17px",
                          fontWeight: 600,
                          color: "#dd0735",
                          whiteSpace: "nowrap",
                          display: "inline-flex",
                          alignItems: "center",
                          textDecoration: "none",
                        }}
                      >
                        TRY FOR FREE
                      </Typography>
                      <ChevronRightIcon
                        sx={{
                          color: "#dd0735",
                          position: "relative",
                          right: isHovered ? "-3px" : "0",
                          transition: "right 0.3s ease-in-out",
                        }}
                      />
                    </Stack>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
export default Possibilities;
