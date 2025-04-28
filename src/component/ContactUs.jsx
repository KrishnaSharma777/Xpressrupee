import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import Swal from "sweetalert2";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Input validation logic
    if (name === "fullName") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "phoneNumber") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (formData.phoneNumber.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Phone number must be exactly 10 digits.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thank You!",
      text: "We will get in touch with you soon.",
      confirmButtonText: "OK",
    });

    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        mt: { xs: 15, md: 15 },

        // backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        paddingX: 3,
        paddingY: 1,
      }}
    >
      {/* Content Section */}
      <Box
        sx={{
          marginTop: { xs: 4, md: 4 },
          background: "  #ABC8CB",
          minHeight: "100vh",
          borderRadius: 7,
        }}
      >
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                color: "#444",
                mb: 2,
                ml: 5,
                fontSize: { xs: "24px", md: "3.3rem" },
              }}
            >
              Let's Connect
            </Typography>
            <Box
              sx={{
                ml: 3,
                padding: "20px",
                borderRadius: 15,
              }}
            >
              <Grid container spacing={1}>
                {/* Mobile and Email in the first row */}
                <Grid item xs={12} sm={12}>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      mb: 1,
                    }}
                  >
                    Mobile
                  </Typography>
                  <Typography sx={{ mb: 1 }}>+91 xxxxxxxxxx</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      mb: 2,
                    }}
                  >
                    Email
                  </Typography>
                  <Typography sx={{ mb: 2 }}>info@xpressrupee.com</Typography>
                </Grid>

                {/* Reach Us in the second row */}
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      mb: 2,
                    }}
                  >
                    Reach Us
                  </Typography>
                  <Typography>New Delhi </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Right Section: Form */}
          <Grid item xs={12} md={5.6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                marginTop: 6,
                background: "rgba(255, 255, 255, 0.9)",
                padding: 6,
                borderRadius: 7,
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    inputProps={{
                      pattern: "^[a-zA-Z\\s]*$",
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: "16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: "16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                    fullWidth
                    required
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "\\d*",
                      maxLength: 10,
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: "16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: "16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: "16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#240844",
                      color: "#fff",
                      padding: "10px",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Google Map Section */}
      <Box
        sx={{
          paddingX: 1,
          display: "flex",
          mb: { xs: -5, md: 0 }, // Add margin-bottom for small screens only
          mt: { xs: 5, md: 5 },
        }}
      >
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.012190060276!2d77.36625474937759!3d28.570626083222425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a57f3f6f1f%3A0xa1c0ad1211f34090!2sWorld%20Trade%20Tower%2C%20Sector%2016%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sus!4v1614693744843"
          allowFullScreen
          loading="lazy"
          sx={{
            width: "100%",
            height: { xs: "200px", md: "300px" },
            border: 0,
            borderRadius: "30px",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
