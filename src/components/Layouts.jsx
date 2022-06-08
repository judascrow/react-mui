import { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import Content from "./Content";

const drawerWidth = 200;

const Layouts = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    console.log("click");
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar handleDrawerToggle={handleDrawerToggle} />

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        container={container}
        drawerWidth={drawerWidth}
      />
      <Content drawerWidth={drawerWidth} />
    </Box>
  );
};

Layouts.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layouts;
