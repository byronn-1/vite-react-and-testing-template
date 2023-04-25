import React, {rerender} from "react";
import { render, fireEvent } from "@testing-library/react";
import { TestTable } from "./TestTable";
 

describe("TestTable", () => {
  it("renders without errors", () => {
    const { container } = render(<TestTable />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('rerenders when the "Rerender" button is clicked', () => {
    const { getByText } = render(<TestTable />);
    const rerenderButton = getByText("Rerender");
    fireEvent.click(rerenderButton);
    expect(rerender).toHaveBeenCalledTimes(1)
  });
});
