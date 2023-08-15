import { AppBar, Box, Typography } from "@mui/material";
import dunAndBradstreetVerified from "../Branding/dandb-verified-seal.png";

export const Footer = () => {
  return (
    <AppBar
      position="relative"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        paddingTop: "15px",
        paddingBottom: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <a href="https://www.dandb.com/verified/business/567690193/" target="_blank" rel="noreferrer">
        <img src={dunAndBradstreetVerified} />
      </a>
      <Box
        sx={{
          maxWidth: "700px",
        }}
      >
        <Typography variant="body2" color="inherit" sx={{ textAlign: "center" }}>
          © 2023 a Refuge for Saving the Wildlife. All rights reserved. <br />a Refuge for Saving
          the Wildlife is a 501(c)(3) nonprofit organization. All contributions to a Refuge for
          Saving the Wildlife are tax-deductible to the full extent allowed by law. Our tax
          identification number is 36-4308066.
        </Typography>
      </Box>
    </AppBar>
  );
};
