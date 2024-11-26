import { render, screen } from "@testing-library/react";
import Microphone from "../src/components/Microphone";

test("renders the Microphone button", () => {
    render(<Microphone onRecordingComplete={() => {}} />);
    const button = screen.getByText(/Start Recording/i);
    expect(button).toBeInTheDocument();
});
