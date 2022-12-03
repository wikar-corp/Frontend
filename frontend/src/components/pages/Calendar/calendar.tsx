import { Grid } from "@chakra-ui/react";
import { TasksList } from "./takskList";

export const Calendar = () => {
  return (
    <Grid templateColumns="auto 1fr">
      <Grid bg="blue" w="300px">
        <TasksList />
      </Grid>
      <Grid bg="red"></Grid>
    </Grid>
  );
};
