import {
  useToast,
  Button,
  Box,
  Flex,
  Wrap,
  Stack,
  WrapItem,
  ToastPosition,
} from "@chakra-ui/react";
import { useRef } from "react";
import { colors } from "~/styles/DesignComponents";

export function ToastOneFunction() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "You did It!",
          description: "You made toast! Great work!",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Make Toast!
    </Button>
  );
}

export function ToastTwoFunction() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          position: "bottom-left",
          render: () => (
            <Flex
              color={"darkAccent_2"}
              p={2}
              bg={"accent_3"}
              borderRadius="20px"
              justifyContent={"center"}
              alignItems={"center"}
              fontFamily="monospace"
              fontSize="20px"
              fontWeight="bold"
            >
              Is it Friday yet?
            </Flex>
          ),
        })
      }
    >
      Got Toast?
    </Button>
  );
}

const buttonStyles = {
  bg: "accent_2",
  color: colors.mainBackground,
  hoverbg: "accent_3",
  hovercolor: "darkAccent_2",
  borderRadius: "sm",
  width: "200px",
  height: "25px",
  fontWeight: "bold",
  fontSize: "15px",
  fontFamily: "monospace",
  p: 0.5,
  mx: 0,
};

export function ToastThreeFunction() {
  const toast = useToast();
  const toastIdRef = useRef<number | null>(null);

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function closeAll() {
    toast.closeAll();
  }

  function addToast() {
    toastIdRef.current = toast({
      description: "I am nom-nom toasty toast! 🍞 ",
    }) as number;
  }

  return (
    <Wrap>
      <Button onClick={addToast} type="button" sx={buttonStyles}>
        Make Toast
      </Button>
      <Button onClick={close} type="button" sx={buttonStyles}>
        Eat toast
      </Button>
      <Button onClick={closeAll} type="button" sx={buttonStyles}>
        Eat all toast
      </Button>
    </Wrap>
  );
}

export function ToastFourFunction() {
  const toast = useToast();
  const toastIdRef = useRef<number | null>(null);

  function update() {
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, {
        description: "I am the Newb Toast. 👶",
      });
    }
  }

  function addToast() {
    toastIdRef.current = toast({
      description: "I am the OG Toast. 😎",
    }) as number;
  }

  return (
    <Stack isInline spacing={2}>
      <Button onClick={addToast} type="button" sx={buttonStyles}>
        Make Toast
      </Button>

      <Button onClick={update} type="button" sx={buttonStyles}>
        Change Last Toast
      </Button>
    </Stack>
  );
}

export function ToastFiveFunction() {
  const toast = useToast();
  const statuses: ("success" | "error" | "warning" | "info" | "loading")[] = [
    "success",
    "error",
    "warning",
    "info",
    "loading",
  ];

  return (
    <Wrap>
      {statuses.map((currentStatus, i) => (
        <WrapItem key={i}>
          <Button
            sx={buttonStyles}
            fontSize="13px"
            onClick={() =>
              toast({
                title: `I'm toast of the ${currentStatus.toUpperCase()} variety.`,
                status: currentStatus,
                isClosable: true,
              })
            }
          >
            Show {currentStatus} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export function ToastSixFunction() {
  const toast = useToast();
  const variants = ["solid", "subtle", "left-accent", "top-accent"];

  return (
    <Wrap>
      {variants.map((variant, i) => (
        <WrapItem key={i}>
          <Button
            sx={buttonStyles}
            onClick={() =>
              toast({
                title: `I am a very ${variant} toast`,
                variant: variant,
                isClosable: true,
              })
            }
          >
            {variant} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export function ToastSevenFunction() {
  const toast = useToast({
    position: "top",
    title:
      "I am some FINE and quite SHINY toast! Honestly though, I look silly, don't I?",
    containerStyle: {
      width: "400px",
      maxWidth: "80%",
    },
  });

  return (
    <Button
      bg={"accent_2"}
      onClick={() => {
        toast({
          containerStyle: {
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.9)",
            fontFamily: "monospace",
            fontSize: "20px",
          },
        });
      }}
    >
      Click for toast with SNAZZY container!
    </Button>
  );
}

export function ToastEightFunction() {
  const toast = useToast();
  const positions: ToastPosition[] = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ];

  return (
    <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            sx={buttonStyles}
            onClick={() =>
              toast({
                title: `${position}`,
                position: position,
                isClosable: true,
              })
            }
          >
            {position}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export function ToastNineFunction() {
  const toast = useToast();
  const id = "test-toast";
  return (
    <Button
      sx={buttonStyles}
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "There is no other me. I cannot be duplicated.",
          });
        }
      }}
    >
      No duplicates!
    </Button>
  );
}
