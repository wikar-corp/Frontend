import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { TasksList } from "./takskList";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { tasks } from "./tasks";

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

    if (result.destination.droppableId !== "slot") {
      const items = Array.from(tasksList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateTasksList(items);
    }
  };

  return (
    <DragDropContext onDragEnd={(result: any) => handleOnDragEnd(result)}>
      <Grid templateColumns="auto 1fr">
        <Grid bg={tasksBg} w="300px" overflowY="auto" maxH="100vh">
          <TasksList tasksList={tasksList} />
        </Grid>
        <Grid bg={calendarBg}>
          <Droppable droppableId="slot">
            {(provided: any) => (
              <Flex
                w="100px"
                h="100px"
                bgColor="blue"
                {...provided.draggable}
                ref={provided.innerRef}
              >
                tasks: {num}
              </Flex>
            )}
          </Droppable>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};
