import { Box, Button, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../../Tasks/Task/task";

export const TimeBlock = ({
  date,
  timeSpan,
  name,
  tasksAdded,
  updateTasksList,
  tasksList,
  setTasksAdded,
}: {
  date: Date;
  timeSpan: number;
  name: string;
  tasksAdded: any;
  updateTasksList: any;
  tasksList: any[];
  setTasksAdded: any;
}) => {
  const [row, setRow] = useState<number>(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tasksArr, setTasksArr] = useState<any[]>([]);

  useEffect(() => {
    const blockIndex = Math.floor(
      date.getMinutes() + (date.getHours() * 60) / 15
    );
    setRow(blockIndex);
  });

  useEffect(() => {
    if (tasksAdded.get(name)) {
      setTasksArr(tasksAdded.get(name));
    }
  }, [tasksAdded]);

  const handleClick = (task: any) => {
    const items = Array.from(tasksList);
    items.push(task);
    console.log(items);
    updateTasksList(items);
    setTasksArr(
      tasksArr.filter((t) => {
        return t.id !== task.id;
      })
    );
    setTasksAdded((prev: any) => new Map([prev.set(name, tasksArr)]));
  };

  return (
    <Grid
      bg="BRAND"
      borderRadius="4px"
      color="white"
      padding="10px"
      gridRowStart={row}
      gridRowEnd={row + timeSpan}
      cursor="pointer"
      position="relative"
      onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
    >
      {name}
      <Box
        pos="absolute"
        w="100%"
        opacity="0"
        h="100%"
        bg="rgba(255,255,255,0.3)"
        _hover={{ opacity: "1" }}
      />
      {isOpen && (
        <Grid
          w="35vw"
          h="100vh"
          top="0"
          right="0"
          background={"#dadada"}
          position="fixed"
          zIndex="1"
          gridTemplateRows="auto 1fr auto"
          gap="30px"
          p="25px"
          cursor="default"
        >
          <Text color="black" fontSize="25px" fontWeight="600">
            {name}
          </Text>

          <Droppable droppableId={name}>
            {(provided: any) => (
              <Flex
                {...provided.draggable}
                ref={provided.innerRef}
                flexDirection="column"
                gap="10px"
                color="black"
              >
                {tasksArr.length <= 0 && (
                  <Flex
                    h="90%"
                    w="100%"
                    bg="white"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="15px"
                    letterSpacing="0.1rem"
                    fontWeight="700"
                    fontSize="20px"
                  >
                    DROP HERE
                  </Flex>
                )}
                {tasksArr.map((task: any, index) => (
                  <Task
                    dueDate={new Date()}
                    name={task.name}
                    completed={false}
                    urgency={3}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    drawerInfo
                    onClickLeftArrow={() => {
                      const items = Array.from(tasksList);
                      items.push(task);
                      updateTasksList(items);
                      setTasksArr(
                        tasksArr.filter((t) => {
                          return t.id !== task.id;
                        })
                      );
                      setTasksAdded(
                        (prev: any) => new Map([prev.set(name, tasksArr)])
                      );
                    }}
                  />
                ))}

                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
          <Button
            bgColor="#FF3F3F"
            _hover={{ opacity: 0.6 }}
            onClick={(e: any) => {
              e.stopPropagation();
              onClose();
            }}
          >
            Close
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
