import { Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from "../components/form/Input";

type SignInFormData = {
  email: string,
  password: string,
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values);
  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.700"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Text align="center" fontWeight="bold" fontSize='4xl'>
            Dash Jr
          </Text>

          <Input name="email" type="email" label="E-mail:" {...register('email')} />
          <Input name="password" type="password" label="Senha:" {...register('password')} />
          <Link align="right">Esqueci minha senha</Link>

        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="blue"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex >
  )
}
