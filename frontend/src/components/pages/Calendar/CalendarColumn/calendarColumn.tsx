import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Input,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { TimeBlock } from "../TimeBlock/timeBlock";

interface Block {
  date: Date;
  name: string;
  timeSpan: number;
}

export const CalendarColumn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK");

  const [blocks, setBlocks] = useState<Block[]>([
    {
      date: new Date(),
      timeSpan: 4,
      name: "something",
    },
  ]);

  const [currentlyAddedBlock, setCurrentlyAddedBlock] = useState<Block | null>(
    null
  );

  return (
    <Grid pos="relative">
      <Flex flexDir="column" h="70px" w="100%" pos="sticky" top="0" align="center" borderBottom="1px solid gray">
		  <Box>Wtorek</Box>
		  <Box fontSize="24px">21</Box>
        
      </Flex>

      <Grid
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
              timeSpan: 4,
              name: "New TimeBlock",
            };
          });
        }}
        templateRows="repeat(96,20px)"
        templateColumns="1fr"
        borderLeft="1px solid gray"
        w="200px"
        position="relative"
        bg={`repeating-linear-gradient(
		to bottom,
		${"white"} 0px,
		${"white"} 79px,
		${"gray"} 79px,
		${"gray"} 80px
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
              <Input
                placeholder="Block name"
                onChange={(e) => {
                  if (currentlyAddedBlock != null)
                    setCurrentlyAddedBlock((prev: any) => {
                      return { ...prev, name: e.target.value };
                    });
                }}
              />
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
              <TimeBlock date={el.date} timeSpan={el.timeSpan} name={el.name} />
            );
          })}
        {currentlyAddedBlock &&
          blocks.concat([currentlyAddedBlock]).map((el) => {
            return (
              <TimeBlock date={el.date} timeSpan={el.timeSpan} name={el.name} />
            );
          })}
      </Grid>
    </Grid>
  );
};
