import { Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import prince from "../Photos/prince.png";

export const FrontPage = () => {
  return (
    <Fade
      in={true}
      timeout={400}
    >
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
          <img
            src={prince}
            height="400px"
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ mb: 2, mt: 2 }}
        >
          Welcome to the Refuge
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          A Refuge for Saving the Wildlife is a no-kill parrot rescue, rehabilitation, education and
          adoption shelter. We provide a safe place for parrots that have to be re-homed due to
          unfortunate situations that sometimes arise. Most of them were loved dearly and cared for,
          and when that was no longer possible, their companion-people did the most selfless act of
          kindness in finding them a good home. <br />
          <br />
          We work together with other parrot groups to eliminate the need for rescues. Until then,
          we will provide temporary housing and care for any and all Psittacine birds (not including
          those with fatal and/or contagious diseases); educate the public about the proper care of
          exotic birds; and locate healthy, happy, and nurturing homes for those that are eligible.
          <br />
          <br />
          The Refuge is established with the Internal Revenue Service as a 501(c)3 charitable
          corporation. We are licensed by the Illinois Department of Agriculture, Bureau of Animal
          Welfare to provide for adoptions. We are also a member of the Society of Animal Welfare
          Administrators.
        </Box>
      </Box>
    </Fade>
  );
};
