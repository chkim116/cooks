"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClip = exports.useKtime = exports.useReplace = void 0;
const react_1 = require("react");
const useReplace = (string) => {
    const word = string.replace(/<[^>]*>?/gm, "");
    return word;
};
exports.useReplace = useReplace;
const useKtime = () => {
    const timestamp = Date.now() + new Date().getTimezoneOffset() * 60000 + 9 * 3600 * 1000;
    return new Date(timestamp);
};
exports.useKtime = useKtime;
const useClip = (e) => {
    const [message, setMessage] = react_1.useState(false);
    const text = document.createElement("textarea");
    document.body.appendChild(text);
    text.value = e.target.innerText;
    text.select();
    document.execCommand("copy");
    document.body.removeChild(text);
    setMessage(true);
    react_1.useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage(false);
            }, 1000);
        }
    }, [message]);
    return [message, setMessage];
};
exports.useClip = useClip;
