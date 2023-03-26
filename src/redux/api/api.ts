import { SortByOption } from "@redux/sortBy";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type News = {
  author: string;
  description: string;
  publishedAt: Date;
  source: {
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

type NewsResponse = {
  articles: News[];
  totalResults: number;
};

type NewsArgs = {
  pageNumber: number;
  pageSize: number;
  sortBy: SortByOption;
};

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const apiKey = import.meta.env.VITE_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${proxyUrl}https://newsapi.org/v2`,
    headers: { Authorization: apiKey },
  }),
  tagTypes: ["News"],

  endpoints: (builder) => ({
    getAll: builder.query<NewsResponse, NewsArgs>({
      query: ({ pageNumber, pageSize, sortBy }) => ({
        url: "everything",
        params: {
          q: "all",
          sortBy: sortBy,
          page: pageNumber + 1,
          pageSize: pageSize,
        },
      }),

      providesTags: ["News"],

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.articles.push(...newItems.articles);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      transformResponse: (response: NewsResponse) => ({
        articles: response.articles,
        totalResults: response.totalResults,
      }),
    }),
  }),

  refetchOnFocus: false,
});
