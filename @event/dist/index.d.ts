/// <reference types="react" />
export declare const useFormInput: () => readonly [{}, (e: React.FormEvent<HTMLFormElement>) => void, import("react").Dispatch<import("react").SetStateAction<{}>>];
export declare const useInput: () => readonly [string | number | undefined, (e: React.ChangeEvent<HTMLInputElement>) => void, import("react").Dispatch<import("react").SetStateAction<string | number | undefined>>];
export declare const useToggle: (boolean: boolean) => readonly [boolean, () => void];
export declare const useFindId: () => readonly [string | undefined, (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void];
