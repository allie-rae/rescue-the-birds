import { Box } from "@mui/system";
import { useState } from "react";

import { BragForm } from "./BragForm";
import { BragList } from "./BragList";
import { Navigation } from "./Navigation";

function App() {
  const [listOfAccomplishments, setListOfAccomplishments] = useState([
    {
      headline: "Met with Geoff the designer",
      body: `I said, "Can I pretty please change the Portal and make it prettier?" He patted my head and said, "Maybe someday..."`,
      timestamp: 1674113916784,
      id: 3,
    },
    {
      headline: "Mentored that one dude",
      body: "What's his face messaged me about that thing. It was an important enough thing that I stopped to help. Sir bruh eventually figured out what was going wrong. Go bruh go!",
      timestamp: 1674113916784,
      id: 2,
    },
    {
      headline: "Said hi to Walrus",
      body: "Walrus said sour beer is acidic. I don't know for sure, but maybe I'll head over to that specialty craft place on Friday.",
      timestamp: 1674113916784,
      id: 1,
    },
  ]);
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Navigation />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <BragForm
          listOfAccomplishments={listOfAccomplishments}
          setListOfAccomplishments={setListOfAccomplishments}
        />
        <BragList
          listOfAccomplishments={listOfAccomplishments}
          setListOfAccomplishments={setListOfAccomplishments}
        />
      </Box>
    </Box>
  );
}

export default App;
