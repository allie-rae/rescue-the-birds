import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

function App() {
  return (
    <Box>
      <Navigation />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
