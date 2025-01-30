import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react"


interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <>
    <ChakraButton backgroundColor={"blue"}>Click Me Chakra</ChakraButton>
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        background: "grey",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {label}
    </button>
    </>
  );
};
