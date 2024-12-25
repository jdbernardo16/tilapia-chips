// composables/useApi.js
export function useApi() {
    const config = useRuntimeConfig()

    return {
        get: (endpoint) => useFetch(`${config.public.apiBaseUrl}${endpoint}`),
        post: (endpoint, data) => useFetch(`${config.public.apiBaseUrl}${endpoint}`, {
            method: 'POST',
            body: data
        }),
        // You can add other methods like put, delete, etc.
    }
}
