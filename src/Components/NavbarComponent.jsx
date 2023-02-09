import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill, BsFillBagFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    console.log(menu);

    const pathName = window.location.pathname;
    const navigate = useNavigate();

    return (
        <>
            <div className='w-full h-[64px] absolute flex items-center shadow-md z-10 bg-white'>
                <div className="w-full md:w-3/4 mx-auto px-10 flex justify-between">
                    <div id="navbar-brand" onClick={() => navigate('/')}>
                        <p className="font-rubik font-bold text-[24px] cursor-pointer">Logo</p>
                    </div>

                    <div className="hidden md:flex items-center gap-10">
                        <p className="font-bold font-rubik cursor-pointer text-slate-700 hover:text-slate-500">Products</p>
                        <p className="font-bold font-rubik cursor-pointer text-slate-700 hover:text-slate-500" >Testimony</p>
                        <p className="font-bold font-rubik cursor-pointer text-slate-700 hover:text-slate-500" >About Us</p>
                    </div>

                    <div className="hidden md:flex items-center">
                        <div className=" rounded-full cursor-pointer hover:bg-slate-300 p-3">
                            <BsFillBagFill />
                        </div>

                        <div className=" rounded-full cursor-pointer hover:bg-slate-300 p-3">
                            <BsFillPersonFill className="text-[20px]" />
                        </div>
                    </div>

                    {/* Small screen */}
                    <div className="md:hidden flex items-center rounded-full cursor-pointer hover:bg-slate-300 p-3">
                        <GiHamburgerMenu onClick={() => { setMenu(!menu) }} />
                    </div>

                    {
                        menu ?
                            <div id="small-screen-navbar" className="absolute top-[64px] left-0 flex items-center w-screen h-[90vh] bg-slate-50">
                                <div className="mx-auto flex flex-col justify-around gap-3 text-center">
                                    <p className="font-bold font-rubik cursor-pointer text-slate-700 border-b border-slate-700" >Products</p>
                                    <p className="font-bold font-rubik cursor-pointer text-slate-700 border-b border-slate-700" >Cart</p>
                                    <p className="font-bold font-rubik cursor-pointer text-slate-700 border-b border-slate-700">Profile</p>
                                    <p className="font-bold font-rubik cursor-pointer text-slate-700 border-b border-slate-700" >Logout</p>
                                </div>
                            </div>
                            :
                            null
                    }

                </div>
            </div>




        </>

    )
}

export default Navbar;