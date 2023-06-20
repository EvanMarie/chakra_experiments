import { Box, Card, Heading } from "@chakra-ui/react";

interface CardHeadingProps {
  children: React.ReactNode;
}

export const PropHeading = ({ children }: CardHeadingProps) => {
  return (
    <Heading
      as="h3"
      size="xs"
      bg="sectionColor"
      color="mainText"
      borderRadius="sm"
      py={1}
      px={2}
      mb={0}
    >
      {children}
    </Heading>
  );
};

export const PropDescription = ({ children }: CardHeadingProps) => {
  return <Box p={1}>{children}</Box>;
};

interface PropCardProps {
  propName: string;
  propType?: string | null;
  propDescription?: string | null;
  propDefault?: string | null;
}

export const PropCard = ({ propName, propDescription }: PropCardProps) => {
  return (
    <Card
      backgroundColor="accent_2"
      borderRadius="sm"
      boxShadow="md"
      p={1}
      mb={2}
      w="100%"
      maxWidth={{ base: "450px", sm: "500px", md: "600px", lg: "300px" }}
    >
      <PropHeading>{propName}</PropHeading>
      <PropDescription>
        {propDescription && <>{propDescription}</>}
      </PropDescription>
    </Card>
  );
};
