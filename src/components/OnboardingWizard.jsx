import { useEffect, useMemo, useRef, useState } from "react";
import { useForm, useWatch, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressBar, { STEPS } from "./ProgressBar.jsx";
import SidePanel from "./SidePanel.jsx";
import SocialButtons from "./SocialButtons.jsx";
import StepPersonalInfo from "./steps/StepPersonalInfo.jsx";
import StepAccountDetails from "./steps/StepAccountDetails.jsx";
import StepReview from "./steps/StepReview.jsx";
import StepSuccess from "./steps/StepSuccess.jsx";
import { stepSchemas, onboardingSchema } from "../schemas/onboardingSchema.js";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
};

const stepFields = [
  ["firstName", "lastName", "email"],
  ["username", "password", "confirmPassword"],
  ["agreeTerms"],
];

export default function OnboardingWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const headingRef = useRef(null);

  const activeSchema = step === STEPS.length - 1 ? onboardingSchema : stepSchemas[step];

  const methods = useForm({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(activeSchema),
  });

  const {
    handleSubmit,
    trigger,
    reset,
    control,
  } = methods;

  const watchedValues = useWatch({ control });

  // Computed directly from the zod schema for the active step, so the Next
  // button's enabled state never depends on resolver-swap timing.
  const isStepValid = useMemo(
    () => activeSchema.safeParse(watchedValues).success,
    [activeSchema, watchedValues]
  );

  useEffect(() => {
    if (headingRef.current) headingRef.current.focus();
  }, [step, submitted]);

  async function goNext() {
    const valid = await trigger(stepFields[step]);
    if (!valid) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function onSubmit(data) {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
    };
    // eslint-disable-next-line no-console
    console.log("Onboarding payload:", payload);
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setStep(0);
    reset(defaultValues);
  }

  const firstName = watchedValues?.firstName;

  return (
    <div className="w-full max-w-[800px] flex rounded-xl2 overflow-hidden shadow-[0_8px_24px_rgba(124,92,252,0.08)]">
      <SidePanel />

      <div className="flex-1 bg-white px-8 sm:px-10 py-10 rounded-r-xl2 lg:rounded-l-none rounded-l-xl2">
        <div className="mb-7 flex items-center justify-between lg:justify-start lg:gap-3">
          <span className="inline-block text-xs font-bold tracking-wide text-violet-600 bg-violet-100 px-3.5 py-1.5 rounded-full lg:hidden">
            OnboardPro
          </span>
        </div>

        <ProgressBar step={step} submitted={submitted} />

        <div aria-live="polite">
          {submitted ? (
            <StepSuccess firstName={firstName} onReset={handleReset} headingRef={headingRef} />
          ) : (
            <FormProvider {...methods}>
              <div>
                {step === 0 && <SocialButtons />}
                {step === 0 && <StepPersonalInfo />}
                {step === 1 && <StepAccountDetails />}
                {step === 2 && <StepReview />}

                <div className="flex gap-3 mt-2">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="flex-1 h-12 bg-violet-50 text-[#5B5273] border-[1.5px] border-violet-200 rounded-2xl text-sm font-bold"
                    >
                      Back
                    </button>
                  )}
                  {step < STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className={`flex-1 h-12 text-white rounded-2xl text-sm font-bold ${
                        isStepValid ? "bg-violet-500 cursor-pointer" : "bg-violet-300 cursor-not-allowed"
                      }`}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit(onSubmit)}
                      disabled={!isStepValid}
                      className={`flex-1 h-12 text-white rounded-2xl text-sm font-bold ${
                        isStepValid ? "bg-violet-500 cursor-pointer" : "bg-violet-300 cursor-not-allowed"
                      }`}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </FormProvider>
          )}
        </div>
      </div>
    </div>
  );
}
