import axios from "axios";
import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import rose from "../../Photos/rose.png";
import { ListOfTests } from "../../ListOfTests";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { PricingTable } from "../../PricingTable";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ParrotBoardingForm } from "./ParrotBoardingSubForm";
import { TextInput } from "../../TextInput";
import { AddedBirdsList } from "./AddedBirdsList";

const textFields = [
  {
    name: "person_name",
    label: "Name",
    rules: { required: "Name is required" },
    type: "text",
  },
  {
    name: "person_email",
    label: "Email",
    rules: { required: "Email is required" },
    type: "email",
  },
  {
    name: "person_phone",
    label: "Phone Number",
    rules: { required: "Phone number is required" },
    type: "tel",
  },
  {
    name: "person_address",
    label: "Street Address",
    rules: { required: "Street address is required" },
    type: "text",
  },
  {
    name: "person_city",
    label: "City",
    rules: { required: "City is required" },
    type: "text",
  },
  {
    name: "person_state",
    label: "State",
    rules: { required: "State is required" },
    type: "text",
  },
  {
    name: "person_zipcode",
    label: "Zip Code",
    rules: { required: "Zip code is required" },
    type: "text",
  },
];

export const Board = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
    control,
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
      boarding_start_date: "",
      boarding_end_date: "",
      bird_list: [],
      vet_record_agreement: false,
      dropoff_agreement: false,
      emergency_agreement: false,
      legal_agreement: false,
    },
  });

  const [addedBirdNames, setAddedBirdNames] = useState([]);
  const [isParrotFormOpen, setIsParrotFormOpen] = useState(true);
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
      dropoff_agreement,
      emergency_agreement,
      legal_agreement,
      vet_record_agreement,
      boarding_start_date,
      boarding_end_date,
      ...rest
    } = data;

    const boardingStartDateArr = boarding_start_date.split("-");
    const boardingEndDateArr = boarding_end_date.split("-");

    const reformattedBoardingStartDate = `${boardingStartDateArr[1]}/${boardingStartDateArr[2]}/${boardingStartDateArr[0]}`;
    const reformattedBoardingEndDate = `${boardingEndDateArr[1]}/${boardingEndDateArr[2]}/${boardingEndDateArr[0]}`;

    axios
      .post("https://rescuethebirds-jfcaxndkka-uc.a.run.app/forms/boarding", {
        ...rest,
        boarding_start_date: reformattedBoardingStartDate,
        boarding_end_date: reformattedBoardingEndDate,
      })
      .then(() => {
        setIsSuccess(true);
        reset();
        setAddedBirdNames([]);
        setIsParrotFormOpen(true);
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
            src={rose}
            height="400px"
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ mt: 2 }}
        >
          Board
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography
            variant="body1"
            sx={{ mb: 4, mt: 2 }}
          >
            Our facility offers world-class safety for your birds, with every bird boarded here
            pre-screened for contagious avian diseases within the last year. We are bonded and
            insured and members of both the National Association of Professional Pet Sitters, NAPPS,
            and Pet Sitters International, PSI.
          </Typography>
          <Typography
            variant="h2"
            sx={{ mt: 4, mb: 2 }}
          >
            Pricing
          </Typography>
          <PricingTable />
          <Typography
            variant="h2"
            sx={{ mt: 4, mb: 2 }}
          >
            Cancellations
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, mt: 2 }}
          >
            Clients must cancel their reservations at least 72 hours in advance in order to receive
            a full refund.
          </Typography>
          <Typography
            variant="h2"
            sx={{ mt: 4, mb: 2 }}
          >
            Required testing
          </Typography>
          <ListOfTests />
          <Typography
            variant="body1"
            sx={{ mb: 4, mt: 2 }}
          >
            Medical records must be faxed to us at (847) 457-1192 prior to drop off. All tests must
            have been performed within the last year. If your bird has come into contact with any
            untested birds since the tests were performed, the test results are null and void and
            the tests must be repeated.
          </Typography>
          <Typography
            variant="h2"
            sx={{ mt: 4, mb: 2 }}
          >
            Boarding Contract
          </Typography>
          <Box sx={{ width: "600px", maxWidth: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <FormLabel
                  id="boarding-schedule"
                  sx={{ fontWeight: "bold" }}
                >
                  Personal Information
                </FormLabel>
                {textFields.map((textField) => {
                  return (
                    <TextInput
                      key={textField.name}
                      name={textField.name}
                      control={control}
                      rules={textField.rules}
                      label={textField.label}
                      type={textField.type}
                      errors={errors}
                    />
                  );
                })}
                <FormLabel
                  id="boarding-schedule"
                  sx={{ fontWeight: "bold" }}
                >
                  Boarding Schedule
                </FormLabel>
                <Controller
                  control={control}
                  name="boarding_start_date"
                  rules={{ required: "Boarding start date is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="boarding-start-date"
                      label="Boarding Start Date"
                      variant="outlined"
                      type="date"
                      error={Boolean(errors.boarding_start_date?.message)}
                      helperText={errors.boarding_start_date?.message}
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="boarding_end_date"
                  rules={{ required: "Boarding end date is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="boarding-end-date"
                      label="Boarding End Date"
                      variant="outlined"
                      type="date"
                      error={Boolean(errors.boarding_end_date?.message)}
                      helperText={errors.boarding_end_date?.message}
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
                <AddedBirdsList birdNames={addedBirdNames} />
                {!isParrotFormOpen && (
                  <Button
                    startIcon={<AddCircleIcon />}
                    variant="outlined"
                    color="primary"
                    sx={{ width: "250px", mt: 2 }}
                    onClick={() => setIsParrotFormOpen(true)}
                  >
                    Add Another Bird
                  </Button>
                )}
                <ParrotBoardingForm
                  parentRegister={register}
                  isOpen={isParrotFormOpen}
                  setIsOpen={setIsParrotFormOpen}
                  addedBirdNames={addedBirdNames}
                  setAddedBirdNames={setAddedBirdNames}
                  setFormValue={setValue}
                  birdListFormValue={getValues("bird_list")}
                />
                <FormHelperText error>{errors.bird_list?.message}</FormHelperText>
                <FormLabel
                  id="vet-records-agreement"
                  sx={{ fontWeight: "bold" }}
                  required
                >
                  I will email or fax the Refuge updated vet records. I acknowledge that no cages
                  will be held for my bird(s) until the Refuge receives these records.
                </FormLabel>
                <FormControlLabel
                  control={
                    <Controller
                      name="vet_record_agreement"
                      control={control}
                      rules={{ required: "Vet record agreement is required" }}
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
                <FormHelperText error>{errors.vet_record_agreement?.message}</FormHelperText>
                <FormLabel
                  id="dropoff-agreement"
                  sx={{ fontWeight: "bold" }}
                  required
                >
                  I will email or call the Refuge to arrange a dropoff time. I acknowledge that no
                  cages will be held for my bird(s) until a dropoff time is agreed upon and
                  scheduled.
                </FormLabel>
                <FormControlLabel
                  control={
                    <Controller
                      name="dropoff_agreement"
                      control={control}
                      rules={{ required: "Dropoff agreement is required" }}
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
                <FormHelperText error>{errors.dropoff_agreement?.message}</FormHelperText>
                <FormLabel
                  id="emergency-agreement"
                  sx={{ fontWeight: "bold" }}
                  required
                >
                  In the event of a medical emergency, my bird will be taken to an avian
                  veterinarian chosen by the staff at the Refuge. If my bird is taken to a vet, I
                  agree to pay for all veterinary fees.
                </FormLabel>
                <FormControlLabel
                  control={
                    <Controller
                      name="emergency_agreement"
                      control={control}
                      rules={{ required: "Emergency agreement is required" }}
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
                <FormHelperText error>{errors.emergency_agreement?.message}</FormHelperText>
                <FormLabel
                  id="legal-agreement"
                  sx={{ fontWeight: "bold" }}
                  required
                >
                  The Guardian agrees that no claim or legal action will be taken against the
                  Refuge, it&apos;s officers or agents by reason of this contract or any action of
                  the Refuge. The Guardian accepts full legal responsibility for this(ese) animal(s)
                  and it&apos;s actions. Failure to comply with these conditions may subject the
                  Guardian to legal action from the Refuge and I am aware that any monies spent by
                  the Refuge are recoverable in such legal action. Further, this contract has a
                  specified end date at which time payment in full is required to release said
                  bird(s) to the Guardian. Failure to pay will subject the bird to not be released
                  until such time that payment is made in full. For those situations in which a
                  Guardian neglects to contact the Refuge for extending the boarding date or fails
                  to pay and pickup said bird(s) after 30 days past the agreed upon termination
                  date, the bird(s) will be placed up for adoption to allow us to recoup any monies
                  not received. The Guardian is responsible for bringing toys. For those times that
                  this has not been provided, the Refuge will provide the bird with an adequate
                  number of toys for proper mental stimulation and the Guardian will be charged for
                  said toys.
                </FormLabel>
                <FormControlLabel
                  control={
                    <Controller
                      name="legal_agreement"
                      control={control}
                      rules={{ required: "Legal agreement is required" }}
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
                <FormHelperText error>{errors.legal_agreement?.message}</FormHelperText>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isLoading}
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
