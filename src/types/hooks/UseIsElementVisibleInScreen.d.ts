export type UseIsElementVisibleInScreen = (props: UseIsElementVisibleInScreenProps) => (element: HTMLElement | null) => void;

export type UseIsElementVisibleInScreenProps = {
    threshold?: number;
    rootElement?: HTMLElement | null;
    onVisible?: ({ isVisible }: { isVisible: boolean }) => void | Promise<void>;
};
