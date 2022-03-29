import http from ".";

export function login(data: { username: string; password: string }) {
  return http.post<any, { token: string }>("/admin/login", data);
}

export function updateAbout(id: string, data: Admin) {
  return http.put<any, null>("/admin/" + id, data);
}

export function getAbout() {
  return http.get<any, About>("/admin/about");
}
