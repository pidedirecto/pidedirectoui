import { UseTheme } from "src/types/hooks/UseTheme";
import { UseForm } from "src/types/hooks/UseForm";
import { UseFieldArray } from "src/types/hooks/UseFieldArray";
import { UseFormContext } from "src/types/hooks/UseFormContext";
import { UseHasClickedOutside } from "src/types/hooks/UseHasClickedOutside";
import { UseIsScreenSize } from "src/types/hooks/UseIsScreenSize";
import { Params, Result } from "src/types/hooks/CreateStore";
import { UseNotification } from "src/types/hooks/UseNotification";
import { UseElementSize } from "src/types/hooks/UseElementSize";
import { UseWatch } from "src/types/hooks/UseWatch";
import { UseConfirmDialog } from "src/types/hooks/UseConfirmDialog";
import { UseScrollEnd } from "src/types/hooks/UseScrollEnd";
import { ApiSauceResponse, Options as UseLoadApiOptions } from "src/types/hooks/UseLoadApi";
import { ApiSauceResponse, Options as UseSuspenseApiOptions } from "src/types/hooks/UseSuspenseApi";
import { UseIsElementVisibleInScreen } from "src/types/hooks/UseIsElementVisibleInScreen";

/**
 * Theme gives width and height of an element passing its reference
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
 * UseFieldArray hook
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-usefieldarray--docs)
 */
export const useFieldArray: UseFieldArray

/**
 * useFormContext hook
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-useformcontext--docs)
 */
export const useFormContext: UseFormContext

/**
 * Form hook to initialize a form
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-useform--docs)
 */
export const useForm: UseForm

/**
 * Form hook to get value from input updated
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-usewatch--docs)
 */
export const useWatch: UseWatch

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
 * Hook to show a notification
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-usenotification--docs)
 */
export const useNotification: UseNotification

/**
 * Hook to show a confirmation dialog
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-useconfirmdialog--docs)
 */
export const useConfirmDialog: UseConfirmDialog

/**
 * Hook to know when user reaches the end of scroll
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-usescrollend--docs)
 */
export const useScrollEnd: UseScrollEnd

/**
 * Hook to know when user an html element is visible on screen
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-useiselementvisibleinscreen--docs)
 */
export const useIsElementVisibleInScreen: UseIsElementVisibleInScreen

/**
 * Create store function
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-createstore--docs)
 */
export function createStore<State, Actions>(params: Params<State, Actions>): Result<State, Actions>;

/**
 * Hook to call apis
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-useloadapi--docs)
 */
export function useLoadApi<S extends (request?: any) => ApiSauceResponse<any>>(
    fn: S,
    request?: Parameters<S>[0],
    options?: UseLoadApiOptions
): [boolean, Extract<Awaited<ReturnType<S>>, { ok: true }>['data'], (params?: { request: any }) => Promise<void>]

/**
 * Hook to suspense apis
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/hooks-usesuspenseapi--docs)
 */
export function useSuspenseApi<S extends (request?: any) => ApiSauceResponse<any>>(
    fn: S,
    request?: Parameters<S>[0],
    options?: UseSuspenseApiOptions
): [Extract<Awaited<ReturnType<S>>, { ok: true }>['data'], (params?: { request: any }) => Promise<void>]
