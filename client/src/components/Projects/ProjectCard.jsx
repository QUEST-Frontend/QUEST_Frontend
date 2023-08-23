import React, {useRef, useState} from 'react';
import projectCardStyle from './scss/projectCard.module.scss'
import Tag from "./Tag.tsx";
import ProjectModal from "./ProjectModal.jsx";
import ProjectAcc from "./ProjectAcc.jsx";
import Modal from "components/UI/modal/Modal.jsx";

function ProjectCard(props) {
    const [visible, setVisible] = useState(false)
    return (
        <div className={projectCardStyle.container}>
            <Modal children={<ProjectModal project={props.project}/>} visible={visible} setVisible={setVisible}/>

            <div className={projectCardStyle.imgBlock}>
                <img src={props.project.pic} alt='' className={projectCardStyle.img}/>
            </div>
            <ProjectAcc project={props.project}
                        containerRef={ props.containerRef }
                        withMoreBtn={true} light={false} setVisible={setVisible}/>

            <div className={projectCardStyle.tagContainer}>
                {props.project.tags.map((t)=>{
                    return <Tag text={t} color={'blue'}/>
                })
                }
            </div>
        </div>
    );
}

export default ProjectCard;
