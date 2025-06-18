

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-white to-sky-100 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800">
          We Provide The Best <span className="text-primary-500">Services</span>
        </h2>
        <p className="mt-2 text-gray-500 max-w-xl mx-auto">
          Let us unlock the full potential of your business with our data-driven strategies.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="card">
            <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded text-white text-xl mb-4">
              🔍
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Jambo tones</h3>
            <p className="text-sm text-gray-500">Suprise your listeners with great tunes.</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded text-white text-xl mb-4">
              📣
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">jambo Events & Ticketing</h3>
            <p className="text-sm text-gray-500">Get your tickets at great prices.</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="bg-purple-500 w-10 h-10 flex items-center justify-center rounded text-white text-xl mb-4">
              🚀
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Jambo games</h3>
            <p className="text-sm text-gray-500">Your most loved games here.</p>
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded text-white text-xl mb-4">
              📁
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Jambo sms</h3>
            <p className="text-sm text-gray-500">Bulk sms at affordable.</p>
          </div>

        </div>
      </div>
    </div>
  );
}