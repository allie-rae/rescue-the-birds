import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import combinationMark from "../Branding/combination-mark.png";
import brandmark from "../Branding/brandmark.png"

const drawerWidth = 240;
const navItems = [
  { name: "Adopt", route: "/adopt" },
  { name: "Board", route: "/board" },
  { name: "Donate", route: "/donate" },
  { name: "About", route: "/about" },
  { name: "Volunteer", route: "/volunteer" },
  { name: "Relinquish", route: "/relinquish" },
  { name: "Contact", route: "/contact" },
];

export function Navigation(props) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Box sx={{ 
        my: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <Link to={"/"} aria-label="Go to homepage">
          <CardMedia
            component="img"
            alt="Website brandmark, click to go to homepage"
            image={brandmark}
            height={40}
          />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
          >
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.route)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "block"}}}
          >
            <Link to={"/"} aria-label="Go to homepage">
              <CardMedia
                component="img"
                alt="Website combination mark, click to go to homepage"
                image={combinationMark}
                height={40}
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "#fff" }}
                onClick={() => navigate(item.route)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ p: 3 }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default Navigation;
