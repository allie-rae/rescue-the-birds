import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const rows = [
  {
    name: "price",
    xlarge: "$35 / day",
    large: "$25 / day",
    medium: "$20 / day",
    small: "$16 / day",
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
      <Table
        sx={{ minWidth: 600 }}
        aria-label="caption table"
      >
        <caption>
          <strong>Specialty Diets (anything other than the Refuge&apos;s diet):</strong> +$2/day{" "}
          <br />
          <br />
          <strong>Medications:</strong> +$4/day for the first two meds, $1/day each additional med
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
              <TableCell
                component="th"
                scope="row"
              >
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
