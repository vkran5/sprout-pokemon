import React from "react";
import { useNavigate } from "react-router-dom";
import ImageCover from "./ImageCoverComponent";
import { SiIkea } from "react-icons/si";

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className="h-min-screen w-min-screen bg-[#fff9f2] mx-auto pt-[76px]">
            <div className="w-3/4  mx-auto">
                
                <ImageCover />

                <div className="text-center py-10">
                    <h1 className="font-rubik text-[32px] font-bold">Meet</h1>
                    <h1 className="font-rubik text-[32px] font-bold">Our <span className="font-rubik text-[32px] font-bold text-[#88511a]">great team</span></h1>
                </div>


            </div>


        </div>
    )

}

export default LandingPage;