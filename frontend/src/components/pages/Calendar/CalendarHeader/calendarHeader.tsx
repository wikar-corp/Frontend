import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const CalendarHeader = ({
  mondayDate,
  sundayDate,
  setMondayDate,
  setSundayDate,
  addDays,
}: {
  mondayDate: Date;
  sundayDate: Date;
  setMondayDate: any;
  setSundayDate: any;
  addDays: (date: Date, days: number) => Date;
}) => {
  const bg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK");

  return (
    <Flex
      padding="20px 40px"
      color={bg}
      justifyContent="space-between"
      borderBottom="1px solid rgba(0,0,0,0.1)"
    >
      <Flex fontSize="40px" color="black">
        {mondayDate.getDate()}-{sundayDate.getDate()}
        &nbsp;{mondayDate.toLocaleString("en-us", { month: "long" })}
      </Flex>
      <Flex gap="15px">
        <Button
          bgColor="#FF3F3F"
          onClick={() => {
            setMondayDate(addDays(mondayDate, -7));
            setSundayDate(addDays(sundayDate, -7));
          }}
        >
          Previous week
        </Button>
        <Button
          bgColor="#FF3F3F"
          onClick={() => {
            setMondayDate(addDays(mondayDate, 7));
            setSundayDate(addDays(sundayDate, 7));
          }}
        >
          Next week
        </Button>
      </Flex>
    </Flex>
  );
};
