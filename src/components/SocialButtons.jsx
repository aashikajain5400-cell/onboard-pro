export default function SocialButtons() {
  return (
    <div className="mb-5">
      <button
        type="button"
        className="w-full h-11 flex items-center justify-center gap-2.5 border-[1.5px] border-violet-200 rounded-2xl text-sm font-semibold text-[#5B5273] bg-white"
      >
        <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.3 6 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34.3 6 29.4 4 24 4c-7.4 0-13.8 4.2-17.7 10.7z" />
          <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.4 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.9 39.6 16.4 44 24 44z" />
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C40.9 36.4 44 30.7 44 24c0-1.3-.1-2.7-.4-3.5z" />
        </svg>
        Continue with Google
      </button>
      <div className="flex items-center gap-3 my-5">
        <div className="h-px flex-1 bg-violet-100" />
        <span className="text-xs text-violet-400 font-semibold">or continue with email</span>
        <div className="h-px flex-1 bg-violet-100" />
      </div>
    </div>
  );
}
