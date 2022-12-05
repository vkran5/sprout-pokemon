import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const pathName = window.location.pathname;
    const navigate = useNavigate();

    return (
        <div className={`w-full h-[82px] flex items-center 
        ${pathName === '/login' || pathName === '/register' || pathName === '/' ? 'absolute top-0' : 'hidden'}
        ${pathName === '/' ? 'bg-transparent' : ' border'}`}>
            <div className="w-3/4 mx-auto px-10 flex justify-between">
                <div id="navbar-brand" onClick={() => navigate('/')}>
                    <p className="font-zen text-blue-600 font-bold text-[24px] cursor-pointer">POSTY</p>
                </div>

                <div>
                    <button
                    className="w-[140px] h-[42px] font-medium hover:border hover:brightness-110 bg-slate-100 border rounded-lg"
                    onClick={ () => navigate('/register')}
                    >
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar;