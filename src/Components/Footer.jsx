import { Box, Grid2, Link, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import logo from "../Images/logo.svg";
import fb from "../Images/Facebook.svg";
import twitter from "../Images/Twitter.svg";
import insta from "../Images/Instagram.svg";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import Stack from "@mui/material/Stack";

const Footer = () => {
  return (
    <ThemeProvider theme={Breakpointstheme}>
      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          padding: {
            mobile: "5vh 10px",
            tablet: "5vh 30px",
            laptop: "8vh 100px",
            desktop: "8vh 150px",
          },
        }}
      >
        <Grid2
          container
          spacing={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* First Column */}
          <Grid2
            display="flex"
            justifyContent={{
              mobile: "center",
              laptop: "flex-start",
            }}
            alignItems="center"
            item
            size={{
              mobile: 12,
              laptop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  mobile: "center",
                  laptop: "flex-start",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  sx={{
                    height: 35,
                    width: 35,
                  }}
                  alt="logo"
                  src={logo}
                />
                <Typography
                  sx={{
                    color: "#0B132A",
                    fontSize: {
                      mobile: "16px",
                      laptop: "20px",
                    },
                    ml: "1rem",
                    fontWeight: "800",
                  }}
                >
                  LaslesVPN
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#4F5665",
                  fontSize: {
                    mobile: "14px",
                    laptop: "16px",
                  },
                  fontWeight: "400",
                  mt: "2rem",
                  mb: "1rem",
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                }}
              >
                LaslesVPN is a private virtual network that has unique features
                and has high security.
              </Typography>
              {/* icons  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  right: {
                    laptop: "1.23rem",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 73,
                    width: "max-content",
                    cursor: "pointer",
                  }}
                  alt="Facebook icon"
                  src={fb}
                />
                <Box
                  component="img"
                  sx={{
                    height: 73,
                    width: "max-content",
                    cursor: "pointer",
                  }}
                  alt="Facebook icon"
                  src={twitter}
                />
                <Box
                  component="img"
                  sx={{
                    height: 73,
                    width: "max-content",
                    cursor: "pointer",
                  }}
                  alt="Facebook icon"
                  src={insta}
                />
              </Box>

              <Typography
                sx={{
                  mt: {
                    mobile: "0",
                    laptop: "1rem",
                  },
                  color: "#AFB5C0",
                  fontWeight: "400",
                  fontSize: {
                    mobile: "14px",
                    laptop: "16px",
                  },
                }}
              >
                ©2020LaslesVPN
              </Typography>
            </Box>
          </Grid2>

          {/* Product  */}
          <Grid2
            item
            display="flex"
            justifyContent={{
              mobile: "center",
              laptop: "flex-end",
            }}
            alignItems="center"
            size={{
              mobile: 12,
              laptop: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* head */}
              <Typography
                sx={{
                  color: "#0B132A",
                  fontSize: {
                    mobile: "16px",
                    laptop: "18px",
                  },
                  fontWeight: "700",
                }}
              >
                Product
              </Typography>

              <Stack
                sx={{
                  mt: "2rem",
                  display: "flex",
                }}
                direction="column"
                spacing={2}
              >
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Download
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Pricing
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Locations
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Server
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Countries
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Blog
                </Link>
              </Stack>
            </Box>
          </Grid2>

          {/* Engage  */}

          <Grid2
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            size={{
              mobile: 12,
              laptop: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column",alignItems:'center',justifyContent:'center' }}>
              {/* head */}
              <Typography
                sx={{
                  color: "#0B132A",
                  fontSize: {
                    mobile: "16px",
                    laptop: "18px",
                  },
                  position:'relative',
                  right:{
                    mobile:'2px',
                    laptop:'0px'
                  },
                  fontWeight: "700",
                }}
              >
                Engage
              </Typography>

              <Stack
                sx={{
                  mt: "2rem",
                  position:'relative',
                  left:{
                    mobile:'22.5px',
                    laptop:'30px'
                  },

                }}
                direction="column"
                spacing={2}
              >
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  LaslesVPN ?
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  FAQ
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Tutorials
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  About Us
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#4F5665",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                  }}
                >
                  Terms of Service
                </Link>
              </Stack>
            </Box>
          </Grid2>

          {/* earn Money  */}

          <Grid2
            item
            display="flex"
            flexDirection="column"
            justifyContent={{
              mobile: "center",
            }}
            alignItems="center"
            size={{
              mobile: 12,
              laptop: 3,
            }}
          >
            <Typography
              sx={{
                color: "#0B132A",
                fontSize: {
                  mobile: "16px",
                  laptop: "18px",
                },
                fontWeight: "700",
                position:'relative',
                left:{
                    mobile:'16px',

                }
              }}
            >
              Earn Money
            </Typography>
            <Stack
              sx={{
                mt: "1rem",
                display: "flex",
                position:'relative',
                left:{
                    mobile:'24px',
                }
              }}
              direction="column"
              spacing={2}
            >
              <Link
                sx={{
                  textDecoration: "none",
                  color: "#4F5665",
                  fontSize: {
                    mobile: "14px",
                    laptop: "16px",
                  },
                }}
              >
                Affiliate
              </Link>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "#4F5665",
                  fontSize: {
                    mobile: "14px",
                    laptop: "16px",
                  },
                }}
              >
                Become Partner
              </Link>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
