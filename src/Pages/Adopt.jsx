import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Stack,
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
import { TextInput } from "../TextInput";
import { DateInput } from "../DateInput";
import { pageFadeTimeout, pageWidth, parrotImageStyling } from "../constants";

const generalInfoTextFields = [
  {
    name: "person_email",
    label: "Email",
    rules: { required: "Email is required" },
  },
  {
    name: "person_phone",
    label: "Phone Number",
    rules: { required: "Phone number is required" },
  },
  {
    name: "person_address",
    label: "Street Address",
    rules: { required: "Street address is required" },
  },
  {
    name: "person_city",
    label: "City",
    rules: { required: "City is required" },
  },
  {
    name: "person_state",
    label: "State",
    rules: { required: "State is required" },
  },
  {
    name: "person_zipcode",
    label: "Zip Code",
    rules: { required: "Zip Code is required" },
  },
  {
    name: "hear_about_us",
    label: "How did you hear about us?",
    rules: { required: "Response is required" },
  },
];

const householdTextFields = [
  {
    name: "num_household_people",
    label: "How many people are in your household?",
    rules: { required: "Household size is required" },
    longLabel: true,
  },
  {
    name: "primary_caregiver_age",
    label: "How old is the primary caregiver?",
    rules: { required: "Caregiver age is required" },
    longLabel: true,
  },
  {
    name: "ages_in_household",
    label: "List the ages of everyone in the household",
    rules: { required: "Household members' ages are required" },
    longLabel: true,
  },
  {
    name: "children_in_house",
    label: "Are there children in the household? What is their experience with birds?",
    rules: { required: "Children's experience with birds is required" },
    multiline: true,
    longLabel: true,
  },
];

const vetTextFields = [
  {
    name: "vet_name",
    label: "Veterinarian Name",
    rules: { required: "Veterinarian name is required" },
  },
  {
    name: "vet_clinic_name",
    label: "Veterinarian Clinic Name",
    rules: { required: "Veterinarian clinic name is required" },
  },
  {
    name: "vet_address",
    label: "Veterinarian Clinic Address",
    rules: { required: "Veterinarian address is required" },
  },
  {
    name: "vet_phone",
    label: "Veterinarian Clinic Phone Number",
    rules: { required: "Veterinarian phone number is required" },
  },
];

const birdCareTextFields = [
  {
    name: "what_supp_info",
    label: "What sources of information do you use to supplement your knowledge of avian care?",
    rules: { required: "Avian sources of information is required" },
    multiline: true,
    longLabel: true,
  },
  {
    name: "lifestyle_changes",
    label:
      "Please describe the lifestyle changes you might anticipate over the next 5 years? 10 years? 25 years?",
    rules: { required: "Lifestyle changes description is required" },
    multiline: true,
    longLabel: true,
  },
  {
    name: "vacation_care",
    label: "When you travel or go on an extended vacation, who will care for your bird?",
    rules: { required: "Vacation care plan is required" },
    multiline: true,
    longLabel: true,
  },
  {
    name: "death_plans",
    label:
      "What provisions have you made for your birds and/or other pets in the event of your illness or death?",
    rules: { required: "Provisions in case of illness/death is required" },
    multiline: true,
    longLabel: true,
  },
];

const additionalQuestionsTextFields = [
  {
    name: "looking_for_in_bird",
    label: "What are the most important characteristics you are looking for in a companion bird?",
    rules: { required: "Important characteristics is required" },
    multiline: true,
    longLabel: true,
  },
  {
    name: "additional_comments",
    label:
      "Is there anything else you would like to add/ask that would help in determining your eligibility?",
    multiline: true,
    longLabel: true,
  },
];

export const Adopt = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    clearErrors,
    reset,
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
      daily_routine: "",
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

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
      setIsError(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isSuccess, isError]);

  const onSubmit = (data) => {
    setIsLoading(true);
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
      home_address_agreement,
      home_visit_agreement,
      no_guarantee_agreement,
      ...submissionData
    } = data;

    if (data.have_other_birds === "Yes") {
      const otherBirdCheckupDateArr = other_bird_checkup_date.split("-");
      const reformattedCheckupDate = `${otherBirdCheckupDateArr[1]}/${otherBirdCheckupDateArr[2]}/${otherBirdCheckupDateArr[0]}`;
      submissionData.have_other_birds = `Yes\nSpecies: ${other_bird_species}\nLast Checkup: ${reformattedCheckupDate}\nDiet: ${other_bird_diet}`;
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

    const personDobArr = submissionData.person_dob.split("-");
    submissionData.person_dob = `${personDobArr[1]}/${personDobArr[2]}/${personDobArr[0]}`;

    // This is where in the future we can send data to the back end
    axios
      .post("https://rescuethebirds-jfcaxndkka-uc.a.run.app/forms/adoption", submissionData)
      .then(() => {
        setIsSuccess(true);
        reset();
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <Fade
      in={true}
      timeout={pageFadeTimeout}
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
            style={parrotImageStyling}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ mt: 2 }}
        >
          Adopt
        </Typography>
        <Box sx={{ width: pageWidth, maxWidth: "100%" }}>
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
          <Box sx={{ width: pageWidth, maxWidth: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography
                variant="h3"
                sx={{ mb: 2 }}
              >
                General Info
              </Typography>
              <Stack spacing={2}>
                <TextInput
                  name="person_name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  label="Name"
                  errors={errors}
                />
                <DateInput
                  name="person_dob"
                  control={control}
                  rules={{ required: "Date of birth is required" }}
                  label="Date of Birth"
                  errors={errors}
                />
                {generalInfoTextFields.map((textField) => {
                  return (
                    <TextInput
                      key={textField.name}
                      name={textField.name}
                      control={control}
                      rules={textField.rules}
                      label={textField.label}
                      multiline={textField.multiline}
                      minRows={textField.minRows}
                      longLabel={textField.longLabel}
                      errors={errors}
                    />
                  );
                })}
              </Stack>
              <Typography
                variant="h3"
                sx={{ mb: 2, mt: 4 }}
              >
                Household
              </Typography>
              <Stack spacing={2}>
                {householdTextFields.map((textField) => {
                  return (
                    <TextInput
                      key={textField.name}
                      name={textField.name}
                      control={control}
                      rules={textField.rules}
                      label={textField.label}
                      multiline={textField.multiline}
                      minRows={textField.minRows}
                      longLabel={textField.longLabel}
                      errors={errors}
                    />
                  );
                })}
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
                      <TextInput
                        name="other_bird_species"
                        control={control}
                        rules={{ required: "Species is required" }}
                        label="If yes, list species and how many"
                        multiline
                        longLabel
                        errors={errors}
                      />
                      <DateInput
                        name="other_bird_checkup_date"
                        control={control}
                        rules={{ required: "Last checkup date is required" }}
                        label="Date of their last annual checkup"
                        errors={errors}
                      />
                      <TextInput
                        name="other_bird_diet"
                        control={control}
                        rules={{ required: "Current diet is required" }}
                        label="List the current diet that you feed your birds"
                        multiline
                        longLabel
                        errors={errors}
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
                    <Stack>
                      <TextInput
                        name="previous_what_happened"
                        control={control}
                        rules={{ required: "What happened to birds is required" }}
                        label="If yes, what happened to these birds?"
                        multiline
                        longLabel
                        errors={errors}
                      />
                    </Stack>
                  </Fade>
                )}
                <TextInput
                  name="other_bird_experience"
                  control={control}
                  rules={{ required: "Other bird experience is required" }}
                  label="Please list any other bird experience that you may have"
                  multiline
                  longLabel
                  errors={errors}
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
                      {vetTextFields.map((textField) => {
                        return (
                          <TextInput
                            key={textField.name}
                            name={textField.name}
                            control={control}
                            rules={textField.rules}
                            label={textField.label}
                            multiline={textField.multiline}
                            minRows={textField.minRows}
                            longLabel={textField.longLabel}
                            errors={errors}
                          />
                        );
                      })}
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
                  If you are renting, have you verified with your landlord that birds are allowed
                  and that you have a pet deposit?
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
                <TextInput
                  name="daily_routine"
                  control={control}
                  rules={{ required: "Daily routine is required" }}
                  label="Describe your daily routine at home"
                  multiline
                  longLabel
                  errors={errors}
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
                    <Stack>
                      <TextInput
                        name="weekend_routine"
                        control={control}
                        rules={{ required: "Weekend routine is required" }}
                        label="If yes, please explain"
                        multiline
                        errors={errors}
                      />
                    </Stack>
                  </Fade>
                )}
                <TextInput
                  name="bird_hours_alone"
                  control={control}
                  rules={{ required: "Hours alone is required" }}
                  label="How many hours a day will your bird spend alone?"
                  longLabel
                  errors={errors}
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
                    <Stack>
                      <TextInput
                        name="smokers_explanation"
                        control={control}
                        rules={{ required: "Second-hand smoke plan is required" }}
                        label="If yes, how do you prevent health problems due to second-hand smoke exposure for your bird(s)?"
                        multiline
                        longLabel
                        errors={errors}
                      />
                    </Stack>
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
                    <Stack>
                      <TextInput
                        name="what_other_pets"
                        control={control}
                        rules={{ required: "Other pets information is required" }}
                        label="If yes, please list species and how many"
                        multiline
                        minRows={2}
                        longLabel
                        errors={errors}
                      />
                    </Stack>
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
                {birdCareTextFields.map((textField) => {
                  return (
                    <TextInput
                      key={textField.name}
                      name={textField.name}
                      control={control}
                      rules={textField.rules}
                      label={textField.label}
                      multiline={textField.multiline}
                      minRows={textField.minRows}
                      longLabel={textField.longLabel}
                      errors={errors}
                    />
                  );
                })}
              </Stack>
              <Typography
                variant="h3"
                sx={{ mb: 2, mt: 4 }}
              >
                Additional Questions
              </Typography>
              <Stack spacing={2}>
                {additionalQuestionsTextFields.map((textField) => {
                  return (
                    <TextInput
                      key={textField.name}
                      name={textField.name}
                      control={control}
                      rules={textField.rules}
                      label={textField.label}
                      multiline={textField.multiline}
                      minRows={textField.minRows}
                      longLabel={textField.longLabel}
                      errors={errors}
                    />
                  );
                })}
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
                {isLoading && <LinearProgress />}
                {isSuccess && <FormHelperText>Form successfully submitted!</FormHelperText>}
                {isError && (
                  <FormHelperText error>
                    We&apos;re sorry, but there was an error submitting the form. Please try again.
                  </FormHelperText>
                )}
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
