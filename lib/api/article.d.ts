export declare function getArticleList(params: ArticleSearchParams): Promise<ListData<Article>>;
export declare function destroyArticle(id: string): Promise<Article>;
export declare function getArticleById(id: string): Promise<Article>;
export declare function updateArticle(id: string, data: Article): Promise<Article>;
export declare function createArticle(data: Article): Promise<Article>;
