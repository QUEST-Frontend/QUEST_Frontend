import {type ButtonHTMLAttributes, FC, type ReactNode, useState} from 'react'
import {motion} from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<any>{
  className?: string
  children: ReactNode
  textColor: string
  bgColor: string
  style?: any,
}

const Button: FC<ButtonProps> = ({className, bgColor, textColor, children, style, ...props }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const buttonStyle = {
    backgroundColor: isHovering ? textColor : bgColor,
    color: isHovering ? "white" : textColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.1s ease-out, color 0.1s ease-out',
    ...style,
  }


  return (
      <motion.div
          whileHover={{scale: 1.08}}
          transition={{type: 'spring', stiffness: 200}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        <div style={buttonStyle} className={className} {...props}>
          {children}
        </div>
      </motion.div>
  )
}

export default Button
