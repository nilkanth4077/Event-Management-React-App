export interface LoginResponse {
    token: string;
    role: string;
    email: string;
}

export interface User {
    id: number;
    email: string;
    role: string;
}

export interface Event {
    id: number;
    name: string;
    date: string;
}