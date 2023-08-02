import { Button } from "@mui/material";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";
import { fireStore } from "../config";
import { AppComponent } from "./styles";

export default function App() {
  type taskDataType = {
    key: string[];
  };

  const [taskDetailArray, setTaskDetailArray] = useState<string[]>([]);

  const [isInitiallyRendered, setIsInitiallyRendered] = useState(false);

  const getData = async () => {
    const docRef = doc(fireStore, "MyTasks", "Task Today");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const tasks = docSnap.data() as taskDataType;
      setTaskDetailArray(tasks.key); // Update the state with the retrieved data
      setIsInitiallyRendered(true);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);

  const updateData = async () => {
    await setDoc(doc(fireStore, "MyTasks", "Task Today"), {
      key: taskDetailArray,
    });
  };

  useEffect(() => {
    if (isInitiallyRendered) {
      updateData();
    }
  }, [taskDetailArray]);

  return (
    <AppComponent>
      <Header
        taskDetailArray={taskDetailArray}
        setTaskDetailArray={setTaskDetailArray}
      />
      {taskDetailArray && (
        <>
          <Button>In Progress: {taskDetailArray.length}</Button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {Array.from({ length: taskDetailArray.length }, (_, index) => (
              <TaskCard
                key={index}
                name={taskDetailArray[index]}
                setTaskDetailArray={setTaskDetailArray}
              />
            ))}
          </div>
        </>
      )}
    </AppComponent>
  );
}
