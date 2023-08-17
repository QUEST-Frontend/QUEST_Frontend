
import settings from '../../../assets/navicons/settingbutton.svg';
import pfp from '../../../assets/navicons/pfp.svg';
import { Link } from 'react-router-dom';
import classes from './profile.module.scss';


const Profile = ({name}) => {
    return (
        <Link to={'/profile'} className={classes.profile}>
            <div className={classes.profileInfo}>
                <img src={pfp} className={classes.pfp} />
                <span className={classes.name}>{name}</span>
            </div>
            <Link to={'/settings'} className={classes.settings}>
                <img src={settings} />
            </Link>
        </Link>
    );
}
export default Profile;
