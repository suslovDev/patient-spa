import { useEffect, useRef, useState } from 'react';

import Icon from '../Icon/Icon';

import classes from './Dropdown.module.scss';


const Dropdown = ({ items, onSelect }: { items: string[], onSelect?: (value: string) => void }): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ref = useRef(null);

    const handleClick = (): void => {
        setIsOpen(prev => !prev)
    }


    useEffect(() => {
        if (!ref) return;
        const onBodyClick = (event: any): void=> {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setIsOpen(false);
        };
        document.body.addEventListener('click', onBodyClick);

        const onEscPress = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        document.body.addEventListener('keydown', onEscPress);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
            document.body.removeEventListener('keydown', onEscPress);
        };
    }, []);

    return (
        <div className={classes.dropdown} onClick={handleClick} ref={ref}><Icon name='menu' />
            {isOpen && <div className={classes.dropdown__menu}>
                {items.map(item => (
                    <div onClick={() => onSelect(item)} className={classes.dropdown__menuItem} key={item}>{item}</div>
                ))}
            </div>}
        </div>
    )
}

export default Dropdown
