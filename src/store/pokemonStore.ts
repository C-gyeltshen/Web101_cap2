import create from 'zustand';

const usePokemonStore = create((set) => ({
    caughtPokemons: [],
    addCaughtPokemon: (pokemon) =>
        set((state) => ({
            caughtPokemons: [...state.caughtPokemons, pokemon],
        })),
}));

export default usePokemonStore;