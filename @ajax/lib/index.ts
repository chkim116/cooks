import Axios from "axios";
import { useEffect, useState } from "react";

function isOwnOptions<T>(option: T): boolean | undefined {
    if (option !== undefined) {
        return true;
    }
}

export const usePostAxios = <T, K>(url: string, data: T, option?: K) => {
    const [getData, setGetData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const post = async () => {
            setLoading(true);
            try {
                if (isOwnOptions(option)) {
                    await Axios.post(url, data, option).then((res) =>
                        setGetData(res.data)
                    );
                }
                await Axios.post(url, data).then((res) => setGetData(res.data));
                setLoading(false);
            } catch (err) {
                console.log(err);
                setGetData(err.message);
                setLoading(false);
            }
        };
        post();
    }, [url, option]);

    return [loading, getData];
};

export const useGetAxios = <T>(url: string, option?: T) => {
    const [getData, setGetData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            try {
                if (isOwnOptions(option)) {
                    await Axios.get(url, option).then((res) =>
                        setGetData(res.data)
                    );
                }
                await Axios.get(url).then((res) => setGetData(res.data));
                setLoading(false);
            } catch (err) {
                console.log(err);
                setGetData(err.message);
                setLoading(false);
            }
        };
        get();
    }, [url, option]);

    return [loading, getData];
};

export const useUpAxios = <T, K>(url: string, data: T, option?: K) => {
    const [getData, setGetData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const post = async () => {
            setLoading(true);
            try {
                if (isOwnOptions(option)) {
                    await Axios.put(url, data, option).then((res) =>
                        setGetData(res.data)
                    );
                }
                await Axios.put(url, data).then((res) => setGetData(res.data));
                setLoading(false);
            } catch (err) {
                console.log(err);
                setGetData(err.message);
                setLoading(false);
            }
        };
        post();
    }, [url, option]);

    return [loading, getData];
};

export const useDelAxios = <T>(url: string, option?: T) => {
    const [getData, setGetData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const del = async () => {
            setLoading(true);
            try {
                if (isOwnOptions(option)) {
                    await Axios.delete(url, option);
                }
                await Axios.delete(url);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setGetData(err.message);
                setLoading(false);
            }
        };
        del();
    }, [url, option]);

    return [loading, getData];
};
