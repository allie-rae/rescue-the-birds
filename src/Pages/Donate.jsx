import { Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import mango from "../Photos/mango.png";
import { Link } from "@mui/material";
import { pageFadeTimeout, pageWidth, parrotImageStyling } from "../constants";

export const Donate = () => {
  return (
    <Fade
      in={true}
      timeout={pageFadeTimeout}
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
            src={mango}
            style={parrotImageStyling}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ mb: 2, mt: 2 }}
        >
          Donate
        </Typography>
        <Box sx={{ width: pageWidth, maxWidth: "100%" }}>
          Thank you so much for your interest in donating. Each animal in our shelter is given the
          very best avian veterinary care whenver it&apos;s needed, a healthy diet, a clean, safe
          enclosure, regular beak and nail filings, and plenty of enrichment so they can live
          happily while they&apos;re with us at the Refuge.
          <Typography
            variant="h2"
            sx={{ mt: 2, mb: 2 }}
          >
            Amazon Wishlist
          </Typography>
          The birds went window shopping and picked out some of their favorite things. You can find
          them on our{" "}
          <Link
            href="https://www.amazon.com/hz/wishlist/ls/1YMMJ3VB5032X/ref=hz_ls_biz_ex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the Refuge's Amazon Wish List (opens in a new tab)"
          >
            Amazon Wishlist
          </Link>
          !
          {/* TODO: check with Rich re: how much it costs to care for one bird/month. 
          It costs $65 a month to care for one bird. We have between 50-80 birds at all times. The
          animals in our care depend on the generosity of our community; without donors like you, we
          would not be able to keep the lights on or the water running. */}
        </Box>
      </Box>
    </Fade>
  );
};
