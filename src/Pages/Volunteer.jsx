import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { Box } from "@mui/system";
import took from "../Photos/took.png";

export const Volunteer = () => {
  
  const {
    clearErrors,
    control,
    formState: { errors, isSubmitted },
    handleSubmit,
    register,
    setError,
    watch
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
      interested_fostering: "No"
    }
  });

  const watchBirdCare = watch("interested_bird_care");
  const watchFundraising = watch("interested_fundraising");
  const watchFostering = watch("interested_fostering");

  const noInterestsSelectedMessage = "Please select at least one of the following areas of interest: ";

  const hasSelectedOneInterest = () => {
    return watchBirdCare === "Yes" || watchFundraising === "Yes" || watchFostering === "Yes";
  }

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
          message: noInterestsSelectedMessage
        });
      }
    }
  }, [watchBirdCare, watchFundraising, watchFostering, setError, clearErrors])

  const onSubmit = (data) => {
    const { emergency_contact_name, emergency_contact_number, has_selected_one_interest, ...submissionData} = data;

    submissionData.emergency_contact = `Name: ${emergency_contact_name}\nNumber: ${emergency_contact_number}`;

    // Console log the data for now
    console.log("Submission data: ", submissionData);
  }

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
            src={took}
            height="400px"
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ mb: 2, mt: 2 }}
        >
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
                id="drivers-license"
                label="Driver's License Number"
                variant="outlined"
                {...register("dl_number", { required: "Driver's license number is required" })}
                error={!!errors.dl_number?.message}
                helperText={errors.dl_number?.message}
              />
              <TextField
                id="emergency-contact-name"
                label="Emergency Contact Name"
                variant="outlined"
                {...register("emergency_contact_name", { required: "Emergency contact name is required" })}
                error={!!errors.emergency_contact_name?.message}
                helperText={errors.emergency_contact_name?.message}
              />
              <TextField
                id="emergency-contact-number"
                label="Emergency Contact Phone Number"
                variant="outlined"
                {...register("emergency_contact_number", { required: "Emergency contact number is required" })}
                error={!!errors.emergency_contact_number?.message}
                helperText={errors.emergency_contact_number?.message}
              />
              <TextField
                id="bird-experience"
                label="A brief synopsis of your bird experience"
                variant="outlined"
                multiline
                minRows={4}
                {...register("brief_synopsis_of_birds", { required: "A brief synopsis of your bird experience is required" })}
                error={!!errors.brief_synopsis_of_birds?.message}
                helperText={errors.brief_synopsis_of_birds?.message}
              />
              <TextField
                id="interest"
                label="Why are you interested in volunteering with us?"
                variant="outlined"
                multiline
                minRows={4}
                {...register("why_interested", { required: "Explanation of interest is required"})}
                error={!!errors.why_interested?.message}
                helperText={errors.why_interested?.message}
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
              >
                Areas of interest (select at least one):
              </Typography>
              {/* Display an error message if the user has not selected at least one area of interest for volunteering */}
              {errors.has_selected_one_interest && (
                <FormHelperText error>
                  {errors.has_selected_one_interest.message}
                </FormHelperText>
              )}
              <FormGroup>
                <Controller 
                  control={control}
                  name="interested_bird_care"
                  render={({ field: { value, onChange }}) => (
                      <FormControlLabel
                        control={<Checkbox
                          checked={value === "Yes"}
                          onChange={onCheckboxChange(onChange)}
                        />}
                        label="Bird care at the Refuge"
                      />
                  )}
                />
                <FormHelperText>
                  Socializing, playing, handling of animals, feeding, cutting fruits & veggies, making
                  warm meals, rotating toys, grooming, cleaning cages, changing cage paper, cleaning
                  pet care areas, etc.
                </FormHelperText>
                <Controller 
                  control={control}
                  name="interested_fostering"
                  render={({ field: { value, onChange }}) => (
                      <FormControlLabel
                        control={<Checkbox
                          checked={value === "Yes"}
                          onChange={onCheckboxChange(onChange)}
                        />}
                        label="Fostering in your home"
                      />
                  )}
                />
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
                <Controller 
                  control={control}
                  name="interested_fundraising"
                  render={({ field: { value, onChange }}) => (
                      <FormControlLabel
                        control={<Checkbox
                          checked={value === "Yes"}
                          onChange={onCheckboxChange(onChange)}
                        />}
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
                {...register("has_selected_one_interest", { validate: () => hasSelectedOneInterest() || noInterestsSelectedMessage })}
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
    </Fade>
  );
};
