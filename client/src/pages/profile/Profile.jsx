import profilePicture from 'assets/profile-picture.png'
import classes from './profile.module.scss'
import ProgressBar from 'components/UI/progress-bar/ProgressBar.jsx';
import {useSelector} from "react-redux";

const Profile = () => {
    const {userInfo} = useSelector(state => state.auth);
    const name = 'Alisher Zhumadil';
    const position = 'Python developer'
    const level = 17;
    const percentage = 30;
    const solved = 110;

    return(
        <div className={classes.container}>
            <img src={profilePicture} className={classes['profile-picture']} />
            <span className={classes.name}>{name}</span>
            <span className={classes.position}>{position}</span>
            <div className={classes.progress}>
                <div className={classes['level-progress']}>
                    <span className={classes.level}>{level}</span>
                    <span className={classes['level-word']}>Level</span>
                    <ProgressBar width={300} percentage={percentage}/>
                </div>
                <div className={classes['solved-tasks']}>
                    <span className={classes['solved-tasks-amount']}>{solved}</span>
                    <span className={classes['solved-word']}>Solved</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
