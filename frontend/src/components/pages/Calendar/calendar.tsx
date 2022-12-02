import { Grid } from "@chakra-ui/react"

export const Calendar = () => {
	return <Grid templateColumns="auto 1fr">
		<Grid bg="blue" w="300px"></Grid>
		<Grid bg="red"></Grid>
	</Grid>
}