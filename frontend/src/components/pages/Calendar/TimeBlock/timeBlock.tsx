import { Button, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";

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

  return (
    <Grid
      bg="BRAND"
      borderRadius="4px"
      color="white"
      padding="10px"
      gridRowStart={row}
      gridRowEnd={row + timeSpan}
      onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
    >
      {name}

      {isOpen && (
        <Grid
          w="350px"
          h="100vh"
          top="0"
          right="0"
          background={"#dadada"}
          position="fixed"
          zIndex="1"
          gridTemplateRows="auto 1fr auto"
          gap="30px"
          p="25px"
        >
          <Text color="black">{name}</Text>
          <Droppable droppableId={name}>
            {(provided: any) => (
              <Flex
                {...provided.draggable}
                ref={provided.innerRef}
                flexDirection="column"
                gap="10px"
              >
                {tasksArr.map((task: any, index) => (
                  <Flex
                    color="black"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {task.name}
                    <Button
                      onClick={() => {
                        const items = Array.from(tasksList);
                        items.push(task);
                        console.log(items);
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
                    >
                      DELETE
                    </Button>
                  </Flex>
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
