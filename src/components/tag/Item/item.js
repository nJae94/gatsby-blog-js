import React, { useCallback, useEffect, useRef } from 'react'

const Item = ({title, scrollToCenter, setTags}) => {

  const itemRef = useRef(null)

  const handleClick = useCallback(() => {
    scrollToCenter(itemRef);
    setTags(title)
  },[itemRef.current])


  return (
    <div className="item" ref={itemRef} >
      <div style={{width:'100%'}} onClick={handleClick}>{title}</div>
    </div>
  )
}

export default Item
