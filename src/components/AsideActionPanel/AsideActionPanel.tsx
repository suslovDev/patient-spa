import { useState } from 'react';
import Button from '../UI/AddButton/Button';
import Counter from '../UI/Counter';
import classes from './AsideActionPanel.module.scss';
import Checkbox from '../UI/Checkbox/Checkbox';

const AsideActionPanel = ({ toggleCheckbox, onEditMode }: { toggleCheckbox?: () => void, onEditMode?: (value: boolean) => void }): JSX.Element => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const handleOnEdit = () => {
        setIsEditMode(true);
        onEditMode(true);
    }

    const handleOffEdit = () => {
        setIsEditMode(false);
        onEditMode(false);
    }

    const renderEditPanel = (): JSX.Element => {
        return (
            <div className={classes.panel}>
                <div className={classes.panel__count}><Checkbox /><Button>Все</Button><Counter count={213} isActive={true} /></div>
                <div className={classes.panel__actions}><Button>Действия</Button>
                    <Button handleClick={handleOffEdit}>Отменить</Button></div>
            </div>)
    }

    const renderStaticPanel = (): JSX.Element => {
        return (
            <div className={classes.panel}>
                <div className={classes.panel__count}><Counter count={213} /></div>
                <div className={classes.panel__actions}><Button handleClick={handleOnEdit}>Выбрать</Button></div>
            </div>)
    }


    return (
        isEditMode ? renderEditPanel() : renderStaticPanel()
    )
}

export default AsideActionPanel;