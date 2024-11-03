import { Box, Typography, Stack, Tabs, Tab } from "@mui/material";
import React from "react";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import singleAppKiosk from "../assets/single-app-kios-image.webp";
import multiAppKiosk from "../assets/multi-app-kiosk-image.webp";
import webBasedKiosk from "../assets/web-based-kiosk-image.webp";
import digitalSignages from "../assets/digital-signage-kiosk-image.webp";
import asamKiosk from "../assets/asam-kiosk-image.webp";
import { Slide } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Mode() {
  const [value, setValue] = useState(0);

  const tabLabels = [
    "Single App Kiosk",
    "Multi-App Kiosk",
    "Web-based Kiosk",
    "Digital Signages",
    "ASAM Kiosk",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabContent = ({ title, description, imgSrc, inProp }) => (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Slide
        direction="left"
        in={inProp}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 400, exit: 300 }}
        easing={{ enter: "ease-out", exit: "ease-in" }}
      >
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <Box sx={{ width: "60%" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#020A19"
              sx={{
                fontSize: { xs: "20px", sm: "28px" },
                lineHeight: { xs: "26px", sm: "40px" },
                maxWidth: "670px",
                fontSmooth: "antialiased",
                paddingBottom: { xs: "15px", lg: "40px" },
              }}
            >
              {title}
            </Typography>
            {description.map((point, idx) => (
              <Stack
                key={idx}
                direction="row"
                spacing={2}
                sx={{
                  marginBottom: { xs: "10px", lg: "25px" },
                  alignItems: "flex-start",
                }}
              >
                <DoneIcon
                  sx={{
                    fontSize: "17px",
                    color: "#60c458",
                    marginTop: "4px",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    lineHeight: { xs: "24px", sm: "28px" },
                    fontWeight: "normal",
                    color: "#333333",
                    paddingLeft: { xs: "5px", sm: "0px" },
                  }}
                >
                  {point}
                </Typography>
              </Stack>
            ))}
          </Box>

          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={imgSrc}
              alt={title}
              style={{ width: "100%", borderRadius: "8px" }}
              loading="lazy"
            />
          </Box>
        </Stack>
      </Slide>
    </Box>
  );

  const tabContentData = [
    {
      title: "Powerful Single-App Kiosk solutions for enhanced control",
      description: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
      imgSrc: singleAppKiosk,
    },
    {
      title: "Multi-App Kiosk",
      description: [
        "Details specific to the Multi-App Kiosk tab.",
        "Add specific features and capabilities for Multi-App Kiosk.",
        "Customization options for user experience.",
        "Device management capabilities.",
      ],
      imgSrc: multiAppKiosk,
    },
    {
      title: "Web-based Kiosk",
      description: [
        "Web-based features and functionalities.",
        "Ease of access for users.",
        "Real-time updates and management.",
        "User-friendly interface.",
      ],
      imgSrc: webBasedKiosk,
    },
    {
      title: "Digital Signages",
      description: [
        "Manage and schedule content effortlessly.",
        "Customize templates for different displays.",
        "Remote updates and controls.",
        "Analytics and reporting capabilities.",
      ],
      imgSrc: digitalSignages,
    },
    {
      title: "ASAM Kiosk",
      description: [
        "Advanced Kiosk features for ASAM.",
        "Specific configurations for ASAM use.",
        "Integration with other systems.",
        "Security features for kiosk operations.",
      ],
      imgSrc: asamKiosk,
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#FFFFFF",
          height: "auto",
          marginTop: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "88%",
            bgcolor: "#FFFFFF",
            height: "auto",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "900px",
                color: "#020a19",
                fontSize: { xs: "32px", sm: "40px" },
                lineHeight: { xs: "40px", sm: "1.3" },
                fontWeight: 600,
              }}
            >
              Specific kiosk modes for unique use cases
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderRadius: "4px 4px 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "7vh 0 0 0",
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "4px 4px 0 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "7vh 0 0 0",
            width: "88%",
          }}
        >
          <Stack
            direction={"column"}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "#f7f7f7",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  sx={{
                    width: "100%",
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                >
                  {tabLabels.map((label, index) => (
                    <Tab
                      key={index}
                      label={label}
                      sx={{
                        color:
                          value === index
                            ? "white !important"
                            : "rgba(2, 10, 25, 0.5)",
                        height: "80px",
                        width: "20%",
                        fontSize: "17px",
                        fontWeight: "500",
                        fontFamily: "Segoe UI",
                        transition:
                          "color 400ms cubic-bezier(0.25, 0.1, 0.25, 1)",
                        position: "relative",
                        zIndex: 1,
                      }}
                    />
                  ))}
                </Tabs>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: `${(value / tabLabels.length) * 100}%`,
                    width: `${100 / tabLabels.length}%`,
                    height: "100%",
                    bgcolor: "black",
                    borderRadius: "4px",
                    transition: "left 400ms cubic-bezier(0.25, 0.1, 0.25, 1)",
                    zIndex: 0,
                  }}
                />
              </Box>
            </>
            <>
              {tabLabels.map((label, index) => (
                <TabPanel key={index} value={value} index={index}>
                  <TabContent
                    title={tabContentData[index].title}
                    description={tabContentData[index].description}
                    imgSrc={tabContentData[index].imgSrc}
                    inProp={value === index}
                  />
                </TabPanel>
              ))}
            </>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Mode;
