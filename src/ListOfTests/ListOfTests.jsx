import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

const listOfTests = [
  "Polyoma vaccination or test",
  "Psittacine Beak and Feather",
  "Psittacosis",
  "Fecal - Float",
  "Complete Blood Count (CBC)",
  "Avian Chemistry Panel (including bile acids)",
  "Avian Borna Virus (must be done through the University of Georgia)",
];

export const ListOfTests = () => {
  return (
    <List>
      {listOfTests.map((test) => {
        return (
          <ListItem key={test}>
            <ListItemIcon>
              <MedicalInformationIcon />
            </ListItemIcon>
            <ListItemText>{test}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};
