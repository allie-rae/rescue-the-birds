import { FormLabel, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export const AddedBirdsList = ({ birdNames }) => {
  if (!birdNames.length) return null;
  return (
    <>
      <FormLabel
        id="emergency-agreement"
        sx={{ fontWeight: "bold" }}
      >
        {birdNames.length === 1 ? "Bird" : "Birds"} added:
      </FormLabel>
      <List>
        {birdNames.map((name) => {
          return (
            <ListItem key={name}>
              <ListItemIcon>
                <TaskAltIcon color="success" />
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
