import React from 'react'
import { Link } from 'gatsby';
import { ThemeSwitch } from '../theme-switch';

import './index.scss'

export const Header = ({ title, location, rootPath }) => {

    const isRoot = location.pathname === rootPath;

    return (
        <div className="top">
            {
                isRoot && (
                    <div>
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
    )
}