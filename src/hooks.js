import React from "react";

/**
 * toggle state value on/off
 */
export function useToggle(initialValue = false) {
  if (typeof initialValue !== "boolean") {
    console.warn("Invalid value");
  }
  const [value, setValue] = React.useState(initialValue);
  const toggleValue = () => setValue((currentValue) => !currentValue);

  return [value, toggleValue];
}
