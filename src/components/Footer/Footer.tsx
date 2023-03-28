import { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./Footer.styled";

type Props = {
  count?: number;
  total?: number;
};

export const Footer = ({ count, total }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Footer" });

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
    <Wrapper data-testid="Footer">
      <div>
        <p>
          {t("count")} {count}
        </p>
        <p>
          {t("total")} {total}
        </p>
      </div>
      <div>{currentTime}</div>
    </Wrapper>
  );
};
