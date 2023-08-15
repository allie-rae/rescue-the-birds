import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import rose from "../Photos/rose.jpg";

export const Donate = () => {
  return (
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
      <Box sx={{ overflowX: "hidden", width: "100vw", display: "flex", justifyContent: "center" }}>
        <img src={rose} width="400px" />
      </Box>
      <Typography variant="h1" sx={{ mb: 2, mt: 2 }}>
        Donate
      </Typography>
      <Box sx={{ width: "600px", maxWidth: "100%" }}>Woo donation page</Box>
    </Box>
  );
};
