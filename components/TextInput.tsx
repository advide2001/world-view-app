import React from "react";

interface TextInputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
};

export default TextInput;
