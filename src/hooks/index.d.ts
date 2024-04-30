import { UseTheme } from "src/types/hooks/UseTheme";
import { UseForm } from "src/types/hooks/UseForm";
import { UseHasClickedOutside } from "src/types/hooks/UseHasClickedOutside";
import { UseIsScreenSize } from "src/types/hooks/UseIsScreenSize";
import { Params, Result } from "src/types/hooks/CreateStore";
import { UseNotification } from "src/types/hooks/UseNotification";
import { UseElementSize } from "src/types/hooks/UseElementSize";

/**
 * Theme gives width and height of a element passing its reference
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-useelementsize--docs)
 */
export const useElementSize: UseElementSize

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
 * Hook to shwo a notification
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-usenotification--docs)
 */
export const useNotification: UseNotification

/**
 * Create store function
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-createstore--docs)
 */
export function createStore<State, Actions>(params: Params<State, Actions>): Result<State, Actions>;
