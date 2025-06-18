

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      {/* logo */}
      <div className="flex items-center space-x-2">
        <img src="/jambo logo.png" alt="Logo" className="w-22 h-6" />
        <span className="font-semibold text-gray-800"> inc</span>
      </div>

      {/* navigation */}
      <nav className="space-x-6 text-sm font-medium text-gray-700">
        <a href="#" className="text-primary-500">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact us</a>
      </nav>

    </div>
  </header>
  )
}