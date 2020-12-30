import React, { useEffect, useState } from "react"
import { Header } from "../components/header"

import "./index.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const [show, setShow] = useState(true)

  const [prev, setPrev] = useState(0)

  useEffect(() => {
    const Scroll = () => {
      const curScrollY = window.pageYOffset

      if (curScrollY > 80 && prev < curScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
    }

    document.addEventListener("scroll", Scroll)

    return () => {
      document.removeEventListener("scroll", Scroll)
    }
  }, [prev])

  return (
    <React.Fragment>
      <Header
        title={title}
        location={location}
        rootPath={rootPath}
        show={show}
      />

      <div className={"global-wrapper"} style={{ marginTop: "5rem" }}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
