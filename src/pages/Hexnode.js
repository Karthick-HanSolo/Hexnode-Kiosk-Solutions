import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  Paper,
  Container,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import justinPfp from "../assets/justin-modrak.webp";
import chrisPfp from "../assets/chris-robinson.webp";
import daliborPfp from "../assets/dalibor-kruljac.webp";
import hiltonPfp from "../assets/hilton.svg";
import saicPfp from "../assets/saic.svg";
import lowesPfp from "../assets/lowes.svg";
import polarisPfp from "../assets/polaris.svg";
import gorillasPfp from "../assets/gorillas.svg";
import woltPfp from "../assets/wolt.svg";
import marriottPfp from "../assets/marriott-intl.svg";
import costcoPfp from "../assets/costco.svg";
import group1Pfp from "../assets/group1-automotive.webp";
import merckPfp from "../assets/merck.svg";
import "../components/style.css";

function Hexnode() {
  const reviews = [
    {
      id: 1,
      name: "Justin Modrak",
      position: "Technology Coordinator",
      company: "East Troy Community School District",
      text: '"Hexnode is of great value. Works great with Android and iOS!"',
      image: justinPfp,
    },
    {
      id: 2,
      name: "Dalibor Kruljac",
      position: "KAMELEYA LTD",
      text: '"Most complete MDM solution I found, and I tested many of them, including major names."',
      image: daliborPfp,
    },
    {
      id: 3,
      name: "Chris Robinson",
      position: "Executive Account Manager, NCS",
      text: '"It seemed to be in-line with everything we were looking at."',
      image: chrisPfp,
    },
  ];

  const brands = [
    {
      name: "Costco",
      src: costcoPfp,
    },
    {
      name: "SAIC",
      src: saicPfp,
    },
    {
      name: "Hilton",
      src: hiltonPfp,
    },
    {
      name: "Group 1 Automotive",
      src: group1Pfp,
    },
    {
      name: "Lowes",
      src: lowesPfp,
    },
    {
      name: "Polaris",
      src: polarisPfp,
    },
    {
      name: "Gorillas",
      src: gorillasPfp,
    },
    {
      name: "Wolt",
      src: woltPfp,
    },
    {
      name: "Marriot",
      src: marriottPfp,
    },
    {
      name: "Merck",
      src: merckPfp,
    },
  ];

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 900,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "rgb(247, 247, 247)",
        paddingTop: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "88%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            lineHeight: { xs: "40px", md: 1.3 },
            textAlign: "center",
            fontWeight: "bold",
            color: "#020a19",
            paddingBottom: { xs: "0", md: "20px" },
            fontSmooth: "antialiased",
          }}
        >
          Why should you choose Hexnode?
        </Typography>
        <Box sx={{ maxWidth: 960, mx: "auto" }}>
          <Slider {...settings}>
            {reviews.map((review) => (
              <Paper
                key={review.id}
                elevation={1}
                sx={{
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Stack direction={"row"}>
                  <>
                    <Box
                      component="img"
                      src={review.image}
                      alt={`${review.name} image`}
                    />
                  </>
                  <>
                    <Stack
                      direction={"column"}
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 3vw 0 3vw",
                      }}
                    >
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{
                          fontSize: { xs: "16px", sm: "20px", md: "24px" },
                          lineHeight: { xs: "24px", sm: "32px" },
                          color: "#020a19",
                          fontWeight: "bold",
                          textAlign: { xs: "center", md: "left" },
                          mb: 1,
                          WebkitFontSmoothing: "antialiased",
                        }}
                      >
                        {review.text}
                      </Typography>
                      <Divider
                        sx={{
                          width: "75%",
                          color: "#D3D3D3",
                          marginTop: "1vh",
                        }}
                      />
                      <Box
                        sx={{
                          paddingTop: "6vh",
                        }}
                      >
                        <Typography variant="subtitle1" align="center">
                          {review.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          align="center"
                          color="textSecondary"
                        >
                          {review.position}
                        </Typography>
                      </Box>
                    </Stack>
                  </>
                </Stack>
              </Paper>
            ))}
          </Slider>
        </Box>
        <Container maxWidth="lg" sx={{ margin: "15vh 0 20vh 0" }}>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              width: { xs: 70, sm: 100 },
              height: { xs: 40, sm: 80 },
              zIndex: 1,
              background: "linear-gradient(to right, #F7F7F7, transparent)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              right: 0,
              width: { xs: 70, sm: 100 },
              height: { xs: 40, sm: 80 },
              zIndex: 1,
              background: "linear-gradient(to left, #F7F7F7, transparent)",
            }}
          />
          <Slider className="custom-slider" {...settings2}>
            {brands.map((brand, index) => (
              <Box key={index} sx={{ textAlign: "center", px: 1 }}>
                <img
                  src={brand.src}
                  alt={brand.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "95px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    </Box>
  );
}

export default Hexnode;
