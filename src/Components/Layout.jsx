import { Link, Outlet, useLocation } from "react-router-dom"
import { HiOutlineChat,HiMail,HiMenuAlt3 } from 'react-icons/hi'
import { FaFacebook } from 'react-icons/fa'  
import { useEffect, useState } from "react"


const Layout = () => {

    const [isNavOn, setIsNavOn] = useState(false)
    const location = useLocation()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if(screenWidth >= 589){
            setIsNavOn(false)
        }
        
    });

  return (
    <div className="relative flex flex-col justify-between h-screen overflow-y-auto overflow-x-hidden">
        <nav className=" bg-[rgb(38,55,72)] p-5 drop-shadow-md z-10 h-[5rem]">
            <div className="container mx-auto flex items-center justify-between ">
                    <Link to='/' className="text-2xl font-semibold">
                        Our<span className="text-[rgb(237,162,8)] uppercase">Himitsu</span>
                    </Link>
                <div className="max-[589px]:hidden flex items-center gap-4 text-xl">
                    <Link to='/' className={location.pathname === '/' ? 'text-[rgb(237,162,8)]':''}>Inbox</Link>
                    <Link to='/about' className={location.pathname === '/about' ? 'text-[rgb(237,162,8)]':''}>About</Link>
                    <Link to='/contact' className={location.pathname === '/contact' ? 'text-[rgb(237,162,8)]':''}>Contact</Link>
                </div>
                <div className="max-[589px]:hidden flex text-xl">
                    <Link to='/create' className="flex items-center gap-1 bg-[rgb(237,162,8)] p-2 rounded-lg drop-shadow-md">
                        <span><HiOutlineChat/></span>
                        Post a Secret
                    </Link>
                </div>
                <div className="max-[589px]:flex hidden  text-xl">
                    <button onClick={()=>{isNavOn ? setIsNavOn(false):setIsNavOn(true)}} className="text-2xl">
                        <HiMenuAlt3/>
                    </button>
                </div>
            </div>
        </nav>
        {/* drop down */}
        <div className={`bg-[rgb(38,55,72)] max-[589px]:flex hidden p-3 absolute top-[4.5rem] left-0 right-0 transition ease-in-out ${isNavOn ? '':'translate-x-[40rem]'}`}>
            <div className="container mx-auto flex flex-col items-center justify-between ">
                <div className="flex flex-col mb-3 items-center gap-4 text-xl">
                    <Link to='/' onClick={()=>{setIsNavOn(false)}} className={location.pathname === '/' ? 'text-[rgb(237,162,8)]':''}>Inbox</Link>
                    <Link to='/about' onClick={()=>{setIsNavOn(false)}} className={location.pathname === '/about' ? 'text-[rgb(237,162,8)]':''}>About</Link>
                    <Link to='/contact' onClick={()=>{setIsNavOn(false)}} className={location.pathname === '/contact' ? 'text-[rgb(237,162,8)]':''}>Contact</Link>
                </div>
                <div className="flex text-xl">
                    <Link to='/create' className="flex items-center gap-1 bg-[rgb(237,162,8)] p-2 rounded-lg drop-shadow-md" onClick={()=>{setIsNavOn(false)}}>
                        <span><HiOutlineChat/></span>
                        Post a Secret
                    </Link>
                </div>
            </div>
        </div>
            <div className={`container mx-auto mt-10 my-10 transition ease-in-out ${isNavOn ? 'pt-[10rem]':''} `}>
                <Outlet/>
            </div>
        <footer className="bg-[rgb(38,55,72)] py-10 max-[680px]:px-5 max-[680px]:text-center text-slate-300">
            <div className="container mx-auto flex max-[680px]:flex-col flex-row gap-5 items-center justify-between flex-wrap">
                <div className="max-[680px]:w-full w-1/2">
                    <p>
                        Welcome to <span className="font-semibold">OUR<span className="text-[rgb(237,162,8)]">HIMITSU</span></span>, our online freedom wall! As an essential component of our Student Support Group (SSG) platform, OURHIMITSU provides a digital space where individuals can freely share their secrets, thoughts, and experiences. 
                    </p>
                </div>
                <div className="flex flex-col items-center flex-1">
                    <p className="text-[rgb(237,162,8)] font-semibold text-xl">Quick Navigate</p>
                    <Link to='/about' className="text-lg">About</Link>
                    <Link to='/' className="text-lg">Inbox</Link>
                    <Link to='/create' className="text-lg">Add secret</Link>
                </div>
                <div className="flex flex-col items-center flex-1">
                    <p className="text-[rgb(237,162,8)] font-semibold text-xl">Get Help</p>
                    <Link to='' className="mb-2 text-lg">Contact Us</Link>
                    <a href="#" className="text-xl mb-2"><FaFacebook/></a>
                    <a href="#" className="text-xl"><HiMail/></a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Layout