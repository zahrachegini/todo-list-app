import styled from "styled-components";
import {
  Box,
  Divider,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  AddRounded,
  CheckBox,
  CreateOutlined,
  DeleteOutline,
  MenuRounded,
} from "@mui/icons-material";

export const TodoListGrid = styled(Grid)`
  background: #fff;
  height: 100%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  text-align: center;
  position: relative;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.05);
  border-left: 2px solid #f3f3fc;
`;

export const MenuRoundedIcon = styled(MenuRounded)`
  width: 35px;
  height: 35px;
  left: 20px;
  position: absolute;
`;

export const SerachTextField = styled(TextField)`
  width: 100%;
  @media (min-width: 900px) {
    width: 60%;
  }
  top: 10px;
  background: #f3f3fc;
`;

export const SelectTextField = styled(Select)`
  width: 100%;
  @media (min-width: 900px) {
    width: 35%;
  }
  top: 10px;
`;

export const TodoNameTypography = styled(Typography)`
  font-size: 18px;
  margin-left: 20px;
  font-family: Vazir;
`;

export const CreateIcon = styled(CreateOutlined)`
  color: #1b91fb;
  width: 24px;
  height: 24px;
`;
export const DeleteIcon = styled(DeleteOutline)`
  color: #1b91fb;
  width: 24px;
  height: 24px;
`;

export const CategoryTypography = styled(Typography)`
  color: #1b91fb;
  background: #f5fbff;
  padding-right: 18px;
  padding-left: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 16px;
  width: 115px;
  height: 24px;
  font-family: Vazir;
`;

export const TodoDivider = styled(Divider)`
  background: #e4e5f0;
`;

export const TodoAddRounded = styled(AddRounded)`
  background: #1b91fb;
  color: #ffffff;
  border-radius: 50%;
  padding: 18px;
  bottom: 30px;
  right: 30px;
  position: absolute;
  width: 24px;
  height: 24px;
`;
