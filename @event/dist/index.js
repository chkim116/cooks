"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMore = exports.useScroll = exports.useFindId = exports.useFind = exports.useToggle = exports.useInput = exports.useFormInput = void 0;
const react_1 = require("react");
const useFormInput = (initialValue) => {
    const [form, setForm] = react_1.useState({});
    const onChange = react_1.useCallback((e) => {
        const { name, value } = e.target;
        setForm(Object.assign(Object.assign({}, form), { [name]: value }));
    }, [form]);
    return [form, onChange, setForm];
};
exports.useFormInput = useFormInput;
const useInput = (initialValue) => {
    const [value, setValue] = react_1.useState(initialValue);
    const onChange = react_1.useCallback((e) => {
        const { value } = e.target;
        setValue(value);
    }, []);
    return [value, onChange, setValue];
};
exports.useInput = useInput;
const useToggle = (boolean) => {
    const [toggle, setToggle] = react_1.useState(boolean);
    const onClick = react_1.useCallback(() => {
        setToggle((prev) => !prev);
    }, []);
    return [toggle, onClick];
};
exports.useToggle = useToggle;
const useFind = () => {
    const [findData, setFindData] = react_1.useState();
    const onClick = react_1.useCallback((e) => {
        setFindData(e.currentTarget.dataset);
    }, []);
    return [findData, onClick];
};
exports.useFind = useFind;
const useFindId = () => {
    const [findId, setFindId] = react_1.useState("");
    const onClick = react_1.useCallback((e) => {
        const { id } = e.currentTarget.dataset;
        setFindId(id);
    }, []);
    return [findId, onClick];
};
exports.useFindId = useFindId;
const useScroll = (viewPort, { length, initial, count, limit }, query, isLoading) => {
    const [display, setDisplay] = react_1.useState(initial);
    const lastElement = react_1.useCallback((node) => {
        if (isLoading ||
            length < display ||
            display === limit ||
            viewPort === undefined ||
            node === null)
            return;
        viewPort = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && display !== limit) {
                viewPort.disconnect();
                setDisplay((prev) => (prev += count));
            }
        });
        if (node) {
            viewPort.observe(node);
        }
    }, [isLoading, display, length, limit, viewPort]);
    react_1.useEffect(() => {
        setDisplay((prev) => initial);
    }, [query]);
    return [lastElement, display];
};
exports.useScroll = useScroll;
const useMore = ({ length, initial, count, limit }, query, isLoading) => {
    const [display, setDisplay] = react_1.useState(initial);
    const onClick = react_1.useCallback(() => {
        if (display === limit || length < display || isLoading)
            return;
        setDisplay((prev) => (prev += count));
    }, [display, length, limit]);
    react_1.useEffect(() => {
        setDisplay((prev) => initial);
    }, [query]);
    return [onClick, display];
};
exports.useMore = useMore;
