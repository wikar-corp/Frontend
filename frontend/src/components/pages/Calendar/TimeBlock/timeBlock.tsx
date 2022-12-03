import { Box, Button, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../../Tasks/Task/task";
import { useUser } from "../../../../providers/User/useUser";

export const TimeBlock = ({
  date,
  timeSpan,
  name,
  color,
  tasksAdded,
  updateTasksList,
  tasksList,
  setTasksAdded,
}: {
  date: Date;
  timeSpan: number;
  name: string;
  color: string;
  tasksAdded: any;
  updateTasksList: any;
  tasksList: any[];
  setTasksAdded: any;
}) => {
  const [row, setRow] = useState<number>(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tasksArr, setTasksArr] = useState<any[]>([]);

  const { tasks } = useUser();
  const [allTimeSlot, setAllTimeSlot] = useState(0);
  const sloteMinutes = timeSpan * 15;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const blockIndex = Math.floor(
      date.getMinutes() + (date.getHours() * 60) / 15
    );
    setRow(blockIndex);
  });

  useEffect(() => {
    let sum = 0;
    console.log("XD");
    tasks
      .filter((val) => val.slotId == name)
      .forEach((el) => {
        sum += el.estimatedMinutes;
      });

    setAllTimeSlot(sum);
  }, [tasks]);

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
      bg={color}
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
          background={"#f0f0f0"}
          position="fixed"
          zIndex="1"
          gridTemplateRows="auto auto 1fr auto"
          gap="30px"
          p="25px"
          cursor="default"
        >
          <Text color="black" fontSize="25px" fontWeight="600">
            {name}
          </Text>
          <Flex direction="column">
            <Text color="black">
              {Math.floor((allTimeSlot / (timeSpan * 15)) * 100)}%
            </Text>
            <Box bg="gray" w="100%">
              <Flex
                w={`${Math.floor((allTimeSlot / (timeSpan * 15)) * 100)}%`}
                h="20px"
                maxW="100%"
                bgColor={
                  Math.floor((allTimeSlot / (timeSpan * 15)) * 100) > 100
                    ? "#FF3F3F"
                    : "green.300"
                }
              />
            </Box>
          </Flex>
          <Droppable droppableId={name}>
            {(provided: any) => (
              <Flex
                {...provided.draggable}
                ref={provided.innerRef}
                flexDirection="column"
                gap="10px"
                color="black"
              >
                {tasks.filter((val) => val.slotId === name).length <= 0 && (
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

                {tasks
                  .filter((val) => val.slotId === name)
                  .map((task: any, index) => (
                    <Task
                      urgency={task.priority}
                      estimatedTime={task.estimatedMinutes}
                      completed={task.isCompleted}
                      dueDate={new Date()}
                      name={task.taskName}
                      id={task.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      drawerInfo
                      onClickLeftArrow={() => {
                        setAllTimeSlot(allTimeSlot - task.estimatedMinutes);
                        setPercent(allTimeSlot / sloteMinutes);
                        // const items = Array.from(tasksList);
                        // items.push(task);
                        // updateTasksList(items);
                        // setTasksArr(
                        //   tasksArr.filter((t) => {
                        //     return t.id !== task.id;
                        //   })
                        // );
                        // setTasksAdded(
                        //   (prev: any) => new Map([prev.set(name, tasksArr)])
                        // );
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
