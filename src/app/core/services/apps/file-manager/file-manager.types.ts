export interface Item {
    id?: string;
    folderId?: string | any;
    name?: string;
    createdBy?: string;
    createdAt?: string;
    modifiedAt?: string;
    size?: string;
    type?: string | 'folder';
    contents?: string | null;
    description?: string | null;
}
