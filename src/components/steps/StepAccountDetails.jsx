import { useFormContext } from "react-hook-form";
import FormField from "../FormField.jsx";
import TextInput from "../TextInput.jsx";
import PasswordInput from "../PasswordInput.jsx";

export default function StepAccountDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="font-display text-[19px] font-extrabold text-ink mb-1">
        Account details
      </h2>
      <p className="text-[13px] text-muted mb-5">Create your login credentials.</p>

      <FormField id="username" label="Username" error={errors.username}>
        <TextInput
          id="username"
          autoComplete="username"
          placeholder="aashika_jain"
          error={errors.username}
          {...register("username")}
        />
      </FormField>

      <FormField id="password" label="Password" error={errors.password}>
        <PasswordInput
          id="password"
          autoComplete="new-password"
          error={errors.password}
          {...register("password")}
        />
      </FormField>

      <FormField id="confirmPassword" label="Confirm password" error={errors.confirmPassword}>
        <PasswordInput
          id="confirmPassword"
          autoComplete="new-password"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />
      </FormField>

      <p className="text-xs text-violet-400 -mt-2">
        Password must contain at least 8 characters.
      </p>
    </div>
  );
}
