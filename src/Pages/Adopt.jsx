import {
  Button,
  Fade,
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
import { Controller, useForm } from "react-hook-form";

export const Adopt = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    mode: "all",
    defaultValues: {
      person_name: "",
      person_dob: "",
      person_email: "",
      person_phone: "",
      person_address: "",
      person_city: "",
      person_state: "",
      person_zipcode: "",
      hear_about_us: "",
      num_household_people: "",
      primary_caregiver_age: "",
      ages_in_household: "",
      children_in_house: "",
      have_other_birds: "no",
      other_bird_species: "",
      other_bird_checkup_date: "",
      other_bird_diet: "",
      previous_birds: "no",
      previous_what_happened: "",
      other_bird_experience: "",
      have_avian_vet: "no",
      vet_name: "",
      vet_clinic_name: "",
      vet_address: "",
      vet_phone: "",
      residence_type: "single-family-house",
    },
  });
  const watchOtherBirds = watch("have_other_birds", "no");
  const watchPreviousBirds = watch("previous_birds", "no");
  const watchAvianVet = watch("have_avian_vet", "no");

  const onSubmit = (data) => {
    const {
      other_bird_species,
      other_bird_checkup_date,
      other_bird_diet,
      previous_what_happened,
      have_avian_vet,
      vet_name,
      vet_clinic_name,
      vet_address,
      vet_phone,
      ...submissionData
    } = data;
    if (data.have_other_birds === "yes") {
      submissionData.have_other_birds = `yes
      ${other_bird_species}
      last checkup: ${other_bird_checkup_date}
      diet: ${other_bird_diet}`;
    }
    if (data.previous_birds === "yes") {
      submissionData.previous_birds = `yes
      ${previous_what_happened}`;
    }
    if (have_avian_vet === "yes") {
      submissionData.avian_vet_info = `${vet_name}
      ${vet_clinic_name}
      ${vet_address}
      ${vet_phone}`;
    } else {
      submissionData.avian_vet_info = "no avian vet";
    }
    // This is where in the future we can send data to the back end
    console.log(submissionData);
  };

  return (
    <Fade
      in={true}
      timeout={400}
    >
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
          <img
            src={tuki}
            height="400px"
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ mt: 2 }}
        >
          Adopt
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography
            variant="body1"
            sx={{ mb: 4, mt: 2 }}
          >
            Thank you for your interest in adopting one of our birds! Our birds&apos; wellbeing is
            our top priority; some have been with us for many years and are loved by everyone at the
            Refuge. We have a process in place to make sure the birds in our care go to a safe,
            happy, and healthy home. Please read all the information below before submitting an
            application.
          </Typography>
          <Typography
            variant="h2"
            sx={{ mb: 2, mt: 2 }}
          >
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
          <Typography
            variant="h2"
            sx={{ mb: 2, mt: 2 }}
          >
            Bird Health
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2 }}
          >
            Every bird in our shelter is tested extensively for contagious avian diseases. This
            medical testing (along with food and shelter) is where our adoption fees come from. If
            you own birds and are approved for adoption, your birds will need to be tested for the
            following:
          </Typography>
          <ListOfTests />
          <Typography
            variant="h2"
            sx={{ mb: 2, mt: 2 }}
          >
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
          <Typography
            variant="h2"
            sx={{ mb: 2, mt: 2 }}
          >
            Adoption Application
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, mt: 2 }}
          >
            Please fill out the below application in its entirety. If questions are skipped or left
            incomplete, your application will be disqualified.
          </Typography>
          <Box sx={{ width: "600px", maxWidth: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  {...register("person_name", { required: "Name is required" })}
                  error={!!errors.person_name?.message}
                  helperText={errors.person_name?.message}
                />
                <TextField
                  id="date-of-birth"
                  label="Date of Birth (MM/DD/YYYY)"
                  variant="outlined"
                  {...register("person_dob", { required: "Date of birth is required" })}
                  error={!!errors.person_dob?.message}
                  helperText={errors.person_dob?.message}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  {...register("person_email", { required: "Email is required" })}
                  error={!!errors.person_email?.message}
                  helperText={errors.person_email?.message}
                />
                <TextField
                  id="phone-number"
                  label="Phone Number"
                  variant="outlined"
                  {...register("person_phone", { required: "Phone number is required" })}
                  error={!!errors.person_phone?.message}
                  helperText={errors.person_phone?.message}
                />
                <TextField
                  id="street-address"
                  label="Street Address"
                  variant="outlined"
                  {...register("person_address", { required: "Street address is required" })}
                  error={!!errors.person_address?.message}
                  helperText={errors.person_address?.message}
                />
                <TextField
                  id="city"
                  label="City"
                  variant="outlined"
                  {...register("person_city", { required: "City is required" })}
                  error={!!errors.person_city?.message}
                  helperText={errors.person_city?.message}
                />
                <TextField
                  id="state"
                  label="State"
                  variant="outlined"
                  {...register("person_state", { required: "State is required" })}
                  error={!!errors.person_state?.message}
                  helperText={errors.person_state?.message}
                />
                <TextField
                  id="zip-code"
                  label="Zip Code"
                  variant="outlined"
                  {...register("person_zipcode", { required: "Zip code is required" })}
                  error={!!errors.person_zipcode?.message}
                  helperText={errors.person_zipcode?.message}
                />
                <TextField
                  id="how-did-you-hear-about-us"
                  label="How did you hear about us?"
                  variant="outlined"
                  {...register("hear_about_us", {
                    required: "Response is required",
                  })}
                  error={!!errors.hear_about_us?.message}
                  helperText={errors.hear_about_us?.message}
                />
                <TextField
                  id="how-many-people-in-household"
                  label="How many people are in your household?"
                  variant="outlined"
                  {...register("num_household_people", { required: "Household size is required" })}
                  error={!!errors.num_household_people?.message}
                  helperText={errors.num_household_people?.message}
                />
                <TextField
                  id="how-old-is-primary-caregiver"
                  label="How old is the primary caregiver?"
                  variant="outlined"
                  {...register("primary_caregiver_age", { required: "Caregiver age is required" })}
                  error={!!errors.primary_caregiver_age?.message}
                  helperText={errors.primary_caregiver_age?.message}
                />
                <TextField
                  id="household-ages"
                  label="What are the ages of everyone in the household?"
                  variant="outlined"
                  {...register("ages_in_household", {
                    required: "Household members' ages are required",
                  })}
                  error={!!errors.ages_in_household?.message}
                  helperText={errors.ages_in_household?.message}
                />
                <TextField
                  id="children-experience-with-birds"
                  label="Are there children in the household? What is their experience with birds?"
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("children_in_house", {
                    required: "Children's experience with birds is required",
                  })}
                  error={!!errors.children_in_house?.message}
                  helperText={errors.children_in_house?.message}
                />
                <FormLabel
                  id="children-in-future"
                  sx={{ fontWeight: "bold" }}
                >
                  Do you currently have other birds in the household?
                </FormLabel>
                <Controller
                  control={control}
                  name="have_other_birds"
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      aria-labelledby="other-birds-in-household-bool"
                      value={value}
                      name={name}
                      onChange={onChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                <TextField
                  id="other-birds-in-household-text"
                  label="If yes, list species and how many"
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("other_bird_species", {
                    required: watchOtherBirds === "yes" ? "Other bird species is required" : false,
                    disabled: watchOtherBirds === "no",
                  })}
                  error={!!errors.other_bird_species?.message}
                  helperText={errors.other_bird_species?.message}
                />
                <TextField
                  id="last-bird-checkup-date"
                  label="If you currently have birds, what was the date of their last annual checkup?"
                  variant="outlined"
                  {...register("other_bird_checkup_date", {
                    required: watchOtherBirds === "yes" ? "Last checkup date is required" : false,
                    disabled: watchOtherBirds === "no",
                  })}
                  error={!!errors.other_bird_checkup_date?.message}
                  helperText={errors.other_bird_checkup_date?.message}
                />
                <TextField
                  id="bird-diet"
                  label="List the current diet that you feed your birds"
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("other_bird_diet", {
                    required: watchOtherBirds === "yes" ? "Other bird diet is required" : false,
                    disabled: watchOtherBirds === "no",
                  })}
                  error={!!errors.other_bird_diet?.message}
                  helperText={errors.other_bird_diet?.message}
                />
                <FormLabel
                  id="previously-owned-birds-bool"
                  sx={{ fontWeight: "bold" }}
                >
                  Have you previously owned a bird or birds that you no longer own?
                </FormLabel>
                <Controller
                  control={control}
                  name="previous_birds"
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      aria-labelledby="previously-owned-birds-bool"
                      value={value}
                      name={name}
                      onChange={onChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                <TextField
                  id="previously-owned-birds-text"
                  label="If yes, what happened to these birds?"
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("previous_what_happened", {
                    required:
                      watchPreviousBirds === "yes" ? "What happened to birds is required" : false,
                    disabled: watchPreviousBirds === "no",
                  })}
                  error={!!errors.previous_what_happened?.message}
                  helperText={errors.previous_what_happened?.message}
                />
                <TextField
                  id="other-bird-experience"
                  label="Please list any other bird experience that you may have"
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("other_bird_experience", {
                    required: "Other bird experience is required",
                  })}
                  error={!!errors.other_bird_experience?.message}
                  helperText={errors.other_bird_experience?.message}
                />
                <FormLabel
                  id="current-veterinarian-bool"
                  sx={{ fontWeight: "bold" }}
                >
                  Do you currently have an avian veterinarian?
                </FormLabel>
                <Controller
                  control={control}
                  name="have_avian_vet"
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      aria-labelledby="current-veterinarian-bool"
                      value={value}
                      name={name}
                      onChange={onChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                <TextField
                  id="veterinarian-name"
                  label="Veterinarian Name"
                  variant="outlined"
                  {...register("vet_name", {
                    required: watchAvianVet === "yes" ? "Veterinarian name is required" : false,
                    disabled: watchAvianVet === "no",
                  })}
                  error={!!errors.vet_name?.message}
                  helperText={errors.vet_name?.message}
                />
                <TextField
                  id="veterinary-clinic-name"
                  label="Veterinarian Clinic Name"
                  variant="outlined"
                  {...register("vet_clinic_name", {
                    required:
                      watchAvianVet === "yes" ? "Veterinarian clinic name is required" : false,
                    disabled: watchAvianVet === "no",
                  })}
                  error={!!errors.vet_clinic_name?.message}
                  helperText={errors.vet_clinic_name?.message}
                />
                <TextField
                  id="veterinary-clinic-address"
                  label="Veterinarian Clinic Address"
                  variant="outlined"
                  {...register("vet_address", {
                    required: watchAvianVet === "yes" ? "Veterinarian address is required" : false,
                    disabled: watchAvianVet === "no",
                  })}
                  error={!!errors.vet_address?.message}
                  helperText={errors.vet_address?.message}
                />
                <TextField
                  id="veterinary-clinic-phone"
                  label="Veterinarian Clinic Phone Number"
                  variant="outlined"
                  {...register("vet_phone", {
                    required:
                      watchAvianVet === "yes" ? "Veterinarian phone number is required" : false,
                    disabled: watchAvianVet === "no",
                  })}
                  error={!!errors.vet_phone?.message}
                  helperText={errors.vet_phone?.message}
                />
                <FormLabel
                  id="residence-type"
                  sx={{ fontWeight: "bold" }}
                >
                  Residence
                </FormLabel>
                <Controller
                  control={control}
                  name="residence_type"
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      aria-labelledby="residence-type"
                      name={name}
                      value={value}
                      onChange={onChange}
                    >
                      <FormControlLabel
                        value="single-family-house"
                        control={<Radio />}
                        label="Single Family House"
                      />
                      <FormControlLabel
                        value="mobile-home"
                        control={<Radio />}
                        label="Mobile Home"
                      />
                      <FormControlLabel
                        value="condo"
                        control={<Radio />}
                        label="Condo"
                      />
                      <FormControlLabel
                        value="shared-housing"
                        control={<Radio />}
                        label="Shared Housing"
                      />
                      <FormControlLabel
                        value="apartment"
                        control={<Radio />}
                        label="Apartment"
                      />
                      <FormControlLabel
                        value="temporary-housing"
                        control={<Radio />}
                        label="Temporary Housing"
                      />
                      <FormControlLabel
                        value="other-housing"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  )}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
