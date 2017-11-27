import React, { Component } from 'react'

function Button({ children, primary=false, magic=false, href }) {
  // props refactored/destructured to {title, primary, magic}
  // default value can be specified e.g. =false

  let className = 'btn'

  if (primary) {
    className += ' btn--primary'
  }

  if (magic) {
    className += ' btn--rainbow'
  }
  
  //const renderLink = href != null
  const renderLink = !!href
  const Component = renderLink ? 'a' : 'button'
  // Do this
  return (
    <Component className={ className } >
      { children }
    </Component>
  )
  // Instead of doing this
  // if (renderLink) {
  //   return (
  //     <a href={ href } className={ className }>
  //       { children }
  //     </a>
  //   )
  // }
  // else {
  //   return (
  //     <button className={ className } >
  //       { children }
  //     </button>
  //   )
  // }
}

export default Button