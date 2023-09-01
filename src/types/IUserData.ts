export type TUserSex = 'муж' | 'жен'

export interface IUserData {
    uid: string;
    id: string;
    firstName: string;
    secondName: string;
    lastName: string;
    age: number;
    sex: TUserSex;
    avatarUrl: string;
}


export interface IWithCheckboxUserData extends IUserData {
    checked: boolean;
}