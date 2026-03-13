import { create } from "zustand";

const useProductStore = create((set) => ({
    sortOrder: null,
    setSortOrder: (order) => set({ sortOrder: order }),
}));

export default useProductStore;