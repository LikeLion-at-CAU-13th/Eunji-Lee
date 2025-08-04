import { create } from "zustand";

const useProductStore = create((set) => ({
    sortOrder: null,
    setSortOrder: (order) => set({ sortOrder: order }),
    toggleSortOrder: () => set((state) => ({
        sortOrder: state.sortOrder === 'low' ? 'high' : 'low'
    })),
}));

export default useProductStore;