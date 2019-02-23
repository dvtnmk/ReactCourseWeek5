import React from 'react'
import {Button as AntButton} from 'antd'
import "./styles.css"

function Button({children, onClick, color, ...rest}) {
  return (
    <AntButton onClick={onClick} {...rest}>
      {children}
    </AntButton>
  )
}

export default Button;