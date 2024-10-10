import { Box, Grid2, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Breakpointstheme } from "../Breakpoints Theme/Theme";
import globeimage from "../Images/global.svg";
import netflixicon from "../Images/netflix.svg";
import redditicon from "../Images/reddit.svg";
import amazonicon from "../Images/amazon2.svg";
import discordicon from "../Images/discord.svg";
import spotifyicon from "../Images/spotify.svg";

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
              fontWeight: "800",
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
                mobile: "4rem",
                laptop: "6rem",
                desktop: "9rem",
              },
            }}
          >
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </Typography>

          <Box
            component="img"
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              mb: "5rem",
            }}
            alt="Globe Image"
            src={globeimage}
          />

          {/* companies icons */}

          <Grid2
            display="flex"
            justifyContent="center"
            alignItems="center"
            container
            spacing={{
                mobile:4,
                laptop:8
            }}
          >
            <Grid2
              display="flex"
              justifyContent="center"
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 2,
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "170px",
                  height: "60px",
                }}
                alt="neflix icon"
                src={netflixicon}
              />
            </Grid2>
            <Grid2
              display="flex"
              justifyContent="center"
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 2,
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "170px",
                  height: "60px",
                }}
                alt="neflix icon"
                src={redditicon}
              />
            </Grid2>
            <Grid2
              display="flex"
              justifyContent="center"
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 2,
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "170px",
                  height: "60px",
                  objectFit: "cover",
                }}
                alt="neflix icon"
                src={amazonicon}
              />
            </Grid2>
            <Grid2
              display="flex"
              justifyContent="center"
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 2,
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "170px",
                  height: "60px",
                }}
                alt="neflix icon"
                src={discordicon}
              />
            </Grid2>
            <Grid2
              display="flex"
              justifyContent="center"
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 2,
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "170px",
                  height: "60px",
                  position:{
                    laptop:'relative'
                  },
                  left:{
                    laptop:'35px'
                  }
                }}
                alt="neflix icon"
                src={spotifyicon}
              />
            </Grid2>
          </Grid2>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default GlobalNetwork;
