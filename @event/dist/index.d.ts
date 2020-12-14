/// <reference types="react" />
export declare const useFormInput: (initialValue?: object | undefined) => readonly [{}, (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => void, import("react").Dispatch<import("react").SetStateAction<{}>>];
declare type InitialValue = string | number;
export declare const useInput: (initialValue: InitialValue) => readonly [string | number, (e: React.ChangeEvent<HTMLInputElement>) => void, import("react").Dispatch<import("react").SetStateAction<string | number>>];
export declare const useToggle: (boolean: boolean) => readonly [boolean, () => void];
export declare const useFind: () => readonly [DOMStringMap | undefined, (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void];
export declare const useFindId: () => readonly [string | undefined, (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void];
declare type Props = {
    length: number;
    initial: number;
    count: number;
    limit: number;
};
export declare const useScroll: (viewPort: any, { length, initial, count, limit }: Props, query?: any, isLoading?: boolean | undefined) => any;
export declare const useMore: ({ length, initial, count, limit }: Props, query?: any, isLoading?: boolean | undefined) => any;
export {};
