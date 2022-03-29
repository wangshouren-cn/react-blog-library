import http from ".";

export function getTagList(params: TagSearchParams = {}) {
  return http.get<any, ListData<Tag>>("/tag", {
    params,
  });
}

export function destroyTag(id: string) {
  return http.delete<any, Tag>(`/tag/${id}`);
}

export function updateTag(id: string, data: Tag) {
  return http.put<any, Tag>(`/tag/${id}`, data);
}

export function createTag(data: Tag) {
  return http.post<any, Tag>(`/tag`, data);
}
