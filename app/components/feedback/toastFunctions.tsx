import {
  useToast,
  Button,
  Box,
  Flex,
  Wrap,
  Stack,
  WrapItem,
  ToastPosition,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ButtonStyles, colors } from "~/styles/DesignComponents";
import { MyFlex } from "~/styles/MainDesignComponents";

const buttonStyles = {
  ...ButtonStyles,

  borderRadius: "md",
  width: { base: "135px", sm: "135px", md: "175px", lg: "135px" },
  height: "30px",
  fontWeight: "bold",
  fontSize: { base: "13px", sm: "13px", md: "15px", lg: "13px" },
  p: 0.5,
  mx: 0,
  _hover: {
    bg: "linkColor",
  },
};

export function ToastOneFunction() {
  const toast = useToast();
  return (
    <MyFlex p={0}>
      <Button
        sx={buttonStyles}
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
    </MyFlex>
  );
}

export function ToastTwoFunction() {
  const toast = useToast();
  return (
    <MyFlex p={0}>
      <Button
        sx={buttonStyles}
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
    </MyFlex>
  );
}

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
    <Wrap w="100%" justify="center" align="center">
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
    <Stack isInline spacing={2} w="100%" justify="center" align="center">
      <Button onClick={addToast} type="button" sx={buttonStyles}>
        Make Toast
      </Button>

      <Button onClick={update} type="button" sx={buttonStyles}>
        Change Toast
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
    <Wrap w="100%" justify="center" align="center">
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
            Show {currentStatus}
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
    <Wrap w="100%" justify="center" align="center">
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
            {variant}
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
      "I am some FINE and quite SHINEY toast! Honestly though, I look silly, don't I?",
    containerStyle: {
      width: "400px",
      maxWidth: "80%",
    },
  });

  return (
    <MyFlex p={0}>
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
    </MyFlex>
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
    <Wrap w="100%" justify="center" align="center">
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
    <MyFlex p={0}>
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
    </MyFlex>
  );
}

/* *********************************** HIGHLIGHTS ********************************** */

export function ToastSequentialFunction() {
  const toast = useToast();
  const sequence = ["Step 1: Do this", "Step 2: Do that", "Step 3: Done!"];
  const displaySequence = () => {
    sequence.forEach((step, index) => {
      setTimeout(() => {
        toast({
          title: step,
          status: "info",
          duration: 1500,
          isClosable: true,
        });
      }, index * 3000);
    });
  };

  return (
    <Button sx={buttonStyles} onClick={displaySequence}>
      Show Steps
    </Button>
  );
}

export function ToastCountdownFunction() {
  const toast = useToast();
  let counter = 10;

  const startCountdown = () => {
    const toastId = toast({
      title: `Countdown: ${counter}`,
      duration: null,
      isClosable: false,
    });

    const intervalId = setInterval(() => {
      counter--;
      if (counter > 0) {
        toast.update(toastId, { title: `Countdown: ${counter}` });
      } else {
        clearInterval(intervalId);
        toast.update(toastId, {
          title: "Countdown Complete!",
          isClosable: true,
        });
      }
    }, 1000);
  };

  return (
    <Button sx={buttonStyles} onClick={startCountdown}>
      Start Countdown
    </Button>
  );
}

export function ToastInteractiveFunction() {
  const toast = useToast();

  const showToast = () => {
    toast({
      position: "bottom-left",
      duration: null,
      isClosable: true,
      render: ({ onClose }) => (
        <Box color="sidebarBackground" bg="linkColor" fontWeight="bold" p={4}>
          <Text>😄 Hey there!</Text>
          <Text>Would you like a cup of coffee?</Text>
          <Button
            sx={buttonStyles}
            onClick={() => {
              toast({
                title: "Coffee on the way!",
                status: "success",
                duration: 2000,
              });
              onClose();
            }}
          >
            Yes, please!
          </Button>
        </Box>
      ),
    });
  };

  return (
    <Button sx={buttonStyles} onClick={showToast}>
      Greet me
    </Button>
  );
}
