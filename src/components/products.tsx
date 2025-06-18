function Products(){
  return (
    <div>
<div className="bg-gray-100  flex items-center justify-center">
        <div className="flex flex-wrap gap-2 justify-center p-4">
          
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-72">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Jambo ticketing</h2>
            <p className="text-gray-600 mb-4">Get your tickets at great prices.</p>
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">
              Action 1
            </button>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-72">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Jambo games</h2>
            <p className="text-gray-600 mb-4">Your most loved games here.</p>
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">
              Action 2
            </button>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-72">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Jambo tunes</h2>
            <p className="text-gray-600 mb-4">Suprise your listeners with great tunes.</p>
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">
              Action 3
            </button>
          </div>
          {/* card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-72">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Jambo sms</h2>
            <p className="text-gray-600 mb-4">Bulk sms at affordable.</p>
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">
              Action 3
            </button>
          </div>
  
        </div>
      </div>

    </div>
  )
}
export default Products;

