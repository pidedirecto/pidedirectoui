import { UseTheme } from "src/types/hooks/UseTheme";
import { UseForm } from "src/types/hooks/UseForm";
import { UseHasClickedOutside } from "src/types/hooks/UseHasClickedOutside";
import { UseIsScreenSize } from "src/types/hooks/UseIsScreenSize";
import { Params, Result } from "src/types/hooks/CreateStore";

/**
 * Theme hook to override default components theme
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-usetheme--docs)
 */
export const useTheme: UseTheme

/**
 * Form hook to initialize a form
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-useform--docs)
 */
export const useForm: UseForm

/**
 * Hook to known when the user clicks outside an element
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-usehasclickedoutside--docs)
 */
export const useHasClickedOutside: UseHasClickedOutside

/**
 * Hook to known if the current screen width is of a specific size
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-useisscreensize--docs)
 */
export const useIsScreenSize: UseIsScreenSize

/**
 * Create store function
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-createstore--docs)
 */
export function createStore<State, Actions>(params: Params<State, Actions>): Result<State, Actions>;
