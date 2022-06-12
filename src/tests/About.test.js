import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test("checks if p element exists", () => {
    render(<About/>);
    const element = screen.getByRole("p");
    expect(element).toBeInTheDocument();
})

test("checks if about text exists", () => {
    render(<About/>);
    const text = screen.getByText(/about/i);
    expect(text).toBeInTheDocument();
})