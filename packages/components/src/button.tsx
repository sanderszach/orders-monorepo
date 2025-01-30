import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react"


interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <>
    <ChakraButton>Click Me Chakra</ChakraButton>
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        background: "hotpink",
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
