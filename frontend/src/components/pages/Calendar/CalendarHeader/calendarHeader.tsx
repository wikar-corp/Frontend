import { Box, useColorModeValue } from "@chakra-ui/react"

export const CalendarHeader = () => {

	const bg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK")

	return <Box padding="20px 40px" color={bg}>
		<Box  fontSize="40px">January 23-28</Box>
	</Box>
}