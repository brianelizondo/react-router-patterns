import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import DogList from "./DogList";
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
it("'DogList' component renders without crashing", () => {
    render(<MemoryRouter><DogList dogs={ dogTest } /></MemoryRouter>);
});

// Snapshot Tests
it("'DogList' matches snapshot", () => {
    const {asFragment} = render(<MemoryRouter><DogList dogs={ dogTest } /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});

// Others test
it("'DogList' works listed the dogs", () => {
    const { queryByText } = render(<MemoryRouter><DogList dogs={ dogTest } /></MemoryRouter>);
  
    // expect list the dog
    expect(queryByText("PET's LIST:")).toBeInTheDocument();
    expect(queryByText("Whiskey")).toBeInTheDocument();
});