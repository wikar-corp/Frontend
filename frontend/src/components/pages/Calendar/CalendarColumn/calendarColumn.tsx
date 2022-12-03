import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Grid,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useUser } from "providers/User/useUser";
import { useState } from "react";
import { TimeBlock } from "../TimeBlock/timeBlock";
import { CirclePicker } from "react-color";

interface Block {
  date: Date;
  name: string;
  timeSpan: number;
  color: string;
}

export const CalendarColumn = ({
  tasksAdded,
  updateTasksList,
  tasksList,
  setTasksAdded,
  date,
}: {
  tasksAdded: any;
  updateTasksList: any;
  tasksList: any[];
  setTasksAdded: any;
  date: Date;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK");

  const { addTimeblock } = useUser();

  const [blocks, setBlocks] = useState<Block[]>([
    {
      date: new Date(),
      timeSpan: 4,
      name: "something",
      color: "#aabbff",
    },
  ]);

  const [currentlyAddedBlock, setCurrentlyAddedBlock] = useState<Block | null>(
    null
  );

  const handleChangeComplete = (color: any) => {
    setCurrentlyAddedBlock((prev: any) => {
      return { ...prev, color: color.hex };
    });
  };

  const handleTimeChange = (value: any) => {
    setCurrentlyAddedBlock((prev: any) => {
      return { ...prev, timeSpan: value  };
    });
  };

  return (
    <Grid pos="relative">
      <Flex
        flexDir="column"
        h="70px"
        w="100%"
        pos="sticky"
        top="0"
        align="center"
        borderBottom="1px solid gray"
      >
        <Box>{date.toLocaleDateString("en-us", { weekday: "long" })}</Box>
        <Box fontSize="24px">{date.getDate()}</Box>
      </Flex>

      <Grid
        bgColor={bg}
        onClick={(e: any) => {
          var rect = e.target.getBoundingClientRect();

          var x = e.clientX - rect.left; //x position within the element.
          var y = e.clientY - rect.top; //y position within the element.
          console.log("Left? : " + x + " ; Top? : " + y + ".");

          const newStart = Math.floor((y / rect.height) * 96);

          onOpen();

          var d = new Date();

          console.log((newStart / 4) % 4);

          d.setHours(
            Math.floor(newStart / 4),
            (Math.floor(newStart) % 4) + 1,
            0,
            0
          );

          console.log(d);

          console.log(newStart);

          setCurrentlyAddedBlock((prev) => {
            return {
              date: d,
              timeSpan: 2,
              name: "New TimeBlock",
              color: "#aabbff",
            };
          });
        }}
        templateRows="repeat(96,20px)"
        templateColumns="1fr"
        borderLeft="1px solid rgba(0, 0, 0, 0.1)"
        w="200px"
        position="relative"
        bg={`repeating-linear-gradient(
		to bottom,
		${"white"} 0px,
		${"white"} 79px,
		${"grey"} 80px,
		${"grey"} 79px
	  )`}
      >
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={() => {
            onClose();
            setCurrentlyAddedBlock(null);
          }}
        >
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add new time block</DrawerHeader>

            <DrawerBody>
              <Flex flexDir="column" gap="12px">
                <Box>Task name</Box>
                <Input
                  placeholder="Time block name"
                  onChange={(e) => {
                    if (currentlyAddedBlock != null)
                      setCurrentlyAddedBlock((prev: any) => {
                        return { ...prev, name: e.target.value };
                      });
                  }}
                />
              </Flex>
              <Flex justifyContent="center" mt="30px">
                <CirclePicker onChangeComplete={handleChangeComplete} />
              </Flex>
              <Flex flexDir="column" gap="12px">
                <Box>
                  Time:{" "}
                  {currentlyAddedBlock ? currentlyAddedBlock.timeSpan * 15 : "0"} minutes
                </Box>
                <Slider
                  aria-label="slider-ex-1"
                  max={48}
                  defaultValue={2}
                  onChange={(val) => handleTimeChange(val)}
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
                  setCurrentlyAddedBlock(null);
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  onClose();
                  if (currentlyAddedBlock != null) {
                    setBlocks((prev) => prev.concat([currentlyAddedBlock]));
                    addTimeblock(
                      currentlyAddedBlock.date,
                      currentlyAddedBlock.timeSpan,
                      currentlyAddedBlock.name,
                      currentlyAddedBlock.color
                    );
                    setCurrentlyAddedBlock(null);
                  }
                }}
              >
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        {!currentlyAddedBlock &&
          blocks.map((el) => {
            return (
              <TimeBlock
                date={el.date}
                timeSpan={el.timeSpan}
                name={el.name}
                color={el.color}
                tasksAdded={tasksAdded}
                updateTasksList={updateTasksList}
                tasksList={tasksList}
                setTasksAdded={setTasksAdded}
              />
            );
          })}
        {currentlyAddedBlock &&
          blocks.concat([currentlyAddedBlock]).map((el) => {
            return (
              <TimeBlock
                date={el.date}
                timeSpan={el.timeSpan}
                name={el.name}
                color={el.color}
                tasksAdded={tasksAdded}
                updateTasksList={updateTasksList}
                tasksList={tasksList}
                setTasksAdded={setTasksAdded}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};
