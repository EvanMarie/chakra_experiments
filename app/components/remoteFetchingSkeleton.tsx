import { Box, Heading, Skeleton } from "@chakra-ui/react";

function useRemoteData(): { data: any; loading: any; error: any } {
  throw new Error("Function not implemented.");
}

function Card() {
  const { data, loading, error } = useRemoteData();
  if (error) return <Box children="error" />;
  return (
    <Box>
      <Skeleton isLoaded={!loading}>
        <Heading>{data.title}</Heading>
      </Skeleton>
    </Box>
  );
}
