import React from "react";
import { Typography, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import contentImage from "../assets/image/Frame 539.png"; // Image for larger screens
import contentImageSmall from "../assets/image/Frame 537 (2).png"; // Image for small screens (add this image)

const WhyChooseUs = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Check if screen width is small
  const heading = "Our Product Features:"; // Define the heading

  return (
    <Box
      sx={{
        // backgroundColor: "#f9f9f9",
        padding: { xs: "10px", md: "30px" },
        paddingX: { xs: "10px", md: "100px" },
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          mt: { xs: 0, md: 0 },
          fontWeight: 700, // Bold text
          fontSize: { xs: "40px", md: "60px" }, // Responsive font size
          color: "#D9D9D9", // Text color
          marginBottom: { xs: 1, md: 5 }, // Responsive margin
          textAlign: "center", // Center the text horizontally
        }}
      >
        {/* {heading} */}
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src={isSmallScreen ? contentImageSmall : contentImage} // Select image based on screen size
        alt={heading}
        sx={{
          maxWidth: "100%",
          height: "auto",
          marginBottom: 6, // Space below the image
        }}
      />
    </Box>
  );
};

export default WhyChooseUs;
