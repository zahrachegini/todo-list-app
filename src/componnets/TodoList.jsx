import React, { useState } from "react";
import {
  Box,
  Checkbox,
  InputAdornment,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  CategoryTypography,
  CreateIcon,
  DeleteIcon,
  MenuRoundedIcon,
  SelectTextField,
  SerachTextField,
  TodoAddRounded,
  TodoDivider,
  TodoListGrid,
  TodoNameTypography,
} from "./todoList.style";
import { Search } from "@mui/icons-material";
import Sidebar from "./sidebar/Sidebar";
import Grid from "@mui/material/Unstable_Grid2";

const TodoList = () => {
  const [isShow, setIsShow] = useState(false);

  const handleDrawerToggle = () => {
    console.log("OK");
    setIsShow(!isShow);
  };
  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      sx={{ width: "100vw" }}
    >
      <Sidebar setIsShow={setIsShow} />

      <TodoListGrid xs={12} md={9}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <MenuRoundedIcon
            onClick={() => handleDrawerToggle()}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          />
          <Typography variant="h5" paddingTop="25px">
            All Tasks
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap="1rem"
          flexWrap="wrap"
          paddingRight="3rem"
          paddingLeft="3rem"
          paddingBottom="1rem"
        >
          <SerachTextField
            variant="outlined"
            placeholder="Search something..."
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <SelectTextField>
            <MenuItem value="">All</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectTextField>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          paddingRight="3rem"
          paddingLeft="3rem"
        >
          <Box
            display="flex"
            alignItems="center"
            paddingTop="10px"
            paddingBottom="10px"
          >
            <Checkbox
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                color: "#1B91FB",
              }}
            />
            <TodoNameTypography variant="p">
              Get a new helmet
            </TodoNameTypography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            paddingTop="10px"
            paddingBottom="10px"
          >
            <CreateIcon />
            <DeleteIcon />
            <CategoryTypography variant="span" marginLeft="40px">
              Uncategorized
            </CategoryTypography>
          </Box>
        </Box>
        <TodoDivider variant="middle" />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          paddingRight="3rem"
          paddingLeft="3rem"
        >
          <Box
            display="flex"
            alignItems="center"
            paddingTop="10px"
            paddingBottom="10px"
          >
            <Checkbox
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                color: "#1B91FB",
              }}
            />
            <TodoNameTypography
              variant="p"
              sx={{
                color: "#A9A9B5",
                textDecorationLine: "line-through",
              }}
            >
              Get a new helmet
            </TodoNameTypography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            paddingTop="10px"
            paddingBottom="10px"
          >
            <CreateIcon />
            <DeleteIcon />
            <CategoryTypography
              variant="span"
              marginLeft="40px"
              sx={{
                color: "#FFFFFF",
                bgcolor: "#DCDCE5",
              }}
            >
              Uncategorized
            </CategoryTypography>
          </Box>
        </Box>
        <TodoDivider variant="middle" />
        <Box>
          <TodoAddRounded />
        </Box>
      </TodoListGrid>
    </Grid>
  );
};

export default TodoList;
