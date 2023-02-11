import React from "react";
import { backgroundGenerator, capitalize } from "../helper";

const Badge = ({ type }) => {

    console.log(type)

    return (
        <div className={`w-[85px] h-[24px] rounded-md ${backgroundGenerator(type)}`}>
            <p className="text-center font-semibold text-white">{capitalize(type)}</p>
        </div>
    )
}

export default Badge;