import React from 'react'
import IconClose from '@assets/vectors/nav/menu-close.svg'
import IconOpen from '@assets/vectors/nav/menu-open.svg'

function ToggleMenu(props) {
  return (
    <div 
    onClick={e => props.handle(props.isOpen)} 
    onKeyDown={e => props.handle(props.isOpen)} 
    role="button" tabIndex="0"
    className="flex text-white cursor-pointer">
      {props.isOpen ? <IconClose /> : <IconOpen /> }
      <span className="ml-2">{props.pageName}</span>
    </div>
  )
}

export default ToggleMenu
