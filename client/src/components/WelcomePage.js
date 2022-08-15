import { Box, Paper, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function WelcomePage() {
  return (
    // This page is displayed when user tries to access homepage and is not authenticated
    <Box sx={{ display: "flex", height: "100%" }}>
      {/* Banner */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "45vw",
          backgroundColor: "secondary.main",
        }}
      >
        {/* Feature show */}
        <Box sx={{ color: "white" }}>Slider of features here</Box>
      </Box>
      {/* Call to action */}
      <Box sx={{ m: "auto 2.5rem" }}>
        <Typography variant="h3" sx={{ mb: 14, fontWeight: "bolder" }}>
          Welcome to the ScratchBook
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Share your thoughts and ideas with the world!
        </Typography>
        {/* Authentication buttons */}
        <Box
          sx={{
            "& button": {
              mb: 2,
            },
          }}
        >
          <Button variant="contained" fullWidth sx={buttonStyle}>
            Register an account
          </Button>
          <Button variant="outlined" fullWidth sx={buttonStyle}>
            Log In
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const buttonStyle = {
  p: 2,
  borderRadius: "25px",
  width: "80%",
  fontWeight: "bolder",
  fontSize: 18,
};

export default WelcomePage;
