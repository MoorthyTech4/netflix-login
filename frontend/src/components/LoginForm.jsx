import { useAuth } from "../context/AuthenContext";

function LoginForm() {
  const {
    email,
    password,
    fielderrors,
    loginerror,
    loading,
    handleemail,
    handlepassword,
    handlesubmit,
  } = useAuth();

  return (
    <div className="bg-black/75 text-white rounded-md px-8 sm:px-16 py-12 w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-7">Sign In</h1>

      {loginerror && (
        <div className="bg-[#e87c03] text-white text-sm rounded px-4 py-3 mb-4">
          {loginerror}
        </div>
      )}

      <form onSubmit={handlesubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={handleemail}
            className="w-full bg-[#333] text-white text-base rounded px-4 py-3.5 outline-none border border-transparent focus:border-white placeholder:text-[#8c8c8c]"
          />
          {fielderrors.email && (
            <p className="text-[#e87c03] text-sm mt-1.5">{fielderrors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlepassword}
            className="w-full bg-[#333] text-white text-base rounded px-4 py-3.5 outline-none border border-transparent focus:border-white placeholder:text-[#8c8c8c]"
          />
          {fielderrors.password && (
            <p className="text-[#e87c03] text-sm mt-1.5">{fielderrors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#e50914] hover:bg-[#f6121d] text-white font-semibold rounded px-4 py-3.5 mt-4 transition-colors disabled:opacity-60"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <div className="flex justify-between items-center text-sm text-[#b3b3b3] mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-[#b3b3b3]" />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
      </form>

      <p className="text-[#737373] mt-8">
        New to Netflix?{" "}
        <a href="#" className="text-white hover:underline">
          Sign up now.
        </a>
      </p>

      <p className="text-xs text-[#8c8c8c] mt-3">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Learn more.
        </a>
      </p>

      <p className="text-xs text-[#8c8c8c] mt-4">
        Demo credentials: test@gmail.com / password123
      </p>
    </div>
    
  );
}

export default LoginForm;
