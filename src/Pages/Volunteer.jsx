import {
  Button,
  Checkbox,
  Fade,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import took from "../Photos/took.png";

export const Volunteer = () => {
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
        <Typography variant="h1" sx={{ mb: 2, mt: 2 }}>
          Volunteer
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%", marginBottom: "20px" }}>
          Thank you for your interest in volunteering at A Refuge for Saving the Wildlife. We rely
          on volunteers to support our mission and operations every day. You can be a part of our
          life-saving work. By choosing to volunteer your time and talents, you are helping to make
          a difference to all the parrots housed here. Whether caring for parrots, managing
          operations, or cleaning, volunteers are the key to our success. There are many ways you
          can help out at A Refuge for Saving the Wildlife. Continue reading below to find out how!
          <br />
          <br />
          <strong>You must be at least 18 years old to volunteer at the Refuge.</strong>
          <br />
          <br />
          To apply, please fill out the form below. Once you complete the volunteer application,
          your information will be reviewed and you will be contacted by our Volunteer Coordinator.
        </Box>

        <FormControl sx={{ width: "600px", maxWidth: "100%" }}>
          <Stack spacing={2}>
            <TextField id="first-name" label="First Name" variant="outlined" />
            <TextField id="last-name" label="Last Name" variant="outlined" />
            <TextField id="date-of-birth" label="Date of Birth (MM/DD/YYYY)" variant="outlined" />
            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="phone-number" label="Phone Number" variant="outlined" />
            <TextField id="street-address" label="Street Address" variant="outlined" />
            <TextField id="city" label="City" variant="outlined" />
            <TextField id="state" label="State" variant="outlined" />
            <TextField id="zip-code" label="Zip Code" variant="outlined" />
            <TextField id="drivers-license" label="Driver's License Number" variant="outlined" />
            <TextField
              id="emergency-contact"
              label="Emergency Contact: Name, Relationship, Address, and Phone Number"
              variant="outlined"
              multiline
              minRows={4}
            />
            <TextField
              id="days-hours-preferred"
              label="Days / Hours Preferred"
              variant="outlined"
            />
            <TextField
              id="special-skills"
              label="Special Skills (e.g. computer programming, word processing, etc.)"
              variant="outlined"
              multiline
              minRows={4}
            />
            <TextField
              id="bird-experience"
              label="A brief synopsis of your bird experience"
              variant="outlined"
              multiline
              minRows={4}
            />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              List three references that have known you for over five years. Please do not include
              more than one relative.
            </Typography>
            <TextField
              id="reference-one"
              label="Reference One: Name, Relationship, Address, and Phone Number"
              variant="outlined"
              multiline
              minRows={4}
            />
            <TextField
              id="reference-two"
              label="Reference Two: Name, Relationship, Address, and Phone Number"
              variant="outlined"
              multiline
              minRows={4}
            />
            <TextField
              id="reference-three"
              label="Reference Three: Name, Relationship, Address, and Phone Number"
              variant="outlined"
              multiline
              minRows={4}
            />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Areas of interest:
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Bird care at the Refuge" />
              <FormHelperText>
                Socializing, playing, handling of animals, feeding, cutting fruits & veggies, making
                warm meals, rotating toys, grooming, cleaning cages, changing cage paper, cleaning
                pet care areas, etc.
              </FormHelperText>

              <FormControlLabel control={<Checkbox />} label="Tech support" />
              <FormHelperText>
                Web development using JavaScript/React, general tech support.
              </FormHelperText>

              <FormControlLabel control={<Checkbox />} label="Fostering in your home" />
              <FormHelperText>
                Having one of our adoptees in your home for socializing. A separate application must
                be filled out for each foster bird in addition to this application. If you are
                fostering for the Refuge, the Refuge maintains legal custody of the foster bird(s).
                You will be expected to take care of all the needs of the bird(s), which will
                include food, medicine, veterinary care, toys, etc., without remuneration. If you
                need financial assistance in caring for the bird(s), we will provide you with the
                necessary funds. In agreeing to foster, you will not be reimbursed for expenses
                after the fact unless there has been an agreement with the Executive Director. If
                the Executive Director determines that it is in the best interest of the bird, the
                bird(s) will be returned upon demand of the Executive Director. If the Refuge needs
                to take legal action to obtain the bird(s), you, as the volunteer, will reimburse
                the Refuge for any and all expenses related to regaining custody of said bird(s).
              </FormHelperText>

              <FormControlLabel control={<Checkbox />} label="Fundraising" />
              <FormHelperText>
                Phone calls, letters, personal contact with potential sources of funding, grant
                writing.
              </FormHelperText>
              <FormControlLabel control={<Checkbox />} label="Pet taxi" />
              <FormHelperText>
                Pick up and delivery of birds to fundraising events and vet’s office. You will need
                to provide proof of a valid license & auto insurance.
              </FormHelperText>
              <FormControlLabel control={<Checkbox />} label="Home inspection" />
              <FormHelperText>
                Provide pre-adoption/post-adoption in-home inspections to determine compliance with
                proper bird care practices. Please note what distance you would be willing to travel
                to perform these inspections.
              </FormHelperText>
              <FormControlLabel control={<Checkbox />} label="Newsletter" />
              <FormHelperText>
                Write or obtain articles for publication in a newsletter. This can be done from your
                home if desired.
              </FormHelperText>
            </FormGroup>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Fade>
  );
};
