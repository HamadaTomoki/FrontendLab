import React, { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return [
    {
      value: value,
      onChange: handleChange,
    },
    () => setValue(initialValue),
  ] as const;
};

export { useInput };
