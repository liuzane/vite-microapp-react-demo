export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    role: string;
    roleId: number;
    createTime: string;
    lastLoginTime: string;
}
export declare const users: User[];
