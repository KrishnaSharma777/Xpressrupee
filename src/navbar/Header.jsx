import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Menu as MUI_Menu,
  MenuItem,
  Button,
} from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ApplyNowIcon from "@mui/icons-material/Assignment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalculateIcon from "@mui/icons-material/Calculate";
import { keyframes } from "@mui/system";

import logo from "../assets/image/WhatsApp_Image_2025-03-26_at_11.43.06_PM-removebg-preview.png"; // Adjust the path based on your structure

// Blinking animation for the "Apply Now" button
const blinking = keyframes`
  0% { background-color: white; color: #240844; }
  50% { background-color: #240844; color: white; }
  100% { background-color: black; color: white; }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          paddingTop: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.6)", // Adjust opacity here
          border: "none",
          boxShadow: "none",
          backdropFilter: "blur(10px)", // Adds a subtle blur effect
          marginBottom: "60px", // Adjust margin bottom
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            minHeight: "80px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              zIndex: 10,
              paddingLeft: { xs: 6, md: 4 },
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                borderRadius: 10,
                width: "40%", // Adjusted width for better visibility
                height: "auto", // Maintain aspect ratio
                maxWidth: "100%", // Ensures it fits properly on larger screens
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
            sx={{
              display: { xs: "block", md: "none" },
              color: "#0b2747",
              padding: "8px",
              marginRight: 2,
            }}
          >
            <Menu />
          </IconButton>

          {/* Mobile Menu */}
          <MUI_Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiPaper-root": { zIndex: 900 },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HomeIcon sx={{ mr: 1 }} /> Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/about-us"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InfoIcon sx={{ mr: 1 }} /> About Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/contact-us"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ContactPageIcon sx={{ mr: 1 }} /> Contact Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/repay-now"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ApplyNowIcon sx={{ mr: 1 }} /> Repay Now
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/calculator"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CalculateIcon sx={{ mr: 1 }} /> Loan Calculator
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/apply-now"
                onClick={scrollToTop}
                style={{
                  color: "#0b2747",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ApplyNowIcon sx={{ mr: 1 }} /> Apply Now
              </Link>
            </MenuItem>
          </MUI_Menu>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              textAlign: "center",
              gap: "1rem", // Spacing between links and button
            }}
          >
            {/* Navigation Links */}
            <Box
              sx={{
                ml: 3, // Adjusted margin left
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "nowrap",
              }}
            >
              <Link to="/" onClick={scrollToTop} style={navLinkStyle}>
                HOME
              </Link>
              <Link to="/about-us" onClick={scrollToTop} style={navLinkStyle}>
                ABOUT US
              </Link>
              <Link to="/contact-us" onClick={scrollToTop} style={navLinkStyle}>
                CONTACT US
              </Link>
              <Link to="/repay-now" onClick={scrollToTop} style={navLinkStyle}>
                REPAY NOW
              </Link>
              <Link to="/calculator" onClick={scrollToTop} style={navLinkStyle}>
                LOAN CALCULATOR
              </Link>
            </Box>

            {/* Apply Now Button - Separate Box */}
            <Box>
              <Button
                component={Link}
                to="/apply-now"
                variant="contained"
                sx={{
                  backgroundColor: "#2da67f ",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                  textTransform: "none",
                  whiteSpace: "nowrap", // Prevents button from breaking to a new line
                  "&:hover": {
                    backgroundColor: "navy",
                  },
                }}
              >
                APPLY NOW
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
const navLinkStyle = {
  color: "#0b2747",
  textDecoration: "none",
  padding: "8px",
  fontWeight: "700",
  fontFamily: "Roboto, sans-serif",
  transition: "color 0.3s ease",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap", // Prevents text from breaking into multiple lines
};
