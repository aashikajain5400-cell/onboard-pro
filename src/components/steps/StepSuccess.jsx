export default function StepSuccess({ firstName, onReset, headingRef }) {
  return (
    <div className="text-center py-3">
      <div className="w-[60px] h-[60px] rounded-full bg-success text-white flex items-center justify-center text-2xl mx-auto mb-4">
        ✓
      </div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="font-display text-xl font-extrabold text-ink mb-1.5"
      >
        Registration successful
      </h2>
      <p className="text-sm text-muted mb-6">
        Your onboarding is complete. Welcome aboard, {firstName || "there"}.
      </p>
      <button
        onClick={onReset}
        className="w-full h-12 bg-violet-500 text-white rounded-2xl text-sm font-bold"
      >
        Go to dashboard
      </button>
    </div>
  );
}
