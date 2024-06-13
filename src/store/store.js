// store.js
import create from 'zustand';

const useStore = create(set => ({
    caughtPokemon: [],
    addCaughtPokemon: (pokemon) => set(state => ({ caughtPokemon: [...state.caughtPokemon, pokemon] })),
}));

export default useStore;
