import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Grid,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { tasks } from "../tasks";

export const TimeBlock = ({
  date,
  timeSpan,
  name,
  tasksAdded,
}: {
  date: Date;
  timeSpan: number;
  name: string;
  tasksAdded: any;
}) => {
  const [row, setRow] = useState<number>(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const blockIndex = Math.floor(
      date.getMinutes() + (date.getHours() * 60) / 15
    );
    setRow(blockIndex);
  });

  return (
    <Droppable droppableId={name}>
      {(provided: any) => (
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
          {...provided.draggable}
          ref={provided.innerRef}
        >
          {name}
          {tasksAdded.length > 0 && <Text>{tasksAdded.get(name)}</Text>}
          {isOpen && (
            <Grid
              w="200px"
              h="100vh"
              top="0"
              right="0"
              background={"white"}
              position="fixed"
              zIndex="1"
            >
              <CloseButton onClick={onClose} />
            </Grid>
          )}
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
  );
};
