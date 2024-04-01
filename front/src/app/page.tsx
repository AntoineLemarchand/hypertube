export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-950 to-emerald-900 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white italic underline decoration-emerald-700 py-6">Hypertube</h1>
      <form className="w-fit p-3 flex flex-col items-center justify-center">
        <input
          className="w-80 h-12 mt-4 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white"
          placeholder="Username"
        />
        <input
          className="w-80 h-12 mt-4 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white"
          placeholder="Password"
          type="password"
        />
        <button className="w-80 h-12 mt-4 bg-emerald-700 rounded-lg text-gray-200 hover:bg-emerald-300 hover:text-gray-700 transition-colors">
          Login
        </button>
      </form>
    </main>
  );
}
