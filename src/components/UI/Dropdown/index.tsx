import { useState } from 'react';
import Icon from '../Icon/Icon';
import classes from './Dropdown.module.scss';


const Dropdown = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsOpen(prev => !prev)
    }

    const handleEdit = (): void => null;

    const handleRemove = (): void => null;

    return (
        <div className={classes.dropdown} onClick={handleClick}><Icon name='menu' />
            {isOpen && <div className={classes.dropdown__menu}>
                <div onClick={handleEdit} className={classes.dropdown__menuItem}>Изменить</div>
                <div onClick={handleRemove} className={classes.dropdown__menuItem}>Удалить</div>
            </div>}
        </div>
    )
}

export default Dropdown

//добавить color
//вычистить стили
//сверстать все компоненты (включая кастомный чекбокс)
//записи сверстать семантично!!! (article или что там еще)
//подготовить моки
//подумать что там с навигацией
//решить нужен ли Redux
//собрать весь интерфейс
//проверить сборку
//настроить линтер или prettier чтоб все по красоте