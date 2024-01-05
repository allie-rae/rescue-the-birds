import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  FormHelperText,
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
    clearErrors,
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
      have_other_birds: "No",
      other_bird_species: "",
      other_bird_checkup_date: "",
      other_bird_diet: "",
      previous_birds: "No",
      previous_what_happened: "",
      other_bird_experience: "",
      have_avian_vet: "No",
      vet_name: "",
      vet_clinic_name: "",
      vet_address: "",
      vet_phone: "",
      residence_type: "Single Family House",
      renter_verification: "Not yet",
      weekend_different: "No",
      weekend_routine: "",
      bird_hours_alone: "",
      smokers_in_house: "No",
      smokers_explanation: "",
      other_pets_in_home: "No",
      what_other_pets: "",
      what_supp_info: "",
      lifestyle_changes: "",
      vacation_care: "",
      death_plans: "",
      looking_for_in_bird: "",
      additional_comments: "",
      home_address_agreement: false,
      home_visit_agreement: false,
      no_guarantee_agreement: false,
    },
  });
  const watchOtherBirds = watch("have_other_birds", "No");
  const watchPreviousBirds = watch("previous_birds", "No");
  const watchAvianVet = watch("have_avian_vet", "No");
  const watchWeekendDifferent = watch("weekend_different", "No");
  const watchSmokersInHouse = watch("smokers_in_house", "No");
  const watchOtherPets = watch("other_pets_in_home", "No");

  const onSubmit = (data) => {
    for (const key of [
      "home_address_agreement",
      "home_visit_agreement",
      "no_guarantee_agreement",
    ]) {
      delete data[key];
    }
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
      weekend_different,
      smokers_explanation,
      what_other_pets,
      ...submissionData
    } = data;
    if (data.have_other_birds === "Yes") {
      submissionData.have_other_birds = `Yes\nSpecies: ${other_bird_species}\nLast Checkup: ${other_bird_checkup_date}\nDiet: ${other_bird_diet}`;
    }
    if (data.previous_birds === "Yes") {
      submissionData.previous_birds = `Yes\nWhat Happened: ${previous_what_happened}`;
    }
    if (have_avian_vet === "Yes") {
      submissionData.avian_vet_info = `Vet: ${vet_name}\nClinic: ${vet_clinic_name}\nAddress: ${vet_address}\nPhone: ${vet_phone}`;
    } else {
      submissionData.avian_vet_info = "No avian vet";
    }
    if (weekend_different === "No") {
      submissionData.weekend_routine = "Same as daily routine";
    }
    if (data.smokers_in_house === "Yes") {
      submissionData.smokers_in_house = `Yes\nExplanation: ${smokers_explanation}`;
    }
    if (data.other_pets_in_home === "Yes") {
      submissionData.other_pets_in_home = `Yes.\nOther Pets: ${what_other_pets}`;
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
              <Typography
                variant="h3"
                sx={{ mb: 2 }}
              >
                General Info
              </Typography>
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
              </Stack>
              <Typography
                variant="h3"
                sx={{ mb: 2, mt: 4 }}
              >
                Household
              </Typography>
              <Stack spacing={2}>
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
              </Stack>
              <Typography
                variant="h3"
                sx={{ mb: 2, mt: 4 }}
              >
                Bird Experience
              </Typography>
              <Stack spacing={2}>
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
                      onChange={(event) => {
                        clearErrors([
                          "other_bird_species",
                          "other_bird_checkup_date",
                          "other_bird_diet",
                        ]);
                        onChange(event);
                      }}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                {watchOtherBirds === "Yes" && (
                  <Fade
                    in={true}
                    timeout={250}
                  >
                    <Stack spacing={2}>
                      <TextField
                        id="other-birds-in-household-text"
                        label="If yes, list species and how many"
                        variant="outlined"
                        multiline
                        minRows={4}
                        {...register("other_bird_species", {
                          required: "Species is required",
                        })}
                        error={!!errors.other_bird_species?.message}
                        helperText={errors.other_bird_species?.message}
                      />
                      <TextField
                        id="last-bird-checkup-date"
                        label="If you currently have birds, what was the date of their last annual checkup?"
                        variant="outlined"
                        {...register("other_bird_checkup_date", {
                          required: "Last checkup date is required",
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
                          required: "Current diet is required",
                        })}
                        error={!!errors.other_bird_diet?.message}
                        helperText={errors.other_bird_diet?.message}
                      />
                    </Stack>
                  </Fade>
                )}
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
                      onChange={(event) => {
                        clearErrors("previous_what_happened");
                        onChange(event);
                      }}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                {watchPreviousBirds === "Yes" && (
                  <Fade
                    in={true}
                    timeout={250}
                  >
                    <TextField
                      id="previously-owned-birds-text"
                      label="If yes, what happened to these birds?"
                      variant="outlined"
                      multiline
                      minRows={4}
                      {...register("previous_what_happened", {
                        required: "What happened to birds is required",
                      })}
                      error={!!errors.previous_what_happened?.message}
                      helperText={errors.previous_what_happened?.message}
                    />
                  </Fade>
                )}
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
                      onChange={(event) => {
                        clearErrors(["vet_name", "vet_clinic_name", "vet_address", "vet_phone"]);
                        onChange(event);
                      }}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                {watchAvianVet === "Yes" && (
                  <Fade
                    in={true}
                    timeout={250}
                  >
                    <Stack spacing={2}>
                      <TextField
                        id="veterinarian-name"
                        label="Veterinarian Name"
                        variant="outlined"
                        {...register("vet_name", {
                          required: "Veterinarian name is required",
                        })}
                        error={!!errors.vet_name?.message}
                        helperText={errors.vet_name?.message}
                      />
                      <TextField
                        id="veterinary-clinic-name"
                        label="Veterinarian Clinic Name"
                        variant="outlined"
                        {...register("vet_clinic_name", {
                          required: "Veterinarian clinic name is required",
                        })}
                        error={!!errors.vet_clinic_name?.message}
                        helperText={errors.vet_clinic_name?.message}
                      />
                      <TextField
                        id="veterinary-clinic-address"
                        label="Veterinarian Clinic Address"
                        variant="outlined"
                        {...register("vet_address", {
                          required: "Veterinarian address is required",
                        })}
                        error={!!errors.vet_address?.message}
                        helperText={errors.vet_address?.message}
                      />
                      <TextField
                        id="veterinary-clinic-phone"
                        label="Veterinarian Clinic Phone Number"
                        variant="outlined"
                        {...register("vet_phone", {
                          required: "Veterinarian phone number is required",
                        })}
                        error={!!errors.vet_phone?.message}
                        helperText={errors.vet_phone?.message}
                      />
                    </Stack>
                  </Fade>
                )}
              </Stack>
              <Typography
                variant="h3"
                sx={{ mb: 2, mt: 4 }}
              >
                Environment
              </Typography>
              <Stack spacing={2}>
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
                        value="Single Family House"
                        control={<Radio />}
                        label="Single Family House"
                      />
                      <FormControlLabel
                        value="Mobile Home"
                        control={<Radio />}
                        label="Mobile Home"
                      />
                      <FormControlLabel
                        value="Condo"
                        control={<Radio />}
                        label="Condo"
                      />
                      <FormControlLabel
                        value="Shared Housing"
                        control={<Radio />}
                        label="Shared Housing"
                      />
                      <FormControlLabel
                        value="Apartment"
                        control={<Radio />}
                        label="Apartment"
                      />
                      <FormControlLabel
                        value="Temporary Housing"
                        control={<Radio />}
                        label="Temporary Housing"
                      />
                      <FormControlLabel
                        value="Other Housing"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  )}
                />
                <FormLabel
                  id="renter-verification"
                  sx={{ fontWeight: "bold" }}
                >
                  If you are renting, have you verified with landlord that birds are allowed and
                  that you have a pet deposit?
                </FormLabel>
                <Controller
                  control={control}
                  name="renter_verification"
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      aria-labelledby="renter-verification"
                      value={value}
                      name={name}
                      onChange={onChange}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                      <FormControlLabel
                        value="Not yet"
                        control={<Radio />}
                        label="Not yet"
                      />
                    </RadioGroup>
                  )}
                />
                <TextField
                  id="daily-routine"
                  label="Describe your daily routine at home"
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("daily_routine", { required: "Daily routine is required" })}
                  error={!!errors.daily_routine?.message}
                  helperText={errors.daily_routine?.message}
                />
                <FormLabel
                  id="weekend-different-bool"
                  sx={{ fontWeight: "bold" }}
                >
                  Does your routine differ on weekends?
                </FormLabel>
                <Controller
                  control={control}
                  name="weekend_different"
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      aria-labelledby="weekend-different-bool"
                      value={value}
                      name={name}
                      onChange={(event) => {
                        clearErrors("weekend_routine");
                        onChange(event);
                      }}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                {watchWeekendDifferent === "Yes" && (
                  <Fade
                    in={true}
                    timeout={250}
                  >
                    <TextField
                      id="weekend-routine"
                      label="If yes, please explain"
                      variant="outlined"
                      multiline
                      minRows={4}
                      {...register("weekend_routine", {
                        required: "Weekend routine is required",
                      })}
                      error={!!errors.weekend_routine?.message}
                      helperText={errors.weekend_routine?.message}
                    />
                  </Fade>
                )}
                <TextField
                  id="bird-hours-alone"
                  label="How many hours a day will your bird spend alone?"
                  variant="outlined"
                  {...register("bird_hours_alone", { required: "Hours alone is required" })}
                  error={!!errors.bird_hours_alone?.message}
                  helperText={errors.bird_hours_alone?.message}
                />
                <FormLabel
                  id="smokers-in-house-bool"
                  sx={{ fontWeight: "bold" }}
                >
                  Are there smokers in the house?
                </FormLabel>
                <Controller
                  control={control}
                  name="smokers_in_house"
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      aria-labelledby="smokers-in-house-bool"
                      value={value}
                      name={name}
                      onChange={(event) => {
                        clearErrors("smokers_explanation");
                        onChange(event);
                      }}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                {watchSmokersInHouse === "Yes" && (
                  <Fade
                    in={true}
                    timeout={250}
                  >
                    <TextField
                      id="smokers-explanation"
                      label="If yes, how do you prevent health problems due to second-hand smoke exposure for your bird(s)?"
                      sx={{
                        "& .MuiFormLabel-root": { whiteSpace: "normal" },
                        "& .MuiFormLabel-root.MuiInputLabel-shrink": { whiteSpace: "nowrap" },
                      }}
                      variant="outlined"
                      multiline
                      minRows={4}
                      {...register("smokers_explanation", {
                        required: "Second-hand smoke plan is required",
                      })}
                      error={!!errors.smokers_explanation?.message}
                      helperText={errors.smokers_explanation?.message}
                    />
                  </Fade>
                )}
                <FormLabel
                  id="other-pets-bool"
                  sx={{ fontWeight: "bold" }}
                >
                  Do you currently have other pets living in your home?
                </FormLabel>
                <Controller
                  control={control}
                  name="other_pets_in_home"
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      aria-labelledby="other-pets-bool"
                      value={value}
                      name={name}
                      onChange={(event) => {
                        clearErrors("what_other_pets");
                        onChange(event);
                      }}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                {watchOtherPets === "Yes" && (
                  <Fade
                    in={true}
                    timeout={250}
                  >
                    <TextField
                      id="what-other-pets"
                      label="If yes, please list species and how many"
                      variant="outlined"
                      {...register("what_other_pets", {
                        required: "Other pets information is required",
                      })}
                      error={!!errors.what_other_pets?.message}
                      helperText={errors.what_other_pets?.message}
                    />
                  </Fade>
                )}
              </Stack>
              <Typography
                variant="h3"
                sx={{ mb: 2, mt: 4 }}
              >
                Bird Care
              </Typography>
              <Stack spacing={2}>
                <TextField
                  id="what-supp-info"
                  label="What sources of information do you use to supplement your knowledge of avian care?"
                  sx={{
                    "& .MuiFormLabel-root": { whiteSpace: "normal" },
                    "& .MuiFormLabel-root.MuiInputLabel-shrink": { whiteSpace: "nowrap" },
                  }}
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("what_supp_info", {
                    required: "Avian sources of information is required",
                  })}
                  error={!!errors.what_supp_info?.message}
                  helperText={errors.what_supp_info?.message}
                />
                <TextField
                  id="lifestyle-changes"
                  label="Please describe the lifestyle changes you might anticipate over the next 5 years? 10 years? 25 years?"
                  sx={{
                    "& .MuiFormLabel-root": { whiteSpace: "normal" },
                    "& .MuiFormLabel-root.MuiInputLabel-shrink": { whiteSpace: "nowrap" },
                  }}
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("lifestyle_changes", {
                    required: "Lifestyle changes description is required",
                  })}
                  error={!!errors.lifestyle_changes?.message}
                  helperText={errors.lifestyle_changes?.message}
                />
                <TextField
                  id="vacation-care"
                  label="When you travel or go on an extended vacation, who will care for your bird?"
                  sx={{
                    "& .MuiFormLabel-root": { whiteSpace: "normal" },
                    "& .MuiFormLabel-root.MuiInputLabel-shrink": { whiteSpace: "nowrap" },
                  }}
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("vacation_care", {
                    required: "Vacation care plan is required",
                  })}
                  error={!!errors.vacation_care?.message}
                  helperText={errors.vacation_care?.message}
                />
                <TextField
                  id="death-plans"
                  label="What provisions have you made for your birds and/or other pets in the event of your illness or death?"
                  sx={{
                    "& .MuiFormLabel-root": { whiteSpace: "normal" },
                    "& .MuiFormLabel-root.MuiInputLabel-shrink": { whiteSpace: "nowrap" },
                  }}
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("death_plans", {
                    required: "Provisions in case of illness/death is required",
                  })}
                  error={!!errors.death_plans?.message}
                  helperText={errors.death_plans?.message}
                />
              </Stack>
              <Typography
                variant="h3"
                sx={{ mb: 2, mt: 4 }}
              >
                Additional Questions
              </Typography>
              <Stack spacing={2}>
                <TextField
                  id="looking-for-in-bird"
                  label="What are the most important characteristics you are looking for in a companion bird?"
                  sx={{
                    "& .MuiFormLabel-root": { whiteSpace: "normal" },
                    "& .MuiFormLabel-root.MuiInputLabel-shrink": { whiteSpace: "nowrap" },
                  }}
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("looking_for_in_bird", {
                    required: "Important characteristics is required",
                  })}
                  error={!!errors.looking_for_in_bird?.message}
                  helperText={errors.looking_for_in_bird?.message}
                />
                <TextField
                  id="additional-comments"
                  label="Is there anything else you would like to add/ask that would help in determining your eligibility?"
                  sx={{
                    "& .MuiFormLabel-root": { whiteSpace: "normal" },
                    "& .MuiFormLabel-root.MuiInputLabel-shrink": { whiteSpace: "nowrap" },
                  }}
                  variant="outlined"
                  multiline
                  minRows={4}
                  {...register("additional_comments", {
                    required: false,
                  })}
                  error={!!errors.additional_comments?.message}
                  helperText={errors.additional_comments?.message}
                />
              </Stack>
              <Typography
                variant="h3"
                sx={{ mb: 2, mt: 4 }}
              >
                Agreements
              </Typography>
              <Stack spacing={2}>
                <FormLabel
                  id="home-address-agreement"
                  sx={{ fontWeight: "bold" }}
                  required
                >
                  I understand that if I am approved and adopt a bird that this bird must remain in
                  my home. If my circumstances change, I understand I must contact a Refuge for
                  Saving the Wildlife. I will forward any changes to my address(es) and/or phone
                  number(s) to a Refuge for Saving the Wildlife.
                </FormLabel>
                <FormControlLabel
                  control={
                    <Controller
                      name="home_address_agreement"
                      control={control}
                      rules={{ required: "Home address agreement is required" }}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          checked={field["value"] ?? false}
                        />
                      )}
                    />
                  }
                  label="I Agree"
                />
                <FormHelperText error>{errors.home_address_agreement?.message}</FormHelperText>
                <FormLabel
                  id="home-visit-agreement"
                  sx={{ fontWeight: "bold" }}
                  required
                >
                  I agree to a home visit prior to approval, and I understand that a Refuge for
                  Saving the Wildlife representative may make periodic visits to my home.
                </FormLabel>
                <FormControlLabel
                  control={
                    <Controller
                      name="home_visit_agreement"
                      control={control}
                      rules={{ required: "Home visit agreement is required" }}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          checked={field["value"] ?? false}
                        />
                      )}
                    />
                  }
                  label="I Agree"
                />
                <FormHelperText error>{errors.home_visit_agreement?.message}</FormHelperText>
                <FormLabel
                  id="no-guarantee-agreement"
                  sx={{ fontWeight: "bold" }}
                  required
                >
                  I understand that completion of this Adoption Application does not guarantee that
                  I qualify to adopt a bird from a Refuge for Saving the Wildlife.
                </FormLabel>
                <FormControlLabel
                  control={
                    <Controller
                      name="no_guarantee_agreement"
                      control={control}
                      rules={{ required: "Adoption not guaranteed understanding is required" }}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          checked={field["value"] ?? false}
                        />
                      )}
                    />
                  }
                  label="I Agree"
                />
                <FormHelperText error>{errors.no_guarantee_agreement?.message}</FormHelperText>
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
