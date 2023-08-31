import uniqid from 'uniqid';

import { IUserData } from "../types/IUserData"


export const USERS: IUserData[] = [
    {
        uid: uniqid(),
        id: '1',
        firstName: "Кравцова",
        secondName: "Александра",
        lastName: "Фронтендовна",
        age: 20,
        sex: "жен",
        avatarUrl: "/images/user.mock_1.png"
    },
    {
        uid: uniqid(),
        id: '2',
        firstName: "Рожков",
        secondName: "Денис",
        lastName: "Петрович",
        age: 30,
        sex: "муж",
        avatarUrl: "/images/user.mock_2.png"
    },
    {
        uid: uniqid(),
        id: '3',
        firstName: "Кравцова",
        secondName: "Александра",
        lastName: "Фронтендовна",
        age: 20,
        sex: "жен",
        avatarUrl: "/images/user.mock_3.png"
    },
    {
        uid: uniqid(),
        id: '4',
        firstName: "Диброва",
        secondName: "Алевтина",
        lastName: "Реактовна",
        age: 30,
        sex: "жен",
        avatarUrl: "/images/user.mock_4.png"
    },
    {
        uid: uniqid(),
        id: '5',
        firstName: "Иванов",
        secondName: "Дмитрий",
        lastName: "Вебпакович",
        age: 25,
        sex: "муж",
        avatarUrl: "/images/user.mock_5.png"
    },
    {
        uid: uniqid(),
        id: '6',
        firstName: "Суслов",
        secondName: "Александр",
        lastName: "Юрьевич",
        age: 35,
        sex: "муж",
        avatarUrl: "/images/user.mock_6.jpg"
    },
    {
        uid: uniqid(),
        id: '7',
        firstName: "Форс",
        secondName: "Александр",
        lastName: "Тайпскриптович",
        age: 30,
        sex: "муж",
        avatarUrl: "/images/user.mock_7.png"
    },
    {
        uid: uniqid(),
        id: '8',
        firstName: "Ахмедов",
        secondName: "Артур",
        lastName: "Джаваскриптович",
        age: 40,
        sex: "муж",
        avatarUrl: "/images/user.mock_8.png"
    },
    {
        uid: uniqid(),
        id: '9',
        firstName: "Блажевич",
        secondName: "Игорь",
        lastName: "Бэмович",
        age: 55,
        sex: "муж",
        avatarUrl: "/images/user.mock_9.png"
    },
    {
        uid: uniqid(),
        id: '10',
        firstName: "Валиева",
        secondName: "Руфина",
        lastName: "Сиэсэсовна",
        age: 20,
        sex: "жен",
        avatarUrl: "/images/user.mock_10.png"
    },
    {
        uid: uniqid(),
        id: '11',
        firstName: "Волошина",
        secondName: "Виктория",
        lastName: "Редаксовна",
        age: 28,
        sex: "жен",
        avatarUrl: "/images/user.mock_11.png"
    },
    {
        uid: uniqid(),
        id: '12',
        firstName: "Волошина",
        secondName: "Виктория",
        lastName: "Промисовна",
        age: 36,
        sex: "жен",
        avatarUrl: "/images/user.mock_12.png"
    },
]