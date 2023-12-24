import { GET_ALL_BLOG_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const blogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: () => ({
                url: `${GET_ALL_BLOG_URL}/`
            }),
            keepUnusedDataFor: 60
        })
    })
})

export const {useGetAllBlogsQuery} = blogApiSlice