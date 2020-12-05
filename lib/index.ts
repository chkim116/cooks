import { useCallback, useState } from "react";

export const useFormInput = () => {
    const [form, setForm] = useState({});
    const onChange = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            const { name, value } = e.target as HTMLInputElement;
            setForm({ ...form, [name]: value });
        },
        [form]
    );

    return [form, onChange, setForm] as const;
};

export const useInput = () => {
    const [value, setValue] = useState<string | number>();
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
