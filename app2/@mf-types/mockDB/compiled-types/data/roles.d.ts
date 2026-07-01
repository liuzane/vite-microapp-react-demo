export interface Role {
    id: number;
    name: string;
    code: string;
    status: string;
    userCount: number;
    createTime: string;
    description: string;
}
export declare const roles: Role[];
