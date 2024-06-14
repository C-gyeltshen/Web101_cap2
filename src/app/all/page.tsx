"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import usePokemonStore from '../../store/pokemonStore'; 
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/home" legacyBehavior>
                        <a className="text-white font-bold text-xl cursor-pointer">
                            Poke Dex
                        </a>
                    </Link>
                </div>
                <div className="flex-grow mx-4">
                    <input
                        type="text"
                        placeholder="Enter Pokemon name..."
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="hidden md:block">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger className="text-gray-300 hover:text-white">All Pokemon</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <Link href="/all" legacyBehavior>
                                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Pokemon</a>
                                    </Link>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="text-gray-300 hover:text-white">Caught</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <Link href="/caught" legacyBehavior>
                                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Caught</a>
                                    </Link>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </div>
        </nav>
    );
};

const PokemonCard = ({ name, types, image }) => {
    const addCaughtPokemon = usePokemonStore(state => state.addCaughtPokemon);

    const handleCatch = () => {
        addCaughtPokemon({ name, types, image });
        alert(`You caught ${name}!`);
    };

    return (
        <div className="border rounded-lg p-4 bg-white shadow-md flex flex-col items-center">
            <h2 className="text-lg font-bold capitalize mb-2">{name}</h2>
            <div className="flex justify-center mb-2">
                <img src={image} alt={name} className="w-32 h-32 object-contain" />
            </div>
            <p className="text-gray-700 mb-2">Type: {types.join(', ')}</p>
            <Button className="text-green-500 mt-4 focus:outline-none" onClick={handleCatch}>
                Catch
            </Button>
        </div>
    );
};

const HomePage = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const observer = useRef();

    const fetchPokemon = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${(page - 1) * 8}`);
        const data = await response.json();
        const detailedPokemon = await Promise.all(
            data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                const details = await res.json();
                return {
                    name: details.name,
                    types: details.types.map(typeInfo => typeInfo.type.name),
                    image: details.sprites.front_default
                };
            })
        );
        setPokemonList(prev => [...prev, ...detailedPokemon]);
        setIsLoading(false);
    }, [page]);

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon]);

    const loadMorePokemon = () => {
        setPage(prevPage => prevPage + 1);
    };

    const loadMoreButtonRef = useRef();
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const handleObserver = (entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                setPage(prevPage => prevPage + 1);
            }
        };

        const observer = new IntersectionObserver(handleObserver, observerOptions);
        if (loadMoreButtonRef.current) {
            observer.observe(loadMoreButtonRef.current);
        }

        return () => {
            if (loadMoreButtonRef.current) {
                observer.unobserve(loadMoreButtonRef.current);
            }
        };
    }, []);

    return (
        <div className="w-screen min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pokemonList.map((pokemon, index) => (
                    <PokemonCard key={index} {...pokemon} />
                ))}
            </div>
            {isLoading && <p className="text-center mt-4">Loading...</p>}
            {!isLoading && (
                <div className="flex justify-center mt-4">
                    <button
                        ref={loadMoreButtonRef}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                        onClick={loadMorePokemon}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default HomePage;
