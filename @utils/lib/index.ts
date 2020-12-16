export const useReplace = (string: string) => {
    const word = string.replace(/<[^>]*>?/gm, "");

    return word;
};

export const useKtime = () => {
    const timestamp =
        Date.now() + new Date().getTimezoneOffset() * 60000 + 9 * 3600 * 1000;
    return new Date(timestamp);
};
