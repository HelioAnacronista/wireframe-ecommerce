import React from "react";

interface InputProps {
  name: string;
  label?: string;
  error?: { message: string };
}

const InputBase = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, error = null, ...rest }, ref) => {
    return (
      <div className="mb-6">
        {!!label && (
          <label htmlFor={name} className="mb-2 font-bold">
            {label}
          </label>
        )}

        <input
          id={name}
          name={name}
          ref={ref}
          className={`bg-white border-gray-400 block w-full appearance-none rounded-lg border py-2 px-4 leading-normal ${
            !!error ? "border-red-500" : ""
          }`}
          {...rest}
        />

        {!!error && (
          <p className="mt-2 font-medium text-red-500">{error.message}</p>
        )}
      </div>
    );
  }
);
//pathing de ref
export const Input = InputBase;
