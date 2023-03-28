import { RootState } from "@redux/store";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { useSelector } from "react-redux";
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
  const { currentLanguage } = useSelector((state: RootState) => state.language);

  const handleCloseModal = () => {
    onModalVisibilityChange((prevState) => ({ ...prevState, modal: false }));
  };

  return (
    <Wrapper data-testid="InfoModal" onClick={() => handleCloseModal()}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div>
          <button onClick={() => handleCloseModal()} />
        </div>
        {currentLanguage === "pl" ? (
          <p>
            Zdecydowanie najciekawszą rzeczą podczas wykonywania zadania była
            implementacja infinite scrollingu dla strony głównej, w{" "}
            <span>rtk-query</span>. Nie jest to tak oczywiste jak dla{" "}
            <span>react-query</span> gdzie mamy do wykorzystania wbudowany hook{" "}
            <span>useInfiniteQuery()</span>. Po udanej implementacji doczytałem,
            że deweloperskie konta{" "}
            <a href="https://newsapi.org/">https://newsapi.org/</a> mają
            ograniczenie do pobrania maksymalnie 100 rezultatów i za dużo nie
            można sobie poscrollować 😅. Poza tym zadanie oceniam na łatwe i
            przyjemne w implementacji.
          </p>
        ) : (
          <p>
            By far the most interesting thing during the task was the
            implementation of infinite scrolling for the home page, in the{" "}
            <span>rtk-query</span>. This is not as obvious as for{" "}
            <span>react-query</span>
            where we have a built-in hook to use <span>useInfiniteQuery()</span>
            . After a successful implementation, I got to know, that developer
            accounts have limitation to download a maximum of 100 results so{" "}
            {/* eslint-disable-next-line */}
            you can't scroll that much 😅. Other than that, I rate the task easy
            and pleasant to implement.
          </p>
        )}
      </Modal>
    </Wrapper>
  );
};
