import React from "react";
import icon4 from "../Asset/notFound.png"


const NotFoundPage = () => {

    return (
        <div className="w-screen h-screen">
            <div className=" flex items-center">
                <div className="w-1/2 mx-auto">
                    <p className="relative top-[70px] text-[78px] text-center font-bold font-zen">404</p>
                    <img className="mx-auto w-[400px]" src={icon4} alt="notFound.png" />
                    <p className="relative bottom-10 text-[32px] text-center font-bold font-zen">Oops sorry page not found</p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;
