import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [{
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  },
  {
    date: 2222222,
    description: "Stub description 2",
    icon: "stubIcon2",
    temperature: {
      min: 13,
      max: 23,
    },
  },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries forecasts={validProps} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct quantity of forecast summaries", () => {
    const { getAllByTestId } = render(<ForecastSummaries forecasts={validProps} />);

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
