import React, { useState } from "react";
import { SidebarBox, SidebarStack, SidebarTypogrophy } from "./sidebar.style";
import { Drawer } from "@mui/material";

const Sidebar = ({ isShow }) => {
  // const [isShow, setIsShow] = useState(false);
  // const handleDrawerToggle = () => {
  //   setDrawerOpen(!drawerOpen);
  // };
  return (
    <SidebarStack
      xs={0}
      md={3}
      sx={{
        boxShadow: "0 10px 10px 0 rgba(0,0,0,0.05) ",
        display: { xs: `${isShow ? "block" : "none"}`, md: "block" },
      }}
    >
      <SidebarBox>
        <SidebarTypogrophy variant="h5">All</SidebarTypogrophy>
        <SidebarTypogrophy variant="h5">Groceries</SidebarTypogrophy>
        <SidebarTypogrophy variant="h5">College</SidebarTypogrophy>
        <SidebarTypogrophy variant="h5">Payment</SidebarTypogrophy>
      </SidebarBox>
    </SidebarStack>
  );
};

export default Sidebar;
