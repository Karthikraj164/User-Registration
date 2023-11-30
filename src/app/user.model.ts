export interface User {
    userName: string;
    email: string;
    address: UserAddress[];
}

export interface UserAddress {
    city: string;
    state: string;
    pincode: number;
}