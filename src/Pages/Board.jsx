import { Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import cutetoo3 from "../Photos/cutetoo3.jpg";

export const Board = () => {
  return (
    <Fade in={true} timeout={400}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 3,
          paddingLeft: 2,
          paddingRight: 2,
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{ overflowX: "hidden", width: "100vw", display: "flex", justifyContent: "center" }}
        >
          <img src={cutetoo3} width="400px" />
        </Box>
        <Typography variant="h1" sx={{ mb: 2, mt: 2 }}>
          Board
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>Woo boarding page</Box>
      </Box>
    </Fade>
  );
};