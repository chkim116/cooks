"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReplaceHtml = exports.useScrollTop = exports.useInfiniteScroll = exports.useFindId = exports.useFind = exports.useToggle = exports.useInput = exports.useFormChange = void 0;
const react_1 = require("react");
const useFormChange = (initial) => {
    const [form, setForm] = react_1.useState(initial ? initial : {});
    const onChange = react_1.useCallback((e) => {
        const { name, value } = e.target;
        setForm(() => (Object.assign(Object.assign({}, form), { [name]: value })));
    }, [form]);
    return [form, onChange, setForm];
};
exports.useFormChange = useFormChange;
const useInput = (initialValue) => {
    const [value, setValue] = react_1.useState(initialValue);
    const onChange = react_1.useCallback((e) => {
        const { value } = e.target;
        setValue(() => value);
    }, []);
    return [value, onChange, setValue];
};
exports.useInput = useInput;
const useToggle = (boolean) => {
    const [toggle, setToggle] = react_1.useState(boolean);
    const onClick = react_1.useCallback(() => {
        setToggle((prev) => !prev);
    }, []);
    return [toggle, onClick, setToggle];
};
exports.useToggle = useToggle;
const useFind = () => {
    const [findData, setFindData] = react_1.useState();
    const onClick = react_1.useCallback((e) => {
        setFindData(() => e.currentTarget.dataset);
    }, []);
    return [findData, onClick, setFindData];
};
exports.useFind = useFind;
const useFindId = () => {
    const [findId, setFindId] = react_1.useState("");
    const onClick = react_1.useCallback((e) => {
        const { id } = e.currentTarget.dataset;
        setFindId(() => id);
    }, []);
    return [findId, onClick, setFindId];
};
exports.useFindId = useFindId;
const useInfiniteScroll = ({ viewPort, isLoading, limit }) => {
    const [page, setPage] = react_1.useState(0);
    const lastElement = react_1.useCallback((node) => {
        if (isLoading ||
            page >= limit ||
            viewPort === undefined ||
            node === null) {
            return;
        }
        viewPort = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                viewPort.disconnect();
                setPage((prev) => prev + 1);
            }
        });
        if (node) {
            viewPort.observe(node);
        }
    }, [isLoading, viewPort]);
    return [lastElement, page];
};
exports.useInfiniteScroll = useInfiniteScroll;
const useScrollTop = () => {
    react_1.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
};
exports.useScrollTop = useScrollTop;
const useReplaceHtml = (string) => {
    const word = string.replace(/<[^>]*>?/gm, "");
    return word;
};
exports.useReplaceHtml = useReplaceHtml;
