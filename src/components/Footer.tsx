export default function Footer() {
    return (
      <footer className="bg-[#ffece6] text-gray-800">
        {/* CTA Section */}
        <div className="bg-primary-500 text-white text-center py-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
            <h2 className="text-xl font-semibold">Ready to get started?</h2>
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-orange-500 transition">
              Contact Us
            </button>
          </div>
        </div>
  
        {/* Footer Content */}
        <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl text-primary-500">❤️</span>
              <span className="font-bold text-lg">Jambo</span>
            </div>
            <div className="flex space-x-3 text-2xl">
              <a href="#"><i className="fab fa-facebook text-blue-600">facebook</i></a>
              <a href="#"><i className="fab fa-instagram text-pink-500">Instagram</i></a>
              <a href="#"><i className="fab fa-twitter text-sky-500"></i>X</a>
            </div>
          </div>
  
          {/* Company */}
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </div>
  
          {/* Designs */}
          <div>
            <h4 className="font-bold mb-2">Services</h4>
            <ul className="space-y-1">
              <li><a href="#">Jambo games</a></li>
              <li><a href="#">Events and ticketing</a></li>
              <li><a href="#">Jambo bulksms</a></li>
              <li><a href="#">Jambo skiza tones</a></li>
              <li><a href="#">Jambo shortcodes</a></li>
            </ul>
          </div>
  
        </div>
      </footer>
    );
  }