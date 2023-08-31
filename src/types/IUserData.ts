export type TUserSex = 'муж' | 'жен'

export interface IUserData {
    id: number;
    firstName: string;
    secondName: string;
    lastName: string;
    age: number;
    sex: TUserSex;
    avatarUrl: string;
}


