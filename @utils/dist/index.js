"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKtime = exports.useReplace = void 0;
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
