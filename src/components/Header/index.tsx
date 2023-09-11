import { Button, Grid, TextField } from "@mui/material";

import { useRef } from "react";
import { HeaderComponent, headerComponentClasses } from "./styles";

type headerProps = {
  taskDetailArray: string[];
  setTaskDetailArray: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Header({
  taskDetailArray,
  setTaskDetailArray,
}: headerProps) {
  const textFieldRef = useRef<HTMLInputElement>(null);

  function createTask() {
    const textValue = textFieldRef?.current?.value;
    if (textValue && !taskDetailArray.includes(textValue) && textValue !== "") {
      setTaskDetailArray((prevArray) => [...prevArray, textValue]);
      if (textFieldRef.current) {
        textFieldRef.current.value = "";
      }
    }
  }
  

  return (
    <HeaderComponent>
      <Grid container className={headerComponentClasses.heading}>
        Bucket List
      </Grid>
      <Grid container className={headerComponentClasses.textInput}>
        <span style={{ display: "flex" }}>
          <TextField placeholder={"Enter your task"} inputRef={textFieldRef} />
          <Button onClick={() => createTask()}>Create Task</Button>
        </span>
      </Grid>
      {}
    </HeaderComponent>
  );
}
