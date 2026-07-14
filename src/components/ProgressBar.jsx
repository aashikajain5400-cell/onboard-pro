const STEPS = [
  { key: "personal", label: "Personal" },
  { key: "account", label: "Account" },
  { key: "review", label: "Review" },
];

export default function ProgressBar({ step, submitted }) {
  const progressPct = submitted ? 100 : (step / (STEPS.length - 1)) * 100;

  return (
    <div className="mb-7">
      <div className="relative h-1.5 bg-violet-100 rounded-full mb-4">
        <div
          className="absolute left-0 top-0 h-full bg-violet-500 rounded-full transition-all duration-200"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <div className="flex justify-between">
        {STEPS.map((s, i) => {
          const done = submitted || i < step;
          const active = !submitted && i === step;
          return (
            <div key={s.key} className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  done
                    ? "bg-success text-white"
                    : active
                    ? "bg-violet-500 text-white"
                    : "bg-violet-100 text-violet-400"
                }`}
              >
                {done ? "✓" : i + 1}
              </div>
              <span
                className={`text-[11px] font-bold ${
                  done || active ? "text-ink" : "text-violet-400"
                }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { STEPS };
