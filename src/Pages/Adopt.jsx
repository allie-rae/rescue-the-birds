import {
  Button,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import tuki from "../Photos/tuki.png";
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
import FactCheckIcon from "@mui/icons-material/FactCheck";

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
          <img src={tuki} width="400px" style={{ borderRadius: "5px" }} />
        </Box>
        <Typography variant="h1" sx={{ mt: 2 }}>
          Adopt
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Thank you for your interest in adopting one of our birds! Our birds&apos; wellbeing is
            our top priority; some have been with us for many years and are loved by everyone at the
            Refuge. We have a process in place to make sure the birds in our care go to a safe,
            happy, and healthy home. Please read all the information below before submitting an
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
            <ListItem>
              <ListItemIcon>
                <FactCheckIcon />
              </ListItemIcon>
              <ListItemText>You must be at least 18 years old to adopt a bird from us</ListItemText>
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
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
            Adoption Application
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Please fill out the below application in its entirety. If questions are skipped or left
            incomplete, your application will be disqualified.
          </Typography>
          <FormControl sx={{ width: "600px", maxWidth: "100%" }}>
            <Stack spacing={2}>
              <TextField id="name" label="Name" variant="outlined" />
              <TextField id="date-of-birth" label="Date of Birth (MM/DD/YYYY)" variant="outlined" />
              <TextField id="email" label="Email" variant="outlined" />
              <TextField id="phone-number" label="Phone Number" variant="outlined" />
              <TextField id="street-address" label="Street Address" variant="outlined" />
              <TextField id="city" label="City" variant="outlined" />
              <TextField id="state" label="State" variant="outlined" />
              <TextField id="zip-code" label="Zip Code" variant="outlined" />
              <TextField
                id="how-did-you-hear-about-us"
                label="How did you hear about us?"
                variant="outlined"
              />
              <TextField
                id="how-many-people-in-household"
                label="How many people are in your household?"
                variant="outlined"
              />
              <TextField
                id="how-old-is-primary-caregiver"
                label="How old is the primary caregiver?"
                variant="outlined"
              />
              <TextField
                id="household-ages"
                label="What are the ages of everyone in the household?"
                variant="outlined"
              />
              <TextField
                id="children-experience-with-birds"
                label="Are there children in the household? What is their experience with birds?"
                variant="outlined"
                multiline
                minRows={4}
              />
              <FormLabel id="children-in-future" sx={{ fontWeight: "bold" }}>
                Do you currently have other birds in the household?
              </FormLabel>
              <RadioGroup
                aria-labelledby="other-birds-in-household-bool"
                defaultValue="no"
                name="other-birds-in-household-bool-radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <TextField
                id="other-birds-in-household-text"
                label="If yes, list species and how many"
                variant="outlined"
                multiline
                minRows={4}
              />
              <TextField
                id="last-bird-checkup-date"
                label="If you currently have birds, what was the date of their last annual checkup?"
                variant="outlined"
              />
              <TextField
                id="bird-diet"
                label="List the current diet that you feed your birds"
                variant="outlined"
                multiline
                minRows={4}
              />
              <FormLabel id="previously-owned-birds-bool" sx={{ fontWeight: "bold" }}>
                Have you previously owned a bird or birds that you no longer own?
              </FormLabel>
              <RadioGroup
                aria-labelledby="previously-owned-birds-bool"
                defaultValue="no"
                name="previously-owned-birds-bool-radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <TextField
                id="previously-owned-birds-text"
                label="If yes, what happened to these birds?"
                variant="outlined"
                multiline
                minRows={4}
              />
              <TextField
                id="other-bird-experience"
                label="Please list any other bird experience that you may have"
                variant="outlined"
                multiline
                minRows={4}
              />
              <FormLabel id="current-veterinarian-bool" sx={{ fontWeight: "bold" }}>
                Do you currently have an avian veterinarian?
              </FormLabel>
              <RadioGroup
                aria-labelledby="current-veterinarian-bool"
                defaultValue="yes"
                name="current-veterinarian-bool-radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <TextField id="veterinarian-name" label="Veterinarian Name" variant="outlined" />
              <TextField
                id="veterinary-clinic-name"
                label="Veterinarian Clinic Name"
                variant="outlined"
              />
              <TextField
                id="veterinary-clinic-address"
                label="Veterinarian Clinic Address"
                variant="outlined"
              />
              <TextField
                id="veterinary-clinic-phone"
                label="Veterinarian Clinic Phone Number"
                variant="outlined"
              />
              <FormLabel id="residence-type" sx={{ fontWeight: "bold" }}>
                Residence
              </FormLabel>
              <RadioGroup
                aria-labelledby="residence-type"
                defaultValue="single-family-house"
                name="residence-type-radio-buttons-group"
              >
                <FormControlLabel
                  value="single-family-house"
                  control={<Radio />}
                  label="Single Family House"
                />
                <FormControlLabel value="mobile-home" control={<Radio />} label="Mobile Home" />
                <FormControlLabel value="condo" control={<Radio />} label="Condo" />
                <FormControlLabel
                  value="shared-housing"
                  control={<Radio />}
                  label="Shared Housing"
                />
                <FormControlLabel value="apartment" control={<Radio />} label="Apartment" />
                <FormControlLabel
                  value="temporary-housing"
                  control={<Radio />}
                  label="Temporary Housing"
                />
                <FormControlLabel value="other-housing" control={<Radio />} label="Other" />
              </RadioGroup>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Box>
    </Fade>
  );
};
