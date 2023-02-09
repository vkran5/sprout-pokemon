import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ImageCover = () => {

    return (
        <div className="mx-auto">
            <div className="flex justify-between">
                <div className="p-5">
                    <p className="font-rubik text-[48px] font-bold">Because Furniture</p>
                    <p className="font-rubik text-[48px] font-bold text-[#88511a]">Says a lot about you </p>
                </div>

                <div className="flex items-end">
                    <div className="flex items-end md:p-7 mr-10 mb-7">
                        <HiOutlineArrowNarrowRight className="text-[48px] cursor-pointer text-white border rounded-full p-2 bg-[#383838] hover:bg-slate-500" />
                    </div>
                </div>
            </div>

            <div className="md:flex pb-1 px-5">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="h-[350px]"
                    />
                </div>

                <div
                    className="p-5 w-[860px] h-[350px] mx-auto"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)` }}
                >
                    <div className="">
                        <p className="font-rubik text-[24px] font-semibold text-white">Materials</p>
                        <p className="font-rubik text-white">Maple, ash, beech, chery, </p>
                        <p className="font-rubik text-white">mdf, pvc, walnut, ash, beech, chery, </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-grow justify-between px-5 pb-5">
                <img
                    src="https://images.unsplash.com/photo-1567790375865-21c42874446e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="h-[270px]"
                />

                <img
                    src="https://images.unsplash.com/photo-1567016557389-5246a1940bdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
                    alt=""
                    className="h-[270px]"
                />

                <img
                    src="https://images.unsplash.com/photo-1567790295703-33352a194351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="h-[270px]"
                />

                <img
                    src="https://images.unsplash.com/photo-1567016507665-356928ac6679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="h-[270px]"
                />
            </div>
        </div>
    )
};

export default ImageCover;