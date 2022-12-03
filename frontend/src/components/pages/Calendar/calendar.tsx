import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
      setTasksAdded(
        (prev: any) =>
          new Map([
            ...prev,
            [
              result.destination.droppableId,
              (tasksAdded.get(result.destination.droppableId) ?? []).concat([
                el,
              ]),
            ],
          ])
      );

      //   tasksAdded[result.destination.droppableId].push(result);
      //console.log(tasksAdded.get(result.destination.droppableId));
    }

    console.log("END");
    if (result.destination.droppableId === "tasks") {
      const items = Array.from(tasksList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateTasksList(items);
    }
  };

  return (
    <Flex overflow="auto">
      <DragDropContext onDragEnd={(result: any) => handleOnDragEnd(result)}>
        <Grid templateRows="auto 1fr" maxH="100vh">
          <Grid gridColumnStart="0" gridColumnEnd="1">
            <CalendarHeader />
          </Grid>
          <Grid gridTemplateColumns="auto 1fr" overflowY="scroll">
            <Grid bg={tasksBg} w="200px" top="0" h="100%">
              <TasksList tasksList={tasksList} />
            </Grid>
            <Grid gridTemplateColumns="auto 1fr" zIndex="1">
              <Timestamps />
              <Grid templateColumns="repeat(7, 200px)" overflow="scroll">
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                />
                <CalendarColumn
                  tasksAdded={tasksAdded}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksAdded={setTasksAdded}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DragDropContext>
    </Flex>
  );
};
