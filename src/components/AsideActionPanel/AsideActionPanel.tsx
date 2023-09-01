import { useState } from 'react';

import Button from '../UI/AddButton/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import Counter from '../UI/Counter/Counter';

import classes from './AsideActionPanel.module.scss';

const AsideActionPanel = (
    {
        isAllChecked,
        toggleCheckbox,
        onEditMode,
        checkedCount
    }: {
        isAllChecked?: boolean,
        toggleCheckbox?: () => void,
        onEditMode?: (value: boolean) => void
        checkedCount?: number;
    }): JSX.Element => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const handleOnEdit = (): void => {
        setIsEditMode(true);
        onEditMode(true);
    }

    const handleOffEdit = (): void => {
        setIsEditMode(false);
        onEditMode(false);
    }

    const renderEditPanel = (): JSX.Element => {


        return (
            <div className={classes.panel}>
                <div className={classes.panel__count}><Checkbox checked={isAllChecked} onSetChecked={toggleCheckbox} />
                    <Button>Все</Button>
                    <Counter count={checkedCount} isActive={true} />
                </div>
                <div className={classes.panel__actions}>
                    <Button>Действия</Button>
                    <Button handleClick={handleOffEdit}>Отменить</Button>
                </div>
            </div>)
    }

    const renderStaticPanel = (): JSX.Element => {
        return (
            <div className={classes.panel}>
                <div className={classes.panel__count}><Counter count={checkedCount} /></div>
                <div className={classes.panel__actions}><Button handleClick={handleOnEdit}>Выбрать</Button></div>
            </div>)
    }


    return (
        isEditMode ? renderEditPanel() : renderStaticPanel()
    )
}

export default AsideActionPanel;