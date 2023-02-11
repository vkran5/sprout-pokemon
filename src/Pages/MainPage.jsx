import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCardComponent";
import LoadingCard from "../Components/LoadingCardComponent";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    const navigate = useNavigate();

    const pokemonList = async () => {
        setLoading(true)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${10 * page}`);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)

            console.log(result.data)
            setPokemonData(state => {
                console.log(state)
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            });
        })
    };


    useEffect(() => {
        pokemonList();
    }, [page])

    const nextPage = () => {
        setPokemonData([]);
        setPage(prev => prev + 1)
    };

    const previousPage = () => {
        setPokemonData([]);
        setPage(prev => prev - 1)
    };


    return (
        <div className="min-h-screen w-screen pt-[100px] bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="w-3/4 mx-auto flex flex-wrap justify-center gap-10 overflow-x-hidden ">

                {
                    loading ?
                        <LoadingCard />
                        :
                        pokemonData.map((pokemon, idx) => {
                            return (
                                <div key={idx} onClick={() => navigate(`/pokemon?id_monster=${pokemon.id}`)}>
                                    <PokemonCard pokemon={pokemon} />
                                </div>
                            )
                        })
                }
                <br />
            </div>

            <div className="w-3/4 mx-auto flex flex-wrap py-5 md:py-1 justify-center gap-5 overflow-x-hidden">
                <button className={`w-[100px] h-[36px] ${page === 0 && 'cursor-not-allowed'} rounded-md bg-yellow-400 font-semibold text-white`} onClick={previousPage}>Previous</button>
                <button className="w-[100px] h-[36px] rounded-md bg-yellow-400 font-semibold text-white" onClick={nextPage}>Next</button>
            </div>



        </div>
    )
}

export default MainPage;