export default function Description() {
  return (
    <section id="description">
      <div className="min-h-screen ">
        {/* top description */}
        <div className="flex flex-col  px-6 md:flex-row md:space-x-10 md:px-10 xl:px-16">
          {/* left text */}
          <div className="flex-col py-28 md:py-40 space-y-7 w-full">
            <div className="text-xl text-black mx-auto  md:text-left">
              CIS has a dedicated team of experts who can provide a scalable
              service for a wide range of IT projects.
            </div>

            <p className="text-gray-600">
              Our adaptive solutions and private cloud allow clients to expand
              their IT infrastructure as and when it’s required. Based in
              Oxfordshire, CIS is purpose-built around five key pillars:
            </p>

            {/* list items */}
            <ul className="space-y-3 ml-4">
              <li className=" text-gray-600">Cloud services</li>
              <li className="text-gray-600">Cyber security</li>
              <li className="text-gray-600">
                Communications infrastructure
              </li>
              <li className="text-left text-gray-600">
                Back up & disaster recovery
              </li>
              <li className="text-left text-gray-600">IT support</li>
            </ul>
          </div>

          {/* image section */}
          <div className="w-full -mt-20 md:-mt-0 md:py-28">
         
              <img alt="" src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/05/DSC0886611-1024x700.jpg" 
              className='w-full shadow-lg rounded h-auto md:w-full mb-60 md:mb-0 object-center object-cover md:inset-0 md:h-full' />

          </div>
        </div>
      </div>
    </section>
  );
}
