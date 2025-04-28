import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import backgroundImage from '../assets/image/Frame 45.png'; // Replace with your background image path

const SortFAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  return (
    <Box
      className="loan-calculate"
      sx={{
        paddingBottom: 4,
        width: "100%",
        height: "auto",
        paddingX: { xs: 1, md: 8 },
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundColor: '#f9f9f9',
        backdropFilter: "blur(5px)",

        // Responsive background image styling
        "@media (max-width: 1024px)": {
          backgroundSize: "contain", // For tablets and smaller screens, use 'contain' to fit within the container
          backgroundPosition: "top center", // Adjust position for smaller screens
        },
        "@media (max-width: 600px)": {
          backgroundSize: "contain", // For mobile devices, maintain the 'contain' behavior
          backgroundPosition: "top center", // Ensure the background is positioned well on mobile
        },
      }}
      ref={faqRef}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "#240844",
          mb: 4,
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "2.5" }, // Adjust font size based on screen size
          fontFamily: "Arial, sans-serif",
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box
        sx={{
          marginTop: "40px",

          padding: "2rem",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          "@media (max-width: 600px)": {
            margin: "20px",
            padding: "1rem",
          },
        }}
      >
        <Paper
          elevation={0}
          sx={{ overflow: "hidden", backgroundColor: "transparent" }}
        >
          <div>
            {faqItems.map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  backgroundColor: "transparent",
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "black",
                        transition: "color 0.3s ease",
                        fontSize: "2.5rem", // Adjust this value to increase the size
                        ".Mui-expanded &": {
                          color: "white",
                        },
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  aria-controls={`faq${index}-content`}
                  id={`faq${index}-header`}
                  sx={{
                    backgroundColor: "transparent",
                    color: "black",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#240844",
                      color: "white",
                    },
                    "&.Mui-expanded": {
                      backgroundColor: "#240844",
                      color: "white",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", width: "50%" }}>
                    <Typography
                      sx={{
                        fontFamily: "Arial, sans-serif",
                        color: "inherit",
                        fontSize: "1.25rem",
                        margin: "0",
                        textAlign: "left",
                        width: "100%",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </Box>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "black",
                    fontSize: "1rem",
                    padding: "1rem 1.8rem",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      color: "inherit",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Paper>
      </Box>
    </Box>
  );
};

// FAQ items data
const faqItems = [
  {
    question: "What is Xpressrupee?",
    answer:
      "Xpressrupee is a platform or a service provider that provides financial assistance to all the salaried professionals.",
  },
  {
    question: "Who can apply for a personal loan on Xpressrupee?",
    answer:
      "Full-time salaried individuals that fall in the age of 21-60 can apply for a personal loan on Xpressrupee.",
  },
  {
    question: "How much loan amount can I get from Xpressrupee?",
    answer:
      "We offer personal loans ranging from INR 5,000 to INR 1,00,000, depending on the creditworthiness, salary, and other applicable parameters.",
  },
  {
    question: "How do I apply for a loan on Xpressrupee?",
    answer:
      "Applying for a loan is easier than you may think. Fill the form on our website www.Xpressrupee.com along with the set of required documents, and get it instantly approved.",
  },
  {
    question: "What documents do I need to apply for a loan?",
    answer:
      "The documents include your KYC documents, salary slips, bank statements, etc.",
  },
];

export default SortFAQ;
