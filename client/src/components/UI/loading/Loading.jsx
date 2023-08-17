import GridLoader from "react-spinners/GridLoader";
import cl from "./Loading.module.css"

const Loading = ({loading=false, size=20, color="#FD2289"}) => {
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
