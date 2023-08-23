import { Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import poppy from "../Photos/poppy.png";

export const Contact = () => {
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
          <img src={poppy} width="400px" style={{ borderRadius: "5px" }} />
        </Box>
        <Typography variant="h1" sx={{ mb: 2, mt: 2 }}>
          Contact
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Mailing Address
          </Typography>
          A Refuge for Saving the Wildlife
          <br />
          2720 Dundee Road, Suite #229, Northbrook, Illinois 60062
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Telephone
          </Typography>
          847-509-1026
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Email
          </Typography>
          director@rescuethebirds.org
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Hours
          </Typography>
          For the safety and health of the birds, our facility is not open to the public. All visits
          are by appointment only.
        </Box>
      </Box>
    </Fade>
  );
};
