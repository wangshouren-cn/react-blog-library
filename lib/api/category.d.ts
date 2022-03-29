export declare function getCategoryList(params?: CategorySearchParams): Promise<ListData<Category>>;
export declare function destroyCategory(id: string): Promise<Category>;
export declare function updateCategory(id: string, data: Category): Promise<Category>;
export declare function createCategory(data: Category): Promise<Category>;
