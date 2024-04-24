export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-950 to-emerald-900 h-16 flex items-center justify-between px-4">
      <h1 className="text-2xl font-bold text-white italic underline decoration-emerald-700">Hypertube</h1>
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-white text-sm underline">Home</a>
        <a href="#" className="text-white text-sm underline">Library</a>
        <a href="#" className="text-white text-sm underline">Profile</a>
        <a href="#" className="text-white text-sm underline">Logout</a>
      </nav>
    </header>
  );
}
