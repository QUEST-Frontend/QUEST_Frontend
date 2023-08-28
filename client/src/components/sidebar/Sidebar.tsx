import {FC} from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classes from './sidebar.module.scss';
import overviewIcon from '../../assets/navicons/overview.svg';
import calendarIcon from '../../assets/navicons/calendar.svg';
import analyticsIcon from '../../assets/navicons/analytics.svg';
import tasksIcon from '../../assets/navicons/tasks.svg';
import projectsIcon from 'assets/navicons/projects.svg';
import teamsIcon from 'assets/navicons/teams.svg';
import exampleProj from 'assets/navicons/exampleproj.svg';
import logo from 'assets/navicons/logo.svg';
import SidebarLink from '../UI/sidebar-link/SidebarLink.tsx';
import Profile from '../UI/profile/Profile.tsx';
import plusIcon from 'assets/navicons/plus.svg';
import {useSelector} from "react-redux";
import {authUserSelector} from "../../store/features/auth/authSlice.ts";
import {ISidebarLink} from '../../types.ts'
import {projectsPendingSelector, projectsSelector} from '../../store/features/project/projectSlice.ts'
import {PulseLoader} from 'react-spinners'

const Sidebar: FC = () => {
  const projects = useSelector(projectsSelector)
  const pending = useSelector(projectsPendingSelector)
  const sideLinks: ISidebarLink[] = [
    { name: 'Overview', icon: overviewIcon, path: '/overview' },
    { name: 'Calendar', icon: calendarIcon, path: '/calendar' },
    { name: 'Analytics', icon: analyticsIcon, path: '/analytics' },
    { name: 'Tasks', icon: tasksIcon, path: '/tasks' },
    { name: 'Projects', icon: projectsIcon, path: '/projects' },
    { name: 'Teams', icon: teamsIcon, path: '/teams' },
  ];
  const user = useSelector(authUserSelector)
  // const exampleProjects = ['Salam', 'Some Services', 'dsak dkas', 'Project', 'Project',];
  const location = useLocation();
  const currentPath = location.pathname;

  if(currentPath==="/404"){
    return <></>
  }
  else {
    return (
        <div className={classes.container}>
          <div className={classes.sidebar}>
            <Link className={classes['logo-container']}
                  to={'/'}>
              <img src={logo} alt='spas' className={classes['side-logo']} />
              <span className={`${classes['side-logo-name']} ${classes['medium']}`}>SPAS</span>
            </Link>
            <div className={classes['side-links-container']}>
              {sideLinks.map((link, index) => (
                  <SidebarLink link={link} index={index} key={index} />
              ))}
            </div>
            <div className={classes.projdiv}>
              <div className={classes['side-project-container']}>
                <div className={classes['project-text-and-icon']}>
                  <span className={classes.projectstext}>PROJECTS</span>
                  <img src={plusIcon} className={classes['plus-icon']}/>
                </div>
                <div className={classes['side-project-container-baby']}>
                  {pending ? <PulseLoader
                      color="rgb(0, 184, 132)"
                      loading={true}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                  />
                      :
                    projects?.slice(0, 5).map((project, index) => (
                       <Link
                          className={`${classes['example-project']} ${project.id.toString() === currentPath ? classes['active'] : ''}`}
                          key={index}
                          to={`/projects/${project.id}`} // Путь для каждого проекта
                       >
                        <img src={exampleProj} alt={project.name} className={classes['project-icon']} />
                        <span className={classes['project-name']}>{project.name}</span>
                       </Link>
                    ))
                  }
                </div>
              </div>
              <Profile name={user?.first_name + " " + user?.last_name} src={user?.user.profile_image} />
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
    );
  }
};

export default Sidebar;
