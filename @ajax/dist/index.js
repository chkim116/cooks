"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelAxios = exports.useUpAxios = exports.useGetAxios = exports.usePostAxios = exports.useDisSubmit = void 0;
const axios_1 = require("axios");
const react_1 = require("react");
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const dispatch = react_redux_1.useDispatch();
const useDisSubmit = (dispatchName, value) => {
    const onSubmit = react_2.useCallback((e) => {
        e.preventDefault();
        dispatch(dispatchName(value));
    }, [value, dispatch, dispatchName]);
    return [onSubmit];
};
exports.useDisSubmit = useDisSubmit;
function isOwnOptions(option) {
    if (option !== undefined) {
        return true;
    }
}
const usePostAxios = (url, data, option) => {
    const [getData, setGetData] = react_1.useState({});
    const [loading, setLoading] = react_1.useState(false);
    react_1.useEffect(() => {
        const post = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            try {
                if (isOwnOptions(option)) {
                    yield axios_1.default.post(url, data, option).then((res) => setGetData(res.data));
                }
                yield axios_1.default.post(url, data).then((res) => setGetData(res.data));
                setLoading(false);
            }
            catch (err) {
                console.log(err);
                setGetData(err.message);
                setLoading(false);
            }
        });
        post();
    }, [url, option]);
    return [loading, getData];
};
exports.usePostAxios = usePostAxios;
const useGetAxios = (url, option) => {
    const [getData, setGetData] = react_1.useState({});
    const [loading, setLoading] = react_1.useState(false);
    react_1.useEffect(() => {
        const get = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            try {
                if (isOwnOptions(option)) {
                    yield axios_1.default.get(url, option).then((res) => setGetData(res.data));
                }
                yield axios_1.default.get(url).then((res) => setGetData(res.data));
                setLoading(false);
            }
            catch (err) {
                console.log(err);
                setGetData(err.message);
                setLoading(false);
            }
        });
        get();
    }, [url, option]);
    return [loading, getData];
};
exports.useGetAxios = useGetAxios;
const useUpAxios = (url, data, option) => {
    const [getData, setGetData] = react_1.useState({});
    const [loading, setLoading] = react_1.useState(false);
    react_1.useEffect(() => {
        const post = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            try {
                if (isOwnOptions(option)) {
                    yield axios_1.default.put(url, data, option).then((res) => setGetData(res.data));
                }
                yield axios_1.default.put(url, data).then((res) => setGetData(res.data));
                setLoading(false);
            }
            catch (err) {
                console.log(err);
                setGetData(err.message);
                setLoading(false);
            }
        });
        post();
    }, [url, option]);
    return [loading, getData];
};
exports.useUpAxios = useUpAxios;
const useDelAxios = (url, option) => {
    const [getData, setGetData] = react_1.useState({});
    const [loading, setLoading] = react_1.useState(false);
    react_1.useEffect(() => {
        const del = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            try {
                if (isOwnOptions(option)) {
                    yield axios_1.default.delete(url, option);
                }
                yield axios_1.default.delete(url);
                setLoading(false);
            }
            catch (err) {
                console.log(err);
                setGetData(err.message);
                setLoading(false);
            }
        });
        del();
    }, [url, option]);
    return [loading, getData];
};
exports.useDelAxios = useDelAxios;
