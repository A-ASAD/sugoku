import { render, screen } from "@testing-library/react";
import { ContextProvider } from "../../store/context";
import userEvent from "@testing-library/user-event";
import Home from "./home";


function renderComponent() {
    return render(
        <ContextProvider>
            <Home />
        </ContextProvider>
    );
}

test('clicking on claer button should clear the puzzle', async () => {
    renderComponent();
    userEvent.click(screen.getByText('Clear'));
    screen.getAllByRole('textbox').forEach(textbox => {
        expect(textbox.value).toBe('');
    });
});
