import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { useState } from "react";

function ClearableInput() {
  const [value, setValue] = useState("");

  const handleClear = () => setValue("");

  return (
    <InputGroup>
      <Input
        bg="white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputRightElement>
        <Button size="sm" onClick={handleClear}>
          X
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default ClearableInput;
