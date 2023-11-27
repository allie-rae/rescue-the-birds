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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import rose from "../../Photos/rose.png";
import { ListOfTests } from "../../ListOfTests";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { PricingTable } from "../../PricingTable";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { ParrotBoardingForm } from "./ParrotBoardingSubForm";

export const Board = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
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
            <form onSubmit={handleSubmit((data) => console.log("data", data))}>
              <Stack spacing={2}>
                <FormLabel
                  id="boarding-schedule"
                  sx={{ fontWeight: "bold" }}
                >
                  Personal Information
                </FormLabel>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  {...register("person_name", { required: "Name is required" })}
                  error={Boolean(errors.person_name?.message)}
                  helperText={errors.person_name?.message}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  {...register("person_email", { required: "Email is required" })}
                  error={Boolean(errors.person_email?.message)}
                  helperText={errors.person_email?.message}
                />
                <TextField
                  id="phone-number"
                  label="Phone Number"
                  variant="outlined"
                  {...register("person_phone", { required: "Phone number is required" })}
                  error={Boolean(errors.person_phone?.message)}
                  helperText={errors.person_phone?.message}
                />
                <TextField
                  id="street-address"
                  label="Street Address"
                  variant="outlined"
                  {...register("person_address", { required: "Street address is required" })}
                  error={Boolean(errors.person_address?.message)}
                  helperText={errors.person_address?.message}
                />
                <TextField
                  id="city"
                  label="City"
                  variant="outlined"
                  {...register("person_city", { required: "City is required" })}
                  error={Boolean(errors.person_city?.message)}
                  helperText={errors.person_city?.message}
                />
                <TextField
                  id="state"
                  label="State"
                  variant="outlined"
                  {...register("person_state", { required: "State is required" })}
                  error={Boolean(errors.person_state?.message)}
                  helperText={errors.person_state?.message}
                />
                <TextField
                  id="zip-code"
                  label="Zip Code"
                  variant="outlined"
                  {...register("person_zipcode", { required: "Zip code is required" })}
                  error={Boolean(errors.person_zipcode?.message)}
                  helperText={errors.person_zipcode?.message}
                />
                <FormLabel
                  id="boarding-schedule"
                  sx={{ fontWeight: "bold" }}
                >
                  Boarding Schedule
                </FormLabel>
                <TextField
                  id="boarding-start-date"
                  label="Boarding Start Date (MM/DD/YYYY)"
                  variant="outlined"
                  {...register("boarding_start_date", {
                    required: "Boarding start date is required",
                  })}
                  error={Boolean(errors.boarding_start_date?.message)}
                  helperText={errors.boarding_start_date?.message}
                />
                <TextField
                  id="boarding-end-date"
                  label="Boarding End Date (MM/DD/YYYY)"
                  variant="outlined"
                  {...register("boarding_end_date", { required: "Boarding end date is required" })}
                  error={Boolean(errors.boarding_end_date?.message)}
                  helperText={errors.boarding_end_date?.message}
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
                    <Checkbox
                      {...register("vet_record_agreement", {
                        required: "Vet record agreement is required",
                      })}
                      error={Boolean(errors.vet_record_agreement?.message)}
                      helperText={errors.vet_record_agreement?.message}
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
                    <Checkbox
                      {...register("dropoff_agreement", {
                        required: "Dropoff agreement is required",
                      })}
                      error={Boolean(errors.dropoff_agreement?.message)}
                      helperText={errors.dropoff_agreement?.message}
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
                    <Checkbox
                      {...register("emergency_agreement", {
                        required: "Emergency agreement is required",
                      })}
                      error={Boolean(errors.emergency_agreement?.message)}
                      helperText={errors.emergency_agreement?.message}
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
                    <Checkbox
                      {...register("legal_agreement", {
                        required: "Legal agreement is required",
                      })}
                      error={Boolean(errors.legal_agreement?.message)}
                      helperText={errors.legal_agreement?.message}
                    />
                  }
                  label="I Agree"
                />
                <FormHelperText error>{errors.legal_agreement?.message}</FormHelperText>
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

const AddedBirdsList = ({ birdNames }) => {
  if (!birdNames.length) return null;
  return (
    <>
      <FormLabel
        id="emergency-agreement"
        sx={{ fontWeight: "bold" }}
      >
        {birdNames.length === 1 ? "Bird" : "Birds"} added:
      </FormLabel>
      <List>
        {birdNames.map((name) => {
          return (
            <ListItem key={name}>
              <ListItemIcon>
                <TaskAltIcon color="success" />
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
