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
import { tasks } from "../Calendar/tasks";
import { Task } from "./Task/task";

export const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

          <DrawerBody p="30px" gap="20px">
			  <Box fontSize='25px' fontWeight='bold'>Add new Task</Box>
			  <Input placeholder={"Task name"}></Input>
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
