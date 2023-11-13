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
          <img src={mango} width="400px" style={{ borderRadius: "5px" }} />
        </Box>
        <Typography variant="h1" sx={{ mb: 2, mt: 2 }}>
          Donate
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Thank you so much for your interest in donating. Each animal in our shelter is given the
            very best avian veterinary care whenver it&apos;s needed, a healthy diet, a clean, safe
            enclosure, regular beak and nail filings, and plenty of enrichment so they can live
            happily while they&apos;re with us at the Refuge.
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
            Spread joy to our feathered friends
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Explore our{" "}
            <a href="https://www.amazon.com/hz/wishlist/ls/1YMMJ3VB5032X/ref=hz_ls_biz_ex">
              Amazon Wish List
            </a>{" "}
            and directly contribute to the well-being of our avian companions. From treats to
            shelter essentials, your generosity ensures a life of comfort, health, and happiness.
            Join us in creating a sanctuary where every wing flap echoes with gratitude. Be a part
            of transforming wishes into reality. Thank you for making a difference!
          </Typography>
          <br />
          <br />
          {/* TODO: check with Rich re: how much it costs to care for one bird/month. 
          It costs $65 a month to care for one bird. We have between 50-80 birds at all times. The
          animals in our care depend on the generosity of our community; without donors like you, we
          would not be able to keep the lights on or the water running. */}
        </Box>
      </Box>
    </Fade>
  );
};
