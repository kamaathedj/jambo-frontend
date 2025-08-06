import {Button} from "@react-email/components";

export const JamboTunesForm = () => {
  return (
    <div className="bg-white p-8 ">
        <div className="bg-primary-500 text-white font-semibold px-4 py-2 text-sm uppercase tracking-wide mb-6">
          Information about your company
        </div>
        <form className="space-y-4" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="border-b p-2 focus:outline-none" />
            <input type="text" placeholder="Your Company name" className="border-b p-2 focus:outline-none" />
          </div>
          <input type="text" placeholder="Type of business e.g service,health,construction" className="w-full border-b p-2 focus:outline-none" />
          <input type="text" placeholder="Phone Number" className="w-full border-b p-2 focus:outline-none" />
          <input type="text" placeholder="Location (city)" className="w-full border-b p-2 focus:outline-none" />
          <textarea placeholder="Company slogan" className="w-full h-32 border p-2 focus:outline-none bg-gray-100"></textarea>
          <div className="text-right">
            <Button href ='kamaudavikiruku@gmail.com' type="submit" className="bg-primary-500 text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-yellow-600 transition">
              Send
            </Button>
          </div>
        </form>
      </div>
  )
}
