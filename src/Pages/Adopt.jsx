import { Fade, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import took from "../Photos/took.png";
import { ListOfTests } from "../ListOfTests";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RuleIcon from "@mui/icons-material/Rule";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import ArticleIcon from "@mui/icons-material/Article";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CottageIcon from "@mui/icons-material/Cottage";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

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
              <ListItemIcon>
                <AirplanemodeInactiveIcon />
              </ListItemIcon>
              <ListItemText>We do not ship birds</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText>We charge an adoption fee</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiTransportationIcon />
              </ListItemIcon>
              <ListItemText>Out-of-state adoptions are currently suspended</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RuleIcon />
              </ListItemIcon>
              <ListItemText>Not every person who applies will qualify for adoption</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText>
                We do not adopt out loud birds (most of the birds in the shelter) to people living
                in apartments or condos
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText>
                If you already own birds, they will need to be extensively tested for contagious
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
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText>You complete the Adoption Application</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Diversity3Icon />
              </ListItemIcon>
              <ListItemText>
                Once submitted, your application will be reviewed by the Adoption Committee
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIphoneIcon />
              </ListItemIcon>
              <ListItemText>
                If your application is approved, our Adoptions Director will call you for a phone
                interview
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CottageIcon />
              </ListItemIcon>
              <ListItemText>
                If the interview goes well, you will be contacted by a committee member to schedule
                a home visit
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText>
                If the committee member approves of the home visit, you can schedule a visit to the
                Refuge to meet the potential adoptee
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneOutlineIcon />
              </ListItemIcon>
              <ListItemText>
                If there is a good connection between the potential adopter and adoptee, the
                adoption will be approved
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Fade>
  );
};
