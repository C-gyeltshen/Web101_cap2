"use client";
import React from 'react';
import Link from 'next/link';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import usePokemonStore from '../../store/pokemonStore';

const NavbarPage = () => {
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

const CaughtPage = () => {
    const caughtPokemons = usePokemonStore(state => state.caughtPokemons);

    return (
        <div className="w-screen min-h-screen bg-gray-100">
            <NavbarPage />
            <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {caughtPokemons.length === 0 ? (
                    <p className="text-center text-gray-500">No Pokémon caught yet.</p>
                ) : (
                    caughtPokemons.map((pokemon, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-white shadow-md flex flex-col items-center">
                            <h2 className="text-lg font-bold capitalize mb-2">{pokemon.name}</h2>
                            <div className="flex justify-center mb-2">
                                <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 object-contain" />
                            </div>
                            <p className="text-gray-700 mb-2">Type: {pokemon.types.join(', ')}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CaughtPage;
