import { Heart } from "lucide-react";

export default function SidePanel() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between w-[320px] bg-violet-500 text-white px-9 py-10 overflow-hidden rounded-l-xl2">
      {/* one soft decorative shape, kept simple */}
      <div className="absolute -bottom-20 -right-16 w-56 h-56 rounded-full bg-white/10" />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
          <Heart size={18} strokeWidth={2.25} fill="white" />
        </div>
        <h2 className="font-display text-2xl leading-snug font-extrabold mb-2">
          Welcome to OnboardPro
        </h2>
        <p className="text-sm text-white/80">
          Just a few quick steps and you're all set up.
        </p>
      </div>

      <p className="relative z-10 text-xs text-white/60">
        Secure &amp; simple, start to finish.
      </p>
    </div>
  );
}
