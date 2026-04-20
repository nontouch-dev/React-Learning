import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
	id: string;
	name: string;
	username: string;
	email: string;
}

type authStore = {
	user: User | null;
	token: string | null;

	login: (userData: User, newToken: string) => void;
	logout: () => void;
};

export const useAuthStore = create<authStore>()(
	persist(
		(set) => ({
			user: null,
			token: null,

			login: (userData: User, newToken: string) => set({ user: userData, token: newToken }),
			logout: () => set({ token: null, user: null }),
		}),
		{
			name: "auth-storage",
		},
	),
);
