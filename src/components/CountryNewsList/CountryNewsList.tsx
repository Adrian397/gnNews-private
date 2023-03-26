import NoPhoto from "@assets/no-photo.png";
import { Footer } from "@components/Footer/Footer";
import { NewsHeader } from "@components/NewsHeader/NewsHeader";
import { NewsModal } from "@components/NewsModal/NewsModal";
import { News, NewsResponse } from "@redux/api/api";
import { CSSProperties, ReactElement, useRef, useState } from "react";
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

const override: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 218px)",
};

export const CountryNewsList = ({ data, isLoading }: Props): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<News | undefined>();

  const listRef = useRef<HTMLUListElement>(null);

  console.log(data);
  return (
    <>
      <Wrapper>
        <NewsHeader />
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
