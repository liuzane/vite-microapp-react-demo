export interface Product {
    id: number;
    productNo: string;
    name: string;
    price: number;
    stock: number;
    sales: number;
    category: string;
    status: string;
    supplier: string;
    createTime: string;
    description: string;
}
export declare const products: Product[];
