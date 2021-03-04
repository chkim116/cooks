import { useEffect, useState } from "react"

export const useReplace = (string: string) => {
    const word = string.replace(/<[^>]*>?/gm, "")

    return word
}

export const useKtime = () => {
    const timestamp =
        Date.now() + new Date().getTimezoneOffset() * 60000 + 9 * 3600 * 1000
    return new Date(timestamp)
}

export const useClip = (e: any) => {
    const [message, setMessage] = useState(false)

    const text = document.createElement("textarea")
    document.body.appendChild(text)
    text.value = e.target.innerText
    text.select()
    document.execCommand("copy")
    document.body.removeChild(text)
    setMessage(true)

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage(false)
            }, 1000)
        }
    }, [message])

    return [message, setMessage]
}
