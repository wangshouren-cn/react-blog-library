export default function <Data, SearchParams>(api: (search: SearchParams) => Promise<ListData<Data>>, initialSearch?: SearchParams): ListData<Data> & {
    loading: boolean;
    error: any;
    run: () => Promise<void>;
    search: SearchParams;
    setSearchAndRun: (partialSearch: SearchParams) => void;
    setSearch: (partialSearch: SearchParams) => void;
};
