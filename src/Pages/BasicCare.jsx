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
      <Box sx={{ width: "500px", maxWidth: "100%" }}>
        <BasicCareListComponent
          title="Cage Specifications"
          list={[
            { title: "Minimum cage size", fact: `30" x 18" x 18"` },
            { title: "Maximum bar gap", fact: `1/2"` },
            { title: "Horizontal bars preferred?", fact: `Yes` },
            { title: "Corners preferred?", fact: `Yes` },
            { title: "Wooden cage?", fact: `No` },
          ]}
        />
        <BasicCareListComponent
          title="Diet"
          list={[
            { title: "Pellets", fact: `Unlimited access` },
            { title: "Veggies", fact: `Daily` },
            { title: "Seeds", fact: `1.5-2 level teaspoons per bird daily` },
            { title: "Water", fact: `Refresh daily` },
            { title: "Supplements", fact: `Milk thistle, probiotics` },
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
              <strong>{item.title}:</strong> {item.fact}
            </li>
          ))}
        </ul>
      </Typography>
    </>
  );
};
