export type UseIsElementVisible = (props: UseIsElementVisibleProps) => (element: HTMLElement | null) => void;

export type UseIsElementVisibleProps = {
    threshold?: number;
    rootElement?: HTMLElement | null;
    dependencies?: Array<any>;
    onVisible?: () => void | Promise<void>;
    onHidden?: () => void | Promise<void>;
};
