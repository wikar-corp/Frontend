import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { Task } from "../Tasks/Task/task";

export const TasksList = ({ tasksList }: { tasksList: any[] }) => {
  return (
    <Droppable droppableId="tasks">
      {(provided: any) => (
        <Flex
          flexDirection="column"
          //alignItems="center"
          pb="20px"
          borderRight="1px solid #ebebeb"
          gap="10px"
          {...provided.droppableProps}
          ref={provided.innerRef}
          zIndex="999"
        >
          <Flex
            padding="15px 35px"
            align="center"
            justifyContent="space-between"
            fontSize="20px"
            bg="none"
            fontWeight="bold"
            borderBottom="1px solid rgba(0,0,0,0.1)"
          >
            Active tasks
            <Link to="/tasks">
              <Flex
                gap="15px"
                align="center"
                fontWeight="light"
                fontSize="13px"
              >
                Task List
                <ArrowRightIcon color="gray" />
              </Flex>
            </Link>
          </Flex>
          {tasksList.length === 0 && "no tasks"}
          {tasksList
            .filter((el) => el.isCompleted == false)
            .map((task: any, index: any) => {
              return (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided: any) => (
                    <Box
                      px="6px"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task
                        urgency={task.priority}
                        completed={task.isCompleted}
                        dueDate={new Date()}
                        name={task.taskName}
                        id={task.id}
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
