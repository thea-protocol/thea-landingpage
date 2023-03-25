import React from 'react'

 const Item = ({active=false,title="",...rest}) => {
  const activeClass = active ? "sols-item-active" : ""
  return (
    <button className={'sols-item '+ activeClass} {...rest}>{title}</button>
  )
}

export default Item
