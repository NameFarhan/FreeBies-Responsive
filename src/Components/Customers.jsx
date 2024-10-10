import { Box, Grid2, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import client1 from "../Images/1client.svg";
import client2 from "../Images/2client.svg";
import client3 from "../Images/3client.svg";
import star from "../Images/star.svg";

const Customers = () => {
  return (
    <ThemeProvider theme={Breakpointstheme}>
      <Box
        sx={{
          padding: {
            mobile: "5vh 10px",
            tablet: "5vh 30px",
            laptop: "8vh 100px",
            desktop: "8vh 150px",
          },
        }}
      >
        <Typography
          sx={{
            color: "#0B132A",
            fontWeight: "800",
            fontSize: {
              mobile: "30px",
              laptop: "35px",
            },
            textAlign: "center",
            mt: "2rem",
          }}
        >
          Trusted by Thousands of Happy Customer
        </Typography>
        <Typography
          sx={{
            color: "#4F5665",
            fontSize: {
              mobile: "14px",
              laptop: "16px",
            },
            textAlign: "center",
            mt: "1rem",
            mb: "3rem",
          }}
        >
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </Typography>

        {/* Three Testimonial clients  */}

        <Grid2
          display="flex"
          justifyContent="center"
          alignItems="center"
          container
          spacing={2}
        >
          <Grid2
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                padding: "30px 30px",
                border: "1px solid #DDDDDD",
                borderRadius: "10px",
                transition: "all .2s ease-in",
                "&:hover": {
                  border: "2px solid #F53838",
                },
                width: {
                  mobile: "320px",
                  laptop: "400px",
                },
              }}
            >
              {/* client details */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* image and name */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    sx={{
                      height: 50,
                      width: 50,
                      borderRadius: "50% ",
                    }}
                    alt="client image"
                    src={client1}
                  />
                  {/* Name */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: "1rem",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: {
                          mobile: "15px",
                          laptop: "18px",
                        },
                        color: "#0B132A",
                      }}
                    >
                      Viezh Robert
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: {
                          mobile: "13px",
                          laptop: "14px",
                        },
                        color: "#4F5665",
                      }}
                    >
                      Warsaw, Poland
                    </Typography>
                  </Box>
                </Box>

                {/* star rating */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#0B132A",
                      fontSize: {
                        mobile: "15px",
                        laptop: "16px",
                      },
                    }}
                  >
                    4.5
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 20,
                      width: 20,
                      ml: ".5rem",
                    }}
                    alt="Star"
                    src={star}
                  />
                </Box>
              </Box>

              {/* What client says */}
              <Box sx={{ mt: "2rem" }}>
                <Typography
                  sx={{
                    color: "#0B132A",
                    fontSize: {
                      mobile: "15px",
                      laptop: "16px",
                    },
                    lineHeight: "30px",
                  }}
                >
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </Typography>
              </Box>
            </Box>
          </Grid2>

          {/* 2nd client */}
          <Grid2
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                padding: "30px 30px",
                border: "1px solid #DDDDDD",
                borderRadius: "10px",
                transition: "all .2s ease-in",
                "&:hover": {
                  border: "2px solid #F53838",
                },
                width: {
                  mobile: "320px",
                  laptop: "400px",
                },
              }}
            >
              {/* client details */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* image and name */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    sx={{
                      height: 50,
                      width: 50,
                      borderRadius: "50% ",
                    }}
                    alt="client image"
                    src={client2}
                  />
                  {/* Name */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: "1rem",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: {
                          mobile: "15px",
                          laptop: "18px",
                        },
                        color: "#0B132A",
                      }}
                    >
                      Yessica Christy
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: {
                          mobile: "13px",
                          laptop: "14px",
                        },
                        color: "#4F5665",
                      }}
                    >
                      Shanxi, China
                    </Typography>
                  </Box>
                </Box>

                {/* star rating */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#0B132A",
                      fontSize: {
                        mobile: "15px",
                        laptop: "16px",
                      },
                    }}
                  >
                    4.5
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 20,
                      width: 20,
                      ml: ".5rem",
                    }}
                    alt="Star"
                    src={star}
                  />
                </Box>
              </Box>

              {/* What client says */}
              <Box sx={{ mt: "2rem" }}>
                <Typography
                  sx={{
                    color: "#0B132A",
                    fontSize: {
                      mobile: "15px",
                      laptop: "16px",
                    },
                    lineHeight: "30px",
                  }}
                >
                  “I like it because I like to travel far and still can connect
                  with high speed.”.
                </Typography>
              </Box>
            </Box>
          </Grid2>

          {/* 3rd client */}
          <Grid2
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                padding: "30px 30px",
                border: "1px solid #DDDDDD",
                borderRadius: "10px",
                transition: "all .2s ease-in",
                "&:hover": {
                  border: "2px solid #F53838",
                },
                width: {
                  mobile: "320px",
                  laptop: "400px",
                },
              }}
            >
              {/* client details */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* image and name */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    sx={{
                      height: 50,
                      width: 50,
                      borderRadius: "50% ",
                    }}
                    alt="client image"
                    src={client3}
                  />
                  {/* Name */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: "1rem",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: {
                          mobile: "15px",
                          laptop: "18px",
                        },
                        color: "#0B132A",
                      }}
                    >
                      Kim Young Jou
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: {
                          mobile: "13px",
                          laptop: "14px",
                        },
                        color: "#4F5665",
                      }}
                    >
                      Seoul, South Korea
                    </Typography>
                  </Box>
                </Box>

                {/* star rating */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#0B132A",
                      fontSize: {
                        mobile: "15px",
                        laptop: "16px",
                      },
                    }}
                  >
                    4.5
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 20,
                      width: 20,
                      ml: ".5rem",
                    }}
                    alt="Star"
                    src={star}
                  />
                </Box>
              </Box>

              {/* What client says */}
              <Box sx={{ mt: "2rem" }}>
                <Typography
                  sx={{
                    color: "#0B132A",
                    fontSize: {
                      mobile: "15px",
                      laptop: "16px",
                    },
                    lineHeight: "30px",
                  }}
                >
                  “This is very unusual for my business that currently requires
                  a virtual private network that has high security.”.
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
};

export default Customers;
