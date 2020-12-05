"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindId = exports.useToggle = exports.useInput = exports.useFormInput = void 0;
const react_1 = require("react");
const useFormInput = () => {
    const [form, setForm] = react_1.useState({});
    const onChange = react_1.useCallback((e) => {
        const { name, value } = e.target;
        setForm(Object.assign(Object.assign({}, form), { [name]: value }));
    }, [form]);
    return [form, onChange, setForm];
};
exports.useFormInput = useFormInput;
const useInput = () => {
    const [value, setValue] = react_1.useState();
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
const useFindId = () => {
    const [findId, setFindId] = react_1.useState("");
    const onClick = react_1.useCallback((e) => {
        const { id } = e.currentTarget.dataset;
        setFindId(id);
    }, []);
    return [findId, onClick];
};
exports.useFindId = useFindId;
