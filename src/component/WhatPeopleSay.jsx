import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";

// Import images
import leftImage from "../assets/image/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg"; // Replace with your image path
import centerImage from "../assets/image/confident-handsome-man-extending-his-hand-handshake-smiling-determined.jpg"; // Replace with your image path
import rightImage from "../assets/image/young-bearded-man-with-striped-shirt.jpg"; // Replace with your image path

const WhatPeopleSay = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  return (
    <Box sx={{ paddingX: { xs: 2, sm: 12 }, textAlign: "center" }}>
      {/* Heading Section */}
      <Typography
        variant="h4"
        color="#240844"
        mb={2}
        sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
      >
        What Our Clients Say?{" "}
      </Typography>
      <Typography
        variant="h5"
        color="textSecondary"
        mb={4}
        sx={{ paddingX: { xs: 2, sm: 12 } }}
      >
        Real Stories. Real Trust. Real Transformation. Xpressrupee empowers
        financial journeys with real results.
      </Typography>

      {isSmallScreen ? (
        // Layout for Small Screen
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Left Side for Small Screen */}
          <Grid item xs={12}>
            <Box sx={{ p: 2 }}>
              <img
                src={leftImage}
                alt="Left Content"
                style={{
                  width: "100%",
                  height: "200px", // Fixed height for image
                  borderRadius: 10,
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  background: "#EFD3D3",
                  padding: 4,
                  borderRadius: 4,
                  marginTop: 2,
                  height: "auto",
                }}
              >
                <Typography variant="h6" color="black" mb={1}>
                  Ruhi
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  I had a great experience with the loan disbursement process.
                  The team was very professional and explained everything in
                  detail. My loan was approved quickly, and the disbursement
                  happened within 10 mins, as promised.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Center for Small Screen */}
          <Grid item xs={12}>
            <Box sx={{ p: 2 }}>
              <img
                src={centerImage}
                alt="Center Content"
                style={{
                  width: "100%",
                  height: "200px", // Fixed height for image
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  background: "#EFD3D3",
                  padding: 4,
                  borderRadius: 4,
                  marginTop: 2,
                  height: "auto",
                }}
              >
                <Typography variant="h6" color="black" mb={1}>
                  Vivek
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  From applying for the loan to getting the funds in my account,
                  I had an amazing experience! The entire process was very
                  smooth. The staff was polite and guided me at each step of the
                  procedure.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side for Small Screen */}
          <Grid item xs={12}>
            <Box sx={{ p: 2 }}>
              <img
                src={rightImage}
                alt="Right Content"
                style={{
                  width: "100%",
                  height: "280px", // Fixed height for image
                  borderRadius: 10,
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  background: "#EFD3D3",
                  padding: 4,
                  borderRadius: 4,
                  marginTop: 2,
                  height: "auto",
                }}
              >
                <Typography variant="h6" color="black" mb={1}>
                  Virat
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  It’s rare to come across such credible financial providers as
                  the staff I found here. They were really understanding and
                  transferred us the money we required immediately without
                  making us go through any long processes.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        // Layout for Large Screen
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Left Side */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                overflow: "hidden",
                p: 2,
              }}
            >
              {/* Content Box */}
              <Box
                sx={{
                  padding: 4,
                  border: "2px solid transparent",
                  background: "#EFD3D3",
                  marginTop: "-15px",
                  borderRadius: 4,
                }}
              >
                <Typography variant="h5" color="black" mb={1}>
                  Priya Shukla
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  I had a great experience with the loan disbursement process.
                  The team was very professional and explained everything in
                  detail. My loan was approved quickly, and the disbursement
                  happened within 10 mins, as promised.
                </Typography>
              </Box>

              {/* Image Box */}
              <Box sx={{ mt: 2, flex: 1 }}>
                <img
                  src={leftImage}
                  alt="Left Content"
                  style={{
                    width: "100%",
                    height: "69%",
                    borderRadius: 10,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Center */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: "100%",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={centerImage}
                alt="Center Content"
                style={{
                  width: "100%",
                  height: "79%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  mt: -20,
                  borderRadius: 1,
                  background:
                    "linear-gradient(0deg, #000000, #000000), linear-gradient(180deg, rgba(0, 0, 0, 0) 55.31%, #000000 67.03%)",
                  color: "white",
                  p: 2,
                  boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.8)",
                }}
              >
                <Typography variant="h5" color="inherit">
                  Vivek
                </Typography>
                <Typography variant="body2" color="inherit">
                  From applying for the loan to getting the funds in my account,
                  I had an amazing experience! The entire process was very
                  smooth. The staff was polite and guided me at each step of the
                  procedure.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                overflow: "hidden",
                p: 2,
              }}
            >
              {/* Content Box */}
              <Box
                sx={{
                  padding: 4,
                  border: "2px solid transparent",
                  background: "#EFD3D3",
                  marginTop: "-12px",
                  borderRadius: 4,
                  flex: 1,
                }}
              >
                <Typography variant="h5" color="black" mb={1}>
                  Virat
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  It’s rare to come across such credible financial providers as
                  the staff I found here. They were really understanding and
                  transferred us the money we required immediately without
                  making us go through any long processes.
                </Typography>
              </Box>

              {/* Image Box */}
              <Box sx={{ mt: 2, flex: 1, borderRadius: 10 }}>
                <img
                  src={rightImage}
                  alt="Right Content"
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: 10,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default WhatPeopleSay;
