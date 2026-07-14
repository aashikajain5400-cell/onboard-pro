import { forwardRef } from "react";

const TextInput = forwardRef(function TextInput(
  { id, type = "text", error, className = "", ...rest },
  ref
) {
  return (
    <input
      id={id}
      ref={ref}
      type={type}
      aria-invalid={!!error}
      aria-describedby={`${id}-error`}
      className={`w-full h-[46px] px-4 text-sm text-ink bg-white border-[1.5px] rounded-2xl outline-none
        transition-colors focus:shadow-[0_0_0_4px_rgba(124,92,252,0.15)]
        ${error ? "border-danger" : "border-violet-200 focus:border-violet-500"} ${className}`}
      {...rest}
    />
  );
});

export default TextInput;
