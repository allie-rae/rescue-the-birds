import { Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import mango from "../Photos/mango.png";

export const Donate = () => {
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
          <img src={mango} width="400px" />
        </Box>
        <Typography variant="h1" sx={{ mb: 2, mt: 2 }}>
          Donate
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>Coming soon</Box>
      </Box>
    </Fade>
  );
};
