import { Box, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import globeimage from '../Images/global.svg'

const GlobalNetwork = () => {
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
            backgroundColor: "#fdfdfd",
          }}
        >
          <Typography
            sx={{
              color: "#0B132A",
              fontWeight: "700",
              fontSize: {
                mobile: "30px",
                laptop: "35px",
              },
              textAlign: "center",
            }}
          >
            Huge Global Network of Fast VPN
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: {
                mobile: "14px",
                laptop: "16px",
              },
              color: "#4F5665",
              textAlign: "center",
              mt: "1rem",
              mb: {
                mobile:'4rem',
                laptop:'6rem',
                desktop:'9rem'
              },
            }}
          >
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </Typography>

          <Box
            component="img"
            sx={{
                display:'block',
                width:'100%',
                height:'auto',
                mb:'5rem'
            }}
            alt="Globe Image"
            src={globeimage}
          />

          {/* companies icons */}
          
        </Box>
      </ThemeProvider>
    </>
  );
};

export default GlobalNetwork;
