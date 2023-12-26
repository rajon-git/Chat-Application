import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) =>
                `/users?email=${email}`,
        }),
    }),
})
export const {useGetUserQuery}=usersApi;