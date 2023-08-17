export interface IProject{
    id: number;
    created_at: Date;
    updated_at: Date;
    is_deleted: boolean;
    deleted_at: Date;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date | null;
    deadline: Date | null;
    status: string; //TODO change status format
    created_by_user: number;
    updated_by_user: number | null;
    deleted_by_user: number | null;
    department: number;
}

export interface IUserProjectsRequest {
    token: string;
}
