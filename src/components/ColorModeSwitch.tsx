import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode(); // useColorMode() returns an object with 2 properties. We desctructure that object and grab a function called toggleColorMode, and a property called colorMode, which represents the current mode
  return (
    <div>
      <HStack>
        <Switch
          colorScheme="blue"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />{" "}
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
