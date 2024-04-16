/**
 * @prettier
 */
import { render } from '@testing-library/react';

export function renderWithProviders(ui: any, { initialState, history, ...renderOptions }: Props) {
    function Wrapper({ children }: any) {
        return children;
    }

    return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

type Props = {
    initialState: any;
    store: any;
    history: any;
};
