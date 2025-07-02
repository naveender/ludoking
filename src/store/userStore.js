import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (userData) => set({ user: userData }),
            logout: () => set({ user: null }),
        }),
        {
            name: "user", // key in localStorage
            serialize: (state) => JSON.stringify(state),
            deserialize: (str) => JSON.parse(str),
        }
    )
);

export default useUserStore;
