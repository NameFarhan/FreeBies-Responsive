import { Box, Divider, Grid2, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import accounticon from "../Images/account.svg";
import serversicon from "../Images/servers.svg";
import locationicon from "../Images/location.svg";

const Stats = () => {
  return (
    <>
      <ThemeProvider theme={Breakpointstheme}>
        <Box
          sx={{
            padding: {
              mobile: "3vh 10px",
              tablet: "3vh 30px",
              laptop: "6vh 100px",
              desktop: "6vh 150px",
            },
            boxShadow:'1px 15px 55px -16px #ddd'
          }}
        >
          <Grid2
            container
            sx={{
              mt: {
                mobile: "2vh",
                laptop: "5vh",
              },
            }}
            spacing={{
              mobile: 6,
              laptop: 2,
            }}
          >
            <Grid2
              sx={{
                display: "flex", // Enables flexbox
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Centers vertically
                height: "100%", // Takes full height of the container
              }}
              item
              size={{
                mobile: 12,
                laptop: 4,
              }}
            >
              <Box
                sx={{
                  display: {
                    mobile: "block",
                    laptop: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* image Box */}
                <Box
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "70px",
                    backgroundColor: "#FFECEC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 18,
                      width: 18,
                    }}
                    alt="account icon"
                    src={accounticon}
                  />
                </Box>

                {/* Details  */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: ".5rem",
                    position: {
                      laptop: "relative",
                    },
                    left: {
                      laptop: "10px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "800",
                      color: "#0B132A",
                      fontSize: {
                        mobile: "20px",
                        laptop: "25px",
                      },
                    }}
                  >
                    90+
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      color: "#4F5665",
                      fontSize: {
                        mobile: "15px",
                        leptop: "20px",
                      },
                    }}
                  >
                    Users
                  </Typography>
                </Box>
                  </Box>
            </Grid2>

            <Grid2
              sx={{
                display: "flex", // Enables flexbox
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Centers vertically
                height: "100%", // Takes full height of the container
              }}
              item
              size={{
                mobile: 12,
                laptop: 4,
              }}
            >
              <Box
                sx={{
                  display: {
                    mobile: "block",
                    laptop: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  position: {
                    mobile: "relative",
                    tablet: "none",
                    laptop: "static",
                  },
                  left: {
                    mobile: ".7rem",
                  },
                }}
              >
                {/* image Box */}
                <Box
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "70px",
                    backgroundColor: "#FFECEC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 18,
                      width: 18,
                    }}
                    alt="account icon"
                    src={locationicon}
                  />
                </Box>

                {/* Details  */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: ".5rem",
                    position: {
                      laptop: "relative",
                    },
                    left: {
                      laptop: "10px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "800",
                      color: "#0B132A",
                      fontSize: {
                        mobile: "20px",
                        laptop: "25px",
                      },
                    }}
                  >
                    30+
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      color: "#4F5665",
                      fontSize: {
                        mobile: "15px",
                        leptop: "20px",
                      },
                    }}
                  >
                    Locations
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2
              sx={{
                display: "flex", // Enables flexbox
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Centers vertically
                height: "100%", // Takes full height of the container
              }}
              item
              size={{
                mobile: 12,
                laptop: 4,
              }}
            >
              <Box
                sx={{
                  display: {
                    mobile: "block",
                    laptop: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  position: {
                    mobile: "relative",
                    tablet: "none",
                    laptop: "static",
                  },
                  left: {
                    mobile: ".3rem",
                  },
                }}
              >
                {/* image Box */}
                <Box
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "70px",
                    backgroundColor: "#FFECEC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 18,
                      width: 18,
                    }}
                    alt="account icon"
                    src={serversicon}
                  />
                </Box>

                {/* Details  */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: ".5rem",
                    position: {
                      laptop: "relative",
                    },
                    left: {
                      laptop: "10px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "800",
                      color: "#0B132A",
                      fontSize: {
                        mobile: "20px",
                        laptop: "25px",
                      },
                    }}
                  >
                    50+
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      color: "#4F5665",
                      fontSize: {
                        mobile: "15px",
                        leptop: "20px",
                      },
                    }}
                  >
                    Servers
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Stats;
