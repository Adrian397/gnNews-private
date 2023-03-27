import NoPhoto from "@assets/no-photo.png";
import { Footer } from "@components/Footer/Footer";
import { NewsHeader } from "@components/News/NewsHeader/NewsHeader";
import { NewsModal } from "@components/News/NewsModal/NewsModal";
import { News, NewsResponse } from "@redux/api/api";
import { RootState } from "@redux/store";
import { nanoid } from "@reduxjs/toolkit";
import { CSSProperties, ReactElement, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  Content,
  List,
  ListItem,
  Photo,
  Wrapper,
} from "./CountryNewsList.styled";

type Props = {
  data?: NewsResponse;
  isLoading: boolean;
};

export const CountryNewsList = ({ data, isLoading }: Props): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<News | undefined>();

  const { option } = useSelector((state: RootState) => state.persisted.layout);

  const listRef = useRef<HTMLUListElement>(null);

  const override: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 218px)",
  };

  return (
    <>
      <Wrapper>
        <NewsHeader />
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
            loading={isLoading}
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
