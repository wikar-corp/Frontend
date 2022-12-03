import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { tasks } from "./tasks";

export const TasksList = ({ tasksList }: { tasksList: any[] }) => {
  return (
    <Droppable droppableId="tasks">
      {(provided: any) => (
        <Flex
          flexDirection="column"
          alignItems="center"
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
                  <Flex
                    borderRadius="10px"
                    width="90%"
                    bgColor="#dadada"
                    p="10px"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {task?.name}
                  </Flex>
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
