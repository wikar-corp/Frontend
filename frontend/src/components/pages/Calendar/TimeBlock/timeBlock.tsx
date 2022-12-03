import { Box, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

export const TimeBlock = ({
  date,
  timeSpan,
  name,
}: {
  date: Date;
  timeSpan: number;
  name: string;
}) => {
  const [row, setRow] = useState<number>(0);

  useEffect(() => {
    const blockIndex = Math.floor(
      date.getMinutes() + (date.getHours() * 60) / 15
    );
    setRow(blockIndex);
  });

  return (
    <Grid
      bg="BRAND"
      borderRadius="4px"
	  color='white'
		padding="10px"
      gridRowStart={row}
      gridRowEnd={row + timeSpan}
      onClick={(e) => {
        e.stopPropagation();
        alert("XD");
      }}
    >
      {name}
    </Grid>
  );
};
