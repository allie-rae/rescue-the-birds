import { Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import cutetoo3 from "../Photos/cutetoo3.jpg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ListOfTests } from "../ListOfTests";

export const Board = () => {
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
          <img src={cutetoo3} width="400px" />
        </Box>
        <Typography variant="h1" sx={{ mt: 2 }}>
          Board
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Our facility offers world-class safety for your birds, with every bird boarded here
            pre-screened for contagious avian diseases within the last year. We are bonded and
            insured and members of both the National Association of Professional Pet Sitters, NAPPS,
            and Pet Sitters International, PSI.
          </Typography>
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            Pricing
          </Typography>
          <PricingTable />
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            Required testing
          </Typography>
          <ListOfTests />
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Medical records must be faxed to us at (847) 457-1192 prior to drop off. All tests must
            have been performed within the last year. If your bird has come into contact with any
            untested birds since the tests were performed, the test results are null and void and
            the tests must be repeated.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
};

const rows = [
  {
    name: "price",
    xlarge: "$25 / day",
    large: "$20 / day",
    medium: "$15 / day",
    small: "$10 / day",
  },
  {
    name: "description",
    xlarge:
      "Moluccan Cockatoos, Macaws, Greater Sulfur Crested Cockatoos and large Umbrella Cockatoos",
    large: "Amazons, African Greys, Large Conures, Severe Macaws and Lories",
    medium: "Micro/Mini-Macaws and Cockatiels",
    small: "Budgerigars, Canaries, Finches and Lovebirds",
  },
];

export const PricingTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="caption table">
        <caption>
          <strong>Special Diets and/or Medication:</strong> +$3/day
          <br />
          <br />
          <strong>Optional Services:</strong> <br /> Wing Clipping $10 <br /> Beak Trimming $20{" "}
          <br /> Nail Clipping $20 <br />
          Microchipping - AVID Chips $25
        </caption>
        <TableHead>
          <TableRow sx={{ backgroundColor: "primary.main" }}>
            <TableCell sx={{ color: "white" }}>Extra Large Bird</TableCell>
            <TableCell sx={{ color: "white" }}>Large Bird</TableCell>
            <TableCell sx={{ color: "white" }}>Medium Bird</TableCell>
            <TableCell sx={{ color: "white" }}>Small Bird</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.xlarge}
              </TableCell>
              <TableCell>{row.large}</TableCell>
              <TableCell>{row.medium}</TableCell>
              <TableCell>{row.small}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
