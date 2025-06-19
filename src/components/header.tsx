import {NavLink} from 'react-router-dom'

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
        <NavLink to="/" className={({isActive})=>{
          return isActive? 'text-primary-500':'';
        }}>Home</NavLink>
        <NavLink to="/service" className={({isActive})=>{
          return isActive? 'text-primary-500':'';
        }}>services</NavLink>
        <NavLink to="/contact" className={({isActive})=>{
          return isActive? 'text-primary-500':'';
        }}>Contact us</NavLink>
      </nav>

    </div>
  </header>
  )
}