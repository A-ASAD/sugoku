import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContextProvider } from "../../../store/context";
import Input from "./input";


function renderComponent(props = { value: 1, index: 1 }) {
    return render(
        <ContextProvider>
            <Input {...props} />
        </ContextProvider>
    );
}

test('input should have a single digit', () => {
    renderComponent();
    //setting input value despite the fact that it already has a value
    userEvent.type(screen.getByRole('textbox'), '2');
    //checking if the input value is the same as the one set before
    expect(screen.getByRole('textbox').value).toBe('1');
});