import { News } from "@redux/api/api";
import { ReactElement } from "react";
import { Modal, Wrapper } from "./NewsModal.styled";

type Props = {
  item?: News;
  onClose: () => void;
};

export const NewsModal = ({ item, onClose }: Props): ReactElement => {
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
        <p>
          {item?.description ? item.description : "no description provided"}
        </p>
        <p>
          <span>authors:</span>{" "}
          {item?.author ? item.author : "no authors provided"}
        </p>
        <p>
          <span>source url:</span> <a href={item?.url}>{item?.url}</a>
        </p>
      </Modal>
    </Wrapper>
  );
};
