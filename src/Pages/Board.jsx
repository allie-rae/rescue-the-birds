import {
  Button,
  Checkbox,
  Fade,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import rose from "../Photos/rose.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ListOfTests } from "../ListOfTests";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const Board = () => {
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
          <img src={rose} width="400px" style={{ borderRadius: "5px" }} />
        </Box>
        <Typography variant="h1" sx={{ mt: 2 }}>
          Board
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Our facility offers world-class safety for your birds, with every bird boarded here
            pre-screened for contagious avian diseases within the last year. We are bonded and
            insured and members of both the National Association of Professional Pet Sitters, NAPPS,
            and Pet Sitters International, PSI.
          </Typography>
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            Pricing
          </Typography>
          <PricingTable />
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            Cancellations
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Clients must cancel their reservations at least 72 hours in advance in order to receive
            a full refund.
          </Typography>
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            Required testing
          </Typography>
          <ListOfTests />
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Medical records must be faxed to us at (847) 457-1192 prior to drop off. All tests must
            have been performed within the last year. If your bird has come into contact with any
            untested birds since the tests were performed, the test results are null and void and
            the tests must be repeated.
          </Typography>
          <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
            Boarding Contract
          </Typography>
          <FormControl sx={{ width: "600px", maxWidth: "100%" }}>
            <Stack spacing={2}>
              <FormLabel id="boarding-schedule" sx={{ fontWeight: "bold" }}>
                Personal Information
              </FormLabel>
              <TextField id="name" label="Name" variant="outlined" />
              <TextField id="email" label="Email" variant="outlined" />
              <TextField id="phone-number" label="Phone Number" variant="outlined" />
              <TextField id="street-address" label="Street Address" variant="outlined" />
              <TextField id="city" label="City" variant="outlined" />
              <TextField id="state" label="State" variant="outlined" />
              <TextField id="zip-code" label="Zip Code" variant="outlined" />
              <FormLabel id="boarding-schedule" sx={{ fontWeight: "bold" }}>
                Boarding Schedule
              </FormLabel>
              <TextField
                id="boarding-start-date"
                label="Boarding Start Date (MM / DD / YYYY)"
                variant="outlined"
              />
              <TextField
                id="boarding-end-date"
                label="Boarding End Date (MM / DD / YYYY)"
                variant="outlined"
              />
              <Box
                sx={{
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "5px",
                  justifyContent: "space-between",
                  height: "1550px",
                  border: "1px solid #e0e0e0",
                }}
              >
                <FormLabel id="gender-radio-buttons-group-label" sx={{ fontWeight: "bold" }}>
                  Parrot Information
                </FormLabel>
                <TextField id="parrot-name" label="Parrot's Name" variant="outlined" />
                <TextField id="parrot-species" label="Species" variant="outlined" />
                <TextField
                  id="i-got-my-bird-from"
                  label="I got my bird from..."
                  variant="outlined"
                />
                <FormLabel id="gender-radio-buttons-group-label" sx={{ fontWeight: "bold" }}>
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="gender-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
                </RadioGroup>
                <FormLabel id="flighted-radio-buttons-group-label" sx={{ fontWeight: "bold" }}>
                  Flighted
                </FormLabel>
                <RadioGroup
                  aria-labelledby="flighted-radio-buttons-group-label"
                  defaultValue="yes"
                  name="flighted-radio-buttons-group"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <FormLabel id="special-diet-radio-buttons-group-label" sx={{ fontWeight: "bold" }}>
                  Special Diet
                </FormLabel>
                <RadioGroup
                  aria-labelledby="special-diet-radio-buttons-group-label"
                  defaultValue="no"
                  name="special-diet-radio-buttons-group"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <TextField
                  id="special-diet"
                  label="If yes, explain your bird's special diet"
                  variant="outlined"
                  multiline
                  minRows={4}
                />
                <FormLabel id="medication-radio-buttons-group-label" sx={{ fontWeight: "bold" }}>
                  My Bird Requires Medication
                </FormLabel>
                <RadioGroup
                  aria-labelledby="medication-radio-buttons-group-label"
                  defaultValue="no"
                  name="medication-radio-buttons-group"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <TextField
                  id="medication"
                  label="If yes, explain your bird's medication"
                  variant="outlined"
                  multiline
                  minRows={4}
                />
                <TextField
                  id="special-instructions"
                  label="Special instructions (likes, dislikes, hours of sleep, etc.)"
                  variant="outlined"
                  multiline
                  minRows={4}
                />
                <FormLabel id="extra-services-buttons-group-label" sx={{ fontWeight: "bold" }}>
                  Extra Services
                </FormLabel>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Break Trim ($20)" />
                  <FormControlLabel control={<Checkbox />} label="Wing Clip ($10)" />
                  <FormControlLabel control={<Checkbox />} label="Nail Trim ($20)" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Microchipping - AVID Chip ($25)"
                  />
                </FormGroup>
              </Box>
              <Button
                startIcon={<AddCircleIcon />}
                variant="contained"
                color="primary"
                sx={{ width: "250px" }}
              >
                Add another bird
              </Button>
              <FormLabel id="emergency-buttons-group-label" sx={{ fontWeight: "bold" }}>
                I request that in the event of an emergency, as so deemed by the staff at the
                Refuge, that my bird(s) be taken to
              </FormLabel>
              <RadioGroup
                aria-labelledby="emergency-radio-buttons-group-label"
                defaultValue="niles"
                name="emergency-radio-buttons-group"
              >
                <FormControlLabel value="niles" control={<Radio />} label="Niles Animal Hospital" />
                <FormControlLabel
                  value="chicago-exotics"
                  control={<Radio />}
                  label="Chicago Exotics Animal Hospital"
                />
                <FormControlLabel
                  value="midwest"
                  control={<Radio />}
                  label="Midwest Animal Hospital"
                />
                <FormControlLabel value="ness-exotics" control={<Radio />} label="Ness Exotics" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              <TextField
                id="other-hospital-name"
                label="If other, enter hospital name here"
                variant="outlined"
              />
              <FormLabel id="vet-records-agreement" sx={{ fontWeight: "bold" }}>
                I will email or fax the Refuge updated vet records. I acknowledge that no cages will
                be held for my bird(s) until the Refuge receives these records.
              </FormLabel>
              <FormControlLabel control={<Checkbox />} label="Agree" />
              <FormLabel id="vet-records-agreement" sx={{ fontWeight: "bold" }}>
                I will email or call the Refuge to arrange a dropoff time. I acknowledge that no
                cages will be held for my bird(s) until a dropoff time is agreed upon and scheduled.
              </FormLabel>
              <FormControlLabel control={<Checkbox />} label="Agree" />
              <FormLabel id="vet-records-agreement" sx={{ fontWeight: "bold" }}>
                The Guardian agrees that no claim or legal action will be taken against the Refuge,
                it’s officers or agents by reason of this contract or any action of the Refuge. The
                Guardian accepts full legal responsibility for this(ese) animal(s) and it’s actions.
                Failure to comply with these conditions may subject the Guardian to legal action
                from the Refuge and I am aware that any monies spent by the Refuge are recoverable
                in such legal action. Further, this contract has a specified end date at which time
                payment in full is required to release said bird(s) to the Guardian. Failure to pay
                will subject the bird to not be released until such time that payment is made in
                full. For those situations in which a Guardian neglects to contact the Refuge for
                extending the boarding date or fails to pay and pickup said bird(s) after 30 days
                past the agreed upon termination date, the bird(s) will be placed up for adoption to
                allow us to recoup any monies not received. The Guardian is responsible for bringing
                toys. For those times that this has not been provided, the Refuge will provide the
                bird with an adequate number of toys for proper mental stimulation and the Guardian
                will be charged for said toys.
              </FormLabel>
              <FormControlLabel control={<Checkbox />} label="Agree" />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Box>
    </Fade>
  );
};

const rows = [
  {
    name: "price",
    xlarge: "$35 / day",
    large: "$25 / day",
    medium: "$20 / day",
    small: "$16 / day",
  },
  {
    name: "description",
    xlarge:
      "Moluccan Cockatoos, Macaws, Greater Sulfur Crested Cockatoos and large Umbrella Cockatoos",
    large: "Amazons, African Greys, Large Conures, Severe Macaws and Lories",
    medium: "Micro/Mini-Macaws and Cockatiels",
    small: "Budgerigars, Canaries, Finches and Lovebirds",
  },
];

export const PricingTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="caption table">
        <caption>
          <strong>Specialty Diets (anything other than the Refuge&apos;s diet):</strong> +$2/day{" "}
          <br />
          <br />
          <strong>Medications:</strong> +$4/day for the first two meds, $1/day each additional med
          <br />
          <br />
          <strong>Optional Services:</strong> <br /> Wing Clipping $10 <br /> Beak Trimming $20{" "}
          <br /> Nail Clipping $20 <br />
          Microchipping - AVID Chips $25
        </caption>
        <TableHead>
          <TableRow sx={{ backgroundColor: "primary.main" }}>
            <TableCell sx={{ color: "white" }}>Extra Large Bird</TableCell>
            <TableCell sx={{ color: "white" }}>Large Bird</TableCell>
            <TableCell sx={{ color: "white" }}>Medium Bird</TableCell>
            <TableCell sx={{ color: "white" }}>Small Bird</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.xlarge}
              </TableCell>
              <TableCell>{row.large}</TableCell>
              <TableCell>{row.medium}</TableCell>
              <TableCell>{row.small}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
