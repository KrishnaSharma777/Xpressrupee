import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@mui/system";

const FAQs = () => {
  // Animation for lines coming in one by one
  const lineAnimation = keyframes`
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    `;

  return (
    <Box
      sx={{
        paddingTop: 3,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 15, md: 15 },

        // backgroundColor: '#f9f9f9',
        width: "100%", // Ensures full-width of the container
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          width: "80%", // Adjust width percentage (or use 'px' for fixed width)
          maxWidth: "1000px", // Adjust max width if you want a limit
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#240844",
            mb: 3,
            fontSize: { xs: "2rem", md: "3rem" },
            padding: "0.5rem",
            borderRadius: "8px",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Paper
          elevation={6}
          sx={{
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        >
          <div className="accordion-wrapper">
            {[
              {
                id: "faq1",
                question: "1) What is Xpressrupee all about?",
                answer: `Xpressrupee is an online platform that offers quick and hassle-free personal loans to salaried individuals. As a part of Xpressrupee(an RBI-registered NBFC), we aim to provide financial solutions to meet your personal needs, whether it’s for emergency situations, home repairs or improvements, or even celebrations of your loved ones.`,
              },
              {
                id: "faq2",
                question:
                  "2) Who is eligible to apply for a personal loan from Xpressrupee?",
                answer: [
                  "To be eligible for a personal loan, you must be:",
                  "• A salaried individual",
                  "• Aged between 21 and 60 years",
                  "• Employed with a recognized organization for at least 6 months",
                  "• Earning a minimum monthly salary as per our criteria",
                ],
              },

              {
                id: "faq3",
                question:
                  "3) What documents are required to apply for a personal loan?",
                answer: [
                  "You will need to submit the following documents:",
                  "• Proof of identity (Aadhaar, PAN, passport, etc.)",
                  "• Proof of address (utility bills)",
                  "• Salary slips for the last three months",
                  "• Bank statements for the last six months",
                ],
              },

              {
                id: "faq4",
                question: "4) How much can I borrow from Xpressrupee?",
                answer: `Xpressrupee offers personal loans ranging from ₹5,000 to ₹1,00,000 depending on your salary, repayment capacity, and credit score.`,
              },
              {
                id: "faq5",
                question:
                  "5) What is the interest rate on personal loans at Xpressrupee?",
                answer: `The interest rate varies based on your credit profile, loan amount, and tenure. Though our rates are competitive and are specifically designed to be affordable for salaried individuals, one may contact us to get a personalized quoted price.`,
              },
              {
                id: "faq6",
                question:
                  "6) How long does it take to get the loan approved and disbursed?",
                answer: `Once you submit your application and documents, our team processes your request promptly. Loan approval usually takes a couple of minutes, and funds are disbursed within 30 minutes once they are approved.`,
              },
              {
                id: "faq7",
                question: "7) Can I repay my loan early?",
                answer: `Yes, Xpressrupee allows early repayment of loans. Please review your loan agreement or contact us for more details.`,
              },
              {
                id: "faq8",
                question: "8) How does Xpressrupee assess my creditworthiness?",
                answer: `We assess your loan eligibility based on certain factors such as your monthly income, credit score, job stability, and repayment history. A good credit score increases your chances of getting approved with a favorable interest rate.`,
              },
              {
                id: "faq9",
                question:
                  "9) Can I apply for a loan if I have a low credit score?",
                answer: `Yes, you can still apply for a loan with a low credit score. However, the approval decision and interest rate may vary based on your overall financial profile and ability to repay the loan.`,
              },
              {
                id: "faq10",
                question: "10) How do I repay my loan to Xpressrupee?",
                answer: `You can repay your loan through various payment options such as NACH (National Automated Clearing House), direct debit, or online payments via our website.`,
              },
              {
                id: "faq11",
                question:
                  "11) Is my personal and financial information safe with Xpressrupee?",
                answer: `Absolutely! Xpressrupee uses advanced security measures, including encryption and secure servers, to ensure your personal and financial data is protected. We adhere to all data privacy regulations and take confidentiality concerns seriously.`,
              },
              {
                id: "faq12",
                question: "12) Can I check the status of my loan application?",
                answer: `Yes, you can easily track the status of your loan application through our website by logging into your account. You will also receive updates via email and SMS at each stage of the process.`,
              },
              {
                id: "faq13",
                question:
                  "13) How can I contact customer support for further assistance?",
                answer: `You can reach our customer support through our website’s contact form, by email at support@Xpressrupee.com, or by calling our helpline numbers during business hours. We’re here to assist you with any questions or concerns.`,
              },
            ].map((faq, index) => (
              <Accordion
                key={faq.id}
                sx={{
                  fontFamily: "cursive",
                  marginBottom: "1rem",
                  backgroundColor: "transparent",
                  animation: `${lineAnimation} 0.5s ease-in-out ${
                    index * 0.2
                  }s forwards`,
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "black", // Default color is black
                        transition: "color 0.3s ease", // Smooth color transition
                        ".Mui-expanded &": {
                          color: "white", // Change to white when expanded
                        },
                        "&:hover": {
                          color: "white", // White icon on hover
                        },
                      }}
                    />
                  }
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-header`}
                  sx={{
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#240844", // Black background on hover
                      color: "white", // White text on hover
                    },
                    "&.Mui-expanded": {
                      backgroundColor: "#240844",
                      color: "white",
                    },
                  }}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ animation: `${lineAnimation} 0.5s ease-in-out` }}
                >
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((line, index) => (
                      <Typography key={index} sx={{ marginBottom: "0.5rem" }}>
                        {line}
                      </Typography>
                    ))
                  ) : (
                    <Typography>{faq.answer}</Typography>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Paper>
      </Box>
    </Box>
  );
};

export default FAQs;
