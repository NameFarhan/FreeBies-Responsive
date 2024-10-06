import React from "react";
import { Box, Grid2, ThemeProvider, Typography } from "@mui/material";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import featuresimage from "../Images/features.svg";
import successicon from "../Images/success.svg";

const Features = () => {
  return (
    <>
      <ThemeProvider theme={Breakpointstheme}>
        <Box
          sx={{
            padding: {
              mobile: "5vh 10px",
              tablet: "5vh 30px",
              laptop: "8vh 100px",
              desktop: "8vh 150px",
            },
            backgroundColor: "#f7f7f7",
          }}
        >
          <Grid2
            container
            spacing={{
              mobile: 2,
              laptop: 6,
              desktop: 8,
            }}
          >
            {/* image box */}
            <Grid2
              display="flex"
              justifyContent="center" // Centers horizontally
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 6,
              }}
            >
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                }}
                alt="Features image"
                src={featuresimage}
              />
            </Grid2>

            {/* details box */}
            <Grid2
              display={"flex"}
              justifyContent="center" // Centers horizontally
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 6,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: {
                    mobile: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#0B132A",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "25px",
                      laptop: "35px",
                    },
                    textAlign: {
                      mobile: "center",
                      laptop: "left",
                    },
                    mt: "2rem",
                  }}
                >
                  We Provide Many Features You Can Use
                </Typography>

                <Typography
                  sx={{
                    color: "#4F5665",
                    fontWeight: "400",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                    textAlign: {
                      mobile: "center",
                      laptop: "left",
                    },
                    mt: ".8rem",
                  }}
                >
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </Typography>
                {/* success features */}

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      mobile: "column", // Stacking vertically on mobile
                      laptop: "column", // Row alignment on larger screens
                    },
                    justifyContent: {
                      mobile: "center", // Start alignment on mobile // Start alignment on tablet
                      laptop: "flex-start", // Start alignment on laptop
                    },
                    alignItems: {
                      mobile: "center", // Centering items on mobile
                      tablet: "center", // Centering items on tablet
                      laptop: "flex-start", // Left alignment on laptop
                    },
                    mt: {
                      mobile: "15px",
                      tablet: "15px",
                      laptop: "20px",
                    },
                    gap: "14px",
                  }}
                >
                  {[
                    "Powerful online protection.",
                    "Internet without borders.",
                    "Supercharged VPN.",
                    "No specific time limits.",
                  ].map((text, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row", // Ensure items are aligned in a row
                        width: {
                          mobile: "100%", // Full width on mobile
                          tablet: "100%", // Full width on tablet
                          laptop: "auto", // Auto width on larger screens
                        },
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          width: "24px",
                          height: "24px",
                          marginRight: "8px", // Add margin to separate icon and text
                        }}
                        alt="Features image"
                        src={successicon}
                      />
                      <Typography
                        sx={{
                          color: "#4F5665",
                          fontSize: "14px", // Corrected from 'fontsize' to 'fontSize'
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Box>  
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Features;
