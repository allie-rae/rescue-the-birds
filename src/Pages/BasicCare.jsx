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
        paddingLeft: 2,
        paddingRight: 2,
        maxWidth: "100%",
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Budgie Fact Sheet
      </Typography>
      <Box sx={{ width: "500px", maxWidth: "100%" }}>
        <BasicCareListComponent
          title="Cage Specifications"
          list={[
            { title: "Minimum cage size:", fact: `30" x 18" x 18"` },
            { title: "Maximum bar gap:", fact: `1/2"` },
            { title: "Horizontal bars preferred?", fact: `Yes` },
            { title: "Corners preferred?", fact: `Yes` },
            { title: "Wooden cage?", fact: `No` },
          ]}
        />
        <BasicCareListComponent
          title="Diet"
          list={[
            { title: "Pellets:", fact: `Unlimited access` },
            { title: "Veggies:", fact: `Daily` },
            { title: "Seeds:", fact: `1.5-2 level teaspoons per bird daily` },
            { title: "Water:", fact: `Refresh daily` },
            { title: "Cuttlebone:", fact: `Unlimited access` },
            { title: "Mineral block:", fact: `Unlimited access` },
            { title: "Supplements:", fact: `Milk thistle, probiotics, egg with shell` },
          ]}
        />
        <BasicCareListComponent
          title="Perches"
          list={[
            { title: "Natural perches of varying diameters?", fact: `Yes` },
            { title: "Calcium perches?", fact: `Yes` },
            { title: "Rope perches?", fact: `Only if no fibers are ingested` },
            { title: "Dowel perches?", fact: `Not preferred` },
            { title: "Plastic perches?", fact: `Not preferred` },
            { title: "Sand paper perches?", fact: `No -- unsafe` },
          ]}
        />
        <BasicCareListComponent
          title="UV Lighting"
          list={[
            { title: "UVA:", fact: `Allows budgies to see more colors` },
            { title: "UVB:", fact: `Enables vitamin D3 production, helps calcium metabolism` },
          ]}
        />
        <BasicCareListComponent
          title="Toys"
          list={[
            { title: "Do budgies need a variety of toys?", fact: `Yes` },
            { title: "Should toys be rotated to prevent boredom?", fact: `Yes` },
            { title: "Wooden chew toys?", fact: `Yes, if wood is budgie-safe` },
            { title: "Toys meant for shredding?", fact: `Yes` },
            { title: "Swings?", fact: `Yes` },
            { title: "Ladders?", fact: `Yes` },
            { title: "Foraging toys?", fact: `Yes` },
            {
              title: "Rope toys?",
              fact: `Only if tassles are removed and no fibers are ingested`,
            },
            {
              title: "Bells?",
              fact: `Yes, but not jingle bells -- they can cause budgie's beak and toes to get stuck`,
            },
            {
              title: "Mirrors?",
              fact: `Only if budgie is not obsessed / regurgitating / attempting to mate with reflection`,
            },
            {
              title: "Very hard wooden toys?",
              fact: `No -- give budgies soft wooden toys so they can shred them`,
            },
            {
              title: "Nests, half coconuts, hutches?",
              fact: `No -- anything resembling a nest can cause territorial aggression`,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

const BasicCareListComponent = ({ title, list }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">
        <ul>
          {list.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong> {item.fact}
            </li>
          ))}
        </ul>
      </Typography>
    </>
  );
};
