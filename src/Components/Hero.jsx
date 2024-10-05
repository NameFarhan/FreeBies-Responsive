import { Box, Button, Grid2, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import styled from "styled-components";
import heroimage from '../Images/hero.svg'

const StyledContainedButton = styled(Button)`
  color: white;
  text-transform: none !important;
  background-color: #f53838 !important;
  font-weight: 700 !important;
`;
const Hero = () => {
  return (
    <ThemeProvider theme={Breakpointstheme}>
      <Box
        sx={{
          padding: {
            mobile: "1vh 0",
            tablet: "1vh 30px",
            laptop: "1vh 100px",
            desktop: "1vh 150px",
          },
        }}
      >
        <Grid2 container spacing={5}>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 12,
              laptop: 6,
            }}
          >
            <Box
              sx={{
                marginTop: {
                  mobile: "10px",
                  laptop: "40px",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#0B132A",
                  fontSize: {
                    mobile: "40px",
                    tablet: "50px",
                  },
                  textAlign: {
                    mobile: "center",
                    tablet: "center",
                    laptop: "start",
                  },
                }}
              >
                Want anything to be easy with LaslesVPN.
              </Typography>
              <Typography
                sx={{
                  color: "#0B132A",
                  fontSize: {
                    mobile: "14px",
                    tablet: "16px",
                  },
                  margin: {
                    mobile: "15px 0 25px 0",
                    laptop: "20px 0 40px 0",
                  },
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                }}
              >
                Provide a network for all your needs with ease and fun using
                LaslesVPN discover interesting features from us.
              </Typography>
              <StyledContainedButton
                sx={{
                  width: "150px",
                  height: "60px",
                  borderRadius: "10px",
                  boxShadow: "0px 20px 80px 1px #F53838",
                  width: {
                    mobile: "150px",
                  },
                  height: {
                    mobile: "60px",
                  },
                  margin: {
                    mobile: "15px auto auto auto",
                    laptop: " 15px 0 0 0",
                  },
                  display: {
                    mobile: "block",
                    laptop: "flex",
                  },
                }}
                variant="contained"
              >
                Get Started
              </StyledContainedButton>
            </Box>
          </Grid2>

          {/* hero image box */}

          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 12,
              laptop: 6,
            }}
          >
            <Box
              component="img"
              sx={{
                width:{
                  mobile:'100%',
                },
                height:{
                  mobile:'auto'
                },
                objectFit:'cover'
              }}
              alt="Her image"
              src={heroimage}
            />
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
};

export default Hero;
