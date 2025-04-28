import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const Nowaiting = () => {
  const content = `At Xpressrupee, we are committed to ensuring our customers feel financially secure, confident, and stress-free. Our financial assistance is 100% safe, trustworthy, and fully transparent. Whether you need urgent funds for unexpected expenses, we’ve got you covered. Say goodbye to financial worries—your reliable personal finance partner is here to help!`;

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
        paddingY: 4,
        position: "relative",
        // backgroundColor: "#f9f9f9",
        paddingX: { xs: "20px", sm: "40px" },
        overflow: "hidden",
      }}
    >
      {/* Left Section: Heading */}
      <Box
        sx={{
          textAlign: "left",
          mt: { xs: 2, sm: 3 }, // Reduced top margin for small screens
        }}
      >
        {/* Right part of the content (Description Text) */}
        <Box
          sx={{
            display: "flex", // Apply flexbox layout
            flexDirection: { xs: "column", sm: "row" }, // Stack items vertically on small screens and horizontally on larger screens
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "#f9f9f9",
            padding: { xs: "20px", sm: "30px" },
            overflow: "hidden",
          }}
        >
          {/* Left Section: Heading */}
          <Box
            sx={{
              background: "#2da67f",

              textAlign: "left",
              flex: 1, // Take up equal space in the flex container
              marginBottom: { xs: 2, sm: 3 }, // Reduced margin bottom on small screens
              border: "2px solid gray",
              borderBottomLeftRadius: 60,
              borderTopRightRadius: 60,
            }}
          >
            <Typography
              variant="h4"
              color="white"
              mb={1}
              sx={{
                mb: { xs: 0, md: 8 },
                marginLeft: { xs: 2, sm: 4 },
                mt: { xs: 1, sm: 4 },
                // fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Adjust font size based on screen size
                lineHeight: { xs: "3rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Fast Cash, No Delays – Get Funds Instantly!{" "}
            </Typography>
          </Box>

          {/* Right Section: Description Text */}
          <Box
            sx={{
              paddingX: 3,
              ml: { xs: 0, sm: 5 }, // Adjust left margin for smaller screens
              flex: 2, // Take up more space than the heading
              textAlign: "left",
            }}
          >
            <Box sx={{ display: "inline-block", textAlign: "left", mb: 3 }}>
              {words.map((word, index) => (
                <Typography
                  key={index}
                  fontSize={{ xs: "14px", sm: "18px", md: "20px" }} // Adjust font size for small to large screens
                  lineHeight={{ xs: "25px", lg: "40px", md: "30px" }}
                  fontWeight={50}
                  sx={{
                    fontWeight: 540,
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
        </Box>
      </Box>
    </Box>
  );
};

export default Nowaiting;
