import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from './App';
import whiskey from "./whiskey.jpg";
const dogTest = [{
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
    ]
}];

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
test("/dogs route", () => {
    const { getByText } = render((
        <MemoryRouter initialEntries={["/dogs"]}>
            <App />
        </MemoryRouter>
    ));
    
    expect(getByText("PET's LIST:")).toBeInTheDocument();
});

test("/dogs/:name route", () => {
    const { getByAltText } = render((
        <MemoryRouter initialEntries={["/dogs/whiskey"]}>
            <App dogs={dogTest} />
        </MemoryRouter>
    ));
    
    expect(getByAltText("Whiskey")).toBeInTheDocument();
});

test("NavBar links", () => {
    const { getByText, getByAltText } = render((
        <MemoryRouter initialEntries={["/dogs"]}>
            <App dogs={dogTest} />
        </MemoryRouter>
    ));
    expect(getByText("PET's LIST:")).toBeInTheDocument();

    const link = getByText("Home");
    fireEvent.click(link);
    expect(getByText("PET's LIST:")).toBeInTheDocument();
});