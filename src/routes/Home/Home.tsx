import { NewsList } from "@components/AllNewsList/AllNewsList";
import { newsApi } from "@redux/api/api";
import { ReactElement, useState } from "react";

const Home = (): ReactElement => {
  const [page, setPage] = useState(0);

  const { data, isFetching, isLoading } = newsApi.useGetAllQuery({
    pageNumber: page,
    pageSize: 25,
  });

  return (
    <NewsList
      data={data}
      isFetching={isFetching}
      isLoading={isLoading}
      onPageChange={setPage}
      page={page}
    />
  );
};

export default Home;
