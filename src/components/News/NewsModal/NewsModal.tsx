import { News } from "@redux/api/api";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Wrapper } from "./NewsModal.styled";

type Props = {
  item?: News;
  onClose: () => void;
};

export const NewsModal = ({ item, onClose }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "NewsModal" });

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Wrapper onClick={() => handleCloseModal()}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div>
          <button onClick={() => handleCloseModal()} />
        </div>
        <h3>{item?.title}</h3>
        <p>{item?.description ? item.description : t("noDesc")}</p>
        <p>
          <span>{t("authors")}</span>{" "}
          {item?.author ? item.author : t("noAuthors")}
        </p>
        <p>
          <span>{t("source")}</span> <a href={item?.url}>{item?.url}</a>
        </p>
      </Modal>
    </Wrapper>
  );
};
