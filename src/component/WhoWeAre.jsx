import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const WhoWeAre = () => {
  const content = `We are your digital lending partner, ensuring you stay financially empowered and secure the moment funds hit your account. Say goodbye to waiting for payday—get instant access to cash when you need it most. Your financial freedom starts now, and we’re here to make it happen!`;

  const words = content.split(" "); // Split the content into words
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Intersection observer to trigger animation when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when visible
          } else {
            setIsVisible(false); // Reset animation when not visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        // backgroundColor: "#f9f9f9",
        paddingX: { xs: "20px", sm: "30px" },
        overflow: "hidden",
      }}
    >
      {/* Marquee: Scrolling text */}
      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          // backgroundColor: '#f9f9f9',
          py: 1,
          zIndex: 2, // Ensure it's above other content
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            animation: "scroll-text 20s linear infinite",
            fontSize: { xs: "14px", sm: "25px" },
            color: "#240844 ",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          * Get Approved Instantly * Simple Requirements * Trusted & Secure *
          Always Here to Help
        </Typography>

        {/* Keyframe animation for scrolling text */}
        <style>
          {`
            @keyframes scroll-text {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(-100%);
              }
            }
          `}
        </style>
      </Box>

      {/* Left Section: Heading */}
      <Box
        sx={{
          textAlign: "center", // Center align the entire content
          mt: { xs: 2, sm: 2 }, // Top margin for spacing
          // backgroundColor: "#f9f9f9",
          padding: { xs: "20px", sm: "30px" },
          overflow: "hidden",
        }}
      >
        {/* Centered Heading */}
        <Box
          sx={{
            textAlign: "center",
            mb: 3, // Add spacing below the heading
          }}
        >
          <Typography
            variant="h4"
            color="#240844"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "2.5rem" }, // Responsive font size
              fontWeight: "bold",
            }}
          >
            Get to Know Us?
          </Typography>
        </Box>

        {/* Description Text Below the Heading */}
        <Box
          sx={{
            textAlign: "center", // Center align the description text
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              textAlign: "center",
              paddingX: { xs: 0, md: 10 },
            }}
          >
            {words.map((word, index) => (
              <Typography
                key={index}
                fontSize={{ xs: "14px", sm: "20px" }} // Responsive font size
                lineHeight={{ xs: "25px", lg: "40px", md: "30px" }}
                fontWeight={540}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.3s ease ${
                    index * 0.01
                  }s, transform 0.3s ease ${index * 0.01}s`,
                  display: "inline-block",
                  margin: "0 5px",
                }}
              >
                {word}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Read More Button Below the Description */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center align the button
            mt: 3, // Add margin above the button
          }}
        >
          <Button
            variant="contained"
            href="/about-us" // Link to the About Us page
            sx={{
              backgroundColor: "#2da67f",
              color: "white",
              borderRadius: "80px",
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "16px" },
              padding: { xs: "8px 16px", sm: "6px 30px" },
              "&:hover": {
                backgroundColor: "white",
                color: "#240844",
              },
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
