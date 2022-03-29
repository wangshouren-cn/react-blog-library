export default function <Data>(api: (...args: any[]) => Promise<Data>): {
    loading: boolean;
    run: (...args: any[]) => Promise<Data>;
    data: Data;
    error: any;
};
