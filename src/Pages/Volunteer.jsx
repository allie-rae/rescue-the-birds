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
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import took from "../Photos/took.png";

export const Volunteer = () => {
  
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
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
      brief_synopsis_of_birds: "",
      why_interested: "",
      interested_bird_care: "",
      interested_fundraising: "",
      interested_fostering: ""
    }
  });

  // Manage state independently for the emergency contact name and number so that they can be concatenated to form the value of the "emergency_contact" property
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");

  const onSubmit = (data) => {
    const { emergency_contact_name, emergency_contact_number, ...submissionData } = data;
    console.log("data: ", submissionData);
  }

  /**
   * Handles changes to the emergency contact name and number fields.
   * 
   * @param {string} field - The name of the field that was updated 
   * @param {string} value - The new value of the field
   */
  const handleEmergencyContactChange = async (field, value) => {
    
    if (field === "emergency_contact_name") setEmergencyContactName(value);
    else if (field === "emergency_contact_number") setEmergencyContactNumber(value);
    
  }

  // Update the value of the hidden input field "emergency_contact" whenever the emergency contact name or number changes
  useEffect(() => {
    const emergencyContact = `${emergencyContactName}: ${emergencyContactNumber}`.trim();
    setValue("emergency_contact", emergencyContact);
  }, [emergencyContactName, emergencyContactNumber, setValue]);

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
              {/* 
                Use React Hook Form's Controller component to individually manage the state of "emergency_contact_name" and "emergency_contact_number". This approach enables:
                1. Separate error validations for each field.
                2. Concatenating both fields' values to form the "emergency_contact" property's value, as handled in the useEffect hook above.
              */}
              <Controller 
                control={control}
                name="emergency_contact_name"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="emergency-contact-name"
                    label="Emergency Contact Name"
                    variant="outlined"
                    value={emergencyContactName}
                    error={!!errors.emergency_contact_name?.message}
                    helperText={errors.emergency_contact_name?.message}
                    onChange={(e) => {
                      field.onChange(e);
                      handleEmergencyContactChange("emergency_contact_name", e.target.value)
                    }}
                  />
                )}
                rules={{ required: "Emergency contact name is required" }}
              />
              <Controller 
                control={control}
                name="emergency_contact_number"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="emergency-contact-number"
                    label="Emergency Contact Phone Number"
                    variant="outlined"
                    value={emergencyContactNumber}
                    error={!!errors.emergency_contact_number?.message}
                    helperText={errors.emergency_contact_number?.message}
                    onChange={(e) => {
                      field.onChange(e);
                      handleEmergencyContactChange("emergency_contact_number", e.target.value)
                    }}
                  />
                )}
                rules={{ required: "Emergency contact number is required" }}
              />
              <TextField
                id="bird-experience"
                label="A brief synopsis of your bird experience"
                variant="outlined"
                multiline
                minRows={4}
              />
              <TextField
                id="interest"
                label="Why are you interested in volunteering with us?"
                variant="outlined"
                multiline
                minRows={4}
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
              >
                Areas of interest:
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bird care at the Refuge"
                />
                <FormHelperText>
                  Socializing, playing, handling of animals, feeding, cutting fruits & veggies, making
                  warm meals, rotating toys, grooming, cleaning cages, changing cage paper, cleaning
                  pet care areas, etc.
                </FormHelperText>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Fostering in your home"
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

                <FormControlLabel
                  control={<Checkbox />}
                  label="Fundraising"
                />
                <FormHelperText>
                  Phone calls, letters, personal contact with potential sources of funding, grant
                  writing.
                </FormHelperText>
              </FormGroup>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
              {/* Register a hidden input for the "emergency_contact" field so that React Hook Form can manage its state. This field's value is dynamically updated based on the "emergencyContactName" and "emergencyContactNumber" state variables, handled in the useEffect hook above. */}
              <input type="hidden" {...register("emergency_contact")} />
            </Stack>
          </form>
        </Box>
      </Box>
    </Fade>
  );
};
