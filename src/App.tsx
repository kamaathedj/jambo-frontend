import Services from './components/Services';
import Header from './components/header';
import HowTo from './components/HowTo';
import Agency from './components/Agency';
import Footer from './components/Footer';

function App() {


  return (
  <>

    <Header></Header>

        
  <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


<div>
  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
    Seamless <span className="text-primary-500">solutions</span><br />
    unmatched <span className="text-primary-500">experiences</span>
  </h1>
  <p className="text-gray-600 mt-2 text-lg">
Connecting moments, powering digital eperiences.
  </p>
</div>

<div className="flex justify-center md:justify-end">
  <img
    src="/discuss.png"
    alt="Two people on bean bags"
    className="w-full max-w-md"
  />
</div>

</div>
    <Services/>
    <HowTo/>
    <Agency />
    <Footer/>

    
     
    </>
  )
}

export default App
