export declare function getTagList(params?: TagSearchParams): Promise<ListData<Tag>>;
export declare function destroyTag(id: string): Promise<Tag>;
export declare function updateTag(id: string, data: Tag): Promise<Tag>;
export declare function createTag(data: Tag): Promise<Tag>;
