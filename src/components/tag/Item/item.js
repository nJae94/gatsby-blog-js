import React, { useCallback, useEffect, useRef } from "react"

const Item = ({ title, scrollToCenter, setTags }) => {
  console.log(title)

  const itemRef = useRef(null)

  const handleClick = useCallback(() => {
    scrollToCenter(itemRef)
    setTags(title)
  }, [itemRef.current])

  return title.map((t, i) => (
    <div className="item" ref={itemRef} key={i}>
      <div style={{ width: "100%" }} onClick={handleClick}>
        {t}
      </div>
    </div>
  ))
}

export default Item
