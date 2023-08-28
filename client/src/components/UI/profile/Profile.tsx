import {FC} from 'react'
import settings from '../../../assets/navicons/settingbutton.svg';
import { Link } from 'react-router-dom';
import classes from './profile.module.scss';

interface ProfileProps{
  name: string
  src: string
}

const Profile: FC<ProfileProps> = ({name, src}) => {
    return (
        <Link to={'/profile'} className={classes.profile}>
            <div className={classes.profileInfo}>
                <img src={src} className={classes.pfp} />
                <span className={classes.name}>{name}</span>
            </div>
            <Link to={'/settings'} className={classes.settings}>
                <img src={settings} />
            </Link>
        </Link>
    );
}
export default Profile;
