import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from './App';

// Smoke Tests
it("'App' component renders without crashing", () => {
    render(<MemoryRouter><App /></MemoryRouter>);
});

// Snapshot Tests
it("'App' matches snapshot", () => {
    const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});

// Others test
test("/colors route", () => {
    const { getByText } = render((
        <MemoryRouter initialEntries={["/colors"]}>
            <App />
        </MemoryRouter>
    ));
    
    expect(getByText("Welcome to Color Factory")).toBeInTheDocument();
});

test("/colors/new route", () => {
    const { getByText } = render((
        <MemoryRouter initialEntries={["/colors/new"]}>
            <App />
        </MemoryRouter>
    ));
    
    expect(getByText("Add New Color")).toBeInTheDocument();
});
