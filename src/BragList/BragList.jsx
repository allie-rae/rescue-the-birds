import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Stack, TextField, Typography, useTheme } from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

import { InteractiveEditIcon } from "../InteractiveEditIcon";

export const BragList = ({
  listOfAccomplishments,
  setListOfAccomplishments,
}) => {
  const theme = useTheme();
  const [isUserConfirmingDelete, setIsUserConfirmingDelete] = useState(null);
  const [isUserEditing, setIsUserEditing] = useState(null);

  useEffect(() => {
    if (isUserConfirmingDelete !== null) {
      const timer = setTimeout(() => {
        setIsUserConfirmingDelete(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isUserConfirmingDelete]);

  return (
    <Box
      sx={{
        maxWidth: "600px",
        marginTop: 3,
        marginLeft: 3,
        marginRight: 3,
      }}
    >
      <Stack spacing={3}>
        {listOfAccomplishments.map((accomplishment, i) => {
          return (
            <Box
              key={`${i}-${accomplishment.title}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography variant="overline">
                {format(
                  new Date(accomplishment.timestamp),
                  "E MMM dd @ h:mm b"
                )}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {isUserEditing !== accomplishment.id && (
                      <>
                        <CheckCircleOutlineIcon
                          sx={{
                            marginRight: 0.6,
                            color: theme.palette.primary.main,
                            fontSize: "1.1rem",
                          }}
                        />
                        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                          {accomplishment.headline}
                        </Typography>
                      </>
                    )}
                    {isUserEditing === accomplishment.id && (
                      <TextField
                        label="Headline"
                        variant="outlined"
                        placeholder={"Type your headline here..."}
                        value={accomplishment.headline}
                        sx={{ minWidth: "275px", mb: 1 }}
                        onChange={(e) => {
                          const copyOfAccomplishments = [
                            ...listOfAccomplishments,
                          ];
                          copyOfAccomplishments.splice(i, 1, {
                            ...accomplishment,
                            headline: e.target.value,
                          });
                          setListOfAccomplishments(copyOfAccomplishments);
                        }}
                      />
                    )}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <InteractiveEditIcon
                      turnOnEdit={() => setIsUserEditing(accomplishment.id)}
                      turnOffEdit={() => setIsUserEditing(null)}
                      isEditTriggered={isUserEditing === accomplishment.id}
                    />
                    <DeleteOutlineIcon
                      sx={{
                        fontSize: "1.1rem",
                        color:
                          isUserConfirmingDelete === accomplishment.id
                            ? theme.palette.error.main
                            : theme.palette.grey[400],
                        "&:hover": {
                          color:
                            isUserConfirmingDelete === accomplishment.id
                              ? theme.palette.error.main
                              : theme.palette.grey[900],
                        },
                      }}
                      onClick={() =>
                        isUserConfirmingDelete === accomplishment.id
                          ? setListOfAccomplishments(
                              listOfAccomplishments.filter(
                                (accomp) => accomp.id !== accomplishment.id
                              )
                            )
                          : setIsUserConfirmingDelete(accomplishment.id)
                      }
                    />
                  </Box>
                </Box>
                {isUserEditing !== accomplishment.id && (
                  <Typography variant="body2" sx={{ marginLeft: "23px" }}>
                    {accomplishment.body}
                  </Typography>
                )}
                {isUserEditing === accomplishment.id && (
                  <TextField
                    variant="outlined"
                    label="Brag"
                    placeholder={"Write about your accomplishment here..."}
                    value={accomplishment.body}
                    multiline
                    sx={{ minWidth: "275px", mb: 1 }}
                    onChange={(e) => {
                      const copyOfAccomplishments = [...listOfAccomplishments];
                      copyOfAccomplishments.splice(i, 1, {
                        ...accomplishment,
                        body: e.target.value,
                      });
                      setListOfAccomplishments(copyOfAccomplishments);
                    }}
                  />
                )}
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};