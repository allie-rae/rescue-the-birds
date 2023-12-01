import {
  Button,
  Checkbox,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const ParrotBoardingForm = ({
  parentRegister,
  isOpen,
  addedBirdNames,
  setAddedBirdNames,
  setIsOpen,
  setFormValue,
  birdListFormValue,
}) => {
  const {
    register,
    formState: { errors, isValid },
    control,
    getValues,
    reset,
    trigger,
  } = useForm({
    mode: "all",
    defaultValues: {
      parrotName: "",
      parrotSpecies: "",
      parrotSource: "",
      parrotGender: "Unknown",
      parrotFlighted: "Yes",
      parrotSpecialDiet: "No",
      parrotSpecialDietDescription: "",
      parrotMedication: "No",
      parrotMedicationDescription: "",
      parrotSpecialInstructions: "",
      wingClip: false,
      beakTrim: false,
      nailTrim: false,
      microchip: false,
    },
  });

  const hasBirdBeenAdded = !!addedBirdNames.length;

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  parentRegister("bird_list", {
    required: "Bird information is required",
    validate: isValid || (hasBirdBeenAdded && !isOpen),
  });

  const addBird = () => {
    if (!isValid) {
      trigger(["parrotName", "parrotSpecies", "parrotSource", "parrotSpecialInstructions"]);
      return;
    }
    const birdName = getValues("parrotName");
    setAddedBirdNames((prev) => [...prev, birdName]);
    setFormValue("bird_list", [
      ...birdListFormValue,
      `Name: ${getValues("parrotName")} | 
        Species: ${getValues("parrotSpecies")} | 
        Source: ${getValues("parrotSource")} |
        Gender: ${getValues("parrotGender")} |
        Flighted: ${getValues("parrotFlighted")} |
        Special Diet: ${getValues("parrotSpecialDiet")} | 
        Special Diet Description: ${getValues("parrotSpecialDietDescription")} | 
        Medication: ${getValues("parrotMedication")} | 
        Medication Description: ${getValues("parrotMedicationDescription")} | 
        Special Instructions: ${getValues("parrotSpecialInstructions")} | 
        Wing Clip: ${getValues("wingClip")} | 
        Beak Trim: ${getValues("beakTrim")} | 
        Nail Trim: ${getValues("nailTrim")} | 
        Microchip: ${getValues("microchip")} | `
        .replace(/(\s\s+|[\n])/g, " ")
        .trim(),
    ]);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <Fade
      in={true}
      timeout={400}
    >
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormLabel
            id="gender-radio-buttons-group-label"
            sx={{ fontWeight: "bold" }}
            required
          >
            Parrot Information
          </FormLabel>
          {hasBirdBeenAdded && (
            <IconButton
              size="small"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )}
        </Box>
        <TextField
          id="parrot-name"
          label="Bird's Name"
          variant="outlined"
          {...register("parrotName", {
            required: "Parrot name is required",
          })}
          error={Boolean(errors.parrotName?.message)}
          helperText={errors.parrotName?.message}
        />
        <TextField
          id="parrot-species"
          label="Species"
          variant="outlined"
          {...register("parrotSpecies", {
            required: "Bird species is required",
          })}
          error={Boolean(errors.parrotSpecies?.message)}
          helperText={errors.parrotSpecies?.message}
        />
        <TextField
          id="i-got-my-bird-from"
          label="I got my bird from..."
          variant="outlined"
          {...register("parrotSource", {
            required: "Bird source is required",
          })}
          error={Boolean(errors.parrotSource?.message)}
          helperText={errors.parrotSource?.message}
        />
        <FormLabel
          id="gender-radio-buttons-group-label"
          sx={{ fontWeight: "bold" }}
        >
          Gender
        </FormLabel>
        <Controller
          control={control}
          name="parrotGender"
          render={({ field: { onChange, value, name } }) => (
            <FormControl sx={{ display: "block" }}>
              <RadioGroup
                aria-labelledby="gender-radio-buttons-group-label"
                name={name}
                value={value}
                onChange={onChange}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Unknown"
                  control={<Radio />}
                  label="Unknown"
                />
              </RadioGroup>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="parrotFlighted"
          render={({ field: { onChange, value, name } }) => (
            <FormControl sx={{ display: "block" }}>
              <FormLabel
                id="flighted-radio-buttons-group-label"
                sx={{ fontWeight: "bold" }}
              >
                Flighted
              </FormLabel>
              <RadioGroup
                aria-labelledby="flighted-radio-buttons-group-label"
                name={name}
                value={value}
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
              </RadioGroup>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="parrotSpecialDiet"
          render={({ field: { onChange, value, name } }) => (
            <FormControl sx={{ display: "block" }}>
              <FormLabel
                id="special-diet-radio-buttons-group-label"
                sx={{ fontWeight: "bold" }}
              >
                Special Diet
              </FormLabel>
              <RadioGroup
                aria-labelledby="special-diet-radio-buttons-group-label"
                name={name}
                value={value}
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
              </RadioGroup>
            </FormControl>
          )}
        />
        <TextField
          id="special-diet"
          label="If yes, explain your bird's special diet"
          variant="outlined"
          multiline
          minRows={4}
          {...register("parrotSpecialDietDescription")}
        />
        <Controller
          control={control}
          name="parrotMedication"
          render={({ field: { onChange, value, name } }) => (
            <FormControl sx={{ display: "block" }}>
              <FormLabel
                id="medication-radio-buttons-group-label"
                sx={{ fontWeight: "bold" }}
              >
                My Bird Requires Medication
              </FormLabel>
              <RadioGroup
                aria-labelledby="medication-radio-buttons-group-label"
                name={name}
                value={value}
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
              </RadioGroup>
            </FormControl>
          )}
        />
        <TextField
          id="medication"
          label="If yes, explain your bird's medication"
          variant="outlined"
          multiline
          minRows={4}
          {...register("parrotMedicationDescription")}
        />
        <TextField
          id="special-instructions"
          label="Special instructions (likes, dislikes, hours of sleep, etc.)"
          variant="outlined"
          multiline
          minRows={4}
          {...register("parrotSpecialInstructions", {
            required: "Special instructions are required",
          })}
          error={Boolean(errors.parrotSpecialInstructions?.message)}
          helperText={errors.parrotSpecialInstructions?.message}
        />
        <FormLabel
          id="extra-services-buttons-group-label"
          sx={{ fontWeight: "bold" }}
        >
          Extra Services
        </FormLabel>
        <FormControlLabel
          control={<Checkbox {...register("beakTrim")} />}
          label="Break Trim ($20)"
        />
        <FormControlLabel
          control={<Checkbox {...register("wingClip")} />}
          label="Wing Clip ($10)"
        />
        <FormControlLabel
          control={<Checkbox {...register("nailTrim")} />}
          label="Nail Trim ($20)"
        />
        <FormControlLabel
          control={<Checkbox {...register("microchip")} />}
          label="Microchipping - AVID Chip ($25)"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "250px", mt: 2 }}
            onClick={() => addBird()}
          >
            Add Bird
          </Button>
          {hasBirdBeenAdded && (
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: "250px", mt: 2 }}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          )}
        </Box>
      </Box>
    </Fade>
  );
};
