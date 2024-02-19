/**
 * @prettier
 */
import { useSelector as _useSelector } from 'react-redux';
import { AppState } from 'src/reducers/appReducer';

export function useSelector<T>(selector: (state: AppState) => T, equalityFn?: (a: T, b: T) => boolean): T {
    return _useSelector(selector, equalityFn);
}
