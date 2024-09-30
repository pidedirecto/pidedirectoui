export type UseScrollEnd = () => (params: UseScrollEndProps) => Promise<boolean>;

export type UseScrollEndProps = {
    element: HTMLElement;
    onEndReached: () => void | Promise<void>;
};
