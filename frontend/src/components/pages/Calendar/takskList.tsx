import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Task } from "../Tasks/Task/task";

export const TasksList = ({ tasksList }: { tasksList: any[] }) => {
  return (
    <Droppable droppableId="tasks">
      {(provided: any) => (
        <Flex
          flexDirection="column"
          //alignItems="center"
          py="20px"
          gap="10px"
          {...provided.droppableProps}
          ref={provided.innerRef}
          zIndex="999"
        >
          {tasksList.length === 0 && "no tasks"}
          {tasksList.map((task: any, index: any) => {
            return (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided: any) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Task
                      dueDate={new Date()}
                      name={task.name}
                      completed={false}
                      urgency={3}
                      minimalInfo
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                  </Box>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </Flex>
      )}
    </Droppable>
  );
};
