import styled from "styled-components";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

export const TodoGrid = styled(Grid)`
  background: #ffffff;
  position: relative;
  height: 100%;
  border-radius: 16px;
  width: 100vw;
`;

export const KeyboardBackspaceIcon = styled(KeyboardBackspace)`
  width: 24px;
  height: 24px;
  left: 20px;
  top: 36px;
  position: absolute;
`;

export const TitleTypography = styled(Typography)`
  top: 36px;
  /* text-align: center; */
  position: absolute;
`;

export const InputTextField = styled(TextField)`
  width: 400px;
  margin-top: 10px;
`;

export const CreateOrEditButton = styled(Button)`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 16px;
  background-color: #1b91fb;
  color: #ffffff;
  width: 150px;
`;

export const CancelButton = styled(Button)`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 16px;
  border: 1px solid #1b91fb;
  width: 150px;
`;

export const LabelTypography = styled.label`
  font-family: "vazir";
`;
