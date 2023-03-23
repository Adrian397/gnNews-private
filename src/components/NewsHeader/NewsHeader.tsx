import ArrowDown from "@assets/arrow-down.png";
import { ReactElement, useEffect, useState } from "react";
import { MenuDropdown, SortBy, Wrapper } from "./NewsHeader.styled";

export const NewsHeader = (): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("newest");

  useEffect(() => {
    const storedSelectedItem = localStorage.getItem("sortBy");
    if (storedSelectedItem) {
      setSelectedMenuItem(storedSelectedItem);
    }
  }, []);

  const handleMenuItemClick = (item: string) => {
    setSelectedMenuItem(item);
    localStorage.setItem("sortBy", item);
    setIsMenuVisible(false);
  };

  const menuItems = ["relevance", "popularity", "newest"].filter(
    (item) => item !== selectedMenuItem
  );

  return (
    <Wrapper>
      <SortBy>
        <h3>Sort by:</h3>
        <MenuDropdown isVisible={isMenuVisible}>
          <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
            {selectedMenuItem} <img alt="arrow down" src={ArrowDown} />
          </button>
          {isMenuVisible && (
            <div>
              {menuItems.map((item) => (
                <button key={item} onClick={() => handleMenuItemClick(item)}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </MenuDropdown>
      </SortBy>
      <h3>
        You are currently viewing news for: <span>Poland</span>
      </h3>
    </Wrapper>
  );
};
