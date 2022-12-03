import { Box, Grid, Text } from "@chakra-ui/react";
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
            alert("XD");
          }}
          {...provided.draggable}
          ref={provided.innerRef}
        >
          {name}
          {tasksAdded.length > 0 && <Text>{tasksAdded.get(name)}</Text>}
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
  );
};
