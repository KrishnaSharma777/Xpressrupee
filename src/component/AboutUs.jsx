import React, { useEffect, useRef, useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  Button,
  AccordionDetails,
} from "@mui/material";
import VisionImage from "../assets/image/Our-Vission.jpg"; // Import your vision image here
import aboutImage from "../assets/image/About-Us--Funds-Wale.jpg"; // Correct image path for about us
import MissionImage from "../assets/image/Our-Mission-Funds-Walle.jpg"; // Import your mission image here
import WhyChoose from "./WhyChoose";
import sampleImage from "../assets/image/Screenshot-2024-12-18-205637.jpg";

const AboutUs = () => {
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
      sx={{
        mt: { xs: 15, md: 15 },

        paddingBottom: 6,
        // background: '#f9f9f9',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        paddingX: { xs: 1, sm: 3 }, // Adjust padding for small screens
        paddingTop: 1,
      }}
    >
      {/* Image Section */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "20vh", md: "65vh" },
          overflow: "hidden",
          borderRadius: "20px",
          mb: 5,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="img"
          src={aboutImage}
          alt="Repay Loan"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Typography
        variant="h4" // Heading style
        sx={{
          marginTop: { xs: 1, md: 6 }, // Margin on top
          fontFamily: "Inter",
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 700, // Font weight
          lineHeight: "73px", // Line height
          letterSpacing: "-0.408px", // Letter spacing
          textAlign: "center",
          color: "#240844",
          marginBottom: { xs: "20px", md: "2px" }, // Responsive margin-bottom
        }}
      >
        About Us
      </Typography>

      <Typography
        variant="body1"
        sx={{
          paddingLeft: { xs: "20px", sm: "30px", md: "90px" }, // Responsive padding
          paddingRight: { xs: "20px", sm: "30px", md: "90px" }, // Responsive padding
          fontFamily: "Inter",
          fontSize: { xs: "16px", sm: "18px", md: "22px" }, // Responsive font size
          fontWeight: 500,
          lineHeight: "40px",
          letterSpacing: "-0.708px", // Letter spacing
          textAlign: "center",
          color: "rgba(0, 0, 0, 0.7) ",

          marginBottom: { xs: "40px", md: "20px" }, // Responsive bottom margin
        }}
      >
        Welcome to Xpressrupee - your one-stop shop in providing personal
        finance loans to all the salaried professionals in the age bracket of
        21-60. As a emergency funding partner under <strong>Xpressrupee</strong>,
        we have an expertise in providing quick, easily accessible, and
        short-term unsecured loans across India. Our main motto is to make our
        customers feel empowered on financial grounds with full privilege to
        have credit, making the loan process easier through innovative use of
        technology, and customized solutions that meet their unique financial
        needs.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginTop: 5,
          paddingLeft: { xs: "20px", sm: "30px", md: "130px" }, // Responsive padding
          paddingRight: { xs: "20px", sm: "30px", md: "130px" }, // Responsive padding
          fontFamily: "Inter",
          fontSize: { xs: "16px", sm: "18px", md: "22px" }, // Responsive font size
          fontWeight: 500,
          lineHeight: "40px",
          letterSpacing: "-0.708px", // Letter spacing
          textAlign: "center",
          color: "rgba(0, 0, 0, 0.7) ",
          marginBottom: { xs: "40px", md: "60px" }, // Responsive bottom margin
        }}
      >
        At Xpressrupee, we understand that life can be really challenging,
        especially when it’s the arrival of emergency situations, wedding
        expenses, home improvisations. We’re here to ensure that financial
        stress doesn't hold you back. With our easy-to-use fully digital
        platform, you can apply for a loan in a couple of minutes, track your
        application in real-time, and get funds instantly into your bank
        account.
      </Typography>

      {/* mission & vission */}
      <Box
        sx={{
          backgroundImage: `url(${MissionImage})`, // Use the image as a background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "30px",
          margin: {
            xs: "20px 10px", // Smaller margins on extra-small screens
            md: "100px 50px", // Larger margins on medium and larger screens
          },
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack content vertically on small screens
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: 3, md: 5 }, // Adjust padding for responsiveness
          gap: 3,
          position: "relative",
        }}
      >
        {/* Content Box */}
        <Box
          sx={{
            background: "white",
            textAlign: "left",
            flex: 1,
            zIndex: 1,
            width: { xs: "90%", md: "40%" }, // Dynamic width for different screens
            padding: { xs: 3, md: 5 }, // Responsive padding
            borderRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: "#240844",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" }, // Center align for smaller screens
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", md: "18px" }, // Adjust font size for responsiveness
              textAlign: { xs: "center", md: "left" }, // Align text for small and large screens
            }}
          >
            Our mission is to render personal loans promptly, in a simple way,
            and make it easily accessible for salaried individuals. We believe
            in giving everyone the power of being financially secured and are
            committed to providing easy and affordable access to credit. Through
            our collaboration with Xpressrupee, an RBI-registered NBFC
            (Non-Banking Financial Company), we offer loans that are secure,
            transparent, and customized as per the needs of today’s modern-day
            consumer.
          </Typography>
        </Box>

        {/* Image Box */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" }, // Adjust the image size
            height: { xs: "200px", md: "400px" }, // Responsive height
            borderRadius: "30px",
            objectFit: "cover",
            marginTop: { xs: "20px", md: "0" }, // Spacing for smaller screens
            marginLeft: { md: 3 }, // Add margin between text and image
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${VisionImage})`, // Use image as background
          backgroundSize: "cover", // Ensures the image covers the entire box
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents image tiling
          borderRadius: "30px",
          marginLeft: { xs: 0, md: "50px" },
          marginRight: { xs: 0, md: "50px" },
          marginTop: { xs: "20px", md: "100px" },
          marginBottom: "50px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
          position: "relative",
          gap: 2, // Adds space between items
        }}
      >
        {/* Image Box */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" }, // Adjust image width for better responsiveness
            height: { xs: "200px", md: "400px" }, // Dynamic height for responsiveness
            borderRadius: "30px",
            objectFit: "cover",
            marginTop: { xs: "20px", md: "0" }, // Adds margin top for small screens
            marginLeft: { md: 3 },
            marginBottom: { xs: "20px", md: "0" }, // Adds margin for small screens
          }}
        />

        {/* Content Box */}
        <Box
          sx={{
            background: "white",
            border: "none",
            textAlign: "left",
            flex: 1,
            zIndex: 1,
            width: { xs: "90%", md: "40%" }, // Reduce width
            height: "auto", // Allow dynamic height
            padding: 5, // Add padding for spacing
            borderRadius: "20px", // Optional: rounded edges
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional: shadow for better visibility
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: "#240844",
              fontWeight: "bold",
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
            }}
          >
            Our vision at Xpressrupee is to redefine how personal finance is
            accessed by salaried professionals in India. We aim to create a
            transparent, customer-focused platform that provides access to
            credit when it’s required by people the most. By making use of the
            latest technology and leveraging our expertise in financial
            services, we strive to form a future where financial inclusion is a
            reality for all, irrespective of their sources of income or
            financial background.
          </Typography>
        </Box>
      </Box>

      <WhyChoose />

      <Box
        sx={{
          backgroundColor: "#D9D9D9",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "30px",
          marginLeft: { xs: 0, md: "50px" },
          marginRight: { xs: 0, md: "50px" },
          marginTop: { xs: "20px", md: "100px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack content vertically on small screens
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
          position: "relative",
          gap: 2, // Adds space between items
          height: { xs: "auto", md: "500px" }, // Adjust height for small and large screens
        }}
      >
        {/* Content Box (on the left side) */}
        <Box
          sx={{
            color: "black", // Set text color to black for the content box
            display: "flex",
            flexDirection: "column", // Stack content vertically
            alignItems: "flex-start", // Align content to the left
            width: { xs: "100%", md: "50%" }, // Take full width on small screens, half on larger ones
            padding: 5,
            borderRadius: "20px",
          }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: "black", // Heading color set to black
              fontWeight: "bold",
            }}
          >
            Life is too short to stress about funds.
            <br />
            SO GET IT NOW WITH A TAP!
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Apply now and begin your journey with full access to your financial
            freedom! Just fill the form and our team will get back to you at the
            earliest.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "black",
              backgroundColor: "transparent", // Transparent button background
              "&:hover": {
                backgroundColor: "#240844", // Darker shade on hover
                color: "white",
              },
            }}
            component="a" // Use an anchor tag for external links
            href="apply-now" // Replace with your external link
            target="_blank" // Optionally open the link in a new tab
          >
            Apply Now
          </Button>
        </Box>

        {/* Image Box (on the right side) */}
        
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "250px", md: "400px" },
            borderRadius: "30px",
            objectFit: "cover",
            marginTop: { xs: "20px", md: "0" },
            marginLeft: { md: 3 },
            marginBottom: { xs: "20px", md: "0" },
            backgroundImage: `url(${sampleImage})`, // Add the image as background
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
