import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="min-h-screen relative bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-cb6fa14e7f9f/cf9b0ed7-5a1b-43e9-b0ea-1cba5d8c4ef9/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg')]"
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <header className="px-6 sm:px-12 py-6">
          <h1 className="text-[#e50914] text-3xl sm:text-4xl font-bold tracking-tight">
            NETFLIX
          </h1>
        </header>

        <main className="flex justify-center items-center px-4 py-10 sm:py-16">
          <LoginForm />
        </main>

        <footer className="px-6 sm:px-12 py-10 text-[#737373] text-sm">
          <p>Questions? Call 000-800-919-1694</p>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
