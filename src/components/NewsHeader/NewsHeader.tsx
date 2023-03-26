import { ReactElement } from "react";
import { Wrapper } from "./NewsHeader.styled";

export const NewsHeader = (): ReactElement => {
  // const [isMenuVisible, setIsMenuVisible] = useState(false);

  // const selectedSortOption = useSelector(
  //   (state: RootState) => state.sortBy.option
  // );

  // console.log(selectedSortOption);

  // const dispatch = useDispatch();

  // const handleMenuItemClick = (item: SortByOption) => {
  //   dispatch(setSortOption(item));
  //   dispatch(newsApi.util.invalidateTags(["News"]));
  //   setIsMenuVisible(false);
  // };

  // const menuItems = ["publishedAt", "popularity"].filter(
  //   (item) => item !== selectedSortOption
  // ) as SortByOption[];

  return (
    <Wrapper>
      {/* <SortBy>
        <h3>Sort by:</h3>
        <MenuDropdown isVisible={isMenuVisible}>
          <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
            {selectedSortOption} <img alt="arrow down" src={ArrowDown} />
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
      </SortBy> */}
      <h3>
        You are currently viewing news for: <span>Poland</span>
      </h3>
    </Wrapper>
  );
};
