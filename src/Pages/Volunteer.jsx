import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import took from "../Photos/took.png";
import { pageFadeTimeout, pageWidth, parrotImageStyling } from "../constants";

export const Volunteer = () => {
  const {
    clearErrors,
    control,
    formState: { errors, isSubmitted },
    handleSubmit,
    register,
    reset,
    setError,
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
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const watchBirdCare = watch("interested_bird_care");
  const watchFundraising = watch("interested_fundraising");
  const watchFostering = watch("interested_fostering");

  const noInterestsSelectedMessage =
    "Please select at least one of the following areas of interest: ";

  const hasSelectedOneInterest = () => {
    return watchBirdCare === "Yes" || watchFundraising === "Yes" || watchFostering === "Yes";
  };

  const onCheckboxChange = (onChange) => (e) => {
    const newCheckboxValue = e.target.checked ? "Yes" : "No";
    onChange(newCheckboxValue);
  };

  useEffect(() => {
    const hasFormBeenSubmitted = isSubmitted;

    if (hasFormBeenSubmitted) {
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
      emergency_contact_name,
      emergency_contact_number,
      has_selected_one_interest,
      ...submissionData
    } = data;

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
          sx={{ mb: 2, mt: 2 }}
        >
          Volunteer
        </Typography>
        <Box sx={{ width: pageWidth, maxWidth: "100%", marginBottom: "20px" }}>
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

        <Box sx={{ width: pageWidth, maxWidth: "100%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                control={control}
                name="person_name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="name"
                    label="Name"
                    variant="outlined"
                    error={!!errors.person_name?.message}
                    helperText={errors.person_name?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="person_dob"
                rules={{ required: "Date of birth is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="date-of-birth"
                    label="Date of Birth (MM/DD/YYYY)"
                    variant="outlined"
                    error={!!errors.person_dob?.message}
                    helperText={errors.person_dob?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="person_email"
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="email"
                    label="Email"
                    variant="outlined"
                    error={!!errors.person_email?.message}
                    helperText={errors.person_email?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="person_phone"
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="phone-number"
                    label="Phone Number"
                    variant="outlined"
                    error={!!errors.person_phone?.message}
                    helperText={errors.person_phone?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="person_address"
                rules={{ required: "Street address is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="street-address"
                    label="Street Address"
                    variant="outlined"
                    error={!!errors.person_address?.message}
                    helperText={errors.person_address?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="person_city"
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="city"
                    label="City"
                    variant="outlined"
                    error={!!errors.person_city?.message}
                    helperText={errors.person_city?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="person_state"
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="state"
                    label="State"
                    variant="outlined"
                    error={!!errors.person_state?.message}
                    helperText={errors.person_state?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="person_zipcode"
                rules={{ required: "Zip code is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="zip-code"
                    label="Zip Code"
                    variant="outlined"
                    error={!!errors.person_zipcode?.message}
                    helperText={errors.person_zipcode?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="dl_number"
                rules={{ required: "Driver's license number is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="drivers-license"
                    label="Driver's License Number"
                    variant="outlined"
                    error={!!errors.dl_number?.message}
                    helperText={errors.dl_number?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="emergency_contact_name"
                rules={{ required: "Emergency contact name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="emergency-contact-name"
                    label="Emergency Contact Name"
                    variant="outlined"
                    error={!!errors.emergency_contact_name?.message}
                    helperText={errors.emergency_contact_name?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="emergency_contact_number"
                rules={{ required: "Emergency contact number is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="emergency-contact-number"
                    label="Emergency Contact Phone Number"
                    variant="outlined"
                    error={!!errors.emergency_contact_number?.message}
                    helperText={errors.emergency_contact_number?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="brief_synopsis_of_birds"
                rules={{ required: "A brief synopsis of your bird experience is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="bird-experience"
                    label="A brief synopsis of your bird experience"
                    variant="outlined"
                    multiline
                    minRows={4}
                    error={!!errors.brief_synopsis_of_birds?.message}
                    helperText={errors.brief_synopsis_of_birds?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="why_interested"
                rules={{ required: "Explanation of interest is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="interest"
                    label="Why are you interested in volunteering with us?"
                    variant="outlined"
                    multiline
                    minRows={4}
                    error={!!errors.why_interested?.message}
                    helperText={errors.why_interested?.message}
                  />
                )}
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
              >
                Areas of interest (select at least one):
              </Typography>
              {/* Display an error message if the user has not selected at least one area of interest for volunteering */}
              {errors.has_selected_one_interest && (
                <FormHelperText error>{errors.has_selected_one_interest.message}</FormHelperText>
              )}
              <FormGroup>
                <Controller
                  control={control}
                  name="interested_bird_care"
                  render={({ field: { value, onChange } }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={value === "Yes"}
                          onChange={onCheckboxChange(onChange)}
                        />
                      }
                      label="Bird care at the Refuge"
                    />
                  )}
                />
                <FormHelperText>
                  Socializing, playing, handling of animals, feeding, cutting fruits & veggies,
                  making warm meals, rotating toys, grooming, cleaning cages, changing cage paper,
                  cleaning pet care areas, etc.
                </FormHelperText>
                <Controller
                  control={control}
                  name="interested_fostering"
                  render={({ field: { value, onChange } }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={value === "Yes"}
                          onChange={onCheckboxChange(onChange)}
                        />
                      }
                      label="Fostering in your home"
                    />
                  )}
                />
                <FormHelperText>
                  Having one of our adoptees in your home for socializing. A separate application
                  must be filled out for each foster bird in addition to this application. If you
                  are fostering for the Refuge, the Refuge maintains legal custody of the foster
                  bird(s). You will be expected to take care of all the needs of the bird(s), which
                  will include food, medicine, veterinary care, toys, etc., without remuneration. If
                  you need financial assistance in caring for the bird(s), we will provide you with
                  the necessary funds. In agreeing to foster, you will not be reimbursed for
                  expenses after the fact unless there has been an agreement with the Executive
                  Director. If the Executive Director determines that it is in the best interest of
                  the bird, the bird(s) will be returned upon demand of the Executive Director. If
                  the Refuge needs to take legal action to obtain the bird(s), you, as the
                  volunteer, will reimburse the Refuge for any and all expenses related to regaining
                  custody of said bird(s).
                </FormHelperText>
                <Controller
                  control={control}
                  name="interested_fundraising"
                  render={({ field: { value, onChange } }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={value === "Yes"}
                          onChange={onCheckboxChange(onChange)}
                        />
                      }
                      label="Fundraising"
                    />
                  )}
                />
                <FormHelperText>
                  Phone calls, letters, personal contact with potential sources of funding, grant
                  writing.
                </FormHelperText>
              </FormGroup>
              {/* Hidden input used to validate whether or not a user has selected an area of interest for volunteering. This input is registered to React Hook Form in order to make use of its validation functionality */}
              <input
                type="hidden"
                {...register("has_selected_one_interest", {
                  validate: () => hasSelectedOneInterest() || noInterestsSelectedMessage,
                })}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isLoading}
              >
                Submit
              </Button>
              {Object.keys(errors).length > 0 && isSubmitted && (
                <FormHelperText error>Please fill out all required fields.</FormHelperText>
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
