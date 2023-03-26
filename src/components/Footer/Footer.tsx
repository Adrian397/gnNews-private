import { ReactElement, useEffect, useState } from "react";
import { Wrapper } from "./Footer.styled";

type Props = {
  count?: number;
  total?: number;
};

export const Footer = ({ count, total }: Props): ReactElement => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div>
        <p>number of articles fetched: {count}</p>
        <p>total number of articles: {total} </p>
      </div>
      <div>{currentTime}</div>
    </Wrapper>
  );
};
