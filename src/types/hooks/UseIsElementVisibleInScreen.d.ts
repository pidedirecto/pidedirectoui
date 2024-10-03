export type UseIsElementVisibleInScreen = (props: UseIsElementVisibleInScreenProps) => (element: HTMLElement | null) => void;

export type UseIsElementVisibleInScreenProps = {
    threshold?: number;
    onVisible?: ({ isVisible }: { isVisible: boolean }) => void | Promise<void>;
};
