import React from "react";

const RightBar = () => {
    
    return (
        <div className="p-5 fixed right-[200px]">
                    <div className="bg-slate-100 rounded-2xl w-[300px] p-3">
                        <h1 className="text-[24px] font-bold">Trends for you</h1>

                        <div className="mt-4">
                            <div>
                                <p className="text-[12px] text-slate-500">Trending in Indonesia </p>
                                <p className="font-medium">World Cup 2022</p>
                            </div>

                            <div className="mt-3">
                                <p className="text-[12px] text-slate-500">Entertainment </p>
                                <p className="font-medium">#WakandaForever</p>
                            </div>

                            <div className="mt-3">
                                <p className="text-[12px] text-slate-500">Sports </p>
                                <p className="font-medium">Arsenal</p>
                            </div>

                            <div className="mt-3">
                                <p className="text-[12px] text-slate-500">Travel </p>
                                <p className="font-medium">Lombok</p>
                            </div>

                            <div className="mt-3">
                                <p className="text-[12px] text-slate-500">Entertainment </p>
                                <p className="font-medium">#OnePiece1066</p>
                            </div>

                            <div className="mt-3">
                                <p className="text-[12px] text-slate-500">Sports </p>
                                <p className="font-medium">Argentina</p>
                            </div>

                            <div className="mt-3">
                                <p className="text-[12px] text-slate-500">Technologi </p>
                                <p className="font-medium">React</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default RightBar;