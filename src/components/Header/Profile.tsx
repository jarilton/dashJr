import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jarilton Junior</Text>
          <Text color="gray.300" fontSize="small">
            jariltonpereira02@hotymail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Jarilton Junior" src="https://github.com/jarilton.png" />
    </Flex>
  )
}