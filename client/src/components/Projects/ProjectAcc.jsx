import React, {useEffect, useRef, useState} from 'react';
import projectCardStyle from "./scss/projectCard.module.scss";
import {IoEllipsisHorizontal} from "react-icons/io5";
import {Link} from "react-router-dom";

function ProjectAcc({project, containerRef, withMoreBtn, light, setVisible}) {
    let [hidden, setHidden] = useState(true)
    const [disabled, setDisabled] = useState(false)
    let controlBtnRef = useRef(null)

    useEffect(() => {
        if (!disabled && containerRef) {
            containerRef.current.addEventListener("click", handleClickArea, true)
        } else {
            setTimeout(() => setDisabled(false), 300)
        }
    }, [hidden, disabled]);

    let handleClickArea = (e) => {
        if (!controlBtnRef.current.contains(e.target)) {
            setHidden(true)
        } else {
            setHidden(!hidden)
            setDisabled(true)
        }
    }

    return (
        <div className={projectCardStyle.mainInfo}>
            <div className={projectCardStyle.logoBlock}>
                <img src={project.logo} alt='' className={projectCardStyle.logo}/>
            </div>
            <div>
                <div className={projectCardStyle.aboutTitle} style={light ? {color: "#ffffff"} : {}}>
                    <div>{project.name}</div>
                    {withMoreBtn
                        ? <div className={projectCardStyle.btnBlock}>
                            <button ref={controlBtnRef} disabled={disabled}><IoEllipsisHorizontal/></button>
                            <div className={projectCardStyle.controlBtns}
                                 style={hidden ? {display: 'none'} : {display: 'grid'}}>

                                <Link to={`/tasks/${project.id}`}>
                                    <button>Задачи</button>
                                </Link>

                                <button onClick={() => {
                                    setVisible(true)
                                }}>Подробнее
                                </button>

                            </div>
                        </div>
                        : <></>}
                </div>
                <div className={projectCardStyle.aboutShortDesc} style={light ? {color: "#f3f3f3"} : {}}>
                    {project.short_desc}
                </div>
            </div>

        </div>
    );
}

export default ProjectAcc;
