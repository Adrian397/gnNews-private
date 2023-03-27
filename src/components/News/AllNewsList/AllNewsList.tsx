import NoPhoto from "@assets/no-photo.png";
import { Footer } from "@components/Footer/Footer";
import { NewsModal } from "@components/News/NewsModal/NewsModal";
import { News, NewsResponse } from "@redux/api/api";
import { RootState } from "@redux/store";
import { nanoid } from "@reduxjs/toolkit";
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
import { Content, List, ListItem, Photo, Wrapper } from "./AllNewsList.styled";

type Props = {
  data?: NewsResponse;
  isFetching: boolean;
  isLoading: boolean;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

export const NewsList = ({
  data,
  isFetching,
  isLoading,
  page,
  onPageChange,
}: Props): ReactElement => {
  const { option } = useSelector((state: RootState) => state.persisted.layout);

  const [selectedItem, setSelectedItem] = useState<News | undefined>();

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
      onPageChange(page + 1);
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
    height: isLoading ? "calc(100vh - 180px)" : "",
  };

  return (
    <>
      <Wrapper>
        <List isLoading={isLoading} layout={option} ref={listRef}>
          {data?.articles.map((item) => (
            <ListItem
              isVisible={!!item.urlToImage}
              key={nanoid()}
              layout={option}
              onClick={() => setSelectedItem(item)}
            >
              <Photo isVisible={!!item.urlToImage} layout={option}>
                {item.urlToImage ? (
                  <img src={item.urlToImage} />
                ) : (
                  <img src={NoPhoto} />
                )}
              </Photo>
              <Content layout={option}>
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
