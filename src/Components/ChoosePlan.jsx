import { Box, Button, Grid2, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import freeplanimage from "../Images/Free.svg";
import tick from "../Images/tick.svg";
import standardplanimage from "../Images/Standard.svg";
import premiumplanimage from "../Images/Premium.svg";

const ChoosePlan = () => {
  return (
    <ThemeProvider theme={Breakpointstheme}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f7f7f7",
          padding: {
            mobile: "5vh 10px",
            tablet: "5vh 30px",
            laptop: "8vh 100px",
            desktop: "8vh 150px",
          },
        }}
      >
        {/* head */}
        <Typography
          sx={{
            fontWeight: "800",
            color: "#0B132A",
            fontSize: {
              mobile: "26px",
              laptop: "35px",
            },
            textAlign: "center",
          }}
        >
          Choose Your Plan
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            color: "#4F5665",
            fontSize: {
              mobile: "13px",
              laptop: "16px",
            },
            textAlign: "center",
            mt: {
              mobile: ".5rem",
              laptop: "1rem",
            },
            mb: {
              mobile: "2.2rem",
              laptop: "3rem",
            },
          }}
        >
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </Typography>

        {/* Cards */}

        <Grid2 container spacing={6}>
          {/* Free Plan Box */}

          <Grid2
            display="flex"
            justifyContent="center"
            alignItems="center"
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                border: "1px solid #DDDDDD",
                borderRadius: "10px",
                width: "100%",
                padding: "30px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Free plan image  */}
              <Box
                component="img"
                sx={{
                  height: 150,
                  width: 150,
                }}
                alt="Fre plan image"
                src={freeplanimage}
              />
              {/* Heading plan */}
              <Typography
                sx={{
                  fontWeight: "600",
                  mt: "1rem",
                  mb: "3rem",
                  fontSize: {
                    mobile: "16px",
                    laptop: "18px",
                    color: "#0B132A",
                  },
                }}
              >
                Free Plan
              </Typography>

              {/* Given things to person */}

              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Unlimited Bandwitch
                </Typography>
              </Box>
              {/* 2 */}
              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Encrypted Connection
                </Typography>
              </Box>
              {/* 3 */}
              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  No Traffic Logs
                </Typography>
              </Box>
              {/* 4 */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "2rem",
                  mb: "4rem",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Works on All Devices
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "20px",
                    laptop: "25px",
                  },
                  color: "#0B132A",
                }}
              >
                Free
              </Typography>
              <Button
                color="error"
                sx={{
                  textTransform: "none",
                  borderRadius: "50px",
                  fontWeight: "800",
                  mt: "1rem",
                  width: "170px",
                  height: "45px",
                }}
                variant="outlined"
              >
                Select
              </Button>
            </Box>
          </Grid2>

          {/* Standard Plan Box */}
          <Grid2
            display="flex"
            justifyContent="center"
            alignItems="center"
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                border: "1px solid #DDDDDD",
                borderRadius: "10px",
                width: "100%",
                padding: "30px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Free plan image  */}
              <Box
                component="img"
                sx={{
                  height: 150,
                  width: 150,
                }}
                alt="Fre plan image"
                src={standardplanimage}
              />
              {/* Heading plan */}
              <Typography
                sx={{
                  fontWeight: "600",
                  mt: "1rem",
                  mb: "3rem",
                  fontSize: {
                    mobile: "16px",
                    laptop: "18px",
                    color: "#0B132A",
                  },
                }}
              >
                Standard Plan
              </Typography>

              {/* Given things to person */}

              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Unlimited Bandwitch
                </Typography>
              </Box>
              {/* 2 */}
              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Encrypted Connection
                </Typography>
              </Box>
              {/* 3 */}
              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Yes Traffic Logs
                </Typography>
              </Box>
              {/* 4 */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "2rem",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Works on All Devices
                </Typography>
              </Box>
              {/* 5 */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "2rem",
                  mb: "4rem",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Connect Anyware
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "20px",
                    laptop: "25px",
                  },
                  color: "#0B132A",
                }}
              >
                $9 / mo
              </Typography>
              <Button
                color="error"
                sx={{
                  textTransform: "none",
                  borderRadius: "50px",
                  fontWeight: "800",
                  mt: "1rem",
                  width: "170px",
                  height: "45px",
                }}
                variant="outlined"
              >
                Select
              </Button>
            </Box>
          </Grid2>

          {/* Premium Plan Box */}
          <Grid2
            display="flex"
            justifyContent="center"
            alignItems="center"
            item
            size={{
              mobile: 12,
              tablet: 12,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                border: "1px solid #DDDDDD",
                borderRadius: "10px",
                width: "100%",
                padding: "30px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Free plan image  */}
              <Box
                component="img"
                sx={{
                  height: 150,
                  width: 150,
                }}
                alt="Fre plan image"
                src={standardplanimage}
              />
              {/* Heading plan */}
              <Typography
                sx={{
                  fontWeight: "600",
                  mt: "1rem",
                  mb: "3rem",
                  fontSize: {
                    mobile: "16px",
                    laptop: "18px",
                    color: "#0B132A",
                  },
                }}
              >
                Standard Plan
              </Typography>

              {/* Given things to person */}

              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Unlimited Bandwitch
                </Typography>
              </Box>
              {/* 2 */}
              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Encrypted Connection
                </Typography>
              </Box>
              {/* 3 */}
              <Box sx={{ display: "flex", alignItems: "center", mt: "2rem" }}>
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Yes Traffic Logs
                </Typography>
              </Box>
              {/* 4 */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "2rem",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Works on All Devices
                </Typography>
              </Box>
              {/* 5 */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "2rem",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                  Connect Anyware
                </Typography>
              </Box>
              {/* 6 */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "2rem",
                  mb: "4rem",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    width: 20,
                    mr: "1rem",
                  }}
                  alt="Tick"
                  src={tick}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      mobile: "12px",
                      laptop: "14px",
                    },
                    color: "#4F5665",
                  }}
                >
                 Get New Features
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "20px",
                    laptop: "25px",
                  },
                  color: "#0B132A",
                }}
              >
                $12 / mo
              </Typography>
              <Button
                color="error"
                sx={{
                  textTransform: "none",
                  borderRadius: "50px",
                  fontWeight: "800",
                  mt: "1rem",
                  width: "170px",
                  height: "45px",
                  backgroundColor:'#F53838',
                  boxShadow: "0px 20px 80px 1px #F53838",

                }}
                variant="contained"
              >
                Select
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
};

export default ChoosePlan;
