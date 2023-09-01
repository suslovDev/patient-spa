import { Link } from 'react-router-dom';

export const HomePage = (): JSX.Element => {
    return (
        <>
            <Link to='/clients'><div style={{ fontSize: '30px', display: 'inline-block', padding: '30px', borderRadius: '10px', backgroundColor: "yellow", cursor: "pointer" }}>Посмотреть работу</div></Link>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <br />
                Потрачено часов: 18
                <br />
                <br />
                1. Настроен Webpack ( для работы с React, Typescript, Sass. Настроен esLint )
                <br />
                2. Реализован роутинг. Так же было принято решение использовать вложенные роуты (для перехода по табам на странице пациента)
                <br />
                3. Сделана файловая база с моками
                <br />
                4. Выполнена верстка компонентов
                <br />
                5. Описана основная логика поведения (навигация, чекбоксы, появление/скрытие меню).
            </div >
        </>
    )
}