import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Icon,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { BasicText, Mono } from "~/styles/DesignComponents";
import * as Navigation from "~/mardownExamples/navigation/index";

import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { BiHome } from "react-icons/bi";

/* ********************************************************************** */

export function BreadcrumbOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To create a basic Breadcrumb, you add the <Mono>isCurrentPage</Mono>{" "}
          prop to the <Mono>BreadcrumbItem</Mono> that matches the current path.
          The <Mono>BreadcrumbLink</Mono> then renders a span with aria-current
          set to page instead of an anchor element.
        </SectionDescription>
        <BasicText>
          In the following example, the user navigates from 'Main' to
          'Sub-section' to 'Current Page'. The isCurrentPage prop highlights
          'Current Page' as the active page in the Breadcrumb
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Main</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Sub-section</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Current Page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BreadcrumbTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Separators</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can customize the separator used in the breadcrumb by passing a
          string or an icon. For instance, changing the separator to a '-'.
        </SectionDescription>

        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Main</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Sub-section</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Current Page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MyFlex>
      <ModalCode>
        <Navigation.E03 />
      </ModalCode>
      <br />
      <BasicText>
        Additionally, you can use an icon as the separator, with custom spacing:
      </BasicText>
      <MyFlex bg="background">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Main</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Sub-section</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Current Page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MyFlex>
      <ModalCode>
        <Navigation.E04 />
      </ModalCode>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BreadcrumbThree() {
  return (
    <SectionContainer>
      <SectionHeading>Including a Separator in the Last Item</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you would like to have a <Mono>BreadcrumbSeparator</Mono> in the
          last item of the <Mono>Breadcrumb</Mono>, this can be achieved by
          adding the separator to the last <Mono>BreadcrumbItem</Mono>.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Main</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Sub-Section</BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        </Breadcrumb>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BreadcrumbFour() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Breadcrumb Style </SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Breadcrumb components inherit from the Box component, which means
          you can pass all Box props to change the style of the breadcrumbs. For
          instance, you can easily adjust the <Mono>fontSize</Mono> and{" "}
          <Mono>fontWeight</Mono> of the Breadcrumb.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Main</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Sub-section</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Current Page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BreadcrumbFive() {
  return (
    <SectionContainer>
      <SectionHeading>Integration with Routing Libraries</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Breadcrumb</Mono> component can be seamlessly integrated
          with routing libraries like Reach Router or React Router. Simply pass
          the as prop to the <Mono>BreadcrumbLink</Mono> component.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="#">
              Main
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="#">
              Sub-section
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BreadcrumbSix() {
  return (
    <SectionContainer>
      <SectionHeading>Accessibility</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI designs its <Mono>Breadcrumb</Mono> components with a
          strong focus on accessibility, implementing them within a 'nav'
          element, establishing it as a significant navigation landmark on the
          webpage. The 'nav' element of the <Mono>Breadcrumb</Mono> has an
          'aria-label' attribute with the value set to 'breadcrumb', providing
          assistive technologies with the necessary context about the nature of
          the component. The <Mono>BreadcrumbItem</Mono> that is currently being
          viewed (indicated by the <Mono>isCurrentPage</Mono> prop) attaches an
          'aria-current' attribute with the value 'page' to its{" "}
          <Mono>BreadcrumbLink</Mono>. This further enhances screen reader
          comprehension by indicating the currently viewed page. Lastly, the
          visual separator in the <Mono>Breadcrumb</Mono> has its role set to
          'presentation'. This attribute signals to assistive technologies that
          the separator is a visual tool and doesn't provide any semantic
          meaning.
        </SectionDescription>
      </Box>
    </SectionContainer>
  );
}

/* ********************************************************************** */

const paths = ["Home", "Blog", "Tech", "AI"];

export function DynamicBreadcrumb() {
  return (
    <Breadcrumb>
      {paths.map((path, i) => (
        <BreadcrumbItem key={i} isCurrentPage={i === paths.length - 1}>
          <BreadcrumbLink href="#">{path}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

/* ********************************************************************** */

export function CustomHomeBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouterLink} to="/">
          <BiHome size={18} />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouterLink} to="/about">
          About
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={RouterLink} to="/contact">
          Contact
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

/* ********************************************************************** */

export function InteractiveBreadcrumb() {
  return (
    <Breadcrumb separator="|">
      <BreadcrumbItem>
        <Tooltip label="Go to Home" placement="top">
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </Tooltip>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Tooltip label="View our Docs" placement="top">
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </Tooltip>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <Tooltip label="You're currently on Breadcrumb page" placement="top">
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </Tooltip>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
