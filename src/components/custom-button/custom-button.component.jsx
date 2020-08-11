import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children, ...otherProps}) => (
  <button
  className={`${
    children=='Sign In' ? '' : 'google-sign-in'
  } custom-button`}
  {...otherProps}
  >
    {children.toUpperCase()}
  </button>
)

export default CustomButton 