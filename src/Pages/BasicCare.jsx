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
      <Box sx={{ width: "600px", maxWidth: "100%" }}>
        <BasicCareListComponent
          title="Cage Specifications"
          list={[
            { title: "Minimum cage size:", fact: `30" x 18" x 18 for 1 or 2 birds"` },
            { title: "Maximum bar gap:", fact: `1/2"` },
            { title: "Cage shape:", fact: `Rectangular preferred; Round cages are not ideal` },
            { title: "Wooden cage?", fact: `No` },
          ]}
        />
        <BasicCareListComponent
          title="Diet"
          list={[
            { title: "Pellets:", fact: `Unlimited access` },
            { title: "Veggies:", fact: `Daily` },
            { title: "Seeds:", fact: `1.5-2 level teaspoons per bird daily` },
            {
              title: "Spray millet:",
              fact: `Good for training treats -- not part of regular diet`,
            },
            { title: "Water:", fact: `Refresh daily` },
            { title: "Cuttlebone:", fact: `Unlimited access` },
            { title: "Mineral block:", fact: `Unlimited access` },
            {
              title: "Supplements:",
              fact: `Milk thistle extract formulated for birds, probiotics, egg with shell or commercially made egg food for birds`,
            },
          ]}
        />
        <BasicCareListComponent
          title="Perches"
          list={[
            {
              title: "Natural perches of varying diameters?",
              fact: `Yes, made from non-toxic trees or shrubs`,
            },
            { title: "Calcium perches?", fact: `Yes` },
            { title: "Rope perches?", fact: `Only if no fibers are ingested` },
            { title: "Dowel perches?", fact: `Not preferred` },
            { title: "Plastic perches?", fact: `Not preferred` },
            { title: "Sandpaper perches?", fact: `No -- unsafe` },
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
            {
              title: "Toys meant for shredding?",
              fact: `Yes, but keep in mind this can make a bird hormonal`,
            },
            { title: "Swings?", fact: `Yes` },
            { title: "Ladders?", fact: `Yes` },
            { title: "Foraging toys?", fact: `Yes` },
            {
              title: "Rope toys?",
              fact: `Only if tassels are removed and no fibers are ingested`,
            },
            {
              title: "Lava rock / pumice stone toys?",
              fact: `Only if rock is not being ingested`,
            },
            {
              title: "Bells?",
              fact: `Yes, except for jingle bells -- they can cause budgie's beak and toes to get stuck`,
            },
            {
              title: "Mirrors?",
              fact: `Only if budgie is not obsessed / regurgitating / attempting to mate with reflection. Males and single birds are more prone to unhealthy obsession`,
            },
            {
              title: "Nests, half coconuts, hutches?",
              fact: `No -- anything resembling a nest can cause territorial aggression`,
            },
          ]}
        />
        <BasicCareListComponent
          title="Recommendations"
          list={[
            {
              title: "Cages:",
              fact: `Prevue F040, F050, and SPF0610 flight cages, Yaheetech 69-Inch Extra Large Bird Cage`,
            },
            {
              title: "Pellets:",
              fact: `Harrison's Bird Foods High Potency Super Fine, RoudyBush Daily Maintenance Bird Food`,
            },
            { title: "Seeds:", fact: `Dr. Harvey's Our Best Parakeet Food` },
            { title: "Mineral Block:", fact: `Manu mineral block` },
            { title: "UV Lighting:", fact: `Zoo Med AvianSun 5.0 UVB Compact Fluorescent Bulb` },
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
