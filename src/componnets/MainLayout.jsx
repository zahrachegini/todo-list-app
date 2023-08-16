import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./sidebar/Sidebar";
import AddTodo from "./todo/AddTodo";
import EditTodo from "./todo/EditTodo";
import TodoList from "./TodoList";
import EmptyList from "./todo/EmptyList";

export default function BasicGrid() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        paddingX: { lg: "12rem", md: "6rem", sm: "0" },
        paddingY: { lg: "8rem", md: "6rem", sm: "0" },
        bgcolor: "#f3f3fc",
      }}
    >
      <TodoList />
      {/* <AddTodo /> */}
      {/* <EditTodo /> */}
      {/* <EmptyList /> */}
    </Grid>
  );
}
