import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const typicodeApi = createApi({
  reducerPath: "typicode",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "comments",
    }),
  }),
});

export const { useGetCommentsQuery } = typicodeApi;
