
export default function HowTo() {
  return (
    <div className="bg-orange-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Illustration */}
        <div className="flex-shrink-0">
          <img
            src="./person2.png" // Replace with actual image path
            alt="Person on chair"
            className="w-64 md:w-80"
          />
        </div>

        {/* Right: Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Simple <span className="text-orange-600">Solutions</span>!
          </h2>
          <p className="text-gray-600 mb-6">
            We understand that no two businesses are alike. That’s why we take the time to understand:
          </p>

          {/* Steps */}
          <ol className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="bg-orange-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full mr-3">1</span>
              <span><strong>Contact us:</strong> Contact us to boost your brand visibility.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full mr-3">2</span>
              <span><strong>Consult:</strong> Receive advice to answer your questions.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full mr-3">3</span>
              <span><strong>Place order:</strong> Buy our package tailored to your needs.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full mr-3">4</span>
              <span><strong>Payment:</strong> We accept various types of payment.</span>
            </li>
          </ol>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow">
              Get Started
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-100 px-5 py-2 rounded-lg">
              Read more
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}