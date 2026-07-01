export interface Order {
    id: number;
    orderNo: string;
    productName: string;
    amount: number;
    status: string;
    createTime: string;
    customerName: string;
    phone: string;
    address: string;
}
export declare const orders: Order[];
