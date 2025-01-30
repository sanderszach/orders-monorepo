import React from "react"

export const Button = ({ label }) => {
  return (
    <button
      style={{
        padding: "10px",
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {label}
    </button>
  )
}
