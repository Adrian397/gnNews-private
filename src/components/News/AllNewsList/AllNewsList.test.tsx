import { store } from "@redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AllNewsList } from "./AllNewsList";
const mockData = {
  articles: [
    {
      title: "Test Title 1",
      source: { name: "Test Source 1" },
      publishedAt: new Date(),
      urlToImage: "https://test-image-1.png",
      author: "Test Author 1",
      description: "Test Desc 1",
      url: "#",
    },
    {
      title: "Test Title 2",
      source: { name: "Test Source 2" },
      publishedAt: new Date(),
      urlToImage: "https://test-image-2.png",
      author: "Test Description 2",
      description: "Test Desc 2",
      url: "#",
    },
  ],
  totalResults: 2,
};

describe("AllNewsList", () => {
  it("renders successfully", () => {
    render(
      <Provider store={store}>
        <AllNewsList
          data={mockData}
          isFetching={false}
          isLoading={false}
          onPageChange={() => void 0}
          page={1}
        />
      </Provider>
    );
    expect(screen.getByTestId("AllNewsList")).toBeInTheDocument();
  });

  it("should render a list of news articles", () => {
    render(
      <Provider store={store}>
        <AllNewsList
          data={mockData}
          isFetching={false}
          isLoading={false}
          onPageChange={() => void 0}
          page={1}
        />
      </Provider>
    );
    const newsTitles = screen.getAllByRole("heading", { level: 4 });
    expect(newsTitles).toHaveLength(2);
    expect(newsTitles[0]).toHaveTextContent("Test Title 1");
    expect(newsTitles[1]).toHaveTextContent("Test Title 2");
  });
});
