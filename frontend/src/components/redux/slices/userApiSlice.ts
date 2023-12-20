import { USERS_URL } from "../constant";
import { apiSlice } from "./apiSlice";

interface getUserDetailProps{
    id: string
}

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserDetail: builder.query({
            query: ({id}: getUserDetailProps) => ({
                url: `${USERS_URL}/${id}`
            }),
            keepUnusedDataFor: 15
        })
    })
})

export const { useGetUserDetailQuery } = userApiSlice;