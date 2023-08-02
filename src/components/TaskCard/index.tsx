import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { TaskCardComponent, TaskListComponent } from "./styles";

type taskCardProps = {
  name: string;
  setTaskDetailArray: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TaskCard({ name, setTaskDetailArray }: taskCardProps) {
  const [isEditable, setIsEditable] = useState(false);

  function deleteTask() {
    setTaskDetailArray((prevArray) =>
      prevArray.filter((value) => value !== name)
    );
  }

  function editTask(editedTaskName: string) {
    setTaskDetailArray((prevArray) =>
      prevArray.map((value) => (value === name ? editedTaskName : value))
    );
  }

  return (
    <TaskCardComponent>
      <TaskListComponent>
        {isEditable ? (
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            style={{ fontFamily: "cursive"}}
            defaultValue={name}
            onChange={(event) =>
              editTask((event.target as HTMLInputElement).value)
            }
          />
        ) : (
          <>{name}</>
        )}
      </TaskListComponent>
      {isEditable ? (
        <Button onClick={() => setIsEditable(false)}>
          <DoneIcon />
        </Button>
      ) : (
        <Button onClick={() => setIsEditable(true)}>
          <EditIcon />
        </Button>
      )}
      <Button onClick={() => deleteTask()}>
        <DeleteIcon />
      </Button>
    </TaskCardComponent>
  );
}
