import http from ".";

export function getArticleList(params: ArticleSearchParams) {
  return http.get<any, ListData<Article>>("/article", {
    params,
  });
}

export function destroyArticle(id: string) {
  return http.delete<any, Article>(`/article/${id}`);
}

export function getArticleById(id: string) {
  return http.get<any, Article>(`/article/${id}`);
}

export function updateArticle(id: string, data: Article) {
  return http.put<any, Article>(`/article/${id}`, data);
}

export function createArticle(data: Article) {
  return http.post<any, Article>(`/article`, data);
}
