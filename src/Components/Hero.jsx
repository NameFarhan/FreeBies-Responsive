import { Box, Grid2, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";

const Hero = () => {
  return (
    <ThemeProvider theme={Breakpointstheme}>
      <Box sx={{padding:{
        mobile: '1vh 0',
        tablet: '1vh 30px',
        laptop:'1vh 100px',
        desktop:'1vh 150px'
      }}}>
        <Grid2 container>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 12,
              laptop: 6,
            }}
          >
            <Box sx={{ border: "1px solid black", height: "100px" }}>
                <Typography>Hello world</Typography>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 12,
              laptop: 6,
            }}
          >
            <Box sx={{ border: "1px solid black", height: "100px" }}>2</Box>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
};

export default Hero;
