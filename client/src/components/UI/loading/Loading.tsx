import GridLoader from "react-spinners/GridLoader";
import cl from "./Loading.module.css"
import {FC} from 'react'

interface LoadingProps{
  loading: boolean
  size?: number
  color?: string
}

const Loading: FC<LoadingProps> = ({loading=false, size=20, color="#FD2289"}) => {
    if(loading){
        return (
            <div className={cl.loading}>
                <div className={cl.overlay}>
                    <GridLoader
                        color={color}
                        loading={loading}
                        size={size}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>
        );
    }
};

export default Loading;
