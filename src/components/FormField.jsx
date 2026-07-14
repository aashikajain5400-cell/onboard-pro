export default function FormField({ id, label, error, children }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-[13px] font-semibold text-[#5B5273] mb-1.5">
        {label}
      </label>
      {children}
      <div id={`${id}-error`} role="alert" className="min-h-[16px] text-xs text-danger mt-1">
        {error ? error.message : ""}
      </div>
    </div>
  );
}
