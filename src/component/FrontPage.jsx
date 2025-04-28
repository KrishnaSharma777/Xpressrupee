import React from "react";
import { Box, Typography, Button, keyframes } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import bannerImage from "../assets/image/GridArt_20250317_203332523.jpg"; // Adjust the path as needed
import image1 from "../assets/image/Group 79 (1).png"; // Replace with actual image path

// Keyframes for animations
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const FrontPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: { xs: 15, md: 15 },
        // backgroundColor: "#f9f9f9",
        paddingX: { xs: 1, md: 3 },
        paddingTop: 1,
      }}
    >
      <Box
        sx={{
          overflowX: "hidden",
          width: "100%",
          height: "auto",
          background:
            "linear-gradient(180deg, #2da67f 0%, #a7e6c6 50%, #ffffff 100%)",
          display: "flex",
          borderRadius: "20px",
          flexDirection: "column",
          alignItems: "center",
          padding: theme.spacing(2),
          color: "white",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            marginBottom: theme.spacing(4),
            animation: `${slideInFromLeft} 1s ease-out`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              paddingTop: { xs: 3, md: 13 },
              fontWeight: "500",
              color: "white",
              marginBottom: theme.spacing(2),
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "2.5rem",
              },
            }}
          >
            Apply in a Tap, Get Cash Fast!{" "}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: theme.spacing(3),
              mt: theme.spacing(7),
            }}
          >
            <Button
              variant="contained"
              href="/apply-now"
              sx={{
                borderRadius: "80px",
                backgroundColor: "#240844",
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px" },
                padding: { xs: "8px 16px", sm: "6px 30px" },
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Apply here
            </Button>

            <Button
              variant="contained"
              href="/contact-us"
              sx={{
                borderRadius: "80px",
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px" },
                padding: { xs: "8px 16px", sm: "6px 30px" },
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#eee",
                },
              }}
            >
              Contact us
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex", // Flexbox to align content
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            width: "auto", // Allow width to adjust to the image size
            height: "auto", // Allow height to adjust to the image size
          }}
        >
          <Box
            component="img"
            src={image1}
            alt="Customer 1"
            sx={{
              width: "50%", // Adjust width to 80% of the container or specify a fixed width
              height: "auto", // Adjust height automatically to maintain aspect ratio
              objectFit: "contain", // Ensure the image fits inside the box without cropping
            }}
          />
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            color: "black",
            fontWeight: "bold",
            mt: theme.spacing(1),
          }}
        >
          5K+ Customers
        </Typography>

        <Box
          sx={{
            paddingLeft: { xs: 0, md: "80px" },
            paddingRight: { xs: 0, md: "80px" },
            width: "100%",
            textAlign: "center",
            // mx: "90px",
            // backgroundColor: "rgba(255, 255, 255, 0)",
            // borderRadius: "80px",
            // overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={bannerImage}
            alt="Banner"
            sx={{
              marginTop: "50px",
              width: "100%",
              maxHeight: "450px",
              objectFit: "cover",
              borderRadius: 5,
              animation: `${slideInFromLeft} 1.5s ease-out`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FrontPage;
