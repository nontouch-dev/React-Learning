import { useAuthStore } from "../store/authStore";

export const customFetch = async (url: string, options: RequestInit = {}) => {
    const token = useAuthStore.getState().token;

    const headers = new Headers(options.headers);

    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(import.meta.env.VITE_API_URL + url, {
        ...options,
        headers
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}
