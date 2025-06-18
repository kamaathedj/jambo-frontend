
export default function Agency() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


    <div>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Our <span className="text-orange-600">Agency</span><br />
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
      Jambo games limited is commited to delivering high quality content
    services that empower busineses and individual through Seamless
    digital solutions. By leveraging technology, creativity and strategic
    partnerships, we provide bulk messaging, shortcodes ,ussd services , mobile
    entertainment, skiza tones, event management and ticketing solutions that’s
    inspire engagement and drive meaningful connections.
      </p>
    </div>
    
    <div className="flex justify-center md:justify-end">
      <img
        src="/agency.png"
        alt="Two people on bean bags"
        className="w-full max-w-md"
      />
    </div>
    
    </div>
  )
}