import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TasksList } from "./takskList";
import { DragDropContext } from "react-beautiful-dnd";
import { CalendarHeader } from "./CalendarHeader/calendarHeader";
import { Timestamps } from "./Timestamps/timestamps";
import { CalendarColumn } from "./CalendarColumn/calendarColumn";
import { useUser } from "providers/User/useUser";

export const Calendar = () => {
  const tasksBg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK");
  const calendarBg = useColorModeValue(
    "BACKGROUND_1.LIGHT",
    "BACKGROUND_1.DARK"
  );

  const { tasks, moveTask, getWeek, getSlots } = useUser();

  const [num, setNum] = useState<number>(0);
  const [tasksList, updateTasksList] = useState(tasks);
  const [tasksAdded, setTasksAdded] = useState(new Map());

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    if (
      result.destination.droppableId &&
      result.destination.droppableId !== "tasks"
    ) {
      setNum(num + 1);
      const el = tasksList.splice(result.source.index, 1)[0];
      console.log(tasksAdded.get(result.destination.droppableId));
      // setTasksAdded(
      //   (prev: any) =>
      //     new Map([
      //       ...prev,
      //       [
      //         result.destination.droppableId,
      //         (tasksAdded.get(result.destination.droppableId) ?? []).concat([
      //           el,
      //         ]),
      //       ],
      //     ])
      // );

      console.log(result);
      moveTask(result.draggableId, result.destination.droppableId);
    }

    console.log("END");
    if (result.destination.droppableId === "tasks") {
      const items = Array.from(tasksList);
      console.log(items);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateTasksList(items);
    }
  };

  const today = new Date();
  let dayName = today.getDay();

  const [mondayDate, setMondayDate] = useState<Date>(new Date());
  const [sundayDate, setSundayDate] = useState<Date>(new Date());

  const addDays = (date: Date, days: number) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  useEffect(() => {
    setMondayDate(new Date());
    setSundayDate(new Date());
    setMondayDate(addDays(mondayDate, 1 - dayName));
    setSundayDate(addDays(sundayDate, 7 - dayName));
    getWeek(mondayDate);
    getSlots(mondayDate);
    console.log("slots", getSlots(mondayDate));
  }, []);

  useEffect(() => {
    console.log("slots", getSlots(mondayDate));
  }, [mondayDate]);

  return (
    <Flex>
      <DragDropContext onDragEnd={(result: any) => handleOnDragEnd(result)}>
        <Grid templateRows="auto 1fr" maxH="100vh" bgColor={calendarBg}>
          <Grid
            gridColumnStart="0"
            gridColumnEnd="1"
            overflow="auto"
            maxH="100vh"
          >
            <CalendarHeader
              mondayDate={mondayDate}
              sundayDate={sundayDate}
              setMondayDate={setMondayDate}
              setSundayDate={setSundayDate}
              addDays={addDays}
            />
          </Grid>
          <Grid gridTemplateColumns="auto 1fr" overflow="auto" maxH="100vh">
            <Grid
              bg={tasksBg}
              w="400px"
              top="0"
              h="100%"
              overflowY="scroll"
              maxH="100vh"
            >
              <TasksList tasksList={tasks} />
            </Grid>
            <Grid
              gridTemplateColumns="auto 1fr"
              zIndex="1"
              overflow="scroll"
              maxH="100vh"
            >
              <Timestamps />
              <Grid templateColumns="repeat(7, 200px)">
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                  date={mondayDate}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                  date={addDays(mondayDate, 1)}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                  date={addDays(mondayDate, 2)}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                  date={addDays(mondayDate, 3)}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                  date={addDays(mondayDate, 4)}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                  date={addDays(mondayDate, 5)}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                  date={addDays(mondayDate, 6)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DragDropContext>
    </Flex>
  );
};
