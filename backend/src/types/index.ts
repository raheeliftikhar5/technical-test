export interface UserList {
    id: number;
    name: string;
    email: string;
}

export interface DatabaseConnection {
    query: (text: string, params?: any[]) => Promise<any>;
    connect: () => Promise<void>;
    end: () => Promise<void>;
}