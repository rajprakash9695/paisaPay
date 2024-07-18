import { Link, useLocation } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

const NavbarList = [
  { title: 'Entrypass', to: '/' },
  { title: 'About us', to: '/about' },
  { title: 'Roadmap', to: '/roadmap' },
  { title: 'Blog ', to: '/blog' },
  { title: 'Docs', to: '/doc' },
];

function Navbar() {
  // console.log('🚀 ~ Navbar ~ auth:', auth);
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState('connectWallet');
  const location = useLocation();

  // console.log("path", location.pathname);

  const handleOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (button: any) => {
    setIsActive(button);
  };

  return (
    <div className="fixed w-full z-50">
      <div className="hero">
        <div className="max-w-screen-xl mx-auto  px-3 py-4 ">
          <div className="flex gap-4 items-center justify-between">
            <div>
              <Link to="/">
                <img
                  src="/navbar/logo.svg"
                  alt="my-gold logo h-8 w-6"
                  className="h-16"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-5">
                {NavbarList.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.to}
                      className={`pb-1 ${
                        location.pathname === item.to
                          ? 'text-white font-bold border-gradient-bottom'
                          : 'text-gray-300'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" hidden md:block flex items-center  border rounded-full text-white font-medium border-2 border-sky-400 p-0.5">
              <button
                className={`rounded-full px-4 py-2 ${
                  isActive === 'connect' ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleButtonClick('connect')}
              >
                Connected
              </button>
              <button
                className={`rounded-full px-4 py-2 ${
                  isActive === 'connectWallet' ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleButtonClick('connectWallet')}
              >
                Connect wallet
              </button>
            </div>

            <div className="md:hidden">
              {open ? (
                <IoClose
                  className="text-4xl cursor-pointer text-white"
                  onClick={onClose}
                />
              ) : (
                <CgMenuRightAlt
                  className="text-4xl cursor-pointer text-white"
                  onClick={handleOpen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <dialog
        open={open}
        onClose={onClose}
        className="w-full md:hidden layoutbg "
      >
        <div className=" w-full z-10 px-2  " onClick={onClose}>
          <div className="   w-full  p-2  ">
            <ul className="leading-7">
              {NavbarList.map((item) => (
                <Link to={item.to} key={item.title}>
                  <li
                    className={` text-white p-2 rounded-xl my-1 cursor-pointer hover:ml-1 duration-500   hover:font-bold  ${
                      location.pathname === item.to
                        ? 'layoutbg ml-1 font-bold'
                        : ''
                    }`}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Navbar;
