import { User } from "src/app/core/types/user";
import { credentials } from "../../auth/data";

export const userData: User = {
    email: credentials.email,
    fullname: 'Vũ Văn Minh',
    avatar: 'assets/images/avatars/1.jpg',
    createdBy: 'system',
    createdDate: new Date(),
    lastModifiedBy: 'system',
    lastModifiedDate: new Date(),
}