import { AddressBook } from "src/app/core/services/apps/address-book/address-book.types";

export const addressBooksData: AddressBook[] = [
    {
        id: "847a5a89-840c-4bb5-a702-cde5ce446e6e",
        firstname: "Tuấn Trung",
        lastname: "Trịnh",
        nickname: "QuynhHuong2",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg",
        emails: ["TuanTrung_Trinh5@hotmail.com"],
        phones: [{
            code: 84,
            number: 123456789,
        }],
        address: "Apt. 580",
        city: "Hồ Chí Minh",
        country: {
            code: 84,
            name: "Vietnam",
            shortName: "VN",
            languageCode: "vi",
        },
    },

]