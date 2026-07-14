import { useFormContext } from "react-hook-form";

export default function TermsCheckbox() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-6">
      <label htmlFor="agreeTerms" className="flex items-start gap-2.5 cursor-pointer">
        <input
          id="agreeTerms"
          type="checkbox"
          aria-invalid={!!errors.agreeTerms}
          aria-describedby="agreeTerms-error"
          className="mt-0.5 w-[18px] h-[18px] rounded-md border-[1.5px] border-violet-300 text-violet-500 focus:ring-violet-300 shrink-0"
          {...register("agreeTerms")}
        />
        <span className="text-[13px] text-[#5B5273]">
          I agree to the{" "}
          <a href="#" className="text-violet-600 font-semibold underline underline-offset-2">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-violet-600 font-semibold underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <div id="agreeTerms-error" role="alert" className="min-h-[16px] text-xs text-danger mt-1 pl-[26px]">
        {errors.agreeTerms ? errors.agreeTerms.message : ""}
      </div>
    </div>
  );
}
