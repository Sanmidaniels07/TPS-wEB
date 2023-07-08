import { useState } from 'react'
import { FaBars, FaPlus, FaDatabase } from "react-icons/fa"
import { CgSearch } from "react-icons/cg"
import { VscChromeClose } from 'react-icons/vsc'
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi"
import { BiSolidShield } from 'react-icons/bi'
import { LuMessagesSquare } from "react-icons/lu"
import { TiSupport } from 'react-icons/ti'
import { BsCloudDownloadFill } from 'react-icons/bs'
import { IoIosArrowForward } from "react-icons/io"


const navlinks = [
  {
    link: 'Services',
    submenu: true,
    sublink: [
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/cloud.svg',
        title: 'Cloud Solutions',
        text: 'A wide range of cloud solutions for business'
      },
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/shield.svg',
        title: 'Cyber Security Services',
        text: 'Trust your IT with Experts in deliverying IT support excellence.'
      },
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/callouts.svg',
        title: 'Communications',
        text: 'Bespoke business communication systems.'
      },
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/lifering.svg',
        title: 'IT Support and Consultancy Services',
        text: 'Expert IT services when you need it most.'
      },
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/database.svg',
        title: 'Backup and Recovery',
        text: 'Leading backup and recovery services for businesses.'
      },
    ]
  },
  {
    link: 'Challenges',
    submenu: true,
    sublink: [
      {
        icon: <IoIosArrowForward />,
        title: 'Old, Slow and Useless',
        text: 'Dated IT Equipment can take a toll on your business.'
      },
      {
        icon: <IoIosArrowForward />,
        title: 'IT and ROI',
        text: 'Efficient IT systems streamline business operations.'
      },
      {
        icon: <IoIosArrowForward />,
        title: 'IT and your Business Ambitions',
        text: 'Ensure your business objectives align with your IT strategy.'
      },
      {
        icon: <IoIosArrowForward />,
        title: "Disaster Recovery! What's that?",
        text: "Don't be caught offguard by unforeseen circumstances."
      },
      {
        icon: <IoIosArrowForward />,
        title: 'Does IT Security Matter? The Importance of IT Security',
        text: 'IT security is often an afterthought, find out why it matters.'
      },
      {
        icon: <IoIosArrowForward />,
        title: 'Small Issues which create Big Problems',
        text: "Don't let small IT issues become business critical issues."
      },
    ]
  },
  {
    link: 'About',
    submenu: false,
  },
  {
    link: 'Success stories',
    submenu: false,
  },
  {
    link: 'Knowledge base',
    submenu: false,
  },
  {
    link: 'Blog',
    submenu: false,
  },
  {
    link: 'FAQs',
    submenu: false,
  }
]

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const openNavbar = () => setNavbar(true);
  const closeNavbar = () => setNavbar(false);

  return (
    <header className="relative z-40 bg-black bg-opacity-70">
      <nav className='flex items-center justify-between py-5 px-7 md:p-7 bg-transparent text-white hover:bg-black border-b-2 border-b-primary h-36'>
        <a href="#">
          <svg className="text-white w-40" height="58" viewBox="0 0 141 58" width="141" xmlns="http://www.w3.org/2000/svg"> 
            <Logo />
          </svg>
        </a>

        <ul className='hidden items-center gap-6 lg:flex'>
          {
            navlinks.map((item, index) => {
              const {link, submenu, sublink} = item;
              return (
                <li key={index} className='group'>
                  <a href="#" className='nav-link'>
                    {link}
                    {
                      submenu && <span className='w-2 h-[2px] mt-1 ml-1 bg-primary100'></span>
                    }
                  </a>
                  {
                    submenu && <Dropdown link={sublink} />
                  }
                </li>
              )
            })
          }
        </ul>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-2 sm:flex">
            <button className="flex items-center justify-center bg-transparent border border-primary p-3 rounded-full hover:cursor-pointer hover:bg-primary100 transition">
              <CgSearch size={20} />
            </button>
            <button className="bg-transparent border-2 px-8 py-2 border-primary100 rounded-full transition hover:cursor-pointer hover:bg-sky-500">
              Get in touch
            </button>
          </div>
          <div className="block cursor-pointer lg:hidden" onClick={openNavbar}>
            <FaBars size={23} />
          </div>
        </div>
        {/* Mobile Menu */}
        {navbar && <MobileNav close={closeNavbar} />}
      </nav>
    </header>
  )
}

export default Navbar

const MobileNav = ({close}) => {
  const [dropdown, setDropdown] =  useState(false);
  return (
    <div className="bg-[#1e1e1e] w-full min-h-screen fixed top-0 left-0 right-0 lg:hidden transition-all duration-700">
      <div className="flex items-center justify-between py-3 px-5">
      <a href="#">
          <svg className="text-white w-24" height="58" viewBox="0 0 141 58" width="141" xmlns="http://www.w3.org/2000/svg"> 
            <Logo />
          </svg>
        </a>

        <span className='text-white hover:cursor-pointer' onClick={close}>
          <VscChromeClose size={30} />
        </span>
      </div>

      <ul className='my-6'>
        <li className='w-full border-b border-b-neutral-200 py-3 px-6 mb-3' onClick={() => setDropdown(!dropdown)}>
          <div className="flex items-center justify-between">
            <a href="#" className='text-lg font-semibold text-white'>Services</a>
            <span className='cursor-pointer text-primary'>
              {
                dropdown ? <PiCaretUpBold size={20} /> : <PiCaretDownBold size={20} />
              }
            </span>
          </div>
          {
            dropdown && (
              <ul className={`${dropdown} ? 'flex flex-col space-y-5 my-6 mx-6' : 'hidden'`}>
                <li>
                  <a href="#" className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <BsCloudDownloadFill size={24} />
                    </span>
                    <span>Cloud Solutions</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <BiSolidShield size={24} />
                    </span>
                    <span>Cyber Security Services</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <LuMessagesSquare size={24} />
                    </span>
                    <span>Communications</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <TiSupport size={24} />
                    </span>
                    <span>IT Support and Services</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <FaDatabase size={24} />
                    </span>
                    <span>
                      Backup and Recovery
                    </span>
                  </a>
                </li>
              </ul>
            )
          }
        </li>
        <li className='w-full border-b border-b-neutral-200 py-3 px-6 mb-3' onClick={() => setDropdown(!dropdown)}>
          <div className="flex items-center justify-between">
            <a href="#" className='text-lg font-semibold text-white'>Challenges</a>
            <span className='cursor-pointer text-primary'>
            {
              dropdown ? <PiCaretUpBold size={20} /> : <PiCaretDownBold size={20} />
            }
            </span>
          </div>
          {
            dropdown && (
              <ul className={`${dropdown} ? 'flex flex-col space-y-3 my-6 mx-6' : 'hidden'`}>
                <li>
                  <a href="#">Old, Slow and Useless!</a>
                </li>
                <li>
                  <a href="#">IT and ROI</a>
                </li>
                <li>
                  <a href="#">IT and your Business Ambitions</a>
                </li>
                <li>
                  <a href="#">Disaster Recovery! What's that?</a>
                </li>
                <li>
                  <a href="#">Does IT Security Matter? The Importance of IT Security</a>
                </li>
                <li>
                  <a href="#">Small Issues which Create Big Problems</a>
                </li>
              </ul>
            )
          }
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <a href="#" className='text-lg font-semibold text-white'>About</a>
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <a href="#" className='text-lg font-semibold text-white'>Success Stories</a>
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <a href="#" className='text-lg font-semibold text-white'>Knowledge Base</a>
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <a href="#" className='text-lg font-semibold text-white'>Blog</a>
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <a href="#" className='text-lg font-semibold text-white'>FAQs</a>
        </li>
      </ul>
      <button className="bg-transparent border-2 m-4 px-8 py-3 border-primary100 rounded-full transition hover:cursor-pointer hover:bg-sky-500">
        Get in touch
      </button>
    </div>
  )
}

const Dropdown = ({ link }) => {
  return (
    <div className='hover-block'>
      <div className="w-full hidden group-hover:block bg-white z-20 py-20 absolute top-36 left-0">
        <div className="w-[80%] m-auto flex items-center flex-wrap gap-x-10 gap-y-12">
          {
            link.map((item, index) => {
              const {image, title, text, icon} = item;
              return (
                <div className="flex flex-col items-start basis-[22rem] space-y-3 cursor-pointer" key={index}>
                  {
                    image && <img src={image} className='w-10 h-auto' alt="" />
                  }
                  {
                    icon && <span  className='text-primary100 text-2xl'>{icon}</span>
                  }
                  <h4 className='text-xl text-slate-900 font-bold'>{title}</h4>
                  <p className='text-base text-slate-700 font-normal'>{text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


const Logo = () => {
  return (
    <g className="fill-current" fill-rule="evenodd"> 
      <path d="m29 0c16.0162577 0 29 12.9837423 29 29s-12.9837423 29-29 29-29-12.9837423-29-29 12.9837423-29 29-29zm9.099253 17c-3.3960847 0-6.4574265 1.4249434-8.6257551 3.7066821l.0029267.0029267-1.5445728 1.5445728 3.3660859 3.3660859 1.5445728-1.5445728c1.3075091-1.41909 3.1751178-2.3150301 5.2567425-2.3150301 3.94338 0 7.140814 3.1967024 7.140814 7.1404482 0 3.9437459-3.197434 7.1408141-7.140814 7.1408141-2.030773 0-3.8559445-.8542344-5.1561367-2.215156l-3.3646225 3.3649884.4049839.4053497c2.1247937 1.9872382 4.9768755 3.2051167 8.1157753 3.2051167 6.5726659 0 11.900747-5.3280812 11.900747-11.9011129 0-6.5726658-5.3280811-11.9011128-11.900747-11.9011128zm-22.3985009 3.2100921c-4.8049312 0-8.7007521 3.895455-8.7007521 8.7007521 0 4.805297 3.8958209 8.700752 8.7007521 8.700752 2.2989331 0 4.3878746-.8930133 5.9434225-2.349053l.0058535.0054876 2.3852711-2.3849053-3.3675492-3.3675493-1.5950586 1.5950587-.2436489.2440147-.5341251.5586363c-.6954602.6021712-1.6016437.9680104-2.5941653.9680104-2.1928398 0-3.9700863-1.7776124-3.9700863-3.9704521 0-2.1928398 1.7772465-3.9704522 3.9700863-3.9704522 1.1567833 0 2.1979615.4953462 2.9237863 1.2848271l3.3445014-3.3448672c-1.5826201-1.6448128-3.8050928-2.6702598-6.2682877-2.6702598zm8.9592906 5.3150572-3.3682809 3.3671834 3.3671834 3.3671834 3.3675492-3.3679151zm2.6479437-2.6473217-.4269343.4269343-1.5972537 1.5968878 3.3664517 3.3664517 1.5968878-1.5972537.3848628-.3844969.0420715-.0424373z"></path> <path d="m84.2 46.768c4.848 0 9.312-1.584 12.768-4.992l-4.32-4.368c-2.208 2.208-5.52 3.408-8.448 3.408-8.304 0-11.52-5.808-11.568-11.376-.048-5.616 3.456-11.664 11.568-11.664 2.928 0 5.904 1.008 8.112 3.168l4.224-4.08c-3.456-3.408-7.776-5.136-12.336-5.136-12.144 0-17.856 8.928-17.8083 17.712.0483 8.736 5.3283 17.328 17.8083 17.328zm22.804-.768v-33.6h-6.288v33.6zm19.732.864c7.488 0 14.112-3.216 14.112-10.704 0-8.016-6.528-9.84-13.536-10.704-4.032-.48-7.488-1.296-7.488-4.224 0-2.496 2.256-4.464 6.96-4.464 3.648 0 6.816 1.824 7.968 3.744l5.04-2.592c-2.544-5.184-7.968-6.672-13.2-6.672-6.192.048-13.008 2.88-13.008 9.792 0 7.536 6.336 9.36 13.2 10.176 4.464.48 7.776 1.776 7.776 4.944 0 3.648-3.744 5.04-7.728 5.04-4.08 0-7.968-1.632-9.456-5.328l-5.28 2.736c2.496 6.144 7.776 8.256 14.64 8.256z" fill-rule="nonzero"></path> 
    </g> 
  )
}