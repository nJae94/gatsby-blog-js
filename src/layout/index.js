import React from "react";
import {Header} from '../components/header';

import './index.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  console.log(title);
  
  return (
    <React.Fragment>
      <Header
        title={title}
        location={location}
        rootPath={rootPath}
      />

      <div className={"global-wrapper"} style={{marginTop:'5rem'}} >
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
