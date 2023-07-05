import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BasicCare = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 3,
        marginBottom: 3,
        paddingLeft: 1,
        paddingRight: 1,
        maxWidth: "100%",
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Budgie Fact Sheet
      </Typography>
      <Typography variant="h6">Cage Specifications</Typography>
      <Typography variant="body1">
        <ul>
          <li>
            <strong>Minimum cage size:</strong> 30&quot; x 18&quot; x 18&quot;
          </li>
          <li>
            <strong>Maximum bar gap:</strong> 1/2&quot;
          </li>
          <li>
            <strong>Horizontal bars preferred?</strong> Yes
          </li>
          <li>
            <strong>Corners preferred?</strong> Yes
          </li>
          <li>
            <strong>Wooden cage?</strong> No
          </li>
        </ul>
      </Typography>
      <Typography variant="h6">Diet</Typography>
      <Typography variant="body1">
        <ul>
          <li>
            <strong>Pellets:</strong> Unlimited access
          </li>
          <li>
            <strong>Veggies:</strong> Daily
          </li>
          <li>
            <strong>Seeds:</strong> 1.5-2 level teaspoons per bird daily
          </li>
          <li>
            <strong>Supplements:</strong> milk thistle, probiotics
          </li>
        </ul>
      </Typography>
    </Box>
  );
};
