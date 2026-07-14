import { forwardRef, useState } from "react";

const PasswordInput = forwardRef(function PasswordInput({ id, error, ...rest }, ref) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        ref={ref}
        type={show ? "text" : "password"}
        aria-invalid={!!error}
        aria-describedby={`${id}-error`}
        className={`w-full h-[46px] pl-4 pr-[68px] text-sm text-ink bg-white border-[1.5px] rounded-2xl outline-none
          transition-colors focus:shadow-[0_0_0_4px_rgba(124,92,252,0.15)]
          ${error ? "border-danger" : "border-violet-200 focus:border-violet-500"}`}
        {...rest}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-100 rounded-[10px] px-2.5 py-1.5 text-xs font-bold text-violet-600"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
});

export default PasswordInput;
