import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { tasks } from "./tasks";

export const TasksList = () => {
  const [tasksList, updateTasksList] = useState(tasks);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tasksList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateTasksList(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided: any) => (
          <Flex
            flexDirection="column"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map(({ id, name, desc }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided: any) => (
                    <Flex
                      bgColor="white"
                      p="10px"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {name}
                    </Flex>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </DragDropContext>
  );
};
