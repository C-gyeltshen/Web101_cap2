    "use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar";

const Navbar = ({ handleSearch }) => (
    <nav className="bg-gray-800 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <span className="text-white font-bold text-xl">Poke Dex</span>
            </div>
            <div className="flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Enter Pokemon name..."
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleSearch}
                />
            </div>
            <div className="hidden md:block mx-4">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className="text-gray-300 hover:text-white">All Pokemon</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="/all" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Pokemon</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="text-gray-300 hover:text-white">Caught</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Caught</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    </nav>
);

const PokemonCard = ({ pokemon }) => (
    <div className="pokemon-card flex flex-row justify-center items-center h-screen mx-4 ">
        <div className="pokemon-image bg-white w-2/5 h-3/4 rounded-lg overflow-hidden shadow-md">
        <img
            src={pokemon.sprites?.front_default}
            alt={pokemon.name}
            className="w-full h-full object-cover"
        />
        </div>
        <div className="pokemon-details w-3/5 h-3/4 bg-gray-300 rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-800">{pokemon.name}</h1>
            <h2 className="text-lg text-gray-700">Type: {pokemon.types?.map(typeInfo => typeInfo.type.name).join(', ')}</h2>
            <h2 className="text-lg text-gray-700">Weight: {pokemon.weight}</h2>
            <h2 className="text-lg text-gray-700">Height: {pokemon.height}</h2>
            <div className="text-lg text-gray-700">
            <h2>Moves:</h2>
            <ul className="list-disc list-inside">
                {pokemon.moves?.slice(0, 10).map(moveInfo => (
                <li key={moveInfo.move.name}>{moveInfo.move.name}</li>
                ))}
            </ul>
            </div>
        </div>
    </div>
    );

const PokemonDetails = ({ pokemon }) => (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white space-y-4">
        {pokemon ? (
            <PokemonCard pokemon={pokemon} />
        ) : (
            <h1>Enter a Pokémon name and the details will appear here.</h1>
        )}
    </div>
);

export default function HomePage() {
    const [pokemon, setPokemon] = useState(null);

    const handleSearch = async (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query === '') {
            setPokemon(null); // Clear previous Pokémon data if query is empty
            return;
        }
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if (!response.ok) {
                throw new Error('Pokemon not found');
            }
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error("Error fetching the Pokémon data:", error);
            setPokemon(null);  // Clear previous Pokémon data if error occurs
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="navbar space-x-4">
                <Navbar handleSearch={handleSearch} />
            </div>
            <div className="flex-grow">
                <PokemonDetails pokemon={pokemon} />
            </div>
        </div>
    );
}
