import { Box, Button, Hidden, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import React from "react";
import logo from "../Images/logo.svg";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "2vh 150px",

  [theme.breakpoints.only("xs")]: {
    padding: "2vh 10px",
  },
  [theme.breakpoints.only("sm")]: {
    padding: "2vh 30px",
  },
  [theme.breakpoints.only("md")]: {
    padding: "2vh 100px",
  },
}));

const StyledOutlineButton = styled(Button)(({ theme }) => ({
  color: "#F53855",
  fontWeight: "700",
  textTransform: "none",
  borderRadius: "50px",
  height: "auto",
  width: "auto",
  border: "1px solid #F53855",

  [theme.breakpoints.only('lg')]: {
    fontSize:'18px'
  }
}));

const Navbar = () => {
  return (
    <Wrapper>
      <Grid2
        container
        spacing={{
          xs: 1,
          sm: 2,
          md: 4,
        }}
      >
        {/* logo item is here  */}
        <Grid2
          item
          size={{
            xs: 12,
            sm: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "start",
                md: "start",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                sx={{
                  width: "100%", // Full width of the container
                  height: "auto",
                }}
                alt="logo image"
                src={logo}
              />
              <Typography
                sx={{
                  fontWeight: "700",
                  marginLeft: "10px",
                  fontSize: {
                    xs: "15px",
                    sm: "15px",
                    md: "20px",
                  },
                }}
              >
                LaslesVPN
              </Typography>
            </Box>
          </Box>
        </Grid2>

        {/* navigation buttons  */}
        <Hidden smDown>
          <Grid2
            item
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: {
              sm:'10px',
              md:'25px',
              lg:'35px'
            } }}>
              <Button
                sx={{
                  color: "#4F5665",
                  fontWeight: "400",
                  textTransform: "none",
                  fontSize: {
                    sm: "14px",
                    md: "16px",
                    lg: "20px",
                  },
                }}
                variant="text"
              >
                About
              </Button>
              <Button
                sx={{
                  color: "#4F5665",
                  fontWeight: "400",
                  textTransform: "none",
                  fontSize: {
                    sm: "14px",
                    md: "16px",
                    lg: "20px",
                  },
                }}
                variant="text"
              >
                Features
              </Button>
              <Button
                sx={{
                  color: "#4F5665",
                  fontWeight: "400",
                  textTransform: "none",
                  fontSize: {
                    sm: "14px",
                    md: "16px",
                    lg: "20px",
                  },
                }}
                variant="text"
              >
                Pricing
              </Button>
              <Button
                sx={{
                  color: "#4F5665",
                  fontWeight: "400",
                  textTransform: "none",
                  fontSize: {
                    sm: "14px",
                    md: "16px",
                    lg: "20px",
                  },
                }}
                variant="text"
              >
                Testimonials
              </Button>
              <Button
                sx={{
                  color: "#4F5665",
                  fontWeight: "400",
                  textTransform: "none",
                  fontSize: {
                    sm: "14px",
                    md: "16px",
                    lg: "20px",
                  },
                }}
                variant="text"
              >
                Help
              </Button>
            </Box>
          </Grid2>
        </Hidden>

        {/* sign sign up button is here */}
        <Grid2
          item
          size={{
            xs: 12,
            sm: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "end",
              },
              gap:'10px'
            }}
          >
            <Button
              sx={{
                color: "#0B132A",
                fontWeight: "700",
                textTransform: "none",
                fontSize:{
                  lg:'18px'
                }
              }}
              variant="text"
            >
              Sign In
            </Button>
            <StyledOutlineButton variant="outlined">
              Sign Up
            </StyledOutlineButton>
          </Box>
        </Grid2>
      </Grid2>
    </Wrapper>
  );
};

export default Navbar;
