import {
  CheckIcon,
  CloseIcon,
  DeleteIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import { Box, Flex, Grid, Input, useColorModeValue } from "@chakra-ui/react";
import { useUser } from "providers/User/useUser";
import { useState } from "react";
import { Urgency } from "./Urgency/urgency";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Task = ({
  dueDate,
  name,
  completed,
  isEditing = false,
  estimatedTime,
  id,
  urgency,
  minimalInfo = false,
  drawerInfo = false,
  onClickLeftArrow,
}: {
  dueDate: Date;
  name: string;
  id: string;
  estimatedTime: number;
  completed: boolean;
  isEditing?: boolean;
  minimalInfo?: boolean;
  drawerInfo?: boolean;
  urgency: number;
  onClickLeftArrow?: any;
}) => {
  const { deleteTask, tickTask } = useUser();

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  const bg = useColorModeValue("white", "#121212");
  const text = useColorModeValue("black", "white");

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      h="70px"
      bg={bg}
      _hover={{ opacity: 0.6 }}
      transition="0.5s"
      opacity={completed ? "0.4" : "1"}
      padding="0px 30px"
      borderRadius="4px"
      data-group
    >
      <Flex align="center" gap="20px">
        {!minimalInfo && (
          <Flex
            align="center"
            justify="center"
            borderRadius="50%"
            onClick={() => tickTask(id, !completed)}
            border="1px solid"
            borderColor={completed ? "#2ecc71" : "#e4e4e4"}
            transition="0.2s"
            bg={completed ? "#2ecc71" : "none"}
            boxSize="20px"
            cursor="pointer"
          >
            {completed && <CheckIcon width="10px" color="white" />}
          </Flex>
        )}
        <Flex flexDir="column" lineHeight="100%" gap="2px">
          <Box
            fontSize="16px"
            opacity="0.8"
            fontWeight="bold"
            mt="2px"
            color={text}
          >
            {name}
          </Box>
          {minimalInfo ? (
            <Flex fontSize="14px" opacity="0.6" fontWeight="bold">
              {estimatedTime} min
            </Flex>
          ) : (
            <Flex fontSize="13px" fontWeight="300" color="#9B9B9B">
              {dueDate.getDate() + " " + months[dueDate.getMonth()]}
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex align="center" gap="25px">
        {!minimalInfo && (
          <Flex fontSize="14px" opacity="0.6" fontWeight="bold">
            {estimatedTime} min
          </Flex>
        )}
        <Urgency value={urgency} />
        {!minimalInfo && !drawerInfo && (
          <Flex
            align="center"
            justify="center"
            boxSize="30px"
            cursor="pointer"
            _hover={{ bg: "#e74c3c" }}
            bg="#f6f6f6"
            borderRadius="4px"
            transition="1s width"
            onClick={handleDeleteTask}
          >
            <CloseIcon w="12px" color="white" />
          </Flex>
        )}
        {drawerInfo && (
          <Flex
            align="center"
            justify="center"
            boxSize="30px"
            cursor="pointer"
            _hover={{ bg: "#14b231" }}
            bg="#f6f6f6"
            borderRadius="4px"
            transition="1s width"
            onClick={onClickLeftArrow}
          >
            <ArrowLeftIcon w="12px" color="white" />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
