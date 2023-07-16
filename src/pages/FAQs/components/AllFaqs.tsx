import { AiOutlineRight } from "react-icons/ai";

export default function AllFaqs() {
  return (
    <section id="all-faqs">
      {/* top links */}
      <div className="flex flex-col space-y-4 px-6 py-10 md:px-10 md:flex-row md:items-center md:justify-between">
        <div className="flex-row flex items-center space-x-3">
          <a href="https://" className="cursor-pointer text-left tex-2xl">
            Knowledge Base
          </a>
          <AiOutlineRight color="blue" />
          <a href="https://" className="cursor-pointer text-left tex-2xl">
            FAQs
          </a>
        </div>

        <div className="bg-gray-200 w-72 cursor-pointer flex flex-row items-center space-x-4 rounded-full px-5 py-3 text-center">
          <p>Return to Knowledge Base</p>
          <svg
            className="ml-15"
            height="18"
            viewBox="0 0 18 18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g fill="#49a8ff" fillRule="evenodd">
              {" "}
              <circle cx="16.5" cy="1.889135" r="1.5"></circle>{" "}
              <circle cx="16.5" cy="8.889135" r="1.5"></circle>{" "}
              <circle cx="16.5" cy="15.889135" r="1.5"></circle>{" "}
              <circle cx="9" cy="1.889135" r="1.5"></circle>{" "}
              <circle cx="9" cy="8.889135" r="1.5"></circle>{" "}
              <circle cx="9" cy="15.889135" r="1.5"></circle>{" "}
              <circle cx="1.5" cy="1.889135" r="1.5"></circle>{" "}
              <circle cx="1.5" cy="8.889135" r="1.5"></circle>{" "}
              <circle cx="1.5" cy="15.889135" r="1.5"></circle>{" "}
            </g>{" "}
          </svg>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="bg-gray-200 px-6 md:px-10 py-10">
        {/* questions */}
      
        <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="text-3xl flex-1 font-bold mb-10">All FAQs</div>
         
        <div className="grid md:grid-cols-2 md:w-3/4 gap-4 md:gap-10">
          <div className="flex flex-row items-center">
            <svg
              className="w-5 text-blue-400  mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>

            <p className="text-black">
              Why is CYDEFENCE’s authenticated web application scanning
              important?
            </p>
          </div>

          <div className="flex flex-row items-center">
            <svg
              className="w-5 text-blue-400  mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>

            <p className="text-black">
              Do CIS offer penetration testing services?
            </p>
          </div>

          <div className="flex flex-row items-center">
            <svg
              className="w-5 text-blue-400  mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>

            <p className="text-black">
              How often should I run CYDEFENCE vulnerability scans?
            </p>
          </div>

          <div className="flex flex-row items-center">
            <svg
              className="svg-inline--fa fa-angle-right fa-w-6 w-5 text-blue-400 text-primary-light text-20 mt-4 mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>

            <p className="text-black">
              Should I start with CYDEFENCE’s external vulnerability scanning or
              web application scanning?
            </p>
          </div>

          <div className="flex items-center flex-row">
            <svg
              className="svg-inline--fa fa-angle-right fa-w-6 w-5 text-blue-400 text-primary-light text-20 mt-4 mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>

            <p className="text-black">
              Can I scan network devices with CYDEFENCE?
            </p>
          </div>

          <div className="flex items-center flex-row">
            <svg
              className="w-5 text-blue-400  mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>
            <p className="text-black">
              What is the difference between CYDEFENCE’s external and internal
              vulnerability scan?
            </p>
          </div>

          
          <div className="flex items-center flex-row">
            <svg
              className="w-5 text-blue-400  mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>
            <p className="text-black">
            What is a web application scanner?
            </p>
          </div>

          
          <div className="flex items-center flex-row">
            <svg
              className="w-5 text-blue-400  mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>
            <p className="text-black">
            Should I perform CYDEFENCE external vulnerability scanning or external penetration testing?
            </p>
          </div>

 
          <div className="flex items-center flex-row">
            <svg
              className="w-5 text-blue-400  mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              data-fa-i2sv=""
            >
              {" "}
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
              ></path>{" "}
            </svg>
            <p className="text-black">
            Can CYDEFENCE scan behind a web-app login?
            </p>
          </div>
        </div>

        </div>
       
      </div>
    </section>
  );
}
