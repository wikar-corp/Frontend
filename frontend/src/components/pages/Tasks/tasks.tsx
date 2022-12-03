import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  Flex,
  Grid,
  Heading,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";

import { Task } from "./Task/task";
import axios from "axios";
import { useUser } from "providers/User/useUser";

export const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { addTask, tasks } = useUser();

  const [taskName, setTaskName] = useState<string>("Task");
  const [urgency, setUrgency] = useState<number>(1);
  const [estimatedTime, setEstimatedTime] = useState<number>(30);

  const addNewTask = () => {
    addTask(new Date(), urgency, taskName, estimatedTime);
  };

  return (
    <Flex flexDir="column" bg="f8f8f8" maxH="100vh" overflowY="scroll">
      <Flex justifyContent="space-between" padding="40px">
        <Heading fontSize="35px">Your current tasks</Heading>
      </Flex>
      <Flex flexDir="column" gap="4px" padding="4px 40px 20px">
        <Button
          fontWeight="bold"
          onClick={onOpen}
          bg="none"
          border="2px solid #ebebeb"
          justifyContent="space-between"
          p="0px 32px"
          borderRadius="4px"
          h="70px"
          _hover={{ bg: "#ebebeb" }}
        >
          {" "}
          Add new Task
          <Box fontSize="40px" fontWeight="light">
            +
          </Box>
        </Button>
        {tasks.map((el: any) => (
          <Task
            estimatedTime={el.estimatedMinutes}
            urgency={el.priority}
            completed={el.isCompleted}
            dueDate={new Date()}
            name={el.taskName}
            id={el.id}
          />
        ))}
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={() => {}}>
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />

          <DrawerBody
            p="30px"
            gap="20px"
            display="flex"
            flexDir="column"
            gridGap="40px"
          >
            <Box fontSize="25px" fontWeight="bold">
              Add new Task
            </Box>
            <Flex flexDir="column" gap="12px">
              <Box>Task name</Box>
              <Input
                placeholder={"Task name"}
                defaultValue={"Task name"}
                onChange={(e) => setTaskName(e.target.value)}
              ></Input>
            </Flex>
            
            <Flex flexDir="column" gap="12px">
              <Box>Urgency: {urgency}</Box>
              <Slider
                aria-label="slider-ex-1"
                max={5}
                defaultValue={1}
                min={1}
                onChange={(val) => setUrgency(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Flex>
            <Flex flexDir="column" gap="12px">
              <Box>Estimated time: {estimatedTime} min.</Box>
              <Slider
                aria-label="slider-ex-1"
                max={240}
                defaultValue={30}
                step={15}
                min={15}
                onChange={(val) => setEstimatedTime(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
                setUrgency(1);
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                addNewTask();
                onClose();
                setUrgency(1);
              }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
