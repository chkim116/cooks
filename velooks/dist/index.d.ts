/// <reference types="react" />
export declare const useFormChange: <T>(initial?: T | undefined) => readonly [{}, (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => void, import("react").Dispatch<import("react").SetStateAction<{}>>];
declare type InitialValue = string | number;
export declare const useInput: (initialValue: InitialValue) => (string | number | import("react").Dispatch<import("react").SetStateAction<string | number>> | ((e: React.ChangeEvent<HTMLInputElement>) => void))[];
export declare const useToggle: (boolean: boolean) => (boolean | import("react").Dispatch<import("react").SetStateAction<boolean>>)[];
export declare const useFind: () => (DOMStringMap | import("react").Dispatch<import("react").SetStateAction<DOMStringMap | undefined>> | ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined)[];
export declare const useFindId: () => (string | import("react").Dispatch<import("react").SetStateAction<string | undefined>> | ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined)[];
interface Props {
    viewPort: any;
    isLoading: boolean;
    limit: number;
}
export declare const useInfiniteScroll: ({ viewPort, isLoading, limit }: Props) => (number | ((node: any) => void))[];
export declare const useScrollTop: () => void;
export declare const useReplaceHtml: (string: string) => string;
export {};
