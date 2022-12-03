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
import { tasks } from "../Calendar/tasks";

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

export const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dueDate, setDueDate] = useState(new Date());
  const [taskName, setTaskName] = useState<string>("Task");
  const [urgency, setUrgency] = useState<number>(1);

  const addNewTask = () => {

    
    console.log(dueDate, taskName, urgency);
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
        {tasks.map((el) => (
          <Task
            urgency={Math.floor(Math.random() * 5 + 1)}
            completed={false}
            dueDate={new Date()}
            name={el.name}
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
              <Box>Due date</Box>
              <ReactDatePicker
                selected={dueDate}
                onChange={(date: Date) => setDueDate(date)}
              />
            </Flex>
            <Flex flexDir="column" gap="12px">
              <Box>Urgency</Box>
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
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                addNewTask();
                onClose();
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
