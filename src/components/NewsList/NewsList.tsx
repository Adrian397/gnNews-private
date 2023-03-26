import NoPhoto from "@assets/no-photo.png";
import { Footer } from "@components/Footer/Footer";
import { NewsModal } from "@components/NewsModal/NewsModal";
import { News, newsApi } from "@redux/api/api";
import { RootState } from "@redux/store";
import {
  CSSProperties,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { Content, List, ListItem, Photo, Wrapper } from "./NewsList.styled";

export const NewsList = (): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<News | undefined>();
  const [page, setPage] = useState(0);
  const selectedSortOption = useSelector(
    (state: RootState) => state.sortBy.option
  );
  const { data, isFetching, isLoading } = newsApi.useGetAllQuery({
    pageNumber: page,
    sortBy: selectedSortOption,
    pageSize: 25,
  });
  const listRef = useRef<HTMLUListElement>(null);

  const handleScroll = useCallback(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    const isScrolledToBottom =
      list.clientHeight + list.scrollTop >= list.scrollHeight;

    if (
      isScrolledToBottom &&
      !isFetching &&
      data &&
      data.articles.length % 25 === 0
    ) {
      console.log("Fetching more data...");
      setPage(page + 1);
    }
  }, [page, isFetching]);

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (list) {
        list.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  const override: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: isLoading ? "calc(100vh - 229.78px)" : "",
  };

  console.log(data);
  return (
    <>
      <Wrapper>
        <List ref={listRef}>
          {data?.articles.map((item, index) => (
            <ListItem
              isVisible={!!item.urlToImage}
              key={index}
              onClick={() => setSelectedItem(item)}
            >
              <Photo isVisible={!!item.urlToImage}>
                {item.urlToImage ? (
                  <img src={item.urlToImage} /> /*eslint-disable-line*/
                ) : (
                  <img src={NoPhoto} /> /*eslint-disable-line*/
                )}
              </Photo>
              <Content>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.source.name}</p>
                </div>

                <p>
                  <span>published:</span>
                  {new Date(item.publishedAt).toLocaleString("en-UK", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </Content>
            </ListItem>
          ))}
          <BeatLoader
            color="#89cff0"
            cssOverride={override}
            loading={isFetching && data && data.articles.length % 25 === 0}
          />
        </List>
        <Footer
          count={data?.articles.length ?? 0}
          total={data?.totalResults ?? 0}
        />
      </Wrapper>
      {selectedItem && (
        <NewsModal
          item={selectedItem}
          onClose={() => setSelectedItem(undefined)}
        />
      )}
    </>
  );
};
