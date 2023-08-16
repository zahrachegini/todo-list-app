import { Box, Typography, Link } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import folder from "../../assets/images/Folder.svg";
import { TodoGrid } from "./addAndEditTodo.style";
const EmptyList = () => {
  return (
    <TodoGrid display="flex" alignItems="center" justifyContent="center">
      <Box>
        <img src={folder} />
        <Box
          sx={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <Typography>There's no task here!</Typography>
          <Link
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingTop="20px"
          >
            <AddRounded sx={{ color: "#1B91FB" }} />
            <Typography sx={{ color: "#1B91FB" }}>Create new task</Typography>
          </Link>
        </Box>
      </Box>
    </TodoGrid>
  );
};

export default EmptyList;
