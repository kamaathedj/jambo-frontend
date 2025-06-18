import Products from './components/products';

function App() {


  return (
    <>
    
      <div className="h-20 w-full bg-amber-600 my-10 mt-0 items-center">
        <h1 className="pt-4 ml-7"> Jambo games</h1>

        <div className='flex justify-end space-x-2 mr-50 '>
          <p className=''>home</p>
          <p>services</p>
        </div>
      </div>

    <Products></Products>
     
    </>
  )
}

export default App
