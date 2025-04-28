import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhyChooseImage from "../assets/image/Who-we-are-section.jpg"; // Replace with the actual path to your image

const WhyChoose = () => {
  const features = [
    {
      title: "Instant Approval",
      description:
        "Our digital process makes sure that you can apply for a loan immediately and efficiently, without much paperwork.",
    },
    {
      title: "Customer-Centric Vision",
      description:
        "We put our focus mainly on giving personal finance solutions that are designed to meet their unique financial needs.",
    },
    {
      title: "Safe & Secure Transactions",
      description:
        "We take care of your data privacy, employing our top-notch security measures to safeguard your personal information.",
    },
    {
      title: "Customer Support Assistance",
      description:
        "Our dedicated customer support team is available to provide assistance with your loan inquiries or provide resolutions to the grievances.",
    },
    {
      title: "Flexible Repay Plans",
      description:
        "We provide adaptable repayment options that align well within your budget, ensuring that you have the best possible experience.",
    },
    {
      title: "Full Transparency",
      description:
        "Our competitive interest rates and crystal-clear transparency make sure that a user knows exactly what they are signing up for.",
    },
  ];

  return (
    <Box
      sx={{
        mt: { xs: 15, md: 15 },

        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingX: { xs: 2, md: 7 },
      }}
    >
      {/* Left Side: Title, Description, and Image */}
      <Box sx={{ maxWidth: { xs: "100%", md: "40%" } }}>
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ color: "#240844" }}>
          Your dreams don’t have to wait anymore! Come to us and apply for
          personal finance now and we will help you resolve your financial
          concerns right away!
        </Typography>
        {/* Image Below the Text */}
        <Box
          component="img"
          src={WhyChooseImage} // Use the imported image here
          alt="Why Choose Us Image"
          sx={{
            width: "100%",
            height: "auto",
            marginTop: 1,
            borderRadius: 8,
            marginBottom: { xs: 3, md: 0 },
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>

      {/* Right Side: Accordions */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "55%" },
        }}
      >
        {features.map((feature, index) => (
          <Accordion
            key={index}
            disableGutters
            sx={{
              background: "transparent",
              boxShadow: 0,
              border: "1px solid black",
              borderRadius: "12px",
              margin: "0",
              "&:hover": {
                backgroundColor: "#240844",
                color: "white",
              },
              "&:hover .MuiAccordionSummary-expandIconWrapper": {
                color: "white",
                backgroundColor: "#240844",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                fontWeight: "600",
                padding: "10px 12px",
              }}
            >
              {feature.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "10px 12px",
                backgroundColor: "inherit",
                color: "inherit",
              }}
            >
              <Typography variant="body2">{feature.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default WhyChoose;
