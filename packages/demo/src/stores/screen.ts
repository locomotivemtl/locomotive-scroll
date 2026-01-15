import { map } from 'nanostores';
import { debounce } from 'ts-debounce';

export interface IScreenValues {
    width: number;
    height: number;
}

export interface IScreenDebounceValues {
    width: number;
    height: number;
}

export const $screen = map<IScreenValues>({
    width: window.innerWidth,
    height: window.innerHeight
});

export const $screenDebounce = map<IScreenDebounceValues>({
    width: window.innerWidth,
    height: window.innerHeight
});

window.addEventListener('resize', () => {
    $screen.setKey('width', window.innerWidth);
    $screen.setKey('height', window.innerHeight);
});

const debouncedFunction: any = () => {
    $screenDebounce.setKey('width', window.innerWidth);
    $screenDebounce.setKey('height', window.innerHeight);
};
window.addEventListener('resize', debounce(debouncedFunction, 200));
