import { CountryNewsList } from "@components/News/CountryNewsList/CountryNewsList";
import { newsApi } from "@redux/api/api";
import { ReactElement } from "react";
import { useLocation } from "react-router-dom";

const NewsCountry = (): ReactElement => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const { data, isLoading } = newsApi.useGetSpecificQuery({
    code: searchParams.get("code") ?? "",
  });

  return <CountryNewsList data={data} isLoading={isLoading} />;
};

export default NewsCountry;
