import TermsCheckbox from "../TermsCheckbox.jsx";
import { useFormContext } from "react-hook-form";

export default function StepReview() {
  const { getValues } = useFormContext();
  const values = getValues();

  const rows = [
    ["First name", values.firstName],
    ["Last name", values.lastName],
    ["Email", values.email],
    ["Username", values.username],
  ];

  return (
    <div>
      <h2 className="font-display text-[19px] font-extrabold text-ink mb-1">
        Review information
      </h2>
      <p className="text-[13px] text-muted mb-5">Check everything before you submit.</p>

      <div className="border border-violet-100 rounded-2xl overflow-hidden mb-5">
        {rows.map(([label, val], i) => (
          <div
            key={label}
            className={`flex justify-between px-4 py-3 text-[13px] ${
              i % 2 === 0 ? "bg-violet-50" : "bg-white"
            }`}
          >
            <span className="text-muted">{label}</span>
            <span className="font-bold text-ink">{val}</span>
          </div>
        ))}
      </div>

      <TermsCheckbox />
    </div>
  );
}
