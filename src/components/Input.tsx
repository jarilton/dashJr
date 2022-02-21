import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name="email"
        type="email"
        focusBorderColor="blue.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  )
}