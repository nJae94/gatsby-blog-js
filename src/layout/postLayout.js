import React from "react";
import {Header} from '../components/header';

import './index.scss'

const PostLayout = ({ location, title, children }) => {

    return (
    <>
        <Header
            title={title}
            location={location}
        />
        <div style={{marginTop:'5rem'}} >
            <main>{children}</main>
        </div>
    </>
    )
  }
  
  export default PostLayout