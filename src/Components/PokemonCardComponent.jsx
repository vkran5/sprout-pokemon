import React from "react";
import { backgroundGenerator, capitalize } from "../helper";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import Badge from "./BadgeComponent";

const PokemonCard = ({ pokemon }) => {


    return (
        <div className={`w-[250px] h-[350px] shadow rounded-lg bg-slate-50 flex flex-col justify-evenly cursor-pointer hover:bg-slate-100`}>
            
            <div className="rounded-lg bg-slate-100 border-slate-300  border-2  w-[200px] h-[200px] mx-auto">
                <p className=" px-5 pt-5 text-end text-[24px] font-bold">#0{pokemon.id}</p>
                <img className="w-[120px] h-[120px] rounded-lg m-auto" src={pokemon.sprites.other.dream_world.front_default} alt="pokemon" />
            </div>

            <div className="px-6">
                <div className=" pb-2 flex justify-between">
                    <p className="font-bold text-start text-[24px] text-blue-800">{capitalize(pokemon.name)}</p>
                </div>
                <div className="flex justify-start gap-3">
                    {
                        pokemon.types.map(data => {
                            return (
                                <Badge type={data.type.name}/>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default PokemonCard;