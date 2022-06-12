import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';

test("checks if nav element exists", () => {
    render(<Header/>);
    const element = screen.getByRole("nav");
    expect(element).toBeInTheDocument();
})

test("checks if option element exists", () => {
    render(<Header/>);
    const element = screen.getByRole("option");
    expect(element).toBeInTheDocument();
})

test("checks if input value is changing correctly", () => {
    render(<Header/>);
    const inputValue = screen.getByRole("textbox");
    fireEvent.change(inputValue, {
        target: {
            value: "its a test"
        }
    })
    expect(inputValue.value).toBe("its a test");
})