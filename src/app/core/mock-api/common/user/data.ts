import { User } from "src/app/core/services/user/user";
import { credentials } from "../../auth/data";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";

export const userData: User = {
    id: MockApiUtils.guid(),
    email: credentials.email,
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