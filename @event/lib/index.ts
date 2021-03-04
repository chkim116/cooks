import { useCallback, useEffect, useState } from "react"

export const useFormInput = () => {
    const [form, setForm] = useState({})
    const onChange = useCallback(
        (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
            const { name, value } = e.target as HTMLInputElement
            setForm({ ...form, [name]: value })
        },
        [form]
    )

    return [form, onChange, setForm] as const
}

type InitialValue = string | number

export const useInput = (initialValue: InitialValue) => {
    const [value, setValue] = useState<InitialValue>(initialValue)
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setValue(() => value)
    }, [])

    return [value, onChange, setValue]
}

export const useToggle = (boolean: boolean) => {
    const [toggle, setToggle] = useState<boolean>(boolean)

    const onClick = useCallback(() => {
        setToggle((prev: boolean) => !prev)
    }, [])

    return [toggle, onClick, setToggle]
}

export const useFind = () => {
    const [findData, setFindData] = useState<DOMStringMap>()

    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setFindData(() => e.currentTarget.dataset)
        },
        []
    )

    return [findData, onClick, setFindData]
}

export const useFindId = () => {
    const [findId, setFindId] = useState<string | undefined>("")
    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const { id } = e.currentTarget.dataset
            setFindId(() => id)
        },
        []
    )

    return [findId, onClick, setFindId]
}

export const useScrollTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
}
