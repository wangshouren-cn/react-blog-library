export declare function getCommentList(params?: CommentSearchParams): Promise<ListData<Comment>>;
export declare function destroyComment(id: string): Promise<ListData<Comment>>;
export declare function updateComment(id: string, data: Comment): Promise<Comment>;
