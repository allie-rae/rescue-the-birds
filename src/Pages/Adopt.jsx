import { Fade, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import took from "../Photos/took.jpg";
import { ListOfTests } from "../ListOfTests";

export const Adopt = () => {
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
          <img src={took} width="400px" />
        </Box>
        <Typography variant="h1" sx={{ mt: 2 }}>
          Adopt
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Thank you for your interest in adopting one of our birds! Our birds&apos; wellbeing is
            our top priority; some have been with us for many years and are loved by everyone at the
            Refuge. We have a process in place to make sure the birds in our care go to a safe,
            happy, and healthy home. Please read all of the information below before submitting an
            application.
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
            Things to know before applying
          </Typography>
          <List>
            <ListItem>
              <ListItemText>1. We do not ship birds</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>2. We charge an adoption fee</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>3. Out-of-state adoptions are currently suspended</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>4. Not every person who applies will qualify for adoption</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                5. We do not adopt out loud birds (most of the birds in the shelter) to people
                living in apartments or condos
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                6. If you already own birds, they will need to be extensively tested for contagious
                avian diseases prior to an adoption (approximate cost: $500 per bird)
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
            Bird Health
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Every bird in our shelter is tested extensively for contagious avian diseases. This
            medical testing (along with food and shelter) is where our adoption fees come from. If
            you own birds and are approved for adoption, your birds will need to be tested for the
            following:
          </Typography>
          <ListOfTests />
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
            The Adoption Process
          </Typography>
          <List>
            <ListItem>
              <ListItemText>1. You complete the Adoption Application</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                2. Once submitted, your application will be reviewed by the Adoption Committee
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                3. If your application is approved, our Adoptions Director will call you for a phone
                interview
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                4. If the interview goes well, you will be contacted by a committee member to
                schedule a home visit
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                5. If the committee member approves of the home visit, you will need to schedule a
                visit to the Refuge to meet the potential adoptee
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                6. If there is a good connection between the potential adopter and adoptee, the
                adoption will be approved
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Fade>
  );
};
