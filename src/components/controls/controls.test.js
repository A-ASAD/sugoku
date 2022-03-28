import { render, screen } from "@testing-library/react";
import { ContextProvider } from "../../store/context";
import Controls from "./controls";

function renderComponent() {
    return render(
        <ContextProvider>
            <Controls />
        </ContextProvider>
    );
}

test('current status should be "unsolved" on start', () => {
    renderComponent();
    expect(screen.getByTestId('status').textContent).toBe('unsolved');
});

test('current-difficulty should be "easy" on start', () => {
    renderComponent();
    expect(screen.getByTestId('current-difficulty').textContent).toBe('easy');
});
