import { render, screen } from "@testing-library/react";
import { ContextProvider } from "../../../store/context";
import Difficulty from "./difficulty";

function renderComponent() {
    return render(
        <ContextProvider>
            <Difficulty />
        </ContextProvider>
    );
}

test('difficulty should have "easy" as initial value', () => {
    renderComponent();
    expect(screen.getByRole('combobox').value).toBe('easy');
});