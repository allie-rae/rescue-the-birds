import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import took from "../../Photos/took.png";
import { DateInput } from "../../DateInput/index.js";
import { TextInput } from "../../TextInput/index.js";
import { DateUtilities } from "../../utils/index.js";
import { pageFadeTimeout, pageWidth, parrotImageStyling } from "../../constants";
import { volunteerFormText } from "./config/index.js";
import { formHelperTextUtilities } from "./utils/formHelperText.utils.js";

export const Volunteer = () => {
  const {
    clearErrors,
    control,
    formState: { errors, isSubmitted, touchedFields },
    getValues,
    handleSubmit,
    register,
    reset,
    setError,
    setValue,
    watch,
  } = useForm({
    mode: "all",
    defaultValues: {
      person_name: "",
      person_email: "",
      person_phone: "",
      person_address: "",
      person_city: "",
      person_state: "",
      person_zipcode: "",
      person_dob: "",
      dl_number: "",
      emergency_contact: "",
      emergency_contact_name: "",
      emergency_contact_number: "",
      brief_synopsis_of_birds: "",
      why_interested: "",
      interested_bird_care: "No",
      interested_fundraising: "No",
      interested_fostering: "No",
      wishes_to_be_volunteer: "No",
      desires_to_work_with_animals: "No",
      acknowledges_animal_unknown_behavior: "No",
      acknowledges_rsw_not_responsible: "No",
      agrees_to_background_check: "No",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [volunteerName, setVolunteerName] = useState("_____");

  const holdHarmlessPreamble = formHelperTextUtilities.getHoldHarmlessPreamble(volunteerName);

  const onPersonNameBlur = () => {
    const personName = getValues("person_name").trim();
    setVolunteerName(personName || "_____");
  };

  const watchBirdCare = watch("interested_bird_care");
  const watchFundraising = watch("interested_fundraising");
  const watchFostering = watch("interested_fostering");

  const noInterestsSelectedMessage =
    "Please select at least one of the following areas of interest: ";

  const hasSelectedOneInterest = () => {
    return watchBirdCare === "Yes" || watchFundraising === "Yes" || watchFostering === "Yes";
  };

  const onCheckboxChange = (name) => (e) => {
    const newCheckboxValue = e.target.checked ? "Yes" : "No";
    setValue(name, newCheckboxValue, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  useEffect(() => {
    const userHasClickedAnInterestCheckbox = !!(
      touchedFields.interested_bird_care ||
      touchedFields.interested_fostering ||
      touchedFields.interested_fundraising
    );

    if (userHasClickedAnInterestCheckbox) {
      if (hasSelectedOneInterest()) {
        clearErrors("has_selected_one_interest");
      } else {
        setError("has_selected_one_interest", {
          type: "manual",
          message: noInterestsSelectedMessage,
        });
      }
    }
  }, [watchBirdCare, watchFundraising, watchFostering, setError, clearErrors]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
      setIsError(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isSuccess, isError]);

  const onSubmit = (data) => {
    setIsLoading(true);

    const {
      person_dob,
      emergency_contact_name,
      emergency_contact_number,
      has_selected_one_interest,
      wishes_to_be_volunteer,
      desires_to_work_with_animals,
      acknowledges_animal_unknown_behavior,
      acknowledges_rsw_not_responsible,
      agrees_to_background_check,
      ...submissionData
    } = data;

    submissionData.person_dob = DateUtilities.reformatDateInputString(person_dob);

    submissionData.emergency_contact = `Name: ${emergency_contact_name}\nNumber: ${emergency_contact_number}`;

    axios
      .post("https://rescuethebirds-jfcaxndkka-uc.a.run.app/forms/volunteer", submissionData)
      .then(() => {
        setIsSuccess(true);
        setIsLoading(false);
        reset();
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
            src={took}
            style={parrotImageStyling}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ my: 2 }}
        >
          Volunteer
        </Typography>

        <Box sx={{ width: pageWidth, maxWidth: "100%", marginBottom: "20px" }}>
          <Typography
            variant="body1"
            sx={{ mb: 2 }}
          >
            {volunteerFormText.formIntroduction}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            You must be at least 18 years old to volunteer at the Refuge.
          </Typography>
        </Box>

        <Box sx={{ width: pageWidth, maxWidth: "100%" }}>
          <Typography
            variant="h2"
            sx={{ mb: 2 }}
          >
            Volunteer Application
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4 }}
          >
            {volunteerFormText.formInstructions}
          </Typography>
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
                rules={{ required: "Name is required " }}
                label="Name"
                onBlur={onPersonNameBlur}
                errors={errors}
              />
              <DateInput
                name="person_dob"
                control={control}
                rules={{ required: "Date of birth is required" }}
                label="Date of Birth"
                errors={errors}
              />
              <TextInput
                name="person_email"
                control={control}
                rules={{ required: "Email is required" }}
                label="Email"
                errors={errors}
              />
              <TextInput
                name="person_phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                label="Phone Number"
                errors={errors}
              />
              <TextInput
                name="person_address"
                control={control}
                rules={{ required: "Street address is required" }}
                label="Street Address"
                errors={errors}
              />
              <TextInput
                name="person_city"
                control={control}
                rules={{ required: "City is required" }}
                label="City"
                errors={errors}
              />
              <TextInput
                name="person_state"
                control={control}
                rules={{ required: "State is required" }}
                label="State"
                errors={errors}
              />
              <TextInput
                name="person_zipcode"
                control={control}
                rules={{ required: "Zip code is required" }}
                label="Zip Code"
                errors={errors}
              />
              <TextInput
                name="dl_number"
                control={control}
                rules={{ required: "Driver's license number is required" }}
                label="Driver's License Number"
                errors={errors}
              />
            </Stack>
            <Typography
              variant="h3"
              sx={{ mb: 2, mt: 4 }}
            >
              Emergency Contact Info
            </Typography>
            <Stack spacing={2}>
              <TextInput
                name="emergency_contact_name"
                control={control}
                rules={{ required: "Emergency contact name is required" }}
                label="Emergency Contact Name"
                errors={errors}
              />
              <TextInput
                name="emergency_contact_number"
                control={control}
                rules={{ required: "Emergency contact number is required" }}
                label="Emergency Contact Phone Number"
                errors={errors}
              />
            </Stack>
            <Typography
              variant="h3"
              sx={{ mb: 2, mt: 4 }}
            >
              Experience and Interests
            </Typography>
            <Stack
              spacing={2}
              sx={{ mb: 4 }}
            >
              <TextInput
                name="brief_synopsis_of_birds"
                control={control}
                rules={{ required: "A brief synopsis of your bird experience is required" }}
                label="Briefly summarize your bird experience"
                multiline={true}
                errors={errors}
              />
              <TextInput
                name="why_interested"
                control={control}
                rules={{ required: "Explanation of interest is required" }}
                label="Why are you interested in volunteering with us?"
                multiline={true}
                errors={errors}
              />
            </Stack>
            <Stack spacing={2}>
              <FormLabel sx={{ fontWeight: "bold" }}>
                Areas of interest (select at least one):
              </FormLabel>
              {/* Display an error message if the user has not selected at least one area of interest for volunteering */}
              {errors.has_selected_one_interest && (
                <FormHelperText error>{errors.has_selected_one_interest.message}</FormHelperText>
              )}
              <FormGroup>
                <Controller
                  control={control}
                  name="interested_bird_care"
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value === "Yes"}
                          onChange={onCheckboxChange(field.name)}
                        />
                      }
                      label="Bird care at the Refuge"
                    />
                  )}
                />
                <FormHelperText sx={{ mb: 3, ml: 4 }}>
                  {volunteerFormText.birdCareExamples}
                </FormHelperText>
                <Controller
                  control={control}
                  name="interested_fostering"
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value === "Yes"}
                          onChange={onCheckboxChange(field.name)}
                        />
                      }
                      label="Fostering in your home"
                    />
                  )}
                />
                <FormHelperText sx={{ mb: 3, ml: 4 }}>
                  {volunteerFormText.fosteringInstructions}
                </FormHelperText>
                <Controller
                  control={control}
                  name="interested_fundraising"
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value === "Yes"}
                          onChange={onCheckboxChange(field.name)}
                        />
                      }
                      label="Fundraising"
                    />
                  )}
                />
                <FormHelperText sx={{ mb: 4, ml: 4 }}>
                  {volunteerFormText.fundraisingExamples}
                </FormHelperText>
              </FormGroup>
            </Stack>
            <Typography
              variant="h3"
              sx={{ mb: 2 }}
            >
              Volunteer Hold Harmless Agreement
            </Typography>
            <Stack
              spacing={2}
              sx={{ mb: 6 }}
            >
              {holdHarmlessPreamble}

              <FormGroup sx={{ pl: 4 }}>
                <Controller
                  control={control}
                  name="wishes_to_be_volunteer"
                  rules={{ validate: (value) => value === "Yes" || "Agreement is required" }}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value === "Yes"}
                          onChange={onCheckboxChange(field.name)}
                        />
                      }
                      label="That I wish to be a Volunteer to RSW&copy;, Inc.*"
                    />
                  )}
                />
                {errors.wishes_to_be_volunteer && (
                  <FormHelperText
                    error
                    sx={{ ml: 4, mb: 1 }}
                  >
                    {errors.wishes_to_be_volunteer?.message}
                  </FormHelperText>
                )}
                <Controller
                  control={control}
                  name="desires_to_work_with_animals"
                  rules={{ validate: (value) => value === "Yes" || "Agreement is required" }}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value === "Yes"}
                          onChange={onCheckboxChange(field.name)}
                        />
                      }
                      label="That I desire to work with the various animals of RSW&copy;.*"
                    />
                  )}
                />
                {errors.desires_to_work_with_animals && (
                  <FormHelperText
                    error
                    sx={{ ml: 4, mb: 1 }}
                  >
                    {errors.desires_to_work_with_animals?.message}
                  </FormHelperText>
                )}
                <Controller
                  control={control}
                  name="acknowledges_animal_unknown_behavior"
                  rules={{ validate: (value) => value === "Yes" || "Agreement is required" }}
                  render={({ field }) => (
                    <FormControlLabel
                      sx={{ alignItems: "flex-start", pt: 1, mb: 1 }}
                      control={
                        <Checkbox
                          sx={{ mt: -1 }}
                          checked={field.value === "Yes"}
                          onChange={onCheckboxChange(field.name)}
                        />
                      }
                      label="That I acknowledge that some of the animal residents that currently reside at RSW&copy; are formerly abused/neglected animals whose behavior, temperament, and health are unknown.*"
                    />
                  )}
                />
                {errors.acknowledges_animal_unknown_behavior && (
                  <FormHelperText
                    error
                    sx={{ ml: 4, mb: 1 }}
                  >
                    {errors.acknowledges_animal_unknown_behavior?.message}
                  </FormHelperText>
                )}
                <Controller
                  control={control}
                  name="acknowledges_rsw_not_responsible"
                  rules={{ validate: (value) => value === "Yes" || "Agreement is required" }}
                  render={({ field }) => (
                    <FormControlLabel
                      sx={{ alignItems: "flex-start", pt: 1, mb: 1 }}
                      control={
                        <Checkbox
                          sx={{ mt: -1 }}
                          checked={field.value === "Yes"}
                          onChange={onCheckboxChange(field.name)}
                        />
                      }
                      label="That I acknowledge that RSW&copy; is not responsible for any and all damage, injury claims, and expenses of whatever nature arising from my participation as a Volunteer for RSW&copy;. I agree to hold RSW&copy;, its agents, successors, and assigns harmless.*"
                    />
                  )}
                />
                {errors.acknowledges_rsw_not_responsible && (
                  <FormHelperText
                    error
                    sx={{ ml: 4, mb: 1 }}
                  >
                    {errors.acknowledges_rsw_not_responsible?.message}
                  </FormHelperText>
                )}
              </FormGroup>
              <Typography
                variant="body1"
                sx={{ mb: 2 }}
              >
                I agree to allow RSW&copy; to perform a background check on myself, which may
                include, but not be limited to, a criminal conviction check and a credit check.*
              </Typography>
              <FormGroup sx={{ pl: 4 }}>
                <Controller
                  control={control}
                  name="agrees_to_background_check"
                  rules={{ validate: (value) => value === "Yes" || "Agreement is required" }}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value === "Yes"}
                          onChange={onCheckboxChange(field.name)}
                        />
                      }
                      label="I agree"
                    />
                  )}
                />
                {errors.agrees_to_background_check && (
                  <FormHelperText
                    error
                    sx={{ ml: 4, mb: 1 }}
                  >
                    {errors.agrees_to_background_check?.message}
                  </FormHelperText>
                )}
              </FormGroup>
            </Stack>
            {/* Hidden input used to validate whether or not a user has selected an area of interest for volunteering. This input is registered to React Hook Form in order to make use of its validation functionality */}
            <input
              type="hidden"
              {...register("has_selected_one_interest", {
                validate: () => hasSelectedOneInterest() || noInterestsSelectedMessage,
              })}
            />
            <Stack spacing={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isLoading}
              >
                Submit
              </Button>
              {Object.keys(errors).length > 0 && isSubmitted && (
                <FormHelperText error>Please fill out all required fields</FormHelperText>
              )}
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
    </Fade>
  );
};
