import { useCallback, useEffect, useState } from "react";

export const useFormInput = (initialValue?: object | undefined) => {
    const [form, setForm] = useState({});
    const onChange = useCallback(
        (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
            const { name, value } = e.target as HTMLInputElement;
            setForm({ ...form, [name]: value });
        },
        [form]
    );

    return [form, onChange, setForm] as const;
};

type InitialValue = string | number;

export const useInput = (initialValue: InitialValue) => {
    const [value, setValue] = useState<InitialValue>(initialValue);
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(value);
    }, []);

    return [value, onChange, setValue] as const;
};

export const useToggle = (boolean: boolean) => {
    const [toggle, setToggle] = useState<boolean>(boolean);

    const onClick = useCallback(() => {
        setToggle((prev: boolean) => !prev);
    }, []);

    return [toggle, onClick] as const;
};

export const useFind = () => {
    const [findData, setFindData] = useState<DOMStringMap>();

    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setFindData(e.currentTarget.dataset);
        },
        []
    );

    return [findData, onClick] as const;
};

export const useFindId = () => {
    const [findId, setFindId] = useState<string | undefined>("");
    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const { id } = e.currentTarget.dataset;
            setFindId(id);
        },
        []
    );

    return [findId, onClick] as const;
};

type Props = {
    length: number;
    initial: number;
    count: number;
    limit: number;
};

export const useScroll = (
    viewPort: any,
    { length, initial, count, limit }: Props,
    query?: any,
    isLoading?: boolean
): any => {
    const [display, setDisplay] = useState(initial);
    const lastElement = useCallback(
        (node) => {
            if (
                isLoading ||
                length < display ||
                display === limit ||
                viewPort === undefined ||
                node === null
            )
                return;
            viewPort = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && display !== limit) {
                    viewPort.disconnect();
                    setDisplay((prev: number) => (prev += count));
                }
            });
            if (node) {
                viewPort.observe(node);
            }
        },
        [isLoading, display, length, limit, viewPort]
    );
    useEffect(() => {
        setDisplay((prev) => initial);
    }, [query]);

    return [lastElement, display];
};

export const useMore = (
    { length, initial, count, limit }: Props,
    query?: any,
    isLoading?: boolean
): any => {
    const [display, setDisplay] = useState(initial);

    const onClick = useCallback(() => {
        if (display === limit || length < display || isLoading) return;
        setDisplay((prev: number) => (prev += count));
    }, [display, length, limit]);

    useEffect(() => {
        setDisplay((prev) => initial);
    }, [query]);

    return [onClick, display];
};
