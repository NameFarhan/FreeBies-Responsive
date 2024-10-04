import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import logo from "../Images/logo.svg";
const Navbar = () => {
  return (
    <>
      <Box sx={{ padding: "2vh 0" }}>
        <Container maxWidth="xl">
          <Grid container>
            {/* logo here */}
            <Grid item xs={3}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    sx={{
                      height: 35,
                      width: 35,
                    }}
                    alt="Logo"
                    src={logo}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "15px",
                        lg: "20px",
                        xl: "16px",
                      },
                      color: "#0B132A",
                      fontWeight: "800",
                      marginLeft: "10px",
                    }}
                  >
                    LaslesVPN
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* navigations */}
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: {
                    xs: "10px",
                    sm: "20px",
                    md: "30px",
                    lg: "40px",
                    xl: "50px",
                  },
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "12px",
                      lg: "16px",
                      xl: "16px",
                    },
                    textTransform: "none",
                  }}
                >
                  About
                </Button>
                <Button
                  variant="text"
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "12px",
                      lg: "16px",
                      xl: "16px",
                    },
                    textTransform: "none",
                  }}
                >
                  Features
                </Button>
                <Button
                  variant="text"
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "12px",
                      lg: "16px",
                      xl: "16px",
                    },
                    textTransform: "none",
                  }}
                >
                  Pricing
                </Button>
                <Button
                  variant="text"
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "12px",
                      lg: "16px",
                      xl: "16px",
                    },
                    textTransform: "none",
                  }}
                >
                  Testimonials
                </Button>
                <Button
                  variant="text"
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "12px",
                      lg: "16px",
                      xl: "16px",
                    },
                    textTransform: "none",
                  }}
                >
                  Help
                </Button>
              </Box>
            </Grid>

            {/* Sign in Signup button  */}

            <Grid item xs={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  bottom: "5px",
                }}
              >
                <Button
                  sx={{
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "15px",
                        lg: "20px",
                        xl: "16px",
                      },
                    color: "#0B132A",
                    textTransform: "none",
                  }}
                  variant="text"
                >
                  Sign In
                </Button>
                <Button
                  sx={{
                    border: "1px solid #F53855",
                    borderRadius: "50px",
                    width: {xs:'70px',sm:'80px',md:'90px',lg:'150px',},
                    height: {xs:'10px',sm:'25px',md:'35px',lg:'45px'},
                    color: "#F53855",
                    marginLeft: "10px",
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "15px",
                        lg: "20px",
                        xl: "16px",
                      },
                      textTransform:'none'
                  }}
                  variant="outlined"
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
