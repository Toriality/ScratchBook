import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        p: 1,
        justifyContent: "space-evenly",
        backgroundColor: "#f4f4f4",
        color: "primary.main",
        fontWeight: "bolder",
      }}
    >
      <Typography variant="subtitle">ScratchBook 0.4.0</Typography>
      <Typography variant="subtitle">GitHub Repository</Typography>
      <Typography variant="subtitle">Help</Typography>
    </Box>
  );
}

export default Footer;
