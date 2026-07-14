# OnboardPro

A 3-step onboarding wizard (Personal Info → Account Details → Review & Submit) built with
React + Vite, react-hook-form, Zod, and Tailwind CSS.

## Features

- **State lifting**: a single `useForm()` instance shared via `FormProvider`, so Back/Next
  never lose entered data.
- **Real-time validation**: Zod schemas resolved through `@hookform/resolvers/zod`,
  `mode: "onChange"`.
- **Conditional disabling**: the Next button stays disabled until the current step's
  fields pass validation.
- **Password show/hide** toggle on both password fields.
- **Progress indicator** with step circles and a fill bar.
- **Autofill fix**: correct `autoComplete` attributes plus a CSS override so
  Chrome/Safari's autofill highlight matches the light theme instead of the default
  yellow/blue tint.
- Accessible labels (`htmlFor`/`id`), `aria-live` region for step changes, and
  `aria-invalid`/`aria-describedby` on inputs.

## Project structure

```
src/
  components/
    OnboardingWizard.jsx      # wizard shell: state, navigation, submit
    ProgressBar.jsx           # step indicator + progress fill
    FormField.jsx             # label + error wrapper
    TextInput.jsx             # styled text input (RHF-ready via forwardRef)
    PasswordInput.jsx         # styled password input with show/hide
    steps/
      StepPersonalInfo.jsx
      StepAccountDetails.jsx
      StepReview.jsx
      StepSuccess.jsx
  schemas/
    onboardingSchema.js       # zod schemas: per-step + combined
  styles/
    index.css                 # Tailwind + autofill fix
  App.jsx
  main.jsx
```

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build

```bash
npm run build
npm run preview
```
