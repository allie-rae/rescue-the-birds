import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

function App() {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Navigation />
      <Outlet />
      <Box sx={{ height: "100px" }} />
      <Footer />
    </Box>
  );
}

export default App;
