import { Box, Button, Hidden, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import React from "react";
import logo from "../Images/logo.svg";
import { styled } from "@mui/material/styles";

 export const Wrapper = styled(Box)(({ theme }) => ({
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
                  width: "35px", // Full width of the container
                  height: "35px",
                }}
                alt="logo image"
                src={logo}
              />
              <Typography
                sx={{
                  fontWeight: "700",
                  marginLeft: "10px",
                  fontSize: {
                    xs: "20px",
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: {
                  sm: "10px",
                  md: "25px",
                  lg: "35px",
                },
              }}
            >
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
                md: "end",
              },
              gap: "10px",
              marginTop:{
                sm:'1.5px',
                md:'3px',
                lg:'7px'
              }
            }}
          >
            <Button
              sx={{
                color: "#0B132A",
                fontWeight: "700",
                textTransform: "none",
                fontSize: '16px',
                height:'auto',
                padding:'0' 
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
