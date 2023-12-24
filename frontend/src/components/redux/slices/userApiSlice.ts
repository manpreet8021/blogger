import { USERS_URL } from "../constant";
import { apiSlice } from "./apiSlice";

interface getUserDetailProps{
    id: string
}

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserDetail: builder.mutation({
            query: ({id}: getUserDetailProps) => ({
                url: `${USERS_URL}/getUserInfo`,
                method: 'POST',
                body: {id: id}
            })
        })
    })
})

export const { useGetUserDetailMutation } = userApiSlice;