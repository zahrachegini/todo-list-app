import React from "react";
import { Box } from "@mui/material";
import {
  CancelButton,
  CreateOrEditButton,
  InputTextField,
  TitleTypography,
  LabelTypography,
  TodoGrid,
  KeyboardBackspaceIcon,
} from "./addAndEditTodo.style";

const AddTodo = () => {
  return (
    <TodoGrid display="flex" alignItems="center" justifyContent="center">
      <Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <KeyboardBackspaceIcon />
          <TitleTypography variant="h5">Create New Task</TitleTypography>
        </Box>
        <Box>
          <form style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Box
              display="flex"
              alignItems="start"
              justifyContent="center"
              flexDirection="column"
            >
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
              <CreateOrEditButton
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
              </CreateOrEditButton>
              <CancelButton
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
                Create
              </CancelButton>
            </Box>
          </form>
        </Box>
      </Box>
    </TodoGrid>
  );
};

export default AddTodo;
