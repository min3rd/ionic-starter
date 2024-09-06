import { User } from "src/app/core/services/user/user";
import { adminCredential } from "../../auth/data";

export const userData: User = {
    id: '8d12fa2c-6057-4f40-97b4-c207a07a8b6e',
    email: adminCredential.email,
    fullname: 'Vũ Văn Minh',
    avatar: 'assets/images/avatars/1.jpg',
    phone: '0123456789',
    address: 'Hà Nội',
    city: 'Hà Nội',
    country: 'Việt Nam',
    createdBy: 'system',
    createdDate: new Date(),
    lastModifiedBy: 'system',
    lastModifiedDate: new Date(),
}