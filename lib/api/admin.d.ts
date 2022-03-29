export declare function login(data: {
    username: string;
    password: string;
}): Promise<{
    token: string;
}>;
export declare function updateAbout(id: string, data: Admin): Promise<null>;
export declare function getAbout(): Promise<About>;
