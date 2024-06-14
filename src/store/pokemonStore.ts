import create from 'zustand';

const usePokemonStore = create((set) => ({
    caughtPokemons: JSON.parse(localStorage.getItem('caughtPokemons')) || [],
    addCaughtPokemon: (pokemon) => {
        set((state) => {
            const updatedPokemons = [...state.caughtPokemons, pokemon];
            localStorage.setItem('caughtPokemons', JSON.stringify(updatedPokemons));
            return { caughtPokemons: updatedPokemons };
        });
    },
}));

export default usePokemonStore;
