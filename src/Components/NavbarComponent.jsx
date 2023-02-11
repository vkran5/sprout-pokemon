import React from "react";
import { SiPokemon } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {

    const navigate = useNavigate();


    return (
        <nav className="w-screen h-[75px] absolute bg-white shadow">
            <div className="w-3/4 mx-auto flex">
                <SiPokemon className="text-[80px] cursor-pointer" onClick={() => {navigate('/')}}/>
            </div>
        </nav>
    )
};

export default NavbarComponent;