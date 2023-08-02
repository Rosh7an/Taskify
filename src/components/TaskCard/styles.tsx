import { Box, buttonClasses, inputBaseClasses, styled } from "@mui/material";
import Paper from "@mui/material/Paper";

const TaskListComponentName = "TaskListComponent";
export const TaskListComponent = styled(Paper, { name: TaskListComponentName })(
  () => ({
    width: 300,
    marginTop: 20,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    textAlign: "center",
    height: "fit-content",
    padding: "1%",
    [`& .${inputBaseClasses.input}`]: {
      fontFamily: "cursive",
      textAlign: "center",
    },
  })
);

export const TaskCardComponent = styled(Box, { name: "TaskCardComponent" })(
  () => ({
    display: "flex",
    width: 450,
    alignItems: "center",
    fontFamily: "cursive",
    [`& .${buttonClasses.root}`]: {
      height: 40,
      marginLeft: 10,
      marginTop: 20,
      fontSize: 5,
      fontFamily: "cursive",
      color: "white",
      borderRadius: 25,
    },
  })
);
