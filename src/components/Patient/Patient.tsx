import { IUserData } from "../../types/IUserData";
import { Utils } from "../../utils";
import classes from './Patient.module.scss';
import Dropdown from "../UI/Dropdown";


const Patient = ({ userData }: { userData?: IUserData }): JSX.Element => {
    const { age, sex, firstName, secondName, lastName, avatarUrl } = userData;

    return (
        <div className={classes.patient}>
            <div className={classes.patient__info}>
                <div className={classes.patient__avatar}><img src={avatarUrl} alt="Patient avatar" /></div>
                <div className={classes.patientTextInfo}>
                    <p className={classes.patientTextInfo__name}>{`${firstName} ${secondName} ${lastName}`}</p>
                    <p className={classes.patientTextInfo__extraInfo}>{`${Utils.ageString(age)} ${sex}`}</p>
                </div>
            </div>
            <Dropdown />
        </div>
    )
}

export default Patient; 