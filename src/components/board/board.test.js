import { render, screen } from "@testing-library/react";
import { ContextProvider } from "../../store/context";
import Board from "./board";

function renderComponent() {
    return render(
        <ContextProvider>
            <Board/>
        </ContextProvider>
    );
}

test('board should have 81 inputs', () => {
    renderComponent();
    expect(screen.getAllByRole('textbox')).toHaveLength(81);
});