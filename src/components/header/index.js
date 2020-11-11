import React from 'react'
import { Link } from 'gatsby';
import { ThemeSwitch } from '../theme-switch';

import './index.scss'

export const Header = ({ title, location, rootPath }) => {

    const isRoot = location.pathname === rootPath;

    return (
        <header>
            <div className="wrapper">
                <div className="top">
                    {
                        isRoot && (
                            <div className="title">
                                <Link to={"/"} className="link">
                                    {title}
                                </Link>
                            </div>
                        )
                    }

                    <div className="switch-mode-container">
                        <ThemeSwitch />
                    </div>
                </div>
            </div>  
        </header>
    )
}