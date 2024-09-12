export type UseHasClickedOutside = (params: { element: HTMLElement | undefined | null; onClick: (e: { hasClickedOutside: boolean; elementClicked: HTMLElement }) => void | Promise<void> }) => void;
