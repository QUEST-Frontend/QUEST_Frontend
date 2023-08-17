import React, {useState} from 'react';
import cl from "./NotAuth.module.scss"
import {Link} from "react-router-dom";

function NotAuth(props) {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className={cl.notAuth}>
            <h1>Вы не авторизованы</h1>
            <Link to={"/login"}><button className={cl.signinBtn}>Войти в систему</button></Link>
        </div>
    );
}

export default NotAuth;
