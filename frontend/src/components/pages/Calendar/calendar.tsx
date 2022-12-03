import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { TasksList } from "./takskList";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { tasks } from "./tasks";
import { CalendarHeader } from "./CalendarHeader/calendarHeader";
import { Timestamps } from "./Timestamps/timestamps";
import { CalendarColumn } from "./CalendarColumn/calendarColumn";

export const Calendar = () => {
  const tasksBg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK");
  const calendarBg = useColorModeValue(
    "BACKGROUND_1.LIGHT",
    "BACKGROUND_1.DARK"
  );

  const [num, setNum] = useState<number>(0);
  const [tasksList, updateTasksList] = useState(tasks);
  const [tasksAdded, updateTasksAdded] = useState<any[]>([]);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    if (result.destination.droppableId === "slot") {
      setNum(num + 1);
      tasksList.splice(result.source.index, 1);
      tasksAdded.push(result);
      console.log(tasksAdded);
    }

    const items = Array.from(tasksList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateTasksList(items);
  };

  return (
    <DragDropContext onDragDropEnd={(result: any) => handleOnDragEnd(result)}>
      <Grid templateRows="auto 1fr" maxH="100vh">
        <Grid gridColumnStart="0" gridColumnEnd="1">
          <CalendarHeader />
        </Grid>
        <Grid gridTemplateColumns="auto 1fr" pos="relative" overflowY="scroll">
          <Grid bg={tasksBg} w="200px" pos="sticky" top="0" h="100%">
            <TasksList tasksList={tasksList} />
          </Grid>
          <Grid gridTemplateColumns="auto 1fr">
            <Timestamps />
            <Grid templateColumns="repeat(7, 200px)" overflow="scroll">
              <CalendarColumn />
              <CalendarColumn />
              <CalendarColumn />
              <CalendarColumn />
              <CalendarColumn />
              <CalendarColumn />
              <CalendarColumn />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};
