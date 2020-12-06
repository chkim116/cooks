import { useCallback } from "react";
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

export const useDisSubmit = <T, K>(dispatchName: T, value: K) => {
    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(dispatchName(value));
        },
        [value, dispatch, dispatchName]
    );

    return [onSubmit];
};
