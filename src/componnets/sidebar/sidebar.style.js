import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import styled from "styled-components";

export const SidebarStack = styled(Grid)`
  background: #ffffff;
  height: 100%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  text-align: left;
`;

export const SidebarBox = styled(Box)`
  padding-top: 100px;
  padding-left: 20px;
`;

export const SidebarTypogrophy = styled(Typography)`
  padding-top: 15px;
  font-weight: bold;
`;
