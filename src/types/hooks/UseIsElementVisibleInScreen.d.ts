export type UseIsElementVisibleInScreen = (props: UseScrollEndProps) => (element: HTMLElement | null) => void;

export type UseScrollEndProps = {
    threshold?: number;
    onVisible?: ({ isVisible }: { isVisible: boolean }) => void | Promise<void>;
};
