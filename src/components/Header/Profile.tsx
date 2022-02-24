import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jarilton Junior</Text>
        <Text color="gray.300" fontSize="small">
          jariltonpereira02@hotymail.com
        </Text>
      </Box>
      <Avatar size="md" name="Jarilton Junior" src="https://github.com/jarilton.png" />
    </Flex>
  )
}