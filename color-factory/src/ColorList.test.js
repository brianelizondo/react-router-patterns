import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from './App';
import ColorList from './ColorList';
const colorTest = [{
    name: "black",
    code: "#000000"
}];

// Smoke Tests
it("'ColorList' component renders without crashing", () => {
    render(<MemoryRouter><ColorList colors={colorTest} /></MemoryRouter>);
});

// Snapshot Tests
it("'ColorList' matches snapshot", () => {
    const {asFragment} = render(<MemoryRouter><ColorList colors={colorTest} /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});

// Others test
it("'ColorList' works listed the colors", () => {
    const { queryByText } = render(<MemoryRouter><ColorList colors={colorTest} /></MemoryRouter>);
  
    // expect list the colors
    expect(queryByText("Welcome to Color Factory")).toBeInTheDocument();
    expect(queryByText("black")).toBeInTheDocument();
});
