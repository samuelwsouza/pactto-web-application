import PacttoLogo from '../../assets/pactto-logo.svg'
import Avatar from '../../assets/avatar-placeholder.png'
import { FileVideo2, Home, Link2, Menu, MessagesSquare, MonitorPlay, PackageSearch, PanelsTopLeft, Podcast, Settings, UserPen, X } from 'lucide-react'
import { NavLink } from './nav-link'
import { useState } from 'react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`h-screen flex flex-col ${isOpen ? "w-72" : "w-16"} bg-[#2F2F2F] transition-all duration-200`}>
      <div className="flex items-center justify-between ml-2 mt-7">
        {isOpen && <img className='w-36 pl-5' src={PacttoLogo} alt="Pactto logotipo" />}
        <button onClick={toggleSidebar} className='mr-3 bg-transparent p-2 hover:bg-white hover:bg-opacity-5 hover:rounded-full'>
          {isOpen ? <X color='white' /> : <Menu color='white'  />}
        </button>
      </div>
      
      {isOpen && (
        <>
          <strong className='text-sm uppercase text-[#545454] mt-5 ml-7'>your pactto profile</strong>

          <div className="flex flex-col mt-10">
            <div className='flex gap-3 items-center w-full ml-7'>
              <div className="w-10 h-10">
                <img src={Avatar} className='rounded-full' alt="Your profile photo" />
              </div>

              <div className='flex flex-col items-start'>
                <p className='text-xxs text-[#CBCBCB]'>TRIAL: 14 DAYS LEFT</p>
                <button className='flex items-center w-[102px] h-6 bg-special p-1 rounded-sm'>
                  <span className='text-sm text-white font-semibold'>PACTTO PRO</span>
                </button>
              </div>
            </div>

            <div className="flex-col ml-7 mt-5">
              <h2 className='text-white text-2xl font-semibold tracking-normal'>Samuel Souza</h2>
              <p className='text-[#ACACAC] text-md tracking-tight'>Pactto member since 2024</p>
            </div>
          </div>
        </>
      )}

      <nav className='flex flex-col items-center mt-5 transition-all'>
        <NavLink to="/" icon={<Home />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Home</span>}
        </NavLink>

        <NavLink to="/chats" icon={<MessagesSquare />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Pacttos Chat</span>}
        </NavLink>

        <NavLink to="/reviewitems" icon={<MonitorPlay />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Items to review</span>}
        </NavLink>

        <NavLink to="/weblinks" icon={<Link2 />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Web links you created</span>}
        </NavLink>

        <NavLink to="/personalinfo" icon={<UserPen />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Personal information</span>}
        </NavLink>

        <NavLink to="/reviewpackages" icon={<PackageSearch />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Review packages for sale</span>}
        </NavLink>

        <NavLink to="/website" icon={<PanelsTopLeft />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Pactto website</span>}
        </NavLink>

        <NavLink to="/videolibrary" icon={<FileVideo2 />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Reference video library</span>}
        </NavLink>

        <NavLink to="/subscription" icon={<Podcast />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Subscription</span>}
        </NavLink>

        <NavLink to="/settings" icon={<Settings />} className="flex items-center gap-3 px-4 py-2 w-full hover:bg-dark">
          {isOpen && <span className="text-silver text-sm">Review Settings</span>}
        </NavLink>

      </nav>

      {isOpen && (
        <div className='relative'>
          <button className='mb-10 w-48 h-12 rounded-full bg-silver text-black font-semibold tracking-wide text-md absolute top-40 left-7'><a href="www.pactto.com/home">LOGOUT</a></button>
        </div>
      )}
    </div>
  );
}
