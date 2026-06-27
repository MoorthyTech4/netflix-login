import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthenContext";

function DashboardPage() {
  const navigate = useNavigate();
  const {logout} = useAuth()

  function handlelogout() {
    logout()
    navigate("/");

  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center px-6 sm:px-12 py-6">
        <h1 className="text-[#e50914] text-2xl sm:text-3xl font-bold tracking-tight">
          NETFLIX
        </h1>
        <button
          onClick={handlelogout}
          className="text-sm text-[#b3b3b3] hover:text-white border border-[#737373] rounded px-4 py-2 transition-colors"
        >
          Sign Out
        </button>
      </header>

      <main className="px-6 sm:px-12 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Welcome back!</h2>
        <p className="text-[#b3b3b3] max-w-md mx-auto">
          You've successfully signed in. This is a dummy dashboard page standing in for
          the Netflix browse screen.
        </p>
      </main>
    </div>
  );
}

export default DashboardPage;
