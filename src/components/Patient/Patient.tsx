import { IUserData } from "../../types/IUserData";
import { ageString } from "../../utils";
import { Dropdown } from "../UI/Dropdown";

import classes from './Patient.module.scss';


const Patient = ({ userData }: { userData?: IUserData }): JSX.Element => {
    const { age, sex, firstName, secondName, lastName, avatarUrl } = userData;

    return (
        <div className={classes.patient}>
            <div className={classes.patient__info}>
                <div className={classes.patient__avatar}><img src={avatarUrl} alt="Patient avatar" /></div>
                <div className={classes.patientTextInfo}>
                    <p className={classes.patientTextInfo__name}>{`${firstName} ${secondName} ${lastName}`}</p>
                    <p className={classes.patientTextInfo__extraInfo}>{`${ageString(age)} ${sex}`}</p>
                </div>
            </div>
            <Dropdown items={['Изменить', 'Удалить']} />
        </div>
    )
}

export default Patient; 