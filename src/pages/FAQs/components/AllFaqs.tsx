import { AiOutlineRight } from "react-icons/ai";

export default function AllFaqs() {
  return (
    <section id="all-faqs">
        {/* top links */}
        <div className="flex flex-col space-y-4 px-6 py-10 md:px-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-row flex items-center space-x-3">
            <p className="text-left tex-xl">Knowledge Base</p>
            <AiOutlineRight color="blue"/>
            <p className="text-left tex-xl">FAQs</p>
          </div>

          <div className="bg-gray-200 w-72 flex flex-row items-center space-x-4 rounded-full px-5 py-3 text-center">
            <p>Return to Knowledge Base</p>
            <svg className="ml-15" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"> <g fill="#49a8ff" fillRule="evenodd"> <circle cx="16.5" cy="1.889135" r="1.5"></circle> <circle cx="16.5" cy="8.889135" r="1.5"></circle> <circle cx="16.5" cy="15.889135" r="1.5"></circle> <circle cx="9" cy="1.889135" r="1.5"></circle> <circle cx="9" cy="8.889135" r="1.5"></circle> <circle cx="9" cy="15.889135" r="1.5"></circle> <circle cx="1.5" cy="1.889135" r="1.5"></circle> <circle cx="1.5" cy="8.889135" r="1.5"></circle> <circle cx="1.5" cy="15.889135" r="1.5"></circle> </g> </svg>
          </div>
        </div>

  
    </section>
  )
}
