import http from ".";

export function getCategoryList(params: CategorySearchParams = {}) {
  return http.get<any, ListData<Category>>("/category", {
    params,
  });
}

export function destroyCategory(id: string) {
  return http.delete<any, Category>(`/category/${id}`);
}

export function updateCategory(id: string, data: Category) {
  return http.put<any, Category>(`/category/${id}`, data);
}

export function createCategory(data: Category) {
  return http.post<any, Category>(`/category`, data);
}
