import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      DashJr
      <Text as="span" ml="1" color="blue.400">.</Text>
    </Text>
  )
}