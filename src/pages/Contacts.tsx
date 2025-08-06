
import Header from '../components/header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header/>
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100 font-sans">
      {/* Left Side - Contact Info */}
      <div className="bg-primary-500 text-white p-6 md:w-1/3">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">PHONE</h2>
          <p className="mt-2">Nairobi<br />0721640432</p>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-2">EMAIL</h2>
          <p>GENERAL INQUIRIES<br /><a href="mailto:INFO@JAMBOGAMESLTD.CO.KE" className="underline">INFO@JAMBOGAMESLTD.CO.KE</a></p>

        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white p-8 md:w-2/3">
        <div className="bg-primary-500 text-white font-semibold px-4 py-2 text-sm uppercase tracking-wide mb-6">
          Send us some electronic mail
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="border-b p-2 focus:outline-none" />
            <input type="text" placeholder="Company" className="border-b p-2 focus:outline-none" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full border-b p-2 focus:outline-none" />
          <input type="text" placeholder="Phone Number" className="w-full border-b p-2 focus:outline-none" />
          <input type="text" placeholder="Location (city)" className="w-full border-b p-2 focus:outline-none" />
          <textarea placeholder="Message" className="w-full h-32 border p-2 focus:outline-none bg-gray-100"></textarea>
          <div className="text-right">
            <button type="submit" className="bg-primary-500 text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-yellow-600 transition">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Contact;
