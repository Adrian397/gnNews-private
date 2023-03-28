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

export type NewsResponse = {
  articles: News[];
  totalResults: number;
};

type NewsArgs = {
  code?: string;
  pageNumber?: number;
  pageSize?: number;
};

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const apiKey = import.meta.env.VITE_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
    headers: { Authorization: apiKey },
  }),
  tagTypes: ["CountryNews"],

  endpoints: (builder) => ({
    getAll: builder.query<NewsResponse, NewsArgs>({
      query: ({ pageNumber = 0, pageSize }) => ({
        url: "everything",
        params: {
          q: "all",
          sortBy: "popularity",
          page: pageNumber + 1,
          pageSize: pageSize,
        },
      }),

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

    getSpecific: builder.query<NewsResponse, NewsArgs>({
      query: ({ code, pageSize = 100 }) => ({
        url: "top-headlines",
        params: {
          pageSize: pageSize,
          country: code,
        },
      }),
      providesTags: ["CountryNews"],

      transformResponse: (response: NewsResponse) => ({
        articles: response.articles,
        totalResults: response.totalResults,
      }),
    }),
  }),

  refetchOnFocus: false,
});
