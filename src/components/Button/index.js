import React from 'react'
import "./styles.css"

function selectClass(color){
  switch(color){
    case 'primary': return 'btn primary';
    case 'danger': return 'btn danger'
    default: return 'btn'
  }
}

function Button({children, onClick, color, ...rest}) {
  return (
    <button className={selectClass(color)} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button;