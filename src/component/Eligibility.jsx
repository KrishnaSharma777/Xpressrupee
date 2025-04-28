import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// Import images
import eligibilityImage1 from "../assets/image/Credit-Score (1).png"; // Replace with the actual path to your image
import eligibilityImage2 from "../assets/image/Secure-Loan (1).png"; // Replace with the actual path to your image
import eligibilityImage3 from "../assets/image/personal-loan.png"; // Replace with the actual path to your image

const Eligibility = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        color="#240844"
        mb={6}
        fontWeight={"bold"}
        sx={{ fontSize: "2.5rem" }}
      >
        Who Can Apply for a Loan?{" "}
      </Typography>

      {/* Eligibility Boxes */}
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ paddingY: 2, paddingX: { xs: 2, md: 12 }, display: "flex" }}
      >
        {/* First Box */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              marginLeft: { xs: 2, md: 0 },
              backgroundColor: "#EFD3D3",
              padding: 4, // Increased padding for a larger look
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              height: "400px", // Increased height
              width: "90%", // Increased width
              margin: "0 5px", // Reduced margin between boxes
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={eligibilityImage1}
              alt="Eligibility Criteria 1"
              style={{
                width: "100px",
                height: "80px",
                marginBottom: "30px",
                objectFit: "contain", // Prevents stretching and keeps the aspect ratio
              }}
            />
            <Typography variant="h5">Bad Credit Score</Typography>
            <Typography variant="h6" color="textSecondary">
              People struggling with poor credit history.{" "}
            </Typography>
          </Box>
        </Grid>

        {/* Second Box */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              marginLeft: { xs: 2, md: 0 },

              backgroundColor: "#D9D9D9",
              padding: 4, // Increased padding
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              height: "400px", // Increased height
              width: "90%", // Increased width
              margin: "0 5px", // Reduced margin
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={eligibilityImage2}
              alt="Eligibility Criteria 2"
              style={{
                width: "100px",
                height: "80px",
                marginBottom: "30px",
                objectFit: "contain", // Prevents stretching and keeps the aspect ratio
              }}
            />
            <Typography variant="h5">Unsecured Loan</Typography>
            <Typography variant="h6" color="textSecondary">
              ndividuals unable to obtain a loan with security.{" "}
            </Typography>
          </Box>
        </Grid>

        {/* Third Box */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              marginLeft: { xs: 2, md: 0 },

              backgroundColor: "#ABC8CB",
              padding: 4, // Increased padding
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              height: "400px", // Increased height
              width: "90%", // Increased width
              margin: "0 5px", // Reduced margin
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={eligibilityImage3}
              alt="Eligibility Criteria 3"
              style={{
                width: "100px",
                height: "80px",
                marginTop: "35px",
                marginBottom: "30px",
                objectFit: "contain", // Prevents stretching and keeps the aspect ratio
              }}
            />
            <Typography variant="h5">Personal Loans</Typography>
            <Typography variant="h6" color="textSecondary">
              Those facing difficulty in securing a personal loan elsewhere{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Eligibility;
