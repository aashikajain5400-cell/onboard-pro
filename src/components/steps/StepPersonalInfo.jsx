import { useFormContext } from "react-hook-form";
import FormField from "../FormField.jsx";
import TextInput from "../TextInput.jsx";

export default function StepPersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="font-display text-[19px] font-extrabold text-ink mb-1">
        Personal information
      </h2>
      <p className="text-[13px] text-muted mb-5">Tell us about yourself.</p>

      <FormField id="firstName" label="First name" error={errors.firstName}>
        <TextInput
          id="firstName"
          autoComplete="given-name"
          placeholder="Aashika"
          error={errors.firstName}
          {...register("firstName")}
        />
      </FormField>

      <FormField id="lastName" label="Last name" error={errors.lastName}>
        <TextInput
          id="lastName"
          autoComplete="family-name"
          placeholder="Jain"
          error={errors.lastName}
          {...register("lastName")}
        />
      </FormField>

      <FormField id="email" label="Email" error={errors.email}>
        <TextInput
          id="email"
          type="email"
          autoComplete="email"
          placeholder="aashika.jain@gmail.com"
          error={errors.email}
          {...register("email")}
        />
      </FormField>
    </div>
  );
}
