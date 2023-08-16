import React from "react";
import { Typography, Box, TextField, Button, Stack } from "@mui/material";

import {
  KeyboardBackspaceIcon,
  TitleTypography,
  LabelTypography,
  InputTextField,
  CreateOrEditButton,
  CancelButton,
  TodoGrid,
} from "./addAndEditTodo.style";

const EditTodo = () => {
  return (
    <TodoGrid display="flex" alignItems="center" justifyContent="center">
      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingBottom="30px"
        >
          <KeyboardBackspaceIcon />
          <TitleTypography variant="h5">Edit Task</TitleTypography>
        </Box>
        <form>
          <Box display="flex" alignItems="start" flexDirection="column">
            <LabelTypography>Title</LabelTypography>
            <InputTextField />
          </Box>
          <Box
            display="flex"
            alignItems="start"
            flexDirection="column"
            sx={{ marginTop: "50px" }}
          >
            <LabelTypography>Category</LabelTypography>
            <InputTextField />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            flexWrap="wrap"
            sx={{ marginTop: "20px" }}
          >
            <CancelButton
              sx={{
                //   paddingX: "60px",
                paddingY: "15px",
                borderRadius: "16px",
                border: "1px solid #1B91FB",
                width: "184px",
                height: "47px",
              }}
            >
              Cancel
            </CancelButton>
            <CreateOrEditButton
              sx={{
                //   paddingX: "60px",
                paddingY: "15px",
                borderRadius: "16px",
                bgcolor: "#1B91FB",
                color: "#FFFFFF",
                width: "184px",
                height: "47px",
              }}
            >
              Edit
            </CreateOrEditButton>
          </Box>
        </form>
      </Box>
    </TodoGrid>
  );
};

export default EditTodo;
