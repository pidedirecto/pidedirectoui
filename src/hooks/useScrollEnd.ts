import { useEffect } from 'react';

export function useScrollEnd({ element, onEndReached }: Props) {
    useEffect(() => {
        element.addEventListener('scroll', handleScroll);
        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (element.scrollTop + element.clientHeight >= element.scrollHeight - 1) {
            onEndReached();
        }
    };
}

type Props = {
    element: HTMLElement;
    onEndReached: () => void | Promise<void>;
};
