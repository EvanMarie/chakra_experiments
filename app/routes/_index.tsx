import type { V2_MetaFunction } from "@remix-run/node";
import { BasicText, HL, MyDivider, MyHeading } from "~/styles/DesignComponents";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import {
  BigBackgroundBox,
  BulletBox,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";
import { Box, HStack, Link } from "@chakra-ui/react";
import WelcomeBanner from "~/components/app_components/welcomeBanner";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "I♥️Components: Chakra UI" },
    {
      name: "description",
      content: "A deep-dive into Chakra-UI!",
    },
  ];
};

export default function Index() {
  return (
    <BigBackgroundBox display="flex" flex="1" height="100hv">
      <WelcomeBanner />
      <MyHeading color={"accent_2"}>The Chakra-UI Library</MyHeading>
      <MyDivider mt={0} />
      <Box
        fontSize="18px"
        h="100%"
        display="flex"
        flex="1"
        flexDirection="column"
      >
        <SectionContainer p={5} height="100%" display="flex" flex="1">
          <SectionDescription>
            Chakra-UI is a powerful tool that simplifies the process of building
            high-quality user interfaces. It is a simple, modular, and
            accessible component library for building user interfaces with
            React. Chakra was developed to address common challenges faced by
            developers when building modern UIs, including reusability,
            customization, and accessibility.
          </SectionDescription>
          <BasicText>
            Chakra-UI provides developers with a set of composable, reusable
            React components that are styled with Emotion (a CSS-in-JS library)
            and follow best practices for accessibility (a11y). With Chakra UI,
            you can leverage a wide range of components like typography, form
            controls, modals, popovers, and many others, all of which are
            customizable to match your design requirements.
          </BasicText>
          <BasicText>
            Chakra was created by Segun Adebayo, a product designer and software
            engineer, and is maintained by a team of contributors. Segun's
            vision for Chakra UI was to provide developers with a set of
            components that are not only easy to use, but also flexible and
            accessible, thereby enabling them to craft beautiful UI experiences
            with less effort.
          </BasicText>
          <SectionDescription>
            Chakra UI stands out as a popular choice for creating dynamic React
            applications due to its assortment of impressive features including
            but certainly not limited to:
          </SectionDescription>
          <BulletBox>
            <ul>
              <li>
                <HL>Style Props</HL>: Chakra-UI allows you to style components
                by passing CSS attributes as props to web components, making it
                easier to edit the layout of different web components while
                reducing the number of styles you have to write.
              </li>
              <li>
                <HL>Composition</HL>: Chakra-UI dissolves components into
                smaller elements with limited properties to keep complexity low,
                then assembles them to ensure that styles and functionality are
                flexible.
              </li>
              <li>
                <HL>Accessibility</HL>: Chakra-UI strictly follows WAI-ARIA
                standards for all components, making it easy to create
                accessible React apps.
              </li>
              <li>
                <HL>Thematic Design</HL>: Chakra-UI is highly customizable, with
                features such as custom themes and color palettes.
              </li>
              <li>
                <HL>Color Mode Implementation</HL>: Chakra-UI is optimized for
                multiple color modes, allowing you to use light or dark mode.
              </li>
              <li>
                <HL>Responsive Design</HL>: Chakra-UI provides modern and
                accessible layout components that are responsive.
              </li>
            </ul>
          </BulletBox>
          <BasicText>
            The examples showcased here are a mix of references from Chakra's
            comprehensive documentation and my own explorations. These serve as
            a testament to my ongoing journey of understanding the nuances of
            Chakra and Remix, enhancing my HTML and CSS skills, and balancing
            multiple tasks simultaneously. Each example includes a link to the
            detailed Chakra Documentation for the respective component or topic.
            I'm confident that you'll find the library as valuable and
            impressive as I have.
          </BasicText>
          <BasicText>
            Some developers might hesitate to utilize a library filled with
            predefined components, fearing it might stifle their creative
            instincts. However, my experience has proven quite the contrary. I
            believe such libraries, in fact, amplify my creative potential,
            enabling me to dedicate more thought and effort to the app's
            functionality, rather than getting entangled in the intricate
            specifics of the user interface. This approach offers a pragmatic
            balance between design and development. It keeps me from reinventing
            the wheel and frees me to innovate where it truly matters: the
            unique value proposition of my applications.
          </BasicText>
          <BasicText>
            Additionally, Chakra and other component libraries are often
            designed with customization at their core, allowing developers to
            tailor each element according to their specific design philisophy.
            This adaptability ensures that, even while using pre-built
            components, applications can maintain a unique aesthetic, align with
            branding, and cater to specific audiences.
          </BasicText>
          <BasicText>
            Using such a library doesn't mean you're compromising on uniqueness
            or originality. Rather, it's akin to using a versatile set of
            building blocks, providing a head start in construction but still
            leaving plenty of room for the architect's imagination to create a
            distinctive masterpiece. Thus, these libraries become the launchpad
            for our creativity, not its cage.{" "}
          </BasicText>{" "}
          <BasicText color={"accent_2"}>
            <b>
              Enjoy the exploration, and remember: the learning journey never
              ends!
            </b>
          </BasicText>
          <BasicText>
            <i>~ Evan Marie Carr</i>
          </BasicText>
        </SectionContainer>
        <HStack
          spacing={8}
          p={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="accent_3"
          fontWeight="bold"
        >
          <Link href="https://chakra-ui.com/" target="_blank">
            Chakra-ui.com
          </Link>

          <Link href="https://remix.run/" target="_blank">
            Remix.run
          </Link>
        </HStack>
      </Box>
    </BigBackgroundBox>
  );
}
