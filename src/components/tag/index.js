import React, { useCallback, useRef } from "react"
import Item from './Item/item';
import "./index.scss"

const Tag = ({tags, setTags}) => {

  const tagRef = useRef(null)

  const scrollToCenter = useCallback(

    itemRef => {
      const { offsetWidth: tabWidth } = itemRef.current
      const { scrollLeft, offsetWidth: containerWidth } = tagRef.current
      const tabLeft = itemRef.current.getBoundingClientRect().left
      const containerLeft = tagRef.current.getBoundingClientRect().left
      const refineLeft = tabLeft - containerLeft
      const targetScollX =
        scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2

      tagRef.current.scroll({ left: targetScollX, top: 0, behavior: "smooth" });
    },
    [tagRef]
  )

  return (
    <section className="tag-container" ref={tagRef}>
      <>
        {tags.map((i, index) => (
          <Item key={index} title={i} scrollToCenter={scrollToCenter} setTags={setTags} />
        ))}
      </>
    </section>
  )
}

export default Tag
