import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import styled from "styled-components";
const StyledContainedButton = styled(Button)`
  color: white;
  text-transform: none !important;
  background-color: #f53838 !important;
  font-weight: 700 !important;
`;


const Subscribe = () => {
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
            display: {
                mobile:'none',
                laptop:'flex'
            },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: {
                laptop: "0px 0px 10px 1px #ccc",
              },
              borderRadius: "10px",
              padding: "70px 70px",
              width: {
                laptop: "1140px",
                mobile:'320px',
              },
              height: {
                laptop: "233px",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#0B132A",
                  fontSize: {
                    mobile: "26px",
                    laptop: "35px",
                  },
                  fontWeight: "700",
                }}
              >
                Subscribe Now for Get Special Features!
              </Typography>
              <Typography
                sx={{
                  color: "#4F5665",
                  fontSize: {
                    mobile: "14px",
                    laptop: "16px",
                  },
                }}
              >
                Let's subscribe with us and find the fun.
              </Typography>
            </Box>
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
                Subscribe Now
            </StyledContainedButton>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Subscribe;
