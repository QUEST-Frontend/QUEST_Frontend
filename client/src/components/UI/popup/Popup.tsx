import {FC, ReactNode, useEffect, useRef} from 'react'
import cl from './Popup.module.scss'

interface PopupProps {
  isOpened: boolean
  setIsOpened: (arg: boolean) => void
  children: ReactNode
}

const Popup: FC<PopupProps> = ({isOpened, setIsOpened, children}) => {
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  function handleClickOutside(e: any) {
    if(!popupRef.current?.contains(e.target)){
      setIsOpened(false)
    }
  }

  return (
      <div className={cl.popup} style={{display: !isOpened ? 'none' : 'flex'}} ref={popupRef}>
        {children}
      </div>
  )
}

export default Popup
