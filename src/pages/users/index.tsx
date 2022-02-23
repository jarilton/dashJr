import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="blue"
              leftIcon={<Icon as={RiAddLine} fontSize="25" />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="10"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thalia Favaro</Text>
                    <Text fontSize="sm" color="gray.300">thaliasouzafavaro@gmail.com</Text>
                  </Box>
                </Td>
                <Td>14 de agosto, 1997</Td>
                <Td >
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="yellow"
                    leftIcon={<Icon
                      as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alisson Macedo</Text>
                    <Text fontSize="sm" color="gray.300">alisson@gmail.com</Text>
                  </Box>
                </Td>
                <Td>25 de setembro, 1971</Td>
                <Td >
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="yellow"
                    leftIcon={<Icon
                      as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jarilton Junior</Text>
                    <Text fontSize="sm" color="gray.300">jariltonpereira02@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>01 de março, 1998</Td>
                <Td >
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="yellow"
                    leftIcon={<Icon
                      as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}