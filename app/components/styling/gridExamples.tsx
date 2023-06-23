import { Grid, Box, Text, GridItem, Image } from "@chakra-ui/react";

export function Profiles() {
  const profiles = ["Alice", "Bob", "Charlie", "Dave"]; // Sample data

  return (
    <Grid
      autoRows="minmax(20px, auto)"
      autoColumns="minmax(125px, auto)"
      gap={1}
      bg="accent_2"
      color="background"
    >
      {profiles.map((profile) => (
        <Box key={profile} p={1} boxShadow="base" borderRadius="md">
          <Text fontSize="lg">{profile}</Text>
        </Box>
      ))}
    </Grid>
  );
}

export function Dashboard() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={2}
      bg="accent_2"
      color="background"
      p={1}
    >
      <GridItem colSpan={1}>
        <Box p={3} bg="green.500">
          Widget 1
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box p={3} bg="blue.500">
          Widget 2
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box p={3} bg="red.500">
          Widget 3
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box p={3} bg="yellow.500">
          Widget 4
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box p={3} bg="purple.500">
          Widget 5
        </Box>
      </GridItem>
    </Grid>
  );
}

export function ImageGallery() {
  const images = Array(5).fill(null); // Array of 5 nulls

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {images.map((_, i) => (
        <Box key={i}>
          <Image
            src={`https://picsum.photos/seed/${i}/200/100`}
            alt="Gallery"
            objectFit="cover"
          />
        </Box>
      ))}
    </Grid>
  );
}
