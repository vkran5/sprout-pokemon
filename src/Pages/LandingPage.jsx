import React from "react";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import icon2 from '../Asset/icon2.png'
import icon3 from '../Asset/icon3.png'

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className="h-screen overflow-x-hidden">
            <div className="h-[605px] w-screen bg-gradient-to-r from-purple-100 to-blue-300">
                <div className="mx-auto w-3/4 px-8">
                    <div className="flex justify-between pt-[100px]">
                        <div className="w-1/2 mx-auto p-10">
                            <div className="pt-11">
                                <h1 className="font-zen text-[44px]">The easiest way to grow your social audience</h1>
                                <p className="text-slate-500 font-medium mt-5">Posty gives you amazing acces to share every your social activity. </p>

                                <div className="mt-7">
                                    <button
                                        className="w-[150px] h-[52px] mt-2 hover:brightness-110 hover:text-white bg-blue-500 border rounded-lg text-white font-medium"
                                        onClick={() => navigate('login')}
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="w-1/2 flex pl-[84px] pt-[105px]">
                            <img className="pl-10 h-[400px] " src={icon2} alt="girl.png"/>
                            <img className="pl-10 h-[400px] " src={icon3} alt="boy.png"/>
                        </div>

                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    )

}

export default LandingPage;