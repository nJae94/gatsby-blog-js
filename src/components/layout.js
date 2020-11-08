import React from "react";
import {Header} from '../components/header';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <>
      <Header
        title={title}
        location={location}
        rootPath={rootPath}
      />

      <div className="global-wrapper" >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
