import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Badge from "../Components/BadgeComponent";
import { capitalize } from "../helper";

const DetailPage = () => {
    const [detail, setDetail] = useState('');
    const [loading, setLoading] = useState(true);
    const { state, search } = useLocation();

    console.log(detail);

    const getDetail = async () => {
        try {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.split('=')[1]}/`);
            setDetail(res.data);
            setLoading(false);

            // console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetail();
    }, [])

    return (
        <div className="min-h-screen w-screen pt-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg flex ">

            {
                !loading &&

                <div className="w-screen h-screen sm:h-3/4 sm:w-3/4  md:w-3/5 lg:w-1/3 2xl:w-1/4 m-auto sm:border sm:rounded-lg bg-white p-7 flex flex-col ">
                    <img src={detail.sprites.other.dream_world.front_default} alt="/detail" className="mx-auto w-[250px] h-[250px]" />

                    <div>
                        <p className="text-center text-[36px] text-blue-800 font-semibold py-4">{capitalize(detail.name)}</p>
                        <div className="flex "  >
                            <div className="mx-auto flex justify-start gap-3 ">
                                {
                                    detail.types.map((data, idx) => {
                                        return (
                                            <Badge type={data.type.name} key={idx} />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* HP and XP */}
                        <div className="flex justify-center gap-3 border-b py-3">
                            <p className="text-blue-800">HP {detail.stats[0].base_stat}</p>
                            <p className="text-blue-800">|</p>
                            <p className="text-blue-800">XP {detail.base_experience}</p>
                        </div>

                        <div className="flex justify-evenly py-5 border-b">

                            {/* weight */}
                            <div>
                                <p className="text-center text-slate-500">Height</p>
                                <p className="text-center text-blue-800">{detail.height / 10} m</p>
                            </div>

                            <p className="text-slate-500">|</p>

                            {/* height */}
                            <div>
                                <p className="text-center text-slate-500">Weight</p>
                                <p className="text-center text-blue-800">{detail.weight} lbs</p>
                            </div>

                        </div>

                        <div className="flex justify-evenly py-5">
                            <div>
                                <p className="text-center text-slate-500">Attack</p>
                                <p className="text-center text-blue-800">{detail.stats[1].base_stat}</p>
                            </div>

                            <div>
                                <p className="text-center text-slate-500">Defence</p>
                                <p className="text-center text-blue-800">{detail.stats[2].base_stat}</p>
                            </div>

                            <div>
                                <p className="text-center text-slate-500">Speed</p>
                                <p className="text-center text-blue-800">{detail.stats[5].base_stat}</p>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>


                </div>
            }

        </div>
    )
}

export default DetailPage