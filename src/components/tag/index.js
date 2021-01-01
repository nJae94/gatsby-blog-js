import React, { useCallback, useEffect, useRef } from "react"
import "./index.scss"

const Tag = () => {
  const tagRef = useRef(null)
  const itemRef = useRef(null)

  const array = [
    "react",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ]

  const scrollToCenter = useCallback(
    itemRef => {
      const { offsetWidth: tabWidth } = itemRef.current
      const { scrollLeft, offsetWidth: containerWidth } = tagRef.current
      const tabLeft = itemRef.current.getBoundingClientRect().left
      const containerLeft = tagRef.current.getBoundingClientRect().left
      const refineLeft = tabLeft - containerLeft
      const targetScollX =
        scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2

      tagRef.current.scroll({ left: targetScollX, top: 0, behavior: "smooth" })
    },
    [tagRef]
  )

  const handleClick = useCallback(() => {
    console.log(itemRef)
    scrollToCenter(itemRef)
  })

  useEffect(() => {})

  return (
    <section className="tag-container" ref={tagRef}>
      <>
        {array.map((i, index) => (
          <div className={`item ${index}`} ref={itemRef} onClick={handleClick}>
            {i}
          </div>
        ))}
      </>
    </section>
  )
}

export default Tag
