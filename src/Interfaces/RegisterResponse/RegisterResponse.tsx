interface Authority {
    authority: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    enabled: boolean;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;
    username: string;
    authorities: Authority[];
}

export interface RegisterResponse {
    statusCode: number;
    message: string;
    user: User;
}
