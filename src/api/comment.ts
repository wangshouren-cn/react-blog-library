import http from ".";

export function getCommentList(params: CommentSearchParams = {}) {
  return http.get<any, ListData<Comment>>("/comment", {
    params,
  });
}

export function destroyComment(id: string) {
  return http.delete<any, ListData<Comment>>("/comment/" + id);
}

export function updateComment(id: string, data: Comment) {
  return http.put<any, Comment>(`/comment/${id}`, data);
}
