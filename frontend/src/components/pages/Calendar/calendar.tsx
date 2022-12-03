import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { CalendarColumn } from "./CalendarColumn/calendarColumn";
import { CalendarHeader } from "./CalendarHeader/calendarHeader";
import { TimeBlock } from "./TimeBlock/timeBlock";
import { Timestamps } from "./Timestamps/timestamps";

export const Calendar = () => {
  return (
    <Grid templateRows="auto 1fr" maxH="100vh">
      <Grid gridColumnStart="0" gridColumnEnd="1">
        <CalendarHeader />
      </Grid>
      <Grid gridTemplateColumns="auto 1fr" pos="relative" overflowY="scroll">
        <Grid bg="red" w="200px" pos="sticky" top="0" h="100%" >
          Tasks
        </Grid>
        <Grid gridTemplateColumns="auto 1fr">
          <Timestamps />
          <Grid templateColumns="repeat(7, 200px)" overflow="scroll">
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
            <CalendarColumn />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
