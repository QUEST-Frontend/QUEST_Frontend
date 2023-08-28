import {FC} from 'react'
import {useSelector} from 'react-redux'
import {projectsPendingSelector, projectsSelector} from '../../store/features/project/projectSlice.ts'
import {RingLoader} from 'react-spinners'
import ProjectCard from '../../components/project/ProjectCard'
import cl from './ProjectsPage.module.scss'
import {PageHeader} from 'components/PageHeader/PageHeader.tsx'

const ProjectsPage: FC = () => {
  const projects = useSelector(projectsSelector)
  const pending = useSelector(projectsPendingSelector)

  if(pending){
    return <RingLoader
        color="#FD2289"
        loading={true}
        size={30}
        aria-label="Loading Projects"
        data-testid="projects"
    />
  }

  return (
      <div className={cl.projects}>
        <PageHeader/>
        <div className={cl.projectsGrid}>
          {projects?.map((project, index) =>
                <ProjectCard key={project.id} project={project} index={index}/>)}
        </div>
      </div>
  )
}

export default ProjectsPage;
