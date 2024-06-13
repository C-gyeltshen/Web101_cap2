import React from 'react';
import useStore from '../../store/store'; // Adjust the path according to your project structure
import { Button } from "@/components/ui/button";

const PokemonCard = ({ name, types, image }) => {
    const { addCaughtPokemon } = useStore();

    const handleCatch = () => {
        addCaughtPokemon({ name, types, image });
        alert(`You caught ${name}`);
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

export default PokemonCard;