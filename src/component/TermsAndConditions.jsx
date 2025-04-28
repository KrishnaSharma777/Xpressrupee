import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Slide,
  Fade,
} from "@mui/material";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Terms & Conditions",
      content: [
        "Welcome to Xpressrupee! By accessing and using this website or applying for any of our loan products, you agree to comply with the terms and conditions outlined here. These Terms and Conditions constitute a legal agreement between you and Xpressrupee (an NBFC registered with RBI for lending purposes), which governs your use of our website and services. Please read these terms carefully. If you do not agree with these terms, you should refrain from using this website or applying for loans through Xpressrupee.",
      ],
    },
    {
      title: "1. Introduction",
      content: [
        "Xpressrupee provides personal loans to salaried individuals under the regulatory guidelines of Xpressrupee, an NBFC registered with the RBI. Our primary goal is to provide hassle-free, easy, and transparent financial solutions to help individuals manage their personal finances.",
      ],
    },
    {
      title: "2. Eligibility Criteria",
      content: [
        "To apply for a personal loan with Xpressrupee, you must meet the following eligibility requirements:",
        "\u2022 Be at least 21 years old and not older than 60 at the time of loan application.",
        "\u2022 Be a salaried individual with a stable source of income from a recognized organization.",
        "\u2022 Meet the minimum monthly income criteria defined byXpressrupee.",
        "\u2022 Be a resident of India with a satisfactory credit score and financial history.",
      ],
    },
    {
      title: "3. Loan Application Process",
      content: [
        "The loan application process at Xpressrupee includes registration, filling out the application form, document submission, and credit assessment. Approval of loans is at the sole discretion of Xpressrupee.",
      ],
    },
    {
      title: "4. Loan Terms",
      content: [
        "Loan amounts, interest rates, and repayment schedules are determined based on the applicant’s profile. The interest rate will remain fixed for the entire loan tenure.",
      ],
    },
    {
      title: "5. Fees and Charges",
      content: [
        "Applicable fees may include a processing fee, late payment charges and other fees as outlined in the loan agreement.",
      ],
    },
    {
      title: "6. Loan Disbursement",
      content: [
        "Upon approval of your loan application and completion of required formalities, the loan amount will be credited directly to your bank account. The timing at which the amount will be disbursed may vary depending on internal processes, but Xpressrupee strives to ensure quick and efficient transfer of funds, just with a fingertap.",
      ],
    },
    {
      title: "7. Loan Repayment",
      content: [
        "Repayment must be made as per the terms set forth in your loan agreement. Loan repayments will be deducted automatically via NACH mandate or through other digital methods such as UPI, Payment Gateway, etc. Early repayment is allowed and no prepayment penalties.",
      ],
    },
    {
      title: "8. Default and Consequences",
      content: [
        "Failure to repay the loan on time may result in additional late payment fees, negative reporting to credit bureaus, and legal action to recover outstanding amounts.",
      ],
    },
    {
      title: "9. Cancellation of Loan",
      content: [
        "You may cancel your loan application at any stage before disbursement. After disbursement, cancellation is not possible. However, prepayment is allowed subject to the terms outlined in the agreement.",
      ],
    },
    {
      title: "10. Data Privacy and Security",
      content: [
        "We take your privacy seriously. All personal and financial information will be securely handled in compliance with data protection laws. We collect and use your data for loan processing and communication only.",
      ],
    },
    {
      title: "11. User Responsibilities",
      content: [
        "You agree to provide accurate information during registration and the loan application process. Misrepresentation may result in denial of service or legal action.",
      ],
    },
    {
      title: "12. Amendments to Terms",
      content: [
        "We reserve the right to modify or update these terms and conditions at any point of time. The updated terms will be posted on the website, and it is your responsibility to stay informed at all given times.",
      ],
    },
    {
      title: "13. Dispute Resolution",
      content: [
        "In case of any disputes, we will attempt to resolve them amicably. If not, the dispute shall be resolved under the jurisdiction of the courts in Delhi, India.",
      ],
    },
    {
      title: "14. Limitation of Liability",
      content: [
        "Xpressrupee shall not be liable for any loss, damage, or inconvenience arising out of the use of this website or services, except as expressly stated in the loan agreement.",
      ],
    },
    {
      title: "15. Governing Law",
      content: [
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of India.",
      ],
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const policyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (policyRef.current) observer.observe(policyRef.current);

    return () => {
      if (policyRef.current) observer.unobserve(policyRef.current);
    };
  }, []);

  return (
    <div ref={policyRef}>
      <Box
        sx={{
          mt: { xs: 15, md: 15 },

          minHeight: "100vh",
          padding: { xs: 2, md: 3 },
          // backgroundColor: '#f9f9f9',
        }}
      >
        {/* Image Section */}
        {/* <Box
                    sx={{
                    backgroundColor: '#f9f9f9',

                    position: 'relative',
                    width: '100%',
                    height: { xs: '20vh', md: '60vh' },
                    overflow: 'hidden',
                    borderRadius: '50px',
                    mb: 5,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Slide direction="left" in={isVisible} timeout={1000}>
                        <img 
                            src={privacyImage} 
                            alt="Privacy Policy" 
                            style={{
                                width: '100%', 
                                height: 'auto', 
                                objectFit: 'cover',
                                borderRadius: '50px'
                            }} 
                        />
                    </Slide>
                </Box> */}

        <Container maxWidth="lg">
          {/* Prominent Heading
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        
                        <Fade in={isVisible} timeout={1000}>
                            <Typography 
                                variant="h3" 
                                gutterBottom 
                                sx={{ 
                                    color: 'black', 
                                    fontWeight: 'bold', 
                                    fontSize:{xs:'2rem',md:'3rem'}, 
                                    letterSpacing: '0.05em',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': { transform: 'scale(1.05)' }
                                }}
                            >
                                Terms And Conditions
                            </Typography>
                        </Fade>
                    </Box> */}

          {/* Policy Content */}
          <Paper
            elevation={3}
            sx={{
              borderRadius: 5,
              overflow: "hidden",
              backgroundColor: "transparent",
              paddingX: { xs: 2, md: 3 },
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#240844",
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "0.05em",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              Terms And Conditions
            </Typography>

            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <Box
                  sx={{
                    paddingX: 5,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Fade in={isVisible} timeout={1000 + sectionIndex * 500}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "black", fontWeight: "bold" }}
                    >
                      {section.title}
                    </Typography>
                  </Fade>
                  {section.content.map((line, lineIndex) => (
                    <Fade
                      in={isVisible}
                      timeout={1200 + sectionIndex * 500 + lineIndex * 500}
                      key={lineIndex}
                    >
                      <Typography>{line}</Typography>
                    </Fade>
                  ))}
                </Box>
                <Divider sx={{ my: 2 }} />
              </div>
            ))}
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default TermsAndConditions;
