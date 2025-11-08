import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import leapCatalystLogo from "../assets/leap-catalyst-logo.png";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Drawer and dropdown state
  const [openDrawer, setOpenDrawer] = useState(false);
  const [programsAnchor, setProgramsAnchor] = useState(null);
  const [resourcesAnchor, setResourcesAnchor] = useState(null);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  // Dropdown sub-items
  const programsSubItems = [
    { label: "Aarambh 2.0", href: "#/programs/aarambh-2.0" },
    { label: "Aaroh", href: "#/programs/aaroh" },
  ];

  const resourceSubItems = [
    { label: "Blog", href: "#/blog" },
    { label: "FAQs", href: "#/faq" },
  ];

  // Navigation
  const navItems = [
    { label: "HOME", href: "#/" },
    { label: "ABOUT US", href: "#/about-us" },
    { label: "PROGRAMS", href: "#", hasDropdown: true, type: "programs" },
    { label: "COMMUNITY", href: "#" },
    { label: "RESOURCES", href: "#", hasDropdown: true, type: "resources" },
  ];

  // Dropdown hover handlers
  const handleMouseEnter = (event, type) => {
    if (type === "programs") setProgramsAnchor(event.currentTarget);
    if (type === "resources") setResourcesAnchor(event.currentTarget);
  };

  const handleMouseLeave = (type) => {
    if (type === "programs") setProgramsAnchor(null);
    if (type === "resources") setResourcesAnchor(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 4 },
          py: 1,
          minHeight: { xs: "64px", md: "80px" },
        }}
      >
        {/* ---------- LOGO ---------- */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <a href="#/" style={{ textDecoration: "none" }}>
            <img
              src={leapCatalystLogo}
              alt="LEAP CATALYST Logo"
              style={{
                height: isMobile ? "50px" : "100px",
                width: "auto",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </a>
        </Box>

        {/* ---------- NAVIGATION ---------- */}
        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navItems.map((item) =>
              item.hasDropdown ? (
                <Box
                  key={item.label}
                  onMouseEnter={(e) => handleMouseEnter(e, item.type)}
                  onMouseLeave={() => handleMouseLeave(item.type)}
                  sx={{ position: "relative" }}
                >
                  <Button
                    sx={{
                      color: "#666666",
                      fontSize: "1rem",
                      textTransform: "none",
                      fontFamily: "Arial, sans-serif",
                      "&:hover": {
                        color: "#C41E3A",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {item.label}
                  </Button>

                  {/* PROGRAMS DROPDOWN */}
                  {item.type === "programs" && (
                    <Menu
                      anchorEl={programsAnchor}
                      open={Boolean(programsAnchor)}
                      onClose={() => handleMouseLeave("programs")}
                      MenuListProps={{
                        onMouseLeave: () => handleMouseLeave("programs"),
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      sx={{
                        mt: 1,
                        "& .MuiPaper-root": {
                          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                          borderRadius: "8px",
                          minWidth: "200px",
                        },
                      }}
                    >
                      {programsSubItems.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          component="a"
                          href={subItem.href}
                          onClick={() => handleMouseLeave("programs")}
                          sx={{
                            color: "#666666",
                            fontFamily: "Arial, sans-serif",
                            "&:hover": {
                              backgroundColor: "#F5F5F5",
                              color: "#C41E3A",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}

                  {/* RESOURCES DROPDOWN */}
                  {item.type === "resources" && (
                    <Menu
                      anchorEl={resourcesAnchor}
                      open={Boolean(resourcesAnchor)}
                      onClose={() => handleMouseLeave("resources")}
                      MenuListProps={{
                        onMouseLeave: () => handleMouseLeave("resources"),
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      sx={{
                        mt: 1,
                        "& .MuiPaper-root": {
                          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                          borderRadius: "8px",
                          minWidth: "200px",
                        },
                      }}
                    >
                      {resourceSubItems.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          component="a"
                          href={subItem.href}
                          onClick={() => handleMouseLeave("resources")}
                          sx={{
                            color: "#666666",
                            fontFamily: "Arial, sans-serif",
                            "&:hover": {
                              backgroundColor: "#F5F5F5",
                              color: "#C41E3A",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ) : (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "#666666",
                    fontSize: "1rem",
                    textTransform: "none",
                    fontFamily: "Arial, sans-serif",
                    "&:hover": {
                      color: "#C41E3A",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {item.label}
                </Button>
              )
            )}

            {/* PITCH BUTTON */}
            <Button
              variant="contained"
              href="#/apply"
              sx={{
                backgroundColor: "#C41E3A",
                color: "#FFFFFF",
                borderRadius: "4px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#B91C1C",
                  color: "#000000",
                },
              }}
            >
              PITCH TO US
            </Button>
          </Box>
        ) : (
          <>
            {/* ---------- MOBILE MENU ---------- */}
            <IconButton
              onClick={() => setOpenDrawer(true)}
              sx={{ color: "#C41E3A" }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <List sx={{ width: 250 }}>
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <React.Fragment key={item.label}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => {
                            if (item.type === "programs")
                              setMobileProgramsOpen(!mobileProgramsOpen);
                            if (item.type === "resources")
                              setMobileResourcesOpen(!mobileResourcesOpen);
                          }}
                        >
                          <ListItemText primary={item.label} />
                          {((item.type === "programs" && mobileProgramsOpen) ||
                            (item.type === "resources" && mobileResourcesOpen)) ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </ListItemButton>
                      </ListItem>

                      {/* Collapsible Submenu for Mobile */}
                      <Collapse
                        in={
                          (item.type === "programs" && mobileProgramsOpen) ||
                          (item.type === "resources" && mobileResourcesOpen)
                        }
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {(item.type === "programs"
                            ? programsSubItems
                            : resourceSubItems
                          ).map((subItem) => (
                            <ListItemButton
                              key={subItem.label}
                              component="a"
                              href={subItem.href}
                              onClick={() => {
                                setOpenDrawer(false);
                                if (item.type === "programs")
                                  setMobileProgramsOpen(false);
                                else setMobileResourcesOpen(false);
                              }}
                              sx={{ pl: 4 }}
                            >
                              <ListItemText primary={subItem.label} />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  ) : (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        component="a"
                        href={item.href}
                        onClick={() => setOpenDrawer(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href="#/apply"
                    onClick={() => setOpenDrawer(false)}
                  >
                    <ListItemText
                      primary="PITCH TO US"
                      sx={{ color: "#C41E3A", fontWeight: "bold" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
