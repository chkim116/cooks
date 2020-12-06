import { Dispatch } from "react";
export declare const useDisSubmit: <T>(dispatchName: Dispatch<any>, value: T) => ((e: React.FormEvent<HTMLFormElement>) => void)[];
export declare const usePostAxios: <T, K>(url: string, data: T, option?: K | undefined) => {}[];
export declare const useGetAxios: <T>(url: string, option?: T | undefined) => {}[];
export declare const useUpAxios: <T, K>(url: string, data: T, option?: K | undefined) => {}[];
export declare const useDelAxios: <T>(url: string, option?: T | undefined) => {}[];
