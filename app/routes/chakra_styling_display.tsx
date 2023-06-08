import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import ButtonBar from "~/ButtonBar";
import stylesUrl from "~/styles/global.css";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  MyButton,
  MyHeading,
  MyLabel,
  colors,
} from "~/styles/reusableChakraComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <ButtonBar />
      <MyHeading>Chakra Display Styling:</MyHeading>
      <BasicText>Flexbox, Grid Layout, and Background.</BasicText>
      <MyLabel>Display: </MyLabel>
      <Box>
        <BasicText>
          display='none' makes an element not appear. (The following element
          does not appear.)
        </BasicText>
        <FlexibleBox display="none">display='none'</FlexibleBox>
        <BasicText>
          The following only appears on medium and larger screens
        </BasicText>
        <FlexibleBox
          hideFrom="md"
          h="100px"
          bg={colors.mainBackground}
        ></FlexibleBox>
        <FlexibleBox display={{ base: "none", md: "block" }} h="100px">
          base: "none", md: "block" configuration sets the display property to
          "none" for smaller screens and "block" for screens that meet or exceed
          the md breakpoint. This allows for responsive behavior where the
          element is hidden on smaller screens and displayed as a block on
          larger screens.
        </FlexibleBox>
        <FlexibleBox h="125px" bg={colors.mainBackground}>
          <BasicText>
            The following small bar expands once the screen size reaches md or
            above.
          </BasicText>
          <FlexibleBox>
            <Box hideBelow="md">
              hideBelow='md' prop on a Box component is a custom prop used to
              conditionally hide the component on screens smaller than the md
              breakpoint. This is the one that is creating the small bar that
              expands to be this text once the screen size reaches md or above.
            </Box>
          </FlexibleBox>
        </FlexibleBox>

        <BasicText>
          The following boxes only show on screens that are medium or smaller
        </BasicText>
        <FlexibleBox h="100px" bg={colors.mainBackground}>
          <FlexibleBox display={{ base: "block", md: "none" }}>
            base: "block", md: "none" - hide the element from 'md' up
          </FlexibleBox>
          <FlexibleBox hideFrom="md">
            This box complete disappears at sizes of medium and higher.
          </FlexibleBox>
        </FlexibleBox>
      </Box>
      <MyLabel>Flexbox: </MyLabel>
      <Box>
        <BasicText>
          display="flex" alignItems="center" justifyContent="space-between"
        </BasicText>

        <FlexibleBox
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Child One</Text>
          <Text>Child Two</Text>
          <Text>Child Three</Text>
        </FlexibleBox>
        <Flex bg={colors.mainAccent4} align="center" justify="center">
          Flex Chakra component with align="center" and justify="center"
        </Flex>
        <MyLabel>Grid Layout</MyLabel>
        <FlexibleBox display="grid" gridGap={2} gridAutoFlow="row dense">
          <p>Grid: display="grid" gridGap={2} gridAutoFlow="row dense"</p>
          <p>
            <b>display="grid"</b>: This prop sets the display property of the
            Box component to "grid", enabling grid layout on the container.
          </p>
          <p>
            <b>
              gridGap=
              {2}
            </b>
            : This prop specifies the gap (or spacing) between grid items inside
            the container. The value 2 represents the spacing in Chakra UI's
            spacing scale, where 2 corresponds to 0.5rem by default.
          </p>
          <p>
            <b>gridAutoFlow="row dense"</b>: This prop controls how the grid
            items are automatically placed within the grid. Setting gridAutoFlow
            to "row dense" specifies that the grid items should be placed in
            rows, and the dense packing algorithm is used to fill the grid. The
            dense packing algorithm tries to fill empty spaces in the grid,
            ensuring a more compact layout. You can adjust the values of these
            props according to your specific layout requirements.
          </p>
          <p>
            Additionally, you can add child elements inside the Box component to
            represent the individual grid items within the grid layout.
          </p>
        </FlexibleBox>
        <Grid
          gap={2}
          autoFlow="row dense"
          bg={colors.mainAccent2}
          color={colors.secondaryText}
        >
          Grid using Chakra shorthand: Grid gap={2} autoFlow="row dense"
        </Grid>
        <MyLabel>Background</MyLabel>
        <Box>
          <p>The Following is a Box with background properties: </p>
          <p>backgroundImage="url('URL.png')"</p>
          <p>backgroundPosition="center"</p>{" "}
          <p> backgroundRepeat="no-repeat"</p>
          <p> backgroundSize="cover"</p> <p> h="200px"</p>
        </Box>

        <FlexibleBox
          backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          h="200px"
        ></FlexibleBox>

        <Box>
          <p>The Following is a the short hand version of the same: </p>
          <p>bgImage="url('URL.png')"</p>
          <p>bgPosition="center" </p>
          <p>bgRepeat="no-repeat"</p>
          <p> bgSize="cover"</p> <p>h="200px"</p>
        </Box>
        <Box
          bgImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          backgroundSize="cover"
          h="200px"
        />
      </Box>
    </BigBackgroundBox>
  );
}
