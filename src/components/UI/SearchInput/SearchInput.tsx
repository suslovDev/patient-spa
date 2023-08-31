import Icon from '../Icon/Icon';
import classes from './SearchInput.module.scss';

const SearchInput = () => {
    return (
        <div className={classes.search}>
            <div className={classes.search__icon}><Icon name='search' /></div>
            <input className={classes.search__input} />
            <div className={classes.search__extraIcons}>
                <div className={classes.search__icon}><Icon name='filter' /></div>
                <div className={classes.search__icon}><Icon name='add' /></div>
            </div>
        </div>
    )
}

export default SearchInput;