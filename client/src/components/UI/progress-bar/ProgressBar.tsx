import './progress-bar.module.scss';
import {FC} from 'react'

interface ProgressBarProps{
  width: number
  percentage: number
}

const ProgressBar: FC<ProgressBarProps> = ({ width, percentage }) => {
    return (
      <div className="progress-container">
        <progress className="progress-bar" value={percentage} max="100" style={{ width: `${width}px` }}/>
        <span className="percentage">{percentage}%</span>
      </div>
    );
  };

  export default ProgressBar;
