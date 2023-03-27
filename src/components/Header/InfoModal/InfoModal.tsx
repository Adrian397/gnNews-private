import { Dispatch, ReactElement, SetStateAction } from "react";
import { Modal, Wrapper } from "./InfoModal.styled";

type Props = {
  onModalVisibilityChange: Dispatch<
    SetStateAction<{
      dropdown: boolean;
      modal: boolean;
    }>
  >;
};

export const InfoModal = ({ onModalVisibilityChange }: Props): ReactElement => {
  const handleCloseModal = () => {
    onModalVisibilityChange((prevState) => ({ ...prevState, modal: false }));
  };

  return (
    <Wrapper onClick={() => handleCloseModal()}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div>
          <button onClick={() => handleCloseModal()} />
        </div>
        <h1>test</h1>
      </Modal>
    </Wrapper>
  );
};
